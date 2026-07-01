# Extracteur de QCM

Ce projet contient un script Python robuste (`extract_all_final.py`) pour extraire automatiquement des QCM depuis les pages web (notamment celles au format de *WayToLearnX* ou similaires). 

## 📋 Prérequis

Avant d'exécuter le script, vous devez installer les bibliothèques Python nécessaires. Ouvrez votre terminal et tapez :

```bash
pip install requests beautifulsoup4
```

## 🚀 Comment l'utiliser ?

Le fonctionnement principal du script est basé sur un traitement **par lots (batch)** en lisant des listes d'URLs.

### Étape 1 : Préparer les fichiers d'URLs

1. Allez dans le dossier `url/`.
2. Créez un fichier texte contenant la liste des URLs que vous souhaitez scraper (une URL par ligne).
   *Par exemple : vous pouvez utiliser ou modifier le fichier `qcm-reseau.txt` ou `extract_sanfoundry.txt` existant dans le dossier `url/`.*
3. Assurez-vous de n'y mettre que des URLs valides commençant par `http`.

### Étape 2 : Configurer le fichier maître (`listeFichier.txt`)

Le script lit un fichier "maître" qui indique quels fichiers d'URLs doivent être traités.

1. Ouvrez le fichier `url/listeFichier.txt`.
2. Ajoutez le nom de votre fichier contenant les URLs (créé à l'étape 1), un nom par ligne.
   *Exemple de contenu de `url/listeFichier.txt` :*
   ```
   extract_sanfoundry.txt
   qcm-reseau.txt
   ```

### Étape 3 : Lancer l'extraction

Dans votre terminal, placez-vous dans le dossier `SCRAP_PYTHON` (celui qui contient ce README et le script), et exécutez le script :

```bash
python3 extract_all_final.py
```

### Étape 4 : Récupérer les résultats

Une fois l'extraction terminée, le script va générer les fichiers JSON structurés dans le dossier `outputs/`.
Si vous avez traité `extract_sanfoundry.txt`, vous obtiendrez un fichier de sortie nommé :
`outputs/qcm_extract_sanfoundry.json`

## 🛠️ Comment ça fonctionne en interne ?

* **Extraction intelligente** : Le script utilise la classe `QCMExtractorRobust` qui analyse le HTML brut à l'aide de BeautifulSoup et d'expressions régulières (Regex) pour trouver les numéros de questions, le texte des questions, les choix (A, B, C, D, E), la réponse correcte, et les explications.
* **Délai (Politesse)** : Par défaut, le script attend 2 secondes entre chaque requête pour éviter de surcharger les serveurs cibles (`delay=2.0`).
* **Nettoyage** : Toutes les balises HTML et entités spéciales (`&nbsp;`, `&amp;`, etc.) sont nettoyées des questions extraites.

## 📝 Autres fonctions disponibles dans le script

Si vous souhaitez utiliser le script dans un autre programme Python, il offre plusieurs fonctions utilitaires :
- `extract_qcm_from_page(url)` : Extrait un seul QCM depuis une URL donnée.
- `extract_qcm_range(template, start, end)` : Parcourt une série de pages avec des numéros qui se suivent.
- `extract_qcm_smart()` : Tente de trouver intelligemment la bonne structure d'URL (utile si l'URL change selon l'année, ex: `/2018/11/` vs `/2022/06/`).
- `test_extraction()` : Lance un test unitaire sur une URL de référence pour vérifier que l'extracteur fonctionne toujours.
