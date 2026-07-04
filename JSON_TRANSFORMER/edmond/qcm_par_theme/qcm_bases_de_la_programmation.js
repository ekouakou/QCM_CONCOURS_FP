const QCM = [
  {
    "num": "Q1",
    "partie": "Bases de la programmation",
    "q": "Quel type de fichier est principalement généré suite au processus de compilation d'un programme informatique ?",
    "choices": {
      "A": "Des fichiers exécutables (ex: .exe sous Windows)",
      "B": "Des fichiers images (ex: .jpg, .png, .bmp)",
      "C": "Des fichiers vidéo (ex: .avi, .mov)",
      "D": "Des fichiers de données brutes avec des extensions mal formées (ex: .exe.)"
    },
    "correct": "A",
    "explanation": "<p>La programmation, lorsqu'elle est associée à un langage compilé, aboutit à la création d'un <strong>fichier exécutable</strong>. Ce fichier contient le code machine directement interprétable par le processeur.</p><ul><li>Les fichiers <strong>images</strong> ou <strong>vidéos</strong> sont des fichiers de données multimédias, et non le résultat d'une compilation de code source.</li><li>L'option D présente une erreur de syntaxe sur l'extension (.exe.), ce qui ne correspond pas au format standard des exécutables Windows.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Les images sont des fichiers de données binaires représentant des pixels, produits par des logiciels graphiques et non par la compilation de code source."
      },
      {
        "l": "C",
        "t": "Les vidéos sont des conteneurs multimédias compressés, sans lien direct avec le processus de génération de programmes informatiques."
      },
      {
        "l": "D",
        "t": "Il s'agit d'une coquille sur l'extension. Le point doit précéder l'extension (.exe) et non la suivre."
      }
    ],
    "examiner": "Évaluer la compréhension de la finalité d'un langage de programmation et de la distinction entre les types de fichiers (exécutables vs données).",
    "summary": [
      "Un programme informatique compilé se traduit par un fichier exécutable.",
      "L'extension .exe est le standard pour les exécutables sous système d'exploitation Windows.",
      "La programmation permet de générer des instructions pour la machine, contrairement aux fichiers multimédias qui stockent du contenu.",
      "La rigueur dans la syntaxe des extensions de fichiers est essentielle en informatique."
    ]
  },
  {
    "num": "Q2",
    "partie": "Bases de la programmation",
    "q": "Quel est le nom du programme informatique chargé de traduire le code source écrit dans un langage de haut niveau vers le langage binaire (code machine) ?",
    "choices": {
      "A": "Le binarisateur",
      "B": "Le brumisateur",
      "C": "L'éditeur de texte",
      "D": "Le compilateur"
    },
    "correct": "D",
    "explanation": "<p>Le <strong>compilateur</strong> est un logiciel dont la fonction principale est de traduire le code source (écrit par le développeur dans un langage de haut niveau comme C, C++ ou Java) en un langage compréhensible par le processeur, appelé <strong>langage machine</strong> ou code binaire.</p><p>Ce processus suit généralement plusieurs étapes :</p><ul><li><strong>Analyse lexicale et syntaxique :</strong> Vérification de la structure du code.</li><li><strong>Génération de code :</strong> Traduction vers le langage cible.</li><li><strong>Optimisation :</strong> Amélioration de l'efficacité du code généré.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'binarisateur' n'existe pas dans la terminologie standard du développement logiciel ; il s'agit d'un terme inventé pour le piège."
      },
      {
        "l": "B",
        "t": "Le terme 'brumisateur' désigne un appareil permettant de vaporiser de l'eau, il n'a aucun rapport avec la programmation informatique."
      },
      {
        "l": "C",
        "t": "Un éditeur de texte est un outil utilisé pour écrire et modifier le code source, mais il n'assure pas sa conversion en langage binaire."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la chaîne de compilation et le rôle des outils essentiels dans le cycle de vie du développement logiciel.",
    "summary": [
      "Un compilateur transforme le code source en langage machine.",
      "Le langage de haut niveau est compréhensible par l'humain, le langage binaire par la machine.",
      "L'éditeur de texte sert à rédiger le code, tandis que le compilateur sert à l'exécuter.",
      "La compilation est une étape indispensable pour transformer un programme lisible en un fichier exécutable par l'ordinateur."
    ]
  },
  {
    "num": "Q3",
    "partie": "Bases de la programmation",
    "q": "Lequel de ces composants ne fait pas partie intégrante d'un environnement de développement intégré (IDE) ?",
    "choices": {
      "A": "Le compilateur",
      "B": "Le débogueur",
      "C": "Le freezer",
      "D": "L'éditeur de code source"
    },
    "correct": "C",
    "explanation": "<p>Un <strong>IDE</strong> (Environnement de Développement Intégré) est une suite logicielle conçue pour faciliter le développement d'applications. Il regroupe généralement les outils suivants :</p><ul><li><strong>Éditeur de texte</strong> : Pour écrire le code source.</li><li><strong>Compilateur/Interpréteur</strong> : Pour transformer le code en instructions exécutables.</li><li><strong>Débogueur (Debugger)</strong> : Pour identifier et corriger les erreurs logiques.</li></ul><p>Le terme <em>'freezer'</em> n'est pas un composant standard ou une terminologie reconnue dans l'écosystème du développement logiciel.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le compilateur est essentiel à un IDE pour traduire le code source dans un langage compréhensible par la machine."
      },
      {
        "l": "B",
        "t": "Le débogueur est un outil standard permettant d'exécuter le programme pas à pas pour inspecter l'état des variables."
      },
      {
        "l": "D",
        "t": "L'éditeur de texte (avec coloration syntaxique) est l'outil de base où le développeur saisit ses instructions."
      }
    ],
    "examiner": "Évaluer la connaissance des outils fondamentaux qui composent un environnement de développement standard.",
    "summary": [
      "Un IDE centralise les outils nécessaires au cycle de vie du développement.",
      "Les composants indispensables sont l'éditeur, le compilateur et le débogueur.",
      "Le terme 'freezer' est inexistant dans le contexte technique des outils de développement.",
      "Comprendre les outils de son environnement est crucial pour gagner en productivité."
    ]
  },
  {
    "num": "Q4",
    "partie": "Bases de la programmation",
    "q": "Dans le contexte de la programmation, comment peut-on définir un « projet » ?",
    "choices": {
      "A": "Un plan détaillant toutes les étapes de finalisation d'un programme.",
      "B": "Un plan structuré incluant l'ensemble des étapes nécessaires à la création et au développement d'un programme.",
      "C": "L'ensemble des fichiers sources constituant le code du programme.",
      "D": "Un fichier exécutable généré après l'étape de compilation."
    },
    "correct": "B",
    "explanation": "<p>En développement logiciel, un <strong>projet</strong> est une entité organisationnelle qui regroupe non seulement le code source, mais aussi l'ensemble des ressources, des configurations, des dépendances et du plan de structuration nécessaire pour concevoir une application cohérente.</p><ul><li>Il sert de cadre de gestion pour le cycle de vie du logiciel.</li><li>Il permet de structurer les fichiers sources (Option C) et de gérer les étapes de compilation vers un exécutable (Option D).</li><li>La réponse B est la plus complète car elle définit le projet comme une démarche organisée de création.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une définition trop restrictive qui se limite à la phase finale, alors qu'un projet couvre tout le cycle de vie."
      },
      {
        "l": "C",
        "t": "Les fichiers sources ne sont qu'une partie composante du projet, et non la définition globale de ce qu'est un projet en informatique."
      },
      {
        "l": "D",
        "t": "L'exécutable est le résultat final (le produit compilé) et non le projet lui-même, qui est l'outil de gestion du développement."
      }
    ],
    "examiner": "Évaluer la compréhension conceptuelle de l'organisation d'un environnement de développement logiciel au-delà de la simple écriture de code.",
    "summary": [
      "Un projet informatique est une structure organisée pour gérer la création d'un logiciel.",
      "Il englobe les fichiers sources, les ressources, les bibliothèques et les paramètres de build.",
      "Le projet dépasse la simple accumulation de code pour devenir un cadre de gestion.",
      "La compilation est une étape incluse au sein du projet, mais ne définit pas le projet lui-même."
    ]
  },
  {
    "num": "Q5",
    "partie": "Bases de la programmation",
    "q": "Qu'est-ce qu'un programme fonctionnant en mode « console » ?",
    "choices": {
      "A": "Un programme conçu spécifiquement pour les consoles de jeux vidéo.",
      "B": "Un programme s'exécutant dans une interface textuelle, similaire au style DOS.",
      "C": "Un programme doté d'une interface graphique complète avec fenêtres et boutons.",
      "D": "Un programme informatique générique sans spécificité d'interface."
    },
    "correct": "B",
    "explanation": "<p>Un programme en mode <strong>console</strong> (ou mode texte) est une application qui communique avec l'utilisateur via un terminal ou une invite de commande. Contrairement aux applications <strong>GUI</strong> (Graphical User Interface), il n'utilise pas de fenêtres, de menus déroulants ou de boutons.</p><ul><li>Ces programmes sont souvent utilisés pour des tâches système, des scripts d'automatisation ou des outils de développement.</li><li>Historiquement, le système <strong>DOS</strong> est l'exemple le plus représentatif de cet environnement textuel.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme « console » est ici utilisé de manière erronée pour désigner une console de jeu, ce qui constitue un piège sur le sens littéral du mot."
      },
      {
        "l": "C",
        "t": "Ceci définit une application de type GUI (Interface Graphique), qui est l'opposé direct du mode console."
      },
      {
        "l": "D",
        "t": "Cette réponse est trop vague et ne permet pas de caractériser le fonctionnement spécifique des entrées/sorties en mode texte."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la distinction fondamentale entre une interface textuelle (CLI) et une interface graphique (GUI) dans le développement logiciel.",
    "summary": [
      "Une application console communique exclusivement par le biais de texte.",
      "Elle s'exécute généralement au sein d'un terminal ou d'une invite de commande.",
      "Elle ne possède pas d'éléments graphiques comme des boutons ou des barres d'outils.",
      "Le style DOS est une référence classique à l'utilisation textuelle d'un ordinateur."
    ]
  },
  {
    "num": "Q6",
    "partie": "Bases de la programmation",
    "q": "Quel est le résultat de l'opération arithmétique 17 modulo 5 ?",
    "choices": {
      "A": "0",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correct": "B",
    "explanation": "<p>L'opérateur <strong>modulo (%)</strong> retourne le reste de la division entière d'un nombre par un autre.</p><ul><li>Pour calculer <strong>17 % 5</strong>, on cherche combien de fois 5 tient dans 17 : 5 × 3 = 15.</li><li>Le reste est donc calculé par la soustraction suivante : 17 - 15 = <strong>2</strong>.</li></ul><p>Le résultat de l'opération est donc 2.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "0 serait le résultat si 17 était un multiple exact de 5 (comme 15 ou 20)."
      },
      {
        "l": "C",
        "t": "3 correspond au quotient de la division entière (17 / 5 = 3), et non au reste."
      },
      {
        "l": "D",
        "t": "4 est un résultat erroné qui ne correspond pas au reste de la division euclidienne de 17 par 5."
      }
    ],
    "examiner": "Évaluer la compréhension de l'opérateur modulo dans les langages de programmation et la capacité à effectuer mentalement une division euclidienne.",
    "summary": [
      "L'opérateur modulo (%) calcule uniquement le reste d'une division.",
      "La division entière de 17 par 5 donne un quotient de 3.",
      "Le calcul du reste est 17 - (5 * 3) = 2.",
      "Le modulo est un outil fondamental pour gérer les cycles, les alternances et la parité."
    ]
  },
  {
    "num": "Q7",
    "partie": "Bases de la programmation",
    "q": "Quelle est la valeur finale de la variable 'nombre' après l'exécution séquentielle des opérations suivantes : int nombre = 4; nombre--; nombre *= 4; nombre %= 12; nombre += 1;",
    "choices": {
      "A": "1",
      "B": "4",
      "C": "12",
      "D": "14"
    },
    "correct": "A",
    "explanation": "<p>Pour déterminer la valeur finale de <strong>nombre</strong>, suivons les étapes pas à pas :</p><ul><li>Initialisation : <code>nombre = 4</code></li><li>Ligne 3 (<code>nombre--</code>) : Décrémentation de 1, donc 4 - 1 = <strong>3</strong></li><li>Ligne 4 (<code>nombre *= 4</code>) : Multiplication par 4, donc 3 * 4 = <strong>12</strong></li><li>Ligne 5 (<code>nombre %= 12</code>) : Calcul du reste de la division entière (modulo), donc 12 % 12 = <strong>0</strong></li><li>Ligne 6 (<code>nombre += 1</code>) : Addition de 1, donc 0 + 1 = <strong>1</strong></li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le résultat 4 est souvent obtenu en oubliant l'opération de modulo ou en se trompant sur l'ordre de priorité des opérations."
      },
      {
        "l": "C",
        "t": "Le résultat 12 correspond à la valeur atteinte après la ligne 4, en omettant les deux dernières opérations (modulo et addition)."
      },
      {
        "l": "D",
        "t": "Le résultat 14 est erroné et ne correspond à aucune étape logique du calcul."
      }
    ],
    "examiner": "Évaluer la compréhension de la manipulation des opérateurs arithmétiques et d'affectation composée en programmation.",
    "summary": [
      "La décrémentation '--' réduit la valeur de 1.",
      "L'opérateur '*=' multiplie la variable par la valeur donnée.",
      "L'opérateur modulo '%' calcule le reste de la division entière.",
      "Il est crucial de suivre l'ordre séquentiel des instructions ligne par ligne pour obtenir le résultat exact."
    ]
  },
  {
    "num": "Q8",
    "partie": "Bases de la programmation",
    "q": "Pourquoi l'appel à la fonction SDL_Delay(20) ne garantit-il pas une pause d'exactement 20 millisecondes dans l'exécution d'un programme ?",
    "choices": {
      "A": "Parce que SDL_Delay est une fonction défectueuse au sein de la bibliothèque SDL.",
      "B": "Parce que l'ordonnanceur du système d'exploitation partage le temps processeur entre plusieurs processus, rendant le réveil exact aléatoire.",
      "C": "Parce que le système d'exploitation accorde une priorité insuffisante aux applications utilisant la bibliothèque SDL.",
      "D": "Parce que le système d'exploitation accorde une priorité excessive aux applications utilisant la bibliothèque SDL."
    },
    "correct": "B",
    "explanation": "<p>La fonction <strong>SDL_Delay</strong> demande au système d'exploitation de suspendre le thread actuel pendant au moins le nombre de millisecondes spécifié. Cependant, cette durée est une <strong>durée minimale</strong>, et non une garantie précise.</p><p>Dans un système d'exploitation multitâche, le processeur exécute de nombreux processus simultanément. Lorsque le délai expire, le processus doit attendre que l'ordonnanceur (scheduler) lui rende la main, ce qui dépend de la charge globale du système.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "SDL_Delay n'est pas une fonction buggée ; son comportement est conforme à la manière dont les systèmes d'exploitation gèrent la suspension des threads."
      },
      {
        "l": "C",
        "t": "La bibliothèque SDL n'influence pas la priorité accordée par le système d'exploitation à l'application."
      },
      {
        "l": "D",
        "t": "De même, la priorité d'une application n'est pas déterminée par l'utilisation de la bibliothèque SDL."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur le fonctionnement des systèmes multitâches, de l'ordonnancement des threads et des limitations temporelles des fonctions de mise en sommeil (sleep).",
    "summary": [
      "SDL_Delay demande une suspension de durée minimale au système d'exploitation.",
      "Les systèmes d'exploitation modernes sont multitâches et partagent le temps processeur.",
      "L'ordonnanceur peut différer le réveil d'un thread en fonction de la charge système.",
      "Il ne faut jamais compter sur une précision absolue pour la synchronisation temporelle via des fonctions de type 'sleep'."
    ]
  },
  {
    "num": "Q9",
    "partie": "Bases de la programmation",
    "q": "Dans le contexte de la programmation asynchrone utilisant des fonctions de rappel (callback), que doit renvoyer la fonction de rappel pour définir l'intervalle de rappel ?",
    "choices": {
      "A": "L'intervalle de temps au bout duquel la fonction doit être rappelée.",
      "B": "Elle ne doit rien renvoyer.",
      "C": "Un booléen indiquant s'il y a eu une erreur ou non.",
      "D": "Elle doit renvoyer une infinité de réponses."
    },
    "correct": "A",
    "explanation": "<p>Dans certains systèmes de programmation événementielle (comme certains frameworks de gestion de temporisateurs), la fonction de rappel peut être conçue pour <strong>retourner une valeur dynamique</strong> servant à calculer le délai avant la prochaine exécution.</p><ul><li>Lorsque la fonction retourne une valeur numérique, elle réinitialise le compteur de temps du prochain déclenchement.</li><li>Si elle retourne 0 ou null, le cycle peut être arrêté selon l'implémentation spécifique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Si la fonction ne renvoie rien (undefined), le comportement par défaut est souvent l'arrêt du cycle de rappel, ce qui n'est pas le cas ici."
      },
      {
        "l": "C",
        "t": "Un booléen est utile pour la gestion d'erreurs, mais il ne permet pas de définir dynamiquement le temps d'attente pour le rappel suivant."
      },
      {
        "l": "D",
        "t": "Le concept de 'renvoyer une infinité de réponses' est techniquement impossible pour une fonction qui doit retourner une valeur scalaire à son appelant."
      }
    ],
    "examiner": "Évaluer la compréhension du développeur sur le contrôle dynamique des boucles d'événements et des temporisateurs via les fonctions de callback.",
    "summary": [
      "Une fonction de rappel peut être utilisée pour influencer le cycle de rappel suivant.",
      "Retourner une valeur temporelle permet de définir dynamiquement l'intervalle d'exécution.",
      "Le type de retour attendu est généralement une valeur numérique représentant une durée en millisecondes.",
      "La logique de temporisation repose sur le contrôle précis du flux d'exécution."
    ]
  },
  {
    "num": "Q10",
    "partie": "Bases de la programmation",
    "q": "Comment affecter à la variable 'toujoursEnVie' une valeur booléenne indiquant si le joueur possède encore des vies (c'est-à-dire si 'nombreVies' est strictement supérieur à zéro) ?",
    "choices": {
      "A": "toujoursEnVie = nombreVies > 1;",
      "B": "toujoursEnVie = nombreVies != 1;",
      "C": "toujoursEnVie = nombreVies > 0;",
      "D": "toujoursEnVie = nombreVies >= 0;"
    },
    "correct": "C",
    "explanation": "<p>Pour déterminer si un joueur est toujours en vie, il faut vérifier que le compteur de vies est <strong>strictement supérieur à zéro</strong>.</p><ul><li>Si <code>nombreVies</code> vaut 1, 2, 3..., l'expression <code>nombreVies > 0</code> renvoie <code>true</code>.</li><li>Si <code>nombreVies</code> vaut 0, l'expression renvoie <code>false</code>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette condition est fausse car elle exclut le cas où le joueur possède exactement 1 vie, ce qui signifie qu'il est encore en vie."
      },
      {
        "l": "B",
        "t": "L'opérateur 'différent de 1' ne permet pas de gérer correctement tous les cas (par exemple, si le nombre de vies est 2, il renverrait vrai, mais il renverrait également vrai pour une valeur négative)."
      },
      {
        "l": "D",
        "t": "Cette condition est incorrecte car elle considère qu'un joueur avec 0 vie est toujours en vie (0 >= 0 est vrai)."
      }
    ],
    "examiner": "Évalue la capacité du candidat à choisir l'opérateur de comparaison approprié pour traduire une condition logique métier en expression booléenne.",
    "summary": [
      "Une variable booléenne résulte de l'évaluation d'une condition logique.",
      "L'expression 'supérieur à zéro' (> 0) est la méthode standard pour vérifier la présence d'une quantité positive.",
      "Il faut être vigilant avec les opérateurs de comparaison ('>' vs '>=') pour éviter les erreurs sur les limites, comme la valeur zéro.",
      "Le test 'nombreVies > 0' couvre précisément tous les états où le joueur dispose d'au moins une unité."
    ]
  },
  {
    "num": "Q11",
    "partie": "Bases de la programmation",
    "q": "Quel sera le résultat de l'exécution du code suivant en langage C ?",
    "choices": {
      "A": "Vous pouvez ouvrir un compte en banque !",
      "B": "Sortez d'ici ou j'appelle la securite",
      "C": "Vous pouvez ouvrir un compte en banque et j’appelle la sécurité !",
      "D": "Vous ne pouvez pas ouvrir un compte en sécurité"
    },
    "correct": "B",
    "explanation": "<p>Pour déterminer le résultat, analysons les conditions booléennes :</p><ul><li><strong>pleinDeFric</strong> : L'expression <code>argentEnPoche > 10000</code> compare 10000 à 10000. Comme 10000 n'est pas strictement supérieur à 10000, le résultat est <strong>0 (faux)</strong>.</li><li><strong>majeur</strong> : L'expression <code>!(age < 18)</code> avec <code>age = 19</code> devient <code>!(19 < 18)</code>, soit <code>!false</code>, ce qui donne <strong>1 (vrai)</strong>.</li><li><strong>Condition finale</strong> : <code>pleinDeFric && majeur</code> équivaut à <code>0 && 1</code>, ce qui donne <strong>0 (faux)</strong>.</li></ul><p>Puisque la condition globale est fausse, c'est le bloc <code>else</code> qui est exécuté.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ce choix est incorrect car il suppose que la condition 'argentEnPoche > 10000' est vraie, alors qu'elle est fausse (10000 n'est pas strictement supérieur à 10000)."
      },
      {
        "l": "C",
        "t": "Ce choix est une distraction textuelle qui ne correspond à aucun des messages définis dans les instructions printf du code source."
      },
      {
        "l": "D",
        "t": "Ce choix ne correspond à aucun message défini dans le code source."
      }
    ],
    "examiner": "L'examinateur cherche à évaluer la compréhension des opérateurs de comparaison (strictement supérieur), des opérateurs logiques (AND, NOT) et de la structure de contrôle conditionnelle if-else.",
    "summary": [
      "L'opérateur '>' est une comparaison stricte : 10000 n'est pas supérieur à 10000.",
      "L'opérateur '!' inverse la valeur booléenne d'une expression.",
      "L'opérateur '&&' (ET logique) renvoie vrai uniquement si les deux opérandes sont vrais.",
      "En C, une valeur de 0 est traitée comme faux, tandis que toute valeur différente de 0 est traitée comme vrai."
    ]
  },
  {
    "num": "Q12",
    "partie": "Bases de la programmation",
    "q": "Quelle est l'anomalie principale dans la structure de ce bloc switch en langage C ?",
    "choices": {
      "A": "Il manque des instructions 'break' après chaque bloc de cas.",
      "B": "Il manque un point-virgule à la fin de la déclaration du 'switch'.",
      "C": "La syntaxe correcte devrait être 'case default' au lieu de 'default'.",
      "D": "Il est obligatoire d'ouvrir des accolades pour chaque 'case' individuel."
    },
    "correct": "A",
    "explanation": "<p>En langage C, le <strong>switch</strong> est une structure de contrôle qui saute à l'étiquette (case) correspondante. Cependant, une fois qu'un cas est exécuté, le programme continue d'exécuter les instructions suivantes <em>même si elles appartiennent aux cas ultérieurs</em>.</p><p>Ce phénomène est appelé <strong>fall-through</strong>. Pour empêcher ce comportement et isoler les blocs d'exécution, il est indispensable d'ajouter l'instruction <code>break;</code> à la fin de chaque bloc de cas.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une structure de contrôle comme 'switch' ne se termine jamais par un point-virgule en C."
      },
      {
        "l": "C",
        "t": "L'étiquette 'default' est la syntaxe correcte pour définir le cas par défaut ; 'case default' provoquerait une erreur de compilation."
      },
      {
        "l": "D",
        "t": "L'utilisation d'accolades pour chaque 'case' est optionnelle en C, le switch lui-même possédant déjà des accolades globales."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension du mécanisme de 'fall-through' dans les structures de contrôle switch-case en C et la maîtrise de l'instruction 'break'.",
    "summary": [
      "Le switch en C exécute tous les blocs suivants le cas trouvé par défaut.",
      "L'instruction 'break' est nécessaire pour sortir immédiatement du bloc switch.",
      "L'absence de 'break' entraîne l'exécution non désirée des cases inférieurs (fall-through).",
      "Le mot-clé 'default' est utilisé seul pour gérer les cas non répertoriés."
    ]
  },
  {
    "num": "Q13",
    "partie": "Bases de la programmation",
    "q": "Quelle est la définition fondamentale d'une variable en programmation ?",
    "choices": {
      "A": "Un espace de stockage nommé en mémoire vive permettant de conserver une valeur.",
      "B": "Une constante dont la valeur ne peut pas être modifiée après son initialisation.",
      "C": "Une fonction mathématique permettant de calculer des résultats dynamiques.",
      "D": "Un outil de contrôle de version utilisé pour suivre les modifications de code."
    },
    "correct": "A",
    "explanation": "<p>En programmation, une <strong>variable</strong> est un emplacement réservé dans la mémoire de l'ordinateur. Elle est caractérisée par :</p><ul><li>Un <strong>nom</strong> (identifiant) : pour y accéder.</li><li>Un <strong>type</strong> : pour définir la nature des données stockées.</li><li>Une <strong>valeur</strong> : l'information contenue à un instant T, qui peut être modifiée durant l'exécution.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une constante possède une valeur fixe qui ne peut pas être modifiée, ce qui est l'opposé d'une variable."
      },
      {
        "l": "C",
        "t": "Les fonctions sont des blocs de code réutilisables permettant d'exécuter des instructions, et non des espaces de stockage."
      },
      {
        "l": "D",
        "t": "Les outils de contrôle de version (comme Git) sont des logiciels externes au langage de programmation lui-même."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la gestion de la mémoire et de la structure des données en informatique.",
    "summary": [
      "Une variable est un conteneur nommé pour une valeur.",
      "Elle est stockée dans la mémoire vive (RAM).",
      "La valeur d'une variable peut changer au cours du programme.",
      "Elle est essentielle pour manipuler des données dynamiquement."
    ]
  }
];
