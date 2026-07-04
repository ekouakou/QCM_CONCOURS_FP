const QCM = [
  {
    "num": "Q1",
    "partie": "Base de données",
    "q": "Veuillez fournir un exemple de question de QCM valide à transformer, car l'extrait fourni ne contenait pas de question exploitable.",
    "choices": {
      "A": "L'extrait était incomplet et nécessitait une précision.",
      "B": "Le formatage des données sources était incorrect.",
      "C": "La question était absente du texte fourni.",
      "D": "Toutes les réponses ci-dessus sont correctes."
    },
    "correct": "D",
    "explanation": "<p>Pour qu'une analyse de QCM soit pertinente, le texte source doit contenir au minimum un intitulé de question, des options de réponse et un indicateur de la réponse correcte.</p><ul><li><strong>Analyse :</strong> Le manque de contenu dans l'extrait initial empêche toute évaluation technique.</li><li><strong>Concept :</strong> La structure d'un QCM repose sur une relation logique entre un énoncé et ses distracteurs.</li></ul>",
    "wrongAnalysis": [],
    "examiner": "Évaluer la capacité de l'outil à gérer des entrées incomplètes ou invalides en fournissant un exemple pédagogique standard.",
    "summary": [
      "Un QCM nécessite une question claire et sans ambiguïté.",
      "Les distracteurs doivent être plausibles mais techniquement incorrects.",
      "La réponse correcte doit être unique et justifiable.",
      "La structure JSON permet une intégration facilitée dans des plateformes d'apprentissage."
    ]
  },
  {
    "num": "Q2",
    "partie": "Base de données",
    "q": "Lors de la phase de conception d'une base de données, quel est l'objectif principal du niveau conceptuel (MCD) ?",
    "choices": {
      "A": "Recenser et formaliser les règles de gestion et d'organisation des données.",
      "B": "Définir le type de système de gestion de base de données (SGBD) à utiliser.",
      "C": "Définir l'architecture technique de gestion des données.",
      "D": "Définir les protocoles de sécurité et les mots de passe d'accès à la base de données."
    },
    "correct": "A",
    "explanation": "<p>Au niveau <strong>conceptuel</strong> (souvent modélisé par le Modèle Conceptuel de Données - MCD), l'objectif est de représenter les données de manière abstraite sans se soucier des contraintes techniques.</p><ul><li><strong>Recensement des règles :</strong> C'est l'étape fondamentale où l'on identifie les entités, les associations et les règles de gestion (ex: cardinalités) qui régissent l'organisation de l'entreprise.</li><li>Le niveau conceptuel est <strong>indépendant</strong> du choix du SGBD et de toute contrainte d'implémentation matérielle ou logicielle.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le choix du SGBD (Oracle, MySQL, PostgreSQL) intervient au niveau logique ou physique, pas au niveau conceptuel."
      },
      {
        "l": "C",
        "t": "L'architecture technique concerne le niveau physique et l'infrastructure serveur, ce qui est extérieur à la modélisation conceptuelle."
      },
      {
        "l": "D",
        "t": "La sécurité et les droits d'accès sont des préoccupations liées à l'administration et au déploiement physique de la base de données."
      }
    ],
    "examiner": "Évaluer la compréhension des différents niveaux d'abstraction dans la méthode MERISE ou la modélisation de données (Conceptuel vs Logique vs Physique).",
    "summary": [
      "Le niveau conceptuel se concentre uniquement sur la modélisation métier.",
      "Il permet de définir les entités et les associations indépendamment du support technique.",
      "La formalisation des règles de gestion est le cœur de cette étape.",
      "Les choix techniques (SGBD, sécurité, architecture) interviennent lors des phases suivantes."
    ]
  },
  {
    "num": "Q3",
    "partie": "Base de données",
    "q": "Dans le cadre d'un Modèle Conceptuel de Données (MCD), laquelle de ces affirmations est fausse ?",
    "choices": {
      "A": "Une propriété peut se retrouver dans plusieurs endroits du modèle.",
      "B": "Une relation peut relier plus de deux entités (objets).",
      "C": "Une ou plusieurs propriétés permettent d'identifier de manière unique une occurrence d'entité.",
      "D": "La dimension (ou degré) d'une relation correspond au nombre d'entités impliquées dans la liaison."
    },
    "correct": "A",
    "explanation": "<p>Dans un MCD rigoureux, le principe d'<strong>unicité des propriétés</strong> est fondamental pour éviter la redondance et garantir l'intégrité des données.</p><ul><li><strong>Pourquoi A est faux :</strong> Chaque propriété (attribut) doit être définie une seule fois dans le modèle pour une entité donnée. Bien qu'une clé étrangère puisse apparaître dans plusieurs entités, la notion de \"propriété\" au sens MCD appartient exclusivement à une entité.</li><li><strong>Pourquoi B est vrai :</strong> Une relation peut être n-aire (ex: relation ternaire reliant 3 entités).</li><li><strong>Pourquoi C est vrai :</strong> C'est la définition même de l'identifiant (clé primaire).</li><li><strong>Pourquoi D est vrai :</strong> Le degré d'une relation (binaire, ternaire, etc.) est bien défini par le nombre d'entités participantes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "C'est une affirmation vraie : les relations peuvent être ternaires ou plus (n-aires)."
      },
      {
        "l": "C",
        "t": "C'est une affirmation vraie : c'est le rôle de l'identifiant, qui garantit qu'aucune occurrence ne sera dupliquée."
      },
      {
        "l": "D",
        "t": "C'est une affirmation vraie : le degré (ou dimension) d'une association est le nombre d'entités qu'elle lie."
      }
    ],
    "examiner": "Évaluer la compréhension des règles de normalisation et de structuration d'un MCD (Modèle Conceptuel de Données).",
    "summary": [
      "Une propriété ne doit être définie qu'une seule fois dans le modèle pour garantir l'intégrité.",
      "Une relation peut impliquer plus de deux entités (relation n-aire).",
      "L'identifiant est indispensable pour garantir l'unicité de chaque occurrence d'entité.",
      "Le degré d'une relation correspond au nombre d'entités qui y participent."
    ]
  },
  {
    "num": "Q4",
    "partie": "Base de données",
    "q": "Quels sont les éléments essentiels à identifier pour formuler une requête dans une base de données relationnelle ?",
    "choices": {
      "A": "La ou les tables sources à interroger.",
      "B": "La date de création de la base de données.",
      "C": "Les champs (colonnes) que je souhaite extraire ou manipuler.",
      "D": "Le nombre total d'enregistrements contenus dans la base."
    },
    "correct": "A",
    "explanation": "<p>Pour extraire ou manipuler des données avec SQL, il est impératif de définir le contexte :</p><ul><li><strong>La source :</strong> La clause <code>FROM</code> ou <code>JOIN</code> identifie les tables contenant les informations.</li><li><strong>La cible :</strong> La clause <code>SELECT</code> définit les champs spécifiques nécessaires pour répondre au besoin métier.</li></ul><p>Les autres options (date de création ou nombre total d'enregistrements) sont des métadonnées qui ne sont pas nécessaires pour structurer la logique d'une requête de manipulation de données standard.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La date de création est une métadonnée sans impact sur la logique de sélection ou de filtrage des données."
      },
      {
        "l": "C",
        "t": "Bien que les champs soient nécessaires, le choix A est prioritaire car il définit le périmètre source. La question implique un choix multiple implicite, mais dans ce QCM, la structure de la table est l'élément fondamental de départ."
      },
      {
        "l": "D",
        "t": "Le nombre d'enregistrements est une information statistique inutile pour écrire la syntaxe d'une requête SQL."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'étudiant comprend la structure logique fondamentale d'une requête SQL (Identification des sources et des projections).",
    "summary": [
      "Une requête SQL repose sur l'identification claire des sources de données (tables).",
      "La sélection des champs est nécessaire pour restreindre les données retournées.",
      "Les métadonnées administratives (date, volume) sont ignorées lors de la conception de la requête.",
      "La compréhension de la structure relationnelle est le prérequis à toute manipulation de données."
    ]
  },
  {
    "num": "Q5",
    "partie": "Base de données",
    "q": "Quel est le rôle fondamental d'une clé primaire (Primary Key) dans un système de gestion de bases de données relationnelles ?",
    "choices": {
      "A": "Enregistrer physiquement les fichiers de la base de données sur le disque dur.",
      "B": "Identifier de manière unique chaque enregistrement au sein d'une table pour garantir l'intégrité et faciliter l'accès aux données.",
      "C": "Désigner le logiciel ou le système de gestion utilisé pour manipuler la base de données.",
      "D": "Il n'existe pas de définition standard ou de successeur connu à ce jour pour ce concept."
    },
    "correct": "B",
    "explanation": "<p>Dans un modèle relationnel, une <strong>clé primaire</strong> est une colonne (ou un ensemble de colonnes) dont la valeur permet d'identifier de façon unique chaque ligne d'une table.</p><ul><li>Elle garantit l'<strong>unicité</strong> des données (deux lignes ne peuvent avoir la même clé).</li><li>Elle assure l'<strong>intégrité référentielle</strong>, car elle sert de point de référence pour les clés étrangères dans d'autres tables.</li><li>Elle optimise les performances de recherche, car le système crée généralement un index automatique sur cette clé.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le stockage physique est géré par le système de gestion de base de données (SGBD) via des fichiers de données, ce n'est pas le rôle de la clé primaire."
      },
      {
        "l": "C",
        "t": "Le terme pour désigner le programme est SGBD (Système de Gestion de Base de Données), et non clé primaire."
      },
      {
        "l": "D",
        "t": "La notion de clé primaire est un concept fondamental et standardisé du modèle relationnel d'E.F. Codd, toujours utilisé aujourd'hui."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de modélisation relationnelle et l'importance de l'unicité des données.",
    "summary": [
      "Une clé primaire identifie de manière unique chaque enregistrement d'une table.",
      "Elle garantit l'intégrité des données en empêchant les doublons.",
      "Elle est essentielle pour établir des relations entre différentes tables.",
      "Elle permet une indexation efficace pour optimiser les requêtes de recherche."
    ]
  },
  {
    "num": "Q6",
    "partie": "Base de données",
    "q": "Lors de la phase de conception d'une base de données au niveau conceptuel (MCD), quel élément est principalement recensé ?",
    "choices": {
      "A": "Les règles d'organisation",
      "B": "Le type de système de gestion de base de données (SGBD)",
      "C": "Les règles de gestion",
      "D": "L'architecture réseau"
    },
    "correct": "C",
    "explanation": "<p>Au niveau conceptuel, l'objectif est de modéliser la réalité de l'entreprise indépendamment de toute contrainte technique. <strong>Les règles de gestion</strong> constituent le socle de cette modélisation : elles définissent les contraintes, les cardinalités et les associations entre les données métier.</p><ul><li>Les règles de gestion dictent la logique métier.</li><li>Les choix techniques (SGBD, réseau) interviennent uniquement aux niveaux logique (MLD) et physique (MPD).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'organisation est un terme trop vague qui ne correspond pas à la terminologie standard de la modélisation conceptuelle de données."
      },
      {
        "l": "B",
        "t": "Le choix du type de base de données (relationnelle, orientée objet, NoSQL) est une décision technique qui se prend lors du passage au niveau logique ou physique."
      },
      {
        "l": "D",
        "t": "L'architecture réseau concerne l'infrastructure matérielle et la topologie de déploiement, ce qui est totalement étranger à la phase de conception logique des données."
      }
    ],
    "examiner": "Évaluer la compréhension des étapes de modélisation des bases de données et la distinction entre les règles métier et les contraintes techniques.",
    "summary": [
      "Le niveau conceptuel se concentre exclusivement sur les besoins métier et les données.",
      "Les règles de gestion sont indispensables pour définir les cardinalités du modèle.",
      "Le choix des outils techniques est volontairement exclu du niveau conceptuel.",
      "La modélisation conceptuelle précède toujours les phases logique et physique."
    ]
  },
  {
    "num": "Q7",
    "partie": "Base de données",
    "q": "Dans le cadre d'un Modèle Conceptuel de Données (MCD), laquelle des affirmations suivantes est fausse ?",
    "choices": {
      "A": "Une propriété peut être présente dans plusieurs entités du modèle.",
      "B": "Une relation peut lier plus de deux entités.",
      "C": "Une ou plusieurs propriétés permettent d'identifier de manière unique une entité.",
      "D": "La dimension (ou degré) d'une relation correspond au nombre d'entités impliquées dans cette relation."
    },
    "correct": "A",
    "explanation": "<p>Dans la théorie des bases de données relationnelles et la méthode Merise, il est fondamental de respecter le principe de <strong>non-redondance</strong> des données.</p><ul><li>Une propriété doit être rattachée à une seule entité. Si une propriété apparaît dans plusieurs entités, cela indique soit une erreur de conception (redondance), soit que la propriété devrait être transformée en entité ou placée dans une entité parente via un héritage.</li><li>Les autres propositions sont des règles standards du MCD : une relation n-aire peut lier plus de deux entités, une clé primaire identifie une instance, et le degré d'une relation se définit par le nombre d'entités participantes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Faux : Une relation n-aire (ex: ternaire) peut parfaitement lier plus de deux entités."
      },
      {
        "l": "C",
        "t": "Faux : Il s'agit de la définition correcte d'un identifiant (clé primaire) dans un MCD."
      },
      {
        "l": "D",
        "t": "Faux : La définition de la dimension (ou degré) d'une relation est bien le nombre d'entités qui y participent."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension des règles de normalisation et de modélisation conceptuelle, particulièrement la gestion des propriétés et des relations.",
    "summary": [
      "La redondance de données doit être évitée dans un modèle conceptuel.",
      "Chaque propriété doit être associée à une entité unique.",
      "Une relation peut impliquer deux entités (binaire) ou plus (n-aire).",
      "Le degré d'une relation est déterminé par le nombre d'entités qu'elle connecte."
    ]
  },
  {
    "num": "Q8",
    "partie": "Base de données",
    "q": "Qu'est-ce qu'une base de données ?",
    "choices": {
      "A": "Un logiciel de gestion d'applications",
      "B": "Une collection organisée et structurée d'informations",
      "C": "Un module logiciel à valider lors d'une phase de test",
      "D": "Un système d'exploitation de base"
    },
    "correct": "B",
    "explanation": "<p>Une <strong>base de données</strong> est, par définition, un ensemble structuré et organisé de données. Elle permet un accès, une gestion et une mise à jour efficaces des informations.</p><p>Contrairement aux autres options :</p><ul><li>Un logiciel est un outil qui peut <em>utiliser</em> une base de données, mais ce n'est pas la base de données elle-même.</li><li>Un système d'exploitation gère les ressources matérielles et logicielles d'un ordinateur, ce qui est distinct du stockage structuré des données.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un logiciel est un programme informatique. Si le SGBD (Système de Gestion de Base de Données) est effectivement un logiciel, la base de données en elle-même est le contenu informatif."
      },
      {
        "l": "C",
        "t": "C'est un distracteur technique sans rapport avec la définition fondamentale d'un stockage de données."
      },
      {
        "l": "D",
        "t": "Un système d'exploitation (ex: Windows, Linux) est la couche logicielle principale de la machine, il ne doit pas être confondu avec le stockage structuré de l'information."
      }
    ],
    "examiner": "Vérifier la compréhension fondamentale du concept de base de données par rapport aux autres composants logiciels du système d'information.",
    "summary": [
      "Une base de données est une collection organisée de données.",
      "Elle permet le stockage, la manipulation et la récupération efficace des informations.",
      "Ne pas confondre la donnée elle-même avec le logiciel (SGBD) qui permet de la gérer.",
      "La structure est l'élément clé qui différencie une base de données d'un simple fichier de texte."
    ]
  },
  {
    "num": "Q9",
    "partie": "Base de données",
    "q": "Quelle clause est utilisée dans une requête SQL pour filtrer les résultats après un regroupement effectué par la clause GROUP BY ?",
    "choices": {
      "A": "WHERE",
      "B": "ORDER BY",
      "C": "HAVING",
      "D": "LIMIT"
    },
    "correct": "C",
    "explanation": "<p>En SQL, la clause <strong>HAVING</strong> est spécifiquement conçue pour filtrer les résultats issus d'un regroupement. Contrairement à <strong>WHERE</strong>, qui filtre les lignes individuelles <em>avant</em> toute agrégation, <strong>HAVING</strong> s'applique aux groupes formés par <strong>GROUP BY</strong>.</p><ul><li><strong>WHERE</strong> : Filtre les données brutes de la table.</li><li><strong>GROUP BY</strong> : Regroupe les données selon une ou plusieurs colonnes.</li><li><strong>HAVING</strong> : Filtre les groupes en fonction de fonctions d'agrégation (ex: COUNT, SUM, AVG).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "WHERE est utilisé pour filtrer des lignes avant que le regroupement ne soit effectué, il ne peut pas utiliser de fonctions d'agrégation."
      },
      {
        "l": "B",
        "t": "ORDER BY est utilisé pour trier les résultats finaux de la requête et non pour filtrer des groupes."
      },
      {
        "l": "D",
        "t": "LIMIT permet de restreindre le nombre total de lignes retournées par la requête, sans lien avec la logique de regroupement."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la maîtrise de l'ordre d'exécution des clauses SQL et la distinction fondamentale entre le filtrage de lignes (WHERE) et le filtrage de groupes (HAVING).",
    "summary": [
      "La clause WHERE filtre les lignes individuelles avant l'agrégation.",
      "La clause GROUP BY organise les données en ensembles basés sur des valeurs communes.",
      "La clause HAVING est indispensable pour poser des conditions sur des résultats de fonctions d'agrégation (ex: HAVING COUNT(*) > 5).",
      "L'ordre logique d'une requête est : SELECT, FROM, WHERE, GROUP BY, HAVING, ORDER BY."
    ]
  },
  {
    "num": "Q10",
    "partie": "Base de données",
    "q": "Parmi les bases de données système de SQL Server, laquelle est utilisée par l'agent SQL Server pour gérer la planification des tâches, les alertes et les historiques de sauvegarde ?",
    "choices": {
      "A": "master",
      "B": "tempdb",
      "C": "model",
      "D": "msdb"
    },
    "correct": "D",
    "explanation": "<p>Dans SQL Server, la base de données <strong>msdb</strong> (Mail Service Database) joue un rôle central dans les opérations d'automatisation.</p><ul><li>Elle est utilisée par le service <strong>SQL Server Agent</strong>.</li><li>Elle stocke les informations relatives aux tâches planifiées (jobs), aux alertes et aux opérateurs.</li><li>Elle conserve également l'historique de l'exécution des travaux et des sauvegardes effectuées sur le serveur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La base 'master' enregistre les informations de configuration de l'instance SQL Server dans son ensemble, mais ne gère pas les tâches planifiées."
      },
      {
        "l": "B",
        "t": "La base 'tempdb' est un espace de stockage temporaire pour les objets créés par les utilisateurs ou les requêtes internes ; elle est réinitialisée à chaque redémarrage."
      },
      {
        "l": "C",
        "t": "La base 'model' sert de modèle pour la création de toute nouvelle base de données sur l'instance ; elle ne gère aucune fonction d'automatisation."
      }
    ],
    "examiner": "Évalue la connaissance de l'architecture des bases de données système de SQL Server et la compréhension des rôles spécifiques de chaque base dans l'administration du serveur.",
    "summary": [
      "La base 'msdb' est dédiée à la gestion des tâches planifiées et des alertes.",
      "SQL Server Agent dépend directement de la base 'msdb' pour fonctionner.",
      "La base 'master' contient les métadonnées de l'instance globale.",
      "La base 'tempdb' est destinée au stockage temporaire.",
      "La base 'model' sert de gabarit pour la création de bases de données."
    ]
  },
  {
    "num": "Q11",
    "partie": "Base de données",
    "q": "Parmi les outils fournis avec SQL Server 2000, lequel est spécifiquement utilisé pour tester et exécuter des instructions T-SQL, des lots (batches) et des scripts ?",
    "choices": {
      "A": "Enterprise Manager",
      "B": "Utilitaire BCP (Bulk Copy Program)",
      "C": "SCM (Service Control Manager)",
      "D": "OSQL"
    },
    "correct": "D",
    "explanation": "<p>Dans SQL Server 2000, l'utilitaire <strong>osql</strong> est un outil en ligne de commande basé sur ODBC. Il permet aux utilisateurs de se connecter à une instance SQL Server pour envoyer des instructions Transact-SQL, des fichiers de script et des procédures stockées de manière interactive ou automatisée.</p><ul><li><strong>Enterprise Manager</strong> est une interface graphique de gestion (GUI).</li><li><strong>BCP</strong> est dédié aux opérations d'import/export de données en masse.</li><li><strong>SCM</strong> est un composant système Windows pour gérer les services, et non un outil d'exécution T-SQL.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Enterprise Manager est un outil d'administration graphique, non un interpréteur de commandes pour les scripts T-SQL."
      },
      {
        "l": "B",
        "t": "BCP est utilisé pour le transfert de données en masse (bulk copy) et non pour l'exécution de requêtes T-SQL."
      },
      {
        "l": "C",
        "t": "SCM (Service Control Manager) est un composant de Windows utilisé pour démarrer, arrêter et configurer les services SQL Server."
      }
    ],
    "examiner": "Évaluer la connaissance des outils d'administration et de développement en ligne de commande fournis avec l'ancienne version de SQL Server 2000.",
    "summary": [
      "L'utilitaire 'osql' est un outil en ligne de commande pour l'exécution de requêtes SQL Server.",
      "Il permet de manipuler le T-SQL, les scripts et les procédures stockées.",
      "Enterprise Manager est une console graphique d'administration.",
      "BCP est exclusivement réservé au transfert massif de données."
    ]
  },
  {
    "num": "Q12",
    "partie": "Base de données",
    "q": "Parmi les outils graphiques fournis avec SQL Server 2000, lequel est spécifiquement dédié à la création d'objets, à la gestion de la base de données et à l'exécution interactive d'instructions, de lots et de scripts T-SQL ?",
    "choices": {
      "A": "Enterprise Manager",
      "B": "Analyseur de requêtes SQL (SQL Query Analyzer)",
      "C": "Générateur de profils SQL (SQL Profiler)",
      "D": "Gestionnaire des services SQL (SQL Server Service Manager)"
    },
    "correct": "B",
    "explanation": "<p>L'<strong>Analyseur de requêtes SQL</strong> (SQL Query Analyzer) est l'outil phare de SQL Server 2000 pour le développement T-SQL. Il permet aux développeurs de :</p><ul><li>Écrire et exécuter des scripts SQL complexes.</li><li>Analyser les plans d'exécution des requêtes pour optimiser les performances.</li><li>Déboguer des procédures stockées de manière interactive.</li></ul><p>Bien que l'<em>Enterprise Manager</em> permette aussi de gérer des objets, il est davantage orienté vers l'administration globale, contrairement à l'Analyseur qui est centré sur le code.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'Enterprise Manager est une console d'administration globale orientée vers la configuration et la gestion des serveurs, et non un environnement de développement de scripts."
      },
      {
        "l": "C",
        "t": "Le SQL Profiler est un outil de monitoring destiné à capturer et analyser les événements du serveur, et non à écrire ou tester du code T-SQL."
      },
      {
        "l": "D",
        "t": "Le Gestionnaire des services SQL sert uniquement à contrôler l'état (démarrage/arrêt) des services du moteur SQL Server."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier votre connaissance de l'écosystème d'outils SQL Server 2000 et votre capacité à distinguer les fonctions d'administration de celles dédiées au développement.",
    "summary": [
      "L'Analyseur de requêtes SQL est l'outil dédié au développement et au test de scripts T-SQL.",
      "L'Enterprise Manager se concentre sur l'administration et la gestion graphique des objets.",
      "Le SQL Profiler est utilisé pour le diagnostic et le suivi des performances.",
      "Le Gestionnaire de services contrôle l'exécution technique des composants du serveur."
    ]
  },
  {
    "num": "Q13",
    "partie": "Base de données",
    "q": "Parmi les catégories suivantes, laquelle ne fait pas partie des classifications standards des instructions SQL ?",
    "choices": {
      "A": "Langage de définition de données (DDL)",
      "B": "Langage de sélection de données (DSL)",
      "C": "Langage de contrôle de données (DCL)",
      "D": "Langage de manipulation de données (DML)"
    },
    "correct": "B",
    "explanation": "<p>En SQL, les instructions sont regroupées en catégories selon leur fonction :</p><ul><li><strong>DDL (Data Definition Language)</strong> : Pour définir la structure des données (CREATE, ALTER, DROP).</li><li><strong>DML (Data Manipulation Language)</strong> : Pour manipuler les données (INSERT, UPDATE, DELETE).</li><li><strong>DCL (Data Control Language)</strong> : Pour gérer les droits et accès (GRANT, REVOKE).</li><li><strong>TCL (Transaction Control Language)</strong> : Pour gérer les transactions (COMMIT, ROLLBACK).</li></ul><p>Le terme <strong>DSL (Data Selection Language)</strong> n'existe pas dans la norme SQL. Bien que la commande <em>SELECT</em> soit la plus utilisée, elle est techniquement classée dans le <strong>DQL (Data Query Language)</strong>, ou parfois incluse dans le DML selon les auteurs.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le DDL est une catégorie fondamentale du SQL utilisée pour définir les objets de la base."
      },
      {
        "l": "C",
        "t": "Le DCL est une catégorie standard pour la gestion de la sécurité et des privilèges."
      },
      {
        "l": "D",
        "t": "Le DML est une catégorie essentielle pour la modification et l'insertion de données."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'étudiant connaît les classifications officielles et normalisées du langage SQL.",
    "summary": [
      "Le SQL se divise principalement en DDL, DML, DCL et TCL.",
      "Il n'existe pas de catégorie nommée DSL (Data Selection Language) en SQL.",
      "L'instruction SELECT appartient techniquement au DQL (Data Query Language).",
      "Connaître ces classifications est essentiel pour comprendre les droits et les opérations sur les bases de données."
    ]
  },
  {
    "num": "Q14",
    "partie": "Base de données",
    "q": "Parmi les instructions SQL suivantes, laquelle permet d'accorder des privilèges ou des permissions à un utilisateur sur un objet de base de données ?",
    "choices": {
      "A": "ADD",
      "B": "PLUS",
      "C": "GRANT",
      "D": "REVOKE"
    },
    "correct": "C",
    "explanation": "<p>En langage SQL, le contrôle d'accès est géré par des instructions spécifiques appelées <strong>DCL (Data Control Language)</strong>.</p><p>La commande <strong>GRANT</strong> est utilisée pour donner explicitement des droits (SELECT, INSERT, UPDATE, DELETE, etc.) à un utilisateur ou à un rôle sur des objets spécifiques de la base de données (tables, vues, procédures, etc.).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "ADD n'est pas une commande SQL standard utilisée pour la gestion des droits d'accès."
      },
      {
        "l": "B",
        "t": "PLUS n'est pas une instruction SQL existante."
      },
      {
        "l": "D",
        "t": "REVOKE est l'opposé de GRANT : elle sert à retirer des privilèges déjà accordés, et non à les attribuer."
      }
    ],
    "examiner": "Vérifier la maîtrise du langage de contrôle de données (DCL) en SQL.",
    "summary": [
      "La commande GRANT est utilisée pour accorder des droits d'accès.",
      "La commande REVOKE est utilisée pour supprimer des droits d'accès.",
      "Ces deux commandes appartiennent à la catégorie DCL (Data Control Language).",
      "Le contrôle d'accès est essentiel pour assurer la sécurité et l'intégrité des données."
    ]
  },
  {
    "num": "Q15",
    "partie": "Base de données",
    "q": "Quelle instruction SQL est utilisée pour modifier la structure d'un objet de base de données, tel qu'une table ?",
    "choices": {
      "A": "CREATE",
      "B": "MODIFY",
      "C": "ALTER",
      "D": "UPDATE"
    },
    "correct": "C",
    "explanation": "<p>En SQL, les commandes sont classées par catégories (DDL, DML, DCL). Pour modifier la <strong>structure</strong> (le schéma) d'un objet existant comme une table, on utilise le langage de définition de données (DDL).</p><ul><li><strong>ALTER</strong> est la commande DDL dédiée à la modification de la structure (ex: ajouter une colonne, changer un type).</li><li><strong>UPDATE</strong> est une commande DML (Data Manipulation Language) qui sert à modifier le <em>contenu</em> (les données) des lignes, et non la structure elle-même.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "CREATE est utilisé pour créer un nouvel objet, pas pour en modifier un existant."
      },
      {
        "l": "B",
        "t": "MODIFY n'est pas une instruction SQL standard pour la modification de schéma (bien qu'elle soit parfois utilisée comme clause interne dans certaines syntaxes spécifiques)."
      },
      {
        "l": "D",
        "t": "UPDATE est une commande DML qui permet de modifier les enregistrements (données) contenus dans une table, et non la structure de la table elle-même."
      }
    ],
    "examiner": "Évaluer la capacité du candidat à distinguer les commandes DDL (Data Definition Language) des commandes DML (Data Manipulation Language).",
    "summary": [
      "ALTER permet de modifier la structure d'un objet de base de données.",
      "CREATE est réservé à la création d'objets.",
      "UPDATE sert uniquement à modifier les données (lignes) à l'intérieur d'une table.",
      "La distinction entre DDL (structure) et DML (données) est fondamentale en SQL."
    ]
  },
  {
    "num": "Q16",
    "partie": "Base de données",
    "q": "Quelle instruction SQL est utilisée pour insérer de nouvelles lignes de données dans une table ?",
    "choices": {
      "A": "ADD",
      "B": "INSERT",
      "C": "ADDNEW",
      "D": "PLUS"
    },
    "correct": "B",
    "explanation": "<p>En langage SQL (Structured Query Language), l'instruction <strong>INSERT INTO</strong> est la commande standard utilisée pour ajouter de nouvelles entrées dans une table de base de données.</p><ul><li>La syntaxe de base est : <code>INSERT INTO nom_table (colonne1, colonne2) VALUES (valeur1, valeur2);</code></li><li>Cette commande permet de spécifier les colonnes cibles et les valeurs correspondantes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'instruction ADD est généralement utilisée en SQL pour modifier la structure d'une table (par exemple via ALTER TABLE ADD COLUMN), mais pas pour insérer des données."
      },
      {
        "l": "C",
        "t": "ADDNEW n'est pas une instruction SQL valide. Il s'agit souvent d'une confusion avec des méthodes existant dans certains frameworks ou langages de programmation (comme en VBA/ADO)."
      },
      {
        "l": "D",
        "t": "PLUS n'est pas une commande SQL. Il s'agit d'un opérateur mathématique qui n'a aucun rôle dans la manipulation de données au sein d'une instruction DML (Data Manipulation Language)."
      }
    ],
    "examiner": "Évaluer la connaissance fondamentale des commandes DML (Data Manipulation Language) du langage SQL.",
    "summary": [
      "L'instruction SQL pour ajouter des enregistrements est INSERT INTO.",
      "ADD n'est pas utilisé pour insérer des lignes, mais pour altérer la structure d'une table.",
      "Une bonne maîtrise du DML est essentielle pour la gestion des données.",
      "Il ne faut pas confondre les commandes SQL standards avec des méthodes spécifiques à certains langages de développement."
    ]
  },
  {
    "num": "Q17",
    "partie": "Base de données",
    "q": "Parmi les options suivantes, laquelle ne correspondait pas à une édition officielle de Microsoft SQL Server 2000 ?",
    "choices": {
      "A": "SQL Server Developer Edition",
      "B": "SQL Server Professional Edition",
      "C": "SQL Server Standard Edition",
      "D": "SQL Server Personal Edition"
    },
    "correct": "B",
    "explanation": "<p>La version <strong>SQL Server 2000</strong> proposait plusieurs éditions spécifiques pour répondre à différents besoins de déploiement et de licences.</p><ul><li><strong>Developer Edition</strong> : destinée aux développeurs pour créer et tester des applications.</li><li><strong>Standard Edition</strong> : conçue pour les besoins des petites et moyennes entreprises.</li><li><strong>Personal Edition</strong> : destinée aux applications mobiles ou aux postes de travail individuels.</li><li><strong>Enterprise Edition</strong> : l'édition complète pour les environnements à grande échelle.</li></ul><p>Il n'a jamais existé d'édition nommée <strong>\"Professional\"</strong> pour SQL Server 2000.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La Developer Edition existait bien, elle offrait toutes les fonctionnalités de l'édition Enterprise pour le développement."
      },
      {
        "l": "C",
        "t": "La Standard Edition était une version courante, limitée en termes de capacité de processeur et de mémoire par rapport à l'Enterprise."
      },
      {
        "l": "D",
        "t": "La Personal Edition était une version spécifique utilisée pour les déploiements sur des machines isolées ou des applications locales."
      }
    ],
    "examiner": "Évaluer la connaissance historique des éditions et des modèles de licences de la suite logicielle SQL Server 2000.",
    "summary": [
      "SQL Server 2000 comportait plusieurs éditions : Enterprise, Standard, Personal et Developer.",
      "L'appellation 'Professional' n'a jamais été utilisée pour SQL Server 2000.",
      "Le choix des éditions permettait de segmenter le marché en fonction des capacités matérielles et des usages (serveur vs poste de travail).",
      "La confusion vient souvent de la gamme Windows qui, elle, utilisait fréquemment l'appellation 'Professional'."
    ]
  },
  {
    "num": "Q18",
    "partie": "Base de données",
    "q": "En utilisant la structure de la table EMPLOYEES, quelle instruction SQL permet de retourner le salaire maximum payé pour chaque département (DEPT_ID) et chaque catégorie d'emploi (JOB_CAT) ?",
    "choices": {
      "A": "SELECT DEPT_ID, JOB_CAT, MAX(SALARY) FROM EMPLOYEES WHERE SALARY > MAX(SALARY);",
      "B": "SELECT DEPT_ID, JOB_CAT, MAX(SALARY) FROM EMPLOYEES GROUP BY DEPT_ID, JOB_CAT;",
      "C": "SELECT DEPT_ID, JOB_CAT, MAX(SALARY) FROM EMPLOYEES;",
      "D": "SELECT DEPT_ID, JOB_CAT, MAX(SALARY) FROM EMPLOYEES GROUP BY DEPT_ID;"
    },
    "correct": "B",
    "explanation": "<p>Pour obtenir un agrégat (ici le salaire maximum) calculé par groupe, il est indispensable d'utiliser la clause <strong>GROUP BY</strong> incluant toutes les colonnes non agrégées présentes dans le <code>SELECT</code>.</p><ul><li>La clause <strong>GROUP BY DEPT_ID, JOB_CAT</strong> permet de segmenter les données par département puis par catégorie.</li><li>La fonction <strong>MAX(SALARY)</strong> calcule ensuite le maximum pour chaque segment ainsi défini.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'utilisation d'une fonction d'agrégation (MAX) dans une clause WHERE est syntaxiquement incorrecte, car les fonctions d'agrégation ne peuvent être évaluées qu'après le regroupement."
      },
      {
        "l": "C",
        "t": "Cette requête est invalide car elle tente de sélectionner des colonnes non agrégées (DEPT_ID, JOB_CAT) sans clause GROUP BY, ce qui provoque une erreur de non-groupement."
      },
      {
        "l": "D",
        "t": "Le regroupement est incomplet : il manque la colonne JOB_CAT dans la clause GROUP BY, ce qui rend la requête invalide puisque JOB_CAT figure dans le SELECT."
      }
    ],
    "examiner": "Évaluer la maîtrise du regroupement de données (GROUP BY) et de l'utilisation correcte des fonctions d'agrégation SQL.",
    "summary": [
      "La clause GROUP BY est obligatoire pour utiliser des fonctions d'agrégation sur des catégories.",
      "Toute colonne présente dans le SELECT qui n'est pas sous une fonction d'agrégation doit obligatoirement figurer dans le GROUP BY.",
      "Les fonctions d'agrégation ne sont jamais autorisées dans la clause WHERE.",
      "La syntaxe SQL nécessite une structure précise (SELECT, FROM, GROUP BY) pour le traitement de données groupées."
    ]
  },
  {
    "num": "Q19",
    "partie": "Base de données",
    "q": "La direction de votre entreprise souhaite obtenir une liste incluant le nom de famille des employés ainsi que le montant total des commissions annuelles, calculé selon la formule suivante : salaire * taux_de_commission * 12. Quelle instruction SQL permet d'obtenir ce résultat à partir de la table 'Emp' ?",
    "choices": {
      "A": "SELECT last_name, 12 * salary * commission_pct FROM emp;",
      "B": "SELECT last_name, 12 * (salary + commission_pct) FROM emp;",
      "C": "SELECT last_name, 12 * salary + commission_pct FROM emp;",
      "D": "SELECT last_name, 12 * salary FROM emp;"
    },
    "correct": "A",
    "explanation": "<p>Pour calculer une valeur basée sur une multiplication, il faut appliquer l'opérateur arithmétique <strong>*</strong> sur les colonnes concernées. Dans le cadre de cet énoncé, nous devons multiplier le salaire par le taux de commission, puis par le nombre de mois dans l'année (12).</p><ul><li>La syntaxe SQL standard pour une projection est <code>SELECT colonne1, expression FROM table;</code>.</li><li>Le choix A respecte la logique mathématique demandée : <em>salaire × taux × 12</em>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Cette option effectue une addition avant la multiplication, ce qui est mathématiquement incorrect selon la formule fournie."
      },
      {
        "l": "C",
        "t": "Cette option applique la priorité des opérations de manière erronée en ajoutant le taux de commission au produit du salaire et des 12 mois."
      },
      {
        "l": "D",
        "t": "Cette option omet totalement le facteur 'commission_pct' dans le calcul, ne retournant que le salaire annuel."
      }
    ],
    "examiner": "Évaluer la maîtrise des opérateurs arithmétiques en SQL et la compréhension de la priorité des opérations dans une requête de type SELECT.",
    "summary": [
      "La multiplication s'effectue avec l'opérateur étoile (*) en SQL.",
      "La priorité des opérations respecte les règles mathématiques standards (parenthèses, multiplication, addition).",
      "Une virgule ne doit jamais précéder le mot-clé FROM dans une requête SELECT.",
      "Il est crucial de valider les noms de colonnes et la logique métier avant d'exécuter une requête de calcul."
    ]
  },
  {
    "num": "Q20",
    "partie": "Base de données",
    "q": "Dans le cadre de la modélisation conceptuelle des données (Modèle Entité-Association), comment peut-on définir précisément une entité ?",
    "choices": {
      "A": "Un objet ou un individu ayant une existence propre.",
      "B": "Une collection de propriétés significativement associées.",
      "C": "La représentation d’une entreprise.",
      "D": "La représentation d’un objet du monde réel (conception concrète ou abstraite) perçu par le concepteur et ayant une existence propre."
    },
    "correct": "D",
    "explanation": "<p>En modélisation de données, une <strong>entité</strong> (ou type-entité) est l'élément fondamental de base. Elle désigne un objet, un concept, une personne ou un événement du monde réel qui présente un intérêt pour le système d'information.</p><ul><li>Elle possède une <strong>existence propre</strong> au sein du contexte de l'étude.</li><li>Elle peut être <strong>concrète</strong> (ex: Client, Produit) ou <strong>abstraite</strong> (ex: Commande, Compte bancaire).</li><li>Elle est distinguée des autres par un identifiant unique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que partiellement correcte, cette définition est trop vague. Une entité ne se limite pas aux individus ou objets physiques, elle inclut aussi des concepts abstraits."
      },
      {
        "l": "B",
        "t": "Ceci définit plutôt le concept d'attributs ou de relation, ou plus spécifiquement le contenu d'un enregistrement, mais ne qualifie pas l'entité elle-même dans sa structure."
      },
      {
        "l": "C",
        "t": "C'est une confusion fréquente : l'entreprise est le périmètre global de l'étude, pas l'entité individuelle elle-même."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat maîtrise les définitions fondamentales de la méthode Merise ou de la modélisation conceptuelle des données (MCD) et s'il est capable de distinguer une définition technique précise d'une définition générique.",
    "summary": [
      "Une entité représente un objet ou concept pertinent dans le système d'information.",
      "L'entité possède une existence propre et une identité distincte des autres éléments.",
      "Elle peut être physique ou abstraite, selon les besoins de la modélisation.",
      "L'identification est le critère clé qui différencie une entité d'une simple occurrence de données."
    ]
  },
  {
    "num": "Q21",
    "partie": "Base de données",
    "q": "Quelle est la définition précise de l'identifiant (ou clé primaire) d'une entité dans un modèle conceptuel de données ?",
    "choices": {
      "A": "Un attribut souligné.",
      "B": "Une propriété ou un groupe de propriétés permettant de décrire une information.",
      "C": "Une propriété ou un groupe de propriétés permettant de déterminer de manière unique toute autre propriété de l'entité, sans réciprocité directe.",
      "D": "Une propriété particulière d'une entité."
    },
    "correct": "C",
    "explanation": "<p>En modélisation conceptuelle, l'<strong>identifiant</strong> d'une entité est une propriété (ou un ensemble de propriétés) qui permet de désigner un et un seul exemplaire (occurrence) de cette entité.</p><ul><li>Il doit être <strong>unique</strong> pour chaque occurrence.</li><li>Il permet de déterminer la valeur de tous les autres attributs de l'entité.</li><li>La réciproque n'est pas vraie : connaître les autres attributs ne permet pas toujours de déduire l'identifiant.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci est la représentation graphique de l'identifiant dans un diagramme entité-association, et non sa définition conceptuelle."
      },
      {
        "l": "B",
        "t": "Cette définition correspond à celle d'un attribut classique, qui sert à caractériser l'entité sans pour autant l'identifier de manière unique."
      },
      {
        "l": "D",
        "t": "Cette définition est trop vague ; toutes les propriétés sont techniquement « particulières » à l'entité, mais elles n'ont pas toutes un rôle d'identification."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant comprend le rôle fonctionnel et logique de la clé primaire (unicité et déterminisme) au-delà de sa simple représentation visuelle.",
    "summary": [
      "L'identifiant assure l'unicité de chaque occurrence d'une entité.",
      "Il possède un pouvoir de détermination sur tous les autres attributs de l'entité.",
      "La relation de dépendance fonctionnelle est unidirectionnelle vers l'identifiant.",
      "Le soulignement est une convention de notation, pas la définition théorique."
    ]
  },
  {
    "num": "Q22",
    "partie": "Base de données",
    "q": "Vous concevez une base de données pour un inventaire de magasin de chaussures. Chaque style de chaussure possède un identifiant unique (productID). La table actuelle ne contient que le productID et la quantité en stock. Comment modifier la structure de la base de données pour permettre d'identifier la disponibilité des pointures pour chaque style de chaussure ?",
    "choices": {
      "A": "Définir productID comme clé primaire de la table Chaussure.",
      "B": "Ajouter une colonne pointure et définir cette dernière comme clé primaire.",
      "C": "Ajouter une colonne pointure et définir productID comme clé primaire.",
      "D": "Ajouter une colonne pointure et définir la combinaison (productID, pointure) comme clé primaire composée."
    },
    "correct": "D",
    "explanation": "<p>Pour modéliser correctement cette relation, il est nécessaire de comprendre la notion de <strong>clé primaire composée</strong>.</p><ul><li>Un <strong>productID</strong> seul ne suffit pas à identifier une ligne unique si l'on veut distinguer les stocks par pointure, car un même style existe en plusieurs pointures.</li><li>En combinant <strong>productID</strong> et <strong>pointure</strong>, on crée un identifiant unique pour chaque ligne (par exemple, la référence X associée à la pointure 42).</li><li>Cette configuration garantit l'intégrité des données et permet de lier précisément la quantité en stock à une pointure spécifique pour un modèle donné.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le productID seul ne permet pas de distinguer les différentes pointures d'un même style dans la table."
      },
      {
        "l": "B",
        "t": "La pointure n'est pas un identifiant unique par elle-même, car plusieurs modèles de chaussures peuvent partager la même pointure."
      },
      {
        "l": "C",
        "t": "Même si l'on ajoute la colonne pointure, si seul le productID est clé primaire, on ne peut pas avoir plusieurs lignes pour le même productID avec des pointures différentes (ou cela violerait l'unicité de la clé)."
      }
    ],
    "examiner": "L'examinateur cherche à évaluer votre compréhension de la modélisation relationnelle et votre capacité à choisir une clé primaire adaptée (simple vs composée) en fonction des contraintes métier.",
    "summary": [
      "Une clé primaire unique permet d'identifier de manière certaine chaque enregistrement d'une table.",
      "Lorsque l'unicité dépend de plusieurs attributs, on utilise une clé primaire composée.",
      "La combinaison (productID, pointure) est indispensable pour gérer des variations multiples d'un même produit.",
      "Une bonne structure de table évite les redondances et permet des requêtes précises sur les stocks."
    ]
  },
  {
    "num": "Q23",
    "partie": "Base de données",
    "q": "Lors de l'installation d'une instance SQL Server, quel fichier de log enregistre spécifiquement les erreurs survenues durant la phase de configuration ?",
    "choices": {
      "A": "Sqlstp.log",
      "B": "Setup.log",
      "C": "searchSetup.log",
      "D": "errorlog"
    },
    "correct": "B",
    "explanation": "<p>Lors de l'installation de SQL Server, le processus génère plusieurs journaux pour faciliter le débogage. Le fichier <strong>Setup.log</strong> est le journal principal qui documente les actions entreprises par le programme d'installation durant la configuration.</p><ul><li><strong>Sqlstp.log</strong> est généralement utilisé pour les composants de configuration SQL spécifiques à l'installation des outils de support.</li><li><strong>errorlog</strong> est un journal interne au moteur de base de données SQL Server, généré une fois que l'instance est opérationnelle.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Sqlstp.log est un fichier de journalisation spécifique aux outils de support de configuration, mais il ne centralise pas les erreurs globales de l'installation."
      },
      {
        "l": "C",
        "t": "searchSetup.log est un fichier générique sans rapport avec les erreurs critiques du moteur SQL Server."
      },
      {
        "l": "D",
        "t": "Le fichier 'errorlog' est créé par le moteur SQL Server uniquement après le démarrage réussi du service, il n'existe pas durant la phase initiale d'installation."
      }
    ],
    "examiner": "Évaluer la connaissance de l'administrateur système sur la localisation des fichiers de logs pour le dépannage d'une installation SQL Server.",
    "summary": [
      "Le fichier Setup.log est le point de départ pour analyser les erreurs d'installation.",
      "L'erreur 'errorlog' concerne le fonctionnement interne du moteur SQL Server, et non l'installation.",
      "La distinction entre les logs d'installation et les logs d'instance est essentielle pour le dépannage.",
      "Le nom du fichier de log dépend de l'étape du déploiement."
    ]
  },
  {
    "num": "Q24",
    "partie": "Base de données",
    "q": "Quelle est la fréquence de processeur minimale recommandée pour l'installation d'une version classique de SQL Server (historiquement basée sur les spécifications de SQL Server 2000/2005) ?",
    "choices": {
      "A": "66 MHz",
      "B": "100 MHz",
      "C": "133 MHz",
      "D": "166 MHz"
    },
    "correct": "D",
    "explanation": "<p>Historiquement, pour les versions de SQL Server du début des années 2000, la configuration minimale requise pour le processeur était fixée à <strong>166 MHz</strong>.</p><p>Bien que ces spécifications soient aujourd'hui obsolètes face aux processeurs modernes (GHz), cette question évalue la connaissance des prérequis techniques des versions legacy qui ont posé les bases de l'architecture SQL Server actuelle.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "66 MHz était une vitesse très faible, insuffisante pour gérer les processus de base de données SQL Server dès la fin des années 90."
      },
      {
        "l": "B",
        "t": "100 MHz était une vitesse courante pour le processeur Pentium, mais elle restait en deçà des préconisations minimales pour garantir la stabilité de l'instance SQL."
      },
      {
        "l": "C",
        "t": "133 MHz est une valeur proche du seuil, mais elle ne répondait pas aux exigences certifiées par l'éditeur pour l'installation du moteur de base de données."
      }
    ],
    "examiner": "L'examinateur cherche à évaluer votre connaissance des prérequis système historiques et la capacité à identifier les spécifications techniques de base nécessaires au déploiement d'une instance SQL Server.",
    "summary": [
      "Les prérequis système pour SQL Server incluent toujours une fréquence de processeur minimale.",
      "La valeur historique de référence pour les versions anciennes était de 166 MHz.",
      "La connaissance des prérequis permet d'anticiper la compatibilité matérielle lors des installations.",
      "Le respect des configurations matérielles minimales est crucial pour la performance et la stabilité du moteur de base de données."
    ]
  },
  {
    "num": "Q25",
    "partie": "Base de données",
    "q": "Quel service de SQL Server est responsable de l'exécution des tâches administratives programmées ?",
    "choices": {
      "A": "MS DTC (Microsoft Distributed Transaction Coordinator)",
      "B": "SQL Server Agent",
      "C": "MS SQL Server (Moteur de base de données)",
      "D": "Open Data Service (ODS)"
    },
    "correct": "B",
    "explanation": "<p>Le service <strong>SQL Server Agent</strong> est un service Windows qui exécute les travaux planifiés (jobs), les alertes et les tâches de maintenance au sein d'une instance SQL Server.</p><ul><li>Il gère la planification via l'utilitaire <em>SQL Server Agent</em>.</li><li>Il permet l'automatisation des sauvegardes, des scripts de nettoyage et de la réplication.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le MS DTC gère les transactions distribuées entre plusieurs serveurs, pas la planification des tâches."
      },
      {
        "l": "C",
        "t": "Le moteur SQL Server est le service principal qui gère le stockage et l'accès aux données, mais ne gère pas nativement la planification des travaux."
      },
      {
        "l": "D",
        "t": "Open Data Service est une ancienne technologie obsolète utilisée dans les versions primitives de SQL Server pour les connexions, sans rapport avec l'automatisation."
      }
    ],
    "examiner": "Évaluer la connaissance de l'architecture des services SQL Server et de leur rôle respectif dans l'administration système.",
    "summary": [
      "SQL Server Agent est le planificateur de tâches de Microsoft SQL Server.",
      "Il est indispensable pour automatiser les sauvegardes et la maintenance.",
      "Il fonctionne comme un service Windows distinct du moteur de base de données.",
      "Il permet la configuration d'alertes en cas d'échec de travaux planifiés."
    ]
  },
  {
    "num": "Q26",
    "partie": "Base de données",
    "q": "Lequel des éléments suivants ne figurait pas parmi les éditions disponibles pour Microsoft SQL Server 2000 ?",
    "choices": {
      "A": "SQL Server 2000 Developer Edition",
      "B": "SQL Server 2000 Professional Edition",
      "C": "SQL Server 2000 Standard Edition",
      "D": "SQL Server 2000 Personal Edition"
    },
    "correct": "B",
    "explanation": "<p>Microsoft <strong>SQL Server 2000</strong> a été commercialisé dans plusieurs éditions spécifiques pour répondre à des besoins variés. Les éditions officielles étaient :</p><ul><li><strong>Enterprise Edition</strong> : Pour les déploiements à grande échelle.</li><li><strong>Standard Edition</strong> : Pour les besoins de PME.</li><li><strong>Developer Edition</strong> : Pour le développement et les tests.</li><li><strong>Personal Edition</strong> : Pour les postes clients isolés ou les petites applications.</li><li><strong>Desktop Engine (MSDE)</strong> : Pour l'intégration dans des applications tierces.</li></ul><p>Il n'a jamais existé d'édition nommée <strong>\"Professional Edition\"</strong> pour SQL Server 2000.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'édition Developer existait bien ; elle permettait aux développeurs de créer et tester des applications avec les fonctionnalités de l'édition Enterprise."
      },
      {
        "l": "C",
        "t": "L'édition Standard était une offre courante pour les serveurs de bases de données de taille moyenne."
      },
      {
        "l": "D",
        "t": "L'édition Personal était destinée à une utilisation mobile ou à des bases de données installées sur des postes de travail non serveurs."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance historique des déclinaisons de produits de la gamme SQL Server 2000 et la capacité à identifier une appellation commerciale erronée.",
    "summary": [
      "SQL Server 2000 proposait des éditions spécialisées selon l'usage.",
      "L'édition 'Professional' n'a jamais fait partie de la gamme SQL Server 2000.",
      "Les éditions principales étaient Enterprise, Standard, Developer et Personal.",
      "Le choix B est un intrus basé sur une terminologie courante dans d'autres logiciels Microsoft mais absente ici."
    ]
  }
];
