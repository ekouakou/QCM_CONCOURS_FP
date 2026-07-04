const QCM = [
  {
    "num": "Q1",
    "partie": "Architecture des systèmes informatiques",
    "q": "Parmi les supports de stockage suivants, lequel ne permet pas un accès direct aux données ?",
    "choices": {
      "A": "Disquette magnétique",
      "B": "Bande magnétique",
      "C": "CD-ROM",
      "D": "Clé USB"
    },
    "correct": "B",
    "explanation": "<p>L'accès direct (ou accès aléatoire) permet d'accéder à n'importe quelle donnée en un temps quasi constant, indépendamment de sa position physique sur le support.</p><ul><li><strong>La bande magnétique</strong> fonctionne sur un mode d'<strong>accès séquentiel</strong> : pour lire une donnée spécifique, il est nécessaire de faire défiler toute la bande depuis le début ou la position actuelle, ce qui rend le temps d'accès dépendant de la position physique.</li><li>Les autres supports (Disquette, CD-ROM, Clé USB) utilisent des mécanismes permettant de sauter directement à une adresse précise sur le support.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La disquette magnétique permet un accès direct via le déplacement de la tête de lecture sur les pistes et secteurs du disque."
      },
      {
        "l": "C",
        "t": "Le CD-ROM est un support à accès direct : le laser peut se positionner rapidement sur n'importe quel secteur du disque."
      },
      {
        "l": "D",
        "t": "La clé USB, basée sur de la mémoire flash, permet un accès direct quasi instantané aux cellules de mémoire."
      }
    ],
    "examiner": "Évaluer la compréhension des modes d'accès aux données (séquentiel vs direct) sur différents supports de stockage.",
    "summary": [
      "L'accès direct permet un accès rapide et indépendant à n'importe quelle zone du support.",
      "La bande magnétique est le support classique d'accès séquentiel.",
      "L'accès séquentiel impose de parcourir physiquement les données précédentes pour atteindre la cible.",
      "La plupart des supports modernes (disques, mémoire flash) utilisent l'accès direct."
    ]
  },
  {
    "num": "Q2",
    "partie": "Architecture des systèmes informatiques",
    "q": "Quel type de périphérique permet nativement une installation de type « Hotplug » (branchement à chaud) ?",
    "choices": {
      "A": "PCI",
      "B": "Série",
      "C": "USB",
      "D": "PCMCIA"
    },
    "correct": "C",
    "explanation": "<p>Le terme <strong>Hotplug</strong> (ou branchement à chaud) désigne la capacité d'un système informatique à détecter et à configurer un périphérique ajouté ou retiré alors que l'ordinateur est sous tension, sans nécessiter de redémarrage.</p><ul><li>L'<strong>USB (Universal Serial Bus)</strong> a été conçu dès l'origine pour supporter le branchement et le débranchement à chaud de manière transparente pour l'utilisateur.</li><li>Le bus PCI traditionnel n'est pas conçu pour le branchement à chaud, contrairement au PCI-Express (dans des configurations serveurs spécifiques).</li><li>Les interfaces série (RS-232) et PCMCIA (bien que ce dernier soit théoriquement remplaçable à chaud, il est considéré comme une technologie legacy moins fluide et fiable que l'USB en termes d'auto-configuration).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le bus PCI standard nécessite une coupure de l'alimentation pour l'ajout ou le retrait de cartes, sous peine d'endommager le matériel."
      },
      {
        "l": "B",
        "t": "Les ports série ne possèdent pas de mécanisme de détection automatique (Plug & Play) ou de gestion dynamique des ressources pour le branchement à chaud."
      },
      {
        "l": "D",
        "t": "Bien que le PCMCIA supporte théoriquement le retrait à chaud, il est plus complexe à gérer et a été largement supplanté par l'USB pour les besoins grand public."
      }
    ],
    "examiner": "Évaluer la connaissance des standards d'interface matérielle et des capacités de gestion dynamique des périphériques dans un système d'exploitation.",
    "summary": [
      "Le Hotplug permet de connecter des périphériques sans redémarrer le système.",
      "L'USB est la norme la plus courante et la plus efficace pour le branchement à chaud.",
      "Le branchement à chaud nécessite une gestion logicielle (OS) et matérielle (Bus) coordonnée.",
      "Le PCI standard ne supporte pas le branchement à chaud par conception physique."
    ]
  },
  {
    "num": "Q3",
    "partie": "Architecture des systèmes informatiques",
    "q": "Parmi les technologies suivantes, laquelle ne désigne pas un connecteur d'extension standard pour les composants internes d'un ordinateur ?",
    "choices": {
      "A": "USB",
      "B": "PCMCIA",
      "C": "PKI",
      "D": "PCI"
    },
    "correct": "C",
    "explanation": "<p>Le terme <strong>PKI</strong> (Public Key Infrastructure ou Infrastructure à Clés Publiques) désigne un ensemble de services, matériels et logiciels permettant de gérer des certificats numériques et des clés cryptographiques. Il s'agit d'un concept logiciel et sécuritaire et non d'un connecteur physique ou d'un bus d'extension matériel.</p><ul><li><strong>USB</strong> (Universal Serial Bus) est un port standard d'extension externe.</li><li><strong>PCMCIA</strong> était un standard de cartes d'extension pour ordinateurs portables.</li><li><strong>PCI</strong> (Peripheral Component Interconnect) est une interface classique de connexion pour cartes d'extension internes (cartes graphiques, cartes réseau, etc.).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'USB est bien une interface de connexion, bien qu'il soit principalement utilisé pour des périphériques externes, il peut faire office d'extension."
      },
      {
        "l": "B",
        "t": "Le PCMCIA est un format reconnu de carte d'extension, largement utilisé par le passé sur les ordinateurs portables."
      },
      {
        "l": "D",
        "t": "Le PCI est l'un des bus d'extension internes les plus répandus dans l'histoire de l'architecture des PC."
      }
    ],
    "examiner": "Évaluer la capacité du candidat à distinguer les composants matériels (bus, connecteurs) des concepts de sécurité informatique.",
    "summary": [
      "Un connecteur d'extension permet d'ajouter des fonctionnalités matérielles à un ordinateur.",
      "PCI et PCMCIA sont des interfaces de bus physiques dédiées à l'extension matérielle.",
      "USB est une interface universelle de connexion de périphériques.",
      "PKI est un protocole de sécurité et non un composant matériel."
    ]
  },
  {
    "num": "Q4",
    "partie": "Architecture des systèmes informatiques",
    "q": "Quel réseau est considéré comme l'ancêtre direct d'Internet ?",
    "choices": {
      "A": "Renater",
      "B": "MouliNet",
      "C": "ARPANET",
      "D": "Ethernet"
    },
    "correct": "C",
    "explanation": "<p>L'<strong>ARPANET</strong> (Advanced Research Projects Agency Network) est largement reconnu comme le précurseur d'Internet. Financé par le département de la Défense des États-Unis à la fin des années 1960, il a introduit les premières technologies de commutation par paquets et le protocole TCP/IP, qui forment les fondations du réseau mondial actuel.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Renater est le réseau national de télécommunications pour la technologie, l'enseignement et la recherche en France, créé bien après l'avènement d'Internet."
      },
      {
        "l": "B",
        "t": "MouliNet est un terme fantaisiste sans rapport avec l'histoire des télécommunications."
      },
      {
        "l": "D",
        "t": "Ethernet est un standard de protocole de réseau local (LAN) pour câblage, et non un réseau étendu ou l'ancêtre d'Internet."
      }
    ],
    "examiner": "Évaluer la connaissance historique du candidat sur l'évolution des réseaux informatiques et l'émergence des technologies fondamentales du web.",
    "summary": [
      "ARPANET est le premier réseau à avoir utilisé la commutation par paquets.",
      "Il a été développé sous l'égide de l'agence américaine DARPA.",
      "L'adoption du protocole TCP/IP sur ARPANET a marqué la naissance technique d'Internet.",
      "Comprendre l'histoire des réseaux permet de mieux appréhender les protocoles actuels."
    ]
  },
  {
    "num": "Q5",
    "partie": "Architecture des systèmes informatiques",
    "q": "Parmi les associations suivantes de services et de leurs ports TCP/UDP par défaut, laquelle est erronée ?",
    "choices": {
      "A": "HTTP sur le port 80",
      "B": "NNTP sur le port 9",
      "C": "FTP sur le port 21",
      "D": "TELNET sur le port 23"
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>NNTP</strong> (Network News Transfer Protocol) est utilisé pour le transfert de news sur Usenet et utilise standardement le <strong>port 119</strong>, et non le port 9.</p><p>Le port 9 est historiquement associé au service <strong>Discard</strong>, un protocole simple qui consiste à ignorer toutes les données reçues.</p><ul><li><strong>HTTP</strong> utilise bien le port 80 pour le transfert de pages web.</li><li><strong>FTP</strong> utilise le port 21 pour le canal de contrôle.</li><li><strong>TELNET</strong> utilise le port 23 pour l'accès distant non sécurisé.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le port 80 est l'assignation standard et correcte pour le protocole HTTP non sécurisé."
      },
      {
        "l": "C",
        "t": "Le port 21 est l'assignation standard et correcte pour le protocole FTP (File Transfer Protocol)."
      },
      {
        "l": "D",
        "t": "Le port 23 est l'assignation standard et correcte pour le protocole TELNET."
      }
    ],
    "examiner": "Évaluer la connaissance des numéros de ports well-known (0-1023) utilisés par les protocoles réseau courants.",
    "summary": [
      "Le protocole NNTP utilise le port 119 pour la gestion des newsgroups.",
      "Le port 9 est réservé au service Discard (RFC 863).",
      "La mémorisation des ports standards (HTTP 80, FTP 21, TELNET 23) est essentielle pour la configuration des pare-feux.",
      "Chaque service réseau possède un port d'écoute par défaut défini par l'IANA."
    ]
  },
  {
    "num": "Q6",
    "partie": "Architecture des systèmes informatiques",
    "q": "Quel est le nom du principe sur Internet selon lequel l'information est transmise à l'utilisateur de manière proactive, sans qu'il ait besoin d'en faire la demande explicite ?",
    "choices": {
      "A": "Net casting",
      "B": "Push",
      "C": "Reporting",
      "D": "Plug and Play"
    },
    "correct": "B",
    "explanation": "<p>Le terme technique pour désigner la diffusion proactive d'informations est la <strong>technologie Push</strong> (ou mode « poussé »).</p><p>Contrairement au modèle classique « Pull » (où l'utilisateur demande une ressource, comme lors de la consultation d'une page web), le modèle Push permet au serveur d'envoyer des données (notifications, flux RSS, alertes) automatiquement dès que l'information est disponible.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le Netcasting désigne la diffusion de contenus multimédias (audio/vidéo) sur le réseau, souvent associé au streaming ou au podcasting, mais ce n'est pas le terme pour le mécanisme de transfert."
      },
      {
        "l": "C",
        "t": "Le reporting concerne la génération de rapports de données analytiques ou d'activités, ce qui est une finalité métier et non un protocole de transmission."
      },
      {
        "l": "D",
        "t": "Le Plug and Play est une technologie matérielle permettant à un périphérique d'être reconnu et configuré automatiquement par un système d'exploitation sans intervention manuelle."
      }
    ],
    "examiner": "Évaluer la compréhension des modèles de communication réseau et la distinction entre les technologies de type Pull et Push.",
    "summary": [
      "Le modèle 'Push' consiste à envoyer des informations à l'utilisateur de manière proactive.",
      "Le modèle opposé est le 'Pull', où l'utilisateur doit initier la requête pour obtenir l'information.",
      "Les notifications d'applications et les alertes en temps réel sont des exemples concrets de la technologie Push.",
      "Comprendre cette distinction est essentiel pour l'architecture des systèmes de communication modernes."
    ]
  },
  {
    "num": "Q7",
    "partie": "Architecture des systèmes informatiques",
    "q": "Comment est configuré le lien de paramétrage entre le serveur MySQL et le système d'exploitation Windows ?",
    "choices": {
      "A": "Fichier mysql.ini",
      "B": "Fichier my.ini",
      "C": "La base de registre uniquement",
      "D": "La base de registre et le fichier mysql"
    },
    "correct": "B",
    "explanation": "<p>Sous l'environnement Windows, le serveur MySQL utilise un fichier de configuration nommé <strong>my.ini</strong> pour définir les paramètres de fonctionnement (port, répertoires de données, taille des tampons, etc.).</p><ul><li>Ce fichier est généralement situé dans le répertoire d'installation de MySQL ou dans le dossier <code>ProgramData</code>.</li><li>Il joue un rôle similaire au fichier <code>my.cnf</code> utilisé sous les systèmes de type Unix/Linux.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le nom conventionnel du fichier de configuration est 'my.ini', 'mysql.ini' est une nomenclature incorrecte."
      },
      {
        "l": "C",
        "t": "La base de registre Windows peut contenir des informations sur le service MySQL (chemin de l'exécutable), mais la configuration interne du moteur repose sur le fichier ini."
      },
      {
        "l": "D",
        "t": "Bien que Windows utilise la base de registre, elle n'est pas le lieu principal de configuration des variables système de MySQL."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance pratique de l'administration système d'une base de données MySQL sur un environnement Windows spécifique.",
    "summary": [
      "Le fichier de configuration principal pour MySQL sous Windows est my.ini.",
      "Il permet de personnaliser le comportement du serveur de base de données.",
      "Il est l'équivalent du fichier my.cnf sous les environnements Linux.",
      "La modification de ce fichier nécessite un redémarrage du service MySQL pour être prise en compte."
    ]
  }
];
