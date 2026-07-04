const QCM = [
  {
    "num": "Q1",
    "partie": "XML",
    "q": "Quelle est la définition et la fonction principale du format XML (eXtensible Markup Language) ?",
    "choices": {
      "A": "Il s'agit d'un format de description de données.",
      "B": "Il ne permet pas de séparer le contenu de la présentation.",
      "C": "Il n'est pas portable entre différentes plateformes.",
      "D": "Il s'agit d'un langage de programmation complet."
    },
    "correct": "A",
    "explanation": "<p>Le format <strong>XML</strong> est un langage de balisage conçu pour structurer et transporter des données, et non pour les afficher directement.</p><ul><li><strong>Séparation contenu/présentation :</strong> XML est justement utilisé pour stocker la donnée brute, laissant le soin à d'autres technologies comme XSLT ou CSS de gérer la présentation.</li><li><strong>Portabilité :</strong> XML est un standard basé sur du texte brut, ce qui le rend universellement lisible par n'importe quel système ou plateforme.</li><li><strong>Nature :</strong> XML est un langage de description (balisage), pas un langage de programmation (il ne contient aucune logique d'exécution).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "C'est l'inverse : XML excelle dans la séparation du contenu par rapport à sa mise en forme."
      },
      {
        "l": "C",
        "t": "XML est conçu pour être interopérable et indépendant de la plateforme ou de l'architecture matérielle."
      },
      {
        "l": "D",
        "t": "XML est un langage de structuration de données, dépourvu d'instructions de contrôle de flux ou de calculs logiques."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux du XML et sa distinction par rapport aux langages de programmation.",
    "summary": [
      "XML est un format textuel de structuration et de description de données.",
      "Il assure une excellente séparation entre le fond (la donnée) et la forme (l'affichage).",
      "Il est totalement indépendant du matériel, du logiciel et du système d'exploitation.",
      "Ce n'est pas un langage de programmation, mais un langage de balisage."
    ]
  },
  {
    "num": "Q2",
    "partie": "XML",
    "q": "Parmi les propositions suivantes, laquelle définit le mieux le rôle et la nature du langage XML (eXtensible Markup Language) ?",
    "choices": {
      "A": "C'est un format de description de données structurées.",
      "B": "Il ne permet pas de séparer le contenu de la présentation.",
      "C": "Il n'est pas portable d'une plateforme à une autre.",
      "D": "C'est un langage de programmation informatique."
    },
    "correct": "A",
    "explanation": "<p>Le langage <strong>XML</strong> (eXtensible Markup Language) est un langage de balisage conçu pour stocker et transporter des données, et non pour les afficher. Contrairement au HTML, XML se concentre uniquement sur la <strong>structure</strong> et la <strong>sémantique</strong> de l'information.</p><ul><li>Il est <strong>auto-descriptif</strong>, permettant de créer des balises personnalisées.</li><li>Il assure une séparation stricte entre le contenu (données) et la présentation (gérée généralement par des feuilles de style XSLT ou CSS).</li><li>Il est intrinsèquement <strong>portable</strong> car basé sur du texte brut (Unicode).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Au contraire, l'un des avantages majeurs du XML est justement de séparer le fond (les données) de la forme (l'affichage)."
      },
      {
        "l": "C",
        "t": "Le XML est un standard universel conçu pour être parfaitement interopérable et indépendant des plateformes ou des systèmes d'exploitation."
      },
      {
        "l": "D",
        "t": "XML est un langage de balisage (markup language) et non un langage de programmation, car il ne contient aucune logique de traitement ou d'algorithme."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux du XML et sa distinction par rapport aux langages de programmation et de mise en forme.",
    "summary": [
      "XML est un langage de balisage dédié à la description et au transport de données.",
      "Il est totalement indépendant des plateformes et systèmes d'exploitation.",
      "Il sépare rigoureusement la structure des données de leur présentation visuelle.",
      "Ce n'est pas un langage de programmation, car il est passif et structurant."
    ]
  }
];
