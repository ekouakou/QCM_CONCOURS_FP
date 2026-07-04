const QCM = [
  {
    "num": "Q1",
    "partie": "Programmation Orientée Objet Java",
    "q": "En Java, lorsqu'une classe implémente une interface, quelle est son obligation vis-à-vis des méthodes définies dans cette interface ?",
    "choices": {
      "A": "Implémenter le constructeur de l'interface.",
      "B": "Être déclarée comme une classe statique ou finale.",
      "C": "Implémenter uniquement les méthodes jugées utiles au sein de la classe.",
      "D": "Implémenter toutes les méthodes abstraites définies dans cette interface."
    },
    "correct": "D",
    "explanation": "<p>En Java, le mot-clé <strong>implements</strong> impose un contrat formel. Lorsqu'une classe implémente une interface, elle s'engage à fournir une implémentation concrète pour <strong>l'intégralité des méthodes abstraites</strong> déclarées dans cette interface.</p><p>Si la classe ne souhaite pas implémenter toutes les méthodes, elle doit obligatoirement être déclarée comme une classe <strong>abstract</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les interfaces Java ne possèdent pas de constructeurs, car elles ne peuvent pas être instanciées directement."
      },
      {
        "l": "B",
        "t": "Une classe qui implémente une interface n'a aucune obligation d'être statique ou finale. La modification 'final' empêcherait d'ailleurs toute sous-classe ultérieure."
      },
      {
        "l": "C",
        "t": "Il s'agit d'une erreur courante : le compilateur Java refusera de compiler la classe si une seule méthode abstraite de l'interface n'est pas implémentée."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de base de l'abstraction et du contrat d'interface dans le langage Java.",
    "summary": [
      "L'implémentation d'une interface en Java constitue un contrat obligatoire.",
      "Une classe concrète doit définir le corps de toutes les méthodes abstraites de l'interface.",
      "Les interfaces ne contiennent pas de constructeurs.",
      "Si une classe n'implémente pas toutes les méthodes, elle doit être déclarée abstraite."
    ]
  }
];
