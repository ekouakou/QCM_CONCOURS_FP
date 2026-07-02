const fs = require('fs');
const path = require('path');

const inputFile = path.join(__dirname, 'qcm_qcm-en-informatique-generale_enriched_deduplicated.js');

const content = fs.readFileSync(inputFile, 'utf-8');

let jsonString = content.replace(/^const QCM = /, '').trim();
if (jsonString.endsWith(';')) {
    jsonString = jsonString.slice(0, -1);
}

try {
    const getQCM = new Function(`return ${jsonString};`);
    const qcmArray = getQCM();

    const grouped = {};
    for (const item of qcmArray) {
        const theme = item.partie || 'Sans_theme';
        if (!grouped[theme]) {
            grouped[theme] = [];
        }
        grouped[theme].push(item);
    }

    for (const [theme, items] of Object.entries(grouped)) {
        // Create a safe filename for the theme
        const safeTheme = theme.replace(/[^a-zA-Z0-9_\-]/g, '_').toLowerCase();
        const outputFile = path.join(__dirname, `qcm_${safeTheme}.js`);
        
        const outputContent = `const QCM = ${JSON.stringify(items, null, 2)};\n`;
        fs.writeFileSync(outputFile, outputContent, 'utf-8');
        console.log(`Created qcm_${safeTheme}.js with ${items.length} items.`);
    }
    console.log("Done splitting the file by theme.");

} catch (err) {
    console.error("Error parsing the file:", err);
}
