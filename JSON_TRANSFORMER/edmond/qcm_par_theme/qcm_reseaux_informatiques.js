const QCM = [
  {
    "num": "Q1",
    "partie": "Réseaux informatiques",
    "q": "Quel est l'avantage principal d'un commutateur (switch) par rapport à un concentrateur (hub) dans un réseau local ?",
    "choices": {
      "A": "Il est moins coûteux à l'achat.",
      "B": "Il permet d'optimiser la bande passante et de réduire la charge sur le réseau.",
      "C": "Il assure nativement la sécurité des données transmises.",
      "D": "Il permet d'établir une communication entre les équipements."
    },
    "correct": "B",
    "explanation": "<p>Contrairement au <strong>hub</strong>, qui diffuse chaque trame reçue sur tous ses ports (principe de diffusion ou <em>broadcast</em>), le <strong>switch</strong> utilise une table d'adresses MAC pour acheminer les données uniquement vers le port de destination concerné.</p><ul><li><strong>Segmentation du domaine de collision :</strong> Chaque port d'un switch constitue son propre domaine de collision.</li><li><strong>Gestion du trafic :</strong> En réduisant les transmissions inutiles, le switch optimise l'utilisation de la bande passante disponible.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est généralement faux ; le switch est une technologie plus complexe et plus coûteuse qu'un hub passif."
      },
      {
        "l": "C",
        "t": "Bien qu'il réduise les écoutes réseau (sniffing), le switch ne garantit pas la sécurité logique ou le chiffrement des données transmises."
      },
      {
        "l": "D",
        "t": "Un hub permet également d'établir une communication physique entre les équipements ; ce n'est donc pas un avantage spécifique au switch."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la différence fondamentale de traitement des trames entre la couche 1 (hub) et la couche 2 (switch) du modèle OSI.",
    "summary": [
      "Un hub fonctionne par diffusion, ce qui encombre inutilement le réseau.",
      "Un switch apprend les adresses MAC pour diriger les flux de manière sélective.",
      "Le passage d'un hub à un switch améliore significativement les performances globales du réseau.",
      "Le switch réduit les collisions en isolant les domaines de transmission sur chaque port."
    ]
  },
  {
    "num": "Q2",
    "partie": "Réseaux informatiques",
    "q": "Quel est le protocole fondamental utilisé pour la transmission et le routage des paquets de données sur Internet ?",
    "choices": {
      "A": "IPX/SPX",
      "B": "HTTP",
      "C": "IPv4",
      "D": "TCP/IP"
    },
    "correct": "D",
    "explanation": "<p>Le protocole <strong>TCP/IP</strong> (Transmission Control Protocol/Internet Protocol) constitue la suite de protocoles fondamentale sur laquelle repose Internet.</p><ul><li><strong>TCP</strong> assure la segmentation des données et la fiabilité de la transmission.</li><li><strong>IP</strong> s'occupe de l'adressage et du routage des paquets à travers le réseau.</li><li>Bien que IPv4 soit une version du protocole IP, TCP/IP représente la suite complète indispensable à la communication réseau globale.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "IPX/SPX est un ancien protocole de réseau développé par Novell, aujourd'hui obsolète et non utilisé sur Internet."
      },
      {
        "l": "B",
        "t": "HTTP est un protocole de couche application utilisé pour transférer des documents hypertexte, il repose lui-même sur TCP/IP."
      },
      {
        "l": "C",
        "t": "IPv4 est un protocole d'adressage réseau, mais il ne constitue pas, à lui seul, la suite complète nécessaire à la transmission des données (il manque la gestion du contrôle de flux et de la fiabilité apportée par TCP)."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant concernant l'architecture des réseaux et la distinction entre les protocoles de transport/réseau et les protocoles applicatifs.",
    "summary": [
      "La suite TCP/IP est la norme standard pour les communications sur Internet.",
      "IP (Internet Protocol) gère le routage des paquets.",
      "TCP (Transmission Control Protocol) assure la livraison ordonnée et sans erreur des données.",
      "HTTP est une application qui fonctionne au-dessus de la pile TCP/IP, et non une alternative de transport."
    ]
  },
  {
    "num": "Q3",
    "partie": "Réseaux informatiques",
    "q": "Parmi les protocoles suivants, lequel est considéré comme un protocole de sécurisation ?",
    "choices": {
      "A": "POP",
      "B": "SSL",
      "C": "IPX/SPX",
      "D": "Telnet"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>protocole SSL (Secure Sockets Layer)</strong>, désormais remplacé par son successeur <strong>TLS (Transport Layer Security)</strong>, est un protocole de sécurité destiné à établir un canal de communication sécurisé sur Internet.</p><p>Il permet de garantir :</p><ul><li><strong>La confidentialité :</strong> par le chiffrement des données.</li><li><strong>L'intégrité :</strong> en assurant que les données n'ont pas été altérées.</li><li><strong>L'authentification :</strong> en vérifiant l'identité du serveur via des certificats numériques.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "POP (Post Office Protocol) est un protocole de messagerie non sécurisé utilisé pour récupérer des emails ; il transmet les données en clair."
      },
      {
        "l": "C",
        "t": "IPX/SPX est une ancienne suite de protocoles de communication développée par Novell, aujourd'hui obsolète et dépourvue de mécanismes de sécurité modernes."
      },
      {
        "l": "D",
        "t": "Telnet est un protocole de gestion à distance très ancien qui transmet toutes les données, y compris les mots de passe, en texte clair, ce qui le rend hautement vulnérable."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance des protocoles de base du modèle OSI et la capacité à distinguer les protocoles de transport standards des protocoles de sécurité (chiffrement).",
    "summary": [
      "SSL/TLS est le standard de facto pour sécuriser les communications sur le web.",
      "Les protocoles comme POP et Telnet envoient les informations en clair, facilitant l'interception.",
      "SSL assure la confidentialité, l'intégrité et l'authentification des échanges.",
      "La connaissance des protocoles hérités (IPX/SPX) permet d'identifier les technologies obsolètes."
    ]
  },
  {
    "num": "Q4",
    "partie": "Réseaux informatiques",
    "q": "Combien de bits composent une adresse IPv4 ?",
    "choices": {
      "A": "128",
      "B": "64",
      "C": "48",
      "D": "32"
    },
    "correct": "D",
    "explanation": "<p>Une adresse <strong>IPv4</strong> (Internet Protocol version 4) est composée de <strong>32 bits</strong>. Ces bits sont généralement représentés sous forme décimale pointée, divisés en quatre octets (4 x 8 bits = 32 bits).</p><ul><li>Chaque octet peut prendre une valeur allant de 0 à 255.</li><li>Le total théorique permet d'adresser environ 4,3 milliards d'hôtes sur Internet.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "128 bits correspond à la longueur d'une adresse IPv6, pas IPv4."
      },
      {
        "l": "B",
        "t": "64 bits n'est pas une taille standard pour le formatage d'adresses IP classiques."
      },
      {
        "l": "C",
        "t": "48 bits est la longueur standard d'une adresse physique, appelée adresse MAC."
      }
    ],
    "examiner": "Évaluer la connaissance fondamentale des protocoles réseau et la distinction entre IPv4 et les autres standards d'adressage (comme IPv6 ou les adresses MAC).",
    "summary": [
      "Une adresse IPv4 est codée sur 32 bits au total.",
      "Elle se structure en quatre octets (chaque octet vaut 8 bits).",
      "Il est essentiel de ne pas confondre IPv4 (32 bits) avec IPv6 (128 bits).",
      "L'adresse MAC, quant à elle, utilise 48 bits."
    ]
  },
  {
    "num": "Q5",
    "partie": "Réseaux informatiques",
    "q": "Dans le contexte d'un réseau local, à quel aspect le modèle client-serveur s'applique-t-il principalement ?",
    "choices": {
      "A": "Infrastructure physique",
      "B": "Services",
      "C": "Topologie",
      "D": "Dimensionnement"
    },
    "correct": "B",
    "explanation": "<p>Le modèle <strong>client-serveur</strong> est une architecture logique qui définit la manière dont les ressources et les services sont distribués au sein d'un réseau. Il ne concerne pas la disposition matérielle des câbles (topologie) ni les équipements physiques eux-mêmes, mais la relation fonctionnelle entre un programme demandeur (le client) et un programme fournisseur (le serveur).</p><ul><li><strong>Client :</strong> Émet une requête pour accéder à une ressource.</li><li><strong>Serveur :</strong> Répond à la requête en fournissant le service demandé (ex: messagerie, stockage, impression).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'infrastructure physique concerne le câblage, les commutateurs et les serveurs matériels, mais pas la logique applicative du modèle."
      },
      {
        "l": "C",
        "t": "La topologie définit la forme géométrique ou logique des connexions (étoile, bus, maillée), ce qui est indépendant du modèle client-serveur."
      },
      {
        "l": "D",
        "t": "Le dimensionnement est lié à la capacité et à la charge du réseau, et non à l'organisation fonctionnelle des échanges de données."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'étudiant distingue l'architecture logique (modèle client-serveur) des aspects physiques ou structurels d'un réseau informatique.",
    "summary": [
      "Le modèle client-serveur est une architecture logicielle et non matérielle.",
      "Il régit la distribution des services et des ressources sur un réseau.",
      "Les clients sollicitent des ressources tandis que les serveurs les gèrent et les distribuent.",
      "Ce modèle est indépendant de la topologie physique sous-jacente du réseau local."
    ]
  },
  {
    "num": "Q6",
    "partie": "Réseaux informatiques",
    "q": "Quelle caractéristique décrit le mieux le fonctionnement fondamental d'un commutateur (switch) Ethernet ?",
    "choices": {
      "A": "Il filtre les trames en se basant sur les adresses IP et une table de commutation.",
      "B": "Il permet la mise en œuvre de tunnels VPN.",
      "C": "Il bloque systématiquement la transmission des trames de broadcast.",
      "D": "Lorsqu'il reçoit une trame, il la transmet sur le port de destination en conservant le débit d'origine."
    },
    "correct": "D",
    "explanation": "<p>Un commutateur (switch) est un équipement de <strong>couche 2 (Liaison de données)</strong> du modèle OSI. Son rôle principal est de commuter des trames Ethernet entre des ports physiques.</p><ul><li>Il utilise des <strong>adresses MAC</strong> et non des adresses IP (qui relèvent de la couche 3).</li><li>Il transmet les trames de broadcast (diffusion) à tous les ports, sauf celui d'origine, pour assurer la découverte réseau.</li><li>La caractéristique de <strong>transparence de débit</strong> est essentielle : le switch agit comme un pont transparent qui achemine les données à la vitesse négociée entre l'émetteur et le récepteur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le filtrage par adresse IP est une fonction propre aux routeurs (couche 3), pas aux commutateurs standards."
      },
      {
        "l": "B",
        "t": "La gestion des VPN est une fonction de sécurité et de routage avancée qui nécessite des équipements de niveau 3 ou des pare-feu."
      },
      {
        "l": "C",
        "t": "Un switch classique diffuse les trames de broadcast sur tous ses ports (sauf celui d'arrivée) afin de maintenir la connectivité du réseau local."
      }
    ],
    "examiner": "Évalue la compréhension du rôle d'un commutateur de niveau 2 et la distinction fondamentale entre commutation (MAC) et routage (IP).",
    "summary": [
      "Un switch fonctionne principalement au niveau de la couche 2 du modèle OSI.",
      "Le filtrage des trames dans un switch se base sur les adresses MAC et non les adresses IP.",
      "Les trames de broadcast sont obligatoirement relayées par les commutateurs pour permettre le fonctionnement des protocoles de découverte (comme ARP).",
      "La commutation est transparente : le switch transfère la trame vers le port de destination au débit négocié sans modifier le protocole."
    ]
  },
  {
    "num": "Q7",
    "partie": "Réseaux informatiques",
    "q": "Quel type de support de transmission est insensible aux perturbations électromagnétiques (EMI) et aux interférences radioélectriques (RFI) ?",
    "choices": {
      "A": "Le câblage 10Base-T (Paire torsadée)",
      "B": "Le câblage 10Base-2 (Coaxial fin)",
      "C": "Le câblage 10Base-5 (Coaxial épais)",
      "D": "Le câblage 100Base-FX (Fibre optique)"
    },
    "correct": "D",
    "explanation": "<p>La réponse correcte est la <strong>fibre optique (100Base-FX)</strong>. Contrairement aux supports utilisant des conducteurs en cuivre, la fibre optique transmet des signaux sous forme de <strong>photons (lumière)</strong> à travers un cœur en verre ou en plastique.</p><ul><li>Les supports en cuivre (10Base-T, 10Base-2, 10Base-5) sont sensibles au rayonnement électromagnétique, car ils véhiculent des signaux électriques.</li><li>L'absence de conductivité électrique de la fibre la rend naturellement immunisée contre les interférences (EMI/RFI) et les boucles de masse.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le 10Base-T utilise des paires torsadées non blindées (UTP) qui sont sensibles aux interférences électromagnétiques."
      },
      {
        "l": "B",
        "t": "Le 10Base-2 utilise un câble coaxial qui, bien que blindé, reste sujet aux interférences électromagnétiques environnementales."
      },
      {
        "l": "C",
        "t": "Le 10Base-5, malgré son blindage épais, utilise un support en cuivre qui peut subir des perturbations électromagnétiques."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension des supports de transmission physiques et de leurs caractéristiques de résistance face aux contraintes environnementales.",
    "summary": [
      "Les câbles en cuivre véhiculent des signaux électriques sensibles aux interférences.",
      "La fibre optique transmet des données via des signaux lumineux (photons).",
      "La fibre optique est totalement immunisée contre les perturbations électromagnétiques et radioélectriques.",
      "Le choix d'un support dépend de l'environnement physique et de la nécessité d'isoler le signal des parasites extérieurs."
    ]
  },
  {
    "num": "Q8",
    "partie": "Réseaux informatiques",
    "q": "Parmi les propositions suivantes, laquelle définit le plus précisément un intranet ?",
    "choices": {
      "A": "Un intranet est un réseau local connecté à Internet.",
      "B": "Un intranet est un réseau local interne à une entreprise.",
      "C": "Un intranet est un réseau local offrant les mêmes services et basé sur les mêmes protocoles que l'Internet.",
      "D": "Un intranet est un réseau de communication entre un groupe d'ordinateurs connectés à Internet."
    },
    "correct": "C",
    "explanation": "<p>Un <strong>Intranet</strong> est un réseau privé au sein d'une organisation qui utilise les mêmes technologies que le réseau public mondial (Internet).</p><ul><li><strong>Technologie :</strong> Il s'appuie sur la suite de protocoles <em>TCP/IP</em>, le protocole <em>HTTP</em> pour le Web, et le courrier électronique.</li><li><strong>Services :</strong> Il propose des fonctionnalités identiques à celles d'Internet (accès à des documents via un navigateur, partage de fichiers, messagerie interne).</li><li><strong>Accès :</strong> Il est restreint aux membres autorisés de l'organisation, contrairement à Internet qui est public.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une connexion à Internet est une caractéristique optionnelle (via une passerelle sécurisée) et non la définition fondamentale d'un intranet."
      },
      {
        "l": "B",
        "t": "Bien que l'intranet soit interne, cette définition est trop vague. Un réseau local (LAN) n'est pas forcément un intranet s'il n'utilise pas les services et protocoles du Web."
      },
      {
        "l": "D",
        "t": "Cette description ressemble davantage à un réseau privé virtuel (VPN) ou à une interconnexion d'ordinateurs distants via Internet, ce qui ne définit pas l'architecture logicielle propre à l'intranet."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend que l'intranet est défini par l'utilisation des protocoles et services Web (TCP/IP, HTTP) en milieu privé, et non par sa simple existence physique ou sa connexion à Internet.",
    "summary": [
      "Un intranet utilise les standards technologiques d'Internet (TCP/IP, HTTP) dans un cadre privé.",
      "Il est réservé exclusivement aux membres d'une organisation.",
      "Il propose des services collaboratifs identiques à ceux du web public.",
      "L'aspect déterminant est l'architecture logicielle et non la simple infrastructure physique."
    ]
  },
  {
    "num": "Q9",
    "partie": "Réseaux informatiques",
    "q": "Dans quel type de câblage structurel la fibre optique est-elle majoritairement utilisée ?",
    "choices": {
      "A": "Le câblage vertical",
      "B": "Le câblage horizontal",
      "C": "Le câblage croisé",
      "D": "Le câblage inversé"
    },
    "correct": "A",
    "explanation": "<p>Dans le câblage structuré, on distingue deux niveaux principaux :</p><ul><li><strong>Câblage vertical (ou câblage de colonne) :</strong> Relie les salles d'équipement (bâtiment principal) aux répartiteurs d'étage. La fibre optique y est privilégiée en raison de sa grande capacité de débit et de sa capacité à couvrir de longues distances sans perte de signal.</li><li><strong>Câblage horizontal :</strong> Relie la prise murale de l'utilisateur final au répartiteur d'étage. Le câble à paires torsadées (type cuivre RJ45) y est la norme pour sa flexibilité et son coût réduit.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le câblage horizontal utilise principalement des câbles en cuivre (paires torsadées) pour relier les postes de travail aux prises murales, car la fibre y serait trop coûteuse et rigide."
      },
      {
        "l": "C",
        "t": "Le terme 'câblage croisé' fait référence à une configuration spécifique de câbles (câble Ethernet croisé) utilisée pour connecter directement deux appareils similaires, et non à un segment d'infrastructure de bâtiment."
      },
      {
        "l": "D",
        "t": "Le 'câblage inversé' (ou câble console) est un type de câblage spécifique utilisé pour la configuration d'équipements réseau (routeurs/switches) via un port série, et n'est pas un standard de déploiement de réseau longue distance."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture du câblage structuré et la distinction entre les domaines d'application des supports de transmission.",
    "summary": [
      "Le câblage vertical est le backbone qui relie les différents étages ou bâtiments.",
      "La fibre optique est idéale pour le câblage vertical grâce à son haut débit et sa portée.",
      "Le câblage horizontal utilise majoritairement du cuivre (RJ45) pour le raccordement terminal.",
      "Le choix du support dépend de la distance et de la bande passante nécessaire."
    ]
  },
  {
    "num": "Q10",
    "partie": "Réseaux informatiques",
    "q": "Quelle couche du modèle OSI est spécifiquement responsable de la gestion du flux d'informations et du contrôle de bout en bout, garantissant un transfert fiable des données entre la source et la destination ?",
    "choices": {
      "A": "La couche présentation",
      "B": "La couche session",
      "C": "La couche transport",
      "D": "La couche réseau"
    },
    "correct": "C",
    "explanation": "<p>La <strong>couche transport (couche 4)</strong> du modèle OSI est la couche charnière pour la communication de bout en bout. Elle assure plusieurs rôles critiques :</p><ul><li><strong>Contrôle de flux :</strong> Réguler la quantité de données envoyées pour éviter la saturation du récepteur.</li><li><strong>Fiabilité :</strong> Utilisation de mécanismes comme les accusés de réception et la retransmission des segments perdus (ex: via TCP).</li><li><strong>Segmentation :</strong> Découpage des données en unités plus petites pour faciliter le transit sur le réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La couche présentation s'occupe du formatage, de la compression et du chiffrement des données, non de la régulation du flux."
      },
      {
        "l": "B",
        "t": "La couche session gère l'établissement, le maintien et la terminaison des sessions entre les applications, mais n'est pas responsable du flux de données fiable."
      },
      {
        "l": "D",
        "t": "La couche réseau est responsable du routage et de l'adressage logique (IP), elle gère le cheminement des paquets mais n'assure pas la fiabilité de bout en bout."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat maîtrise les rôles spécifiques des différentes couches du modèle OSI, en distinguant les fonctions de routage (réseau) des fonctions de transport et de contrôle de bout en bout.",
    "summary": [
      "La couche transport est l'unique couche responsable de la communication de bout en bout dans le modèle OSI.",
      "Elle garantit l'intégrité et la fiabilité des données transmises via des protocoles comme TCP.",
      "Le contrôle de flux est essentiel pour adapter le débit entre une source rapide et une destination plus lente.",
      "Les couches réseau et session possèdent des rôles distincts liés respectivement à l'acheminement des paquets et à la gestion des dialogues applicatifs."
    ]
  },
  {
    "num": "Q11",
    "partie": "Réseaux informatiques",
    "q": "Dans le modèle TCP/IP, les segments de la couche transport contiennent des numéros de port source et de destination. Quelle est la fonction principale d'un numéro de port ?",
    "choices": {
      "A": "Identifier de manière unique deux ordinateurs distincts au sein d'un réseau local.",
      "B": "Établir une connexion physique entre un ordinateur et une application logicielle.",
      "C": "Permettre d'identifier le processus ou l'application spécifique destinataire ou émettrice des données.",
      "D": "Connecter un ordinateur à un équipement d'interconnexion tel qu'un routeur ou un commutateur."
    },
    "correct": "C",
    "explanation": "<p>Dans le modèle TCP/IP, le <strong>port</strong> est une valeur numérique comprise entre 0 et 65535 qui identifie un service ou une application spécifique sur un hôte donné.</p><ul><li>Les adresses <strong>IP</strong> identifient les hôtes (ordinateurs/serveurs).</li><li>Les <strong>ports</strong> identifient les processus (logiciels) tournant sur ces hôtes.</li></ul><p>C'est grâce à cette combinaison (IP + Port) que les données sont acheminées vers la bonne application, évitant ainsi les conflits lorsque plusieurs services utilisent le même réseau simultanément.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est le rôle de l'adresse IP et de l'adresse MAC, pas du numéro de port."
      },
      {
        "l": "B",
        "t": "Le port ne connecte pas physiquement l'ordinateur ; il permet un adressage logique au sein du système d'exploitation pour communiquer avec le bon processus."
      },
      {
        "l": "D",
        "t": "Les équipements d'interconnexion utilisent des adresses de couche 2 (MAC) ou de couche 3 (IP) pour le routage, et non les ports de couche transport."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la hiérarchie des couches réseau et votre capacité à distinguer l'adressage hôte (IP) de l'adressage processus (Port).",
    "summary": [
      "Les adresses IP identifient les machines, les numéros de port identifient les applications.",
      "Les ports sont situés dans les en-têtes des protocoles TCP et UDP.",
      "Une communication réseau est définie par un couple IP-Port (socket).",
      "Les ports permettent le multiplexage, soit l'exécution de plusieurs services réseaux simultanés sur une même machine."
    ]
  },
  {
    "num": "Q12",
    "partie": "Réseaux informatiques",
    "q": "Parmi les propositions suivantes, laquelle caractérise le mieux la fonction principale d'un routeur dans un environnement réseau ?",
    "choices": {
      "A": "C'est un équipement opérant au niveau de la couche 4 du modèle OSI.",
      "B": "Il sert souvent de passerelle par défaut pour les ordinateurs d'un réseau local (LAN).",
      "C": "Il joue le rôle de serveur proxy pour les ordinateurs d'un réseau local (LAN).",
      "D": "Il est principalement utilisé pour router les paquets de données à l'intérieur d'un même segment de réseau local (LAN)."
    },
    "correct": "B",
    "explanation": "<p>Un routeur est un équipement réseau opérant principalement à la <strong>couche 3 (Réseau)</strong> du modèle OSI.</p><ul><li>Il est conçu pour interconnecter des réseaux distincts.</li><li>Au sein d'un LAN, les terminaux utilisent l'adresse IP du routeur comme <strong>passerelle par défaut</strong> (Default Gateway) pour transmettre tout trafic destiné à un réseau extérieur (ex: Internet).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La couche 4 (Transport) gère la segmentation et les protocoles comme TCP/UDP. Le routeur travaille en couche 3 pour diriger les paquets IP."
      },
      {
        "l": "C",
        "t": "Un proxy est un serveur applicatif (couche 7) qui agit comme intermédiaire pour les requêtes web, ce qui est une fonction logicielle et non une caractéristique fondamentale du matériel de routage."
      },
      {
        "l": "D",
        "t": "Le routage à l'intérieur d'un même réseau LAN (diffusion locale) est géré par des commutateurs (switchs) de couche 2 via les adresses MAC, et non par le routeur."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension du rôle fonctionnel du routeur et de son positionnement dans le modèle OSI par rapport aux autres équipements de réseau.",
    "summary": [
      "Le routeur est un équipement de couche 3 (réseau) du modèle OSI.",
      "Sa fonction principale est l'interconnexion de réseaux IP distincts.",
      "Il agit en tant que passerelle par défaut pour les hôtes d'un LAN souhaitant communiquer avec l'extérieur.",
      "Les commutateurs (switchs) gèrent la communication locale, tandis que le routeur gère le trafic inter-réseaux."
    ]
  },
  {
    "num": "Q13",
    "partie": "Réseaux informatiques",
    "q": "Quel type de connecteur est standardisé pour les câbles réseau à paires torsadées dans les réseaux locaux (LAN) ?",
    "choices": {
      "A": "Connecteur BNC",
      "B": "Connecteur RJ-11",
      "C": "Connecteur RJ-45",
      "D": "Connecteur de type F"
    },
    "correct": "C",
    "explanation": "<p>Dans le domaine des réseaux Ethernet sur paires torsadées (type câble réseau UTP/STP), le standard industriel est le connecteur <strong>RJ-45</strong> (Registered Jack 45). Ce connecteur possède 8 broches (8P8C) et permet la transmission de données sur les quatre paires de fils torsadés que contient un câble réseau moderne.</p><ul><li>La norme RJ-45 assure la compatibilité physique avec la majorité des cartes réseau (NIC) et des ports de commutateurs (switchs) actuels.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le connecteur BNC était utilisé pour les anciens réseaux Ethernet coaxiaux (10Base2) et non pour les paires torsadées."
      },
      {
        "l": "B",
        "t": "Le connecteur RJ-11 est un connecteur à 4 ou 6 broches principalement utilisé pour les lignes téléphoniques analogiques, insuffisant pour un réseau Ethernet."
      },
      {
        "l": "D",
        "t": "Le connecteur de type F est un connecteur RF à visser, principalement utilisé pour les câbles coaxiaux de télévision par satellite ou câble."
      }
    ],
    "examiner": "Vérifier la connaissance du candidat sur les standards physiques de connectivité réseau et sa capacité à distinguer les différentes interfaces de câblage.",
    "summary": [
      "Le connecteur RJ-45 est la norme pour les réseaux Ethernet sur paires torsadées.",
      "Il possède 8 broches et s'adapte parfaitement aux câbles de type Cat 5e, 6 ou 6a.",
      "Les connecteurs BNC et RJ-11 ne sont pas adaptés aux débits et à la structure des réseaux Ethernet modernes.",
      "L'identification correcte du connecteur est essentielle pour la maintenance et le déploiement du câblage structuré."
    ]
  },
  {
    "num": "Q14",
    "partie": "Réseaux informatiques",
    "q": "Quelle est l'unité de mesure standard utilisée pour définir la hauteur d'une armoire informatique ou d'un équipement rackable ?",
    "choices": {
      "A": "Centimètre (cm)",
      "B": "Millimètre (mm)",
      "C": "Unité de rack (U)",
      "D": "Kilo (K)"
    },
    "correct": "C",
    "explanation": "<p>Dans le domaine des infrastructures réseaux et serveurs, la hauteur des équipements est normalisée selon une unité spécifique appelée <strong>'U' (Unité de rack)</strong>.</p><ul><li>Un <strong>U</strong> équivaut exactement à <strong>1,75 pouce</strong> (soit environ 44,45 mm).</li><li>Cette norme permet d'assurer une compatibilité universelle entre les serveurs, les switches, les bandeaux de prises et les baies informatiques de différents constructeurs.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le centimètre est une unité de mesure de longueur générale, mais il n'est pas utilisé pour normaliser le matériel informatique."
      },
      {
        "l": "B",
        "t": "Bien que la dimension d'un 'U' puisse être exprimée en millimètres (44,45 mm), ce n'est pas l'unité de référence standard pour quantifier la capacité d'une baie."
      },
      {
        "l": "D",
        "t": "Le 'K' n'a aucune signification en tant qu'unité de mesure de hauteur physique pour du matériel informatique ; il est généralement utilisé pour les capacités de stockage (Kilo-octets) ou de puissance."
      }
    ],
    "examiner": "Vérifier la connaissance des standards physiques de montage en rack dans un environnement serveur.",
    "summary": [
      "L'unité de mesure standard pour la hauteur en rack est le 'U'.",
      "1 U est égal à 1,75 pouce ou 44,45 millimètres.",
      "L'utilisation du U garantit l'interopérabilité entre différents équipements et baies.",
      "La hauteur d'une baie informatique est toujours exprimée en nombre d'unités (ex: baie 42U)."
    ]
  },
  {
    "num": "Q15",
    "partie": "Réseaux informatiques",
    "q": "Dans une architecture de câblage structuré, à quel élément le panneau de brassage est-il directement relié ?",
    "choices": {
      "A": "Directement aux postes de travail",
      "B": "Directement aux prises informatiques (prises RJ45 murales)",
      "C": "Directement à un autre panneau de brassage",
      "D": "Aucune des réponses proposées"
    },
    "correct": "B",
    "explanation": "<p>Dans une architecture de câblage structuré, le <strong>panneau de brassage</strong> (patch panel) constitue l'interface entre le câblage permanent du bâtiment et les équipements actifs.</p><ul><li>Le câble de type <strong>câble rigide</strong> est tiré dans les chemins de câbles et relie le panneau de brassage aux <strong>prises informatiques</strong> (ou prises RJ45 murales) installées dans les zones de travail.</li><li>Le brassage est ensuite réalisé via des cordons souples entre le panneau et les commutateurs (switchs).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le panneau de brassage n'est pas relié directement aux postes de travail, car il y a toujours une prise murale intermédiaire pour permettre une modularité du mobilier."
      },
      {
        "l": "C",
        "t": "Une liaison directe entre deux panneaux de brassage est possible dans certains cas de sous-répartition, mais ce n'est pas le rôle principal ni la définition standard du lien dans une architecture de câblage classique."
      },
      {
        "l": "D",
        "t": "Cette option est incorrecte car le lien avec les prises informatiques est le standard industriel de la distribution horizontale."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la topologie physique du câblage structuré et du rôle des composants passifs dans une baie de brassage.",
    "summary": [
      "Le panneau de brassage est le point de terminaison du câblage horizontal.",
      "Les câbles permanents relient les panneaux de brassage aux prises RJ45 murales.",
      "Le brassage permet d'interconnecter les prises murales aux équipements actifs (switchs).",
      "L'utilisation de prises intermédiaires garantit la pérennité et la maintenance du réseau."
    ]
  },
  {
    "num": "Q16",
    "partie": "Réseaux informatiques",
    "q": "Parmi les propositions suivantes, laquelle caractérise le plus précisément la fonction d'un service DHCP au sein d'un réseau ?",
    "choices": {
      "A": "Attribuer des adresses IP uniques aux hôtes d'un réseau.",
      "B": "Attribuer l'ensemble des paramètres de configuration TCP/IP aux hôtes d'un réseau.",
      "C": "Attribuer uniquement les serveurs DNS et les passerelles par défaut aux hôtes d'un réseau.",
      "D": "Attribuer des configurations TCP/IP statiques spécifiquement aux serveurs d'un réseau."
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>DHCP (Dynamic Host Configuration Protocol)</strong> est un protocole réseau dont le rôle principal est la configuration automatique des hôtes. Il ne se limite pas à la simple distribution d'adresses IP.</p><ul><li>Il fournit une adresse IP dynamique.</li><li>Il configure le masque de sous-réseau.</li><li>Il définit la passerelle par défaut (default gateway).</li><li>Il communique les adresses des serveurs DNS.</li></ul><p>Ainsi, il permet une gestion centralisée et dynamique de l'ensemble des <strong>paramètres TCP/IP</strong> nécessaires à la communication réseau d'un hôte.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que le DHCP attribue des adresses IP, cette réponse est incomplète car le DHCP fournit également d'autres paramètres essentiels (masque, DNS, passerelle)."
      },
      {
        "l": "C",
        "t": "Cette réponse est trop restrictive. Le DHCP ne sert pas uniquement aux DNS et aux passerelles, il gère également l'attribution de l'adresse IP elle-même."
      },
      {
        "l": "D",
        "t": "Les serveurs au sein d'un réseau utilisent généralement des adresses IP statiques (fixes) et non une configuration dynamique fournie par un serveur DHCP pour éviter les problèmes de disponibilité."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la portée complète du service DHCP, au-delà de la simple notion d'attribution d'adresses IP.",
    "summary": [
      "Le DHCP est un protocole de configuration automatique des hôtes sur un réseau.",
      "Il automatise la distribution des adresses IP, du masque, de la passerelle et des serveurs DNS.",
      "L'objectif est de simplifier l'administration réseau et d'éviter les conflits d'adresses.",
      "Les serveurs critiques utilisent majoritairement des configurations statiques plutôt que DHCP."
    ]
  },
  {
    "num": "Q17",
    "partie": "Réseaux informatiques",
    "q": "Quel protocole de la couche application est couramment utilisé pour permettre les transferts de fichiers entre un client et un serveur ?",
    "choices": {
      "A": "HTML",
      "B": "HTTP",
      "C": "FTP",
      "D": "Telnet"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>FTP (File Transfer Protocol)</strong> est spécifiquement conçu pour le transfert de fichiers sur un réseau TCP/IP.</p><ul><li>Il utilise une architecture client-serveur.</li><li>Il sépare le canal de contrôle (commandes) du canal de données pour optimiser les échanges.</li><li>Bien qu'il soit aujourd'hui souvent remplacé par des protocoles sécurisés comme SFTP ou FTPS, il reste la référence théorique pour le transfert de fichiers.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "HTML (HyperText Markup Language) est un langage de balisage utilisé pour structurer des pages web, et non un protocole de transfert."
      },
      {
        "l": "B",
        "t": "HTTP (HyperText Transfer Protocol) est principalement utilisé pour transférer des ressources web (pages, images, documents) via un navigateur, et non pour la gestion de fichiers bruts."
      },
      {
        "l": "D",
        "t": "Telnet est un protocole de communication utilisé pour permettre une connexion à distance sur un hôte, principalement via une interface en ligne de commande."
      }
    ],
    "examiner": "Évaluer la connaissance des protocoles de la couche Application du modèle OSI et leur fonction spécifique dans le transfert de données.",
    "summary": [
      "Le protocole FTP est dédié au transfert de fichiers entre clients et serveurs.",
      "HTML est un langage de description et non un protocole réseau.",
      "HTTP gère la consultation de ressources web, tandis que FTP gère l'échange de fichiers.",
      "Telnet permet l'administration à distance et n'est pas lié au transfert de fichiers."
    ]
  },
  {
    "num": "Q18",
    "partie": "Réseaux informatiques",
    "q": "Parmi les propositions suivantes concernant le rôle d'un serveur proxy, laquelle est fausse ?",
    "choices": {
      "A": "Le service proxy est techniquement indispensable pour accéder aux services web sur Internet.",
      "B": "Le service proxy permet d'optimiser l'accès aux ressources web sur Internet.",
      "C": "Le service proxy permet de filtrer l'accès au contenu web.",
      "D": "Le service proxy agit comme un serveur de cache pour les services web."
    },
    "correct": "A",
    "explanation": "<p>Un serveur proxy est un intermédiaire, mais <strong>il n'est en aucun cas une condition nécessaire</strong> à l'accès au web.</p><ul><li>Un ordinateur peut accéder directement à Internet via une passerelle (routeur) sans passer par un proxy.</li><li>Le proxy est utilisé pour des raisons de <strong>sécurité</strong> (filtrage), de <strong>performance</strong> (mise en cache) ou de <strong>contrôle</strong>.</li><li>Le cache proxy stocke des copies temporaires de pages web pour accélérer les accès futurs des utilisateurs internes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "C'est vrai : en mettant en cache les objets fréquemment demandés, le proxy réduit la latence et la bande passante consommée."
      },
      {
        "l": "C",
        "t": "C'est vrai : les entreprises utilisent souvent des proxys pour bloquer l'accès à certains sites ou catégories de contenus."
      },
      {
        "l": "D",
        "t": "C'est vrai : la mise en cache est l'une des fonctions fondamentales d'un proxy web pour optimiser le trafic."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la distinction entre les éléments essentiels à la connectivité réseau (comme l'adresse IP, le DNS ou la passerelle) et les services intermédiaires optionnels comme le proxy.",
    "summary": [
      "Un proxy est un serveur intermédiaire facultatif et non une nécessité technique.",
      "Le proxy est couramment utilisé pour le filtrage de contenu et la sécurité.",
      "La fonction de cache du proxy améliore les performances en réduisant le trafic réseau.",
      "L'accès direct au web est parfaitement possible sans passer par un serveur proxy."
    ]
  },
  {
    "num": "Q19",
    "partie": "Réseaux informatiques",
    "q": "Parmi les propositions suivantes, laquelle définit le rôle principal d'un service DNS (Domain Name System) ?",
    "choices": {
      "A": "Obtenir un nom de machine à partir d'une adresse IP",
      "B": "Obtenir une adresse IP à partir d'un nom de machine",
      "C": "Convertir les adresses MAC en adresses IP",
      "D": "Convertir un nom de domaine en adresse IP"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>DNS (Domain Name System)</strong> est un service réseau essentiel dont la fonction première est la résolution de noms.</p><ul><li>Il permet de traduire un <strong>nom d'hôte lisible par l'homme</strong> (ex: www.google.com) en une <strong>adresse IP</strong> compréhensible par les machines.</li><li>Bien que la réponse D soit proche, la réponse B est la formulation la plus complète et standard pour définir l'utilité du service du point de vue de l'utilisateur et du fonctionnement réseau.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci correspond à une requête DNS inverse (Reverse DNS), qui n'est pas la fonction primaire du DNS."
      },
      {
        "l": "C",
        "t": "La conversion d'adresses MAC en adresses IP est réalisée par le protocole RARP (Reverse ARP), et non par le DNS."
      },
      {
        "l": "D",
        "t": "Bien que techniquement exacte dans certains contextes, la réponse B est préférée car elle décrit le processus global de résolution de nom de machine vers une IP."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la couche application du modèle OSI et votre connaissance des protocoles de résolution de noms.",
    "summary": [
      "Le DNS est un annuaire distribué sur Internet.",
      "Sa fonction principale est la résolution de noms de domaine en adresses IP.",
      "Il permet de ne pas mémoriser des adresses IP complexes pour accéder aux services web.",
      "La résolution inverse (IP vers nom) existe également mais n'est pas la fonction dominante."
    ]
  },
  {
    "num": "Q20",
    "partie": "Réseaux informatiques",
    "q": "Quel masque de sous-réseau doit être attribué à l'adresse réseau 172.30.1.0 pour permettre l'hébergement d'au moins 254 hôtes ?",
    "choices": {
      "A": "255.255.0.0",
      "B": "255.255.255.128",
      "C": "255.255.255.0",
      "D": "255.255.254.0"
    },
    "correct": "C",
    "explanation": "<p>Pour calculer le nombre d'hôtes dans un sous-réseau, on utilise la formule <strong>2^n - 2</strong>, où <em>n</em> représente le nombre de bits alloués à la partie hôte.</p><ul><li>Pour <strong>254 hôtes</strong>, il faut trouver <em>n</em> tel que 2^n - 2 ≥ 254, soit 2^n ≥ 256, ce qui donne <strong>n = 8</strong>.</li><li>Avec un masque de 255.255.255.0 (/24), nous avons 8 bits pour les hôtes (32 - 24 = 8).</li><li>Le calcul donne 2^8 - 2 = 256 - 2 = <strong>254 hôtes utilisables</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un masque 255.255.0.0 (/16) autorise 65 534 hôtes, ce qui est inutilement large et gaspille l'espace d'adressage."
      },
      {
        "l": "B",
        "t": "Le masque 255.255.255.128 (/25) ne fournit que 126 adresses hôtes (2^7 - 2), ce qui est insuffisant pour 254 hôtes."
      },
      {
        "l": "D",
        "t": "Le masque 255.255.254.0 (/23) fournit 510 adresses hôtes, ce qui est correct mais non optimisé par rapport au besoin exprimé."
      }
    ],
    "examiner": "Évaluer la compréhension du candidat sur le calcul de sous-réseau (subnetting) et sa capacité à choisir le masque le plus efficace en fonction d'un nombre d'hôtes requis.",
    "summary": [
      "Le nombre d'hôtes se calcule avec la formule 2^n - 2.",
      "Un masque /24 (255.255.255.0) fournit exactement 254 adresses IP utilisables.",
      "Il est essentiel de choisir le masque le plus restrictif possible pour éviter le gaspillage d'adresses IP.",
      "Le bit 'n' représente les bits de la partie hôte à droite du masque."
    ]
  },
  {
    "num": "Q21",
    "partie": "Réseaux informatiques",
    "q": "Quel type de câble est spécifiquement requis pour établir une connexion de console depuis un ordinateur vers un routeur Cisco ?",
    "choices": {
      "A": "Câble Ethernet croisé (Crossover)",
      "B": "Câble Ethernet droit (Straight-through)",
      "C": "Câble à paires inversées (Rollover)",
      "D": "Câble série V.35"
    },
    "correct": "C",
    "explanation": "<p>Pour accéder à la console d'un équipement Cisco (routeur ou switch), on utilise un port série (ou un adaptateur USB-vers-série) relié au port console de l'appareil.</p><ul><li>Le <strong>câble à paires inversées</strong> (ou <em>rollover cable</em>) est le standard propriétaire de Cisco pour cette tâche.</li><li>Il se distingue visuellement par son connecteur RJ-45 plat, souvent de couleur bleu clair.</li><li>Son brochage inverse les fils entre les deux extrémités, permettant une communication asynchrone directe avec le processeur de gestion de l'équipement.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le câble croisé est utilisé pour connecter des équipements de même couche (ex: switch à switch), pas pour une console."
      },
      {
        "l": "B",
        "t": "Le câble droit est destiné à relier des équipements de couches différentes (ex: PC à switch), il ne convient pas au port console."
      },
      {
        "l": "D",
        "t": "Le câble V.35 est un câble série utilisé pour les connexions WAN synchrones (liaisons série entre routeurs), et non pour la configuration locale."
      }
    ],
    "examiner": "L'examinateur vérifie si le candidat connaît les spécificités du matériel Cisco et la distinction entre les types de câblage physique utilisés dans une infrastructure réseau.",
    "summary": [
      "La connexion console nécessite obligatoirement un câble à paires inversées (Rollover).",
      "Ce câble est spécifique aux équipements Cisco pour la gestion hors-bande.",
      "Les câbles Ethernet standard (droits ou croisés) ne permettent pas la connexion au port console.",
      "Le port console Cisco est un port série asynchrone, distinct des interfaces réseau RJ-45 classiques."
    ]
  },
  {
    "num": "Q22",
    "partie": "Réseaux informatiques",
    "q": "Quel est l'inconvénient majeur du protocole Telnet comparativement au protocole SSH ?",
    "choices": {
      "A": "Il est peu répandu au sein des infrastructures réseau.",
      "B": "Il ne prend pas en charge le chiffrement des données transmises.",
      "C": "Il présente une consommation de bande passante nettement supérieure.",
      "D": "Il ne permet aucune forme d'authentification des utilisateurs."
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>Telnet</strong> transmet les données, y compris les noms d'utilisateurs et les mots de passe, en <strong>clair</strong> (texte non chiffré) sur le réseau.</p><p>À l'inverse, le protocole <strong>SSH (Secure Shell)</strong> établit un tunnel sécurisé utilisant des mécanismes de <strong>chiffrement asymétrique et symétrique</strong> pour garantir la confidentialité et l'intégrité des informations échangées.</p><ul><li>Telnet est obsolète dans les environnements de production pour des raisons de sécurité évidentes.</li><li>SSH est le standard actuel pour l'administration distante sécurisée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est incorrect. Telnet a été très largement utilisé historiquement et reste supporté par de nombreux équipements réseau, bien que déconseillé."
      },
      {
        "l": "C",
        "t": "C'est incorrect. En termes de bande passante, Telnet est souvent plus léger que SSH car il n'ajoute pas de surcoût lié aux en-têtes de chiffrement."
      },
      {
        "l": "D",
        "t": "C'est incorrect. Telnet propose un mécanisme d'authentification (souvent basé sur le protocole TCP/IP), mais celle-ci est envoyée en clair, ce qui la rend vulnérable à l'interception."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension des enjeux de sécurité liés aux protocoles de communication réseau, en particulier la distinction entre les protocoles sécurisés (chiffrés) et les protocoles obsolètes (en clair).",
    "summary": [
      "Telnet transmet toutes les données en texte brut sur le réseau.",
      "SSH remplace Telnet car il assure le chiffrement de bout en bout de la connexion.",
      "L'utilisation de Telnet expose les identifiants et les données sensibles aux attaques par interception (sniffing).",
      "La sécurité des communications distantes est une priorité fondamentale en administration réseau."
    ]
  },
  {
    "num": "Q23",
    "partie": "Réseaux informatiques",
    "q": "Si la passerelle par défaut est mal configurée sur un hôte, quel sera l'impact sur ses capacités de communication ?",
    "choices": {
      "A": "L'hôte est incapable de communiquer avec n'importe quel équipement sur le réseau local.",
      "B": "L'hôte peut communiquer avec les autres équipements du réseau local, mais ne peut pas atteindre les hôtes situés sur des réseaux distants.",
      "C": "L'hôte peut communiquer avec les hôtes des réseaux distants, mais il est incapable de communiquer avec ceux du réseau local.",
      "D": "Il n'y aura aucun impact sur les communications de l'hôte."
    },
    "correct": "B",
    "explanation": "<p>La <strong>passerelle par défaut</strong> (default gateway) est l'adresse IP du routeur utilisée par un hôte pour transmettre des paquets destinés à un réseau extérieur à son propre sous-réseau.</p><ul><li><strong>Communications locales :</strong> L'hôte utilise l'adresse MAC (via le protocole ARP) pour communiquer directement avec les équipements de son segment réseau, sans passer par la passerelle.</li><li><strong>Communications distantes :</strong> Si l'adresse de destination n'est pas sur le même réseau (selon le masque de sous-réseau), l'hôte envoie les paquets vers la passerelle par défaut. Si celle-ci est mal configurée ou absente, les paquets ne peuvent pas quitter le réseau local.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les communications locales reposent sur la couche liaison de données (adresses MAC) et non sur la passerelle par défaut, qui n'intervient pas au sein du même sous-réseau."
      },
      {
        "l": "C",
        "t": "C'est l'inverse : sans passerelle, la communication avec les réseaux distants est impossible, mais celle avec le réseau local reste fonctionnelle."
      },
      {
        "l": "D",
        "t": "Une mauvaise configuration de la passerelle coupe impérativement l'accès à internet ou aux réseaux distants, il y a donc un impact majeur."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre les communications intra-réseau (locales) et inter-réseaux (distantes) ainsi que le rôle précis de la passerelle par défaut.",
    "summary": [
      "La passerelle par défaut est indispensable uniquement pour atteindre des réseaux distants.",
      "Les hôtes sur le même sous-réseau communiquent directement entre eux sans solliciter la passerelle.",
      "Une erreur de configuration de la passerelle isole l'hôte du reste du monde, mais pas de son voisinage local.",
      "La communication locale utilise la table ARP, tandis que la communication distante utilise la table de routage."
    ]
  },
  {
    "num": "Q24",
    "partie": "Réseaux informatiques",
    "q": "Quelle couche du modèle OSI fournit les services permettant à l'utilisateur final d'interagir directement avec les applications réseau ?",
    "choices": {
      "A": "Session",
      "B": "Réseau",
      "C": "Présentation",
      "D": "Application"
    },
    "correct": "D",
    "explanation": "<p>La <strong>couche Application</strong> (couche 7 du modèle OSI) est l'interface directe avec l'utilisateur et ses logiciels (navigateurs web, clients mail, etc.).</p><p>Elle ne fournit pas de services aux autres couches du modèle OSI, mais interagit directement avec les applications logicielles pour initier des processus de communication.</p><ul><li>Les autres couches fournissent des services de support (adressage, routage, chiffrement, gestion des sessions) qui restent transparents pour l'utilisateur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La couche Session gère le dialogue entre les applications, mais n'est pas le point d'interaction direct de l'utilisateur."
      },
      {
        "l": "B",
        "t": "La couche Réseau s'occupe du routage et de l'adressage logique des paquets, loin des préoccupations de l'utilisateur."
      },
      {
        "l": "C",
        "t": "La couche Présentation gère la syntaxe, le chiffrement et la compression des données avant leur transmission."
      }
    ],
    "examiner": "Évaluer la compréhension de la hiérarchie du modèle OSI et le rôle spécifique de la couche 7 dans la communication réseau.",
    "summary": [
      "La couche Application est la couche la plus proche de l'utilisateur.",
      "Elle est le point d'entrée pour les services réseau (HTTP, FTP, SMTP).",
      "Les couches inférieures du modèle OSI assurent le transport et la gestion technique, mais pas l'interaction directe avec l'utilisateur final.",
      "Comprendre cette distinction est crucial pour le dépannage réseau."
    ]
  },
  {
    "num": "Q25",
    "partie": "Réseaux informatiques",
    "q": "Un administrateur réseau souhaite connecter deux routeurs entre eux via leurs ports FastEthernet respectifs. Quel type de câble doit-il utiliser pour assurer une liaison directe ?",
    "choices": {
      "A": "Câble droit (Straight-through)",
      "B": "Câble console (Rollover/Inversé)",
      "C": "Câble série",
      "D": "Câble croisé (Crossover)"
    },
    "correct": "D",
    "explanation": "<p>Pour connecter deux équipements terminaux ou deux équipements réseau de même couche (comme deux routeurs ou deux commutateurs) directement, il est nécessaire d'utiliser un <strong>câble croisé</strong>.</p><p>Le croisement permet d'inverser les fils de transmission (TX) et de réception (RX) afin que le signal envoyé par l'un soit reçu sur le port d'entrée de l'autre. Aujourd'hui, grâce à la technologie <strong>Auto-MDIX</strong>, la plupart des équipements modernes détectent automatiquement le type de câble, mais sur les interfaces FastEthernet anciennes ou dans un contexte théorique, le câble croisé est la réponse standard pour ce scénario.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le câble droit est conçu pour connecter des équipements de couches différentes (par exemple, un routeur vers un switch ou un PC vers un switch)."
      },
      {
        "l": "B",
        "t": "Le câble console (ou inversé) est utilisé uniquement pour la configuration initiale d'un équipement via son port série dédié (Console), et non pour le trafic réseau."
      },
      {
        "l": "C",
        "t": "Le câble série est utilisé pour les connexions WAN longue distance entre routeurs, généralement via des interfaces V.35, et non pour des liaisons Ethernet locales."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier vos connaissances sur le câblage physique des réseaux locaux et la compréhension de la distinction entre équipements DTE et DCE, ainsi que la configuration des paires de fils dans un câble RJ45.",
    "summary": [
      "Un câble croisé est nécessaire pour connecter deux équipements de même nature (DTE vers DTE).",
      "Le câble droit est réservé aux connexions entre équipements de natures différentes (DTE vers DCE).",
      "La technologie Auto-MDIX rend le choix du câble moins critique sur les équipements récents.",
      "Le câble console ne transporte pas de données réseau mais uniquement des commandes de gestion."
    ]
  },
  {
    "num": "Q26",
    "partie": "Réseaux informatiques",
    "q": "Dans un environnement présentant des risques électriques élevés ou des perturbations électromagnétiques importantes, quel type de support de transmission est recommandé pour le câblage d'infrastructure ?",
    "choices": {
      "A": "Câblage coaxial",
      "B": "Câblage à paire torsadée non blindée (UTP) Cat5e",
      "C": "Fibre optique",
      "D": "Câblage à paire torsadée blindée (STP)"
    },
    "correct": "C",
    "explanation": "<p>La <strong>fibre optique</strong> est le support idéal dans des environnements électriquement hostiles pour les raisons suivantes :</p><ul><li><strong>Immunité électromagnétique :</strong> Contrairement aux câbles en cuivre qui transmettent des signaux électriques sensibles aux interférences (EMI/RFI), la fibre utilise des impulsions lumineuses.</li><li><strong>Isolation galvanique :</strong> Le verre étant un matériau isolant, la fibre empêche tout risque de propagation de surtensions électriques ou de différences de potentiel entre les bâtiments.</li><li><strong>Performance :</strong> Elle offre une bande passante supérieure et une atténuation beaucoup plus faible sur longue distance.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le câble coaxial est sensible aux interférences électromagnétiques et est aujourd'hui obsolète pour les infrastructures de réseau local moderne."
      },
      {
        "l": "B",
        "t": "Le câble UTP (non blindé) est extrêmement vulnérable aux interférences électromagnétiques externes et n'offre aucune protection contre les risques électriques."
      },
      {
        "l": "D",
        "t": "Bien que le blindage (STP) réduise les interférences, il reste un conducteur métallique. En cas de foudre ou de forte tension, il peut transporter des courants dangereux et ne résout pas totalement les problèmes d'isolation galvanique."
      }
    ],
    "examiner": "L'examinateur évalue votre connaissance des supports de transmission et de leur comportement face aux contraintes environnementales (perturbations électromagnétiques et risques électriques).",
    "summary": [
      "La fibre optique est insensible aux interférences électromagnétiques car elle transmet des données via la lumière.",
      "Elle assure une isolation galvanique totale, protégeant ainsi les équipements contre les surtensions.",
      "Les câbles en cuivre, même blindés, restent conducteurs et sensibles aux environnements à fort rayonnement.",
      "Le choix du support de transmission est une étape critique lors de la conception d'une infrastructure réseau."
    ]
  },
  {
    "num": "Q27",
    "partie": "Réseaux informatiques",
    "q": "Quelle caractéristique physique du câble à paires torsadées non blindées (UTP) permet de limiter les interférences électromagnétiques (EMI) et la diaphonie ?",
    "choices": {
      "A": "Le métal tressé du blindage",
      "B": "L’enveloppe réfléchissante entourant la partie centrale",
      "C": "La torsade des fils du câble",
      "D": "Le matériau isolant de la gaine extérieure"
    },
    "correct": "C",
    "explanation": "<p>La conception du câble <strong>UTP (Unshielded Twisted Pair)</strong> repose sur le principe du torsadage des fils de cuivre.</p><p>Cette technique permet de réduire les interférences pour deux raisons principales :</p><ul><li><strong>Annulation du bruit :</strong> En torsadant les fils, les interférences électromagnétiques externes affectent les deux fils de manière identique, créant un signal de mode commun qui est annulé lors de la réception.</li><li><strong>Réduction de la diaphonie (crosstalk) :</strong> Le torsadage réduit le couplage magnétique entre les paires adjacentes à l'intérieur du même câble.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le câble UTP ne possède pas de blindage métallique (contrairement au STP ou FTP). Le blindage est une méthode différente pour contrer les interférences."
      },
      {
        "l": "B",
        "t": "Une enveloppe réfléchissante est typique des câbles coaxiaux (pour protéger le conducteur central), pas des câbles à paires torsadées."
      },
      {
        "l": "D",
        "t": "La gaine extérieure (généralement en PVC ou LSZH) protège contre les dommages physiques et l'humidité, mais ne joue aucun rôle dans l'atténuation des interférences électromagnétiques."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur les mécanismes physiques permettant l'intégrité du signal dans les supports de transmission cuivre.",
    "summary": [
      "Le câble UTP utilise le torsadage des paires pour annuler les interférences électromagnétiques.",
      "Le torsadage permet de réduire la diaphonie entre les paires adjacentes.",
      "Contrairement au STP, l'UTP ne repose pas sur un blindage métallique pour se protéger des EMI.",
      "L'intégrité du signal dans le cuivre est primordiale pour garantir des débits élevés dans les réseaux Ethernet."
    ]
  },
  {
    "num": "Q28",
    "partie": "Réseaux informatiques",
    "q": "Un administrateur réseau doit sélectionner un support de transmission capable d'atteindre une distance de 100 mètres sans répéteur, tout en respectant des contraintes de coût réduit, de facilité d'installation et d'encombrement limité dans un bâtiment existant. Quel support est le plus adapté ?",
    "choices": {
      "A": "Câblage STP (Shielded Twisted Pair)",
      "B": "Câblage UTP (Unshielded Twisted Pair)",
      "C": "Câblage coaxial",
      "D": "Fibre optique multimode"
    },
    "correct": "B",
    "explanation": "<p>La réponse correcte est le <strong>câblage UTP (paires torsadées non blindées)</strong>. Voici pourquoi :</p><ul><li><strong>Distance :</strong> Les standards Ethernet (type 10/100/1000Base-T) autorisent une longueur maximale de 100 mètres pour le câble UTP.</li><li><strong>Coût et installation :</strong> L'UTP est le support le moins coûteux et le plus flexible à installer, ce qui facilite le passage dans des conduits étroits.</li><li><strong>Comparaison :</strong> La fibre optique (D) est plus coûteuse et complexe à installer (terminaisons, fragilité). Le STP (A) est plus encombrant et nécessite une mise à la terre. Le coaxial (C) est obsolète, rigide et difficile à intégrer dans les infrastructures modernes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le câble STP est plus rigide, plus épais et plus onéreux en raison de son blindage, ce qui le rend moins idéal que l'UTP pour un espace limité."
      },
      {
        "l": "C",
        "t": "Le câble coaxial est encombrant, rigide et largement considéré comme obsolète pour le câblage de niveau accès dans les réseaux modernes."
      },
      {
        "l": "D",
        "t": "La fibre multimode supporte de plus grandes distances mais représente un surcoût important et une complexité d'installation non nécessaire pour seulement 100 mètres."
      }
    ],
    "examiner": "Évaluer la capacité du candidat à choisir le support physique de transmission optimal en fonction des contraintes de coût, de distance et d'ergonomie d'installation.",
    "summary": [
      "Le câblage UTP est le standard pour les réseaux locaux sur des distances allant jusqu'à 100 mètres.",
      "Il offre le meilleur compromis entre coût, flexibilité et facilité d'installation.",
      "Les câbles blindés (STP) sont réservés aux environnements à fortes perturbations électromagnétiques.",
      "La fibre optique est privilégiée pour les liaisons inter-bâtiments ou les besoins de très haut débit sur longue distance."
    ]
  },
  {
    "num": "Q29",
    "partie": "Réseaux informatiques",
    "q": "Parmi les outils suivants, lequel permet de visualiser l'itinéraire complet suivi par un paquet IP vers une destination donnée ?",
    "choices": {
      "A": "telnet",
      "B": "ping",
      "C": "tracert",
      "D": "nslookup"
    },
    "correct": "C",
    "explanation": "<p>L'outil <strong>tracert</strong> (ou <strong>traceroute</strong> sous les systèmes Unix/Linux) est conçu spécifiquement pour identifier le chemin réseau emprunté par un paquet entre l'émetteur et la destination. Il fonctionne en envoyant des paquets avec des valeurs <strong>TTL (Time To Live)</strong> croissantes, forçant chaque routeur traversé à renvoyer un message d'erreur ICMP 'Time Exceeded', ce qui permet d'isoler chaque saut (hop) du trajet.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Telnet est un protocole de communication utilisé pour accéder à des terminaux distants, et non pour diagnostiquer le routage."
      },
      {
        "l": "B",
        "t": "La commande ping permet de vérifier la connectivité et la latence entre deux hôtes, mais ne donne aucune information sur les routeurs intermédiaires traversés."
      },
      {
        "l": "D",
        "t": "Nslookup est un utilitaire de ligne de commande utilisé pour interroger les serveurs DNS afin d'obtenir des informations sur les enregistrements de noms de domaine."
      }
    ],
    "examiner": "Évaluer la maîtrise des outils de diagnostic réseau et la compréhension du mécanisme de routage IP.",
    "summary": [
      "Tracert/Traceroute est l'outil de référence pour tracer le chemin réseau (sauts) vers une cible.",
      "Il repose sur le mécanisme de TTL (Time To Live) des paquets IP.",
      "Ping vérifie la connectivité simple, tandis que Tracert analyse la topologie du chemin.",
      "Nslookup est exclusivement dédié à la résolution de noms DNS."
    ]
  },
  {
    "num": "Q30",
    "partie": "Réseaux informatiques",
    "q": "De quelle manière est-il possible de configurer le réseau sous un système d'exploitation Linux ?",
    "choices": {
      "A": "Uniquement en ligne de commande.",
      "B": "Uniquement de manière graphique.",
      "C": "À la fois en ligne de commande et via une interface graphique.",
      "D": "Uniquement avec l'utilitaire obsolète 'ifconfig'."
    },
    "correct": "C",
    "explanation": "<p>La configuration réseau sous Linux est extrêmement flexible. Elle peut être réalisée de plusieurs manières selon la distribution utilisée et le niveau d'expertise de l'administrateur :</p><ul><li><strong>Ligne de commande :</strong> Utilisation d'outils modernes (<code>iproute2</code>, <code>nmcli</code>) ou anciens (<code>ifconfig</code>), ainsi que la modification directe des fichiers de configuration (ex: <code>/etc/network/interfaces</code> ou <code>/etc/netplan/</code>).</li><li><strong>Interface graphique (GUI) :</strong> Des outils comme NetworkManager ou des interfaces spécifiques aux environnements de bureau (GNOME, KDE) permettent une gestion simplifiée via des menus déroulants.</li></ul><p>Il n'existe aucune restriction imposant une méthode unique.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Réducteur : Linux ne limite pas l'administration réseau à la console ; de nombreuses interfaces graphiques existent pour faciliter cette tâche."
      },
      {
        "l": "B",
        "t": "Réducteur : Si les interfaces graphiques existent, elles ne sont pas obligatoires, et la ligne de commande reste le standard pour les serveurs."
      },
      {
        "l": "D",
        "t": "Inexact : 'ifconfig' est aujourd'hui déprécié au profit de la suite 'iproute2' et ne constitue qu'un outil parmi une multitude d'autres possibilités."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'étudiant comprend la polyvalence de l'écosystème Linux et s'il est au courant que la gestion système n'est pas restreinte à une seule méthode d'interaction.",
    "summary": [
      "La configuration réseau sous Linux est polyvalente et adaptable.",
      "Il est possible d'utiliser aussi bien des outils en ligne de commande que des interfaces graphiques.",
      "L'utilisation de 'ifconfig' est déconseillée car il est remplacé par des outils plus modernes comme 'ip'.",
      "La flexibilité est une caractéristique fondamentale de l'administration système sous Linux."
    ]
  }
];
