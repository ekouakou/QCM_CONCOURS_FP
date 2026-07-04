const QCM = [
  {
    "num": "Q1",
    "partie": "Web et Internet",
    "q": "Quelle est la fonction principale d'une URL (Uniform Resource Locator) dans le contexte du Web ?",
    "choices": {
      "A": "C'est un protocole de cryptage des données.",
      "B": "C'est une méthode de transmission de données.",
      "C": "C'est un identifiant unique pour l'emplacement d'un ordinateur sur un réseau.",
      "D": "C'est l'adresse qui permet de localiser et d'accéder à une ressource spécifique sur Internet."
    },
    "correct": "D",
    "explanation": "<p>L'<strong>URL</strong> (Uniform Resource Locator) est la chaîne de caractères utilisée pour identifier et localiser une ressource sur le World Wide Web (une page HTML, une image, un fichier, etc.).</p><ul><li>Elle fournit le protocole (ex: http, https), le nom de domaine, et le chemin d'accès vers la ressource.</li><li>Elle ne sert pas à chiffrer les données (rôle du protocole TLS/SSL).</li><li>Elle ne désigne pas un ordinateur spécifique, mais une ressource accessible via un serveur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le chiffrement est assuré par des protocoles comme TLS/SSL, non par l'URL elle-même."
      },
      {
        "l": "B",
        "t": "La transmission est gérée par des protocoles comme TCP/IP ou HTTP, pas par l'URL qui est une simple adresse."
      },
      {
        "l": "C",
        "t": "C'est le rôle d'une adresse IP d'identifier un ordinateur, alors que l'URL identifie une ressource web."
      }
    ],
    "examiner": "Évaluer la compréhension des fondamentaux du Web et la distinction entre une ressource, un protocole et une adresse réseau.",
    "summary": [
      "Une URL signifie Uniform Resource Locator.",
      "Elle sert à localiser de manière unique une ressource sur Internet.",
      "Elle n'est pas un protocole de sécurité ni une méthode de transmission.",
      "Elle est distincte d'une adresse IP qui localise une machine physique ou virtuelle."
    ]
  },
  {
    "num": "Q2",
    "partie": "Web et Internet",
    "q": "Que signifie l'acronyme WWW dans le contexte des technologies du Web ?",
    "choices": {
      "A": "Wild Wide World",
      "B": "Word Wide Web",
      "C": "World Wide Web",
      "D": "Wide World Web"
    },
    "correct": "C",
    "explanation": "<p>L'acronyme <strong>WWW</strong> désigne le <strong>World Wide Web</strong> (littéralement \"la toile d'araignée mondiale\"). Il s'agit d'un système hypertexte public fonctionnant sur Internet, qui permet de consulter des pages accessibles via des navigateurs.</p><ul><li><strong>World</strong> : fait référence à la dimension planétaire du réseau.</li><li><strong>Wide</strong> : souligne l'étendue géographique.</li><li><strong>Web</strong> : évoque la structure maillée des liens hypertextes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une confusion sémantique sans rapport avec le protocole réseau."
      },
      {
        "l": "B",
        "t": "Une erreur fréquente liée à la confusion entre 'Word' (mot) et 'World' (monde)."
      },
      {
        "l": "D",
        "t": "Bien que les mots soient les mêmes, l'ordre est inversé, ce qui rend l'acronyme incorrect."
      }
    ],
    "examiner": "Vérifier la connaissance fondamentale des termes techniques de base liés au fonctionnement d'Internet.",
    "summary": [
      "WWW est l'abréviation de World Wide Web.",
      "Le Web est un service fonctionnant par-dessus l'infrastructure réseau d'Internet.",
      "Il repose sur le transfert de documents hypertextes via le protocole HTTP.",
      "L'acronyme souligne la portée mondiale et l'interconnexion des informations."
    ]
  },
  {
    "num": "Q3",
    "partie": "Web et Internet",
    "q": "Parmi les formats suivants, lequel est couramment utilisé pour l'insertion d'images dans les pages web ?",
    "choices": {
      "A": "TCP/IP",
      "B": "MPEG",
      "C": "BMP",
      "D": "GIF"
    },
    "correct": "D",
    "explanation": "<p>Le format <strong>GIF</strong> (Graphics Interchange Format) est l'un des formats standards du web. Bien que dépassé par des formats plus modernes comme le WebP ou le PNG pour certaines utilisations, le GIF reste très populaire pour les images animées et les graphiques simples comportant des zones de transparence ou des aplats de couleur.</p><ul><li><strong>TCP/IP</strong> n'est pas un format d'image, mais une suite de protocoles réseau.</li><li><strong>MPEG</strong> concerne la compression de flux vidéo.</li><li><strong>BMP</strong> est un format bitmap non compressé, trop lourd pour une diffusion efficace sur le web.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "TCP/IP est le socle protocolaire d'Internet, il ne s'agit aucunement d'un format de fichier image."
      },
      {
        "l": "B",
        "t": "Le format MPEG est dédié à la compression de données vidéo et audio, non aux images fixes."
      },
      {
        "l": "C",
        "t": "Le format BMP (Bitmap) est très lourd car il ne gère pas nativement la compression, ce qui le rend inadapté aux contraintes de temps de chargement des pages web."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la connaissance des standards de fichiers multimédias utilisés dans le développement web et la distinction entre protocoles réseau et formats de données.",
    "summary": [
      "Le format GIF est historique pour le web, notamment pour les animations.",
      "Les formats d'images web optimisés incluent aujourd'hui JPEG, PNG, GIF et WebP.",
      "TCP/IP est un protocole de communication réseau et non un format de fichier.",
      "Le choix du format d'image doit équilibrer qualité visuelle et poids du fichier pour optimiser la performance."
    ]
  },
  {
    "num": "Q4",
    "partie": "Web et Internet",
    "q": "Quel type de logiciel est utilisé pour accéder et afficher des pages web sur un ordinateur ?",
    "choices": {
      "A": "Un client de messagerie",
      "B": "Un serveur web",
      "C": "Un navigateur web",
      "D": "Un intranet"
    },
    "correct": "C",
    "explanation": "<p>Le <strong>navigateur web</strong> (ou <em>web browser</em>) est une application conçue pour interpréter le code (HTML, CSS, JavaScript) des pages web afin de les afficher de manière graphique et interactive pour l'utilisateur.</p><ul><li><strong>Client de messagerie :</strong> Utilisé pour la gestion des e-mails.</li><li><strong>Serveur web :</strong> Ordinateur ou logiciel distant qui héberge et distribue les pages web.</li><li><strong>Intranet :</strong> Réseau informatique privé interne à une organisation.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un client de messagerie sert à gérer les courriers électroniques, pas à naviguer sur le Web."
      },
      {
        "l": "B",
        "t": "Un serveur web est la partie distante qui envoie le contenu; c'est l'opposé de l'outil client utilisé par l'internaute."
      },
      {
        "l": "D",
        "t": "Un intranet désigne un réseau local interne et non le logiciel de navigation utilisé pour consulter des sites."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture client-serveur et la distinction entre les logiciels de navigation et les autres services réseau.",
    "summary": [
      "Un navigateur est le logiciel client indispensable pour visualiser des sites web.",
      "Il traduit les langages de programmation web en interface utilisateur lisible.",
      "Ne pas confondre le navigateur (logiciel local) avec le serveur (infrastructure distante).",
      "Les clients de messagerie et les intranets remplissent des fonctions distinctes dans l'écosystème numérique."
    ]
  }
];
