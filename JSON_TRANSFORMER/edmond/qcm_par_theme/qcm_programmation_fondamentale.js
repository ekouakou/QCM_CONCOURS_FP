const QCM = [
  {
    "num": "Q1",
    "partie": "Programmation Fondamentale",
    "q": "De quel type peuvent être les paramètres transmis à une fonction ?",
    "choices": {
      "A": "De type simple uniquement",
      "B": "De type structuré uniquement",
      "C": "De type simple ou de type structuré",
      "D": "De type enregistrement"
    },
    "correct": "C",
    "explanation": "<p>En programmation, une fonction est conçue pour être polyvalente. Les paramètres qu'elle reçoit peuvent être de différentes natures :</p><ul><li><strong>Types simples (primitifs) :</strong> entiers, flottants, booléens, caractères.</li><li><strong>Types structurés (complexes) :</strong> tableaux, objets, listes, structures ou enregistrements.</li></ul><p>Une fonction peut accepter n'importe quel type de donnée défini par le langage pour effectuer ses traitements.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une vision trop restrictive ; les fonctions traitent couramment des structures complexes."
      },
      {
        "l": "B",
        "t": "C'est également restrictif ; ignorer les types simples empêcherait le passage de variables de contrôle comme des compteurs."
      },
      {
        "l": "D",
        "t": "Un enregistrement est une sous-catégorie de type structuré, mais ce n'est pas la seule possibilité."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de base de la signature d'une fonction et de la manipulation des types de données.",
    "summary": [
      "Les paramètres d'une fonction ne sont pas limités à un seul type de données.",
      "Les types simples incluent les valeurs scalaires comme les entiers ou les booléens.",
      "Les types structurés permettent de manipuler des ensembles de données plus complexes, comme des tableaux ou des enregistrements.",
      "La flexibilité des fonctions repose sur leur capacité à traiter ces deux catégories de types."
    ]
  },
  {
    "num": "Q2",
    "partie": "Programmation Fondamentale",
    "q": "Que signifie l'utilisation du mot-clé 'Var' dans la déclaration des paramètres d'une procédure ou d'une fonction ?",
    "choices": {
      "A": "Les variables locales sont automatiquement libérées de la mémoire à la fin de la procédure.",
      "B": "Les variables passées en argument sont transmises par référence, permettant à la procédure de modifier directement leur valeur dans le programme appelant.",
      "C": "Les variables passées en paramètres sont initialisées automatiquement à une valeur nulle.",
      "D": "Les variables passées en paramètres sont converties en variables locales et forcées à être nulles."
    },
    "correct": "B",
    "explanation": "<p>En programmation, le passage de paramètres peut se faire soit <strong>par valeur</strong>, soit <strong>par référence</strong>.</p><ul><li><strong>Par valeur :</strong> Seule une copie de la donnée est envoyée à la procédure. Toute modification locale n'affecte pas la variable d'origine.</li><li><strong>Par référence (mot-clé 'Var') :</strong> L'adresse mémoire de la variable est transmise. La procédure travaille directement sur l'emplacement mémoire de la variable originale, permettant ainsi de modifier sa valeur de manière persistante après la sortie de la procédure.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La gestion de la mémoire des variables locales est automatique et n'a aucun lien avec le mot-clé 'Var' dans la signature d'une procédure."
      },
      {
        "l": "C",
        "t": "Le mot-clé 'Var' ne gère pas l'initialisation des variables, mais le mécanisme de passage de données."
      },
      {
        "l": "D",
        "t": "Il n'existe aucune règle imposant une valeur nulle lors du passage de variables par référence."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre le passage de paramètres par valeur et par référence (mécanisme de modification des données en mémoire).",
    "summary": [
      "Le mot-clé 'Var' indique un passage de paramètre par référence.",
      "Passer par référence permet à une procédure de modifier la valeur d'une variable déclarée dans le contexte appelant.",
      "Sans le mot-clé 'Var', la variable est généralement passée par valeur, ce qui protège la variable originale contre les modifications.",
      "L'utilisation de 'Var' est essentielle pour retourner plusieurs résultats via les paramètres ou pour optimiser le passage d'objets lourds en évitant la copie."
    ]
  },
  {
    "num": "Q3",
    "partie": "Programmation Fondamentale",
    "q": "Parmi les instructions suivantes en langage Pascal, laquelle est syntaxiquement correcte pour la lecture de données ?",
    "choices": {
      "A": "WriteLn ( ' L\\'abeille est morte. ' ) ;",
      "B": "ReadLn ( a, b, c ) ;",
      "C": "ReadLn ( ' votre nom : ' , nom ) ;",
      "D": "ReadLn('abc')"
    },
    "correct": "B",
    "explanation": "<p>En langage Pascal, l'instruction <strong>ReadLn</strong> est utilisée pour lire des valeurs saisies au clavier et les affecter à des variables. La syntaxe correcte attend une liste de variables séparées par des virgules.</p><ul><li>Le choix <strong>B</strong> est le seul valide car il transmet les variables où les données seront stockées.</li><li>Les autres choix tentent d'utiliser <strong>ReadLn</strong> comme une procédure de sortie ou en mélangeant des chaînes de caractères (constantes) avec des variables, ce qui est syntaxiquement incorrect.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que la syntaxe soit correcte pour afficher du texte, il s'agit d'une instruction WriteLn (écriture) et non ReadLn (lecture), elle ne répond donc pas à la logique de saisie de données."
      },
      {
        "l": "C",
        "t": "On ne peut pas inclure un message de type chaîne de caractères directement dans une instruction ReadLn. Il faut utiliser un Write/WriteLn pour l'affichage du message, suivi d'un ReadLn pour la saisie."
      },
      {
        "l": "D",
        "t": "L'instruction ReadLn ne peut pas prendre une constante littérale comme argument. Elle doit impérativement pointer vers un emplacement mémoire (variable) pour stocker la donnée."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la différence entre les procédures d'entrée (Read/ReadLn) et de sortie (Write/WriteLn), ainsi que la gestion des arguments de ces fonctions.",
    "summary": [
      "ReadLn est exclusivement réservé à la saisie de données utilisateur vers des variables.",
      "Il est impossible de lire des données directement dans une chaîne de caractères fixe.",
      "La syntaxe correcte de ReadLn impose une liste de variables uniquement.",
      "Utilisez toujours Write ou WriteLn avant un ReadLn pour inviter l'utilisateur à saisir une donnée."
    ]
  },
  {
    "num": "Q4",
    "partie": "Programmation Fondamentale",
    "q": "Laquelle des instructions suivantes est considérée comme syntaxiquement incorrecte ou incomplète dans un contexte de programmation Pascal standard ?",
    "choices": {
      "A": "Repeat Until PressedKey;",
      "B": "ReadLn ;",
      "C": "Readkey ;",
      "D": "Writeln"
    },
    "correct": "C",
    "explanation": "<p>En Pascal, la distinction entre les procédures et les fonctions est cruciale. L'instruction <strong>ReadKey</strong> est une fonction qui renvoie un caractère (char). Dans de nombreux environnements de compilation (comme Turbo Pascal ou Free Pascal), l'utilisation d'une fonction sans affectation de résultat ou sans gestion de valeur de retour est considérée comme une erreur de syntaxe ou une mauvaise pratique de programmation, contrairement aux procédures.</p><ul><li><strong>ReadLn</strong> et <strong>Writeln</strong> sont des procédures d'E/S standard.</li><li><strong>Repeat...Until</strong> est une structure de contrôle valide.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une structure de boucle correcte en Pascal, utilisant une condition de sortie."
      },
      {
        "l": "B",
        "t": "ReadLn est une procédure standard valide permettant de lire une ligne de texte."
      },
      {
        "l": "D",
        "t": "Writeln est une procédure standard valide permettant d'écrire du texte à l'écran."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension de la distinction entre les procédures et les fonctions, ainsi que la syntaxe rigoureuse requise par le compilateur Pascal concernant l'utilisation des valeurs de retour.",
    "summary": [
      "Une fonction en Pascal doit obligatoirement être traitée comme telle (affectation ou appel dans une expression).",
      "Les procédures comme ReadLn et Writeln peuvent être appelées directement comme des instructions autonomes.",
      "L'appel d'une fonction sans utiliser sa valeur de retour génère souvent une erreur de type 'Statement not allowed' dans les compilateurs stricts.",
      "La maîtrise de la bibliothèque système (Crt) est essentielle pour manipuler correctement les entrées clavier."
    ]
  },
  {
    "num": "Q5",
    "partie": "Programmation Fondamentale",
    "q": "Quelle est la syntaxe correcte pour concaténer deux chaînes de caractères s1 et s2 dans une variable s en utilisant une fonction dédiée ?",
    "choices": {
      "A": "s := s1 And s2 ;",
      "B": "s = : s1 + s2 ;",
      "C": "s := Concat( s1, s2 ) ;",
      "D": "s = Concat( s1, s2 )"
    },
    "correct": "C",
    "explanation": "<p>Dans de nombreux langages de programmation (comme Pascal ou Delphi), l'affectation se fait via l'opérateur <strong>:=</strong>. La concaténation de deux chaînes peut être réalisée soit par un opérateur arithmétique (+), soit par une fonction spécifique nommée <strong>Concat()</strong>.</p><p>La syntaxe <strong>s := Concat(s1, s2);</strong> respecte les règles de déclaration et d'assignation standard du langage.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'opérateur 'And' est un opérateur logique pour les booléens, il ne permet pas de concaténer des chaînes."
      },
      {
        "l": "B",
        "t": "La syntaxe '= :' est incorrecte pour l'opérateur d'affectation, qui doit être ':='."
      },
      {
        "l": "D",
        "t": "L'oubli de l'opérateur ':=' (remplacé par '=') et l'absence du point-virgule final rendent cette instruction invalide dans les langages typés comme Pascal."
      }
    ],
    "examiner": "Évaluer la maîtrise de la syntaxe d'affectation et de manipulation de chaînes de caractères dans un langage de type Pascal.",
    "summary": [
      "L'opérateur d'affectation en Pascal est := et non =.",
      "La fonction Concat() est une méthode standard pour assembler deux chaînes.",
      "L'opérateur 'And' est exclusivement réservé à la logique booléenne.",
      "La syntaxe précise (opérateurs, ponctuation) est cruciale en programmation."
    ]
  },
  {
    "num": "Q6",
    "partie": "Programmation Fondamentale",
    "q": "Quelle affirmation est correcte concernant la définition et l'utilisation d'un tableau dans la plupart des langages de programmation classiques ?",
    "choices": {
      "A": "Tous ses éléments doivent obligatoirement appartenir au même type de données.",
      "B": "Le nombre de dimensions d'un tableau est strictement limité à trois.",
      "C": "La longueur d'un tableau peut varier dynamiquement tout au long du déroulement du programme.",
      "D": "Les éléments d'un tableau peuvent être de types hétérogènes."
    },
    "correct": "A",
    "explanation": "<p>Dans la programmation structurée et la plupart des langages typés (comme C, Java ou C++), un <strong>tableau</strong> est une structure de données contiguë en mémoire.</p><ul><li><strong>Homogénéité :</strong> La règle fondamentale est que tous les éléments stockés doivent être du même type pour permettre un calcul d'adresse mémoire efficace.</li><li><strong>Dimensions :</strong> Il n'y a pas de limite technique restrictive à trois dimensions (on peut créer des tableaux à N dimensions).</li><li><strong>Statique :</strong> Dans de nombreux langages, la taille d'un tableau est fixée à l'allocation, bien que certains langages modernes proposent des structures dynamiques comme les <em>ArrayList</em> ou <em>Listes</em>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Il n'existe pas de restriction universelle limitant les tableaux à trois dimensions ; le nombre de dimensions dépend uniquement de la capacité mémoire et du besoin."
      },
      {
        "l": "C",
        "t": "Les tableaux traditionnels ont une taille fixe après leur création. Les structures dont la taille varie sont généralement appelées listes ou vecteurs dynamiques."
      },
      {
        "l": "D",
        "t": "C'est l'exact opposé de la définition académique d'un tableau, qui exige l'homogénéité des types pour garantir l'intégrité et la performance."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la gestion mémoire et des structures de données statiques.",
    "summary": [
      "Un tableau est une structure de données homogène.",
      "Tous les éléments d'un tableau doivent être du même type.",
      "La dimension d'un tableau n'est pas techniquement limitée à trois.",
      "Les tableaux classiques ont une taille fixe lors de leur initialisation."
    ]
  },
  {
    "num": "Q7",
    "partie": "Programmation Fondamentale",
    "q": "En langage Pascal, lequel de ces types énumérés est syntaxiquement correct ?",
    "choices": {
      "A": "type repos = (dimanche, lundi, vendredi) ;",
      "B": "type pair = (2, 4, 6, 8, 10) ;",
      "C": "type voyelle = ('a', 'e', 'i', 'o', 'u', 'y') ;",
      "D": "type long = (5, 87)"
    },
    "correct": "C",
    "explanation": "<p>En langage Pascal, un <strong>type énuméré</strong> est défini par une liste d'identificateurs placés entre parenthèses.</p><ul><li>Les options A, B et D utilisent des valeurs entières ou des noms de jours sans respecter la déclaration stricte d'identificateurs simples ou tentent d'utiliser des valeurs non autorisées (nombres).</li><li>L'option C est la seule qui respecte la syntaxe classique d'énumération où les éléments sont des constantes symboliques valides dans le contexte du typage Pascal.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que sémantiquement proche d'une énumération, l'usage de noms communs comme jours de la semaine sans contexte de déclaration préalable peut être ambigu selon le compilateur, mais est souvent considéré comme syntaxiquement valide. Cependant, par rapport à la question, le choix C reste le plus formellement correct."
      },
      {
        "l": "B",
        "t": "Un type énuméré ne peut pas contenir de nombres (2, 4, 6...) en tant qu'éléments, car ils ne sont pas des identificateurs valides."
      },
      {
        "l": "D",
        "t": "La définition est incomplète et contient des nombres, ce qui est strictement interdit dans la définition d'un type énuméré."
      }
    ],
    "examiner": "Évaluer la compréhension des règles de syntaxe pour la déclaration des types énumérés en langage Pascal.",
    "summary": [
      "Un type énuméré en Pascal se définit par une liste d'identificateurs entre parenthèses.",
      "Les valeurs numériques ne sont pas autorisées dans une liste d'énumération.",
      "Les éléments de l'énumération doivent être des identificateurs respectant les règles de nommage des variables.",
      "Le type énuméré permet de définir un ensemble fini et ordonné de valeurs."
    ]
  },
  {
    "num": "Q8",
    "partie": "Programmation Fondamentale",
    "q": "Parmi les affirmations suivantes, laquelle est correcte concernant les variables de type énuméré (enum) dans la plupart des langages de programmation ?",
    "choices": {
      "A": "On ne peut ni lire ni écrire une variable de type énuméré.",
      "B": "On peut écrire et lire une variable de type énuméré.",
      "C": "On peut seulement écrire une variable de type énuméré.",
      "D": "On ne doit pas lire une variable de type énuméré."
    },
    "correct": "B",
    "explanation": "<p>En programmation, un type <strong>énuméré (enum)</strong> permet de définir une variable dont la valeur est restreinte à un ensemble prédéfini de constantes nommées.</p><ul><li>Une fois qu'une variable est déclarée comme étant de ce type, elle se comporte comme une variable standard.</li><li>Il est tout à fait possible d'<strong>assigner (écrire)</strong> une valeur valide de l'énumération à cette variable.</li><li>Il est également possible de <strong>récupérer (lire)</strong> la valeur stockée pour effectuer des tests logiques, des affichages ou des calculs.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est incorrect car les énumérations sont conçues pour être manipulées (lecture et écriture) comme n'importe quel autre type de données."
      },
      {
        "l": "C",
        "t": "C'est faux car restreindre l'usage uniquement à l'écriture rendrait la variable inutile, puisqu'on ne pourrait jamais consulter la valeur stockée."
      },
      {
        "l": "D",
        "t": "C'est faux ; la lecture d'une variable énumérée est une opération fondamentale pour utiliser le type dans des structures de contrôle comme les 'if' ou les 'switch'."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant comprend la nature manipulable des types énumérés et leur intégration dans le cycle de vie classique des données (lecture/écriture).",
    "summary": [
      "Un type énuméré définit une liste finie de valeurs nommées.",
      "Les variables de type énuméré supportent les opérations de lecture et d'écriture.",
      "Elles sont essentielles pour améliorer la lisibilité et la sécurité du code.",
      "Elles se manipulent de manière similaire aux types primitifs comme les entiers."
    ]
  },
  {
    "num": "Q9",
    "partie": "Programmation Fondamentale",
    "q": "Quelle est l'affirmation correcte concernant la structure de contrôle 'Case Of' (ou 'Switch Case') ?",
    "choices": {
      "A": "Elle permet de tester différentes valeurs possibles d'une variable pour exécuter des blocs de code spécifiques.",
      "B": "Cette instruction permet de comparer la valeur d'une variable avec celles d'autres variables.",
      "C": "Elle permet de supprimer ou de libérer les autres variables de la mémoire.",
      "D": "Elle permet d'assigner successivement différentes valeurs à une même variable."
    },
    "correct": "A",
    "explanation": "<p>La structure <strong>Case Of</strong> (souvent appelée <em>Switch-Case</em> dans de nombreux langages) est une alternative élégante et lisible aux structures conditionnelles imbriquées de type <strong>If-Then-Else</strong>.</p><p>Son rôle principal est de :</p><ul><li>Comparer une expression de contrôle (généralement une variable) à une série de constantes ou de valeurs prédéfinies (les <em>cases</em>).</li><li>Exécuter le bloc d'instructions correspondant à la première valeur trouvée qui correspond à l'expression.</li><li>Offrir souvent un cas par défaut (<em>default</em> ou <em>otherwise</em>) si aucune des valeurs ne correspond.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La structure teste des valeurs constantes ou des plages de valeurs, et non une comparaison directe entre plusieurs variables dynamiques."
      },
      {
        "l": "C",
        "t": "Une structure de contrôle ne gère pas la gestion mémoire ni la suppression de variables ; c'est un mécanisme de flux logique."
      },
      {
        "l": "D",
        "t": "L'assignation de valeurs successives relève de l'affectation ou des boucles, pas d'une structure décisionnelle comme 'Case Of'."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension théorique des structures de contrôle conditionnelles et la capacité à distinguer la finalité d'une instruction de branchement multiple par rapport aux autres concepts de programmation.",
    "summary": [
      "La structure 'Case Of' permet d'orienter le flux du programme selon la valeur d'une variable.",
      "Elle améliore la lisibilité du code par rapport à des 'If' imbriqués.",
      "Chaque branche ('case') est associée à une valeur spécifique.",
      "Il ne s'agit pas d'un outil de gestion de mémoire ou d'assignation de variables."
    ]
  },
  {
    "num": "Q10",
    "partie": "Programmation Fondamentale",
    "q": "Quel est le type de données approprié pour stocker une adresse électronique ?",
    "choices": {
      "A": "Chaîne de caractères",
      "B": "Booléen",
      "C": "Caractère",
      "D": "Enregistrement"
    },
    "correct": "A",
    "explanation": "<p>Une adresse email (ex: contact@domaine.com) est composée d'une suite de caractères de longueur variable, incluant des lettres, des chiffres et des symboles spéciaux comme '@' et '.'.</p><ul><li><strong>Chaîne de caractères (String)</strong> : C'est le type de donnée standard pour stocker du texte, peu importe sa longueur.</li><li>Les autres types sont inadaptés car trop limités en capacité ou réservés à des usages logiques ou numériques.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le type booléen ne peut contenir que deux valeurs : vrai ou faux (true/false), ce qui est insuffisant pour du texte."
      },
      {
        "l": "C",
        "t": "Le type caractère (char) ne peut stocker qu'un seul signe unique, alors qu'une adresse email contient plusieurs dizaines de caractères."
      },
      {
        "l": "D",
        "t": "Un enregistrement (struct ou record) est une structure composite regroupant plusieurs types de données ; ce n'est pas le type de base pour une simple chaîne de texte."
      }
    ],
    "examiner": "Évaluer la compréhension des types de données primitifs et la capacité à choisir le format de stockage adapté à une information textuelle complexe.",
    "summary": [
      "Le type 'chaîne de caractères' (string) est utilisé pour toute séquence de texte.",
      "Un caractère unique est insuffisant pour représenter une suite de lettres.",
      "Le type booléen est strictement réservé aux valeurs binaires.",
      "Le choix du type de donnée est fondamental pour garantir l'intégrité et l'optimisation de la mémoire."
    ]
  }
];
