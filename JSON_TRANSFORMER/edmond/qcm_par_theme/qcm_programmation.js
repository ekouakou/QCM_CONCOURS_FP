const QCM = [
  {
    "num": "Q1",
    "partie": "Programmation",
    "q": "Parmi les langages suivants, lequel est orienté objet ?",
    "choices": {
      "A": "Pascal",
      "B": "C",
      "C": "C++",
      "D": "Java"
    },
    "correct": "C",
    "explanation": "<p>Bien que <strong>Java</strong> (D) soit également un langage orienté objet, <strong>C++</strong> (C) est historiquement connu comme une extension du langage C introduisant les concepts de programmation orientée objet (POO).</p><p>Dans le cadre strict des QCM académiques classiques sur l'évolution des langages, C++ est souvent cité comme l'exemple type du langage ayant fait la transition du procédural vers l'objet.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Pascal est un langage de programmation procédural impératif, conçu initialement pour enseigner la programmation structurée."
      },
      {
        "l": "B",
        "t": "Le langage C est un langage procédural de bas niveau, sans support natif pour les classes ou l'héritage."
      },
      {
        "l": "D",
        "t": "Java est bien orienté objet, mais dans ce contexte précis de question, le C++ est la réponse classique attendue pour définir le langage ayant permis l'hybridation avec le C."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat sait distinguer les paradigmes de programmation (procédural vs orienté objet) et identifier les langages historiques ayant introduit la POO.",
    "summary": [
      "Le langage C++ est une extension du C qui supporte la programmation orientée objet.",
      "Le langage Pascal est strictement procédural.",
      "Le langage C est le langage procédural par excellence.",
      "La distinction entre langages procéduraux et orientés objet est fondamentale en génie logiciel."
    ]
  },
  {
    "num": "Q2",
    "partie": "Programmation",
    "q": "PHP peut être installé comme module du serveur",
    "choices": {
      "A": "Web IIS",
      "B": "Web APACHE",
      "C": "MYSQL",
      "D": "POSTFIX"
    },
    "correct": "B",
    "explanation": "<p>Historiquement, <strong>PHP</strong> a été conçu pour s'intégrer nativement dans le serveur web <strong>Apache</strong> en tant que module (mod_php). Cela permet au serveur d'exécuter le code PHP directement dans le processus du serveur web, offrant ainsi des performances optimisées pour le traitement des requêtes dynamiques.</p><ul><li>Apache traite le PHP en tant que module interne.</li><li>IIS utilise généralement FastCGI pour communiquer avec PHP.</li><li>MySQL est un système de gestion de base de données, pas un serveur web.</li><li>Postfix est un serveur de messagerie (SMTP), non un serveur web.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que PHP puisse fonctionner avec IIS, il le fait généralement via l'interface FastCGI et non comme un module interne de type mod_php."
      },
      {
        "l": "C",
        "t": "MySQL est un SGBD. PHP communique avec MySQL, mais ne s'installe pas en tant que module de ce dernier."
      },
      {
        "l": "D",
        "t": "Postfix est un serveur de courrier électronique et n'a aucun rôle dans l'exécution de scripts web PHP."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension de l'architecture d'exécution de PHP et la distinction entre un serveur web, un serveur de base de données et un serveur mail.",
    "summary": [
      "PHP est nativement conçu pour fonctionner comme un module du serveur web Apache.",
      "L'utilisation de mod_php est une méthode classique d'exécution de scripts PHP côté serveur.",
      "Pour IIS, on privilégie l'interface FastCGI plutôt que l'architecture modulaire directe.",
      "MySQL et Postfix sont des logiciels tiers (BDD et mail) sans lien direct avec l'hébergement web de PHP."
    ]
  },
  {
    "num": "Q3",
    "partie": "Programmation",
    "q": "Le fichier principal de configuration de PHP est :",
    "choices": {
      "A": "php.conf",
      "B": "php.inc",
      "C": "php.inc.conf",
      "D": "php.ini"
    },
    "correct": "D",
    "explanation": "<p>Le fichier <strong>php.ini</strong> est le fichier de configuration standard utilisé par PHP pour contrôler les directives qui affectent le comportement du moteur PHP.</p><ul><li>Il est lu au démarrage du serveur ou de l'interface CLI.</li><li>Il permet de configurer des paramètres comme la limite de mémoire (memory_limit), les affichages d'erreurs, ou les extensions chargées.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "php.conf est souvent une extension utilisée pour des fichiers de configuration Apache ou de services système, mais n'est pas le nom standard du fichier PHP."
      },
      {
        "l": "B",
        "t": "L'extension .inc est traditionnellement utilisée pour des fichiers inclus (include), pas pour le fichier de configuration principal."
      },
      {
        "l": "C",
        "t": "php.inc.conf est une appellation fantaisiste qui n'existe pas dans la documentation officielle de PHP."
      }
    ],
    "examiner": "Évaluer la connaissance de l'environnement de développement et de la configuration système de PHP.",
    "summary": [
      "Le fichier de configuration principal de PHP se nomme php.ini.",
      "Il est chargé automatiquement lors de l'initialisation de PHP.",
      "Il contient les directives de configuration du serveur et des modules.",
      "L'extension .ini est le standard pour les fichiers de configuration de nombreuses applications PHP."
    ]
  },
  {
    "num": "Q4",
    "partie": "Programmation",
    "q": "Le code de PHP est incorporé dans le code",
    "choices": {
      "A": "Ajax",
      "B": "Java",
      "C": "HTML",
      "D": "Perl"
    },
    "correct": "C",
    "explanation": "<p>PHP (Hypertext Preprocessor) est un langage de script <strong>côté serveur</strong> conçu spécifiquement pour le développement web dynamique. Sa principale caractéristique est de pouvoir être <strong>imbriqué directement dans des documents HTML</strong>.</p><p>Lorsqu'une page PHP est appelée, le moteur PHP sur le serveur exécute le code entre les balises <code>&lt;?php ... ?&gt;</code>, génère du contenu HTML, puis envoie le résultat final au navigateur client.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ajax est une technique de communication asynchrone entre le client et le serveur, pas un langage de balisage."
      },
      {
        "l": "B",
        "t": "Java est un langage compilé, généralement indépendant du HTML, qui s'exécute souvent dans un environnement JVM."
      },
      {
        "l": "D",
        "t": "Perl est un langage de script puissant mais il est distinct de PHP et n'est pas utilisé pour le développement web de la même manière que PHP avec le HTML."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant comprend le rôle fondamental du PHP en tant que langage de script serveur utilisé pour dynamiser des pages web statiques (HTML).",
    "summary": [
      "PHP est un langage de script serveur principalement utilisé pour le développement web.",
      "Il s'insère directement dans les balises d'un fichier HTML.",
      "Le code PHP est exécuté sur le serveur, contrairement à JavaScript qui s'exécute côté client.",
      "La sortie générée par PHP est généralement du texte HTML destiné à être rendu par le navigateur."
    ]
  },
  {
    "num": "Q5",
    "partie": "Programmation",
    "q": "PHP permet de créer des sites web :",
    "choices": {
      "A": "Statique",
      "B": "Animé",
      "C": "Dynamique",
      "D": "Animation flash"
    },
    "correct": "C",
    "explanation": "<p><strong>PHP (Hypertext Preprocessor)</strong> est un langage de script côté serveur conçu spécifiquement pour le développement web. Contrairement au HTML qui produit des pages statiques, PHP permet de générer du contenu à la volée en fonction des interactions de l'utilisateur ou des données stockées dans une base de données.</p><ul><li><strong>Côté serveur :</strong> Le code PHP est exécuté sur le serveur, puis renvoie du HTML pur au navigateur.</li><li><strong>Dynamisme :</strong> Il permet de créer des interfaces personnalisées, des systèmes de connexion, des blogs ou des boutiques en ligne.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les sites statiques sont composés uniquement de HTML/CSS et ne nécessitent pas de traitement serveur."
      },
      {
        "l": "B",
        "t": "Le terme 'animé' est vague et ne correspond pas à la classification technique des sites web."
      },
      {
        "l": "D",
        "t": "L'animation flash est une technologie obsolète qui n'a aucun lien avec la fonction serveur de PHP."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant comprend le rôle fondamental du langage PHP dans l'architecture client-serveur et la distinction entre contenu statique et dynamique.",
    "summary": [
      "PHP est un langage de programmation côté serveur.",
      "Il est utilisé pour générer du contenu web dynamique.",
      "Un site dynamique interagit avec une base de données.",
      "Le résultat envoyé au navigateur est toujours du HTML lisible par celui-ci."
    ]
  }
];
