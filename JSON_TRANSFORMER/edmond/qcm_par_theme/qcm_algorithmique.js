const QCM = [
  {
    "num": "Q1",
    "partie": "Algorithmique",
    "q": "Dans la structure d'un algorithme, où définit-on le type 'intervalle' ?",
    "choices": {
      "A": "Dans la partie 'Var' de l'algorithme",
      "B": "Dans le corps de l'algorithme",
      "C": "Dans la partie 'Type' de l'algorithme",
      "D": "Dans l'en-tête de l'algorithme"
    },
    "correct": "C",
    "explanation": "<p>En algorithmique structurée, la déclaration des types personnalisés, incluant les types <strong>intervalle</strong> (ou types énumérés restreints), doit impérativement se situer dans la section dédiée aux déclarations de types.</p><ul><li>La partie <strong>Type</strong> permet de définir de nouveaux domaines de valeurs avant leur utilisation.</li><li>La partie <strong>Var</strong> est réservée à l'instanciation des variables utilisant ces types.</li><li>Le corps de l'algorithme est réservé aux instructions opératoires.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La section 'Var' sert à déclarer des variables, pas à définir de nouveaux types."
      },
      {
        "l": "B",
        "t": "Le corps de l'algorithme contient les instructions et non les déclarations de structure."
      },
      {
        "l": "D",
        "t": "L'en-tête sert uniquement à nommer l'algorithme et, éventuellement, à lister les paramètres d'entrée/sortie."
      }
    ],
    "examiner": "L'examinateur vérifie que l'étudiant maîtrise la syntaxe et la structuration rigoureuse d'un algorithme selon les conventions de nommage et de déclaration.",
    "summary": [
      "La section 'Type' est dédiée à la définition des nouveaux types de données.",
      "La section 'Var' est strictement réservée à la déclaration des variables.",
      "Les types personnalisés doivent être définis avant d'être utilisés dans les déclarations de variables.",
      "Le corps de l'algorithme est réservé exclusivement à la logique procédurale."
    ]
  },
  {
    "num": "Q2",
    "partie": "Algorithmique",
    "q": "Dans la structure classique d'un algorithme, à quel endroit doit-on déclarer un fichier ?",
    "choices": {
      "A": "Dans la partie 'Type' de l'algorithme.",
      "B": "Dans la partie 'Var' (Variables) de l'algorithme.",
      "C": "Dans l'en-tête de l'algorithme.",
      "D": "Dans une sous-section dédiée aux constantes."
    },
    "correct": "B",
    "explanation": "<p>En algorithmique classique, un fichier est considéré comme un objet manipulable au même titre qu'une variable complexe. Par conséquent, sa déclaration s'effectue dans la <strong>section des déclarations de variables (Var)</strong>.</p><p>La structure suit généralement cet ordre :</p><ul><li>En-tête (Nom de l'algorithme)</li><li>Déclaration des constantes (Const)</li><li>Déclaration des types (Type)</li><li>Déclaration des variables (Var), incluant les types <strong>Fichier</strong></li><li>Début et fin du corps de l'algorithme</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La partie 'Type' sert à définir de nouvelles structures de données (comme des enregistrements), pas à instancier des fichiers."
      },
      {
        "l": "C",
        "t": "L'en-tête de l'algorithme contient uniquement son nom et éventuellement ses paramètres, mais pas la déclaration des variables internes."
      },
      {
        "l": "D",
        "t": "Les fichiers ne sont pas des constantes car leur contenu et leur état d'ouverture/fermeture évoluent lors de l'exécution."
      }
    ],
    "examiner": "Évaluer la maîtrise de la syntaxe et de la structure standard d'un algorithme selon les conventions pédagogiques habituelles.",
    "summary": [
      "La déclaration des fichiers s'effectue dans la section 'Var'.",
      "Un fichier est traité comme une variable de type spécifique.",
      "La partie 'Type' est réservée à la définition de structures personnalisées.",
      "L'en-tête est réservé au nom de l'algorithme uniquement."
    ]
  },
  {
    "num": "Q3",
    "partie": "Algorithmique",
    "q": "Dans le cadre de la modélisation algorithmique, de combien de manières distinctes est-il généralement possible de déclarer une structure de type \"enregistrement\" (ou structure) ?",
    "choices": {
      "A": "De deux façons",
      "B": "De trois façons",
      "C": "De cinq façons",
      "D": "De six façons"
    },
    "correct": "B",
    "explanation": "<p>En algorithmique, la définition d'un enregistrement (aussi appelé <strong>structure</strong> ou <strong>record</strong>) peut être effectuée selon trois approches principales :</p><ul><li><strong>La définition directe du type :</strong> On définit un nouveau type de donnée qui pourra être instancié plus tard.</li><li><strong>La définition par variable anonyme :</strong> On déclare directement une variable possédant une structure interne sans nommer explicitement le type de structure.</li><li><strong>L'utilisation de alias ou constructeurs :</strong> Selon le formalisme ou le langage (comme Pascal, C ou pseudo-code), on peut utiliser des mots-clés spécifiques pour définir la structure, l'instancier ou créer des types dérivés.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Limiter la déclaration à deux méthodes est incomplet, omettant notamment la distinction entre la définition d'un type et l'instanciation directe."
      },
      {
        "l": "C",
        "t": "Cinq façons constitue une sur-interprétation technique qui confond souvent la syntaxe spécifique d'un langage avec les concepts fondamentaux de l'algorithmique."
      },
      {
        "l": "D",
        "t": "Six façons est incorrect et n'a aucune base théorique dans les manuels standards d'algorithmique."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant maîtrise les concepts fondamentaux de structuration des données et la distinction théorique entre type, instance et déclaration anonyme.",
    "summary": [
      "Un enregistrement permet de regrouper des champs de types potentiellement différents sous un même identifiant.",
      "Il existe trois manières classiques de déclarer un enregistrement : la définition de type, la variable structurée anonyme et l'usage de types dérivés.",
      "Comprendre ces approches est essentiel pour la modélisation de données complexes.",
      "La maîtrise de la syntaxe des structures est un prérequis pour aborder la programmation orientée objet."
    ]
  },
  {
    "num": "Q4",
    "partie": "Algorithmique",
    "q": "Dans un algorithme ou un langage de programmation, à quel endroit une variable globale est-elle généralement déclarée ?",
    "choices": {
      "A": "Dans la partie déclarative du programme principal, en dehors de toute fonction ou procédure.",
      "B": "Dans le corps du programme principal, à l'intérieur d'une instruction.",
      "C": "Dans la partie déclarative d'une fonction locale.",
      "D": "Dans la partie déclarative d'une sous-routine spécifique."
    },
    "correct": "A",
    "explanation": "<p>En programmation, une <strong>variable globale</strong> est une variable dont la portée s'étend à l'ensemble du programme. Pour qu'elle soit accessible par toutes les fonctions et procédures, elle doit être déclarée en dehors de ces structures, généralement au niveau de la <strong>section déclarative du programme principal</strong>.</p><ul><li>Une variable déclarée dans une fonction (C et D) est dite <strong>locale</strong> et n'est accessible que dans le bloc où elle a été définie.</li><li>Le corps du programme (B) concerne l'exécution des instructions, pas la définition de la portée des variables.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le corps du programme contient les instructions exécutables, non la déclaration de portée des variables."
      },
      {
        "l": "C",
        "t": "Une déclaration au sein d'une fonction rend la variable locale à cette fonction, ce qui est l'opposé d'une variable globale."
      },
      {
        "l": "D",
        "t": "Comme pour le choix C, une déclaration dans une fonction crée une portée restreinte, empêchant l'accès global."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la différence fondamentale entre la portée globale et la portée locale d'une variable au sein d'une architecture logicielle.",
    "summary": [
      "Une variable globale est accessible depuis n'importe quelle partie du programme.",
      "Elle doit être définie en dehors des fonctions et procédures.",
      "L'emplacement standard est la section déclarative globale du programme principal.",
      "Les variables déclarées à l'intérieur d'une fonction sont locales et invisibles à l'extérieur."
    ]
  },
  {
    "num": "Q5",
    "partie": "Algorithmique",
    "q": "Dans la conception d'un algorithme, comment définit-on généralement une chaîne de caractères ?",
    "choices": {
      "A": "Son nom et sa longueur minimale",
      "B": "Son nom et sa classe",
      "C": "Sa nature et sa longueur maximale",
      "D": "Son nom et sa longueur maximale"
    },
    "correct": "D",
    "explanation": "<p>En algorithmique et en programmation, lorsqu'on déclare une chaîne de caractères (notamment dans des langages typés ou pour la gestion de la mémoire), il est crucial de définir deux éléments principaux :</p><ul><li><strong>Le nom :</strong> L'identifiant qui permet de manipuler la donnée au sein du programme.</li><li><strong>La longueur maximale :</strong> La taille réservée en mémoire pour stocker la séquence de caractères afin d'éviter les débordements de tampon (buffer overflow).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La longueur minimale n'est pas une caractéristique standard de la définition d'une variable de type chaîne."
      },
      {
        "l": "B",
        "t": "La 'classe' est un terme propre à la programmation orientée objet, ce qui ne constitue pas la définition de base d'une chaîne en algorithmique."
      },
      {
        "l": "C",
        "t": "La 'nature' est un terme trop vague ; la définition nécessite impérativement un nom (identifiant) pour référencer la variable."
      }
    ],
    "examiner": "Évaluer la compréhension de la structure des données de base et des contraintes de gestion mémoire en algorithmique.",
    "summary": [
      "Une chaîne de caractères se compose d'un identifiant unique nommé 'nom'.",
      "La réservation mémoire nécessite de spécifier la capacité maximale de la chaîne.",
      "La longueur minimale n'est pas une contrainte de définition standard.",
      "Une déclaration rigoureuse prévient les erreurs de gestion de mémoire."
    ]
  },
  {
    "num": "Q6",
    "partie": "Algorithmique",
    "q": "Dans un algorithme, quel est le rôle principal d'une structure de type enregistrement (record) ?",
    "choices": {
      "A": "Présenter un objet donné",
      "B": "Masquer les détails d'un objet donné",
      "C": "Identifier un objet par ses détails (champs)",
      "D": "Développer les détails d'un objet donné"
    },
    "correct": "C",
    "explanation": "<p>En algorithmique, un <strong>enregistrement</strong> (ou <em>structure</em>) est un type de données composite qui permet de regrouper sous un seul nom plusieurs variables de types potentiellement différents.</p><ul><li>Il sert à <strong>modéliser</strong> une entité du monde réel en décrivant ses caractéristiques (ses attributs ou champs).</li><li>En regroupant ces champs, il permet d'<strong>identifier</strong> l'objet de manière structurée, en accédant précisément à chaque détail qui le compose.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Présenter est un terme trop vague qui ne décrit pas la fonction technique de stockage et d'organisation des données."
      },
      {
        "l": "B",
        "t": "Masquer les détails est le rôle de l'encapsulation dans la programmation orientée objet, ce qui est une notion plus avancée et différente de la définition fondamentale de l'enregistrement."
      },
      {
        "l": "D",
        "t": "Développer les détails suggère une action de traitement ou d'affichage, alors que l'enregistrement est une structure statique de définition de données."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant comprend la notion de structure de données composite et la capacité à regrouper des attributs pour définir un objet métier.",
    "summary": [
      "Un enregistrement est une structure de données composite permettant de regrouper plusieurs valeurs.",
      "Il est utilisé pour modéliser des objets complexes composés d'attributs variés.",
      "Chaque composant d'un enregistrement est appelé un champ ou membre.",
      "Il permet d'identifier et de manipuler une entité unique à travers ses caractéristiques détaillées."
    ]
  },
  {
    "num": "Q7",
    "partie": "Algorithmique",
    "q": "Quelle est la définition d'un programme récursif ?",
    "choices": {
      "A": "Il peut s'appeler lui-même.",
      "B": "Il peut appeler un autre programme.",
      "C": "Il peut s'arrêter à n'importe quel moment.",
      "D": "Il peut être interrompu."
    },
    "correct": "A",
    "explanation": "<p>Un programme ou une fonction est dit <strong>récursif</strong> lorsqu'il fait appel à lui-même au cours de son exécution.</p><p>Pour qu'un algorithme récursif soit valide et ne boucle pas indéfiniment, il doit respecter deux conditions :</p><ul><li><strong>Le cas de base :</strong> une condition d'arrêt qui permet de sortir de la récursion.</li><li><strong>Le cas récursif :</strong> l'appel de la fonction sur un sous-problème plus simple.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'appel d'un autre programme est une simple procédure d'appel ou de composition logicielle, et non de la récursivité."
      },
      {
        "l": "C",
        "t": "Le fait qu'un programme puisse s'arrêter n'a aucun lien avec sa structure récursive ou itérative."
      },
      {
        "l": "D",
        "t": "La possibilité d'interrompre un programme relève de la gestion des processus par le système d'exploitation et non de la logique de l'algorithme."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de l'algorithmique et de la structure des fonctions récursives.",
    "summary": [
      "La récursivité est le processus par lequel une fonction s'appelle elle-même.",
      "Un algorithme récursif doit impérativement posséder une condition d'arrêt (cas de base).",
      "Sans condition d'arrêt, l'exécution récursive conduit à une erreur de type 'débordement de pile' (stack overflow).",
      "La récursivité est une alternative élégante aux structures itératives (boucles) pour résoudre des problèmes divisibles en sous-problèmes identiques."
    ]
  },
  {
    "num": "Q8",
    "partie": "Algorithmique",
    "q": "Qu'est-ce qui définit un programme récursif ?",
    "choices": {
      "A": "C'est un programme qui peut s'appeler lui-même.",
      "B": "C'est un programme qui peut appeler un autre programme.",
      "C": "C'est un programme qui peut appeler plusieurs programmes simultanément.",
      "D": "C'est un programme qui peut supprimer un autre programme."
    },
    "correct": "A",
    "explanation": "<p>La <strong>récursivité</strong> est un concept fondamental en informatique où une fonction ou une procédure s'appelle elle-même lors de son exécution.</p><p>Pour qu'un programme récursif soit valide et ne boucle pas indéfiniment (générant une erreur de type <em>Stack Overflow</em>), il doit impérativement comporter deux éléments :</p><ul><li><strong>Un cas de base :</strong> une condition d'arrêt qui permet de sortir de la récursion.</li><li><strong>Un cas récursif :</strong> l'appel à la fonction elle-même avec des paramètres modifiés se rapprochant du cas de base.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'appel d'un autre programme est une procédure standard d'appel de fonction ou de sous-programme, ce qui ne définit pas spécifiquement la récursivité."
      },
      {
        "l": "C",
        "t": "Appeler plusieurs programmes à la fois relève du parallélisme ou de la composition de fonctions, mais n'est pas la définition de la récursivité."
      },
      {
        "l": "D",
        "t": "La suppression d'un autre programme est une opération de gestion système ou de maintenance logicielle, sans lien avec la structure récursive d'un algorithme."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant comprend le concept théorique de l'auto-référence dans la conception d'algorithmes.",
    "summary": [
      "Un programme récursif est une fonction qui s'invoque elle-même.",
      "L'auto-référence est le cœur du mécanisme de récursivité.",
      "La récursivité nécessite une condition d'arrêt pour éviter les boucles infinies.",
      "Elle est couramment utilisée pour résoudre des problèmes divisibles en sous-problèmes identiques."
    ]
  }
];
