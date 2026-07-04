const QCM = [
  {
    "num": "Q1",
    "partie": "Développement Informatique",
    "q": "Dans la phase de conception d’une base de données, au niveau conceptuel, on ne doit pas ?",
    "choices": {
      "A": "Dégager les objets et leur identifiant",
      "B": "Dégager les relations et leur identifiant",
      "C": "Déterminer les cardinalité des relations",
      "D": "Attacher les propriétés aux relations et aux objets"
    },
    "correct": "D",
    "explanation": "<p>Au niveau conceptuel (généralement via le Modèle Conceptuel de Données - MCD), l'objectif est de modéliser les entités et les relations entre elles.</p><ul><li><strong>Entités (Objets) :</strong> Ils possèdent des propriétés (attributs).</li><li><strong>Relations :</strong> Elles décrivent des liens entre les entités.</li><li><strong>Règle d'or :</strong> Les propriétés doivent être rattachées aux entités. <strong>Il est formellement déconseillé d'attacher des propriétés directement aux relations</strong> au niveau conceptuel, sauf cas particuliers, afin de maintenir une structure propre et normalisée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une étape fondamentale du niveau conceptuel : définir les entités et leurs identifiants uniques est obligatoire."
      },
      {
        "l": "B",
        "t": "Identifier les relations entre les objets est le cœur même du modèle conceptuel de données."
      },
      {
        "l": "C",
        "t": "Les cardinalités définissent les règles de gestion du système et sont indispensables pour comprendre les interactions entre objets."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat maîtrise les règles de modélisation du Modèle Conceptuel de Données (MCD) et la distinction entre attributs d'entités et attributs de relations.",
    "summary": [
      "Le niveau conceptuel se concentre sur les entités, les relations et les cardinalités.",
      "Les propriétés (attributs) doivent prioritairement être portées par les entités.",
      "Attacher des propriétés aux relations est une erreur méthodologique au stade conceptuel pur.",
      "Une bonne modélisation garantit la pérennité et la cohérence de la base de données."
    ]
  },
  {
    "num": "Q2",
    "partie": "Développement Informatique",
    "q": "En UML, quel est le diagramme qui sert à présenter les instances de classes utilisées dans le système ?",
    "choices": {
      "A": "Diagramme de séquences",
      "B": "Diagramme d’objet",
      "C": "Diagramme de classe",
      "D": "Diagramme de composants"
    },
    "correct": "B",
    "explanation": "<p>En UML, le <strong>Diagramme d'objet</strong> est spécifiquement conçu pour représenter une vue instantanée du système à un moment donné. Il montre des instances concrètes de classes (objets) ainsi que leurs relations effectives et leurs valeurs d'attributs.</p><ul><li>Contrairement au diagramme de classe, il ne montre pas les types, mais des instances réelles.</li><li>Il aide à comprendre des configurations complexes ou à tester la validité d'un diagramme de classe.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le diagramme de séquences est un diagramme comportemental qui illustre les interactions entre objets au cours du temps, et non la structure des instances."
      },
      {
        "l": "C",
        "t": "Le diagramme de classe est un diagramme structurel qui définit les modèles (les classes) et leurs relations, mais pas les instances concrètes."
      },
      {
        "l": "D",
        "t": "Le diagramme de composants décrit l'organisation et les dépendances entre les composants logiciels, pas les instances de données."
      }
    ],
    "examiner": "Évaluer la capacité du candidat à distinguer les diagrammes structurels (statiques) entre ceux qui modélisent les types (classes) et ceux qui modélisent les instances (objets).",
    "summary": [
      "Le diagramme de classe modélise la structure logique (les types).",
      "Le diagramme d'objet modélise les instances concrètes (les données à un instant T).",
      "Le diagramme d'objet est une 'instanciation' du diagramme de classe.",
      "Il permet de visualiser un exemple précis ou un état spécifique du système."
    ]
  },
  {
    "num": "Q3",
    "partie": "Développement Informatique",
    "q": "En Java, une variable locale est déclarée dans :",
    "choices": {
      "A": "Un tableau",
      "B": "Une méthode",
      "C": "Non défini",
      "D": "Un objet"
    },
    "correct": "B",
    "explanation": "<p>En Java, une <strong>variable locale</strong> est une variable définie à l'intérieur d'un bloc de code, typiquement une <strong>méthode</strong>, un constructeur ou un bloc d'initialisation.</p><ul><li>Elle n'est accessible que dans le bloc où elle est définie.</li><li>Elle n'est pas initialisée par défaut par le compilateur (contrairement aux variables d'instance).</li><li>Elle disparaît de la mémoire dès que l'exécution sort de ce bloc.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un tableau est une structure de données permettant de stocker plusieurs valeurs, pas un conteneur pour déclarer des variables locales."
      },
      {
        "l": "D",
        "t": "Une variable déclarée directement dans un objet est appelée variable d'instance (ou champ), et non variable locale."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension des portées (scope) des variables en Java et la distinction entre variables locales et variables de classe/instance.",
    "summary": [
      "Une variable locale est déclarée à l'intérieur d'une méthode, d'un constructeur ou d'un bloc.",
      "La portée d'une variable locale est limitée strictement au bloc où elle est déclarée.",
      "Contrairement aux variables d'instance, les variables locales ne possèdent pas de valeur par défaut.",
      "Elles sont allouées sur la pile (stack) d'exécution de la méthode."
    ]
  },
  {
    "num": "Q4",
    "partie": "Développement Informatique",
    "q": "En Java, une classe qui implémente une interface doit :",
    "choices": {
      "A": "Implémenter le constructeur de l’interface",
      "B": "Être statique au finale",
      "C": "Implémenter les méthodes utiles de l’interface",
      "D": "Implémenter toutes les méthodes définies dans cette interface"
    },
    "correct": "D",
    "explanation": "<p>En Java, le mot-clé <strong>implements</strong> impose un contrat strict entre la classe et l'interface.</p><ul><li>Une classe normale (non abstraite) qui implémente une interface <strong>doit obligatoirement fournir une implémentation pour toutes les méthodes</strong> déclarées dans cette interface (sauf si les méthodes sont déclarées <code>default</code> ou <code>static</code>).</li><li>Si la classe ne fournit pas d'implémentation pour l'une des méthodes, elle doit obligatoirement être déclarée comme <code>abstract</code>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les interfaces Java ne possèdent pas de constructeurs, car elles ne peuvent pas être instanciées directement."
      },
      {
        "l": "B",
        "t": "Il n'existe aucune contrainte imposant à une classe implémentant une interface d'être statique ou finale."
      },
      {
        "l": "C",
        "t": "Le compilateur n'autorise pas le choix des méthodes : toutes les méthodes de l'interface doivent être traitées, pas seulement celles jugées 'utiles'."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la programmation orientée objet en Java, spécifiquement le respect du contrat d'interface.",
    "summary": [
      "Une interface définit un contrat que les classes implémentantes doivent respecter.",
      "Une classe concrète doit implémenter la totalité des méthodes abstraites d'une interface.",
      "Si une classe n'implémente pas toutes les méthodes, elle doit être marquée comme abstraite.",
      "Les interfaces ne comportent pas de constructeurs."
    ]
  },
  {
    "num": "Q5",
    "partie": "Développement Informatique",
    "q": "En programmation orientée objet, lorsqu'un objet peut appartenir à plusieurs types et donc être utilisé là où est attendue une valeur d'un type plus général, on parle de :",
    "choices": {
      "A": "Héritage",
      "B": "Interface",
      "C": "Ancêtre",
      "D": "Polymorphisme"
    },
    "correct": "D",
    "explanation": "<p>Le <strong>polymorphisme</strong> est la capacité d'une entité (objet, méthode ou variable) à prendre plusieurs formes. Dans ce contexte précis, on parle de <em>polymorphisme de sous-typage</em> (ou polymorphisme d'inclusion) : une instance d'une classe fille peut être traitée comme une instance de sa classe mère ou d'une interface qu'elle implémente.</p><ul><li>Cela permet d'écrire des méthodes capables de manipuler des objets de types variés tant qu'ils partagent une hiérarchie commune.</li><li>C'est un pilier fondamental de la POO permettant le couplage faible et l'extensibilité du code.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'héritage est le mécanisme qui permet à une classe d'acquérir les propriétés d'une autre, mais il est le moyen de réaliser le polymorphisme, pas le nom du concept de substitution lui-même."
      },
      {
        "l": "B",
        "t": "Une interface est un contrat ou un type abstrait, mais elle n'est pas le nom du concept de comportement interchangeable des objets."
      },
      {
        "l": "C",
        "t": "Le terme 'Ancêtre' désigne une classe située plus haut dans la hiérarchie d'héritage, ce n'est pas un concept de comportement dynamique."
      }
    ],
    "examiner": "Vérifie si l'étudiant distingue les outils de la POO (héritage, interface) du concept de comportement dynamique (polymorphisme) résultant de ces outils.",
    "summary": [
      "Le polymorphisme permet d'utiliser un objet comme s'il était d'un type plus général.",
      "Il repose sur la relation 'est-un' issue de l'héritage ou des interfaces.",
      "C'est un mécanisme clé pour favoriser le découplage et la flexibilité dans le code.",
      "L'héritage est le support technique, alors que le polymorphisme est la propriété dynamique obtenue."
    ]
  },
  {
    "num": "Q6",
    "partie": "Développement Informatique",
    "q": "Prolog est un langage de programmation :",
    "choices": {
      "A": "Un langage orienté objet",
      "B": "Un langage procédural",
      "C": "Un langage de programmation logique",
      "D": "Une balise http"
    },
    "correct": "C",
    "explanation": "<p><strong>Prolog</strong> (Programmation en Logique) est un langage de programmation symbolique basé sur la <strong>logique du premier ordre</strong>.</p><p>Contrairement aux langages impératifs où l'on dicte les étapes à suivre, Prolog repose sur :</p><ul><li>La déclaration de <strong>faits</strong>.</li><li>La définition de <strong>règles</strong>.</li><li>La formulation de <strong>requêtes</strong>.</li></ul><p>Le moteur d'inférence de Prolog utilise alors l'unification et le retour arrière (backtracking) pour trouver des solutions aux problèmes posés.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Prolog ne gère pas les concepts de classes, d'héritage ou d'encapsulation propres à la programmation orientée objet."
      },
      {
        "l": "B",
        "t": "Prolog n'est pas procédural car il ne se base pas sur l'exécution séquentielle d'instructions ou d'algorithmes pas à pas."
      },
      {
        "l": "D",
        "t": "Prolog est un langage complet et non une simple balise de protocole réseau comme HTTP."
      }
    ],
    "examiner": "Évaluer la connaissance des paradigmes de programmation et la capacité à identifier la nature spécifique du langage Prolog.",
    "summary": [
      "Prolog est un langage de programmation logique basé sur la logique formelle.",
      "Il fonctionne par la déclaration de faits et de règles plutôt que par des séquences d'instructions.",
      "Le moteur d'inférence effectue une recherche automatique de solutions via l'unification.",
      "Il est particulièrement utilisé dans les domaines de l'intelligence artificielle et du traitement du langage naturel."
    ]
  },
  {
    "num": "Q7",
    "partie": "Développement Informatique",
    "q": "Le HTML est un langage dit :",
    "choices": {
      "A": "Encodé",
      "B": "Crypté",
      "C": "Balisé",
      "D": "Mixé"
    },
    "correct": "C",
    "explanation": "<p>HTML signifie <strong>HyperText Markup Language</strong>, ce qui se traduit littéralement par <strong>Langage de balisage d'hypertexte</strong>.</p><p>Le concept fondamental du HTML est l'utilisation de <strong>balises</strong> (tags), encadrées par les signes inférieur et supérieur (ex: &lt;p&gt;, &lt;div&gt;), pour définir la structure et la sémantique du contenu d'une page web.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'encodé' fait généralement référence à la transformation de données (comme l'UTF-8 pour les caractères) et non à la nature syntaxique du langage."
      },
      {
        "l": "B",
        "t": "Le HTML est un langage lisible par l'homme et par les navigateurs; il n'est pas crypté, car son but est d'être interprété par le client pour afficher le contenu."
      },
      {
        "l": "D",
        "t": "Le terme 'mixé' ne correspond à aucune classification technique reconnue dans le domaine des langages de programmation ou de description."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension fondamentale de la terminologie informatique liée au développement web et la capacité à identifier la nature structurelle du HTML.",
    "summary": [
      "HTML est l'acronyme de HyperText Markup Language.",
      "Le terme 'Markup' signifie 'balisage' en français.",
      "Il utilise des balises pour structurer les éléments d'une page.",
      "C'est un langage de description de document, non un langage de programmation algorithmique.",
      "La syntaxe repose entièrement sur des couples de balises ouvrantes et fermantes."
    ]
  },
  {
    "num": "Q8",
    "partie": "Développement Informatique",
    "q": "Quel est le terme technique désignant le programme chargé de traduire le code source d'un langage de programmation de haut niveau vers le langage binaire (machine) ?",
    "choices": {
      "A": "Le binarisateur",
      "B": "Le brumisateur",
      "C": "L'éditeur de texte",
      "D": "Le compilateur"
    },
    "correct": "D",
    "explanation": "<p>Le <strong>compilateur</strong> est un logiciel dont la fonction principale est de traduire un code source écrit dans un langage de haut niveau (comme le C++, le Java ou le Rust) en un langage machine (binaire), directement compréhensible par le processeur.</p><ul><li>Il effectue une analyse syntaxique et sémantique avant de générer le code exécutable.</li><li>Contrairement à l'interpréteur qui exécute le code ligne par ligne, le compilateur transforme l'intégralité du programme en un fichier exécutable distinct.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'binarisateur' n'existe pas en informatique ; c'est un distracteur forgé pour ressembler au mot 'binaire'."
      },
      {
        "l": "B",
        "t": "Le 'brumisateur' est un appareil électroménager ou un dispositif physique servant à projeter de l'eau, il n'a aucun lien avec la programmation."
      },
      {
        "l": "C",
        "t": "L'éditeur de texte (comme VS Code, Notepad++ ou Vim) est l'outil utilisé pour écrire le code, mais il ne réalise pas la traduction en langage binaire."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension fondamentale du cycle de vie d'un logiciel et des outils indispensables à la transformation du code source en programme exécutable.",
    "summary": [
      "Un compilateur traduit un langage de haut niveau en langage binaire (machine).",
      "L'éditeur de texte sert uniquement à la rédaction du code source.",
      "La compilation transforme le code source en un fichier exécutable indépendant.",
      "La distinction entre les outils de développement et les outils de transformation est cruciale."
    ]
  },
  {
    "num": "Q9",
    "partie": "Développement Informatique",
    "q": "Parmi les éléments suivants, lequel ne constitue pas un composant standard d'un environnement de développement intégré (IDE) ?",
    "choices": {
      "A": "Le compilateur",
      "B": "Le débuggeur",
      "C": "Le freezer",
      "D": "L'éditeur de texte"
    },
    "correct": "C",
    "explanation": "<p>Un <strong>IDE (Integrated Development Environment)</strong> est conçu pour centraliser les outils nécessaires au cycle de vie du développement logiciel.</p><ul><li><strong>L'éditeur de texte</strong> : Permet d'écrire et de modifier le code source.</li><li><strong>Le compilateur (ou interpréteur)</strong> : Transforme le code source en instructions exécutables par la machine.</li><li><strong>Le débuggeur</strong> : Aide à identifier et corriger les erreurs (bugs) dans le programme.</li></ul><p>Le terme <strong>'freezer'</strong> n'existe pas dans le contexte du développement logiciel standard; il s'agit d'un intrus inventé pour cette question.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le compilateur est un outil essentiel de tout IDE pour transformer le code écrit par le développeur en un programme exécutable."
      },
      {
        "l": "B",
        "t": "Le débuggeur est un outil standard intégré permettant de suivre l'exécution du programme pas à pas pour localiser les erreurs."
      },
      {
        "l": "D",
        "t": "L'éditeur de code est la brique de base de tout IDE, permettant la saisie et la coloration syntaxique du code source."
      }
    ],
    "examiner": "Cette question évalue la compréhension des composants fondamentaux qui constituent un IDE et la capacité à distinguer des outils réels de termes inventés.",
    "summary": [
      "Un IDE est une suite logicielle regroupant plusieurs outils de développement.",
      "Les trois piliers d'un IDE sont l'éditeur, le compilateur et le débuggeur.",
      "Le terme 'freezer' est inexistant dans l'architecture fonctionnelle d'un environnement de développement.",
      "La maîtrise de l'environnement de travail est indispensable pour optimiser la productivité du développeur."
    ]
  },
  {
    "num": "Q10",
    "partie": "Développement Informatique",
    "q": "Dans le contexte du développement logiciel, comment définir précisément un 'projet' ?",
    "choices": {
      "A": "Un plan détaillant uniquement les étapes de finalisation d'un programme.",
      "B": "Un plan structuré incluant toutes les étapes de conception, de développement et de création d'un programme.",
      "C": "L'ensemble brut des fichiers source composant le programme.",
      "D": "Le fichier exécutable obtenu après la phase de compilation."
    },
    "correct": "B",
    "explanation": "<p>Dans le domaine du génie logiciel, un <strong>projet</strong> est une entité structurée qui regroupe l'ensemble des activités nécessaires pour passer d'un besoin exprimé à une solution logicielle opérationnelle.</p><ul><li>Il ne se limite pas aux fichiers sources (code).</li><li>Il inclut le cycle de vie complet (conception, développement, tests, déploiement).</li><li>Le résultat final est le logiciel, mais le projet est le processus de création lui-même.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette définition est trop restrictive car elle se concentre uniquement sur la phase finale, négligeant la conception et le développement initial."
      },
      {
        "l": "C",
        "t": "Les fichiers sources constituent le code source, mais ils ne représentent pas la dimension organisationnelle et méthodologique d'un projet."
      },
      {
        "l": "D",
        "t": "L'exécutable est le résultat ou le livrable d'un projet, et non la définition du projet lui-même."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur la distinction entre le processus de développement (projet) et ses composants ou livrables techniques.",
    "summary": [
      "Un projet est une démarche structurée visant à créer un logiciel.",
      "Il englobe tout le cycle de vie du développement, et non juste le code.",
      "Les fichiers sources sont des composants techniques, pas le projet en lui-même.",
      "L'exécutable est le produit final, la finalité du projet."
    ]
  },
  {
    "num": "Q11",
    "partie": "Développement Informatique",
    "q": "Qu'est-ce qu'un programme en mode « console » ?",
    "choices": {
      "A": "Un programme conçu pour les consoles de jeux vidéo comme la PlayStation.",
      "B": "Un programme s'exécutant dans une interface textuelle, similaire à l'invite de commande de type DOS.",
      "C": "Un programme doté d'une interface graphique complète avec des fenêtres, des menus et des boutons.",
      "D": "Un programme informatique générique sans spécificité d'interface."
    },
    "correct": "B",
    "explanation": "<p>Un programme en mode <strong>console</strong> (ou mode texte) est une application qui communique avec l'utilisateur via un flux de texte standard dans une fenêtre de terminal ou d'invite de commande.</p><ul><li>Contrairement aux interfaces graphiques (GUI), il ne repose pas sur des composants visuels comme des fenêtres, des icônes ou des boutons.</li><li>Il est historiquement lié aux systèmes d'exploitation en ligne de commande comme le <strong>DOS</strong> ou les terminaux Unix/Linux.</li><li>Ce mode est souvent utilisé pour des outils de développement, des scripts système ou des utilitaires légers.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une confusion terminologique. Bien que les consoles de jeux soient des dispositifs, un 'programme en mode console' en informatique désigne une interface textuelle."
      },
      {
        "l": "C",
        "t": "Ceci décrit une application GUI (Graphical User Interface) et non une application en mode console."
      },
      {
        "l": "D",
        "t": "Cette réponse est trop vague et ne définit pas les caractéristiques techniques du mode console."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension des concepts fondamentaux d'interface utilisateur et de typologie d'applications logicielles.",
    "summary": [
      "Un programme en mode console privilégie les interactions textuelles via un terminal.",
      "Il ne nécessite pas de bibliothèque graphique complexe (GUI) pour fonctionner.",
      "Il est hérité des environnements système où la ligne de commande était la norme (ex: DOS, Bash).",
      "Ces programmes sont privilégiés pour l'automatisation de tâches et le développement d'outils système."
    ]
  },
  {
    "num": "Q12",
    "partie": "Développement Informatique",
    "q": "Veuillez fournir une question valide à analyser, car l'extrait fourni ne contenait que l'en-tête du questionnaire.",
    "choices": {
      "A": "Veuillez soumettre le contenu de la question.",
      "B": "Aucune donnée n'est disponible pour analyse.",
      "C": "Veuillez copier-coller le texte du QCM.",
      "D": "En attente de saisie utilisateur."
    },
    "correct": "A",
    "explanation": "<p>Pour que je puisse traiter une question, celle-ci doit être présente dans le texte source. L'extrait fourni contenait uniquement le titre du document sans aucune interrogation spécifique.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le système ne peut pas analyser un vide informationnel."
      },
      {
        "l": "C",
        "t": "C'est l'action requise pour permettre le traitement."
      },
      {
        "l": "D",
        "t": "Il s'agit de l'état actuel du processus d'analyse."
      }
    ],
    "examiner": "Vérification de la présence de données exploitables.",
    "summary": [
      "Une question est nécessaire pour générer un JSON complet.",
      "L'extrait fourni était incomplet.",
      "Veuillez soumettre le texte du QCM souhaité."
    ]
  },
  {
    "num": "Q13",
    "partie": "Développement Informatique",
    "q": "Quel est le résultat de l'opération modulo '17 % 5' ?",
    "choices": {
      "A": "0",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correct": "B",
    "explanation": "<p>L'opérateur <strong>modulo (%)</strong> renvoie le reste de la division euclidienne d'un nombre par un autre.</p><p>Pour calculer <strong>17 % 5</strong> :</p><ul><li>On cherche combien de fois 5 entre dans 17 : 5 x 3 = 15.</li><li>On calcule le reste : 17 - 15 = <strong>2</strong>.</li></ul><p>Le résultat de l'opération est donc 2.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le résultat 0 impliquerait que 17 est un multiple exact de 5, ce qui n'est pas le cas (17/5 = 3,4)."
      },
      {
        "l": "C",
        "t": "3 correspond au quotient de la division entière (17 divisé par 5), et non au reste."
      },
      {
        "l": "D",
        "t": "4 est une erreur de calcul fréquente si l'on se trompe dans la soustraction du reste ou si l'on confond avec une autre base."
      }
    ],
    "examiner": "Évaluer la compréhension de l'opérateur modulo et la capacité à effectuer une division euclidienne simple.",
    "summary": [
      "L'opérateur modulo (%) calcule exclusivement le reste d'une division entière.",
      "Pour 17 % 5, on identifie le plus grand multiple de 5 inférieur à 17, qui est 15.",
      "La différence entre le dividende et ce multiple donne le résultat final : 17 - 15 = 2.",
      "Le modulo est un outil fondamental en programmation pour le traitement cyclique ou la vérification de parité."
    ]
  },
  {
    "num": "Q14",
    "partie": "Développement Informatique",
    "q": "Pourquoi la fonction SDL_Delay(20) ne garantit-elle pas une suspension précise de l'exécution du programme pendant exactement 20 millisecondes ?",
    "choices": {
      "A": "Parce que SDL_Delay est une fonction défectueuse ou buggée au sein de la bibliothèque SDL.",
      "B": "Parce que le processeur est multitâche et qu'il peut être occupé par d'autres processus lorsque le délai expire.",
      "C": "Parce que le système d'exploitation ne garantit pas la précision du temps réel pour les applications en mode utilisateur.",
      "D": "Parce que le système d'exploitation accorde une priorité excessive aux programmes développés avec SDL, provoquant des erreurs de timing."
    },
    "correct": "C",
    "explanation": "<p>La fonction <strong>SDL_Delay</strong> dépend de l'ordonnanceur (scheduler) du système d'exploitation. Dans un système d'exploitation standard (non temps réel), le processus ne reprend pas la main immédiatement après le délai imparti.</p><ul><li>Le noyau du système d'exploitation décide quand rendre la main au processus.</li><li>Il existe une latence liée au <strong>quantum de temps</strong> alloué aux processus.</li><li>La précision temporelle dépend de la résolution de l'horloge système et de la charge globale de la machine.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "SDL_Delay n'est pas une fonction buggée ; son comportement est conforme aux limitations des systèmes d'exploitation non temps réel."
      },
      {
        "l": "B",
        "t": "Bien que l'occupation du processeur joue un rôle, la raison fondamentale réside dans l'ordonnancement du système d'exploitation qui ne garantit pas la précision du réveil."
      },
      {
        "l": "D",
        "t": "La SDL n'influence pas la priorité des processus au niveau du noyau de manière à créer des erreurs de timing ; c'est une affirmation infondée."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur le fonctionnement des systèmes d'exploitation multitâches et les limitations des appels système de temporisation.",
    "summary": [
      "Les systèmes d'exploitation classiques ne sont pas de nature 'temps réel'.",
      "SDL_Delay demande au système de suspendre le processus, mais le réveil dépend de l'ordonnanceur.",
      "La précision de la temporisation est soumise à la latence de l'ordonnanceur et à la charge du processeur.",
      "Pour des besoins de très haute précision, il est nécessaire d'utiliser des API spécifiques au système ou des systèmes d'exploitation temps réel (RTOS)."
    ]
  },
  {
    "num": "Q15",
    "partie": "Développement Informatique",
    "q": "Dans le contexte des fonctions de temporisation telles que setInterval ou des gestionnaires d'événements, que doit renvoyer la fonction de callback fournie ?",
    "choices": {
      "A": "L'intervalle de temps au bout duquel la fonction doit être rappelée.",
      "B": "Elle ne doit rien renvoyer (undefined).",
      "C": "Un booléen indiquant si l'exécution a été un succès ou un échec.",
      "D": "Une infinité de réponses (flux continu)."
    },
    "correct": "B",
    "explanation": "<p>Dans la majorité des API JavaScript standard (comme <strong>setInterval</strong> ou <strong>setTimeout</strong>), la fonction de rappel (callback) est exécutée par le moteur JavaScript pour effectuer une action spécifique. Le mécanisme de temporisation est géré par les paramètres passés à la fonction parente, et non par la valeur de retour du callback.</p><ul><li>Le moteur ne s'attend à aucune valeur de retour particulière de la part de ce callback.</li><li>Si une valeur est retournée, elle sera simplement ignorée par le gestionnaire d'événements ou le minuteur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'intervalle de temps est défini lors de l'appel de setInterval, pas par le résultat de la fonction de rappel."
      },
      {
        "l": "C",
        "t": "Le succès ou l'échec de la logique interne ne modifie pas le comportement du minuteur et n'est pas attendu par l'API."
      },
      {
        "l": "D",
        "t": "Une fonction ne peut pas renvoyer une 'infinité de réponses' ; elle termine son exécution dès qu'elle atteint une instruction return ou la fin de son bloc."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier votre compréhension du fonctionnement des fonctions de rappel (callbacks) dans les API asynchrones de JavaScript et la gestion des valeurs de retour.",
    "summary": [
      "Les fonctions de callback utilisées dans setInterval ou setTimeout n'ont pas besoin de retourner une valeur.",
      "La gestion du temps est définie par les arguments de la fonction parente, pas par le callback.",
      "Toute valeur retournée par ces fonctions est ignorée par le moteur d'exécution.",
      "Il est important de distinguer les callbacks de gestion d'événements des fonctions de transformation de données (comme map ou filter) qui, elles, attendent un retour."
    ]
  },
  {
    "num": "Q16",
    "partie": "Développement Informatique",
    "q": "Quelle est l'expression correcte pour affecter à la variable 'toujoursEnVie' une valeur booléenne indiquant si le joueur possède encore au moins une vie dans la variable 'nombreVies' ?",
    "choices": {
      "A": "toujoursEnVie = nombreVies > 1;",
      "B": "toujoursEnVie = nombreVies != 1;",
      "C": "toujoursEnVie = nombreVies > 0;",
      "D": "toujoursEnVie = nombreVies >= 0;"
    },
    "correct": "C",
    "explanation": "<p>Pour déterminer si un joueur est toujours en vie, il faut vérifier si le nombre de vies est strictement supérieur à zéro (c'est-à-dire 1, 2, 3, etc.).</p><ul><li>Si <strong>nombreVies</strong> est égal à 1, le joueur est en vie.</li><li>Si <strong>nombreVies</strong> est égal à 0, le joueur est 'mort' (game over).</li><li>L'expression <strong>nombreVies > 0</strong> retourne <strong>true</strong> pour toute valeur positive et <strong>false</strong> si la valeur est 0 ou moins.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette condition ne retourne 'vrai' que si le joueur a plus d'une vie. Si le joueur a exactement 1 vie, cette expression retourne 'faux', ce qui est incorrect."
      },
      {
        "l": "B",
        "t": "Cette condition retourne 'vrai' si le nombre de vies est différent de 1 (donc 0, 2, 3...), ce qui inclut des cas erronés comme 0."
      },
      {
        "l": "D",
        "t": "Cette condition inclut 0 dans les valeurs 'vraies'. Or, avoir 0 vie signifie généralement que le joueur n'est plus en vie."
      }
    ],
    "examiner": "Évaluer la maîtrise des opérateurs de comparaison et de la logique booléenne appliquée au contrôle de flux.",
    "summary": [
      "La logique booléenne permet de simplifier des conditions de contrôle.",
      "Une condition 'supérieur à zéro' (x > 0) est la norme pour vérifier la possession d'une ressource.",
      "Il faut être vigilant avec les opérateurs de comparaison ('>' vs '>=') pour éviter les erreurs de bordure (off-by-one).",
      "L'affectation directe du résultat d'une comparaison est une pratique propre et efficace en programmation."
    ]
  },
  {
    "num": "Q17",
    "partie": "Développement Informatique",
    "q": "Quel est le problème principal dans l'implémentation de cette structure de contrôle switch en langage C ?",
    "choices": {
      "A": "Il manque des instructions break.",
      "B": "Il manque un point-virgule après la fermeture de l'accolade du switch.",
      "C": "La syntaxe correcte devrait être 'case default' au lieu de 'default'.",
      "D": "Il est obligatoire d'ouvrir des accolades pour délimiter le bloc de chaque 'case'."
    },
    "correct": "A",
    "explanation": "<p>En langage C, l'instruction <strong>switch</strong> fonctionne par <em>fall-through</em> : une fois qu'un cas est validé, l'exécution se poursuit séquentiellement dans les blocs suivants, peu importe si les valeurs correspondent aux autres <code>case</code>.</p><p>Pour limiter l'exécution au seul bloc souhaité, il est nécessaire d'utiliser le mot-clé <strong><code>break</code></strong> pour sortir immédiatement de la structure <code>switch</code>.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une structure switch ne nécessite pas de point-virgule après son accolade fermante ; cela générerait une instruction vide inutile."
      },
      {
        "l": "C",
        "t": "La syntaxe 'default' est correcte en C ; 'case default' n'existe pas."
      },
      {
        "l": "D",
        "t": "Il n'est pas nécessaire d'ajouter des accolades autour du contenu d'un 'case', car le compilateur considère tout le code entre le 'case' et le 'break' comme faisant partie du même bloc logique."
      }
    ],
    "examiner": "Évalue la compréhension du fonctionnement séquentiel des structures switch en C et la maîtrise du mot-clé break.",
    "summary": [
      "Le switch en C exécute tous les blocs situés après le cas trouvé jusqu'à rencontrer un break.",
      "L'absence de break provoque une 'chute' (fall-through) dans les cas suivants, même si la condition n'est pas remplie.",
      "Le mot-clé break est indispensable pour interrompre le flux après un cas spécifique.",
      "La structure switch n'a pas besoin de délimiteurs particuliers pour les blocs case, le compilateur gère l'enchaînement."
    ]
  }
];
