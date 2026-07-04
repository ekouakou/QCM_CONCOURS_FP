const QCM = [
  {
    "num": "Q1",
    "partie": "Administration Oracle 11g",
    "q": "Quelle est l'unité fondamentale de stockage et d'échange de données entre les fichiers de données (datafiles), la mémoire (SGA) et les processus dans une base de données Oracle ?",
    "choices": {
      "A": "DB_BLOCK_BUFFERS",
      "B": "DB_KEEP_CACHE_SIZE",
      "C": "DB_RECYCLE_CACHE_SIZE",
      "D": "DB_BLOCK_SIZE"
    },
    "correct": "D",
    "explanation": "<p>Dans une base de données Oracle, le <strong>DB_BLOCK_SIZE</strong> définit la taille du bloc de données, qui est l'unité minimale d'entrée/sortie (I/O) gérée par la base de données. Toutes les lectures et écritures sur le disque, ainsi que les échanges avec le cache de la mémoire (Buffer Cache), s'effectuent par multiples de cette taille de bloc.</p><ul><li><strong>DB_BLOCK_BUFFERS</strong> (déprécié) concernait le nombre de blocs en mémoire.</li><li><strong>DB_KEEP_CACHE_SIZE</strong> et <strong>DB_RECYCLE_CACHE_SIZE</strong> sont des pools spécifiques au sein du Buffer Cache, et non l'unité de mesure elle-même.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est un paramètre obsolète qui définissait le nombre de blocs mis en cache, et non l'unité d'échange elle-même."
      },
      {
        "l": "B",
        "t": "Il s'agit d'un pool de mémoire spécifique destiné à garder des objets fréquemment accédés, pas l'unité d'échange standard."
      },
      {
        "l": "C",
        "t": "Il s'agit d'un pool de mémoire destiné aux objets accédés rarement, pour éviter qu'ils ne saturent le cache principal."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture physique de stockage Oracle et de la notion fondamentale de bloc de données.",
    "summary": [
      "Le DB_BLOCK_SIZE détermine la taille fixe des blocs de données dans toute la base.",
      "Toutes les opérations d'I/O entre le disque et la mémoire se font à l'échelle du bloc.",
      "Cette valeur est définie à la création de la base de données et ne peut être modifiée sans recréation.",
      "Le Buffer Cache de la SGA gère ces blocs pour optimiser les performances d'accès."
    ]
  },
  {
    "num": "Q2",
    "partie": "Administration Oracle 11g",
    "q": "Quelle taille de bloc de données est impossible à configurer pour une base de données Oracle 11g ?",
    "choices": {
      "A": "6 Ko",
      "B": "8 Ko",
      "C": "16 Ko",
      "D": "32 Ko"
    },
    "correct": "A",
    "explanation": "<p>Dans Oracle Database, la taille du bloc (<strong>DB_BLOCK_SIZE</strong>) doit impérativement être une puissance de 2, comprise entre 2 Ko et 32 Ko.</p><ul><li><strong>2 Ko, 4 Ko, 8 Ko, 16 Ko, 32 Ko</strong> sont des valeurs valides.</li><li><strong>6 Ko</strong> n'est pas une puissance de 2 et n'est pas supporté par le moteur Oracle.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "8 Ko est une taille standard et très courante dans les environnements Oracle."
      },
      {
        "l": "C",
        "t": "16 Ko est une taille de bloc valide et supportée, souvent utilisée pour les bases nécessitant des I/O plus larges."
      },
      {
        "l": "D",
        "t": "32 Ko est la taille maximale autorisée pour un bloc de données dans Oracle."
      }
    ],
    "examiner": "Évaluer la connaissance de l'administrateur concernant les contraintes de configuration système et les limites d'architecture des blocs de données Oracle.",
    "summary": [
      "La taille du bloc de données Oracle doit être une puissance de 2.",
      "La plage supportée s'étend de 2 Ko à 32 Ko.",
      "6 Ko est mathématiquement exclu car non conforme au format de blocage binaire attendu.",
      "La valeur DB_BLOCK_SIZE est définie à la création de la base de données et est difficile à modifier par la suite."
    ]
  },
  {
    "num": "Q3",
    "partie": "Administration Oracle 11g",
    "q": "Quel est le mode de verrouillage par défaut utilisé par Oracle lors d'une opération de modification de données (DML) ?",
    "choices": {
      "A": "Verrouillage de table",
      "B": "Verrouillage d'enregistrement (Row-level locking)",
      "C": "Verrouillage de segment",
      "D": "Verrouillage de page de données"
    },
    "correct": "B",
    "explanation": "<p>Dans Oracle Database, le mécanisme de verrouillage par défaut pour les opérations DML (INSERT, UPDATE, DELETE) est le <strong>verrouillage au niveau de la ligne (Row-level locking)</strong>.</p><p>Contrairement à d'autres systèmes de gestion de base de données qui pourraient verrouiller des pages entières ou des tables, Oracle utilise une approche granulaire. Lorsqu'une ligne est modifiée, Oracle place un verrou exclusif sur cette ligne spécifique dans le bloc de données, permettant à d'autres transactions de lire ou de modifier simultanément d'autres lignes au sein de la même table ou du même bloc.</p><ul><li>Ce mécanisme maximise la <strong>concurrence</strong>.</li><li>Il réduit les risques de blocages (deadlocks) et de contention.</li><li>La gestion des verrous est assurée par l'entrée dans le bloc de données lui-même (ITL - Interested Transaction List).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le verrouillage de table n'est pas le comportement par défaut en DML, bien qu'il puisse être activé explicitement via 'LOCK TABLE', ce qui impacterait sévèrement la performance."
      },
      {
        "l": "C",
        "t": "Le verrouillage de segment n'est pas une unité de verrouillage utilisée pour les données transactionnelles dans Oracle."
      },
      {
        "l": "D",
        "t": "Le verrouillage au niveau de la page est une technique utilisée par certains systèmes comme SQL Server ou DB2, mais pas par Oracle, qui privilégie une granularité plus fine."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier votre compréhension de l'architecture de gestion de la concurrence et de la granularité des verrous dans Oracle.",
    "summary": [
      "Oracle utilise par défaut le verrouillage au niveau de la ligne (Row-level locking).",
      "Ce mode permet une haute concurrence en évitant le verrouillage inutile de tables ou de pages entières.",
      "Les verrous DML sont gérés directement au sein des blocs de données par les listes ITL.",
      "Le verrouillage au niveau de la table est possible mais doit rester une opération exceptionnelle."
    ]
  },
  {
    "num": "Q4",
    "partie": "Administration Oracle 11g",
    "q": "Dans une base de données Oracle, à quel moment le processus d'écriture en arrière-plan 'DBWn' (Database Writer) procède-t-il à l'écriture des blocs de données modifiés (dirty buffers) dans les fichiers de données (datafiles) ?",
    "choices": {
      "A": "Après chaque validation (COMMIT) de la transaction.",
      "B": "Avant la validation de la transaction.",
      "C": "Juste après l'exécution du processus LGWR.",
      "D": "Indépendamment de la validation, de manière asynchrone avant ou après la validation de la transaction."
    },
    "correct": "D",
    "explanation": "<p>Le processus <strong>DBWn</strong> (Database Writer) est responsable de l'écriture des blocs de données modifiés situés dans le <em>Buffer Cache</em> vers les fichiers de données sur le disque.</p><p>Contrairement au processus <strong>LGWR</strong> (Log Writer) qui écrit les journaux de transaction de manière synchrone lors d'un COMMIT, le DBWn travaille de manière <strong>asynchrone</strong>. Il écrit les blocs de données pour libérer de l'espace dans le cache ou pour respecter les points de contrôle (checkpoints), sans attendre qu'une transaction soit validée ou non.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une erreur classique : l'écriture des données n'est pas déclenchée par le COMMIT ; c'est le processus LGWR qui gère les logs lors du commit."
      },
      {
        "l": "B",
        "t": "Le DBWn ne force pas l'écriture avant le commit. Au contraire, Oracle utilise le mécanisme 'Write Ahead Logging' pour garantir la cohérence avant toute écriture sur le disque."
      },
      {
        "l": "C",
        "t": "Bien qu'il existe une interaction indirecte entre les processus, le DBWn n'attend pas spécifiquement la fin de l'exécution du LGWR pour opérer."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur les processus d'arrière-plan Oracle (Background Processes) et la distinction entre la persistance des journaux de transaction (Redo Logs) et celle des données métier (Datafiles).",
    "summary": [
      "Le processus DBWn écrit les blocs de données de manière asynchrone.",
      "L'écriture des données dans les datafiles ne dépend pas directement de la validation (COMMIT) d'une transaction.",
      "Le DBWn intervient pour libérer des buffers ou lors d'un checkpoint.",
      "Le LGWR est le processus chargé de garantir l'intégrité via les logs lors d'un COMMIT."
    ]
  },
  {
    "num": "Q5",
    "partie": "Administration Oracle 11g",
    "q": "Quel est le processus d'arrière-plan Oracle qui est responsable de déclencher et de coordonner le processus d'écriture des données (DBWn) lors d'un checkpoint ?",
    "choices": {
      "A": "DBWn",
      "B": "SMON",
      "C": "PMON",
      "D": "ARCn"
    },
    "correct": "A",
    "explanation": "<p>Dans l'architecture Oracle, le processus <strong>CKPT (Checkpoint Process)</strong> joue un rôle crucial de synchronisation. Lorsqu'un checkpoint survient, le processus CKPT est responsable des actions suivantes :</p><ul><li>Il signale au processus <strong>DBWn (Database Writer)</strong> d'écrire les buffers modifiés (dirty buffers) du cache mémoire (Buffer Cache) vers les fichiers de données (Datafiles).</li><li>Il met à jour les en-têtes des fichiers de données et le fichier de contrôle (Control File) avec le numéro de séquence de log actuel et les informations de checkpoint.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le processus SMON (System Monitor) est chargé de la récupération de l'instance au démarrage, du nettoyage des segments temporaires et de la fusion des espaces libres."
      },
      {
        "l": "C",
        "t": "Le processus PMON (Process Monitor) surveille les processus utilisateurs et effectue le nettoyage des ressources lorsqu'un processus utilisateur échoue brutalement."
      },
      {
        "l": "D",
        "t": "Le processus ARCn (Archiver) est responsable de la copie automatique des fichiers de redo log en ligne (online redo logs) vers une destination d'archivage une fois qu'ils sont remplis."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture des processus d'arrière-plan (Background Processes) et du rôle spécifique du processus CKPT dans la gestion de la cohérence des données.",
    "summary": [
      "Le processus CKPT orchestre les opérations de checkpoint dans une base de données Oracle.",
      "Il signale spécifiquement au processus DBWn d'écrire les buffers modifiés sur le disque.",
      "Le checkpoint garantit que toutes les données modifiées en mémoire sont synchronisées avec les fichiers de données.",
      "CKPT met à jour les en-têtes des fichiers de données et le fichier de contrôle pour assurer la cohérence lors d'une éventuelle récupération."
    ]
  },
  {
    "num": "Q6",
    "partie": "Administration Oracle 11g",
    "q": "Quels sont les fichiers mis à jour par le processus d'arrière-plan DBWn (Database Writer) lors de l'écriture des blocs modifiés ?",
    "choices": {
      "A": "Les fichiers de données (Datafiles)",
      "B": "Les fichiers de données et les fichiers de contrôle",
      "C": "Les fichiers de données et les fichiers journaux (Redo Log files)",
      "D": "Les fichiers journaux et les fichiers de contrôle"
    },
    "correct": "A",
    "explanation": "<p>Le processus <strong>DBWn</strong> (Database Writer) est responsable de l'écriture des blocs modifiés (dits « sales ») présents dans le cache de la base de données (Buffer Cache) vers les <strong>fichiers de données</strong> sur le disque.</p><ul><li>Il assure la persistance des données modifiées.</li><li>Il ne gère pas les fichiers de journalisation (Redo), qui sont la responsabilité du processus LGWR.</li><li>Il ne modifie pas les fichiers de contrôle.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le processus DBWn n'écrit pas dans les fichiers de contrôle ; ces derniers sont mis à jour par le processus CKPT."
      },
      {
        "l": "C",
        "t": "Le processus DBWn n'écrit pas dans les fichiers journaux (Redo Log files) ; cette tâche est effectuée par le processus LGWR."
      },
      {
        "l": "D",
        "t": "Ni les fichiers journaux ni les fichiers de contrôle ne sont mis à jour par le DBWn ; cette réponse est totalement incorrecte."
      }
    ],
    "examiner": "Évaluer la compréhension des rôles des processus d'arrière-plan dans Oracle et la distinction entre les fichiers de données (Datafiles) et les fichiers de journalisation (Redo Log).",
    "summary": [
      "Le processus DBWn (Database Writer) écrit les blocs modifiés du Buffer Cache vers les fichiers de données.",
      "Il ne faut pas confondre DBWn avec le processus LGWR, qui gère l'écriture des journaux de redo.",
      "Le DBWn intervient pour libérer de l'espace dans la mémoire partagée et assurer la pérennité des données.",
      "Les fichiers de contrôle sont mis à jour par d'autres processus, principalement CKPT."
    ]
  },
  {
    "num": "Q7",
    "partie": "Administration Oracle 11g",
    "q": "Quelle est la quantité minimale de mémoire physique (RAM) recommandée pour l'installation d'une instance Oracle Database 11g ?",
    "choices": {
      "A": "256 Mo",
      "B": "512 Mo",
      "C": "1 Go",
      "D": "2 Go"
    },
    "correct": "C",
    "explanation": "<p>Pour l'installation d'Oracle Database 11g, les prérequis officiels indiquent une configuration système minimale. Bien que le logiciel puisse techniquement démarrer avec moins, <strong>1 Go de RAM</strong> est le standard minimal préconisé par Oracle pour garantir la stabilité du serveur et des processus d'arrière-plan (background processes).</p><ul><li>Une mémoire insuffisante peut entraîner des erreurs lors de l'allocation des processus ou des ralentissements critiques.</li><li>Il est toutefois recommandé d'allouer au moins 2 Go ou plus dans des environnements de production réels.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "256 Mo est nettement insuffisant pour supporter les services de base et l'instance Oracle 11g moderne."
      },
      {
        "l": "B",
        "t": "512 Mo est en dessous des recommandations minimales officielles pour une installation standard d'Oracle 11g."
      },
      {
        "l": "D",
        "t": "Bien que 2 Go soient recommandés pour une performance optimale, ce n'est pas le seuil minimal requis pour l'installation."
      }
    ],
    "examiner": "Évaluer la connaissance des prérequis système et matériels indispensables pour le déploiement d'une base de données Oracle.",
    "summary": [
      "La mémoire physique minimale requise pour Oracle 11g est de 1 Go.",
      "Le respect des prérequis RAM est crucial pour éviter des échecs d'installation ou des problèmes de performance.",
      "Dans un contexte réel, 1 Go doit être considéré comme une limite basse et non comme une cible recommandée.",
      "Une planification appropriée des ressources matérielles est une étape essentielle de l'administration Oracle."
    ]
  },
  {
    "num": "Q8",
    "partie": "Administration Oracle 11g",
    "q": "Quelle est la taille minimale de mémoire virtuelle (swap) recommandée pour l'installation d'une instance Oracle Database 11g ?",
    "choices": {
      "A": "512 Mo",
      "B": "1 Go",
      "C": "2 Go",
      "D": "3 Go"
    },
    "correct": "C",
    "explanation": "<p>Pour l'installation d'Oracle Database 11g sur des systèmes d'exploitation type Linux ou Unix, la documentation officielle recommande une configuration spécifique de la mémoire virtuelle (swap) basée sur la quantité de RAM physique présente. Dans le cadre d'une configuration standard, le seuil de <strong>2 Go</strong> est la valeur minimale préconisée pour assurer la stabilité du système lors de l'allocation des processus mémoire (SGA/PGA).</p><ul><li>Si la RAM est comprise entre 1 Go et 2 Go, la swap doit être 1,5 fois la RAM.</li><li>Pour des systèmes plus importants, des ratios spécifiques s'appliquent, mais 2 Go reste la référence standard minimale pour l'installation.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "512 Mo est une valeur obsolète, largement insuffisante pour les besoins en gestion de mémoire des composants Oracle 11g."
      },
      {
        "l": "B",
        "t": "1 Go est insuffisant pour permettre au noyau de gérer efficacement les dépassements de mémoire lors de l'initialisation des instances."
      },
      {
        "l": "D",
        "t": "Bien que 3 Go puisse être une configuration valide et confortable, ce n'est pas le minimum requis spécifié par les prérequis officiels."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance des prérequis système (System Requirements) nécessaires à l'installation d'Oracle Database et la capacité du candidat à consulter la documentation technique de référence.",
    "summary": [
      "La mémoire virtuelle (swap) est critique pour la stabilité d'une base de données Oracle.",
      "Oracle 11g impose un minimum de 2 Go de swap pour une installation standard.",
      "Les besoins en swap évoluent proportionnellement à la quantité de RAM physique installée sur le serveur.",
      "Le respect des prérequis système évite les erreurs d'installation ou les instabilités en cours d'exécution."
    ]
  },
  {
    "num": "Q9",
    "partie": "Administration Oracle 11g",
    "q": "Quel est l'outil d'interface en ligne de commande qui est systématiquement installé avec chaque instance de base de données Oracle ?",
    "choices": {
      "A": "SQL*Plus",
      "B": "iSQL*Plus",
      "C": "SQL*Plus Worksheet",
      "D": "Oracle Enterprise Manager"
    },
    "correct": "A",
    "explanation": "<p><strong>SQL*Plus</strong> est l'outil d'interface en ligne de commande historique et fondamental d'Oracle Database. Il est présent sur chaque installation de serveur de base de données, quel que soit le système d'exploitation, car il constitue la base permettant d'interagir avec le moteur Oracle, même en cas d'indisponibilité d'outils graphiques.</p><ul><li><strong>iSQL*Plus</strong> était une interface basée sur le Web, désormais obsolète depuis les versions récentes.</li><li><strong>SQL*Plus Worksheet</strong> était une interface graphique intégrée à Oracle Enterprise Manager dans des versions antérieures.</li><li><strong>Oracle Enterprise Manager (OEM)</strong> est une suite d'outils d'administration complète, mais son installation peut être optionnelle ou dépendre de composants supplémentaires par rapport à l'installation minimale du moteur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "iSQL*Plus était une version Web obsolète et non standard dans les installations modernes."
      },
      {
        "l": "C",
        "t": "SQL*Plus Worksheet est une interface graphique obsolète liée aux anciennes versions d'OEM."
      },
      {
        "l": "D",
        "t": "Oracle Enterprise Manager est une suite d'administration lourde et facultative, contrairement à SQL*Plus qui est natif."
      }
    ],
    "examiner": "Évaluer la connaissance fondamentale de l'étudiant sur les outils d'administration de base fournis nativement avec le moteur de base de données Oracle.",
    "summary": [
      "SQL*Plus est l'outil d'administration universel et natif d'Oracle.",
      "Il est disponible en ligne de commande sur toutes les plateformes.",
      "Contrairement à OEM, SQL*Plus ne nécessite pas de composants logiciels additionnels pour fonctionner.",
      "iSQL*Plus et SQL*Plus Worksheet sont des technologies obsolètes."
    ]
  },
  {
    "num": "Q10",
    "partie": "Administration Oracle 11g",
    "q": "Qu'est-ce que SQL*Plus au sein de l'écosystème Oracle ?",
    "choices": {
      "A": "Un langage ou un environnement",
      "B": "Un langage uniquement",
      "C": "Un environnement uniquement",
      "D": "Un langage et un environnement"
    },
    "correct": "D",
    "explanation": "<p>SQL*Plus est un outil en ligne de commande fourni par Oracle qui combine deux aspects fondamentaux :</p><ul><li><strong>Un langage :</strong> Il permet d'exécuter des commandes SQL et PL/SQL directement contre la base de données.</li><li><strong>Un environnement :</strong> Il offre des commandes de configuration propres à SQL*Plus (ex: <code>SET</code>, <code>DESCRIBE</code>, <code>SPOOL</code>) pour formater les sorties, gérer la mise en page des rapports et interagir avec l'instance Oracle.</li></ul><p>Considérer SQL*Plus uniquement comme un langage serait restrictif, car il apporte une couche de gestion d'environnement indispensable aux administrateurs et développeurs.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'ou' suggère une exclusivité alors que SQL*Plus cumule les deux fonctions."
      },
      {
        "l": "B",
        "t": "C'est incomplet. SQL*Plus ne se limite pas à l'exécution de requêtes SQL ; il permet aussi de gérer l'affichage et la session."
      },
      {
        "l": "C",
        "t": "C'est incomplet. SQL*Plus n'est pas seulement un shell de configuration, il est également le moteur permettant l'exécution du langage SQL."
      }
    ],
    "examiner": "Évaluer la compréhension de la double nature de l'outil SQL*Plus comme interface de commande et interpréteur de langage.",
    "summary": [
      "SQL*Plus est l'interface en ligne de commande standard d'Oracle.",
      "Il fonctionne comme un interpréteur pour le langage SQL et PL/SQL.",
      "Il propose des commandes spécifiques pour formater et gérer l'environnement de travail.",
      "La polyvalence de SQL*Plus en fait un outil incontournable pour l'administration de bases de données."
    ]
  },
  {
    "num": "Q11",
    "partie": "Administration Oracle 11g",
    "q": "Quels sont les privilèges requis pour pouvoir exécuter l'instruction SQL 'CREATE DATABASE' dans un environnement Oracle ?",
    "choices": {
      "A": "DBA",
      "B": "SYSDBA",
      "C": "SYSOPER",
      "D": "RESOURCE"
    },
    "correct": "B",
    "explanation": "<p>Pour créer une base de données Oracle, il est impératif de disposer de privilèges administratifs de haut niveau. Le privilège <strong>SYSDBA</strong> est nécessaire car l'opération de création de base de données implique la gestion des fichiers de contrôle, des fichiers de données et des redo logs, ce qui nécessite une connexion avec les droits système les plus étendus.</p><ul><li><strong>SYSDBA</strong> : Permet de réaliser les opérations critiques comme la création de la base de données, le démarrage (STARTUP) et l'arrêt (SHUTDOWN) de l'instance.</li><li><strong>SYSOPER</strong> : Permet d'effectuer des opérations de maintenance de base (démarrage, arrêt, sauvegarde), mais ne permet pas la création d'une base de données.</li><li><strong>DBA</strong> : Il s'agit d'un rôle utilisateur, insuffisant pour l'initialisation structurelle de la base de données.</li><li><strong>RESOURCE</strong> : Il s'agit d'un rôle utilisateur permettant la création d'objets au sein d'une base déjà existante.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le rôle DBA est un rôle utilisateur permettant de gérer les objets de la base, mais il n'octroie pas les droits nécessaires au niveau de l'instance pour créer une base."
      },
      {
        "l": "C",
        "t": "Le privilège SYSOPER permet des tâches administratives courantes comme la sauvegarde, mais est trop restrictif pour la création d'une base de données."
      },
      {
        "l": "D",
        "t": "Le rôle RESOURCE est destiné au développement et permet uniquement de créer des tables, des index ou des séquences dans un schéma utilisateur."
      }
    ],
    "examiner": "Évaluer la connaissance de l'utilisateur sur la gestion des droits d'accès administratifs (privilèges système) et la distinction entre les rôles utilisateur et les droits d'administration de l'instance.",
    "summary": [
      "La création d'une base de données est une opération critique nécessitant le privilège SYSDBA.",
      "SYSDBA autorise l'accès complet au dictionnaire de données et aux structures physiques de l'instance.",
      "Le rôle SYSOPER est limité aux opérations de maintenance de base et non à la création structurelle.",
      "Les rôles DBA et RESOURCE ne possèdent pas les droits système pour initialiser une instance Oracle."
    ]
  }
];
