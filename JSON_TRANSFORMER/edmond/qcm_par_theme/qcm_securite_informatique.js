const QCM = [
  {
    "num": "Q1",
    "partie": "Sécurité informatique",
    "q": "L'extrait fourni ne contient pas de question exploitable pour le test. Veuillez fournir un énoncé de question valide accompagné de ses choix de réponses afin que je puisse effectuer l'analyse et la structuration demandées.",
    "choices": {
      "A": "Information manquante",
      "B": "Information manquante",
      "C": "Information manquante",
      "D": "Information manquante"
    },
    "correct": null,
    "explanation": "<p>Aucun contenu de question n'a été détecté dans l'extrait fourni. Pour générer un QCM valide, le texte doit comporter un énoncé et au moins deux propositions de réponses.</p>",
    "wrongAnalysis": [],
    "examiner": "Capacité à fournir des données structurées pour une analyse pédagogique.",
    "summary": [
      "Le texte source est incomplet.",
      "Aucune question ou réponse n'est disponible pour analyse.",
      "Veuillez soumettre un nouveau texte contenant l'énoncé complet."
    ]
  },
  {
    "num": "Q2",
    "partie": "Sécurité informatique",
    "q": "En matière de gestion et d'attribution des mots de passe, combien de niveaux ou de types de sécurité distincts sont généralement reconnus pour sécuriser l'accès aux systèmes ?",
    "choices": {
      "A": "0",
      "B": "2",
      "C": "3",
      "D": "4"
    },
    "correct": "B",
    "explanation": "<p>Dans le contexte de la sécurité des accès, on distingue principalement <strong>deux niveaux de sécurité</strong> associés à l'authentification :</p><ul><li><strong>L'authentification simple :</strong> basée uniquement sur un mot de passe (connaissance).</li><li><strong>L'authentification multi-facteurs (MFA) :</strong> qui combine plusieurs facteurs (quelque chose que l'on sait, que l'on possède ou que l'on est).</li></ul><p>L'approche moderne recommande de ne jamais se reposer sur un seul type de sécurité pour garantir la protection des ressources sensibles.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une sécurité nulle est inacceptable pour tout système d'information."
      },
      {
        "l": "C",
        "t": "Le chiffre 3 ne correspond pas à une classification standard reconnue des méthodes d'attribution de mots de passe."
      },
      {
        "l": "D",
        "t": "Le chiffre 4 est arbitraire et ne reflète pas les modèles classiques de gestion des accès."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de l'authentification et des stratégies de sécurisation des accès.",
    "summary": [
      "La sécurité des accès repose sur la classification des méthodes d'authentification.",
      "L'authentification simple (mot de passe seul) est considérée comme insuffisante aujourd'hui.",
      "L'authentification multi-facteurs (MFA) est la norme recommandée pour une sécurité renforcée.",
      "Une bonne stratégie de sécurité combine plusieurs types de preuves d'identité."
    ]
  },
  {
    "num": "Q3",
    "partie": "Sécurité informatique",
    "q": "Qu'est-ce qu'un pare-feu (firewall) dans un environnement réseau ?",
    "choices": {
      "A": "Une passerelle d'interconnexion de réseaux.",
      "B": "Un équipement ou un logiciel permettant de sécuriser un réseau en filtrant le trafic.",
      "C": "Un serveur de fichiers dédié au stockage et au partage de données.",
      "D": "Un site web accessible via un navigateur."
    },
    "correct": "B",
    "explanation": "<p>Un <strong>pare-feu (firewall)</strong> est un composant essentiel de la sécurité informatique. Son rôle principal est d'analyser les flux de données circulant entre différents réseaux (généralement entre un réseau interne protégé et un réseau externe comme Internet) afin de les autoriser ou de les bloquer selon des règles de sécurité prédéfinies.</p><ul><li>Il protège contre les accès non autorisés.</li><li>Il contrôle le trafic entrant et sortant.</li><li>Il peut être matériel (boîtier physique) ou logiciel (installé sur un OS).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien qu'un pare-feu puisse agir comme une passerelle, ce terme désigne techniquement un équipement dont la fonction première est d'interconnecter des réseaux de protocoles différents, sans nécessairement assurer de filtrage de sécurité."
      },
      {
        "l": "C",
        "t": "Un serveur de fichiers a pour vocation unique le stockage et la gestion des droits d'accès aux documents, ce qui n'a pas de rapport direct avec le filtrage du trafic réseau."
      },
      {
        "l": "D",
        "t": "Un site web est une application ou un ensemble de ressources hébergées sur un serveur web, ce n'est absolument pas un dispositif de sécurité réseau."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la fonction fondamentale d'un firewall et sait le distinguer des autres composants d'infrastructure réseau.",
    "summary": [
      "Un pare-feu est un dispositif de sécurité réseau indispensable.",
      "Il filtre le trafic entrant et sortant selon des règles strictes.",
      "Il agit comme une barrière protectrice contre les intrusions malveillantes.",
      "Il ne doit pas être confondu avec un simple routeur, un serveur de fichiers ou une passerelle réseau classique."
    ]
  },
  {
    "num": "Q4",
    "partie": "Sécurité informatique",
    "q": "Dans quelle zone réseau est-il recommandé de placer un serveur de base de données pour garantir une sécurité optimale ?",
    "choices": {
      "A": "Dans le réseau local (LAN)",
      "B": "Dans une DMZ avec les serveurs d'applications",
      "C": "Dans une DMZ dédiée aux serveurs accessibles depuis Internet",
      "D": "Dans une DMZ avec le serveur de messagerie (POP/IMAP)"
    },
    "correct": "A",
    "explanation": "<p>Pour garantir une sécurité maximale, un serveur de base de données ne doit jamais être exposé directement à Internet. La pratique recommandée consiste à le placer dans le <strong>réseau local (LAN)</strong> ou dans une zone interne sécurisée, isolée du reste du réseau par des règles de filtrage strictes.</p><ul><li>Seul le serveur d'application doit avoir l'autorisation d'accéder au serveur de base de données via un port spécifique.</li><li>L'accès direct depuis l'extérieur est proscrit.</li><li>Placer une base de données en DMZ augmente drastiquement la surface d'attaque en cas de compromission d'un service public.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Placer une base de données dans la même DMZ que des serveurs d'application exposés est risqué ; si le serveur d'application est compromis, la base de données est immédiatement menacée."
      },
      {
        "l": "C",
        "t": "Une DMZ est par définition une zone exposée aux menaces venant d'Internet. Y placer une base de données est une grave erreur de configuration."
      },
      {
        "l": "D",
        "t": "Le serveur de messagerie est souvent exposé aux flux entrants. Mélanger des rôles aussi critiques dans une même zone fragilise la ségrégation des flux."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur le cloisonnement réseau (segmentation) et le principe du moindre privilège appliqué à l'architecture des systèmes d'information.",
    "summary": [
      "Les serveurs de bases de données doivent rester dans un réseau interne protégé (LAN).",
      "Ne jamais exposer une base de données directement dans une DMZ.",
      "La communication doit être limitée au flux entre le serveur d'application et la base de données.",
      "La segmentation réseau est essentielle pour contenir les dommages en cas de faille de sécurité."
    ]
  },
  {
    "num": "Q5",
    "partie": "Sécurité informatique",
    "q": "Combien de tables principales l'utilitaire iptables manipule-t-il par défaut sous Linux ?",
    "choices": {
      "A": "2 tables",
      "B": "4 tables",
      "C": "5 tables",
      "D": "3 tables"
    },
    "correct": "C",
    "explanation": "<p>L'utilitaire <strong>iptables</strong> est l'interface en espace utilisateur pour le framework Netfilter du noyau Linux. Par défaut, il manipule <strong>cinq tables</strong> distinctes pour le filtrage des paquets :</p><ul><li><strong>raw :</strong> utilisée pour la configuration des exceptions de suivi de connexion.</li><li><strong>mangle :</strong> dédiée à la modification spécialisée des en-têtes de paquets.</li><li><strong>nat :</strong> utilisée pour la traduction d'adresses réseau (NAT).</li><li><strong>filter :</strong> la table par défaut pour le filtrage des paquets (règles de pare-feu classiques).</li><li><strong>security :</strong> utilisée pour les règles de contrôle d'accès obligatoire (type SELinux).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une sous-estimation importante, ignorant la majorité des fonctionnalités de filtrage et de routage."
      },
      {
        "l": "B",
        "t": "Bien que l'on utilise souvent les tables Filter, Nat et Mangle, cela omet les tables Raw et Security."
      },
      {
        "l": "D",
        "t": "C'est une confusion fréquente avec les trois chaînes principales (INPUT, OUTPUT, FORWARD) qui sont des concepts différents des tables."
      }
    ],
    "examiner": "Évaluer la connaissance de l'architecture interne du pare-feu Linux (Netfilter) et la compréhension des différentes tables de traitement des paquets.",
    "summary": [
      "Iptables interagit avec le framework Netfilter du noyau Linux.",
      "Il existe 5 tables principales : raw, mangle, nat, filter et security.",
      "La table 'filter' est la plus utilisée pour le pare-feu classique.",
      "Ne pas confondre les 'tables' (espaces de traitement) avec les 'chaînes' (points de passage des paquets)."
    ]
  },
  {
    "num": "Q6",
    "partie": "Sécurité informatique",
    "q": "Quelles sont les trois chaînes par défaut utilisées par l'utilitaire iptables pour le filtrage de paquets ?",
    "choices": {
      "A": "INPUT, FORWARD, OUTPUT",
      "B": "INPUT, PREROUTING, OUTPUT",
      "C": "INPUT, DENY, OUTPUT",
      "D": "INPUT, REJECT, OUTPUT"
    },
    "correct": "A",
    "explanation": "<p>Dans le framework <strong>Netfilter</strong> (utilisé par iptables), le filtrage des paquets s'articule autour de trois chaînes principales (tables de règles) par défaut :</p><ul><li><strong>INPUT</strong> : traite les paquets destinés à la machine locale.</li><li><strong>FORWARD</strong> : traite les paquets qui transitent par la machine (mode routeur).</li><li><strong>OUTPUT</strong> : traite les paquets générés par la machine locale.</li></ul><p>Bien que PREROUTING soit une chaîne valide dans iptables, elle appartient à la table <em>nat</em> ou <em>mangle</em> et n'est pas considérée comme une chaîne de filtrage par défaut.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "PREROUTING est une chaîne utilisée pour la traduction d'adresses (NAT) ou la modification de paquets, et non pour le filtrage de sécurité standard."
      },
      {
        "l": "C",
        "t": "DENY n'est pas une chaîne, mais une cible (target) ou une action que l'on peut appliquer à une règle."
      },
      {
        "l": "D",
        "t": "REJECT n'est pas une chaîne, mais une cible (target) permettant de rejeter un paquet en envoyant un message d'erreur ICMP."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture Netfilter et la distinction entre les chaînes de filtrage et les cibles (targets) ou chaînes de NAT.",
    "summary": [
      "Les chaînes par défaut de la table filter sont INPUT, FORWARD et OUTPUT.",
      "INPUT gère le trafic entrant vers le système local.",
      "OUTPUT gère le trafic sortant depuis le système local.",
      "FORWARD gère le trafic traversant le système (fonction de routeur).",
      "Les termes comme DENY ou REJECT sont des actions (targets) et non des chaînes."
    ]
  },
  {
    "num": "Q7",
    "partie": "Sécurité informatique",
    "q": "Quelle commande permet de définir la politique par défaut de la chaîne OUTPUT à DROP dans iptables ?",
    "choices": {
      "A": "iptables -P OUTPUT DROP",
      "B": "iptables -P OUTPUT i DROP",
      "C": "iptables -p OUTPUT DROP",
      "D": "iptables -p OUTPUT j DROP"
    },
    "correct": "A",
    "explanation": "<p>Pour modifier la politique par défaut (default policy) d'une chaîne dans <strong>iptables</strong>, on utilise l'option <code>-P</code> (majuscule). La syntaxe correcte est : <code>iptables -P &lt;CHAINE&gt; &lt;CIBLE&gt;</code>.</p><p>Dans ce cas précis, pour la chaîne <strong>OUTPUT</strong>, la commande est <code>iptables -P OUTPUT DROP</code>.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'ajout de l'option 'i' (interface) n'a pas de sens dans la définition d'une politique par défaut."
      },
      {
        "l": "C",
        "t": "L'option '-p' (minuscule) est utilisée pour spécifier un protocole (tcp, udp, icmp) et non pour définir une politique de chaîne."
      },
      {
        "l": "D",
        "t": "L'option '-p' est incorrecte pour une politique et '-j' (jump) est utilisé pour les règles spécifiques, pas pour la politique globale de la chaîne."
      }
    ],
    "examiner": "Évaluer la maîtrise de la syntaxe de base de l'utilitaire iptables et la distinction entre les options de configuration de chaîne (-P) et les options de filtrage de paquet (-p).",
    "summary": [
      "L'option -P (majuscule) est dédiée à la définition de la politique par défaut d'une chaîne.",
      "L'option -p (minuscule) est utilisée pour définir le protocole d'une règle (ex: TCP, UDP).",
      "La syntaxe correcte est 'iptables -P <CHAINE> <ACTION>'.",
      "Une politique DROP sur OUTPUT bloque tout trafic sortant non autorisé explicitement par une règle ultérieure."
    ]
  },
  {
    "num": "Q8",
    "partie": "Sécurité informatique",
    "q": "Quelle est la différence fondamentale entre un réseau Internet et un réseau Intranet au sein d'une organisation ?",
    "choices": {
      "A": "L'Internet est un réseau privé restreint, tandis que l'Intranet est un réseau public mondial.",
      "B": "L'Intranet est un réseau interne privé accessible uniquement aux membres d'une organisation, alors que l'Internet est un réseau public mondial.",
      "C": "Il n'y a aucune différence, ce sont deux termes synonymes pour désigner le réseau informatique.",
      "D": "L'Intranet nécessite une connexion satellite, contrairement à l'Internet qui utilise uniquement la fibre optique."
    },
    "correct": "B",
    "explanation": "<p>La distinction entre ces deux concepts repose sur <strong>l'accessibilité et la portée</strong> :</p><ul><li><strong>Internet</strong> : Un réseau public et mondial interconnectant des millions d'appareils, sans restriction d'accès spécifique autre que la connectivité réseau.</li><li><strong>Intranet</strong> : Un réseau privé utilisant les technologies du Web (HTTP, navigateurs, etc.) mais réservé exclusivement aux employés ou membres d'une entité pour partager des ressources internes en toute sécurité.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est l'exact opposé : l'Intranet est le réseau privé et l'Internet est le réseau public."
      },
      {
        "l": "C",
        "t": "Les technologies employées sont identiques, mais le périmètre d'accès et la gestion des droits de sécurité les rendent fondamentalement différents."
      },
      {
        "l": "D",
        "t": "Le support physique (satellite, fibre, cuivre) n'est pas un critère de distinction entre Internet et Intranet."
      }
    ],
    "examiner": "Évaluer la compréhension des architectures réseau de base et des notions de périmètre de sécurité.",
    "summary": [
      "L'Internet est un réseau public mondial ouvert à tous.",
      "L'Intranet est un réseau privé limité aux membres d'une organisation.",
      "Les deux réseaux partagent les mêmes protocoles techniques comme TCP/IP.",
      "La sécurité est le facteur clé qui différencie l'accès à un Intranet."
    ]
  },
  {
    "num": "Q9",
    "partie": "Sécurité informatique",
    "q": "Quel protocole doit utiliser le serveur web d'une institution bancaire pour garantir la confidentialité et l'intégrité des données transmises lors de la consultation d'un compte en ligne ?",
    "choices": {
      "A": "Une ligne téléphonique dédiée",
      "B": "Le protocole HTTPS",
      "C": "Un pare-feu",
      "D": "Un algorithme de compression des données"
    },
    "correct": "B",
    "explanation": "<p>Le protocole <strong>HTTPS</strong> (HyperText Transfer Protocol Secure) est la version sécurisée du protocole HTTP. Il repose sur l'utilisation du protocole <strong>TLS</strong> (Transport Layer Security) ou de son prédécesseur, le SSL, pour chiffrer les échanges de données.</p><ul><li><strong>Chiffrement :</strong> Empêche l'interception et la lecture des informations par des tiers (attaques de type 'Man-in-the-Middle').</li><li><strong>Authentification :</strong> Garantit que le site consulté est bien celui de la banque grâce à un certificat numérique.</li><li><strong>Intégrité :</strong> Assure que les données n'ont pas été modifiées durant le transfert.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une ligne dédiée est une solution matérielle pour la communication, mais elle ne garantit pas nativement le chiffrement des données sur le web."
      },
      {
        "l": "C",
        "t": "Un pare-feu (firewall) sert à filtrer le trafic réseau entrant et sortant, mais il ne sécurise pas le contenu de la communication entre le client et le serveur."
      },
      {
        "l": "D",
        "t": "La compression des données vise à réduire la taille des fichiers, elle n'apporte aucune sécurité ou protection contre l'interception des données."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension des protocoles de communication sécurisés sur le web et la capacité à distinguer la sécurité des couches transport/application par rapport aux outils de filtrage ou de performance.",
    "summary": [
      "Le protocole HTTPS est indispensable pour sécuriser les transactions bancaires en ligne.",
      "Il utilise le chiffrement TLS pour protéger les données contre l'interception.",
      "Le pare-feu est un outil de filtrage, non de chiffrement des données de session.",
      "La sécurité web repose sur l'authentification du serveur et le chiffrement du canal."
    ]
  },
  {
    "num": "Q10",
    "partie": "Sécurité informatique",
    "q": "Comment nomme-t-on la liste des questions les plus fréquemment posées sur un sujet spécifique, souvent rencontrée dans les forums ou groupes de discussion ?",
    "choices": {
      "A": "FAQ",
      "B": "FTP",
      "C": "HTTP",
      "D": "URL"
    },
    "correct": "A",
    "explanation": "<p>Le terme <strong>FAQ</strong> est l'acronyme anglais de <em>Frequently Asked Questions</em>, qui se traduit en français par <strong>Foire Aux Questions</strong>.</p><p>Il s'agit d'un document ou d'une page web regroupant les questions les plus courantes posées par les utilisateurs sur un sujet donné, accompagnées de leurs réponses, afin d'aider les nouveaux arrivants sans avoir à répéter systématiquement les mêmes explications.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "FTP (File Transfer Protocol) est un protocole standard utilisé pour transférer des fichiers entre un client et un serveur."
      },
      {
        "l": "C",
        "t": "HTTP (Hypertext Transfer Protocol) est le protocole fondamental utilisé pour transférer les données sur le World Wide Web."
      },
      {
        "l": "D",
        "t": "URL (Uniform Resource Locator) est l'adresse unique utilisée pour localiser une ressource sur Internet."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier les connaissances fondamentales du candidat sur la terminologie courante liée à la culture Web et à la gestion de la documentation utilisateur.",
    "summary": [
      "FAQ signifie 'Frequently Asked Questions' (Foire Aux Questions).",
      "C'est un outil essentiel pour la gestion de communauté et le support utilisateur.",
      "FTP, HTTP et URL sont des protocoles ou des syntaxes techniques, et non des outils de documentation textuelle.",
      "L'utilisation d'une FAQ permet de réduire la redondance des échanges au sein d'un groupe de discussion."
    ]
  },
  {
    "num": "Q11",
    "partie": "Sécurité Informatique",
    "q": "Parmi les extensions suivantes, laquelle est la plus fréquemment ciblée par les virus informatiques exécutables pour infecter un système ?",
    "choices": {
      "A": ".bin et .bat",
      "B": ".exe",
      "C": ".com",
      "D": ".jpg"
    },
    "correct": "B",
    "explanation": "<p>Les virus informatiques, particulièrement les <strong>logiciels malveillants exécutables</strong>, ciblent principalement les fichiers possédant l'extension <strong>.exe</strong> (exécutable). Ces fichiers contiennent le code machine que le système d'exploitation Windows exécute pour lancer des programmes. En infectant un fichier .exe, le virus s'assure qu'il sera lancé chaque fois que l'utilisateur ouvre l'application contaminée.</p><ul><li>Les fichiers <strong>.bat</strong> et <strong>.com</strong> peuvent aussi être ciblés, mais leur usage est moins prépondérant aujourd'hui que celui des .exe.</li><li>Les fichiers <strong>.jpg</strong> sont des fichiers image et ne contiennent pas de code exécutable, bien que des vecteurs d'attaque via des vulnérabilités de traitement d'image existent.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que les fichiers .bat (scripts) puissent être malveillants, ils ne sont pas la cible principale des virus informatiques classiques par rapport aux fichiers .exe."
      },
      {
        "l": "C",
        "t": "Les fichiers .com sont des exécutables hérités du DOS; ils sont beaucoup moins communs et moins ciblés que les fichiers .exe modernes."
      },
      {
        "l": "D",
        "t": "Les fichiers .jpg sont des fichiers de données (images) et non des exécutables. Un virus ne peut pas s'exécuter nativement via une simple lecture de fichier image."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension des mécanismes de propagation des virus et la distinction entre fichiers exécutables et fichiers de données.",
    "summary": [
      "Les fichiers .exe sont les cibles privilégiées des virus exécutables car ils lancent des programmes système.",
      "L'infection d'un fichier exécutable permet au virus de se lancer automatiquement lors de l'exécution du logiciel hôte.",
      "Les fichiers de données comme les images (.jpg) ne contiennent pas de code exécutable par le processeur.",
      "La sécurité informatique repose sur la compréhension des types de fichiers et de leurs permissions d'exécution."
    ]
  },
  {
    "num": "Q12",
    "partie": "Sécurité Informatique",
    "q": "Parmi les vecteurs d'attaque suivants, lequel constitue une source classique de propagation d'un virus informatique ?",
    "choices": {
      "A": "Un scanner",
      "B": "Une imprimante",
      "C": "Une clé USB",
      "D": "Un CD-ROM"
    },
    "correct": "C",
    "explanation": "<p>La réponse correcte est la <strong>clé USB</strong>. Bien que historiquement les CD-ROM aient été des vecteurs de propagation, la clé USB reste aujourd'hui l'un des vecteurs les plus courants et les plus redoutables pour plusieurs raisons :</p><ul><li><strong>Persistance :</strong> Le malware peut se copier automatiquement sur tout ordinateur connecté via des fichiers d'exécution automatique (autorun).</li><li><strong>Mobilité :</strong> Elle transite entre différents environnements (maison, entreprise, public), facilitant le franchissement des périmètres de sécurité.</li><li><strong>Discrétion :</strong> Les logiciels malveillants peuvent se loger dans des partitions cachées ou dans le microcode du contrôleur USB.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le scanner est un périphérique d'entrée qui numérise des documents ; il ne possède généralement pas de mémoire de stockage où un virus pourrait s'exécuter nativement."
      },
      {
        "l": "B",
        "t": "L'imprimante est un périphérique de sortie. Bien que certaines imprimantes réseau puissent être compromises, elles ne sont pas des vecteurs de propagation de virus de type 'stockage' au même titre qu'un support amovible."
      },
      {
        "l": "D",
        "t": "Bien que les CD-ROM puissent transporter des virus, ils sont aujourd'hui obsolètes et ne sont plus utilisés comme support principal pour l'échange de fichiers, contrairement aux clés USB."
      }
    ],
    "examiner": "Évaluer la compréhension de l'étudiant sur les vecteurs d'infection par support amovible et les risques liés à la mobilité des données.",
    "summary": [
      "La clé USB est un vecteur d'infection majeur en raison de sa mobilité et de sa capacité de stockage.",
      "Le mécanisme d'autorun est souvent exploité par les virus pour se propager dès la connexion du support.",
      "Il est crucial de désactiver l'exécution automatique des périphériques amovibles pour réduire les risques.",
      "Les périphériques de saisie comme les scanners ne sont pas des vecteurs de propagation de virus informatiques."
    ]
  },
  {
    "num": "Q13",
    "partie": "Sécurité Informatique",
    "q": "Quelle est la pratique recommandée pour assurer une protection efficace d'un ordinateur contre les logiciels malveillants ?",
    "choices": {
      "A": "Installer plusieurs logiciels antivirus simultanément.",
      "B": "Installer un seul logiciel antivirus.",
      "C": "Installer un logiciel antivirus et le mettre à jour régulièrement.",
      "D": "Utiliser exclusivement des clés USB pour le transfert de données."
    },
    "correct": "C",
    "explanation": "<p>Pour garantir une protection optimale, il ne suffit pas d'installer un antivirus ; il est crucial de maintenir sa base de données virale à jour. Les cybermenaces évoluent quotidiennement, et un antivirus obsolète ne pourra pas détecter les nouveaux types de malwares.</p><ul><li><strong>Mises à jour :</strong> Essentielles pour contrer les nouvelles signatures de virus.</li><li><strong>Logiciel unique :</strong> Installer plusieurs antivirus peut provoquer des conflits système et ralentir l'ordinateur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Installer plusieurs antivirus crée des conflits de ressources, réduit les performances du système et peut paradoxalement créer des failles de sécurité."
      },
      {
        "l": "B",
        "t": "L'installation seule ne suffit pas. Sans mises à jour, l'antivirus devient rapidement inefficace face aux menaces récentes."
      },
      {
        "l": "D",
        "t": "L'utilisation de clés USB est souvent un vecteur d'infection plutôt qu'une solution de protection. Ce choix est totalement hors sujet."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension des bonnes pratiques de cybersécurité de base et la connaissance des risques liés à la maintenance logicielle.",
    "summary": [
      "Un seul antivirus suffit pour éviter les conflits logiciels.",
      "La mise à jour régulière est indispensable pour la détection des nouvelles menaces.",
      "L'antivirus est une composante nécessaire mais non suffisante de la sécurité globale.",
      "La protection informatique repose sur la maintenance proactive du système."
    ]
  }
];
