const QCM = [
  {
    "num": "Q1",
    "partie": "Serveur de messagerie",
    "q": "Quel protocole est principalement utilisé par un client de messagerie pour envoyer des courriers électroniques vers un serveur ?",
    "choices": {
      "A": "POP3",
      "B": "IMAP",
      "C": "SMTP",
      "D": "HTTP"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>SMTP</strong> (Simple Mail Transfer Protocol) est le standard utilisé pour l'acheminement et l'envoi des courriers électroniques sur Internet.</p><ul><li><strong>POP3</strong> et <strong>IMAP</strong> sont des protocoles utilisés pour la réception et la consultation des messages.</li><li><strong>HTTP</strong> est destiné au transfert de pages web.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "POP3 est un protocole de réception qui télécharge les messages sur le client."
      },
      {
        "l": "B",
        "t": "IMAP est un protocole de réception qui permet de synchroniser les messages entre le serveur et le client."
      },
      {
        "l": "D",
        "t": "HTTP est le protocole de base du Web pour consulter des ressources via un navigateur."
      }
    ],
    "examiner": "Vérifier la compréhension de l'architecture client-serveur et la distinction entre les protocoles d'envoi et de réception d'e-mails.",
    "summary": [
      "SMTP est le protocole dédié exclusivement à l'envoi de courriels.",
      "POP3 et IMAP sont les protocoles standard pour la réception des e-mails.",
      "Le client de messagerie utilise SMTP pour pousser le message vers le serveur d'envoi.",
      "Une architecture mail classique sépare clairement le rôle d'envoi et de réception."
    ]
  },
  {
    "num": "Q2",
    "partie": "Serveur de messagerie",
    "q": "Qu'est-ce qu'un webmail ?",
    "choices": {
      "A": "Un protocole de courrier électronique",
      "B": "Un client de courrier électronique installé localement",
      "C": "Un serveur de courrier électronique dédié",
      "D": "Un programme de courrier électronique accessible directement via un navigateur web"
    },
    "correct": "D",
    "explanation": "<p>Un <strong>webmail</strong> est une application web qui permet aux utilisateurs d'accéder à leurs e-mails via un navigateur internet (comme Chrome, Firefox ou Safari), sans avoir besoin d'installer un logiciel spécifique sur leur ordinateur.</p><p>Contrairement à un client de messagerie classique (comme Outlook ou Thunderbird) qui télécharge les messages sur le disque dur, le webmail repose sur une interface hébergée sur le serveur distant.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le webmail n'est pas un protocole. Les protocoles de messagerie sont des normes comme SMTP (envoi), POP ou IMAP (réception)."
      },
      {
        "l": "B",
        "t": "Un client de courrier électronique classique (type client lourd) nécessite une installation locale et une configuration manuelle, contrairement au webmail."
      },
      {
        "l": "C",
        "t": "Le serveur de messagerie est l'infrastructure matérielle/logicielle qui stocke et achemine les courriers, tandis que le webmail est l'interface utilisateur."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la messagerie électronique et la distinction entre services, protocoles et interfaces utilisateur.",
    "summary": [
      "Un webmail est une interface de messagerie accessible via un navigateur web.",
      "Il ne nécessite aucune installation de logiciel sur le poste de travail de l'utilisateur.",
      "Il est distinct des protocoles (SMTP, IMAP, POP) qui gèrent le transfert des données.",
      "L'utilisateur interagit avec ses e-mails directement sur le serveur distant."
    ]
  },
  {
    "num": "Q3",
    "partie": "Serveur de messagerie",
    "q": "Quel est le rôle principal d'un serveur de messagerie dans l'architecture réseau ?",
    "choices": {
      "A": "Transmettre les courriers électroniques d'un expéditeur vers un destinataire.",
      "B": "Conserver systématiquement une copie locale de chaque courrier électronique sur le serveur.",
      "C": "Servir de service d'enregistrement pour obtenir une nouvelle adresse électronique.",
      "D": "Assurer exclusivement la réception des courriers électroniques, sans possibilité d'émission."
    },
    "correct": "A",
    "explanation": "<p>Un serveur de messagerie repose principalement sur les protocoles <strong>SMTP</strong> (Simple Mail Transfer Protocol) pour l'envoi et la transmission des messages entre serveurs, et sur des protocoles comme <strong>IMAP</strong> ou <strong>POP3</strong> pour la gestion des boîtes aux lettres côté client.</p><p>Son rôle fondamental est de relayer et d'acheminer les paquets de données (les emails) du serveur de l'expéditeur vers celui du destinataire, assurant ainsi l'interopérabilité des communications électroniques.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Bien que certains serveurs puissent stocker des messages (IMAP), ce n'est pas leur définition fonctionnelle première. Le stockage est une fonctionnalité secondaire liée au protocole de consultation."
      },
      {
        "l": "C",
        "t": "L'obtention d'une adresse email est un processus administratif lié au fournisseur de service (registraire ou fournisseur d'identité), et non au rôle technique du serveur de transmission."
      },
      {
        "l": "D",
        "t": "Les serveurs de messagerie gèrent à la fois l'émission (SMTP) et la réception des courriers, rendant cette proposition techniquement fausse."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture des protocoles de messagerie et la distinction entre les fonctions de routage (émission/réception) et les services de stockage.",
    "summary": [
      "Les serveurs de messagerie utilisent principalement le protocole SMTP pour le routage des emails.",
      "Ils assurent la transmission des courriers entre l'expéditeur et le destinataire via le réseau.",
      "La réception et l'émission sont des fonctions intégrées aux serveurs de mail standards.",
      "Le stockage et la gestion des messages sont des services additionnels gérés par des protocoles spécifiques comme IMAP."
    ]
  },
  {
    "num": "Q4",
    "partie": "Serveur de messagerie",
    "q": "Quel protocole de messagerie électronique permet de conserver les messages et les dossiers directement sur le serveur, garantissant ainsi une synchronisation entre plusieurs appareils ?",
    "choices": {
      "A": "POP3",
      "B": "IMAP",
      "C": "SMTP",
      "D": "HTTPS"
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>IMAP (Internet Message Access Protocol)</strong> est conçu pour la synchronisation bidirectionnelle entre le client de messagerie et le serveur.</p><ul><li>Lorsqu'un message est lu, marqué ou déplacé dans un dossier, ces modifications sont répercutées sur le serveur.</li><li>Cela permet à l'utilisateur d'accéder à sa boîte mail depuis plusieurs appareils (smartphone, ordinateur, tablette) en voyant exactement le même état de la boîte.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "POP3 (Post Office Protocol) télécharge généralement les messages sur l'appareil local et les supprime du serveur, ce qui rend la synchronisation entre plusieurs appareils difficile."
      },
      {
        "l": "C",
        "t": "SMTP (Simple Mail Transfer Protocol) est un protocole utilisé uniquement pour l'envoi de courriers électroniques, et non pour leur réception ou leur stockage."
      },
      {
        "l": "D",
        "t": "HTTPS (HyperText Transfer Protocol Secure) est le protocole de transfert de données sécurisé pour le Web, il n'est pas un protocole natif de gestion de messagerie."
      }
    ],
    "examiner": "Évalue la compréhension des protocoles de messagerie et la distinction fondamentale entre le stockage local (POP3) et le stockage synchronisé sur serveur (IMAP).",
    "summary": [
      "IMAP permet une synchronisation permanente entre le serveur et le client de messagerie.",
      "POP3 est un protocole de type 'téléchargement et suppression' qui favorise le stockage local.",
      "SMTP est exclusivement dédié à l'expédition des e-mails.",
      "Le choix du protocole dépend du besoin de mobilité et de consultation multi-support."
    ]
  }
];
