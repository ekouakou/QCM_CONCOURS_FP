const QCM = [
  {
    "num": "Q1",
    "partie": "Réseau",
    "q": "Le taux de transfert de données typique dans un réseau local est __________",
    "choices": {
      "A": "Bits par seconde",
      "B": "Kilo bits par seconde",
      "C": "Méga bits par seconde",
      "D": "Aucune de ces valeurs"
    },
    "correct": "C",
    "explanation": "<p>Dans le domaine des télécommunications et de l'ingénierie réseau, la mesure du débit binaire est fondamentale pour comprendre les performances d'une infrastructure. Le <strong>débit binaire (bitrate)</strong> représente la quantité de données numériques transférées par unité de temps à travers un médium de communication.</p><p>Pour les réseaux locaux (LAN), nous utilisons historiquement et techniquement le standard <strong>Ethernet (IEEE 802.3)</strong>. Bien que les premiers réseaux locaux aient commencé à des vitesses de 10 Mbps (Ethernet classique), l'évolution technologique a rapidement imposé le <strong>Fast Ethernet (100 Mbps)</strong>, puis le <strong>Gigabit Ethernet (1000 Mbps ou 1 Gbps)</strong> comme standards minimaux. Aujourd'hui, dans les datacenters et les réseaux d'entreprise haute performance, nous voyons couramment du 10 Gbps, 40 Gbps, voire 100 Gbps.</p><p><strong>Concepts théoriques clés :</strong><ul><li><strong>Bande passante vs Débit :</strong> La bande passante est la capacité maximale théorique du canal, tandis que le débit est la mesure réelle du transfert effectif, souvent impactée par le <em>overhead</em> des protocoles (en-têtes TCP/IP, contrôle de flux).</li><li><strong>Unité de mesure :</strong> Le 'b' minuscule désigne le bit, tandis que le 'B' majuscule désigne l'octet (Byte). Les débits réseaux sont toujours exprimés en <strong>bits par seconde (bps)</strong>.</li><li><strong>Ordre de grandeur :</strong> Dans un environnement de production, exprimer le débit en bps (bit/s) ou en Kbps serait obsolète, car les volumes de données échangés dépassent largement ces échelles. Le Mbps est donc l'unité de mesure standard pour caractériser la performance de transmission.</li></ul></p><p><strong>Bonnes pratiques et erreurs :</strong> Une erreur courante est de confondre la vitesse de transfert réseau (ex: 1 Gbps) avec la vitesse de lecture/écriture d'un disque dur (souvent exprimée en Mo/s). Il est vital de toujours diviser le débit réseau par 8 pour obtenir la valeur équivalente en octets par seconde (Mo/s).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que l'unité fondamentale soit le bit par seconde, elle est trop générique et sous-dimensionnée pour caractériser les réseaux locaux modernes, qui atteignent des ordres de grandeur bien supérieurs."
      },
      {
        "l": "B",
        "t": "Le Kilobit par seconde (Kbps) est une unité utilisée pour des connexions bas débit ou des liaisons série anciennes (type modem RTC ou certaines liaisons WAN à faible capacité), mais elle ne correspond absolument pas à la réalité d'un réseau local contemporain."
      },
      {
        "l": "D",
        "t": "Cette option est incorrecte car le débit des réseaux locaux modernes s'inscrit parfaitement dans l'échelle des Méga bits par seconde (et au-delà, vers les Giga bits), rendant le choix C techniquement valide."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier votre connaissance des échelles de mesure en informatique réseau et votre capacité à distinguer les unités utilisées selon le contexte (LAN vs WAN vs modem). Le piège réside dans la confusion entre les unités de base et les unités d'usage courant.",
    "summary": [
      "La mesure standard pour le débit d'un réseau local (LAN) est le Mbps ou le Gbps.",
      "Attention à la notation : 'b' pour bit et 'B' pour octet (Byte), les réseaux utilisent le bit.",
      "Le Gigabit Ethernet est devenu le standard minimal pour les infrastructures professionnelles actuelles.",
      "Le débit réel est toujours inférieur à la bande passante théorique à cause des surcharges liées aux protocoles réseau."
    ]
  },
  {
    "num": "Q2",
    "partie": "Réseau",
    "q": "Modem signifie ___________",
    "choices": {
      "A": "Un type de mémoire secondaire",
      "B": "Modulateur démodulateur",
      "C": "Mémoire du périphérique d’exploitation de l’ordinateur central"
    },
    "correct": "B",
    "explanation": "<p>Le terme <strong>Modem</strong> est un acronyme technique issu de la contraction des termes <strong>Modulateur-Démodulateur</strong>. Il s'agit d'un équipement réseau fondamental qui assure la conversion de signaux entre deux domaines physiques distincts : le domaine numérique (utilisé par les ordinateurs, serveurs et routeurs) et le domaine analogique (utilisé traditionnellement par les infrastructures de transmission type ligne téléphonique, câble coaxial ou fibre optique).</p><p><strong>Concepts théoriques :</strong></p><ul><li><strong>Modulation :</strong> Le processus consiste à encoder des données numériques (bits 0 et 1) en un signal analogique (onde porteuse) afin qu'elles puissent être transportées sur un support qui ne supporte pas nativement le binaire.</li><li><strong>Démodulation :</strong> C'est l'opération inverse où le modem extrait les données numériques à partir du signal analogique reçu depuis le réseau externe (FAI).</li></ul><p><strong>Rôle dans les architectures Cloud et Réseau :</strong> Bien qu'aujourd'hui intégré dans des boîtiers multifonctions (Box Internet intégrant routeur, switch, point d'accès Wi-Fi et modem), la fonction modem reste strictement limitée à l'établissement de la couche physique (Layer 1 du modèle OSI) et de la liaison de données (Layer 2). Dans un environnement Cloud, le modem est le point d'entrée critique vers le WAN (Wide Area Network). Une panne à ce niveau rend toute communication avec les services Cloud (AWS, Azure, GCP) impossible pour le site local.</p><p><strong>Erreurs courantes :</strong> Les débutants confondent souvent le <em>modem</em> avec le <em>routeur</em>. Le modem fournit la connectivité au fournisseur d'accès (synchronisation de la ligne), tandis que le routeur gère le routage des paquets entre différents sous-réseaux (couche 3 du modèle OSI) et la sécurité via pare-feu.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La mémoire secondaire (HDD, SSD) est un dispositif de stockage persistant. Elle n'a aucun rapport avec la conversion de signaux de communication réseau."
      },
      {
        "l": "C",
        "t": "Il n'existe pas de concept de 'mémoire de périphérique d’exploitation' sous cette dénomination ; c'est un distracteur technique qui utilise des termes informatiques disparates pour tromper le candidat sur la nature réelle du modem."
      }
    ],
    "examiner": "L'examinateur cherche ici à valider la compréhension des fondamentaux de la connectivité réseau. Le piège classique est de confondre les rôles des périphériques matériels dans la chaîne de communication (Modem vs Routeur vs Switch).",
    "summary": [
      "Un modem est un dispositif de conversion entre des signaux numériques et analogiques.",
      "Il opère principalement au niveau de la couche 1 (Physique) du modèle OSI.",
      "La modulation permet l'envoi de données, la démodulation permet leur réception.",
      "Le modem assure la connectivité entre le réseau local et le réseau étendu du fournisseur d'accès."
    ]
  },
  {
    "num": "Q1",
    "partie": "Réseau / Communication",
    "q": "Qu’est-ce qu’un « port de communication série » ?",
    "choices": {
      "A": "Un port connectant plusieurs périphériques en parallèle",
      "B": "Un port transférant les données bit par bit sur une seule ligne",
      "C": "Un port gérant les communications sans fil",
      "D": "Un port utilisé exclusivement pour la vidéo"
    },
    "correct": "B",
    "explanation": "<p>Le port de communication série est une interface fondamentale dans l'architecture matérielle et les systèmes embarqués, caractérisée par une transmission de données <strong>séquentielle</strong>. Contrairement à la communication parallèle, où plusieurs bits sont acheminés simultanément via des lignes multiples, la communication série transmet les bits les uns après les autres sur un canal unique (ou un canal dédié par direction dans le cas du full-duplex).</p><p><strong>Fondamentaux techniques :</strong><ul><li><strong>Mécanisme :</strong> Les données sont fragmentées en bits individuels envoyés à travers un fil conducteur. Cela réduit drastiquement le nombre de broches nécessaires sur les connecteurs et simplifie le routage des circuits imprimés.</li><li><strong>Synchronisation :</strong> Elle peut être <em>asynchrone</em> (utilisant des bits de start/stop pour définir le cadre) ou <em>synchrone</em> (utilisant un signal d'horloge partagé pour cadencer les données).</li><li><strong>Protocoles emblématiques :</strong> Le standard RS-232 a longtemps été la norme, mais aujourd'hui, les déclinaisons modernes comme l'<strong>UART</strong> (Universal Asynchronous Receiver-Transmitter), l'<strong>I2C</strong>, le <strong>SPI</strong>, ou encore l'<strong>USB</strong> (Universal Serial Bus) dominent l'industrie.</li></ul></p><p><strong>Cas d'usage et DevOps/Cloud :</strong> Bien que le terme « série » soit ancien, sa philosophie perdure dans le Cloud via les connexions série virtuelles (Serial Console) permettant l'accès aux instances (EC2, instances Google Cloud) au niveau du noyau (Kernel) sans dépendre de la pile réseau IP, ce qui est critique lors de dépannages de boot ou de configurations réseau corrompues.</p><p><strong>Erreurs courantes :</strong> Confondre la vitesse de transfert brute avec le débit utile (tenant compte du protocole), négliger l'adaptation d'impédance sur les longues distances, et ignorer les problèmes de tension entre composants (ex: TTL 3.3V vs RS-232 12V).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est la définition même de la communication parallèle. Elle nécessite autant de fils de données que de bits envoyés simultanément, ce qui limite la distance de transmission à cause de l'interférence (diaphonie)."
      },
      {
        "l": "C",
        "t": "La communication sans fil (Bluetooth, Wi-Fi, Zigbee) utilise des ondes radio et non des ports de communication série physiques (bien qu'ils puissent encapsuler des protocoles série dans leurs couches logiques)."
      },
      {
        "l": "D",
        "t": "La vidéo haute résolution exige une bande passante massive que la série traditionnelle ne peut supporter. Les ports vidéo (HDMI, DisplayPort) sont des interfaces complexes utilisant des signaux différentiels à ultra-haute vitesse, distincts des ports série classiques."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat distingue l'architecture de transfert bit-à-bit (série) de la transmission parallèle, un concept de base nécessaire pour comprendre les bus système, l'IoT et les accès console aux instances Cloud.",
    "summary": [
      "La communication série transmet les bits séquentiellement sur une seule ligne.",
      "La transmission série est plus efficace que la parallèle pour les longues distances et les designs compacts.",
      "L'UART, l'I2C et l'USB sont des protocoles basés sur la communication série.",
      "En Cloud Computing, la console série est l'outil de dernier recours pour accéder aux systèmes sans réseau IP fonctionnel."
    ]
  }
];
