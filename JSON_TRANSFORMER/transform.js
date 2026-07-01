const fs = require('fs');

const json = JSON.parse(fs.readFileSync('qcm_qcm-cloud-computing.json', 'utf8'));
const html = fs.readFileSync('docker-qcm-podcast.html', 'utf8');

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

let newHtml = html.replace(/const QCM = \[[\s\S]*?\];/, `const QCM = ${qcmString};`);
newHtml = newHtml.replace(/Docker QCM/g, "Cloud Computing QCM");
newHtml = newHtml.replace(/🐳 Docker/g, "☁️ Cloud Computing");

// Extraction du CSS
let cssContent = "";
newHtml = newHtml.replace(/<style>([\s\S]*?)<\/style>/, (match, p1) => {
  cssContent = p1.trim();
  return '<link rel="stylesheet" href="style.css">';
});
if (cssContent) fs.writeFileSync('style.css', cssContent);

// Extraction du JS principal (uniquement la logique, pas les données)
let jsContent = "";
newHtml = newHtml.replace(/(\/\/ ════════════════════════════════════════════════════════════════\n\/\/ ETAT[\s\S]*?)<\/script>\n<\/body>/, (match, p1) => {
  jsContent = p1.trim();
  return '</script>\n<script src="app.js"></script>\n</body>';
});
if (jsContent) fs.writeFileSync('app.js', jsContent);

fs.writeFileSync('qcm-cloud-computing.html', newHtml);
console.log("Les fichiers qcm-cloud-computing.html, style.css et app.js ont été générés avec succès !");
