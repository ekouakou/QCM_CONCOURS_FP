import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

try {
  process.loadEnvFile();
} catch (e) {
  // Ignorer l'erreur si le fichier .env n'existe pas
}

const inputFilePath = './JSON_TRANSFORMER/qcm_architecture-des-ordinateurs/qcm_groupes_par_theme/qcm_Concepts_Generaux.js';
const inputDir = path.dirname(inputFilePath);
const baseName = path.basename(inputFilePath, '.js');
const outputFilePath = path.join(inputDir, `${baseName}_final.js`);

let QCM = [];
try {
  const textContent = readFileSync(inputFilePath, 'utf8');
  QCM = JSON.parse(textContent.replace(/^const QCM = /, '').replace(/;\s*$/, ''));
} catch (e) {
  console.error(`Erreur de lecture de ${inputFilePath}. Assurez-vous que le fichier existe.`);
  process.exit(1);
}

const SYSTEM_PROMPT = `Agis comme un formateur senior, un examinateur de certification et un expert pédagogique.
L'objectif n'est pas seulement de répondre au QCM mais de transformer chaque question en mini-cours complet de niveau certification professionnelle (800 à 1500 mots).

Pour la question fournie, tu dois générer une explication détaillée développant les concepts théoriques, les cas d'usage, les bonnes pratiques DevOps/Cloud, et les erreurs courantes.

IMPORTANT : Tu dois renvoyer UNIQUEMENT un objet JSON valide (sans blocs markdown autour) contenant exactement les propriétés suivantes :
- "explanation": Un texte HTML formatté (avec des paragraphes <p>, des listes, et des balises <strong>) contenant ton explication très détaillée (architecture, concepts, cas concrets, bonnes pratiques, erreurs de débutant).
- "wrongAnalysis": Un tableau d'objets { "l": "lettre du choix", "t": "Analyse très précise expliquant pourquoi ce choix est faux et quel est le piège." } pour TOUTES les mauvaises réponses.
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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.error("Erreur : la variable GEMINI_API_KEY n'est pas définie dans le fichier .env");
    process.exit(1);
  }
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
    console.log(`\n[Attention] Limite de requêtes atteinte pour ${q.partie} ${q.num}. Pause de 60 secondes avant de réessayer...`);
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
    console.error("Raw:", text.substring(0, 200));
    return null;
  }
}

async function main() {
  const enriched = [];

  for (let i = 0; i < QCM.length; i++) {
    const q = QCM[i];

    if (q.examiner && q.examiner.trim() !== "") {
      console.log(`[${i + 1}/${QCM.length}] ${q.partie} - ${q.num} déjà enrichi, on passe...`);
      enriched.push(q);
      continue;
    }

    console.log(`[${i + 1}/${QCM.length}] ${q.partie} - ${q.num}...`);

    const result = await enrichQuestion(q);

    if (result) {
      enriched.push({
        ...q,
        explanation: result.explanation || q.explanation,
        wrongAnalysis: result.wrongAnalysis || q.wrongAnalysis,
        examiner: result.examiner || q.examiner,
        summary: result.summary || q.summary
      });
    } else {
      enriched.push(q); // keep original on error
    }

    // Pause de 15 secondes pour éviter le blocage par l'API (Erreur 429)
    await new Promise(r => setTimeout(r, 15000));
  }

  const output = `const QCM = ${JSON.stringify(enriched, null, 2)};`;
  writeFileSync(outputFilePath, output, 'utf8');
  console.log(`\nDone! ${enriched.length} questions enriched. Sauvegardé sous : ${outputFilePath}`);
}

main().catch(console.error);
