const QCM = [
  {
    "num": "Q1",
    "partie": "Partie 0",
    "q": "Le mot de passe crypté d’un utilisateur est stocké dans ____ ?",
    "choices": {
      "A": "/etc/shadow",
      "B": "/etc/enpasswwd",
      "C": "/etc/.passwd",
      "D": "/etc/passwd"
    },
    "correct": "A",
    "explanation": "<p>Le fichier /etc/shadow, contient le mot de passe chiffré ainsi que d’autres informations telles que les valeurs d’expiration du compte ou du mot de passe, etc. Le fichier /etc/shadow est lisible uniquement par le compte root et donc ne représente pas un grand risque de sécurité.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 0",
    "q": "Un utilisateur peut modifier la connexion shell par défaut en utilisant ______ ?",
    "choices": {
      "A": "chmod",
      "B": "chsh",
      "C": "rmsh",
      "D": "tchsh"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 0",
    "q": "Au moment du création d’un utilisateur, l’identifiant du groupe GID est répertorié dans quel fichier?",
    "choices": {
      "A": "/etc/passwd",
      "B": "/etc/groups",
      "C": "/etc/login",
      "D": "/etc/profile"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 0",
    "q": "Lequel des identifiants suivants associés à un processus qui détermine son niveau de privilège?",
    "choices": {
      "A": "uid",
      "B": "suid",
      "C": "euid",
      "D": "gid"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 0",
    "q": "L’ID de l’utilisateur qui égale à 0 est ______ ?",
    "choices": {
      "A": "Un identifiant invalide",
      "B": "L’identifiant de l’utilisateur root",
      "C": "L’identifiant d’un utilisateur lorsque son compte est supprimé"
    },
    "correct": "B",
    "explanation": "<p>Est-ce que l’utilisateur root a toujours uid = 0 et gid = 0 sur Linux? Oui. il y a du code dans le noyau qui vérifie explicitement que uid égale à 0 quand il faut vérifier l’utilisateur root, ce qui signifie que root a toujours au moins uid = 0.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 0",
    "q": "La connexion shell est _____?",
    "choices": {
      "A": "Le programme shell qui s’exécute lorsque l’utilisateur se connecte",
      "B": "Le programme shell qui authentifie l’utilisateur lors de la connexion",
      "C": "Le programme shel est partagé entre les utilisateurs appartenant au même groupe"
    },
    "correct": "A",
    "explanation": "<p>Shell est un programme qui reçoit des commandes de l’utilisateur et le transmet au système d’exploitation pour qu’il le traite, et il affiche les résultats.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 0",
    "q": "Quelle commande suivante peut être utilisée pour changer le mot de passe de l’utilisateur?",
    "choices": {
      "A": "l’utilisateur ne peut pas changer son mot de passe",
      "B": "passwd",
      "C": "passd",
      "D": "pwd"
    },
    "correct": "B",
    "explanation": "<p>On peut changer le mot de passe de l’utilisateur en exécutant la commande « passwd user » (où user est le nom d’utilisateur du mot de passe que vous venez de modifier).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 0",
    "q": "Que fait la commande suivante?",
    "choices": {
      "A": "Indiquez le nombre d’utilisateurs connectés",
      "B": "Lister les utilisateurs",
      "C": "Indiquez le nombre d’utilisateurs dans le système",
      "D": "Afficher le contenu de la commande"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 0",
    "q": "Par défaut, un utilisateur Linux appartient à quel groupe?",
    "choices": {
      "A": "Personnel",
      "B": "Others",
      "C": "Identique à l’ID utilisateur",
      "D": "System"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 0",
    "q": "La sortie de ls -l pour /etc/passwd et /usr/bin/passwd est la suivante?",
    "choices": {
      "A": "le changement de mot de passe échoue car l’utilisateur n’est pas autorisé à mettre à jour le fichier /etc/passwd",
      "B": "le changement de mot de passe est réussi car le programme s’exécute en tant que root",
      "C": "le programme de changement de mot de passe s’exécute en mode noyau où l’accès en écriture au fichier /etc/passwd est possible",
      "D": "/etc/passwd est un fichier spécial et le système par défaut permet à tous les utilisateurs de le mettre à jour"
    },
    "correct": "B",
    "explanation": "<p>Un utilisateur doit normalement connaître son mot de passe actuel pour le changer en un mot de passe différent. Le programme « passwd » vérifie cela. Cependant, root peut changer le mot de passe de tout utilisateur sans connaître l’ancien; par conséquent, un utilisateur disposant de pouvoirs sudo peut modifier son propre mot de passe sans le saisir à l’invite passwd en exécutant sudo passwd $USER. Si sudo est configuré pour exiger le mot de passe de l’utilisateur, l’utilisateur doit taper le mot de passe dans sudo.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 0",
    "q": "Quelle commande est utilisée pour amener le processus d’arrière-plan au premier plan?",
    "choices": {
      "C": "background",
      "D": "forground"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 0",
    "q": "Si un programme s’exécutant en arrière-plan tente de lire depuis STDIN",
    "choices": {
      "A": "Son exécution est suspendue",
      "B": "STDIN est mis à sa disposition",
      "C": "Il termine sa tâche"
    },
    "correct": "A",
    "explanation": "<p>Les processus d’arrière-plan ne peuvent pas lire depuis le terminal. S’ils essaient, ils sont suspendus par un signal SIGTTIN (teletype input). La raison de cette fonctionnalité est que si plusieurs processus essayaient de lire à partir du terminal, chaque caractère irait essentiellement de manière aléatoire à l’un des processus, ce qui n’est pas un comportement utile. Ainsi, le processus au premier plan reçoit l’entrée et les processus d’arrière-plan ne le font pas. Si sudo tente de lire depuis le terminal, pour demander votre mot de passe, il est suspendu. Vous devez exécuter sudo au premier plan, puis basculer en arrière-plan.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 0",
    "q": "Les informations d’un processus dans le shell courant peuvent être obtenues en utilisant ____ ?",
    "choices": {
      "A": "kill"
    },
    "correct": "B",
    "explanation": "<p>La commande « ps » génère une liste des processus en cours d’exécution sur votre ordinateur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 0",
    "q": "Quelle commande peut être exécutée par un utilisateur qui est déjà connecté au système, afin de passer à l’utilisateur root?",
    "choices": {
      "A": "user",
      "B": "chroot",
      "D": "root"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 0",
    "q": "Quel signal est envoyé par la commande « kill -9 »?",
    "choices": {
      "A": "TERM",
      "B": "STOP",
      "C": "KILL",
      "D": "INT"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 0",
    "q": "Lorsqu’un processus enfant se termine avant la fermeture du processus parent, lequel des éléments suivants est vrai ?",
    "choices": {
      "A": "Le processus fils devient orphelin",
      "B": "Le processus parent disparaît",
      "C": "si le processus parent ne gère pas SIGCHLD, le processus fils devient un zombie"
    },
    "correct": "C",
    "explanation": "<p>Lorsqu’un processus enfant s’arrête ou se termine, SIGCHLD est envoyé au processus parent. La réponse par défaut au signal est de l’ignorer. Le signal peut être intercepté et le statut de sortie du processus fils peut être obtenu en appelant immédiatement wait (2) et wait3 (3C). Cela permet de supprimer les entrées de processus zombie aussi rapidement que possible.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 0",
    "q": "Laquelle des valeurs suivantes pour la colonne STAT de la commande « ps » n’est pas vraie?",
    "choices": {
      "A": "Statut R signifie Running",
      "B": "Statut S signifie Sleeping",
      "C": "Statut E signifie Exited",
      "D": "Statut Z signifie Zombie"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 0",
    "q": "Nous pouvons changer la priorité d’un processus en cours d’exécution en utilisant?",
    "choices": {
      "A": "nice",
      "B": "renice",
      "C": "la priorité ne peut pas être modifiée pour un processus en cours d’exécution",
      "D": "seul le superutilisateur peut changer la priorité"
    },
    "correct": "B",
    "explanation": "<p>Chaque processus en cours d’exécution dans Unix a une priorité. Vous pouvez modifier la priorité d’un processus en utilisant l’utilitaire « nice » et « renice ». La commande « nice » lancera un processus avec une priorité de planification définie par l’utilisateur. La commande « renice » modifiera la priorité de planification d’un processus en cours d’exécution.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 0",
    "q": "Le signal envoyé à un processus lorsque la touche « Ctrl-C » est enfoncée est ______",
    "choices": {
      "A": "KILL",
      "B": "INT",
      "C": "TERM",
      "D": "TSTP"
    },
    "correct": "B",
    "explanation": "<p>Le signal INT est envoyé à un processus via un terminal lorsqu’un utilisateur souhaite interrompre le processus. Ce signal est généralement lancé en appuyant sur Ctrl-C, mais sur certains systèmes, le caractère « delete » ou « break » peut être utilisé.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q12",
    "partie": "Partie 0",
    "q": "La commande « nohup » est utilisé pour ____ ?",
    "choices": {
      "A": "raccrocher automatiquement le processus après la déconnexion",
      "B": "continuer le processus après la déconnexion",
      "C": "créer un processus backgroung",
      "D": "raccrocher manuellement le processus après la déconnexion"
    },
    "correct": "B",
    "explanation": "<p>La commande « nohup » permet de démarrer un processus qui demeure actif même après la déconnexion de l’utilisateur qui a initié ce processus.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 0",
    "q": "Qui est chargé en mémoire au démarrage du système?",
    "choices": {
      "A": "Noyau",
      "B": "Shell",
      "C": "Commandes",
      "D": "Script"
    },
    "correct": "A",
    "explanation": "<p>Le noyau (mais pas ses modules) sera chargé en mémoire. S’il y a des modules dont le noyau aura besoin avant que les systèmes de fichiers soient disponibles (cela signifie généralement les pilotes et les périphériques), ces modules seront dans initramfs (en mémoire) et le noyau les chargera à partir de là. D’autres modules peuvent être chargés ultérieurement à partir du système de fichiers.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 0",
    "q": "Le processus de démarrage d’un ordinateur est connu sous le nom de ________ ?",
    "choices": {
      "A": "Boot Loading",
      "B": "Boot Record",
      "C": "Boot Strapping",
      "D": "Booting"
    },
    "correct": "C",
    "explanation": "<p>Boot strapping fait référence à un processus de démarrage automatique, et fait référence au processus de chargement du logiciel de base dans la mémoire d’un ordinateur après la mise sous tension ou la réinitialisation générale, en particulier le système d’exploitation qui charge les autres logiciels si nécessaire.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 0",
    "q": "Boot straping est également connu sous le nom ____ ?",
    "choices": {
      "A": "Quick boot",
      "B": "Cold boot",
      "C": "Hot boot",
      "D": "Fast boot"
    },
    "correct": "B",
    "explanation": "<p>Pour effectuer un démarrage à froid (également appelé « Cold boot » ou « Boot strapping »), vous devez démarrer un ordinateur éteint. Il est souvent utilisé contrairement à un démarrage à chaud (warm boot), qui consiste à redémarrer un ordinateur une fois qu’il a été allumé. Un démarrage à froid est généralement effectué en appuyant sur le bouton d’alimentation de l’ordinateur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 0",
    "q": "Le shell utilisé en mode utilisateur unique est _____ ?",
    "choices": {
      "A": "bash",
      "B": "Csh",
      "C": "ksh"
    },
    "correct": "D",
    "explanation": "<p>Le mode utilisateur unique, également appelé mode maintenance et leur niveau d’exécution est 1, est un mode de fonctionnement d’un ordinateur exécutant Linux ou d’un autre système d’exploitation de type Unix, qui fournit le moins de services possible et des fonctionnalités minimales. Il est utile pour démarrer un ordinateur dont le système d’exploitation a été endommagé et ne fonctionne pas normalement et pour effectuer certaines tâches de diagnostic et de réparation.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 0",
    "q": "Le shell en mode utilisateur unique s’exécute en tant que ____ ?",
    "choices": {
      "A": "Utilisateur admin",
      "B": "Utilisateur root",
      "C": "Utilisateur normal",
      "D": "Utilisateur du log"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 0",
    "q": "Quelle est la seule partition montée en mode utilisateur unique ?",
    "choices": {
      "A": "boot",
      "B": "usr",
      "C": "root",
      "D": "tmp"
    },
    "correct": "C",
    "explanation": "<p>La seule partition montée en mode utilisateur unique, c’est la partition root.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 0",
    "q": "Quel fichier est lu par « init » pour obtenir le niveau d’exécution par défaut?",
    "choices": {
      "A": "/etc/profile",
      "B": "/etc/init",
      "C": "/etc/boot",
      "D": "/etc/inittab"
    },
    "correct": "D",
    "explanation": "<p>Le fichier /etc/inittab décrit comment le processus INIT doit configurer le système dans un certain niveau d’exécution.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 0",
    "q": "À la fin du démarrage du noyau, quel processus est lancé?",
    "choices": {
      "A": "/etc/init",
      "B": "/etc/sched",
      "C": "/etc/swap",
      "D": "/etc/kernel"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Partie 0",
    "q": "Quel démon gère la mémoire physique en déplaçant le processus qui se trouve dans la mémoire physique vers l’espace de swap lorsque davantage de mémoire physique est nécessaire ?",
    "choices": {
      "A": "Swap daemon",
      "B": "Init daemon",
      "C": "Process daemon",
      "D": "Sched daemon"
    },
    "correct": "A",
    "explanation": "<p>Il est normal que les systèmes Linux utilisent le swap, même si la mémoire physique (RAM) est toujours libre. Le noyau déplace dans la mémoire swap des pages de mémoire qui sont très peu utilisées. L’utilisation du swap devient un problème uniquement lorsque la quantité de la mémoire physique disponible est insuffisante, et le noyau est obligé de déplacer en permanence les pages mémoire pour les échanger et les ramener en mémoire physique, juste pour que les applications continuent de fonctionner. Dans ce cas, les applications du moniteur système affichent une grande quantité d’activité d’E / S disque.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 0",
    "q": "Quelle commande est utilisée pour vérifier l’utilisation du système de fichiers?",
    "choices": {
      "A": "mount"
    },
    "correct": "B",
    "explanation": "<p>df (abréviation de disk free) est une commande Unix standard utilisée pour afficher la quantité d’espace disque disponible pour les systèmes de fichiers sur lesquels l’utilisateur dispose d’un accès en lecture approprié.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 0",
    "q": "Quel système de fichiers a la capacité de faire la journalisation?",
    "choices": {
      "A": "Ext2",
      "B": "Ext4",
      "C": "Isofs",
      "D": "Procfs"
    },
    "correct": "B",
    "explanation": "<p>Ext4 est l’évolution du système de fichiers Linux le plus utilisé, Ext4 est une amélioration plus profonde par rapport à Ext3 et Ext2. Ext3 consistait principalement à ajouter la journalisation à Ext2, mais Ext4 modifie les structures de données importantes du système de fichiers, telles que celles destinées à stocker les données des fichiers.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 0",
    "q": "Le système de fichiers pour CDROM est … ?",
    "choices": {
      "A": "Ext4",
      "B": "Ext3",
      "C": "Isofs",
      "D": "Procfs"
    },
    "correct": "C",
    "explanation": "<p>ISOFS est le système de fichiers pour les CDROM.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 0",
    "q": "Quel système de fichiers peut être utilisé pour modifier certains paramètres du noyau en utilisant la commande « sysctl » ?",
    "choices": {
      "A": "Sysfs",
      "B": "Ext3",
      "C": "Procfs",
      "D": "Ext4"
    },
    "correct": "C",
    "explanation": "<p>SYSCTL est une commande pour examiner et modifier les paramètres du noyau. elle est implémentée dans PROCFS.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 0",
    "q": "Parmi les options suivantes, laquelle permet une récupération rapide du système de fichiers?",
    "choices": {
      "A": "Ext2",
      "B": "Sysfs",
      "C": "Cache",
      "D": "Journalisation"
    },
    "correct": "D",
    "explanation": "<p>la journalisation permet une récupération rapide du système de fichiers après un crash.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 0",
    "q": "Quelle commande est utilisée pour monter le système de fichiers en lecture seule ?",
    "choices": {
      "A": "mount –a",
      "B": "mount –v",
      "C": "mount –f",
      "D": "mount –r"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 0",
    "q": "______ est un répertoire (qui devrait exister) sur lequel on monte le système de fichiers?",
    "choices": {
      "A": "Racine",
      "B": "Boot",
      "C": "Point de montage",
      "D": "Partition"
    },
    "correct": "C",
    "explanation": "<p>Un point de montage est un répertoire (généralement vide) accessible au système de fichiers sur lequel il est monté.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 0",
    "q": "Quel fichier contient les systèmes de fichiers à monter automatiquement lors du démarrage?",
    "choices": {
      "A": "/etc/mount",
      "B": "/etc/fstab",
      "C": "/etc/inittab",
      "D": "/etc/boot"
    },
    "correct": "B",
    "explanation": "<p>Le fichier de configuration /etc/fstab contient les informations nécessaires pour automatiser le processus de montage des partitions. En bref, le montage est le processus par lequel une partition (physique) brute est préparée pour un accès et affectée à un emplacement sur l’arborescence du système de fichiers (ou au point de montage).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 0",
    "q": "Les informations d’attribut d’un fichier sont stockées dans quelle structure sur le disque?",
    "choices": {
      "A": "Inode",
      "B": "Blocs de données",
      "C": "Blocs de fichiers",
      "D": "Fichier de répertoire"
    },
    "correct": "A",
    "explanation": "<p>Chaque inode stocke les attributs et l’emplacement du ou des blocs de disque des données de l’objet.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 0",
    "q": "Les fichiers binaires ou exécutables sont des _____ ?",
    "choices": {
      "A": "Fichiers réguliers",
      "B": "Fichiers de type périphériques",
      "C": "Dossiers spéciaux",
      "D": "Fichiers d’annuaire"
    },
    "correct": "A",
    "explanation": "<p>Une grande majorité des fichiers trouvés sur les systèmes UNIX et Linux sont des fichiers réguliers. Les fichiers réguliers contiennent du texte ASCII (lisible par l’homme), des fichiers binaires ou de programme exécutables.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 1",
    "q": "Si un fichier a les permissions suivantes 764 donc _____?",
    "choices": {
      "A": "Tout le monde peut lire, le groupe ne peut que exécuter et le propriétaire peut lire et écrire",
      "B": "Chacun peut lire et écrire, mais le propriétaire seul peut exécuter",
      "C": "Tout le monde peut lire, le groupe y compris le propriétaire peut écrire, le propriétaire seul peut exécuter",
      "D": "Tout le monde peut lire, le groupe peut écrire et lire et le propriétaire peut lire, écrire et exécuter."
    },
    "correct": "D",
    "explanation": "<p>Essayez notre calculateur de droits d’accès Chmod en ligne</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 1",
    "q": "Quelle est la représentation octale de ces permissions -rwx r-s r–?",
    "choices": {
      "A": "0777",
      "B": "2766",
      "C": "2744",
      "D": "2754"
    },
    "correct": "D",
    "explanation": "<p>Essayez notre calculateur de droits d’accès Chmod en ligne</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 1",
    "q": "Quelle est la représentation octale de ces permissions -rwS r–- r–-?",
    "choices": {
      "A": "0777",
      "B": "2666",
      "C": "4744",
      "D": "4644"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 1",
    "q": "Le sticky bit peut être défini en utilisant l’autorisation suivante",
    "choices": {
      "A": "0777",
      "B": "2666",
      "C": "4744",
      "D": "1755"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 1",
    "q": "Effective Group ID (EGID) peut être défini avec l’autorisation suivante _____ ?",
    "choices": {
      "A": "0777",
      "B": "2666",
      "C": "4744",
      "D": "1755"
    },
    "correct": "B",
    "explanation": "<p>EGID autorise le contrôle d’accès et peut également autoriser la création de fichiers en fonction de la sémantique de l’implémentation du noyau spécifique utilisée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 1",
    "q": "Effective User ID (EUID) peut être défini avec l’autorisation suivante _____?",
    "choices": {
      "A": "0777",
      "B": "2666",
      "C": "4744",
      "D": "1755"
    },
    "correct": "C",
    "explanation": "<p>EUID d’un processus est utilisé dans la plupart du temps pour des contrôles d’accès.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 1",
    "q": "Les permissions -rwxr–-r–- représentées par la valeur octale _____?",
    "choices": {
      "A": "777",
      "B": "666",
      "C": "744",
      "D": "711"
    },
    "correct": "C",
    "explanation": "<p>Essayez notre calculateur de droits d’accès Chmod en ligne</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 1",
    "q": "Quelle est la commande pour accorder la permission d’exécution sur tous les fichiers et sous-répertoires de « /home/document/mydirectory »",
    "choices": {
      "A": "$ chmod –r +x /home/document/mydirectory",
      "B": "$ chmod –R +x /home/document/mydirectory",
      "C": "$ chmod –f –r +x /home/document/mydirectory",
      "D": "$ chmod –F +x /home/document/mydirectory"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 1",
    "q": "Si la valeur « umask » est « 0002 ». Quelles seront les permissions du nouveau répertoire creés?",
    "choices": {
      "A": "777",
      "B": "775",
      "C": "774",
      "D": "664"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 1",
    "q": "Un utilisateur effectue une opération chmod sur un fichier. Lequel des énoncés suivants est vrai?",
    "choices": {
      "A": "La date d’accès au fichier est mise à jour",
      "B": "La date de modification du fichier est mise à jour",
      "C": "La date de changement du fichier est mise à jour"
    },
    "correct": "B",
    "explanation": "<p>Lorsqu’on exécute la commande « chmod » sur un fichier la date de modification est mise à jour.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour attribuer le droit de lecture-écriture au propriétaire du fichier?",
    "choices": {
      "A": "chmod a+r file",
      "B": "chmod o+r file",
      "C": "chmod u=rw file",
      "D": "chmod og-r file"
    },
    "correct": "C",
    "explanation": "<p>« chmod » est une abréviation du change mode est une commande qui peut modifier les autorisations d’accès des fichiers et des répertoires. Les permissions sont filtrées par le umask.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 2",
    "q": "La commande suivante:",
    "choices": {
      "A": "définira le bit SUID de c.out",
      "B": "ne définira le bit SUID de c.out que si la commande est soumis par l’utilisateur root",
      "C": "commande non valide",
      "D": "mettra le sticky bit de c.out"
    },
    "correct": "A",
    "explanation": "<p>SUID (Set owner User ID) est défini pour donner des droits temporaires à un utilisateur pour exécuter un programme ou un fichier avec les autorisations du propriétaire du fichier plutôt que l’utilisateur qui l’exécute.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 2",
    "q": "Avec la valeur umask de 112, quelle est la permission par défaut attribuée à un fichier nouvellement créé?",
    "choices": {
      "A": "-x-x-wx",
      "B": "-rw-rw-r-",
      "C": "-r-xr-x-r-",
      "D": "-rw-rw-r-x"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 2",
    "q": "Les permissions -rwxr-xr-t représentées par la valeur octale _____?",
    "choices": {
      "A": "0777",
      "B": "1755",
      "C": "1754",
      "D": "2754"
    },
    "correct": "B",
    "explanation": "<p>Le sticky bit ($ chmod +t file-name) a été introduit pour être utilisé avec des exécutables afin de permettre à un système d’exploitation de conserver le segment de texte du programme dans l’espace du swap une fois le processus terminé. C’était une fonctionnalité de performance conçue pour accélérer l’exécution du programme. Le sticky bit est plus couramment utilisé sur les répertoires où il permet aux fichiers ou répertoires d’être déplacés ou supprimés uniquement par le propriétaire de cet objet, le propriétaire du répertoire ou le super-utilisateur root. Pour définir le sticky bit sur un fichie, la valeur octale est 1000 et la valeur symbolique est « t ».De façon symbolique:$ chmod o+t file1.txt De façon numérique:$ chmod 1755 file1.txt Le sticky bit n’a aucun effet si other ne dispose pas des autorisations d’exécution. Le sticky bit est représenté avec un « t » minuscule dans la sortie de ls. Dans les cas où il n’a pas d’effet, il est représenté par un « T » majuscule.$ ls -l file1 -rwxr-xr-t 1 user1 user1 0 2018-10-29 21:41 file1 Essayez notre calculateur de droits d’accès Chmod en ligne</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 2",
    "q": "La commande suivante :",
    "choices": {
      "A": "définit la permission d’écriture pour « owner »",
      "B": "définit la permission d’écriture pour « others »",
      "C": "efface la permission d’écriture pour « others »",
      "D": "efface les permissions d’écriture"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 2",
    "q": "Que fait la commande « chmod + t » ?",
    "choices": {
      "A": "mauvaise syntaxe",
      "B": "définit le EUID",
      "C": "définit le EGID",
      "D": "mettre en place le sticky bit"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 2",
    "q": "Lesquels des paramètres de la commande umask autorisent le droit de l’exécution par défaut sur les fichiers réguliers nouvellement créées?",
    "choices": {
      "A": "222",
      "B": "111",
      "C": "000"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 0",
    "q": "Les fichiers périphériques se trouvent dans quel répertoire?",
    "choices": {
      "A": "/etc",
      "B": "/bin",
      "C": "/dev",
      "D": "/usr"
    },
    "correct": "C",
    "explanation": "<p>Le répertoire /dev contient les fichiers spéciaux de type périphérique. Ces fichiers sont créés lors de l’installation.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 0",
    "q": "Lequel est un exemple de fichier spécial en mode bloc?",
    "choices": {
      "A": "Terminal virtuel",
      "B": "CD-ROM",
      "C": "Terminal",
      "D": "Modem série"
    },
    "correct": "B",
    "explanation": "<p>Le fichier /dev/cdrom est un fichier spécial en mode bloc qui est un fichier de type périphérique. Les périphériques en mode bloc ont tendance à être des périphériques de stockage, capables de mettre en buffer la sortie et de sauvegarder les données pour une récupération ultérieure.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 0",
    "q": "Lequel est un exemple de fichier spécial en mode caractère?",
    "choices": {
      "A": "Disque dur",
      "B": "CD-ROM",
      "C": "Terminal",
      "D": "Mémoire"
    },
    "correct": "C",
    "explanation": "<p>Les périphériques en mode caractère sont des objets tels que des cartes audio ou graphiques ou des périphériques d’entrée tels que le clavier et la souris.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 0",
    "q": "Quels sont les deux types de fichiers périphérique?",
    "choices": {
      "A": "Bloc et FIFO",
      "B": "Les entrées et sorties",
      "C": "Caractère et bloc",
      "D": "Caractère et Socket"
    },
    "correct": "C",
    "explanation": "<p>Il y a deux types de fichiers périphérique, le premier en mode caractère et le deuxième en mode bloc.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 0",
    "q": "Lequel des énoncés suivants n’est pas correct concernant les types de fichiers?",
    "choices": {
      "A": "Les liens physique partagent le même numéro d’inode",
      "B": "Les liens symbolique ne peuvent pas être créés sur des partitions",
      "C": "Les fichiers socket sont des sockets de domaine Unix",
      "D": "Le fichier en mode caractères est un fichier spécial"
    },
    "correct": "B",
    "explanation": "<p>Les liens symboliques peuvent référencer un fichier ou un répertoire sur un autre disque dur, volume ou partition.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 0",
    "q": "Lequel des éléments suivants n’est pas un type de fichier valide sous Linux?",
    "choices": {
      "A": "Liens symbolique",
      "B": "FIFO",
      "C": "Inode",
      "D": "Socket"
    },
    "correct": "C",
    "explanation": "<p>Inode est une structure de données sur un système de fichiers sous Linux et d’autres systèmes d’exploitation de type Unix qui sauvegarde toutes les informations sur un fichier, à l’exception de son nom et de ses données réelles. Une structure de données est un moyen de stocker des données afin de pouvoir les utiliser efficacement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 0",
    "q": "Quel répertoire contient des fichiers spéciaux de type périphérique?",
    "choices": {
      "A": "/etc",
      "B": "/etc/dev",
      "C": "/root/bin",
      "D": "/dev"
    },
    "correct": "D",
    "explanation": "<p>Le répertoire /dev contient des fichiers spéciaux pour tous les périphériques. Ces fichiers sont créés lors de l’installation.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 0",
    "q": "Tout fichier possède?",
    "choices": {
      "A": "Le noms et sa tailles",
      "B": "Le noms et son numéros d’inode",
      "C": "Le noms et son adresse",
      "D": "Le noms et les autorisations"
    },
    "correct": "B",
    "explanation": "<p>Chaque fichier possède son unique inode.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 0",
    "q": "srwxr-xrw- est un … ?",
    "choices": {
      "A": "fichier de type socket internet",
      "B": "fichier de type socket du domaine unix",
      "C": "lien symbolique",
      "D": "fichier partagé"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 0",
    "q": "Les fichiers binaires ou exécutables sont des … ?",
    "choices": {
      "A": "Fichiers réguliers",
      "B": "Fichiers de périphériques",
      "C": "Dossiers spéciaux",
      "D": "Fichiers d’annuaire"
    },
    "correct": "A",
    "explanation": "<p>Les fichiers binaires ou exécutables sont des fichiers réguliers.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 1",
    "q": "Quelle commande est utilisée pour modifier les autorisations des fichiers et des répertoires?",
    "choices": {
      "B": "chgrp",
      "C": "chmod",
      "D": "set"
    },
    "correct": "C",
    "explanation": "<p>« chmod » est une commande qui permet de modifier les autorisations d’accès aux objets du système de fichiers (fichiers et répertoires). La demande est filtrée par le umask. Le nom est une abréviation du « change mode ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 1",
    "q": "Où puis-je trouver le périphérique de l’imprimante? Dans le répertoire _______?",
    "choices": {
      "A": "/etc",
      "B": "/dev",
      "C": "/lib",
      "D": "/printer"
    },
    "correct": "B",
    "explanation": "<p>Le répertoire /dev contient les fichiers de périphérique spéciaux pour tous les périphériques. Ces fichiers de périphérique sont créés lors de l’installation.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 1",
    "q": "Lequel des énoncés suivants est vrai?",
    "choices": {
      "A": "La commande $cp conservera les métadonnées du fichier",
      "B": "La commande $sort trie par défaut dans l’ordre numérique",
      "C": "La commande $mv conservera les métadonnées du fichier",
      "D": "La commande $ps affichera l’utilisation du système de fichiers"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 1",
    "q": "Quelle commande UNIX est utilisée pour mettre à jour l’heure de modification d’un fichier?",
    "choices": {
      "A": "time",
      "B": "modify",
      "C": "cat",
      "D": "touch"
    },
    "correct": "D",
    "explanation": "<p>La commande « touch » modifie certaines dates pour chaque argument de fichier. Par défaut, la commande « touch » définit la date du dernière modification et la date de dernier accès au fichier.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 1",
    "q": "Il y a deux liens physique vers le fichier « file1 » qui sont « p1 » et « p2 » et un lien symbolique « s1 ». Que se passe-t-il si nous supprimons le fichier « file1 »?",
    "choices": {
      "A": "Nous pourrons toujours accéder au fichier avec pl et p2 mais pas avec sl",
      "B": "Nous ne pourrons pas accéder au fichier avec p1 et p2 mais avec sl",
      "C": "Nous pourrons accéder au fichier avec n’importe p1, p2 et sl",
      "D": "Nous ne pourrons pas accéder au fichier avec p1, p2 et sl"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 1",
    "q": "Si deux fichiers se trouver sur la même partition et qui pointent vers le même inode, ils sont appelés des … ?",
    "choices": {
      "A": "Liens symboliques",
      "B": "Liens physiques",
      "C": "Alias",
      "D": "Dossiers spéciaux"
    },
    "correct": "B",
    "explanation": "<p>Un lien physique agit comme une copie miroir du fichier original. Ces liens partagent les mêmes inodes. Les modifications apportées au fichier d’origine seront reflétées dans l’autre. Lorsque vous supprimez le lien physique, rien ne se passera dans l’autre fichier.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 1",
    "q": "Supprimer un lien symbolique c’est-à-dire …",
    "choices": {
      "A": "Supprime le fichier de destination",
      "B": "Supprime à la fois le lien symbolique et le fichier de destination",
      "C": "Supprime uniquement le lien symbolique",
      "D": "la sauvegarde de la destination est automatiquement créée"
    },
    "correct": "C",
    "explanation": "<p>Si un lien symbolique est supprimé, sa cible reste intacte. Si un lien symbolique pointe vers une cible et que cette dernière est déplacée, renommée ou supprimée plus tard, le lien symbolique n’est pas automatiquement mis à jour ou supprimé, mais continue d’exister et pointe toujours vers l’ancienne cible, maintenant un emplacement inexistant ou fichier inexistant. Les liens symboliques pointant vers des cibles déplacées ou non existantes sont parfois appelés cassés, orphelins ou des liens morts.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 1",
    "q": "Création de liens physiques pointant sur des partitions ____ ?",
    "choices": {
      "A": "est autorisé uniquement à l’utilisateur root",
      "B": "peut être fait par tous les utilisateurs",
      "C": "les effets ne sont pas spécifiés",
      "D": "n’est pas autorisé"
    },
    "correct": "D",
    "explanation": "<p>Un lien physique est la représentation du système de fichiers d’un fichier par lequel plusieurs chemins font référence à un seul fichier du même partition ou volume.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 2",
    "q": "Parmi les temps suivants, lesquels n’existent pas dans un système de fichiers unix traditionnel?",
    "choices": {
      "A": "Temps d’accès",
      "B": "Temps de modification",
      "C": "Temps de création",
      "D": "Temps de changement"
    },
    "correct": "C",
    "explanation": "<p>Le temps de création n’existe pas dans le système de fichiers unix traditionnel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour définir la limite de taille de fichier?",
    "choices": {
      "A": "fsize",
      "B": "flimit",
      "C": "ulimit",
      "D": "usize"
    },
    "correct": "C",
    "explanation": "<p>Le système d’exploitation permet de limiter la quantité de ressources pouvant être utilisée, en utilisant la commande « ulimit ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 2",
    "q": "Si un fichier est supprimé sous Unix en utilisant « rm » alors?",
    "choices": {
      "A": "Le fichier peut être récupéré par un utilisateur normal",
      "B": "Le fichier ne peut pas être récupéré par un utilisateur",
      "C": "Le fichier peut être entièrement récupéré à condition que le système ne soit pas redémarré",
      "D": "Le fichier sera déplacé dans le répertoire /lost et pourra être récupéré uniquement par l’intervention de l’administrateur"
    },
    "correct": "B",
    "explanation": "<p>Le fichier ne peut pas être récupéré par l’utilisateur si ce dernier a été supprimer par la commande « rm ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 2",
    "q": "Lorsque la commande suivante:",
    "choices": {
      "A": "file1",
      "B": "file2",
      "C": "un nouvel inode sera utilisé",
      "D": "aucun inode n’est libéré"
    },
    "correct": "B",
    "explanation": "<p>Renommer un fichier sous Linux libère le numéro d’inode à réutiliser, dans ce cas là l’inode de « file2 » sera libéré.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour copier des fichiers et des répertoires?",
    "choices": {
      "A": "copy",
      "C": "cpy",
      "D": "cpr"
    },
    "correct": "B",
    "explanation": "<p>« cp » signifie copie. Cette commande est utilisée pour copier des fichiers ou un groupe de fichiers ou de répertoires. Il crée une image exacte d’un fichier sur un disque avec un nom de fichier différent.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 2",
    "q": "Les informations d’attribut d’un fichier sont stockées dans quelle structure sur le disque?",
    "choices": {
      "A": "Inode",
      "B": "Blocs de données",
      "C": "Blocs de fichiers",
      "D": "Fichier de répertoire"
    },
    "correct": "A",
    "explanation": "<p>Chaque inode stocke les attributs et l’emplacement des blocs de données de l’objet.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 2",
    "q": "Exécuter la commande ‘cd ..’ au niveau de la racine provoque _______ ?",
    "choices": {
      "A": "Un message d’erreur indiquant que l’utilisateur ne peut pas accéder au-delà du niveau racine",
      "B": "Le comportement dépend de la version de l’unix",
      "C": "Résultats en changeant pour le répertoire ‘home’",
      "D": "Rien ne se passe"
    },
    "correct": "D",
    "explanation": "<p>Le répertoire racine / est le répertoire le plus haut dans l’ arborescence, donc exécutant la commande ‘cd ..’ au niveau de la racine ne provoque aucune action.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 1",
    "q": "La commande Find / -name ‘*’ va _________ ?",
    "choices": {
      "A": "Lister tous les fichiers et répertoires récursivement à partir de la racine /",
      "B": "Lister un fichier nommé * qui se trouve dans la racine /",
      "C": "Lister tous les fichiers qui se trouve dans la racine /",
      "D": "Lister tous les fichiers et répertoires qui se trouve dans la racine /"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 1",
    "q": "En utilisant quelle commande pour trouver la limite des ressources d’une session?",
    "choices": {
      "A": "ulimit",
      "B": "setrlimit",
      "C": "getrlimit",
      "D": "rlimit"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 1",
    "q": "Quelle commande est utilisée pour imprimer un fichier ?",
    "choices": {
      "A": "ptr",
      "B": "lpr",
      "C": "print"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 1",
    "q": "Quelle commande est utilisée pour afficher la version de votre system ?",
    "choices": {
      "A": "uname -r",
      "B": "uname -t",
      "C": "kernel",
      "D": "uname -n"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 1",
    "q": "Quelle commande est utilisée pour afficher le nom de votre système d’exploitation ?",
    "choices": {
      "A": "unix",
      "B": "uname",
      "D": "kernel"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 1",
    "q": "Quelle commande est utilisée pour enregistrer une session d’une connexion utilisateur dans un fichier ?",
    "choices": {
      "A": "script",
      "B": "macro",
      "C": "read"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 1",
    "q": "Quelle commande est utilisée pour modifier les caractéristiques d’E/S du terminal?",
    "choices": {
      "A": "ctty",
      "B": "ptty",
      "C": "stty",
      "D": "tty"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 1",
    "q": "La commande suivante :",
    "choices": {
      "A": "Va créer un périphérique en mode bloc si l’utilisateur est root",
      "B": "Créera un périphérique en mode bloc pour tous les utilisateurs",
      "C": "Créer une FIFO si l’utilisateur n’est pas root"
    },
    "correct": "A",
    "explanation": "<p>La commande « mknod » est utilisé pour créer les périphériques en mode caractères et en mode bloc dans le répertoire /dev/.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 1",
    "q": "La commande « dmesg »",
    "choices": {
      "A": "Affiche les tentatives de déconnexion et de connexion utilisateur",
      "B": "Affiche le fichier syslog pour les messages d’information",
      "C": "Affiche les messages du journal du noyau",
      "D": "Affiche les messages du journal du démon"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour identifier le type de fichier?",
    "choices": {
      "A": "Type",
      "B": "File",
      "C": "Finfo",
      "D": "Info"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 2",
    "q": "Quelle commande crée un fichier vide si le fichier n’existe pas?",
    "choices": {
      "A": "cat",
      "B": "touch",
      "C": "read"
    },
    "correct": "B",
    "explanation": "<p>La commande touch crée un fichier vide si le fichier n’existe pas.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour copie des fichiers depuis et vers les archives?",
    "choices": {
      "A": "gzip",
      "B": "zip",
      "C": "cpio",
      "D": "backup"
    },
    "correct": "C",
    "explanation": "<p>La commande cpio copie les fichiers dans une archive. Elle lit une liste de fichiers, un par un, sur l’entrée standard et écrit l’archive sur la sortie standard.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour afficher l’espace de disque d’un répertoire spécifique?",
    "choices": {
      "B": "dds"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour extraire une colonne d’un fichier texte?",
    "choices": {
      "A": "get",
      "B": "paste",
      "C": "cut",
      "D": "tar"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour extraire le résultat intermédiaire dans un pipe?",
    "choices": {
      "A": "extract",
      "B": "exec",
      "C": "tee"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 2",
    "q": "Quelle commande modifie le propriétaire du groupe d’un fichier?",
    "choices": {
      "A": "chgrp",
      "B": "cgrp",
      "C": "change",
      "D": "group"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour afficher le contenu d’un fichier texte compressé?",
    "choices": {
      "A": "zcat",
      "B": "print",
      "C": "type",
      "D": "cat"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 2",
    "q": "Quelle commande est utilisée pour afficher la valeur octale d’un fichier texte?",
    "choices": {
      "A": "oct",
      "B": "octal",
      "C": "text_oct"
    },
    "correct": "D",
    "explanation": "<p>La commande od sous Linux est utilisée pour afficher le contenu d’un fichier dans différents formats, le format octal étant le format par défaut.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 3",
    "q": "Laquelle des commandes suivantes permettra à l’utilisateur de chercher dans un fichier pour une expression particulier?",
    "choices": {
      "B": "find",
      "C": "grep",
      "D": "touch"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 3",
    "q": "Quelle option de la commande « tar » est utilisée pour lister le contenu d’un archive?",
    "choices": {
      "A": "xvf",
      "B": "cvf",
      "C": "ovf",
      "D": "tvf"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 3",
    "q": "Laquelle des commandes suivantes peut être utilisée pour modifier les droits par défaut pour les fichiers et les répertoires au moment de la création?",
    "choices": {
      "A": "umask",
      "B": "chown",
      "C": "chmod",
      "D": "chgrp"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 3",
    "q": "La commande « pwd » affiche _______ ?",
    "choices": {
      "A": "Mot de passe de l’utilisateur",
      "B": "Le contenu du fichier de mot de passe",
      "C": "Le répertoire de travail courant"
    },
    "correct": "C",
    "explanation": "<p>La commande pwd permet d’afficher le répertoire de travail courant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 3",
    "q": "Parmi les commandes suivantes, lesquelles peuvent être utilisées pour copier des fichiers sur d’autre systèmes?",
    "choices": {
      "A": "telnet",
      "B": "ssh",
      "C": "rsh",
      "D": "ftp"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 3",
    "q": "Quelle commande est utilisée pour afficher tous les fichiers, y compris les fichiers cachés dans votre répertoires et ses sous-répertoires?",
    "choices": {
      "A": "ls –l",
      "B": "ls –R",
      "C": "ls –a",
      "D": "ls –aR"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 3",
    "q": "Laquelle de ces commandes dont la sortie contient l’ID utilisateur?",
    "choices": {
      "A": "ls –l",
      "B": "date",
      "C": "help"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 3",
    "q": "Quelles commandes permet d’afficher des informations sur la quantité d’espace disque utilisée par chaque fichier?",
    "choices": {
      "A": "ls –l",
      "B": "ls -la",
      "C": "ls -a"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 3",
    "q": "Quelles commandes utiliser pour compter le nombre de caractères dans un fichier ?",
    "choices": {
      "A": "grep",
      "C": "count",
      "D": "cut"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 3",
    "q": "Quelles commandes utiliser pour déterminer le chemin d’un fichier exécutable?",
    "choices": {
      "A": "what",
      "B": "wexec",
      "C": "where",
      "D": "which"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 4",
    "q": "Quelle commande utiliserez-vous pour afficher les routes d’un réseaux disponibles?",
    "choices": {
      "A": "route status",
      "B": "netstat -r",
      "C": "show route"
    },
    "correct": "B",
    "explanation": "<p>La commande NETSTAT permet d’afficher la configuration et l’état du réseau sur une pile TCP / IP locale.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 4",
    "q": "Quelle commande de manipulation d’écran remet l’écran à l’état normal?",
    "choices": {
      "A": "tput rmso",
      "B": "tput smso",
      "C": "tput cup",
      "D": "tput blink"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 4",
    "q": "Quelle commande pour afficher la date dans le format « jj/mm/aaaa »?",
    "choices": {
      "A": "date + %d/%m/%Y",
      "B": "date + ”%d/%m/%Y”",
      "C": "date + /%d/%m/20%y",
      "D": "date + ”/%d/%m/20%y”"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 4",
    "q": "Quelle commande pour afficher le fichier ‘test.txt’ ?",
    "choices": {
      "A": "man test.txt > more",
      "B": "cat test.txt < more",
      "C": "cat test.txt | more",
      "D": "aucune de ces reponses"
    },
    "correct": "C",
    "explanation": "<p>La commande « cat » est très fréquemment utilisée sous Linux. Il lit les données du fichier et donne leur contenu en sortie. la commande « more » est utilisée pour paginer les résultats d’une autres commandes dans ce cas là c’est « cut ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 4",
    "q": "Quelle commande affiche le nom du système d’exploitation?",
    "choices": {
      "A": "uname -n",
      "B": "uname -r",
      "C": "uname -o",
      "D": "uname –m"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 4",
    "q": "Comment ajouter le fichier « file1 » dans le fichier compressé « example.tar »?",
    "choices": {
      "A": "On peut pas ajouter le fichier file1 dans example.tar"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 4",
    "q": "Comment exécuter la commande ls dans l’éditeur vi ?",
    "choices": {
      "A": ":ls",
      "B": ":!ls",
      "C": "!ls",
      "D": "On ne peut pas l’exécuter"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 4",
    "q": "Quelle commande donne le premier octet où la différence entre le deux fichiers?",
    "choices": {
      "A": "diff",
      "B": "cmp",
      "C": "comm",
      "D": "ls -a"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 4",
    "q": "« sed » est une commande généralement utilisée pour ….. ?",
    "choices": {
      "A": "Effectuer des calculs complexes",
      "B": "Modifier / imprimer le contenu sélectif d’un fichier",
      "C": "Effectuer des E / S non bloquantes basées sur FIFO"
    },
    "correct": "C",
    "explanation": "<p>La commande sed est un éditeur de texte non interactif.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 1",
    "q": "Pour augmenter le temps de réponse et le débit, le noyau minimise la fréquence d’accès au disque en gardant un pool de mémoire interne appelé _________ ?",
    "choices": {
      "A": "Swapping",
      "B": "Buffer cache",
      "C": "Spooling",
      "D": "Pooling"
    },
    "correct": "B",
    "explanation": "<p>L’idée derrière le Buffer cache est de libérer les processus de la nécessité d’attendre que des disques relativement lents récupèrent ou stockent des données. Ainsi, il serait contre-productif d’écrire beaucoup de données à la fois; au lieu de cela, les données devraient être écrites à des intervalles réguliers afin que les opérations d’E / S aient un impact minimal sur la vitesse des processus utilisateur et sur le temps de réponse des utilisateurs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 1",
    "q": "Au début de l’exécution du processus, STDOUT et STDERR",
    "choices": {
      "A": "Ils pointent sur le terminal actuel",
      "B": "Ils sont fermés",
      "C": "Ils pointent vers des fichiers spéciaux sur le système"
    },
    "correct": "A",
    "explanation": "<p>Standard output(STDOUT) et standard error(STDERR) pointent sur le terminal de l’utilisateur au début de l’exécution d’un processus.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 1",
    "q": "Que contiennent les fichiers wtmp et utmp?",
    "choices": {
      "A": "Les données système temporaires",
      "B": "Le journal de connexion et de déconnexion de l’utilisateur",
      "C": "Le journal d’exécution de commande de l’utilisateur",
      "D": "Les tentatives su et sudo de l’utilisateur"
    },
    "correct": "B",
    "explanation": "<p>utmp vous donnera une image complète des connexions des utilisateurs sur les terminaux, les déconnexions, les événements système et l’état actuel du système, le temps de démarrage du système, etc. Wtmp donne des données historiques de utmp.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 1",
    "q": "Quel est le noyau du système d’exploitation?",
    "choices": {
      "A": "Script",
      "B": "Commandes",
      "C": "Kernel",
      "D": "Shell"
    },
    "correct": "C",
    "explanation": "<p>Le kernel est le niveau le plus bas de logiciel qui s’interface avec le matériel de votre ordinateur. Il est responsable de l’interfaçage de toutes vos applications.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 1",
    "q": "ILP32 signifie ?",
    "choices": {
      "A": "Integer Long Pointer 32 bit",
      "B": "Integrated Long Pointer 32 bit",
      "C": "Intelligent Long Pointer 32 bit",
      "D": "Long Pointer 32 bit"
    },
    "correct": "A",
    "explanation": "<p>La plupart des systèmes 32 bits actuels sont ILP32 (c’est-à-dire Integer Long Pointer ont tous une longueur de 32 bits).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 1",
    "q": "La version 2 de la spécification Unix fournit un support amélioré pour ______ ?",
    "choices": {
      "A": "8 bit",
      "B": "16 bit",
      "C": "32 bit",
      "D": "64 bit"
    },
    "correct": "D",
    "explanation": "<p>La spécification UNIX, version 2 offre une prise en charge améliorée des modèles de programmation pour 64 bits. La version 2 incorpore les normes IEEE 1003.1b-1993 et IEEE 1003.1i-1995.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 1",
    "q": "Sous UNIX, le clavier est le périphérique d’entrée par défaut et l’écran est le périphérique de sortie par défaut ?",
    "choices": {
      "A": "Vrai",
      "B": "Faux"
    },
    "correct": "A",
    "explanation": "<p>C’est vrai, sous UNIX, le clavier est le périphérique d’entrée par défaut et l’écran est le périphérique de sortie par défaut.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 1",
    "q": "Les applications communiquent avec le noyau en utilisant ….. ?",
    "choices": {
      "A": "Le shell",
      "B": "Le script shell",
      "C": "Un programme C",
      "D": "Des appels système"
    },
    "correct": "D",
    "explanation": "<p>Les applications communiquent avec le noyau en utilisant des appels système.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 1",
    "q": "Parmi les éléments suivants, lequel interagit directement avec le matériel du système?",
    "choices": {
      "A": "Le shell",
      "B": "Les commandes",
      "C": "Le Kernel",
      "D": "Les applications"
    },
    "correct": "C",
    "explanation": "<p>Le Kernel interagit directement avec le matériel du système.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 2",
    "q": "La syntaxe de toute commande Unix est ….. ?",
    "choices": {
      "A": "command [options] [arguments]",
      "B": "command options [arguments]",
      "C": "command [options] [arguments]",
      "D": "command options arguments"
    },
    "correct": "A",
    "explanation": "<p>Les options et les arguments sont facultatifs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 2",
    "q": "Le fichier de périphérique « Lp0 » est utilisé pour accéder à ….. ?",
    "choices": {
      "A": "Cdrom",
      "B": "Disquette",
      "C": "Imprimante",
      "D": "Port USB"
    },
    "correct": "C",
    "explanation": "<p>Les fichiers de périphérique pour les imprimantes se trouvent dans /dev/ exemple : /dev/lp0, /dev/lp1, cela signifie que votre première imprimante peut être lp0 ou lp1 en fonction de votre matériel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 2",
    "q": "SVR4 signifie …. ?",
    "choices": {
      "A": "System Five Release 4",
      "B": "Standard Five Release 4",
      "C": "System Version Release 4",
      "D": "Standard Version Release 4"
    },
    "correct": "A",
    "explanation": "<p>SVR4 est l’une des premières versions commerciales du système d’exploitation Unix. Il a été développé à l’origine par AT&T</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 2",
    "q": "Unix est de quel type de système d’exploitation?",
    "choices": {
      "A": "Multi-tâches",
      "B": "Multi-utilisateur",
      "C": "Multi processus"
    },
    "correct": "D",
    "explanation": "<p>Unix est un system Multi-tâches, Multi-utilisateur et Multi processus.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 2",
    "q": "Lequel des éléments suivants est considéré comme le super démon sous Unix?",
    "choices": {
      "A": "init",
      "B": "inetd",
      "C": "proc",
      "D": "sysinit"
    },
    "correct": "A",
    "explanation": "<p>Sous Linux, init est une abréviation de « Initialization ». Init est un processus démon qui démarre dès que l’ordinateur démarre et continue à fonctionner jusqu’à ce qu’il soit arrêté. init est le premier processus qui démarre au démarrage de l’ordinateur. Il est donc le parent de tous les autres processus en cours d’exécution, directement ou indirectement. C’est pourquoi on lui attribue généralement «pid = 1».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 2",
    "q": "Lequel des éléments suivants permet le multitâche sous UNIX?",
    "choices": {
      "A": "Partage de temps",
      "B": "Multi programmation",
      "C": "Multi-utilisateurs",
      "D": "Modularité"
    },
    "correct": "A",
    "explanation": "<p>Les systèmes d’exploitation multitâches sont des systèmes qui partage de temps (CPU).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 2",
    "q": "Les appels système dans UNIX sont écrits en utilisant quelle langage ?",
    "choices": {
      "B": "C ++",
      "C": "Langage d’assembleur",
      "D": "Fortran"
    },
    "correct": "A",
    "explanation": "<p>Les appels système sont programmées en C.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 2",
    "q": "Lequel des éléments suivants n’est pas une variante de UNIX?",
    "choices": {
      "A": "IRIX",
      "B": "Solaris",
      "C": "AS/400",
      "D": "AIX"
    },
    "correct": "C",
    "explanation": "<p>AS/400 est un système orienté objet qui utilise un système d’exploitation appelé OS / 400.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 2",
    "q": "Solaris appartient à ______ ?",
    "choices": {
      "B": "IBM",
      "C": "Digital Equipment Corp",
      "D": "Sun Microsystems"
    },
    "correct": "D",
    "explanation": "<p>Solaris est un système d’exploitation Unix développé à l’origine par Sun Microsystems.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 3",
    "q": "Comment obtenez-vous de l’aide sur la commande « cp »?",
    "choices": {
      "A": "cd ?",
      "B": "man cp",
      "C": "help cp"
    },
    "correct": "B",
    "explanation": "<p>La commande man est utilisée pour afficher le manuel d’une commande donnée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 3",
    "q": "Quelle combinaison de touches du clavier envoie le signale pour mettre fin au fichier?",
    "choices": {
      "A": "ctrl + c",
      "B": "ctrl + b",
      "C": "ctrl + d",
      "D": "ctrl + a"
    },
    "correct": "C",
    "explanation": "<p>La combinaison ctrl + d est utilisé pour fermer un fichier sur Linux.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 3",
    "q": "Lequel des éléments suivants est utilisé pour écrire de petits programmes pour contrôler les fonctionnalités de l’Unix?",
    "choices": {
      "A": "Filteres",
      "B": "Script Shell",
      "C": "Langage C",
      "D": "Commande Shell"
    },
    "correct": "B",
    "explanation": "<p>Les scripts shell sont des petites programmes écrits dans un langage de programmation shell et interprétés par un processus shell. Ils sont extrêmement utiles pour l’automatisation des tâches sous Linux et d’autres systèmes d’exploitation de type Unix.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 3",
    "q": "Quelles sont les tailles de (Integer / Long / Pointer) respectivement dans le modèle de programmation LP64?",
    "choices": {
      "A": "4/8/4",
      "B": "4/8/8",
      "C": "4/4/8",
      "D": "8/8/8"
    },
    "correct": "B",
    "explanation": "<p>LP64 est l’abréviation de long-pointer 64. Il est communément appelé modèle de taille 4/8/8 et inclut les tailles de type « Integer/Long/Pointer », mesurées en octets.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 3",
    "q": "x86-32 utilise quel modèle de programmation?",
    "choices": {
      "A": "ILP32",
      "B": "IP32",
      "C": "ILP16",
      "D": "IP16"
    },
    "correct": "A",
    "explanation": "<p>Le system x86-32 utilise le modèle de programmation ILP32.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 3",
    "q": "Lequel de system suivant provient d’IBM?",
    "choices": {
      "A": "Solaris",
      "B": "HP-UX",
      "C": "AIX",
      "D": "BSD"
    },
    "correct": "A",
    "explanation": "<p>Solaris vient de IBM.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 3",
    "q": "Lequel des énoncés suivants est FAUX?",
    "choices": {
      "A": "Unix prend en charge plusieurs utilisateurs",
      "B": "Linux est un système d’exploitation open source et le code source est partagé",
      "C": "Shell prend en charge la communication inter processus",
      "D": "Shell fournit la fonctionnalité de redirection d’E / S"
    },
    "correct": "C",
    "explanation": "<p>C’est le system d’exploitation qui prend en charge la communication inter processus.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 3",
    "q": "Lequel de ces system n’appartient pas à Unix?",
    "choices": {
      "A": "AIX",
      "B": "IRIX",
      "C": "MAC",
      "D": "BSD"
    },
    "correct": "C",
    "explanation": "<p>Mac OS est un système d’exploitation pour Apple.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 3",
    "q": "SVR4 a été développé par …. ?",
    "choices": {
      "A": "Sun Microsystems",
      "B": "AT&T",
      "C": "Université de Berkeley",
      "D": "Sun et AT&T"
    },
    "correct": "D",
    "explanation": "<p>AT&T et Sun Microsystems développent en coopération le System V Release 4 (SVR4).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
