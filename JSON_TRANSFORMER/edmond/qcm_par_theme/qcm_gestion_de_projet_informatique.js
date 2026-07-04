const QCM = [
  {
    "num": "Q1",
    "partie": "Gestion de projet informatique",
    "q": "Qui est responsable de prononcer la Vérification d'Aptitude (VA) d'une application ?",
    "choices": {
      "A": "Le Directeur Technique",
      "B": "Le chef de projet",
      "C": "L'équipe d'exploitation",
      "D": "La maîtrise d'ouvrage (MOA)"
    },
    "correct": "D",
    "explanation": "<p>La <strong>Vérification d'Aptitude (VA)</strong> est une étape cruciale dans le cycle de vie d'un projet informatique. Elle consiste à valider que le produit livré est conforme aux besoins exprimés dans le cahier des charges et qu'il est apte à remplir sa fonction dans le contexte métier.</p><ul><li>C'est le rôle exclusif de la <strong>Maîtrise d'Ouvrage (MOA)</strong>, car elle seule possède la vision fonctionnelle nécessaire pour confirmer que l'application répond à l'usage attendu par les utilisateurs finaux.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le Directeur Technique se concentre sur les choix d'architecture et les infrastructures, pas sur l'adéquation fonctionnelle métier."
      },
      {
        "l": "B",
        "t": "Le chef de projet est responsable du respect du planning et des ressources, mais il ne valide pas la recette fonctionnelle au nom du client."
      },
      {
        "l": "C",
        "t": "L'équipe d'exploitation s'assure de la mise en production et de la stabilité technique, mais elle ne juge pas de la pertinence fonctionnelle du produit."
      }
    ],
    "examiner": "Évaluer la connaissance des rôles et responsabilités dans le processus de recette logicielle, distinguant la MOA (métier) des autres acteurs techniques.",
    "summary": [
      "La Vérification d'Aptitude (VA) valide la conformité fonctionnelle d'un livrable.",
      "La responsabilité de la VA incombe toujours au porteur du besoin, c'est-à-dire la Maîtrise d'Ouvrage.",
      "La MOA exprime le besoin, tandis que la MOE (Maîtrise d'Œuvre) le réalise.",
      "Une VA réussie est une étape préalable indispensable à la mise en exploitation définitive."
    ]
  },
  {
    "num": "Q2",
    "partie": "Gestion de projet informatique",
    "q": "Dans le cadre d'un projet informatique, qui est responsable de la rédaction du cahier des charges ?",
    "choices": {
      "A": "La maîtrise d'ouvrage (MOA)",
      "B": "La maîtrise d'œuvre (MOE)",
      "C": "Les informaticiens",
      "D": "Le chef de projet"
    },
    "correct": "A",
    "explanation": "<p>Le <strong>cahier des charges fonctionnel</strong> est un document contractuel qui définit les besoins, les objectifs et les contraintes du client. Sa rédaction incombe exclusivement à la <strong>maîtrise d'ouvrage (MOA)</strong>, car elle seule exprime le besoin métier.</p><ul><li>La MOA représente le client.</li><li>La MOE (maîtrise d'œuvre) reçoit ce document pour proposer une solution technique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La maîtrise d'œuvre est chargée de la réalisation technique. Elle reçoit le cahier des charges mais ne le rédige pas."
      },
      {
        "l": "C",
        "t": "Les informaticiens interviennent lors de la phase de développement et de mise en œuvre, non lors de l'expression du besoin initial."
      },
      {
        "l": "D",
        "t": "Bien que le chef de projet puisse accompagner la rédaction, la responsabilité finale de la définition des besoins appartient au commanditaire (MOA)."
      }
    ],
    "examiner": "Évaluer la compréhension des rôles et des responsabilités dans le cycle de vie d'un projet, spécifiquement la distinction entre MOA et MOE.",
    "summary": [
      "La maîtrise d'ouvrage (MOA) définit le besoin et rédige le cahier des charges.",
      "La maîtrise d'œuvre (MOE) conçoit et réalise la solution technique.",
      "Le cahier des charges est le document de référence pour le contrat entre MOA et MOE.",
      "Il est essentiel de ne pas confondre le client (MOA) et le prestataire technique (MOE)."
    ]
  }
];
