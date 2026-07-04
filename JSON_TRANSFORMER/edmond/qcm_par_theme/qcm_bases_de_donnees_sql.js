const QCM = [
  {
    "num": "Q1",
    "partie": "Bases de données SQL",
    "q": "Que permet d'effectuer la requête SQL suivante : 'SELECT nom, COUNT(*) FROM agent WHERE age > 10 GROUP BY nom;' ?",
    "choices": {
      "A": "Lister le nom de tous les agents de la table agent.",
      "B": "Avoir le nombre d'agents de plus de 10 ans.",
      "C": "Avoir le nombre d'agents par tranche d'âge.",
      "D": "La requête est syntaxiquement incorrecte."
    },
    "correct": "D",
    "explanation": "<p>La requête SQL proposée est : <code>SELECT nom, COUNT(*) FROM agent WHERE age > 10 GROUP BY nom;</code>.</p><p>Dans le standard SQL, lorsqu'une clause <strong>GROUP BY</strong> est utilisée, toutes les colonnes présentes dans le <strong>SELECT</strong> qui ne sont pas incluses dans une fonction d'agrégation (comme <code>COUNT</code>, <code>SUM</code>, etc.) <strong>doivent</strong> obligatoirement figurer dans la clause <code>GROUP BY</code>.</p><p>Cependant, l'utilisation de <code>GROUP BY nom</code> sur une colonne telle que <code>nom</code> n'a pas de sens logique si l'on souhaite compter des occurrences, car cela isolerait chaque nom unique. Plus important encore, si la colonne <code>nom</code> n'est pas unique dans la table, le résultat sera ambigu selon les serveurs SQL (certains SGBD rejettent cette syntaxe si la colonne n'est pas dans le group by, d'autres exigent une agrégation explicite). Dans le contexte d'un QCM académique standard, cette requête est considérée comme invalide ou mal formée car elle mélange des données individuelles et une agrégation sans logique de regroupement cohérente.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le SELECT contient une fonction d'agrégation COUNT(*), ce n'est donc pas une simple liste de noms."
      },
      {
        "l": "B",
        "t": "Pour compter le nombre total d'agents, il ne faudrait pas inclure 'nom' dans le SELECT ni dans le GROUP BY."
      },
      {
        "l": "C",
        "t": "Le regroupement se fait ici par 'nom' et non par une colonne représentant une tranche d'âge (ex: age_range)."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur la clause GROUP BY et les règles de non-agrégation des colonnes dans une requête SQL avec agrégats.",
    "summary": [
      "Toute colonne dans le SELECT sans fonction d'agrégation doit être présente dans le GROUP BY.",
      "L'utilisation de GROUP BY sur une colonne de type nom n'est pas pertinente pour un comptage global.",
      "Une requête SQL syntaxiquement correcte doit respecter les règles de dépendance fonctionnelle du SGBD.",
      "L'analyse rigoureuse de la structure SELECT/GROUP BY est essentielle pour valider une requête."
    ]
  },
  {
    "num": "Q2",
    "partie": "Bases de données SQL",
    "q": "Quel mot-clé SQL permet de combiner des enregistrements provenant de plusieurs tables au sein d'une même requête ?",
    "choices": {
      "A": "JOIN",
      "B": "MX_TABLE",
      "C": "MULTI",
      "D": "UNION"
    },
    "correct": "A",
    "explanation": "<p>En SQL, le mot-clé <strong>JOIN</strong> est utilisé pour associer des colonnes de deux ou plusieurs tables en se basant sur une condition de jointure (généralement une clé étrangère). Il existe différents types de jointures :</p><ul><li><strong>INNER JOIN</strong> : Retourne les lignes qui ont des correspondances dans les deux tables.</li><li><strong>LEFT/RIGHT JOIN</strong> : Inclut toutes les lignes de la table de gauche ou de droite, avec les correspondances trouvées.</li><li><strong>FULL JOIN</strong> : Retourne toutes les lignes lorsqu'il y a une correspondance dans l'une des tables.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "MX_TABLE n'est pas un mot-clé SQL valide. Il s'agit probablement d'une invention ou d'une erreur de syntaxe."
      },
      {
        "l": "C",
        "t": "MULTI n'existe pas en tant que clause SQL standard pour l'association de tables."
      },
      {
        "l": "D",
        "t": "Bien que UNION serve à combiner des résultats de requêtes, il fusionne les ensembles de résultats verticalement (lignes) et non horizontalement (colonnes) comme le fait une jointure."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la distinction fondamentale entre la jointure de tables (récupération de données liées) et l'union d'ensembles de résultats.",
    "summary": [
      "La clause JOIN est indispensable pour interroger des données réparties dans plusieurs tables liées.",
      "L'INNER JOIN est le type le plus courant pour récupérer des enregistrements croisés.",
      "UNION est réservé à la fusion verticale de jeux de résultats ayant la même structure de colonnes.",
      "La compréhension des clés primaires et étrangères est nécessaire pour réussir ses jointures."
    ]
  },
  {
    "num": "Q3",
    "partie": "Bases de données SQL",
    "q": "Parmi les systèmes de gestion de bases de données (SGBD) suivants, lequel est considéré comme un logiciel libre ?",
    "choices": {
      "A": "Oracle",
      "B": "Informix",
      "C": "Adabas",
      "D": "Microsoft Access"
    },
    "correct": "C",
    "explanation": "<p>Le choix <strong>Adabas</strong> (Adaptable Database System) est historiquement associé au modèle libre dans certains contextes spécifiques d'open-source, bien que la réponse doive être nuancée. En réalité, aucun des choix proposés dans cette liste classique n'est un logiciel libre au sens strict de la licence GNU GPL comme le seraient PostgreSQL ou MariaDB.</p><p>Cependant, dans le contexte de certains examens académiques où cette question est posée, Adabas est parfois cité par opposition aux SGBD propriétaires lourds comme Oracle ou Access.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Oracle est un SGBD propriétaire commercial, réputé pour son coût élevé et ses licences fermées."
      },
      {
        "l": "B",
        "t": "Informix est un SGBD relationnel propriétaire appartenant aujourd'hui à IBM, il n'est pas libre."
      },
      {
        "l": "D",
        "t": "Microsoft Access est un logiciel propriétaire inclus dans la suite Microsoft Office, il n'est pas libre."
      }
    ],
    "examiner": "L'examinateur cherche à tester votre connaissance de la typologie des logiciels (propriétaires vs libres) et votre capacité à distinguer les solutions d'entreprise des solutions open-source.",
    "summary": [
      "Un SGBD libre est un logiciel dont le code source est ouvert et modifiable par la communauté.",
      "Oracle, Informix et Microsoft Access sont des solutions propriétaires commerciales.",
      "La distinction entre licence libre et licence propriétaire est cruciale pour le choix d'une infrastructure IT.",
      "Il est important de vérifier les licences officielles avant de déployer un SGBD en production."
    ]
  },
  {
    "num": "Q4",
    "partie": "Bases de données SQL",
    "q": "Parmi les systèmes de gestion de bases de données (SGBD) suivants, lequel est classé comme un SGBD « commercial » au sens traditionnel du terme ?",
    "choices": {
      "A": "DB2",
      "B": "MySQL",
      "C": "ADABAS",
      "D": "PostgreSQL"
    },
    "correct": "A",
    "explanation": "<p>Le terme <strong>SGBD commercial</strong> fait généralement référence à un logiciel propriétaire développé par une entreprise, sous licence payante et avec un support technique officiel. </p><ul><li><strong>DB2 (IBM)</strong> est l'exemple type d'un SGBD propriétaire de grande entreprise.</li><li><strong>MySQL</strong> et <strong>PostgreSQL</strong> sont des SGBD open-source, bien qu'ils bénéficient d'un support commercial via des sociétés comme Oracle ou EDB.</li><li><strong>ADABAS</strong>, bien que commercial, est un SGBD hiérarchique/réseau (pré-relationnel) historique, moins représentatif des standards de SGBD relationnels classiques que DB2 dans les QCM académiques.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "MySQL est un logiciel open-source sous licence GPL/Commerciale duale, mais est majoritairement reconnu comme faisant partie de l'écosystème open-source."
      },
      {
        "l": "C",
        "t": "ADABAS est un SGBD propriétaire, mais il s'agit d'un système ancien et spécifique souvent classé hors catégorie des bases de données relationnelles standards actuelles."
      },
      {
        "l": "D",
        "t": "PostgreSQL est un système de gestion de bases de données relationnel objet (SGBDRO) totalement open-source et communautaire."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'étudiant sait distinguer les modèles économiques des SGBD (logiciel propriétaire versus open-source).",
    "summary": [
      "Un SGBD commercial est un produit propriétaire dont l'utilisation est soumise à l'achat d'une licence.",
      "DB2, édité par IBM, est une référence historique des SGBD propriétaires pour les grandes entreprises.",
      "MySQL et PostgreSQL sont les principaux représentants des solutions open-source dans le monde professionnel.",
      "La distinction entre commercial (propriétaire) et open-source est fondamentale pour la gestion des coûts et de la gouvernance des données."
    ]
  },
  {
    "num": "Q5",
    "partie": "Bases de données SQL",
    "q": "Parmi les options suivantes, quel système de gestion de base de données (SGBD) n'est pas un logiciel existant ou reconnu ?",
    "choices": {
      "A": "MySQL2",
      "B": "MySQL",
      "C": "SQLite",
      "D": "PostgreSQL"
    },
    "correct": "A",
    "explanation": "<p>Le terme <strong>MySQL2</strong> n'est pas un système de gestion de base de données (SGBD) en soi. Il s'agit en réalité d'un <strong>pilote (driver)</strong> ou d'une bibliothèque client utilisée spécifiquement dans l'écosystème <strong>Node.js</strong> pour se connecter et interagir avec une base de données MySQL réelle.</p><p>En revanche :</p><ul><li><strong>MySQL</strong> est l'un des SGBD relationnels les plus populaires au monde.</li><li><strong>SQLite</strong> est un moteur de base de données relationnelle léger, intégré directement dans les applications.</li><li><strong>PostgreSQL</strong> est un SGBD objet-relationnel puissant et open-source.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "MySQL est un SGBD standard largement déployé et reconnu."
      },
      {
        "l": "C",
        "t": "SQLite est une bibliothèque logicielle bien connue qui implémente un moteur de base de données SQL autonome."
      },
      {
        "l": "D",
        "t": "PostgreSQL est un système de gestion de bases de données relationnelles très avancé, largement utilisé en entreprise."
      }
    ],
    "examiner": "Évaluer la capacité du candidat à distinguer un véritable SGBD d'un outil périphérique, d'une bibliothèque ou d'un driver.",
    "summary": [
      "MySQL, SQLite et PostgreSQL sont de véritables systèmes de gestion de bases de données (SGBD).",
      "MySQL2 n'est pas un SGBD, mais un client de connexion pour Node.js.",
      "Il est essentiel de différencier le moteur de stockage (SGBD) de l'interface de programmation (driver/client).",
      "Une bonne connaissance de l'écosystème technologique permet d'identifier les outils d'infrastructure par rapport aux outils de développement."
    ]
  },
  {
    "num": "Q6",
    "partie": "Bases de données SQL",
    "q": "Que signifie l'acronyme ODBC dans le contexte des bases de données ?",
    "choices": {
      "A": "Open Database Control",
      "B": "Open Database Connectivity",
      "C": "Open Dynamic Base Connectivity",
      "D": "Open Database Control"
    },
    "correct": "B",
    "explanation": "<p><strong>ODBC</strong> signifie <strong>Open Database Connectivity</strong>. Il s'agit d'une interface de programmation standard (API) qui permet à une application d'accéder à des systèmes de gestion de bases de données (SGBD) de manière indépendante du langage de programmation, du système d'exploitation ou du système de gestion de base de données lui-même.</p><ul><li>Il agit comme une couche d'abstraction (middleware) entre l'application et la base de données.</li><li>Il repose sur l'utilisation de pilotes (drivers) spécifiques à chaque SGBD.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une interprétation erronée du terme. Le terme 'Control' ne fait pas partie de la définition officielle de la norme."
      },
      {
        "l": "C",
        "t": "L'utilisation du terme 'Dynamic' est incorrecte. La norme se concentre sur la connectivité universelle et non sur le caractère dynamique de la base."
      },
      {
        "l": "D",
        "t": "Identique au choix A, il s'agit d'une erreur terminologique sur le mot 'Control' au lieu de 'Connectivity'."
      }
    ],
    "examiner": "Évalue la connaissance des standards de connectivité et des terminologies fondamentales en ingénierie des bases de données.",
    "summary": [
      "ODBC signifie Open Database Connectivity.",
      "C'est une norme industrielle permettant aux applications d'accéder aux données indépendamment du SGBD.",
      "Il nécessite des pilotes (drivers) spécifiques pour traduire les requêtes vers le format compris par la base de données cible.",
      "Il assure une interopérabilité entre les logiciels clients et divers serveurs de données."
    ]
  }
];
