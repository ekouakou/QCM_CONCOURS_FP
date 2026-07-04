const QCM = [
  {
    "num": "Q1",
    "partie": "Connaissance en Oracle",
    "q": "Quelle est la commande SQL permettant de supprimer définitivement une table et toutes ses données de la base de données Oracle ?",
    "choices": {
      "A": "DELETE TABLE nom_table;",
      "B": "DROP TABLE nom_table;",
      "C": "TRUNCATE TABLE nom_table;",
      "D": "REMOVE TABLE nom_table;"
    },
    "correct": "B",
    "explanation": "<p>La commande <strong>DROP TABLE</strong> est une instruction de type <em>Data Definition Language</em> (DDL). Elle supprime non seulement toutes les données contenues dans la table, mais également la structure de la table elle-même ainsi que ses index, déclencheurs (triggers) et contraintes associés du dictionnaire de données.</p><ul><li><strong>TRUNCATE</strong> supprime les données mais garde la structure.</li><li><strong>DELETE</strong> supprime les lignes une par une et est réversible via un ROLLBACK.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "DELETE est une commande DML qui supprime des lignes, pas la structure de la table."
      },
      {
        "l": "C",
        "t": "TRUNCATE vide le contenu de la table mais conserve la structure de celle-ci."
      },
      {
        "l": "D",
        "t": "REMOVE n'est pas une commande SQL standard reconnue par Oracle pour la gestion des tables."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre les commandes DDL (Data Definition Language) et DML (Data Manipulation Language) dans Oracle.",
    "summary": [
      "DROP TABLE supprime définitivement la structure et les données.",
      "TRUNCATE TABLE réinitialise la table sans supprimer sa structure.",
      "DELETE FROM permet une suppression sélective des lignes avec possibilité d'annulation.",
      "La commande DROP est irréversible (sauf via la corbeille Oracle Recycle Bin)."
    ]
  }
];
