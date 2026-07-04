const fs = require('fs');
const path = require('path');

// Fichier d'entrée
const inputFile = path.join(__dirname, 'qcm_qcm-architecture-des-ordinateurs_enriched_deduplicated.js');
// Dossier de sortie
const outputDir = path.join(__dirname, 'qcm_groupes_par_theme');

// Créer le dossier s'il n'existe pas
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Lire et parser le fichier
const content = fs.readFileSync(inputFile, 'utf-8');
const jsonStr = content.replace(/^const QCM = /, '').replace(/;\s*$/, '');
let qcmArray = [];
try {
  qcmArray = JSON.parse(jsonStr);
} catch (e) {
  console.error("Erreur de parsing du fichier JSON :", e);
  process.exit(1);
}

// 2. Dictionnaire de regroupement sémantique (mapping des thématiques)
// Les clés sont des mots-clés ou expressions régulières simplifiées
// et les valeurs sont le nom du grand thème commun.
const getBroadCategory = (partie) => {
  const p = partie.toLowerCase();

  if (p.includes('processeur') || p === 'cpu') return 'Processeur';
  if (p.includes('mémoire') || p.includes('memoire')) return 'Memoire_et_Stockage';
  if (p.includes('stockage')) return 'Memoire_et_Stockage';
  if (p.includes('matériel') || p.includes('materiel')) return 'Materiel';
  if (p.includes('système d\'exploitation') || p.includes('systèmes d\'exploitation') || p.includes('fichiers')) return 'Systeme_d_Exploitation';
  if (p.includes('réseau') || p.includes('reseau') || p.includes('communication')) return 'Reseau';
  if (p.includes('données') || p.includes('codage') || p.includes('représentation')) return 'Representation_des_Donnees';
  if (p.includes('développement') || p.includes('programmation') || p.includes('compilation')) return 'Developpement_et_Programmation';
  if (p.includes('performance')) return 'Performance';
  if (p.includes('entrées-sorties') || p.includes('périphériques') || p.includes('bus')) return 'Entrees_Sorties_et_Peripheriques';
  if (p.includes('logique') || p.includes('électronique')) return 'Electronique_et_Logique';
  if (p.includes('concept')) return 'Concepts_Generaux';
  if (p.includes('architecture')) return 'Architecture_Globale'; // Les architectures restantes
  
  return 'Autres'; // Catégorie par défaut
};

// 3. Regrouper les questions
const grouped = {};

for (const q of qcmArray) {
  const partie = q.partie || 'Non défini';
  const broadCategory = getBroadCategory(partie);
  
  if (!grouped[broadCategory]) {
    grouped[broadCategory] = [];
  }
  grouped[broadCategory].push(q);
}

// 4. Exporter chaque groupe dans un fichier distinct dans le sous-dossier
for (const [theme, questions] of Object.entries(grouped)) {
  const safeTheme = theme.replace(/[^a-zA-Z0-9_-]/g, '_');
  const outputFile = path.join(outputDir, `qcm_${safeTheme}.js`);
  
  const outputContent = `const QCM = ${JSON.stringify(questions, null, 2)};\n`;
  fs.writeFileSync(outputFile, outputContent, 'utf-8');
  console.log(`✅ Créé ${outputFile} avec ${questions.length} questions (Thème: ${theme})`);
}

console.log(`\n🚀 Opération terminée. Les fichiers sont regroupés dans le dossier : ${outputDir}`);
