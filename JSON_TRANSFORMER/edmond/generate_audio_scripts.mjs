import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

const inputFile = './qcm_ed_parsed_enriched.js';
const outSummaryJson = './audio_summary_and_examiner.json';
const outSummaryTxt = './audio_summary_and_examiner.txt';
const outExplanationJson = './audio_explanations.json';
const outExplanationTxt = './audio_explanations.txt';

// Fonction pour nettoyer le HTML et le rendre "lisible" par un outil audio
function cleanHtmlForAudio(html) {
  if (!html) return "";
  let text = html;
  
  // Remplacement basique pour la structuration
  text = text.replace(/<p>/gi, '\n');
  text = text.replace(/<\/p>/gi, '\n');
  text = text.replace(/<ul>/gi, '\n');
  text = text.replace(/<\/ul>/gi, '\n');
  text = text.replace(/<li>/gi, '\n- ');
  text = text.replace(/<\/li>/gi, '');
  text = text.replace(/<br\s*\/?>/gi, '\n');

  // Supprimer toutes les autres balises HTML
  text = text.replace(/<[^>]*>?/gm, '');

  // Nettoyer les espaces multiples et les lignes vides
  text = text.replace(/\n\s*\n/g, '\n\n');
  return text.trim();
}

function main() {
  console.log("Lecture du fichier source...");
  const content = readFileSync(inputFile, 'utf8');
  const jsonStr = content.replace(/^const\s+QCM\s*=\s*/, '').replace(/;?\s*$/, '');
  
  let qcmArray = [];
  try {
    qcmArray = JSON.parse(jsonStr);
  } catch (e) {
    console.error("Erreur lors de l'analyse JSON :", e.message);
    process.exit(1);
  }

  const summariesData = [];
  let summariesNarrativeText = "--- SCRIPTS AUDIO : EXAMINATEUR ET RÉSUMÉS ---\n\n";

  const explanationsData = [];
  let explanationsNarrativeText = "--- SCRIPTS AUDIO : EXPLICATIONS DÉTAILLÉES ---\n\n";

  qcmArray.forEach((qcm, index) => {
    // ---- 1. Construction pour Examiner & Summary ----
    let summaryTextArray = qcm.summary || [];
    let summaryStr = summaryTextArray.map(s => `- ${s}`).join('\n');
    let examinerStr = qcm.examiner || "Information non disponible.";
    
    // Texte narratif cohérent
    let narrSummary = `Question de la thématique : ${qcm.partie}.\n`;
    narrSummary += `La question est : ${qcm.q}\n`;
    narrSummary += `Ce que cherche l'examinateur : ${examinerStr}\n`;
    if (summaryTextArray.length > 0) {
      narrSummary += `Voici les points clés à retenir en résumé :\n${summaryStr}\n`;
    }
    
    summariesData.push({
      id: qcm.num,
      partie: qcm.partie,
      question: qcm.q,
      examiner: qcm.examiner,
      summary: qcm.summary,
      narrative_text: narrSummary
    });
    
    summariesNarrativeText += `=== BLOCK ${index + 1} | ${qcm.num} ===\n${narrSummary}\n\n`;

    // ---- 2. Construction pour Question & Explanation ----
    let cleanExp = cleanHtmlForAudio(qcm.explanation);
    
    // Texte narratif cohérent
    let narrExp = `Question de la thématique : ${qcm.partie}.\n`;
    narrExp += `La question est : ${qcm.q}\n`;
    narrExp += `Voici l'explication détaillée :\n${cleanExp}\n`;

    explanationsData.push({
      id: qcm.num,
      partie: qcm.partie,
      question: qcm.q,
      explanation_raw: qcm.explanation,
      narrative_text: narrExp
    });
    
    explanationsNarrativeText += `=== BLOCK ${index + 1} | ${qcm.num} ===\n${narrExp}\n\n`;
  });

  // Écriture des fichiers JSON
  writeFileSync(outSummaryJson, JSON.stringify(summariesData, null, 2), 'utf8');
  writeFileSync(outExplanationJson, JSON.stringify(explanationsData, null, 2), 'utf8');
  
  // Écriture des fichiers textes bruts pour lecture audio
  writeFileSync(outSummaryTxt, summariesNarrativeText, 'utf8');
  writeFileSync(outExplanationTxt, explanationsNarrativeText, 'utf8');

  console.log(`✅ Fichiers générés avec succès pour ${qcmArray.length} questions :`);
  console.log(`- ${outSummaryJson}`);
  console.log(`- ${outSummaryTxt}`);
  console.log(`- ${outExplanationJson}`);
  console.log(`- ${outExplanationTxt}`);
}

main();
