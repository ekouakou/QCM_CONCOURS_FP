const QCM = [
  {
    "num": "Q1",
    "partie": "Administration SQL Server",
    "q": "Parmi les outils graphiques de SQL Server 2000, lequel permet de démarrer, de suspendre ou d'arrêter les services SQL sur une machine distante ?",
    "choices": {
      "A": "Utilitaire réseau client",
      "B": "Analyseur de requêtes SQL (SQL Query Analyzer)",
      "C": "Générateur de profils SQL (SQL Profiler)",
      "D": "Gestionnaire des Services SQL (SQL Server Service Manager)"
    },
    "correct": "D",
    "explanation": "<p>Dans SQL Server 2000, le <strong>Gestionnaire des Services SQL</strong> (SQL Server Service Manager) était l'utilitaire dédié à la gestion de l'état des services liés à SQL Server.</p><ul><li>Il offrait une interface graphique simple permettant de visualiser l'état (démarré, arrêté, suspendu).</li><li>Il permettait d'agir sur le service SQL Server lui-même, mais aussi sur le SQL Server Agent et l'Explorateur de recherche (MS Search).</li><li>Il supportait nativement la connexion à des serveurs distants via le réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'Utilitaire réseau client sert à configurer les bibliothèques réseau et les protocoles de communication, et non à gérer l'état du service."
      },
      {
        "l": "B",
        "t": "L'Analyseur de requêtes est utilisé pour écrire, tester et déboguer des instructions SQL, pas pour administrer les services système."
      },
      {
        "l": "C",
        "t": "Le Générateur de profils SQL (SQL Profiler) est un outil de monitoring destiné à capturer des événements et analyser les performances, sans fonction de contrôle de services."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la connaissance des utilitaires d'administration système spécifiques à l'architecture de SQL Server 2000.",
    "summary": [
      "Le Gestionnaire des Services SQL était l'outil standard pour le contrôle des états des services SQL en 2000.",
      "Il permettait une gestion centralisée et distante des services critiques comme SQL Server et SQL Server Agent.",
      "Les autres outils cités se concentrent soit sur la configuration réseau, soit sur le développement SQL ou le monitoring de performances."
    ]
  },
  {
    "num": "Q2",
    "partie": "Administration SQL Server",
    "q": "Parmi les bases de données système de Microsoft SQL Server, laquelle est spécifiquement utilisée par l'Agent SQL Server pour gérer la planification des tâches, les alertes et les opérateurs ?",
    "choices": {
      "A": "master",
      "B": "tempdb",
      "C": "model",
      "D": "msdb"
    },
    "correct": "D",
    "explanation": "<p>La base de données <strong>msdb</strong> est le pivot de l'automatisation dans SQL Server. Elle joue un rôle crucial dans les fonctionnalités suivantes :</p><ul><li><strong>SQL Server Agent :</strong> Stockage des informations sur les tâches (jobs), les alertes et les opérateurs.</li><li><strong>Maintenance :</strong> Gestion des plans de maintenance.</li><li><strong>Sauvegarde et Restauration :</strong> Historique complet des opérations de backup et de restore.</li><li><strong>Service Broker :</strong> Gestion de la messagerie asynchrone entre bases de données.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La base 'master' enregistre les informations globales du serveur, les connexions et les configurations d'instance, mais pas les tâches planifiées."
      },
      {
        "l": "B",
        "t": "La base 'tempdb' est un espace de travail temporaire qui est recréé à chaque redémarrage du service ; elle ne conserve pas de données persistantes comme des plannings."
      },
      {
        "l": "C",
        "t": "La base 'model' sert de template (modèle) pour la création de nouvelles bases de données utilisateur ; elle n'est pas utilisée pour l'administration des tâches."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier vos connaissances sur l'architecture et les rôles des bases de données système de SQL Server.",
    "summary": [
      "La base 'msdb' est dédiée à l'Agent SQL Server et à ses composants de planification.",
      "Toute tâche planifiée ou alerte générée par le système est enregistrée dans msdb.",
      "L'historique des sauvegardes est conservé dans msdb pour permettre la restauration.",
      "La base 'master' gère la configuration globale, contrairement à 'msdb' qui gère l'exécution des processus."
    ]
  },
  {
    "num": "Q3",
    "partie": "Administration SQL Server",
    "q": "Parmi les outils de SQL Server 2000, lequel est spécifiquement utilisé pour l'exécution et le test d'instructions T-SQL, de lots (batches) et de scripts ?",
    "choices": {
      "A": "Enterprise Manager",
      "B": "Utilitaire BCP",
      "C": "SCM (Service Control Manager)",
      "D": "osql"
    },
    "correct": "D",
    "explanation": "<p>L'outil <strong>osql</strong> est un utilitaire en ligne de commande introduit avec SQL Server 2000 permettant d'envoyer des requêtes Transact-SQL (T-SQL) au moteur de base de données.</p><p>Il permet aux administrateurs de :</p><ul><li>Exécuter des scripts SQL de manière interactive ou automatisée.</li><li>Tester rapidement des instructions T-SQL sans interface graphique.</li><li>Gérer des lots d'instructions complexes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Enterprise Manager est l'interface graphique de gestion (GUI) et non un outil en ligne de commande pour le scripting."
      },
      {
        "l": "B",
        "t": "L'utilitaire BCP (Bulk Copy Program) est dédié exclusivement à l'importation et à l'exportation massive de données."
      },
      {
        "l": "C",
        "t": "SCM (Service Control Manager) est une fonction du système d'exploitation Windows pour gérer les services, et non un outil propre au SQL."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance des outils d'administration système et des interfaces en ligne de commande propres aux versions historiques de SQL Server.",
    "summary": [
      "L'utilitaire 'osql' est l'outil en ligne de commande standard pour exécuter du code T-SQL.",
      "Il est particulièrement utile pour automatiser des tâches via des fichiers de scripts.",
      "Contrairement à Enterprise Manager, il ne nécessite pas d'interface graphique et peut être utilisé dans des fichiers batch (.bat).",
      "Bien que déprécié dans les versions ultérieures au profit de sqlcmd, il reste fondamental pour comprendre l'administration de SQL Server 2000."
    ]
  },
  {
    "num": "Q4",
    "partie": "Administration SQL Server",
    "q": "Parmi les outils graphiques de SQL Server 2000, lequel est utilisé pour la création, la gestion des objets de base de données, ainsi que pour le test interactif d'instructions T-SQL, de lots et de scripts ?",
    "choices": {
      "A": "Enterprise Manager",
      "B": "Analyseur de requêtes SQL (SQL Query Analyzer)",
      "C": "Générateur de profils SQL (SQL Profiler)",
      "D": "Gestionnaire des services SQL (SQL Server Service Manager)"
    },
    "correct": "B",
    "explanation": "<p>Dans SQL Server 2000, l'<strong>Analyseur de requêtes SQL (SQL Query Analyzer)</strong> est l'outil spécifique conçu pour interagir directement avec le moteur de base de données.</p><ul><li>Il permet de rédiger, déboguer et exécuter des scripts <strong>T-SQL</strong>.</li><li>Il offre des fonctionnalités de visualisation du plan d'exécution des requêtes pour optimiser les performances.</li><li>Il est l'ancêtre direct de SQL Server Management Studio (SSMS) pour la partie éditeur de requêtes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Enterprise Manager était la console d'administration centrale pour la configuration globale et la gestion visuelle des instances, mais pas l'outil principal pour exécuter et tester interactivement des scripts T-SQL complexes."
      },
      {
        "l": "C",
        "t": "SQL Profiler est un outil de surveillance et de diagnostic utilisé pour capturer les événements et analyser l'activité du serveur, et non pour exécuter des requêtes."
      },
      {
        "l": "D",
        "t": "Le Gestionnaire des services SQL est un utilitaire léger permettant uniquement de démarrer, arrêter ou mettre en pause les services SQL Server (moteur de base de données, agent, etc.)."
      }
    ],
    "examiner": "L'examinateur évalue votre connaissance de l'architecture logicielle de SQL Server 2000 et votre capacité à identifier le rôle spécifique de chaque outil de gestion fourni par Microsoft à cette époque.",
    "summary": [
      "L'Analyseur de requêtes (Query Analyzer) est l'outil dédié au développement et au test de code T-SQL.",
      "Enterprise Manager sert à l'administration globale et à la configuration des instances.",
      "SQL Profiler est destiné à la surveillance et au traçage des performances du serveur.",
      "Le Gestionnaire de services contrôle uniquement l'état des services Windows associés à SQL Server."
    ]
  },
  {
    "num": "Q5",
    "partie": "Administration SQL Server",
    "q": "Parmi les options suivantes, laquelle ne constitue pas une catégorie standard des instructions SQL ?",
    "choices": {
      "A": "Langage de définition de données (DDL)",
      "B": "Langage de sélection de données (DSL)",
      "C": "Langage de contrôle de données (DCL)",
      "D": "Langage de manipulation de données (DML)"
    },
    "correct": "B",
    "explanation": "<p>Le standard SQL divise les commandes en plusieurs sous-langages logiques selon leur fonction :</p><ul><li><strong>DDL (Data Definition Language)</strong> : Pour créer ou modifier la structure des objets (CREATE, ALTER, DROP).</li><li><strong>DML (Data Manipulation Language)</strong> : Pour gérer les données (INSERT, UPDATE, DELETE).</li><li><strong>DCL (Data Control Language)</strong> : Pour gérer les accès et permissions (GRANT, REVOKE).</li><li><strong>TCL (Transaction Control Language)</strong> : Pour gérer les transactions (COMMIT, ROLLBACK).</li></ul><p>Le terme <strong>DSL (Data Selection Language)</strong> n'est pas une catégorie officielle du SQL. Bien que l'instruction <code>SELECT</code> soit la plus utilisée, elle est techniquement classée dans le DML (ou parfois dans une catégorie DQL - Data Query Language), mais jamais sous l'acronyme DSL.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le DDL est une catégorie fondamentale du SQL servant à définir la structure de la base de données."
      },
      {
        "l": "C",
        "t": "Le DCL est bien une catégorie standard utilisée pour la gestion des droits d'accès des utilisateurs."
      },
      {
        "l": "D",
        "t": "Le DML est la catégorie standard regroupant les opérations sur les lignes de données."
      }
    ],
    "examiner": "L'examinateur teste votre connaissance des nomenclatures normalisées du langage SQL et votre capacité à identifier des termes inventés ou erronés.",
    "summary": [
      "Les commandes SQL sont regroupées par catégories fonctionnelles.",
      "Le DDL gère la structure, le DML gère le contenu et le DCL gère les accès.",
      "L'acronyme DSL n'existe pas dans le standard SQL.",
      "La commande SELECT appartient au DML ou au DQL, mais jamais au DSL."
    ]
  },
  {
    "num": "Q6",
    "partie": "Administration SQL Server",
    "q": "Quelle instruction SQL est utilisée pour accorder des privilèges ou des permissions spécifiques à un utilisateur ou à un rôle sur un objet de base de données ?",
    "choices": {
      "A": "ADD",
      "B": "PLUS",
      "C": "GRANT",
      "D": "REVOKE"
    },
    "correct": "C",
    "explanation": "<p>En SQL, la gestion des droits d'accès repose sur le langage de contrôle de données (DCL). L'instruction <strong>GRANT</strong> est utilisée pour accorder explicitement des privilèges (tels que SELECT, INSERT, UPDATE, DELETE) sur des objets de la base de données à des utilisateurs ou des rôles spécifiques.</p><ul><li><strong>GRANT</strong> : Accorde des droits.</li><li><strong>REVOKE</strong> : Supprime des droits précédemment accordés.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "ADD n'est pas une commande SQL standard pour la gestion des permissions ; elle est parfois utilisée pour ajouter des colonnes via ALTER TABLE."
      },
      {
        "l": "B",
        "t": "PLUS n'est pas une instruction valide dans le langage SQL."
      },
      {
        "l": "D",
        "t": "REVOKE a l'effet inverse de GRANT : elle sert à retirer des permissions existantes, et non à les attribuer."
      }
    ],
    "examiner": "Évaluer la maîtrise des commandes DCL (Data Control Language) et la compréhension des mécanismes de sécurité SQL.",
    "summary": [
      "La commande GRANT est utilisée pour donner des accès aux objets de la base de données.",
      "La commande REVOKE est utilisée pour révoquer ou supprimer les accès.",
      "Ces commandes appartiennent à la catégorie du langage de contrôle de données (DCL).",
      "Une bonne gestion des permissions suit le principe du moindre privilège."
    ]
  },
  {
    "num": "Q7",
    "partie": "Administration SQL Server",
    "q": "Quelle instruction SQL est utilisée pour modifier la structure d'un objet existant au sein d'une base de données ?",
    "choices": {
      "A": "CREATE",
      "B": "MODIFY",
      "C": "ALTER",
      "D": "UPDATE"
    },
    "correct": "C",
    "explanation": "<p>En langage SQL, les instructions sont classées par catégories (DDL, DML, DCL). Pour modifier la <strong>structure</strong> d'un objet (comme une table, une vue ou un index), on utilise le langage de définition de données (DDL).</p><ul><li><strong>ALTER</strong> est la commande standard pour modifier la structure d'un objet existant.</li><li><strong>CREATE</strong> sert à créer un nouvel objet.</li><li><strong>UPDATE</strong> est une commande de manipulation de données (DML) servant à modifier le <em>contenu</em> (les lignes) d'une table, et non sa structure.</li><li><strong>MODIFY</strong> n'est pas une instruction DDL standard en SQL ANSI.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'instruction CREATE est dédiée à la création d'objets, et non à la modification d'objets existants."
      },
      {
        "l": "B",
        "t": "MODIFY n'est pas une instruction standard en SQL pour la gestion de la structure des objets de base de données."
      },
      {
        "l": "D",
        "t": "L'instruction UPDATE est une commande DML qui permet de modifier les données (lignes) à l'intérieur d'une table, mais elle ne peut pas altérer la structure (colonnes, types) de la table elle-même."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat distingue clairement les commandes de définition de données (DDL) des commandes de manipulation de données (DML).",
    "summary": [
      "L'instruction ALTER est utilisée pour modifier la structure d'un objet de base de données (DDL).",
      "CREATE permet de définir et créer de nouveaux objets.",
      "UPDATE est réservé à la modification du contenu des données (DML) et non à la structure.",
      "La distinction entre DDL (structure) et DML (données) est fondamentale en SQL."
    ]
  },
  {
    "num": "Q8",
    "partie": "Administration SQL Server",
    "q": "Quelle instruction SQL est utilisée pour insérer de nouvelles lignes de données dans une table existante ?",
    "choices": {
      "A": "ADD",
      "B": "INSERT",
      "C": "ADDNEW",
      "D": "PLUS"
    },
    "correct": "B",
    "explanation": "<p>En langage SQL (Structured Query Language), l'instruction <strong>INSERT INTO</strong> est la commande standard utilisée pour ajouter de nouvelles lignes de données dans une table.</p><p>Sa syntaxe de base est la suivante :</p><ul><li><code>INSERT INTO nom_de_la_table (colonne1, colonne2) VALUES (valeur1, valeur2);</code></li></ul><p>Les autres options proposées ne sont pas des commandes SQL valides pour l'insertion de données.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "ADD est souvent utilisé dans les commandes ALTER TABLE pour ajouter une nouvelle colonne, mais il ne sert pas à insérer des données (lignes)."
      },
      {
        "l": "C",
        "t": "ADDNEW n'est pas une commande SQL standard ; il s'agit d'une confusion courante avec certaines méthodes d'API de programmation (comme dans le modèle objet DAO)."
      },
      {
        "l": "D",
        "t": "PLUS n'est pas une instruction SQL ; c'est un opérateur arithmétique utilisé pour les additions numériques."
      }
    ],
    "examiner": "Vérifier la connaissance fondamentale des commandes DML (Data Manipulation Language) et la distinction entre la structure de la table et le contenu des données.",
    "summary": [
      "L'instruction INSERT INTO est indispensable pour ajouter des enregistrements dans une base de données.",
      "La commande ADD est dédiée à la modification de la structure de la table, non à ses données.",
      "SQL utilise une syntaxe normalisée pour garantir l'intégrité des insertions.",
      "La maîtrise du DML est le premier pas pour interagir efficacement avec un système de gestion de base de données."
    ]
  },
  {
    "num": "Q9",
    "partie": "Administration SQL Server",
    "q": "En utilisant la table EMPLOYEES définie par les colonnes (EM_ID, LAST_NAME, FIRST_NAME, DEPT_ID, JOB_CAT, SALARY), quelle instruction SQL permet d'obtenir le salaire maximum par département (DEPT_ID) et par catégorie professionnelle (JOB_CAT) ?",
    "choices": {
      "A": "SELECT dept_id, job_cat, MAX(salary) FROM employees WHERE salary > MAX(salary)",
      "B": "SELECT dept_id, job_cat, MAX(salary) FROM employees GROUP BY dept_id, job_cat",
      "C": "SELECT dept_id, job_cat, MAX(salary) FROM employees",
      "D": "SELECT dept_id, job_cat, MAX(salary) FROM employees GROUP BY dept_id"
    },
    "correct": "B",
    "explanation": "<p>Pour effectuer un calcul d'agrégation (ici <strong>MAX()</strong>) en fonction de plusieurs colonnes de regroupement, il est impératif d'utiliser la clause <strong>GROUP BY</strong>.</p><ul><li>La clause <strong>GROUP BY dept_id, job_cat</strong> indique au moteur de base de données de créer des sous-groupes uniques combinant département et catégorie.</li><li>La fonction <strong>MAX(salary)</strong> calcule alors la valeur maximale au sein de chaque groupe ainsi formé.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'utilisation d'une fonction d'agrégation dans une clause WHERE est syntaxiquement invalide en SQL standard. De plus, la condition est illogique."
      },
      {
        "l": "C",
        "t": "Cette requête est incomplète car elle manque de la clause GROUP BY. Sans celle-ci, le moteur ne sait pas comment ventiler le calcul du maximum par département et catégorie."
      },
      {
        "l": "D",
        "t": "Bien que la clause GROUP BY soit présente, elle omet 'job_cat', ce qui provoquerait une erreur de syntaxe car les colonnes sélectionnées doivent être présentes dans le GROUP BY ou dans une fonction d'agrégation."
      }
    ],
    "examiner": "Évaluer la maîtrise des fonctions d'agrégation (MAX) combinées à la clause de regroupement (GROUP BY) sur plusieurs colonnes.",
    "summary": [
      "Les fonctions d'agrégation comme MAX(), SUM() ou AVG() nécessitent une clause GROUP BY dès lors qu'elles sont accompagnées d'autres colonnes.",
      "Toute colonne présente dans le SELECT qui n'est pas incluse dans une fonction d'agrégation doit obligatoirement figurer dans le GROUP BY.",
      "La clause WHERE filtre les lignes avant le regroupement, tandis que la clause HAVING filtre les groupes après le calcul."
    ]
  },
  {
    "num": "Q10",
    "partie": "Administration SQL Server",
    "q": "La direction vous demande d'afficher la liste des employés ainsi que le montant des commissions annuelles calculé selon la formule : salaire * commission_pct * 12. En vous basant sur la table 'emp', quelle instruction SQL permet d'obtenir ce résultat ?",
    "choices": {
      "A": "SELECT last_name, 12 * salary * commision_pct FROM emp",
      "B": "SELECT last_name, 12 * (salary + commision_pct) FROM emp",
      "C": "SELECT last_name, 12 * salary + commision_pct FROM emp",
      "D": "SELECT last_name, 12 * salary FROM emp"
    },
    "correct": "A",
    "explanation": "<p>Pour calculer la commission annuelle basée sur la formule fournie, il faut effectuer une multiplication des trois facteurs : le salaire, le taux de commission (commission_pct) et le multiplicateur temporel (12 mois).</p><ul><li>La clause <strong>SELECT</strong> doit contenir les colonnes nécessaires (last_name et le résultat du calcul).</li><li>La clause <strong>FROM</strong> doit spécifier la table source (emp).</li><li>La syntaxe SQL ne doit pas inclure de virgule avant le mot-clé FROM.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Cette instruction effectue une addition (salary + commision_pct) avant de multiplier par 12, ce qui ne correspond pas à la formule mathématique demandée."
      },
      {
        "l": "C",
        "t": "Cette instruction ne respecte pas l'ordre des opérations pour le calcul global, car elle additionne le taux de commission au résultat du salaire annuel au lieu de le multiplier."
      },
      {
        "l": "D",
        "t": "Cette instruction oublie d'inclure le champ 'commision_pct' dans le calcul, rendant le résultat de la commission erroné."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension des opérateurs arithmétiques en SQL et la capacité à traduire une formule métier en une requête SELECT correcte tout en respectant la syntaxe SQL standard (absence de virgule avant FROM).",
    "summary": [
      "La multiplication en SQL utilise l'opérateur astérisque (*).",
      "Le respect de la priorité des opérateurs mathématiques est crucial pour les calculs de colonnes.",
      "Il ne faut jamais placer de virgule juste avant le mot-clé FROM dans une requête SQL.",
      "La structure standard d'une requête est SELECT [colonnes/calculs] FROM [nom_table]."
    ]
  },
  {
    "num": "Q11",
    "partie": "Administration SQL Server",
    "q": "Lors de la phase de conception d'une base de données (modèle conceptuel de données), quelle action ne doit pas être effectuée ?",
    "choices": {
      "A": "Dégager les objets (entités) et définir leur identifiant.",
      "B": "Dégager les relations et définir leur identifiant.",
      "C": "Déterminer les cardinalités des relations.",
      "D": "Attacher les propriétés aux relations et aux objets (entités)."
    },
    "correct": "B",
    "explanation": "<p>Dans la modélisation conceptuelle de données (MCD), les <strong>relations</strong> ne possèdent pas d'identifiant propre. Elles sont identifiées par les identifiants des entités qu'elles relient.</p><p>En revanche :</p><ul><li>Les <strong>entités (objets)</strong> doivent obligatoirement posséder un identifiant unique.</li><li>Les <strong>cardinalités</strong> permettent de définir les règles de gestion (ex: 1,n ; 0,n).</li><li>Les <strong>propriétés</strong> peuvent être attachées aux entités ou, dans certains cas, aux relations (si la propriété dépend de la relation elle-même).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une étape fondamentale : chaque entité doit posséder un identifiant unique pour être distinguée des autres."
      },
      {
        "l": "C",
        "t": "La détermination des cardinalités est essentielle pour comprendre la nature des associations entre les objets."
      },
      {
        "l": "D",
        "t": "Il est tout à fait correct d'attribuer des propriétés aux entités ou aux relations selon les besoins du modèle."
      }
    ],
    "examiner": "Évaluer la maîtrise des règles de modélisation conceptuelle, spécifiquement la distinction entre entités (objets) et associations (relations) concernant l'identification.",
    "summary": [
      "Les entités possèdent un identifiant unique.",
      "Les relations ne possèdent jamais d'identifiant propre.",
      "L'identifiant d'une relation est dérivé des identifiants des entités participantes.",
      "La définition des cardinalités et des propriétés est une étape standard de la conception."
    ]
  }
];
