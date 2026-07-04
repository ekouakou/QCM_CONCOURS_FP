const QCM = [
  {
    "num": "Q1",
    "partie": "Sécurité et fonctionnement du Web",
    "q": "Quelle est la fonction principale d'un cookie dans le contexte d'une navigation sur Internet ?",
    "choices": {
      "A": "Il s'agit d'un programme exécutable qui s'installe sur l'ordinateur.",
      "B": "Il peut contenir un virus informatique destiné à endommager le système.",
      "C": "Il permet de stocker des informations pour personnaliser l'expérience utilisateur et les préférences sur un site web.",
      "D": "Il sature systématiquement le disque dur de l'utilisateur."
    },
    "correct": "C",
    "explanation": "<p>Un <strong>cookie</strong> est un simple fichier texte de petite taille enregistré par le navigateur sur le terminal de l'utilisateur. Contrairement aux idées reçues :</p><ul><li>Il n'est <strong>pas un programme</strong> : il ne peut pas s'exécuter de lui-même.</li><li>Il ne peut <strong>pas contenir de virus</strong> : son contenu est passif et ne peut pas infecter l'ordinateur.</li><li>Il est utilisé pour <strong>mémoriser des données</strong> comme les préférences linguistiques, le contenu d'un panier d'achat ou le maintien d'une session de connexion active.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le cookie est un fichier de données passif, pas un code exécutable (programme)."
      },
      {
        "l": "B",
        "t": "Le cookie ne contient pas de code malveillant et ne peut pas propager de virus par nature."
      },
      {
        "l": "D",
        "t": "La taille d'un cookie est très limitée (quelques kilo-octets) ; il est impossible qu'il sature un disque dur."
      }
    ],
    "examiner": "Évaluer la compréhension de l'utilisateur sur la nature, le rôle et les risques réels liés aux cookies HTTP.",
    "summary": [
      "Un cookie est un fichier texte passif utilisé pour la personnalisation du Web.",
      "Les cookies ne sont pas des programmes et ne peuvent pas exécuter de code.",
      "Ils ne représentent pas une menace virale pour le système d'exploitation.",
      "Leur rôle principal est de faciliter la navigation en conservant les préférences de l'utilisateur."
    ]
  },
  {
    "num": "Q2",
    "partie": "Sécurité et fonctionnement du Web",
    "q": "Parmi les affirmations suivantes concernant le protocole HTTPS, laquelle est fausse ?",
    "choices": {
      "A": "C'est un procédé de sécurisation des transactions HTTP.",
      "B": "HTTPS travaille au niveau de la couche transport du modèle OSI.",
      "C": "Il permet de sécuriser les échanges lors de transactions de commerce électronique en cryptant les messages.",
      "D": "Il permet de sécuriser les échanges lors de transactions de commerce électronique en chiffrant les messages."
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) n'opère pas directement au niveau de la couche transport (couche 4 du modèle OSI). En réalité, il consiste en l'encapsulation du protocole HTTP au sein d'une session <strong>TLS/SSL</strong> (Transport Layer Security / Secure Sockets Layer). </p><p>Cette session se situe techniquement au-dessus de la couche transport (TCP) et en dessous de la couche application, agissant souvent comme une sous-couche au sein de la couche session ou application.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une affirmation vraie : HTTPS est bien l'implémentation sécurisée du protocole HTTP."
      },
      {
        "l": "C",
        "t": "Bien que le terme 'crypter' soit souvent utilisé dans le langage courant, dans ce contexte pédagogique, c'est une affirmation techniquement correcte décrivant l'usage du HTTPS pour protéger les données."
      },
      {
        "l": "D",
        "t": "C'est une affirmation vraie : le chiffrement est le mécanisme fondamental utilisé par HTTPS pour assurer la confidentialité des transactions."
      }
    ],
    "examiner": "L'examinateur cherche à tester votre compréhension de la pile réseau (modèle OSI) et votre capacité à distinguer les couches de service des protocoles de transport.",
    "summary": [
      "HTTPS est la combinaison du protocole HTTP avec le protocole TLS/SSL.",
      "Il assure la confidentialité, l'intégrité et l'authentification des échanges.",
      "Le protocole HTTPS ne réside pas dans la couche transport (TCP) mais utilise celle-ci pour transporter des données chiffrées.",
      "Il est crucial de différencier le chiffrement (HTTPS) de la couche de transport proprement dite."
    ]
  }
];
