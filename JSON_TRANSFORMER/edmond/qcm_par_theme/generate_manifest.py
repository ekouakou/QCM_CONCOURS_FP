#!/usr/bin/env python3
"""
Génère le fichier manifest.js qui liste tous les QCM disponibles.
À relancer chaque fois que vous ajoutez/supprimez un fichier qcm_*.js

Usage: python3 generate_manifest.py
"""
import os, json, re, glob

DIR = os.path.dirname(os.path.abspath(__file__))

def count_questions(filepath):
    """Compte le nombre de questions dans un fichier JS QCM."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()
        start = text.index('[')
        end = text.rindex(']') + 1
        data = json.loads(text[start:end])
        if isinstance(data, list):
            return len(data)
    except:
        pass
    return 0

def extract_parties(filepath):
    """Extrait les parties/thèmes uniques d'un fichier QCM."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()
        start = text.index('[')
        end = text.rindex(']') + 1
        data = json.loads(text[start:end])
        if isinstance(data, list):
            parties = set()
            for q in data:
                if 'partie' in q:
                    parties.add(q['partie'])
            return list(parties)
    except:
        pass
    return []

def format_name(filename):
    """Transforme le nom de fichier en titre lisible."""
    name = filename.replace('qcm_', '').replace('.js', '')
    name = name.replace('_', ' ')
    # Capitaliser chaque mot
    name = name.title()
    # Corrections spécifiques
    corrections = {
        "D ": "d'", "L ": "l'", "De ": "de ", "Et ": "et ",
        "En ": "en ", "Du ": "du ", "Des ": "des ", "Le ": "le ",
        "La ": "la ", "Les ": "les ", "Au ": "au ", "Aux ": "aux ",
        "Ms ": "MS ", "Sql": "SQL", "Xml": "XML", "Css": "CSS",
        "Html": "HTML", "Php": "PHP", "Jsp": "JSP", "Uml": "UML",
        "Dns": "DNS", "Unix": "UNIX", "Mysql": "MySQL",
        "Oracle": "Oracle", "Windev": "WinDev", "Ajax": "AJAX",
        "Java": "Java"
    }
    for old, new in corrections.items():
        name = name.replace(old, new)
    # S'assurer que le premier caractère est en majuscule
    if name:
        name = name[0].upper() + name[1:]
    return name

def get_icon(name):
    """Attribue un emoji basé sur le thème."""
    name_lower = name.lower()
    icons = {
        'base de donn': '🗄️', 'sql': '🗄️', 'mysql': '🗄️', 'oracle': '🗄️',
        'réseau': '🌐', 'protocole': '🌐', 'telecommunication': '🌐',
        'sécurité': '🔒', 'securite': '🔒',
        'programmation': '💻', 'algorithmique': '💻', 'langage': '💻',
        'web': '🌍', 'html': '🌍', 'css': '🌍', 'javascript': '🌍',
        'système': '⚙️', 'systeme': '⚙️', 'exploitation': '⚙️',
        'serveur': '🖥️', 'administration': '🖥️', 'windows': '🖥️',
        'linux': '🐧', 'unix': '🐧',
        'bureautique': '📊', 'excel': '📊', 'word': '📝', 'powerpoint': '📊',
        'gestion': '📋', 'projet': '📋', 'modélisation': '📐', 'modelisation': '📐',
        'uml': '📐', 'génie': '🏗️', 'genie': '🏗️',
        'droit': '⚖️', 'propriété': '⚖️',
        'architecture': '🏛️', 'matériel': '🏛️', 'materiel': '🏛️',
        'culture': '📚', 'général': '📚', 'general': '📚',
        'maintenance': '🔧', 'parc': '🔧',
        'logiciel': '📦', 'logique': '🧮', 'numérique': '🔢', 'numerique': '🔢',
        'codage': '🔢', 'xml': '📄', 'messagerie': '📧',
        'dns': '🔗', 'docker': '🐳', 'audio': '🎵', 'musique': '🎵',
        'accessibilite': '♿', 'communication': '💬',
    }
    for key, icon in icons.items():
        if key in name_lower:
            return icon
    return '📝'

def get_category(name):
    """Attribue une catégorie pour le regroupement."""
    name_lower = name.lower()
    categories = {
        'Bases de données': ['base de donn', 'sql', 'mysql', 'oracle', 'relationnelle'],
        'Programmation': ['programmation', 'algorithmique', 'langage', 'java', 'windev', 'objet'],
        'Réseaux': ['réseau', 'reseau', 'protocole', 'télécommunication', 'telecommunication'],
        'Systèmes': ['système', 'systeme', 'exploitation', 'unix', 'linux'],
        'Web': ['web', 'html', 'css', 'javascript', 'php', 'jsp', 'xml', 'accessibilite'],
        'Administration': ['serveur', 'administration', 'windows', 'dns', 'messagerie', 'parc'],
        'Bureautique': ['bureautique', 'excel', 'word', 'powerpoint', 'tableur', 'traitement de texte', 'présentation', 'presentation'],
        'Génie logiciel': ['génie', 'genie', 'logiciel', 'conception', 'modélisation', 'modelisation', 'uml', 'projet', 'maintenance'],
        'Sécurité & Droit': ['sécurité', 'securite', 'droit', 'propriété'],
        'Architecture': ['architecture', 'matériel', 'materiel', 'codage', 'numérique', 'numerique'],
        'Culture & Divers': ['culture', 'général', 'general', 'logique', 'musique', 'audio', 'communication'],
    }
    for cat, keywords in categories.items():
        for kw in keywords:
            if kw in name_lower:
                return cat
    return 'Autres'

# Scanner les fichiers
js_files = sorted(glob.glob(os.path.join(DIR, 'qcm_*.js')))

manifest = []
for filepath in js_files:
    filename = os.path.basename(filepath)
    name = format_name(filename)
    count = count_questions(filepath)
    parties = extract_parties(filepath)
    icon = get_icon(name)
    category = get_category(name)
    
    if count > 0:  # Ne pas inclure les fichiers vides
        manifest.append({
            'file': filename,
            'name': name,
            'count': count,
            'parties': parties,
            'icon': icon,
            'category': category,
            'sizeKB': round(os.path.getsize(filepath) / 1024, 1)
        })

# Écrire le manifest
output = f"// Auto-généré par generate_manifest.py — {len(manifest)} QCM trouvés\n"
output += f"// Dernière mise à jour: {__import__('datetime').datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n"
output += f"const QCM_MANIFEST = {json.dumps(manifest, ensure_ascii=False, indent=2)};\n"

outpath = os.path.join(DIR, 'manifest.js')
with open(outpath, 'w', encoding='utf-8') as f:
    f.write(output)

print(f"✅ manifest.js généré avec {len(manifest)} QCM ({sum(m['count'] for m in manifest)} questions au total)")
for m in manifest:
    print(f"   {m['icon']} {m['name']} — {m['count']} questions ({m['category']})")
