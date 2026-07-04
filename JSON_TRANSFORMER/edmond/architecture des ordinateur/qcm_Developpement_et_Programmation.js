const QCM = [
  {
    "num": "Q1",
    "partie": "Compilation",
    "q": "Indiquez laquelle des affirmations suivantes n’est pas vraie à propos d’un interpréteur",
    "choices": {
      "A": "Un interpréteur génère un programme objet à partir du programme source.",
      "B": "Un interpréteur est une sorte de traducteur",
      "C": "Un interpréteur analyse chaque instruction source à chaque fois qu’elle doit être exécutée."
    },
    "correct": "A",
    "explanation": "Contrairement au compilateur, l'interpréteur exécute le code source sans générer de fichier objet (binaire) permanent.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Compilation",
    "q": "Les erreurs qui peuvent être signalées par le compilateur sont les suivantes __________",
    "choices": {
      "A": "les erreurs de syntaxe",
      "B": "Erreurs sémantiques",
      "C": "Les erreurs logiques",
      "D": "Aucune de ces erreurs"
    },
    "correct": "A",
    "explanation": "Le compilateur vérifie principalement les règles grammaticales du langage (syntaxe) lors de la transformation du code.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Compilation",
    "q": "Un traducteur est décrit comme ___________",
    "choices": {
      "A": "Un logiciel d’application",
      "B": "un logiciel système",
      "C": "un composant matériel",
      "D": "aucun de ces éléments"
    },
    "correct": "B",
    "explanation": "Compilateurs et interpréteurs sont des logiciels système permettant de transformer le code source en code machine.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Développement",
    "q": "Le langage développé pour les applications métier est appelé _____?",
    "choices": {
      "A": "PASCAL",
      "B": "COBOL",
      "D": "C++"
    },
    "correct": "B",
    "explanation": "<p>COBOL est conçu pour le traitement des transactions et les applications de gestion.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Développement",
    "q": "Les erreurs de syntaxe d’un programme informatique sont détectées par ______?",
    "choices": {
      "A": "Compilateur",
      "B": "Éditeur de lien",
      "C": "Loader",
      "D": "Débogueur"
    },
    "correct": "A",
    "explanation": "<p>Le compilateur vérifie si le code respecte les règles grammaticales lors de l'analyse syntaxique.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Développement",
    "q": "Vérification des erreurs d’un programme informatique s’appelle ______?",
    "choices": {
      "A": "Correcting",
      "B": "Running",
      "C": "Bugging",
      "D": "Debugging"
    },
    "correct": "D",
    "explanation": "<p>Le débogage est le processus de recherche et d’élimination des failles dans les logiciels.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Développement logiciel",
    "q": "La séquence autonome d’instructions qui exécute une tâche informatique donnée est appelée _________",
    "choices": {
      "A": "Fonction",
      "B": "Procédure",
      "C": "Sous-programme",
      "D": "Routine"
    },
    "correct": "A",
    "explanation": "<p>Les fonctions sont des blocs de code « autonomes » qui accomplissent une tâche spécifique. En général, les fonctions « reçoivent » des données, les traitent et « renvoient » un résultat. Une fois qu’une fonction est écrite, elle peut être utilisée à plusieurs endroits, encore et encore. Les fonctions peuvent être « appelées » à l’intérieur d’autres fonctions.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Développement logiciel",
    "q": "Le but ultime d’un compilateur est de ________",
    "choices": {
      "A": "réduire les cycles d’horloge pour une tâche de programmation",
      "B": "réduire la taille du code objet",
      "C": "d’être polyvalent",
      "D": "d’être capable de détecter les plus petites erreurs"
    },
    "correct": "A",
    "explanation": "<p>Un compilateur est un logiciel qui traduit le code source écrit dans un langage de programmation de haut niveau en langage machine qui peut être compris par le matériel de l’ordinateur. Le but ultime d’un compilateur est de réduire le temps nécessaire à l’exécution d’un programme en réduisant les cycles d’horloge pour une tâche de programmation.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Programmation",
    "q": "Qu’est-ce qu’une « instruction conditionnelle » ?",
    "choices": {
      "A": "Une instruction qui effectue un calcul arithmétique",
      "B": "Une instruction qui permet d’effectuer des choix en fonction de conditions (si/si non)",
      "C": "Une instruction qui arrête l’exécution du programme",
      "D": "Une instruction qui alloue de la mémoire pour les données"
    },
    "correct": "B",
    "explanation": "<p>Une instruction conditionnelle permet au programme d’exécuter certaines parties de code en fonction d’une condition donnée, souvent sous la forme « si une certaine condition est vraie, alors faire ceci, sinon faire cela ». Elle est couramment utilisée dans les structures de contrôle de programme, comme les instructions if ou switch.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Programmation",
    "q": "Quel est le rôle de la « pile » (stack) dans un programme informatique ?",
    "choices": {
      "A": "Stocker les variables globales utilisées dans le programme",
      "B": "Gérer la mémoire cache pour améliorer les performances",
      "C": "Conserver l’état d’exécution des fonctions et sous-programmes, en particulier les adresses de retour et les variables locales",
      "D": "Permettre le partage de données entre différents programmes"
    },
    "correct": "C",
    "explanation": "<p>La pile est utilisée pour gérer l’exécution des fonctions dans un programme. Elle stocke les adresses de retour lorsqu’une fonction est appelée, ainsi que les variables locales. Lorsqu’une fonction se termine, l’état est récupéré depuis la pile pour revenir au programme principal.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Programmation",
    "q": "Un programme source est généralement écrit en _______.",
    "choices": {
      "A": "Langage d’assembleur",
      "B": "Langage au niveau de la machine",
      "C": "Langage de haut niveau",
      "D": "Langage naturel"
    },
    "correct": "C",
    "explanation": "Le code source est typiquement rédigé dans un langage de haut niveau pour être lisible par l'homme avant compilation.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
