const fs = require('fs');
const html = fs.readFileSync('/Users/edmondkouakou/Downloads/QUIZ/QCM_CONCOURS_FP/JSON_TRANSFORMER/qcm_en-informatique-generale/qcm_qcm-en-informatique-generale_enrichi.html', 'utf8');
const scriptStart = html.indexOf('<script>');
if (scriptStart === -1) {
  console.log("No <script> tag found.");
  process.exit(1);
}
const contentStart = scriptStart + '<script>'.length;
const preScript = html.substring(0, contentStart);
const newlines = (preScript.match(/\n/g) || []).length;
const scriptEnd = html.lastIndexOf('</script>');
const jsCode = '\n'.repeat(newlines) + html.substring(contentStart, scriptEnd);
fs.writeFileSync('temp.js', jsCode);
