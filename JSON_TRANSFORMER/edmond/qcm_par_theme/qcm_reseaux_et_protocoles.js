const QCM = [
  {
    "num": "Q1",
    "partie": "Réseaux et Protocoles",
    "q": "Parmi les ports suivants, quel est le port standard utilisé par le protocole SMTP (Simple Mail Transfer Protocol) pour l'envoi de courriers électroniques ?",
    "choices": {
      "A": "21",
      "B": "43",
      "C": "25",
      "D": "110"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>SMTP</strong> (Simple Mail Transfer Protocol) est utilisé pour l'envoi de courriers électroniques entre serveurs de messagerie. Le port standard défini par l'IANA pour la communication SMTP est le <strong>port 25</strong>.</p><ul><li>Le port 21 est dédié au protocole FTP (transfert de fichiers).</li><li>Le port 43 est utilisé par le protocole WHOIS.</li><li>Le port 110 est utilisé par le protocole POP3 (réception de courriers).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le port 21 est réservé au transfert de fichiers via le protocole FTP."
      },
      {
        "l": "B",
        "t": "Le port 43 est traditionnellement utilisé pour les services WHOIS, permettant de consulter des informations sur les noms de domaine."
      },
      {
        "l": "D",
        "t": "Le port 110 est le port standard associé au protocole POP3, qui permet de récupérer des messages depuis un serveur de messagerie."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la connaissance des ports bien connus (well-known ports) associés aux services Internet fondamentaux, en particulier pour les protocoles de messagerie électronique.",
    "summary": [
      "Le protocole SMTP est spécifiquement dédié à l'envoi de courriers électroniques.",
      "Le port 25 est le port historique et standard pour le transfert SMTP.",
      "Il est crucial de distinguer les protocoles d'envoi (SMTP, port 25) des protocoles de réception (POP3, port 110).",
      "Les ports 21 et 43 correspondent à d'autres services réseau distincts du transfert de mail."
    ]
  },
  {
    "num": "Q2",
    "partie": "Réseaux et Protocoles",
    "q": "Lors de l'exécution de la commande 'dhclient' sur un client DHCP, quelles informations spécifiques sont généralement récupérées et configurées par le client ?",
    "choices": {
      "A": "L'adresse IP du serveur DHCP ayant répondu.",
      "B": "La durée de validité du bail (lease time).",
      "C": "L'adresse IP attribuée au client et le port utilisé pour les communications.",
      "D": "Toutes les informations citées précédemment."
    },
    "correct": "D",
    "explanation": "<p>La commande <strong>dhclient</strong> est le client DHCP standard sous les systèmes de type Unix/Linux. Lorsqu'elle est exécutée, elle suit le protocole DORA (Discover, Offer, Request, Acknowledge).</p><ul><li>Elle interroge le réseau pour trouver un serveur <strong>DHCP</strong>.</li><li>Elle reçoit une offre contenant une adresse IP pour le client, ainsi que d'autres paramètres réseau (passerelle, DNS).</li><li>Elle négocie la <strong>durée du bail</strong> (lease time) après laquelle le client doit renouveler son adresse.</li><li>Toutes ces informations sont traitées et appliquées à l'interface réseau concernée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une information exacte, mais incomplète car la commande récupère aussi les autres paramètres."
      },
      {
        "l": "B",
        "t": "La valeur du bail est bien récupérée, mais le client reçoit également son adresse IP et des informations sur le serveur."
      },
      {
        "l": "C",
        "t": "Bien que l'attribution de l'IP soit le but principal, le client identifie aussi le serveur et la durée du bail."
      }
    ],
    "examiner": "Évaluer la compréhension du fonctionnement du protocole DHCP et de la commande système permettant de gérer les bails d'adresses IP.",
    "summary": [
      "La commande dhclient automatise la configuration réseau via le protocole DHCP.",
      "Le client obtient son adresse IP, mais aussi des paramètres de routage et de DNS.",
      "La notion de bail (lease) est essentielle pour la gestion dynamique des adresses.",
      "Le protocole DHCP utilise le port UDP 67 pour le serveur et 68 pour le client."
    ]
  },
  {
    "num": "Q3",
    "partie": "Réseaux et Protocoles",
    "q": "Quel service est associé au port 23 dans la suite de protocoles TCP/IP ?",
    "choices": {
      "A": "HTTP",
      "B": "Telnet",
      "C": "FTP",
      "D": "Rlogin"
    },
    "correct": "B",
    "explanation": "<p>Le port <strong>23</strong> est le port standard assigné au protocole <strong>Telnet</strong> (Telecommunication Network). Telnet est un protocole client-serveur utilisé pour accéder à distance à un terminal en ligne de commande.</p><p>Il est important de noter que Telnet transmet les données, y compris les mots de passe, en clair sur le réseau, ce qui le rend vulnérable aux attaques par interception. C'est pour cette raison qu'il est aujourd'hui largement remplacé par <strong>SSH</strong> (Secure Shell), qui utilise le port 22.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "HTTP (HyperText Transfer Protocol) utilise par défaut le port 80 pour le transfert de données web."
      },
      {
        "l": "C",
        "t": "FTP (File Transfer Protocol) utilise les ports 20 pour les données et 21 pour le contrôle des commandes."
      },
      {
        "l": "D",
        "t": "Rlogin (Remote Login) est un protocole plus ancien, principalement utilisé dans les systèmes Unix, qui utilise généralement le port 513."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier vos connaissances fondamentales sur les numéros de ports TCP/UDP assignés par l'IANA pour les services réseaux courants.",
    "summary": [
      "Le port 23 est réservé exclusivement au protocole Telnet.",
      "Telnet permet la gestion à distance d'équipements, mais sans chiffrement des données.",
      "Pour des raisons de sécurité, SSH (port 22) est préconisé en remplacement de Telnet.",
      "Connaître les ports standards (20/21 pour FTP, 23 pour Telnet, 80 pour HTTP) est essentiel pour la configuration des firewalls."
    ]
  },
  {
    "num": "Q4",
    "partie": "Réseaux et Protocoles",
    "q": "Parmi les associations service/port suivantes, laquelle est incorrecte ?",
    "choices": {
      "A": "HTTP sur le port 80",
      "B": "NNTP sur le port 9",
      "C": "FTP sur le port 21",
      "D": "TELNET sur le port 23"
    },
    "correct": "B",
    "explanation": "<p>Dans le modèle TCP/IP, chaque service réseau est associé à un port standard défini par l'IANA. Cette question teste la connaissance de ces ports bien connus (Well-Known Ports) :</p><ul><li><strong>HTTP (HyperText Transfer Protocol)</strong> utilise bien le port <strong>80</strong>.</li><li><strong>FTP (File Transfer Protocol)</strong> utilise le port <strong>21</strong> pour les commandes.</li><li><strong>TELNET</strong> utilise le port <strong>23</strong> pour l'accès distant.</li><li>Le protocole <strong>NNTP</strong> (Network News Transfer Protocol) utilise le port <strong>119</strong>, et non le port 9.</li></ul><p>Le port <strong>9</strong> est en réalité assigné au service <strong>Discard</strong>, un protocole obsolète qui rejette toutes les données reçues.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le port 80 est l'assignation standard et correcte pour le trafic HTTP non sécurisé."
      },
      {
        "l": "C",
        "t": "Le port 21 est l'assignation standard et correcte pour la partie contrôle du protocole FTP."
      },
      {
        "l": "D",
        "t": "Le port 23 est l'assignation standard et correcte pour le protocole de terminal distant TELNET."
      }
    ],
    "examiner": "Évaluer la connaissance des ports standard (Well-Known Ports) utilisés par les protocoles fondamentaux de la suite TCP/IP.",
    "summary": [
      "Le protocole HTTP utilise le port 80 pour la navigation web.",
      "Le protocole FTP utilise le port 21 pour le transfert de fichiers.",
      "Le port 23 est réservé au protocole TELNET.",
      "Le protocole NNTP utilise le port 119, tandis que le port 9 est attribué au service Discard."
    ]
  },
  {
    "num": "Q5",
    "partie": "Réseaux et Protocoles",
    "q": "Comment nomme-t-on le principe Internet selon lequel les informations sont transmises à l'internaute de manière proactive, sans qu'il ait besoin d'en formuler une requête explicite ?",
    "choices": {
      "A": "Net casting",
      "B": "Push",
      "C": "Reporting",
      "D": "Plug and Play"
    },
    "correct": "B",
    "explanation": "<p>Le terme <strong>technologie Push</strong> désigne un modèle de communication où la transmission de l'information est initiée par le serveur vers le client, sans intervention active de l'utilisateur à chaque étape.</p><ul><li>À l'inverse, le modèle <strong>Pull</strong> exige que l'utilisateur sollicite manuellement l'information (ex: naviguer sur un site web).</li><li>Les notifications push sur mobile ou les flux RSS sont des exemples concrets de ce mécanisme.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le Net casting est un terme obsolète ou spécifique associé à la diffusion de contenu multimédia, souvent confondu avec le streaming."
      },
      {
        "l": "C",
        "t": "Le reporting désigne le processus de synthèse et de présentation de données chiffrées, généralement dans un contexte analytique ou décisionnel."
      },
      {
        "l": "D",
        "t": "Plug and Play désigne une norme permettant la reconnaissance automatique d'un matériel informatique par un système d'exploitation dès son branchement."
      }
    ],
    "examiner": "Évaluer la compréhension des modèles de communication client-serveur (Push vs Pull) dans le contexte des services Internet.",
    "summary": [
      "La technologie Push est un mécanisme de distribution de contenu initié par le serveur.",
      "Elle permet d'informer l'utilisateur en temps réel sans requête préalable.",
      "Le modèle opposé est le modèle Pull, où l'utilisateur doit activement extraire l'information.",
      "Ce principe est au cœur des systèmes de notifications et de la diffusion d'actualités."
    ]
  }
];
