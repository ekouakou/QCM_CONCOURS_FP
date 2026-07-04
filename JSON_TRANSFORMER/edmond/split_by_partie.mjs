import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import path from 'path';

const inputFile = './qcm_ed_parsed_enriched.js';
const outputDir = './qcm_par_theme';

if (!existsSync(inputFile)) {
  console.error("Le fichier d'entrée est introuvable : " + inputFile);
  process.exit(1);
}

// 1. Lire et extraire le JSON
const content = readFileSync(inputFile, 'utf8');
// Extraire le tableau JSON en ignorant 'const QCM = ' et le point-virgule final
const jsonStr = content.replace(/^const\s+QCM\s*=\s*/, '').replace(/;?\s*$/, '');

let qcmArray = [];
try {
  qcmArray = JSON.parse(jsonStr);
} catch (e) {
  console.error("Erreur lors de l'analyse du JSON :", e.message);
  process.exit(1);
}

// 2. Regrouper par partie
const grouped = {};
qcmArray.forEach(qcm => {
  let partie = qcm.partie || 'Non_Classe';
  
  // Normalisation du nom de la partie pour créer un nom de fichier propre
  let safeName = partie
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Enlève les accents
    .replace(/[^a-zA-Z0-9]/g, '_')                    // Remplace les espaces et caractères spéciaux par des _
    .replace(/_+/g, '_')                              // Évite les underscores multiples
    .replace(/^_|_$/g, '')                            // Retire les underscores au début et à la fin
    .toLowerCase();

  if (!safeName) safeName = 'autre';

  if (!grouped[safeName]) {
    grouped[safeName] = {
      title: partie,
      questions: []
    };
  }
  
  grouped[safeName].questions.push(qcm);
});

// 3. Créer le dossier et générer les fichiers
if (!existsSync(outputDir)) {
  mkdirSync(outputDir, { recursive: true });
}

let totalFiles = 0;
for (const [safeName, data] of Object.entries(grouped)) {
  // Optionnel : Renuméroter les questions proprement (Q1, Q2, Q3...) pour chaque thème
  data.questions.forEach((q, index) => {
    q.num = `Q${index + 1}`;
  });

  const fileName = path.join(outputDir, `qcm_${safeName}.js`);
  const fileContent = `const QCM = ${JSON.stringify(data.questions, null, 2)};\n`;
  
  writeFileSync(fileName, fileContent, 'utf8');
  console.log(`- Créé : ${fileName} (${data.questions.length} questions, Thème original : "${data.title}")`);
  totalFiles++;
}

console.log(`\n✅ Terminé ! ${qcmArray.length} questions ont été réparties dans ${totalFiles} fichiers dans le dossier '${outputDir}'.`);
