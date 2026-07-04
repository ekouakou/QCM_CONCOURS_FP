import { writeFileSync, readFileSync, readdirSync, existsSync } from 'fs';
import path from 'path';

// Chargement des variables d'environnement (API Key)
try {
  process.loadEnvFile();
} catch (e) {
  try {
    process.loadEnvFile('../.env');
  } catch (e2) {
    try {
      process.loadEnvFile('../../.env');
    } catch (e3) {
      try {
        process.loadEnvFile('../../../.env');
      } catch (e4) { }
    }
  }
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Erreur : la variable GEMINI_API_KEY n'est pas définie dans le fichier .env");
  process.exit(1);
}

// Le dossier cible passé en argument (ou par défaut)
const targetDir = process.argv[2] || path.join(process.cwd(), '../ia');

if (!existsSync(targetDir)) {
  console.error(`Le dossier ${targetDir} n'existe pas.`);
  process.exit(1);
}

const SYSTEM_PROMPT = `Agis comme un formateur senior, un examinateur de certification et un expert pédagogique.
L'objectif n'est pas seulement de répondre au QCM mais de transformer chaque question en mini-cours complet de niveau certification professionnelle (800 à 1500 mots).

Pour la question fournie, tu dois générer une explication détaillée développant les concepts théoriques, les cas d'usage, les bonnes pratiques DevOps/Cloud, et les erreurs courantes.

IMPORTANT : Tu dois renvoyer UNIQUEMENT un objet JSON valide (sans blocs markdown autour) contenant exactement les propriétés suivantes :
- "explanation": Un texte HTML formatté (avec des paragraphes <p>, des listes, et des balises <strong>) contenant ton explication très détaillée (architecture, concepts, cas concrets, bonnes pratiques, erreurs de débutant).
- "wrongAnalysis": Un tableau d'objets { "l": "lettre du choix", "t": "Analyse très précise expliquant pourquoi ce choix est faux et quel est le piège." } pour TOUTES les mauresponses.
- "examiner": Une phrase ou un court paragraphe expliquant ce que cherche à évaluer l'examinateur et les pièges classiques de certification.
- "summary": Un tableau de 3 à 5 phrases clés à retenir absolument pour l'examen.

Ne renvoie que du JSON pur, sans backticks ni preamble.`;

async function enrichQuestion(q) {
  const userMsg = `Question: ${q.q}
Partie: ${q.partie}
Numéro: ${q.num}
Choix: ${JSON.stringify(q.choices)}
Bonne réponse: ${q.correct}
Explication existante: ${q.explanation || "(vide)"}`;

  const model = "gemini-3.1-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: SYSTEM_PROMPT }]
      },
      contents: [
        { role: "user", parts: [{ text: userMsg }] }
      ],
      generationConfig: {
        responseMimeType: "application/json"
      }
    })
  });

  const data = await response.json();

  if (response.status === 429) {
    console.log(`\n[Attention] Limite de requêtes atteinte. Pause de 60 secondes avant de réessayer...`);
    await new Promise(r => setTimeout(r, 60000));
    return enrichQuestion(q);
  }

  if (!response.ok) {
    console.error(`API Error for ${q.partie} ${q.num}:`, data);
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
    console.error(`Parse error for ${q.partie} ${q.num}:`, e.message);
    return null;
  }
}

async function processFile(filePath) {
  console.log(`\n======================================================`);
  console.log(`Traitement du fichier : ${filePath}`);
  console.log(`======================================================`);

  const inputDir = path.dirname(filePath);
  const baseName = path.basename(filePath, '.js');
  const outputFilePath = path.join(inputDir, `${baseName}_final.js`);

  let fileToRead = filePath;
  let isResuming = false;

  // Reprise sur erreur : si le fichier final existe déjà, on lit celui-là pour continuer là où ça s'est arrêté
  if (existsSync(outputFilePath)) {
    fileToRead = outputFilePath;
    isResuming = true;
    console.log(`Fichier _final.js détecté. Reprise du traitement pour les questions non enrichies...`);
  }

  let QCM = [];
  try {
    const textContent = readFileSync(fileToRead, 'utf8');
    // On nettoie la déclaration de constante pour parser le JSON
    QCM = JSON.parse(textContent.replace(/^const\s+[A-Za-z0-9_]+\s*=\s*/, '').replace(/;\s*$/, ''));
  } catch (e) {
    console.error(`Erreur de lecture/parsing de ${fileToRead}. Assurez-vous que le format est valide. Fichier ignoré.`);
    return;
  }

  const enriched = [];
  let enrichedCount = 0;

  for (let i = 0; i < QCM.length; i++) {
    const q = QCM[i];

    // Si la question a déjà un champ examiner, on considère qu'elle est déjà enrichie
    if (q.examiner && q.examiner.trim() !== "") {
      console.log(`[${i + 1}/${QCM.length}] ${q.num} déjà enrichi, on passe...`);
      enriched.push(q);
      continue;
    }

    console.log(`[${i + 1}/${QCM.length}] Enrichissement en cours de la question ${q.num}...`);

    const result = await enrichQuestion(q);

    if (result) {
      enriched.push({
        ...q,
        explanation: result.explanation || q.explanation,
        wrongAnalysis: result.wrongAnalysis || q.wrongAnalysis,
        examiner: result.examiner || q.examiner,
        summary: result.summary || q.summary
      });
      enrichedCount++;
    } else {
      enriched.push(q); // On garde l'originale en cas d'erreur API
    }

    // SAUVEGARDE PROGRESSIVE : À chaque question, on sauvegarde le fichier entier
    // Cela permet de couper le script à tout moment et de reprendre plus tard
    const currentFullArray = enriched.concat(QCM.slice(i + 1));
    const output = `const QCM = ${JSON.stringify(currentFullArray, null, 2)};\n`;
    writeFileSync(outputFilePath, output, 'utf8');

    // Pause de 15 secondes pour éviter le rate limit de Gemini (HTTP 429)
    await new Promise(r => setTimeout(r, 15000));
  }

  console.log(`\n✅ Fichier terminé ! ${enrichedCount} nouvelles questions enrichies.`);
  console.log(`Fichier sauvegardé : ${outputFilePath}`);
}

async function main() {
  const files = readdirSync(targetDir);
  // On filtre pour ne prendre que les .js d'origine (et ignorer les _final.js)
  const jsFiles = files.filter(f => f.endsWith('.js') && !f.endsWith('_final.js'));

  if (jsFiles.length === 0) {
    console.log(`Aucun fichier .js à traiter dans ${targetDir}`);
    return;
  }

  console.log(`Trouvé ${jsFiles.length} fichiers à traiter dans ${targetDir}`);

  // On boucle sur tous les fichiers du dossier
  for (const file of jsFiles) {
    const fullPath = path.join(targetDir, file);
    await processFile(fullPath);
  }

  console.log(`\n🎉 MISSION ACCOMPLIE : Tous les fichiers du dossier ont été traités !`);
}

main().catch(console.error);
