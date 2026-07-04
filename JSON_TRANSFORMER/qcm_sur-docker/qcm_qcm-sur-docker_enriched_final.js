const QCM = [
  {
    "num": "Q5",
    "partie": "Concepts fondamentaux de Docker",
    "q": "Qu’est-ce qu’un Dockerfile ?",
    "choices": {
      "A": "Une image Docker qui est construite en exécutant une commande Docker.",
      "B": "Un fichier texte qui contient toutes les commandes nécessaires pour construire une image donnée.",
      "C": "Une instance en cours d’exécution d’une image Docker",
      "D": "Un site web où vous pouvez télécharger des images Docker."
    },
    "correct": "B",
    "explanation": "<p>Un <strong>Dockerfile</strong> est la pierre angulaire de l'écosystème conteneurisé. Il s'agit d'un fichier texte, traditionnellement nommé <em>Dockerfile</em> (sans extension), qui agit comme une recette ou un manifeste de build pour générer une <strong>image Docker</strong>. Contrairement à une machine virtuelle qui capture un état complet du système, le Dockerfile définit une séquence d'étapes reproductibles pour construire une couche applicative immuable.</p><p><strong>Concepts clés et cycle de vie :</strong></p><ul><li><strong>Instructions :</strong> Chaque ligne commence par une instruction clé (FROM, RUN, COPY, ADD, CMD, ENTRYPOINT, ENV, etc.). Chaque instruction crée une nouvelle couche (layer) dans l'image, favorisant le cache lors des builds successifs.</li><li><strong>Immuabilité :</strong> Une fois le processus <code>docker build</code> terminé, l'image résultante est statique. Toute modification nécessite une modification du Dockerfile et une reconstruction.</li><li><strong>Optimisation : </strong>Un bon Dockerfile doit minimiser le nombre de couches et supprimer les fichiers temporaires dans la même commande (utilisation de <code>&& rm -rf</code>) pour réduire la taille de l'image finale.</li></ul><p><strong>Bonnes pratiques DevOps :</strong></p><ul><li><strong>Multi-stage builds :</strong> Utiliser plusieurs étapes de build pour compiler votre code dans un environnement riche, puis copier uniquement le binaire final dans une image légère (ex: alpine), réduisant ainsi la surface d'attaque et la taille de l'image.</li><li><strong>.dockerignore :</strong> Créer un fichier <code>.dockerignore</code> pour exclure les répertoires inutiles (comme <code>.git</code>, <code>node_modules</code> locaux, ou logs) afin d'accélérer le contexte de build.</li><li><strong>Sécurité :</strong> Éviter l'exécution en tant que <code>root</code> à l'intérieur du conteneur en utilisant l'instruction <code>USER</code>.</li></ul><p><strong>Erreurs courantes :</strong> L'erreur classique consiste à installer trop de dépendances inutiles ou à ne pas verrouiller les versions des paquets, ce qui rend le build non déterministe (le build fonctionne aujourd'hui mais échouera peut-être dans deux mois suite à une mise à jour d'un dépôt externe).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci décrit le résultat final (l'image), pas le fichier source lui-même. Le Dockerfile est l'instruction, l'image est le résultat."
      },
      {
        "l": "C",
        "t": "C'est la définition d'un <strong>conteneur</strong>. L'image est le plan (blueprint), le conteneur est l'objet concret en cours d'exécution."
      },
      {
        "l": "D",
        "t": "Il s'agit de la définition d'un registre ou d'un hub (comme Docker Hub ou Amazon ECR), et non d'un fichier de configuration local."
      }
    ],
    "examiner": "L'examinateur cherche ici à valider votre compréhension fondamentale de la distinction entre les concepts : Code source (Dockerfile), Artefact (Image) et Runtime (Conteneur). Le piège classique est de confondre le fichier de build avec l'instance active.",
    "summary": [
      "Le Dockerfile est un script de construction textuel, pas un service ou un conteneur actif.",
      "Chaque instruction d'un Dockerfile crée une couche immuable dans l'image finale.",
      "L'utilisation de builds multi-étapes est la norme industrielle pour optimiser la taille et la sécurité des images.",
      "Un Dockerfile doit être maintenu dans le contrôle de version (Git) au même titre que le code source."
    ]
  },
  {
    "num": "Q6",
    "partie": "Concepts fondamentaux de Docker",
    "q": "Lequel des énoncés suivants décrit correctement un conteneur Docker ?",
    "choices": {
      "A": "Un fichier texte décrivant les dépendances d’une application.",
      "B": "Une images Docker.",
      "C": "Une instance d’une application créée à partir d’une image Docker.",
      "D": "Un package composé d’une application et de toutes ses dépendances."
    },
    "correct": "C",
    "explanation": "<p>Pour comprendre ce qu'est un conteneur Docker, il est crucial de faire la distinction fondamentale entre la <strong>définition</strong> (l'image) et l'<strong>exécution</strong> (le conteneur). Dans l'écosystème Docker, une image est un modèle immuable, un fichier binaire composé de plusieurs couches (layers) qui contient le système de fichiers, le code source, les bibliothèques et les variables d'environnement nécessaires.</p><p>Le <strong>conteneur</strong>, quant à lui, représente l'instance vivante de cette image. Lorsqu'une commande 'docker run' est exécutée, Docker prend cette image statique et y ajoute une <strong>couche inscriptible</strong> (read-write layer) au-dessus des couches immuables (read-only). Cette couche permet au conteneur de manipuler ses propres données en mémoire et sur le disque sans modifier l'image source, permettant ainsi de démarrer des dizaines de conteneurs à partir d'une seule image.</p><p><strong>Architecture et cycle de vie :</strong> Un conteneur est un processus isolé du système hôte par les namespaces (pour l'isolation des ressources comme le réseau, le PID, ou le mount) et les cgroups (pour la limitation des ressources comme le CPU et la RAM). Contrairement à une machine virtuelle, il ne virtualise pas le matériel, mais partage le noyau du système hôte. Les bonnes pratiques DevOps dictent qu'un conteneur doit être éphémère (pouvoir être supprimé et recréé sans perte de données critique) et ne doit exécuter qu'un seul processus principal (PID 1).</p><p><strong>Cas d'usage :</strong> L'utilisation de conteneurs permet d'assurer la portabilité : 'Build once, run anywhere'. Une application testée localement dans un conteneur se comportera de manière identique en production, éliminant le problème classique du 'ça fonctionne sur ma machine'.</p><p><strong>Erreurs courantes :</strong> Les débutants confondent souvent le conteneur avec l'image ou tentent d'y stocker des données persistantes (bases de données, logs) directement dans la couche inscriptible. Pour la persistance, il faut impérativement utiliser des <strong>Volumes</strong> ou des Bind Mounts, car les données stockées dans le conteneur sont perdues dès que celui-ci est supprimé.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci décrit un 'Dockerfile'. Le Dockerfile est le script de construction, tandis que le conteneur est le résultat final opérationnel."
      },
      {
        "l": "B",
        "t": "L'image est le modèle ou le blueprint. Le conteneur est l'objet physique (processus) issu de ce modèle. Confondre les deux empêche de comprendre la gestion des états."
      },
      {
        "l": "D",
        "t": "Cette description se rapproche plus de l'image (le package). Bien que le conteneur contienne ces éléments, il est avant tout une instance en cours d'exécution, pas le package statique lui-même."
      }
    ],
    "examiner": "L'examinateur teste ici votre compréhension fondamentale de l'architecture Docker. Le piège classique est de confondre la structure statique (l'image) avec la structure dynamique (le conteneur). La question évalue si vous saisissez la notion d'instanciation propre aux systèmes orientés conteneurs.",
    "summary": [
      "Une image Docker est un modèle statique et immuable en lecture seule.",
      "Un conteneur est une instance vivante et en lecture-écriture créée à partir d'une image.",
      "Les conteneurs sont isolés par le noyau hôte via les namespaces et cgroups.",
      "Les conteneurs doivent être traités comme éphémères ; la persistance des données nécessite des volumes externes."
    ]
  },
  {
    "num": "Q8",
    "partie": "Concepts fondamentaux de Docker",
    "q": "Un conteneur Docker est une instance d’une image avec une configuration spécifique.",
    "choices": {
      "A": "Vrai",
      "B": "Faux"
    },
    "correct": "A",
    "explanation": "<p>Pour comprendre la nature d'un conteneur Docker, il est crucial de distinguer la notion d'<strong>image</strong> de celle de <strong>conteneur</strong>, en utilisant l'analogie de la Programmation Orientée Objet (POO).</p><p>Une <strong>image Docker</strong> est analogue à une <strong>classe</strong> : c'est un modèle immuable, une structure en couches (layer-based) qui contient le code, le runtime, les bibliothèques, les variables d'environnement et les fichiers de configuration nécessaires à l'exécution d'une application. Elle est stockée dans un registre (Docker Hub, ECR, etc.) et ne change jamais une fois construite.</p><p>Le <strong>conteneur</strong>, quant à lui, est l'<strong>instance</strong> de cette image en cours d'exécution. Lorsqu'on exécute la commande <code>docker run</code>, Docker crée une couche inscriptible (le <em>container layer</em>) au-dessus des couches immuables de l'image. C'est ici que résident les spécificités de l'exécution :</p><ul><li><strong>Configuration dynamique :</strong> Vous pouvez injecter des variables d'environnement au runtime (<code>-e</code>), mapper des ports spécifiques, ou attacher des volumes de données.</li><li><strong>Isolation :</strong> Le conteneur utilise les fonctionnalités du noyau Linux (cgroups pour les ressources, namespaces pour l'isolation).</li><li><strong>Cycle de vie :</strong> Un conteneur peut être démarré, arrêté, mis en pause ou supprimé, alors que l'image reste intacte.</li></ul><p><strong>Bonnes pratiques DevOps :</strong> Il est impératif de suivre le principe d'<strong>immuabilité</strong>. Un conteneur ne doit pas être modifié manuellement (via <code>docker exec</code>). Si une configuration change, vous devez reconstruire une nouvelle image, la tester dans votre pipeline CI/CD, et redéployer le conteneur. C'est ce qu'on appelle l'infrastructure immuable.</p><p><strong>Erreurs classiques :</strong> Stocker des données persistantes à l'intérieur du conteneur sans utiliser de volumes. Puisque le conteneur est éphémère, toute donnée non stockée sur un volume externe ou un service de base de données sera perdue lors de la suppression du conteneur.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Choisir 'Faux' témoigne d'une confusion entre le modèle (l'image) et l'instance (le conteneur). Docker repose fondamentalement sur ce pattern instance-modèle ; le conteneur est précisément l'instance active qui permet de matérialiser la configuration définie par l'image."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si vous comprenez les fondamentaux de l'architecture Docker et la différence sémantique entre une image statique et un conteneur éphémère. Le piège classique est de confondre l'image comme un exécutable traditionnel au lieu de la concevoir comme un modèle de déploiement.",
    "summary": [
      "Une image Docker est un modèle immuable (classe) alors qu'un conteneur est son instance active (objet).",
      "Les conteneurs ajoutent une couche inscriptible au-dessus de l'image pour permettre l'exécution personnalisée.",
      "La configuration peut être injectée au runtime via des variables d'environnement ou des volumes.",
      "L'immuabilité est un pilier : ne modifiez jamais un conteneur en direct, reconstruisez l'image."
    ]
  },
  {
    "num": "Q10",
    "partie": "Concepts fondamentaux de Docker",
    "q": "Laquelle des propositions suivantes explique la relation entre une image Docker et un conteneur Docker ?",
    "choices": {
      "A": "Un conteneur Docker est utilisé pour démarrer une image Docker.",
      "B": "Un conteneur Docker est une instance en cours d’exécution d’une image.",
      "C": "Un conteneur Docker est une collection de couches d’images.",
      "D": "Un conteneur Docker est constitué de deux ou plusieurs images qui partagent un environnement d’exécution commun."
    },
    "correct": "B",
    "explanation": "<p>Pour bien comprendre la philosophie Docker, il est crucial de distinguer le concept de <strong>modèle</strong> (l'image) du concept d'<strong>instance</strong> (le conteneur). Dans le cycle de vie du développement logiciel moderne, cette distinction est analogue à la relation entre une classe et un objet dans la programmation orientée objet.</p><p>Une <strong>Image Docker</strong> est un package immuable, en lecture seule, composé d'un système de fichiers racine et de métadonnées (variables d'environnement, commandes de démarrage, ports exposés). Elle est construite étape par étape via un Dockerfile, chaque instruction créant une couche (layer) immuable. Une image ne \"fait\" rien ; elle est le plan directeur, stocké sur un registre (comme Docker Hub ou Amazon ECR).</p><p>Un <strong>Conteneur Docker</strong>, quant à lui, est l'instanciation de cette image. Lorsqu'une commande <code>docker run</code> est exécutée, le moteur Docker prend l'image et y ajoute une fine couche inscriptible appelée <em>Read-Write Layer</em> au sommet des couches en lecture seule. Cette couche permet au conteneur de modifier l'état du système de fichiers pendant son exécution (création de logs, modification de fichiers de configuration temporaires). Par conséquent, un conteneur est un processus isolé et éphémère qui utilise les ressources du noyau Linux de l'hôte.</p><p><strong>Bonnes pratiques DevOps :</strong> <ul><li><strong>Immuabilité :</strong> Ne modifiez jamais un conteneur en cours d'exécution. Si vous avez besoin de changer la configuration, modifiez l'image (le Dockerfile) et redéployez un nouveau conteneur.</li><li><strong>Éphémérité :</strong> Concevez vos conteneurs pour qu'ils puissent être arrêtés et remplacés instantanément sans perte de données critiques (utilisez les Volumes Docker pour la persistance).</li><li><strong>Minimalisme :</strong> Utilisez des images de base légères (comme Alpine Linux) pour réduire la surface d'attaque et accélérer les temps de déploiement.</li></ul></p><p><strong>Erreurs courantes :</strong> La confusion entre le stockage (image) et l'exécution (conteneur) mène souvent à des erreurs où les développeurs tentent d'exécuter des modifications persistantes à l'intérieur d'un conteneur, lesquelles sont perdues lors de la suppression de celui-ci.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que sémantiquement proche, cette phrase est imprécise. On ne démarre pas un conteneur 'pour' une image, on exécute une image 'pour créer' un conteneur. L'aspect 'instance' est le terme technique requis."
      },
      {
        "l": "C",
        "t": "Ceci décrit la structure interne de l'image (l'union file system ou Overlay2), mais ne définit pas le conteneur lui-même, qui est une entité vivante et non une simple pile de fichiers."
      },
      {
        "l": "D",
        "t": "C'est une description erronée. Un conteneur est basé sur une image unique (bien que cette image puisse être multi-stage). Si vous avez besoin de plusieurs images, vous utilisez l'orchestration comme Docker Compose ou Kubernetes."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier que le candidat a bien compris l'architecture fondamentale du moteur Docker. Le piège classique est de confondre la structure statique (l'image) avec le processus dynamique (le conteneur).",
    "summary": [
      "Une image Docker est une structure statique, immuable, en lecture seule.",
      "Un conteneur est l'instance active et dynamique d'une image.",
      "L'exécution crée une couche inscriptible au-dessus de l'image.",
      "Les conteneurs sont éphémères : les modifications non persistées dans des volumes sont perdues à la suppression."
    ]
  },
  {
    "num": "Q1",
    "partie": "Fondamentaux de Docker",
    "q": "Quelle instruction doit apparaître en premier dans le fichier Dockerfile ?",
    "choices": {
      "A": "IMAGE",
      "B": "ENV",
      "C": "FROM",
      "D": "RUN"
    },
    "correct": "C",
    "explanation": "<p>Dans l'univers de la conteneurisation avec Docker, le <strong>Dockerfile</strong> est le manifeste qui décrit la recette de fabrication d'une image. L'instruction <strong>FROM</strong> est la pierre angulaire de ce processus. Elle définit l'image de base (ou <em>base image</em>) sur laquelle votre application sera construite. Sans cette déclaration initiale, le moteur Docker ne peut pas initialiser le système de fichiers racine du conteneur.</p><p><strong>Pourquoi FROM est-elle impérative ?</strong></p><ul><li><strong>Initialisation de l'environnement :</strong> L'instruction FROM indique à Docker de télécharger (si elle n'est pas déjà présente localement) l'image parente depuis un registre comme Docker Hub. Cette image contient le système d'exploitation minimal (comme Alpine Linux ou Debian) et les bibliothèques système nécessaires.</li><li><strong>Dépendances en cascade :</strong> Chaque directive suivante (RUN, COPY, ADD) sera exécutée dans le contexte du système de fichiers fourni par cette image de base. C'est le fondement de la hiérarchie des images Docker (<em>image layering</em>).</li><li><strong>Cas particulier :</strong> La seule exception technique est l'utilisation de <code>FROM scratch</code>, qui permet de créer une image vide, souvent utilisée pour des binaires statiques (écrits en Go ou Rust), mais même dans ce cas, <code>FROM</code> reste la première instruction.</li></ul><p><strong>Bonnes pratiques DevOps :</strong></p><ul><li><strong>Utilisation de tags spécifiques :</strong> Évitez le tag <code>latest</code> en production. Préférez des tags de version immuables (ex: <code>node:18.16.0-alpine</code>) pour garantir la reproductibilité des builds.</li><li><strong>Images Multi-stages :</strong> L'instruction FROM peut apparaître plusieurs fois dans un même Dockerfile pour mettre en œuvre le <em>multi-stage build</em>, permettant de séparer l'environnement de compilation (build) de l'environnement d'exécution (runtime), réduisant ainsi drastiquement la taille de l'image finale.</li><li><strong>Sécurité :</strong> Privilégiez des images de base certifiées (ex: <em>distroless</em>) pour minimiser la surface d'attaque en excluant les gestionnaires de paquets et les shells inutiles.</li></ul><p><strong>Erreurs courantes :</strong> Placer des instructions comme <code>ARG</code> avant <code>FROM</code> (sauf si l'ARG est utilisé dans le FROM lui-même), ou oublier de définir une image de base stable, ce qui entraîne des comportements non déterministes lors des déploiements en environnement de production.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'instruction 'IMAGE' n'existe pas dans la syntaxe Dockerfile. C'est une confusion fréquente avec la terminologie générale ou le nom de l'objet manipulé."
      },
      {
        "l": "B",
        "t": "L'instruction 'ENV' permet de définir des variables d'environnement. Si elle est placée avant 'FROM', Docker renverra une erreur de syntaxe car il ne sait pas dans quel contexte applicatif ces variables doivent être injectées."
      },
      {
        "l": "D",
        "t": "L'instruction 'RUN' exécute des commandes dans une nouvelle couche au-dessus de l'image actuelle. Sans 'FROM' préalable, il n'y a aucun système d'exploitation ou environnement d'exécution pour interpréter ces commandes."
      }
    ],
    "examiner": "L'examinateur cherche à tester votre compréhension fondamentale du cycle de vie d'une image Docker et de la hiérarchie de construction des couches. Le piège classique consiste à oublier que le Dockerfile est un script séquentiel strict où le contexte doit être établi avant toute modification.",
    "summary": [
      "L'instruction FROM doit obligatoirement figurer comme première instruction non commentée d'un Dockerfile.",
      "Elle définit l'image parente qui sert de base au système de fichiers du conteneur.",
      "L'utilisation de tags de version spécifiques dans FROM est cruciale pour assurer la stabilité des déploiements.",
      "Le multi-stage build permet plusieurs instructions FROM pour optimiser la taille et la sécurité des images."
    ]
  },
  {
    "num": "Q2",
    "partie": "Fondamentaux de Docker",
    "q": "Le registre Docker est un endroit où l’on peut stocker et distribuer des ________ Docker.",
    "choices": {
      "A": "fichiers",
      "B": "images",
      "C": "codes"
    },
    "correct": "B",
    "explanation": "<p>Le <strong>registre Docker</strong> est un composant fondamental de l'écosystème conteneurisé. Pour bien comprendre son rôle, il faut distinguer la phase de <em>build</em> de la phase de <em>run</em>. Un registre est un service de stockage et de distribution, similaire à un dépôt GitHub pour le code, mais dédié aux artéfacts binaires immuables appelés <strong>images</strong>.</p><p>Une image Docker est un package autonome contenant tout le nécessaire pour exécuter une application : le code, le runtime, les bibliothèques, les variables d'environnement et les fichiers de configuration. Une fois qu'une image est construite via la commande <code>docker build</code>, elle est stockée localement. Pour la rendre disponible dans d'autres environnements (Staging, Production) ou pour d'autres membres de l'équipe, il est nécessaire de la « pousser » (push) vers un registre.</p><p><strong>Architecture et fonctionnement :</strong></p><ul><li><strong>Stockage :</strong> Le registre utilise un système de stockage de type blob pour conserver les différentes couches (layers) de l'image. Grâce au système de couches, seules les modifications sont transférées, optimisant ainsi la bande passante.</li><li><strong>Distribution :</strong> Les environnements cibles (comme Kubernetes, ECS ou des serveurs isolés) « tirent » (pull) ces images pour créer des conteneurs.</li><li><strong>Types de registres :</strong> Il existe des registres publics comme <em>Docker Hub</em>, et des registres privés (Cloud-native) tels que <em>AWS ECR</em>, <em>Google Artifact Registry</em> ou <em>Azure Container Registry</em>, qui offrent des fonctionnalités de sécurité avancées, comme le scan de vulnérabilités.</li></ul><p><strong>Bonnes pratiques DevOps :</strong></p><ul><li><strong>Immuabilité :</strong> Ne modifiez jamais une image déjà poussée. Utilisez des tags explicites (évitez 'latest' en production) pour garantir la reproductibilité.</li><li><strong>Sécurité :</strong> Intégrez le scan d'images dans votre pipeline CI/CD pour détecter les failles connues avant de valider l'image dans le registre.</li><li><strong>Gestion du cycle de vie :</strong> Implémentez des politiques de nettoyage (lifecycle policies) pour supprimer les anciennes images inutilisées afin de réduire les coûts de stockage.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'fichiers' est trop générique. Bien qu'une image soit techniquement composée de fichiers, le registre Docker manipule des objets spécifiques (images et tags) structurés selon le format OCI (Open Container Initiative)."
      },
      {
        "l": "C",
        "t": "Le code source (fichiers .java, .py, etc.) appartient à un système de gestion de versions (VCS) comme Git. Le registre Docker stocke le résultat compilé et packagé, jamais le code source brut."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la distinction fondamentale entre le code source (développement) et l'artéfact déployable (distribution). Le piège classique est de confondre le gestionnaire de code source avec le gestionnaire d'images.",
    "summary": [
      "Un registre Docker est un service dédié au stockage et à la distribution d'images Docker, et non de code source.",
      "Les images Docker sont composées de couches immuables qui facilitent le déploiement rapide.",
      "L'utilisation d'un registre privé est indispensable en entreprise pour sécuriser les images et gérer les accès.",
      "Le versionnage rigoureux des images avec des tags uniques est une pratique critique pour éviter les erreurs en production."
    ]
  },
  {
    "num": "Q3",
    "partie": "Fondamentaux de Docker",
    "q": "Quel est le but d’une image ?",
    "choices": {
      "A": "Fournir un processus traditionnel pour une application.",
      "B": "Fournir la configuration réseau pour la pile réseau d’une application.",
      "C": "Fournir le système de fichiers pour une application.",
      "D": "Fournir un processus isolé pour une application."
    },
    "correct": "C",
    "explanation": "<p>Dans l'écosystème de la conteneurisation (Docker, OCI), une <strong>image</strong> est définie techniquement comme un modèle immuable et en lecture seule composé d'une série de couches (layers). Son rôle fondamental est de constituer le <strong>système de fichiers racine (rootfs)</strong> qui sera utilisé par le conteneur lors de son exécution.</p><p>Contrairement à une machine virtuelle qui embarque un noyau (kernel) complet, l'image de conteneur contient uniquement les dépendances, les bibliothèques (binaries), les fichiers de configuration et les exécutables nécessaires à l'application. Lorsqu'un conteneur est lancé, le moteur de conteneur (runtime) monte cette structure de fichiers et y ajoute une couche finale inscriptible (writable layer) pour permettre la gestion des données temporaires.</p><p><strong>Concepts clés :</strong></p><ul><li><strong>Immuabilité :</strong> Une image ne change jamais. Pour mettre à jour une application, on construit une nouvelle version de l'image (nouveau hash).</li><li><strong>Système de fichiers en couches (Union File System) :</strong> Chaque instruction dans un Dockerfile (RUN, COPY, ADD) crée une nouvelle couche, optimisant ainsi le stockage et la distribution grâce à la déduplication.</li><li><strong>Portabilité :</strong> En fournissant l'intégralité du système de fichiers requis, l'image garantit que l'application s'exécutera de manière identique sur une machine de développement, un serveur de test ou un cluster Kubernetes en production (le concept 'Build once, run anywhere').</li></ul><p><strong>Bonnes pratiques :</strong> Pour minimiser la surface d'attaque et réduire la consommation réseau, privilégiez les <em>distroless images</em> ou des bases légères (comme Alpine Linux) afin de ne conserver que le strict nécessaire au fonctionnement de l'application dans le système de fichiers.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une confusion fréquente. L'image ne fournit pas le processus lui-même en cours d'exécution ; c'est le conteneur qui est une instance en cours d'exécution (le processus). L'image n'est que le package statique."
      },
      {
        "l": "B",
        "t": "L'image ne gère pas la pile réseau. La configuration réseau est déléguée à l'orchestrateur (Kubernetes, Docker Compose, CNI) au moment de l'exécution du conteneur."
      },
      {
        "l": "D",
        "t": "L'isolation est assurée par les primitives du noyau Linux (Namespaces et Cgroups) lors de la création du conteneur par le runtime, et non par l'image elle-même, qui reste un simple système de fichiers statique."
      }
    ],
    "examiner": "L'examinateur teste ici votre capacité à distinguer l'image (le package statique de fichiers) du conteneur (le processus isolé en cours d'exécution). Le piège classique consiste à attribuer à l'image des responsabilités dynamiques (réseau, processus, isolation) qui relèvent en réalité de l'environnement d'exécution.",
    "summary": [
      "Une image est un modèle statique en lecture seule, pas un processus en cours d'exécution.",
      "La fonction première d'une image est de fournir le système de fichiers (rootfs) requis pour l'application.",
      "Les images utilisent une structure en couches (layers) pour optimiser le stockage et le transfert.",
      "L'isolation et la configuration réseau sont gérées par le runtime de conteneur, jamais par l'image."
    ]
  },
  {
    "num": "Q4",
    "partie": "Fondamentaux de Docker",
    "q": "Laquelle des affirmations suivantes est vraie à propos de l’architecture de Docker?",
    "choices": {
      "A": "L’architecture est de type client-serveur.",
      "B": "Les conteneurs Docker sont exécutés en tant que root.",
      "C": "Le démon doit être exécuté en tant que root."
    },
    "correct": "D",
    "explanation": "<p>L'architecture de Docker repose sur une conception modulaire et distribuée qui sépare clairement les responsabilités entre l'interface utilisateur et le moteur d'exécution. <strong>L'architecture client-serveur</strong> est le pilier fondamental de Docker : le client Docker (CLI) communique via une API REST avec le démon Docker (dockerd), qui est le moteur de conteneurisation assurant la gestion des images, des réseaux et des cycles de vie des conteneurs.</p><p>Concernant la sécurité, la question des privilèges est centrale dans l'écosystème Docker :</p><ul><li><strong>Exécution en tant que root dans les conteneurs :</strong> Par défaut, si aucune instruction <code>USER</code> n'est spécifiée dans le Dockerfile, les processus à l'intérieur du conteneur s'exécutent avec l'utilisateur root. Bien que cette pratique soit fonctionnelle, elle représente un risque de sécurité majeur en cas de 'breakout' de conteneur. Les bonnes pratiques DevOps imposent de définir un utilisateur non-privilégié dans le Dockerfile.</li><li><strong>Le démon Docker et les privilèges :</strong> Historiquement, le démon Docker (dockerd) nécessite des privilèges root pour interagir avec le noyau Linux (cgroups, namespaces, netfilter). Cependant, les versions récentes ont introduit le mode 'Rootless' pour atténuer les risques d'exposition du démon aux vecteurs d'attaque, permettant ainsi d'exécuter le démon sans privilèges élevés.</li></ul><p>Dans un contexte de certification, il est crucial de comprendre que Docker n'est pas une simple application de virtualisation, mais un orchestrateur de processus isolés utilisant les primitives du noyau Linux. La gestion des permissions, la ségrégation des privilèges et la compréhension de la communication API entre le client et le démon constituent les fondements d'une architecture conteneurisée robuste.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que vraie, cette réponse est incomplète car l'architecture Docker implique également des spécificités liées aux privilèges (root) qui sont tout aussi fondamentales."
      },
      {
        "l": "B",
        "t": "Bien que ce soit un comportement par défaut, affirmer que c'est une vérité absolue sans mentionner la capacité de restreindre les droits est une simplification dangereuse."
      },
      {
        "l": "C",
        "t": "C'est une affirmation limitative qui ignore l'existence du mode 'Rootless' introduit dans les versions modernes pour sécuriser l'hôte."
      }
    ],
    "examiner": "L'examinateur cherche à tester votre connaissance transversale de Docker : non seulement sa structure logique (client-serveur), mais aussi les implications de sécurité liées aux privilèges systèmes. Le piège classique est de considérer Docker comme une 'boîte noire' sécurisée par défaut sans comprendre les enjeux de la racine (root) dans le modèle de menace.",
    "summary": [
      "Docker utilise une architecture client-serveur communiquant via une API REST.",
      "Par défaut, les conteneurs s'exécutent en tant que root, ce qui nécessite une configuration explicite via l'instruction USER pour une meilleure sécurité.",
      "Le démon Docker nécessite traditionnellement des privilèges root pour manipuler les ressources du noyau Linux.",
      "L'adoption du mode 'Rootless' est encouragée pour réduire la surface d'attaque en production."
    ]
  },
  {
    "num": "Q5",
    "partie": "Fondamentaux de Docker",
    "q": "Sur quels concepts de base Docker repose-t-il ?",
    "choices": {
      "A": "Images et conteneurs",
      "B": "Images et machines virtuelles",
      "C": "Images et archives",
      "D": "Vmware et VirtualBox"
    },
    "correct": "A",
    "explanation": "<p>Docker est une plateforme open-source qui a révolutionné le développement logiciel en introduisant la <strong>conteneurisation</strong> comme standard industriel. Contrairement à la virtualisation matérielle classique, Docker repose sur deux piliers fondamentaux : <strong>les images</strong> et <strong>les conteneurs</strong>.</p><p><strong>1. Les Images Docker :</strong> Une image est un modèle immuable (read-only) composé d'une série de couches (layers). Elle contient tout le nécessaire pour exécuter une application : le code, le runtime, les bibliothèques, les variables d'environnement et les fichiers de configuration. Les images sont construites à partir d'un <em>Dockerfile</em>, un fichier texte contenant les instructions étape par étape. Grâce à la gestion des couches, Docker optimise le stockage en ne dupliquant pas les fichiers communs entre différentes images.</p><p><strong>2. Les Conteneurs Docker :</strong> Un conteneur est une instance exécutable d'une image. Là où l'image est statique, le conteneur est dynamique et éphémère. Le moteur Docker (Docker Engine) isole le conteneur du système hôte en utilisant les fonctionnalités natives du noyau Linux (cgroups pour la limitation des ressources et namespaces pour l'isolation des processus). Cela permet à une application de s'exécuter de manière identique quel que soit l'environnement (développement, test, production).</p><p><strong>Bonnes pratiques DevOps :</strong> Pour garantir l'efficacité, il est recommandé de suivre le principe du <em>'Single Responsibility'</em> par conteneur, d'utiliser des images de base légères (comme Alpine Linux) pour réduire la surface d'attaque, et de gérer les données persistantes via des <em>Volumes</em> plutôt que d'écrire directement dans la couche inscriptible du conteneur.</p><p><strong>Erreurs courantes :</strong> Une erreur classique est de traiter les conteneurs comme des machines virtuelles (en y installant plusieurs services comme SSH ou des bases de données internes). Un conteneur doit idéalement gérer un seul processus principal et être jetable.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "C'est une confusion fréquente. Les machines virtuelles (VM) incluent un système d'exploitation complet (OS Guest), ce qui les rend lourdes. Docker partage le noyau de l'hôte, ce qui le rend beaucoup plus léger."
      },
      {
        "l": "C",
        "t": "Les archives sont des formats de stockage de fichiers (comme .tar ou .zip). Bien qu'une image Docker puisse être exportée en tant qu'archive (tarball), ce n'est pas le concept structurel fondamental qui définit le moteur d'exécution Docker."
      },
      {
        "l": "D",
        "t": "VMware et VirtualBox sont des hyperviseurs de type 1 ou 2 dédiés à la virtualisation matérielle. Docker n'est pas un hyperviseur et ne cherche pas à remplacer ces outils, mais à offrir une alternative plus performante pour le déploiement applicatif."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier votre compréhension de la différence fondamentale entre la virtualisation (VM) et la conteneurisation. Le piège classique est d'associer Docker aux hyperviseurs traditionnels alors qu'il s'agit d'une technologie d'isolation au niveau du noyau OS.",
    "summary": [
      "Une image est un modèle immuable contenant le code et ses dépendances.",
      "Un conteneur est une instance active et isolée d'une image.",
      "Docker utilise des fonctionnalités du noyau Linux (namespaces/cgroups) pour l'isolation.",
      "Il faut privilégier la légèreté des images et l'approche 'un conteneur, un service'."
    ]
  },
  {
    "num": "Q7",
    "partie": "Fondamentaux de Docker",
    "q": "Cette commande Dockerfile spécifie l’image de base à utiliser lors de la création d’une image Docker.",
    "choices": {
      "A": "BASE",
      "B": "CMD",
      "C": "ADD",
      "D": "FROM"
    },
    "correct": "D",
    "explanation": "<p>La directive <strong>FROM</strong> est le point de départ incontournable de tout Dockerfile. Dans l'écosystème Docker, une image est construite par couches (layers) successives, et la commande <code>FROM</code> définit le socle, ou l'image parente, sur laquelle ces nouvelles couches seront ajoutées.</p><p><strong>Concepts théoriques :</strong> Chaque image Docker suit une structure hiérarchique. Sans image de base, il est impossible de démarrer un build. La commande <code>FROM</code> doit obligatoirement être la première instruction du Dockerfile (à l'exception des arguments <code>ARG</code> déclarés avant le <code>FROM</code>). Elle définit l'environnement d'exécution (OS, bibliothèques système, configuration initiale).</p><p><strong>Cas d'usage et bonnes pratiques :</strong><ul><li><strong>Utilisation de tags spécifiques :</strong> Évitez d'utiliser systématiquement le tag <code>latest</code> en production. Préférez des versions immuables (ex: <code>python:3.9.18-slim</code>) pour garantir la reproductibilité.</li><li><strong>Images 'Slim' ou 'Alpine' :</strong> Pour optimiser la sécurité et la taille de vos images, privilégiez les variantes <code>-slim</code> (basées sur Debian avec le strict minimum) ou <code>alpine</code> (basées sur une distribution ultra-légère). Cela réduit drastiquement la surface d'attaque.</li><li><strong>Multi-stage builds :</strong> Une pratique avancée consiste à utiliser plusieurs instructions <code>FROM</code> dans un seul Dockerfile. Cela permet de séparer l'environnement de build (avec tous les outils de compilation) de l'environnement d'exécution final (plus léger et sécurisé).</li></ul></p><p><strong>Erreurs courantes :</strong> Une erreur classique consiste à oublier la gestion des dépendances système dans l'image de base choisie. Par exemple, choisir une image <code>scratch</code> (vide) demande de gérer manuellement tous les binaires et bibliothèques nécessaires, ce qui est réservé aux experts.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'BASE' n'existe pas dans le langage Dockerfile. Il s'agit d'un concept théorique mais pas d'une instruction syntaxique reconnue par le démon Docker."
      },
      {
        "l": "B",
        "t": "La commande 'CMD' définit la commande par défaut qui sera exécutée lors du lancement du conteneur, et non lors de la construction de l'image."
      },
      {
        "l": "C",
        "t": "La commande 'ADD' est utilisée pour copier des fichiers ou des répertoires depuis l'hôte vers le système de fichiers de l'image. Elle n'a aucun rôle dans la définition du point de départ de l'image."
      }
    ],
    "examiner": "L'examinateur teste ici la connaissance fondamentale de la syntaxe Docker. Le piège classique est de confondre la phase de 'Build' (construction) et la phase de 'Runtime' (exécution) en mélangeant les instructions comme FROM, CMD, et ENTRYPOINT.",
    "summary": [
      "La commande FROM est impérative et doit figurer en première ligne du Dockerfile.",
      "Utilisez des tags de version précis plutôt que 'latest' pour garantir la stabilité.",
      "Les images 'slim' ou 'alpine' sont recommandées pour réduire la surface d'attaque et accélérer le déploiement.",
      "Le multi-stage build utilise plusieurs instructions FROM pour optimiser la taille finale des images."
    ]
  },
  {
    "num": "Q8",
    "partie": "Fondamentaux de Docker",
    "q": "Lequel des éléments suivants n’est pas une directive Dockerfile recommandée ?",
    "choices": {
      "A": "MAINTAINER",
      "B": "COPY",
      "C": "LABEL",
      "D": "FROM"
    },
    "correct": "A",
    "explanation": "<p>Dans l'écosystème Docker, la gestion des métadonnées est cruciale pour la maintenabilité et la traçabilité des images au sein d'une chaîne CI/CD. Historiquement, la directive <strong>MAINTAINER</strong> était utilisée pour spécifier l'auteur du Dockerfile. Cependant, cette instruction est aujourd'hui <strong>dépréciée</strong> au profit de la directive <strong>LABEL</strong>.</p><p>Pourquoi ce changement ? L'instruction <em>LABEL</em> offre une approche beaucoup plus granulaire et extensible. Contrairement à <em>MAINTAINER</em> qui se limitait à une chaîne de caractères fixe, <em>LABEL</em> permet d'ajouter des paires clé-valeur arbitraires. Cela suit la philosophie <em>Infrastructure as Code</em> (IaC), où les métadonnées deviennent programmables.</p><p><strong>Bonnes pratiques avec LABEL :</strong><ul><li>Utiliser l'espace de noms (namespace) pour éviter les collisions (ex: <code>com.example.version</code>).</li><li>Regrouper les labels dans une seule instruction pour limiter le nombre de couches (layers) dans l'image finale, optimisant ainsi la taille du cache.</li><li>Inclure des informations pertinentes pour l'audit : version, environnement, mainteneur, lien vers le repo source, et date de build.</li></ul></p><p>L'utilisation de <em>FROM</em> est indispensable pour définir l'image de base (ou <em>scratch</em>), tandis que <em>COPY</em> est la méthode privilégiée pour transférer des fichiers du contexte de build vers l'image, étant plus sécurisée et transparente que <em>ADD</em> qui peut effectuer des décompressions automatiques non souhaitées.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "COPY est une directive fondamentale et recommandée. Elle est préférée à ADD pour copier des fichiers, car elle est plus explicite et évite les comportements implicites comme l'extraction automatique d'archives."
      },
      {
        "l": "C",
        "t": "LABEL est la méthode moderne recommandée pour ajouter des métadonnées. Elle remplace avantageusement MAINTAINER et permet une meilleure inspection des images via 'docker inspect'."
      },
      {
        "l": "D",
        "t": "FROM est obligatoire dans tout Dockerfile, c'est la directive racine qui définit l'image parente. Sans elle, le build est techniquement impossible."
      }
    ],
    "examiner": "L'examinateur teste ici votre connaissance des bonnes pratiques actuelles et votre suivi des évolutions de la documentation officielle Docker. Le piège classique est de conserver des réflexes issus de tutoriels obsolètes datant d'avant 2017.",
    "summary": [
      "La directive MAINTAINER est obsolète et ne doit plus être utilisée dans les projets modernes.",
      "Privilégiez l'instruction LABEL pour documenter vos images Docker via des paires clé-valeur.",
      "Regroupez vos instructions LABEL pour minimiser le nombre de couches générées dans l'image.",
      "Utilisez COPY au lieu de ADD pour les transferts de fichiers simples afin d'accroître la sécurité et la prédictibilité du build."
    ]
  },
  {
    "num": "Q9",
    "partie": "Fondamentaux de Docker",
    "q": "Laquelle des interfaces réseau suivantes est créée lorsque vous installez le runtime Docker sur l’hôte Docker ?",
    "choices": {
      "A": "Docker1",
      "B": "Docker0",
      "C": "eth0",
      "D": "eth1"
    },
    "correct": "B",
    "explanation": "<p>Lorsqu'un moteur Docker (Docker Engine) est installé et démarré pour la première fois sur un hôte Linux, il configure automatiquement un pont réseau (bridge network) par défaut nommé <strong>docker0</strong>. Ce composant est la pierre angulaire de la mise en réseau Docker en mode bridge (le mode par défaut).</p><p><strong>Architecture et rôle de docker0 :</strong></p><ul><li><strong>Pont virtuel :</strong> L'interface <em>docker0</em> agit comme un commutateur (switch) virtuel de couche 2. Elle permet aux conteneurs connectés à ce réseau de communiquer entre eux sur l'hôte physique.</li><li><strong>Passerelle (Gateway) :</strong> Elle sert de passerelle par défaut pour tous les conteneurs connectés à ce réseau. Elle possède généralement une adresse IP privée issue de la plage 172.17.0.0/16 par défaut.</li><li><strong>NAT (Network Address Translation) :</strong> Pour que les conteneurs puissent accéder à Internet, Docker configure des règles <em>iptables</em> (ou <em>nftables</em>) sur l'hôte. Ces règles permettent de masquer les adresses IP des conteneurs derrière l'adresse IP de l'hôte (IP Masquerading), assurant ainsi une communication sortante sécurisée.</li></ul><p><strong>Bonnes pratiques DevOps :</strong></p><ul><li><strong>Ne pas dépendre de docker0 :</strong> En production, il est fortement déconseillé d'utiliser le réseau par défaut (bridge) pour vos applications critiques. Préférez la création de <strong>User-Defined Bridges</strong> via la commande <code>docker network create</code>. Cela offre une meilleure isolation, un résolveur DNS interne intégré (permettant la communication par nom de conteneur au lieu de l'IP) et une gestion plus fine de la sécurité.</li><li><strong>Sécurité :</strong> Les conteneurs connectés à <em>docker0</em> peuvent, par défaut, communiquer entre eux. Utilisez l'option <code>--icc=false</code> lors du démarrage du daemon Docker pour interdire cette communication si une segmentation stricte est requise.</li></ul><p><strong>Erreurs classiques :</strong></p><ul><li>Confondre l'interface de l'hôte (comme eth0) avec l'interface du pont Docker.</li><li>Penser que le réseau par défaut est sécurisé pour des environnements multi-locataires (multi-tenancy) : sans isolation réseau, un conteneur peut potentiellement sonder le trafic des autres conteneurs sur le même pont.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Docker1 n'est pas une interface par défaut. Bien que Docker puisse créer des interfaces numérotées lorsqu'on crée des réseaux personnalisés ou lors de configurations spécifiques, ce n'est pas l'interface native créée à l'installation."
      },
      {
        "l": "C",
        "t": "eth0 est l'interface physique ou virtuelle principale de la machine hôte connectée au réseau local ou externe. Elle ne fait pas partie du runtime Docker lui-même."
      },
      {
        "l": "D",
        "t": "eth1 est généralement une deuxième interface physique ou virtuelle de l'hôte. Elle est totalement indépendante du moteur Docker."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend les fondamentaux de la couche réseau Docker. Le piège classique consiste à confondre les interfaces de l'hôte (ethx) avec les abstractions logiques créées par le daemon Docker pour isoler les conteneurs.",
    "summary": [
      "L'interface 'docker0' est le pont réseau par défaut créé automatiquement à l'installation de Docker.",
      "Ce pont permet aux conteneurs d'accéder à l'hôte et à l'extérieur via une passerelle virtuelle et du NAT.",
      "Il est recommandé en production de créer des réseaux personnalisés plutôt que d'utiliser docker0 pour bénéficier du DNS intégré et d'une meilleure isolation.",
      "Les interfaces de type eth0 sont des interfaces matérielles/physiques de l'hôte, et non des composants du runtime Docker."
    ]
  },
  {
    "num": "Q10",
    "partie": "Fondamentaux de Docker",
    "q": "Lequel des éléments suivants n’est pas un composant de l’architecture Docker?",
    "choices": {
      "A": "Docker Registry",
      "B": "Docker Runtime",
      "C": "Docker Engine",
      "D": "Docker Machine"
    },
    "correct": "D",
    "explanation": "<p>Pour comprendre pourquoi <strong>Docker Machine</strong> n'est plus considéré comme un composant central de l'architecture Docker moderne, il est essentiel de distinguer les couches fondamentales de la plateforme. L'architecture Docker repose sur un modèle client-serveur robuste conçu pour la standardisation des environnements applicatifs.</p><p><strong>1. Docker Engine :</strong> C'est le cœur de la technologie. Il s'agit d'une application client-serveur avec trois composants majeurs : un serveur (le démon <code>dockerd</code>), une API REST pour interagir avec le démon, et une interface en ligne de commande (CLI). Le moteur traite les requêtes pour créer, gérer et exécuter des conteneurs.</p><p><strong>2. Docker Runtime :</strong> Souvent confondu avec le moteur, le runtime est le moteur d'exécution bas niveau qui interagit avec le noyau Linux. Historiquement, Docker utilisait <em>libcontainer</em>, mais il s'est standardisé autour de <strong>runc</strong>, une implémentation de l'OCI (Open Container Initiative). C'est lui qui gère réellement les namespaces, les cgroups et le système de fichiers pour isoler les processus.</p><p><strong>3. Docker Registry :</strong> Il s'agit du service de stockage et de distribution des images. Docker Hub est le registre public par défaut, mais les entreprises déploient souvent des registres privés (Docker Trusted Registry, Harbor, ou registres cloud comme ECR/GCR) pour sécuriser leurs artefacts et gérer leur cycle de vie.</p><p><strong>Pourquoi Docker Machine est hors-jeu ?</strong> Docker Machine était un outil permettant d'installer Docker sur des hôtes virtuels et de gérer ces hôtes via des commandes CLI. Avec l'évolution de l'écosystème, notamment l'intégration native de Docker Desktop (qui gère l'orchestration des VM en arrière-plan) et l'omniprésence de Kubernetes (K8s) via des services managés (EKS, AKS, GKE), Docker Machine est devenu obsolète. Il ne fait pas partie du moteur d'exécution standard et n'est plus maintenu activement par Docker Inc. dans la stack technologique moderne.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le Docker Registry est un composant vital. Sans lui, la distribution et le versioning des images de conteneurs seraient impossibles, rendant le concept d'infrastructure immuable caduc."
      },
      {
        "l": "B",
        "t": "Le Docker Runtime est le composant de bas niveau indispensable. Sans le runtime (runc), le démon Docker ne pourrait pas communiquer avec le noyau Linux pour isoler les conteneurs."
      },
      {
        "l": "C",
        "t": "Le Docker Engine est la définition même de la plateforme. C'est l'entité globale qui orchestre le cycle de vie du conteneur. Ignorer ce composant reviendrait à dire que Docker n'existe pas."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si vous connaissez l'évolution de la stack Docker et si vous savez distinguer les outils de gestion d'infrastructure (obsolètes ou externes) des composants natifs du moteur d'exécution. Le piège classique est de confondre des outils d'administration disparus avec les composants fondamentaux du runtime.",
    "summary": [
      "Docker Engine est l'architecture centrale comprenant le démon, l'API et la CLI.",
      "Le Docker Runtime (runc) assure l'interface entre les conteneurs et les fonctionnalités d'isolation du noyau Linux.",
      "Le Docker Registry est le système de stockage et de distribution incontournable pour les images.",
      "Docker Machine est un outil de provisionnement d'hôtes obsolète et ne constitue pas un composant du moteur Docker."
    ]
  },
  {
    "num": "Q7",
    "partie": "Fondamentaux des images Docker",
    "q": "Quel format Docker utilise-t-il pour exporter les images ?",
    "choices": {
      "A": "zip",
      "B": "tar",
      "C": "iso",
      "D": "rar"
    },
    "correct": "B",
    "explanation": "<p>Le format standard utilisé par Docker pour l'exportation et l'importation d'images via les commandes <strong>docker save</strong> et <strong>docker load</strong> est le format <strong>TAR (Tape Archive)</strong>. Ce choix technique repose sur plusieurs impératifs de l'architecture des conteneurs.</p><p><strong>Pourquoi le format TAR ?</strong><br>Le format TAR n'est pas une méthode de compression en soi, mais un utilitaire d'archivage qui permet de concaténer plusieurs fichiers et répertoires en un seul flux binaire tout en préservant les métadonnées essentielles du système de fichiers (permissions, propriétaires, liens symboliques). Dans le contexte de Docker, une image est composée de plusieurs <em>layers</em> (couches) superposées. Le fichier TAR généré contient :<br><ul><li>Un fichier <strong>manifest.json</strong> décrivant la structure de l'image.</li><li>Le détail de chaque couche (le <em>filesystem diff</em>).</li><li>Les métadonnées JSON pour chaque couche, incluant la configuration de l'image (variables d'environnement, commandes par défaut, points de montage).</li></ul></p><p><strong>Architecture et Workflow</strong><br>Lorsqu'un développeur exécute <code>docker save -o mon_image.tar mon_image:tag</code>, Docker serialise l'ensemble de ces éléments dans un flux binaire unique. Ce format est universellement accepté par d'autres outils de conteneurisation (comme Podman ou Skopeo), ce qui le rend idéal pour le transport d'images dans des environnements <em>air-gapped</em> (sans accès internet) où l'usage d'un registre privé n'est pas possible.</p><p><strong>Bonnes pratiques DevOps</strong><br>Il est crucial de noter que <code>docker save</code> n'est pas la méthode recommandée pour le déploiement en production. La pratique standard privilégie le <em>Push/Pull</em> via un registre (Docker Hub, AWS ECR, Azure ACR) pour assurer la traçabilité, le scan de vulnérabilités et la gestion des versions (tags). L'export TAR reste une solution de secours, de sauvegarde locale ou de transfert manuel sécurisé.</p><p><strong>Erreurs courantes</strong><br>Une erreur classique consiste à confondre <code>docker save</code> et <code>docker export</code>. Alors que <code>docker save</code> exporte une <strong>image</strong> complète avec toutes ses couches, <code>docker export</code> crée un tarball d'un <strong>conteneur</strong> en cours d'exécution, perdant ainsi l'historique des couches et l'historique des métadonnées de l'image d'origine. Pour les examens, rappelez-vous : Image = Save/Load, Conteneur = Export/Import.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le format ZIP est un format de compression avec perte de métadonnées spécifiques aux systèmes Unix, comme les permissions étendues ou les inodes, ce qui rendrait l'image inutilisable pour le moteur Docker."
      },
      {
        "l": "C",
        "t": "L'ISO est une image de système de fichiers conçue pour le support optique (CD/DVD/USB), totalement inadaptée à la structure multi-couches (OverlayFS) utilisée par le moteur Docker."
      },
      {
        "l": "D",
        "t": "Le format RAR est un format propriétaire avec compression, ce qui contrevient aux principes d'interopérabilité et de standardisation open-source du format OCI (Open Container Initiative) adopté par Docker."
      }
    ],
    "examiner": "L'examinateur cherche ici à valider votre compréhension des mécanismes fondamentaux de stockage de Docker et votre maîtrise de la CLI. Le piège classique consiste à confondre le format de transport (TAR) avec les formats de stockage interne des couches (différents selon le storage driver : overlay2, btrfs, etc.).",
    "summary": [
      "La commande 'docker save' produit systématiquement un fichier au format .tar.",
      "Le format TAR préserve l'intégrité des couches (layers) et les métadonnées JSON de l'image.",
      "Il faut distinguer 'docker save' (image) de 'docker export' (conteneur), ce dernier perdant l'historique des couches.",
      "Le format d'image Docker est compatible avec les standards de l'OCI (Open Container Initiative)."
    ]
  },
  {
    "num": "Q8",
    "partie": "Fondamentaux des images Docker",
    "q": "Laquelle des propositions suivantes décrit le mieux une image Docker ?",
    "choices": {
      "A": "Une template en lecture seule pour démarrer un ou plusieurs conteneurs.",
      "B": "Un volume de données qui peut être monté à l’intérieur d’un conteneur.",
      "C": "Un instantané ponctuel d’un conteneur utilisé pour les sauvegardes.",
      "D": "Un modèle en lecture-écriture pour démarrer un ou plusieurs conteneurs."
    },
    "correct": "B",
    "explanation": "<p>Une image Docker est la pierre angulaire de l'écosystème de conteneurisation. Techniquement, il s'agit d'un <strong>modèle immuable en lecture seule</strong> qui contient l'ensemble du système de fichiers nécessaire pour exécuter une application : le code source, les bibliothèques runtime, les outils système, les dépendances et les configurations réseau.</p><p><strong>Architecture technique :</strong> Une image est construite à partir d'une série de couches (layers). Chaque instruction dans un <code>Dockerfile</code> (comme <code>RUN</code>, <code>COPY</code>, ou <code>ADD</code>) crée une couche immuable. Grâce au système de fichiers Union (UnionFS), ces couches sont empilées les unes sur les autres pour former une structure logique unifiée. L'aspect \"lecture seule\" est crucial : lorsqu'un conteneur démarre à partir d'une image, Docker ajoute une fine couche inscriptible (le <em>container layer</em>) au-dessus de ces couches immuables. C'est ce qui permet à plusieurs conteneurs de partager la même image sous-jacente tout en ayant leur propre état d'exécution.</p><p><strong>Bonnes pratiques DevOps :</strong> Pour optimiser vos images, visez la légèreté. Utilisez des images de base minimales (comme <code>alpine</code> ou <code>distroless</code>) pour réduire la surface d'attaque et accélérer les temps de déploiement (pull/push). Appliquez la stratégie de <em>multi-stage builds</em> pour séparer l'environnement de compilation de l'environnement d'exécution, garantissant ainsi que votre image finale ne contient que le binaire nécessaire.</p><p><strong>Différenciation avec les volumes :</strong> Contrairement à une image, un volume est un mécanisme persistant dissocié du cycle de vie du conteneur. Alors que l'image est immuable, le volume est conçu pour la persistance des données (bases de données, logs, uploads), permettant aux données de survivre à la suppression du conteneur.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "C'est une confusion classique. Un volume est un mécanisme de persistance de données externe au système de fichiers de l'image. L'image définit la structure applicative, le volume définit l'espace de stockage persistant."
      },
      {
        "l": "C",
        "t": "Ceci décrit plutôt un 'Snapshot' ou un 'Commit' de conteneur. Bien que l'on puisse créer une image à partir d'un conteneur via docker commit, l'image en soi n'est pas un instantané de sauvegarde, mais un plan d'assemblage."
      },
      {
        "l": "D",
        "t": "C'est une erreur conceptuelle grave. Si une image était en 'lecture-écriture', toute modification par un conteneur impacterait tous les autres conteneurs utilisant la même image, ce qui briserait le principe d'isolation et d'immuabilité propre à Docker."
      }
    ],
    "examiner": "L'examinateur cherche ici à vérifier si vous comprenez la nature immuable de l'image par rapport à la nature éphémère du conteneur et à la persistance des volumes. Le piège majeur est de confondre l'image (le template) avec le conteneur (l'instance) ou avec les données persistantes (les volumes).",
    "summary": [
      "Une image Docker est un template immuable en lecture seule composé de couches empilées.",
      "L'immuabilité garantit la reproductibilité de l'application quel que soit l'environnement.",
      "La couche inscriptible n'est ajoutée qu'au démarrage du conteneur.",
      "Les volumes sont nécessaires pour conserver des données au-delà de la destruction du conteneur."
    ]
  },
  {
    "num": "Q6",
    "partie": "Administration et manipulation Docker",
    "q": "A quoi sert la commande docker exec ?",
    "choices": {
      "A": "Permet d’exécuter des processus en dehors d’un conteneur.",
      "B": "Vous permet d’exécuter des processus dans un conteneur.",
      "C": "C’est similaire à l’installation d’un logiciel.",
      "D": "Vous permet d’exécuter des processus dans de nouveaux conteneurs."
    },
    "correct": "B",
    "explanation": "<p>La commande <strong>docker exec</strong> est un outil fondamental dans la boîte à outils de tout ingénieur DevOps ou administrateur système travaillant avec Docker. Contrairement à une idée reçue, ce n'est pas une commande de démarrage, mais une commande d'<strong>interaction</strong>.</p><p>Lorsqu'un conteneur est en cours d'exécution (état <em>up</em>), il isole ses processus de l'hôte. <strong>docker exec</strong> permet de s'introduire dans le <em>namespace</em> de ce conteneur pour y lancer une nouvelle commande. Le cas d'usage le plus courant est l'ouverture d'un shell interactif (ex: <code>docker exec -it <container_id> /bin/bash</code>) pour effectuer des tâches de maintenance, déboguer une application ou inspecter des logs en temps réel.</p><p><strong>Concepts clés :</strong></p><ul><li><strong>Isolation des namespaces :</strong> Docker utilise les namespaces Linux pour isoler les processus. <code>docker exec</code> utilise l'appel système <code>setns</code> pour basculer le contexte de la nouvelle commande dans celui du conteneur cible.</li><li><strong>Persistance :</strong> Contrairement à <code>docker run</code> qui crée un nouvel environnement, <code>docker exec</code> modifie l'état interne d'un conteneur existant.</li><li><strong>Gestion des signaux :</strong> En utilisant les options <code>-i</code> (interactif) et <code>-t</code> (tty), vous allouez un pseudo-terminal qui permet de gérer les flux d'entrées/sorties de manière fluide.</li></ul><p><strong>Bonnes pratiques :</strong></p><ul><li><strong>Utilisation ponctuelle :</strong> Ne l'utilisez pas pour configurer un conteneur en production. La configuration doit être faite via le <em>Dockerfile</em> ou des outils de gestion de configuration.</li><li><strong>Débogage uniquement :</strong> Réservez <code>docker exec</code> à l'investigation système (lecture de fichiers temporaires, test de connectivité réseau interne).</li><li><strong>Sûreté :</strong> Évitez de lancer des processus longs ou gourmands en ressources via <code>exec</code>, car cela peut affecter le processus principal (PID 1) si des limitations ne sont pas configurées.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Faux. L'exécution de processus en dehors d'un conteneur correspond au comportement natif de l'hôte (exécution directe dans le terminal) ou à la commande 'docker run' si l'on considère la création de conteneurs, mais certainement pas à 'exec'."
      },
      {
        "l": "C",
        "t": "Faux. L'installation d'un logiciel se fait généralement dans le Dockerfile via des commandes comme 'apt-get install' ou 'apk add'. 'docker exec' n'est pas une commande de gestion de package ou de build d'image."
      },
      {
        "l": "D",
        "t": "Faux. C'est la fonction première de 'docker run'. La commande 'docker exec' exige qu'un conteneur soit déjà instancié et en cours d'exécution pour fonctionner."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier votre compréhension de la différence entre la création de conteneurs (run) et l'interaction avec des conteneurs existants (exec). Le piège classique est de confondre la persistance du processus avec la création de nouvelles instances.",
    "summary": [
      "docker exec est utilisé uniquement pour interagir avec des conteneurs déjà en cours d'exécution.",
      "Elle permet d'exécuter des commandes de débogage ou d'administration dans un environnement isolé.",
      "Elle ne modifie pas l'image du conteneur ; les changements sont volatiles si des fichiers ne sont pas persistés dans des volumes.",
      "L'utilisation de '-it' est nécessaire pour une interaction humaine via un shell."
    ]
  },
  {
    "num": "Q7",
    "partie": "Administration et manipulation Docker",
    "q": "Quel option peut être utilisé pour définir un Dockerfile personnalisé (tel que mydockerfile.node) lors de la création d’une image personnalisée ?",
    "choices": {
      "A": "-customfile"
    },
    "correct": "C",
    "explanation": "<p>Dans l'écosystème Docker, la commande <code>docker build</code> est l'outil fondamental pour transformer une recette (le Dockerfile) en une image conteneurisée exécutable. Par défaut, le démon Docker recherche un fichier nommé précisément <code>Dockerfile</code> à la racine du contexte de build spécifié.</p><p>Cependant, dans des environnements d'intégration continue (CI) complexes ou des architectures multi-niveaux, il est fréquent d'avoir besoin de plusieurs variantes de build. L'option <strong>-f</strong> (ou <code>--file</code>) permet de spécifier un chemin vers un fichier de build arbitraire. Par exemple : <code>docker build -f mydockerfile.node -t mon-image:latest .</code>.</p><p><strong>Pourquoi utiliser un Dockerfile personnalisé ?</strong></p><ul><li><strong>Gestion multi-environnements :</strong> Séparer les configurations de développement, de test et de production dans des fichiers distincts pour éviter d'alourdir le Dockerfile principal avec trop de conditions <code>ARG</code> ou <code>ENV</code>.</li><li><strong>Builds multi-étapes (Multi-stage builds) :</strong> Bien que le multi-stage soit géré dans un seul fichier, le découpage peut faciliter la maintenance lors de la transition d'architectures monolithiques vers des microservices.</li><li><strong>Sécurité et Audit :</strong> Utiliser des Dockerfiles spécifiques pour des processus de scan de vulnérabilités ou pour créer des images 'slim' sans outils de débogage inutiles en production.</li></ul><p><strong>Bonnes pratiques :</strong> Évitez de multiplier les Dockerfiles inutilement, car cela peut complexifier le pipeline. Privilégiez l'utilisation des cibles (<code>--target</code>) dans un même Dockerfile multi-stage plutôt que la prolifération de fichiers disparates.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'option '-customfile' n'existe pas dans la CLI Docker. Les développeurs tombent souvent dans le piège d'inventer des drapeaux basés sur le nom de l'action plutôt que de consulter la documentation officielle."
      },
      {
        "l": "B",
        "t": "L'option '-d' est utilisée pour le mode 'detached' dans la commande 'docker run', mais n'a aucun rapport avec la définition du chemin d'un fichier Dockerfile lors de la phase de build."
      },
      {
        "l": "D",
        "t": "L'option '--config' est utilisée pour pointer vers le fichier de configuration Docker (généralement dans ~/.docker/config.json) et non pour définir le fichier de recette de construction de l'image."
      }
    ],
    "examiner": "L'examinateur vérifie ici votre maîtrise de la syntaxe de la ligne de commande Docker et votre connaissance des paramètres fondamentaux de build. Le piège classique est de confondre les options du runtime (docker run) avec celles du moteur de construction (docker build).",
    "summary": [
      "L'option -f ou --file permet de spécifier un nom ou un emplacement différent pour le Dockerfile.",
      "Par défaut, Docker cherche un fichier nommé 'Dockerfile' si aucune option -f n'est fournie.",
      "La commande complète est 'docker build -f <nom_fichier> -t <nom_image> .'.",
      "L'utilisation de fichiers personnalisés est utile pour les pipelines CI/CD complexes nécessitant des builds différenciés."
    ]
  },
  {
    "num": "Q8",
    "partie": "Administration et manipulation Docker",
    "q": "Commande pour créer un cluster dans Docker ?",
    "choices": {
      "A": "apache mesos",
      "B": "docker swarm",
      "C": "K8s"
    },
    "correct": "D",
    "explanation": "<p>Le concept de cluster au sein de l'écosystème Docker peut être appréhendé sous deux angles : l'outil natif intégré directement dans le moteur Docker (<strong>Docker Swarm</strong>) et les orchestrateurs externes qui interagissent avec les conteneurs Docker pour gérer des déploiements à grande échelle (<strong>Kubernetes</strong> et <strong>Apache Mesos</strong>).</p><p><strong>1. Docker Swarm :</strong> Il s'agit du mode orchestrateur natif de Docker. Lorsqu'on exécute la commande <code>docker swarm init</code>, le moteur Docker transforme une instance isolée en un 'Manager Node', initialisant ainsi un cluster prêt à recevoir des 'Worker Nodes'. C'est la solution la plus simple pour orchestrer des conteneurs sans dépendance externe.</p><p><strong>2. Kubernetes (K8s) :</strong> Bien qu'il ne soit pas un produit Docker, Kubernetes utilise le runtime de conteneur (souvent Docker ou containerd via CRI) pour exécuter des pods. Il est aujourd'hui le standard de l'industrie pour la gestion de clusters complexes, offrant une auto-guérison, un scaling automatique et une gestion fine des ressources réseau.</p><p><strong>3. Apache Mesos :</strong> Plus ancien et souvent utilisé dans des environnements Big Data très spécifiques, Mesos agit comme un noyau de système d'exploitation distribué. Il peut gérer des conteneurs Docker comme des tâches parmi d'autres, bien que son usage ait fortement décliné au profit de Kubernetes.</p><p><strong>Bonnes pratiques DevOps :</strong> Pour des environnements de production, le choix de l'orchestrateur doit se baser sur la complexité de l'application : Swarm est idéal pour des équipes de développement restreintes, tandis que Kubernetes est impératif pour des architectures microservices distribuées avec des besoins élevés en haute disponibilité.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien qu'Apache Mesos puisse orchestrer des conteneurs Docker, il n'est pas une 'commande' native de Docker, mais un framework tiers de gestion de clusters distribués."
      },
      {
        "l": "B",
        "t": "C'est une réponse partiellement correcte car Swarm est natif, mais la question demande quelle option permet de créer un cluster. Puisque toutes les options citées (Swarm, K8s, Mesos) peuvent orchestrer des conteneurs, le piège est de croire qu'il n'y a qu'une seule solution unique."
      },
      {
        "l": "C",
        "t": "Kubernetes n'est pas une commande Docker, mais un orchestrateur externe. Le confondre avec une fonctionnalité native montre une méconnaissance de l'architecture distribuée."
      }
    ],
    "examiner": "L'examinateur cherche ici à vérifier si le candidat distingue les fonctionnalités natives (Docker Swarm) des solutions d'orchestration externes (Kubernetes, Mesos) et s'il comprend que la notion de cluster est agnostique au runtime de conteneur utilisé.",
    "summary": [
      "Docker Swarm est l'orchestrateur natif activé par 'docker swarm init'.",
      "Kubernetes est le standard industriel pour orchestrer des conteneurs Docker à grande échelle.",
      "Apache Mesos est une alternative distribuée capable de gérer des conteneurs, bien que moins utilisée aujourd'hui.",
      "Un cluster nécessite un mode de communication réseau sécurisé entre les nœuds (Manager/Worker)."
    ]
  },
  {
    "num": "Q1",
    "partie": "Architecture et fonctionnement Docker",
    "q": "Quel service de Docker hébergé dans le nuage offre des capacités de registre pour le contenu public et privé ?",
    "choices": {
      "A": "Docker Images",
      "B": "Docker Compose",
      "C": "Docker Alpine",
      "D": "Docker Hub"
    },
    "correct": "D",
    "explanation": "<p>Docker Hub est un service fourni par Docker pour trouver et partager des images de conteneurs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture et fonctionnement Docker",
    "q": "Qu’est-ce qui est utilisé pour convertir un groupe d’hôtes Docker en un seul hôte Docker virtuel ?",
    "choices": {
      "A": "Docker Images",
      "B": "Docker Compose",
      "C": "Docker Swarm",
      "D": "Docker Hub"
    },
    "correct": "C",
    "explanation": "<p><strong>Docker Swarm</strong> est la solution native d'orchestration de conteneurs intégrée directement au moteur Docker (Docker Engine). Le concept fondamental derrière Swarm est celui de l'abstraction : il transforme un ensemble d'hôtes physiques ou virtuels, fonctionnant individuellement, en un cluster unifié que l'utilisateur perçoit comme une entité unique, appelée <strong>Swarm</strong>.</p><p>Dans ce mode, les nœuds sont divisés en deux rôles distincts : les <strong>Managers</strong>, qui assurent la gestion du cluster (ordonnancement, maintien de l'état souhaité, gestion des API), et les <strong>Workers</strong>, qui exécutent les conteneurs (via des tâches). Cette architecture permet d'utiliser le protocole <em>Raft Consensus Algorithm</em> pour garantir la cohérence des données du cluster même en cas de défaillance d'un manager.</p><p><strong>Avantages et Concepts Clés :</strong></p><ul><li><strong>Service Discovery :</strong> Swarm alloue automatiquement un nom DNS unique à chaque service, permettant une résolution interne transparente.</li><li><strong>Load Balancing :</strong> Il intègre un load balancer natif (Ingress Mesh) qui distribue le trafic entrant sur tous les nœuds du cluster, quel que soit l'hôte sur lequel le conteneur est réellement déployé.</li><li><strong>Declarative State :</strong> Vous définissez l'état désiré (ex: 5 réplicas d'un conteneur web), et Swarm s'assure en permanence que cet état est respecté, effectuant des redémarrages automatiques en cas de crash (self-healing).</li><li><strong>Scaling :</strong> L'ajout ou le retrait de capacité est simplifié par la commande <code>docker service scale</code>, qui adapte dynamiquement le nombre de conteneurs.</li></ul><p><strong>Bonnes pratiques DevOps :</strong> Bien que Swarm soit reconnu pour sa simplicité d'installation, dans les environnements de production à très grande échelle nécessitant une gestion avancée des ressources, Kubernetes est souvent préféré. Cependant, pour des architectures agiles et rapides à déployer, Swarm reste un choix pertinent pour sa faible courbe d'apprentissage et son intégration transparente avec les outils Docker habituels.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les Docker Images sont des modèles immuables en lecture seule servant de base pour créer des conteneurs. Elles ne possèdent aucune capacité d'orchestration ou de gestion de cluster."
      },
      {
        "l": "B",
        "t": "Docker Compose est un outil de définition multi-conteneurs pour un seul hôte. Il ne permet pas de distribuer des conteneurs sur plusieurs machines physiques, contrairement à Swarm."
      },
      {
        "l": "D",
        "t": "Docker Hub est un registre cloud public permettant de stocker et de partager des images Docker. Il s'agit d'un service de stockage et non d'un moteur d'orchestration."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat distingue les outils de développement local (Compose) des outils d'orchestration de production (Swarm). Le piège classique est de confondre la définition de services (Compose) avec la gestion de cluster distribué (Swarm).",
    "summary": [
      "Docker Swarm transforme un groupe d'hôtes en un cluster unifié géré comme une seule entité virtuelle.",
      "Swarm utilise des Managers pour piloter le cluster et des Workers pour l'exécution des conteneurs.",
      "Il assure nativement la haute disponibilité, l'équilibrage de charge et la découverte de services.",
      "Contrairement à Docker Compose qui est limité à un seul hôte, Swarm est conçu pour l'architecture distribuée."
    ]
  },
  {
    "num": "Q3",
    "partie": "Architecture et fonctionnement Docker",
    "q": "Quel est la template utilisé pour décrire le build d’une image ?",
    "choices": {
      "A": "Docker Logs",
      "B": "Docker Documents",
      "C": "DockerFile",
      "D": "Docker Stream"
    },
    "correct": "C",
    "explanation": "<p>Dans l'écosystème de la conteneurisation, le <strong>Dockerfile</strong> est la pierre angulaire de l'automatisation. Il s'agit d'un fichier texte contenant une liste d'instructions séquentielles (commandes) que le moteur Docker exécute pour assembler une image de conteneur. Considérez-le comme le « plan architectural » ou la « recette » de votre application.</p><p><strong>Concepts théoriques :</strong></p><ul><li><strong>Couches (Layers) :</strong> Chaque instruction dans un Dockerfile (RUN, COPY, ADD) crée une nouvelle couche. Ces couches sont mises en cache, ce qui permet à Docker d'optimiser le temps de reconstruction en ne réexécutant que les étapes ayant subi des modifications.</li><li><strong>Immutabilité :</strong> Une fois l'image buildée à partir d'un Dockerfile, elle devient immuable. Cela garantit que l'environnement d'exécution est identique, que vous soyez en développement, en staging ou en production (principe du <em>Write Once, Run Anywhere</em>).</li><li><strong>Instructions clés :</strong><ul><li><code>FROM</code> : Définit l'image de base (le point de départ).</li><li><code>WORKDIR</code> : Définit le répertoire de travail pour les commandes suivantes.</li><li><code>COPY/ADD</code> : Transfère les fichiers de votre machine hôte vers l'image.</li><li><code>RUN</code> : Exécute des commandes pour installer des dépendances (ex: apt-get, pip).</li><li><code>CMD/ENTRYPOINT</code> : Définit la commande par défaut lors du démarrage du conteneur.</li></ul></li></ul><p><strong>Bonnes pratiques DevOps :</strong></p><ul><li><strong>Multi-stage builds :</strong> Utilisez des builds multi-étapes pour réduire la taille de l'image finale en isolant l'environnement de compilation de l'environnement d'exécution (runtime). Cela améliore la sécurité et la vitesse de déploiement.</li><li><strong>Ordre des instructions :</strong> Placez les instructions les moins fréquemment modifiées en haut du fichier pour maximiser l'utilisation du cache Docker.</li><li><strong>Minimalisme :</strong> Utilisez des images de base légères (ex: <code>alpine</code> ou <code>distroless</code>) pour réduire la surface d'attaque et consommer moins de ressources.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Docker Logs est une commande utilisée pour inspecter la sortie standard d'un conteneur en cours d'exécution. Ce n'est en aucun cas un outil de définition de build."
      },
      {
        "l": "B",
        "t": "Docker Documents est un terme inventé qui n'existe pas dans la nomenclature officielle de Docker. Il ne s'agit pas d'un fichier de configuration ou d'un template."
      },
      {
        "l": "D",
        "t": "Docker Stream n'est pas un template. Ce terme peut être confondu avec le flux de données lors du build, mais le fichier source est exclusivement nommé Dockerfile."
      }
    ],
    "examiner": "L'examinateur cherche à valider la compréhension fondamentale de la chaîne d'outils Docker. Le piège classique est de confondre les outils de runtime (logs, stats) avec les outils de définition d'infrastructure (Dockerfile).",
    "summary": [
      "Le Dockerfile est le fichier de configuration textuel qui définit la structure d'une image Docker.",
      "Chaque instruction d'un Dockerfile génère une couche (layer) dans le système de fichiers de l'image.",
      "L'utilisation des builds multi-étapes est essentielle pour produire des images de production sécurisées et légères.",
      "L'ordre des instructions dans le Dockerfile impacte directement l'efficacité du cache de build."
    ]
  },
  {
    "num": "Q4",
    "partie": "Architecture et fonctionnement Docker",
    "q": "Plusieurs conteneurs fonctionnant sur une seule machine partagent tous les mêmes ressources(CPU, RAM, etc…)",
    "choices": {
      "A": "Vrai",
      "B": "Faux"
    },
    "correct": "A",
    "explanation": "<p>Le concept fondamental de la conteneurisation repose sur le partage des ressources matérielles sous-jacentes tout en assurant une isolation logique. Contrairement aux machines virtuelles (VM) qui virtualisent le matériel via un hyperviseur, les conteneurs virtualisent le système d'exploitation.</p><p><strong>Architecture et Partage :</strong> Sur une machine hôte (qu'il s'agisse d'un serveur physique ou d'une VM), tous les conteneurs s'exécutent sur le même noyau (kernel) Linux. Ils utilisent des fonctionnalités avancées du noyau comme les <em>Namespaces</em> (pour l'isolation des processus, réseaux, montages, etc.) et les <em>Cgroups</em> (Control Groups) pour limiter et mesurer l'utilisation des ressources.</p><p><strong>La problématique des ressources :</strong> Par défaut, si aucune limite n'est spécifiée, un conteneur peut potentiellement consommer toutes les ressources disponibles sur l'hôte, ce qui constitue un risque majeur pour la stabilité (phénomène du <em>Noisy Neighbor</em>). Dans une architecture DevOps robuste, il est impératif de définir des <em>Resource Requests</em> (ce qui est garanti) et des <em>Resource Limits</em> (le plafond maximal) dans les manifestes (ex: Kubernetes). Cela permet au gestionnaire de ressources de planifier le placement des conteneurs de manière optimale.</p><p><strong>Bonnes pratiques :</strong><ul><li>Utilisez systématiquement des limites de ressources CPU et RAM pour éviter qu'un conteneur ne fasse planter l'hôte.</li><li>Monitorez la consommation réelle vs les limites définies (utilisation de Prometheus/Grafana).</li><li>Comprenez que si le noyau crash, tous les conteneurs s'arrêtent, contrairement à l'isolation complète des hyperviseurs.</li></ul></p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'affirmation est fausse car elle ignore la nature même de l'architecture des conteneurs. Si chaque conteneur possédait ses propres ressources dédiées sans partage ni gestion par le noyau hôte, nous serions dans un modèle de virtualisation lourde (VM) et non de conteneurisation légère."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier votre compréhension de la différence fondamentale entre la virtualisation (isolation matérielle totale) et la conteneurisation (partage du noyau et des ressources matérielles). Le piège classique est de confondre l'isolation des processus avec l'isolation des ressources physiques.",
    "summary": [
      "Les conteneurs partagent le noyau de l'hôte, ce qui rend l'isolation moins étanche que celle des VM.",
      "Les Cgroups sont les mécanismes du noyau utilisés pour restreindre l'accès aux ressources CPU et RAM.",
      "Sans limites définies, un conteneur peut consommer les ressources de l'hôte et impacter les autres conteneurs (Noisy Neighbor).",
      "La gestion proactive des ressources (Requests/Limits) est indispensable pour garantir la haute disponibilité."
    ]
  },
  {
    "num": "Q5",
    "partie": "Architecture et fonctionnement Docker",
    "q": "Quelle est l’adresse IP par défaut de l’hôte Docker ?",
    "choices": {
      "A": "10.10.10.10",
      "B": "172.17.0.0/16",
      "C": "0.0.0.0",
      "D": "127.0.0.1"
    },
    "correct": "B",
    "explanation": "<p>Dans l'écosystème Docker, la gestion réseau est un pilier fondamental pour assurer la communication entre les conteneurs et l'hôte. Lorsque le démon Docker (<strong>dockerd</strong>) démarre pour la première fois sur un système Linux, il crée automatiquement un pont réseau virtuel (virtual bridge) nommé <strong>docker0</strong>.</p><p>Par défaut, ce bridge est configuré avec le sous-réseau <strong>172.17.0.0/16</strong>. Cela signifie que l'adresse IP de l'interface <code>docker0</code> sur l'hôte est généralement <strong>172.17.0.1</strong>, et que chaque conteneur lancé sans spécification réseau particulière recevra une adresse IP dynamique allouée dans cette plage (ex: 172.17.0.2, 172.17.0.3, etc.).</p><p><strong>Concepts théoriques :</strong></p><ul><li><strong>Interface Bridge :</strong> Agit comme un switch logiciel permettant aux conteneurs de communiquer entre eux sur le même hôte.</li><li><strong>NAT (Network Address Translation) :</strong> Docker utilise les règles <code>iptables</code> pour permettre aux conteneurs d'accéder à l'extérieur tout en masquant leur IP interne derrière l'IP de l'hôte.</li><li><strong>Flexibilité :</strong> Bien que 172.17.0.0/16 soit la valeur par défaut, elle peut être modifiée via le fichier de configuration du démon (<code>/etc/docker/daemon.json</code>) en utilisant l'option <code>\"bip\"</code> (Bridge IP).</li></ul><p><strong>Bonnes pratiques et erreurs :</strong></p><ul><li><strong>Collision réseau :</strong> Une erreur classique est de conserver le sous-réseau par défaut dans des environnements d'entreprise, créant des conflits de routage avec les réseaux VPN ou les sous-réseaux cloud existants. Il est fortement recommandé de définir un sous-réseau personnalisé (ex: 10.x.x.x) dans les environnements de production.</li><li><strong>Sécurité :</strong> Ne jamais exposer directement le pont par défaut à des réseaux publics sans passer par une stratégie de publication de ports (<code>-p</code> ou <code>--publish</code>).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "10.10.10.10 est une adresse IP arbitraire de classe A, souvent utilisée dans les exemples, mais elle ne possède aucune signification native dans la pile réseau Docker par défaut."
      },
      {
        "l": "C",
        "t": "0.0.0.0 représente l'écoute sur toutes les interfaces réseau (INADDR_ANY). Si un conteneur écoute sur 0.0.0.0, il est accessible depuis toutes les interfaces, mais ce n'est pas l'adresse du bridge Docker."
      },
      {
        "l": "D",
        "t": "127.0.0.1 est l'adresse de bouclage (localhost). Bien que Docker puisse communiquer via le loopback, ce n'est pas le sous-réseau utilisé pour l'isolation et la gestion des interfaces conteneurisées."
      }
    ],
    "examiner": "L'examinateur teste ici votre compréhension fondamentale de l'architecture réseau de Docker et votre capacité à distinguer les plages d'adresses privées (RFC 1918) configurées nativement par l'outil par rapport aux adresses standards de bouclage ou d'écoute.",
    "summary": [
      "Le pont docker0 est créé automatiquement par le démon Docker lors de l'initialisation.",
      "Le sous-réseau par défaut pour ce pont est 172.17.0.0/16.",
      "Il est possible de modifier ce comportement via le fichier daemon.json pour éviter les conflits IP.",
      "Docker utilise iptables pour gérer le NAT entre le pont docker0 et l'interface réseau physique."
    ]
  }
];
