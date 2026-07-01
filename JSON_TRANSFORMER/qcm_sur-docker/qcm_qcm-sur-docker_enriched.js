const QCM = [
  {
    "num": "Q5",
    "partie": "Partie 1",
    "q": "Qu’est-ce qu’un Dockerfile ?",
    "choices": {
      "A": "Une image Docker qui est construite en exécutant une commande Docker.",
      "B": "Un fichier texte qui contient toutes les commandes nécessaires pour construire une image donnée.",
      "C": "Une instance en cours d’exécution d’une image Docker",
      "D": "Un site web où vous pouvez télécharger des images Docker."
    },
    "correct": "B",
    "explanation": "<p>Dockerfile est un fichier texte qui contient toutes les commandes nécessaires pour construire une image donnée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 1",
    "q": "Lequel des énoncés suivants décrit correctement un conteneur Docker ?",
    "choices": {
      "A": "Un fichier texte décrivant les dépendances d’une application.",
      "B": "Une images Docker.",
      "C": "Une instance d’une application créée à partir d’une image Docker.",
      "D": "Un package composé d’une application et de toutes ses dépendances."
    },
    "correct": "C",
    "explanation": "<p>Un conteneur Docker est une instance d’une application créée à partir d’une image Docker.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 1",
    "q": "Un conteneur Docker est une instance d’une image avec une configuration spécifique.",
    "choices": {
      "A": "Vrai",
      "B": "Faux"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 1",
    "q": "Laquelle des propositions suivantes explique la relation entre une image Docker et un conteneur Docker ?",
    "choices": {
      "A": "Un conteneur Docker est utilisé pour démarrer une image Docker.",
      "B": "Un conteneur Docker est une instance en cours d’exécution d’une image.",
      "C": "Un conteneur Docker est une collection de couches d’images.",
      "D": "Un conteneur Docker est constitué de deux ou plusieurs images qui partagent un environnement d’exécution commun."
    },
    "correct": "B",
    "explanation": "<p>Un conteneur Docker est une instance en cours d’exécution d’une image.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 2",
    "q": "Quelle instruction doit apparaître en premier dans le fichier Dockerfile ?",
    "choices": {
      "A": "IMAGE",
      "B": "ENV",
      "C": "FROM",
      "D": "RUN"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 2",
    "q": "Le registre Docker est un endroit où l’on peut stocker et distribuer des ________ Docker.",
    "choices": {
      "A": "fichiers",
      "B": "images",
      "C": "codes"
    },
    "correct": "B",
    "explanation": "<p>Le registre Docker est un endroit où l’on peut stocker et distribuer des images Docker.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 2",
    "q": "Quel est le but d’une image ?",
    "choices": {
      "A": "Fournir un processus traditionnel pour une application.",
      "B": "Fournir la configuration réseau pour la pile réseau d’une application.",
      "C": "Fournir le système de fichiers pour une application.",
      "D": "Fournir un processus isolé pour une application."
    },
    "correct": "C",
    "explanation": "<p>Une image fournit le système de fichiers pour une application.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 2",
    "q": "Laquelle des affirmations suivantes est vraie à propos de l’architecture de Docker?",
    "choices": {
      "A": "L’architecture est de type client-serveur.",
      "B": "Les conteneurs Docker sont exécutés en tant que root.",
      "C": "Le démon doit être exécuté en tant que root."
    },
    "correct": "D",
    "explanation": "<p>Toutes les réponses sont vraies.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 2",
    "q": "Sur quels concepts de base Docker repose-t-il ?",
    "choices": {
      "A": "Images et conteneurs",
      "B": "Images et machines virtuelles",
      "C": "Images et archives",
      "D": "Vmware et VirtualBox"
    },
    "correct": "A",
    "explanation": "<p>Docker repose sur le concept d’images et des conteneurs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 2",
    "q": "Cette commande Dockerfile spécifie l’image de base à utiliser lors de la création d’une image Docker.",
    "choices": {
      "A": "BASE",
      "B": "CMD",
      "C": "ADD",
      "D": "FROM"
    },
    "correct": "D",
    "explanation": "<p>La commande « FROM » spécifie l’image de base à utiliser lors de la création d’une image Docker.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 2",
    "q": "Lequel des éléments suivants n’est pas une directive Dockerfile recommandée ?",
    "choices": {
      "A": "MAINTAINER",
      "B": "COPY",
      "C": "LABEL",
      "D": "FROM"
    },
    "correct": "A",
    "explanation": "<p>Selon la documentation officielle de Docker, l’instruction MAINTAINER est dépréciée. Il est préférable d’utiliser l’instruction LABEL pour définir l’auteur des images générées. L’instruction LABEL est plus flexible, permet de définir des métadonnées et peut être facilement visualisée avec la commande docker inspect .</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 2",
    "q": "Laquelle des interfaces réseau suivantes est créée lorsque vous installez le runtime Docker sur l’hôte Docker ?",
    "choices": {
      "A": "Docker1",
      "B": "Docker0",
      "C": "eth0",
      "D": "eth1"
    },
    "correct": "B",
    "explanation": "<p>Docker0 est créée lorsque vous installez le runtime Docker sur l’hôte Docker.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 2",
    "q": "Lequel des éléments suivants n’est pas un composant de l’architecture Docker?",
    "choices": {
      "A": "Docker Registry",
      "B": "Docker Runtime",
      "C": "Docker Engine",
      "D": "Docker Machine"
    },
    "correct": "D",
    "explanation": "<p>Docker Machine n’est pas un composant de l’architecture Docker.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 3",
    "q": "Quel format Docker utilise-t-il pour exporter les images ?",
    "choices": {
      "A": "zip",
      "B": "tar",
      "C": "iso",
      "D": "rar"
    },
    "correct": "B",
    "explanation": "<p>Docker utilise le format ‘tar’ pour exporter les images.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 3",
    "q": "Laquelle des propositions suivantes décrit le mieux une image Docker ?",
    "choices": {
      "A": "Une template en lecture seule pour démarrer un ou plusieurs conteneurs.",
      "B": "Un volume de données qui peut être monté à l’intérieur d’un conteneur.",
      "C": "Un instantané ponctuel d’un conteneur utilisé pour les sauvegardes.",
      "D": "Un modèle en lecture-écriture pour démarrer un ou plusieurs conteneurs."
    },
    "correct": "B",
    "explanation": "<p>Une image Docker est une template en lecture seule pour démarrer un ou plusieurs conteneurs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 4",
    "q": "A quoi sert la commande docker exec ?",
    "choices": {
      "A": "Permet d’exécuter des processus en dehors d’un conteneur.",
      "B": "Vous permet d’exécuter des processus dans un conteneur.",
      "C": "C’est similaire à l’installation d’un logiciel.",
      "D": "Vous permet d’exécuter des processus dans de nouveaux conteneurs."
    },
    "correct": "B",
    "explanation": "<p>La commande docker exec vous permet d’exécuter des processus dans un conteneur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 4",
    "q": "Quel option peut être utilisé pour définir un Dockerfile personnalisé (tel que mydockerfile.node) lors de la création d’une image personnalisée ?",
    "choices": {
      "A": "-customfile"
    },
    "correct": "C",
    "explanation": "<p>L’option -f peut être utilisé pour définir un Dockerfile personnalisé (tel que mydockerfile.node) lors de la création d’une image personnalisée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 4",
    "q": "Commande pour créer un cluster dans Docker ?",
    "choices": {
      "A": "apache mesos",
      "B": "docker swarm",
      "C": "K8s"
    },
    "correct": "D",
    "explanation": "<p>Toutes les réponses ci-dessus vous permet de créer un cluster dans Docker.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 5",
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
    "partie": "Partie 5",
    "q": "Qu’est-ce qui est utilisé pour convertir un groupe d’hôtes Docker en un seul hôte Docker virtuel ?",
    "choices": {
      "A": "Docker Images",
      "B": "Docker Compose",
      "C": "Docker Swarm",
      "D": "Docker Hub"
    },
    "correct": "C",
    "explanation": "<p>Docker Swarm est utilisé pour convertir un groupe d’hôtes Docker en un seul hôte Docker virtuel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 5",
    "q": "Quel est la template utilisé pour décrire le build d’une image ?",
    "choices": {
      "A": "Docker Logs",
      "B": "Docker Documents",
      "C": "DockerFile",
      "D": "Docker Stream"
    },
    "correct": "C",
    "explanation": "<p>DockerFile est la template utilisé pour décrire le build d’une image.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 5",
    "q": "Plusieurs conteneurs fonctionnant sur une seule machine partagent tous les mêmes ressources(CPU, RAM, etc…)",
    "choices": {
      "A": "Vrai",
      "B": "Faux"
    },
    "correct": "A",
    "explanation": "<p>Plusieurs conteneurs peuvent fonctionner sur la même machine et partager le noyau du système d’exploitation avec d’autres conteneurs, chacun s’exécutant comme un processus isolé dans l’espace utilisateur. Les conteneurs occupent moins d’espace que les VM (les images de conteneurs font généralement quelques dizaines de Mo), peuvent gérer davantage d’applications et nécessitent moins de VM et de systèmes d’exploitation.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 5",
    "q": "Quelle est l’adresse IP par défaut de l’hôte Docker ?",
    "choices": {
      "A": "10.10.10.10",
      "B": "172.17.0.0/16",
      "C": "0.0.0.0",
      "D": "127.0.0.1"
    },
    "correct": "B",
    "explanation": "<p>172.17.0.0/16 est l’adresse IP par défaut de l’hôte Docker.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
