#!/usr/bin/env python3
"""
Génère la version autonome de l'application QCM Concours FP.
Fusionne tous les fichiers qcm_*.js dans index.html.
Fonctionne aussi bien par double-clic (local) qu'avec un serveur HTTP local.

Usage: python3 build_standalone.py
"""
import os, json, glob

DIR = os.path.dirname(os.path.abspath(__file__))

def extract_questions(filepath):
    """Extrait le tableau JSON d'un fichier JS QCM."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            text = f.read()
        start = text.index('[')
        end = text.rindex(']') + 1
        data = json.loads(text[start:end])
        if isinstance(data, list) and len(data) > 0:
            return data
    except Exception as e:
        print(f"   ⚠️  Erreur sur {os.path.basename(filepath)}: {e}")
    return []

def format_name(filename):
    """Transforme le nom de fichier en titre lisible."""
    name = filename.replace('qcm_', '').replace('.js', '')
    name = name.replace('_', ' ').title()
    corrections = {
        "D ": "d'", "L ": "l'", "De ": "de ", "Et ": "et ",
        "En ": "en ", "Du ": "du ", "Des ": "des ", "Le ": "le ",
        "La ": "la ", "Les ": "les ", "Au ": "au ", "Aux ": "aux ",
        "Ms ": "MS ", "Sql": "SQL", "Xml": "XML", "Css": "CSS",
        "Html": "HTML", "Php": "PHP", "Jsp": "JSP", "Uml": "UML",
        "Dns": "DNS", "Unix": "UNIX", "Mysql": "MySQL",
        "Oracle": "Oracle", "Windev": "WinDev",
    }
    for old, new in corrections.items():
        name = name.replace(old, new)
    if name:
        name = name[0].upper() + name[1:]
    return name

def get_icon(name):
    name_lower = name.lower()
    icons = {
        'base de donn': '🗄️', 'sql': '🗄️', 'mysql': '🗄️', 'oracle': '🗄️',
        'réseau': '🌐', 'reseau': '🌐', 'protocole': '🌐', 'telecommunication': '🌐',
        'sécurité': '🔒', 'securite': '🔒',
        'programmation': '💻', 'algorithmique': '💻', 'langage': '💻',
        'web': '🌍', 'html': '🌍', 'css': '🌍',
        'système': '⚙️', 'systeme': '⚙️', 'exploitation': '⚙️',
        'serveur': '🖥️', 'administration': '🖥️', 'windows': '🖥️',
        'linux': '🐧', 'unix': '🐧',
        'bureautique': '📊', 'excel': '📊', 'word': '📝', 'powerpoint': '📊', 'tableur': '📊',
        'gestion': '📋', 'projet': '📋', 'modélisation': '📐', 'modelisation': '📐',
        'uml': '📐', 'génie': '🏗️', 'genie': '🏗️',
        'droit': '⚖️', 'propriété': '⚖️',
        'architecture': '🏛️', 'matériel': '🏛️', 'materiel': '🏛️',
        'culture': '📚', 'général': '📚', 'general': '📚',
        'maintenance': '🔧', 'parc': '🔧',
        'logiciel': '📦', 'logique': '🧮', 'numérique': '🔢', 'numerique': '🔢',
        'codage': '🔢', 'xml': '📄', 'messagerie': '📧',
        'dns': '🔗', 'communication': '💬', 'musique': '🎵',
        'accessibilite': '♿', 'developpement': '🛠️', 'traitement': '📝',
        'presentation': '📊', 'informatique musicale': '🎵',
    }
    for key, icon in icons.items():
        if key in name_lower:
            return icon
    return '📝'

def get_category(name):
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

# ─────────────────────────────────────────────────────────────────
# 1. Scanner et extraire toutes les questions
# ─────────────────────────────────────────────────────────────────
print("🔍 Scan des fichiers QCM...")
js_files = sorted(glob.glob(os.path.join(DIR, 'qcm_*.js')))

all_themes = []
total_questions = 0

for filepath in js_files:
    filename = os.path.basename(filepath)
    questions = extract_questions(filepath)
    if questions:
        name = format_name(filename)
        theme = {
            'name': name,
            'icon': get_icon(name),
            'category': get_category(name),
            'questions': questions
        }
        all_themes.append(theme)
        total_questions += len(questions)
        print(f"   ✅ {name} — {len(questions)} questions")

print(f"\n📦 Total: {len(all_themes)} thèmes, {total_questions} questions")

# ─────────────────────────────────────────────────────────────────
# 2. Sérialiser les données en JSON et échapper les balises script
# ─────────────────────────────────────────────────────────────────
themes_json = json.dumps(all_themes, ensure_ascii=False, separators=(',', ':'))
themes_json = themes_json.replace('</', r'<\/')

# ─────────────────────────────────────────────────────────────────
# 3. Code HTML Template brut (sans f-string !)
# ─────────────────────────────────────────────────────────────────
html_template = """<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>QCM Concours FP — Révision Interactive</title>
  <meta name="description" content="Application de quiz interactif pour la préparation aux concours de la Fonction Publique.">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg:#0a0e17;--bg2:#0d1220;--surface:#131a2b;--surface2:#1a2340;--surface3:#1e2a4a;
      --border:#253256;--border2:#354575;--text:#e8edf5;--muted:#8094b8;--subtle:#5a6f94;
      --blue:#3b82f6;--blue-bg:#0c2461;--blue-light:#60a5fa;
      --green:#22c55e;--green-bg:#0a2e1a;--green-light:#4ade80;
      --red:#ef4444;--red-bg:#3b1111;--red-light:#f87171;
      --yellow:#eab308;--yellow-bg:#332b00;--yellow-light:#facc15;
      --purple:#a78bfa;--purple-bg:#1e1145;--purple-light:#c4b5fd;
      --cyan:#22d3ee;--cyan-bg:#082f39;--orange:#f97316;--pink:#ec4899;
      --r:12px;--rs:8px;--font:'Inter',-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
    }
    *{box-sizing:border-box;margin:0;padding:0}
    body{font-family:var(--font);background:var(--bg);color:var(--text);min-height:100vh;line-height:1.6;overflow-x:hidden}

    .bg-glow{position:fixed;top:-50%;left:-50%;width:200%;height:200%;
      background:radial-gradient(ellipse at 30% 20%,rgba(59,130,246,.08) 0%,transparent 50%),
      radial-gradient(ellipse at 70% 80%,rgba(139,92,246,.06) 0%,transparent 50%),
      radial-gradient(ellipse at 50% 50%,rgba(34,211,238,.04) 0%,transparent 60%);
      animation:bgShift 20s ease-in-out infinite;pointer-events:none;z-index:0}
    @keyframes bgShift{0%,100%{transform:translate(0,0)}33%{transform:translate(-3%,2%)}66%{transform:translate(3%,-2%)}}

    .topbar{position:sticky;top:0;z-index:100;background:rgba(13,18,32,.85);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
      border-bottom:1px solid rgba(37,50,86,.6);padding:0 24px;height:60px;display:flex;align-items:center;gap:14px}
    .logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:16px;letter-spacing:-.4px;white-space:nowrap;cursor:pointer;transition:opacity .2s}
    .logo:hover{opacity:.8}
    .logo-icon{width:32px;height:32px;background:linear-gradient(135deg,var(--blue),var(--purple));border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:16px}
    .badge{background:linear-gradient(135deg,var(--blue-bg),var(--purple-bg));color:var(--blue-light);font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;border:1px solid rgba(59,130,246,.3);white-space:nowrap}
    .topbar-right{margin-left:auto;display:flex;align-items:center;gap:12px;flex-shrink:0}
    .pw{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted)}
    .pt{width:120px;height:5px;background:var(--border);border-radius:99px;overflow:hidden}
    .pf{height:100%;background:linear-gradient(90deg,var(--blue),var(--cyan));border-radius:99px;transition:width .6s cubic-bezier(.4,0,.2,1)}
    .score-b{background:var(--surface2);border:1px solid var(--border);border-radius:20px;padding:4px 12px;font-size:12px;color:var(--muted);white-space:nowrap}
    .score-b span{color:var(--green-light);font-weight:700}
    .top-btn{display:flex;align-items:center;gap:6px;padding:7px 14px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface2);color:var(--text);font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;white-space:nowrap}
    .top-btn:hover{background:var(--surface3);border-color:var(--border2)}
    .top-btn svg{width:14px;height:14px;flex-shrink:0}
    .back-btn{display:none;align-items:center;gap:6px;padding:7px 14px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface2);color:var(--blue-light);font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;white-space:nowrap}
    .back-btn:hover{background:var(--blue-bg);border-color:var(--blue)}

    /* Timer & Pause */
    .timer-display { display: flex; align-items: center; gap: 6px; font-variant-numeric: tabular-nums; font-weight: 700; color: var(--text); background: var(--surface2); padding: 5px 12px; border-radius: 20px; border: 1px solid var(--border); font-size: 13px; }
    .timer-display.danger { color: var(--red-light); border-color: rgba(239, 68, 68, 0.4); background: rgba(239, 68, 68, 0.15); animation: pulse 1s infinite; }
    @keyframes pulse { 0% { opacity: 1; } 50% { opacity: 0.6; } 100% { opacity: 1; } }
    .pause-overlay { position: absolute; inset: 0; background: rgba(10, 14, 23, 0.95); backdrop-filter: blur(10px); z-index: 50; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: var(--text); padding: 20px; border-radius: var(--r); }
    .pause-overlay h2 { font-size: 24px; margin-bottom: 10px; color: var(--blue-light); }

    .home-page{position:relative;z-index:1;max-width:1300px;margin:0 auto;padding:40px 24px 60px}
    .home-hero{text-align:center;padding:40px 20px 50px}
    .home-hero h1{font-size:42px;font-weight:900;letter-spacing:-1.5px;margin-bottom:14px;
      background:linear-gradient(135deg,#fff 0%,var(--blue-light) 50%,var(--purple-light) 100%);
      -webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;line-height:1.2}
    .home-hero p{font-size:17px;color:var(--muted);max-width:600px;margin:0 auto 30px;line-height:1.7}
    .home-stats{display:flex;gap:16px;justify-content:center;flex-wrap:wrap;margin-bottom:10px}
    .home-stat{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:16px 28px;text-align:center;min-width:120px;transition:transform .2s,border-color .2s}
    .home-stat:hover{transform:translateY(-2px);border-color:var(--border2)}
    .home-stat .num{font-size:32px;font-weight:800;letter-spacing:-1px;line-height:1}
    .home-stat .num.blue{color:var(--blue-light)}.home-stat .num.green{color:var(--green-light)}.home-stat .num.purple{color:var(--purple-light)}.home-stat .num.yellow{color:var(--yellow-light)}
    .home-stat .lbl{font-size:12px;color:var(--muted);margin-top:4px}

    /* Controls */
    .controls-bar { display: flex; gap: 10px; justify-content: center; margin-bottom: 30px; flex-wrap: wrap; }
    .btn-settings { display: flex; align-items: center; gap: 6px; background: var(--surface2); border: 1px solid var(--border); color: var(--text); padding: 9px 16px; border-radius: var(--rs); cursor: pointer; font-size: 13px; font-weight: 600; transition: all .2s; }
    .btn-settings:hover { background: var(--surface3); border-color: var(--border2); }
    .btn-danger { display: flex; align-items: center; gap: 6px; color: var(--red-light); border: 1px solid rgba(239, 68, 68, 0.3); background: rgba(239, 68, 68, 0.05); padding: 9px 16px; border-radius: var(--rs); cursor: pointer; font-size: 13px; font-weight: 600; transition: all .2s; }
    .btn-danger:hover { background: var(--red-bg); border-color: var(--red); }

    .search-bar{max-width:500px;margin:30px auto;position:relative}
    .search-bar input{width:100%;padding:12px 16px 12px 44px;background:var(--surface);border:1px solid var(--border);border-radius:var(--r);color:var(--text);font-family:var(--font);font-size:14px;outline:none;transition:border-color .2s,box-shadow .2s}
    .search-bar input::placeholder{color:var(--subtle)}
    .search-bar input:focus{border-color:var(--blue);box-shadow:0 0 0 3px rgba(59,130,246,.15)}
    .search-bar svg{position:absolute;left:14px;top:50%;transform:translateY(-50%);width:18px;height:18px;color:var(--subtle);pointer-events:none}

    .category-filters{display:flex;gap:8px;flex-wrap:wrap;justify-content:center;margin-bottom:36px}
    .cat-filter{padding:6px 16px;border-radius:20px;border:1px solid var(--border);background:var(--surface);color:var(--muted);font-family:var(--font);font-size:12px;font-weight:600;cursor:pointer;transition:all .2s;white-space:nowrap}
    .cat-filter:hover{background:var(--surface2);color:var(--text);border-color:var(--border2)}
    .cat-filter.active{background:var(--blue-bg);color:var(--blue-light);border-color:var(--blue)}

    .category-group{margin-bottom:36px}
    .category-title{font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--subtle);margin-bottom:16px;padding-left:4px;display:flex;align-items:center;gap:8px}
    .category-title::after{content:'';flex:1;height:1px;background:var(--border)}
    .category-count{background:var(--surface2);padding:2px 8px;border-radius:10px;font-size:11px;color:var(--muted)}

    .qcm-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:14px}
    .qcm-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:20px;cursor:pointer;transition:all .25s cubic-bezier(.4,0,.2,1);position:relative;overflow:hidden}
    .qcm-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,var(--blue),var(--purple));opacity:0;transition:opacity .25s}
    .qcm-card:hover{transform:translateY(-3px);border-color:var(--blue);box-shadow:0 8px 32px rgba(59,130,246,.12)}
    .qcm-card:hover::before{opacity:1}
    .card-head{display:flex;align-items:flex-start;gap:12px;margin-bottom:12px}
    .card-icon{font-size:28px;flex-shrink:0;width:44px;height:44px;background:var(--surface2);border-radius:10px;display:flex;align-items:center;justify-content:center}
    .card-title{font-size:14px;font-weight:700;color:var(--text);line-height:1.4;flex:1}
    .card-meta{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
    .card-count{font-size:11px;font-weight:700;color:var(--cyan);background:var(--cyan-bg);padding:3px 10px;border-radius:20px;border:1px solid rgba(34,211,238,.2)}
    .card-score { font-size: 11px; font-weight: 700; background: var(--green-bg); color: var(--green-light); padding: 3px 10px; border-radius: 20px; border: 1px solid rgba(74, 222, 128, 0.2); }
    .card-cat{font-size:11px;color:var(--muted)}
    .card-play{margin-left:auto;width:28px;height:28px;border-radius:50%;background:var(--blue);display:flex;align-items:center;justify-content:center;opacity:0;transform:scale(.8);transition:all .25s}
    .qcm-card:hover .card-play{opacity:1;transform:scale(1)}
    .card-play svg{width:12px;height:12px;color:#fff}

    .quiz-page{display:none;position:relative;z-index:1}
    .quiz-layout{display:grid;grid-template-columns:260px 1fr;min-height:calc(100vh - 60px)}
    .sidebar{background:var(--surface);border-right:1px solid var(--border);padding:16px 12px;overflow-y:auto;position:sticky;top:60px;height:calc(100vh - 60px)}
    .sb-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:var(--subtle);margin-bottom:12px;padding-left:4px}
    .pg{margin-bottom:16px}
    .pl{font-size:10px;font-weight:700;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;padding:4px 6px;margin-bottom:2px}
    .qi{display:flex;align-items:center;gap:8px;padding:7px 8px;border-radius:var(--rs);cursor:pointer;transition:all .15s;font-size:12px;color:var(--muted)}
    .qi:hover{background:var(--surface2);color:var(--text)}
    .qi.active{background:var(--blue-bg);color:var(--blue-light)}
    .qi.correct{color:var(--green-light)}.qi.wrong{color:var(--red-light)}
    .qn{width:20px;height:20px;border-radius:50%;background:var(--surface2);display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;flex-shrink:0}
    .qi.active .qn{background:var(--blue);color:#fff}
    .qi.correct .qn{background:var(--green-bg);border:1px solid var(--green)}
    .qi.wrong .qn{background:var(--red-bg);border:1px solid var(--red)}
    .qs{margin-left:auto;width:6px;height:6px;border-radius:50%;flex-shrink:0}
    .qi.correct .qs{background:var(--green)}.qi.wrong .qs{background:var(--red)}

    .main{padding:28px 36px;overflow-y:auto;position:relative;}
    .q-header{display:flex;align-items:center;gap:8px;margin-bottom:16px}
    .pt-tag{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--blue-light);background:var(--blue-bg);border:1px solid rgba(59,130,246,.3);padding:3px 9px;border-radius:20px}
    .qn-tag{font-size:11px;font-weight:600;color:var(--muted);background:var(--surface2);border:1px solid var(--border);padding:3px 9px;border-radius:20px}
    .qcard{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:24px;margin-bottom:16px;position:relative;}
    .qtext{font-size:17px;font-weight:600;line-height:1.55;color:var(--text);margin-bottom:20px;letter-spacing:-.2px}
    .choices{display:flex;flex-direction:column;gap:9px}
    .choice{display:flex;align-items:flex-start;gap:12px;padding:12px 16px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface2);cursor:pointer;transition:all .2s;user-select:none}
    .choice:hover:not(.disabled){border-color:var(--blue);background:var(--blue-bg);transform:translateX(3px)}
    .choice.selected{border-color:var(--blue);background:var(--blue-bg)}
    .choice.correct{border-color:var(--green);background:var(--green-bg);cursor:default}
    .choice.wrong{border-color:var(--red);background:var(--red-bg);cursor:default}
    .choice.disabled{cursor:default}.choice.ndis{opacity:.45;cursor:default}
    .cl{width:26px;height:26px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:700;flex-shrink:0;background:var(--border);color:var(--muted);transition:all .2s}
    .choice:hover:not(.disabled) .cl{background:var(--blue);color:#fff}
    .choice.selected .cl{background:var(--blue);color:#fff}
    .choice.correct .cl{background:var(--green);color:#fff}
    .choice.wrong .cl{background:var(--red);color:#fff}
    .ct{font-size:14px;line-height:1.5;color:var(--text);padding-top:3px;flex:1}
    .ci{margin-left:auto;flex-shrink:0;font-size:15px;padding-top:4px}

    .reveal-s{margin-bottom:16px;display:none}
    .reveal-btn{width:100%;padding:13px;border-radius:var(--rs);border:1px dashed var(--border2);background:transparent;color:var(--blue-light);font-family:var(--font);font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:8px}
    .reveal-btn:hover{background:var(--blue-bg);border-color:var(--blue)}

    .explanation{animation:si .3s ease}
    @keyframes si{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
    .ab{display:flex;align-items:flex-start;gap:12px;padding:14px 18px;border-radius:var(--rs);margin-bottom:14px;border:1px solid var(--green);background:var(--green-bg)}
    .ab.wa{border-color:var(--red);background:var(--red-bg)}
    .ai{font-size:18px;flex-shrink:0;margin-top:1px}
    .albl{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;color:var(--green-light);margin-bottom:3px}
    .ab.wa .albl{color:var(--red-light)}
    .ac{font-size:14px;color:var(--text);line-height:1.5}
    .ac strong{color:var(--green-light)}.ab.wa .ac strong{color:var(--red-light)}
    .eb{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:20px 24px;margin-bottom:12px}
    .ebt{display:flex;align-items:center;gap:7px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.07em;margin-bottom:14px;padding-bottom:10px;border-bottom:1px solid var(--border)}
    .ebt.blue{color:var(--blue-light)}.ebt.red{color:var(--red-light)}.ebt.purple{color:var(--purple)}.ebt.yellow{color:var(--yellow-light)}
    .ebt svg{width:15px;height:15px}
    .et{font-size:14px;line-height:1.8;color:var(--muted)}
    .et p{margin-bottom:12px}.et p:last-child{margin-bottom:0}
    .et strong{color:var(--text);font-weight:600}
    .et ul,.et ol{margin-left:18px;margin-bottom:10px}.et li{margin-bottom:4px}
    .et code{font-family:'SF Mono','Fira Code',monospace;font-size:12px;background:var(--surface2);border:1px solid var(--border);padding:1px 5px;border-radius:4px;color:var(--blue-light)}
    .wi{display:flex;flex-direction:column;gap:10px}
    .witem{border:1px solid rgba(239,68,68,.2);border-radius:var(--rs);padding:12px 14px;background:rgba(59,17,17,.3)}
    .wh{display:flex;align-items:center;gap:8px;margin-bottom:6px}
    .wl{width:22px;height:22px;border-radius:50%;background:var(--red-bg);border:1px solid var(--red);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:var(--red-light);flex-shrink:0}
    .wlbl{font-size:12px;font-weight:600;color:var(--red-light)}
    .sl{display:flex;flex-direction:column;gap:9px}
    .si-row{display:flex;gap:10px;align-items:flex-start}
    .sa{color:var(--yellow-light);font-size:13px;font-weight:700;flex-shrink:0;margin-top:2px}
    .st{font-size:13px;line-height:1.65;color:var(--text)}
    .st code{font-family:'SF Mono','Fira Code',monospace;font-size:11.5px;background:var(--surface2);border:1px solid var(--border);padding:1px 5px;border-radius:4px;color:var(--blue-light)}

    .nav{display:flex;gap:10px;margin-top:20px;padding-top:20px;border-top:1px solid var(--border)}
    .nb{flex:1;padding:11px 16px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface2);color:var(--text);font-family:var(--font);font-size:14px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:7px;transition:all .2s}
    .nb:hover:not(:disabled){background:var(--surface);border-color:var(--border2)}
    .nb:disabled{opacity:.3;cursor:not-allowed}
    .nb.primary{background:var(--blue);border-color:var(--blue);color:#fff}
    .nb.primary:hover:not(:disabled){background:#2563eb}

    .splash{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 40px;text-align:center}
    .splash-icon{font-size:60px;margin-bottom:20px}
    .splash h1{font-size:26px;font-weight:700;margin-bottom:10px;letter-spacing:-.5px}
    .splash p{font-size:15px;color:var(--muted);max-width:480px;line-height:1.7;margin-bottom:28px}
    .splash-stats{display:flex;gap:16px;margin-bottom:28px;flex-wrap:wrap;justify-content:center}
    .sc{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:18px 24px;text-align:center;min-width:110px}
    .sn{font-size:32px;font-weight:700;letter-spacing:-1px}
    .sn.g{color:var(--green-light)}.sn.r{color:var(--red-light)}.sn.b{color:var(--blue-light)}
    .sl2{font-size:11px;color:var(--muted);margin-top:3px}
    .restart-btn{padding:12px 28px;border-radius:var(--rs);background:var(--blue);border:none;color:#fff;font-family:var(--font);font-size:14px;font-weight:700;cursor:pointer;transition:background .2s;margin-right:10px}
    .restart-btn:hover{background:#2563eb}
    .home-btn{padding:12px 28px;border-radius:var(--rs);background:var(--surface2);border:1px solid var(--border);color:var(--text);font-family:var(--font);font-size:14px;font-weight:700;cursor:pointer;transition:all .2s}
    .home-btn:hover{background:var(--surface3);border-color:var(--border2)}

    /* Modal Form */
    .form-group { margin-bottom: 15px; text-align: left; }
    .form-group label { display: block; font-size: 13px; font-weight: 600; color: var(--text); margin-bottom: 5px; }
    .form-group select, .form-group input { width: 100%; padding: 10px; background: var(--surface2); border: 1px solid var(--border); border-radius: var(--rs); color: var(--text); font-family: var(--font); }

    .modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);backdrop-filter:blur(4px);z-index:1000;display:flex;align-items:center;justify-content:center;padding:20px}
    .modal{background:var(--surface);border:1px solid var(--border);border-radius:var(--r);padding:28px;max-width:480px;width:100%}
    .modal h2{font-size:18px;font-weight:700;margin-bottom:6px}
    .modal p{font-size:13px;color:var(--muted);margin-bottom:20px;line-height:1.6}
    .modal-btns{display:flex;flex-direction:column;gap:10px}
    .mbtn{display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:var(--rs);border:1px solid var(--border);background:var(--surface2);color:var(--text);font-family:var(--font);font-size:14px;font-weight:600;cursor:pointer;transition:all .2s;text-align:left}
    .mbtn:hover{border-color:var(--border2);background:var(--border)}
    .mbtn svg{width:20px;height:20px;flex-shrink:0}
    .mbtn .mbtn-desc{font-size:12px;color:var(--muted);font-weight:400;margin-top:1px}
    .mclose{margin-top:14px;width:100%;padding:10px;border-radius:var(--rs);border:1px solid var(--border);background:transparent;color:var(--muted);font-family:var(--font);font-size:13px;cursor:pointer;transition:all .2s}
    .mclose:hover{background:var(--surface2);color:var(--text)}

    .no-results{text-align:center;padding:60px 20px;color:var(--muted)}
    .no-results .emoji{font-size:48px;margin-bottom:16px}
    .no-results h3{font-size:18px;color:var(--text);margin-bottom:8px}

    ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:var(--border);border-radius:99px}

    @media(max-width:768px){
      .home-hero h1{font-size:28px}.home-hero p{font-size:14px}
      .qcm-grid{grid-template-columns:1fr}
      .quiz-layout{grid-template-columns:1fr;grid-template-rows:auto 1fr}
      .sidebar{position:static;height:auto;border-right:none;border-bottom:1px solid var(--border);padding:10px 12px}
      .pg{display:flex;flex-wrap:wrap;gap:3px;align-items:center}
      .qi{padding:5px 8px}.main{padding:16px 14px}
      .pw{display:none}.topbar{padding:0 12px;gap:8px}
      .home-page{padding:20px 12px 40px}
    }
  </style>
</head>
<body>
  <div class="bg-glow"></div>

  <header class="topbar">
    <div class="logo" onclick="goHome()">
      <div class="logo-icon">📝</div>
      QCM Concours FP
    </div>
    <span class="badge" id="topBadge">Révision Interactive</span>
    <button class="back-btn" id="backBtn" onclick="goHome()">← Retour aux thèmes</button>
    <div class="topbar-right">
      <div class="timer-display" id="timerWrap" style="display:none">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        <span id="timerText">00:00</span>
      </div>
      <button class="top-btn" id="pauseBtn" style="display:none" onclick="togglePause()">⏸️ Pause</button>

      <div class="pw" id="pwWrap" style="display:none">
        <span id="progressText">0 / 0</span>
        <div class="pt"><div class="pf" id="progressFill" style="width:0%"></div></div>
      </div>
      <div class="score-b" id="scoreWrap" style="display:none">Score : <span id="scoreDisplay">0 / 0</span></div>
      <button class="top-btn" id="exportBtn" style="display:none" onclick="showExportModal()">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Exporter
      </button>
    </div>
  </header>

  <div class="home-page" id="homePage">
    <div class="home-hero">
      <h1>Préparez votre concours<br>avec confiance 🎯</h1>
      <p>Plus de <strong id="totalQuestions">0</strong> questions réparties en <strong id="totalThemes">0</strong> thèmes pour réviser efficacement les concours de la Fonction Publique.</p>

      <div class="home-stats">
        <div class="home-stat"><div class="num blue" id="statThemes">—</div><div class="lbl">Thèmes</div></div>
        <div class="home-stat"><div class="num green" id="statQuestions">—</div><div class="lbl">Questions</div></div>
        <div class="home-stat"><div class="num purple" id="statCategories">—</div><div class="lbl">Catégories</div></div>
        <div class="home-stat" id="scoreStatBox" style="display:none;"><div class="num yellow" id="statGlobalScore">—</div><div class="lbl">Score Global</div></div>
      </div>

      <div class="controls-bar">
        <button class="btn-settings" onclick="openSettings()">⚙️ Paramètres</button>
        <button class="btn-danger" id="resetBtn" style="display:none;" onclick="resetAllScores()">🗑️ Réinitialiser les scores</button>
      </div>

    </div>
    <div class="search-bar">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <input type="text" id="searchInput" placeholder="Rechercher un thème (SQL, Réseaux, Java...)" oninput="filterThemes()">
    </div>
    <div class="category-filters" id="categoryFilters"></div>
    <div id="themesContainer"></div>
  </div>

  <div class="quiz-page" id="quizPage">
    <div class="quiz-layout">
      <nav class="sidebar" id="sidebar"></nav>
      <main class="main" id="main"></main>
    </div>
  </div>

  <!-- Modal Export -->
  <div class="modal-overlay" id="exportModal" style="display:none" onclick="if(event.target===this)closeModal()">
    <div class="modal">
      <h2>📤 Exporter le cours complet</h2>
      <p>Choisissez le format d'export. Le document contiendra toutes les questions avec leurs explications détaillées.</p>
      <div class="modal-btns">
        <button class="mbtn" onclick="exportHTML()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
          <div><div>Fichier HTML</div><div class="mbtn-desc">Page web autonome, lisible dans tout navigateur</div></div>
        </button>
        <button class="mbtn" onclick="exportPrint()">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
          <div><div>Imprimer / PDF</div><div class="mbtn-desc">Ouvre la boîte d'impression</div></div>
        </button>
      </div>
      <button class="mclose" onclick="closeModal()">Annuler</button>
    </div>
  </div>

  <!-- Modal Paramètres -->
  <div class="modal-overlay" id="settingsModal" style="display:none" onclick="if(event.target===this)closeSettings()">
    <div class="modal">
      <h2>⚙️ Paramètres du QCM</h2>
      <p>Configurez le chronomètre pour vos sessions de révision.</p>

      <div class="form-group">
        <label>Chronomètre</label>
        <select id="setTimerEnable">
          <option value="0">Désactivé</option>
          <option value="1">Activé</option>
        </select>
      </div>
      <div class="form-group">
        <label>Type de limite</label>
        <select id="setTimerType">
          <option value="quiz">Globale (pour tout le QCM)</option>
          <option value="question">Par question</option>
        </select>
      </div>
      <div class="form-group">
        <label>Durée (en secondes)</label>
        <input type="number" id="setTimerDuration" value="600" min="5">
      </div>

      <div class="modal-btns" style="flex-direction: row; justify-content: flex-end; margin-top: 24px;">
        <button class="mclose" style="width: auto; margin: 0; margin-right: 10px;" onclick="closeSettings()">Annuler</button>
        <button class="nb primary" style="flex: 0 1 auto; margin: 0; padding: 10px 20px;" onclick="saveSettings()">Enregistrer</button>
      </div>
    </div>
  </div>

  <script>
    // ═══ DONNÉES EMBARQUÉES ═══
    const ALL_THEMES = //__THEMES_DATA__;

    // ═══ STATE ═══
    let currentQCM = [];
    let currentThemeName = '';
    let currentThemeIdx = -1;
    let state = { current: 0, answers: [], revealed: [] };
    let activeCategory = 'Tous';
    let scores = {};
    let settings = { timerEnabled: false, timerType: 'quiz', duration: 600 };

    let timerInterval = null;
    let timeRemaining = 0;
    let isPaused = false;

    // ═══ INIT ═══
    document.addEventListener('DOMContentLoaded', () => { 
      loadStoredData();
      renderHomePage(); 
    });

    function loadStoredData() {
      try {
        const sc = localStorage.getItem('qcm_scores');
        if (sc) scores = JSON.parse(sc);
        const st = localStorage.getItem('qcm_settings');
        if (st) settings = JSON.parse(st);
      } catch(e) {}
    }

    // ═══ HOME PAGE ═══
    function renderHomePage() {
      const totalQ = ALL_THEMES.reduce((s, t) => s + t.questions.length, 0);
      const categories = [...new Set(ALL_THEMES.map(t => t.category))];
      document.getElementById('totalQuestions').textContent = totalQ;
      document.getElementById('totalThemes').textContent = ALL_THEMES.length;
      document.getElementById('statThemes').textContent = ALL_THEMES.length;
      document.getElementById('statQuestions').textContent = totalQ;
      document.getElementById('statCategories').textContent = categories.length;

      let filtersHtml = '<button class="cat-filter active" onclick="filterByCategory(\\'Tous\\', this)">Tous</button>';
      categories.sort().forEach(cat => {
        const count = ALL_THEMES.filter(t => t.category === cat).length;
        filtersHtml += '<button class="cat-filter" onclick="filterByCategory(\\'' + cat.replace(/'/g, "\\\\'") + '\\', this)">' + cat + ' (' + count + ')</button>';
      });
      document.getElementById('categoryFilters').innerHTML = filtersHtml;

      updateGlobalScoreStats();
      renderThemes(ALL_THEMES);
    }

    function updateGlobalScoreStats() {
      let totC = 0, totT = 0;
      Object.values(scores).forEach(s => { totC += s.correct; totT += s.total; });
      if (totT > 0) {
        document.getElementById('scoreStatBox').style.display = 'block';
        document.getElementById('resetBtn').style.display = 'flex';
        let globalPct = Math.round((totC / totT) * 100);
        document.getElementById('statGlobalScore').textContent = globalPct + '%';
      } else {
        document.getElementById('scoreStatBox').style.display = 'none';
        document.getElementById('resetBtn').style.display = 'none';
      }
    }

    function renderThemes(items) {
      if (items.length === 0) {
        document.getElementById('themesContainer').innerHTML = '<div class="no-results"><div class="emoji">🔍</div><h3>Aucun résultat</h3><p>Essayez un autre terme de recherche.</p></div>';
        return;
      }
      const groups = {};
      items.forEach(t => { if (!groups[t.category]) groups[t.category] = []; groups[t.category].push(t); });
      let html = '';
      Object.keys(groups).sort().forEach(cat => {
        const catItems = groups[cat];
        const totalQ = catItems.reduce((s, t) => s + t.questions.length, 0);
        html += '<div class="category-group"><div class="category-title">' + cat + '<span class="category-count">' + catItems.length + ' thèmes · ' + totalQ + ' questions</span></div><div class="qcm-grid">';
        catItems.sort((a, b) => a.name.localeCompare(b.name)).forEach(t => {
          const idx = ALL_THEMES.indexOf(t);
          const qCount = t.questions.length;
          let scoreTag = '';
          if (scores[t.name]) {
            scoreTag = '<span class="card-score">' + scores[t.name].correct + '/' + scores[t.name].total + ' (' + scores[t.name].pct + '%)</span>';
          }
          html += '<div class="qcm-card" onclick="loadQuiz(' + idx + ')"><div class="card-head"><div class="card-icon">' + t.icon + '</div><div class="card-title">' + t.name + '</div></div><div class="card-meta"><span class="card-count">' + qCount + ' question' + (qCount > 1 ? 's' : '') + '</span><span class="card-cat">' + t.category + '</span>' + scoreTag + '<div class="card-play"><svg viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg></div></div></div>';
        });
        html += '</div></div>';
      });
      document.getElementById('themesContainer').innerHTML = html;
    }

    function filterThemes() {
      const query = document.getElementById('searchInput').value.toLowerCase().trim();
      let filtered = ALL_THEMES;
      if (activeCategory !== 'Tous') filtered = filtered.filter(t => t.category === activeCategory);
      if (query) filtered = filtered.filter(t =>
        t.name.toLowerCase().includes(query) || t.category.toLowerCase().includes(query) ||
        t.questions.some(q => (q.partie || '').toLowerCase().includes(query))
      );
      renderThemes(filtered);
    }

    function filterByCategory(cat, btn) {
      activeCategory = cat;
      document.querySelectorAll('.cat-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterThemes();
    }

    // ═══ SETTINGS & PERSISTENCE ═══
    function openSettings() {
      document.getElementById('setTimerEnable').value = settings.timerEnabled ? "1" : "0";
      document.getElementById('setTimerType').value = settings.timerType;
      document.getElementById('setTimerDuration').value = settings.duration;
      document.getElementById('settingsModal').style.display = 'flex';
    }

    function closeSettings() {
      document.getElementById('settingsModal').style.display = 'none';
    }

    function saveSettings() {
      settings.timerEnabled = document.getElementById('setTimerEnable').value === "1";
      settings.timerType = document.getElementById('setTimerType').value;
      settings.duration = parseInt(document.getElementById('setTimerDuration').value) || 600;
      localStorage.setItem('qcm_settings', JSON.stringify(settings));
      closeSettings();
    }

    function saveCurrentScore() {
      const correct = state.answers.filter((a, i) => a === currentQCM[i].correct).length;
      const answered = state.answers.filter(Boolean).length;
      if (answered > 0) {
        scores[currentThemeName] = {
          correct: correct,
          total: currentQCM.length,
          pct: Math.round((correct / currentQCM.length) * 100)
        };
        localStorage.setItem('qcm_scores', JSON.stringify(scores));
      }
    }

    function resetAllScores() {
      if (confirm("Voulez-vous vraiment réinitialiser TOUS vos scores ? Cette action est irréversible.")) {
        scores = {};
        localStorage.removeItem('qcm_scores');
        renderHomePage();
      }
    }

    // ═══ LOAD QUIZ ═══
    function loadQuiz(idx) {
      const theme = ALL_THEMES[idx];
      currentQCM = theme.questions;
      currentThemeName = theme.name;
      currentThemeIdx = idx;
      state = { current: 0, answers: new Array(currentQCM.length).fill(null), revealed: new Array(currentQCM.length).fill(false) };
      isPaused = false;
      showQuizPage();

      if (settings.timerEnabled && settings.timerType === 'quiz') {
        timeRemaining = settings.duration;
        startTimer();
      }
      renderAll();
    }

    function showQuizPage() {
      document.getElementById('homePage').style.display = 'none';
      document.getElementById('quizPage').style.display = 'block';
      document.getElementById('backBtn').style.display = 'flex';
      document.getElementById('topBadge').textContent = currentThemeName;
      document.getElementById('pwWrap').style.display = 'flex';
      document.getElementById('scoreWrap').style.display = 'block';
      document.getElementById('exportBtn').style.display = 'flex';
      window.scrollTo(0, 0);
    }

    function goHome() {
      clearInterval(timerInterval);
      document.getElementById('homePage').style.display = 'block';
      document.getElementById('quizPage').style.display = 'none';
      document.getElementById('backBtn').style.display = 'none';
      document.getElementById('topBadge').textContent = 'Révision Interactive';
      document.getElementById('pwWrap').style.display = 'none';
      document.getElementById('scoreWrap').style.display = 'none';
      document.getElementById('exportBtn').style.display = 'none';
      document.getElementById('timerWrap').style.display = 'none';
      document.getElementById('pauseBtn').style.display = 'none';
      saveCurrentScore();
      renderHomePage();
    }

    // ═══ TIMER ═══
    function startTimer() {
      clearInterval(timerInterval);
      document.getElementById('timerWrap').style.display = 'flex';
      if (settings.timerType === 'question') {
        document.getElementById('pauseBtn').style.display = 'none';
      } else {
        document.getElementById('pauseBtn').style.display = 'flex';
        document.getElementById('pauseBtn').innerHTML = '⏸️ Pause';
      }
      updateTimerDisplay();
      timerInterval = setInterval(() => {
        if (isPaused) return;
        timeRemaining--;
        updateTimerDisplay();
        if (timeRemaining <= 0) handleTimeUp();
      }, 1000);
    }

    function updateTimerDisplay() {
      const m = Math.floor(timeRemaining / 60).toString().padStart(2, '0');
      const s = (timeRemaining % 60).toString().padStart(2, '0');
      document.getElementById('timerText').textContent = m + ':' + s;
      if (timeRemaining <= 10 && timeRemaining > 0) {
        document.getElementById('timerWrap').classList.add('danger');
      } else {
        document.getElementById('timerWrap').classList.remove('danger');
      }
    }

    // ═══ SIDEBAR ═══
    function renderSidebar() {
      const parties = {};
      currentQCM.forEach((q, i) => { const p = q.partie || 'Sans catégorie'; if (!parties[p]) parties[p] = []; parties[p].push({ q, i }); });
      let html = '<div class="sb-title">' + currentThemeName + ' (' + currentQCM.length + ')</div>';
      for (const [p, items] of Object.entries(parties)) {
        html += '<div class="pg"><div class="pl">' + p + '</div>';
        items.forEach(({ q, i }) => {
          let cls = '';
          if (i === state.current) cls = ' active';
          else if (state.answers[i]) cls = state.answers[i] === q.correct ? ' correct' : ' wrong';
          const dot = state.answers[i] ? '<div class="qs"></div>' : '';
          html += '<div class="qi' + cls + '" onclick="goTo(' + i + ')"><div class="qn">' + (i+1) + '</div><span>' + q.num + '</span>' + dot + '</div>';
        });
        html += '</div>';
      }
      document.getElementById('sidebar').innerHTML = html;
    }

    // ═══ PROGRESS ═══
    function renderProgress() {
      const answered = state.answers.filter(Boolean).length;
      const correct = state.answers.filter((a, i) => a === currentQCM[i].correct).length;
      const pct = Math.round((answered / currentQCM.length) * 100);
      document.getElementById('progressFill').style.width = pct + '%';
      document.getElementById('progressText').textContent = answered + ' / ' + currentQCM.length;
      document.getElementById('scoreDisplay').textContent = correct + ' / ' + answered;
    }

    // ═══ MAIN RENDER ═══
    function renderMain() {
      const q = currentQCM[state.current];
      const answered = state.answers[state.current];
      const revealed = state.revealed[state.current];

      let choicesHtml = '';
      Object.entries(q.choices).forEach(([k, v]) => {
        let cls = '', icon = '';
        if (answered) {
          if (k === q.correct) { cls = ' correct disabled'; icon = '<span class="ci">✓</span>'; }
          else if (k === answered) { cls = ' wrong disabled'; icon = '<span class="ci">✗</span>'; }
          else cls = ' ndis disabled';
        }
        choicesHtml += '<div class="choice' + cls + '" onclick="selectChoice(\\\'\' + k + \'\\\')"><div class="cl">' + k + '</div><div class="ct">' + v + '</div>' + icon + '</div>';
      });

      let expHtml = '';
      if (revealed) {
        const isCorrect = answered === q.correct;
        const wrongItemsHtml = (q.wrongAnalysis || []).map(w =>
          '<div class="witem"><div class="wh"><div class="wl">' + w.l + '</div><div class="wlbl">Proposition ' + w.l + ' — Pourquoi incorrecte</div></div><div class="et">' + w.t + '</div></div>'
        ).join('');
        const summaryHtml = (q.summary || []).map(s =>
          '<div class="si-row"><div class="sa">→</div><div class="st">' + s + '</div></div>'
        ).join('');

        expHtml = '<div class="explanation">';
        expHtml += '<div class="ab' + (isCorrect ? '' : ' wa') + '"><div class="ai">' + (isCorrect ? '✅' : '❌') + '</div><div><div class="albl">' + (isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse') + '</div><div class="ac">La bonne réponse est la <strong>Proposition ' + q.correct + '</strong> : ' + q.choices[q.correct] + '</div></div></div>';
        expHtml += '<div class="eb"><div class="ebt blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>Explication détaillée</div><div class="et">' + (q.explanation || '<p>Pas d\\'explication disponible.</p>') + '</div></div>';
        if (wrongItemsHtml) expHtml += '<div class="eb"><div class="ebt red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>Analyse des propositions incorrectes</div><div class="wi">' + wrongItemsHtml + '</div></div>';
        if (q.examiner) expHtml += '<div class="eb"><div class="ebt purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>Ce que l\\'examinateur cherche à vérifier</div><div class="et"><p>' + q.examiner + '</p></div></div>';
        if (summaryHtml) expHtml += '<div class="eb"><div class="ebt yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>Ce qu\\'il faut retenir</div><div class="sl">' + summaryHtml + '</div></div>';
        expHtml += '</div>';
      }

      const revealDisplay = answered && !revealed ? 'block' : 'none';
      let mainHtml = '<div class="q-header"><span class="pt-tag">' + (q.partie || currentThemeName) + '</span><span class="qn-tag">' + q.num + ' · ' + (state.current+1) + ' / ' + currentQCM.length + '</span></div>';
      mainHtml += '<div class="qcard"><div class="qtext">' + q.q + '</div><div class="choices">' + choicesHtml + '</div></div>';
      mainHtml += '<div class="reveal-s" id="revealS" style="display:' + revealDisplay + '"><button class="reveal-btn" onclick="revealAnswer()"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>Voir l\\'explication complète du cours</button></div>';
      mainHtml += expHtml;
      mainHtml += '<div class="nav"><button class="nb" onclick="goTo(' + (state.current-1) + ')"' + (state.current === 0 ? ' disabled' : '') + '>← Précédent</button>';
      if (state.current < currentQCM.length - 1) mainHtml += '<button class="nb primary" onclick="goTo(' + (state.current+1) + ')">Suivant →</button>';
      else mainHtml += '<button class="nb primary" onclick="showResults()">Voir les résultats 🎉</button>';
      mainHtml += '</div>';

      if (isPaused) {
        mainHtml += '<div class="pause-overlay" id="pauseOverlay"><h2>Double-cliquez ou cliquez sur "Reprendre" pour continuer</h2></div>';
      }

      document.getElementById('main').innerHTML = mainHtml;
      document.getElementById('main').scrollTop = 0;
    }

    // ═══ INTERACTIONS ═══
    function selectChoice(k) {
      if (state.answers[state.current] || isPaused) return;
      state.answers[state.current] = k;
      if (settings.timerEnabled && settings.timerType === 'question') {
        clearInterval(timerInterval);
      }
      renderAll();
    }

    function revealAnswer() {
      if (isPaused) return;
      state.revealed[state.current] = true;
      renderAll();
    }

    function goTo(i) {
      if (i < 0 || i >= currentQCM.length || isPaused) return;
      state.current = i;
      if (settings.timerEnabled && settings.timerType === 'question') {
        timeRemaining = settings.duration;
        startTimer();
      }
      renderAll();
    }

    function renderAll() {
      renderSidebar();
      renderMain();
      renderProgress();
    }

    // ═══ RÉSULTATS ═══
    function showResults() {
      clearInterval(timerInterval);
      document.getElementById('timerWrap').style.display = 'none';
      document.getElementById('pauseBtn').style.display = 'none';

      saveCurrentScore();

      const correct = state.answers.filter((a, i) => a === currentQCM[i].correct).length;
      const answered = state.answers.filter(Boolean).length;
      const pct = answered > 0 ? Math.round((correct / currentQCM.length) * 100) : 0;
      const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
      const msg = pct >= 80 ? 'Excellent ! Vous maîtrisez ce thème.' : pct >= 60 ? 'Bon résultat ! Quelques révisions suffiront.' : 'Continuez à réviser — vous progressez !';
      document.getElementById('main').innerHTML = '<div class="splash"><div class="splash-icon">' + emoji + '</div><h1>Quiz terminé !</h1><p>' + msg + '</p><div class="splash-stats"><div class="sc"><div class="sn g">' + correct + '</div><div class="sl2">Bonnes réponses</div></div><div class="sc"><div class="sn r">' + (answered - correct) + '</div><div class="sl2">Mauvaises réponses</div></div><div class="sc"><div class="sn">' + (currentQCM.length - answered) + '</div><div class="sl2">Non répondues</div></div><div class="sc"><div class="sn b">' + pct + '%</div><div class="sl2">Score final</div></div></div><div><button class="restart-btn" onclick="restart()">🔄 Recommencer</button><button class="home-btn" onclick="goHome()">🏠 Retour aux thèmes</button></div></div>';
    }

    function restart() {
      state = { current: 0, answers: new Array(currentQCM.length).fill(null), revealed: new Array(currentQCM.length).fill(false) };
      isPaused = false;
      if (settings.timerEnabled && settings.timerType === 'quiz') {
        timeRemaining = settings.duration;
        startTimer();
      }
      renderAll();
    }

    // ═══ EXPORT ═══
    function showExportModal() { document.getElementById('exportModal').style.display = 'flex'; }
    function closeModal() { document.getElementById('exportModal').style.display = 'none'; }

    function buildExportContent() {
      let html = '';
      currentQCM.forEach((q, i) => {
        const choicesHtml = Object.entries(q.choices).map(([k, v]) => '<div class="ec ' + (k === q.correct ? 'ecorrect' : '') + '"><span class="ek">' + k + '</span> ' + v + (k === q.correct ? ' ✓' : '') + '</div>').join('');
        const wrongHtml = (q.wrongAnalysis || []).map(w => '<div class="ew"><strong>Proposition ' + w.l + ' :</strong> ' + w.t + '</div>').join('');
        const summaryHtml = (q.summary || []).map(s => '<li>' + s + '</li>').join('');
        html += '<div class="eq"><div class="eq-header"><span class="eq-num">Question ' + (i+1) + '</span><span class="eq-tag">' + (q.partie||'') + ' · ' + q.num + '</span></div><div class="eq-q">' + q.q + '</div><div class="eq-choices">' + choicesHtml + '</div><div class="eq-section eq-answer"><strong>✅ Bonne réponse :</strong> Proposition ' + q.correct + ' — ' + q.choices[q.correct] + '</div><div class="eq-section"><div class="eq-section-title">📖 Explication</div><div class="eq-text">' + (q.explanation||'') + '</div></div>';
        if (wrongHtml) html += '<div class="eq-section"><div class="eq-section-title">❌ Propositions incorrectes</div>' + wrongHtml + '</div>';
        if (summaryHtml) html += '<div class="eq-section eq-summary"><div class="eq-section-title">⭐ À retenir</div><ul>' + summaryHtml + '</ul></div>';
        html += '</div>';
      });
      return html;
    }

    function exportHTML() {
      const content = buildExportContent();
      const blob = new Blob(['<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>' + currentThemeName + ' — QCM</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,sans-serif;background:#f6f8fa;color:#1f2328;line-height:1.6;padding:40px 24px;max-width:900px;margin:0 auto}.eq{background:#fff;border:1px solid #d0d7de;border-radius:10px;padding:28px;margin-bottom:28px;page-break-inside:avoid}.eq-header{display:flex;align-items:center;gap:10px;margin-bottom:14px}.eq-num{font-size:12px;font-weight:700;background:#3b82f6;color:#fff;padding:3px 10px;border-radius:20px}.eq-tag{font-size:12px;color:#57606a;background:#f6f8fa;border:1px solid #d0d7de;padding:3px 10px;border-radius:20px}.eq-q{font-size:17px;font-weight:600;margin-bottom:18px;line-height:1.5}.eq-choices{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}.ec{display:flex;gap:10px;padding:10px 14px;border-radius:6px;border:1px solid #d0d7de;background:#f6f8fa;font-size:14px}.ec.ecorrect{background:#dafbe1;border-color:#22c55e;font-weight:600;color:#15803d}.ek{font-weight:700;min-width:18px;flex-shrink:0}.eq-section{margin-top:16px;padding-top:16px;border-top:1px solid #eaecef}.eq-answer{background:#dafbe1;border:1px solid #22c55e;border-radius:8px;padding:12px 16px;margin-top:16px;font-size:14px;color:#15803d}.eq-section-title{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#57606a;margin-bottom:10px}.eq-text{font-size:14px;line-height:1.8;color:#444c56}.eq-text p{margin-bottom:10px}.eq-text strong{color:#1f2328}.ew{background:#fff5f5;border-left:3px solid #ef4444;padding:10px 14px;margin-bottom:8px;font-size:14px;line-height:1.7}.ew strong{color:#ef4444}.eq-summary{background:#fffbee;border:1px solid #d4a72c;border-radius:8px;padding:16px}.eq-summary ul{list-style:none;display:flex;flex-direction:column;gap:8px}.eq-summary li{font-size:14px;line-height:1.6;padding-left:20px;position:relative}.eq-summary li::before{content:"→";position:absolute;left:0;color:#d4a72c;font-weight:700}@media print{.eq{break-inside:avoid}}</style></head><body><h1 style="text-align:center;margin-bottom:32px;font-size:28px">📝 ' + currentThemeName + '</h1>' + content + '</body></html>'], { type: 'text/html;charset=utf-8' });
      const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = 'qcm-' + currentThemeName.toLowerCase().replace(/\\s+/g, '-') + '.html'; a.click(); closeModal();
    }

    function exportPrint() {
      const content = buildExportContent();
      const win = window.open('', '_blank');
      win.document.write('<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><title>' + currentThemeName + '</title><style>*{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,sans-serif;background:#fff;color:#1f2328;line-height:1.6;padding:20px;max-width:900px;margin:0 auto}.eq{border:1px solid #d0d7de;border-radius:8px;padding:22px;margin-bottom:22px;break-inside:avoid}.eq-header{display:flex;align-items:center;gap:8px;margin-bottom:12px}.eq-num{font-size:11px;font-weight:700;background:#3b82f6;color:#fff;padding:2px 8px;border-radius:20px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.eq-tag{font-size:11px;color:#57606a;background:#f6f8fa;border:1px solid #d0d7de;padding:2px 8px;border-radius:20px}.eq-q{font-size:16px;font-weight:600;margin-bottom:14px;line-height:1.5}.eq-choices{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}.ec{display:flex;gap:8px;padding:8px 12px;border-radius:5px;border:1px solid #d0d7de;font-size:13px}.ec.ecorrect{background:#dafbe1;border-color:#22c55e;font-weight:600;color:#15803d;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ek{font-weight:700;min-width:16px;flex-shrink:0}.eq-section{margin-top:14px;padding-top:14px;border-top:1px solid #eaecef}.eq-answer{background:#dafbe1;border:1px solid #22c55e;border-radius:6px;padding:10px 14px;margin-top:14px;font-size:13px;color:#15803d;-webkit-print-color-adjust:exact;print-color-adjust:exact}.eq-section-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#57606a;margin-bottom:8px}.eq-text{font-size:13px;line-height:1.75;color:#444c56}.ew{background:#fff5f5;border-left:3px solid #ef4444;padding:8px 12px;margin-bottom:7px;font-size:13px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.ew strong{color:#ef4444}.eq-summary{background:#fffbee;border:1px solid #d4a72c;border-radius:6px;padding:14px;-webkit-print-color-adjust:exact;print-color-adjust:exact}.eq-summary ul{list-style:none;display:flex;flex-direction:column;gap:7px}.eq-summary li{font-size:13px;line-height:1.6;padding-left:18px;position:relative}.eq-summary li::before{content:"→";position:absolute;left:0;color:#d4a72c;font-weight:700}</style></head><body><h1 style="text-align:center;margin-bottom:24px">📝 ' + currentThemeName + '</h1>' + content + '<script>window.onload=function(){window.print()}<\\\\/script></body></html>');
      win.document.close(); closeModal();
    }

    // ═══ KEYBOARD SHORTCUTS ═══
    document.addEventListener('keydown', e => {
      if (document.getElementById('quizPage').style.display !== 'block' || isPaused) return;
      if (e.key === 'ArrowRight' || e.key === 'n') goTo(state.current + 1);
      else if (e.key === 'ArrowLeft' || e.key === 'p') goTo(state.current - 1);
      else if (e.key === 'r') revealAnswer();
      else if (['a','b','c','d','A','B','C','D'].includes(e.key)) selectChoice(e.key.toUpperCase());
      else if (e.key === 'Escape') goHome();
    });
  </script>
</body>
</html>"""

# ─────────────────────────────────────────────────────────────────
# 4. Injecter les données et écrire le résultat dans index.html et qcm_app.html
# ─────────────────────────────────────────────────────────────────
html_final = html_template.replace('//__THEMES_DATA__', themes_json)

# Écrire dans index.html
index_path = os.path.join(DIR, 'index.html')
with open(index_path, 'w', encoding='utf-8') as f:
    f.write(html_final)

# Écrire aussi dans qcm_app.html
qcm_app_path = os.path.join(DIR, 'qcm_app.html')
with open(qcm_app_path, 'w', encoding='utf-8') as f:
    f.write(html_final)

size_mb = os.path.getsize(index_path) / (1024 * 1024)
print(f"\n✅ index.html et qcm_app.html mis à jour ({size_mb:.1f} MB)")
print(f"   → 100% autonome, aucun serveur ou fichier manifest n'est plus requis !")
print(f"   → {len(all_themes)} thèmes, {total_questions} questions embarquées.")
