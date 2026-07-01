import re

with open('urlaextraire.txt', 'r') as f:
    content = f.read()

urls = re.findall(r'href="([^"]+)"', content)

with open('qcm-sur-docker.txt', 'w') as f:
    for url in urls:
        f.write(url + '\n')
