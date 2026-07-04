const QCM = [
  {
    "num": "Q1",
    "partie": "Oracle 11g Administration",
    "q": "Quelle est l'unité fondamentale utilisée par Oracle pour les échanges de données entre les fichiers de données (datafiles), la mémoire (buffer cache) et les processus ?",
    "choices": {
      "A": "DB_BLOCK_BUFFERS",
      "B": "DB_KEEP_CACHE_SIZE",
      "C": "DB_RECYCLE_CACHE_SIZE",
      "D": "DB_BLOCK_SIZE"
    },
    "correct": "D",
    "explanation": "<p>Dans l'architecture Oracle, l'unité minimale de stockage et d'I/O est le <strong>bloc de données</strong>.</p><ul><li><strong>DB_BLOCK_SIZE</strong> définit la taille de ce bloc (ex: 8 Ko), laquelle est constante pour toute la base de données.</li><li>Toutes les lectures et écritures sur le disque se font par multiples entiers de cette taille de bloc.</li><li>Les autres options (DB_BLOCK_BUFFERS, DB_KEEP_CACHE_SIZE, DB_RECYCLE_CACHE_SIZE) sont des paramètres de configuration mémoire liés à la taille du cache, et non à l'unité physique d'échange.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "DB_BLOCK_BUFFERS est un paramètre obsolète (remplacé par DB_CACHE_SIZE) qui définit le nombre de buffers dans le cache, pas l'unité d'échange."
      },
      {
        "l": "B",
        "t": "DB_KEEP_CACHE_SIZE définit la taille du buffer cache conservé en mémoire pour les objets fréquemment accédés."
      },
      {
        "l": "C",
        "t": "DB_RECYCLE_CACHE_SIZE définit la taille du buffer cache pour les objets rarement utilisés afin de libérer rapidement de l'espace."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de l'architecture physique et logique d'une base de données Oracle, notamment la gestion des I/O.",
    "summary": [
      "Le bloc de données (Data Block) est l'unité minimale d'I/O pour Oracle.",
      "La taille du bloc est définie par DB_BLOCK_SIZE et est fixée à la création de la base.",
      "Les échanges entre le disque et la SGA s'effectuent toujours par unités de blocs.",
      "Les paramètres de cache (DB_CACHE_SIZE) gèrent la mémoire, pas l'unité de stockage physique."
    ]
  },
  {
    "num": "Q2",
    "partie": "Oracle 11g Administration",
    "q": "Quel est le mode de verrouillage par défaut utilisé par Oracle Database pour gérer les accès concurrents ?",
    "choices": {
      "A": "Verrouillage de table (Table Locking)",
      "B": "Verrouillage d'enregistrement (Row-level Locking)",
      "C": "Verrouillage de segment (Segment Locking)",
      "D": "Verrouillage de page de données (Page-level Locking)"
    },
    "correct": "B",
    "explanation": "<p>Oracle Database utilise une architecture de <strong>verrouillage au niveau de l'enregistrement (Row-level locking)</strong> comme mécanisme par défaut.</p><p>Cette approche permet une haute concurrence : lorsqu'une transaction modifie une ligne, seul cet enregistrement est verrouillé. Les autres utilisateurs peuvent continuer à lire ou modifier d'autres lignes au sein de la même table sans être bloqués.</p><ul><li><strong>Granularité fine :</strong> Réduit les conflits entre les utilisateurs.</li><li><strong>Performance :</strong> Maximise le débit des transactions simultanées.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le verrouillage de table est utilisé explicitement avec l'instruction 'LOCK TABLE', mais il n'est pas le mode par défaut car il réduirait considérablement la concurrence."
      },
      {
        "l": "C",
        "t": "Le verrouillage au niveau du segment est bien trop large et bloquerait l'accès à une portion importante de la base, ce qui est contraire à la philosophie d'Oracle."
      },
      {
        "l": "D",
        "t": "Le verrouillage au niveau de la page est une technique utilisée par d'autres systèmes de gestion de base de données (comme SQL Server dans certaines configurations), mais pas par Oracle."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension des mécanismes de concurrence et de verrouillage (locking) propres à l'architecture Oracle.",
    "summary": [
      "Oracle utilise par défaut le verrouillage au niveau de la ligne (Row-level locking).",
      "Ce mécanisme favorise une haute concurrence et limite les blocages entre transactions.",
      "Le verrouillage de table est possible mais doit être déclenché manuellement.",
      "L'absence de verrouillage de page distingue Oracle d'autres systèmes SGBD concurrents."
    ]
  },
  {
    "num": "Q3",
    "partie": "Oracle 11g Administration",
    "q": "Dans une base de données Oracle, à quel moment le processus d'écriture en arrière-plan 'DBWn' (Database Writer) écrit-il les blocs de données modifiés dans les fichiers de données (datafiles) ?",
    "choices": {
      "A": "Après chaque validation (commit) de la transaction.",
      "B": "Immédiatement avant la validation de la transaction.",
      "C": "Systématiquement après le processus 'LGWR'.",
      "D": "De manière asynchrone, indépendamment de la validation de la transaction."
    },
    "correct": "D",
    "explanation": "<p>Le processus <strong>DBWn</strong> est responsable de l'écriture des blocs « sales » (modifiés) de la mémoire tampon (Database Buffer Cache) vers les fichiers de données sur le disque.</p><p>Contrairement au processus <strong>LGWR</strong> (Log Writer) qui écrit de manière synchrone lors d'un commit, le DBWn travaille de manière <strong>asynchrone</strong> pour optimiser les performances d'E/S. Il écrit les données en fonction de critères de performance, notamment :</p><ul><li>Lorsque la liste des tampons à écrire atteint un seuil défini.</li><li>En cas de besoin d'espace libre dans le cache.</li><li>Lors d'un point de contrôle (checkpoint).</li><li>Lors d'un timeout ou lors d'un arrêt propre de l'instance.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le commit ne déclenche pas une écriture immédiate par DBWn. C'est le processus LGWR qui garantit la persistance des journaux de transaction lors du commit."
      },
      {
        "l": "B",
        "t": "Le DBWn n'attend jamais la validation d'une transaction pour écrire les données sur le disque ; cette confusion provient du mécanisme 'Write-Ahead Logging' appliqué au LGWR."
      },
      {
        "l": "C",
        "t": "Bien que le LGWR doive terminer son écriture avant que le DBWn ne puisse théoriquement écrire les données, le DBWn ne suit pas cet ordre comme une règle stricte de déclenchement."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture des processus Oracle et la distinction entre la persistance transactionnelle (Redo Logs) et la gestion des fichiers de données (Datafiles).",
    "summary": [
      "Le processus DBWn assure l'écriture asynchrone des blocs modifiés depuis la mémoire vers les fichiers de données.",
      "L'écriture des données sur disque ne dépend pas directement de la validation (commit) de la transaction.",
      "Le DBWn optimise les performances en regroupant plusieurs écritures en une seule opération d'E/S (écriture multi-blocs).",
      "La cohérence des données est maintenue par les journaux de transaction (Redo Logs) en cas d'incident avant le passage du DBWn."
    ]
  },
  {
    "num": "Q4",
    "partie": "Oracle 11g Administration",
    "q": "Quel processus d'arrière-plan Oracle est responsable de la mise à jour des en-têtes des fichiers de données et des fichiers de contrôle avec les informations de point de contrôle (checkpoint) ?",
    "choices": {
      "A": "DBWn",
      "B": "SMON",
      "C": "PMON",
      "D": "ARCn"
    },
    "correct": "A",
    "explanation": "<p>Dans l'architecture Oracle, le processus <strong>CKPT (Checkpoint)</strong> est chargé de signaler aux autres processus que les informations de point de contrôle doivent être mises à jour.</p><p>Le processus <strong>DBWn (Database Writer)</strong>, déclenché par le signal du CKPT, écrit les blocs modifiés de la mémoire cache (buffer cache) vers les fichiers de données physiques. Le processus CKPT s'assure également que les en-têtes des fichiers de données (datafiles) et les fichiers de contrôle (control files) sont synchronisés avec les informations du SCN (System Change Number) actuel.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le processus SMON (System Monitor) est principalement responsable de la récupération de l'instance lors du démarrage et du nettoyage des segments temporaires."
      },
      {
        "l": "C",
        "t": "Le processus PMON (Process Monitor) gère la récupération des processus utilisateur en cas d'échec et libère les ressources associées."
      },
      {
        "l": "D",
        "t": "Le processus ARCn (Archiver) est dédié à la copie automatique des fichiers de redo logs en ligne vers un emplacement d'archivage lorsque le mode ARCHIVELOG est activé."
      }
    ],
    "examiner": "L'examinateur évalue la connaissance des rôles spécifiques des processus d'arrière-plan (Background Processes) dans l'architecture mémoire/processus d'une instance Oracle.",
    "summary": [
      "Le processus CKPT déclenche le point de contrôle pour assurer la cohérence de la base de données.",
      "Le processus DBWn écrit les blocs modifiés de la mémoire vers le stockage physique.",
      "Le CKPT met à jour les fichiers de contrôle et les en-têtes des fichiers de données.",
      "Les autres processus comme SMON, PMON et ARCn ont des responsabilités distinctes de maintenance et de gestion des incidents."
    ]
  },
  {
    "num": "Q5",
    "partie": "Oracle 11g Administration",
    "q": "Quels sont les fichiers mis à jour par le processus d'écriture de base de données (DBWn) lors du transfert des blocs modifiés depuis la mémoire ?",
    "choices": {
      "A": "Les fichiers de données (Datafiles).",
      "B": "Les fichiers de données et les fichiers de contrôle.",
      "C": "Les fichiers de données et les fichiers journaux (Redo Logs).",
      "D": "Les fichiers journaux et les fichiers de contrôle."
    },
    "correct": "A",
    "explanation": "<p>Le processus <strong>DBWn (Database Writer)</strong> a pour rôle principal de maintenir la cohérence des données sur le disque en écrivant les blocs modifiés (dits 'dirty blocks') situés dans le <strong>Database Buffer Cache</strong> vers les <strong>fichiers de données (Datafiles)</strong>.</p><p>Contrairement aux idées reçues :</p><ul><li>Les <strong>fichiers journaux (Redo Logs)</strong> sont écrits par le processus LGWR (Log Writer).</li><li>Les <strong>fichiers de contrôle (Control Files)</strong> sont mis à jour par les processus d'arrière-plan comme CKPT (Checkpoint) lors des événements de synchronisation de la base de données.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le processus DBWn ne gère pas les fichiers de contrôle ; ces derniers sont mis à jour lors des points de contrôle (checkpoints) pour enregistrer les numéros de séquence et les SCN."
      },
      {
        "l": "C",
        "t": "Le processus DBWn ne gère pas les fichiers journaux (Redo Logs), qui sont exclusivement écrits par le processus LGWR (Log Writer) pour garantir la journalisation des transactions."
      },
      {
        "l": "D",
        "t": "Cette option est totalement incorrecte car elle exclut les fichiers de données, qui sont la destination principale des blocs modifiés traités par DBWn."
      }
    ],
    "examiner": "L'examinateur évalue la connaissance des processus d'arrière-plan d'Oracle (Background Processes) et la séparation des responsabilités concernant les opérations d'entrée/sortie sur les différents types de fichiers physiques.",
    "summary": [
      "Le processus DBWn écrit uniquement les blocs 'dirty' dans les fichiers de données.",
      "LGWR est le seul processus responsable de l'écriture dans les Redo Logs.",
      "Les fichiers de contrôle sont gérés par le processus CKPT pour la maintenance de la structure de la base.",
      "Comprendre le rôle de chaque processus est crucial pour diagnostiquer les goulots d'étranglement en termes d'I/O."
    ]
  },
  {
    "num": "Q6",
    "partie": "Oracle 11g Administration",
    "q": "Quelle est la quantité de mémoire vive (RAM) physique minimale requise pour effectuer une installation standard d'Oracle Database 11g ?",
    "choices": {
      "A": "256 Mo",
      "B": "512 Mo",
      "C": "1 Go",
      "D": "2 Go"
    },
    "correct": "C",
    "explanation": "<p>Pour une installation standard de la version <strong>Oracle Database 11g (Release 2)</strong>, la documentation officielle de référence préconise une mémoire physique minimale de <strong>1 Go (1024 Mo)</strong>.</p><p>Bien qu'il soit techniquement possible de tenter une installation sur des systèmes ayant moins de RAM, cela est fortement déconseillé pour garantir la stabilité et les performances du moteur de base de données.</p><ul><li><strong>RAM recommandée :</strong> Pour un environnement de production, il est conseillé de disposer d'au moins 2 Go ou plus.</li><li><strong>Swap :</strong> Il est également nécessaire de prévoir un espace de swap suffisant (généralement 1,5 à 2 fois la taille de la RAM).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "256 Mo est largement insuffisant pour faire fonctionner le processus d'installation d'Oracle 11g et les services de base associés."
      },
      {
        "l": "B",
        "t": "512 Mo était le minimum requis pour d'anciennes versions (comme Oracle 9i ou 10g), mais cela ne suffit plus pour la version 11g."
      },
      {
        "l": "D",
        "t": "2 Go est une valeur recommandée pour de meilleures performances, mais elle ne constitue pas le seuil minimal strict exigé par le programme d'installation."
      }
    ],
    "examiner": "Évaluer la connaissance du candidat sur les prérequis matériels nécessaires à l'installation d'une base de données Oracle, afin de s'assurer de sa capacité à préparer correctement un environnement serveur.",
    "summary": [
      "La configuration minimale requise pour Oracle 11g est de 1 Go de mémoire vive (RAM).",
      "Les installations de versions modernes d'Oracle exigent des ressources matérielles significatives pour éviter les erreurs de déploiement.",
      "Il est crucial de vérifier la documentation de compatibilité (Certification Matrix) avant toute installation.",
      "L'espace d'échange (swap) doit également être dimensionné en fonction de la mémoire physique disponible."
    ]
  },
  {
    "num": "Q7",
    "partie": "Oracle 11g Administration",
    "q": "Quelle est la taille minimale de mémoire virtuelle (swap) recommandée pour une installation standard d'une base de données Oracle 11g ?",
    "choices": {
      "A": "512 Mo",
      "B": "1 Go",
      "C": "2 Go",
      "D": "3 Go"
    },
    "correct": "C",
    "explanation": "<p>Pour l'installation d'Oracle Database 11g, Oracle spécifie des prérequis stricts concernant l'espace d'échange (swap space) ou la mémoire virtuelle. Pour une configuration standard, la recommandation officielle est d'allouer au moins <strong>2 Go</strong> de mémoire virtuelle.</p><ul><li>Si la RAM est inférieure à 2 Go, la mémoire virtuelle doit être le double de la RAM.</li><li>Si la RAM est comprise entre 2 Go et 16 Go, la mémoire virtuelle doit être égale à la RAM.</li><li>La valeur de 2 Go est la norme minimale recommandée pour garantir la stabilité du processus d'installation et de l'instance Oracle.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "512 Mo est une valeur largement insuffisante pour les besoins d'Oracle 11g et entraînerait probablement un échec lors des vérifications préalables (prerequisite checks)."
      },
      {
        "l": "B",
        "t": "1 Go est inférieur aux recommandations de base pour l'installation d'un moteur de base de données Oracle, qui nécessite davantage de ressources pour le démarrage des processus d'arrière-plan."
      },
      {
        "l": "D",
        "t": "Bien que 3 Go dépasse le minimum requis, ce n'est pas la réponse standard définie dans les manuels d'installation Oracle pour le seuil minimal de configuration."
      }
    ],
    "examiner": "L'examinateur vérifie que le candidat connaît les prérequis matériels et système indispensables à l'installation d'une instance Oracle.",
    "summary": [
      "L'installation d'Oracle 11g impose des prérequis minimaux de mémoire virtuelle.",
      "La valeur recommandée standard pour la mémoire d'échange est de 2 Go.",
      "L'installateur Oracle effectue une vérification automatique de ces prérequis avant de lancer l'installation.",
      "Une mémoire virtuelle insuffisante peut provoquer des erreurs d'instabilité ou un blocage du programme d'installation (OUI - Oracle Universal Installer)."
    ]
  },
  {
    "num": "Q8",
    "partie": "Oracle 11g Administration",
    "q": "Quel est l'outil en ligne de commande standard présent sur chaque installation de serveur de base de données Oracle ?",
    "choices": {
      "A": "SQL*Plus",
      "B": "iSQL*Plus",
      "C": "SQL*Plus Worksheet",
      "D": "Oracle Enterprise Manager"
    },
    "correct": "A",
    "explanation": "<p><strong>SQL*Plus</strong> est l'interface en ligne de commande historique et universelle d'Oracle. Contrairement aux autres interfaces graphiques ou basées sur le Web qui peuvent varier selon les versions ou nécessiter des composants supplémentaires (comme un serveur d'applications), SQL*Plus est inclus nativement dans l'installation de base de tout serveur Oracle.</p><ul><li><strong>SQL*Plus :</strong> Outil robuste, présent dans toutes les versions.</li><li><strong>iSQL*Plus :</strong> Obsolète depuis Oracle 11g et supprimé dans les versions ultérieures.</li><li><strong>SQL*Plus Worksheet :</strong> Interface intégrée autrefois à Oracle Enterprise Manager, aujourd'hui retirée.</li><li><strong>Oracle Enterprise Manager :</strong> Interface d'administration complexe nécessitant une installation et une configuration tierces.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "iSQL*Plus est une interface basée sur le navigateur qui a été dépréciée puis supprimée à partir de la version 11g."
      },
      {
        "l": "C",
        "t": "SQL*Plus Worksheet était une interface graphique Java très limitée qui n'est plus supportée ni incluse dans les installations modernes."
      },
      {
        "l": "D",
        "t": "Oracle Enterprise Manager est un outil de gestion global qui nécessite des services supplémentaires et n'est pas un simple utilitaire de ligne de commande natif."
      }
    ],
    "examiner": "Évaluer la connaissance des outils d'administration de base de données Oracle et la distinction entre les outils hérités (obsolètes) et les outils standards.",
    "summary": [
      "SQL*Plus est l'outil d'administration en ligne de commande indispensable et universel.",
      "Il est présent nativement sur toute instance de base de données Oracle installée.",
      "iSQL*Plus et SQL*Plus Worksheet sont des interfaces obsolètes et retirées des versions récentes.",
      "L'administration Oracle repose principalement sur la maîtrise de SQL*Plus pour les tâches de maintenance directe."
    ]
  },
  {
    "num": "Q9",
    "partie": "Oracle 11g Administration",
    "q": "Quelle est la nature exacte de l'outil SQL*Plus dans l'écosystème Oracle ?",
    "choices": {
      "A": "Un langage de programmation ou un environnement d'exécution.",
      "B": "Un langage de programmation exclusivement.",
      "C": "Un environnement d'exécution exclusivement.",
      "D": "À la fois un langage de script et un environnement d'interaction utilisateur."
    },
    "correct": "D",
    "explanation": "<p><strong>SQL*Plus</strong> est une interface en ligne de commande fondamentale pour les bases de données Oracle. Il remplit une double fonction :</p><ul><li><strong>Environnement d'interaction :</strong> Il permet à l'utilisateur de se connecter à l'instance, de configurer les paramètres de session et de formater les sorties des requêtes.</li><li><strong>Langage de script :</strong> Il possède son propre langage de commande (commandes internes comme <code>DESCRIBE</code>, <code>SET</code>, <code>SPOOL</code>) permettant d'automatiser des tâches d'administration et de génération de rapports.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette réponse est trop restrictive en utilisant la conjonction 'ou', suggérant une exclusivité qui n'existe pas."
      },
      {
        "l": "B",
        "t": "Réduire SQL*Plus à un simple langage omet sa fonction d'interface interactive et de gestion de session."
      },
      {
        "l": "C",
        "t": "Réduire SQL*Plus à un environnement omet ses capacités de traitement de scripts et de commandes spécifiques."
      }
    ],
    "examiner": "Évaluer si le candidat comprend la dualité fonctionnelle de l'outil SQL*Plus (interface et moteur de script).",
    "summary": [
      "SQL*Plus est l'interface en ligne de commande standard fournie par Oracle.",
      "Il agit comme un environnement permettant la connexion et la configuration de la session utilisateur.",
      "Il intègre un langage de commandes dédié pour automatiser les tâches via des scripts.",
      "SQL*Plus est essentiel pour l'exécution des ordres SQL et PL/SQL directement au sein de la base."
    ]
  },
  {
    "num": "Q10",
    "partie": "Oracle 11g Administration",
    "q": "Quels privilèges sont nécessaires pour pouvoir exécuter l'instruction SQL permettant de créer une base de données dans un environnement Oracle ?",
    "choices": {
      "A": "DBA",
      "B": "SYSDBA",
      "C": "SYSOPER",
      "D": "RESOURCE"
    },
    "correct": "B",
    "explanation": "<p>Pour créer une instance et une base de données Oracle, l'utilisateur doit posséder des privilèges administratifs de haut niveau. Le privilège <strong>SYSDBA</strong> est le rôle requis pour effectuer des opérations de maintenance profonde telles que <code>STARTUP</code>, <code>SHUTDOWN</code>, et <code>CREATE DATABASE</code>.</p><ul><li><strong>SYSDBA</strong> : Accorde un accès complet à l'instance, incluant la création et la suppression de la base.</li><li><strong>SYSOPER</strong> : Permet des opérations de gestion (démarrage/arrêt), mais ne permet pas la création de la structure physique de la base.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que le rôle DBA soit puissant pour la gestion des objets au sein d'une base existante, il ne suffit pas à lui seul pour créer une instance de base de données à partir de zéro."
      },
      {
        "l": "C",
        "t": "Le rôle SYSOPER permet de gérer l'état de l'instance (démarrage/arrêt), mais il manque des privilèges critiques pour manipuler les fichiers de données et créer la base."
      },
      {
        "l": "D",
        "t": "Le rôle RESOURCE est destiné aux développeurs pour créer des objets (tables, index) dans un schéma utilisateur et ne possède aucun privilège administratif système."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension des rôles administratifs spécifiques d'Oracle et la distinction entre la gestion de l'instance (SYSDBA vs SYSOPER) et la gestion des données utilisateur.",
    "summary": [
      "La création d'une base de données nécessite le privilège SYSDBA.",
      "SYSDBA est le rôle de plus haut niveau pour l'administration système Oracle.",
      "Le rôle SYSOPER est limité aux tâches opérationnelles sans accès aux données des utilisateurs.",
      "Le rôle DBA est insuffisant pour les opérations de création physique de l'instance."
    ]
  },
  {
    "num": "Q11",
    "partie": "Oracle 11g Administration",
    "q": "Parmi les composants suivants, lequel ne constitue pas un élément structurel de base d'une instance ou d'une base de données Oracle ?",
    "choices": {
      "A": "Table",
      "B": "Fichier de données (Datafile)",
      "C": "Fichier journaux (Redo Log File)",
      "D": "Fichier de contrôle (Control File)"
    },
    "correct": "A",
    "explanation": "<p>Dans l'architecture Oracle, la distinction entre les <strong>structures physiques</strong> et les <strong>objets logiques</strong> est fondamentale.</p><ul><li>Les <strong>fichiers de données</strong> (datafiles), les <strong>fichiers de contrôle</strong> (control files) et les <strong>fichiers de journaux</strong> (redo log files) sont des composants physiques essentiels sans lesquels une base de données Oracle ne peut fonctionner.</li><li>La <strong>Table</strong> est un <strong>objet logique</strong> stocké à l'intérieur d'un tablespace, lequel est composé de fichiers de données. Une table n'est donc pas un composant structurel de la base elle-même, mais une donnée utilisateur contenue dans celle-ci.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Les fichiers de données sont des composants physiques indispensables pour stocker les blocs de données de la base."
      },
      {
        "l": "C",
        "t": "Les fichiers journaux (Redo Log) sont critiques pour la récupération et la cohérence des transactions, ils font partie intégrante de l'architecture physique."
      },
      {
        "l": "D",
        "t": "Le fichier de contrôle est indispensable au démarrage de l'instance et au suivi de la structure physique de la base."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre les structures physiques (fichiers) et les objets logiques (objets schéma) dans Oracle.",
    "summary": [
      "Les bases de données Oracle sont composées de fichiers physiques : Datafiles, Redo Logs et Control Files.",
      "Les tables sont des objets logiques créés par les utilisateurs à l'intérieur de la base.",
      "Une base de données peut exister sans aucune table, mais ne peut pas fonctionner sans ses fichiers physiques.",
      "La confusion entre structure physique (stockage) et objet logique (données) est un point classique d'examen."
    ]
  }
];
