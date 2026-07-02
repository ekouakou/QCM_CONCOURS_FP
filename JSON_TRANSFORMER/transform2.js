const fs = require('fs');
const path = require('path');

const jsonFilePath = './qcm_en-informatique-generale/qcm_qcm-en-informatique-generale.json';
const jsonDir = path.dirname(jsonFilePath);
const jsonName = path.basename(jsonFilePath, '.json');

const json = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));
const html = fs.readFileSync('./template/template.html', 'utf8');

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
if (cssContent) fs.writeFileSync(path.join(jsonDir, 'style.css'), cssContent);

// Extraction du JS principal (uniquement la logique, pas les données)
let jsContent = "";
newHtml = newHtml.replace(/(\/\/ ════════════════════════════════════════════════════════════════\n\/\/ ETAT[\s\S]*?)<\/script>\n<\/body>/, (match, p1) => {
    jsContent = p1.trim();
    return '</script>\n<script src="app.js"></script>\n</body>';
});
if (jsContent) fs.writeFileSync(path.join(jsonDir, 'app.js'), jsContent);

const outputHtmlPath = path.join(jsonDir, `${jsonName}_enrichi.html`);
fs.writeFileSync(outputHtmlPath, newHtml);

const exportJsPath = path.join(jsonDir, `${jsonName}_enriched.js`);
const exportJsContent = `const QCM = ${qcmString};\n`;
fs.writeFileSync(exportJsPath, exportJsContent);

console.log(`Les fichiers ${jsonName}_enrichi.html, style.css, app.js et ${jsonName}_enriched.js ont été générés dans le dossier ${jsonDir} !`);
