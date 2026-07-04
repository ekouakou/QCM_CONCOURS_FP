const QCM = [
  {
    "num": "Q1",
    "partie": "Administration Système et Serveurs",
    "q": "Dans l'environnement Windows Server 2003, quel service ou composant logiciel était commercialisé en tant que produit distinct, et non intégré par défaut au système d'exploitation ?",
    "choices": {
      "A": "Le service Web IIS (Internet Information Services)",
      "B": "Le service DNS (Domain Name System)",
      "C": "Le service DHCP (Dynamic Host Configuration Protocol)",
      "D": "Le service Microsoft Exchange Server"
    },
    "correct": "D",
    "explanation": "<p>Dans l'écosystème Windows Server 2003, les services <strong>IIS</strong>, <strong>DNS</strong> et <strong>DHCP</strong> sont des rôles serveurs natifs. Ils sont inclus dans les supports d'installation de Windows Server et peuvent être activés via l'assistant de configuration de serveur.</p><p>En revanche, <strong>Microsoft Exchange Server</strong> est une solution logicielle de messagerie collaborative d'entreprise qui constitue un produit commercial indépendant. Il nécessite une licence propre et une installation séparée du système d'exploitation serveur.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "IIS est un rôle natif intégré à Windows Server 2003, activable gratuitement sans achat de licence supplémentaire."
      },
      {
        "l": "B",
        "t": "Le service DNS est une fonctionnalité système essentielle de Windows Server, intégrée à l'installation de base."
      },
      {
        "l": "C",
        "t": "Le service DHCP est un composant standard de la pile réseau de Windows Server, inclus sans surcoût."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la distinction entre les rôles/services systèmes inclus nativement dans Windows Server et les applications tierces ou produits serveurs complémentaires vendus séparément par Microsoft.",
    "summary": [
      "Les services IIS, DNS et DHCP sont des composants intégrés à Windows Server.",
      "Microsoft Exchange Server est un logiciel de messagerie distinct nécessitant une licence dédiée.",
      "Il est crucial de différencier les fonctionnalités système (rôles) des applications d'entreprise (produits).",
      "Windows Server 2003 inclut nativement les outils de gestion d'infrastructure de base."
    ]
  }
];
