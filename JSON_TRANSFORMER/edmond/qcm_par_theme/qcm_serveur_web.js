const QCM = [
  {
    "num": "Q1",
    "partie": "Serveur Web",
    "q": "Quel est le port d'écoute par défaut utilisé par le serveur Web Apache pour les requêtes HTTP ?",
    "choices": {
      "A": "8080",
      "B": "43",
      "C": "21",
      "D": "80"
    },
    "correct": "D",
    "explanation": "<p>Le protocole <strong>HTTP</strong> (HyperText Transfer Protocol) est le standard utilisé pour le transfert de documents sur le Web. Par convention, les serveurs Web, incluant <strong>Apache HTTP Server</strong>, écoutent les connexions entrantes sur le port <strong>80</strong> par défaut.</p><ul><li>Le port <strong>80</strong> est le port standard pour le trafic Web non sécurisé.</li><li>Pour les connexions sécurisées (HTTPS), le port standard est le <strong>443</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le port 8080 est fréquemment utilisé comme alternative au port 80 pour le développement ou les configurations de proxy, mais ce n'est pas le port standard par défaut."
      },
      {
        "l": "B",
        "t": "Le port 43 est traditionnellement réservé au protocole WHOIS, utilisé pour interroger des bases de données de noms de domaine."
      },
      {
        "l": "C",
        "t": "Le port 21 est réservé au protocole FTP (File Transfer Protocol), dédié au transfert de fichiers."
      }
    ],
    "examiner": "Cette question évalue la connaissance fondamentale des protocoles réseau et la maîtrise de la configuration standard des services Web.",
    "summary": [
      "Le protocole HTTP utilise le port 80 par défaut.",
      "Le port 443 est le standard pour les connexions sécurisées HTTPS.",
      "Apache est configuré nativement pour écouter sur le port 80.",
      "Il est crucial de distinguer les ports applicatifs courants pour la gestion de la sécurité réseau."
    ]
  },
  {
    "num": "Q2",
    "partie": "Serveur Web",
    "q": "Où sont localisés les fichiers de configuration par défaut du serveur Web Apache2 sur une distribution de type Debian/Ubuntu ?",
    "choices": {
      "A": "/etc/apache2/mods-enabled/",
      "B": "/etc/apache2/sites-available/",
      "C": "/etc/apache2/sites-enabled/",
      "D": "/var/log/apache2/"
    },
    "correct": "B",
    "explanation": "<p>Sous Debian et Ubuntu, l'arborescence d'Apache2 est modulaire. Le répertoire <strong>/etc/apache2/sites-available/</strong> contient les fichiers de configuration des hôtes virtuels (Virtual Hosts) disponibles mais pas forcément actifs.</p><ul><li>Pour activer une configuration, on utilise la commande <code>a2ensite</code>, qui crée un lien symbolique vers <strong>/etc/apache2/sites-enabled/</strong>.</li><li>Le dossier <strong>mods-enabled</strong> gère les modules chargés.</li><li>Le dossier <strong>/var/log/apache2/</strong> contient les journaux d'erreurs et d'accès, et non les fichiers de configuration.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ce répertoire contient uniquement les liens symboliques vers les modules activés, pas la configuration principale des sites."
      },
      {
        "l": "C",
        "t": "Ce dossier contient les liens symboliques vers les configurations actives ; ce n'est pas le dépôt principal des fichiers de configuration sources."
      },
      {
        "l": "D",
        "t": "Ce répertoire est réservé aux fichiers de logs (journaux) du serveur et non à sa configuration."
      }
    ],
    "examiner": "Vérifier la connaissance de l'arborescence Linux standard pour Apache2 et la distinction entre fichiers disponibles (source) et fichiers activés (liens).",
    "summary": [
      "Les fichiers de configuration des sites se trouvent dans /etc/apache2/sites-available/.",
      "Le dossier sites-enabled ne contient que des liens symboliques vers les sites activés.",
      "La commande a2ensite permet de passer un fichier de 'available' vers 'enabled'.",
      "Les logs sont stockés dans /var/log/apache2/, et non dans le répertoire de configuration."
    ]
  },
  {
    "num": "Q3",
    "partie": "Serveur Web",
    "q": "Quelle commande permet de vérifier l'état du service d'un serveur Web (comme Apache ou Nginx) sous une distribution Linux utilisant systemd ?",
    "choices": {
      "A": "systemctl status apache2",
      "B": "service apache2 check",
      "C": "status apache2",
      "D": "systemd check apache2"
    },
    "correct": "A",
    "explanation": "<p>La commande <strong>systemctl</strong> est l'outil standard pour gérer les services sur les systèmes Linux modernes utilisant systemd.</p><ul><li>La syntaxe correcte est <code>systemctl status [nom_du_service]</code>.</li><li>Elle permet d'afficher l'état actuel (actif, inactif, échec), les derniers journaux du service et sa configuration.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La commande 'service' est utilisée sur les anciennes versions de Linux (sysvinit), mais elle ne possède pas de sous-commande 'check'."
      },
      {
        "l": "C",
        "t": "'status' n'est pas une commande autonome dans le shell, elle doit être précédée du gestionnaire de services (systemctl)."
      },
      {
        "l": "D",
        "t": "'systemd' est le gestionnaire lui-même, il ne s'utilise pas avec une sous-commande 'check' pour tester un service."
      }
    ],
    "examiner": "Évaluer la maîtrise des commandes de base de l'administration système sous Linux et la compréhension du fonctionnement de systemd.",
    "summary": [
      "Systemd est le standard actuel de gestion des services sous Linux.",
      "La commande systemctl permet de démarrer, arrêter, redémarrer et vérifier l'état des services.",
      "La syntaxe systemctl status [service] est indispensable pour le diagnostic.",
      "La connaissance des outils de gestion de services est cruciale pour l'administration d'un serveur Web."
    ]
  }
];
