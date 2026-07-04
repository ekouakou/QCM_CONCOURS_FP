const QCM = [
  {
    "num": "Q1",
    "partie": "Administration Système et Messagerie",
    "q": "Quel est le fichier de configuration principal du serveur de messagerie Postfix ?",
    "choices": {
      "A": "Postix.conf",
      "B": "Main.cf",
      "C": "Sendmail.cf",
      "D": "Postfix.inc.php"
    },
    "correct": "B",
    "explanation": "<p>Le serveur de messagerie <strong>Postfix</strong> utilise principalement deux fichiers de configuration situés dans le répertoire <code>/etc/postfix/</code> :</p><ul><li><strong>main.cf</strong> : C'est le fichier de configuration principal contenant les paramètres globaux (nom de domaine, interfaces réseau, etc.).</li><li><strong>master.cf</strong> : Il définit les processus de Postfix qui doivent être lancés.</li></ul><p>Le fichier <em>main.cf</em> est celui qui centralise la majorité des directives nécessaires au fonctionnement du serveur.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci est une coquille orthographique, le fichier correct est main.cf et non Postix.conf."
      },
      {
        "l": "C",
        "t": "Sendmail.cf est le fichier de configuration spécifique à l'ancien serveur de messagerie Sendmail."
      },
      {
        "l": "D",
        "t": "Cette extension (.inc.php) correspond à un fichier de développement web PHP et n'a aucun lien avec la configuration système de Postfix."
      }
    ],
    "examiner": "Évaluer la connaissance pratique de l'architecture et de la configuration des services de messagerie sous Linux.",
    "summary": [
      "Postfix est configuré principalement via le fichier /etc/postfix/main.cf.",
      "Le fichier master.cf gère les processus et services spécifiques de Postfix.",
      "Il est crucial de ne pas confondre Postfix avec Sendmail, qui utilise une syntaxe de configuration totalement différente.",
      "Les fichiers de configuration de Postfix se trouvent dans le répertoire /etc/postfix/."
    ]
  },
  {
    "num": "Q2",
    "partie": "Administration Système et Messagerie",
    "q": "Quel protocole est principalement utilisé pour la réception du courrier électronique par un client mail depuis un serveur ?",
    "choices": {
      "A": "SMTP",
      "B": "IMAP",
      "C": "POP3",
      "D": "TELNET"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>POP3</strong> (Post Office Protocol version 3) est historiquement le protocole standard utilisé pour télécharger les messages électroniques d'un serveur vers un client mail local.</p><ul><li><strong>SMTP</strong> : Utilisé uniquement pour l'envoi de messages.</li><li><strong>IMAP</strong> : Permet également la réception, mais en synchronisant les messages sur le serveur, contrairement à POP3 qui les déplace généralement vers le client.</li><li><strong>TELNET</strong> : Protocole d'accès distant, non dédié à la messagerie.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "SMTP (Simple Mail Transfer Protocol) est dédié exclusivement à l'envoi des courriels et non à leur réception par le client."
      },
      {
        "l": "B",
        "t": "Bien que l'IMAP permette la réception, il est conçu pour la synchronisation bidirectionnelle, alors que POP3 est le protocole de réception 'classique' par téléchargement."
      },
      {
        "l": "D",
        "t": "TELNET est un protocole de communication réseau non sécurisé permettant une connexion à distance, sans lien avec le traitement des emails."
      }
    ],
    "examiner": "Évaluer la connaissance des protocoles fondamentaux de la suite TCP/IP appliqués au service de messagerie électronique.",
    "summary": [
      "SMTP est le protocole standard pour l'envoi de courriels.",
      "POP3 est le protocole classique pour télécharger les emails du serveur vers le client.",
      "IMAP offre une alternative moderne permettant la synchronisation des messages sur plusieurs appareils.",
      "Le choix entre POP3 et IMAP dépend du besoin de conservation des messages sur le serveur."
    ]
  },
  {
    "num": "Q3",
    "partie": "Administration Système et Messagerie",
    "q": "Quel est le rôle principal de l'utilitaire 'fetchmail' dans une architecture de messagerie électronique ?",
    "choices": {
      "A": "Serveur de messagerie (Mail Server)",
      "B": "Mail User Agent (MUA)",
      "C": "Mail Delivery Agent (MDA)",
      "D": "Mail Transfer Agent (MTA)"
    },
    "correct": "C",
    "explanation": "<p><strong>Fetchmail</strong> est un utilitaire conçu pour récupérer des courriers électroniques depuis des serveurs distants (utilisant des protocoles comme POP3, IMAP ou ESMTP) et les transférer localement vers le système de livraison de messages du destinataire.</p><p>Dans la typologie des outils de messagerie, il agit comme un <strong>Mail Delivery Agent (MDA)</strong> car il réceptionne les courriels pour les délivrer à une boîte locale, permettant ensuite à un utilisateur de les lire.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un serveur de messagerie (comme Postfix ou Exchange) gère le stockage et l'envoi, ce que fetchmail ne fait pas ; il n'est qu'un client de récupération."
      },
      {
        "l": "B",
        "t": "Le MUA (comme Thunderbird ou Outlook) est l'interface utilisée par l'utilisateur pour lire et composer des messages ; fetchmail travaille en arrière-plan sans interface utilisateur."
      },
      {
        "l": "D",
        "t": "Le MTA (comme Sendmail ou Exim) est responsable du routage des messages entre serveurs ; fetchmail n'est pas un serveur de transport."
      }
    ],
    "examiner": "Évaluer la compréhension des rôles des composants d'une architecture de messagerie (MUA, MTA, MDA) et la fonction spécifique des utilitaires de récupération de mails.",
    "summary": [
      "Fetchmail est un utilitaire de récupération de courrier électronique.",
      "Il est classé techniquement comme un Mail Delivery Agent (MDA).",
      "Il permet de rapatrier des messages depuis des serveurs distants vers un stockage local.",
      "Il ne doit pas être confondu avec un serveur de messagerie (MTA) ou une interface utilisateur (MUA)."
    ]
  },
  {
    "num": "Q4",
    "partie": "Administration Système et Messagerie",
    "q": "Quelle est la fonction principale du logiciel Exim dans une architecture de messagerie électronique ?",
    "choices": {
      "A": "Un client de messagerie (MUA)",
      "B": "Un agent utilisateur de messagerie (MUA)",
      "C": "Un agent de distribution de courrier (MDA)",
      "D": "Un agent de transfert de courrier (MTA)"
    },
    "correct": "D",
    "explanation": "<p><strong>Exim</strong> est un logiciel libre servant de <strong>Mail Transfer Agent (MTA)</strong>. Son rôle fondamental est de diriger le routage des messages électroniques entre différents serveurs ou domaines sur Internet en utilisant le protocole SMTP.</p><p>Contrairement au MUA (comme Outlook ou Thunderbird) ou au MDA (comme Dovecot qui livre le message dans la boîte aux lettres), le MTA s'occupe de la communication serveur à serveur pour assurer l'acheminement des courriels.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un client de messagerie est une interface utilisateur (MUA) comme Thunderbird, et non un serveur de transfert."
      },
      {
        "l": "B",
        "t": "Le Mail User Agent (MUA) est le logiciel utilisé par l'utilisateur final pour lire et envoyer ses e-mails, ce qui n'est pas la fonction d'Exim."
      },
      {
        "l": "C",
        "t": "Le Mail Delivery Agent (MDA) est responsable du dépôt final du message dans le stockage local de l'utilisateur (ex: Dovecot), alors qu'Exim se concentre sur le transfert."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture des systèmes de messagerie et la distinction entre les rôles MTA, MDA et MUA.",
    "summary": [
      "Exim est un logiciel de type MTA (Mail Transfer Agent).",
      "Le rôle d'un MTA est d'acheminer les courriels via le protocole SMTP.",
      "Il ne faut pas confondre le transfert (MTA), la distribution locale (MDA) et l'interface utilisateur (MUA).",
      "Exim est couramment utilisé sur les systèmes Unix/Linux comme serveur de messagerie principal."
    ]
  }
];
