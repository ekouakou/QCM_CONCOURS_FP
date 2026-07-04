const QCM = [
  {
    "num": "Q1",
    "partie": "Base de données SQL",
    "q": "Quelle clause permet de filtrer les résultats d'une requête SQL utilisant une fonction d'agrégation (comme COUNT) sur des groupes de données ?",
    "choices": {
      "A": "Impossible de filtrer sur une agrégation.",
      "B": "Ajouter la clause HAVING count(*) > 10000 après le GROUP BY.",
      "C": "Ajouter la clause WHERE count(*) > 10000 après le GROUP BY.",
      "D": "Ajouter la clause count(*) > 10000 après le WHERE."
    },
    "correct": "B",
    "explanation": "<p>En SQL, la clause <strong>WHERE</strong> est utilisée pour filtrer des lignes <strong>avant</strong> qu'elles ne soient regroupées. Lorsque l'on souhaite filtrer sur le résultat d'une fonction d'agrégation (comme <code>COUNT</code>, <code>SUM</code>, <code>AVG</code>), il est impératif d'utiliser la clause <strong>HAVING</strong>.</p><p>La structure correcte est la suivante :</p><ul><li>SELECT ville, COUNT(*) FROM table_ville GROUP BY ville <strong>HAVING COUNT(*) > 10000</strong>;</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le filtrage sur agrégat est tout à fait possible grâce à la clause HAVING."
      },
      {
        "l": "C",
        "t": "La clause WHERE ne peut pas être placée après un GROUP BY et ne peut pas évaluer directement des fonctions d'agrégation."
      },
      {
        "l": "D",
        "t": "Le WHERE ne supporte pas les fonctions d'agrégation, et la syntaxe proposée est incomplète car il manque le mot-clé HAVING."
      }
    ],
    "examiner": "Évaluer la maîtrise de la syntaxe SQL, spécifiquement la distinction entre le filtrage de lignes (WHERE) et le filtrage de groupes (HAVING).",
    "summary": [
      "La clause WHERE filtre les lignes individuelles avant l'agrégation.",
      "La clause HAVING filtre les groupes formés après l'agrégation.",
      "Il est impossible d'utiliser une fonction d'agrégation dans une clause WHERE.",
      "La clause HAVING suit obligatoirement la clause GROUP BY."
    ]
  }
];
