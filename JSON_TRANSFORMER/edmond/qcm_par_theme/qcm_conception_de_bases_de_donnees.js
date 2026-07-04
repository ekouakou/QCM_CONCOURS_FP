const QCM = [
  {
    "num": "Q1",
    "partie": "Conception de Bases de Données",
    "q": "Au niveau conceptuel de la conception d'une base de données, quelle est l'activité principale réalisée ?",
    "choices": {
      "A": "Le recensement des règles d'organisation.",
      "B": "La définition du type de système de gestion de base de données (SGBD).",
      "C": "Le recensement des règles de gestion.",
      "D": "La définition de l'architecture du réseau."
    },
    "correct": "C",
    "explanation": "<p>Le <strong>niveau conceptuel</strong> (souvent associé au Modèle Conceptuel de Données - MCD) a pour but de représenter les données et les règles de gestion de l'entreprise indépendamment de toute contrainte technique.</p><p>Les <strong>règles de gestion</strong> constituent la base indispensable pour modéliser les entités, leurs attributs et les associations entre ces entités.</p><ul><li>Les règles d'organisation sont plus larges et souvent liées à la structure globale de l'entreprise.</li><li>Le choix du SGBD et l'architecture réseau relèvent du niveau <strong>physique</strong> ou <strong>logique</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les règles d'organisation concernent le fonctionnement global de l'entreprise mais ne sont pas l'élément technique central du MCD."
      },
      {
        "l": "B",
        "t": "Le choix du SGBD intervient lors du passage au niveau logique ou physique, pas lors de la modélisation conceptuelle."
      },
      {
        "l": "D",
        "t": "L'architecture réseau est totalement indépendante du modèle conceptuel de données."
      }
    ],
    "examiner": "Évaluer la compréhension de la hiérarchie des niveaux d'abstraction dans la méthodologie Merise (Niveau conceptuel vs logique/physique).",
    "summary": [
      "Le niveau conceptuel se concentre sur les règles de gestion du domaine métier.",
      "Il permet de définir les entités et les associations sans contrainte technique.",
      "Le choix du SGBD et l'infrastructure technique ne font pas partie du niveau conceptuel.",
      "Les règles de gestion sont le point de départ de la modélisation des données."
    ]
  },
  {
    "num": "Q2",
    "partie": "Conception de Bases de Données",
    "q": "Dans une base de données relationnelle, quelle requête SQL permet de sélectionner tous les enregistrements d'une table nommée « produits » ?",
    "choices": {
      "A": "SELECT DISTINCT id FROM produits",
      "B": "SELECT * FROM produits WHERE reference IS NULL",
      "C": "SELECT * FROM produits",
      "D": "SELECT * WHERE produits"
    },
    "correct": "C",
    "explanation": "<p>La requête SQL standard pour extraire l'intégralité des données d'une table est l'utilisation de l'astérisque (<strong>*</strong>) avec la clause <strong>SELECT</strong>.</p><ul><li><strong>SELECT *</strong> : Indique que l'on souhaite récupérer toutes les colonnes.</li><li><strong>FROM produits</strong> : Spécifie la table source dans laquelle les données doivent être extraites.</li></ul><p>Aucune condition de filtrage (clause <strong>WHERE</strong>) n'est nécessaire lorsqu'on souhaite obtenir l'ensemble des lignes.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'utilisation de DISTINCT ne sélectionne que des valeurs uniques pour une colonne spécifique, pas l'intégralité des enregistrements."
      },
      {
        "l": "B",
        "t": "La clause WHERE avec une condition restreint les résultats aux lignes où la référence est nulle, ce qui exclut la plupart des données."
      },
      {
        "l": "D",
        "t": "Cette syntaxe est incorrecte car elle omet la clause FROM, indispensable pour indiquer la table source en SQL."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la maîtrise de la syntaxe de base de l'instruction SELECT en SQL et la compréhension du rôle de l'astérisque comme sélecteur de colonnes.",
    "summary": [
      "La clause SELECT * permet de récupérer toutes les colonnes d'une table.",
      "La clause FROM est obligatoire pour identifier la table cible.",
      "L'absence de clause WHERE signifie qu'aucune restriction n'est appliquée sur les lignes.",
      "SQL est un langage déclaratif où chaque mot-clé a une fonction syntaxique précise."
    ]
  },
  {
    "num": "Q3",
    "partie": "Conception de Bases de Données",
    "q": "Dans une base de données relationnelle, quelle requête SQL permet de lister toutes les commandes pour lesquelles aucun client n'est associé ?",
    "choices": {
      "A": "SELECT num_com FROM Commande WHERE num_com IS NULL",
      "B": "SELECT * FROM Commande WHERE ALL client IS NULL",
      "C": "SELECT num_com FROM Commande WHERE num_nom NOT IN (SELECT num_nom FROM Client)",
      "D": "SELECT num_com FROM Client WHERE num_com NOT IN (SELECT num_nom FROM Client)"
    },
    "correct": "C",
    "explanation": "<p>La réponse correcte utilise l'opérateur <strong>NOT IN</strong> pour filtrer les enregistrements de la table <em>Commande</em> dont la référence client n'existe pas dans la table <em>Client</em>.</p><ul><li>La clause <strong>NOT IN</strong> permet d'exclure tous les enregistrements dont la valeur correspond à l'un des résultats de la sous-requête.</li><li>Il est essentiel de s'assurer que les colonnes comparées possèdent des types de données identiques.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le test 'IS NULL' vérifie si le champ est vide, mais ne permet pas de vérifier l'absence d'une correspondance dans une table liée."
      },
      {
        "l": "B",
        "t": "La syntaxe 'ALL client IS NULL' n'est pas une requête SQL valide pour effectuer une jointure ou une vérification d'existence."
      },
      {
        "l": "D",
        "t": "Cette requête interroge la table 'Client' au lieu de la table 'Commande' et tente une comparaison illogique entre des colonnes non corrélées."
      }
    ],
    "examiner": "L'examinateur évalue la maîtrise des sous-requêtes SQL et de l'opérateur d'exclusion NOT IN pour gérer les relations entre tables.",
    "summary": [
      "L'opérateur NOT IN permet d'identifier les enregistrements sans correspondance dans une table associée.",
      "Une sous-requête doit toujours retourner une colonne compatible avec la clause WHERE principale.",
      "Il est crucial de bien identifier la table cible de la sélection (ici 'Commande') pour obtenir le résultat attendu.",
      "La comparaison 'IS NULL' ne remplace pas une vérification d'intégrité référentielle par sous-requête."
    ]
  }
];
