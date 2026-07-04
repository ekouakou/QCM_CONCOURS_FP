const QCM = [
  {
    "num": "Q1",
    "partie": "Développement Web",
    "q": "Que signifie l'acronyme LAMP dans le contexte du développement de serveurs web ?",
    "choices": {
      "A": "Linux, Apache, MySQL, PHP",
      "B": "Windows, Apache, MySQL, PHP",
      "C": "Linux, Apache, MySQL, ASP",
      "D": "Linux, Apache, PostgreSQL, PHP"
    },
    "correct": "A",
    "explanation": "<p>L'acronyme <strong>LAMP</strong> est un modèle de solution pour la construction de serveurs web dynamiques. Il est composé des éléments suivants :</p><ul><li><strong>L</strong>inux : Le système d'exploitation.</li><li><strong>A</strong>pache : Le serveur HTTP.</li><li><strong>M</strong>ySQL (ou MariaDB) : Le système de gestion de base de données relationnelle.</li><li><strong>P</strong>HP (ou parfois Perl ou Python) : Le langage de script côté serveur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le terme LAMP utilise Linux comme système d'exploitation, et non Windows. Pour Windows, on parle généralement de WAMP."
      },
      {
        "l": "C",
        "t": "ASP est une technologie propriétaire de Microsoft, alors que l'acronyme LAMP est historiquement associé aux technologies Open Source."
      },
      {
        "l": "D",
        "t": "Bien que PostgreSQL soit une alternative valide, l'acronyme standard LAMP fait explicitement référence à MySQL (ou MariaDB)."
      }
    ],
    "examiner": "Évaluer la connaissance des architectures logicielles standard pour l'hébergement web.",
    "summary": [
      "LAMP est l'acronyme de Linux, Apache, MySQL et PHP.",
      "Il s'agit d'une pile logicielle libre pour le déploiement de sites web.",
      "Chaque composant peut être remplacé par une alternative, mais l'acronyme reste standard.",
      "C'est la base de nombreux systèmes de gestion de contenu (CMS) populaires comme WordPress."
    ]
  },
  {
    "num": "Q2",
    "partie": "Développement Web",
    "q": "Parmi les propositions suivantes concernant les fonctionnalités d'un logiciel de création de site web (CMS ou éditeur), laquelle est considérée comme fausse ?",
    "choices": {
      "A": "Créer des pages web.",
      "B": "Gérer les liens hypertexte entre les pages.",
      "C": "Créer ou modifier nativement des images.",
      "D": "Gérer l'arborescence et la structure du site."
    },
    "correct": "C",
    "explanation": "<p>La fonction première d'un logiciel de création de site (CMS ou outil WYSIWYG) est la <strong>gestion du contenu et de la structure</strong> d'un site web.</p><ul><li>La création de pages, la gestion des liens et l'arborescence sont des fonctionnalités natives essentielles.</li><li>La <strong>création ou la modification d'images</strong> relève quant à elle d'un logiciel de traitement d'image spécialisé (comme Adobe Photoshop, GIMP ou Canva).</li><li>Bien que certains CMS permettent des recadrages basiques, cela ne constitue pas leur mission fondamentale.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une fonction essentielle d'un logiciel de création de site."
      },
      {
        "l": "B",
        "t": "La gestion de la navigation et des liens est un pilier de la construction d'un site."
      },
      {
        "l": "D",
        "t": "L'organisation de la hiérarchie des pages est indispensable pour le SEO et l'expérience utilisateur."
      }
    ],
    "examiner": "Évaluer la compréhension des fonctionnalités de base d'un outil de développement web par rapport aux outils de création graphique.",
    "summary": [
      "Un CMS est conçu pour gérer la structure et le contenu textuel/numérique d'un site.",
      "La retouche d'image est une compétence externe nécessitant des logiciels dédiés.",
      "Il faut savoir distinguer les outils de gestion de contenu des outils de création de ressources multimédias."
    ]
  },
  {
    "num": "Q3",
    "partie": "Développement Web",
    "q": "Qu'est-ce que le CGI (Common Gateway Interface) dans le contexte des serveurs web ?",
    "choices": {
      "A": "Une interface qui permet de faire communiquer un programme externe avec un serveur web.",
      "B": "Un protocole de communication réseau standardisé pour le transfert de fichiers.",
      "C": "Un service de résolution de noms de domaine (serveur DNS).",
      "D": "Une balise HTML spécifique utilisée pour intégrer des scripts côté client."
    },
    "correct": "A",
    "explanation": "<p>Le <strong>CGI (Common Gateway Interface)</strong> est un standard qui définit comment un serveur web interagit avec des programmes externes (scripts) pour générer du contenu dynamique.</p><p>Lorsqu'une requête HTTP arrive, le serveur web exécute le programme défini, lui transmet les informations via des variables d'environnement, et récupère la sortie standard du programme pour l'envoyer au client sous forme de réponse HTTP.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le CGI n'est pas un protocole de communication en soi, mais plutôt une norme d'interface entre le serveur HTTP et des applications."
      },
      {
        "l": "C",
        "t": "Un serveur de noms est un système (comme le DNS) qui traduit les noms de domaine en adresses IP, ce qui est totalement distinct de l'exécution de scripts côté serveur."
      },
      {
        "l": "D",
        "t": "Le CGI n'a aucun lien avec les balises HTML, qui sont utilisées pour la structure des documents dans le navigateur, et non pour l'interface de script côté serveur."
      }
    ],
    "examiner": "Évaluer la compréhension des mécanismes fondamentaux permettant de générer des pages web dynamiques via le serveur.",
    "summary": [
      "Le CGI est une interface standard pour la communication entre un serveur web et des programmes externes.",
      "Il permet l'exécution de scripts dynamiques sur le serveur en réponse à des requêtes HTTP.",
      "Le serveur web joue le rôle d'intermédiaire en transmettant les données au script et en retournant sa sortie au client.",
      "Bien que techniquement ancien, le concept de CGI est à la base de nombreuses technologies de développement web actuelles."
    ]
  },
  {
    "num": "Q4",
    "partie": "Développement Web",
    "q": "Quel est le protocole standard utilisé pour sécuriser les communications sur le Web via le chiffrement TLS/SSL ?",
    "choices": {
      "A": "HTTP",
      "B": "SMTP",
      "C": "SHTP",
      "D": "HTTPS"
    },
    "correct": "D",
    "explanation": "<p>Le protocole <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) est la version sécurisée du protocole HTTP. Il utilise les protocoles de chiffrement <strong>SSL</strong> (Secure Sockets Layer) ou, plus récemment, <strong>TLS</strong> (Transport Layer Security) pour protéger les données échangées entre le navigateur de l'utilisateur et le serveur web.</p><ul><li>Il garantit la <strong>confidentialité</strong> des données.</li><li>Il assure l'<strong>intégrité</strong> des informations transmises.</li><li>Il permet l'<strong>authentification</strong> du site web via un certificat numérique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "HTTP est le protocole de base du web, mais il transmet les données en clair, sans aucune couche de chiffrement."
      },
      {
        "l": "B",
        "t": "SMTP (Simple Mail Transfer Protocol) est un protocole dédié à l'envoi de courriers électroniques, et non à la navigation web."
      },
      {
        "l": "C",
        "t": "SHTP n'existe pas en tant que protocole standard reconnu ; il s'agit d'une confusion courante ou d'un distracteur."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance fondamentale des protocoles réseau et la distinction entre le transfert de données en clair et le transfert sécurisé.",
    "summary": [
      "HTTPS est la variante sécurisée de HTTP.",
      "Il utilise le chiffrement TLS/SSL pour protéger les échanges.",
      "Il est indispensable pour sécuriser les transactions et les données personnelles.",
      "Un certificat SSL/TLS valide est nécessaire pour activer le HTTPS sur un site web."
    ]
  },
  {
    "num": "Q5",
    "partie": "Développement Web",
    "q": "Qu'est-ce que le langage HTML ?",
    "choices": {
      "A": "Un langage de balisage utilisé pour structurer et créer des pages web.",
      "B": "Un protocole de communication dédié à l'échange de fichiers audio de type MP3.",
      "C": "Un protocole de communication dédié à l'échange de fichiers vidéo de type DIVX.",
      "D": "Un langage de programmation de scripts côté serveur."
    },
    "correct": "A",
    "explanation": "<p>Le <strong>HTML</strong> (HyperText Markup Language) est le langage standard utilisé pour structurer le contenu des pages web.</p><ul><li>Il n'est <strong>pas un langage de programmation</strong> (pas de logique conditionnelle ou de boucles complexes natives).</li><li>Il ne s'agit <strong>pas d'un protocole de transfert</strong> comme HTTP ou FTP.</li><li>Il repose sur un système de <strong>balises</strong> (tags) qui définissent les éléments sémantiques (titres, paragraphes, liens, images).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le format MP3 est un format de fichier audio, et non un langage informatique. Aucun protocole HTML n'est dédié spécifiquement à cet usage."
      },
      {
        "l": "C",
        "t": "Le format DIVX est un format de compression vidéo, il n'a aucun lien structurel avec le fonctionnement du langage HTML."
      },
      {
        "l": "D",
        "t": "Le HTML est un langage de description (balisage) et non un langage de script comme le JavaScript ou le PHP, qui permettent d'ajouter de la logique."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension fondamentale de la distinction entre un langage de balisage, un protocole de réseau et un langage de script.",
    "summary": [
      "Le HTML signifie HyperText Markup Language.",
      "C'est un langage de balisage permettant de structurer le contenu d'une page web.",
      "Le HTML ne gère pas la logique programmatique, ce rôle est dévolu aux langages de script.",
      "Il est interprété par les navigateurs web pour afficher les documents."
    ]
  },
  {
    "num": "Q6",
    "partie": "Développement Web",
    "q": "Qu'est-ce qu'une interface CGI (Common Gateway Interface) dans le contexte du développement web ?",
    "choices": {
      "A": "Une interface standard permettant à un serveur web d'exécuter des programmes externes pour générer du contenu dynamique.",
      "B": "Un protocole de communication réseau utilisé pour le transfert de fichiers.",
      "C": "Un service système dédié à la résolution de noms de domaine (serveur DNS).",
      "D": "Une balise spécifique du langage HTTP utilisée pour le formatage des pages web."
    },
    "correct": "A",
    "explanation": "<p>Le <strong>CGI (Common Gateway Interface)</strong> est une norme qui définit comment un serveur web interagit avec des programmes externes (scripts). Lorsqu'une requête arrive pour une ressource dynamique, le serveur exécute le script CGI, transmet les données de la requête, et renvoie la sortie du script au client sous forme de réponse HTTP.</p><ul><li>Il ne s'agit pas d'un protocole, mais d'une convention d'interface.</li><li>Il est indépendant du langage de programmation utilisé (Perl, Python, C++, etc.).</li><li>Bien que moins utilisé aujourd'hui au profit de mécanismes comme FastCGI ou les modules serveurs (mod_php), il reste un concept fondamental de l'architecture web.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le CGI n'est pas un protocole de transport ou de session comme TCP ou HTTP, mais une interface applicative entre le serveur et un programme."
      },
      {
        "l": "C",
        "t": "La résolution de noms est le rôle exclusif du DNS (Domain Name System), un service distinct de la génération de pages web."
      },
      {
        "l": "D",
        "t": "HTTP est un protocole et ne possède pas de 'balises' ; les balises (tags) appartiennent au langage HTML, et CGI n'est pas une balise HTML."
      }
    ],
    "examiner": "Évaluer la compréhension des fondements de l'architecture serveur et la capacité à distinguer une interface logicielle d'un protocole réseau ou d'un service système.",
    "summary": [
      "Le CGI est une interface standardisée pour l'exécution de programmes par un serveur web.",
      "Il permet la création de pages web dynamiques en communiquant avec des scripts externes.",
      "Le CGI agit comme une passerelle entre le serveur HTTP et des applications tierces.",
      "Ce concept est un pilier historique permettant l'interaction serveur-client."
    ]
  },
  {
    "num": "Q7",
    "partie": "Développement Web",
    "q": "Quel est le protocole standard utilisé pour sécuriser les échanges de données sur Internet entre un navigateur et un serveur web ?",
    "choices": {
      "A": "HTTP",
      "B": "SMTP",
      "C": "SHTP",
      "D": "HTTPS"
    },
    "correct": "D",
    "explanation": "<p>Le protocole <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) est la version sécurisée du protocole HTTP.</p><p>Il utilise le chiffrement <strong>TLS/SSL</strong> (Transport Layer Security / Secure Sockets Layer) pour garantir trois piliers de la sécurité informatique :</p><ul><li><strong>Confidentialité :</strong> Les données échangées sont chiffrées et illisibles pour un tiers.</li><li><strong>Intégrité :</strong> Les données ne peuvent pas être modifiées durant le transit.</li><li><strong>Authentification :</strong> Le client est assuré de l'identité du serveur via un certificat numérique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "HTTP est le protocole de base non sécurisé. Les données transitent en clair, ce qui permet à n'importe quel intermédiaire d'intercepter les informations."
      },
      {
        "l": "B",
        "t": "SMTP (Simple Mail Transfer Protocol) est un protocole utilisé pour l'envoi de courriers électroniques, et non pour la navigation web sécurisée."
      },
      {
        "l": "C",
        "t": "SHTP n'est pas un protocole standard reconnu. Il s'agit d'une confusion courante ou d'un terme inventé par l'examinateur pour créer un distracteur."
      }
    ],
    "examiner": "Vérifier la compréhension de la sécurité des communications web et la capacité à distinguer les protocoles standards des terminologies erronées.",
    "summary": [
      "Le HTTPS est l'extension sécurisée du HTTP.",
      "Il repose sur les protocoles de chiffrement SSL/TLS.",
      "Le HTTPS protège la confidentialité, l'intégrité et l'authenticité des données.",
      "Il est indispensable pour tout échange d'informations sensibles sur le web."
    ]
  },
  {
    "num": "Q8",
    "partie": "Développement Web et Outils de création de site",
    "q": "Parmi les fonctionnalités suivantes, laquelle n'est pas considérée comme une mission fondamentale d'un logiciel de création de site web (CMS ou éditeur WYSIWYG) ?",
    "choices": {
      "A": "Créer et structurer des pages web.",
      "B": "Gérer la navigation et les liens hypertextes entre les différentes pages.",
      "C": "Créer ou modifier nativement des images complexes.",
      "D": "Gérer l'arborescence et la hiérarchie globale du site."
    },
    "correct": "C",
    "explanation": "<p>Un logiciel de création de site web (comme WordPress, Wix ou un éditeur HTML) est conçu pour gérer la structure, le contenu textuel, la navigation et l'organisation hiérarchique d'un site.</p><p>Bien que certains outils modernes proposent des fonctionnalités basiques d'édition d'image (recadrage, redimensionnement), <strong>la création ou la modification avancée d'images</strong> n'est pas la fonction première d'un logiciel de gestion de contenu. Ce sont les logiciels de création graphique spécialisés (Adobe Photoshop, GIMP, Figma) qui assurent cette fonction.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une fonction essentielle : permettre l'ajout et la mise en page du contenu textuel et structurel."
      },
      {
        "l": "B",
        "t": "La gestion des liens internes est cruciale pour assurer la cohérence de la navigation et le référencement naturel."
      },
      {
        "l": "D",
        "t": "La gestion de l'arborescence est une fonction coeur pour organiser les rubriques et sous-rubriques du site."
      }
    ],
    "examiner": "Évalue la capacité du candidat à distinguer les fonctions fondamentales d'un outil de développement web (CMS/Éditeur) des fonctions propres aux logiciels de création graphique.",
    "summary": [
      "Un logiciel de création de site se concentre sur la structure, le contenu et la navigation.",
      "La création graphique d'images nécessite des outils externes spécialisés.",
      "L'arborescence et les liens sont des piliers de l'architecture d'un site web.",
      "La distinction entre un outil de publication web et un logiciel d'édition d'image est primordiale pour choisir les bons outils de travail."
    ]
  },
  {
    "num": "Q9",
    "partie": "Développement Web - CSS",
    "q": "Quelle est la syntaxe correcte pour insérer un commentaire dans un fichier de feuille de style CSS ?",
    "choices": {
      "A": "' ceci est un commentaire",
      "B": "<!-- ceci est un commentaire -->",
      "C": "// ceci est un commentaire //",
      "D": "/* ceci est un commentaire */"
    },
    "correct": "D",
    "explanation": "<p>En CSS, les commentaires servent à annoter le code sans qu'ils soient interprétés par le navigateur. La syntaxe normalisée est <strong>/* contenu du commentaire */</strong>.</p><ul><li>Les commentaires peuvent s'étendre sur une ou plusieurs lignes.</li><li>Ils ne peuvent pas être imbriqués.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'utilisation de guillemets simples est incorrecte en CSS pour les commentaires."
      },
      {
        "l": "B",
        "t": "Cette syntaxe est utilisée pour les commentaires en HTML, et non en CSS."
      },
      {
        "l": "C",
        "t": "La double barre oblique est la syntaxe standard pour les commentaires sur une ligne en JavaScript, Java ou C++, mais elle n'est pas supportée nativement par CSS."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance précise de la syntaxe de base des langages du Web et la distinction entre les syntaxes de commentaires HTML, JS et CSS.",
    "summary": [
      "Les commentaires CSS utilisent exclusivement la syntaxe /* commentaire */.",
      "Le contenu placé entre les balises de commentaires est ignoré par les navigateurs.",
      "Il est impossible d'imbriquer des commentaires CSS les uns dans les autres.",
      "La syntaxe CSS est différente des commentaires HTML (<!-- -->) et des commentaires de style C (//)."
    ]
  },
  {
    "num": "Q10",
    "partie": "Développement Web - CSS",
    "q": "Que signifie l'acronyme CSS dans le contexte du développement web ?",
    "choices": {
      "A": "Computer Style Sheets",
      "B": "Cascading Style Sheets",
      "C": "Creative Style Sheets",
      "D": "Creating Style Sheets"
    },
    "correct": "B",
    "explanation": "<p><strong>CSS</strong> signifie <strong>Cascading Style Sheets</strong> (Feuilles de style en cascade). Ce langage est utilisé pour décrire la présentation, la mise en forme et la mise en page des documents HTML ou XML.</p><p>Le terme <strong>\"Cascading\"</strong> (cascade) fait référence à la manière dont le navigateur applique les styles selon une hiérarchie de priorités (spécificité, héritage, ordre d'apparition).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est un terme générique incorrect qui ne reflète pas la nature hiérarchique du langage."
      },
      {
        "l": "C",
        "t": "C'est une confusion fréquente basée sur l'idée que le CSS sert à la création visuelle, mais le terme 'Creative' n'est pas l'acronyme officiel."
      },
      {
        "l": "D",
        "t": "Bien que le CSS serve à créer des styles, le terme exact est 'Cascading' pour désigner le système de priorité des règles."
      }
    ],
    "examiner": "Vérifier la connaissance fondamentale des bases du développement web et de la terminologie technique standard.",
    "summary": [
      "CSS est l'acronyme de Cascading Style Sheets.",
      "Il est essentiel pour la séparation du contenu (HTML) et de la présentation (CSS).",
      "Le terme 'Cascading' définit le mécanisme de priorité d'application des styles.",
      "C'est la technologie standard utilisée pour le design sur le web."
    ]
  }
];
