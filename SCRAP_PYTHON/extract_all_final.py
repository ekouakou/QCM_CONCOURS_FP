#!/usr/bin/env python3
"""
Extracteur de QCM WayToLearnX - Version avec regex robuste
Analyse le HTML brut pour extraire les questions
"""

import requests
from bs4 import BeautifulSoup
import json
import time
import re


class QCMExtractorRobust:
    """Extracteur avec analyse regex du contenu"""

    def __init__(self, delay=2.0):
        self.delay = delay
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }

    def extract_qcm_from_page(self, url):
        """Extrait un QCM depuis une URL"""
        try:
            print(f"📥 Récupération de: {url}")
            response = requests.get(url, headers=self.headers, timeout=30)
            response.raise_for_status()

            # Analyser le HTML
            html_content = response.text
            soup = BeautifulSoup(html_content, 'html.parser')

            # Extraction des métadonnées
            title = self._extract_title(soup)
            partie_num = self._extract_partie_number(url, title)

            # Trouver le contenu principal
            main_content = soup.find('div', class_='entry-content')
            if not main_content:
                main_content = soup.find('article')
            if not main_content:
                main_content = soup

            # Extraire le HTML du contenu
            content_html = str(main_content)

            # Extraction des questions depuis le HTML
            questions = self._extract_questions_from_html(content_html)

            result = {
                'url': url,
                'title': title,
                'partie': partie_num,
                'questions_count': len(questions),
                'questions': questions
            }

            # Attendre avant la prochaine requête
            time.sleep(self.delay)

            return result

        except Exception as e:
            print(f"❌ Erreur lors de l'extraction de {url}: {e}")
            import traceback
            traceback.print_exc()
            return None

    def _extract_title(self, soup):
        """Extrait le titre de la page"""
        h1 = soup.find('h1')
        if h1:
            return h1.get_text(strip=True)

        title_tag = soup.find('title')
        if title_tag:
            return title_tag.get_text(strip=True).split(' - ')[0]

        return "QCM Sans Titre"

    def _extract_partie_number(self, url, title):
        """Extrait le numéro de partie"""
        match = re.search(r'partie[- ](\d+)', url, re.IGNORECASE)
        if match:
            return int(match.group(1))

        match = re.search(r'partie[- ](\d+)', title, re.IGNORECASE)
        if match:
            return int(match.group(1))

        return 0

    def _extract_questions_from_html(self, html):
        """Extrait les questions depuis le HTML avec regex"""
        questions = []

        # DEBUG: Afficher un aperçu du HTML
        print("\n🔍 DEBUG - Aperçu HTML (premiers 2000 caractères):")
        print(html[:2000])
        print("\n🔍 Recherche de balises h6...")

        # Chercher toutes les balises h6
        h6_tags = re.findall(r'<h6[^>]*>.*?</h6>', html, re.DOTALL | re.IGNORECASE)
        print(f"   Nombre de <h6> trouvés: {len(h6_tags)}")
        if h6_tags:
            print(f"   Premier <h6>: {h6_tags[0][:100]}...")

        # Pattern pour trouver les blocs de questions
        # Cherche: <h6>numéro. Question</h6> suivi de choix A B C D E
        question_pattern = r'<h6[^>]*>(\d+)\.\s*(.+?)</h6>(.*?)(?=<h6|$)'

        matches = re.finditer(question_pattern, html, re.DOTALL | re.IGNORECASE)

        print(f"\n🔍 Recherche de questions avec pattern...")

        for match in matches:
            question_num = match.group(1)
            question_text = self._clean_html(match.group(2))
            content_after = match.group(3)

            print(f"\n   ✓ Question {question_num} trouvée: {question_text[:50]}...")

            # Nettoyer la question
            question_text = question_text.strip()

            if len(question_text) < 5:
                continue

            # Extraire les choix A, B, C, D, E
            choices = self._extract_choices_from_content(content_after)

            # Extraire la réponse et l'explication
            answer, explanation = self._extract_answer_from_content(content_after)

            if choices:
                question = {
                    'number': question_num,
                    'question': question_text,
                    'choices': choices,
                    'correct_answer': answer,
                    'explanation': explanation
                }
                questions.append(question)

        return questions

    def _extract_choices_from_content(self, content):
        """Extrait les choix A, B, C, D, E"""
        choices = {}

        # DEBUG: Afficher un échantillon du contenu pour les choix
        print(f"\n      🔍 Contenu pour extraction des choix (500 premiers car):")
        print(f"      {content[:500]}")

        # Pattern spécifique pour cette structure:
        # <span class="label label-info" id="qcm">A</span> Texte du choix
        # Le texte peut être suivi de <p>, <span>, ou autre balise
        choice_pattern = r'<span[^>]*class="label[^"]*"[^>]*>([A-E])</span>\s*([^<]+)'

        matches = re.finditer(choice_pattern, content, re.DOTALL | re.IGNORECASE)

        for match in matches:
            letter = match.group(1)
            choice_text = match.group(2).strip()

            # Nettoyer le texte
            choice_text = self._clean_html(choice_text)

            # Arrêter si on atteint "Réponse" ou un bouton
            if 'réponse' in choice_text.lower() or len(choice_text) < 3:
                continue

            choices[letter] = choice_text
            print(f"      {letter}: {choice_text}")

        print(f"      ✓ Total choix extraits: {len(choices)}")
        return choices

    def _extract_answer_from_content(self, content):
        """Extrait la réponse correcte et l'explication"""
        answer = ''
        explanation = ''

        # Chercher le bloc de réponse dans la div collapseomatic_content
        # Structure: <div class="alert-message answer"><b>...<i>...</i>B</b></div>
        answer_pattern = r'<div[^>]*class="alert-message answer"[^>]*>.*?<b>.*?([A-E])</b>'
        answer_match = re.search(answer_pattern, content, re.DOTALL | re.IGNORECASE)

        if answer_match:
            answer = answer_match.group(1)
            print(f"      Réponse trouvée: {answer}")

        # Chercher l'explication dans la div hint
        # Structure: <div class="alert-message hint"><b>Texte explication</b></div>
        hint_pattern = r'<div[^>]*class="alert-message hint"[^>]*><b>(.*?)</b></div>'
        hint_match = re.search(hint_pattern, content, re.DOTALL | re.IGNORECASE)

        if hint_match:
            explanation = self._clean_html(hint_match.group(1))
            print(f"      Explication: {explanation[:80]}...")

        return answer, explanation

    def _clean_html(self, text):
        """Nettoie le HTML d'un texte"""
        # Supprimer les balises HTML
        text = re.sub(r'<[^>]+>', '', text)
        # Décoder les entités HTML
        text = text.replace('&nbsp;', ' ')
        text = text.replace('&amp;', '&')
        text = text.replace('&lt;', '<')
        text = text.replace('&gt;', '>')
        text = text.replace('&quot;', '"')
        text = text.replace('&#8217;', "'")
        text = text.replace('&#8211;', '-')
        text = text.replace('&#8230;', '...')
        # Nettoyer les espaces
        text = re.sub(r'\s+', ' ', text)
        return text.strip()

    def save_to_json(self, data, filename):
        """Sauvegarde les données en JSON"""
        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        print(f"💾 Sauvegardé dans: {filename}")


def test_extraction():
    """Test l'extraction sur une page"""
    print("🧪 Test sur la partie 1...")
    print("=" * 60)

    extractor = QCMExtractorRobust(delay=1.0)
    test_data = extractor.extract_qcm_from_page(
        "https://waytolearnx.com/2018/11/qcm-architecture-des-ordinateurs-partie-1.html"
    )

    if test_data and test_data['questions_count'] > 0:
        print(f"\n✅ Test réussi: {test_data['questions_count']} questions extraites")
        print(f"📌 Titre: {test_data['title']}")
        print(f"📌 Partie: {test_data['partie']}")

        # Afficher les 3 premières questions
        for i, q in enumerate(test_data['questions'][:3], 1):
            print(f"\n{'─' * 60}")
            print(f"Question {q.get('number', i)}: {q['question']}")
            for letter, choice in q['choices'].items():
                print(f"  {letter}) {choice}")
            print(f"  ✓ Réponse: {q['correct_answer']}")
            if q['explanation']:
                print(f"  💡 {q['explanation'][:150]}...")

        # Sauvegarder le test
        extractor.save_to_json([test_data], "test_extraction.json")

        return True
    else:
        print("\n❌ Test échoué - Aucune question extraite")
        if test_data:
            print(f"Debug: Questions trouvées = {test_data['questions_count']}")
        return False


def extract_qcm_range(url_template, start_part, end_part, output_filename, delay=2.0):
    """Extrait un ensemble de QCM pour une plage de parties."""
    urls = [url_template.format(i) for i in range(start_part, end_part + 1)]

    print(f"\n{'=' * 60}")
    print(f"🚀 Extraction de {len(urls)} QCM (parties {start_part} à {end_part})...")
    print(f"{'=' * 60}\n")

    extractor = QCMExtractorRobust(delay=delay)
    all_data = []
    total_questions = 0

    for i, url in enumerate(urls, 1):
        print(f"\n[{i}/{len(urls)}] ", end='')

        data = extractor.extract_qcm_from_page(url)
        if data and data['questions_count'] > 0:
            all_data.append(data)
            total_questions += data['questions_count']
            print(f"✅ {data['questions_count']} questions")
        else:
            print(f"❌ Échec ou 0 questions")

    extractor.save_to_json(all_data, output_filename)

    print(f"\n{'=' * 60}")
    print(f"🎉 EXTRACTION TERMINÉE!")
    print(f"📊 Résumé:")
    print(f"   • QCM extraits: {len(all_data)}/{len(urls)}")
    print(f"   • Questions totales: {total_questions}")
    print(f"   • Fichier: {output_filename}")
    print(f"{'=' * 60}")

    return all_data


def extract_qcm_smart(base_template, start_part, end_part, output_filename, delay=2.0):
    """Extraction intelligente qui teste plusieurs templates d'URL."""
    import requests
    
    # Templates possibles selon les patterns du site
    templates = [
        base_template,
        base_template.replace("/2018/11/", "/2022/06/"),
        base_template.replace("/2018/11/", "/2025/03/")
    ]
    
    # Dédoublonner les templates
    unique_templates = list(dict.fromkeys(templates))
    
    print(f"\n{'=' * 60}")
    print(f"🧠 Extraction intelligente (parties {start_part} à {end_part})")
    print(f"{'=' * 60}\n")
    
    extractor = QCMExtractorRobust(delay=delay)
    all_data = []
    total_questions = 0
    tested_urls = set()
    
    for part_num in range(start_part, end_part + 1):
        url_found = False
        
        for template in unique_templates:
            url = template.format(part_num)
            
            if url in tested_urls:
                continue
                
            tested_urls.add(url)
            
            # Test rapide si l'URL existe
            try:
                response = requests.head(url, headers=extractor.headers, timeout=10)
                if response.status_code == 200:
                    print(f"\n[{part_num}] 📥 {url} ", end='')
                    
                    data = extractor.extract_qcm_from_page(url)
                    if data and data['questions_count'] > 0:
                        all_data.append(data)
                        total_questions += data['questions_count']
                        print(f"✅ {data['questions_count']} questions")
                        url_found = True
                        break
                    else:
                        print(f"❌ 0 questions")
                else:
                    print(f"\n[{part_num}] ❌ {url} -> {response.status_code}")
            except Exception as e:
                print(f"\n[{part_num}] ❌ {url} -> Erreur: {e}")
        
        if not url_found:
            print(f"\n[{part_num}] ❌ Aucune URL trouvée pour la partie {part_num}")
    
    extractor.save_to_json(all_data, output_filename)
    
    print(f"\n{'=' * 60}")
    print(f"🎉 EXTRACTION TERMINÉE!")
    print(f"📊 Résumé:")
    print(f"   • QCM extraits: {len(all_data)}/{end_part - start_part + 1}")
    print(f"   • Questions totales: {total_questions}")
    print(f"   • Fichier: {output_filename}")
    print(f"{'=' * 60}")
    
    return all_data


def extract_all_qcm():
    """Extrait tous les QCM (100 parties)"""
    urls = []

    # Générer les 100 URLs
    base_urls = {
        (1, 4): "https://waytolearnx.com/2018/11/qcm-en-informatique-generale-partie-{}.html",
        (5, 15): "https://waytolearnx.com/2022/06/qcm-en-informatique-generale-partie-{}.html",
        (16, 100): "https://waytolearnx.com/2025/03/qcm-en-informatique-generale-partie-{}.html"
    }

    for (start, end), template in base_urls.items():
        for i in range(start, end + 1):
            urls.append(template.format(i))

    print(f"\n{'=' * 60}")
    print(f"🚀 Extraction de {len(urls)} QCM...")
    print(f"{'=' * 60}\n")

    extractor = QCMExtractorRobust(delay=2.0)
    all_data = []
    total_questions = 0

    for i, url in enumerate(urls, 1):
        print(f"\n[{i}/{len(urls)}] ", end='')

        data = extractor.extract_qcm_from_page(url)
        if data and data['questions_count'] > 0:
            all_data.append(data)
            total_questions += data['questions_count']
            print(f"✅ {data['questions_count']} questions")
        else:
            print(f"❌ Échec ou 0 questions")

    # Sauvegarder
    filename = "qcm_waytolearnx_complet_100parties.json"
    extractor.save_to_json(all_data, filename)

    print(f"\n{'=' * 60}")
    print(f"🎉 EXTRACTION TERMINÉE!")
    print(f"📊 Résumé:")
    print(f"   • QCM extraits: {len(all_data)}/100")
    print(f"   • Questions totales: {total_questions}")
    print(f"   • Fichier: {filename}")
    print(f"{'=' * 60}")

    return all_data


def detect_url_pattern(url):
    """Détecte automatiquement le pattern d'URL à partir d'un exemple."""
    import re
    
    # Chercher le pattern de partie dans l'URL
    patterns = [
        r'(.*partie-)(\d+)(\.html)',
        r'(.*partie-)(\d+)(.*)',
        r'(.*-)(\d+)(\.html)',
        r'(.*)(\d+)(\.html)'
    ]
    
    for pattern in patterns:
        match = re.search(pattern, url, re.IGNORECASE)
        if match:
            base = match.group(1)
            middle = match.group(2)
            end = match.group(3)
            # Remplacer le numéro par {} pour le template
            template = base + "{}" + end
            return template, len(middle)
    
    # Si aucun pattern trouvé, essayer d'insérer {} avant .html
    if '.html' in url:
        return url.replace('.html', '-{}.html'), 1
    return url.replace(url.split('/')[-1], url.split('/')[-1].replace('.html', '-{}.html')), 1


def extract_from_list_file(list_file_path, output_dir="outputs"):
    """Lit un fichier contenant une liste de fichiers, et extrait les QCM de chaque URL contenue dans ces fichiers."""
    import os
    
    base_dir = os.path.dirname(list_file_path)
    
    # Créer le dossier de sortie s'il n'existe pas
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
    
    try:
        with open(list_file_path, 'r', encoding='utf-8') as f:
            fichiers = [line.strip() for line in f if line.strip()]
    except Exception as e:
        print(f"❌ Erreur lors de la lecture du fichier {list_file_path}: {e}")
        return
        
    print(f"\n{'=' * 60}")
    print(f"🎯 EXTRACTION DEPUIS LISTE DE FICHIERS")
    print(f"   • Fichier liste: {list_file_path}")
    print(f"   • Dossier de sortie: {output_dir}")
    print(f"   • {len(fichiers)} fichiers à traiter")
    print(f"{'=' * 60}\n")
    
    extractor = QCMExtractorRobust(delay=2.0)
    
    for fichier in fichiers:
        file_path = os.path.join(base_dir, fichier)
        print(f"\n{'=' * 40}")
        print(f"📁 Traitement du fichier: {fichier}")
        print(f"{'=' * 40}")
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                urls = [line.strip() for line in f if line.strip() and line.strip().startswith('http')]
        except Exception as e:
            print(f"   ❌ Erreur de lecture pour {file_path}: {e}")
            continue
            
        print(f"   • {len(urls)} URLs trouvées dans {fichier}")
        
        all_data = []
        total_questions = 0
        
        for i, url in enumerate(urls, 1):
            print(f"\n   [{i}/{len(urls)}] 📥 {url} ")
            
            data = extractor.extract_qcm_from_page(url)
            if data and data['questions_count'] > 0:
                all_data.append(data)
                total_questions += data['questions_count']
                print(f"   ✅ {data['questions_count']} questions")
            else:
                print(f"   ❌ 0 questions ou échec")
                
        # Sauvegarder les données pour ce fichier
        if all_data:
            output_name = os.path.join(output_dir, f"qcm_{fichier.replace('.txt', '')}.json")
            extractor.save_to_json(all_data, output_name)
            print(f"\n   💾 Résumé {fichier}: {total_questions} questions extraites au total.")
        else:
            print(f"\n   ⚠️ Aucune question extraite pour {fichier}.")


if __name__ == "__main__":
    print("\n" + "="*60)
    print("🎯 EXTRACTION PAR LOTS DEPUIS UN FICHIER DE LISTE")
    print("="*60)
    
    list_path = "url/listeFichier.txt"
    out_dir = "outputs"
    
    print(f"ℹ️ Lecture depuis: {list_path}")
    print(f"ℹ️ Sauvegarde dans: {out_dir}")
    
    extract_from_list_file(list_path, out_dir)