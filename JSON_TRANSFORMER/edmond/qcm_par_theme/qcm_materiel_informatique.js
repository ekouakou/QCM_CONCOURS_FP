const QCM = [
  {
    "num": "Q1",
    "partie": "Matériel Informatique",
    "q": "Parmi les technologies suivantes, laquelle ne désigne pas un type de connecteur d'extension pour cartes internes sur un ordinateur de bureau (PC) ?",
    "choices": {
      "A": "USB",
      "B": "PCMCIA",
      "C": "PKI",
      "D": "PCI"
    },
    "correct": "C",
    "explanation": "<p>La réponse correcte est <strong>PKI</strong>. Le terme <strong>PKI</strong> signifie <em>Public Key Infrastructure</em> (Infrastructure à Clés Publiques). Il s'agit d'un concept de sécurité informatique basé sur des certificats numériques et des algorithmes de chiffrement, et non d'un matériel physique.</p><ul><li><strong>USB :</strong> Bien que principalement externe, il existe des ports d'extension USB internes sur les cartes mères.</li><li><strong>PCMCIA :</strong> Bien que devenu obsolète et principalement utilisé pour les ordinateurs portables, il s'agit d'un standard de connexion physique pour cartes d'extension.</li><li><strong>PCI :</strong> Il s'agit du bus d'extension standard (Peripheral Component Interconnect) permettant de connecter des cartes graphiques, son, ou réseau à la carte mère.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'USB est utilisé pour les extensions internes (headers USB) sur les cartes mères."
      },
      {
        "l": "B",
        "t": "Le PCMCIA est un standard de connecteur matériel, bien qu'il ne soit plus courant sur les PC de bureau récents."
      },
      {
        "l": "D",
        "t": "Le PCI est le connecteur d'extension physique par excellence pour les périphériques internes."
      }
    ],
    "examiner": "Évaluer la capacité du candidat à distinguer les concepts logiciels/sécuritaires des composants matériels (hardware) d'un ordinateur.",
    "summary": [
      "Une PKI est une solution logicielle et cryptographique, pas un composant matériel.",
      "Le port PCI est l'interface standard pour les cartes d'extension internes.",
      "Le format PCMCIA est un standard de connecteur pour cartes d'extension, historiquement lié aux PC portables.",
      "Il est essentiel de différencier les protocoles de sécurité des interfaces physiques."
    ]
  }
];
