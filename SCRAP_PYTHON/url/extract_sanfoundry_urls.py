import re

with open('urlaextraire_sandfoundry.txt', 'r') as f:
    content = f.read()

# Extraction de toutes les URLs des balises href
urls = re.findall(r'href="([^"]+)"', content)

# On filtre un peu pour éviter de prendre des URLs non pertinentes si besoin
# mais vu le fichier, toutes les URLs semblent bonnes.
# Par sécurité, on peut garder uniquement celles qui contiennent "sanfoundry.com"
urls = [u for u in urls if 'sanfoundry.com' in u]

with open('extract_sanfoundry.txt', 'w') as f:
    for url in urls:
        f.write(url + '\n')

print(f"Extraction terminée : {len(urls)} URLs sauvegardées dans extract_sanfoundry.txt")
