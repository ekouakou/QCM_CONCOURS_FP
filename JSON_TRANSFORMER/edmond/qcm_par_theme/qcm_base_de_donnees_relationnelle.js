const QCM = [
  {
    "num": "Q1",
    "partie": "Base de données relationnelle",
    "q": "Dans une base de données relationnelle, combien de types principaux de contraintes d'intégrité distingue-t-on couramment ?",
    "choices": {
      "A": "4 principaux types de contraintes d'intégrité",
      "B": "5 principaux types de contraintes d'intégrité",
      "C": "6 principaux types de contraintes d'intégrité",
      "D": "3 principaux types de contraintes d'intégrité"
    },
    "correct": "D",
    "explanation": "<p>En modélisation de bases de données relationnelles, les <strong>trois types fondamentaux</strong> de contraintes d'intégrité sont :</p><ul><li><strong>Intégrité d'entité :</strong> Garantit que chaque ligne d'une table est unique via une clé primaire (non nulle).</li><li><strong>Intégrité référentielle :</strong> Assure la cohérence des liens entre deux tables via les clés étrangères.</li><li><strong>Intégrité de domaine :</strong> Définit les règles sur les valeurs autorisées dans une colonne (type, format, valeur par défaut, contrainte CHECK).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette réponse est incorrecte car elle surestime le nombre de contraintes fondamentales définies par le modèle relationnel classique."
      },
      {
        "l": "B",
        "t": "Cette réponse est incorrecte et semble confondre les contraintes fondamentales avec d'autres types de règles métier ou de sécurité secondaires."
      },
      {
        "l": "C",
        "t": "Cette réponse est incorrecte ; il n'existe pas de standard académique classant les contraintes d'intégrité en six catégories distinctes."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension théorique des piliers fondamentaux assurant la cohérence et la qualité des données dans un système relationnel.",
    "summary": [
      "Les contraintes d'intégrité sont essentielles pour garantir la cohérence des données.",
      "Il existe trois types principaux : l'intégrité d'entité, référentielle et de domaine.",
      "La clé primaire gère l'intégrité d'entité en empêchant les doublons et les valeurs nulles.",
      "La clé étrangère assure l'intégrité référentielle entre les tables liées.",
      "L'intégrité de domaine contrôle la validité des données saisies dans les colonnes."
    ]
  },
  {
    "num": "Q2",
    "partie": "Base de données relationnelle",
    "q": "Dans une base de données relationnelle, combien distingue-t-on de types principaux d'opérations de base pour la mise à jour des relations ?",
    "choices": {
      "A": "3 types",
      "B": "2 types",
      "C": "5 types",
      "D": "4 types"
    },
    "correct": "A",
    "explanation": "<p>Dans le modèle relationnel, les opérations de base permettant de manipuler les données (mise à jour) sont regroupées sous l'acronyme <strong>CRUD</strong>, mais dans un contexte théorique classique de base de données, on retient généralement les trois opérations fondamentales de modification :</p><ul><li><strong>Insertion</strong> : ajout de nouveaux tuples.</li><li><strong>Suppression</strong> : retrait de tuples existants.</li><li><strong>Modification (Mise à jour)</strong> : changement des valeurs d'attributs de tuples existants.</li></ul><p>Bien que le sigle CRUD en inclue quatre (Create, Read, Update, Delete), la lecture (Read/Select) est une opération de <em>consultation</em> et non de <em>mise à jour</em> (modification de l'état de la base).</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le nombre 2 est arbitraire et ne couvre pas l'ensemble des actions nécessaires pour gérer le cycle de vie d'un enregistrement."
      },
      {
        "l": "C",
        "t": "5 types dépasse le cadre des opérations élémentaires standard (Insertion, Suppression, Modification)."
      },
      {
        "l": "D",
        "t": "Ce choix confond probablement le nombre d'opérations de mise à jour avec l'acronyme CRUD (Create, Read, Update, Delete), en oubliant que le 'Read' est une opération de consultation."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat distingue les opérations de modification (écriture) des opérations de simple consultation (lecture) dans un système relationnel.",
    "summary": [
      "Les opérations de mise à jour servent à modifier l'état des données dans une table.",
      "Les trois opérations fondamentales sont l'insertion, la suppression et la modification.",
      "La lecture (SELECT) est considérée comme une opération de consultation, non de mise à jour.",
      "Comprendre cette distinction est crucial pour la gestion des transactions et des droits d'accès."
    ]
  },
  {
    "num": "Q3",
    "partie": "Base de données relationnelle",
    "q": "Dans une base de données relationnelle, que définit le 'degré' d'une relation ?",
    "choices": {
      "A": "Le nombre de clés primaires ou étrangères présentes dans la relation.",
      "B": "Le nombre de champs définis dans le schéma de la table.",
      "C": "Le nombre d'attributs qui composent la relation.",
      "D": "Le nombre d'enregistrements (ou tuples) contenus dans la table."
    },
    "correct": "C",
    "explanation": "<p>Dans la théorie des bases de données relationnelles, le <strong>degré</strong> d'une relation (ou arité) correspond au <strong>nombre d'attributs</strong> (ou colonnes) qui la constituent. À ne pas confondre avec le <em>cardinalité</em>, qui désigne le nombre de lignes (tuples) présentes dans la table.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le degré n'est pas limité aux clés ; il prend en compte tous les attributs de la structure de la relation, qu'ils soient clés ou non."
      },
      {
        "l": "B",
        "t": "Bien que techniquement proche d'un 'nombre de colonnes', le terme académique consacré en théorie des bases de données est 'attributs'."
      },
      {
        "l": "D",
        "t": "Le nombre d'enregistrements (ou articles) correspond à la cardinalité de la relation, et non à son degré."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la terminologie relationnelle, notamment la distinction entre degré et cardinalité.",
    "summary": [
      "Le degré d'une relation est le nombre d'attributs (colonnes).",
      "La cardinalité d'une relation est le nombre de tuples (lignes).",
      "Ces termes proviennent du modèle relationnel formel défini par E.F. Codd.",
      "Le degré est une propriété statique de la structure de la table."
    ]
  }
];
