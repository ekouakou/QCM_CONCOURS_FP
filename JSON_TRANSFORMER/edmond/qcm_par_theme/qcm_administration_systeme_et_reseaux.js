const QCM = [
  {
    "num": "Q1",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les options suivantes, quels supports peuvent être utilisés pour établir une connexion VPN (Virtual Private Network) ?",
    "choices": {
      "A": "Une connexion Internet",
      "B": "Une liaison spécialisée",
      "C": "Un réseau Ethernet",
      "D": "Une connexion radio ou Wi-Fi"
    },
    "correct": "A",
    "explanation": "<p>Par définition, un <strong>VPN (Virtual Private Network)</strong> est une technologie permettant de créer un tunnel sécurisé au-dessus d'un réseau non sécurisé, généralement <strong>Internet</strong>.</p><p>Bien que les autres options (liaisons spécialisées, Ethernet, Wi-Fi) puissent techniquement transporter du trafic chiffré, le cas d'usage fondamental et la raison d'être du VPN dans le contexte des réseaux d'entreprise est de s'appuyer sur l'infrastructure publique d'Internet pour interconnecter des sites distants ou des télétravailleurs de manière privée.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une liaison spécialisée est déjà un circuit dédié et privé; elle n'a pas besoin de VPN pour assurer la confidentialité des données."
      },
      {
        "l": "C",
        "t": "Ethernet est une technologie de réseau local (LAN). Le VPN est conçu pour sécuriser des communications traversant des réseaux non maîtrisés, ce qui n'est pas le cas d'un LAN interne."
      },
      {
        "l": "D",
        "t": "Bien que le Wi-Fi puisse être le point d'accès initial, il ne constitue pas le support de transport du tunnel VPN dans son architecture réseau globale."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension du concept de tunnelisation VPN et de son utilité première : sécuriser des échanges transitant par des réseaux publics comme Internet.",
    "summary": [
      "Un VPN crée un tunnel sécurisé au-dessus d'un réseau non fiable.",
      "L'usage principal du VPN est l'exploitation de l'infrastructure d'Internet.",
      "Il permet de garantir la confidentialité, l'intégrité et l'authentification des données.",
      "Contrairement aux liaisons spécialisées, le VPN offre une solution de connectivité sécurisée à moindre coût."
    ]
  },
  {
    "num": "Q2",
    "partie": "Administration Système et Réseaux",
    "q": "Quel est le débit binaire théorique maximal de la norme Wi-Fi 802.11g ?",
    "choices": {
      "A": "100 Mbps",
      "B": "11 Mbps",
      "C": "54 Mbps",
      "D": "64 Mbps"
    },
    "correct": "C",
    "explanation": "<p>La norme <strong>IEEE 802.11g</strong>, publiée en 2003, utilise la bande de fréquence des 2,4 GHz. Elle permet d'atteindre un débit théorique maximal de <strong>54 Mbps</strong>.</p><ul><li>Elle est rétrocompatible avec la norme 802.11b.</li><li>Elle utilise la technique de modulation OFDM (Orthogonal Frequency Division Multiplexing).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "100 Mbps ne correspond pas au débit standard de la norme 802.11g ; cette valeur est plus proche des capacités du Fast Ethernet filaire."
      },
      {
        "l": "B",
        "t": "11 Mbps est le débit maximal théorique de la norme précédente, le 802.11b."
      },
      {
        "l": "D",
        "t": "64 Mbps n'est pas un débit standard associé à cette norme Wi-Fi ; il s'agit d'une valeur incorrecte."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier vos connaissances sur les spécifications techniques des anciennes normes Wi-Fi et votre capacité à distinguer les débits associés à chaque génération.",
    "summary": [
      "La norme 802.11g opère sur la bande 2,4 GHz.",
      "Le débit théorique maximal de cette norme est de 54 Mbps.",
      "Le 802.11g assure une rétrocompatibilité avec le 802.11b (11 Mbps).",
      "La technologie de modulation utilisée pour le 802.11g est l'OFDM."
    ]
  },
  {
    "num": "Q3",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les supports de transmission suivants, lequel est totalement insensible aux perturbations électromagnétiques ?",
    "choices": {
      "A": "Câble à paires torsadées non blindées (UTP)",
      "B": "Fibre optique",
      "C": "Transmission sans fil (Wi-Fi, Bluetooth)",
      "D": "Câble coaxial"
    },
    "correct": "B",
    "explanation": "<p>La <strong>fibre optique</strong> utilise la lumière (photons) pour transmettre des données à travers un cœur en verre ou en plastique. Contrairement aux supports utilisant des signaux électriques (cuivre), elle n'est pas sensible aux interférences électromagnétiques (EMI) ou aux radiofréquences (RFI).</p><ul><li>Les supports en cuivre (UTP, coaxial) agissent comme des antennes et peuvent capter des signaux parasites.</li><li>Les liaisons sans fil dépendent des ondes radio, qui sont par nature sensibles aux perturbations et aux interférences.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le câble UTP est très sensible aux interférences électromagnétiques, car il n'est pas protégé par un blindage."
      },
      {
        "l": "C",
        "t": "La transmission sans fil utilise des ondes radio qui sont particulièrement vulnérables aux interférences et aux obstacles physiques."
      },
      {
        "l": "D",
        "t": "Bien que le câble coaxial possède un blindage, il reste sensible aux fortes perturbations électromagnétiques contrairement à la fibre optique."
      }
    ],
    "examiner": "Évaluer la compréhension des propriétés physiques des supports de transmission réseaux et leur vulnérabilité aux interférences.",
    "summary": [
      "La fibre optique transmet des données via des signaux lumineux et non électriques.",
      "L'absence de conductivité électrique rend la fibre optique immune aux interférences électromagnétiques.",
      "Les câbles en cuivre (UTP, coaxial) restent vulnérables aux EMI, surtout dans des environnements industriels.",
      "La fibre optique offre une sécurité et une intégrité de signal supérieures dans des environnements fortement perturbés."
    ]
  },
  {
    "num": "Q4",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les standards de câblage réseau suivants, lequel n'est pratiquement plus utilisé dans les installations informatiques modernes ?",
    "choices": {
      "A": "10 Base-T",
      "B": "100 Base-T",
      "C": "100 Base-FX",
      "D": "10 Base-5"
    },
    "correct": "D",
    "explanation": "<p>Le standard <strong>10 Base-5</strong>, également connu sous le nom de <strong>Thicknet</strong> (Ethernet épais), est une technologie obsolète des débuts d'Ethernet. Il utilisait un câble coaxial épais, rigide et difficile à installer, nécessitant des connecteurs vampires et des terminaisons spécifiques.</p><ul><li><strong>10 Base-T</strong> et <strong>100 Base-T</strong> (Fast Ethernet) sont les ancêtres des technologies <strong>RJ45</strong> modernes.</li><li><strong>100 Base-FX</strong> est une variante Fast Ethernet sur fibre optique encore utilisée dans certains environnements industriels ou pour des liaisons spécifiques longue distance.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "10 Base-T est la base du câblage cuivre sur paire torsadée (RJ45), toujours présente techniquement dans les couches de compatibilité ascendante des équipements actuels."
      },
      {
        "l": "B",
        "t": "100 Base-T (Fast Ethernet) est largement obsolète en termes de débit, mais reste un standard de communication courant dans les équipements réseau de base."
      },
      {
        "l": "C",
        "t": "100 Base-FX est une norme fibre optique qui, bien que dépassée en débit, reste utilisée pour des besoins spécifiques en milieu industriel ou perturbé."
      }
    ],
    "examiner": "Évaluer la connaissance historique des standards Ethernet et l'évolution des infrastructures de câblage physique.",
    "summary": [
      "Le standard 10 Base-5 (Thicknet) est considéré comme obsolète depuis les années 1990.",
      "Il a été remplacé par les technologies sur paires torsadées plus flexibles et moins coûteuses.",
      "L'utilisation de câbles coaxiaux épais pour le réseau local est devenue inexistante dans les infrastructures modernes.",
      "Les standards en 'Base-T' ont ouvert la voie à l'utilisation généralisée du connecteur RJ45."
    ]
  },
  {
    "num": "Q5",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les éléments suivants, lequel est un serveur web couramment utilisé sous Linux ?",
    "choices": {
      "A": "Bind",
      "B": "Postfix",
      "C": "Apache",
      "D": "Webmin"
    },
    "correct": "C",
    "explanation": "<p><strong>Apache HTTP Server</strong> est un logiciel de serveur web HTTP open source, extrêmement populaire dans l'écosystème Linux pour sa robustesse et sa modularité.</p><ul><li><strong>Bind</strong> est un serveur DNS.</li><li><strong>Postfix</strong> est un serveur de messagerie (MTA).</li><li><strong>Webmin</strong> est une interface d'administration système basée sur le web, et non un serveur web de contenu.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bind est dédié à la résolution de noms de domaine (serveur DNS), il ne traite pas les requêtes HTTP."
      },
      {
        "l": "B",
        "t": "Postfix est un agent de transfert de courrier (MTA) utilisé pour la gestion des e-mails, et non pour héberger des sites web."
      },
      {
        "l": "D",
        "t": "Webmin est un outil d'administration système via une interface web, il n'est pas conçu pour servir du contenu web au public."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la capacité du candidat à identifier les rôles spécifiques des services réseau courants sous Linux.",
    "summary": [
      "Apache est un serveur HTTP majeur sous Linux.",
      "Bind gère la résolution DNS.",
      "Postfix est spécialisé dans le transfert de courriers électroniques.",
      "Webmin sert à la configuration et l'administration du serveur, pas à l'hébergement de sites web."
    ]
  },
  {
    "num": "Q6",
    "partie": "Administration Système et Réseaux",
    "q": "Sous Linux Debian, quel est l'utilitaire en ligne de commande utilisé pour installer des logiciels à partir des dépôts distants ?",
    "choices": {
      "A": "net-install",
      "B": "yum",
      "C": "apt-get",
      "D": "rpm"
    },
    "correct": "C",
    "explanation": "<p>Sous les distributions Linux basées sur Debian (telles qu'Ubuntu ou Kali), le système de gestion de paquets principal est <strong>APT</strong> (Advanced Package Tool). L'utilitaire <strong>apt-get</strong> est l'interface en ligne de commande historique utilisée pour manipuler les paquets, notamment pour les installer, les mettre à jour ou les supprimer depuis les dépôts distants.</p><ul><li><strong>yum</strong> est propre aux distributions basées sur RHEL (Red Hat, CentOS, Fedora).</li><li><strong>rpm</strong> est un format de paquet et un outil de bas niveau pour les distributions basées sur Red Hat.</li><li><strong>net-install</strong> n'est pas un gestionnaire de paquets, mais une méthode d'installation du système d'exploitation par le réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Net-install est un support d'installation du système complet via le réseau, et non un gestionnaire de paquets applicatifs."
      },
      {
        "l": "B",
        "t": "Yum est le gestionnaire de paquets des systèmes de la famille Red Hat (RHEL, CentOS, Fedora), incompatible avec Debian."
      },
      {
        "l": "D",
        "t": "RPM est à la fois un format de paquet et un outil de gestion pour les distributions basées sur Red Hat, et non pour Debian qui utilise le format .deb."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance de l'écosystème Debian et la maîtrise des outils de gestion de logiciels spécifiques à cette distribution Linux.",
    "summary": [
      "Debian utilise le système de gestion de paquets APT.",
      "apt-get est l'outil standard en ligne de commande pour gérer les paquets .deb.",
      "yum et rpm sont réservés aux distributions de type Red Hat.",
      "La distinction entre les gestionnaires de paquets est fondamentale en administration système Linux."
    ]
  },
  {
    "num": "Q7",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle est l'adresse de broadcast pour un hôte ayant l'adresse IP 10.11.12.13 et un masque de sous-réseau de 255.255.252.0 ?",
    "choices": {
      "A": "10.11.10.255",
      "B": "10.11.12.255",
      "C": "10.11.14.255",
      "D": "10.11.15.255"
    },
    "correct": "D",
    "explanation": "<p>Pour déterminer l'adresse de broadcast, il faut analyser le masque de sous-réseau <strong>255.255.252.0</strong> :</p><ul><li>En binaire, 252 correspond à 11111100.</li><li>Le masque laisse 6 bits pour les hôtes dans le troisième octet (2 bits pour le réseau) et 8 bits dans le quatrième octet.</li><li>L'adresse IP 10.11.12.13 en binaire (3ème octet) : 12 = 00001100.</li><li>Le sous-réseau est déterminé par les bits significatifs : 000011(00). Le bloc réseau est donc 12.</li><li>Le broadcast se calcule en mettant tous les bits d'hôte à 1 : dans le 3ème octet, les deux derniers bits deviennent 1, soit 00001111 = 15. Le 4ème octet devient 255.</li><li>Résultat : <strong>10.11.15.255</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette adresse correspond à un sous-réseau différent et ne prend pas en compte le masque /22."
      },
      {
        "l": "B",
        "t": "Il s'agit d'une erreur classique consistant à n'appliquer le broadcast que sur le dernier octet (masque /24)."
      },
      {
        "l": "C",
        "t": "Cette valeur est incorrecte car elle n'atteint pas la limite supérieure du bloc de sous-réseau défini par le masque."
      }
    ],
    "examiner": "Évaluer la maîtrise du calcul de sous-réseautage (subnetting) et la capacité à identifier les plages d'adresses IP en fonction d'un masque CIDR non standard.",
    "summary": [
      "Le masque 255.255.252.0 est un préfixe /22.",
      "L'adresse de broadcast est l'adresse la plus élevée d'un segment réseau.",
      "Un masque /22 modifie le troisième octet en autorisant des incréments de 4 (256 - 252 = 4).",
      "La plage du sous-réseau contenant 10.11.12.13 s'étend de 10.11.12.0 à 10.11.15.255."
    ]
  },
  {
    "num": "Q8",
    "partie": "Administration Système et Réseaux",
    "q": "Un ordinateur d'une entreprise configuré correctement dispose d'une adresse IP privée (non routable sur Internet) et tente d'accéder au serveur www.yahoo.fr sans aucun mécanisme de traduction d'adresses (NAT). Quelle est l'affirmation correcte ?",
    "choices": {
      "A": "La machine ne pourra pas joindre le serveur www.yahoo.fr.",
      "B": "La machine pourra envoyer des paquets au serveur www.yahoo.fr, mais ne pourra pas recevoir de réponse de ce dernier.",
      "C": "La machine pourra communiquer librement avec le serveur www.yahoo.fr.",
      "D": "La machine ne pourra joindre que le fournisseur d'accès de l'entreprise."
    },
    "correct": "B",
    "explanation": "<p>Le fonctionnement du routage sur Internet repose sur des adresses IP publiques uniques. Les adresses privées (RFC 1918) ne sont pas routables sur Internet public.</p><p>Lorsqu'une machine utilise une IP privée pour contacter un serveur distant sans NAT :</p><ul><li><strong>Émission :</strong> Les paquets quittent le réseau local et arrivent jusqu'au serveur distant car les routeurs intermédiaires ignorent la nature privée de la source (ou le routage asymétrique permet l'aller).</li><li><strong>Réception :</strong> Le serveur distant tente de répondre à l'adresse IP privée de l'expéditeur. Or, les routeurs sur Internet ne possèdent aucune route vers les plages d'adresses privées (192.168.x.x, 10.x.x.x, etc.), rendant impossible l'acheminement de la réponse vers le client.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que la communication complète soit impossible, l'émission des paquets vers l'extérieur reste techniquement réalisable avant que le blocage au retour ne survienne."
      },
      {
        "l": "C",
        "t": "C'est incorrect car la réponse du serveur ne pourra jamais revenir à l'expéditeur, empêchant l'établissement d'une session TCP complète."
      },
      {
        "l": "D",
        "t": "Il n'y a aucune restriction logique limitant la communication au seul routeur du FAI ; le paquet sera transmis aussi loin que les tables de routage le permettent jusqu'à l'oubli de la route."
      }
    ],
    "examiner": "Évaluer la compréhension du routage IP, des adresses privées (RFC 1918) et de la nécessité du NAT pour la connectivité Internet.",
    "summary": [
      "Les adresses IP privées ne sont pas routables sur l'Internet public.",
      "Sans mécanisme de NAT, une machine en adresse privée peut émettre des paquets vers l'extérieur.",
      "Les routeurs publics rejettent les paquets destinés à des adresses privées, empêchant le retour de la réponse.",
      "Le NAT est indispensable pour mapper une IP privée vers une IP publique routable."
    ]
  },
  {
    "num": "Q9",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les technologies suivantes, laquelle ne fait pas partie de la catégorie des technologies WAN (Wide Area Network) ?",
    "choices": {
      "A": "MPLS",
      "B": "ATM",
      "C": "Frame Relay",
      "D": "FDDI"
    },
    "correct": "D",
    "explanation": "<p>Le <strong>FDDI</strong> (Fiber Distributed Data Interface) est un standard de réseau local (LAN) ou métropolitain (MAN) utilisant la fibre optique avec une topologie en double anneau. Contrairement aux autres options :</p><ul><li><strong>MPLS</strong> (Multiprotocol Label Switching) est une technique de transport de données pour les réseaux étendus (WAN).</li><li><strong>ATM</strong> (Asynchronous Transfer Mode) est une technologie de communication haut débit utilisée pour les réseaux WAN.</li><li><strong>Frame Relay</strong> est une technologie de commutation de paquets standardisée conçue pour connecter des réseaux étendus (WAN).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "MPLS est une technologie fondamentale pour le routage de données au sein des réseaux étendus."
      },
      {
        "l": "B",
        "t": "ATM est une architecture de réseau WAN conçue pour transporter la voix, la vidéo et les données."
      },
      {
        "l": "C",
        "t": "Le Frame Relay est une technologie WAN classique utilisée pour l'interconnexion de sites distants."
      }
    ],
    "examiner": "Évaluer la capacité du candidat à distinguer les protocoles et standards selon leur portée géographique (LAN, MAN vs WAN).",
    "summary": [
      "Le FDDI est un protocole de réseau local (LAN) à haute vitesse basé sur la fibre optique.",
      "Les réseaux WAN couvrent de larges zones géographiques, utilisant des technologies comme MPLS ou Frame Relay.",
      "La distinction entre LAN et WAN repose sur le débit, la portée géographique et les protocoles de couche liaison de données.",
      "ATM reste une technologie WAN classique utilisée pour le transport de trafic multiservices."
    ]
  },
  {
    "num": "Q10",
    "partie": "Administration Système et Réseaux",
    "q": "La technologie VPN (Virtual Private Network) repose sur des protocoles de tunneling pour sécuriser les communications. Parmi les protocoles suivants, lequel est fréquemment utilisé pour établir ces tunnels sécurisés ?",
    "choices": {
      "A": "HTTPS",
      "B": "SSL/TLS",
      "C": "SSH",
      "D": "NFS"
    },
    "correct": "B",
    "explanation": "<p>La technologie <strong>VPN</strong> utilise des protocoles de tunneling pour encapsuler les données et assurer leur confidentialité via le chiffrement. Bien que le protocole <strong>SSL (Secure Sockets Layer)</strong>, désormais succédé par <strong>TLS (Transport Layer Security)</strong>, soit à l'origine destiné à la sécurisation des échanges web (HTTPS), il est devenu un standard majeur pour les solutions <strong>VPN SSL</strong>, permettant un accès distant sécurisé sans nécessiter l'installation de logiciels clients lourds.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "HTTPS est un protocole applicatif basé sur HTTP et TLS, et non un protocole de tunneling VPN en lui-même."
      },
      {
        "l": "C",
        "t": "SSH permet de créer des tunnels sécurisés (port forwarding), mais il n'est pas considéré comme un protocole de tunneling VPN de niveau réseau standard."
      },
      {
        "l": "D",
        "t": "NFS (Network File System) est un protocole de partage de fichiers et n'a aucune fonction de tunneling ou de sécurisation VPN."
      }
    ],
    "examiner": "L'examinateur souhaite évaluer la connaissance des protocoles de sécurisation réseau et la compréhension de la distinction entre les protocoles applicatifs et les technologies d'encapsulation VPN.",
    "summary": [
      "Un tunnel VPN encapsule le trafic réseau pour garantir sa confidentialité et son intégrité.",
      "SSL/TLS est couramment utilisé pour les VPN modernes grâce à sa compatibilité avec les navigateurs web.",
      "Contrairement aux VPN IPsec, les VPN SSL sont souvent plus simples à déployer pour l'accès distant.",
      "Il faut distinguer les protocoles de transport et de tunnelisation des protocoles d'accès aux services comme NFS ou HTTPS."
    ]
  },
  {
    "num": "Q11",
    "partie": "Administration Système et Réseaux",
    "q": "Combien de domaines de collision possède un réseau composé de quatre concentrateurs (hubs) interconnectés ?",
    "choices": {
      "A": "Un seul domaine de collision",
      "B": "Deux domaines de collision",
      "C": "Trois domaines de collision",
      "D": "Quatre domaines de collision"
    },
    "correct": "A",
    "explanation": "<p>Un <strong>concentrateur (hub)</strong> est un équipement réseau de couche 1 (physique) qui fonctionne par diffusion : il répète tout signal reçu sur tous les autres ports. Par conséquent, il ne segmente pas le réseau.</p><p>Dans un réseau composé de plusieurs hubs interconnectés, l'ensemble du réseau constitue <strong>un seul et unique domaine de collision</strong>, car chaque transmission est propagée sur l'intégralité des segments reliés aux concentrateurs.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le hub ne divise pas les domaines de collision ; ajouter des hubs étend le domaine existant."
      },
      {
        "l": "C",
        "t": "Cette réponse suggère à tort une segmentation que seul un commutateur (switch) ou un routeur pourrait opérer."
      },
      {
        "l": "D",
        "t": "Confondre le nombre d'équipements avec le nombre de domaines de collision est une erreur courante. Les hubs ne créent pas de domaines isolés."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'étudiant comprend la différence fondamentale entre un équipement de couche 1 (hub) et de couche 2 (switch) en termes de segmentation réseau.",
    "summary": [
      "Un hub est un équipement de niveau 1 qui ne gère pas les adresses MAC.",
      "Tous les ports d'un hub appartiennent au même domaine de collision.",
      "L'interconnexion de plusieurs hubs crée un seul domaine de collision étendu.",
      "Pour diviser un domaine de collision, il est nécessaire d'utiliser un commutateur (switch) ou un pont (bridge)."
    ]
  },
  {
    "num": "Q12",
    "partie": "Administration Système et Réseaux",
    "q": "Quels sont les composants généralement intégrés dans un boîtier d'accès ADSL domestique (Box) ?",
    "choices": {
      "A": "Un serveur NAT, un serveur DHCP, un pare-feu",
      "B": "Un routeur, un commutateur (switch), un modem",
      "C": "Un routeur, un point d'accès Wi-Fi, un serveur Web",
      "D": "Toutes les réponses ci-dessus"
    },
    "correct": "D",
    "explanation": "<p>Une passerelle résidentielle (communément appelée <strong>Box ADSL</strong>) est un équipement multifonction intégrant plusieurs technologies réseau :</p><ul><li><strong>Modem</strong> : transforme le signal analogique de la ligne téléphonique en données numériques.</li><li><strong>Routeur</strong> : assure le routage des paquets entre le réseau local (LAN) et Internet (WAN).</li><li><strong>Switch et Point d'accès Wi-Fi</strong> : permettent de connecter plusieurs appareils en filaire (Ethernet) ou sans fil.</li><li><strong>Services réseaux</strong> : un serveur <strong>DHCP</strong> pour l'attribution des adresses IP, un <strong>NAT</strong> (Network Address Translation) pour partager une IP publique, et un <strong>pare-feu</strong> pour la sécurité.</li><li><strong>Serveur Web</strong> : une interface d'administration locale est incluse pour configurer les paramètres de la box via un navigateur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que ces composants soient présents, ce choix est incomplet car il oublie le modem et le commutateur."
      },
      {
        "l": "B",
        "t": "Ces éléments sont présents, mais la liste omet les services logiciels comme le DHCP, le pare-feu et le point d'accès Wi-Fi."
      },
      {
        "l": "C",
        "t": "Le serveur Web et le point d'accès Wi-Fi font bien partie de la box, mais la liste est incomplète par rapport aux autres services essentiels comme le modem ou le DHCP."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension de l'architecture matérielle et logicielle des passerelles résidentielles (CPE) et la connaissance des services réseaux de base qui y sont implémentés.",
    "summary": [
      "Une box ADSL est un dispositif 'tout-en-un' multifonction.",
      "Elle combine des couches physiques (modem, switch, Wi-Fi) et logicielles (routeur, NAT, pare-feu).",
      "Le service DHCP permet une configuration réseau automatique pour les hôtes locaux.",
      "L'interface d'administration est un serveur Web embarqué."
    ]
  },
  {
    "num": "Q13",
    "partie": "Administration Système et Réseaux",
    "q": "Lorsqu'un hôte est déplacé physiquement ou logiquement d'un sous-réseau IP à un autre, quelle est l'incidence sur sa configuration réseau ?",
    "choices": {
      "A": "L'adresse IP et l'adresse MAC doivent toutes deux être modifiées.",
      "B": "Aucune modification n'est nécessaire dans la configuration de l'hôte.",
      "C": "L'adresse IP reste identique, mais l'adresse MAC doit être modifiée.",
      "D": "L'adresse IP doit être modifiée, tandis que l'adresse MAC reste identique."
    },
    "correct": "D",
    "explanation": "<p>Le fonctionnement d'un réseau IP repose sur la segmentation en sous-réseaux. Une adresse IP contient des informations logiques permettant d'identifier le réseau d'appartenance.</p><ul><li><strong>Adresse IP :</strong> Elle est liée au réseau logique. Si l'hôte change de réseau, il doit obtenir une nouvelle adresse IP valide pour ce nouveau segment (via DHCP ou configuration statique) afin de pouvoir communiquer.</li><li><strong>Adresse MAC :</strong> C'est une adresse physique gravée dans la carte réseau (NIC). Elle est unique et indépendante du réseau logique. Elle reste donc identique quel que soit le lieu de connexion.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'adresse MAC est une identification matérielle permanente et ne change jamais lors d'un simple changement de réseau."
      },
      {
        "l": "B",
        "t": "Si l'adresse IP n'est pas mise à jour, l'hôte ne pourra pas communiquer car il sera sur un mauvais segment logique (pas de route vers sa propre sous-réseau)."
      },
      {
        "l": "C",
        "t": "L'adresse IP doit obligatoirement changer pour correspondre au nouveau plan d'adressage du sous-réseau d'accueil."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension de la distinction entre l'adressage logique (IP, niveau 3 OSI) et l'adressage physique (MAC, niveau 2 OSI).",
    "summary": [
      "L'adresse IP est un identifiant logique propre à un sous-réseau.",
      "L'adresse MAC est une adresse physique permanente liée à la carte réseau.",
      "Le changement de réseau impose une reconfiguration de l'adresse IP.",
      "L'adresse MAC ne subit aucune modification lors d'un déplacement d'un hôte entre deux réseaux."
    ]
  },
  {
    "num": "Q14",
    "partie": "Administration Système et Réseaux",
    "q": "Lorsqu'un routeur doit transmettre des paquets à destination d'un hôte situé sur un réseau distant, vers quelle entité doit-il acheminer les données ?",
    "choices": {
      "A": "Interface par défaut",
      "B": "Port par défaut",
      "C": "Passerelle par défaut",
      "D": "Sous-réseau par défaut"
    },
    "correct": "C",
    "explanation": "<p>Pour atteindre un réseau distant, le routeur doit utiliser une <strong>passerelle par défaut</strong> (ou <em>default gateway</em>). Cette dernière agit comme le point de sortie ou le relais vers lequel tout trafic destiné à un réseau non explicitement défini dans la table de routage est envoyé.</p><ul><li>La <strong>passerelle</strong> est l'adresse IP du prochain saut (next hop) dans le réseau voisin.</li><li>Le concept de passerelle par défaut est essentiel dans la configuration IP des équipements terminaux et des routeurs pour permettre l'accès à Internet ou à d'autres réseaux segmentés.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une interface est un point de connexion physique ou logique, mais elle n'est pas le destinataire logique du routage inter-réseaux."
      },
      {
        "l": "B",
        "t": "Le terme 'port par défaut' est ambigu et n'est pas une terminologie standard pour désigner le prochain saut dans le routage IP."
      },
      {
        "l": "D",
        "t": "Un sous-réseau est une subdivision logique d'un réseau IP et non une entité vers laquelle on 'envoie' des données de routage."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension du routage inter-réseaux et la capacité à identifier le rôle crucial de la passerelle par défaut dans la communication IP.",
    "summary": [
      "La passerelle par défaut est l'adresse IP du prochain saut pour les paquets destinés à des réseaux distants.",
      "Elle permet d'acheminer le trafic lorsque aucune route spécifique n'existe dans la table de routage.",
      "L'absence de passerelle par défaut empêche la communication hors du réseau local (segment).",
      "Le routage inter-réseaux repose sur la transmission des données de routeur en routeur jusqu'à la destination."
    ]
  },
  {
    "num": "Q15",
    "partie": "Administration Système et Réseaux",
    "q": "Quels mécanismes les routeurs utilisent-ils pour échanger dynamiquement leurs tables de routage et partager des informations sur la topologie du réseau ?",
    "choices": {
      "A": "Les protocoles routés (routed protocols)",
      "B": "Les protocoles de transport",
      "C": "Les protocoles de routage (routing protocols)",
      "D": "Le protocole UDP"
    },
    "correct": "C",
    "explanation": "<p>Les <strong>protocoles de routage</strong> sont des ensembles de règles utilisés par les routeurs pour communiquer entre eux. Leur rôle est d'échanger des informations sur l'état des liaisons et des réseaux afin de mettre à jour dynamiquement les tables de routage (ex: OSPF, EIGRP, BGP).</p><ul><li>Ils permettent la convergence du réseau.</li><li>Ils calculent le meilleur chemin vers une destination.</li><li>Ils automatisent la maintenance de la table de routage contrairement au routage statique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les protocoles routés (comme IP) sont les protocoles qui sont transportés par le réseau, ils ne servent pas à construire les tables de routage."
      },
      {
        "l": "B",
        "t": "Les protocoles de transport (comme TCP ou UDP) assurent la communication de bout en bout entre les applications, et non la gestion de la topologie du réseau."
      },
      {
        "l": "D",
        "t": "UDP est un protocole de transport, et bien qu'il puisse être utilisé pour transporter certains messages de protocoles de routage (comme RIP), ce n'est pas le mécanisme global de routage en lui-même."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la distinction sémantique et technique entre les protocoles routés (données) et les protocoles de routage (contrôle).",
    "summary": [
      "Les protocoles de routage servent à construire et mettre à jour les tables de routage.",
      "Il ne faut pas confondre les protocoles de routage (ex: OSPF) avec les protocoles routés (ex: IPv4/IPv6).",
      "Le routage dynamique permet au réseau de s'adapter automatiquement aux changements de topologie.",
      "La mise à jour des tables de routage est essentielle pour acheminer les paquets vers la bonne destination."
    ]
  },
  {
    "num": "Q16",
    "partie": "Administration Système et Réseaux",
    "q": "Pour quelles raisons est-il recommandé de segmenter les réseaux locaux (LAN) ?",
    "choices": {
      "A": "Pour isoler le trafic entre les différents segments du réseau.",
      "B": "Pour augmenter la bande passante disponible par hôte.",
      "C": "Pour réduire la taille des domaines de collision afin d'améliorer les performances.",
      "D": "Toutes ces réponses sont correctes."
    },
    "correct": "D",
    "explanation": "<p>La segmentation réseau est une pratique fondamentale dans la conception d'infrastructures. Elle permet d'atteindre plusieurs objectifs critiques :</p><ul><li><strong>Isolation du trafic :</strong> En séparant les flux, on limite la propagation des broadcasts et on renforce la sécurité.</li><li><strong>Bande passante :</strong> La segmentation réduit le nombre d'appareils par segment, ce qui augmente la part de bande passante disponible pour chaque utilisateur.</li><li><strong>Domaines de collision :</strong> L'utilisation de commutateurs (switchs) permet de créer des domaines de collision plus petits, réduisant ainsi les conflits de transmission et les retransmissions inutiles.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est un avantage réel, mais ce n'est pas le seul bénéfice de la segmentation."
      },
      {
        "l": "B",
        "t": "Bien que vrai, la réduction des collisions et l'isolation sont tout aussi cruciales."
      },
      {
        "l": "C",
        "t": "C'est un bénéfice technique majeur, mais il ne résume pas à lui seul l'intérêt global de la segmentation."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur les avantages techniques et opérationnels de la segmentation des réseaux locaux.",
    "summary": [
      "La segmentation réseau divise un grand réseau en segments plus petits et plus gérables.",
      "Elle améliore la performance globale en limitant les domaines de collision.",
      "Elle permet une meilleure gestion de la bande passante par segment.",
      "Elle renforce la sécurité globale en isolant les différents types de trafics."
    ]
  },
  {
    "num": "Q17",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle est l'incidence principale du passage d'une architecture d'entreprise traditionnelle vers un réseau totalement convergé ?",
    "choices": {
      "A": "Le service téléphonique analogique local peut être entièrement confié à des opérateurs à bas coût.",
      "B": "La structure des VLAN Ethernet devient moins complexe à administrer.",
      "C": "Une infrastructure unique et partagée est créée, facilitant la gestion centralisée du réseau.",
      "D": "Les problèmes liés à la qualité de service (QoS) sont automatiquement et fortement réduits."
    },
    "correct": "C",
    "explanation": "<p>La <strong>convergence réseau</strong> désigne l'intégration de différents types de flux (données, voix, vidéo) sur une seule et même infrastructure physique et logique.</p><p>Les points clés sont :</p><ul><li><strong>Mutualisation :</strong> On utilise les mêmes commutateurs et câblages pour tout le trafic.</li><li><strong>Gestion centralisée :</strong> L'administration est simplifiée car il n'y a plus qu'un seul type de réseau à maintenir au lieu de plusieurs réseaux isolés (PABX pour la voix, Ethernet pour les données).</li><li><strong>Efficacité opérationnelle :</strong> Bien que la complexité de configuration puisse augmenter (gestion des VLAN, QoS), l'infrastructure globale est unifiée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le passage à un réseau convergé concerne l'infrastructure interne, pas le choix de l'opérateur externe."
      },
      {
        "l": "B",
        "t": "La convergence nécessite souvent une gestion plus fine des VLAN pour segmenter les flux (Voix vs Données), ce qui augmente plutôt la complexité de configuration."
      },
      {
        "l": "D",
        "t": "Au contraire, la convergence rend la QoS plus critique, car les flux voix et vidéo sont très sensibles à la latence, contrairement aux données classiques."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend les avantages stratégiques et opérationnels de la convergence des services sur IP.",
    "summary": [
      "Un réseau convergé permet de transporter la voix, la vidéo et les données sur une infrastructure commune.",
      "L'avantage principal est la centralisation et la simplification de la gestion de l'infrastructure physique.",
      "La convergence impose des défis techniques accrus en matière de gestion de la bande passante et de priorité des flux (QoS).",
      "Cette architecture réduit les coûts opérationnels à long terme en évitant la redondance des équipements."
    ]
  },
  {
    "num": "Q18",
    "partie": "Administration Système et Réseaux",
    "q": "Lorsqu'un commutateur (switch) reçoit une trame et que l'adresse MAC source n'est pas encore répertoriée dans sa table de commutation, quelle action le commutateur effectue-t-il pour traiter cette trame ?",
    "choices": {
      "A": "Le commutateur demande au nœud émetteur de renvoyer la trame.",
      "B": "Le commutateur émet une requête ARP pour confirmer l'identité de la source.",
      "C": "Le commutateur associe l'adresse MAC source au port physique sur lequel la trame a été reçue.",
      "D": "Le commutateur envoie une trame d'accusé de réception à l'adresse MAC source."
    },
    "correct": "C",
    "explanation": "<p>Lorsqu'un commutateur reçoit une trame, il effectue deux opérations fondamentales :</p><ul><li><strong>Apprentissage (Learning) :</strong> Le commutateur examine l'adresse MAC source de la trame entrante. Si cette adresse est absente de sa table d'adresses MAC (ou table CAM), il l'ajoute immédiatement à sa table en l'associant au port physique où elle a été captée.</li><li><strong>Transfert (Forwarding) :</strong> Si l'adresse MAC de destination est connue, la trame est envoyée sur le port correspondant. Si elle est inconnue, le commutateur effectue une diffusion (flood) sur tous les ports, sauf celui d'entrée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le commutateur ne demande pas de retransmission ; il apprend automatiquement l'adresse MAC source sans intervention de l'hôte."
      },
      {
        "l": "B",
        "t": "La requête ARP appartient à la couche 3 (réseau). Le commutateur fonctionne principalement en couche 2 (liaison) et ne génère pas de requêtes ARP pour identifier les adresses MAC."
      },
      {
        "l": "D",
        "t": "Le commutateur est un équipement de couche 2 transparent ; il ne modifie pas les trames et n'émet pas d'accusés de réception au niveau liaison de données."
      }
    ],
    "examiner": "Évaluer la compréhension du processus d'apprentissage dynamique (MAC Learning) des commutateurs réseau.",
    "summary": [
      "Le commutateur construit sa table d'adresses MAC dynamiquement en observant l'adresse source de chaque trame reçue.",
      "L'apprentissage se fait par l'association entre une adresse MAC source et le port physique d'entrée.",
      "Ce processus permet au commutateur de savoir ultérieurement vers quel port diriger les trames destinées à cet hôte.",
      "Cette opération est transparente pour les hôtes émetteurs et ne nécessite aucun protocole de type ARP."
    ]
  },
  {
    "num": "Q19",
    "partie": "Administration Système et Réseaux",
    "q": "Par quels moyens est-il possible de configurer les paramètres réseau sur un système d'exploitation Windows ?",
    "choices": {
      "A": "Uniquement via l'invite de commande (CLI).",
      "B": "Uniquement via l'interface graphique (GUI).",
      "C": "À la fois par l'interface graphique et par la ligne de commande.",
      "D": "Uniquement via l'utilitaire système 'ipconfig'."
    },
    "correct": "C",
    "explanation": "<p>Sous Windows, la gestion de la configuration réseau est extrêmement flexible. L'utilisateur peut choisir parmi plusieurs méthodes selon ses besoins ou son niveau d'expertise :</p><ul><li><strong>Interface Graphique :</strong> Via le <em>Centre Réseau et partage</em> ou les <em>Paramètres Windows</em>, idéal pour une configuration simple et visuelle.</li><li><strong>Ligne de commande :</strong> Via <code>netsh</code> (Network Shell) ou <code>PowerShell</code> (avec les applets <code>Get-NetIPAddress</code> et <code>New-NetIPAddress</code>), offrant une puissance d'automatisation et de gestion à distance indispensable pour les administrateurs système.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Limiter la configuration à la ligne de commande néglige l'accessibilité de l'interface graphique, standard sur Windows."
      },
      {
        "l": "B",
        "t": "L'interface graphique n'est pas le seul moyen ; la ligne de commande est largement utilisée, notamment pour le scripting et les serveurs."
      },
      {
        "l": "D",
        "t": "L'utilitaire 'ipconfig' est un outil de consultation et de diagnostic réseau, il ne permet pas de modifier la configuration IP (adresse, masque, passerelle)."
      }
    ],
    "examiner": "Évaluer la connaissance des méthodes d'administration réseau sous Windows et la distinction entre outils de consultation et outils de configuration.",
    "summary": [
      "Windows offre une double approche pour la configuration réseau : graphique et ligne de commande.",
      "L'outil 'ipconfig' sert uniquement à afficher les paramètres réseau, il ne permet pas de les modifier.",
      "La ligne de commande (PowerShell, netsh) est privilégiée pour l'automatisation et la gestion distante.",
      "L'interface graphique est généralement utilisée pour les configurations ponctuelles sur postes clients."
    ]
  },
  {
    "num": "Q20",
    "partie": "Administration Système et Réseaux",
    "q": "Dans l'écosystème Linux, quelle distribution constitue la base technique et l'héritage direct de la distribution Ubuntu ?",
    "choices": {
      "A": "Mandriva",
      "B": "Fedora",
      "C": "Debian",
      "D": "Suse"
    },
    "correct": "C",
    "explanation": "<p>La distribution <strong>Ubuntu</strong> est basée sur <strong>Debian</strong>. Cette filiation signifie qu'Ubuntu utilise le même système de gestion de paquets (format <strong>.deb</strong>) et le même outil de gestion de logiciels en ligne de commande, <strong>APT</strong> (Advanced Package Tool).</p><p>Bien qu'Ubuntu se soit distinguée par une approche différente concernant la fréquence des cycles de publication et l'ergonomie, elle partage le noyau et les fondamentaux structurels de Debian.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Mandriva était une distribution indépendante (issue de Mandrake et Conectiva) utilisant le format de paquet RPM, sans lien direct avec l'architecture Debian."
      },
      {
        "l": "B",
        "t": "Fedora est une distribution communautaire parrainée par Red Hat, basée sur le format de paquet RPM et utilisant dnf/yum, ce qui la rend techniquement distincte d'Ubuntu."
      },
      {
        "l": "D",
        "t": "SUSE (et openSUSE) utilise également le format de paquet RPM et son propre outil de gestion appelé YaST, s'éloignant ainsi de la structure Debian/Ubuntu."
      }
    ],
    "examiner": "L'examinateur évalue la connaissance de l'étudiant concernant l'arborescence des familles de distributions Linux et leur gestionnaire de paquets associé.",
    "summary": [
      "Ubuntu est dérivée de la distribution Debian.",
      "Elle hérite du système de gestion de paquets .deb.",
      "Les outils APT sont communs aux deux distributions.",
      "La distinction entre les familles Debian (APT) et Red Hat/Fedora (RPM/DNF) est fondamentale en administration Linux."
    ]
  },
  {
    "num": "Q21",
    "partie": "Administration Système et Réseaux",
    "q": "Comment identifier visuellement une session ouverte avec des privilèges d'administrateur (root) dans un terminal Linux ?",
    "choices": {
      "A": "L'invite de commande se termine par le symbole #",
      "B": "L'invite de commande se termine par le symbole $",
      "C": "L'invite de commande affiche explicitement le mot 'root'",
      "D": "L'invite de commande affiche le mot 'admin'"
    },
    "correct": "A",
    "explanation": "<p>Dans les systèmes d'exploitation de type Unix/Linux, l'invite de commande (shell prompt) par défaut est configurée pour indiquer le niveau de privilège de l'utilisateur actuel :</p><ul><li><strong>Le symbole #</strong> : Il est réservé à l'utilisateur super-utilisateur, également appelé <em>root</em>. Il signale que l'utilisateur possède les droits administratifs complets sur le système.</li><li><strong>Le symbole $</strong> : Il est utilisé pour les utilisateurs standards (non privilégiés).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le symbole $ est la convention standard pour les utilisateurs normaux sans privilèges d'administration."
      },
      {
        "l": "C",
        "t": "Bien que l'utilisateur soit 'root', l'invite de commande n'affiche pas systématiquement le mot 'root' par défaut, mais utilise le caractère '#' comme indicateur distinctif."
      },
      {
        "l": "D",
        "t": "Le terme 'admin' n'est pas une convention système standard sous Linux pour désigner l'invite de commande du super-utilisateur."
      }
    ],
    "examiner": "Évaluer la connaissance pratique de l'environnement CLI Linux et des indicateurs de sécurité liés aux privilèges utilisateur.",
    "summary": [
      "Le symbole # dans le prompt indique un accès avec les privilèges 'root'.",
      "Le symbole $ est utilisé pour les comptes utilisateurs standards.",
      "La distinction visuelle entre # et $ est cruciale pour éviter les erreurs de manipulation système.",
      "L'utilisateur root possède un contrôle total sur l'ensemble du système d'exploitation."
    ]
  },
  {
    "num": "Q22",
    "partie": "Administration Système et Réseaux",
    "q": "Quel paramètre est utilisé pour identifier de manière unique un réseau sans fil (Wi-Fi) parmi plusieurs réseaux disponibles ?",
    "choices": {
      "A": "DSSS",
      "B": "SSID",
      "C": "WEP",
      "D": "OFDM"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>SSID (Service Set Identifier)</strong> est le nom attribué à un réseau sans fil. C'est l'identifiant logique utilisé par les points d'accès et les clients pour distinguer un réseau spécifique d'un autre au sein d'une même zone géographique.</p><ul><li><strong>DSSS</strong> est une technique de modulation.</li><li><strong>WEP</strong> est un ancien protocole de sécurité.</li><li><strong>OFDM</strong> est une technique de transmission de données.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le DSSS (Direct-Sequence Spread Spectrum) est une technique de modulation utilisée pour la transmission de données sans fil, et non un identifiant de réseau."
      },
      {
        "l": "C",
        "t": "Le WEP (Wired Equivalent Privacy) est un protocole de chiffrement obsolète destiné à sécuriser les données, il ne sert pas à nommer ou identifier le réseau."
      },
      {
        "l": "D",
        "t": "L'OFDM (Orthogonal Frequency-Division Multiplexing) est une méthode de codage du signal utilisée pour améliorer l'efficacité spectrale dans les communications modernes."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de base des réseaux sans fil et la distinction entre identifiants, sécurité et techniques de transmission.",
    "summary": [
      "Le SSID est le nom configurable d'un réseau Wi-Fi.",
      "Il permet aux appareils de se connecter au bon point d'accès.",
      "DSSS et OFDM concernent la transmission physique du signal.",
      "WEP est un protocole de sécurité désormais déconseillé."
    ]
  },
  {
    "num": "Q23",
    "partie": "Administration Système et Réseaux",
    "q": "Quel énoncé est vrai en ce qui concerne l’authentification ouverte (Open Authentication) lorsqu'elle est activée sur un point d'accès Wi-Fi ?",
    "choices": {
      "A": "Elle ne nécessite pas d’authentification.",
      "B": "Elle fait appel à un algorithme de cryptage 64 bits.",
      "C": "Elle nécessite l’utilisation d’un serveur d’authentification.",
      "D": "Elle nécessite un mot de passe mutuel."
    },
    "correct": "A",
    "explanation": "<p>L'<strong>authentification ouverte</strong> (Open Authentication) est le mode par défaut des réseaux Wi-Fi non sécurisés. Dans ce mode, aucune vérification d'identité n'est effectuée entre le client et le point d'accès.</p><ul><li><strong>Aucune vérification :</strong> N'importe quel appareil peut se connecter sans fournir de mot de passe ou de certificat.</li><li><strong>Absence de chiffrement :</strong> Par défaut, ce mode ne chiffre pas les données transmises (sauf si une couche supérieure comme le HTTPS est utilisée).</li><li><strong>Historique :</strong> Bien qu'il s'agisse techniquement d'un mécanisme défini par la norme 802.11, il est considéré comme une absence de sécurité réelle.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le chiffrement 64 bits fait référence au standard WEP (Wired Equivalent Privacy), qui est une méthode de protection obsolète et non au mode d'authentification ouvert."
      },
      {
        "l": "C",
        "t": "L'utilisation d'un serveur d'authentification (comme un serveur RADIUS) correspond au mode WPA-Enterprise (802.1X), pas au mode ouvert."
      },
      {
        "l": "D",
        "t": "L'authentification mutuelle ou l'usage de mots de passe (clés pré-partagées) est caractéristique des modes WPA/WPA2/WPA3-Personal."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la distinction fondamentale entre les mécanismes de sécurité Wi-Fi (WPA, WEP, 802.1X) et le mode ouvert par défaut qui n'offre aucune restriction d'accès.",
    "summary": [
      "L'authentification ouverte permet à tout client de se connecter sans fournir d'identifiants.",
      "Ce mode est inhérent aux réseaux Wi-Fi publics non sécurisés.",
      "Il ne garantit ni l'authentification des utilisateurs ni la confidentialité des données.",
      "Il se distingue des modes WPA/WPA2 qui imposent des clés ou des serveurs distants."
    ]
  },
  {
    "num": "Q24",
    "partie": "Administration Système et Réseaux",
    "q": "Comment qualifie-t-on un réseau informatique dans lequel chaque ordinateur joue à la fois le rôle de client et de serveur, sans recours à un serveur central dédié ?",
    "choices": {
      "A": "Un réseau point à point",
      "B": "Un réseau peer-to-peer (pair à pair)",
      "C": "Un réseau client-client",
      "D": "Un réseau homogène"
    },
    "correct": "B",
    "explanation": "<p>Dans une architecture <strong>peer-to-peer (P2P)</strong> ou <strong>pair à pair</strong>, l'ensemble des postes de travail possèdent des droits et des capacités identiques. Contrairement au modèle <em>client-serveur</em> où les ressources sont centralisées sur une machine spécifique, chaque machine peut partager ses propres ressources (fichiers, imprimantes) avec les autres machines du réseau.</p><ul><li>Ce modèle est idéal pour les petits réseaux (bureaux domestiques, petites entreprises).</li><li>Il simplifie l'administration car il ne nécessite pas de système d'exploitation serveur coûteux.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un réseau point à point désigne une connexion directe entre deux nœuds, mais ne définit pas l'architecture logicielle de partage de ressources."
      },
      {
        "l": "C",
        "t": "Le terme 'réseau client-client' n'existe pas dans la terminologie standard des réseaux informatiques."
      },
      {
        "l": "D",
        "t": "Un réseau homogène indique que les machines utilisent le même système d'exploitation ou le même protocole, ce qui est indépendant du mode d'architecture (P2P ou client-serveur)."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension des architectures réseau de base et la terminologie appropriée pour distinguer le modèle pair-à-pair du modèle client-serveur.",
    "summary": [
      "Le réseau pair à pair (P2P) ne repose sur aucun serveur central dédié.",
      "Chaque machine du réseau fonctionne simultanément comme client et comme serveur.",
      "Ce modèle est principalement utilisé dans des environnements de petite taille pour sa simplicité et son coût réduit.",
      "L'administration est décentralisée, ce qui peut rendre la gestion complexe sur un très grand nombre de postes."
    ]
  },
  {
    "num": "Q25",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les normes Wi-Fi suivantes, laquelle offre le meilleur équilibre entre la compatibilité ascendante avec les anciennes normes et des performances élevées ?",
    "choices": {
      "A": "802.11a",
      "B": "802.11b",
      "C": "802.11g",
      "D": "802.11n"
    },
    "correct": "D",
    "explanation": "<p>La norme <strong>IEEE 802.11n</strong> (Wi-Fi 4) a été une avancée majeure dans la technologie sans fil. Contrairement à ses prédécesseurs, elle a été conçue pour fonctionner à la fois sur les bandes de fréquences de 2,4 GHz et de 5 GHz.</p><p><strong>Pourquoi 802.11n ?</strong></p><ul><li><strong>Compatibilité :</strong> Elle est nativement rétrocompatible avec les normes 802.11b et 802.11g (sur la bande 2,4 GHz).</li><li><strong>Performance :</strong> Elle introduit la technologie <strong>MIMO</strong> (Multiple Input, Multiple Output), permettant des débits nettement supérieurs (jusqu'à 600 Mbps) grâce à l'utilisation de plusieurs antennes simultanément.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le 802.11a fonctionne uniquement sur la bande 5 GHz et n'est pas compatible avec les équipements 2,4 GHz courants comme le 802.11b/g."
      },
      {
        "l": "B",
        "t": "Le 802.11b est une norme très ancienne avec un débit limité à 11 Mbps, bien en dessous des standards modernes."
      },
      {
        "l": "C",
        "t": "Le 802.11g offre une meilleure vitesse que le 802.11b, mais reste limité par rapport au 802.11n en termes de portée et de débit théorique."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend l'évolution des standards Wi-Fi, notamment la notion de rétrocompatibilité et l'impact technologique du MIMO.",
    "summary": [
      "La norme 802.11n introduit la technologie MIMO pour accroître les débits.",
      "Elle assure une compatibilité avec les normes 802.11b et 802.11g sur la bande 2,4 GHz.",
      "Le 802.11n supporte le fonctionnement en mode dual-band (2,4 GHz et 5 GHz).",
      "La rétrocompatibilité est un facteur clé pour le déploiement dans des environnements hétérogènes."
    ]
  },
  {
    "num": "Q26",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle fonctionnalité de sécurité sans fil permet à un administrateur réseau de restreindre l'accès à un point d'accès en autorisant uniquement des cartes réseau spécifiques, identifiées par leur adresse physique unique ?",
    "choices": {
      "A": "Authentification",
      "B": "Diffusion SSID",
      "C": "Filtrage d’adresse MAC",
      "D": "Protocole EAP (Extensible Authentication Protocol)"
    },
    "correct": "C",
    "explanation": "<p>Le <strong>filtrage d'adresse MAC</strong> est une méthode de contrôle d'accès qui consiste à dresser une liste blanche (whitelist) des adresses physiques (MAC) autorisées à se connecter à un point d'accès sans fil. Chaque carte réseau possède une adresse MAC unique gravée par le fabricant.</p><ul><li>Lorsque cette fonctionnalité est activée, le point d'accès compare l'adresse MAC de l'appareil qui tente de se connecter à sa liste autorisée.</li><li>Si l'adresse ne correspond à aucune entrée de la liste, l'accès au réseau est refusé, même si le mot de passe est correct.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'authentification est un processus général visant à vérifier l'identité de l'utilisateur (via un mot de passe ou un certificat), et non à restreindre l'accès selon le matériel utilisé."
      },
      {
        "l": "B",
        "t": "La diffusion SSID (Service Set Identifier) concerne la visibilité du nom du réseau sans fil. Masquer le SSID ne constitue pas un contrôle d'accès basé sur les identifiants de carte réseau."
      },
      {
        "l": "D",
        "t": "Le protocole EAP est un framework d'authentification utilisé pour sécuriser les connexions (souvent associé au WPA-Enterprise), mais il ne repose pas sur une liste d'adresses MAC spécifiques pour autoriser l'accès."
      }
    ],
    "examiner": "L'examinateur évalue la connaissance des méthodes de sécurisation basiques au niveau de la couche liaison de données pour le contrôle d'accès aux réseaux sans fil.",
    "summary": [
      "Le filtrage d'adresse MAC utilise l'identifiant unique physique de la carte réseau pour contrôler l'accès.",
      "Il s'agit d'une mesure de sécurité légère, facile à contourner par usurpation d'adresse MAC (spoofing).",
      "L'authentification et le cryptage (WPA2/WPA3) sont bien plus efficaces que le simple filtrage MAC.",
      "Le filtrage MAC est souvent utilisé en complément d'autres mesures de sécurité."
    ]
  },
  {
    "num": "Q27",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle est la raison principale à l'origine du développement du protocole IPv6 ?",
    "choices": {
      "A": "La sécurité accrue des transmissions",
      "B": "La simplification du format des en-têtes IP",
      "C": "L'épuisement des adresses IPv4 et le besoin d'extension des capacités d'adressage",
      "D": "La simplification de la gestion de l'adressage"
    },
    "correct": "C",
    "explanation": "<p>La motivation première et fondamentale derrière la création d'IPv6 est le <strong>manque d'adresses IPv4 disponibles</strong>.</p><ul><li><strong>IPv4</strong> utilise des adresses sur 32 bits, permettant environ 4,3 milliards d'adresses, ce qui est devenu insuffisant avec l'explosion de l'Internet et des objets connectés.</li><li><strong>IPv6</strong> utilise des adresses sur 128 bits, offrant un espace d'adressage quasi illimité (2^128 adresses).</li></ul><p>Bien que IPv6 apporte effectivement une simplification des en-têtes (choix B) et une meilleure sécurité intégrée (choix A), ces améliorations sont des bénéfices collatéraux et non la cause initiale du projet.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La sécurité était une fonctionnalité ajoutée ultérieurement à IPv4 (via IPsec) et n'est pas la cause première de la création d'IPv6."
      },
      {
        "l": "B",
        "t": "La simplification des en-têtes est un avantage technique d'IPv6 pour accélérer le routage, mais elle n'est pas la raison pour laquelle le protocole a dû être remplacé."
      },
      {
        "l": "D",
        "t": "IPv6 rend l'adressage globalement plus complexe à gérer pour les administrateurs (adresses hexadécimales très longues) plutôt que plus simple."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la problématique historique de la pénurie d'adresses IP et le rôle majeur du passage à 128 bits.",
    "summary": [
      "La raison principale du développement d'IPv6 est l'épuisement de l'espace d'adressage IPv4.",
      "IPv4 est limité à 32 bits, tandis qu'IPv6 utilise 128 bits pour ses adresses.",
      "IPv6 permet de répondre à la croissance exponentielle des terminaux connectés.",
      "L'amélioration des en-têtes et la sécurité sont des avantages secondaires du protocole."
    ]
  },
  {
    "num": "Q28",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle est l'unité de mesure utilisée par défaut pour exprimer les dimensions de largeur et de profondeur d'une armoire informatique (baie serveur) ?",
    "choices": {
      "A": "Centimètres (cm)",
      "B": "Millimètres (mm)",
      "C": "Unités (U)",
      "D": "Kelvin (K)"
    },
    "correct": "B",
    "explanation": "<p>Dans le domaine des infrastructures informatiques, les dimensions physiques externes d'une baie ou d'une armoire serveur (largeur et profondeur) sont systématiquement exprimées en <strong>millimètres (mm)</strong>.</p><p>Il est crucial de ne pas confondre cette mesure avec le <strong>'U' (Unité)</strong>, qui est une mesure standardisée utilisée exclusivement pour définir la <strong>hauteur</strong> de l'équipement montable en rack (1U = 1,75 pouce soit 44,45 mm).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que le centimètre soit une unité de longueur métrique courante, il n'est pas utilisé dans les spécifications techniques standardisées des fabricants de baies informatiques."
      },
      {
        "l": "C",
        "t": "L'unité 'U' est réservée uniquement à la hauteur des équipements informatiques montables en rack, et non aux dimensions de largeur ou de profondeur de l'armoire elle-même."
      },
      {
        "l": "D",
        "t": "Le Kelvin est l'unité de mesure de la température thermodynamique, n'ayant aucun rapport avec les dimensions physiques d'un châssis."
      }
    ],
    "examiner": "Évaluer la connaissance des standards physiques et terminologiques utilisés dans l'installation d'infrastructures serveurs.",
    "summary": [
      "La largeur et la profondeur des baies serveurs sont toujours exprimées en millimètres.",
      "L'unité 'U' correspond uniquement à la hauteur interne dédiée aux équipements.",
      "Le respect des dimensions en mm est vital pour le calcul de l'encombrement dans une salle serveur.",
      "La distinction entre dimensions externes (mm) et capacité de montage (U) est fondamentale."
    ]
  },
  {
    "num": "Q29",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les propositions suivantes, laquelle est inexacte concernant une Liaison Spécialisée (LS) ?",
    "choices": {
      "A": "Une LS permet l'interconnexion d'une entreprise vers le réseau Internet.",
      "B": "Une LS permet de relier un siège social à l'une de ses succursales.",
      "C": "Une LS est exclusivement une liaison filaire.",
      "D": "Une LS est une liaison qui peut être soit filaire, soit sans fil."
    },
    "correct": "C",
    "explanation": "<p>Une <strong>Liaison Spécialisée (LS)</strong> est un circuit de transmission permanent et exclusif entre deux points. Historiquement basées sur des infrastructures cuivre ou fibre (filaires), les technologies modernes permettent désormais l'établissement de liaisons spécialisées via des faisceaux hertziens (faisceaux micro-ondes ou ondes millimétriques), qui sont des technologies <strong>sans fil</strong>.</p><p>Par conséquent, l'affirmation selon laquelle une LS est <em>exclusivement</em> filaire est fausse, car elle restreint indûment le champ des technologies de transmission point-à-point disponibles.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une utilisation courante des LS pour garantir une bande passante dédiée vers un Fournisseur d'Accès Internet (FAI)."
      },
      {
        "l": "B",
        "t": "C'est l'un des usages principaux des LS : créer un réseau privé étendu (WAN) entre deux sites distants."
      },
      {
        "l": "D",
        "t": "Cette affirmation est techniquement correcte car une liaison point-à-point peut s'appuyer sur des supports hertziens, ce qui rend cette proposition vraie et donc exclue de la réponse attendue."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension des supports physiques de transmission et la capacité à distinguer une définition restrictive (et donc erronée) d'une définition technique moderne et ouverte.",
    "summary": [
      "Une Liaison Spécialisée est un lien dédié et permanent entre deux sites.",
      "Les LS ne sont pas limitées aux supports physiques filaires (cuivre ou fibre).",
      "Les faisceaux hertziens constituent une alternative sans fil valide pour les liaisons point-à-point.",
      "Il faut distinguer l'usage de la liaison (interconnexion) de la technologie de support utilisée."
    ]
  },
  {
    "num": "Q30",
    "partie": "Administration Système et Réseaux",
    "q": "Quel masque de sous-réseau permet d'héberger au moins 510 hôtes sur le réseau d'adresse IP 172.30.0.0 ?",
    "choices": {
      "A": "255.255.0.0",
      "B": "255.255.248.0",
      "C": "255.255.252.0",
      "D": "255.255.254.0"
    },
    "correct": "D",
    "explanation": "<p>Pour héberger 510 hôtes, il faut déterminer le nombre de bits nécessaires pour la partie hôte. La formule est <strong>2^n - 2 ≥ 510</strong>, où 'n' est le nombre de bits d'hôte.</p><ul><li>2^9 = 512, donc 512 - 2 = 510 adresses IP utilisables.</li><li>Il nous faut donc 9 bits pour les hôtes.</li><li>Un masque IPv4 comporte 32 bits. Si 9 bits sont réservés aux hôtes, il reste 32 - 9 = <strong>23 bits</strong> pour le réseau (préfixe /23).</li><li>Le masque /23 correspond à <strong>255.255.254.0</strong> (11111111.11111111.11111110.00000000).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le masque 255.255.0.0 (/16) autorise 65534 hôtes, ce qui est largement supérieur au besoin mais n'est pas le masque le plus restrictif possible."
      },
      {
        "l": "B",
        "t": "Le masque 255.255.248.0 (/21) autorise seulement 2046 hôtes (attendez, erreur de calcul, il autorise 2046 mais le masque /23 est plus précis)."
      },
      {
        "l": "C",
        "t": "Le masque 255.255.252.0 (/22) permet 1022 hôtes, ce qui est supérieur à 510, mais le masque /23 est plus approprié pour segmenter strictement."
      }
    ],
    "examiner": "L'examinateur évalue votre capacité à effectuer un calcul de sous-réseautage (subnetting) pour optimiser l'allocation d'adresses IP en fonction d'un besoin spécifique en nombre d'hôtes.",
    "summary": [
      "La formule pour calculer les hôtes est 2^n - 2.",
      "Un masque /23 (255.255.254.0) offre exactement 510 adresses utilisables.",
      "Chaque bit supplémentaire retiré à la partie hôte réduit le nombre d'hôtes par deux.",
      "Il est crucial de choisir le masque le plus efficace pour éviter le gaspillage d'adresses IP."
    ]
  },
  {
    "num": "Q31",
    "partie": "Administration Système et Réseaux",
    "q": "Que vérifie la commande 'ping 127.0.0.1' ?",
    "choices": {
      "A": "La configuration TCP/IP locale, via une procédure appelée test de bouclage (loopback).",
      "B": "La connexion physique à un hôte distant identifié par l'adresse 127.0.0.1.",
      "C": "La connectivité avec la passerelle par défaut (routeur) du réseau local.",
      "D": "La route complète suivie par les paquets entre l'hôte local et l'adresse 127.0.0.1."
    },
    "correct": "A",
    "explanation": "<p>La commande <strong>ping 127.0.0.1</strong> (ou <em>ping localhost</em>) permet d'effectuer un <strong>test de bouclage</strong> (ou <em>loopback</em>).</p><ul><li>Cette commande vérifie que la <strong>pile protocolaire TCP/IP</strong> est correctement installée et fonctionnelle sur la machine locale.</li><li>Elle ne nécessite aucune connexion réseau physique (câble ou Wi-Fi), car le paquet est traité directement au sein du système d'exploitation.</li><li>Si cette commande échoue, cela signifie que la configuration réseau logicielle est corrompue ou que le service TCP/IP n'est pas démarré.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'adresse 127.0.0.1 n'est pas un hôte distant, mais une adresse réservée à l'hôte local lui-même."
      },
      {
        "l": "C",
        "t": "Le test de la passerelle nécessite de pinger l'adresse IP spécifique du routeur configuré sur le sous-réseau local, et non l'adresse de bouclage."
      },
      {
        "l": "D",
        "t": "Il n'y a pas de 'route' vers l'extérieur pour cette adresse ; le trafic est intercepté et renvoyé instantanément par la couche IP locale."
      }
    ],
    "examiner": "Évaluer la compréhension des fondamentaux du dépannage réseau et la connaissance de l'adresse de bouclage (loopback) utilisée pour diagnostiquer la pile TCP/IP.",
    "summary": [
      "L'adresse 127.0.0.1 est l'adresse de bouclage (loopback) standard.",
      "Le ping sur cette adresse teste uniquement le fonctionnement de la pile TCP/IP locale.",
      "Ce test ne vérifie pas la connectivité physique avec d'autres machines.",
      "Si le ping 127.0.0.1 échoue, le système d'exploitation présente un problème de configuration réseau."
    ]
  },
  {
    "num": "Q32",
    "partie": "Administration Système et Réseaux",
    "q": "Comment caractérise-t-on une adresse réseau (Network Address) dans une plage d'adresses IP ?",
    "choices": {
      "A": "Tous les bits de la partie hôte de l'adresse sont mis à 1.",
      "B": "Tous les bits de la partie hôte de l'adresse sont mis à 0.",
      "C": "Tous les bits de la partie réseau de l'adresse sont mis à 1.",
      "D": "Tous les bits de la partie réseau de l'adresse sont mis à 0."
    },
    "correct": "B",
    "explanation": "<p>Dans le protocole IPv4, une adresse IP est divisée en deux parties : la <strong>partie réseau</strong> et la <strong>partie hôte</strong>.</p><ul><li><strong>Adresse réseau :</strong> Identifie le segment de réseau lui-même. Elle est définie par la convention où tous les bits de la partie hôte sont à <strong>0</strong>.</li><li><strong>Adresse de diffusion (Broadcast) :</strong> Identifie tous les hôtes du réseau. Elle est définie par la convention où tous les bits de la partie hôte sont à <strong>1</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci correspond à l'adresse de diffusion (broadcast) du réseau, non à l'adresse réseau elle-même."
      },
      {
        "l": "C",
        "t": "Si tous les bits de la partie réseau sont à 1, cela ne définit pas une adresse réseau standard dans le cadre du masquage IP."
      },
      {
        "l": "D",
        "t": "La partie réseau contient l'identifiant unique du sous-réseau ; mettre ses bits à 0 rendrait l'adresse invalide pour le routage."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension théorique de la structure d'une adresse IP et la distinction entre l'identifiant de réseau et l'adresse de diffusion.",
    "summary": [
      "Une adresse IP se compose d'une partie réseau et d'une partie hôte.",
      "L'adresse réseau est caractérisée par des bits d'hôte tous positionnés à 0.",
      "L'adresse de diffusion (broadcast) est caractérisée par des bits d'hôte tous positionnés à 1.",
      "Ces deux adresses sont réservées au sein de chaque sous-réseau et ne peuvent être attribuées à des machines individuelles."
    ]
  },
  {
    "num": "Q33",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle est la fonction principale d'un masque de sous-réseau dans la configuration d'une adresse IP ?",
    "choices": {
      "A": "Il n'est pas indispensable pour configurer une adresse IP sur un hôte.",
      "B": "Tous les bits de la partie hôte du masque sont positionnés à 1.",
      "C": "Il permet de déterminer l'adresse du réseau d'appartenance d'une adresse IP donnée.",
      "D": "Il permet exclusivement de déterminer la classe de l'adresse IP."
    },
    "correct": "C",
    "explanation": "<p>Le masque de sous-réseau est un élément essentiel du protocole TCP/IP. Son rôle principal est de <strong>segmenter l'adresse IP</strong> en deux parties distinctes : la partie <em>réseau</em> et la partie <em>hôte</em>.</p><p>Lorsqu'un hôte communique, il effectue un <strong>ET logique</strong> entre son adresse IP et son masque pour identifier le réseau auquel il appartient. Cela permet de déterminer si la destination se trouve sur le réseau local ou sur un réseau distant.</p><ul><li>La partie réseau est représentée par des bits à 1.</li><li>La partie hôte est représentée par des bits à 0.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Faux. Le masque est obligatoire. Sans lui, un hôte est incapable de savoir s'il doit envoyer les paquets vers sa passerelle par défaut ou directement vers un autre hôte sur le segment local."
      },
      {
        "l": "B",
        "t": "Faux. Dans un masque, les bits de la partie hôte sont positionnés à 0, tandis que les bits de la partie réseau sont positionnés à 1."
      },
      {
        "l": "D",
        "t": "Faux. Bien que le masque puisse indirectement aider à identifier la classe (A, B ou C), sa fonction principale et technique est la segmentation du réseau pour le routage."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension fondamentale du fonctionnement du protocole IPv4 et la capacité du candidat à distinguer le rôle du masque dans la logique de segmentation réseau.",
    "summary": [
      "Le masque de sous-réseau divise une adresse IP en une partie réseau et une partie hôte.",
      "Il est indispensable pour déterminer si une destination est locale ou distante.",
      "Dans le masque, les bits réseau sont à 1 et les bits hôtes sont à 0.",
      "L'adresse réseau est obtenue par une opération logique ET entre l'adresse IP et le masque."
    ]
  },
  {
    "num": "Q34",
    "partie": "Administration Système et Réseaux",
    "q": "Quel est le nom de l'équipement situé au niveau du central téléphonique (NRA) qui permet de concentrer les lignes ADSL des abonnés ?",
    "choices": {
      "A": "Le DSLAM (Digital Subscriber Line Access Multiplexer)",
      "B": "Le PABX (Private Automatic Branch Exchange)",
      "C": "Le multiplexeur téléphonique traditionnel",
      "D": "Le point d'accès DSL"
    },
    "correct": "A",
    "explanation": "<p>Le <strong>DSLAM</strong> (Digital Subscriber Line Access Multiplexer) est l'équipement actif installé par l'opérateur dans le central téléphonique (ou NRA - Nœud de Raccordement d'Abonnés). Il a pour rôle de collecter les signaux provenant de plusieurs lignes d'abonnés ADSL et de les multiplexer vers le réseau fédérateur (backbone) de l'opérateur via une liaison à haut débit.</p><ul><li>Il sépare le trafic voix du trafic données.</li><li>Il gère la signalisation et la modulation ADSL pour chaque ligne connectée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le PABX est un autocommutateur téléphonique privé utilisé en entreprise pour gérer les appels internes et externes, et non pour la desserte ADSL d'un opérateur."
      },
      {
        "l": "C",
        "t": "Bien que le DSLAM soit une forme de multiplexeur, ce terme est trop générique et désigne souvent des équipements de transmission de voix analogique (SDH/PDH) antérieurs à l'ère ADSL."
      },
      {
        "l": "D",
        "t": "Le terme 'point d'accès DSL' n'est pas une terminologie technique normalisée pour désigner un équipement opérateur ; il est souvent confondu avec le modem de l'utilisateur."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance des infrastructures réseau liées aux technologies d'accès haut débit (xDSL) et le vocabulaire technique relatif aux centraux téléphoniques.",
    "summary": [
      "Le DSLAM est l'équipement clé de l'ADSL situé au central téléphonique.",
      "Il assure le multiplexage des données des abonnés vers le réseau de l'opérateur.",
      "Il permet la coexistence du signal vocal et du signal numérique sur une paire de cuivre.",
      "Le PABX est un équipement réservé aux communications internes des entreprises."
    ]
  },
  {
    "num": "Q35",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les propositions suivantes, laquelle est inexacte concernant la configuration de l'adresse IP d'un serveur DNS sur un hôte au sein d'un réseau local ?",
    "choices": {
      "A": "L'adresse IP du DNS peut correspondre à celle du serveur DNS interne de l'entreprise.",
      "B": "L'adresse IP du DNS peut correspondre à celle du serveur DNS fourni par le fournisseur d'accès à Internet (FAI).",
      "C": "L'adresse IP du DNS peut être n'importe quelle adresse IP d'un serveur DNS public sur Internet.",
      "D": "Aucune des propositions précédentes n'est fausse."
    },
    "correct": "D",
    "explanation": "<p>Dans une architecture réseau, un hôte doit être configuré avec au moins une adresse IP de serveur DNS pour résoudre les noms de domaine. Il est tout à fait valide techniquement de configurer :</p><ul><li><strong>Un DNS interne :</strong> Utilisé pour résoudre des ressources locales (intranet).</li><li><strong>Un DNS de FAI :</strong> Fourni automatiquement par le DHCP pour la navigation classique.</li><li><strong>Un DNS public (ex: 8.8.8.8) :</strong> Utilisé pour contourner des restrictions ou améliorer la vitesse de résolution.</li></ul><p>Comme toutes les propositions A, B et C sont techniquement possibles et correctes, l'affirmation 'fausse' demandée par la question est la réponse D.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette affirmation est vraie : les entreprises utilisent souvent des DNS locaux pour gérer les noms de domaine internes."
      },
      {
        "l": "B",
        "t": "Cette affirmation est vraie : la plupart des configurations DHCP par défaut assignent les serveurs DNS de l'ISP."
      },
      {
        "l": "C",
        "t": "Cette affirmation est vraie : n'importe quel serveur DNS public accessible peut être utilisé tant que la connectivité IP est établie."
      }
    ],
    "examiner": "Évaluer la compréhension des mécanismes de résolution de noms et la flexibilité de configuration des serveurs DNS sur un poste client.",
    "summary": [
      "Un hôte peut utiliser n'importe quel serveur DNS accessible par IP pour résoudre ses requêtes.",
      "Les entreprises privilégient souvent leurs DNS locaux pour la gestion de ressources privées.",
      "Les serveurs DNS publics (type Google ou Cloudflare) sont des alternatives valides aux DNS des FAI.",
      "La configuration DNS est indépendante du type de réseau, tant que la route vers le serveur DNS est présente."
    ]
  },
  {
    "num": "Q36",
    "partie": "Administration Système et Réseaux",
    "q": "Quel est l'impact d'une atténuation élevée du signal sur les caractéristiques d'un segment de câble réseau ?",
    "choices": {
      "A": "Plus la taille du segment doit être réduite.",
      "B": "Moins le débit du signal sera important.",
      "C": "Plus la gaine du câble sera de couleur foncée.",
      "D": "Plus la distance parcourue par le signal sera grande."
    },
    "correct": "A",
    "explanation": "<p>L'<strong>atténuation</strong> est la perte de puissance du signal lors de sa propagation le long d'un support de transmission (cuivre ou fibre). Plus le signal est atténué, plus il devient difficile pour l'équipement récepteur de distinguer les bits de données du bruit de fond.</p><p>Pour maintenir une intégrité correcte des données, il est impératif de limiter la longueur physique du segment de câble afin que le signal reste exploitable sans nécessiter de régénération par un répéteur ou un commutateur.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Bien qu'une mauvaise qualité de signal puisse entraîner des erreurs, le débit nominal est généralement défini par les spécifications du câble (catégorie) et non directement par la longueur du segment, sauf en cas de dégradation critique."
      },
      {
        "l": "C",
        "t": "La couleur de la gaine d'un câble est normalisée par type d'usage ou de blindage et n'a aucune corrélation technique avec les propriétés physiques d'atténuation du signal."
      },
      {
        "l": "D",
        "t": "C'est l'inverse : une atténuation élevée limite la portée du signal. Plus le signal parcourt de distance, plus il s'atténue, rendant la transmission impossible au-delà d'une certaine limite."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension des contraintes physiques de transmission dans les réseaux locaux (LAN) et de la relation inverse entre la perte de signal et la longueur maximale des câbles.",
    "summary": [
      "L'atténuation désigne la diminution progressive de l'amplitude d'un signal lors de sa propagation.",
      "Il existe une relation directe entre la qualité du signal et la longueur maximale autorisée d'un segment réseau.",
      "Une atténuation forte impose de réduire la longueur du câble pour garantir la fiabilité de la communication.",
      "Le respect des normes de câblage permet d'anticiper ces pertes et d'assurer un débit stable."
    ]
  },
  {
    "num": "Q37",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle est la norme standard définissant la technologie Ethernet ?",
    "choices": {
      "A": "G.703",
      "B": "IEEE 802.3",
      "C": "G.924",
      "D": "IEEE 803.10b"
    },
    "correct": "B",
    "explanation": "<p>La norme <strong>IEEE 802.3</strong> définit la couche physique et la sous-couche MAC de la couche liaison de données du modèle OSI pour les réseaux filaires Ethernet.</p><ul><li><strong>G.703</strong> est une norme de l'UIT-T relative aux interfaces physiques de transmission numérique.</li><li><strong>G.924</strong> n'est pas une norme pertinente dans ce contexte de réseau local.</li><li><strong>803.10b</strong> est une nomenclature inexistante dans le cadre des standards IEEE.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "G.703 est une norme de transmission numérique utilisée principalement dans les télécommunications WAN (E1/T1), non pour les réseaux locaux Ethernet."
      },
      {
        "l": "C",
        "t": "G.924 ne correspond à aucune norme réseau standardisée."
      },
      {
        "l": "D",
        "t": "Cette option est un distracteur utilisant une nomenclature proche des standards IEEE, mais sans réalité technique."
      }
    ],
    "examiner": "Évaluer la connaissance des standards fondamentaux de la mise en réseau locale (LAN).",
    "summary": [
      "La famille de standards IEEE 802 regroupe les protocoles des réseaux locaux (LAN).",
      "Le protocole 802.3 est spécifiquement dédié à la technologie Ethernet.",
      "Ethernet définit les méthodes d'accès au support physique et les formats de trames.",
      "Les normes de la série G sont éditées par l'UIT-T pour les réseaux longue distance, contrairement aux standards IEEE."
    ]
  },
  {
    "num": "Q38",
    "partie": "Administration Système et Réseaux",
    "q": "Quels phénomènes d'interférence électromagnétique peuvent survenir sur des liaisons en cuivre à paires torsadées ?",
    "choices": {
      "A": "Paradiaphonie (NEXT)",
      "B": "Supradiaphonie",
      "C": "Télédiaphonie (FEXT)",
      "D": "Diaphonie de phase"
    },
    "correct": "A",
    "explanation": "<p>Dans les câblages en cuivre à paires torsadées, la <strong>diaphonie</strong> (crosstalk) est un phénomène de perturbation électromagnétique où le signal transmis sur un circuit perturbe un autre circuit voisin.</p><ul><li><strong>Paradiaphonie (NEXT - Near End Crosstalk) :</strong> C'est la mesure de l'interférence subie à l'extrémité émettrice d'une liaison.</li><li><strong>Télédiaphonie (FEXT - Far End Crosstalk) :</strong> C'est l'interférence subie à l'extrémité réceptrice d'une liaison.</li></ul><p>Bien que la télédiaphonie soit également un phénomène réel, la paradiaphonie est généralement considérée comme la perturbation la plus critique dans le test de conformité des câblages réseaux.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La supradiaphonie est un terme technique inexistant dans le domaine de la transmission sur paires torsadées."
      },
      {
        "l": "C",
        "t": "Bien que la télédiaphonie soit un phénomène existant (FEXT), la question demande les phénomènes possibles. La paradiaphonie est historiquement le phénomène majeur de référence pour les tests de certification cuivre."
      },
      {
        "l": "D",
        "t": "La diaphonie de phase n'est pas une terminologie standard utilisée pour caractériser les défauts de transmission sur câbles cuivre."
      }
    ],
    "examiner": "Évaluer la compréhension des phénomènes de couplage électromagnétique et des standards de performance du câblage structuré.",
    "summary": [
      "La diaphonie est une interférence non désirée entre deux circuits voisins.",
      "La paradiaphonie (NEXT) est mesurée à l'extrémité proche de l'émetteur.",
      "La télédiaphonie (FEXT) est mesurée à l'extrémité opposée de l'émetteur.",
      "La torsion des paires de cuivre est conçue précisément pour limiter ces phénomènes d'induction électromagnétique."
    ]
  },
  {
    "num": "Q39",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les propositions suivantes, laquelle désigne la norme internationale standard pour le protocole Ethernet ?",
    "choices": {
      "A": "G.703",
      "B": "802.3",
      "C": "G.924",
      "D": "803.10b"
    },
    "correct": "B",
    "explanation": "<p>La norme <strong>IEEE 802.3</strong> est le standard mondial qui définit la couche physique et la sous-couche MAC (Media Access Control) de la couche liaison de données pour les réseaux Ethernet.</p><ul><li>Elle spécifie comment les équipements réseau communiquent sur un support physique (câble cuivre ou fibre).</li><li>Elle a évolué au fil des ans pour inclure le Fast Ethernet, le Gigabit Ethernet et au-delà.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "G.703 est une recommandation de l'UIT-T définissant les caractéristiques physiques et électriques des interfaces pour la transmission de données (souvent utilisée dans les réseaux WAN de type T1/E1)."
      },
      {
        "l": "C",
        "t": "G.924 n'est pas une norme Ethernet reconnue ; cette nomenclature fait partie des standards UIT-T liés aux télécommunications mais ne concerne pas le LAN Ethernet."
      },
      {
        "l": "D",
        "t": "803.10b est une désignation erronée qui ne correspond à aucune norme IEEE active ou officielle."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la capacité du candidat à identifier les standards fondamentaux des réseaux locaux (LAN) et à distinguer Ethernet des autres normes de télécommunications.",
    "summary": [
      "La norme IEEE 802.3 est la référence technique du protocole Ethernet.",
      "Elle couvre à la fois les spécifications physiques et la gestion de l'accès au support (MAC).",
      "Le standard 802.3 est le socle de la quasi-totalité des réseaux locaux câblés actuels.",
      "Il est important de ne pas confondre les normes LAN (IEEE 802.x) avec les normes de transmission WAN (série G.xxx)."
    ]
  },
  {
    "num": "Q40",
    "partie": "Administration Système et Réseaux",
    "q": "Quels sont les phénomènes de couplage électromagnétique indésirables pouvant apparaître sur des liaisons en cuivre torsadées ?",
    "choices": {
      "A": "Paradiaphonie (NEXT - Near-End Crosstalk)",
      "B": "Supradiaphonie",
      "C": "Télédiaphonie (FEXT - Far-End Crosstalk)",
      "D": "Diaphonie interne"
    },
    "correct": "A",
    "explanation": "<p>Dans les câbles à paires torsadées, le signal peut déborder d'une paire vers une autre en raison du couplage électromagnétique.</p><ul><li><strong>Paradiaphonie (NEXT)</strong> : Le signal parasite est mesuré à la même extrémité que l'émetteur. C'est le phénomène le plus critique dans les câblages réseau.</li><li><strong>Télédiaphonie (FEXT)</strong> : Le signal parasite est mesuré à l'extrémité opposée de l'émetteur.</li><li>La <strong>supradiaphonie</strong> est un terme inexistant en transmission de données.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le terme supradiaphonie n'existe pas dans le domaine des réseaux informatiques et des télécommunications."
      },
      {
        "l": "C",
        "t": "Bien que la télédiaphonie soit un phénomène réel, la paradiaphonie est généralement considérée comme la contrainte la plus sévère et significative lors de la conception des liaisons cuivre."
      },
      {
        "l": "D",
        "t": "Bien que le terme soit vague, il n'est pas techniquement précis comparé aux normes standardisées NEXT et FEXT."
      }
    ],
    "examiner": "Évaluer la compréhension des phénomènes physiques affectant la qualité du signal sur les supports de transmission en cuivre et la connaissance de la terminologie technique (NEXT/FEXT).",
    "summary": [
      "La diaphonie est un couplage électromagnétique indésirable entre les paires d'un câble.",
      "La paradiaphonie (NEXT) se mesure à l'extrémité émettrice et est souvent la plus contraignante.",
      "La télédiaphonie (FEXT) se mesure à l'extrémité réceptrice du lien.",
      "Le torsadage des fils est la technique principale utilisée pour minimiser ces phénomènes de diaphonie."
    ]
  },
  {
    "num": "Q41",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les configurations d'adressage IP suivantes pour un routeur, laquelle est techniquement incorrecte ?",
    "choices": {
      "A": "Adresse du port série : 172.30.3.1/24 ; Adresse du port Ethernet : 172.30.3.2/24",
      "B": "Adresse du port série : 172.30.3.1/24 ; Adresse du port Ethernet : 172.30.4.1/24",
      "C": "Adresse du port série : 192.30.2.2/24 ; Adresse du port Ethernet : 192.30.3.3/24",
      "D": "Adresse du port série : 192.30.3.254/24 ; Adresse du port Ethernet : 192.30.4.254/24"
    },
    "correct": "A",
    "explanation": "<p>La réponse correcte est la <strong>A</strong> car elle viole les principes fondamentaux de l'adressage IP sur un routeur.</p><ul><li>Un routeur est un équipement conçu pour interconnecter des <strong>sous-réseaux différents</strong>.</li><li>Dans la proposition A, les deux ports (série et Ethernet) possèdent des adresses IP appartenant au <strong>même sous-réseau</strong> (172.30.3.0/24).</li><li>Cela crée un conflit logique, car la table de routage ne peut pas distinguer par quelle interface acheminer un paquet destiné à ce sous-réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Les deux adresses appartiennent à des sous-réseaux distincts (172.30.3.0/24 et 172.30.4.0/24), ce qui est une configuration valide."
      },
      {
        "l": "C",
        "t": "Les réseaux 192.30.2.0/24 et 192.30.3.0/24 sont bien distincts, configuration valide."
      },
      {
        "l": "D",
        "t": "Les réseaux 192.30.3.0/24 et 192.30.4.0/24 sont bien distincts, configuration valide."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension du principe de segmentation réseau : un routeur doit impérativement isoler les domaines de diffusion en utilisant des adresses appartenant à des sous-réseaux différents sur chaque interface.",
    "summary": [
      "Un routeur sert à relier des réseaux logiques distincts.",
      "Les interfaces d'un routeur ne doivent jamais appartenir au même sous-réseau IP.",
      "L'utilisation du masque de sous-réseau (/24) permet de définir les limites du réseau.",
      "Toute configuration plaçant deux interfaces dans le même sous-réseau empêche le bon fonctionnement du routage."
    ]
  },
  {
    "num": "Q42",
    "partie": "Administration Système et Réseaux",
    "q": "Quel est le nom du service web natif intégré à l'environnement Windows Server ?",
    "choices": {
      "A": "IIS (Internet Information Services)",
      "B": "Apache HTTP Server",
      "C": "Windows Web Server",
      "D": "ISA Server"
    },
    "correct": "A",
    "explanation": "<p>Le service web natif et historique intégré aux systèmes d'exploitation Windows Server est <strong>IIS (Internet Information Services)</strong>.</p><p>Il s'agit d'un serveur web modulaire, sécurisé et conçu pour héberger des applications basées sur les technologies Microsoft telles que ASP.NET, PHP ou encore des sites statiques.</p><ul><li><strong>IIS</strong> : Solution native Microsoft.</li><li><strong>Apache</strong> : Serveur web open-source, très populaire sous Linux mais nécessitant une installation tierce sous Windows.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Apache est un serveur web open-source très utilisé, mais il n'est pas intégré nativement à Windows."
      },
      {
        "l": "C",
        "t": "Windows Web Server est une édition spécifique de Windows Server, et non le nom du service web lui-même."
      },
      {
        "l": "D",
        "t": "ISA Server (Internet Security and Acceleration Server) est une solution de pare-feu et de proxy, et non un serveur web."
      }
    ],
    "examiner": "Vérifier la connaissance des composants fondamentaux de l'écosystème serveur de Microsoft.",
    "summary": [
      "IIS (Internet Information Services) est le serveur web standard des environnements Windows.",
      "Apache est un serveur tiers, non natif à Windows.",
      "Il ne faut pas confondre le nom d'une édition de l'OS avec le nom du service logiciel.",
      "ISA Server est un outil de sécurité (proxy/pare-feu) et non un serveur de pages web."
    ]
  },
  {
    "num": "Q43",
    "partie": "Administration Système et Réseaux",
    "q": "À partir de quelle version des systèmes d'exploitation Windows Server la technologie Active Directory a-t-elle été officiellement introduite ?",
    "choices": {
      "A": "Windows NT",
      "B": "Windows Server 2000",
      "C": "Windows Server 2003",
      "D": "Windows Server 2008"
    },
    "correct": "B",
    "explanation": "<p>L'<strong>Active Directory (AD)</strong> a été introduit pour la première fois avec <strong>Windows 2000 Server</strong>. Cette technologie marque une évolution majeure par rapport aux anciens domaines NT basés sur le protocole NetBIOS et les contrôleurs de domaine principaux/secondaires (PDC/BDC).</p><ul><li><strong>Windows 2000 Server</strong> : Apparition de l'annuaire LDAP et DNS.</li><li><strong>Windows Server 2003</strong> : Amélioration des fonctionnalités (niveaux fonctionnels, réplication).</li><li><strong>Windows Server 2008</strong> : Introduction des contrôleurs de domaine en lecture seule (RODC) et du noyau en mode lecture seule.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Windows NT utilisait le système SAM (Security Accounts Manager) et une gestion des domaines basée sur NetBIOS, sans la structure hiérarchique de l'Active Directory."
      },
      {
        "l": "C",
        "t": "Windows Server 2003 est une version évoluée de Windows 2000, elle a optimisé l'Active Directory mais ne l'a pas introduit."
      },
      {
        "l": "D",
        "t": "Windows Server 2008 est une version bien plus récente qui a apporté des améliorations significatives, mais elle n'est pas à l'origine de l'introduction de l'AD."
      }
    ],
    "examiner": "Évaluer la connaissance historique des architectures serveurs Microsoft et de l'évolution des services d'annuaire.",
    "summary": [
      "Active Directory a été lancé avec Windows 2000 Server.",
      "Il remplace le modèle de domaine NT basé sur le protocole NetBIOS.",
      "L'AD repose sur des protocoles standard comme LDAP et DNS.",
      "Chaque version ultérieure de Windows Server a enrichi les capacités de l'AD."
    ]
  },
  {
    "num": "Q44",
    "partie": "Administration Système et Réseaux",
    "q": "Dans un environnement Linux traditionnel, quel est le nom conventionnel attribué à la première interface réseau Ethernet ?",
    "choices": {
      "A": "eth0",
      "B": "ether0",
      "C": "e0",
      "D": "ethernet0"
    },
    "correct": "A",
    "explanation": "<p>Dans les conventions de nommage historiques de Linux (avant l'introduction du <strong>Predictable Network Interface Names</strong>), les interfaces réseau Ethernet étaient nommées en utilisant le préfixe <strong>eth</strong> suivi d'un numéro commençant à 0.</p><ul><li><strong>eth0</strong> désigne la première carte réseau détectée par le noyau.</li><li><strong>eth1</strong> désignerait la seconde, et ainsi de suite.</li></ul><p>Bien que les distributions modernes utilisent désormais des identifiants persistants (comme <em>enp3s0</em>), <strong>eth0</strong> reste la convention classique enseignée pour comprendre l'adressage des interfaces sous Linux.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le préfixe 'ether' n'est pas utilisé dans la nomenclature standard du noyau Linux pour les interfaces réseau."
      },
      {
        "l": "C",
        "t": "Le préfixe 'e' seul est trop court et ne permet pas de distinguer les interfaces réseau des autres périphériques matériels."
      },
      {
        "l": "D",
        "t": "Bien que descriptif, 'ethernet0' n'est pas la convention de nommage utilisée par les pilotes réseau du noyau Linux."
      }
    ],
    "examiner": "Évalue la connaissance des conventions de nommage des interfaces réseau dans les systèmes de type Unix/Linux.",
    "summary": [
      "Historiquement, les interfaces Ethernet sous Linux utilisent le préfixe 'eth'.",
      "La numérotation commence toujours par 0 pour la première interface détectée.",
      "Les noms 'eth0', 'eth1' sont des conventions classiques avant l'apparition des noms d'interface prévisibles.",
      "Comprendre cette nomenclature est essentiel pour la configuration des fichiers réseau comme '/etc/network/interfaces'."
    ]
  },
  {
    "num": "Q45",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle commande permet d'attribuer ou de gérer une adresse IP pour une interface réseau sous Linux ?",
    "choices": {
      "A": "ipconfig",
      "B": "ifconfig",
      "C": "netconfig",
      "D": "Ethconfig"
    },
    "correct": "B",
    "explanation": "<p>Sous les systèmes d'exploitation de type Unix/Linux, la commande <strong>ifconfig</strong> (interface configuration) est l'utilitaire traditionnel utilisé pour configurer, contrôler et interroger les paramètres des interfaces réseau TCP/IP.</p><ul><li><strong>ifconfig</strong> permet d'attribuer une adresse IP, un masque de sous-réseau et d'activer ou désactiver une interface.</li><li>Bien qu'elle soit considérée comme obsolète dans certaines distributions modernes au profit de la suite <em>iproute2</em> (commande <code>ip</code>), elle reste la réponse classique à cette question technique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "ipconfig est une commande spécifique aux systèmes d'exploitation Windows pour gérer les configurations réseau."
      },
      {
        "l": "C",
        "t": "netconfig n'est pas une commande standard pour la configuration directe des interfaces réseau sous Linux."
      },
      {
        "l": "D",
        "t": "Ethconfig n'existe pas en tant que commande native sous Linux ; il s'agit probablement d'une confusion avec des outils de configuration de pilotes Ethernet."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance des outils d'administration réseau en ligne de commande sous Linux et la distinction entre les environnements Windows et Linux.",
    "summary": [
      "La commande 'ifconfig' est l'outil historique de gestion des interfaces réseau sous Linux.",
      "Il ne faut pas confondre 'ipconfig' (Windows) et 'ifconfig' (Linux).",
      "La configuration d'une adresse IP nécessite des privilèges d'administration (root).",
      "Bien que 'ifconfig' soit progressivement remplacé par la commande 'ip' (iproute2), il demeure une référence fondamentale."
    ]
  },
  {
    "num": "Q46",
    "partie": "Administration Système et Réseaux",
    "q": "Dans un environnement Linux, quel fichier de configuration permet d'identifier le shell par défaut attribué à un utilisateur spécifique ?",
    "choices": {
      "A": "/etc/users",
      "B": "/etc/passwd",
      "C": "/etc/group",
      "D": "/etc/shells"
    },
    "correct": "B",
    "explanation": "<p>Sous Linux, le fichier <strong>/etc/passwd</strong> est un fichier texte essentiel qui stocke les informations de base sur les comptes utilisateurs.</p><p>Chaque ligne représente un utilisateur et suit un format structuré par des deux-points (:) :</p><ul><li>Nom d'utilisateur</li><li>Mot de passe (généralement 'x' car stocké dans /etc/shadow)</li><li>UID (User ID)</li><li>GID (Group ID)</li><li>Commentaire (GECOS)</li><li>Répertoire personnel (Home directory)</li><li><strong>Shell de connexion (Login shell)</strong></li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le fichier /etc/users n'existe pas nativement dans une distribution Linux standard."
      },
      {
        "l": "C",
        "t": "/etc/group est utilisé pour définir les groupes d'utilisateurs et leurs membres, il ne contient pas d'informations sur le shell."
      },
      {
        "l": "D",
        "t": "/etc/shells liste uniquement les shells disponibles et autorisés sur le système, mais ne définit pas quel shell est attribué à un utilisateur précis."
      }
    ],
    "examiner": "Évaluer la compréhension de la structure des fichiers de configuration système et la gestion des comptes utilisateurs sous Linux.",
    "summary": [
      "Le fichier /etc/passwd stocke les informations de profil utilisateur.",
      "La septième colonne du fichier /etc/passwd indique le chemin vers le shell de connexion.",
      "Le fichier /etc/shells sert de liste de référence pour les interpréteurs de commandes valides.",
      "Comprendre la gestion des fichiers utilisateurs est crucial pour l'administration système Linux."
    ]
  },
  {
    "num": "Q47",
    "partie": "Administration Système et Réseaux",
    "q": "Dans un environnement Linux standard, dans quel répertoire se trouvent traditionnellement les scripts de contrôle (démarrage, arrêt, redémarrage) des démons des services réseau tels que DHCP, DNS, HTTP ou les services de messagerie ?",
    "choices": {
      "A": "/bin/service",
      "B": "/etc/init.d/",
      "C": "/bin/daemons",
      "D": "/etc/service"
    },
    "correct": "B",
    "explanation": "<p>Sous les systèmes Linux utilisant le standard SysVinit, le répertoire <strong>/etc/init.d/</strong> (ou parfois <code>/etc/rc.d/init.d/</code>) contient les scripts shell permettant de gérer le cycle de vie des services (démarrage, arrêt, statut).</p><p>Ces scripts sont appelés par le système lors des changements de <em>runlevels</em> ou manuellement par l'administrateur via la commande <code>service</code> ou en appelant directement le script.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le répertoire /bin contient des fichiers exécutables binaires essentiels au système, et non les scripts de gestion de services."
      },
      {
        "l": "C",
        "t": "/bin/daemons n'est pas un chemin standard dans la hiérarchie du système de fichiers Linux (FHS)."
      },
      {
        "l": "D",
        "t": "/etc/service n'existe pas nativement en tant que répertoire de gestion ; le fichier /etc/services (au singulier) existe, mais il sert à mapper les noms de services aux numéros de ports TCP/UDP."
      }
    ],
    "examiner": "L'examinateur évalue la connaissance de l'arborescence des fichiers Linux (FHS - Filesystem Hierarchy Standard) et la compréhension du mécanisme de gestion des services système.",
    "summary": [
      "Les scripts de gestion de services SysVinit sont historiquement situés dans /etc/init.d/.",
      "La hiérarchie FHS définit des emplacements précis pour les fichiers de configuration et les scripts de contrôle.",
      "Il ne faut pas confondre le répertoire des scripts (/etc/init.d/) et le fichier de mapping des ports (/etc/services).",
      "La plupart des distributions modernes utilisent désormais systemd, mais la connaissance de /etc/init.d/ reste essentielle pour la maintenance des systèmes legacy."
    ]
  },
  {
    "num": "Q48",
    "partie": "Administration Système et Réseaux",
    "q": "Dans une distribution Linux standard, quel est le répertoire parent qui contient traditionnellement les dossiers personnels des utilisateurs ?",
    "choices": {
      "A": "/home",
      "B": "/usr",
      "C": "/users",
      "D": "/workspace"
    },
    "correct": "A",
    "explanation": "<p>Dans la hiérarchie du système de fichiers Linux (FHS - Filesystem Hierarchy Standard), le répertoire <strong>/home</strong> est destiné à stocker les données personnelles des utilisateurs.</p><p>Chaque utilisateur dispose généralement d'un sous-répertoire portant son nom d'utilisateur au sein de /home (ex: /home/jean). Bien que cette convention puisse être modifiée par l'administrateur, elle reste le standard absolu sur la majorité des distributions.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "/usr contient les programmes, les bibliothèques et les fichiers partagés en lecture seule accessibles aux utilisateurs, mais pas leurs données personnelles."
      },
      {
        "l": "C",
        "t": "/users n'est pas un répertoire standard sous Linux ; il s'agit d'une convention parfois utilisée dans d'autres systèmes d'exploitation (comme macOS pour /Users), mais ce n'est pas la norme Linux."
      },
      {
        "l": "D",
        "t": "/workspace n'est pas un répertoire système standard ; c'est un nom générique souvent utilisé dans des environnements de développement ou des conteneurs, mais il n'a pas de fonction définie par le FHS."
      }
    ],
    "examiner": "Évalue la connaissance du candidat sur la structure hiérarchique des répertoires sous Linux (FHS).",
    "summary": [
      "Le répertoire /home est l'emplacement standard pour les répertoires personnels des utilisateurs sous Linux.",
      "La structure des répertoires Linux suit le standard FHS (Filesystem Hierarchy Standard).",
      "/usr est dédié aux ressources partagées, aux exécutables et aux bibliothèques système.",
      "Il est crucial de ne pas confondre les conventions Linux avec celles d'autres systèmes comme macOS ou Windows."
    ]
  },
  {
    "num": "Q49",
    "partie": "Administration Système et Réseaux",
    "q": "Dans un environnement Linux, quel est le nom du chargeur d'amorçage (bootloader) standard permettant de démarrer le système d'exploitation ?",
    "choices": {
      "A": "ILOS",
      "B": "OSL",
      "C": "GRUB",
      "D": "PSP"
    },
    "correct": "C",
    "explanation": "<p>Le <strong>GRUB</strong> (GRand Unified Bootloader) est le chargeur d'amorçage standard utilisé par la grande majorité des distributions Linux modernes.</p><ul><li>Il permet de charger le noyau (kernel) du système d'exploitation en mémoire lors du démarrage de l'ordinateur.</li><li>Il offre également la possibilité de choisir entre plusieurs systèmes d'exploitation ou différentes versions du noyau (mode de récupération, versions précédentes).</li><li>Il remplace avantageusement l'ancien chargeur LILO (LInux LOader).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "ILOS n'est pas un chargeur d'amorçage reconnu dans l'écosystème Linux."
      },
      {
        "l": "B",
        "t": "OSL n'est pas un chargeur d'amorçage standard pour les systèmes Linux."
      },
      {
        "l": "D",
        "t": "PSP (PlayStation Portable) est une console de jeu vidéo et ne joue aucun rôle dans l'amorçage d'un système Linux."
      }
    ],
    "examiner": "L'examinateur évalue votre connaissance des composants fondamentaux de la séquence de démarrage (boot process) d'un système Linux.",
    "summary": [
      "Le chargeur d'amorçage est le premier programme exécuté après le BIOS/UEFI.",
      "GRUB est la solution la plus répandue et flexible pour Linux.",
      "Le rôle principal du chargeur est de charger le noyau en mémoire.",
      "Il permet la gestion multi-système et la configuration des paramètres de boot."
    ]
  },
  {
    "num": "Q50",
    "partie": "Administration Système et Réseaux",
    "q": "Dans un environnement IPv4, quelles informations un routeur utilise-t-il principalement pour déterminer le chemin de transmission d'un paquet de données d'une interface à une autre ?",
    "choices": {
      "A": "L'adresse réseau d'origine",
      "B": "L'adresse réseau de destination",
      "C": "L'adresse MAC d'origine",
      "D": "L'adresse de destination du port bien connu"
    },
    "correct": "B",
    "explanation": "<p>Le processus de routage IP repose fondamentalement sur la <strong>table de routage</strong> du routeur. Lorsqu'un paquet arrive sur une interface, le routeur examine son en-tête IP pour extraire l'<strong>adresse IP de destination</strong>.</p><ul><li>Il compare ensuite cette adresse avec les entrées présentes dans sa table de routage.</li><li>Cette correspondance lui permet de déterminer l'interface de sortie et le prochain saut (next hop) pour acheminer le paquet vers sa destination finale.</li><li>Les adresses MAC ne sont utilisées que localement sur le segment de réseau (couche 2), et non par le routeur pour prendre des décisions de routage global.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'adresse source n'est pas utilisée pour le routage car le routeur doit savoir où le paquet va, et non d'où il vient."
      },
      {
        "l": "C",
        "t": "L'adresse MAC est une information de couche 2 utilisée pour la livraison sur le segment physique local ; elle est réécrite à chaque saut par le routeur."
      },
      {
        "l": "D",
        "t": "Les ports bien connus (couche transport) ne sont pas utilisés par le routeur pour le transfert de paquets (forwarding) ; ils servent à identifier les applications ou services."
      }
    ],
    "examiner": "Évaluer la compréhension du processus de routage IP et la distinction entre les fonctions de couche 3 (adressage logique) et de couche 2 (adressage physique).",
    "summary": [
      "Le routage IPv4 est basé exclusivement sur l'adresse IP de destination présente dans l'en-tête du paquet.",
      "La table de routage du routeur est l'outil indispensable pour effectuer cette correspondance.",
      "L'adresse IP source n'influence pas la décision de routage.",
      "Le routeur remplace les adresses MAC à chaque saut, rendant ces dernières inutiles pour le routage de bout en bout."
    ]
  },
  {
    "num": "Q51",
    "partie": "Administration Système et Réseaux",
    "q": "Dans le cadre de la redondance des liaisons WAN en entreprise, quelle est la combinaison classique utilisée pour assurer la continuité de service entre une liaison principale et une liaison de secours ?",
    "choices": {
      "A": "Liaison Spécialisée (LS) en principal et réseau téléphonique commuté (RTC) en secours",
      "B": "Liaison Spécialisée (LS) en principal et réseau numérique à intégration de services (RNIS) en secours",
      "C": "RNIS en principal et RTC en secours",
      "D": "Liaison Spécialisée (LS) en principal et une autre Liaison Spécialisée (LS) en secours"
    },
    "correct": "B",
    "explanation": "<p>Pour assurer la redondance des liaisons WAN, l'objectif est d'avoir une connexion à haut débit permanente (<strong>Liaison Spécialisée - LS</strong>) couplée à une solution de secours capable de s'établir rapidement en cas de coupure.</p><ul><li>Le <strong>RNIS (Réseau Numérique à Intégration de Services)</strong>, ou ISDN, est traditionnellement utilisé car il permet une numérotation rapide (accès commuté numérique) offrant un débit stable pour le secours.</li><li>Le <strong>RTC</strong> est aujourd'hui obsolète et ne répond pas aux besoins de débit des entreprises.</li><li>Doubler une LS par une autre LS (choix D) est une stratégie de redondance physique, mais elle est souvent jugée trop coûteuse par rapport à une solution de secours à la demande comme le RNIS ou une connexion 4G/5G moderne.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le réseau RTC est une technologie analogique obsolète, offrant un débit insuffisant et une latence trop élevée pour le secours d'une entreprise moderne."
      },
      {
        "l": "C",
        "t": "Le RNIS est une technologie de secours bien plus performante que le RTC, et il est illogique d'utiliser le RNIS comme liaison principale permanente face à une LS."
      },
      {
        "l": "D",
        "t": "Bien que techniquement possible, le coût prohibitif d'une double Liaison Spécialisée rend cette option économiquement irrationnelle pour la plupart des entreprises, contrairement au secours à la demande."
      }
    ],
    "examiner": "Évaluer la connaissance des architectures de redondance WAN et la pertinence économique et technique des solutions de secours (LS vs accès commutés).",
    "summary": [
      "La redondance WAN nécessite une liaison principale dédiée (LS) et une liaison de secours activable.",
      "Le RNIS (ISDN) est historiquement la solution privilégiée pour le secours grâce à sa connexion numérique rapide.",
      "Le choix du secours doit équilibrer le coût de l'abonnement et la disponibilité immédiate en cas de panne.",
      "Les technologies analogiques comme le RTC sont inadaptées aux besoins de débit des entreprises actuelles."
    ]
  },
  {
    "num": "Q52",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les technologies suivantes, laquelle est la moins adaptée ou n'est pas considérée comme une solution robuste pour l'interconnexion sécurisée et dédiée de deux sites distants à l'échelle d'une entreprise ?",
    "choices": {
      "A": "MPLS",
      "B": "ADSL",
      "C": "VPN",
      "D": "LS"
    },
    "correct": "B",
    "explanation": "<p>Bien que l'ADSL puisse techniquement connecter deux sites à Internet, il est considéré comme inadapté pour une interconnexion de sites distants en milieu professionnel pour plusieurs raisons :</p><ul><li><strong>Fiabilité :</strong> L'ADSL est une technologie asymétrique non garantie (Best Effort) avec un débit montant souvent très faible.</li><li><strong>Stabilité :</strong> Contrairement au MPLS (Multiprotocol Label Switching) ou à la LS (Ligne Spécialisée), l'ADSL ne garantit pas de taux de disponibilité (SLA).</li><li><strong>Usage :</strong> Les autres solutions (MPLS, VPN, LS) sont conçues pour des interconnexions sécurisées, privées ou performantes. Le VPN est une couche logicielle utilisant un lien physique, tandis que le MPLS et la LS sont des infrastructures de transport dédiées.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le MPLS est une technologie standard et performante pour créer des réseaux privés virtuels entre sites (WAN)."
      },
      {
        "l": "C",
        "t": "Le VPN (Virtual Private Network) est la solution la plus courante pour sécuriser les échanges entre sites via Internet."
      },
      {
        "l": "D",
        "t": "La Ligne Spécialisée (LS) est une connexion physique dédiée, offrant les plus hauts niveaux de performance et de sécurité."
      }
    ],
    "examiner": "L'examinateur cherche à évaluer la connaissance des technologies de transport réseau et la capacité à distinguer les solutions professionnelles (dédiées/garanties) des solutions grand public (non garanties).",
    "summary": [
      "Le MPLS et la LS sont des solutions de transport privé offrant des garanties de service (SLA).",
      "Le VPN permet de sécuriser des flux sur une infrastructure publique.",
      "L'ADSL est une technologie grand public caractérisée par une asymétrie de débit et l'absence de garantie de performance.",
      "Pour des besoins d'entreprise, on privilégie toujours des liens avec une bande passante symétrique et garantie."
    ]
  },
  {
    "num": "Q53",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les outils suivants, lequel ne peut pas être classé comme un logiciel d'administration ou de supervision réseau ?",
    "choices": {
      "A": "Nagios",
      "B": "WhatsUp Gold",
      "C": "NetWare",
      "D": "LoriotPro"
    },
    "correct": "C",
    "explanation": "<p><strong>NetWare</strong> n'est pas un logiciel d'administration ou de supervision réseau au sens moderne du terme. Il s'agissait d'un <strong>système d'exploitation réseau (NOS)</strong> propriétaire développé par Novell, conçu pour gérer les ressources d'un serveur et fournir des services de fichiers et d'impression.</p><p>En revanche :</p><ul><li><strong>Nagios</strong> est un outil de supervision open-source.</li><li><strong>WhatsUp Gold</strong> est une solution de surveillance de serveurs et d'infrastructures.</li><li><strong>LoriotPro</strong> est un logiciel de gestion et de supervision de réseau via SNMP.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Nagios est une référence industrielle pour la supervision de l'état des services et des équipements réseau."
      },
      {
        "l": "B",
        "t": "WhatsUp est un outil dédié à la surveillance proactive et au reporting de performance des infrastructures IT."
      },
      {
        "l": "D",
        "t": "LoriotPro est spécifiquement conçu comme un gestionnaire de réseau (NMS) utilisant principalement le protocole SNMP."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier votre capacité à distinguer un système d'exploitation serveur d'un outil dédié à la supervision ou à l'administration d'infrastructure.",
    "summary": [
      "NetWare est un système d'exploitation serveur historique de Novell, et non un outil de supervision.",
      "La supervision réseau repose sur des outils capables d'interroger des équipements via des protocoles comme SNMP.",
      "Nagios, WhatsUp et LoriotPro sont des logiciels tiers conçus pour le monitoring et la gestion technique.",
      "Il est essentiel de différencier la couche OS (serveur) de la couche outil de gestion (supervision)."
    ]
  },
  {
    "num": "Q54",
    "partie": "Administration Système et Réseaux",
    "q": "Quel équipement parmi les suivants est classé comme un périphérique réseau intermédiaire ?",
    "choices": {
      "A": "Un serveur de fichiers",
      "B": "Un téléphone IP",
      "C": "Un ordinateur portable",
      "D": "Un commutateur"
    },
    "correct": "D",
    "explanation": "<p>Dans l'architecture réseau, on distingue deux types de périphériques :</p><ul><li><strong>Les périphériques finaux (End devices) :</strong> Ce sont la source ou la destination des données (ex: ordinateurs, serveurs, téléphones IP, imprimantes).</li><li><strong>Les périphériques intermédiaires :</strong> Ce sont les équipements qui assurent la connectivité, la gestion du trafic et le routage des données entre les périphériques finaux (ex: commutateurs/switchs, routeurs, points d'accès sans fil).</li></ul><p>Le <strong>commutateur (switch)</strong> appartient à la deuxième catégorie car il traite et redirige les trames vers leur destination finale.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le serveur de fichiers est un périphérique final, car il génère et reçoit des données en tant que fournisseur de ressources."
      },
      {
        "l": "B",
        "t": "Le téléphone IP est un périphérique final qui communique directement avec l'utilisateur."
      },
      {
        "l": "C",
        "t": "L'ordinateur portable est un périphérique final utilisé par l'utilisateur pour accéder au réseau."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat sait distinguer les rôles des différents équipements au sein d'une topologie réseau.",
    "summary": [
      "Les périphériques finaux servent d'interface directe avec l'utilisateur ou le service.",
      "Les périphériques intermédiaires assurent la connectivité et la commutation des données.",
      "Un commutateur est l'exemple typique d'un équipement réseau intermédiaire de couche 2.",
      "Savoir identifier ces rôles est essentiel pour concevoir et dépanner des architectures réseau."
    ]
  },
  {
    "num": "Q55",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les protocoles suivants, lequel est spécifiquement utilisé pour l'administration et la supervision des équipements réseau ?",
    "choices": {
      "A": "SMTP (Simple Mail Transfer Protocol)",
      "B": "SNMP (Simple Network Management Protocol)",
      "C": "ARP (Address Resolution Protocol)",
      "D": "NFS (Network File System)"
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>SNMP</strong> (Simple Network Management Protocol) est le standard de l'industrie conçu spécifiquement pour la gestion et la supervision des équipements réseau (routeurs, commutateurs, serveurs, imprimantes).</p><ul><li>Il permet aux administrateurs de collecter des données de performance.</li><li>Il permet la configuration à distance et la réception d'alertes (traps) en cas d'anomalie.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le SMTP est un protocole de messagerie électronique utilisé pour l'envoi de courriers, et non pour l'administration de matériel réseau."
      },
      {
        "l": "C",
        "t": "L'ARP est un protocole de résolution d'adresses qui fait le lien entre une adresse IP et une adresse MAC au sein d'un réseau local."
      },
      {
        "l": "D",
        "t": "Le NFS est un protocole de partage de fichiers utilisé pour monter des répertoires distants sur un système de fichiers local."
      }
    ],
    "examiner": "Évaluer la connaissance des protocoles réseau standards et leur usage spécifique dans un contexte de gestion d'infrastructure IT.",
    "summary": [
      "Le protocole SNMP est l'outil fondamental pour le monitoring et la gestion des équipements réseaux.",
      "SMTP gère les emails, ARP gère la résolution d'adresses et NFS gère le partage de fichiers.",
      "Comprendre les couches et les usages des protocoles est essentiel pour l'administration système.",
      "SNMP utilise des agents installés sur les périphériques pour communiquer avec une console de gestion centrale."
    ]
  },
  {
    "num": "Q56",
    "partie": "Administration Système et Réseaux",
    "q": "Un serveur DHCP est configuré sur une machine sous Windows Server 2003. Laquelle de ces affirmations est fausse ?",
    "choices": {
      "A": "Les machines Linux et Windows peuvent être servies par ce serveur.",
      "B": "Les machines Linux doivent être configurées pour interroger le serveur DHCP.",
      "C": "Seules les machines clientes Linux peuvent être servies par le serveur.",
      "D": "Seules les machines clientes Windows peuvent être servies par le serveur."
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>DHCP</strong> (Dynamic Host Configuration Protocol) est un protocole standardisé (RFC 2131) conçu pour être indépendant du système d'exploitation du client.</p><ul><li>Un serveur DHCP sous Windows est parfaitement capable d'attribuer des adresses IP à n'importe quel périphérique compatible (Linux, Windows, imprimantes, etc.).</li><li>L'affirmation C est fausse car elle restreint indûment le service aux clients Linux, ce qui contredit le fonctionnement universel du protocole.</li><li>L'affirmation D est également techniquement incorrecte car elle restreint le service aux clients Windows, mais le choix C est le plus explicitement contradictoire avec le principe d'interopérabilité.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette affirmation est correcte car le protocole DHCP est agnostique vis-à-vis du système d'exploitation client."
      },
      {
        "l": "B",
        "t": "Cette affirmation est correcte car le client doit avoir son interface réseau configurée en mode 'DHCP' ou 'automatique' pour solliciter le serveur."
      },
      {
        "l": "D",
        "t": "Bien que cette affirmation soit restrictive et techniquement fausse (tout comme C), elle est présentée dans le contexte du QCM comme une affirmation globale, tandis que C est l'affirmation identifiée comme l'erreur principale à relever."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension du candidat sur l'interopérabilité des protocoles réseau et le fait que les services réseau comme DHCP ne sont pas liés à un écosystème propriétaire.",
    "summary": [
      "Le protocole DHCP est indépendant des systèmes d'exploitation.",
      "Un serveur DHCP Windows peut servir des clients hétérogènes (Linux, Windows, macOS, équipements IoT).",
      "Les clients doivent être configurés pour demander dynamiquement une configuration IP.",
      "Restreindre un service DHCP à un seul type de système d'exploitation est une erreur conceptuelle."
    ]
  },
  {
    "num": "Q57",
    "partie": "Administration Système et Réseaux",
    "q": "Dans un environnement Windows, quelle commande permet de renouveler un bail d'adresse IP auprès d'un serveur DHCP ?",
    "choices": {
      "A": "ipconfig /renew",
      "B": "configlease /new",
      "C": "ipconfig /release",
      "D": "bconfig /renew"
    },
    "correct": "A",
    "explanation": "<p>La commande <strong>ipconfig</strong> est l'outil en ligne de commande standard sous Windows pour gérer la configuration TCP/IP.</p><ul><li><strong>/renew</strong> : Force le client DHCP à envoyer une demande de renouvellement de bail au serveur DHCP.</li><li><strong>/release</strong> : Libère l'adresse IP actuelle en informant le serveur DHCP que le client n'utilise plus cette adresse.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La commande 'configlease' n'existe pas dans l'environnement Windows."
      },
      {
        "l": "C",
        "t": "L'option '/release' libère l'adresse IP, elle ne la renouvelle pas."
      },
      {
        "l": "D",
        "t": "La commande 'bconfig' n'est pas une commande système reconnue sous Windows."
      }
    ],
    "examiner": "Évaluer la connaissance pratique de l'utilitaire ipconfig et de la gestion du protocole DHCP via l'invite de commande Windows.",
    "summary": [
      "La commande ipconfig est essentielle pour le dépannage réseau sous Windows.",
      "L'option /renew demande au serveur DHCP d'allouer ou de prolonger un bail IP.",
      "L'option /release est utilisée pour abandonner volontairement une configuration IP.",
      "Il est crucial de distinguer les commandes de gestion réseau réelles des commandes fictives."
    ]
  },
  {
    "num": "Q58",
    "partie": "Administration Système et Réseaux",
    "q": "Un administrateur réseau souhaite configurer le numéro de port utilisé par une application sur un serveur afin de le rendre accessible aux clients. Quelle plage de numéros de ports est généralement attribuée pour ce type d'applications ?",
    "choices": {
      "A": "De 0 à 255",
      "B": "De 0 à 1023",
      "C": "De 1024 à 49151",
      "D": "De 49152 à 65535"
    },
    "correct": "C",
    "explanation": "<p>La norme IANA (Internet Assigned Numbers Authority) divise les numéros de ports TCP/UDP en trois catégories distinctes :</p><ul><li><strong>Ports bien connus (0 à 1023) :</strong> Réservés aux services système fondamentaux (ex: HTTP, FTP, SSH).</li><li><strong>Ports enregistrés (1024 à 49151) :</strong> Utilisés pour des applications spécifiques ou des services propriétaires qui ne nécessitent pas de privilèges système élevés.</li><li><strong>Ports dynamiques ou privés (49152 à 65535) :</strong> Utilisés de manière temporaire par les clients lors de l'établissement d'une connexion.</li></ul><p>Pour une application serveur personnalisée, il est donc recommandé d'utiliser la plage des <strong>ports enregistrés</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette plage est arbitraire et ne correspond à aucune classification standard de l'IANA."
      },
      {
        "l": "B",
        "t": "Cette plage correspond aux ports 'bien connus', réservés aux services système critiques et standardisés, et non aux applications utilisateur."
      },
      {
        "l": "D",
        "t": "Cette plage est réservée aux ports dynamiques ou privés, alloués aléatoirement par le système d'exploitation aux clients pour leurs connexions sortantes."
      }
    ],
    "examiner": "Évaluer la compréhension des conventions d'adressage des ports TCP/UDP et la distinction entre ports système, enregistrés et dynamiques.",
    "summary": [
      "Les ports système (0-1023) sont réservés aux protocoles standard et privilégiés.",
      "Les ports enregistrés (1024-49151) sont destinés aux applications serveur spécifiques.",
      "Les ports dynamiques (49152-65535) sont utilisés par les clients pour les sessions éphémères.",
      "L'IANA est l'organisme qui régule ces plages de ports au niveau mondial."
    ]
  },
  {
    "num": "Q59",
    "partie": "Administration Système et Réseaux",
    "q": "Pourquoi les connexions série sont-elles généralement préférées aux connexions parallèles pour les transmissions de données sur de grandes distances ?",
    "choices": {
      "A": "Les connexions parallèles ne permettent pas d'implémenter des mécanismes de vérification d'erreurs.",
      "B": "Les connexions parallèles sont plus sensibles à l'atténuation du signal sur la distance.",
      "C": "Les connexions parallèles sont sujettes au phénomène de décalage d'horloge (skew) et aux interférences électromagnétiques entre les conducteurs.",
      "D": "Les connexions parallèles utilisent uniquement deux fils, ce qui limite considérablement leur débit."
    },
    "correct": "C",
    "explanation": "<p>La principale difficulté des <strong>connexions parallèles</strong> sur de grandes distances réside dans la synchronisation des signaux. Lorsqu'on envoie plusieurs bits simultanément sur des fils différents, chaque bit peut rencontrer une impédance ou une longueur légèrement différente, provoquant un <strong>décalage temporel</strong> appelé <em>skew</em>.</p><ul><li><strong>Décalage d'horloge (Clock Skew) :</strong> Les signaux arrivent à des moments différents, rendant la reconstruction de l'octet difficile.</li><li><strong>Interférences (Diaphonie/Crosstalk) :</strong> Le couplage électromagnétique entre les fils parallèles devient critique à haute fréquence et sur de longues distances.</li><li><strong>Connexion série :</strong> En transmettant les bits les uns après les autres sur un seul canal, ces problèmes sont éliminés, permettant des fréquences bien plus élevées.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La vérification d'erreur est indépendante du mode de transmission (série ou parallèle) et dépend du protocole utilisé."
      },
      {
        "l": "B",
        "t": "L'atténuation est un phénomène physique lié au support (câble) et à la fréquence, elle touche les deux types de connexions."
      },
      {
        "l": "D",
        "t": "C'est l'inverse : les connexions parallèles utilisent de nombreux fils, mais le décalage entre ces fils limite leur vitesse réelle à longue distance."
      }
    ],
    "examiner": "Évaluer la compréhension des contraintes physiques de transmission des données et des avantages technologiques de la transmission série par rapport à la transmission parallèle.",
    "summary": [
      "La transmission parallèle souffre de problèmes de synchronisation (skew) sur les distances importantes.",
      "Les interférences électromagnétiques entre fils adjacents limitent la fiabilité des bus parallèles.",
      "La transmission série évite le décalage temporel en envoyant les données de manière séquentielle.",
      "La sérialisation permet d'atteindre des débits beaucoup plus élevés avec moins de conducteurs."
    ]
  },
  {
    "num": "Q60",
    "partie": "Administration Système et Réseaux",
    "q": "Un technicien est chargé de dépanner un réseau commuté, mais il ne dispose d'aucune documentation sur la configuration des VLAN. Quel outil de diagnostic permet de mapper efficacement la topologie et de découvrir l'affectation des ports aux différents réseaux locaux virtuels ?",
    "choices": {
      "A": "Un testeur de câble",
      "B": "Un analyseur de réseau (Network Mapper/Scanner)",
      "C": "Un analyseur de trame",
      "D": "Un analyseur de protocole"
    },
    "correct": "B",
    "explanation": "<p>Pour découvrir la configuration logique d'un réseau sans documentation, l'utilisation d'un <strong>analyseur de réseau</strong> (souvent associé à des outils de type 'Network Mapper' comme SNMP ou des scanners de topologie) est la méthode privilégiée.</p><ul><li>Ces outils interrogent les commutateurs pour obtenir la table de correspondance entre les ports physiques et les identifiants VLAN (VLAN ID).</li><li>Ils permettent de visualiser dynamiquement l'architecture logique du réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le testeur de câble vérifie uniquement l'intégrité physique de la couche 1, il ne peut pas lire les configurations logiques VLAN."
      },
      {
        "l": "C",
        "t": "Un analyseur de trame (ou sniffer) permet d'inspecter le trafic transitant, mais il ne donne pas une vue globale de la cartographie des ports et des VLAN sur un équipement."
      },
      {
        "l": "D",
        "t": "L'analyseur de protocole est utile pour le débogage de flux spécifiques, mais il n'est pas conçu pour effectuer une découverte topologique globale de la configuration des commutateurs."
      }
    ],
    "examiner": "L'examinateur évalue votre connaissance des outils d'administration réseau capables d'interroger les équipements pour effectuer une rétro-documentation (reconnaissance de configuration).",
    "summary": [
      "La documentation réseau est essentielle, mais sa découverte automatique est possible via des outils de gestion.",
      "L'analyseur de réseau permet de scanner et mapper la configuration VLAN des commutateurs.",
      "Le testeur de câble est limité à la couche physique (Layer 1).",
      "Les analyseurs de trames et de protocoles sont des outils d'inspection de trafic, non de cartographie de configuration."
    ]
  },
  {
    "num": "Q61",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les protocoles suivants, lequel est utilisé pour encapsuler, sécuriser et transporter le trafic à travers un tunnel VPN ?",
    "choices": {
      "A": "ATM",
      "B": "CHAP",
      "C": "IPsec",
      "D": "IPX"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>IPsec (Internet Protocol Security)</strong> est un ensemble de protocoles utilisés pour sécuriser les communications IP en authentifiant et en chiffrant chaque paquet IP d'une session de communication. Il est largement utilisé pour créer des <strong>VPN (Virtual Private Networks)</strong> en encapsulant le trafic réseau dans des tunnels sécurisés.</p><ul><li>Il assure la confidentialité, l'intégrité et l'authentification des données.</li><li>Il opère principalement au niveau de la couche réseau (couche 3 du modèle OSI).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'ATM (Asynchronous Transfer Mode) est une technologie de couche de liaison de données utilisée pour le transfert de données à haut débit, mais elle ne sert pas à créer des tunnels VPN sécurisés sur Internet."
      },
      {
        "l": "B",
        "t": "Le CHAP (Challenge Handshake Authentication Protocol) est un protocole d'authentification utilisé pour vérifier l'identité d'un client lors de l'établissement d'une connexion, mais il ne traite pas de l'encapsulation ou du chiffrement du trafic de données."
      },
      {
        "l": "D",
        "t": "L'IPX (Internetwork Packet Exchange) est un protocole réseau ancien, principalement associé aux systèmes NetWare, qui n'est pas conçu pour la sécurisation ou le tunneling VPN moderne."
      }
    ],
    "examiner": "L'examinateur cherche à évaluer la connaissance des protocoles de sécurité réseau et la capacité à distinguer les fonctions d'encapsulation/chiffrement VPN des protocoles d'authentification ou de transport hérités.",
    "summary": [
      "IPsec est le standard industriel pour l'implémentation de tunnels VPN sécurisés.",
      "Il assure trois piliers : confidentialité (chiffrement), intégrité et authentification.",
      "ATM et IPX sont des protocoles de transport obsolètes ou spécialisés, non destinés à la sécurisation VPN.",
      "CHAP est un protocole dédié exclusivement à l'authentification et non à l'encapsulation des données."
    ]
  },
  {
    "num": "Q62",
    "partie": "Administration Système et Réseaux",
    "q": "Lequel de ces équipements réseau est responsable du chiffrement des données lors de leur transmission sur les liaisons longue distance (WAN) d'un fournisseur de services ?",
    "choices": {
      "A": "CPE (Customer Premises Equipment)",
      "B": "ETTD (Équipement Terminal de Traitement de Données)",
      "C": "DCE (Data Circuit-terminating Equipment)",
      "D": "UART (Universal Asynchronous Receiver-Transmitter)"
    },
    "correct": "C",
    "explanation": "<p>Dans le contexte des communications WAN, le <strong>DCE</strong> (Data Circuit-terminating Equipment) est l'équipement qui fournit la synchronisation d'horloge et assure les fonctions de couche physique, y compris, dans certains cas, le chiffrement du signal sur la liaison fournie par l'opérateur.</p><p>Il joue un rôle pivot dans la conversion et le conditionnement du signal pour le transport longue distance.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le CPE désigne les équipements installés chez le client (ex: routeur, modem) mais n'est pas spécifiquement l'entité dédiée au chiffrement sur la liaison du fournisseur."
      },
      {
        "l": "B",
        "t": "L'ETTD (DTE en anglais) est l'équipement source ou destination (comme un routeur ou un ordinateur) qui transmet ou reçoit les données, sans gérer directement le chiffrement de la liaison physique."
      },
      {
        "l": "D",
        "t": "L'UART est un composant matériel de communication série au sein d'un ordinateur ou d'un contrôleur, responsable de la conversion entre données parallèles et série, sans lien avec le chiffrement réseau longue distance."
      }
    ],
    "examiner": "Évaluer la compréhension des rôles des équipements d'infrastructure réseau WAN et la distinction entre les rôles DCE et ETTD.",
    "summary": [
      "Le DCE (Data Circuit-terminating Equipment) est l'équipement qui gère l'horloge et le conditionnement du signal sur la ligne WAN.",
      "L'ETTD (DTE) est l'équipement final qui envoie ou reçoit des données.",
      "Le CPE représente tout équipement situé physiquement chez le client pour accéder aux services du fournisseur.",
      "Le chiffrement sur liaison WAN est une fonction souvent déléguée ou gérée au niveau de l'équipement de terminaison de circuit (DCE)."
    ]
  },
  {
    "num": "Q63",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle information est présente à la fois dans les en-têtes des protocoles TCP et UDP ?",
    "choices": {
      "A": "Le numéro d'ordre (Sequence Number)",
      "B": "Le contrôle de flux",
      "C": "L'accusé de réception (Acknowledgement)",
      "D": "Le port source et le port de destination"
    },
    "correct": "D",
    "explanation": "<p>Le protocole <strong>UDP</strong> (User Datagram Protocol) est un protocole de transport minimaliste et sans connexion. À ce titre, il ne gère ni le contrôle de flux, ni l'acquittement des paquets (accusé de réception), ni l'ordonnancement des données.</p><p>En revanche, pour assurer le routage du trafic vers les applications concernées, les deux protocoles <strong>TCP et UDP</strong> utilisent impérativement les champs suivants dans leurs en-têtes :</p><ul><li><strong>Port source :</strong> Identifie le port de l'application émettrice.</li><li><strong>Port de destination :</strong> Identifie le port de l'application réceptrice.</li></ul><p>Cela permet aux systèmes d'exploitation de distribuer les segments ou datagrammes aux processus logiciels corrects.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le numéro d'ordre est spécifique à TCP pour assurer la réorganisation des segments ; UDP ne numérote pas ses datagrammes."
      },
      {
        "l": "B",
        "t": "Le contrôle de flux (fenêtrage) est une fonctionnalité avancée de TCP pour éviter la saturation du récepteur, absente dans l'UDP."
      },
      {
        "l": "C",
        "t": "L'accusé de réception est une caractéristique de la fiabilité de TCP ; UDP n'envoie aucune confirmation de réception."
      }
    ],
    "examiner": "Évaluer la compréhension de la structure des en-têtes de transport et la distinction entre protocoles orientés connexion (TCP) et protocoles sans connexion (UDP).",
    "summary": [
      "TCP et UDP partagent les champs de port source et de port destination.",
      "Le numéro d'ordre et l'accusé de réception sont exclusifs au protocole TCP.",
      "UDP est conçu pour la légèreté et n'inclut pas de mécanismes de contrôle de flux.",
      "L'en-tête UDP est beaucoup plus réduit que l'en-tête TCP."
    ]
  },
  {
    "num": "Q64",
    "partie": "Administration Système et Réseaux",
    "q": "Dans le cadre de la mise en œuvre d'un VPN (Virtual Private Network) entre deux sites d'entreprise, quel équipement parmi les suivants ne peut généralement pas servir de passerelle VPN ?",
    "choices": {
      "A": "Un routeur",
      "B": "Une machine Windows Server",
      "C": "Un pare-feu (Firewall)",
      "D": "Un commutateur (Switch)"
    },
    "correct": "D",
    "explanation": "<p>La création d'un VPN (site à site) nécessite des capacités de <strong>routage</strong> et de <strong>traitement de paquets au niveau 3 (IP)</strong>, ainsi que des fonctions de chiffrement (IPsec, SSL/TLS).</p><ul><li>Les <strong>routeurs</strong> et <strong>pare-feux</strong> sont conçus pour traiter le trafic réseau au niveau IP et gérer les tunnels.</li><li>Un <strong>serveur Windows</strong> dispose de rôles dédiés (comme RRAS) pour agir en tant que passerelle VPN.</li><li>Un <strong>commutateur (switch) standard</strong> travaille principalement au niveau 2 (liaison de données). Bien que certains switchs de niveau 3 (L3) existent, ils n'ont pas vocation à gérer nativement le chiffrement et la terminaison de tunnels VPN, contrairement aux équipements de sécurité dédiés.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les routeurs sont les équipements standards pour relier des réseaux distants et gérer l'encapsulation VPN."
      },
      {
        "l": "B",
        "t": "Windows Server possède des rôles natifs (Routing and Remote Access Service) permettant d'établir des connexions VPN."
      },
      {
        "l": "C",
        "t": "Les pare-feux sont des équipements privilégiés pour les VPN car ils permettent de sécuriser le tunnel tout en filtrant le trafic traversant."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre les équipements de niveau 2 (commutation) et les équipements de niveau 3/passerelles de sécurité (routage/VPN).",
    "summary": [
      "Un VPN nécessite des capacités de routage et de chiffrement.",
      "Les routeurs, pare-feux et serveurs dédiés sont des passerelles VPN classiques.",
      "Le commutateur (switch) est un équipement de niveau 2 destiné à la connectivité locale.",
      "La distinction entre les couches du modèle OSI est essentielle pour identifier le rôle d'un équipement réseau."
    ]
  },
  {
    "num": "Q65",
    "partie": "Administration Système et Réseaux",
    "q": "Quel protocole de la couche application est spécifiquement utilisé pour faciliter le transfert de fichiers entre un client et un serveur ?",
    "choices": {
      "A": "HTML",
      "B": "HTTP",
      "C": "FTP",
      "D": "Telnet"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>FTP (File Transfer Protocol)</strong> est un protocole de communication destiné à l'échange informatique de fichiers sur un réseau TCP/IP. Contrairement à HTTP, qui est optimisé pour la navigation Web, le FTP est conçu pour permettre des transferts de fichiers bidirectionnels efficaces avec des fonctionnalités de gestion de répertoire.</p><ul><li>Il utilise généralement les ports 20 (données) et 21 (contrôle).</li><li>Il permet une gestion fine des droits d'accès et de l'arborescence des fichiers.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "HTML est un langage de balisage utilisé pour structurer les pages web, et non un protocole de transfert de données."
      },
      {
        "l": "B",
        "t": "HTTP est le protocole de transfert utilisé pour le Web. Bien qu'il puisse techniquement transférer des fichiers, sa finalité première est l'affichage de documents hypermédia."
      },
      {
        "l": "D",
        "t": "Telnet est un protocole réseau utilisé pour fournir une interface de communication texte bidirectionnelle permettant une connexion à distance, et non pour le transfert de fichiers."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension des rôles des protocoles fondamentaux de la couche application du modèle OSI.",
    "summary": [
      "Le FTP (File Transfer Protocol) est le protocole standard dédié au transfert de fichiers.",
      "Il opère sur la couche application du modèle OSI.",
      "Il se distingue du protocole HTTP qui est optimisé pour les pages web.",
      "Telnet est réservé à l'administration de systèmes distants en mode texte."
    ]
  },
  {
    "num": "Q66",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle est la différence fondamentale entre un réseau étendu (WAN) et un réseau local (LAN) ?",
    "choices": {
      "A": "Les réseaux étendus offrent généralement une bande passante supérieure à celle des réseaux locaux.",
      "B": "Les liaisons de réseau étendu parcourent des distances plus courtes que celles d'un réseau local.",
      "C": "Contrairement à un réseau local, un réseau étendu repose souvent sur les services d'opérateurs tiers, tels que des fournisseurs de télécommunications.",
      "D": "Toutes les implémentations WAN utilisent un protocole de couche 2 unique, tandis que les LAN supportent de multiples protocoles."
    },
    "correct": "C",
    "explanation": "<p>La distinction principale entre un <strong>LAN (Local Area Network)</strong> et un <strong>WAN (Wide Area Network)</strong> réside dans l'étendue géographique et la propriété de l'infrastructure.</p><ul><li><strong>Infrastructure :</strong> Un LAN est généralement détenu et géré par une seule entité (entreprise, domicile). Un WAN couvre une vaste zone géographique et nécessite l'utilisation d'infrastructures louées auprès d'opérateurs de télécommunications (ISP).</li><li><strong>Bande passante :</strong> Les LAN offrent généralement des débits très élevés (Ethernet 1/10/100 Gbps), bien supérieurs à ceux des liaisons WAN, qui sont souvent plus coûteuses et limitées.</li><li><strong>Protocoles :</strong> Les LAN utilisent majoritairement Ethernet, tandis que les WAN utilisent des technologies spécifiques pour la transmission longue distance (MPLS, SD-WAN, fibre dédiée).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est l'inverse : les LAN bénéficient généralement de débits bien plus élevés que les WAN à un coût moindre."
      },
      {
        "l": "B",
        "t": "Un WAN est par définition conçu pour couvrir des distances bien plus importantes (villes, pays, continents) qu'un LAN."
      },
      {
        "l": "D",
        "t": "L'affirmation est erronée. Les LAN sont standardisés autour d'Ethernet, alors que les WAN utilisent une grande variété de technologies de couche 2 adaptées aux liaisons longues distances."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de base en architecture réseau, notamment la distinction entre infrastructure privée (LAN) et infrastructure opérée (WAN).",
    "summary": [
      "Un réseau local (LAN) est limité géographiquement et géré par l'organisation elle-même.",
      "Un réseau étendu (WAN) interconnecte des sites distants via des services fournis par des opérateurs.",
      "Les réseaux locaux offrent typiquement une bande passante plus élevée que les réseaux étendus.",
      "Le recours à un prestataire tiers est caractéristique de l'architecture WAN."
    ]
  },
  {
    "num": "Q67",
    "partie": "Administration Système et Réseaux",
    "q": "Deux entreprises situées dans la même ville utilisent le même fournisseur d'accès Internet (FAI) et bénéficient du même rapport débit/service. Quels facteurs peuvent expliquer que l'entreprise A observe des vitesses de téléchargement supérieures à celles de l'entreprise B ?",
    "choices": {
      "A": "L'entreprise B a un volume plus élevé de trafic vocal POTS que l'entreprise A.",
      "B": "L'entreprise B partage la connexion au multiplexeur d'accès DSL (DSLAM) avec un plus grand nombre de clients que l'entreprise A.",
      "C": "L'entreprise A n'utilise des microfiltres que sur les sites de ses succursales.",
      "D": "L'entreprise A est située plus près du centre de commutation (DSLAM) du fournisseur de services que l'entreprise B."
    },
    "correct": "D",
    "explanation": "<p>Dans les technologies DSL (Digital Subscriber Line), la vitesse de connexion est directement corrélée à la <strong>distance physique</strong> entre le modem de l'abonné et le DSLAM (Digital Subscriber Line Access Multiplexer) situé au niveau du central téléphonique du FAI.</p><p>Plus la distance est courte, moins l'atténuation du signal est importante, ce qui permet d'utiliser des modulations plus complexes et d'atteindre des débits plus élevés. Même dans une même ville, quelques centaines de mètres de différence dans le câblage cuivre peuvent entraîner des variations significatives de performance.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le trafic vocal POTS (Plain Old Telephone Service) est séparé du trafic de données par des filtres DSL et ne devrait pas impacter la vitesse de téléchargement globale."
      },
      {
        "l": "B",
        "t": "Bien que la congestion du DSLAM puisse affecter les performances, la distance physique reste le facteur technique prédominant et le plus déterminant pour la vitesse maximale théorique d'une ligne DSL."
      },
      {
        "l": "C",
        "t": "L'utilisation de microfiltres est nécessaire pour éviter les interférences entre la voix et les données ; leur absence provoquerait des dysfonctionnements, mais ne justifie pas une différence de vitesse de téléchargement entre deux sites fonctionnels."
      }
    ],
    "examiner": "Évaluer la compréhension de l'influence de la distance et des caractéristiques physiques du support (boucle locale) sur la performance des technologies DSL.",
    "summary": [
      "La technologie DSL est extrêmement sensible à la distance par rapport au DSLAM.",
      "L'atténuation du signal sur les lignes en cuivre augmente avec la longueur du câble.",
      "Une proximité géographique réduite permet une meilleure intégrité du signal et des débits plus élevés.",
      "Le débit réel est limité par les propriétés physiques de la boucle locale cuivre."
    ]
  },
  {
    "num": "Q68",
    "partie": "Administration Système et Réseaux",
    "q": "Dans quel scénario de connexion réseau est-il approprié d'utiliser un câble Ethernet droit (straight-through) ?",
    "choices": {
      "A": "Pour connecter un routeur via son port console.",
      "B": "Pour connecter un commutateur (switch) à un autre commutateur.",
      "C": "Pour connecter un hôte (ordinateur) à un commutateur.",
      "D": "Pour connecter un routeur à un autre routeur."
    },
    "correct": "C",
    "explanation": "<p>Un câble droit (<strong>straight-through</strong>) est utilisé pour connecter des équipements de couches différentes dans le modèle OSI (généralement un périphérique DTE vers un périphérique DCE). La norme veut que :</p><ul><li><strong>Hôte vers Commutateur :</strong> Connexion standard via câble droit.</li><li><strong>Commutateur vers Routeur :</strong> Connexion via câble droit.</li><li><strong>Équipements identiques (ex: Switch vers Switch, Routeur vers Routeur, PC vers PC) :</strong> Nécessitent historiquement un câble croisé (crossover), bien que la technologie <em>Auto-MDIX</em> moderne gère désormais ces différences automatiquement.</li><li><strong>Console :</strong> Nécessite un câble console spécifique (rollover) et non un câble Ethernet droit.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le port console nécessite un câble spécifique (câble console ou 'rollover') pour la gestion série, et non un câble Ethernet droit standard."
      },
      {
        "l": "B",
        "t": "La connexion de deux commutateurs entre eux nécessite traditionnellement un câble croisé, bien que la plupart des équipements récents supportent l'Auto-MDIX."
      },
      {
        "l": "D",
        "t": "La connexion entre deux routeurs (équipements de même type) nécessite traditionnellement un câble croisé."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension des standards de câblage Ethernet et la distinction entre les équipements de niveaux différents et identiques dans un réseau local.",
    "summary": [
      "Les câbles droits servent à relier des équipements de natures différentes (ex: PC à Switch).",
      "Les câbles croisés sont destinés aux équipements de même nature (ex: Switch à Switch).",
      "Le port console utilise un type de câble distinct, le câble 'rollover'.",
      "La technologie Auto-MDIX rend aujourd'hui la distinction moins critique en auto-détectant le type de câble utilisé."
    ]
  },
  {
    "num": "Q69",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les technologies de communication suivantes, laquelle ne constitue pas une norme de réseau local (LAN) ?",
    "choices": {
      "A": "Token Ring",
      "B": "FDDI",
      "C": "RNIS",
      "D": "Ethernet"
    },
    "correct": "C",
    "explanation": "<p>Le <strong>RNIS</strong> (Réseau Numérique à Intégration de Services), ou ISDN en anglais, est une norme de communication numérique conçue pour le transport de la voix et des données sur le réseau téléphonique public (réseau étendu ou WAN).</p><p>Contrairement aux autres options citées :</p><ul><li><strong>Token Ring :</strong> Technologie de réseau local développée par IBM.</li><li><strong>FDDI :</strong> Norme de réseau local utilisant la fibre optique avec une topologie en double anneau.</li><li><strong>Ethernet :</strong> La norme la plus répandue pour les réseaux locaux (IEEE 802.3).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Token Ring est une technologie historique de réseau local utilisant une topologie en anneau et un jeton pour la gestion de l'accès au support."
      },
      {
        "l": "B",
        "t": "FDDI (Fiber Distributed Data Interface) est une norme de réseau local à haut débit basée sur la fibre optique, typiquement utilisée pour les backbones de campus."
      },
      {
        "l": "D",
        "t": "Ethernet est le standard universel actuel pour la mise en œuvre des réseaux locaux, défini par la famille de normes IEEE 802.3."
      }
    ],
    "examiner": "Vérifier la capacité du candidat à distinguer les protocoles et standards de réseaux locaux (LAN) des réseaux étendus (WAN/Accès distant).",
    "summary": [
      "Le RNIS (ISDN) est une technologie de réseau étendu (WAN) et non un protocole de réseau local.",
      "Token Ring et FDDI sont des technologies de couche 2 destinées aux réseaux locaux.",
      "Ethernet reste le standard de facto pour la quasi-totalité des infrastructures LAN modernes.",
      "Comprendre la portée géographique et l'usage d'un protocole est essentiel pour le dimensionnement réseau."
    ]
  },
  {
    "num": "Q70",
    "partie": "Administration Système et Réseaux",
    "q": "Parmi les protocoles suivants, lequel permet de réduire la surcharge réseau et d'effectuer des transferts de données ne nécessitant aucune fiabilité ?",
    "choices": {
      "A": "TCP",
      "B": "IP",
      "C": "UDP",
      "D": "HTTP"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>UDP (User Datagram Protocol)</strong> est un protocole de transport non orienté connexion. Contrairement à TCP, il ne nécessite pas l'établissement d'une poignée de main (handshake) préalable et n'implémente pas de mécanisme d'accusé de réception ou de retransmission.</p><p>Ses caractéristiques principales sont :</p><ul><li><strong>Faible latence :</strong> Absence de contrôle de flux ou de congestion complexe.</li><li><strong>Moindre surcharge (overhead) :</strong> L'en-tête est réduit à seulement 8 octets.</li><li><strong>Rapidité :</strong> Idéal pour le streaming vidéo, la voix sur IP (VoIP) ou le DNS, où la perte ponctuelle de paquets est préférable à un délai de transmission prolongé.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "TCP est orienté connexion et privilégie la fiabilité (accusés de réception, réordonnancement), ce qui augmente la surcharge réseau."
      },
      {
        "l": "B",
        "t": "IP (Internet Protocol) est un protocole de couche réseau (couche 3) qui assure le routage des paquets, mais il ne gère pas le transfert de données de bout en bout avec les propriétés de fiabilité citées ici."
      },
      {
        "l": "D",
        "t": "HTTP est un protocole de couche application (couche 7) qui repose généralement sur TCP pour garantir l'intégrité des données transmises."
      }
    ],
    "examiner": "L'examinateur cherche à évaluer votre compréhension des modèles de transport réseau et votre capacité à distinguer les protocoles orientés connexion (fiables) des protocoles non orientés connexion (rapides).",
    "summary": [
      "Le protocole UDP est sans connexion et ne garantit pas l'arrivée des paquets.",
      "Il minimise la surcharge (overhead) grâce à un en-tête très léger.",
      "Il est privilégié pour les applications temps réel où la vitesse prime sur la précision.",
      "TCP est le protocole opposé, conçu pour la fiabilité au détriment de la vitesse."
    ]
  },
  {
    "num": "Q71",
    "partie": "Administration Système et Réseaux",
    "q": "Quel est le rôle principal de la couche Application dans le modèle OSI ?",
    "choices": {
      "A": "Elle est chargée de la segmentation des données.",
      "B": "Elle permet le chiffrement et la conversion des formats de données.",
      "C": "Elle sert d'interface directe entre les logiciels applicatifs et les services réseau.",
      "D": "Elle assure le contrôle de bout en bout du flux de données entre les périphériques sources et cibles."
    },
    "correct": "C",
    "explanation": "<p>La <strong>couche Application</strong> (couche 7 du modèle OSI) constitue le point d'accès entre les processus logiciels (navigateurs, clients mail, etc.) et le réseau lui-même.</p><ul><li>Elle ne s'occupe pas du transport ni du chiffrement (rôles respectifs des couches 4 et 6).</li><li>Son rôle est de fournir des services de communication aux applications utilisateur (ex: HTTP, FTP, SMTP).</li><li>Elle permet aux applications d'identifier les partenaires de communication et de vérifier la disponibilité des ressources réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La segmentation des données est le rôle de la couche Transport (couche 4)."
      },
      {
        "l": "B",
        "t": "Le chiffrement, la compression et la conversion de formats sont les fonctions principales de la couche Présentation (couche 6)."
      },
      {
        "l": "D",
        "t": "Le contrôle de bout en bout et la gestion des flux sont des fonctions attribuées à la couche Transport (couche 4)."
      }
    ],
    "examiner": "Évaluer la compréhension des responsabilités de la couche 7 du modèle OSI et la capacité du candidat à distinguer les fonctions des couches supérieures (Application, Présentation, Session).",
    "summary": [
      "La couche Application est la couche la plus proche de l'utilisateur final.",
      "Elle permet aux logiciels d'accéder aux services réseau via des protocoles (HTTP, DNS, SMTP).",
      "Elle ne gère pas la transmission physique ou le transport des segments.",
      "Elle fournit l'interface qui permet la communication entre les processus applicatifs distants."
    ]
  },
  {
    "num": "Q72",
    "partie": "Administration Système et Réseaux",
    "q": "Quelle caractéristique définit le rôle des périphériques finaux au sein d'une architecture réseau ?",
    "choices": {
      "A": "Ils assurent la gestion et le routage des flux de données.",
      "B": "Ils constituent le point d'origine ou de destination des flux de données.",
      "C": "Ils assurent la régénération et la retransmission des signaux de données.",
      "D": "Ils déterminent les chemins optimaux que les données doivent emprunter."
    },
    "correct": "B",
    "explanation": "<p>Dans un réseau informatique, les <strong>périphériques finaux</strong> (ou <em>end devices</em>) sont les équipements avec lesquels l'utilisateur interagit directement. Leur fonction principale est d'être la source ou la destination des communications.</p><ul><li>Les périphériques finaux incluent les ordinateurs, tablettes, serveurs, téléphones IP, etc.</li><li>Ils génèrent les données et les terminent, contrairement aux <strong>périphériques intermédiaires</strong> (routeurs, commutateurs) dont le rôle est de gérer, diriger et régénérer le signal.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La gestion et l'aiguillage des flux sont les rôles des périphériques intermédiaires comme les routeurs."
      },
      {
        "l": "C",
        "t": "La resynchronisation et la retransmission des signaux sont des fonctions typiques des répéteurs, hubs ou commutateurs."
      },
      {
        "l": "D",
        "t": "La définition des chemins de transmission (routage) est la responsabilité fondamentale des routeurs et des protocoles de routage."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre les périphériques finaux (hôtes) et les périphériques réseau intermédiaires.",
    "summary": [
      "Les périphériques finaux sont les sources et destinations finales des données.",
      "Ils sont les points de terminaison de la communication réseau.",
      "Les périphériques intermédiaires assurent l'infrastructure de transport.",
      "Le routage et la régénération du signal ne sont pas des fonctions des périphériques finaux."
    ]
  },
  {
    "num": "Q73",
    "partie": "Administration Système et Réseaux",
    "q": "Quel type de câble réseau à paire torsadée non blindée (UTP) est traditionnellement utilisé pour connecter directement deux ordinateurs entre eux sans passer par un commutateur (switch) ?",
    "choices": {
      "A": "Un câble droit (Straight-through)",
      "B": "Un câble croisé (Crossover)",
      "C": "Un câble console",
      "D": "Un câble de raccordement (Patch cord)"
    },
    "correct": "B",
    "explanation": "<p>Pour connecter deux équipements terminaux (comme deux ordinateurs) directement entre eux, les broches d'émission (TX) d'un ordinateur doivent être reliées aux broches de réception (RX) de l'autre. Le <strong>câble croisé</strong> réalise cette inversion physique des paires.</p><ul><li><strong>Câble droit :</strong> Utilisé pour relier un équipement terminal (PC) à un équipement d'interconnexion (switch).</li><li><strong>Câble croisé :</strong> Historiquement nécessaire pour la communication point-à-point entre deux machines de même type.</li><li><strong>Note :</strong> La plupart des cartes réseau modernes supportent la technologie <em>Auto-MDIX</em>, permettant d'utiliser un câble droit, mais dans un contexte académique, le câble croisé reste la réponse technique exacte pour une connexion directe.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le câble droit est utilisé pour relier un appareil à un switch ou un hub, pas pour une connexion directe entre deux hôtes."
      },
      {
        "l": "C",
        "t": "Le câble console est un câble série utilisé pour la configuration directe des équipements réseaux (routeurs, switches) et non pour le transfert de données réseau."
      },
      {
        "l": "D",
        "t": "Un câble de raccordement est un terme générique qui désigne généralement un câble droit court, inapproprié pour une liaison directe entre deux PC."
      }
    ],
    "examiner": "Évaluer la compréhension des normes de câblage Ethernet et la distinction entre les équipements de niveau terminal et d'interconnexion.",
    "summary": [
      "Un câble croisé permet d'inverser les paires d'émission et de réception.",
      "La connexion directe de deux ordinateurs nécessite techniquement une inversion des fils TX/RX.",
      "Le câble droit est destiné à relier un terminal à un équipement réseau actif.",
      "La technologie Auto-MDIX rend désormais cette distinction moins critique sur le matériel récent."
    ]
  },
  {
    "num": "Q74",
    "partie": "Administration Système et Réseaux",
    "q": "Veuillez fournir un exemple de question valide à analyser, car l'extrait fourni ne contient aucun contenu exploitable concernant un problème technique spécifique.",
    "choices": {
      "A": "L'extrait est incomplet.",
      "B": "Le texte fourni ne contient pas de question.",
      "C": "Il manque les données nécessaires à l'analyse.",
      "D": "Toutes les réponses ci-dessus sont correctes."
    },
    "correct": "D",
    "explanation": "<p>L'extrait soumis par l'utilisateur ne contient aucun énoncé de question ni de propositions de réponses. En tant qu'assistant, il m'est impossible d'analyser un contenu inexistant.</p><ul><li><strong>Analyse :</strong> Le texte se limite à un en-tête générique.</li><li><strong>Action :</strong> Veuillez soumettre une question réelle pour obtenir une analyse structurée.</li></ul>",
    "wrongAnalysis": [],
    "examiner": "La capacité de l'IA à identifier l'absence de contenu pertinent dans une requête utilisateur.",
    "summary": [
      "L'extrait fourni est vide de contenu technique.",
      "La structure de la réponse nécessite un énoncé précis.",
      "Une nouvelle soumission est requise pour effectuer une analyse pédagogique.",
      "L'objet retourné est une structure témoin."
    ]
  },
  {
    "num": "Q75",
    "partie": "Administration Système et Réseaux",
    "q": "Quels sont les concepts fondamentaux utilisés par le modèle MOT (Modèle Opérationnel de Traitement) ?",
    "choices": {
      "A": "Procédure, set et tâche",
      "B": "Procédure, phase et tâche",
      "C": "Tuple, phase et tâche",
      "D": "Procédure, article et tâche"
    },
    "correct": "B",
    "explanation": "<p>Le modèle <strong>MOT</strong> est une méthode de modélisation systémique utilisée pour décrire les processus opérationnels. Il repose sur trois piliers fondamentaux :</p><ul><li><strong>La procédure</strong> : qui définit l'ensemble des règles ou la logique métier.</li><li><strong>La phase</strong> : qui segmente le processus dans le temps.</li><li><strong>La tâche</strong> : qui représente l'unité élémentaire de travail à accomplir au sein d'une phase.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'set' n'est pas une composante standard du modèle MOT ; il s'agit d'une confusion avec des structures de données informatiques."
      },
      {
        "l": "C",
        "t": "Le terme 'tuple' est un concept utilisé en bases de données relationnelles et non dans la modélisation de processus opérationnels."
      },
      {
        "l": "D",
        "t": "Le terme 'article' est inapproprié ici, probablement utilisé pour distraire le candidat avec un vocabulaire de gestion de stock."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat maîtrise les concepts théoriques de base de la modélisation des processus métier (méthode MOT).",
    "summary": [
      "Le modèle MOT structure les processus opérationnels en unités logiques.",
      "La procédure définit le cadre opérationnel global.",
      "La phase permet de séquencer l'exécution dans le temps.",
      "La tâche constitue l'unité d'action élémentaire au sein d'une phase."
    ]
  },
  {
    "num": "Q76",
    "partie": "Administration Système et Réseaux",
    "q": "Sur quel élément le Modèle Physique de Données (MPD) porte-t-il principalement son attention lors de la conception d'une base de données ?",
    "choices": {
      "A": "Les commandes SQL",
      "B": "Les programmes et scripts d'application",
      "C": "Les données et leur structure de stockage physique",
      "D": "Les traitements et flux d'exécution"
    },
    "correct": "C",
    "explanation": "<p>Le <strong>Modèle Physique de Données (MPD)</strong> est l'étape finale de la modélisation des données. Contrairement au Modèle Conceptuel (MCD) ou Logique (MLD), il se concentre sur l'<strong>implémentation technique</strong> dans un Système de Gestion de Bases de Données (SGBD) spécifique.</p><ul><li>Il définit précisément la structure de stockage des données.</li><li>Il gère les types de données natifs, les index, les contraintes et l'organisation des fichiers sur le support physique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les commandes SQL constituent le langage de manipulation, mais ne représentent pas l'objet d'étude du modèle de données lui-même."
      },
      {
        "l": "B",
        "t": "Les programmes d'application utilisent les données, mais le MPD est indépendant de la logique applicative."
      },
      {
        "l": "D",
        "t": "Les traitements sont modélisés dans d'autres artefacts (comme les diagrammes de séquence ou d'activité), pas dans un modèle de données."
      }
    ],
    "examiner": "Évaluer la compréhension des niveaux de modélisation en bases de données et la distinction entre structure de données et processus applicatif.",
    "summary": [
      "Le MPD est la traduction technique du modèle logique vers un SGBD spécifique.",
      "Il se concentre exclusivement sur la gestion, le stockage et l'organisation physique des données.",
      "Le MPD intègre des paramètres techniques comme le typage, les index et les partitions.",
      "Il est indépendant de la logique des programmes et des commandes SQL utilisées ultérieurement."
    ]
  },
  {
    "num": "Q77",
    "partie": "Administration Système et Réseaux",
    "q": "Quel type de support de stockage est principalement géré par le système de fichiers CDFS (Compact Disc File System) ?",
    "choices": {
      "A": "Les disquettes",
      "B": "Les CD-ROM",
      "C": "Les clés USB",
      "D": "Les cartes mémoire"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>CDFS</strong> (Compact Disc File System) est un système de fichiers spécifique conçu pour les supports optiques.</p><ul><li>Il permet au système d'exploitation de lire la structure des données gravées sur les disques compacts (CD).</li><li>Contrairement aux systèmes comme FAT32 ou NTFS, il est optimisé pour les supports en lecture seule (ROM) ou gravables une seule fois (CD-R/RW).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les disquettes utilisent généralement le système FAT12."
      },
      {
        "l": "C",
        "t": "Les clés USB utilisent principalement les systèmes FAT32, exFAT ou NTFS."
      },
      {
        "l": "D",
        "t": "Les cartes mémoire utilisent principalement FAT32 ou exFAT pour assurer une compatibilité universelle."
      }
    ],
    "examiner": "Évaluer la connaissance des systèmes de fichiers spécialisés et leur adéquation avec les différents supports de stockage physiques.",
    "summary": [
      "Le CDFS est dédié exclusivement aux supports optiques de type CD-ROM.",
      "Il assure la lecture des données gravées selon la norme ISO 9660.",
      "Ce système de fichiers est conçu pour des supports en lecture seule.",
      "Il ne convient pas aux supports réinscriptibles modernes comme les clés USB ou les cartes SD."
    ]
  },
  {
    "num": "Q78",
    "partie": "Administration Système et Réseaux",
    "q": "Le programme d'amorçage, couramment appelé \"bootstrap\", est stocké dans quel composant matériel au démarrage d'un ordinateur ?",
    "choices": {
      "A": "Le BIOS",
      "B": "La mémoire RAM",
      "C": "Le processeur",
      "D": "La mémoire cache"
    },
    "correct": "A",
    "explanation": "<p>Le <strong>bootstrap</strong> (ou chargeur d'amorçage initial) est un petit programme contenu dans une mémoire non volatile appelée <strong>BIOS</strong> (Basic Input/Output System) ou dans l'UEFI sur les systèmes modernes.</p><p>Son rôle est critique :</p><ul><li>Initialiser et tester le matériel (POST - Power-On Self-Test).</li><li>Localiser le secteur d'amorçage sur le périphérique de stockage (disque dur, SSD).</li><li>Charger le noyau du système d'exploitation en mémoire RAM pour prendre le relais.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La mémoire RAM est volatile ; elle est vide à la mise sous tension et nécessite justement le bootstrap pour y charger les données."
      },
      {
        "l": "C",
        "t": "Le processeur exécute les instructions mais n'est pas un support de stockage persistant pour les programmes de démarrage."
      },
      {
        "l": "D",
        "t": "La mémoire cache est une mémoire très rapide destinée à accélérer les accès du processeur aux données de la RAM, mais elle n'est pas utilisée pour l'amorçage initial."
      }
    ],
    "examiner": "Évaluer la compréhension de la séquence de démarrage d'un ordinateur et la distinction entre les types de mémoires (persistantes vs volatiles).",
    "summary": [
      "Le bootstrap est le premier code exécuté par l'ordinateur lors de la mise sous tension.",
      "Il est situé dans le BIOS ou l'UEFI, qui sont des mémoires non volatiles.",
      "Sa fonction principale est de préparer le matériel et de charger le système d'exploitation.",
      "La RAM ne peut pas contenir le bootstrap car elle est effacée à chaque arrêt du système."
    ]
  },
  {
    "num": "Q79",
    "partie": "Administration Système et Réseaux",
    "q": "Dans le contexte de la modélisation de données ou de la configuration système, que définit le terme « synonyme » pour une propriété ?",
    "choices": {
      "A": "Lorsqu'une propriété est utilisée sur des supports différents.",
      "B": "Lorsqu'une propriété est utilisée sur le même support.",
      "C": "Lorsqu'une propriété porte le même nom.",
      "D": "Lorsqu'une propriété possède plusieurs noms différents pour désigner la même donnée."
    },
    "correct": "D",
    "explanation": "<p>En modélisation de données, un <strong>synonyme</strong> survient lorsqu'une même entité ou propriété est référencée par des libellés différents au sein d'un système d'information. Cela pose souvent des problèmes de cohérence et nécessite la mise en place d'un dictionnaire de données ou d'une nomenclature normalisée.</p><ul><li>À l'inverse, on parle d'<strong>homonyme</strong> lorsqu'un même nom est utilisé pour désigner des propriétés différentes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le support de stockage ou d'utilisation n'est pas le critère déterminant pour définir la synonymie d'une propriété."
      },
      {
        "l": "B",
        "t": "L'utilisation sur un même support n'a pas de lien direct avec la définition sémantique d'un synonyme."
      },
      {
        "l": "C",
        "t": "Si une propriété porte le même nom, on ne parle pas de synonymie, mais d'identité de nommage."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la maîtrise du vocabulaire technique lié à la gestion des données et à la compréhension des problèmes de normalisation (synonymes vs homonymes).",
    "summary": [
      "Un synonyme désigne plusieurs noms pour une seule et même donnée.",
      "La synonymie peut entraîner une redondance ou une confusion dans les bases de données.",
      "L'homonymie est le concept inverse : un seul nom pour plusieurs données différentes.",
      "La normalisation des données est essentielle pour éviter ces ambiguïtés sémantiques."
    ]
  },
  {
    "num": "Q80",
    "partie": "Administration Système et Réseaux",
    "q": "Dans l'environnement MS-DOS, quel est le rôle du caractère joker 'point d'interrogation' (?) utilisé lors de la manipulation de fichiers ?",
    "choices": {
      "A": "Il remplace une séquence de deux caractères.",
      "B": "Il remplace un nombre indéfini de caractères.",
      "C": "Il remplace un seul caractère quelconque.",
      "D": "Il remplace une séquence de quatre caractères."
    },
    "correct": "C",
    "explanation": "<p>Dans le système d'exploitation MS-DOS (ainsi que dans la plupart des interpréteurs de commandes Windows modernes), les caractères jokers (wildcards) sont utilisés pour désigner des groupes de fichiers.</p><ul><li>Le <strong>point d'interrogation (?)</strong> agit comme un joker de position : il représente <strong>exactement un seul caractère</strong> à la position donnée.</li><li>L'<strong>astérisque (*)</strong>, quant à lui, est utilisé pour représenter une suite indéfinie de caractères (zéro ou plusieurs).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le point d'interrogation ne cible pas une longueur spécifique arbitraire comme deux caractères."
      },
      {
        "l": "B",
        "t": "C'est la définition du caractère joker astérisque (*), et non du point d'interrogation."
      },
      {
        "l": "D",
        "t": "Il n'y a aucune limitation de quatre caractères associée à l'usage du point d'interrogation."
      }
    ],
    "examiner": "Évaluer la connaissance des commandes système de base et la maîtrise de la syntaxe des caractères jokers dans l'environnement en ligne de commande.",
    "summary": [
      "Le point d'interrogation (?) est un caractère joker de position unique.",
      "Il remplace strictement un seul caractère dans un nom de fichier.",
      "L'astérisque (*) est utilisé pour représenter zéro ou plusieurs caractères.",
      "Ces jokers facilitent la gestion de fichiers par lots dans l'invite de commande."
    ]
  },
  {
    "num": "Q81",
    "partie": "Administration Système et Réseaux",
    "q": "Qu'est-ce qu'une propriété concaténée dans le contexte de la modélisation de données ?",
    "choices": {
      "A": "Une propriété décomposable",
      "B": "Une propriété élémentaire",
      "C": "Une propriété codée",
      "D": "Une propriété traitée"
    },
    "correct": "A",
    "explanation": "<p>En modélisation de données, une <strong>propriété concaténée</strong> est une information qui peut être subdivisée en plusieurs unités d'information plus petites et atomiques.</p><ul><li>Par exemple, une 'Adresse' est souvent une propriété concaténée regroupant : numéro de rue, nom de rue, code postal et ville.</li><li>À l'inverse, une <strong>propriété élémentaire</strong> ne peut pas être décomposée sans perdre sa signification métier immédiate.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une propriété élémentaire est justement l'opposé d'une propriété concaténée : elle est atomique et non décomposable."
      },
      {
        "l": "C",
        "t": "Une propriété codée fait référence à une valeur transformée selon une nomenclature (ex: code pays), ce qui n'a pas de rapport avec sa structure décomposable."
      },
      {
        "l": "D",
        "t": "Une propriété traitée est un concept lié au cycle de vie ou au calcul d'une donnée, et non à sa structure intrinsèque."
      }
    ],
    "examiner": "L'examinateur vérifie la capacité du candidat à distinguer les différents types de propriétés dans un dictionnaire de données et à comprendre les principes de normalisation.",
    "summary": [
      "Une propriété concaténée est composée de plusieurs sous-informations.",
      "Elle est intrinsèquement décomposable en éléments plus simples.",
      "L'opposé d'une propriété concaténée est la propriété élémentaire (ou atomique).",
      "Identifier correctement ces propriétés est essentiel pour la structuration d'une base de données relationnelle."
    ]
  }
];
