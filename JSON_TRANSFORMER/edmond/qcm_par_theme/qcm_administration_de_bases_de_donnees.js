const QCM = [
  {
    "num": "Q1",
    "partie": "Administration de Bases de Données",
    "q": "Dans le contexte de la gestion des droits utilisateurs, quelle est la fonction principale du privilège système 'CREATE SESSION' ?",
    "choices": {
      "A": "Autoriser un utilisateur à se connecter à une instance de base de données.",
      "B": "Créer une nouvelle session active au sein d'une instance existante.",
      "C": "Créer physiquement une nouvelle base de données.",
      "D": "Interroger les vues du dictionnaire des données système."
    },
    "correct": "A",
    "explanation": "<p>Le privilège système <strong>CREATE SESSION</strong> est l'un des droits fondamentaux dans les systèmes de gestion de bases de données relationnelles (notamment Oracle). Contrairement à ce que son nom pourrait laisser penser, il ne sert pas à 'créer' techniquement une session, mais à <strong>autoriser</strong> un utilisateur à établir une connexion avec la base de données.</p><ul><li>Sans ce privilège, même si un utilisateur existe dans le catalogue système, il ne pourra pas ouvrir de connexion.</li><li>Il est souvent le premier privilège accordé à tout nouvel utilisateur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le privilège ne permet pas de gérer la création technique d'une session, celle-ci est gérée par le moteur de base de données une fois l'authentification validée."
      },
      {
        "l": "C",
        "t": "La création d'une base de données est une opération administrative lourde nécessitant des privilèges spécifiques (comme SYSDBA) et non un simple droit de connexion."
      },
      {
        "l": "D",
        "t": "L'interrogation du dictionnaire des données dépend des privilèges de lecture (SELECT) sur les vues système, et non du droit de connexion initial."
      }
    ],
    "examiner": "L'examinateur vérifie ici votre compréhension des privilèges système fondamentaux et votre capacité à distinguer les droits d'accès aux droits de configuration administrative.",
    "summary": [
      "CREATE SESSION est un privilège système indispensable pour accéder à une base de données.",
      "Ce privilège accorde uniquement le droit de connexion et non des droits d'administration ou de création.",
      "Sans ce droit, l'authentification échouera systématiquement, même avec un mot de passe correct.",
      "Il s'agit du droit d'entrée minimal dans l'environnement de la base de données."
    ]
  },
  {
    "num": "Q2",
    "partie": "Administration de Bases de Données",
    "q": "Quelle est la fonction principale de l'instruction SQL 'ROLLBACK' dans une transaction ?",
    "choices": {
      "A": "Valider définitivement les modifications apportées par une transaction.",
      "B": "Insérer de nouveaux enregistrements dans une table.",
      "C": "Supprimer des enregistrements existants dans une table.",
      "D": "Annuler toutes les modifications effectuées depuis le début de la transaction en cours."
    },
    "correct": "D",
    "explanation": "<p>En SQL, le contrôle des transactions repose sur deux commandes majeures : <strong>COMMIT</strong> et <strong>ROLLBACK</strong>.</p><ul><li><strong>COMMIT</strong> permet de valider et de rendre permanentes toutes les modifications effectuées durant la transaction.</li><li><strong>ROLLBACK</strong> permet de restaurer l'état des données tel qu'il était avant le début de la transaction, annulant ainsi toutes les opérations (INSERT, UPDATE, DELETE) en attente.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci correspond à la définition de l'instruction COMMIT, et non ROLLBACK."
      },
      {
        "l": "B",
        "t": "L'insertion de données est réalisée par l'instruction INSERT."
      },
      {
        "l": "C",
        "t": "La suppression de données est réalisée par l'instruction DELETE."
      }
    ],
    "examiner": "Vérifier la compréhension du contrôle de transaction (TCL - Transaction Control Language) et la distinction entre validation et annulation des données.",
    "summary": [
      "Le ROLLBACK annule les modifications non validées d'une transaction.",
      "Il permet de garantir l'intégrité des données en cas d'erreur logique ou technique.",
      "L'état de la base de données est rétabli au dernier point de validation (COMMIT).",
      "Le COMMIT et le ROLLBACK sont les piliers de l'atomicité dans les propriétés ACID."
    ]
  },
  {
    "num": "Q3",
    "partie": "Administration de Bases de Données",
    "q": "Dans le cadre de la gestion des privilèges SQL, que permet l'utilisation de la clause 'WITH GRANT OPTION' lors de l'octroi de droits à un utilisateur ?",
    "choices": {
      "A": "Autoriser l'utilisateur bénéficiaire à transmettre les privilèges qui lui ont été accordés à d'autres utilisateurs.",
      "B": "Modifier dynamiquement la taille physique ou le quota de stockage alloué à la base de données.",
      "C": "Augmenter la capacité de stockage allouée à un utilisateur spécifique au sein de la base de données.",
      "D": "Ajouter de nouveaux privilèges système ou objets à un compte utilisateur existant."
    },
    "correct": "A",
    "explanation": "<p>La clause <strong>WITH GRANT OPTION</strong> est une fonctionnalité de sécurité dans les systèmes de gestion de bases de données relationnelles (SGBDR) comme MySQL ou PostgreSQL.</p><p>Lorsqu'un administrateur accorde un privilège avec cette option, il délègue à l'utilisateur destinataire le droit de :</p><ul><li>Transférer ces mêmes privilèges à d'autres utilisateurs.</li><li>Retirer les privilèges qu'il a lui-même accordés par la suite.</li></ul><p>C'est un mécanisme de délégation de droits qui nécessite une gestion rigoureuse pour éviter les failles de sécurité par propagation de privilèges.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La gestion de la taille de la base de données relève de l'administration du stockage (tablespaces, fichiers de données) et non des privilèges d'accès utilisateur."
      },
      {
        "l": "C",
        "t": "L'augmentation de la taille ou des quotas d'un utilisateur est une opération de gestion de ressources et non une fonction de la clause 'GRANT'."
      },
      {
        "l": "D",
        "t": "Bien que l'utilisateur puisse effectivement ajouter des privilèges, la distinction cruciale est que 'WITH GRANT OPTION' permet la <strong>délégation</strong> de droits, et non simplement l'ajout de droits par un administrateur."
      }
    ],
    "examiner": "Évaluer la compréhension de la délégation de droits en SQL et la maîtrise des mécanismes de contrôle d'accès granulaire.",
    "summary": [
      "La clause 'WITH GRANT OPTION' permet la délégation de privilèges.",
      "Un utilisateur possédant ce droit peut transmettre ses permissions à des tiers.",
      "Cette option doit être utilisée avec prudence pour respecter le principe du moindre privilège.",
      "Elle est distincte de la gestion des ressources système ou des quotas de stockage."
    ]
  },
  {
    "num": "Q4",
    "partie": "Administration de Bases de Données",
    "q": "Dans le contexte de la gestion des accès et de la sécurité des systèmes d'information, quel est le rôle principal d'un « rôle » ?",
    "choices": {
      "A": "Regrouper les utilisateurs",
      "B": "Regrouper des privilèges",
      "C": "Donner des droits à des utilisateurs",
      "D": "Donner des privilèges à des utilisateurs"
    },
    "correct": "B",
    "explanation": "<p>En administration de bases de données et gestion des systèmes, un <strong>rôle</strong> est avant tout un conteneur logique destiné à <strong>regrouper un ensemble de privilèges</strong> (permissions).</p><ul><li>Au lieu d'attribuer chaque privilège individuellement à chaque utilisateur, on les rassemble dans un rôle.</li><li>Le rôle est ensuite <em>assigné</em> aux utilisateurs ou aux groupes, ce qui facilite grandement l'administration et la sécurité.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est l'objectif d'un groupe d'utilisateurs, non d'un rôle (bien que les deux concepts soient parfois liés)."
      },
      {
        "l": "C",
        "t": "C'est l'action finale (l'affectation), mais le rôle est la structure qui contient les permissions, pas l'action de donner."
      },
      {
        "l": "D",
        "t": "C'est une conséquence de l'utilisation d'un rôle, mais la définition structurelle est le regroupement des droits."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la distinction conceptuelle entre une entité de gestion d'utilisateurs (groupe) et une entité de gestion de permissions (rôle).",
    "summary": [
      "Un rôle est une collection de privilèges regroupés pour simplifier l'administration.",
      "L'utilisation de rôles permet de gérer la sécurité de manière granulaire et efficace.",
      "Il ne faut pas confondre l'entité 'rôle' avec l'action d'octroyer des droits.",
      "L'assignation d'un rôle à un utilisateur lui transmet automatiquement tous les privilèges contenus dans ce rôle."
    ]
  },
  {
    "num": "Q5",
    "partie": "Administration de Bases de Données",
    "q": "Dans le contexte d'un système de gestion de bases de données (SGBD), quel mécanisme permet d'exécuter automatiquement une action en réponse à un événement spécifique (insertion, modification, suppression) ?",
    "choices": {
      "A": "Une vue",
      "B": "Un trigger",
      "C": "Visual Basic",
      "D": "WLangage"
    },
    "correct": "B",
    "explanation": "<p>Un <strong>trigger</strong> (ou déclencheur en français) est un objet de base de données associé à une table qui s'active automatiquement lors de la survenue d'un événement DML (Data Manipulation Language) comme <code>INSERT</code>, <code>UPDATE</code> ou <code>DELETE</code>.</p><ul><li>Il permet d'assurer l'intégrité des données.</li><li>Il automatise les processus de logging ou d'audit.</li><li>Il réagit à des changements d'état sans intervention manuelle du développeur au niveau de l'application.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une vue est une table virtuelle basée sur une requête SELECT. Elle sert à interroger les données, mais n'est pas un mécanisme d'exécution événementielle."
      },
      {
        "l": "C",
        "t": "Visual Basic est un langage de programmation externe et non un composant interne d'un SGBD."
      },
      {
        "l": "D",
        "t": "Le WLangage est un langage de programmation utilisé par l'environnement de développement WinDev, et non un outil natif du SGBD pour la gestion d'événements SQL."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension des objets de base de données actifs et la distinction entre les composants structurels (vues), les outils de développement externes (langages) et les mécanismes d'automatisation interne (triggers).",
    "summary": [
      "Un trigger est un bloc de code stocké qui se déclenche automatiquement dans le SGBD.",
      "Les déclencheurs répondent spécifiquement aux opérations de manipulation de données (DML).",
      "Contrairement à une vue, le trigger possède une logique procédurale liée à un événement.",
      "Les triggers sont essentiels pour automatiser les règles de gestion complexes au niveau de la donnée."
    ]
  },
  {
    "num": "Q6",
    "partie": "Administration de Bases de Données",
    "q": "Quelle instruction SQL est utilisée pour valider définitivement une transaction et rendre ses modifications permanentes dans la base de données ?",
    "choices": {
      "A": "Un ordre ACCEPT",
      "B": "Un ordre ROLLBACK",
      "C": "Un ordre COMMIT",
      "D": "Un ordre VALIDATE"
    },
    "correct": "C",
    "explanation": "<p>En SQL, la gestion des transactions repose sur le concept d'atomicité. Pour finaliser les opérations en cours et rendre les changements persistants (enregistrés sur le disque), on utilise la commande <strong>COMMIT</strong>.</p><ul><li><strong>COMMIT :</strong> Valide les modifications.</li><li><strong>ROLLBACK :</strong> Annule les modifications en cas d'erreur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'instruction 'ACCEPT' n'est pas une commande standard de validation de transaction SQL."
      },
      {
        "l": "B",
        "t": "L'instruction 'ROLLBACK' est utilisée pour annuler les modifications en cours, et non pour les valider."
      },
      {
        "l": "D",
        "t": "'VALIDATE' n'est pas une commande standard SQL pour la gestion des transactions."
      }
    ],
    "examiner": "Évaluer la compréhension des commandes de contrôle de transaction (TCL - Transaction Control Language) et la distinction entre validation et annulation.",
    "summary": [
      "La commande COMMIT rend permanentes les modifications effectuées dans une transaction.",
      "Toute modification avant un COMMIT est temporaire et peut être annulée.",
      "L'instruction ROLLBACK permet d'annuler les changements non encore validés.",
      "Les transactions garantissent l'intégrité des données en s'assurant qu'une série d'opérations aboutit totalement ou pas du tout."
    ]
  },
  {
    "num": "Q7",
    "partie": "Administration de Bases de Données",
    "q": "Quel type de requêtes voit ses performances améliorées par l'utilisation d'un index dans une base de données ?",
    "choices": {
      "A": "Les requêtes simples uniquement",
      "B": "Les requêtes impliquant des jointures",
      "C": "Les requêtes de sélection (filtrage)",
      "D": "Toutes les requêtes de manipulation de données (généralement SELECT)"
    },
    "correct": "D",
    "explanation": "<p>Un <strong>index</strong> est une structure de données optimisée qui permet au moteur de base de données de localiser rapidement les lignes sans avoir à parcourir toute la table (le fameux <em>Full Table Scan</em>).</p><ul><li>Il accélère les opérations de <strong>filtrage</strong> ( clauses WHERE).</li><li>Il optimise les <strong>jointures</strong> en accélérant la comparaison des clés étrangères.</li><li>Il améliore les <strong>tri</strong> (clause ORDER BY) et les regroupements (GROUP BY).</li></ul><p>Ainsi, l'indexation profite globalement à l'ensemble des requêtes de consultation (SELECT).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est restrictif : l'index améliore aussi des requêtes complexes comme les jointures."
      },
      {
        "l": "B",
        "t": "C'est partiel : l'index aide aussi pour les requêtes simples de filtrage sur une seule table."
      },
      {
        "l": "C",
        "t": "C'est incomplet : bien que vrai pour la sélection, cela occulte les bénéfices pour les jointures et les tris."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la portée fonctionnelle des index dans un SGBD.",
    "summary": [
      "Un index est une structure auxiliaire qui accélère la recherche de données.",
      "Il réduit considérablement le nombre d'entrées/sorties disque nécessaires pour lire une table.",
      "Son efficacité profite aux clauses de filtrage, aux jointures et aux tris.",
      "Trop d'index peuvent toutefois ralentir les opérations d'écriture (INSERT, UPDATE, DELETE)."
    ]
  },
  {
    "num": "Q8",
    "partie": "Administration de Bases de Données",
    "q": "Quel mécanisme de contrôle de transaction empêche deux utilisateurs de modifier simultanément les mêmes données afin de préserver l'intégrité de la base ?",
    "choices": {
      "A": "COMMIT",
      "B": "ROLLBACK",
      "C": "SAVEPOINT",
      "D": "LOCK"
    },
    "correct": "D",
    "explanation": "<p>Le mécanisme de <strong>verrouillage (LOCK)</strong> est essentiel dans les systèmes de gestion de bases de données (SGBD) pour garantir la propriété d'<strong>isolation</strong> (le 'I' de ACID).</p><p>Lorsqu'une transaction pose un verrou sur une ligne ou une table, elle empêche d'autres transactions concurrentes d'apporter des modifications conflictuelles, évitant ainsi des problèmes tels que les mises à jour perdues ou les lectures non répétables.</p><ul><li><strong>COMMIT :</strong> Valide les modifications.</li><li><strong>ROLLBACK :</strong> Annule les modifications en cours.</li><li><strong>SAVEPOINT :</strong> Définit un point de retour intermédiaire au sein d'une transaction.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le COMMIT est utilisé pour rendre permanentes les modifications apportées par une transaction, il ne gère pas l'accès simultané."
      },
      {
        "l": "B",
        "t": "Le ROLLBACK permet d'annuler des modifications, il n'a aucun rôle dans la gestion de la concurrence ou l'accès aux données par d'autres utilisateurs."
      },
      {
        "l": "C",
        "t": "Le SAVEPOINT permet de créer un point de restauration interne à une transaction, il n'est pas un mécanisme de contrôle de concurrence."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension des mécanismes d'isolation et de concurrence dans les transactions SQL, plus spécifiquement le rôle du verrouillage pour prévenir les conflits de mise à jour.",
    "summary": [
      "Le verrouillage (LOCK) assure l'isolation des transactions en évitant les accès concurrents conflictuels.",
      "COMMIT, ROLLBACK et SAVEPOINT sont des commandes de gestion d'état de transaction, non de contrôle d'accès simultané.",
      "L'usage des verrous est indispensable pour maintenir la cohérence des données dans un environnement multi-utilisateurs.",
      "Une bonne gestion de la concurrence est un pilier fondamental de la propriété ACID des SGBD."
    ]
  },
  {
    "num": "Q9",
    "partie": "Administration de Bases de Données",
    "q": "Comment s'appelle la zone de mémoire partagée par tous les processus d'une instance Oracle ?",
    "choices": {
      "A": "La PGA (Program Global Area)",
      "B": "La SGA (System Global Area)",
      "C": "La MGA (Memory Global Area)",
      "D": "La BUFPOOL (Buffer Pool)"
    },
    "correct": "B",
    "explanation": "<p>La <strong>SGA (System Global Area)</strong> est une zone de mémoire partagée allouée au démarrage de l'instance Oracle. Elle contient les données et les structures de contrôle nécessaires au fonctionnement de l'instance. Elle est accessible par tous les processus serveurs et processus d'arrière-plan.</p><ul><li>La <strong>PGA</strong> est une mémoire privée allouée à chaque processus serveur ou processus d'arrière-plan.</li><li>La <strong>Buffer Pool</strong> est une sous-partie spécifique au sein de la SGA, mais n'est pas le terme désignant la mémoire partagée dans son ensemble.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La PGA (Program Global Area) est une mémoire privée dédiée à un processus spécifique et n'est pas partagée entre les processus."
      },
      {
        "l": "C",
        "t": "La MGA (Memory Global Area) est un terme incorrect qui n'existe pas dans l'architecture Oracle."
      },
      {
        "l": "D",
        "t": "La Buffer Pool est un composant de la SGA (qui stocke les blocs de données), mais c'est un sous-ensemble, pas la zone de mémoire globale."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture mémoire d'Oracle, en particulier la distinction entre mémoire privée (PGA) et mémoire partagée (SGA).",
    "summary": [
      "La SGA (System Global Area) est la zone mémoire partagée par tous les processus d'une instance Oracle.",
      "La PGA (Program Global Area) est une zone mémoire privée propre à chaque processus.",
      "Toute instance Oracle démarre en allouant une SGA en mémoire vive.",
      "La distinction entre mémoire partagée et privée est fondamentale pour le tuning et la gestion des ressources Oracle."
    ]
  },
  {
    "num": "Q10",
    "partie": "Administration de Bases de Données",
    "q": "Quelle est la définition exacte d'une instance Oracle ?",
    "choices": {
      "A": "L'ensemble des processus d'arrière-plan et des zones mémoire (SGA) nécessaires au fonctionnement d'une base de données.",
      "B": "L'ensemble des fichiers physiques (fichiers de données, redos, contrôle) constituant la base de données.",
      "C": "La phase d'installation des binaires du logiciel Oracle sur le système d'exploitation.",
      "D": "Une base de données Oracle qui est actuellement en état d'échec ou qui ne parvient plus à démarrer."
    },
    "correct": "A",
    "explanation": "<p>Dans l'architecture Oracle, il est crucial de distinguer deux concepts fondamentaux :</p><ul><li><strong>L'instance :</strong> Elle est composée de la mémoire (SGA - System Global Area) et des processus d'arrière-plan. Elle est temporaire (elle existe tant que la base est montée en mémoire).</li><li><strong>La base de données :</strong> Elle est constituée des fichiers physiques sur le disque (Datafiles, Controlfiles, Redo log files).</li></ul><p>Une instance peut démarrer et monter une base de données, mais elle est techniquement indépendante des fichiers physiques tant qu'elle n'est pas connectée à la structure de données.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Ceci définit la base de données physique (les fichiers sur le disque), et non l'instance qui est la couche logicielle en mémoire."
      },
      {
        "l": "C",
        "t": "L'installation du logiciel correspond à la mise en place des binaires (Oracle Home), ce qui est une étape préalable à la création d'une instance."
      },
      {
        "l": "D",
        "t": "Il s'agit d'une description erronée d'un état de panne, cela n'a aucun rapport avec la définition technique d'une instance."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction fondamentale entre la couche mémoire/processus (instance) et la couche stockage physique (base de données) chez Oracle.",
    "summary": [
      "Une instance Oracle est une entité logicielle composée de mémoire (SGA) et de processus.",
      "La base de données est l'ensemble des fichiers physiques stockés sur le disque.",
      "L'instance est ce qui permet d'accéder aux données et de les manipuler.",
      "Il est possible d'avoir une instance active sans pour autant avoir une base de données ouverte."
    ]
  },
  {
    "num": "Q11",
    "partie": "Administration de Bases de Données",
    "q": "Concernant la structure et la gestion d'un tablespace dans un système de gestion de bases de données relationnelles, quelle affirmation est correcte ?",
    "choices": {
      "A": "Un tablespace est limité à la gestion d'une seule table unique.",
      "B": "Un tablespace est dédié exclusivement soit aux tables, soit aux index, mais jamais aux deux simultanément.",
      "C": "Un tablespace peut contenir simultanément des objets de types différents, tels que des tables et des index.",
      "D": "Un tablespace possède une taille figée lors de sa création et ne peut subir aucune extension ultérieure."
    },
    "correct": "C",
    "explanation": "<p>Un <strong>tablespace</strong> (ou espace de table) est une unité de stockage logique qui sert d'interface entre la base de données et les fichiers physiques du système d'exploitation.</p><ul><li>Il n'existe aucune restriction imposant qu'un tablespace ne contienne qu'un seul objet ou un seul type d'objet.</li><li>La flexibilité est l'une de ses forces principales : il peut accueillir divers segments de données (tables, index, clusters, LOB, etc.).</li><li>La plupart des systèmes modernes permettent l'auto-extensibilité (autoextend) des fichiers de données associés, invalidant ainsi l'idée d'une taille fixe immuable.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est incorrect. Un tablespace est conçu pour gérer de nombreux objets et une volumétrie importante, et non une seule table."
      },
      {
        "l": "B",
        "t": "C'est incorrect. Bien qu'il soit parfois recommandé d'isoler les index des tables pour des raisons de performance (I/O), le moteur de base de données permet parfaitement de stocker les deux dans le même espace."
      },
      {
        "l": "D",
        "t": "C'est incorrect. Les tablespaces peuvent être agrandis soit manuellement en ajoutant des fichiers, soit automatiquement via la configuration d'extension automatique."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux d'architecture de stockage logique et physique au sein d'un SGBD.",
    "summary": [
      "Un tablespace est un conteneur logique reliant les objets de la base aux fichiers physiques.",
      "Il n'y a pas de limitation de type d'objet : tables et index peuvent cohabiter dans le même tablespace.",
      "La flexibilité de stockage permet aux tablespaces de s'adapter à la croissance des données.",
      "La séparation physique des tables et des index est une pratique d'optimisation, mais pas une obligation technique."
    ]
  },
  {
    "num": "Q12",
    "partie": "Administration de Bases de Données",
    "q": "En tant qu'utilisateur standard (sans privilèges spécifiques), laquelle des tables ou vues du catalogue de données Oracle ne pouvez-vous généralement pas consulter ?",
    "choices": {
      "A": "USER_TABLES",
      "B": "V$DATAFILE",
      "C": "ALL_TABLES",
      "D": "CAT"
    },
    "correct": "B",
    "explanation": "<p>Dans Oracle Database, les vues dynamiques (Dynamic Performance Views) commençant par <strong>V$</strong> sont destinées aux administrateurs de bases de données (DBA).</p><ul><li><strong>V$DATAFILE</strong> contient des informations sensibles sur les fichiers physiques de la base, accessibles uniquement avec le privilège <code>SELECT ANY DICTIONARY</code> ou le rôle <code>SELECT_CATALOG_ROLE</code>.</li><li>Les vues <strong>USER_*</strong> et <strong>ALL_*</strong> sont accessibles par tout utilisateur connecté pour consulter ses propres objets ou ceux auxquels il a accès.</li><li>La vue <strong>CAT</strong> est une vue simplifiée du dictionnaire de données accessible par tout utilisateur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "USER_TABLES est accessible par tout utilisateur et contient uniquement la liste des tables dont l'utilisateur est le propriétaire."
      },
      {
        "l": "C",
        "t": "ALL_TABLES est accessible par tout utilisateur et liste toutes les tables auxquelles l'utilisateur a accès (les siennes + celles sur lesquelles il a des droits)."
      },
      {
        "l": "D",
        "t": "CAT est une vue de dictionnaire publique qui liste les tables, vues et synonymes de l'utilisateur, elle est donc consultable par tous."
      }
    ],
    "examiner": "Évaluer la compréhension des différents niveaux de visibilité du dictionnaire de données Oracle entre les vues utilisateur, les vues globales et les vues dynamiques de performance.",
    "summary": [
      "Les vues USER_* affichent les objets appartenant à l'utilisateur.",
      "Les vues ALL_* affichent les objets accessibles par l'utilisateur.",
      "Les vues V$ sont des vues dynamiques réservées aux administrateurs (DBA).",
      "Un utilisateur standard ne possède pas, par défaut, les droits nécessaires pour interroger les vues système critiques commençant par V$."
    ]
  },
  {
    "num": "Q13",
    "partie": "Administration de Bases de Données",
    "q": "Quelle est la hiérarchie logique correcte des composants d'une base de données relationnelle, en suivant la relation d'inclusion ou de gestion ?",
    "choices": {
      "A": "Instance - Tablespace - Database - Table - Rows",
      "B": "Instance - Database - Tablespace - Table - Rows",
      "C": "Instance - Database - Table - Tablespace - Rows",
      "D": "Database - Instance - Tablespace - Table - Rows"
    },
    "correct": "B",
    "explanation": "<p>La structure logique d'un SGBD (comme Oracle) suit une hiérarchie précise :</p><ul><li><strong>Instance</strong> : L'environnement mémoire et les processus qui gèrent la base.</li><li><strong>Database</strong> : L'ensemble des données qui constituent la base.</li><li><strong>Tablespace</strong> : Un espace logique de stockage au sein de la base de données.</li><li><strong>Table</strong> : Une structure de stockage organisée en colonnes et lignes dans un tablespace.</li><li><strong>Rows</strong> : Les enregistrements individuels stockés dans les tables.</li></ul><p>Ainsi, l'instance gère la base de données, la base contient les tablespaces, les tablespaces hébergent les tables, et les tables contiennent les lignes.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le tablespace est un composant interne à la base de données, il ne peut pas contenir la base elle-même."
      },
      {
        "l": "C",
        "t": "Le tablespace est un conteneur logique pour les tables, il ne se situe pas après la table dans la hiérarchie."
      },
      {
        "l": "D",
        "t": "L'instance n'est pas contenue dans la base de données ; c'est l'instance qui permet d'accéder à la base."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture logique et de la hiérarchie de stockage des objets au sein d'un SGBD.",
    "summary": [
      "Une instance gère une base de données.",
      "La base de données est divisée en tablespaces pour le stockage.",
      "Les tables sont créées à l'intérieur des tablespaces.",
      "Les lignes constituent l'unité élémentaire de données au sein d'une table."
    ]
  },
  {
    "num": "Q14",
    "partie": "Administration de Bases de Données",
    "q": "Quelle est la requête SQL correcte permettant d'accorder à l'utilisateur 'TOTO' l'autorisation de modifier la structure de la table 'bh.ventes' ?",
    "choices": {
      "A": "GRANT ALTER ON bh.ventes TO TOTO",
      "B": "GRANT ALTER TO TOTO ON bh.ventes",
      "C": "GRANT ALTER TABLE TO TOTO",
      "D": "ALLOW TOTO TO ALTER TABLE bh.ventes"
    },
    "correct": "A",
    "explanation": "<p>En SQL, la syntaxe standard pour accorder des privilèges suit la structure : <strong>GRANT [PRIVILÈGE] ON [OBJET] TO [UTILISATEUR]</strong>.</p><ul><li>Le privilège est <strong>ALTER</strong>.</li><li>L'objet est <strong>bh.ventes</strong>.</li><li>Le bénéficiaire est <strong>TOTO</strong>.</li></ul><p>La requête correcte est donc <strong>GRANT ALTER ON bh.ventes TO TOTO;</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La clause 'ON' doit impérativement précéder l'objet sur lequel porte le privilège, et non le bénéficiaire."
      },
      {
        "l": "C",
        "t": "Cette syntaxe est incomplète : elle ne précise pas sur quel objet (table) le privilège s'applique."
      },
      {
        "l": "D",
        "t": "Le mot-clé 'ALLOW' n'existe pas dans le langage SQL standard pour la gestion des droits d'accès ; il faut utiliser 'GRANT'."
      }
    ],
    "examiner": "L'examinateur vérifie la maîtrise de la syntaxe du langage de contrôle de données (DCL) en SQL, spécifiquement l'utilisation correcte de la commande GRANT.",
    "summary": [
      "La commande GRANT est utilisée pour accorder des privilèges aux utilisateurs.",
      "La syntaxe standard est : GRANT [PRIVILEGE] ON [TABLE] TO [USER].",
      "L'ordre des arguments est strict en SQL pour éviter les erreurs de compilation.",
      "Le privilège ALTER permet de modifier la structure d'un objet de base de données."
    ]
  },
  {
    "num": "Q15",
    "partie": "Administration de Bases de Données",
    "q": "Parmi les commandes suivantes, laquelle n'effectue pas un arrêt « propre » (clean shutdown) d'une base de données Oracle ?",
    "choices": {
      "A": "SHUTDOWN ABORT",
      "B": "SHUTDOWN TRANSACTIONAL",
      "C": "SHUTDOWN",
      "D": "SHUTDOWN IMMEDIATE"
    },
    "correct": "A",
    "explanation": "<p>Dans Oracle, la commande <strong>SHUTDOWN ABORT</strong> est considérée comme un arrêt brutal. Contrairement aux autres modes, elle n'attend pas que les sessions actives se terminent, ne finalise pas les transactions en cours et n'effectue pas de point de contrôle (checkpoint) immédiat.</p><p>Cela signifie que lors du prochain redémarrage, la base de données devra impérativement passer par une phase de <strong>récupération d'instance</strong> (instance recovery) en utilisant les fichiers de journaux de rédo (redo logs) pour assurer la cohérence des données.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "SHUTDOWN TRANSACTIONAL attend que les transactions actives soient validées avant de fermer la base, ce qui est un arrêt propre."
      },
      {
        "l": "C",
        "t": "SHUTDOWN (mode normal) empêche les nouvelles connexions et attend que tous les utilisateurs déconnectent, garantissant un arrêt propre."
      },
      {
        "l": "D",
        "t": "SHUTDOWN IMMEDIATE déconnecte les utilisateurs et annule les transactions en cours, mais effectue un checkpoint propre avant l'arrêt."
      }
    ],
    "examiner": "Évaluer la compréhension des différents modes d'arrêt d'une base de données Oracle et leur impact sur la récupération de l'instance.",
    "summary": [
      "SHUTDOWN ABORT est une procédure d'arrêt d'urgence équivalente à une panne de courant.",
      "L'utilisation de SHUTDOWN ABORT force l'arrêt immédiat du processus sans finaliser les transactions.",
      "Un arrêt 'propre' nécessite une synchronisation des données vers les fichiers physiques via un checkpoint.",
      "La récupération d'instance est toujours nécessaire après un SHUTDOWN ABORT."
    ]
  },
  {
    "num": "Q16",
    "partie": "Administration de Bases de Données",
    "q": "Quelle est la fonction principale d'une clé primaire (Primary Key) dans une table de base de données relationnelle ?",
    "choices": {
      "A": "Permettre le stockage de valeurs en double pour faciliter les recherches.",
      "B": "Assurer l'unicité de chaque enregistrement et garantir l'intégrité des données.",
      "C": "Accélérer uniquement les opérations de suppression de données.",
      "D": "Définir la relation de sécurité entre deux tables distinctes."
    },
    "correct": "B",
    "explanation": "<p>La <strong>clé primaire</strong> est un concept fondamental en modélisation relationnelle. Elle remplit deux fonctions essentielles :</p><ul><li><strong>Unicité :</strong> Elle garantit qu'aucune ligne ne possède la même valeur pour cette colonne, permettant d'identifier chaque enregistrement de manière unique.</li><li><strong>Intégrité :</strong> Elle interdit les valeurs nulles, assurant que chaque ligne est correctement identifiable.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une clé primaire interdit strictement les doublons, contrairement à un index non unique."
      },
      {
        "l": "C",
        "t": "Bien que la clé primaire soit indexée automatiquement, son but premier n'est pas lié à la suppression, mais à l'identification unique."
      },
      {
        "l": "D",
        "t": "Les relations entre tables sont définies par des clés étrangères, et non par la clé primaire elle-même."
      }
    ],
    "examiner": "Évaluer la compréhension de l'intégrité référentielle et de la structure fondamentale des tables relationnelles.",
    "summary": [
      "La clé primaire identifie de manière unique chaque ligne d'une table.",
      "Elle impose une contrainte d'unicité sur la ou les colonnes concernées.",
      "Une clé primaire ne peut jamais contenir de valeur nulle (NOT NULL).",
      "Chaque table relationnelle doit posséder au moins une clé primaire."
    ]
  },
  {
    "num": "Q17",
    "partie": "Administration de Bases de Données",
    "q": "Qu'est-ce qu'une contrainte d'intégrité dans le cadre d'une base de données ?",
    "choices": {
      "A": "C'est un mécanisme garantissant l'intégrité morale ou le comportement éthique d'un utilisateur.",
      "B": "C'est une règle logique imposée aux données pour garantir la cohérence et la fiabilité des informations stockées.",
      "C": "C'est une restriction opérationnelle définie manuellement par les utilisateurs pour optimiser les performances.",
      "D": "C'est une contrainte imposée exclusivement au système de gestion de base de données (SGBD) pour son propre fonctionnement interne."
    },
    "correct": "B",
    "explanation": "<p>Une <strong>contrainte d'intégrité</strong> est un mécanisme fondamental des SGBD relationnels. Elle consiste en une règle que les données doivent respecter en permanence pour garantir que la base reste dans un état cohérent.</p><ul><li>Elle empêche l'insertion, la mise à jour ou la suppression de données qui violeraient les règles métier ou structurelles.</li><li>Exemples courants : <em>PRIMARY KEY</em> (unicité), <em>FOREIGN KEY</em> (intégrité référentielle), <em>CHECK</em> (validation de domaine), <em>NOT NULL</em>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une confusion linguistique ; l'intégrité des données est un concept technique informatique et non une mesure de probité humaine."
      },
      {
        "l": "C",
        "t": "Si les utilisateurs peuvent concevoir les règles, la contrainte n'est pas une simple 'bonne marche', mais une exigence technique formelle appliquée par le SGBD."
      },
      {
        "l": "D",
        "t": "Le SGBD est l'outil qui *applique* la contrainte, mais l'objet de la contrainte est la donnée elle-même, et non le fonctionnement interne du logiciel."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la finalité des contraintes d'intégrité : la protection de la cohérence sémantique et structurelle des données.",
    "summary": [
      "Une contrainte d'intégrité assure la cohérence des données au sein d'une base.",
      "Elle est appliquée par le SGBD pour rejeter toute donnée non conforme.",
      "Les types incluent l'intégrité d'entité, référentielle et de domaine.",
      "C'est un pilier de la fiabilité d'un système d'information."
    ]
  },
  {
    "num": "Q18",
    "partie": "Administration de Bases de Données",
    "q": "Dans le contexte des Systèmes de Gestion de Bases de Données (SGBD), comment définit-on une transaction ?",
    "choices": {
      "A": "Une opération financière réalisée entre deux entités bancaires ou boursières.",
      "B": "Une unité logique d'exécution qui regroupe un ensemble d'opérations sur la base de données devant être traitées comme un tout indivisible.",
      "C": "Un programme informatique spécifique dédié uniquement à la lecture ou à l'écriture de données.",
      "D": "Une architecture technique structurée en trois niveaux pour organiser les schémas de données."
    },
    "correct": "B",
    "explanation": "<p>Une <strong>transaction</strong> dans un SGBD est définie par les propriétés <strong>ACID</strong> (Atomicité, Cohérence, Isolation, Durabilité). Elle représente une séquence d'opérations considérées comme une seule unité de travail.</p><p>Soit toutes les opérations sont validées (commit), soit elles sont toutes annulées (rollback), garantissant ainsi l'intégrité des données même en cas de panne système.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci est une définition du langage courant ou financier, et non technique au sens informatique."
      },
      {
        "l": "C",
        "t": "Bien qu'une transaction contienne des lectures et écritures, cette définition est trop réductrice car elle omet la notion cruciale d'indivisibilité (atomicité)."
      },
      {
        "l": "D",
        "t": "L'architecture à trois niveaux (externe, conceptuelle, interne) fait référence à l'organisation des schémas de données (norme ANSI/SPARC) et non aux transactions."
      }
    ],
    "examiner": "Évalue la compréhension des concepts fondamentaux de gestion de l'intégrité des données et de la notion d'atomicité dans les systèmes transactionnels.",
    "summary": [
      "Une transaction est une unité logique indivisible de traitement de données.",
      "Elle doit respecter les propriétés ACID pour garantir la fiabilité.",
      "L'état de la base de données doit rester cohérent avant et après la transaction.",
      "En cas d'échec d'une seule opération, l'intégralité des changements doit être annulée."
    ]
  },
  {
    "num": "Q19",
    "partie": "Administration de Bases de Données",
    "q": "Que signifie l'acronyme ACID dans le contexte des transactions en base de données ?",
    "choices": {
      "A": "Actif, Combatif, Intrépide, Déterminé",
      "B": "Atomicity, Consistency, Isolation, Durability",
      "C": "Anatole Conrad et Isidore Dubay, les inventeurs de la notion de transaction",
      "D": "Atomicité, Constance, Isolation, Durable"
    },
    "correct": "B",
    "explanation": "<p>L'acronyme <strong>ACID</strong> désigne les quatre propriétés fondamentales garantissant la fiabilité des transactions dans un système de gestion de base de données (SGBD) :</p><ul><li><strong>Atomicity (Atomicité) :</strong> La transaction est traitée comme une unité indivisible ; soit tout est validé, soit rien ne l'est.</li><li><strong>Consistency (Cohérence) :</strong> La transaction fait passer la base de données d'un état valide à un autre état valide, en respectant toutes les contraintes.</li><li><strong>Isolation :</strong> Les transactions concurrentes ne doivent pas interférer entre elles.</li><li><strong>Durability (Durabilité) :</strong> Une fois validée, une transaction est enregistrée de manière permanente, même en cas de panne système.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Il s'agit d'une description fantaisiste sans rapport avec l'informatique ou les systèmes transactionnels."
      },
      {
        "l": "C",
        "t": "Ceci est une explication humoristique ou fictive ; les propriétés ACID ne tirent pas leur nom de noms de personnes."
      },
      {
        "l": "D",
        "t": "Bien que ces termes soient proches de la traduction française, l'acronyme académique et technique standard est l'original anglais."
      }
    ],
    "examiner": "Évaluer la connaissance théorique des propriétés fondamentales garantissant l'intégrité des données dans les systèmes transactionnels.",
    "summary": [
      "ACID est l'acronyme pour Atomicity, Consistency, Isolation, Durability.",
      "Ces propriétés assurent l'intégrité et la fiabilité des opérations en base de données.",
      "L'atomicité garantit le principe du 'tout ou rien'.",
      "L'isolation et la cohérence protègent la base contre les accès simultanés et les états invalides.",
      "La durabilité assure la persistance des données après validation."
    ]
  },
  {
    "num": "Q20",
    "partie": "Administration de Bases de Données",
    "q": "Parmi les options suivantes, quel est le modèle de données conceptuel largement utilisé pour la conception de bases de données ?",
    "choices": {
      "A": "Modèle hiérarchique",
      "B": "Modèle entité-association",
      "C": "Modèle graphique",
      "D": "Méthode Merise"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>modèle entité-association</strong> (ou modèle conceptuel des données - MCD) est le standard utilisé pour représenter la structure logique d'une base de données.</p><ul><li>Il permet d'identifier les <strong>entités</strong> (objets métiers), leurs <strong>attributs</strong> et les <strong>associations</strong> (relations) qui les lient.</li><li>Bien que <em>Merise</em> soit une méthode de conception utilisant ce modèle, 'entité-association' est le nom propre du modèle de données lui-même.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le modèle hiérarchique est un modèle de données logique ancien, organisé sous forme d'arborescence, et non un modèle de conception conceptuelle."
      },
      {
        "l": "C",
        "t": "Le terme 'modèle graphique' est trop générique et ne désigne pas un modèle de données standard en ingénierie de bases de données."
      },
      {
        "l": "D",
        "t": "Merise est une méthode complète de conduite de projets informatiques et non un modèle de données en soi, même si elle repose sur le formalisme entité-association."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la modélisation de données et la distinction entre méthode de conception et modèle de représentation.",
    "summary": [
      "Le modèle entité-association est l'outil principal pour la conception conceptuelle des bases de données.",
      "Il permet de définir les objets (entités) et les relations entre eux avant toute implémentation technique.",
      "Merise est une méthode de développement et non un modèle de données.",
      "Comprendre la différence entre modèle logique (hiérarchique) et modèle conceptuel est essentiel pour le DBA."
    ]
  },
  {
    "num": "Q21",
    "partie": "Administration de Bases de Données",
    "q": "Quelle est la définition précise de l'architecture ANSI/SPARC dans le domaine des systèmes de gestion de bases de données ?",
    "choices": {
      "A": "Une architecture organisée en trois niveaux pour la structuration des schémas de bases de données.",
      "B": "Un style architectural historique originaire du Népal au XIIIe siècle.",
      "C": "Une construction théorique arbitraire conçue uniquement à des fins pédagogiques.",
      "D": "Une architecture organisée en quatre niveaux spécifique aux bases de données relationnelles."
    },
    "correct": "A",
    "explanation": "<p>L'architecture <strong>ANSI/SPARC</strong>, proposée par le comité ANSI en 1975, est un modèle de référence pour les Systèmes de Gestion de Bases de Données (SGBD). Elle repose sur une séparation en trois niveaux distincts :</p><ul><li><strong>Niveau Externe (ou Vues) :</strong> Correspond à la perception des données par les utilisateurs finaux ou les applications.</li><li><strong>Niveau Conceptuel :</strong> Représente la structure logique globale de la base de données (ce qui est stocké et les relations entre les données).</li><li><strong>Niveau Interne (ou Physique) :</strong> Définit comment les données sont physiquement stockées et organisées sur le support de stockage.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Il s'agit d'une réponse absurde introduite comme distracteur, sans lien avec l'informatique."
      },
      {
        "l": "C",
        "t": "C'est une réponse humoristique dénuée de fondement technique ; le modèle ANSI/SPARC est un standard industriel mondialement reconnu."
      },
      {
        "l": "D",
        "t": "L'architecture ANSI/SPARC comporte strictement trois niveaux et n'est pas limitée aux bases de données relationnelles, bien qu'elle puisse s'y appliquer."
      }
    ],
    "examiner": "Évaluer la compréhension des fondements théoriques de l'organisation des données et de l'indépendance logique et physique au sein d'un SGBD.",
    "summary": [
      "L'architecture ANSI/SPARC divise le SGBD en trois niveaux : externe, conceptuel et interne.",
      "L'objectif principal est de garantir l'indépendance entre les données et les applications.",
      "Le niveau conceptuel sert d'interface intermédiaire entre la vue utilisateur et le stockage physique.",
      "Ce modèle permet de modifier la structure physique sans impacter les applications des utilisateurs."
    ]
  }
];
