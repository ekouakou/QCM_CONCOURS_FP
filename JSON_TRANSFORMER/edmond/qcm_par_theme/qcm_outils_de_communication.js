const QCM = [
  {
    "num": "Q1",
    "partie": "Outils de communication",
    "q": "Quelle est la nature du logiciel Mozilla Thunderbird ?",
    "choices": {
      "A": "Un serveur de messagerie",
      "B": "Un système de gestion de base de données (SGBD)",
      "C": "Un logiciel client de messagerie",
      "D": "Un navigateur web"
    },
    "correct": "C",
    "explanation": "<p><strong>Mozilla Thunderbird</strong> est une application libre destinée à la gestion des courriels. Il s'agit d'un <strong>client de messagerie</strong>, ce qui signifie qu'il permet à l'utilisateur de consulter, rédiger et organiser ses e-mails en se connectant à des serveurs distants via des protocoles comme IMAP ou POP3.</p><ul><li>Il ne stocke pas les messages sur le réseau pour d'autres utilisateurs (rôle d'un serveur).</li><li>Il ne gère pas de données relationnelles complexes (rôle d'un SGBD).</li><li>Il est distinct de Firefox, qui est le navigateur web de la fondation Mozilla.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un serveur de messagerie (ex: Postfix, Exchange) gère l'envoi et la réception des mails au niveau du réseau, alors que Thunderbird est l'interface utilisateur."
      },
      {
        "l": "B",
        "t": "Un SGBD (ex: MySQL, PostgreSQL) est conçu pour stocker et manipuler des bases de données relationnelles, ce qui n'est pas la fonction principale d'un client mail."
      },
      {
        "l": "D",
        "t": "Un navigateur web (ex: Firefox, Chrome) sert à consulter des pages internet, alors que Thunderbird est spécialisé dans le courrier électronique."
      }
    ],
    "examiner": "Évaluer la connaissance des outils logiciels courants et la distinction fondamentale entre un client de messagerie et les autres types de services informatiques.",
    "summary": [
      "Mozilla Thunderbird est un client de messagerie utilisé pour gérer ses e-mails localement.",
      "Il fonctionne en se connectant à des serveurs de messagerie distants via des protocoles standard (IMAP/POP/SMTP).",
      "Il ne doit pas être confondu avec un serveur de messagerie ou un moteur de base de données.",
      "Contrairement à un navigateur web, son interface est dédiée à la gestion des communications électroniques."
    ]
  }
];
