const QCM = [
  {
    "num": "Q1",
    "partie": "Réseau",
    "q": "Veuillez fournir la question à traiter, car le texte fourni ne contient que les en-têtes.",
    "choices": {
      "A": "Information manquante",
      "B": "Veuillez insérer le contenu de la question",
      "C": "Le format actuel est incomplet",
      "D": "En attente de vos données"
    },
    "correct": "D",
    "explanation": "<p>Le texte fourni dans votre demande ne contient pas l'énoncé d'une question spécifique. Pour que je puisse générer une analyse pédagogique pertinente, veuillez me transmettre le texte complet incluant <strong>l'énoncé</strong>, les <strong>options</strong> et l'indication de la <strong>réponse correcte</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette option souligne simplement le problème technique de l'absence de contenu."
      },
      {
        "l": "B",
        "t": "Ceci est une invitation à fournir les données nécessaires pour l'analyse."
      },
      {
        "l": "C",
        "t": "Le format brut fourni était limité à des en-têtes sans données exploitables."
      }
    ],
    "examiner": "Évaluer la capacité de l'utilisateur à fournir les informations nécessaires au traitement d'une tâche.",
    "summary": [
      "Aucun énoncé n'a été détecté dans l'extrait fourni.",
      "Le système est prêt à traiter une question réseau dès que le contenu sera transmis.",
      "Merci de copier-coller la question, les choix et le corrigé pour obtenir l'analyse détaillée."
    ]
  },
  {
    "num": "Q2",
    "partie": "Réseau",
    "q": "Qu'est-ce qu'un DNS ?",
    "choices": {
      "A": "Un serveur jouant le rôle d'un annuaire",
      "B": "Un site dynamique de sécurité informatique",
      "C": "Une base de données concentrant des documents officiels protégés",
      "D": "Un serveur de données de type encyclopédie"
    },
    "correct": "A",
    "explanation": "<p>Le <strong>DNS</strong> (Domain Name System) est un protocole fondamental d'Internet. Son rôle principal est la traduction des noms de domaine (lisibles par l'humain, comme www.google.com) en adresses IP (lisibles par les machines, comme 142.250.179.132).</p><p>On le compare souvent à un <strong>annuaire téléphonique</strong> : au lieu de retenir des chiffres complexes (adresses IP), on retient des noms simples, et le serveur DNS se charge de faire la correspondance.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le DNS ne concerne pas la sécurité en tant que site, mais la résolution de noms de domaine au niveau infrastructure réseau."
      },
      {
        "l": "C",
        "t": "Le DNS ne stocke pas de documents officiels, il stocke des enregistrements techniques (A, AAAA, MX, CNAME) pour localiser des ressources sur le réseau."
      },
      {
        "l": "D",
        "t": "Bien qu'il puisse être vu comme une base de données de correspondances, il ne s'agit pas d'une encyclopédie de contenu ou de données métiers."
      }
    ],
    "examiner": "Vérifier la compréhension des protocoles fondamentaux du réseau et la capacité à définir le rôle de l'infrastructure de résolution de noms.",
    "summary": [
      "Le DNS signifie Domain Name System.",
      "Il agit comme l'annuaire d'Internet.",
      "Sa fonction principale est de convertir les noms de domaine en adresses IP.",
      "Il permet aux utilisateurs de naviguer sur le Web sans mémoriser d'adresses IP complexes."
    ]
  },
  {
    "num": "Q3",
    "partie": "Réseau",
    "q": "Quelles sont parmi ces affirmations, celles qui caractérisent un Intranet ?",
    "choices": {
      "A": "Un Intranet est un réseau plus performant que le réseau Internet",
      "B": "Un Intranet est un réseau privé accessible de l'extérieur par identification",
      "C": "Un Intranet est un réseau privé non accessible depuis l'extérieur",
      "D": "Un Intranet est un réseau fonctionnant sur les mêmes principes que l'Internet"
    },
    "correct": "B, C, D",
    "explanation": "<p>Un <strong>Intranet</strong> est un réseau informatique utilisé au sein d'une organisation pour communiquer et partager des ressources.</p><ul><li><strong>Technologie :</strong> Il utilise les mêmes protocoles et technologies que le Web (TCP/IP, HTTP, serveurs Web).</li><li><strong>Accessibilité :</strong> Par définition, c'est un réseau <em>privé</em>. S'il est strictement isolé, il n'est pas accessible de l'extérieur (C). Cependant, avec des protocoles de sécurité (VPN, passerelles), il peut être accessible à distance par identification (B).</li><li><strong>Performance :</strong> Dire qu'il est \"plus performant\" est une généralité fausse car cela dépend entièrement de l'infrastructure matérielle interne.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La performance d'un réseau dépend de son infrastructure physique (fibre, commutation) et non de sa nature d'Intranet ou d'Internet."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension des concepts de base des réseaux d'entreprise, la distinction entre architecture publique et privée, et la connaissance des protocoles communs.",
    "summary": [
      "Un Intranet repose sur les standards technologiques d'Internet (TCP/IP, HTTP).",
      "Il s'agit d'un réseau privé réservé à une organisation.",
      "L'accès depuis l'extérieur est possible via des mécanismes de sécurité comme le VPN.",
      "La notion de performance est indépendante du terme Intranet."
    ]
  },
  {
    "num": "Q4",
    "partie": "Réseau",
    "q": "Qu'est-ce que le Wifi ?",
    "choices": {
      "A": "Un réseau sans fil",
      "B": "Un réseau Internet passant par le réseau téléphonique",
      "C": "Un réseau de téléphone mobile type ADSL",
      "D": "Un réseau virtuel sécurisé"
    },
    "correct": "A",
    "explanation": "<p>Le <strong>Wi-Fi</strong> (Wireless Fidelity) est une technologie de communication <strong>sans fil</strong> basée sur les normes IEEE 802.11. Il permet de relier des appareils informatiques (ordinateurs, tablettes, smartphones) entre eux ou à un point d'accès pour accéder à un réseau local ou à Internet, sans nécessiter de connexion physique par câble.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le Wi-Fi ne passe pas par le réseau téléphonique (cuivre), c'est une liaison radiofréquence locale."
      },
      {
        "l": "C",
        "t": "L'ADSL est une technologie de connexion filaire utilisant les lignes téléphoniques, ce qui est l'opposé du concept de Wi-Fi."
      },
      {
        "l": "D",
        "t": "Un réseau virtuel sécurisé désigne généralement un VPN (Virtual Private Network), et non la technologie de transmission Wi-Fi."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension des concepts de base des technologies de connectivité et la distinction entre transmission sans fil et infrastructures filaires.",
    "summary": [
      "Le Wi-Fi est une technologie de réseau local sans fil (WLAN).",
      "Il utilise les ondes radio pour transmettre des données.",
      "Il s'oppose aux technologies filaires comme l'Ethernet ou l'ADSL.",
      "Le Wi-Fi est régi par la famille de normes IEEE 802.11."
    ]
  },
  {
    "num": "Q5",
    "partie": "Réseau",
    "q": "Ethernet est un réseau de type :",
    "choices": {
      "A": "Local",
      "B": "Métropolitain",
      "C": "Distant",
      "D": "Virtuel"
    },
    "correct": "A",
    "explanation": "<p>Le terme <strong>Ethernet</strong> désigne une famille de technologies de réseaux informatiques pour les <strong>réseaux locaux (LAN - Local Area Network)</strong>.</p><p>Il repose sur la norme IEEE 802.3, qui définit les spécifications des couches physique et liaison de données pour le câblage et la signalisation dans des environnements géographiquement restreints comme une maison, un bureau ou un bâtiment.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Un réseau métropolitain (MAN) couvre une zone plus large qu'un LAN, typiquement l'échelle d'une ville."
      },
      {
        "l": "C",
        "t": "Un réseau distant (WAN) interconnecte des LAN sur de grandes distances géographiques (pays ou continents), ce qui n'est pas le but initial d'Ethernet."
      },
      {
        "l": "D",
        "t": "Un réseau virtuel (VLAN) est une segmentation logique au sein d'un réseau physique, ce n'est pas une classification de portée géographique ou technologique fondamentale."
      }
    ],
    "examiner": "Évaluer la compréhension de la classification des réseaux selon leur portée géographique (LAN, MAN, WAN) et la définition fondamentale de la technologie Ethernet.",
    "summary": [
      "Ethernet est la technologie standard pour les réseaux locaux (LAN).",
      "La portée géographique d'un LAN est généralement limitée à un bâtiment ou un campus.",
      "Il est défini par la norme IEEE 802.3.",
      "Les réseaux MAN et WAN utilisent d'autres technologies pour couvrir des distances plus importantes."
    ]
  },
  {
    "num": "Q6",
    "partie": "Réseau",
    "q": "Qu'est-ce qu'un commutateur réseau (switch) ?",
    "choices": {
      "A": "Un transformateur",
      "B": "Un commutateur",
      "C": "Un concentrateur",
      "D": "Un modulateur"
    },
    "correct": "B",
    "explanation": "<p>Un <strong>switch</strong> (ou commutateur réseau) est un équipement d'interconnexion réseau qui permet de relier plusieurs segments (ordinateurs, imprimantes, serveurs) au sein d'un même réseau local (LAN).</p><p>Contrairement aux équipements plus anciens comme les concentrateurs (hubs), le switch analyse les adresses MAC des trames Ethernet pour diriger les données uniquement vers le port de destination concerné, optimisant ainsi la bande passante et réduisant les collisions.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un transformateur est un composant électrique servant à modifier la tension d'un courant alternatif, il n'a aucun rôle dans la commutation de données informatiques."
      },
      {
        "l": "C",
        "t": "Un concentrateur (hub) est un équipement réseau obsolète qui diffuse les données reçues sur tous ses ports, sans distinction, contrairement au switch qui est intelligent."
      },
      {
        "l": "D",
        "t": "Un modulateur est un dispositif utilisé pour transformer un signal numérique en un signal analogique (ou inversement), comme dans le cas des modems."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur les équipements d'interconnexion réseau de niveau 2 du modèle OSI et la distinction entre concentrateur et commutateur.",
    "summary": [
      "Un switch est un équipement réseau opérant au niveau de la couche 2 (liaison de données).",
      "Il utilise les adresses MAC pour segmenter le trafic de manière intelligente.",
      "Il diffère du hub (concentrateur) par sa capacité à diriger le flux de données uniquement vers le destinataire.",
      "Le switch permet d'améliorer significativement les performances et la sécurité d'un réseau local."
    ]
  },
  {
    "num": "Q7",
    "partie": "Réseau",
    "q": "Combien de couches comporte le modèle OSI (Open Systems Interconnection) ?",
    "choices": {
      "A": "3",
      "B": "6",
      "C": "4",
      "D": "7"
    },
    "correct": "D",
    "explanation": "<p>Le modèle <strong>OSI</strong> est un standard théorique qui décompose les communications réseau en <strong>7 couches distinctes</strong>, chacune ayant un rôle spécifique :</p><ul><li>Couche 7 : Application</li><li>Couche 6 : Présentation</li><li>Couche 5 : Session</li><li>Couche 4 : Transport</li><li>Couche 3 : Réseau</li><li>Couche 2 : Liaison de données</li><li>Couche 1 : Physique</li></ul><p>Cette structuration permet une interopérabilité entre les systèmes de différents constructeurs.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le chiffre 3 correspond souvent à une simplification ou est totalement erroné dans le contexte du modèle OSI standard."
      },
      {
        "l": "B",
        "t": "Le chiffre 6 est incorrect ; le modèle OSI est strictement défini avec 7 couches."
      },
      {
        "l": "C",
        "t": "Le chiffre 4 est souvent confondu avec les couches du modèle TCP/IP, qui possède effectivement 4 couches (ou 5 selon les modèles)."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la connaissance fondamentale de l'architecture réseau théorique et la capacité à distinguer le modèle OSI du modèle TCP/IP.",
    "summary": [
      "Le modèle OSI est composé de 7 couches normalisées par l'ISO.",
      "La couche 1 est la couche physique et la couche 7 est la couche application.",
      "Il ne faut pas confondre le modèle OSI (7 couches) avec le modèle TCP/IP (4 ou 5 couches).",
      "Chaque couche apporte des services à la couche supérieure tout en utilisant les services de la couche inférieure."
    ]
  },
  {
    "num": "Q8",
    "partie": "Réseau",
    "q": "Quelle est la fonction attribuée à la couche 3 dans le modèle OSI ?",
    "choices": {
      "A": "Couche Transport",
      "B": "Couche Liaison de données",
      "C": "Couche Réseau",
      "D": "Couche Session"
    },
    "correct": "C",
    "explanation": "<p>Le modèle OSI (Open Systems Interconnection) est structuré en 7 couches hiérarchiques. La <strong>couche 3</strong>, appelée <strong>couche Réseau</strong>, est responsable de l'adressage logique et du routage des paquets à travers les différents réseaux.</p><ul><li>La couche 2 (Liaison) gère l'adressage physique (MAC).</li><li>La couche 4 (Transport) gère le contrôle de bout en bout et la fiabilité.</li><li>La couche 5 (Session) gère les dialogues entre applications.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La couche Transport est la couche 4 du modèle OSI, elle gère le flux de données et la correction d'erreurs de bout en bout."
      },
      {
        "l": "B",
        "t": "La couche Liaison de données est la couche 2 du modèle OSI, elle s'occupe du transfert de données entre deux nœuds adjacents via des adresses MAC."
      },
      {
        "l": "D",
        "t": "La couche Session est la couche 5 du modèle OSI, elle gère l'établissement, le maintien et la terminaison des sessions entre les applications."
      }
    ],
    "examiner": "Évaluer la maîtrise des bases théoriques du modèle en couches OSI et la capacité à identifier la fonction spécifique de chaque niveau.",
    "summary": [
      "Le modèle OSI est composé de 7 couches distinctes.",
      "La couche 3 est la couche Réseau.",
      "La mission principale de la couche 3 est le routage et l'adressage logique (IP).",
      "Il est essentiel de retenir l'ordre séquentiel des couches pour comprendre le fonctionnement des communications réseaux."
    ]
  },
  {
    "num": "Q9",
    "partie": "Réseau",
    "q": "À quelle classe d'adresses IP correspond le masque de sous-réseau par défaut 255.255.0.0 ?",
    "choices": {
      "A": "Classe B",
      "B": "Classe C",
      "C": "Classe D",
      "D": "Classe A"
    },
    "correct": "A",
    "explanation": "<p>Dans le système de classification par classes des adresses IPv4 (classful networking), les masques par défaut sont définis comme suit :</p><ul><li><strong>Classe A :</strong> 255.0.0.0 (/8)</li><li><strong>Classe B :</strong> 255.255.0.0 (/16)</li><li><strong>Classe C :</strong> 255.255.255.0 (/24)</li></ul><p>Le masque 255.255.0.0 indique que les deux premiers octets sont réservés au réseau, ce qui définit une adresse de classe B.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La classe C utilise le masque par défaut 255.255.255.0."
      },
      {
        "l": "C",
        "t": "La classe D est réservée au multicast et ne possède pas de masque de sous-réseau traditionnel."
      },
      {
        "l": "D",
        "t": "La classe A utilise le masque par défaut 255.0.0.0."
      }
    ],
    "examiner": "Évaluer la compréhension des classes d'adresses IP privées/publiques et la structure des masques de sous-réseau par défaut.",
    "summary": [
      "Les classes d'adresses IP suivent une structure de masques par défaut spécifique.",
      "La Classe A utilise un préfixe /8 (255.0.0.0).",
      "La Classe B utilise un préfixe /16 (255.255.0.0).",
      "La Classe C utilise un préfixe /24 (255.255.255.0).",
      "Identifier ces masques est essentiel pour le découpage en sous-réseaux (subnetting)."
    ]
  },
  {
    "num": "Q10",
    "partie": "Réseau",
    "q": "Pour une adresse IP de classe B, quel est le nombre théorique maximal de sous-réseaux utilisables en utilisant le masque de sous-réseau par défaut ?",
    "choices": {
      "A": "32384",
      "B": "16384",
      "C": "12464",
      "D": "24694"
    },
    "correct": "B",
    "explanation": "<p>Une adresse IP de classe B possède 16 bits dédiés à la partie réseau (netid) et 16 bits dédiés à la partie hôte (hostid). Par définition, un sous-réseau est créé en empruntant des bits à la partie hôte.</p><p>Dans le cas d'une classe B, si l'on considère la segmentation classique en sous-réseaux, le calcul repose sur les puissances de 2. Le nombre de sous-réseaux possibles en utilisant 14 bits pour le sous-réseautage (en laissant 2 bits pour les hôtes) est de <strong>2^14 = 16 384</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette valeur ne correspond à aucune puissance de 2 pertinente pour le masquage de classe B."
      },
      {
        "l": "C",
        "t": "Cette valeur est arbitraire et ne résulte d'aucun calcul binaire standard lié au masquage IP."
      },
      {
        "l": "D",
        "t": "Cette valeur ne présente pas de corrélation mathématique avec la structure des adresses IPv4 de classe B."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la structure binaire des classes d'adresses IP et la capacité à calculer le nombre de combinaisons possibles lors de la création de sous-réseaux.",
    "summary": [
      "Une classe B dispose de 16 bits pour les hôtes.",
      "La formule de calcul du nombre de sous-réseaux est 2^n, où n est le nombre de bits empruntés.",
      "Pour 14 bits empruntés, le résultat est 16 384 sous-réseaux.",
      "La maîtrise du passage du binaire au décimal est essentielle pour le calcul de sous-réseautage (subnetting)."
    ]
  },
  {
    "num": "Q11",
    "partie": "Réseau",
    "q": "Parmi les caractéristiques suivantes, laquelle s'applique fondamentalement à une adresse IP ?",
    "choices": {
      "A": "Elle utilise toujours une adresse de 32 bits.",
      "B": "Elle dispose nativement d'un système de conversion de noms d'hôtes amélioré.",
      "C": "Elle doit être unique au sein du réseau pour assurer un routage correct.",
      "D": "Elle est systématiquement fournie par le fournisseur d'accès à Internet."
    },
    "correct": "C",
    "explanation": "<p>L'adresse IP (Internet Protocol) sert d'identifiant unique pour un appareil sur un réseau IP. <strong>L'unicité</strong> est une condition sine qua non pour que les paquets de données puissent être acheminés vers la bonne destination sans conflit.</p><ul><li><strong>A est faux :</strong> L'affirmation est trop restrictive car elle ignore IPv6, qui utilise 128 bits.</li><li><strong>B est faux :</strong> La conversion de noms (DNS) est un service distinct et non une propriété intrinsèque de l'adresse IP.</li><li><strong>D est faux :</strong> Une adresse IP peut être attribuée statiquement par un administrateur réseau ou localement, elle ne provient pas nécessairement d'un FAI.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette description ne concerne que l'IPv4, excluant l'IPv6."
      },
      {
        "l": "B",
        "t": "La résolution de noms est gérée par le protocole DNS, pas par l'adresse IP elle-même."
      },
      {
        "l": "D",
        "t": "Les adresses IP peuvent être privées, statiques ou attribuées via DHCP, pas seulement par un FAI."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension fondamentale du rôle de l'adressage logique dans la connectivité réseau et la distinction entre IPv4 et IPv6.",
    "summary": [
      "Une adresse IP est un identifiant logique unique nécessaire pour la communication sur un réseau.",
      "L'unicité est critique pour éviter les conflits et permettre le routage des données.",
      "L'IPv4 utilise 32 bits, tandis que l'IPv6 utilise 128 bits.",
      "Le DNS est le service responsable de la conversion des noms d'hôtes en adresses IP."
    ]
  },
  {
    "num": "Q12",
    "partie": "Réseau",
    "q": "Quels sont les principaux avantages d'une architecture client-serveur ?",
    "choices": {
      "A": "Réduction des coûts d'exploitation",
      "B": "Protection native des données contre les intrusions",
      "C": "Centralisation de la sécurité",
      "D": "Création d'un point de défaillance unique"
    },
    "correct": "C",
    "explanation": "<p>L'architecture client-serveur repose sur la centralisation des ressources et des données sur un serveur dédié. <strong>La sécurité centralisée</strong> est l'un des avantages majeurs car elle permet d'appliquer des politiques de contrôle d'accès, de gestion des droits et de surveillance sur un point unique, facilitant ainsi l'administration.</p><ul><li>La centralisation permet de mieux contrôler les accès.</li><li>Elle simplifie la gestion des mises à jour et des sauvegardes.</li><li>Elle améliore la cohérence des données au sein de l'organisation.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Si l'architecture peut optimiser les ressources, elle entraîne souvent des coûts matériels et de maintenance élevés pour les serveurs, ce qui ne garantit pas une réduction des coûts globaux."
      },
      {
        "l": "B",
        "t": "Une architecture client-serveur ne protège pas intrinsèquement contre les intrusions sans mesures de sécurité complémentaires (pare-feu, IDS/IPS, chiffrement)."
      },
      {
        "l": "D",
        "t": "Le point de défaillance unique (Single Point of Failure) est un inconvénient majeur de ce modèle, et non un avantage, car la panne du serveur rend l'ensemble du système inutilisable."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend les bénéfices structurels de la centralisation dans une architecture réseau.",
    "summary": [
      "L'architecture client-serveur favorise une gestion centralisée des données et des ressources.",
      "La sécurité est renforcée par la possibilité de contrôler les accès en un point unique.",
      "Le modèle centralisé facilite la maintenance et les procédures de sauvegarde.",
      "Le principal risque structurel est le point de défaillance unique au niveau du serveur."
    ]
  },
  {
    "num": "Q13",
    "partie": "Réseau",
    "q": "Quel type d'adresse la commande 'ping' utilise-t-elle pour cibler un équipement réseau ?",
    "choices": {
      "A": "L'adresse IP de l'hôte source",
      "B": "L'adresse MAC de l'hôte source",
      "C": "L'adresse IP de destination",
      "D": "L'adresse MAC de destination"
    },
    "correct": "C",
    "explanation": "<p>La commande <strong>ping</strong> repose sur le protocole <strong>ICMP</strong> (Internet Control Message Protocol), qui opère au niveau de la <strong>couche 3 (Réseau)</strong> du modèle OSI.</p><p>Pour acheminer des paquets ICMP vers une cible, le protocole a besoin d'une adresse logique pour le routage, ce qui correspond à l'<strong>adresse IP de destination</strong>. Contrairement aux adresses MAC, qui sont utilisées au niveau de la couche 2 (Liaison de données) pour la communication locale, les adresses IP permettent d'atteindre des hôtes sur des réseaux distants via des routeurs.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'adresse IP de l'hôte source est utilisée par la pile TCP/IP pour identifier l'expéditeur, mais ce n'est pas la cible de la requête ping."
      },
      {
        "l": "B",
        "t": "L'adresse MAC est une adresse physique locale. Le protocole ICMP ne l'utilise pas directement pour le routage."
      },
      {
        "l": "D",
        "t": "L'adresse MAC de destination est utilisée par le protocole ARP pour résoudre l'adresse IP, mais elle n'est pas l'adresse cible manipulée par la commande ping elle-même."
      }
    ],
    "examiner": "Évaluer la compréhension du candidat sur les protocoles de couche 3 (ICMP/IP) et la distinction entre l'adressage logique et physique.",
    "summary": [
      "La commande ping utilise le protocole ICMP pour vérifier la connectivité.",
      "Le protocole ICMP fonctionne au niveau de la couche réseau du modèle OSI.",
      "La destination d'un ping est définie par une adresse IP.",
      "Les adresses MAC ne sont pas utilisées pour le routage inter-réseaux par la commande ping."
    ]
  },
  {
    "num": "Q14",
    "partie": "Réseau",
    "q": "Dans quel sens est-il possible de transférer des fichiers lorsqu'on utilise un client FTP ?",
    "choices": {
      "A": "Du client vers le serveur uniquement (Upload).",
      "B": "Du serveur vers le client uniquement (Download).",
      "C": "Dans les deux sens, sous réserve que les permissions des systèmes de fichiers le permettent.",
      "D": "Dans les deux sens, sans aucune restriction."
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>FTP (File Transfer Protocol)</strong> est conçu pour permettre l'échange bidirectionnel de fichiers entre un client et un serveur. Cependant, ce transfert est toujours soumis aux <strong>permissions du système de fichiers</strong> (droits de lecture et d'écriture) configurées sur le serveur et le client.</p><ul><li><strong>Upload (PUT) :</strong> Nécessite des droits d'écriture sur le répertoire distant.</li><li><strong>Download (GET) :</strong> Nécessite des droits de lecture sur le fichier distant.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Réducteur : le FTP permet également le téléchargement de fichiers depuis le serveur vers le client."
      },
      {
        "l": "B",
        "t": "Réducteur : le FTP permet également l'envoi de fichiers du client vers le serveur."
      },
      {
        "l": "D",
        "t": "Faux : le transfert n'est jamais inconditionnel ; il est toujours soumis aux politiques de sécurité et aux permissions d'accès définies par l'administrateur système."
      }
    ],
    "examiner": "Évaluer la compréhension des capacités bidirectionnelles du protocole FTP et la distinction entre les fonctionnalités du protocole et les contraintes de sécurité liées aux systèmes de fichiers.",
    "summary": [
      "Le protocole FTP supporte nativement les transferts dans les deux sens (Upload et Download).",
      "Les transferts sont systématiquement limités par les permissions d'accès (lecture/écriture).",
      "Un client FTP ne peut pas outrepasser les droits définis sur le serveur.",
      "La sécurité en FTP dépend à la fois du protocole et de la configuration du système cible."
    ]
  },
  {
    "num": "Q15",
    "partie": "Réseau",
    "q": "Quelle est la fonction principale d'un routeur dans une architecture réseau ?",
    "choices": {
      "A": "Il relie deux concentrateurs (hubs).",
      "B": "Il relie deux ponts (bridges).",
      "C": "Il relie deux cartes réseaux.",
      "D": "Il relie deux réseaux distincts."
    },
    "correct": "D",
    "explanation": "<p>Par définition, un <strong>routeur</strong> est un équipement réseau de couche 3 (modèle OSI) dont la fonction première est de diriger le trafic de données entre deux ou plusieurs <strong>réseaux distincts</strong> (ou sous-réseaux).</p><p>Contrairement aux équipements de couche 2 comme les switchs ou les ponts qui travaillent au sein d'un même domaine de diffusion, le routeur analyse les adresses IP pour acheminer les paquets vers la destination correcte, permettant ainsi l'interconnexion entre des infrastructures différentes (ex: un réseau local vers Internet).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les hubs sont des équipements de couche 1 qui répètent simplement le signal. Relier deux hubs est inutile pour le routage."
      },
      {
        "l": "B",
        "t": "Un pont (bridge) sert à segmenter un réseau local et fonctionne en couche 2 ; il ne permet pas l'interconnexion de réseaux IP."
      },
      {
        "l": "C",
        "t": "Une carte réseau est une interface matérielle ; si un routeur peut posséder plusieurs cartes, sa fonction n'est pas de les 'relier' mais de diriger le trafic entre les réseaux auxquels elles sont connectées."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension fondamentale du rôle des équipements d'interconnexion selon le modèle OSI et leur capacité à séparer ou unir des segments réseaux.",
    "summary": [
      "Un routeur opère à la couche 3 (réseau) du modèle OSI.",
      "Sa mission principale est d'interconnecter des réseaux logiques distincts.",
      "Il utilise les adresses IP pour déterminer le meilleur chemin vers la destination.",
      "Il permet la communication entre des réseaux ayant des plages d'adresses différentes."
    ]
  },
  {
    "num": "Q16",
    "partie": "Réseau",
    "q": "Quel est le protocole réseau qui permet de retrouver une adresse IP à partir d'une adresse physique (MAC) ?",
    "choices": {
      "A": "DHCP",
      "B": "WINS",
      "C": "R-ARP",
      "D": "ARP"
    },
    "correct": "C",
    "explanation": "<p>Le protocole <strong>RARP</strong> (Reverse Address Resolution Protocol) est utilisé par une machine pour connaître sa propre adresse IP. Lorsqu'une machine ne possède pas de disque dur (station sans disque ou terminal léger), elle ne peut pas stocker sa configuration réseau. Au démarrage, elle diffuse une requête <strong>RARP</strong> contenant son adresse MAC pour demander à un serveur RARP de lui attribuer une adresse IP.</p><ul><li><strong>ARP</strong> effectue l'opération inverse : il associe une IP à une MAC.</li><li><strong>DHCP</strong> a largement remplacé RARP car il est plus complet (il fournit aussi le masque, la passerelle et les DNS).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le DHCP est un protocole dynamique qui attribue des adresses IP et des paramètres réseau, mais il ne résout pas techniquement une adresse MAC en IP via une requête de résolution directe."
      },
      {
        "l": "B",
        "t": "WINS est un système Microsoft obsolète utilisé pour résoudre des noms NetBIOS en adresses IP, ce qui n'a aucun lien avec les adresses MAC."
      },
      {
        "l": "D",
        "t": "ARP (Address Resolution Protocol) réalise la fonction opposée : il permet de trouver l'adresse MAC correspondant à une adresse IP connue sur un réseau local."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension des mécanismes de résolution d'adresses et la distinction entre les protocoles de configuration et de résolution dans le modèle OSI.",
    "summary": [
      "RARP est le protocole permettant de trouver une adresse IP à partir d'une adresse MAC.",
      "ARP effectue l'opération inverse (IP vers MAC).",
      "Le protocole RARP est principalement utilisé par les stations sans disque lors du démarrage.",
      "Le DHCP a aujourd'hui rendu le RARP obsolète dans la plupart des architectures réseau."
    ]
  },
  {
    "num": "Q17",
    "partie": "Réseau",
    "q": "Que signifie la norme de câblage théorique 100Base30 dans le contexte des standards Ethernet ?",
    "choices": {
      "A": "100 MHz - Bande large - 30 mètres",
      "B": "100 mètres - Bande de base - 30 Mbits/s",
      "C": "10 km - Bande de base - 30 MHz",
      "D": "100 Mbits/s - Bande de base - 3000 mètres"
    },
    "correct": "D",
    "explanation": "<p>La nomenclature des standards Ethernet (comme 10Base-T ou 100Base-TX) suit une convention précise :</p><ul><li><strong>Le premier nombre (100)</strong> : indique le débit en Mégabits par seconde (Mbits/s).</li><li><strong>Le terme 'Base'</strong> : signifie <em>Baseband</em> (bande de base), ce qui indique que le câble utilise toute la bande passante pour un signal numérique unique.</li><li><strong>Le dernier élément</strong> : désigne généralement soit le type de support, soit la distance maximale du segment (exprimée en centaines de mètres ou en mètres selon la norme). Dans cette question théorique, 100Base30 indique 100 Mbits/s en bande de base sur une distance de 3000 mètres.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'Base' ne signifie pas 'bande large' (broadband) mais 'bande de base' (baseband). De plus, l'interprétation des valeurs numériques est erronée."
      },
      {
        "l": "B",
        "t": "La confusion porte sur l'ordre des paramètres : 100 ne représente pas la distance en mètres, mais le débit en Mbits/s."
      },
      {
        "l": "C",
        "t": "Les unités sont ici totalement incohérentes avec la nomenclature standard Ethernet (le '100' indique le débit, pas la distance en kilomètres)."
      }
    ],
    "examiner": "Évaluer la compréhension de la nomenclature normalisée utilisée pour désigner les technologies de réseaux locaux (Ethernet).",
    "summary": [
      "La nomenclature Ethernet est structurée par le débit, le type de transmission et la portée/support.",
      "Le terme 'Base' fait toujours référence à la technologie 'Bande de base' (Baseband).",
      "Le premier nombre indique systématiquement le débit binaire (ex: 100 pour 100 Mbits/s).",
      "La maîtrise de ces codes est fondamentale pour identifier les capacités d'un réseau physique."
    ]
  },
  {
    "num": "Q18",
    "partie": "Réseau",
    "q": "Sur quelle couche du modèle OSI se situe principalement le fonctionnement d'un pilote (driver) de carte réseau ?",
    "choices": {
      "A": "Couche Physique",
      "B": "Couche Liaison de données",
      "C": "Couche Réseau",
      "D": "Couche Application"
    },
    "correct": "B",
    "explanation": "<p>Un pilote de carte réseau (Network Interface Card - NIC) agit comme l'interface logicielle directe entre le matériel physique et le système d'exploitation.</p><ul><li>La <strong>couche Liaison de données (Data Link Layer - couche 2)</strong> est responsable de l'encapsulation des données en trames et de l'adressage physique (adresse MAC).</li><li>Le pilote communique avec le matériel (couche 1) tout en présentant une interface normalisée au protocole réseau (couche 3), ce qui le place structurellement dans la sous-couche MAC de la couche Liaison.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La couche physique ne traite que des bits bruts (signaux électriques/optiques) et ne contient pas la logique logicielle de contrôle propre au pilote."
      },
      {
        "l": "C",
        "t": "La couche réseau gère le routage et les adresses IP, elle est située au-dessus du pilote et dépend de celui-ci pour transmettre les paquets."
      },
      {
        "l": "D",
        "t": "La couche application est située tout en haut de la pile OSI et est beaucoup trop éloignée du matériel pour être concernée par le pilote de la carte."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension du rôle des pilotes dans l'architecture en couches et leur interaction avec le matériel vs le logiciel.",
    "summary": [
      "Le pilote de carte réseau fait le pont entre le matériel et le système d'exploitation.",
      "Il opère au sein de la couche 2 (Liaison de données) car il gère l'accès au support physique.",
      "Le pilote gère l'encapsulation des paquets en trames et l'utilisation des adresses MAC.",
      "Il est indissociable de la gestion matérielle de la carte réseau."
    ]
  },
  {
    "num": "Q19",
    "partie": "Réseau",
    "q": "Quelle est l'adresse réseau de la machine possédant l'adresse IP 192.168.35.24 avec un masque de sous-réseau 255.255.255.0 ?",
    "choices": {
      "A": "192.168.35.0",
      "B": "192.168.35.254",
      "C": "192.168.35.255",
      "D": "10.1.1.0"
    },
    "correct": "A",
    "explanation": "<p>Pour déterminer l'adresse réseau d'une machine, on effectue une opération <strong>ET logique (AND)</strong> bit à bit entre l'adresse IP et le masque de sous-réseau.</p><p>Dans le cas du masque <strong>255.255.255.0</strong> (notation CIDR /24), les trois premiers octets correspondent à la partie réseau et le dernier octet (0) correspond à la partie hôte.</p><ul><li>Adresse IP : 192.168.35.24</li><li>Masque : 255.255.255.0</li><li>Résultat : 192.168.35.0</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "192.168.35.254 est généralement utilisée comme adresse IP pour une passerelle ou un hôte dans ce sous-réseau, pas comme adresse réseau."
      },
      {
        "l": "C",
        "t": "192.168.35.255 correspond à l'adresse de diffusion (broadcast) du réseau, et non à l'adresse réseau elle-même."
      },
      {
        "l": "D",
        "t": "10.1.1.0 appartient à une classe d'adresse privée différente et n'a aucun rapport avec le segment réseau 192.168.35.0."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension du candidat sur le calcul binaire appliqué à l'adressage IP et sa capacité à distinguer l'adresse réseau, l'adresse de diffusion et les adresses utilisables par les hôtes.",
    "summary": [
      "L'adresse réseau est obtenue par une opération ET logique entre l'IP et le masque.",
      "Un masque 255.255.255.0 signifie que les 24 premiers bits identifient le réseau.",
      "L'adresse réseau est toujours la première adresse d'un bloc (terminant par .0 dans ce cas).",
      "L'adresse de diffusion (broadcast) est toujours la dernière adresse du bloc (terminant par .255 dans ce cas)."
    ]
  },
  {
    "num": "Q20",
    "partie": "Réseau",
    "q": "Quel protocole réseau utilise par défaut le port UDP 123 pour la synchronisation horaire des systèmes ?",
    "choices": {
      "A": "DNS",
      "B": "NTP",
      "C": "SMTP",
      "D": "IMAP"
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>NTP (Network Time Protocol)</strong> est utilisé pour synchroniser les horloges des systèmes informatiques sur un réseau. Il fonctionne principalement via le port <strong>UDP 123</strong>.</p><ul><li>Le <strong>DNS</strong> utilise le port 53.</li><li>Le <strong>SMTP</strong> utilise le port 25.</li><li>L'<strong>IMAP</strong> utilise les ports 143 ou 993.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le DNS (Domain Name System) utilise le port 53 pour la résolution de noms de domaine en adresses IP."
      },
      {
        "l": "C",
        "t": "Le SMTP (Simple Mail Transfer Protocol) est dédié à l'envoi de courriers électroniques et utilise généralement le port 25."
      },
      {
        "l": "D",
        "t": "L'IMAP (Internet Message Access Protocol) est un protocole de réception de mails utilisant le port 143 (ou 993 en version sécurisée)."
      }
    ],
    "examiner": "Évaluer la connaissance des ports standards et des protocoles réseau fondamentaux associés.",
    "summary": [
      "Le protocole NTP est indispensable pour la synchronisation temporelle entre serveurs et clients.",
      "Le port 123 est réservé exclusivement au service NTP.",
      "NTP utilise le protocole de transport UDP pour réduire la latence.",
      "Il est crucial de différencier les ports de service applicatif (DNS, SMTP, IMAP) pour la sécurisation et le diagnostic réseau."
    ]
  },
  {
    "num": "Q21",
    "partie": "Réseau",
    "q": "Quelle est la définition et la fonction principale du NAT (Network Address Translation) dans un réseau informatique ?",
    "choices": {
      "A": "Résolution d'adresse IP (DNS)",
      "B": "Translation d'adresse IP",
      "C": "Cryptage de mot de passe",
      "D": "Résolution d'adresse MAC (ARP)"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>NAT (Network Address Translation)</strong> est une technique utilisée par les routeurs pour modifier les adresses IP dans les en-têtes des paquets IP.</p><p>Son rôle principal consiste à faire correspondre des adresses IP privées (utilisées à l'intérieur d'un réseau local) à une ou plusieurs adresses IP publiques (utilisées sur Internet). Cela permet notamment :</p><ul><li>D'économiser les adresses IPv4 publiques.</li><li>De masquer l'architecture interne d'un réseau local pour renforcer la sécurité.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La résolution d'adresse IP est la fonction du protocole DNS, qui traduit un nom de domaine en adresse IP."
      },
      {
        "l": "C",
        "t": "Le cryptage de mots de passe relève des protocoles de sécurité (type TLS/SSL) ou des algorithmes de hachage, et non de la gestion d'adressage réseau."
      },
      {
        "l": "D",
        "t": "La résolution d'adresse MAC à partir d'une adresse IP est la fonction du protocole ARP (Address Resolution Protocol)."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat maîtrise les concepts fondamentaux des protocoles de communication et la distinction entre les fonctions de routage (NAT), de résolution de noms (DNS) et de résolution d'adresses matérielles (ARP).",
    "summary": [
      "Le NAT signifie Network Address Translation (Traduction d'adresse réseau).",
      "Il permet de convertir des adresses IP privées en adresses IP publiques.",
      "Il est essentiel pour la gestion de la connectivité Internet et l'économie des adresses IPv4.",
      "Il ne faut pas le confondre avec le DNS (noms) ou l'ARP (adresses MAC)."
    ]
  },
  {
    "num": "Q22",
    "partie": "Réseau",
    "q": "Combien de connecteurs (broches) compte physiquement une prise RJ11 standard ?",
    "choices": {
      "A": "2",
      "B": "4",
      "C": "6",
      "D": "8"
    },
    "correct": "B",
    "explanation": "<p>La prise <strong>RJ11</strong> (Registered Jack 11) est un connecteur standard utilisé principalement pour les lignes téléphoniques. Bien que le connecteur physique puisse physiquement accueillir jusqu'à 6 positions (6P), il est câblé de manière standard avec <strong>4 conducteurs</strong> (4C).</p><p>Dans la pratique, pour le raccordement téléphonique classique, seules les deux broches centrales sont généralement utilisées pour la transmission du signal.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que seules deux broches soient nécessaires pour transporter un signal vocal, la norme technique de la prise RJ11 prévoit quatre emplacements de broches."
      },
      {
        "l": "C",
        "t": "6 est le nombre de positions physiques du connecteur (format 6P), mais la désignation RJ11 fait référence au câblage à 4 conducteurs."
      },
      {
        "l": "D",
        "t": "8 broches correspondent au standard RJ45, utilisé pour les réseaux informatiques Ethernet, et non au standard RJ11."
      }
    ],
    "examiner": "Évaluer la connaissance des standards de câblage physique utilisés dans les télécommunications et la distinction entre le format physique et le câblage effectif.",
    "summary": [
      "La prise RJ11 est le standard pour les connexions téléphoniques analogiques.",
      "Elle possède 4 connecteurs (4C) au sein d'un format 6 positions (6P).",
      "Les deux broches centrales servent à la transmission des données vocales.",
      "Il ne faut pas confondre le format RJ11 (4 broches) avec le format RJ45 (8 broches) dédié aux réseaux Ethernet."
    ]
  },
  {
    "num": "Q23",
    "partie": "Réseau",
    "q": "Qu'est-ce que le protocole TELNET ?",
    "choices": {
      "A": "Un client Web",
      "B": "Un protocole de type client-serveur",
      "C": "Un protocole de transfert de fichiers",
      "D": "Un serveur DHCP"
    },
    "correct": "B",
    "explanation": "<p><strong>TELNET</strong> (TELetype NETwork) est un protocole réseau utilisé sur Internet ou dans un réseau local pour permettre une communication bidirectionnelle interactive sur un canal de texte. Il repose sur une architecture <strong>client-serveur</strong>.</p><ul><li>Le client Telnet envoie des commandes à un serveur distant.</li><li>Le serveur Telnet exécute ces commandes et renvoie les résultats à l'utilisateur.</li></ul><p>Il est important de noter que Telnet n'est plus considéré comme sécurisé car les données (y compris les mots de passe) y transitent en <strong>clair</strong>, contrairement à SSH qui utilise un chiffrement.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un client Web (comme Firefox ou Chrome) utilise le protocole HTTP ou HTTPS, et non Telnet, pour accéder aux ressources d'un serveur Web."
      },
      {
        "l": "C",
        "t": "Le transfert de fichiers est généralement assuré par des protocoles comme FTP ou SFTP, et non par Telnet qui est dédié à l'émulation de terminal à distance."
      },
      {
        "l": "D",
        "t": "Le protocole DHCP est utilisé pour l'attribution automatique d'adresses IP, ce qui est une fonction totalement différente de l'accès distant offert par Telnet."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier vos connaissances fondamentales sur les protocoles de la couche application du modèle OSI et votre capacité à distinguer leurs rôles respectifs.",
    "summary": [
      "Telnet est un protocole réseau basé sur une architecture client-serveur.",
      "Il permet une gestion interactive à distance d'équipements informatiques via un terminal.",
      "Le protocole transmet les données en texte clair, le rendant vulnérable aux interceptions.",
      "Il est progressivement remplacé par SSH pour garantir la sécurité et le chiffrement des échanges."
    ]
  },
  {
    "num": "Q24",
    "partie": "Réseau",
    "q": "Quelle est la valeur maximale qu'un champ TTL (Time to Live) peut prendre dans un en-tête de paquet IPv4 ?",
    "choices": {
      "A": "64",
      "B": "128",
      "C": "255",
      "D": "256"
    },
    "correct": "C",
    "explanation": "<p>Dans le protocole <strong>IPv4</strong>, le champ <strong>TTL (Time to Live)</strong> est un champ de <strong>8 bits</strong> situé dans l'en-tête du paquet IP.</p><p>Étant donné qu'il occupe 8 bits, il peut représenter des valeurs entières allant de 0 à 2^8 - 1, soit de <strong>0 à 255</strong>.</p><ul><li>La valeur maximale est donc <strong>255</strong>.</li><li>Le TTL sert à limiter la durée de vie d'un paquet sur le réseau pour éviter qu'il ne boucle indéfiniment en cas d'erreur de routage.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "64 est une valeur courante par défaut pour le TTL sous les systèmes de type Unix/Linux, mais ce n'est pas la valeur maximale théorique autorisée par le champ de 8 bits."
      },
      {
        "l": "B",
        "t": "128 est une valeur courante par défaut pour le TTL sous les systèmes Windows, mais elle ne représente pas la limite maximale du champ."
      },
      {
        "l": "D",
        "t": "256 est mathématiquement impossible à stocker dans un champ de 8 bits (qui limite la valeur à 255). C'est souvent un piège pour ceux qui confondent avec le nombre de combinaisons possibles (256)."
      }
    ],
    "examiner": "L'examinateur évalue votre connaissance de la structure de l'en-tête IP et des limitations liées au nombre de bits alloués aux champs de contrôle.",
    "summary": [
      "Le champ TTL dans IPv4 est codé sur 8 bits.",
      "La capacité maximale d'un champ de 8 bits est de 255 (2^8 - 1).",
      "Le TTL est décrémenté à chaque passage dans un routeur.",
      "Si le TTL atteint zéro, le paquet est rejeté pour éviter les boucles infinies."
    ]
  }
];
