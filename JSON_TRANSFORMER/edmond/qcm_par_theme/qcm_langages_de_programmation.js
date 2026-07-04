const QCM = [
  {
    "num": "Q1",
    "partie": "Langages de programmation",
    "q": "Quel est le paradigme principal du langage de programmation Prolog ?",
    "choices": {
      "A": "Un langage orienté objet",
      "B": "Un langage procédural",
      "C": "Un langage de programmation logique",
      "D": "Une balise HTTP"
    },
    "correct": "C",
    "explanation": "<p><strong>Prolog</strong> (Programmation en Logique) est un langage de programmation fondé sur la logique mathématique. Contrairement aux langages impératifs (procéduraux) ou objets, Prolog repose sur :</p><ul><li><strong>Des faits :</strong> des énoncés sur le domaine.</li><li><strong>Des règles :</strong> des conditions permettant de déduire de nouvelles informations.</li><li><strong>Un moteur d'inférence :</strong> qui résout des requêtes en effectuant des recherches dans la base de connaissances.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Prolog n'est pas basé sur les concepts de classes et d'objets, contrairement à Java ou C++."
      },
      {
        "l": "B",
        "t": "Un langage procédural se concentre sur l'exécution d'une séquence d'instructions étape par étape, ce qui est opposé à l'approche déclarative de Prolog."
      },
      {
        "l": "D",
        "t": "Prolog est un langage informatique complet, et non un simple format de balisage ou un protocole Web comme le HTML ou HTTP."
      }
    ],
    "examiner": "Évaluer la connaissance des paradigmes de programmation et la capacité à identifier la spécificité des langages déclaratifs par rapport aux langages impératifs.",
    "summary": [
      "Prolog est le langage emblématique de la programmation logique.",
      "Il fonctionne sur le principe des faits et des règles plutôt que sur des instructions séquentielles.",
      "Il est largement utilisé en intelligence artificielle pour le traitement du langage naturel et la résolution de problèmes.",
      "Il se distingue des langages procéduraux et orientés objet par sa nature déclarative."
    ]
  },
  {
    "num": "Q2",
    "partie": "Langages de programmation",
    "q": "Dans le contexte du traitement de texte, bien que l'interface soit graphique, quel concept informatique fondamental est utilisé par les langages de balisage (comme le HTML ou le XML) pour structurer le contenu, contrairement à la mise en forme directe ?",
    "choices": {
      "A": "L'encapsulation de données via des balises sémantiques.",
      "B": "L'utilisation exclusive de bibliothèques dynamiques (DLL).",
      "C": "La gestion directe des adresses mémoire du processeur.",
      "D": "Le typage statique fort des variables de mise en page."
    },
    "correct": "A",
    "explanation": "<p>Contrairement aux logiciels de traitement de texte qui utilisent le <strong>WYSIWYG</strong> (What You See Is What You Get), les langages de balisage reposent sur la <strong>séparation entre le contenu et la forme</strong>.</p><ul><li>Les <strong>balises sémantiques</strong> permettent de définir la nature logique d'un élément (ex: titre, paragraphe, citation).</li><li>Cela facilite le traitement automatisé des données par les moteurs de recherche ou les outils d'accessibilité.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le balisage est interprété ou parsé, il ne fait pas l'objet d'une compilation machine."
      },
      {
        "l": "C",
        "t": "Les langages de balisage sont des langages de description, ils ne manipulent pas directement la mémoire vive (RAM)."
      },
      {
        "l": "D",
        "t": "Le typage statique est une caractéristique des langages de programmation comme le C ou Java, non des langages de balisage."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre le formatage visuel (Word) et le balisage sémantique (structurel).",
    "summary": [
      "Le balisage sépare la structure sémantique de la présentation visuelle.",
      "Les balises décrivent le rôle des données plutôt que leur apparence.",
      "Le HTML et le XML sont des langages de balisage, pas des langages de programmation au sens strict.",
      "La sémantique améliore l'interopérabilité et l'accessibilité du contenu."
    ]
  }
];
