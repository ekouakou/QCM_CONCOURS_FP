const QCM = [
  {
    "num": "Q1",
    "partie": "Accessibilité Web",
    "q": "Parmi les propositions suivantes concernant les règles d'accessibilité numérique pour les personnes malvoyantes ou non-voyantes, laquelle est fausse ?",
    "choices": {
      "A": "La structure de la page doit être simple et claire.",
      "B": "Les liens hypertextes doivent être explicites et compréhensibles en évitant les intitulés vagues comme « cliquer ici ».",
      "C": "Les frames (ou cadres) doivent être systématiquement utilisés.",
      "D": "Les images doivent être accompagnées de textes alternatifs les décrivant."
    },
    "correct": "C",
    "explanation": "<p>L'accessibilité web (norme <strong>RGAA</strong> en France) vise à rendre les contenus compréhensibles par tous, y compris les utilisateurs de lecteurs d'écran.</p><ul><li>Les <strong>frames</strong> sont déconseillées car elles compliquent la navigation par clavier et la compréhension du contexte par les outils d'assistance.</li><li>Une structure claire (balises sémantiques h1, h2, etc.) est fondamentale.</li><li>L'intitulé des liens doit être explicite hors contexte pour permettre la navigation rapide.</li><li>Le texte alternatif des images (attribut <code>alt</code>) est indispensable pour décrire visuellement le contenu aux personnes non-voyantes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une règle d'or de l'accessibilité : une structure simple facilite la lecture et la navigation via des aides techniques."
      },
      {
        "l": "B",
        "t": "C'est une pratique correcte et recommandée pour garantir que l'utilisateur comprenne la destination du lien sans le contexte visuel."
      },
      {
        "l": "D",
        "t": "C'est une obligation technique (balise alt) pour que les logiciels de lecture d'écran puissent restituer la nature de l'image."
      }
    ],
    "examiner": "Évaluer la connaissance des bonnes pratiques en matière d'accessibilité web et l'identification des techniques obsolètes ou nuisibles à l'expérience utilisateur.",
    "summary": [
      "Les frames (cadres) sont déconseillés pour l'accessibilité car ils nuisent à la navigation des lecteurs d'écran.",
      "Une structure sémantique claire est essentielle pour permettre une navigation logique.",
      "Les liens doivent avoir des intitulés explicites, indépendamment du texte qui les entoure.",
      "L'utilisation d'attributs de texte alternatif est obligatoire pour toute image porteuse d'information."
    ]
  }
];
