# JSON Transformer (`transform.js`)

Ce script est le moteur principal qui convertit les données brutes extraites (QCM au format JSON) en une application web complète et interactive (HTML, CSS, JS).

## 🎯 Quel est son but ?

Plutôt que d'avoir toutes les données, le style (CSS) et la logique (JS) enfermés dans un seul gros fichier HTML, ce script s'occupe de :
1. **Fusionner** les nouvelles données JSON (questions, choix, explications) avec un "template" HTML existant.
2. **Nettoyer et Séparer** le code pour suivre les bonnes pratiques de développement web (génération de fichiers `style.css` et `app.js` distincts).

## ⚙️ Comment ça marche ? (Étape par Étape)

### 1. Chargement des sources
Le script lit actuellement deux fichiers écrits en dur :
- `qcm_qcm-cloud-computing.json` : Le fichier qui contient les questions extraites (par exemple via le script Python de scraping).
- `docker-qcm-podcast.html` : Un ancien fichier HTML monolithique qui sert ici de **Template/Gabarit** de base.

### 2. Normalisation des données
Les données JSON brutes sont souvent structurées par "Parties". Le script "aplatit" cette structure pour créer un seul grand tableau de questions (`newQCM`).
- Il formate les numéros de questions : le numéro `1` devient `"Q1"`.
- Il formate les numéros de parties : `1` devient `"Partie 1"`.
- Il enveloppe les explications de la réponse correcte avec des balises HTML `<p>...</p>`.

### 3. Injection dans le HTML
Dans le fichier HTML modèle, le script cherche la déclaration du tableau de questions (`const QCM = [...]`) et la **remplace** par notre nouveau tableau dynamique généré à l'étape 2.
Il effectue aussi quelques remplacements de texte (remplacement de "Docker QCM" par "Cloud Computing QCM" et de l'icône 🐳 par ☁️).

### 4. Extraction du CSS et du JavaScript (Refactoring automatique)
C'est la partie la plus intelligente du script :
- **CSS** : Il utilise une expression régulière (Regex) pour trouver tout le code compris entre `<style>` et `</style>`. Il copie ce code dans un nouveau fichier nommé `style.css`, puis remplace tout ce bloc par un `<link rel="stylesheet" href="style.css">`.
- **JavaScript** : Il fait la même chose avec la logique de l'application (située en bas du fichier). Il extrait la logique métier, la sauvegarde dans `app.js`, et remplace le bloc par `<script src="app.js"></script>`.

### 5. Fichiers générés 
Une fois exécuté avec `node transform.js`, vous obtenez 3 nouveaux fichiers :
1. `qcm-cloud-computing.html` (La structure de la page)
2. `style.css` (Le design)
3. `app.js` (L'interactivité et la logique du Quiz)

## 💡 Remarque pour le développement futur
Actuellement, les noms des fichiers (`qcm_qcm-cloud-computing.json`, `docker-qcm-podcast.html`, etc.) sont **écrits en dur** dans le script. Si vous souhaitez traiter d'autres thèmes (Réseau, Linux, etc.), il faudra soit modifier ces noms dans le script `transform.js` avant exécution, soit modifier le script pour qu'il prenne le nom du fichier en paramètre (via `process.argv`).
