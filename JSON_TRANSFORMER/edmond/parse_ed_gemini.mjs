import { writeFileSync, readFileSync, existsSync } from 'fs';
import path from 'path';

// Charge les variables d'environnement (Node v20.6.0+)
try {
  process.loadEnvFile('../../.env');
} catch (e) {
  try {
    process.loadEnvFile('../../../.env');
  } catch (err) {}
}

const inputFilePath = './ed.md';
const outputFilePath = './qcm_ed_parsed_enriched.js';
const stateFilePath = './parse_state.json'; // Pour reprendre en cas d'interruption

// Vérification de la clé API
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Erreur : la variable GEMINI_API_KEY n'est pas définie dans le fichier .env");
  process.exit(1);
}

const SYSTEM_PROMPT = `Tu es un expert pédagogique et un assistant d'analyse de texte.
Ton rôle est de lire un extrait de texte brut (markdown ou texte mal formaté) contenant une question de QCM, ses choix et la réponse attendue (souvent marquée par un 'X' ou 'x'), et de le transformer en un objet JSON ultra-structuré et enrichi.

Voici l'extrait de texte contenant la question. Il peut aussi contenir le nom du thème ("partie").

OBJECTIF : 
1. Extraire la question, les choix de réponse (A, B, C, D) et identifier la bonne réponse (marquée par un X).
2. ATTENTION : Les questions et les choix d'origine peuvent être mal formulés, contenir des fautes d'orthographe, de syntaxe ou des erreurs. Tu dois CORRIGER, reformuler et améliorer le texte de la question et des choix pour qu'ils soient clairs, professionnels et sans erreur.
3. Si un thème ("partie") est mentionné au début de l'extrait, utilise-le. Sinon déduis-en un court.
4. Enrichir la question avec une explication détaillée, l'analyse des erreurs, le piège de l'examinateur et un résumé.
5. Si le texte fourni ne contient pas de véritable question ou est inexploitable, tu peux simplement renvoyer l'objet vide {} ou null.

IMPORTANT : Tu dois renvoyer UNIQUEMENT un objet JSON valide contenant EXACTEMENT ces propriétés :
- "num": "Le numéro de la question sous forme Q1, Q2, etc."
- "partie": "Le thème (ex: Développement Informatique, Réseau, Base de données)"
- "q": "Le texte propre de la question"
- "choices": { "A": "...", "B": "...", "C": "...", "D": "..." } (Seulement les choix présents)
- "correct": "La lettre de la bonne réponse (ex: A, B, C ou D)"
- "explanation": "Un texte HTML formatté (avec <p>, <ul>, <strong>) expliquant en détail la bonne réponse et le concept."
- "wrongAnalysis": Un tableau d'objets { "l": "lettre", "t": "Analyse du pourquoi ce choix est faux" } pour les mauvaises réponses.
- "examiner": "Ce que cherche à évaluer l'examinateur"
- "summary": Un tableau de 3 à 5 phrases clés à retenir.

Ne renvoie que du JSON pur. Pas de markdown autour.`;

async function parseAndEnrichChunk(chunkText, defaultPartie) {
  const model = "gemini-3.1-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const userMsg = `Voici l'extrait de texte : \n\n${chunkText}\n\nSi aucun thème n'est clair, utilise le thème par défaut : "${defaultPartie}". Renvoie l'objet JSON complet.`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: [{ role: "user", parts: [{ text: userMsg }] }],
      generationConfig: { responseMimeType: "application/json" }
    })
  });

  const data = await response.json();

  if (response.status === 429) {
    console.log(`\n[Attention] Limite de requêtes atteinte. Pause de 60 secondes...`);
    await new Promise(r => setTimeout(r, 60000));
    return parseAndEnrichChunk(chunkText, defaultPartie); // Réessayer
  }

  if (!response.ok) {
    console.error(`API Error:`, data);
    return null;
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  try {
    const start = text.indexOf('{');
    const end = text.lastIndexOf('}');
    if (start === -1 || end === -1) throw new Error("No JSON object found");
    const clean = text.substring(start, end + 1);
    return JSON.parse(clean);
  } catch (e) {
    console.error(`Parse error for chunk:`, e.message);
    return null;
  }
}

async function main() {
  if (!existsSync(inputFilePath)) {
    console.error("Le fichier ed.md est introuvable.");
    process.exit(1);
  }

  const content = readFileSync(inputFilePath, 'utf8');
  // Séparer le fichier par le délimiteur "# ===="
  const rawChunks = content.split('# ====').map(c => c.trim()).filter(c => c.length > 10);

  console.log(`Trouvé ${rawChunks.length} blocs de questions dans le fichier.`);

  let results = [];
  let startIndex = 0;
  let currentPartie = "Informatique Générale"; // Thème par défaut mis à jour au fil de l'eau

  // Reprendre depuis le dernier état si disponible
  if (existsSync(stateFilePath)) {
    try {
      const state = JSON.parse(readFileSync(stateFilePath, 'utf8'));
      results = state.results || [];
      startIndex = state.lastIndex + 1;
      currentPartie = state.currentPartie || currentPartie;
      console.log(`Reprise à partir de la question ${startIndex + 1} (${results.length} déjà traitées).`);
    } catch (e) {
      console.log("Erreur lors de la lecture du fichier d'état. Démarrage depuis le début.");
    }
  }

  for (let i = startIndex; i < rawChunks.length; i++) {
    const chunk = rawChunks[i];
    
    // Essayer de détecter le changement de thème dans le chunk (souvent au début du fichier ou du bloc)
    const lines = chunk.split('\\n');
    if (lines.length > 0 && lines[0].length > 3 && lines[0].length < 50 && !lines[0].match(/^[0-9]+[\\s\\t]/)) {
      // Si la première ligne ressemble à un titre (pas trop long, pas un numéro de question)
      currentPartie = lines[0].replace(/Questions\\s+Réponses\\s+Corrigé/g, '').trim() || currentPartie;
    }

    console.log(`[${i + 1}/${rawChunks.length}] Traitement de la question (Thème déduit : ${currentPartie})...`);

    const result = await parseAndEnrichChunk(chunk, currentPartie);

    if (result && result.q) {
      if (result.partie) currentPartie = result.partie; // Met à jour avec ce que Gemini a trouvé
      
      // Déduplication : vérifier si la question existe déjà (ignorer les doublons)
      const isDuplicate = results.some(existing => {
        const q1 = existing.q.toLowerCase().replace(/[^a-z0-9]/g, '');
        const q2 = result.q.toLowerCase().replace(/[^a-z0-9]/g, '');
        return q1 === q2 && q1.length > 5;
      });

      if (isDuplicate) {
        console.log(`[Doublon] La question existe déjà, elle est ignorée : "${result.q.substring(0, 30)}..."`);
      } else {
        results.push(result);
      }
    } else {
      console.log(`[Erreur / Ignoré] Impossible de traiter le bloc ${i + 1} (vide ou non pertinent).`);
    }

    // Sauvegarde de l'état en cours
    writeFileSync(stateFilePath, JSON.stringify({
      lastIndex: i,
      results: results,
      currentPartie: currentPartie
    }, null, 2));

    // Pause pour éviter l'erreur 429
    await new Promise(r => setTimeout(r, 15000));
  }

  // A la fin, générer le fichier JS final
  const outputContent = `const QCM = ${JSON.stringify(results, null, 2)};\n`;
  writeFileSync(outputFilePath, outputContent, 'utf8');
  console.log(`\\n🎉 Terminé ! ${results.length} questions parsées et enrichies.`);
  console.log(`Fichier sauvegardé dans : ${outputFilePath}`);
}

main().catch(console.error);
