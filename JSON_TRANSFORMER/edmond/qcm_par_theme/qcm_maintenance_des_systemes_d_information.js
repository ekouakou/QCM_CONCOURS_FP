const QCM = [
  {
    "num": "Q1",
    "partie": "Maintenance des Systèmes d'Information",
    "q": "Combien de types de maintenance sont généralement distingués dans un contrat de maintenance logicielle ou matérielle ?",
    "choices": {
      "A": "3 types de maintenance",
      "B": "2 types de maintenance",
      "C": "5 types de maintenance",
      "D": "4 types de maintenance"
    },
    "correct": "B",
    "explanation": "<p>Dans le cadre des contrats de maintenance informatique standard, on distingue principalement deux catégories :</p><ul><li><strong>La maintenance corrective :</strong> qui consiste à corriger les anomalies ou les bugs constatés par les utilisateurs.</li><li><strong>La maintenance évolutive :</strong> qui consiste à faire évoluer le système en fonction des nouveaux besoins, de la législation ou des changements technologiques.</li></ul><p>Bien que certains référentiels normatifs comme l'AFNOR (NF X 60-010) puissent distinguer davantage de sous-catégories (maintenance préventive, curative, adaptative, perfective), la distinction fondamentale dans les contrats de services (SLA) repose sur ce binôme : corriger l'existant vs faire évoluer l'existant.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le chiffre 3 est souvent confondu avec l'ajout de la maintenance préventive, mais contractuellement, elle est souvent regroupée avec l'évolutive."
      },
      {
        "l": "C",
        "t": "5 types est une classification trop granulaire qui dépasse le cadre des contrats de maintenance habituels."
      },
      {
        "l": "D",
        "t": "4 types correspond à une classification technique (Curative, Préventive, Adaptative, Perfective) qui est rarement utilisée comme base de découpage contractuel unique."
      }
    ],
    "examiner": "Évaluer la connaissance des concepts fondamentaux de la maintenance des systèmes et leur formalisation contractuelle.",
    "summary": [
      "Les contrats de maintenance informatique se concentrent majoritairement sur deux piliers.",
      "La maintenance corrective corrige les dysfonctionnements et bugs.",
      "La maintenance évolutive adapte le système aux nouveaux besoins des utilisateurs.",
      "Comprendre cette distinction est crucial pour la rédaction et la gestion des SLAs (Service Level Agreements)."
    ]
  },
  {
    "num": "Q2",
    "partie": "Maintenance des Systèmes d'Information",
    "q": "Combien de types de garanties sont généralement distingués dans le cadre de la maintenance des systèmes d'information ?",
    "choices": {
      "A": "03 types de garanties",
      "B": "02 types de garanties",
      "C": "01 type de garantie",
      "D": "05 types de garanties"
    },
    "correct": "B",
    "explanation": "<p>Dans le domaine de la maintenance informatique et des contrats de service, on distingue classiquement <strong>deux types de garanties</strong> :</p><ul><li><strong>La garantie légale</strong> : imposée par la loi pour protéger l'acheteur contre les vices cachés ou le défaut de conformité.</li><li><strong>La garantie contractuelle (ou commerciale)</strong> : facultative et définie librement par le fournisseur dans le contrat, offrant des services additionnels ou une durée étendue.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Il n'existe pas de classification standard tripartite des garanties dans ce contexte contractuel."
      },
      {
        "l": "C",
        "t": "Réduire la garantie à un seul type ignore la distinction fondamentale entre l'obligation légale et l'engagement contractuel du prestataire."
      },
      {
        "l": "D",
        "t": "Le chiffre 5 ne correspond à aucune nomenclature juridique ou technique reconnue pour les types de garanties de maintenance."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la distinction fondamentale entre les obligations légales imposées par le code civil ou de la consommation et les engagements commerciaux spécifiques à un contrat de maintenance.",
    "summary": [
      "Il existe deux grandes catégories de garanties dans les systèmes d'information.",
      "La garantie légale est obligatoire et protège contre les défauts de conformité.",
      "La garantie contractuelle est une offre commerciale déterminée par les clauses du contrat.",
      "La distinction est essentielle pour évaluer le niveau de service (SLA) d'un prestataire."
    ]
  },
  {
    "num": "Q3",
    "partie": "Maintenance des Systèmes d'Information",
    "q": "Dans un système d'exploitation, quel composant est situé à la couche la plus proche des applications utilisateur ?",
    "choices": {
      "A": "La gestion des fichiers",
      "B": "La gestion de la mémoire",
      "C": "La gestion des travaux (ou ordonnancement des tâches)",
      "D": "La gestion des entrées/sorties"
    },
    "correct": "C",
    "explanation": "<p>Dans l'architecture d'un système d'exploitation, les <strong>gestionnaires de travaux</strong> (job management) constituent l'interface de haut niveau entre l'utilisateur et le système.</p><ul><li>Ils assurent la mise en file d'attente et l'exécution des processus demandés par l'utilisateur.</li><li>Contrairement aux gestions de mémoire ou d'E/S qui opèrent à des niveaux plus bas (proches du matériel), la gestion des travaux orchestre l'utilisation des ressources système pour répondre directement aux sollicitations des applications.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le système de fichiers est une couche intermédiaire permettant de structurer le stockage, mais il n'est pas le point d'interaction direct avec les processus applicatifs."
      },
      {
        "l": "B",
        "t": "La gestion de la mémoire est un service bas niveau qui alloue physiquement ou virtuellement les ressources RAM, souvent invisible pour l'application elle-même."
      },
      {
        "l": "D",
        "t": "La gestion des entrées/sorties se situe au niveau des pilotes (drivers) et des interruptions matérielles, très éloignée de la couche applicative."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de l'architecture en couches d'un système d'exploitation (noyau vs espace utilisateur).",
    "summary": [
      "Le système d'exploitation est structuré en couches hiérarchiques allant du matériel vers l'utilisateur.",
      "La gestion des travaux est la couche supérieure, agissant comme interface avec l'utilisateur et ses applications.",
      "Les gestionnaires de ressources (mémoire, E/S) sont des couches inférieures assurant le fonctionnement interne du système.",
      "Comprendre cette hiérarchie est essentiel pour l'optimisation et le dépannage des systèmes."
    ]
  },
  {
    "num": "Q4",
    "partie": "Maintenance des Systèmes d'Information",
    "q": "Dans une architecture de système d'exploitation, quel composant est situé au niveau le plus proche des applications ?",
    "choices": {
      "A": "Le système de gestion des fichiers",
      "B": "Le gestionnaire de mémoire",
      "C": "Le gestionnaire des travaux (job control)",
      "D": "Le gestionnaire des entrées/sorties"
    },
    "correct": "C",
    "explanation": "<p>Dans la hiérarchie d'un système d'exploitation, les différentes couches sont organisées pour isoler le matériel des processus utilisateurs. Le <strong>gestionnaire de travaux</strong> (ou interpréteur de commandes / interface de haut niveau) est la couche qui fait directement l'interface avec l'utilisateur et les applications.</p><ul><li>Les <strong>systèmes de fichiers</strong> et la <strong>gestion mémoire</strong> sont des couches intermédiaires qui traitent les ressources système.</li><li>La <strong>gestion des entrées/sorties</strong> est une couche de bas niveau proche du matériel.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La gestion des fichiers est une couche de service de niveau intermédiaire qui interagit avec le disque via le noyau, mais elle n'est pas le point d'entrée direct des applications."
      },
      {
        "l": "B",
        "t": "La gestion de la mémoire est une fonction critique du noyau (kernel) qui opère à un niveau bas pour allouer les adresses physiques et virtuelles."
      },
      {
        "l": "D",
        "t": "La gestion des entrées/sorties traite les flux de données entre les périphériques et le processeur, se situant au niveau le plus proche de la couche matérielle."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur l'architecture en couches d'un système d'exploitation et la position relative des différents composants fonctionnels.",
    "summary": [
      "La couche de gestion des travaux constitue l'interface principale avec l'utilisateur et les applications.",
      "Les composants système comme la mémoire et les entrées/sorties sont situés plus profondément dans le noyau.",
      "L'architecture en couches permet de séparer les services de haut niveau des ressources matérielles.",
      "Le gestionnaire de travaux coordonne l'exécution des processus demandés par les applications."
    ]
  },
  {
    "num": "Q5",
    "partie": "Maintenance des Systèmes d'Information",
    "q": "Quelles sont les trois fonctions principales assurées par le noyau (kernel) d'un système d'exploitation ?",
    "choices": {
      "A": "Gestion de la mémoire, gestion des processus, et gestion des entrées/sorties",
      "B": "Gestion de la sécurité, gestion des mises à jour, et gestion du réseau",
      "C": "Gestion de l'interface utilisateur, gestion du système de fichiers, et gestion des périphériques",
      "D": "Gestion de la virtualisation, gestion de l'énergie, et gestion des privilèges"
    },
    "correct": "A",
    "explanation": "<p>Le noyau d'un système d'exploitation est le cœur du système. Ses trois fonctions fondamentales sont :</p><ul><li><strong>La gestion des processus :</strong> ordonnancement et allocation du temps CPU.</li><li><strong>La gestion de la mémoire :</strong> attribution de l'espace mémoire aux différents processus.</li><li><strong>La gestion des entrées/sorties :</strong> interface entre le matériel et les logiciels via les pilotes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La sécurité et les mises à jour sont des couches logicielles supérieures, pas des fonctions primitives du noyau."
      },
      {
        "l": "C",
        "t": "L'interface utilisateur (shell) est séparée du noyau et ne fait pas partie de ses fonctions de base."
      },
      {
        "l": "D",
        "t": "La virtualisation et la gestion de l'énergie sont des fonctionnalités avancées, mais ne constituent pas les piliers structurels du noyau."
      }
    ],
    "examiner": "Évaluer la compréhension théorique de l'architecture fondamentale d'un système d'exploitation et du rôle central du noyau.",
    "summary": [
      "Le noyau est le composant central du système d'exploitation.",
      "Il assure l'allocation des ressources matérielles aux logiciels.",
      "Les trois fonctions piliers sont : processus, mémoire et entrées/sorties.",
      "Le noyau fait abstraction du matériel pour les applications."
    ]
  },
  {
    "num": "Q6",
    "partie": "Maintenance des Systèmes d'Information",
    "q": "Quelle est la définition exacte du mécanisme de commutation de contexte (context switch) dans un système d'exploitation ?",
    "choices": {
      "A": "Le remplacement d'un processus en cours d'exécution par un autre.",
      "B": "La suppression définitive d'un processus par un autre processus.",
      "C": "La mise en attente forcée d'un processus en cours d'exécution par un autre.",
      "D": "Le passage à l'état prêt d'un processus précédemment en attente."
    },
    "correct": "A",
    "explanation": "<p>La <strong>commutation de contexte</strong> (ou <em>context switch</em>) est une opération fondamentale du noyau d'un système d'exploitation. Elle consiste à :</p><ul><li>Sauvegarder l'état (contexte) du processus actuellement en cours d'exécution (registres, compteur ordinal, pile).</li><li>Charger l'état sauvegardé d'un autre processus prêt à s'exécuter.</li><li>Reprendre l'exécution de ce nouveau processus.</li></ul><p>Contrairement aux idées reçues, le changement de contexte n'est pas une simple mise en attente, mais un remplacement complet de l'activité du processeur d'un processus vers un autre.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La suppression d'un processus est une opération de terminaison, pas une commutation de contexte."
      },
      {
        "l": "C",
        "t": "Mettre en attente un processus est un état lié à l'ordonnancement, mais ne décrit pas l'échange d'état complet du processeur."
      },
      {
        "l": "D",
        "t": "Le passage à l'état réveil est une transition d'état, mais ne constitue pas l'échange complet des registres entre deux processus."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la notion technique de 'contexte' (sauvegarde et restauration de registres) plutôt que la simple notion de gestion d'états des processus.",
    "summary": [
      "La commutation de contexte permet le multitâche en partageant le CPU entre plusieurs processus.",
      "Le processus actif voit son état sauvegardé en mémoire (PCB - Process Control Block).",
      "Le système charge ensuite l'état du processus suivant à partir de son PCB.",
      "Il s'agit d'une opération coûteuse en ressources, car elle nécessite des accès mémoire et CPU."
    ]
  }
];
