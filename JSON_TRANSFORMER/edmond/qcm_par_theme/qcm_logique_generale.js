const QCM = [
  {
    "num": "Q1",
    "partie": "Logique générale",
    "q": "L'extrait fourni ne contient pas de question exploitable. Veuillez soumettre un contenu contenant une question, des options et une réponse marquée.",
    "choices": {
      "A": "Information manquante",
      "B": "Contenu inexploitable",
      "C": "Erreur de format",
      "D": "Aucune question trouvée"
    },
    "correct": "D",
    "explanation": "<p>Le texte soumis est une structure vide ou un modèle sans contenu pédagogique.</p><p>Pour générer un QCM valide, veuillez fournir le texte contenant :</p><ul><li>L'énoncé de la question.</li><li>Les choix de réponse.</li><li>L'indication de la bonne réponse.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'information est effectivement manquante dans votre requête."
      },
      {
        "l": "B",
        "t": "Le contenu est brut et ne permet pas d'extraire une connaissance."
      },
      {
        "l": "C",
        "t": "La structure ne suit pas les règles d'un QCM standard."
      }
    ],
    "examiner": "Capacité à traiter des données structurées pour la génération de quiz.",
    "summary": [
      "La question fournie était incomplète.",
      "Il est nécessaire de fournir un énoncé avec des options pour générer un contenu pédagogique.",
      "Veuillez vérifier vos données d'entrée.",
      "Je suis prêt à analyser votre prochain texte dès qu'il sera fourni."
    ]
  },
  {
    "num": "Q2",
    "partie": "Logique générale",
    "q": "Le code ASCII peut être assimilé à un tableau de correspondance entre quels types d'éléments ?",
    "choices": {
      "A": "Une valeur et son adresse mémoire.",
      "B": "Un caractère et sa valeur numérique unique.",
      "C": "Un nombre et son inverse mathématique.",
      "D": "Une adresse mémoire et un contenu mémoire associé."
    },
    "correct": "B",
    "explanation": "<p>Le <strong>code ASCII</strong> (American Standard Code for Information Interchange) est une norme de codage informatique qui permet de représenter des caractères textuels (lettres, chiffres, symboles) sous forme de nombres.</p><p>Chaque caractère est associé à une valeur numérique unique comprise entre 0 et 127 (pour l'ASCII standard). Par exemple, la lettre 'A' majuscule possède la valeur décimale 65.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une adresse mémoire désigne un emplacement dans la RAM, ce qui n'a aucun lien direct avec la représentation des caractères."
      },
      {
        "l": "C",
        "t": "L'ASCII n'est pas un système mathématique pour inverser des nombres, mais un système de codage pour le texte."
      },
      {
        "l": "D",
        "t": "La relation entre une adresse mémoire et son contenu est le principe fondamental du fonctionnement de la mémoire vive (RAM), pas du codage des caractères."
      }
    ],
    "examiner": "Évaluer la compréhension des fondamentaux du codage de l'information et de la distinction entre les types de données en informatique.",
    "summary": [
      "L'ASCII est un standard de codage pour les caractères.",
      "Il établit une correspondance biunivoque entre un caractère et un entier.",
      "Il est limité aux caractères latins et symboles de base (7 bits).",
      "C'est la base de la communication textuelle entre l'utilisateur et la machine."
    ]
  },
  {
    "num": "Q3",
    "partie": "Logique générale",
    "q": "Quelle est la valeur équivalente du nombre binaire 1001 dans le système hexadécimal ?",
    "choices": {
      "A": "9",
      "B": "1A",
      "C": "F4",
      "D": "F3"
    },
    "correct": "A",
    "explanation": "<p>Pour convertir un nombre binaire en hexadécimal, il faut suivre la règle de conversion basée sur les puissances de 2. Le nombre binaire <strong>1001</strong> se décompose ainsi :</p><ul><li>(1 × 2³) + (0 × 2²) + (0 × 2¹) + (1 × 2⁰)</li><li>(1 × 8) + (0 × 4) + (0 × 2) + (1 × 1)</li><li>8 + 0 + 0 + 1 = <strong>9</strong></li></ul><p>Dans le système hexadécimal, les chiffres de 0 à 9 correspondent aux mêmes valeurs en décimal. Par conséquent, 1001₂ est égal à 9₁₆.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le choix 1A correspondrait à un nombre binaire beaucoup plus long (11010). Il y a confusion avec une valeur codée sur 8 bits ou plus."
      },
      {
        "l": "C",
        "t": "F4 est une valeur hexadécimale beaucoup plus élevée, correspondant au nombre décimal 244."
      },
      {
        "l": "D",
        "t": "F3 est une valeur hexadécimale correspondant au nombre décimal 243, ce qui est mathématiquement incorrect pour la conversion de 1001."
      }
    ],
    "examiner": "L'examinateur souhaite évaluer la maîtrise de la conversion entre les bases de numération, spécifiquement du système binaire vers le système hexadécimal.",
    "summary": [
      "Le système binaire utilise les puissances de 2 pour représenter des valeurs.",
      "La conversion de 1001 en décimal donne 9.",
      "Le système hexadécimal utilise les mêmes symboles que le système décimal pour les valeurs allant de 0 à 9.",
      "Comprendre les bases est crucial pour le fonctionnement des systèmes numériques et de l'adressage mémoire."
    ]
  },
  {
    "num": "Q4",
    "partie": "Logique générale",
    "q": "Quel est le résultat de l'addition binaire 0011 + 1001 ?",
    "choices": {
      "A": "1100",
      "B": "111001",
      "C": "1110",
      "D": "11101"
    },
    "correct": "A",
    "explanation": "<p>Pour effectuer l'addition binaire <strong>0011 + 1001</strong>, nous procédons colonne par colonne de droite à gauche :</p><ul><li>1 + 1 = 0 (retenue 1)</li><li>1 + 0 + 1 (retenue) = 0 (retenue 1)</li><li>0 + 0 + 1 (retenue) = 1</li><li>0 + 1 = 1</li></ul><p>Le résultat final est donc <strong>1100</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Ce choix résulte d'une mauvaise concaténation ou d'une interprétation erronée de la taille des bits."
      },
      {
        "l": "C",
        "t": "Ce résultat est incorrect car il oublie de gérer correctement les retenues successives lors de l'addition."
      },
      {
        "l": "D",
        "t": "Ce choix est impossible dans une addition sur 4 bits sans dépassement de capacité (overflow)."
      }
    ],
    "examiner": "L'examinateur évalue la maîtrise des règles de l'arithmétique binaire, notamment la gestion des retenues (carries).",
    "summary": [
      "L'addition binaire suit les mêmes principes que l'addition décimale.",
      "1 + 1 en binaire donne 0 avec une retenue de 1.",
      "Il est crucial de reporter la retenue sur la colonne suivante vers la gauche.",
      "Le résultat 0011 + 1001 est équivalent à 3 + 9 = 12 en décimal (12 s'écrit 1100 en binaire)."
    ]
  }
];
