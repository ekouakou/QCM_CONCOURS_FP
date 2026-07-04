const QCM = [
  {
    "num": "Q1",
    "partie": "Programmation Fondamentale (Java)",
    "q": "Quelle est la règle en Java concernant l'héritage et l'implémentation d'interfaces pour une classe ?",
    "choices": {
      "A": "Une classe peut implémenter plusieurs interfaces, mais ne peut étendre qu'une seule classe.",
      "B": "Une classe peut implémenter plusieurs classes, mais ne peut étendre qu'une seule interface.",
      "C": "Une classe peut implémenter plusieurs classes et étendre plusieurs interfaces.",
      "D": "Une classe doit implémenter une seule interface et étendre une seule classe."
    },
    "correct": "A",
    "explanation": "<p>En Java, le mécanisme d'héritage est conçu pour éviter les problèmes liés à l'héritage multiple (comme le problème du diamant) :</p><ul><li><strong>Héritage de classe (extends) :</strong> Java supporte uniquement l'héritage simple pour les classes. Une classe ne peut hériter que d'une seule classe parente.</li><li><strong>Implémentation d'interfaces (implements) :</strong> Java permet l'implémentation multiple. Une classe peut implémenter un nombre illimité d'interfaces, ce qui constitue une forme de polymorphisme flexible.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une classe ne peut pas 'implémenter' des classes (le mot-clé pour les classes est 'extends'), et une classe ne peut pas étendre une interface."
      },
      {
        "l": "C",
        "t": "Java interdit l'héritage multiple de classes. Le terme 'implémenter' est réservé aux interfaces, et 'étendre' est réservé aux classes."
      },
      {
        "l": "D",
        "t": "Cette affirmation est trop restrictive. Une classe n'est pas limitée à une seule interface et peut très bien n'implémenter aucune interface."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de base de la programmation orientée objet en Java, spécifiquement la différence entre héritage de classe et implémentation d'interface.",
    "summary": [
      "Java supporte l'héritage simple de classe (mot-clé 'extends').",
      "Java supporte l'implémentation multiple d'interfaces (mot-clé 'implements').",
      "Ces règles permettent de bénéficier du polymorphisme tout en évitant les ambiguïtés de l'héritage multiple de classes.",
      "Il est impossible d'étendre plusieurs classes en Java."
    ]
  },
  {
    "num": "Q2",
    "partie": "Programmation Fondamentale (Java)",
    "q": "Soit la classe B définie ci-dessous. Quel sera le résultat de l'exécution de l'instruction 'B monB = new B(2003);' ?\n\n```java\nclass B {\n    public B() { System.out.print(\"Ciao\"); }\n    public B(int i) { this(); System.out.print(\"Bonjour\" + i); }\n}\n```",
    "choices": {
      "A": "Erreur de compilation",
      "B": "Erreur d'exécution",
      "C": "CiaoBonjour2003",
      "D": "Bonjour2003"
    },
    "correct": "C",
    "explanation": "<p>Le code illustre l'utilisation du mot-clé <strong>this()</strong> pour appeler un constructeur au sein d'un autre constructeur de la même classe.</p><ul><li>Lors de l'instanciation <code>new B(2003)</code>, le constructeur <code>B(int i)</code> est invoqué.</li><li>L'instruction <code>this()</code> appelle immédiatement le constructeur par défaut <code>B()</code>, qui affiche <strong>\"Ciao\"</strong>.</li><li>Une fois le constructeur par défaut terminé, l'exécution reprend dans <code>B(int i)</code>, qui affiche alors <strong>\"Bonjour2003\"</strong>.</li><li>Le résultat concaténé est donc <strong>\"CiaoBonjour2003\"</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le code est syntaxiquement correct, le mot-clé 'this()' est utilisé conformément aux règles Java."
      },
      {
        "l": "B",
        "t": "Il n'y a aucune exception levée lors de l'exécution, le flux d'appel est parfaitement défini."
      },
      {
        "l": "D",
        "t": "Cette réponse oublie que l'appel à 'this()' déclenche l'exécution du corps du constructeur sans paramètres."
      }
    ],
    "examiner": "Évaluer la compréhension des mécanismes d'appel de constructeurs en chaîne via 'this()' dans un contexte de programmation orientée objet Java.",
    "summary": [
      "L'appel à 'this()' dans un constructeur doit obligatoirement être la première instruction.",
      "L'utilisation de 'this()' permet de réutiliser la logique d'initialisation d'un constructeur à un autre.",
      "Lorsqu'un constructeur en appelle un autre, le code du constructeur appelé est exécuté avant la suite du constructeur courant.",
      "La concaténation des chaînes avec 'print' ne produit pas d'espaces supplémentaires automatiquement."
    ]
  }
];
