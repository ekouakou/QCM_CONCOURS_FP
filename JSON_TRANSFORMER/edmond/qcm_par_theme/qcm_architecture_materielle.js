const QCM = [
  {
    "num": "Q1",
    "partie": "Architecture Matérielle",
    "q": "Qu'est-ce que le chipset d'une carte mère ?",
    "choices": {
      "A": "Le support physique accueillant le processeur.",
      "B": "Le connecteur accueillant la barrette de mémoire vive (RAM).",
      "C": "Un jeu de caractères définissant la disposition des touches d'un clavier (AZERTY ou QWERTY).",
      "D": "Un jeu de composants électroniques permettant de gérer les échanges de données entre les différents éléments de l'ordinateur."
    },
    "correct": "D",
    "explanation": "<p>Le <strong>chipset</strong> (ou jeu de composants) est l'élément central de la carte mère. Il joue le rôle de chef d'orchestre en assurant la liaison entre le processeur (CPU), la mémoire, le stockage et les périphériques d'entrée/sortie.</p><ul><li>Il détermine les capacités d'évolution de la carte mère.</li><li>Il gère les flux de données circulant sur les bus de la carte.</li><li>Il intègre souvent des fonctions basiques comme le contrôleur SATA ou USB.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le support accueillant le processeur est appelé le socket (ou support de processeur), et non le chipset."
      },
      {
        "l": "B",
        "t": "Le support accueillant la mémoire vive est appelé un slot DIMM ou SO-DIMM."
      },
      {
        "l": "C",
        "t": "La disposition du clavier est gérée par la configuration logicielle du système d'exploitation et non par un composant matériel de la carte mère."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture matérielle et du rôle des composants fondamentaux de la carte mère.",
    "summary": [
      "Le chipset est le centre névralgique de la carte mère.",
      "Il régule et orchestre les communications entre les composants internes.",
      "Contrairement au socket, le chipset n'est pas un support de fixation mais un circuit intégré.",
      "Il définit les compatibilités de la carte mère (processeur, fréquence mémoire, ports)."
    ]
  },
  {
    "num": "Q2",
    "partie": "Architecture Matérielle",
    "q": "Où sont généralement situés les ports IDE sur une carte mère d'ordinateur ?",
    "choices": {
      "A": "Toujours à l'intérieur de l'ordinateur",
      "B": "Toujours en façade de la tour",
      "C": "Toujours à l'arrière et parfois en façade",
      "D": "Toujours à l'arrière de la tour"
    },
    "correct": "A",
    "explanation": "<p>Le port <strong>IDE</strong> (Integrated Drive Electronics), également connu sous le nom de connecteur <strong>PATA</strong> (Parallel ATA), est une interface interne utilisée pour connecter les périphériques de stockage tels que les disques durs ou les lecteurs optiques.</p><ul><li>Les ports IDE sont soudés directement sur la <strong>carte mère</strong>.</li><li>Ils ne sont jamais accessibles depuis l'extérieur de la tour, contrairement aux ports USB ou Ethernet.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Les ports en façade sont généralement destinés à une utilisation rapide (USB, audio) et non à la connexion interne de composants de stockage via nappe IDE."
      },
      {
        "l": "C",
        "t": "Cette description correspondrait davantage à des ports d'extension externes, ce qui n'est pas la fonction d'un connecteur IDE."
      },
      {
        "l": "D",
        "t": "L'arrière de la tour comporte les connecteurs de la plaque d'entrées/sorties (I/O shield), qui ne comprennent pas les nappes de données IDE internes."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance de base sur l'architecture physique des composants internes d'un ordinateur et la distinction entre ports internes et externes.",
    "summary": [
      "L'IDE est une interface de connexion interne pour les périphériques de stockage.",
      "Les connecteurs IDE se trouvent exclusivement à l'intérieur du boîtier, sur la carte mère.",
      "Il ne faut pas confondre les ports de données internes (IDE, SATA) avec les ports de périphériques externes (USB, HDMI).",
      "La manipulation des ports IDE nécessite l'ouverture du châssis de l'ordinateur."
    ]
  }
];
