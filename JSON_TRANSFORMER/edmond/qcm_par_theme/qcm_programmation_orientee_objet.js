const QCM = [
  {
    "num": "Q1",
    "partie": "Programmation Orientée Objet",
    "q": "Considérons les deux classes suivantes : la classe 'Machin' et la classe 'Bidul' qui hérite de 'Machin'. Les deux définissent une méthode d'instance 'f()' et une méthode statique 'g()'. Que va afficher l'exécution de l'instruction : 'Bidul b = new Bidul(); Machin m = b; System.out.println(m.f() * m.g());' ?",
    "choices": {
      "A": "30",
      "B": "20",
      "C": "8",
      "D": "12"
    },
    "correct": "D",
    "explanation": "<p>Cet exercice porte sur la distinction entre le <strong>polymorphisme dynamique</strong> et le <strong>liage statique</strong> en Java.</p><ul><li><strong>Méthode d'instance 'f()'</strong> : Elle est polymorphe. Comme 'm' pointe vers une instance de 'Bidul', la JVM appelle la méthode redéfinie dans 'Bidul'. 'm.f()' retourne donc <strong>2</strong>.</li><li><strong>Méthode statique 'g()'</strong> : Elle est liée statiquement (liage à la compilation) selon le type de la variable de référence, et non selon l'objet réel. 'm' étant de type 'Machin', c'est la méthode 'g()' de 'Machin' qui est appelée. 'm.g()' retourne donc <strong>6</strong>.</li><li><strong>Résultat</strong> : 2 * 6 = 12.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ce résultat (5 * 6) ignorerait totalement la redéfinition dans la classe Bidul."
      },
      {
        "l": "B",
        "t": "Ce résultat (5 * 4) applique le polymorphisme sur la méthode statique, ce qui est impossible en Java."
      },
      {
        "l": "C",
        "t": "Ce résultat (2 * 4) appliquerait le polymorphisme également sur la méthode statique, ce qui est une erreur de compréhension du liage statique."
      }
    ],
    "examiner": "Évaluer la compréhension de la différence entre le polymorphisme d'instance (dispatch dynamique) et le liage statique des membres de classe (statiques).",
    "summary": [
      "Les méthodes d'instance sont résolues dynamiquement selon le type de l'objet réel (polymorphisme).",
      "Les méthodes statiques sont résolues statiquement selon le type de la déclaration (la référence).",
      "Le polymorphisme ne s'applique jamais aux méthodes statiques en Java.",
      "Il est fortement déconseillé d'appeler des méthodes statiques via une instance pour éviter toute ambiguïté."
    ]
  },
  {
    "num": "Q2",
    "partie": "Programmation Orientée Objet",
    "q": "Dans le contexte de la programmation orientée objet, pourquoi la liaison tardive (late binding) est-elle considérée comme un mécanisme essentiel ?",
    "choices": {
      "A": "Elle garantit l'encapsulation des données.",
      "B": "Elle permet la mise en œuvre du polymorphisme.",
      "C": "Elle est le fondement unique de l'héritage.",
      "D": "Elle facilite la marginalisation des méthodes inutilisées."
    },
    "correct": "B",
    "explanation": "<p>La <strong>liaison tardive</strong> (ou liaison dynamique) est le processus par lequel la méthode à exécuter est déterminée au moment de l'exécution (runtime) plutôt qu'à la compilation. C'est ce mécanisme qui rend possible le <strong>polymorphisme</strong>.</p><p>Grâce à la liaison tardive, un programme peut appeler une méthode sur une référence de classe parente tout en exécutant le comportement spécifique de la classe enfant réelle de l'objet, sans que le type exact ne soit connu lors de la phase de compilation.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'encapsulation est le masquage des données et des implémentations internes, ce qui est indépendant de la gestion dynamique des méthodes."
      },
      {
        "l": "C",
        "t": "L'héritage est une relation hiérarchique entre classes, mais il ne nécessite pas nécessairement la liaison tardive pour exister."
      },
      {
        "l": "D",
        "t": "La marginalisation n'est pas un concept technique reconnu dans les principes fondamentaux de la programmation orientée objet."
      }
    ],
    "examiner": "Évaluer la compréhension du candidat sur les mécanismes fondamentaux du polymorphisme et la différence entre liaison statique et dynamique.",
    "summary": [
      "La liaison tardive lie une méthode à son exécution au moment de l'exécution.",
      "Elle est indispensable pour réaliser le polymorphisme en POO.",
      "Le type de l'objet est résolu dynamiquement par la JVM ou l'interpréteur.",
      "Elle permet une plus grande flexibilité dans le traitement générique d'objets issus d'une même hiérarchie."
    ]
  },
  {
    "num": "Q3",
    "partie": "Programmation Orientée Objet",
    "q": "Combien d'instances réelles de la classe A sont créées lors de l'exécution du segment de code suivant ? \n\nA x, u, v;\nx = new A();\nA y = x;\nA z = new A();",
    "choices": {
      "A": "aucune",
      "B": "cinq",
      "C": "trois",
      "D": "deux"
    },
    "correct": "D",
    "explanation": "<p>Pour déterminer le nombre d'instances créées, il faut identifier les appels explicites au mot-clé <strong>new</strong> :</p><ul><li><strong>A x, u, v;</strong> : Déclare trois références (pointeurs) vers des objets de type A, mais aucune instance n'est allouée en mémoire à ce stade.</li><li><strong>x = new A();</strong> : Première instanciation (objet 1).</li><li><strong>A y = x;</strong> : Copie la référence de x vers y. Aucune nouvelle instance n'est créée, y pointe vers le même objet que x.</li><li><strong>A z = new A();</strong> : Deuxième instanciation (objet 2).</li></ul><p>Au total, seules deux instances ont été réellement allouées sur le tas (heap).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le code contient deux instructions 'new', il y a donc bien des instances créées."
      },
      {
        "l": "B",
        "t": "C'est une confusion entre le nombre de références déclarées (x, u, v, y, z) et le nombre d'objets réellement instanciés."
      },
      {
        "l": "C",
        "t": "Cette réponse semble compter à tort la déclaration ou l'assignation par référence comme une création d'instance."
      }
    ],
    "examiner": "Évalue la compréhension de la distinction entre la déclaration d'une variable de type classe (référence) et l'instanciation effective d'un objet via le constructeur.",
    "summary": [
      "Une instance est créée uniquement par l'utilisation explicite du mot-clé 'new'.",
      "La déclaration de variables (A x, y) crée uniquement des références typées nulles par défaut.",
      "L'assignation entre deux variables de type objet (A y = x) ne fait que copier la référence de l'adresse mémoire, pas l'objet lui-même.",
      "Il est crucial de différencier le nombre de variables existantes du nombre d'objets alloués en mémoire."
    ]
  },
  {
    "num": "Q4",
    "partie": "Programmation Orientée Objet",
    "q": "En Java, où une variable locale est-elle déclarée ?",
    "choices": {
      "A": "Dans un tableau",
      "B": "À l'intérieur d'une méthode",
      "C": "Directement dans une classe",
      "D": "Dans un objet"
    },
    "correct": "B",
    "explanation": "<p>En Java, une <strong>variable locale</strong> est une variable définie à l'intérieur d'un bloc de code, le plus souvent une <strong>méthode</strong>, un constructeur ou un bloc d'initialisation.</p><ul><li>Sa portée (scope) est limitée au bloc où elle est déclarée.</li><li>Elle n'est pas accessible en dehors de cette méthode.</li><li>Elle n'a pas de valeur par défaut et doit être initialisée avant son utilisation.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un tableau est une structure de données contenant des éléments, ce n'est pas un lieu de déclaration de variable locale."
      },
      {
        "l": "C",
        "t": "Une variable déclarée directement dans une classe (en dehors de toute méthode) est appelée un attribut (ou champ/membre d'instance ou statique)."
      },
      {
        "l": "D",
        "t": "Un objet est une instance de classe ; les données propres à un objet sont ses champs, et non des variables locales."
      }
    ],
    "examiner": "Évaluer la compréhension de la portée (scope) des variables et la structure d'une classe en Java.",
    "summary": [
      "Une variable locale est déclarée à l'intérieur d'une méthode ou d'un bloc.",
      "La portée d'une variable locale est restreinte au bloc qui la contient.",
      "Les variables locales n'ont pas de valeur par défaut et doivent être explicitement initialisées.",
      "Les variables déclarées dans une classe mais hors des méthodes sont des attributs, pas des variables locales."
    ]
  },
  {
    "num": "Q5",
    "partie": "Programmation Orientée Objet",
    "q": "En Java, qu'est-ce qu'une classe concrète est tenue de faire lorsqu'elle implémente une interface ?",
    "choices": {
      "A": "Implémenter le constructeur de l'interface.",
      "B": "Être déclarée avec les modificateurs static et final.",
      "C": "Implémenter uniquement les méthodes utiles de l'interface.",
      "D": "Implémenter toutes les méthodes abstraites définies dans cette interface."
    },
    "correct": "D",
    "explanation": "<p>En Java, le contrat défini par une interface est strict. Lorsqu'une classe utilise le mot-clé <strong>implements</strong>, elle s'engage à fournir une implémentation pour <strong>toutes les méthodes abstraites</strong> déclarées dans l'interface, sauf si cette classe est elle-même déclarée comme <strong>abstract</strong>.</p><ul><li>Les interfaces ne possèdent pas de constructeurs.</li><li>Il n'existe aucune obligation pour une classe d'être statique ou finale en implémentant une interface.</li><li>Implémenter uniquement des méthodes « utiles » empêcherait la compilation de la classe.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les interfaces ne possèdent pas de constructeurs en Java, elles définissent uniquement des comportements."
      },
      {
        "l": "B",
        "t": "Une classe implémentant une interface peut être instanciable, héritée ou statique selon les besoins, mais cela n'est pas imposé par l'interface."
      },
      {
        "l": "C",
        "t": "Le compilateur exige l'implémentation de la totalité des méthodes abstraites ; ignorer certaines méthodes rend la classe invalide (sauf si elle est abstraite)."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la notion de contrat formel imposée par l'implémentation d'une interface en Java.",
    "summary": [
      "Une interface définit un contrat strict de méthodes abstraites.",
      "Toute classe concrète doit obligatoirement implémenter l'intégralité des méthodes de l'interface.",
      "Une classe qui n'implémente pas toutes les méthodes doit être marquée comme abstract.",
      "Les interfaces Java ne possèdent jamais de constructeurs."
    ]
  },
  {
    "num": "Q6",
    "partie": "Programmation Orientée Objet",
    "q": "En programmation orientée objet, lorsqu'un objet peut être considéré comme appartenant à plusieurs types et utilisé là où un type plus général est attendu, comment appelle-t-on ce mécanisme ?",
    "choices": {
      "A": "Héritage",
      "B": "Interface",
      "C": "Ancêtre",
      "D": "Polymorphisme"
    },
    "correct": "D",
    "explanation": "<p>Le <strong>polymorphisme</strong> est le concept fondamental qui permet à un objet d'être traité comme une instance de sa propre classe ou de n'importe quelle classe parente. Cela permet à une méthode ou une fonction d'accepter des objets de types différents, tant qu'ils partagent une interface ou une classe de base commune.</p><ul><li>Il permet de concevoir des systèmes plus flexibles et extensibles.</li><li>Il repose souvent sur l'héritage ou l'implémentation d'interfaces pour définir les types acceptables.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'héritage est un mécanisme de réutilisation de code permettant à une classe d'acquérir les propriétés d'une autre ; c'est un moyen de réaliser le polymorphisme, mais pas sa définition."
      },
      {
        "l": "B",
        "t": "Une interface définit un contrat de comportement, mais elle ne décrit pas le concept de substitution de type lui-même."
      },
      {
        "l": "C",
        "t": "Un ancêtre est une classe située plus haut dans la hiérarchie d'héritage, ce n'est pas un mécanisme de typage."
      }
    ],
    "examiner": "Évaluer la compréhension des principes fondamentaux de la POO, spécifiquement la capacité à distinguer le mécanisme de substitution (polymorphisme) des outils qui permettent sa mise en œuvre (héritage/interface).",
    "summary": [
      "Le polymorphisme permet à un objet d'être utilisé de manière interchangeable avec d'autres objets de type plus général.",
      "Il est un pilier de la POO facilitant la conception de code générique.",
      "L'héritage permet la hiérarchie, mais le polymorphisme permet la substitution.",
      "Il renforce le couplage faible entre les composants d'une application."
    ]
  },
  {
    "num": "Q7",
    "partie": "Programmation Orientée Objet",
    "q": "Dans le contexte de la programmation orientée objet, quel concept permet à une classe d'hériter des propriétés et des comportements d'une autre classe tout en permettant une spécialisation ?",
    "choices": {
      "A": "L'encapsulation",
      "B": "L'héritage",
      "C": "Le polymorphisme",
      "D": "L'abstraction"
    },
    "correct": "B",
    "explanation": "<p><strong>L'héritage</strong> est le mécanisme fondamental qui permet de créer une nouvelle classe (classe dérivée ou sous-classe) à partir d'une classe existante (classe mère ou super-classe). Ce principe favorise la réutilisation du code et l'organisation hiérarchique.</p><ul><li>Il permet de définir une relation \"est un\" entre les objets.</li><li>La classe dérivée reçoit les membres (attributs et méthodes) de la classe mère.</li><li>Il permet d'ajouter de nouveaux comportements ou d'en redéfinir (override) certains.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'encapsulation consiste à regrouper des données et des méthodes au sein d'une unité, tout en masquant les détails d'implémentation internes."
      },
      {
        "l": "C",
        "t": "Le polymorphisme permet à des objets de types différents d'être manipulés à travers une interface commune, souvent via des méthodes redéfinies."
      },
      {
        "l": "D",
        "t": "L'abstraction consiste à simplifier un système complexe en ne conservant que les caractéristiques essentielles, souvent via des classes abstraites ou des interfaces."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension théorique des piliers fondamentaux de la programmation orientée objet.",
    "summary": [
      "L'héritage est un pilier de la POO permettant de dériver une classe d'une autre.",
      "Il facilite la réutilisation du code et la maintenance des hiérarchies d'objets.",
      "La relation créée par l'héritage est typiquement une relation de type 'est un'.",
      "L'héritage permet la spécialisation par l'ajout ou la redéfinition de fonctionnalités."
    ]
  },
  {
    "num": "Q8",
    "partie": "Programmation Orientée Objet",
    "q": "Dans le cadre de la programmation orientée objet, quel concept fondamental est rendu possible grâce au mécanisme de la liaison tardive (late binding) ?",
    "choices": {
      "A": "L'encapsulation",
      "B": "Le polymorphisme",
      "C": "L'héritage",
      "D": "La marginalisation"
    },
    "correct": "B",
    "explanation": "<p>La <strong>liaison tardive</strong> (ou liaison dynamique) est le processus par lequel le code à exécuter est déterminé au moment de l'exécution (runtime) plutôt qu'à la compilation.</p><p>Ce mécanisme est le moteur technique du <strong>polymorphisme</strong>. Il permet à un programme d'appeler la méthode spécifique à un objet dérivé, même si la référence utilisée pour l'appeler est de type parent.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'encapsulation concerne la restriction d'accès aux données privées, pas la détermination dynamique des méthodes."
      },
      {
        "l": "C",
        "t": "L'héritage est une relation de hiérarchie entre classes, qui permet le polymorphisme, mais n'est pas le synonyme de la liaison tardive."
      },
      {
        "l": "D",
        "t": "La marginalisation n'est pas un concept reconnu dans la théorie de la programmation orientée objet."
      }
    ],
    "examiner": "Évaluer la compréhension des mécanismes de fonctionnement internes de la POO et la distinction entre liaison statique et dynamique.",
    "summary": [
      "La liaison tardive permet de choisir la méthode à exécuter au moment de l'exécution.",
      "Elle est indispensable pour implémenter le polymorphisme d'inclusion.",
      "Sans liaison tardive, le système ne pourrait pas distinguer les comportements spécifiques des sous-classes lors d'appels via une interface ou une classe parente.",
      "L'encapsulation et l'héritage sont d'autres piliers de la POO, distincts de la gestion de la liaison dynamique."
    ]
  },
  {
    "num": "Q9",
    "partie": "Programmation Orientée Objet",
    "q": "Combien d'instances de la classe A sont réellement créées par l'exécution du code suivant : 'A x, u, v; X = new A(); A y = x; A z = new A();' ?",
    "choices": {
      "A": "Aucune",
      "B": "Cinq",
      "C": "Trois",
      "D": "Deux"
    },
    "correct": "D",
    "explanation": "<p>Pour déterminer le nombre d'instances créées, il faut identifier les appels explicites au mot-clé <strong>new</strong> :</p><ul><li><strong>A x, u, v;</strong> : Déclare trois références, mais n'instancie aucun objet.</li><li><strong>x = new A();</strong> : Première instance créée (affectée à x).</li><li><strong>A y = x;</strong> : Copie la référence x, aucune nouvelle instance n'est créée.</li><li><strong>A z = new A();</strong> : Deuxième instance créée (affectée à z).</li></ul><p>Au total, seules deux instances ont été allouées en mémoire.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Faux, car le code contient deux appels explicites au constructeur via 'new'."
      },
      {
        "l": "B",
        "t": "Faux, ce chiffre confond probablement le nombre de variables déclarées (x, u, v, y, z) avec le nombre d'objets instanciés."
      },
      {
        "l": "C",
        "t": "Faux, cette erreur survient si l'on compte à tort la déclaration ou l'affectation par référence comme une nouvelle instance."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre la déclaration d'une variable objet (référence) et l'instanciation réelle en mémoire via le constructeur.",
    "summary": [
      "La déclaration d'une variable de type classe ne crée pas d'instance.",
      "Seul le mot-clé 'new' déclenche l'allocation mémoire et l'appel au constructeur.",
      "L'affectation entre deux objets (A y = x) ne fait que copier la référence vers la même instance existante.",
      "Il est crucial de distinguer les références des objets eux-mêmes pour gérer la mémoire efficacement."
    ]
  },
  {
    "num": "Q10",
    "partie": "Programmation Orientée Objet",
    "q": "En langage Java, où une variable locale est-elle déclarée ?",
    "choices": {
      "A": "Dans un tableau",
      "B": "Dans une méthode",
      "C": "Dans une classe",
      "D": "Dans un objet"
    },
    "correct": "B",
    "explanation": "<p>En Java, une <strong>variable locale</strong> est une variable déclarée à l'intérieur d'une méthode, d'un constructeur ou d'un bloc d'instructions.</p><ul><li><strong>Portée :</strong> Elle n'est accessible qu'au sein de cette méthode ou de ce bloc.</li><li><strong>Cycle de vie :</strong> Elle est créée à l'entrée de la méthode et détruite à sa sortie.</li><li><strong>Initialisation :</strong> Contrairement aux variables d'instance (champs de classe), les variables locales ne possèdent pas de valeur par défaut et doivent être explicitement initialisées avant toute lecture.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un tableau est une structure de stockage de données, pas un lieu de déclaration de variable locale."
      },
      {
        "l": "C",
        "t": "Une variable déclarée directement dans le corps d'une classe (en dehors de toute méthode) est appelée un 'champ' (field) ou une variable d'instance, et non une variable locale."
      },
      {
        "l": "D",
        "t": "Un objet est une instance de classe créée en mémoire ; la notion de déclaration de variable se fait au niveau du code source, pas de l'objet lui-même."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension de la portée (scope) des variables et la distinction entre variables locales et variables d'instance en Java.",
    "summary": [
      "Une variable locale est limitée à la méthode ou au bloc où elle est déclarée.",
      "Elle n'est pas accessible depuis l'extérieur de cette méthode.",
      "Le compilateur Java impose une initialisation explicite des variables locales.",
      "Les variables déclarées au niveau de la classe sont des champs, pas des variables locales."
    ]
  },
  {
    "num": "Q11",
    "partie": "Programmation Orientée Objet",
    "q": "En Java, quelle est l'obligation imposée à une classe qui implémente une interface ?",
    "choices": {
      "A": "Implémenter le constructeur de l'interface.",
      "B": "Être obligatoirement déclarée comme statique.",
      "C": "Implémenter uniquement les méthodes jugées utiles de l'interface.",
      "D": "Implémenter toutes les méthodes abstraites définies dans cette interface."
    },
    "correct": "D",
    "explanation": "<p>En Java, le mot-clé <strong>implements</strong> impose un contrat strict : une classe concrète doit fournir une implémentation pour <strong>toutes</strong> les méthodes abstraites déclarées dans l'interface.</p><ul><li>Si une méthode n'est pas implémentée, la classe doit être déclarée comme <strong>abstract</strong>.</li><li>Les interfaces ne possèdent pas de constructeurs, car elles ne peuvent pas être instanciées directement.</li><li>L'implémentation n'est pas liée à une notion de classe statique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les interfaces ne possèdent pas de constructeurs en Java, car il est impossible d'instancier une interface."
      },
      {
        "l": "B",
        "t": "L'implémentation d'une interface n'a aucun lien avec le modificateur 'static' d'une classe."
      },
      {
        "l": "C",
        "t": "Le compilateur Java exige l'implémentation de la totalité des méthodes abstraites, sans quoi le code ne pourra pas être compilé."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de l'abstraction en Java et des règles contractuelles liées à l'utilisation des interfaces.",
    "summary": [
      "Une interface définit un contrat de méthodes abstraites.",
      "Toute classe concrète implémentant une interface doit définir le corps de toutes les méthodes de celle-ci.",
      "Une classe qui n'implémente pas toutes les méthodes doit être marquée comme 'abstract'.",
      "Les interfaces ne contiennent pas de constructeurs."
    ]
  },
  {
    "num": "Q12",
    "partie": "Programmation Orientée Objet",
    "q": "En programmation orientée objet, lorsqu'un objet peut appartenir à plusieurs types et être utilisé là où une valeur d'un type plus général est attendue, comment appelle-t-on ce concept ?",
    "choices": {
      "A": "Héritage",
      "B": "Interface",
      "C": "Ancêtre",
      "D": "Polymorphisme"
    },
    "correct": "D",
    "explanation": "<p>Le <strong>polymorphisme</strong> est la capacité d'une entité (objet, fonction, variable) à prendre plusieurs formes. En POO, il permet à un objet d'être traité comme une instance de sa propre classe ou comme une instance de n'importe quelle classe parente (superclasse).</p><p>Cela garantit une flexibilité maximale : le code qui manipule des objets de type 'Animal' fonctionnera parfaitement avec des objets 'Chien' ou 'Chat' sans avoir à connaître leurs types spécifiques.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'héritage est le mécanisme permettant de créer une hiérarchie de classes, mais il est un moyen pour parvenir au polymorphisme, pas le concept décrivant l'usage d'un objet comme un type plus général."
      },
      {
        "l": "B",
        "t": "Une interface définit un contrat de méthodes. Bien qu'elle permette le polymorphisme, elle est une structure de définition et non le nom du comportement global décrit."
      },
      {
        "l": "C",
        "t": "Le terme 'ancêtre' désigne simplement la position d'une classe dans la hiérarchie d'héritage, ce n'est pas un concept de comportement polymorphe."
      }
    ],
    "examiner": "Évaluer la compréhension théorique du candidat sur les principes fondamentaux de la POO, en distinguant les mécanismes (héritage) des comportements (polymorphisme).",
    "summary": [
      "Le polymorphisme permet de substituer un objet par un type plus général.",
      "Il est essentiel pour écrire du code réutilisable et découplé.",
      "L'héritage est le pilier qui facilite la mise en œuvre du polymorphisme.",
      "Le polymorphisme est au cœur de la conception orientée objet."
    ]
  },
  {
    "num": "Q13",
    "partie": "Programmation Orientée Objet",
    "q": "Qu'est-ce qu'une occurrence (ou instance) d'un objet dans le cadre de la programmation orientée objet ?",
    "choices": {
      "A": "C'est un élément individualisé n'appartenant pas à cet objet.",
      "B": "C'est un élément individualisé appartenant à cet objet (une instance de la classe).",
      "C": "C'est un élément individualisé appartenant à un autre objet.",
      "D": "C'est un élément individualisé appartenant à deux objets simultanément."
    },
    "correct": "B",
    "explanation": "<p>En programmation orientée objet, une <strong>classe</strong> définit le plan de construction, tandis qu'une <strong>occurrence</strong> (souvent appelée <em>instance</em>) représente la réalisation concrète de cette classe en mémoire.</p><p>Lorsqu'on instancie une classe, on crée un objet spécifique qui possède ses propres données (état) tout en partageant la structure définie par la classe mère.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une instance doit obligatoirement être liée à la structure (classe) qui l'a créée."
      },
      {
        "l": "C",
        "t": "Une instance est définie par sa classe d'origine, et non par une autre classe arbitraire."
      },
      {
        "l": "D",
        "t": "Bien que l'héritage existe, une instance spécifique est toujours associée à une classe instanciable précise, elle ne peut pas appartenir à deux types différents simultanément au moment de sa création."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la programmation orientée objet, spécifiquement la relation entre classe et instance.",
    "summary": [
      "Une classe est un modèle théorique.",
      "Une occurrence est la matérialisation concrète d'une classe.",
      "Chaque occurrence possède un état propre en mémoire.",
      "L'instanciation est le processus de création d'une occurrence à partir d'une classe."
    ]
  }
];
