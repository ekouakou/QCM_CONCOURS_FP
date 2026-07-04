const QCM = [
  {
    "num": "Q1",
    "partie": "Modélisation UML",
    "q": "En UML, quel diagramme est utilisé pour représenter les instances de classes à un instant précis du système ?",
    "choices": {
      "A": "Diagramme de séquence",
      "B": "Diagramme d'objet",
      "C": "Diagramme de classe",
      "D": "Diagramme de composants"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>diagramme d'objet</strong> est un diagramme structurel UML qui représente une vue instantanée du système. Contrairement au diagramme de classe qui définit la structure générale (types et relations), le diagramme d'objet montre des <strong>instances concrètes</strong> de ces classes avec des valeurs d'attributs spécifiques.</p><ul><li>Il permet de valider la cohérence des relations définies dans le diagramme de classe.</li><li>Il est souvent utilisé pour illustrer des scénarios complexes ou des états particuliers du système à un moment donné.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le diagramme de séquence est un diagramme comportemental qui illustre les interactions chronologiques entre les objets, et non la structure des instances."
      },
      {
        "l": "C",
        "t": "Le diagramme de classe définit la structure statique (modèles/types) mais ne montre pas les instances concrètes avec leurs valeurs."
      },
      {
        "l": "D",
        "t": "Le diagramme de composants décrit l'organisation physique du code en modules ou composants logiciels, sans lien direct avec les instances d'objets."
      }
    ],
    "examiner": "Évalue la capacité du candidat à distinguer la modélisation structurelle statique (classes) de la modélisation d'instances concrètes (objets) en UML.",
    "summary": [
      "Le diagramme d'objet représente une vue figée du système à un instant T.",
      "Il est composé d'instances de classes (objets) et de leurs liens effectifs.",
      "Il sert à concrétiser les règles définies par le diagramme de classe.",
      "Contrairement aux diagrammes de séquence, il ne montre pas de flux temporel."
    ]
  }
];
