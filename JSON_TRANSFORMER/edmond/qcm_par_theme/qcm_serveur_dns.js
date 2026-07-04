const QCM = [
  {
    "num": "Q1",
    "partie": "Serveur DNS",
    "q": "Quel est le rôle principal d'un serveur DNS dans une infrastructure réseau ?",
    "choices": {
      "A": "Assurer le chiffrement des données transmises entre deux hôtes.",
      "B": "Traduire les noms de domaine lisibles par l'homme en adresses IP compréhensibles par les machines.",
      "C": "Gérer l'attribution dynamique des adresses IP aux périphériques connectés.",
      "D": "Contrôler le trafic réseau entrant et sortant via des règles de filtrage."
    },
    "correct": "B",
    "explanation": "<p>Le <strong>système DNS (Domain Name System)</strong> est le service fondamental de l'Internet qui permet d'associer des noms d'hôtes (ex: www.google.com) à des adresses IP (ex: 142.250.179.132).</p><ul><li>Sans le DNS, les utilisateurs devraient mémoriser des adresses numériques complexes pour chaque site web.</li><li>Le processus de résolution transforme une requête textuelle en une requête de type A ou AAAA pour obtenir l'adresse correspondante.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le chiffrement est le rôle des protocoles comme TLS/SSL, et non du DNS qui fonctionne généralement en clair (sauf DNS over HTTPS/TLS)."
      },
      {
        "l": "C",
        "t": "L'attribution dynamique des adresses IP est la fonction du serveur DHCP (Dynamic Host Configuration Protocol)."
      },
      {
        "l": "D",
        "t": "Le contrôle du trafic réseau et le filtrage des paquets sont les missions principales d'un pare-feu (Firewall)."
      }
    ],
    "examiner": "Évaluer la compréhension fondamentale du rôle des protocoles réseau et la distinction entre DNS, DHCP et les services de sécurité.",
    "summary": [
      "Le DNS agit comme l'annuaire de l'Internet.",
      "Il permet la résolution de noms de domaine en adresses IP.",
      "Il facilite l'utilisation du Web en évitant la manipulation directe d'adresses numériques.",
      "Le DNS est un protocole de couche application dans le modèle TCP/IP."
    ]
  },
  {
    "num": "Q2",
    "partie": "Serveur DNS",
    "q": "Quelle est la fonction principale d'un serveur DNS (Domain Name System) dans le cadre de la navigation réseau ?",
    "choices": {
      "A": "Transformer les URL en pages Web",
      "B": "Transformer les URL en adresses MAC",
      "C": "Transformer les URL en adresses IP",
      "D": "Transformer les URL en noms d'hôtes"
    },
    "correct": "C",
    "explanation": "<p>Le <strong>DNS (Domain Name System)</strong> agit comme l'annuaire d'Internet. Lorsqu'un utilisateur saisit un nom de domaine (URL) dans son navigateur, le serveur DNS traduit ce nom lisible par l'humain (ex: www.google.com) en une <strong>adresse IP</strong> numérique (ex: 142.250.179.100), laquelle est nécessaire pour que les équipements réseau puissent établir la connexion.</p><ul><li>La résolution de noms est une étape préalable indispensable à la requête HTTP/HTTPS.</li><li>Sans cette correspondance, la navigation serait impossible via des noms de domaines.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le serveur DNS ne génère pas de contenu Web ; c'est le serveur HTTP qui délivre les pages Web."
      },
      {
        "l": "B",
        "t": "L'adresse MAC est une adresse physique liée à la carte réseau, elle n'est pas gérée par le DNS."
      },
      {
        "l": "D",
        "t": "L'URL contient déjà le nom d'hôte ; le DNS sert justement à trouver l'adresse IP associée à ce nom."
      }
    ],
    "examiner": "Vérifier la compréhension du rôle fondamental du protocole DNS dans l'infrastructure Internet et la résolution de noms.",
    "summary": [
      "Le DNS est un système de conversion de noms de domaine en adresses IP.",
      "Il permet de remplacer des adresses numériques complexes par des noms faciles à mémoriser.",
      "Cette traduction est une étape nécessaire avant toute requête Web.",
      "Le DNS ne gère ni le contenu des pages ni les adresses physiques (MAC)."
    ]
  },
  {
    "num": "Q3",
    "partie": "Serveur DNS",
    "q": "Quelle est l'utilité principale de mettre en place un serveur DNS au sein d'une infrastructure réseau ?",
    "choices": {
      "A": "Sécuriser le réseau local.",
      "B": "Augmenter le débit de la connexion Internet.",
      "C": "Attribuer des adresses IP automatiquement aux machines du réseau.",
      "D": "Simplifier l'adressage et l'accès aux machines internes via des noms d'hôtes plutôt que des adresses IP."
    },
    "correct": "D",
    "explanation": "<p>Un serveur <strong>DNS (Domain Name System)</strong> a pour rôle fondamental de traduire des noms de domaine ou d'hôtes (ex: serveur.entreprise.local) en adresses IP compréhensibles par les machines. Dans une infrastructure interne, il permet de ne pas mémoriser les adresses IP, facilitant ainsi la gestion et la maintenance du réseau.</p><ul><li>Il assure la résolution de noms.</li><li>Il rend le réseau plus flexible : si une IP change, seule la table DNS est mise à jour.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le DNS n'est pas un outil de sécurité périmétrique ou de filtrage de flux (pare-feu)."
      },
      {
        "l": "B",
        "t": "Le DNS n'a aucun impact direct sur la bande passante ou la vitesse brute de connexion."
      },
      {
        "l": "C",
        "t": "C'est le rôle du serveur DHCP (Dynamic Host Configuration Protocol), et non du DNS, d'attribuer des adresses IP."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension du rôle distinct des services réseau fondamentaux (DNS vs DHCP).",
    "summary": [
      "Le DNS permet de faire correspondre un nom de machine à une adresse IP.",
      "Le DNS facilite la navigation et la gestion des ressources réseau internes.",
      "L'attribution automatique d'adresses IP est gérée par le service DHCP.",
      "Le DNS améliore la lisibilité et l'organisation de l'infrastructure réseau."
    ]
  },
  {
    "num": "Q4",
    "partie": "Serveur DNS",
    "q": "Quel est le rôle principal d'un serveur DNS au sein d'une infrastructure réseau ?",
    "choices": {
      "A": "Assurer le routage des paquets entre différents sous-réseaux.",
      "B": "Convertir les noms de domaine lisibles par l'humain en adresses IP exploitables par les machines.",
      "C": "Gérer l'authentification des utilisateurs sur un domaine Active Directory.",
      "D": "Attribuer dynamiquement des adresses IP aux clients connectés au réseau."
    },
    "correct": "B",
    "explanation": "<p>Le serveur <strong>DNS (Domain Name System)</strong> agit comme l'annuaire d'Internet. Sa fonction fondamentale est la <strong>résolution de noms</strong> : il fait correspondre un nom de domaine (ex: www.exemple.com) à une adresse IP (ex: 93.184.216.34) afin que les équipements réseau puissent communiquer entre eux.</p><ul><li>Il facilite la navigation en évitant aux utilisateurs de mémoriser des adresses IP complexes.</li><li>Il permet une gestion centralisée et hiérarchique des ressources réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le routage des paquets est la fonction d'un routeur ou d'une couche réseau (Layer 3) via des protocoles comme OSPF ou BGP, et non du DNS."
      },
      {
        "l": "C",
        "t": "L'authentification des utilisateurs est gérée par des services d'annuaire comme LDAP ou Active Directory (Kerberos), bien que le DNS soit nécessaire pour localiser ces services."
      },
      {
        "l": "D",
        "t": "L'attribution dynamique d'adresses IP est le rôle principal du protocole DHCP (Dynamic Host Configuration Protocol)."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension des services réseau de base et la distinction entre le DNS et les protocoles de routage ou d'adressage dynamique.",
    "summary": [
      "Le DNS est un système de traduction entre noms de domaine et adresses IP.",
      "Il permet la navigation sur Internet sans connaissance des adresses IP réelles.",
      "Il ne doit pas être confondu avec DHCP qui gère l'adressage IP.",
      "Il constitue un pilier critique de l'accessibilité des services réseau."
    ]
  }
];
