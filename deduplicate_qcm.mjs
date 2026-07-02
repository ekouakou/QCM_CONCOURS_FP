import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

try {
  process.loadEnvFile();
} catch (e) {
  // Ignorer l'erreur si le fichier .env n'existe pas
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error("Veuillez fournir le chemin vers le fichier à dédupliquer.");
  console.error("Exemple : node deduplicate_qcm.mjs ./JSON_TRANSFORMER/qcm_scrum-agile/qcm_qcm-scrum-agile_enriched.js");
  process.exit(1);
}

const inputFilePath = args[0];
const inputDir = path.dirname(inputFilePath);
// Nettoyer l'extension pour le nom
const pureBaseName = path.basename(inputFilePath, path.extname(inputFilePath));
const outputFilePath = path.join(inputDir, `${pureBaseName}_deduplicated.js`);

let QCM = [];
try {
  const textContent = readFileSync(inputFilePath, 'utf8');
  if (inputFilePath.endsWith('.js')) {
    QCM = JSON.parse(textContent.replace(/^const QCM = /, '').replace(/;\s*$/, ''));
  } else {
    QCM = JSON.parse(textContent);
  }
} catch (e) {
  console.error(`Erreur de lecture ou de parsing de ${inputFilePath}.`);
  console.error(e);
  process.exit(1);
}

console.log(`\n=== DÉMARRAGE : ${QCM.length} questions chargées ===`);

// PHASE 1 : Déduplication stricte locale
const strictSeen = new Set();
const strictUniqueQCM = [];

for (const q of QCM) {
  if (!q || !q.q) continue;
  // Normaliser la question (minuscules, enlever les espaces multiples et ponctuation de base)
  const normQ = q.q.toLowerCase().replace(/[\s\W]+/g, ' ').trim();
  if (!strictSeen.has(normQ)) {
    strictSeen.add(normQ);
    strictUniqueQCM.push(q);
  }
}

console.log(`Phase 1 terminée : ${QCM.length - strictUniqueQCM.length} doublons stricts supprimés.`);
console.log(`Il reste ${strictUniqueQCM.length} questions à analyser sémantiquement.`);

// PHASE 2 & 3 : Regroupement et Gemini API
const SYSTEM_PROMPT = `Tu es un expert pédagogique. Je te fournis un tableau JSON de questions de QCM.
Ta mission est double : 
1) Fusionner les questions sémantiquement identiques (qui testent exactement le même concept de la même manière).
2) Assigner un thème précis (ex: "Cryptographie", "Réseau", "DevOps", "Concepts de base") à chaque question conservée.

Règles pour la fusion :
1. Si deux questions sont très similaires (ex: "Qu'est-ce que Git ?" et "C'est quoi Git ?"), fusionne-les en gardant la formulation la plus claire.
2. Si les choix sont similaires mais légèrement différents, garde les plus complets.
3. Conserve TOUJOURS la structure JSON exacte pour chaque question en AJOUTANT une clé "theme" : 
   { "theme": "Nom du thème court", "num", "partie", "q", "choices", "correct", "explanation", "wrongAnalysis", "examiner", "summary" }.
4. Les questions uniques doivent être gardées telles quelles.

IMPORTANT : Tu DOIS renvoyer UNIQUEMENT un tableau JSON valide (pas de markdown \`\`\`json, pas de texte avant ou après).`;

const model = "gemini-3.1-flash-lite";
const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Erreur : la variable GEMINI_API_KEY n'est pas définie dans le fichier .env");
  process.exit(1);
}
const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

async function processBatch(batch, batchIndex, totalBatch) {
  const userMsg = JSON.stringify(batch, null, 2);
  
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents: [{ role: "user", parts: [{ text: userMsg }] }],
        generationConfig: { responseMimeType: "application/json" }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Erreur API pour le lot ${batchIndex}/${totalBatch}:`, errorText);
      return batch; // fallback
    }

    const data = await response.json();
    let resultText = data.candidates[0].content.parts[0].text;
    
    // Nettoyage au cas où
    resultText = resultText.replace(/^```json/, '').replace(/```$/, '').trim();
    return JSON.parse(resultText);
    
  } catch (err) {
    console.error(`Erreur de parsing ou réseau pour le lot ${batchIndex}/${totalBatch}:`, err.message || err);
    return batch; // fallback
  }
}

async function main() {
  const BATCH_SIZE = 30; // Nombre de questions par appel API
  let finalQCM = [];
  
  // On regroupe par partie pour faciliter le tri et le batching
  const partiesMap = {};
  for (const q of strictUniqueQCM) {
    const p = q.partie || "Partie X";
    if (!partiesMap[p]) partiesMap[p] = [];
    partiesMap[p].push(q);
  }

  // Tri alphabétique dans chaque partie pour que les questions similaires se suivent
  for (const p in partiesMap) {
    partiesMap[p].sort((a, b) => a.q.localeCompare(b.q));
  }

  // Aplatir de nouveau
  const sortedQCM = [];
  for (const p in partiesMap) {
    sortedQCM.push(...partiesMap[p]);
  }

  const batches = [];
  for (let i = 0; i < sortedQCM.length; i += BATCH_SIZE) {
    batches.push(sortedQCM.slice(i, i + BATCH_SIZE));
  }

  console.log(`\nDémarrage de la Phase 3 : Appel API Gemini (${batches.length} lots de ~${BATCH_SIZE} questions)`);

  for (let i = 0; i < batches.length; i++) {
    process.stdout.write(`Traitement du lot ${i + 1}/${batches.length}... `);
    const mergedBatch = await processBatch(batches[i], i + 1, batches.length);
    finalQCM.push(...mergedBatch);
    console.log(`OK (retour: ${mergedBatch.length} questions au lieu de ${batches[i].length})`);
    
    // Pause pour éviter le rate limiting (15 sec)
    if (i < batches.length - 1) {
      await new Promise(r => setTimeout(r, 15000));
    }
  }

  console.log(`\nPhase 3 terminée. Total après fusion sémantique : ${finalQCM.length} questions.`);

  // PHASE 3.5 : Tri par thématique et rapprochement
  console.log("Tri par thématique et par rapprochement...");
  // On remplace le champ "partie" par le champ "theme" trouvé par l'IA pour créer des sections logiques
  for (const q of finalQCM) {
    if (q.theme) {
      q.partie = q.theme.charAt(0).toUpperCase() + q.theme.slice(1);
      delete q.theme; // On nettoie la clé temporaire
    } else {
      q.partie = "Concepts Généraux";
    }
  }

  // Tri global : D'abord par Partie (thème), puis par Question (rapprochement alphabétique)
  finalQCM.sort((a, b) => {
    const partA = a.partie || "";
    const partB = b.partie || "";
    if (partA !== partB) {
      return partA.localeCompare(partB);
    }
    return (a.q || "").localeCompare(b.q || "");
  });

  // PHASE 4 : Renumérotation
  console.log("Renumérotation des questions par partie...");
  const countPerPartie = {};
  for (const q of finalQCM) {
    const p = q.partie || "Partie X";
    if (!countPerPartie[p]) countPerPartie[p] = 0;
    countPerPartie[p]++;
    q.num = `Q${countPerPartie[p]}`;
  }

  const output = `const QCM = ${JSON.stringify(finalQCM, null, 2)};`;
  writeFileSync(outputFilePath, output, 'utf8');
  console.log(`\n🎉 Terminé ! Fichier sauvegardé sous : ${outputFilePath}`);
}

main().catch(console.error);
