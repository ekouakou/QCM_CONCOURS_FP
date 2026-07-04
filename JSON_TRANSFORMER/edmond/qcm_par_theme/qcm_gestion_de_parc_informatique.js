const QCM = [
  {
    "num": "Q1",
    "partie": "Gestion de Parc Informatique",
    "q": "Parmi les solutions logicielles suivantes, laquelle est spécifiquement conçue pour la gestion d'un parc informatique (ITSM/ITAM) ?",
    "choices": {
      "A": "Acronis",
      "B": "GLPI",
      "C": "GRR",
      "D": "Cobian Backup"
    },
    "correct": "B",
    "explanation": "<p>Le logiciel <strong>GLPI</strong> (Gestionnaire Libre de Parc Informatique) est la référence open-source dédiée à la gestion des actifs informatiques (ITAM) et au support technique (ITSM). Il permet de répertorier le matériel, les logiciels, les licences et de gérer les tickets d'incidents.</p><ul><li><strong>Acronis</strong> est principalement orienté vers la sauvegarde et la protection des données.</li><li><strong>GRR</strong> est un outil de gestion de ressources (salles, matériel) plus orienté vers la planification.</li><li><strong>Cobian Backup</strong> est un utilitaire spécialisé dans la sauvegarde de fichiers.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Acronis est une solution de sauvegarde et de cybersécurité, non un outil de gestion d'inventaire informatique."
      },
      {
        "l": "C",
        "t": "GRR (Gestion et Réservation de Ressources) est utilisé pour la gestion de planning, et non pour l'inventaire technique d'un parc."
      },
      {
        "l": "D",
        "t": "Cobian Backup est un logiciel de sauvegarde de données, sans aucune fonction de gestion de parc."
      }
    ],
    "examiner": "Évaluer la connaissance des outils logiciels spécialisés en administration système et en gestion des actifs IT.",
    "summary": [
      "GLPI est l'outil standard pour l'inventaire et le support IT.",
      "Acronis se focalise sur la protection et la sauvegarde des données.",
      "Il est crucial de distinguer les outils d'ITAM (Asset Management) des outils de sauvegarde.",
      "La gestion de parc nécessite des fonctionnalités d'inventaire et de suivi du cycle de vie des équipements."
    ]
  },
  {
    "num": "Q2",
    "partie": "Gestion de Parc Informatique",
    "q": "Quelle est la procédure immédiate recommandée pour empêcher la propagation d'un virus sur un réseau local ?",
    "choices": {
      "A": "Arrêter le serveur principal du réseau.",
      "B": "Déconnecter la machine infectée du réseau.",
      "C": "Éteindre la machine infectée.",
      "D": "Couper l'accès à Internet pour l'ensemble du réseau."
    },
    "correct": "B",
    "explanation": "<p>En cas de suspicion d'infection virale, l'objectif prioritaire est de <strong>circonscrire la menace</strong> sans détruire les preuves numériques ni paralyser inutilement l'activité. La déconnexion physique ou logique du poste infecté isole immédiatement le vecteur de propagation tout en permettant aux administrateurs de réaliser une analyse forensique ultérieure.</p><ul><li>L'arrêt simple (C) peut effacer des traces en mémoire vive (RAM) nécessaires à l'analyse.</li><li>Arrêter le serveur (A) ou couper Internet (D) entraîne une interruption de service globale disproportionnée et inefficace contre une propagation latérale en réseau local.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Arrêter le serveur est une mesure radicale qui paralyse l'ensemble de l'organisation sans stopper la propagation entre postes clients."
      },
      {
        "l": "C",
        "t": "Éteindre la machine supprime les données volatiles en RAM, rendant plus difficile l'identification du virus et de son mode opératoire."
      },
      {
        "l": "D",
        "t": "Couper l'accès Internet n'empêche pas la propagation du virus via le réseau local (LAN) et impacte inutilement tous les autres utilisateurs."
      }
    ],
    "examiner": "Évalue la compréhension des procédures de confinement en cybersécurité et la capacité à réagir de manière proportionnée et efficace lors d'un incident de sécurité.",
    "summary": [
      "La priorité en cas d'infection est le confinement immédiat de la source.",
      "La déconnexion réseau permet d'isoler l'hôte infecté tout en préservant ses données volatiles.",
      "Il faut éviter d'éteindre la machine brutalement afin de faciliter l'analyse forensique.",
      "Les mesures de réponse doivent minimiser l'impact sur la disponibilité des services sains."
    ]
  },
  {
    "num": "Q3",
    "partie": "Gestion de Parc Informatique",
    "q": "Quelle est la fonction principale de la technologie RAID (Redundant Array of Independent Disks) dans les systèmes de stockage ?",
    "choices": {
      "A": "Assurer le stockage des données avec des mécanismes de parité et de contrôle.",
      "B": "Effectuer une sauvegarde aléatoire et non contrôlée des fichiers.",
      "C": "Optimiser exclusivement les performances des postes de travail individuels.",
      "D": "Gérer la connectivité et le flux des connexions Internet."
    },
    "correct": "A",
    "explanation": "<p>La technologie <strong>RAID</strong> (Redundant Array of Independent Disks) est une méthode de virtualisation du stockage des données qui combine plusieurs disques durs physiques en une unité logique unique.</p><p>Ses objectifs principaux sont :</p><ul><li><strong>La redondance</strong> : protéger les données contre la panne d'un disque grâce à la parité ou à la duplication (mirroring).</li><li><strong>La performance</strong> : améliorer les vitesses de lecture et d'écriture par le 'striping'.</li></ul><p>Le contrôle de parité est une méthode mathématique permettant de reconstruire les données perdues en cas de défaillance matérielle.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une sauvegarde 'aléatoire et non contrôlée' est l'opposé d'une stratégie de gestion de données fiable. Le RAID assure une intégrité constante."
      },
      {
        "l": "C",
        "t": "Bien que le RAID puisse être utilisé sur des stations de travail, il est prioritairement conçu pour les serveurs et les systèmes de stockage d'entreprise (NAS/SAN)."
      },
      {
        "l": "D",
        "t": "Le RAID concerne uniquement le stockage physique. Il n'a aucun rôle dans la gestion des protocoles ou des connexions réseau Internet."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de redondance et de fiabilité matérielle liés au stockage de données en entreprise.",
    "summary": [
      "La technologie RAID permet de combiner plusieurs disques physiques pour améliorer la fiabilité ou les performances.",
      "Le contrôle de parité est essentiel pour assurer la tolérance aux pannes au sein d'une grappe RAID.",
      "Le RAID n'est pas une solution de sauvegarde en soi, mais un mécanisme de haute disponibilité du stockage.",
      "L'utilisation du RAID est standard dans les environnements serveurs pour garantir la continuité de service."
    ]
  }
];
