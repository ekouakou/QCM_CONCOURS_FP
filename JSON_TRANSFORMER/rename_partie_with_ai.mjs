import { readFileSync, writeFileSync, existsSync } from 'fs';
import path from 'path';

// Charge les variables d'environnement
try {
  process.loadEnvFile('../.env');
} catch (e) {
  try {
    process.loadEnvFile('../../.env');
  } catch (err) {}
}

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("Erreur : la variable GEMINI_API_KEY n'est pas définie dans le fichier .env");
  process.exit(1);
}

const inputFile = process.argv[2];

if (!inputFile || !existsSync(inputFile)) {
  console.error("Veuillez fournir le chemin d'un fichier valide en argument.");
  console.error("Exemple : node rename_partie_with_ai.mjs qcm_sur-docker/qcm_qcm-sur-docker_enriched_final.js");
  process.exit(1);
}

async function getThemeFromAI(questionsSample) {
  const model = "gemini-3.1-flash-lite";
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const prompt = `Tu es un expert formateur. Voici un échantillon de questions tirées d'une même section d'un QCM.
Ton objectif est de trouver un titre de thème (ou "partie") très précis et concis (maximum 5 mots) qui décrit cette section.
Par exemple, au lieu de "Partie 1", tu pourrais répondre "Les fondamentaux de Docker", "Administration réseau", ou "Bases de données SQL".

Voici les questions :
${questionsSample.map((q, i) => `${i+1}. ${q}`).join('\n')}

Renvoie UNIQUEMENT le nom du thème, sans guillemets, sans point final, et sans aucun autre texte explicatif.`;

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    })
  });

  if (!response.ok) {
    console.error(`API Error HTTP: ${response.status}`);
    return null;
  }

  const data = await response.json();
  let theme = data.candidates?.[0]?.content?.parts?.[0]?.text || "";
  theme = theme.replace(/\n/g, '').replace(/"/g, '').trim();
  return theme;
}

async function main() {
  console.log(`Lecture du fichier : ${inputFile}`);
  const content = readFileSync(inputFile, 'utf8');
  
  // Extraire le tableau JSON
  const jsonStr = content.replace(/^const\s+[A-Za-z0-9_]+\s*=\s*/, '').replace(/;?\s*$/, '');
  
  let qcmArray = [];
  try {
    qcmArray = JSON.parse(jsonStr);
  } catch (e) {
    console.error("Erreur lors de l'analyse du JSON. Vérifiez que le fichier contient bien un tableau d'objets.", e.message);
    process.exit(1);
  }

  // Grouper par "partie" existante
  const groups = {};
  qcmArray.forEach(q => {
    const p = q.partie || "Sans_Theme";
    if (!groups[p]) groups[p] = [];
    groups[p].push(q);
  });

  console.log(`Trouvé ${Object.keys(groups).length} parties distinctes.`);

  let modifications = 0;

  for (const [oldPartie, questions] of Object.entries(groups)) {
    // Si la partie ressemble déjà à un bon thème (pas "Partie 1"), on peut éventuellement la sauter, 
    // mais ici on va proposer de tout renommer.
    console.log(`\nAnalyse de la partie : "${oldPartie}" (${questions.length} questions)...`);
    
    // Prendre un échantillon de 5 questions max pour l'API
    const sample = questions.slice(0, 5).map(q => q.q);
    
    const newTheme = await getThemeFromAI(sample);
    if (newTheme) {
      console.log(`=> Nouveau thème trouvé par l'IA : "${newTheme}"`);
      // Mettre à jour toutes les questions de ce groupe
      questions.forEach(q => {
        q.partie = newTheme;
      });
      modifications++;
    } else {
      console.log(`=> Échec de l'obtention du thème pour "${oldPartie}".`);
    }

    // Pause de 2 secondes pour éviter le rate limiting de l'API
    await new Promise(r => setTimeout(r, 2000));
  }

  if (modifications > 0) {
    const outputContent = `const QCM = ${JSON.stringify(qcmArray, null, 2)};\n`;
    writeFileSync(inputFile, outputContent, 'utf8');
    console.log(`\n✅ Terminé ! Le fichier ${inputFile} a été mis à jour avec les nouveaux thèmes.`);
  } else {
    console.log(`\n⚠️ Aucune modification n'a été apportée.`);
  }
}

main().catch(console.error);
