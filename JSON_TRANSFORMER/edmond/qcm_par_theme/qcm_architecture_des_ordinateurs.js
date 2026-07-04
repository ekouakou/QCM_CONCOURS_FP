const QCM = [
  {
    "num": "Q1",
    "partie": "Architecture des ordinateurs",
    "q": "Qu'est-ce qu'un coprocesseur dans l'architecture d'un ordinateur ?",
    "choices": {
      "A": "Un périphérique d'entrée ou de sortie.",
      "B": "Une unité dédiée uniquement à la gestion des échanges de données.",
      "C": "Un processeur auxiliaire conçu pour assister le processeur principal dans des tâches spécifiques comme le calcul mathématique.",
      "D": "Un support de stockage physique pour les données."
    },
    "correct": "C",
    "explanation": "<p>Un <strong>coprocesseur</strong> est un processeur spécialisé conçu pour décharger le processeur central (CPU) de certaines tâches complexes ou répétitives.</p><ul><li>Historiquement, il était utilisé pour les calculs en virgule flottante (FPU).</li><li>Il agit comme une extension de l'<strong>Unité Arithmétique et Logique (UAL)</strong> en effectuant des opérations mathématiques complexes plus rapidement que le processeur généraliste.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les périphériques sont des composants externes ou des interfaces de communication (clavier, écran, imprimante), pas des unités de calcul interne."
      },
      {
        "l": "B",
        "t": "La gestion des échanges est généralement déléguée aux contrôleurs d'entrées/sorties ou aux canaux DMA, non au coprocesseur."
      },
      {
        "l": "D",
        "t": "Un support désigne généralement un médium de stockage (disque dur, clé USB) ou un socle matériel, ce qui ne correspond pas à la fonction de traitement d'un coprocesseur."
      }
    ],
    "examiner": "Évaluer la compréhension des rôles des différents composants matériels d'un ordinateur et leur distinction par rapport aux périphériques et supports de stockage.",
    "summary": [
      "Le coprocesseur est une unité de calcul spécialisée.",
      "Il assiste le processeur principal pour alléger sa charge de travail.",
      "Il est étroitement lié à l'Unité Arithmétique et Logique (UAL).",
      "Sa fonction principale est d'accélérer l'exécution de calculs complexes."
    ]
  },
  {
    "num": "Q2",
    "partie": "Architecture des Ordinateurs",
    "q": "Considérant une mémoire vive (RAM) de 16 Ko avec une taille de mot mémoire de 8 bits (1 octet), quel est le nombre de lignes d'adresse nécessaires pour adresser cette mémoire ?",
    "choices": {
      "A": "14 bits",
      "B": "16 bits",
      "C": "1 quartet",
      "D": "1 octet"
    },
    "correct": "A",
    "explanation": "<p>Pour calculer le nombre de lignes d'adresse, il faut déterminer la puissance de 2 correspondant au nombre d'emplacements mémoire.</p><ul><li>La capacité totale est de 16 Ko, soit 16 * 1024 octets = 16 384 emplacements.</li><li>La formule est : 2^n = Capacité.</li><li>Nous avons 2^n = 16 384.</li><li>Sachant que 2^10 = 1 024, alors 2^4 * 2^10 = 2^14.</li><li>Ainsi, 2^14 = 16 384, ce qui nécessite 14 lignes d'adresse.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "16 bits correspondrait à une mémoire de 2^16 = 65 536 octets (64 Ko), ce qui est incorrect."
      },
      {
        "l": "C",
        "t": "Le quartet est une unité de 4 bits, ce qui n'est pas une unité de mesure pour un bus d'adresse."
      },
      {
        "l": "D",
        "t": "L'octet est une unité de capacité de données (8 bits) et non une unité de comptage pour les lignes d'adresse."
      }
    ],
    "examiner": "Évaluer la compréhension de la relation entre la capacité mémoire, la taille du mot et le dimensionnement du bus d'adresse.",
    "summary": [
      "Le nombre de lignes d'adresse détermine la capacité maximale adressable par le processeur.",
      "La formule fondamentale est Capacité = 2^(nombre d'adresses).",
      "16 Ko équivaut à 2^4 * 2^10 = 2^14 octets.",
      "Pour une mémoire de 16 Ko organisée par octet, 14 bits d'adresse sont strictement nécessaires."
    ]
  },
  {
    "num": "Q3",
    "partie": "Architecture des Ordinateurs",
    "q": "Quelles sont les deux opérations fondamentales réalisées entre le microprocesseur et la mémoire vive (RAM) ?",
    "choices": {
      "A": "Écriture seule",
      "B": "Division et addition",
      "C": "Lecture seule",
      "D": "Lecture et écriture"
    },
    "correct": "D",
    "explanation": "<p>Dans l'architecture de Von Neumann, le microprocesseur communique en permanence avec la mémoire via le bus de données. Ces échanges se limitent à deux types d'opérations élémentaires :</p><ul><li><strong>Lecture (Read)</strong> : Le processeur demande une donnée stockée à une adresse spécifique en mémoire pour la traiter.</li><li><strong>Écriture (Write)</strong> : Le processeur envoie une donnée résultant d'un calcul vers une adresse spécifique de la mémoire pour y être sauvegardée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'écriture seule ne permet pas au processeur de récupérer des instructions ou des données préalablement stockées."
      },
      {
        "l": "B",
        "t": "La division est une opération arithmétique traitée par l'Unité Arithmétique et Logique (UAL) du processeur, et non un mode de communication avec la mémoire."
      },
      {
        "l": "C",
        "t": "La lecture seule est insuffisante, car le système doit pouvoir enregistrer les résultats des traitements effectués."
      }
    ],
    "examiner": "Évaluer la compréhension des mécanismes fondamentaux d'échange de données entre l'unité centrale de traitement et la mémoire système.",
    "summary": [
      "Le processeur interagit avec la mémoire via des cycles de lecture et d'écriture.",
      "L'opération de lecture consiste à extraire une donnée de la mémoire vers le processeur.",
      "L'opération d'écriture consiste à transférer une donnée du processeur vers la mémoire.",
      "Ces deux opérations sont essentielles au cycle 'Fetch-Decode-Execute' de l'ordinateur."
    ]
  },
  {
    "num": "Q4",
    "partie": "Architecture des Ordinateurs",
    "q": "Qu'appelle-t-on \"temps d'accès\" dans le contexte de la mémoire informatique ?",
    "choices": {
      "A": "Le temps nécessaire au moniteur pour rafraîchir l'affichage d'une image.",
      "B": "Le temps de latence entre la frappe d'une touche au clavier et son traitement par l'unité centrale.",
      "C": "Le temps moyen nécessaire à un utilisateur pour saisir une séquence de texte.",
      "D": "Le temps écoulé entre l'émission d'une demande de lecture ou d'écriture et la mise à disposition effective de la donnée par la mémoire."
    },
    "correct": "D",
    "explanation": "<p>En informatique, le <strong>temps d'accès</strong> désigne la durée qui sépare le moment où une unité de contrôle envoie une requête de lecture ou d'écriture à une mémoire (RAM, disque dur, SSD) et le moment où les données sont effectivement disponibles ou enregistrées.</p><ul><li>Ce paramètre est crucial pour mesurer la performance des composants de stockage.</li><li>Il est souvent confondu avec le débit, mais il mesure une latence plutôt qu'un volume de données transférées par seconde.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cela concerne le temps de réponse d'un écran ou la fréquence de rafraîchissement, pas l'accès aux données."
      },
      {
        "l": "B",
        "t": "Il s'agit ici de la latence de saisie ou d'interruption clavier, qui dépend de l'interface et non de la mémoire."
      },
      {
        "l": "C",
        "t": "Ceci est lié à la vitesse de frappe humaine et non à une mesure technique matérielle."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de performance matérielle et de latence des composants de stockage.",
    "summary": [
      "Le temps d'accès est une mesure de latence matérielle.",
      "Il définit l'intervalle entre la requête et la disponibilité de la donnée.",
      "C'est un indicateur clé de la vitesse de la mémoire vive et des supports de stockage.",
      "Il se mesure généralement en nanosecondes (ns) pour la RAM ou en millisecondes (ms) pour les disques."
    ]
  },
  {
    "num": "Q5",
    "partie": "Architecture des Ordinateurs",
    "q": "Qu'appelle-t-on \"temps d'attente\" (wait state) d'un microprocesseur ?",
    "choices": {
      "A": "Le nombre de bits supplémentaires que le microprocesseur doit traiter inutilement.",
      "B": "Le nombre d'impulsions d'horloge supplémentaires durant lesquelles le microprocesseur reste inactif.",
      "C": "Le nombre d'octets supplémentaires nécessaires au microprocesseur pour exécuter une instruction simple.",
      "D": "Le nombre d'impulsions d'horloge manquantes empêchant le microprocesseur de fonctionner correctement."
    },
    "correct": "B",
    "explanation": "<p>En architecture des ordinateurs, un <strong>état d'attente</strong> (ou <em>wait state</em>) est un cycle d'horloge supplémentaire inséré par le contrôleur de bus lorsqu'un périphérique ou une mémoire est trop lent pour répondre aux sollicitations du processeur.</p><p>Le processeur insère ces cycles pour <strong>synchroniser</strong> sa vitesse de traitement avec celle des composants périphériques, garantissant ainsi l'intégrité des données lors des échanges.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le temps d'attente concerne des cycles d'horloge et non une largeur de bus ou un nombre de bits."
      },
      {
        "l": "C",
        "t": "Le concept d'octets est lié à la capacité de stockage ou à la taille des instructions, pas à la gestion des cycles d'horloge."
      },
      {
        "l": "D",
        "t": "L'attente n'est pas due à un manque d'impulsions, mais à une insertion volontaire de cycles supplémentaires pour pallier une latence matérielle."
      }
    ],
    "examiner": "Évaluer la compréhension du fonctionnement synchrone du processeur et des mécanismes de gestion de latence avec les périphériques externes.",
    "summary": [
      "Le temps d'attente correspond à des cycles d'horloge d'inactivité forcée.",
      "Il est déclenché par une disparité de vitesse entre le processeur et la mémoire ou les périphériques.",
      "L'insertion de ces cycles permet de garantir une communication fiable entre les composants.",
      "Plus il y a d'états d'attente, plus la performance globale du système diminue."
    ]
  },
  {
    "num": "Q6",
    "partie": "Architecture des Ordinateurs",
    "q": "Dans le cadre de l'architecture des ordinateurs, quel est le rôle principal de l'unité arithmétique et logique (UAL) au sein du processeur ?",
    "choices": {
      "A": "Gérer la communication entre le processeur et les périphériques externes.",
      "B": "Exécuter les opérations arithmétiques et les opérations logiques sur les données.",
      "C": "Stocker temporairement les instructions à exécuter par le processeur.",
      "D": "Assurer la synchronisation du cycle d'horloge de tous les composants de la carte mère."
    },
    "correct": "B",
    "explanation": "<p>L'<strong>Unité Arithmétique et Logique (UAL)</strong>, ou <em>ALU</em> en anglais, est le cœur computationnel du CPU. Son rôle est double :</p><ul><li><strong>Opérations arithmétiques :</strong> Addition, soustraction, multiplication et division.</li><li><strong>Opérations logiques :</strong> Comparaisons (ET, OU, NON, XOR) nécessaires aux branchements conditionnels.</li></ul><p>Elle manipule les données binaires directement sous le contrôle de l'unité de commande.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette fonction est principalement dévolue aux contrôleurs d'entrées/sorties et aux bus de communication."
      },
      {
        "l": "C",
        "t": "Le stockage temporaire des instructions et des données est assuré par les registres internes ou la mémoire cache (L1/L2/L3)."
      },
      {
        "l": "D",
        "t": "La synchronisation est gérée par l'horloge système et l'unité de contrôle, et non par les circuits de calcul de l'UAL."
      }
    ],
    "examiner": "Évaluer la connaissance fondamentale des composants internes d'un processeur et de leurs fonctions respectives.",
    "summary": [
      "L'UAL est le moteur de calcul du processeur.",
      "Elle traite aussi bien des calculs mathématiques que des décisions logiques.",
      "Elle ne gère ni le stockage des données, ni les communications externes.",
      "L'UAL fonctionne sous la direction de l'unité de commande (UC)."
    ]
  },
  {
    "num": "Q7",
    "partie": "Architecture des Ordinateurs",
    "q": "Quelle est la définition fondamentale d'un ordinateur selon l'architecture de Von Neumann ?",
    "choices": {
      "A": "Une machine capable d'exécuter uniquement des calculs mathématiques complexes.",
      "B": "Un système composé d'une unité de traitement, d'une unité de contrôle, d'une mémoire et de dispositifs d'entrée/sortie.",
      "C": "Un réseau de serveurs interconnectés pour le traitement massif de données en parallèle.",
      "D": "Un logiciel de gestion de ressources matérielles permettant l'exécution d'applications tierces."
    },
    "correct": "B",
    "explanation": "<p>L'architecture de <strong>Von Neumann</strong>, conçue dans les années 1940, est le modèle théorique sur lequel repose la quasi-totalité des ordinateurs modernes. Elle définit quatre composants essentiels :</p><ul><li><strong>L'unité de traitement (ALU) :</strong> Effectue les opérations arithmétiques et logiques.</li><li><strong>L'unité de contrôle :</strong> Gère l'exécution des instructions.</li><li><strong>La mémoire :</strong> Stocke à la fois les instructions et les données.</li><li><strong>Les dispositifs d'entrée/sortie :</strong> Assurent la communication avec l'extérieur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que les ordinateurs calculent, la définition de Von Neumann est structurelle et matérielle, pas seulement fonctionnelle."
      },
      {
        "l": "C",
        "t": "Le calcul parallèle est une technique d'architecture avancée ou distribuée, non la définition fondamentale du modèle de Von Neumann."
      },
      {
        "l": "D",
        "t": "Ceci définit un système d'exploitation, qui est un logiciel et non l'architecture matérielle elle-même."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension des concepts fondamentaux de l'informatique théorique et la connaissance de l'architecture historique des machines modernes.",
    "summary": [
      "L'architecture de Von Neumann est le modèle standard des ordinateurs actuels.",
      "Elle repose sur une séparation entre l'unité de traitement et la mémoire.",
      "Le modèle inclut une unité de contrôle, une ALU, une mémoire et des entrées/sorties.",
      "Le stockage des données et des instructions dans la même mémoire est la caractéristique clé."
    ]
  },
  {
    "num": "Q8",
    "partie": "Architecture des ordinateurs",
    "q": "Le code EBCDIC (Extended Binary Coded Decimal Interchange Code) est un système de codage utilisant combien de bits par caractère ?",
    "choices": {
      "A": "4 bits",
      "B": "8 bits",
      "C": "16 bits",
      "D": "24 bits"
    },
    "correct": "B",
    "explanation": "<p>Le code <strong>EBCDIC</strong> (Extended Binary Coded Decimal Interchange Code) est un jeu de caractères utilisé principalement sur les grands systèmes (mainframes) d'IBM.</p><ul><li>Il s'agit d'un codage sur <strong>8 bits</strong> (un octet), permettant de représenter 256 caractères différents.</li><li>Il a été conçu pour étendre le code BCD (Binary Coded Decimal) utilisé sur les cartes perforées.</li><li>Bien qu'il soit aujourd'hui largement supplanté par l'ASCII et l'Unicode (UTF-8) dans les environnements informatiques ouverts, il reste utilisé dans les systèmes hérités (legacy systems) d'IBM.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "4 bits correspondraient à un codage BCD classique, insuffisant pour un jeu de caractères alphanumérique complet."
      },
      {
        "l": "C",
        "t": "16 bits correspondraient à un encodage de type UTF-16 ou UCS-2, qui permet de représenter des caractères issus de nombreux alphabets mondiaux."
      },
      {
        "l": "D",
        "t": "24 bits est une taille souvent utilisée pour le codage de la couleur (TrueColor) en informatique, mais pas pour le codage de texte standard."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier vos connaissances sur l'historique des systèmes de codage des caractères et votre capacité à différencier les standards informatiques anciens.",
    "summary": [
      "L'EBCDIC est un standard de codage de caractères sur 8 bits.",
      "Développé par IBM, il est principalement utilisé dans l'univers des mainframes.",
      "Chaque caractère EBCDIC est représenté par un octet unique.",
      "Il est distinct du standard ASCII, bien que les deux soient basés sur 8 bits."
    ]
  }
];
