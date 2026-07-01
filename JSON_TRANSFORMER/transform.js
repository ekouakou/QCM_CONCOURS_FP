const fs = require('fs');
const path = require('path');

const outputsDir = path.join(__dirname, 'outputs');
const files = fs.readdirSync(outputsDir).filter(f => f.endsWith('.json'));

const htmlTemplate = fs.readFileSync(path.join(__dirname, 'template/template.html'), 'utf8');

for (const file of files) {
  const jsonName = path.basename(file, '.json');

  // Nettoyer le nom du dossier pour qu'il soit plus joli (ex: qcm_qcm-cloud-computing -> qcm_cloud_computing)
  const folderName = jsonName.replace(/^qcm_qcm-/, 'qcm_').replace(/^qcm-/, 'qcm_');
  const targetDir = path.join(__dirname, folderName);

  // 1. Créer le dossier s'il n'existe pas
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // 2. Copier le fichier JSON correspondant dans le dossier
  const jsonFilePath = path.join(targetDir, file);
  fs.copyFileSync(path.join(outputsDir, file), jsonFilePath);

  // 3. Lire et parser le JSON
  const json = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

  const newQCM = [];
  for (const part of json) {
    for (const q of part.questions) {
      newQCM.push({
        num: "Q" + q.number,
        partie: "Partie " + part.partie,
        q: q.question,
        choices: q.choices,
        correct: q.correct_answer,
        explanation: q.explanation ? `<p>${q.explanation}</p>` : "",
        wrongAnalysis: q.wrongAnalysis || [],
        examiner: q.examiner || "",
        summary: q.summary || []
      });
    }
  }

  const qcmString = JSON.stringify(newQCM, null, 2);

  // Générer un titre lisible pour le HTML à partir du nom
  const titleStr = folderName.replace(/^qcm_/, '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  // 4. Injecter dans le HTML
  let newHtml = htmlTemplate.replace(/const QCM = \[[\s\S]*?\];/, `const QCM = ${qcmString};`);
  newHtml = newHtml.replace(/Docker QCM/g, `${titleStr} QCM`);
  newHtml = newHtml.replace(/🐳 Docker/g, `📚 ${titleStr}`);

  // 5. Extraction du CSS
  let cssContent = "";
  newHtml = newHtml.replace(/<style>([\s\S]*?)<\/style>/, (match, p1) => {
    cssContent = p1.trim();
    return '<link rel="stylesheet" href="style.css">';
  });
  if (cssContent) fs.writeFileSync(path.join(targetDir, 'style.css'), cssContent);

  // 6. Extraction du JS principal
  let jsContent = "";
  newHtml = newHtml.replace(/(\/\/ ════════════════════════════════════════════════════════════════\n\/\/ ETAT[\s\S]*?)<\/script>\n<\/body>/, (match, p1) => {
    jsContent = p1.trim();
    return '</script>\n<script src="app.js"></script>\n</body>';
  });
  if (jsContent) fs.writeFileSync(path.join(targetDir, 'app.js'), jsContent);

  // 7. Sauvegarder le HTML
  const outputHtmlPath = path.join(targetDir, `${jsonName}_enrichi.html`);
  fs.writeFileSync(outputHtmlPath, newHtml);

  // 8. Sauvegarder l'export JS
  const exportJsPath = path.join(targetDir, `${jsonName}_enriched.js`);
  const exportJsContent = `const QCM = ${qcmString};\n`;
  fs.writeFileSync(exportJsPath, exportJsContent);

  console.log(`[OK] Dossier '${folderName}' créé et fichiers générés avec succès.`);
}

console.log('\n🎉 Terminé ! Tous les fichiers JSON de "outputs" ont été traités.');
