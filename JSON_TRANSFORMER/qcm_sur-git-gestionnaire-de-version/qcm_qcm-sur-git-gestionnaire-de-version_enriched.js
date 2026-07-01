const QCM = [
  {
    "num": "Q1",
    "partie": "Partie 1",
    "q": "Quelle est la commande git qui télécharge votre référentiel de GitHub sur votre ordinateur?",
    "choices": {
      "A": "$ git push",
      "B": "$ git commit",
      "C": "$ git fork",
      "D": "$ git clone"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 1",
    "q": "Quelle commande est utilisé pour transférer votre code et vos modifications dans GitHub?",
    "choices": {
      "A": "$ git add",
      "B": "$ git upload",
      "C": "$ git push",
      "D": "$ git status"
    },
    "correct": "C",
    "explanation": "<p>La commande git push est utilisée pour transférer le contenu d’un repository local vers un repository distant. Le push est la façon de transférer les commits de votre dépôt local vers le dépôt distant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 1",
    "q": "Comment initialiser le dépôt local avec git?",
    "choices": {
      "A": "$ git start",
      "B": "$ git init",
      "C": "$ git pull",
      "D": "$ git clean"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 1",
    "q": "Comment récupérez du code d’un autre repository sur GitHub?",
    "choices": {
      "A": "Forking via l’interface GitHub.",
      "B": "$ git pull-request",
      "C": "$ git fork",
      "D": "$ git clone"
    },
    "correct": "A",
    "explanation": "<p>Le forking est utile si vous voulez suggérer des modifications au code de quelqu’un auquel vous n’avez pas accès ou si vous voulez lancer un projet basé sur le code de quelqu’un d’autre.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 1",
    "q": "Comment vérifier l’état de votre référentiel local depuis votre dernier commit?",
    "choices": {
      "A": "$ git check",
      "B": "$ git commit",
      "C": "$ git diff",
      "D": "$ git status"
    },
    "correct": "D",
    "explanation": "<p>La commande git status affiche l’état du répertoire de travail. Elle vous permet de voir quelles modifications ont été mises à disposition, lesquelles ne l’ont pas été, et quels fichiers ne sont pas suivis par Git. La sortie de la commande git status ne donne aucune information sur l’historique du projet.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 1",
    "q": "Comment ajouter des fichiers à un commit?",
    "choices": {
      "A": "$ git stage",
      "B": "$ git commit",
      "C": "$ git add",
      "D": "$ git reset"
    },
    "correct": "C",
    "explanation": "<p>Il ajoute toutes les ressources ultérieures (sur lesquelles vous avez apporté des modifications) sous le dossier en question au contrôle de version de Git pour qu’elles soient commitées.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 1",
    "q": "Comment enregistrer l’état actuel de votre code dans git?",
    "choices": {
      "A": "En validant les modifications mises en scène avec",
      "B": "En ajoutant toutes les modifications et en les mettant en scène avec",
      "C": "En ajoutant toutes les modifications et en les organisant avec",
      "D": "En créant un nouveau commit avec"
    },
    "correct": "A",
    "explanation": "<p>La commande « commit » est utilisée pour enregistrer les modifications dans le dépôt local. Notez que vous devez explicitement indiquer à Git les modifications que vous souhaitez inclure dans un commit avant d’exécuter la commande « git commit ». Cela signifie qu’un fichier ne sera pas automatiquement inclus dans le prochain commit simplement parce qu’il a été modifié. Au lieu de cela, vous devez utiliser la commande « git add » pour marquer les modifications souhaitées pour l’inclusion.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 1",
    "q": "Quel raccourci pour mettre en scène tous les changements que vous avez?",
    "choices": {
      "A": "$ git push -am « Message »",
      "B": "$ git commit add .",
      "C": "$ git commit .",
      "D": "$ git add ."
    },
    "correct": "C",
    "explanation": "<p>Le point désigne le répertoire actuel et tous les fichiers qu’il contient, de manière récursive.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 1",
    "q": "Quelle commande pour vérifier l’historique de votre référentiel?",
    "choices": {
      "A": "$ git checkout",
      "B": "$ git fetch",
      "C": "$ git log",
      "D": "$ git diff"
    },
    "correct": "C",
    "explanation": "<p>La commande git log affiche les traces des commit. Elle permet de lister l’historique du projet, de le filtrer et de rechercher des modifications spécifiques.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 1",
    "q": "Quelle commande vous permettra de savoir qui a modifié un fichier?",
    "choices": {
      "A": "$ git blame",
      "B": "$ git diff",
      "C": "$ git log",
      "D": "$ git log –source"
    },
    "correct": "A",
    "explanation": "<p>La commande git blame est utilisée pour savoir quel commit est responsable des dernières modifications apportées à un fichier. Syntaxe : $ git blame <nom de fichier></p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Partie 1",
    "q": "Dans quelles circonstances faut-il utiliser un simple tiret dans une commande Git, plutôt qu’un double tiret ?",
    "choices": {
      "A": "Lors de l’utilisation d’une option à un seul caractère",
      "B": "Lors de l’utilisation d’une option à plusieurs caractères",
      "C": "Lors de l’émission de commandes Git avec plusieurs options",
      "D": "Lorsqu’on fait référence à un alias Git"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 2",
    "q": "Vous pouvez taper « git status » à tout moment dans un répertoire contrôlé par git pour vérifier le statut de vos fichiers.",
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
    "num": "Q1",
    "partie": "Partie 3",
    "q": "Qui a inventé le GIT ?",
    "choices": {
      "A": "Junio C. Hamano",
      "B": "James Gosling",
      "C": "Koska Kawaguchi",
      "D": "Linus Torvalds"
    },
    "correct": "D",
    "explanation": "<p>Linus Torvalds est considéré comme l’inventeur du GIT. Cet ingénieur logiciel américano-finlandais a créé le système de contrôle de version distribué en 2005. GIT a été développé pour gérer le développement du noyau Linux, et il est depuis devenu largement utilisé dans l’industrie du développement de logiciels. Grâce à l’invention de GIT, Torvalds a révolutionné la manière dont les développeurs collaborent et suivent les modifications apportées à leur code, facilitant ainsi la gestion de projets à grande échelle avec de multiples contributeurs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 3",
    "q": "Lequel de ces termes décrit le mieux GitHub ?",
    "choices": {
      "A": "Environnement de développement intégré",
      "B": "Système de contrôle de version distribué",
      "C": "Système de suivi des problèmes",
      "D": "Service d’hébergement de référentiel basé sur le web"
    },
    "correct": "D",
    "explanation": "<p>GitHub est un service d’hébergement de référentiels basé sur le web qui permet aux utilisateurs de stocker et de gérer leurs référentiels de code. Il fournit une plateforme permettant aux développeurs de collaborer sur des projets, de suivre les modifications et de gérer les versions de leur code à l’aide d’un système de contrôle de version distribué. Bien qu’il offre également des fonctionnalités telles que le suivi des problèmes et l’intégration avec divers outils de développement, la fonction principale de GitHub est d’héberger des référentiels de code et d’y donner accès sur l’internet.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 3",
    "q": "Quel est le contraire de GIT clone ?",
    "choices": {
      "A": "GIT push",
      "B": "GIT add",
      "C": "GIT upload",
      "D": "GIT status"
    },
    "correct": "A",
    "explanation": "<p>Le contraire de GIT clone est GIT push. GIT clone est utilisé pour créer une copie locale d’un dépôt à partir d’une source distante, tandis que GIT push est utilisé pour envoyer les modifications locales vers le dépôt distant. Ainsi, alors qu’un clone apporte le référentiel sur la machine locale, un push renvoie les modifications locales vers le référentiel distant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 3",
    "q": "Quelle commande devez-vous exécuter pour afficher l’historique des commits de votre référentiel ?",
    "choices": {
      "A": "$ git history",
      "B": "$ git log",
      "C": "$ git commit -h",
      "D": "$ git past"
    },
    "correct": "B",
    "explanation": "<p>Pour consulter l’historique des commits d’un dépôt, il faut exécuter la commande « GIT log ». Cette commande affichera une liste de toutes les modifications effectuées dans le dépôt, y compris le message de modification, l’auteur, la date et le hachage unique de la modification. Elle fournit une vue chronologique de tous les changements et mises à jour effectués dans le référentiel au fil du temps.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 3",
    "q": "Quel est la commande pour stocker toutes les modifications que vous avez apportées ?",
    "choices": {
      "A": "$ git commit add",
      "B": "$ git commit",
      "C": "$ git add",
      "D": "$ git stage -a"
    },
    "correct": "C",
    "explanation": "<p>La bonne réponse est « GIT add ». Cette commande est utilisée pour enregistrer toutes les modifications que vous avez effectuées dans votre dépôt local. Elle vous permet de préparer les modifications pour le prochain commit. En utilisant « GIT add », vous indiquez à Git les fichiers ou les modifications que vous souhaitez inclure dans le prochain commit. Il s’agit d’une étape essentielle dans le flux de travail de Git, car elle permet d’organiser et de suivre les modifications de manière efficace.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 3",
    "q": "Quelle est l’utilisation correcte de la commande « push » ?",
    "choices": {
      "A": "$ git push <remote> <branch>",
      "B": "$ git push <branch> <remote>",
      "C": "Les deux sont corrects",
      "D": "Aucun des deux"
    },
    "correct": "A",
    "explanation": "<p>L’utilisation correcte de la commande push est « GIT push ». Cette commande est utilisée pour envoyer la branche locale vers le dépôt distant spécifié. En spécifiant le dépôt distant et la branche dans cet ordre, les changements effectués dans la branche locale seront poussés vers la branche correspondante dans le dépôt distant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 3",
    "q": "Quel est l’ordre correct pour soumettre vos modifications depuis le répertoire de travail jusqu’au dépôt distant ?",
    "choices": {
      "A": "git add, git commit, git push",
      "B": "git add, git push, git commit",
      "C": "git commit, git add, git push",
      "D": "git push, git add, git commit"
    },
    "correct": "A",
    "explanation": "<p>L’ordre correct pour soumettre des modifications depuis le répertoire de travail jusqu’au dépôt distant est de commencer par utiliser « git add “ pour organiser les modifications, puis d’utiliser ” git commit “ pour valider les modifications dans le dépôt local, et enfin d’utiliser ” git push » pour pousser les modifications validées vers le dépôt distant. Cet ordre permet de s’assurer que les modifications sont correctement stockées, validées, puis transférées vers le dépôt distant pour que d’autres personnes puissent y accéder et les consulter.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 3",
    "q": "Lequel de ces termes décrit le mieux git ?",
    "choices": {
      "A": "Environnement de développement intégré",
      "B": "Système de contrôle de version distribué",
      "C": "Système de suivi des problèmes",
      "D": "Service d’hébergement de référentiel basé sur le web"
    },
    "correct": "B",
    "explanation": "<p>Git est un système de contrôle de version distribué, ce qui signifie qu’il permet à plusieurs utilisateurs de collaborer à un projet en suivant et en gérant les modifications apportées au code source. Contrairement aux systèmes de contrôle de version centralisés, Git ne dépend pas d’un serveur central, ce qui permet à chaque utilisateur d’avoir sa propre copie de l’historique complet du projet. Cela permet aux utilisateurs de travailler hors ligne et de fusionner leurs modifications avec d’autres de manière transparente. Git offre également des fonctionnalités telles que le branchement et la fusion, ce qui en fait un outil puissant pour les équipes de développement de logiciels.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 3",
    "q": "Laquelle des commandes suivantes permet d’afficher les changements entre les modifications (commits) ?",
    "choices": {
      "A": "$ git commit",
      "B": "$ git reset",
      "C": "$ git diff",
      "D": "$ git show"
    },
    "correct": "C",
    "explanation": "<p>La bonne réponse est « GIT diff ». La commande « GIT diff » est utilisée pour montrer les changements entre les commits. Elle compare les différences de contenu des fichiers entre deux instantanés de validation et affiche les lignes ajoutées, modifiées ou supprimées. Cette commande est couramment utilisée pour examiner les modifications avant de les valider ou pour comparer différentes versions d’un fichier.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 3",
    "q": "Laquelle des commandes suivantes permet de regrouper deux ou plusieurs historiques de développement ?",
    "choices": {
      "A": "$ git merge",
      "B": "$ git concat",
      "C": "$ git join",
      "D": "$ git branch"
    },
    "correct": "A",
    "explanation": "<p>La bonne réponse est GIT merge. La commande merge de Git est utilisée pour combiner deux ou plusieurs historiques de développement. Elle permet d’intégrer les modifications d’une branche dans une autre branche, ce qui a pour effet de joindre les historiques de développement de ces branches. Cette commande est couramment utilisée pour travailler avec des branches feature ou pour incorporer des modifications provenant de plusieurs contributeurs dans une branche principale.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 4",
    "q": "Laquelle des commandes suivantes est utilisée pour passer d’une branche à l’autre ?",
    "choices": {
      "A": "$ git checkout",
      "B": "$ git switch",
      "C": "$ git merge",
      "D": "A et B"
    },
    "correct": "D",
    "explanation": "<p>La commande « GIT checkout » ou « GIT switch » est utilisée pour passer d’une branche à l’autre dans Git. Lorsque nous utilisons cette commande suivie du nom de la branche vers laquelle nous voulons passer, Git met à jour les fichiers de notre répertoire de travail pour qu’ils correspondent à la version des fichiers de cette branche. Cela nous permet de passer facilement d’une branche à l’autre et de travailler sur différentes fonctionnalités ou corrections de bogues.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 4",
    "q": "Laquelle des commandes suivantes est utilisée pour réinitialiser le HEAD actuel à l’état spécifié ?",
    "choices": {
      "A": "$ git reset",
      "B": "$ git restore",
      "C": "$ git checkout",
      "D": "$ git diff"
    },
    "correct": "A",
    "explanation": "<p>La commande GIT reset est utilisée pour réinitialiser le HEAD actuel à l’état spécifié. Cette commande permet à l’utilisateur de déplacer le HEAD et le pointeur de branche vers un commit différent, annulant ainsi les changements effectués après ce commit. Elle peut être utilisée pour dépiler des fichiers ou pour supprimer complètement des commits de l’historique de la branche.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 4",
    "q": "Que contient le répertoire .git ?",
    "choices": {
      "A": "Les fichiers de configuration",
      "B": "Le code source",
      "C": "La documentation du projet",
      "D": "Les métadonnées du référentiel et l’historique des versions"
    },
    "correct": "D",
    "explanation": "<p>Le répertoire .git contient toutes les métadonnées et la base de données des objets du dépôt. C’est le cœur de Git et du référentiel lui-même.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 4",
    "q": "Quelle commande crée une nouvelle branche dans Git ?",
    "choices": {
      "A": "$ git new branch",
      "B": "$ git branch-new",
      "C": "$ git branch",
      "D": "$ git create-branch"
    },
    "correct": "C",
    "explanation": "<p>En utilisant git branch <branch-name>, vous pouvez créer une nouvelle branche. Cela ne permet pas de basculer vers la nouvelle branche; vous devez utiliser git checkout ou git switch pour cela.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 4",
    "q": "Comment changer de branche dans Git ?",
    "choices": {
      "A": "$ git switch",
      "B": "$ git move",
      "C": "$ git jump",
      "D": "$ git hop"
    },
    "correct": "A",
    "explanation": "<p>La commande git switch <branch-name> permet de changer de branche. Avant la version 2.23 de Git, l’approche courante était git checkout <branch-name>.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 4",
    "q": "Quelle commande fusionne une branche dans une autre ?",
    "choices": {
      "A": "$ git merge",
      "B": "$ git join",
      "C": "$ git combine",
      "D": "$ git bind"
    },
    "correct": "A",
    "explanation": "<p>La commande git merge permet d’intégrer les modifications d’une branche dans une autre. Cette commande est couramment utilisée lorsque des fonctionnalités ou des corrections de bogues d’une branche doivent être intégrées à la branche principale.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 4",
    "q": "Qu’est-ce qu’un « Merge conflict » (conflit de fusion) ?",
    "choices": {
      "A": "Une erreur dans la configuration de Git",
      "B": "Un désaccord entre les membres de l’équipe",
      "C": "Des changements qui se chevauchent entre les branches",
      "D": "Un problème de synchronisation des dépôts distants"
    },
    "correct": "C",
    "explanation": "<p>Un conflit de fusion se produit lorsqu’il y a des changements dans la même partie d’un fichier à la fois dans la branche courante et dans la branche à fusionner. Git n’est pas en mesure de décider quelle modification doit avoir la priorité, il demande donc à l’utilisateur de résoudre le conflit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 4",
    "q": "Quelle commande permet de connecter un dépôt local à un serveur distant ?",
    "choices": {
      "A": "$ git link",
      "B": "$ git bind",
      "C": "$ git remote add",
      "D": "$ git connect"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 4",
    "q": "Comment récupérer les dernières mises à jour d’un dépôt distant sans les fusionner ?",
    "choices": {
      "A": "$ git pull",
      "B": "$ git get",
      "C": "$ git fetch",
      "D": "$ git update"
    },
    "correct": "C",
    "explanation": "<p>La commande git fetch récupère les mises à jour d’un dépôt distant mais ne les fusionne pas. Elle vous permet de revoir les modifications avant de les intégrer.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 4",
    "q": "Que représente le HEAD dans Git ?",
    "choices": {
      "A": "Le premier commit dans le dépôt",
      "B": "Le dernier commit dans le dépôt distant",
      "C": "Le commit en cours d’extraction",
      "D": "La base de la branche actuelle"
    },
    "correct": "C",
    "explanation": "<p>Dans Git, HEAD est un pointeur spécial ou une référence qui pointe vers le commit actuellement extrait du référentiel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 5",
    "q": "Comment annuler le dernier commit ?",
    "choices": {
      "A": "$ git revert HEAD",
      "B": "$ git reset HEAD~1",
      "C": "$ git undo",
      "D": "$ git back"
    },
    "correct": "B",
    "explanation": "<p>La commande git reset HEAD~1 ramène le pointeur de branche au commit précédent, annulant ainsi le commit le plus récent. Notez qu’il existe différents modes (comme –soft, –hard) qui décident du sort des modifications pendant cette opération.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 5",
    "q": "Quelle commande est utilisée pour sauvegarder les modifications dans Git ?",
    "choices": {
      "A": "$ git hide",
      "B": "$ git keep",
      "C": "$ git reserve",
      "D": "$ git stash"
    },
    "correct": "D",
    "explanation": "<p>La commande « git stash » sauvegarde temporairement les modifications qui ne sont pas encore prêtes à être commitées, ce qui permet de passer à une autre branche sans commiter les modifications en cours.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 5",
    "q": "Comment créer un tag dans Git ?",
    "choices": {
      "A": "$ git marker",
      "B": "$ git tag",
      "C": "$ git label",
      "D": "$ git point"
    },
    "correct": "B",
    "explanation": "<p>Dans Git, la commande git tag crée un point de référence (ou marqueur) pour des points spécifiques dans l’historique de votre projet. Elle est souvent utilisée pour marquer les points de release (ou version).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 5",
    "q": "Lequel des éléments suivants n’est pas une stratégie de merge valide dans Git ?",
    "choices": {
      "A": "fast-forward",
      "B": "recursive",
      "C": "octopus",
      "D": "squid"
    },
    "correct": "D",
    "explanation": "<p>Git supporte différentes stratégies de merge comme fast-forward, recursive, et octopus. « Squid » n’est pas une stratégie de fusion dans Git.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 5",
    "q": "Quelle commande liste toutes les branches d’un dépôt Git ?",
    "choices": {
      "A": "$ git list",
      "B": "$ git branches",
      "C": "$ git show-branches",
      "D": "$ git branch"
    },
    "correct": "D",
    "explanation": "<p>La commande git branch, lorsqu’elle est utilisée sans arguments, liste toutes les branches d’un dépôt Git.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 5",
    "q": "Que fait la commande git cherry-pick ?",
    "choices": {
      "A": "Choisit un commit aléatoire dans l’historique",
      "B": "Applique les changements d’un commit spécifique à la branche courante",
      "C": "Supprime un commit spécifique",
      "D": "Fusionne deux branches non liées"
    },
    "correct": "B",
    "explanation": "<p>La commande git cherry-pick vous permet de prendre un commit d’une autre branche et de l’appliquer à votre branche actuelle.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 5",
    "q": "Comment supprimer les fichiers non trackés de votre répertoire de travail ?",
    "choices": {
      "A": "$ git clean",
      "B": "$ git erase",
      "C": "$ git purge",
      "D": "$ git remove"
    },
    "correct": "A",
    "explanation": "<p>La commande git clean supprime les fichiers non trackés de votre répertoire de travail, garantissant ainsi un espace de travail ordonné.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 5",
    "q": "Comment visualiser les différences entre le répertoire de travail et le dernier commit ?",
    "choices": {
      "A": "$ git view",
      "B": "$ git diff",
      "C": "$ git changes",
      "D": "$ git compare"
    },
    "correct": "B",
    "explanation": "<p>La commande git diff montre les différences entre le répertoire de travail et le dernier commit. C’est un outil utile pour voir les changements effectués avant de les commiter.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 5",
    "q": "Quand Git Initial a-t-il été publié ?",
    "choices": {
      "A": "Le 7 avril 2000",
      "B": "Le 7 avril 2002",
      "C": "Le 7 avril 2004",
      "D": "Le 7 avril 2005"
    },
    "correct": "D",
    "explanation": "<p>Git a été publié le 7 avril 2005.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 5",
    "q": "Git est la même chose que GitHub ?",
    "choices": {
      "A": "Vrai",
      "B": "Faux",
      "C": "Ne peut pas dire"
    },
    "correct": "B",
    "explanation": "<p>Bien que les deux soient étroitement liés, Git est un logiciel open source maintenu par Linux, tandis que Microsoft possède GitHub. Git est une plateforme open-source – libre d’utilisation, de modification et de distribution. En revanche, GitHub suit un modèle de tarification spécifique. Il propose un plan gratuit avec toutes les fonctionnalités de base de GitHub pour les particuliers.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 6",
    "q": "Quelle est la commande permettant d’obtenir la version installée de Git ?",
    "choices": {
      "A": "git –version",
      "B": "gitVersion",
      "C": "getGitVersion",
      "D": "git help version"
    },
    "correct": "A",
    "explanation": "<p>Pour vérifier la version de votre Git. Lancez votre invite de commande puis tapez la commande git –version et appuyez sur Entrée pour exécuter la commande.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 6",
    "q": "Quelle option devez-vous utiliser pour définir le nom d’utilisateur par défaut pour chaque référentiel sur votre ordinateur ?",
    "choices": {
      "B": "–all",
      "C": "–global",
      "D": "Il n’est pas nécessaire de le préciser, c’est la valeur par défaut."
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 6",
    "q": "Lequel des énoncés suivants est vrai lorsque vous utilisez la commande suivante ?",
    "choices": {
      "A": "Tous les fichiers nouveaux et mis à jour sont indexés",
      "B": "Tous les nouveaux fichiers sont mis à jour",
      "C": "Seuls les fichiers mis à jour sont indexés",
      "D": "Les fichiers sont classés par ordre alphabétique."
    },
    "correct": "A",
    "explanation": "<p>La commande ci-dessus ajoute tous les fichiers nouveaux et mis à jour à l’index afin de préparer le contenu mis à disposition pour la prochaine commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 6",
    "q": "Que va afficher la commande suivante dans le terminal ?",
    "choices": {
      "A": "La version de git que vous utilisez actuellement",
      "B": "La liste des dépôts distants auxquels vous êtes connecté",
      "C": "Les 5 dernières versions de git que vous avez installées",
      "D": "Un éditeur en ligne pour modifier les dépôts distants"
    },
    "correct": "B",
    "explanation": "<p>La commande ci-dessus affiche la liste des dépôts distants auxquels vous êtes connecté.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 6",
    "q": "Quelle option pouvez-vous utiliser pour appliquer les configurations git à l’ensemble de votre environnement git ?",
    "choices": {
      "A": "–all",
      "B": "–update",
      "C": "–master",
      "D": "–global"
    },
    "correct": "D",
    "explanation": "<p>Vous pouvez utiliser l’option « –global » pour appliquer les configurations git à l’ensemble de votre environnement git.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 6",
    "q": "L’objet d’un arbre Git_____",
    "choices": {
      "A": "ne peut contenir que des références à des blobs",
      "B": "ne peut contenir que des références à d’autres objets arbre",
      "C": "peut contenir des références à d’autres objets arborescents ou à des blobs",
      "D": "peut contenir des données de fichiers ou des références à d’autres objets arborescents ou blobs"
    },
    "correct": "D",
    "explanation": "<p>L’objet d’un arbre Git crée la hiérarchie entre les fichiers d’un dépôt Git. Vous pouvez utiliser l’objet d’un arbre Git pour créer la relation entre les répertoires et les fichiers qu’ils contiennent. Ces points d’accès vous permettent de lire et d’écrire des objets d’arbre dans votre base de données Git sur GitHub.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 6",
    "q": "Quelle est la forme complète de GIT ?",
    "choices": {
      "A": "Global International Track.",
      "B": "Global information Traffic.",
      "C": "Global information Tracker"
    },
    "correct": "C",
    "explanation": "<p>Global Information Tracker (GIT) est un système de contrôle de version distribué qui permet aux programmeurs de suivre les modifications apportées à leur base de code au fil du temps.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 6",
    "q": "Lequel des éléments suivants n’est pas une option valide pour le paramètre « credential.helper » ?",
    "choices": {
      "A": "temporary",
      "B": "store",
      "C": "cache",
      "D": "no value (par défaut)"
    },
    "correct": "A",
    "explanation": "<p>« temporary » n’est pas une option valide pour le paramètre « credential.helper ». Credential helpers ou (les aides à l’identification) sont des programmes exécutés par Git pour récupérer ou sauvegarder des informations d’identification depuis et vers un stockage à long terme (par exemple, les informations d’identification peuvent être stockées en mémoire pendant quelques minutes, ou indéfiniment sur le disque).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 6",
    "q": "Quelle commande est utilisée pour afficher un nombre limité de commits ?",
    "choices": {
      "A": "$ git log -f",
      "B": "$ git log -n",
      "C": "$ git config -n",
      "D": "$ git log status"
    },
    "correct": "B",
    "explanation": "<p>$ git log -n \"limit\" : Cette option permet de filtrer l’historique des commits en appliquant une limite. En remplaçant « limit » par un nombre de commits, la sortie sera limitée aux n commits les plus récents. $ git log -author= \"name\" : Cette option limite la sortie aux commits d’un auteur particulier « name ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 6",
    "q": "Quelle est la commande permettant de définir l’adresse électronique de l’utilisateur pour le référentiel actuel ?",
    "choices": {
      "A": "$ git config user.email",
      "B": "$ git config email",
      "C": "$ git email.user",
      "D": "Aucune de ces options"
    },
    "correct": "A",
    "explanation": "<p>La commande $ git config user.email permettant de définir l’adresse électronique de l’utilisateur pour le référentiel actuel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 7",
    "q": "La commande « git sparse-checkout » vous permet de ________",
    "choices": {
      "A": "d’initialiser uniquement le sous-module principal du référentiel",
      "B": "extraire une branche du référentiel sans certains de ses commits",
      "C": "cloner une branche distante de manière à obtenir une copie de travail mais pas de dépôt (pas de dossier .git)",
      "D": "extraire seulement quelques fichiers du référentiel dans votre copie de travail"
    },
    "correct": "D",
    "explanation": "<p>sparse-checkout: une sous-commande de git utilisée pour réduire les fichiers présents dans l’arbre de travail à un sous-ensemble de tous les fichiers traqués. Également, le nom du fichier dans le répertoire $GIT_DIR/info utilisé pour tracer les modèles de sparsité correspondant au sous-ensemble souhaité par l’utilisateur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 7",
    "q": "Quelle est la commande qui permet d’ajouter tous les fichiers et les modifications du dossier actuel à l’environnement « staging » du dépôt Git ?",
    "choices": {
      "A": "$ git add",
      "B": "$ git add –all",
      "C": "$ git add –files",
      "D": "Aucune de ces options"
    },
    "correct": "B",
    "explanation": "<p>La commande $ git add –all permet d’ajouter tous les fichiers et les modifications du dossier actuel à l’environnement « staging » du dépôt Git</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 7",
    "q": "L’historique des commits Git est automatiquement supprimé :",
    "choices": {
      "A": "Toutes les 2 semaines.",
      "B": "Tous les mois.",
      "C": "Chaque année.",
      "D": "L’historique des commits n’est jamais supprimé automatiquement."
    },
    "correct": "D",
    "explanation": "<p>L’historique des commits GIT n’est jamais supprimé automatiquement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 7",
    "q": "Quelle technique de somme de contrôle utilisée par Git ?",
    "choices": {
      "A": "SHA-1",
      "B": "SHA-2",
      "C": "MD5",
      "D": "Bit de parité"
    },
    "correct": "A",
    "explanation": "<p>GIT utilise la fonction de hachage SHA-1 pour nommer le contenu. Par exemple, les fichiers, les répertoires et les révisions sont désignés par des valeurs de hachag.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 7",
    "q": "Quelle est la commande permettant d’afficher les options disponibles pour la commande commit ?",
    "choices": {
      "A": "$ git commitHelp",
      "B": "$ gitHelp commit",
      "C": "$ git commit -help",
      "D": "$ git commit readme"
    },
    "correct": "C",
    "explanation": "<p>La commande $ git commit -help permet d’afficher les options disponibles pour la commande commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 7",
    "q": "Où Git cherche-t-il ses sous-programmes (git-commit, git-diff) ?",
    "choices": {
      "A": "La variable d’environnement PATH",
      "B": "git.binaries configuration globale",
      "C": "Variable d’environnement GIT_EXEC_PATH",
      "D": "le répertoire où se trouve git lui-même"
    },
    "correct": "C",
    "explanation": "<p>Dans la variable d’environnement GIT_EXEC_PATH.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 7",
    "q": "Est-ce que $ git diff différencie-t-il les fichiers binaires ?",
    "choices": {
      "A": "Non, ce n’est pas possible",
      "B": "Oui, Git ouvre un éditeur hexagonal",
      "C": "Oui, seulement si vous mettez le paramètre diff.binary à true",
      "D": "Oui, seulement si vous configurez le convertisseur binary-to-text dans les attributs git"
    },
    "correct": "D",
    "explanation": "<p>Oui, seulement si vous configurez le convertisseur binary-to-text dans les attributs git.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 7",
    "q": "Lequel de ces langages est utilisé dans GIT ?",
    "choices": {
      "A": "Le langage C",
      "B": "Langage C++",
      "C": "Langage C#",
      "D": "Langage PHP"
    },
    "correct": "A",
    "explanation": "<p>Git a été conçu comme un ensemble de programmes écrits en C et plusieurs scripts shell qui fournissent des interfaces autour de ces programmes. Bien que la plupart de ces scripts aient été réécrits en C pour des raisons de rapidité et de portabilité, la conception est restée la même.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 7",
    "q": "Parmi les avantages suivants, lequel est lié à l’utilisation de GIT ?",
    "choices": {
      "A": "Facilite la collaboration",
      "B": "Redondance et réplication des données",
      "C": "Le flux de travail est flexible",
      "D": "Tous ces éléments"
    },
    "correct": "D",
    "explanation": "<p>Tous les réponses sont correctes. L’un des principaux avantages de Git est sa capacité à créer des branches. Contrairement aux systèmes de contrôle de version centralisés, les branches Git sont peu coûteuses et faciles à fusionner.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 7",
    "q": "Que signifie un intervalle de commits branch1..branch2 ?",
    "choices": {
      "A": "Tous les commits qui contiennent des fichiers modifiés entre les commits de la branche1 et de la branche2",
      "B": "Tous les commits accessibles depuis la branche2, mais non accessibles depuis la branche1 ️",
      "C": "Tous les commits accessibles depuis la branche1, mais non accessibles depuis la branche2",
      "D": "Tous les commits créés dans la période entre les commits à la branche1 et à la branche2"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 8",
    "q": "Dans Git, une branche est :",
    "choices": {
      "A": "Une partie secrète de la configuration de Git.",
      "B": "Une version séparée du dépôt principal(main repository).",
      "C": "Un champ que vous pouvez utiliser pour taper des commandes.",
      "D": "Rien, c’est un mot qui n’a pas de sens."
    },
    "correct": "B",
    "explanation": "<p>Dans Git, les branches font partie du processus de développement quotidien. Les branches Git sont en fait un pointeur vers un instantané de vos modifications. Lorsque vous souhaitez ajouter une nouvelle fonctionnalité ou corriger un bogue – quelle que soit son importance – vous créez une nouvelle branche pour encapsuler vos modifications.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 8",
    "q": "Quand ne faut-il PAS lancer ‘git gc’ ?",
    "choices": {
      "A": "Dans un arbre de travail clairsemé",
      "B": "Lorsque vous prévoyez de pousser vers un serveur distant",
      "C": "Lorsque vous travaillez dans la branche de quelqu’un d’autre",
      "D": "Lorsque vous avez des objets orphelins que vous souhaitez restaurer"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 8",
    "q": "Quelle est la commande pour se déplacer vers la branche nommée « new-branch » ?",
    "choices": {
      "A": "$ git branch new-branch",
      "B": "$ git checkout new-branch",
      "C": "$ git branch -move new-branch",
      "D": "$ git checkout branch new-branch"
    },
    "correct": "B",
    "explanation": "<p>Cette commande git checkout new-branch permettant de se déplacer vers la branche nommée « new-branch ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 8",
    "q": "Lequel des éléments suivants est l’éditeur de texte par défaut de l’interpréteur de commandes Bash dans le cas d’une installation de Git sous Windows ?",
    "choices": {
      "A": "Vim",
      "B": "Bash",
      "C": "Emacs",
      "D": "Notepad++"
    },
    "correct": "A",
    "explanation": "<p>Sous Windows, si vous utilisez Git Bash, l’éditeur par défaut sera Vim. Vim est un autre éditeur de texte, comme nano ou notepad.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 8",
    "q": "Lequel des éléments suivants doit être présent et configuré sur votre système d’exploitation local avant l’installation de Git ?",
    "choices": {
      "A": "Apache Maven",
      "B": "Java Development Kit 1.8 ou plus récent",
      "C": "Serveur compatible avec le profil web Jakarta Enterprise Edition",
      "D": "Rien"
    },
    "correct": "D",
    "explanation": "<p>Git ne nécessite aucune de ces éléments ci-dessus pour s’installer.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 8",
    "q": "Quelles sont les deux propriétés de configuration que l’outil s’attend à voir configurées après l’installation de Git et avant de publier le premier commit ?",
    "choices": {
      "A": "Le nom d’utilisateur et le mot de passe",
      "B": "Le nom d’utilisateur et adresse IP",
      "C": "L’adresse e-mail et mot de passe",
      "D": "Le nom d’utilisateur et adresse e-mail"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 8",
    "q": "La commande Git checkout est-elle utilisée pour ?",
    "choices": {
      "A": "créer une nouvelle branche",
      "B": "pour passer d’une branche à l’autre",
      "C": "Les deux A et B",
      "D": "pour supprimer le référentiel"
    },
    "correct": "C",
    "explanation": "<p>Les deux pour créer une nouvelle branche et pour passer d’une branche à l’autre.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 8",
    "q": "Quelle commande définit l’email de l’auteur à utiliser pour toutes les commits de l’utilisateur actuel.",
    "choices": {
      "A": "$ git email–amend",
      "B": "$ git config –global user.email",
      "C": "$ git clean -f",
      "D": "$ git log –author = “ ”"
    },
    "correct": "B",
    "explanation": "<p>On utilise la commande $ git config --global user.email pour définir l’email de l’auteur à utiliser pour toutes les commits de l’utilisateur actuel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 8",
    "q": "Comment créer une copie d’un travail sous votre propre compte GitHub afin que vous puissiez effectuer le travail ?",
    "choices": {
      "A": "$ git clone",
      "B": "$ git fork",
      "C": "$ git pull-request",
      "D": "Forking via l’interface GitHub."
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 9",
    "q": "Quels sont les fichiers dans lesquels on peut effectuer une recherche à l’aide de « git grep » ?",
    "choices": {
      "A": "Toutes les arborescences locales de Git",
      "B": "L’arbre de travail actuel",
      "C": "Tous les fichiers sur l’ordinateur",
      "D": "Arbre de travail courant et arbre de travail distant"
    },
    "correct": "A",
    "explanation": "<p>Git est livré avec une commande appelée grep qui vous permet de rechercher facilement une chaîne de caractères ou une expression régulière dans n’importe quel arbre de commit, dans le répertoire de travail ou même dans l’index.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 9",
    "q": "Où est stockée une branche dans un dépôt Git ?",
    "choices": {
      "A": "Dans le répertoire .git/refs",
      "B": "Dans le répertoire .git/refs ou dans le fichier .git/packed-refs",
      "C": "Dans le fichier .git/packed-refs",
      "D": "Dans le fichier .git/branches ou dans le fichier .git/packed-refs"
    },
    "correct": "B",
    "explanation": "<p>Une branche du dépôt Git est stockée dans le répertoire .git/refs ou dans le fichier .git/packed-refs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 9",
    "q": "Quel est le but de ‘git filter-branch’ ?",
    "choices": {
      "A": "Effectuer le garbage collection sur une seule branche",
      "B": "Effectuer une recherche de texte à l’intérieur d’un ensemble particulier de branches",
      "C": "Pour dresser la liste de toutes les branches locales, à l’exception de celles qui sont filtrées par un prédicat donné",
      "D": "Pour réécrire l’historique en appliquant une opération à tous les commits"
    },
    "correct": "D",
    "explanation": "<p>git filter-branch est un outil puissant et flexible de Git utilisé pour réécrire l’historique d’un dépôt. Il est principalement utilisé pour appliquer des changements complexes à l’historique du dépôt, comme renommer des fichiers ou des répertoires, supprimer des données sensibles, ou, modifier les informations de l’auteur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 9",
    "q": "Quelle est l’option, lorsque l’on se déplace vers une branche, pour créer la branche si elle n’existe pas ?",
    "choices": {
      "B": "-all",
      "C": "-new",
      "D": "-newbranch"
    },
    "correct": "A",
    "explanation": "<p>git checkout -b <branchname>: L’option git checkout -b est une option pratique qui permet d’exécuter l’opération git branch <new-branch> avant de procéder à git checkout <new-branch>. Vous pouvez non seulement créer une nouvelle branche mais aussi la changer simultanément par une seule commande.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 9",
    "q": "Quelle est la commande pour fusionner la branche actuelle avec la branche « new-branch » ?",
    "choices": {
      "A": "$ git add new-email",
      "B": "$ git commit -merge new-email",
      "C": "$ git merge new-email",
      "D": "Aucune de ces options"
    },
    "correct": "C",
    "explanation": "<p>git merge est une commande utilisée pour combiner les modifications d’une ou plusieurs branches dans la branche courante. Elle intègre l’historique de ces branches, en s’assurant que toutes les modifications sont incluses et que les conflits sont résolus.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 9",
    "q": "Où sont stockés les fichiers avant qu’ils ne soient transférés dans le référentiel local ?",
    "choices": {
      "A": "git",
      "B": "les fichiers sauvegardés",
      "C": "documents git",
      "D": "zone staging/index"
    },
    "correct": "D",
    "explanation": "<p>La zone staging est un fichier, généralement contenu dans votre répertoire Git, qui stocke des informations sur ce qui sera intégré dans votre prochain commit. Son nom technique dans le jargon Git est « index », mais l’expression « zone staging » fonctionne tout aussi bien.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 9",
    "q": "Quelle commande peut être utilisée pour lister les branches qui ont été fusionnées dans la branche en cours de vérification ?",
    "choices": {
      "A": "$ git master –status",
      "B": "$ git branch –merged",
      "C": "$ git branch –status",
      "D": "$ git status –merged"
    },
    "correct": "B",
    "explanation": "<p>Utilisez la commande git branch -merged pour lister les branches qui ont été fusionnées dans la branche courante. Cette commande listera toutes les branches qui ont été fusionnées dans la branche courante.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 9",
    "q": "Qu’est-ce que le contrôle de version ?",
    "choices": {
      "A": "un type d’architecture utilisé pour gérer de grandes bases de données",
      "B": "un système qui affiche, suit et contrôle les modifications apportées à un ensemble de fichiers au fil du temps",
      "C": "un type de logiciel qui relie un projet à un dépôt GitHub",
      "D": "un modèle de conception programmatique utilisé pour gérer le code entre plusieurs équipes d’ingénieurs"
    },
    "correct": "B",
    "explanation": "<p>Le contrôle de version est un système qui affiche, suit et contrôle les modifications apportées à un ensemble de fichiers au fil du temps</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 9",
    "q": "Quelle est la commande pour supprimer la branche « new-branch » ?",
    "choices": {
      "A": "$ git remove new-branch",
      "B": "$ git delete new-branch",
      "C": "$ git branch -d new-branch",
      "D": "$ git delete branch new-branch"
    },
    "correct": "C",
    "explanation": "<p>git branch -d est la commande pour supprimer une branche localement. -d est une option de la commande, et c’est un alias de –delete . Il indique que vous souhaitez supprimer quelque chose, comme son nom l’indique. « new-branch » est le nom de la branche que vous voulez supprimer.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 9",
    "q": "Quelle est la commande pour supprimer la branche distante « test-branch » ?",
    "choices": {
      "A": "$ git remove test-branch",
      "B": "$ git delete test-branch",
      "C": "$ git branch -d test-branch",
      "D": "$ git push origin –delete test-branch"
    },
    "correct": "D",
    "explanation": "<p>Pour supprimer une branche distante, vous ne pouvez pas utiliser la commande git branch. Vous devez plutôt utiliser la commande git push avec l’option –delete, suivie du nom de la branche que vous souhaitez supprimer. Vous devez également spécifier le nom distant (origine dans ce cas) après git push.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 10",
    "q": "Quelle est la commande pour transférer le référentiel actuel vers l’origine distante ?",
    "choices": {
      "A": "$ git push origin",
      "B": "$ git merge remote",
      "C": "$ git remote push",
      "D": "$ git remote commit"
    },
    "correct": "A",
    "explanation": "<p>git push origin est une commande git qui pousse une ou plusieurs branches locales vers un dépôt distant (origin).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 10",
    "q": "Qu’est-ce qui ne peut pas être signé cryptographiquement dans Git ?",
    "choices": {
      "A": "Les tags",
      "B": "Les branches",
      "C": "Commits fusionnés",
      "D": "Commits réguliers"
    },
    "correct": "B",
    "explanation": "<p>Git est sécurisé cryptographiquement, mais il n’est pas à toute épreuve. Si vous utilisez le travail d’autres personnes sur Internet et que vous souhaitez vérifier que les modifications proviennent bien d’une source fiable, Git propose plusieurs moyens de signer et de vérifier le travail à l’aide de GPG.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 10",
    "q": "Les attributs Git sont utilisés pour __________",
    "choices": {
      "A": "écraser la configuration globale",
      "B": "contrôler les autorisations d’accès aux refs",
      "C": "ajouter des métadonnées à certains fichiers ou objets",
      "D": "spécifier certains paramètres pour des fichiers particuliers ou des types de fichiers dans le référentiel"
    },
    "correct": "D",
    "explanation": "<p>En utilisant les attributs, vous pouvez par exemple spécifier des stratégies de fusion distinctes pour chaque fichier ou répertoire de votre projet, indiquer à Git comment différencier les fichiers non textuels, ou demander à Git de filtrer le contenu avant de l’intégrer ou de l’exclure de Git.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 10",
    "q": "Git reflog est utilisé pour __________",
    "choices": {
      "A": "tracer les modifications des auteurs",
      "B": "stocker l’historique des conflits de fusion",
      "C": "stocker l’historique des mises à jour des références",
      "D": "se synchroniser avec les branches de contrôle à distance"
    },
    "correct": "C",
    "explanation": "<p>Le reflog Git est un outil très utile pour les développeurs. Les logs de référence, parfois connus sous le nom de « reflogs », gardent une trace de la modification des têtes de branches et d’autres références dans le dépôt local. Les reflogs peuvent être utilisés dans diverses opérations Git pour spécifier la valeur précédente d’une référence.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 10",
    "q": "Que signifie le signe « + » au début d’une référence ?",
    "choices": {
      "A": "Qu’une authentification est nécessaire",
      "B": "Que la branche distante peut ne pas exister",
      "C": "Qu’il existe une correspondance « one-to-many » entre les références",
      "D": "Que les mises à jour par écrasement (non fast-forward) sont autorisées"
    },
    "correct": "D",
    "explanation": "<p>Un refspec est spécifié sous la forme [+]＜src＞:＜dst＞. Le paramètre ＜src＞ est la branche source dans le référentiel local, et le paramètre ＜dst＞ est la branche de destination dans le référentiel distant. Le signe + facultatif permet de forcer le référentiel distant à effectuer une mise à jour non rapide.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 10",
    "q": "‘git describe’ recherche le ___ le plus proche accessible depuis le commit",
    "choices": {
      "A": "tag",
      "B": "remote",
      "C": "author",
      "D": "branch"
    },
    "correct": "A",
    "explanation": "<p>La commande git describe trouve le tag accessible le plus récent d’un commit. Le tag n’est affiché que s’il fait référence au commit. Si ce n’est pas le cas, elle ajoute au nom du tag le nombre de commits qui ont suivi l’objet tagué, suivi du nom abrégé de l’objet du commit le plus récent.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 10",
    "q": "Quelle est la différence entre les tags et les branches dans Git ?",
    "choices": {
      "A": "Les tags ne peuvent pointer que sur une branche",
      "B": "Les tags ne peuvent pas être poussés vers une branche distante",
      "C": "Les branches contiennent des copies complètes des fichiers de leur historique",
      "D": "Les tags ne peuvent pas être déplacés et peuvent être signés de manière cryptographique"
    },
    "correct": "D",
    "explanation": "<p>Les tags sont utilisés pour marquer des points importants dans le calendrier du projet, tandis que les branches sont des lignes de développement distinctes qui seront finalement fusionnées avec le code principal de l’application.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 10",
    "q": "Quelle est la commande pour obtenir tout l’historique des modifications du référentiel distant « origin » ?",
    "choices": {
      "A": "$ git origin help",
      "B": "$ git get log origin",
      "C": "$ git fetch origin",
      "D": "$ git status remote origin"
    },
    "correct": "C",
    "explanation": "<p>La commande $ git fetch origin est utilisée pour obtenir tout l’historique des modifications du référentiel distant « origin ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 10",
    "q": "Quelle est la commande qui permet d’afficher les différences entre la branche actuelle et la branche « new-branch » ?",
    "choices": {
      "A": "$ git log new-branch",
      "B": "$ git diff new-branch",
      "C": "$ git status new-branch",
      "D": "$ git changes new-branch"
    },
    "correct": "B",
    "explanation": "<p>La commande $ git diff new-branch permet d’afficher les différences entre la branche actuelle et la branche « new-branch ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 11",
    "q": "Git Pull est une combinaison de _________________",
    "choices": {
      "A": "fetch et merge",
      "B": "add et commit",
      "C": "branch et checkout",
      "D": "Aucun de ces éléments"
    },
    "correct": "A",
    "explanation": "<p>La commande git pull est en fait une combinaison de deux autres commandes, git fetch suivi de git merge. Dans un premier temps, git pull exécute un git fetch sur la branche locale vers laquelle HEAD pointe. Une fois le contenu téléchargé, git pull entre dans un processus de fusion.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 11",
    "q": "Quelle est la fonction de « GIT PUSH » dans GIT ?",
    "choices": {
      "A": "GIT PUSH les refs distants avec les objets associés.",
      "B": "GIT PUSH met à jour les références distantes.",
      "C": "GIT PUSH met à jour les refs distants ainsi que les objets associés."
    },
    "correct": "C",
    "explanation": "<p>GIT PUSH met à jour les refs distants ainsi que les objets associés.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 11",
    "q": "Pour créer un dépôt Git, quelle commande devez-vous exécuter ?",
    "choices": {
      "A": "$ git create <nom du projet>",
      "B": "$ git new",
      "C": "$ git new <nom du projet>",
      "D": "$ git init"
    },
    "correct": "D",
    "explanation": "<p>Pour créer un nouveau référentiel, vous utiliserez la commande git init. git init est une commande unique que vous utilisez lors de la configuration initiale d’un nouveau référentiel. L’exécution de cette commande créera un nouveau sous-répertoire .git dans votre répertoire de travail actuel. Cela créera également une nouvelle branche principale (main).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 11",
    "q": "Quelle commande exécuteriez-vous pour enregistrer les modifications dans le fichier js/app.js ?",
    "choices": {
      "A": "$ git add js/app.js",
      "B": "$ git stage js/app.js",
      "C": "$ git commit js/app.js",
      "D": "$ git commit js/app.js –to-staging-area"
    },
    "correct": "A",
    "explanation": "<p>La commande $ git add js/app.js enregistrer les modifications dans le fichier js/app.js.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 11",
    "q": "Quel est le nom du fichier utilisé pour indiquer à Git d’ignorer certains fichiers ?",
    "choices": {
      "A": "gitignore",
      "B": ".gitignore ️",
      "C": "ignore.git",
      "D": "ignore"
    },
    "correct": "B",
    "explanation": "<p>L’objectif des fichiers gitignore est de s’assurer que certains fichiers qui ne sont pas trackés par Git restent non trackés. Pour arrêter le tracking d’un fichier qui est actuellement tracké, utilisez git rm –cached pour supprimer le fichier de l’index. Le nom du fichier peut alors être ajouté au fichier . gitignore pour empêcher le fichier d’être réintroduit dans des commits ultérieurs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 11",
    "q": "Quelle commande permet d’ajouter une branche distante au référentiel ?",
    "choices": {
      "A": "$ git remote add <nom> <url>",
      "B": "$ git branch –remote <nom> <url>",
      "C": "$ git remote new <nom> <url>",
      "D": "$ git branch <nom> <url>"
    },
    "correct": "A",
    "explanation": "<p>La commande $ git remote add <nom> <url> permet d’ajouter une branche distante au référentiel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 11",
    "q": "Quelle commande créerait l’alias c pour la commande commit (au niveau global ou utilisateur) ?",
    "choices": {
      "A": "$ git config –global alias.c commit",
      "B": "$ git config –global alias.commit c",
      "C": "$ git config alias.c commit",
      "D": "$ git config alias.commit c"
    },
    "correct": "A",
    "explanation": "<p>La commande $ git config --global alias.c commit créerait l’alias c pour la commande commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 11",
    "q": "Quelle commande qui affichera le diff du fichier README, en comparant la version dans la zone de staging avec la dernière version commitée.",
    "choices": {
      "A": "$ git diff README",
      "B": "$ git diff staged README",
      "C": "$ git difference–staged README",
      "D": "$ git diff –staged README"
    },
    "correct": "D",
    "explanation": "<p>La commande $ git diff --staged README affichera le diff du fichier README, en comparant la version dans la zone de staging avec la dernière version commitée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 11",
    "q": "Si vous clonez un dépôt qui contient des sous-modules, ils seront initialisés __________",
    "choices": {
      "A": "seulement après",
      "B": "après",
      "C": "seulement si vous clonez avec l’argument –recursif",
      "D": "seulement si vous clonez avec l’argument –submodules"
    },
    "correct": "B",
    "explanation": "<p>Si vous clonez un dépôt qui contient des sous-modules, ils seront initialisés après git submodule init et git submodule update ou si vous clonez avec l’argument –recursif.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 11",
    "q": "Décrivez ce que ces commandes Git font à l’historique des commits :",
    "choices": {
      "A": "Elles réinitialisent le HEAD au cinquième commit du repository, puis fusionnent avec la branche master.",
      "B": "Le HEAD de la branche courante est réinitialisé à cinq commits, puis les commits précédents sont écrasés en un seul commit.",
      "C": "Ils suppriment les cinq derniers commits.",
      "D": "Ils fusionnent les cinq derniers commits dans une nouvelle branche."
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 12",
    "q": "Votre projet actuel a plusieurs branches : master, beta, et push-notifications. Vous venez de terminer la fonctionnalité de notification dans la branche push-notification, et vous voulez la commiter dans la branche beta. Comment faire ?",
    "choices": {
      "A": "Allez sur la branche push-notifications et exécutez git merge beta",
      "B": "Allez sur la branche master et lancer git merge beta -> push-notifications",
      "C": "Supprimez la branche push-notifications et elle sera commitée à la branche master automatiquement.",
      "D": "Allez sur la branche beta et exécuter git merge push-notifications"
    },
    "correct": "D",
    "explanation": "<p>Allez sur la branche beta et exécuter $ git merge push-notifications</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 12",
    "q": "Que va afficher la commande suivante dans le terminal ?",
    "choices": {
      "A": "Une liste des dépôts distants et leurs URLs",
      "B": "La version actuelle de git que vous utilisez",
      "C": "Un éditeur en ligne pour modifier les dépôts distants",
      "D": "Les 5 dernières versions de git que vous avez installées"
    },
    "correct": "A",
    "explanation": "<p>La commande suivante $ git remote -v affiche une liste des repository distants et leurs URLs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 12",
    "q": "En regardant les commandes suivantes, décrivez ce qui se passe.",
    "choices": {
      "A": "Le commit est en train d’être marqué pour mise en production sur la branche feature-user-profile.",
      "B": "Un commit est en train d’être copié de sa branche d’origine vers la branche feature-user-profile.",
      "C": "Le commit est en train d’être sélectionné comme nouveau HEAD de l’historique des commits.",
      "D": "Un commit est en train d’être copié de la branche « feature-user-profile» vers la branche « master ».",
      "E": "La branche est basculée sur la branche « feature-user-profile », et le commit spécifié est appliqué à la branche."
    },
    "correct": "E",
    "explanation": "<p>‘git checkout feature-user-profile’ passe à la branche ‘feature-user-profile’. ‘git cherry-pick a29842122sea09119336a3be2sdf59sdfo992eef45296744’ applique les changements du commit spécifié (‘a29842122sea09119336a3be2sdf59sdfo992eef45296744’) à la branche courante (feature-user-profile). Cela permet de copier le commit de sa branche d’origine vers la branche feature-user-profile. Ainsi, cette séquence de commandes sélectionne un commit spécifique sur la branche feature-user-profile.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 12",
    "q": "Que fait la commande suivante sur le dépôt git ?",
    "choices": {
      "A": "Elle supprime tous les commits précédents et réinitialise l’historique du dépôt à son état initial.",
      "B": "Elle réinitialise la branche de travail au premier commit.",
      "C": "Il conserve le HEAD au commit actuel mais efface tous les commits précédents.",
      "D": "Il met HEAD à la dernière commit et laisse les changements de la commit annulée dans le stage/index."
    },
    "correct": "D",
    "explanation": "<p>Il met HEAD à la dernière commit et laisse les changements de la commit annulée dans le stage/index.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 12",
    "q": "Vous trouvez un bogue dans votre projet, mais vous ne parvenez pas à localiser l’endroit où il a été introduit dans l’historique des commits. Comment diagnostiquer ce problème ?",
    "choices": {
      "A": "Remontez manuellement dans l’historique des commits.",
      "B": "Utilisez git search -diff pour comparer tous les commits dans l’historique de votre dépôt.",
      "C": "Exécutez un git rebase pour trouver le commit défectueux.",
      "D": "Utilisez git bisect pour comparer le commit bogué à un commit antérieur qui fonctionne comme prévu."
    },
    "correct": "D",
    "explanation": "<p>Utilisez git bisect pour comparer le commit bogué à un commit antérieur qui fonctionne comme prévu.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 12",
    "q": "Pourquoi utiliser la commande suivante ?",
    "choices": {
      "A": "Pour effectuer une recherche comparative des différences entre les 10 dernières commits.",
      "B": "Pour lister les 10 derniers commits et les modifier avec la commande squash ou fixup",
      "C": "Pour supprimer les 10 derniers commits et réinitialiser le HEAD",
      "D": "Pour mettre en cache localement les 10 dernières modifications"
    },
    "correct": "B",
    "explanation": "<p>Pour lister les 10 derniers commits et les modifier avec la commande squash ou fixup.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 12",
    "q": "Comment fusionner plusieurs commits sans utiliser git merge –squash ?",
    "choices": {
      "A": "Vous ne pouvez pas. git merge –squash est la seule commande git pour cette opération.",
      "B": "Rebasing",
      "C": "Caching",
      "D": "Reflogging"
    },
    "correct": "B",
    "explanation": "<p>Dans Git, il y a deux méthode d’intégrer les modifications d’une branche dans une autre: en fusionnant (merge) et en rebasant (rebase).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 12",
    "q": "Si vous clonez un dépôt git existant, que se passera-t-il ?",
    "choices": {
      "A": "Une nouvelle copie écraserait le dépôt central.",
      "B": "Une copie du dépôt serait créée sur votre machine locale",
      "C": "Rien, le clonage n’est pas une fonction git supportée.",
      "D": "Une copie du dépôt serait créée sur la plateforme d’hébergement"
    },
    "correct": "B",
    "explanation": "<p>Si vous clonez un dépôt git existant, une copie du dépôt serait créée sur votre machine locale.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 12",
    "q": "Comment afficher la liste des fichiers ajoutés ou modifiés dans un commit spécifique ?",
    "choices": {
      "A": "Trouvez le commit dans le dépôt distant, car c’est le seul endroit où ce type d’information est stocké.",
      "B": "Utilisez la commande diff-tree avec le hash du commit.",
      "C": "Exécuter git commit –info avec le hash du commit.",
      "D": "Accéder aux données du commit stash avec git stash."
    },
    "correct": "B",
    "explanation": "<p>Utilisez la commande diff-tree avec le hash du commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 12",
    "q": "Quels sont les fichiers que ce .gitignore est programmé pour ignorer ?",
    "choices": {
      "A": "Tous les fichiers avec une extension .swift, .txt, ou metadata, ainsi que l’ensemble du répertoire build.",
      "B": "Uniquement le répertoire build",
      "C": "Tous les fichiers du répertoire build, ainsi que les fichiers se terminant par .txt ou .metadata",
      "D": "Uniquement les fichiers portant les extensions .swift et .txt."
    },
    "correct": "C",
    "explanation": "<p>Une ligne commençant par # sert de commentaire. Par conséquent, # .swift ne fait rien.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 13",
    "q": "Après avoir apporté des modifications à un référentiel local, vous exécutez la commande suivante. Qu’est-ce que cela va faire ?",
    "choices": {
      "A": "Rien, vous ne pouvez pas utiliser plusieurs options dans la même commande.",
      "B": "Ajoute tous les nouveaux fichiers à la zone de transit (staging area ou index)",
      "C": "Commite tous les nouveaux fichiers avec un message",
      "D": "Ajoute tous les fichiers modifiés à la zone de transit (staging area ou index), puis les commite avec un message"
    },
    "correct": "D",
    "explanation": "<p>Ajoute tous les fichiers modifiés à la zone de transit (staging area ou index), puis les commite avec un message</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 13",
    "q": "Où sont stockés les fichiers avant qu’ils ne soient transférés dans le référentiel local ?",
    "choices": {
      "A": "Fichiers archivés",
      "B": "Documents git",
      "C": "Zone de transit (staging area ou index)",
      "D": "Le cache git"
    },
    "correct": "C",
    "explanation": "<p>Les fichiers sont stockés dans la zone de transit (staging area ou index) avant qu’ils ne soient transférés dans le référentiel local.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 13",
    "q": "Vous constatez que votre projet possède un tag et une branche tous deux nommés push-feature, ce qui crée une certaine confusion lorsque vous essayez d’afficher une référence donnée. Comment pouvez-vous spécifier la branche que vous souhaitez consulter ?",
    "choices": {
      "A": "utiliser $ git show refs/push-feature",
      "B": "utiliser $ git show push-feature",
      "C": "utiliser $ git show heads/refs/push-feature",
      "D": "utiliser $ git show refs/heads/push-feature"
    },
    "correct": "D",
    "explanation": "<p>Utiliser $ git show refs/heads/push-feature.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 13",
    "q": "Votre chef d’équipe a besoin d’une liste de tous les commits qui seront déplacés avant d’effectuer un rebase. Quelle commande pouvez-vous utiliser pour accéder à cette information ?",
    "choices": {
      "A": "$ git rebase -log",
      "B": "$ git rebase -i",
      "C": "$ git rebase -verbose",
      "D": "$ git rebase -all"
    },
    "correct": "B",
    "explanation": "<p>$ git rebase -i <commit> Ajoutez un hash de commit et une liste de tous les commits jusqu’au dernier commit sera affichée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 13",
    "q": "Que fait l’opération à partir des commandes Git ci-dessous ?",
    "choices": {
      "A": "Il exécute une fusion d’un bon commit découvert à l’aide d’un mauvais commit connu et d’un bon commit connu.",
      "B": "Il marque un commit pour suppression en utilisant un bad commit connu et un good commit connu pour déterminer quel commit a introduit un bogue.",
      "C": "Il définit un mauvais commit et réinitialise le HEAD à l’aide d’un bad commit connu et d’un good commit connu.",
      "D": "Il effectue une recherche binaire en utilisant un mauvais commit connu et un bon commit connu pour déterminer quel commit a introduit un bogue."
    },
    "correct": "D",
    "explanation": "<p>Il effectue une recherche binaire en utilisant un mauvais commit connu et un bon commit connu pour déterminer quel commit a introduit un bogue.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 13",
    "q": "Dans une situation où vous avez plusieurs commits pour une seule tâche, quelle est la manière la plus efficace de restructurer votre historique de commits ?",
    "choices": {
      "A": "Choisir les commits liés à la tâche dans une autre branche.",
      "B": "Supprimer les commits de la tâche et recommencer avec un nouveau message.",
      "C": "Rassembler les commits liés en un seul commit cohérent.",
      "D": "Stocker les commits liés sous un nouveau hash."
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 13",
    "q": "Quelle affirmation est vraie à propos de la commande git push ?",
    "choices": {
      "A": "Par défaut, un push n’envoie pas de tags au dépôt distant.",
      "B": "Les commits ne peuvent être taggés que lorsqu’ils sont créés.",
      "C": "Les tags sont poussés vers le dépôt distant avec leurs commits respectifs.",
      "D": "Seules les tags annotés sont automatiquement poussés vers le dépôt distant avec un commit."
    },
    "correct": "A",
    "explanation": "<p>Par défaut, un push n’envoie pas de tags au dépôt distant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 13",
    "q": "Après avoir poussé des commits vers le dépôt distant pour la première fois à l’aide de la commande ci-dessous, quelle commande abrégée pouvez-vous utiliser à l’avenir ?",
    "choices": {
      "A": "$ git push master",
      "B": "$ git push origin",
      "C": "Même chose que précédemment, $ git push -u origin master",
      "D": "$ git push"
    },
    "correct": "D",
    "explanation": "<p>La commande abrégée que vous pouvez utiliser à l’avenir est $ git push.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 13",
    "q": "Comment créer un raccourci ou une commande personnalisée dans votre environnement Git ?",
    "choices": {
      "A": "Exécutez $ git hotfix avec le nom du raccourci.",
      "B": "Attribuer un raccourci ou une commande à l’aide du fichier d’options git.",
      "C": "Utilisez la commande $ git custom-key.",
      "D": "Créer un alias à l’aide de la commande $ git config."
    },
    "correct": "D",
    "explanation": "<p>Vous pouvez utiliser la commande $ git config pour créer un alias de commande dans GIT.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 14",
    "q": "Quel changement la commande suivante apportera-t-elle aux fichiers de la zone de transit(staging area) ?",
    "choices": {
      "A": "testfile.js sera supprimé de la zone de transit et ses modifications ne seront plus suivies.",
      "B": "testfile.js sera supprimé de la zone de transit mais ses modifications seront toujours suivies.",
      "C": "Une copie de testfile.js sera mise en cache sur votre bureau.",
      "D": "La copie actuelle de testfile.js sera sauvegardée dans la zone de transit."
    },
    "correct": "A",
    "explanation": "<p>Le fichier testfile.js sera supprimé de la zone de transit(staging area) et ses modifications ne seront plus suivies.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 14",
    "q": "Après avoir réussi à fusionner deux branches et à commiter les changements, quelle est l’étape suivante pour garder votre structure git organisée ?",
    "choices": {
      "A": "Utilisez la commande",
      "B": "Exécutez",
      "C": "Utilisez",
      "D": "Exécutez"
    },
    "correct": "B",
    "explanation": "<p>Après avoir réussi à fusionner deux branches et à commiter les changements. Exécutez la commande $ git branch -d <nom de la branche> pour supprimer la branche fusionnée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 14",
    "q": "Alors que vous modifiez un fichier, on vous confie soudainement une correction de bogue urgente sur une autre branche. Comment pouvez-vous sauvegarder temporairement votre travail local sans vous engager ?",
    "choices": {
      "A": "Ce n’est pas possible, car vous ne pouvez pas sauvegarder localement sans commiter.",
      "B": "Lancez git hold pour sauvegarder une copie locale de ce que vous êtes en train de faire et y revenir plus tard.",
      "C": "Sauvegardez votre travail avec git local-cache.",
      "D": "Utilisez git stash pour sauvegarder votre travail et revenez plus tard pour réappliquer le commit stashé."
    },
    "correct": "D",
    "explanation": "<p>Utilisez $ git stash pour sauvegarder votre travail et revenez plus tard pour réappliquer le commit stashé.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 14",
    "q": "Alors que vous travaillez sur une branche de fonction, vous essayez d’utiliser « git rerere » pour résoudre un conflit de fusion récurrent, mais rien ne se passe. Quelle peut être la cause de ce problème ?",
    "choices": {
      "A": "L’option « -all » n’est pas ajoutée à la commande.",
      "B": "L’option « rerere.enabled » n’est pas activée dans le fichier de configuration.",
      "C": "Le hachage du commit est manquant.",
      "D": "Le chemin d’accès au fichier n’est pas spécifié."
    },
    "correct": "B",
    "explanation": "<p>git rerere vous aide à résoudre la dernière fusion conflictuelle en utilisant les informations de la résolution manuelle précédente. L’exécution de la commande git rerere immédiatement après une fusion automatique conflictuelle enregistre les fichiers de l’arbre de travail en conflit, avec les marqueurs de conflit habituels <<<<<<< , ======= , et >>>>>>> .</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 14",
    "q": "Quel paramètre détermine le pager utilisé lors de la sortie des pages Git ?",
    "choices": {
      "A": "core.page",
      "B": "page",
      "C": "pager",
      "D": "core.pager"
    },
    "correct": "D",
    "explanation": "<p>Ce paramètre détermine quel pager est utilisé lorsque les pages Git sont affichées, comme les logs et les diff. Vous pouvez le définir sur « more » ou sur votre pager préféré (par défaut, c’est « less » ), ou vous pouvez le désactiver en le définissant sur une chaîne vide : $ git config --global core.pager ''</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 14",
    "q": "Que contient l’objet commit ?",
    "choices": {
      "A": "Un ensemble de fichiers représentant l’état d’un projet à un moment donné.",
      "B": "Une référence aux objets de commit parents.",
      "C": "Un nom SHA1, une chaîne de 40 caractères qui identifie de manière unique l’objet commit.",
      "D": "Une référence aux objets commit parents et un ensemble de fichiers représentant l’état d’un projet à un moment donné, ainsi qu’un nom SHA1, une chaîne de 40 caractères qui identifie de manière unique l’objet commit."
    },
    "correct": "D",
    "explanation": "<p>L’objet commit contient une référence aux objets commit parents et un ensemble de fichiers représentant l’état d’un projet à un moment donné, ainsi qu’un nom SHA1, une chaîne de 40 caractères qui identifie de manière unique l’objet commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 14",
    "q": "Quelle option permet d’inclure le nom du responsable du commit dans le format de log personnalisé ?",
    "choices": {
      "A": "%ce",
      "B": "%cr",
      "C": "%cd",
      "D": "%cn"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 14",
    "q": "Quel utilisateur doit être créé en premier lors de la configuration de SSH ?",
    "choices": {
      "A": "git",
      "B": "admin",
      "C": "root",
      "D": "Aucun de ces utilisateurs"
    },
    "correct": "D",
    "explanation": "<p>La question n’est pas assez précise pour donner une réponse définitive, car elle dépend du cas d’utilisation spécifique et de la configuration de l’installation SSH.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 15",
    "q": "Quelle commande permet de lister les tags de la série 1.4.2 ?",
    "choices": {
      "A": "$ git tag ‘v1.4.2’",
      "B": "$ git tag -l ‘v1.4.2.*’",
      "C": "$ git tag-list ‘v1.4.2*’",
      "D": "$ git tag ‘v1.4.2*’"
    },
    "correct": "B",
    "explanation": "<p>La commande $ git tag -l 'v1.4.2.*' permet de lister les tags de la série 1.4.2.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 15",
    "q": "Quelle commande Git permet de commencer le tracking d’un nouveau fichier ?",
    "choices": {
      "A": "add",
      "B": "addfile",
      "C": "begin",
      "D": "track"
    },
    "correct": "A",
    "explanation": "<p>Vous vous souvenez peut-être que lorsque vous exécutez git init, vous exécutez $ git add <files> – c’est pour commencer à traquer les fichiers dans votre répertoire. La commande git add prend le chemin d’accès d’un fichier ou d’un répertoire; s’il s’agit d’un répertoire, la commande ajoute tous les fichiers de ce répertoire de manière récursive.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 15",
    "q": "Quelle touche renvoie une série de suggestions à choisir lors de l’écriture d’une commande Git ?",
    "choices": {
      "A": "Ctrl",
      "B": "Maj",
      "C": "Tab",
      "D": "Alt"
    },
    "correct": "C",
    "explanation": "<p>La touche ‘Tab’ renvoie une série de suggestions à choisir lors de l’écriture d’une commande Git dans l’unité de commande.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 15",
    "q": "Comment Git considère-t-il ses données ?",
    "choices": {
      "A": "Fichier",
      "B": "Dossier",
      "C": "Snapshot(Instantané)",
      "D": "Aucune de ces données"
    },
    "correct": "C",
    "explanation": "<p>Git considère plutôt ses données comme une série d’instantanés (snapshots) d’un système de fichiers simplifié. Avec Git, chaque fois que vous effectuez un commit, ou que vous sauvegardez l’état de votre projet, Git prend une image de tous vos fichiers à ce moment-là et stocke une référence à cet instantané(snapshots).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 15",
    "q": "A partir de quelle version Git propose-t-il d’inverser un fichier pour revenir à ce qu’il était lors de la dernière commit?",
    "choices": {
      "A": "1.7",
      "B": "1.6",
      "C": "2.0",
      "D": "1.8"
    },
    "correct": "D",
    "explanation": "<p>GIT Version 1.8.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 15",
    "q": "Quelle stratégie est utilisée par Git pour fusionner deux branches ?",
    "choices": {
      "A": "LIFO",
      "B": "récursive",
      "C": "FIFO",
      "D": "octopus"
    },
    "correct": "D",
    "explanation": "<p>Octopus. Il s’agit de la stratégie de fusion par défaut pour plus de deux têtes. Lorsque plus d’une branche est passée, Octopus est automatiquement engagé. Si une fusion a des conflits qui nécessitent une résolution manuelle, Octopus refusera la tentative de fusion.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 15",
    "q": "Que stocke refs ?",
    "choices": {
      "A": "La valeur SHA-1",
      "B": "Aucune de ces valeurs",
      "C": "Nom de la branche",
      "D": "Nom du projet"
    },
    "correct": "C",
    "explanation": "<p>Une tête de branche est stockée dans la hiérarchie refs/heads, tandis que les tags sont stockés dans la hiérarchie refs/tags de l’espace de noms ref (typiquement dans les répertoires $GIT_DIR/refs/heads et $GIT_DIR/refs/tags ou, en tant qu’entrées dans le fichier $GIT_DIR/packed-refs si les refs sont packagés par git gc ).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 15",
    "q": "Quelle est l’extension habituelle du fichier contenant la clé publique ?",
    "choices": {
      "A": "ssh",
      "B": "pub",
      "C": "key"
    },
    "correct": "B",
    "explanation": "<p>L’extension habituelle du fichier contenant la clé publique est pub.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 15",
    "q": "Combien de commits un dépôt peut-il avoir ?",
    "choices": {
      "A": "N’importe quel nombre de commits",
      "B": "un seul commit local par dépôt",
      "C": "seulement trois commits par branche",
      "D": "un seul commit par HEAD"
    },
    "correct": "A",
    "explanation": "<p>N’importe quel nombre de commits.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 15",
    "q": "Quels types de tags Git prend-il en charge ?",
    "choices": {
      "A": "lourdes et concises",
      "B": "légères et immuables",
      "C": "lourd et annoté",
      "D": "léger et annoté"
    },
    "correct": "D",
    "explanation": "<p>Les tags annotés sont destinés à la production, tandis que les tags légers sont destinés à l’étiquetage d’objets privés ou temporaires. Pour cette raison, certaines commandes git permettant de nommer des objets (comme git describe ) ignorent par défaut les tags légers.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 16",
    "q": "Après avoir placé une série de modifications dans l’index, quelle commande pourriez-vous utiliser pour les réviser avant de les commiter?",
    "choices": {
      "A": "$ git diff –cached",
      "B": "$ git diff",
      "C": "$ git diff –HEAD",
      "D": "$ git status -v -v"
    },
    "correct": "A",
    "explanation": "<p>$ git diff --cached</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 16",
    "q": "Que fait la commande $ git stash drop ?",
    "choices": {
      "A": "supprime l’entrée la plus récente du cache(stash)",
      "B": "supprime le cache(stash)",
      "C": "liste tout ce qui se trouve dans le cache(stash)",
      "D": "jette l’entrée la plus ancienne"
    },
    "correct": "A",
    "explanation": "<p>La commande $ git stash drop supprime l’entrée la plus récente du cache(stash).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 16",
    "q": "Quelle commande crée une nouvelle branche à partir de la branche actuellement checkée ?",
    "choices": {
      "A": "$ git -b checkout <nomDeLaBranche>",
      "B": "$ git branch",
      "C": "$ git checkout <nomDeLaBranche>",
      "D": "$ git checkout -b <nomDeLaBranche>"
    },
    "correct": "D",
    "explanation": "<p>La commande $ git checkout -b <nomDeLaBranche> crée une nouvelle branche à partir de la branche actuellement checkée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 16",
    "q": "Après avoir placé par erreur un fichier nommé monFichier dans l’index, comment le supprimer de l’index pour l’exclure de votre prochain commit ?",
    "choices": {
      "A": "Utilisez $ git reset HEAD^.",
      "B": "Utilisez $ git reset myFile.txt.",
      "C": "Utiliser $ git -rm monFichier.txt.",
      "D": "Utiliser $ git reset."
    },
    "correct": "B",
    "explanation": "<p>Utilisez $ git reset myFile.txt.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 16",
    "q": "Comment Git gère-t-il les branches en interne ?",
    "choices": {
      "A": "en créant un pointeur sur l’instantané ou le commit le plus récent de la branche.",
      "B": "en créant un tableau de données des branches dans le même dépôt.",
      "C": "en créant un dictionnaire de données des modifications de code.",
      "D": "en créant un fichier log de débogage qui stocke les modifications du référentiel."
    },
    "correct": "A",
    "explanation": "<p>Git gère en interne les branches en créant un pointeur sur l’instantané ou le commit le plus récent de la branche.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 16",
    "q": "Vous souhaitez effectuer un git reset mais vous ne vous souvenez pas de toutes les options disponibles. Quelle commande utiliseriez-vous pour obtenir une description de ces options ?",
    "choices": {
      "A": "$ git help reset",
      "B": "$ git -h reset",
      "C": "$ git options reset",
      "D": "$ git reset help"
    },
    "correct": "A",
    "explanation": "<p>$ git help reset</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 16",
    "q": "Qu’est-ce qu’un dépôt distant ?",
    "choices": {
      "A": "une version du dépôt qui reflète les modifications apportées à la branche master du dépôt local dans le contexte d’une collaboration open-source",
      "B": "le dépôt principal élu par l’arbitre Git trouvé dans les dépôts locaux des membres de l’équipe qui collaborent",
      "C": "une version en lecture seule du référentiel stockée sur un serveur de sauvegarde au cas où les référentiels locaux seraient perdus ou corrompus",
      "D": "une version du référentiel hébergée sur l’internet ou le réseau, vers laquelle les collaborateurs poussent ou retirent des données."
    },
    "correct": "D",
    "explanation": "<p>Un dépôt distant est une version du référentiel hébergée sur l’internet ou le réseau, vers laquelle les collaborateurs poussent ou retirent des données.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 16",
    "q": "Après avoir modifié certains fichiers existants dans un référentiel, vous décidez de supprimer les modifications. Quelle commande pouvez-vous utiliser ?",
    "choices": {
      "A": "$ git restore",
      "B": "$ git undo",
      "C": "$ git clean",
      "D": "$ git checkout ."
    },
    "correct": "D",
    "explanation": "<p>$ git checkout .</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 16",
    "q": "Après avoir commencé à fusionner une branche de fonction dans votre branche principale, vous rencontrez un conflit de fusion et décidez de ne pas effectuer la fusion. Comment pouvez-vous arrêter la fusion et revenir à l’état antérieur à la fusion ?",
    "choices": {
      "A": "Utilisez $ git restore -p",
      "B": "Utilisez $ git merge -u",
      "C": "Utiliser $ git merge –abort",
      "D": "Utilisez $ git merge –undo"
    },
    "correct": "C",
    "explanation": "<p>$ git merge --abort</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 16",
    "q": "Quelle commande crée correctement un tag léger ?",
    "choices": {
      "A": "$ git tag v3.8.1",
      "B": "$ git tag –light “v3.8.1”",
      "C": "$ git tag v3.8.1 —-annotate -m “<tagMessage>”",
      "D": "$ git tag -l v3.8.1"
    },
    "correct": "A",
    "explanation": "<p>$ git tag v3.8.1</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 17",
    "q": "Quel est le principal problème lié à l’utilisation de git rebase lorsque l’on travaille avec plusieurs développeurs ?",
    "choices": {
      "A": "Rebase n’affecte que votre dépôt et crée un diff dans la branche master.",
      "B": "Rebase crée une copie temporaire de la branche master dans le dépôt distant.",
      "C": "Rebase déplace le HEAD de la branche master distante d’un commit vers l’avant.",
      "D": "Rebase supprime tout l’historique des commit pour la nouvelle branche feature."
    },
    "correct": "A",
    "explanation": "<p>Les dépôts Git sont distribués (largement copiés). Les nouveaux historiques créés par le rebasage n’affectent qu’un seul dépôt. C’est pourquoi vous devez utiliser –force pendant votre push, pour forcer un autre dépôt à accepter la « réécriture de l’historique ». Mais cela n’affecte qu’une seule autre copie, pas toutes les autres.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 17",
    "q": "Quels sont les conflits qui peuvent survenir lorsque l’on force une push après un rebasing ?",
    "choices": {
      "A": "La branche master distante pourrait voir ses modifications écrasées.",
      "B": "L’URL d’origine sera réinitialisée à sa valeur par défaut.",
      "C": "Le HEAD actuel sera supprimé et ne pourra pas être rétabli.",
      "D": "Rien, c’est une pratique courante de forcer un push après une rebase."
    },
    "correct": "A",
    "explanation": "<p>Si on force une push après un rebasing, la branche master distante pourrait voir ses modifications écrasées.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 17",
    "q": "Quelle est la différence entre Git et SVN ?",
    "choices": {
      "A": "Git fonctionne uniquement sous Linux, tandis que SVN fonctionne sur tous les systèmes d’exploitation.",
      "B": "SVN fonctionne uniquement sous Linux, tandis que Git fonctionne sur tous les systèmes d’exploitation.",
      "C": "SVN est un système centralisé, alors que Git est un système distribué.",
      "D": "Git est un système centralisé, tandis que SVN est un système distribué."
    },
    "correct": "C",
    "explanation": "<p>SVN est un système centralisé, alors que Git est un système distribué.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 17",
    "q": "Cette commande est un exemple de quel type de tag ?",
    "choices": {
      "A": "verbeux",
      "B": "annoté",
      "C": "léger",
      "D": "différé"
    },
    "correct": "B",
    "explanation": "<p>La commande ci-dessus est un exemple de tag annoté.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 17",
    "q": "Quelle est la différence entre un soft reset (git reset –soft) et un hard reset (git reset -hard) ?",
    "choices": {
      "A": "Un soft reset ne modifie que le commit vers lequel HEAD pointe, alors qu’un hard reset réinitialise l’index et l’arbre de travail pour qu’ils correspondent au commit spécifié, en abandonnant tous les changements.",
      "B": "Un soft reset met en cache l’ancien pointeur HEAD, alors qu’un hard reset le supprime entièrement.",
      "C": "Un hard reset ne modifie que l’emplacement du pointeur HEAD, tandis qu’un soft reset modifie le HEAD et l’index.",
      "D": "Un hard reset met en cache l’ancien pointeur HEAD, tandis qu’un soft reset le supprime entièrement."
    },
    "correct": "A",
    "explanation": "<p>Un soft reset ne modifie que le commit vers lequel HEAD pointe, alors qu’un hard reset réinitialise l’index et l’arbre de travail pour qu’ils correspondent au commit spécifié, en abandonnant tous les changements.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 17",
    "q": "Quelles sont les informations stockées dans le fichier de configuration de git ?",
    "choices": {
      "A": "les scripts et les drapeaux de l’interpréteur de commandes",
      "B": "les clés et les informations sur le compte",
      "C": "les options locales et globales du dépôt",
      "D": "scripts et paramètres de précompilation"
    },
    "correct": "C",
    "explanation": "<p>git/config dans chaque dépôt est utilisé pour stocker la configuration de ce dépôt, et $HOME/. gitconfig est utilisé pour stocker une configuration par utilisateur comme valeurs de secours pour le fichier . git/config. Le fichier /etc/gitconfig peut être utilisé pour stocker une configuration par défaut pour l’ensemble du système.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 17",
    "q": "Quelle est la différence entre les commandes git stash et git stash pop ?",
    "choices": {
      "A": "git stash supprime un commit de l’historique du repo, tandis que git stash pop sauvegarde les modifications sur plusieurs branches.",
      "B": "git stash sauvegarde les modifications sur plusieurs branches, alors que git stash pop supprime un commit de l’historique du repo.",
      "C": "git stash supprime le commit le plus récent, tandis que git stash pop enregistre les modifications en cours."
    },
    "correct": "D",
    "explanation": "<p>git stash crée une entrée de stash, tandis que git stash pop place un état sauvegardé de la liste de stash dans le répertoire de travail.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 17",
    "q": "Quelle commande peut être utilisée pour lister les branches qui ont été fusionnées dans la branche en cours de vérification ?",
    "choices": {
      "A": "$ git master –status",
      "B": "$ git branch –status",
      "C": "$ git branch –merged",
      "D": "$ git status –merged"
    },
    "correct": "C",
    "explanation": "<p>La commande $ git branch --merged est utilisée pour lister les branches qui ont été fusionnées dans la branche en cours de vérification.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 18",
    "q": "Vous venez de terminer le rebasage de votre branche master et vous devez mettre à jour manuellement la branche master distante, même s’il y a un conflit de fusion. Comment pouvez-vous accomplir cela ?",
    "choices": {
      "A": "$ git push –overwrite",
      "B": "$ git push –update",
      "C": "$ git push –assert",
      "D": "$ git push –force-with-lease"
    },
    "correct": "D",
    "explanation": "<p>–force-with-lease est une option plus sûre qui n’écrasera aucun travail sur la branche distante si des commits ont été ajoutés à la branche distante (par un autre membre de l’équipe ou un collègue ou autre). Elle garantit que vous n’écrasez pas le travail de quelqu’un d’autre en poussant forcement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 18",
    "q": "Quelle est la différence entre git fetch et git pull ?",
    "choices": {
      "A": "git fetch crée une nouvelle branche à partir de la branche master, alors que git pull crée une nouvelle branche à partir de la branche master du dépôt local.",
      "B": "git pull télécharge de nouvelles données depuis un dépôt distant sans les intégrer dans les fichiers locaux, alors que git fetch met à jour la branche HEAD courante avec les dernières modifications du serveur distant.",
      "C": "git fetch met à jour les branches de tracking distantes avec les modifications provenant d’un dépôt distant, tandis que git pull met à jour les branches de tracking distantes avec les modifications provenant d’un dépôt distant et les fusionne dans les branches locales correspondantes.",
      "D": "git fetch télécharge et fusionne les données du dépôt local, tandis que git pull informe vos collègues que vous êtes sur le point d’apporter des modifications à la branche principale."
    },
    "correct": "C",
    "explanation": "<p>git fetch met à jour les branches de tracking distantes avec les modifications provenant d’un dépôt distant, tandis que git pull met à jour les branches de tracking distantes avec les modifications provenant d’un dépôt distant et les fusionne dans les branches locales correspondantes.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 18",
    "q": "Vous souhaitez restaurer une partie du travail précédemment stocké dans une nouvelle branche. Comment faire ?",
    "choices": {
      "A": "Utilisez git branch <stash hash>.",
      "B": "Ajoutez les commits cachés au commit courant, puis créez une nouvelle branche.",
      "C": "Utilisez git checkout -b.",
      "D": "Exécutez $ git stash branch <nom de la branche>."
    },
    "correct": "D",
    "explanation": "<p>Exécutez $ git stash branch <nom de la branche>.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 18",
    "q": "Quelle est la différence entre git branch -d et git branch -D ?",
    "choices": {
      "A": "-D supprime la branche locale, alors que -d supprime la branche quel que soit le statut du push et du merge.",
      "B": "-d supprime le commit head actuel, alors que -D supprime la branche entière.",
      "C": "-d supprime la branche locale, tandis que -D supprime la branche locale quel que soit le statut de push et de merge.",
      "D": "-D supprime la tête de commit actuelle, alors que -d supprime la branche entière."
    },
    "correct": "C",
    "explanation": "<p>-d supprime la branche locale, tandis que -D supprime la branche locale quel que soit le statut de push et de merge.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 18",
    "q": "Vous avez stocké trois jeux de modifications, mais vous ne vous souvenez pas du contenu de la première entrée. Quelle commande utiliseriez-vous pour voir les détails des modifications dans la première des trois entrées de stash ?",
    "choices": {
      "A": "$ git stash show -p stash@{2}",
      "B": "$ git stash list",
      "C": "$ git stash show -p stash@{1}",
      "D": "$ git stash show -p"
    },
    "correct": "D",
    "explanation": "<p>$ git stash show -p</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 18",
    "q": "Quel est le paramètre par défaut de $ git reflog lorsqu’aucune sous-commande n’est spécifiée ?",
    "choices": {
      "A": "delete",
      "B": "expire",
      "C": "show",
      "D": "update"
    },
    "correct": "C",
    "explanation": "<p>La sous-commande « show » (qui est aussi la sous-commande par défaut, en l’absence de toute sous-commande) affiche le fichier log de la référence fournie dans la ligne de commande (ou HEAD, par défaut). Le reflog couvre toutes les actions récentes, et en plus le reflog HEAD enregistre les basculements de branches. $ git reflog show est un alias de $ git log -g --abbrev-commit --pretty=oneline.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 18",
    "q": "Comment l’option -p modifie-t-elle le comportement de la commande git add ?",
    "choices": {
      "A": "Elle fait en sorte que les fichiers suivis dans le répertoire parent soient inclus dans les fichiers mis à jour.",
      "B": "Elle permet aux développeurs de choisir de manière interactive les modifications apportées aux fichiers indexés qui seront mises à jour et de publier les différences pour révision.",
      "C": "Elle pousse automatiquement les modifications vers la branche correspondante du référentiel distant.",
      "D": "Il permet aux développeurs de choisir de manière interactive les fichiers qui sont validés et affiche les différences pour révision."
    },
    "correct": "B",
    "explanation": "<p>L’option -p de la commande git add permet aux développeurs de choisir de manière interactive les modifications apportées aux fichiers indexés qui seront mises à jour et de publier les différences pour révision.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 18",
    "q": "Après avoir vérifié un commit spécifique, vous recevez un message d’avertissement indiquant que vous êtes dans l’état ‘detached HEAD’. De quoi Git vous avertit-il ?",
    "choices": {
      "A": "Vous ne travaillez pas sur le commit le plus récent d’une branche.",
      "B": "Un coéquipier a signalé le code avec un problème.",
      "C": "Le commit n’a pas de parent.",
      "D": "La branche n’a pas été poussée vers le dépôt distant."
    },
    "correct": "C",
    "explanation": "<p>Le message d’avertissement ‘detached HEAD’ indique que le commit n’a pas de parent.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 18",
    "q": "Après avoir supprimé accidentellement une branche dans votre dépôt local, comment pouvez-vous la récupérer ?",
    "choices": {
      "A": "Elle ne peut pas être récupérée.",
      "B": "Trouvez le hash de la branche avec la commande log, puis exécutez",
      "C": "Trouvez le hachage de la branche avec la commande reflog, puis exécutez",
      "D": "Exécutez"
    },
    "correct": "C",
    "explanation": "<p>Pour récupérer une branche dans votre dépôt local supprimé accidentellement, vous pouvez trouvez le hachage de la branche avec la commande reflog, puis exécutez git checkout -b <branchname> <hash>.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 19",
    "q": "Comment afficher un histogramme montrant les insertions, suppressions et modifications par fichier pour un commit spécifique ainsi que les informations générales du commit ?",
    "choices": {
      "A": "Utilisez $ git stat.",
      "B": "Utilisez $ git debug –prettyprint.",
      "C": "Interroger le référentiel distant avec le hash du commit.",
      "D": "Utilisez $ git show <commit> –stat."
    },
    "correct": "D",
    "explanation": "<p>Utilisez $ git show <commit> --stat.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 19",
    "q": "Quelles fonctionnalités les gestionnaires de dépôts tels que GitHub offrent-ils en plus de Git ?",
    "choices": {
      "A": "Les gestionnaires de dépôts sont des versions propriétaires de Git qui n’incluent pas de fonctionnalités améliorées.",
      "B": "Les gestionnaires de dépôt fournissent un outil en ligne de commande amélioré qui est utilisé pour gérer plusieurs dépôts locaux.",
      "C": "Les gestionnaires de dépôt fournissent un service en ligne pour héberger des dépôts Git qui incluent des fonctionnalités de collaboration telles que les requêtes pull, le suivi des problèmes et les évaluations par les pairs.",
      "D": "Les gestionnaires de référentiels distribuent les référentiels à plusieurs endroits sur le poste de travail d’un utilisateur, fournissant un stockage redondant qui permet une sauvegarde et une récupération rapides."
    },
    "correct": "C",
    "explanation": "<p>Les gestionnaires de dépôt fournissent un service en ligne pour héberger des dépôts Git qui incluent des fonctionnalités de collaboration telles que les requêtes pull, le suivi des problèmes et les évaluations par les pairs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 19",
    "q": "Quelle commande permet de trouver le HEAD de la branche courante ?",
    "choices": {
      "A": "$ git head –verify",
      "B": "$ git log –head",
      "C": "$ git hash –head",
      "D": "$ git show-ref –head"
    },
    "correct": "D",
    "explanation": "<p>La commande $ git show-ref --head permet de trouver le HEAD de la branche courante.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 19",
    "q": "Lorsque les flux de travail Git contiennent une branche à long terme, à quoi sert cette branche à long terme ?",
    "choices": {
      "A": "Les branches à long terme stockent du code instable jusqu’à ce qu’il soit revu par les pairs pour être intégré dans une branche fonctionnelle.",
      "B": "Les branches à long terme correspondent aux sprints agiles et sont utilisées pour stocker les fonctionnalités développées au cours du sprint.",
      "C": "Les branches à long terme contiennent du code lié au développement de fonctionnalités expérimentales qui est fusionné dans des branches à court terme telles que master.",
      "D": "Les branches à long terme correspondent à différents stades de développement et sont toujours ouvertes aux branches de sujets/caractéristiques dans lesquelles elles peuvent être intégrées."
    },
    "correct": "D",
    "explanation": "<p>Remarque: master n’est pas une branche à court terme, comme l’indique la réponse « C ». La réponse « D » est la bonne.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 19",
    "q": "Quelle commande prend les modifications de la branche master sur le dépôt distant origin et les fusionne avec la branche locale ?",
    "choices": {
      "A": "$ git commit -u origin",
      "B": "$ git checkout origin",
      "C": "$ git pull origin master",
      "D": "$ git push origin master"
    },
    "correct": "C",
    "explanation": "<p>La commande $ git pull origin master prend les modifications de la branche master sur le dépôt distant origin et les fusionne avec la branche locale.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 19",
    "q": "Qu’est-ce que l’option -p ajoute à la sortie de la commande git log ?",
    "choices": {
      "A": "Elle ajoute une sortie de correctif qui montre les différences introduites dans chaque commit.",
      "B": "Elle ajoute une sortie de correctif qui affiche un résumé de la liste des fichiers modifiés.",
      "C": "Elle ajoute un padding à la sortie et affiche un histogramme montrant le nombre de lignes modifiées à chaque commit.",
      "D": "Elle ajoute le message de commit complet et les notes associées à chaque commit."
    },
    "correct": "A",
    "explanation": "<p>L’option -p ajoute une sortie de correctif qui montre les différences introduites dans chaque commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 19",
    "q": "Qu’est-ce que la zone de transit (staging area) ou l’index ?",
    "choices": {
      "A": "Une zone qui stocke les commits avant qu’ils ne soient poussés vers le dépôt distant.",
      "B": "Une zone contenant des entrées de cache qui peuvent être appliquées aux fichiers de travail.",
      "C": "une zone où les modifications d’une branche du référentiel distant sont stockées avant d’être appliquées à une branche locale",
      "D": "une zone qui stocke des informations sur les modifications qui seront incluses dans le prochain commit"
    },
    "correct": "D",
    "explanation": "<p>La zone de transit (staging area) ou l’index est une zone qui stocke des informations sur les modifications qui seront incluses dans le prochain commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 19",
    "q": "Quelle commande utiliseriez-vous pour enregistrer les modifications apportées à l’index strictement pour les fichiers de propriétés dans le répertoire actuel ?",
    "choices": {
      "A": "$ git add *.properties",
      "B": "$ git add %.properties",
      "C": "$ git add .properties",
      "D": "$ git add properties"
    },
    "correct": "A",
    "explanation": "<p>Utilisez $ git add *.properties.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 19",
    "q": "Que sont les fichiers non trackés ?",
    "choices": {
      "A": "Les fichiers dans le dépôt local qui n’ont pas été fusionnés dans la branche principale.",
      "B": "les fichiers mis à disposition dont Git n’a pas connaissance parce qu’ils n’ont pas ‘committed’",
      "C": "les fichiers du répertoire de travail dont Git n’a pas connaissance parce qu’ils n’ont pas ‘staged’ ou ‘committed’",
      "D": "les fichiers du référentiel distant dont Git n’a pas connaissance parce qu’ils n’ont pas ‘tagged’."
    },
    "correct": "C",
    "explanation": "<p>Les fichiers non trackés sont les fichiers du répertoire de travail dont Git n’a pas connaissance parce qu’ils n’ont pas ‘staged’ ou ‘committed’.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 19",
    "q": "Après avoir apporté des modifications majeures à votre code, vous êtes un peu nerveux à l’idée de le commiter. Quelle commande utiliseriez-vous pour vérifier le commit avant de l’effectuer ?",
    "choices": {
      "A": "$ git commit –verify",
      "B": "$ git notes show",
      "C": "$ git commit preview",
      "D": "$ git commit –dry-run"
    },
    "correct": "D",
    "explanation": "<p>Utiliser $ git commit --dry-run.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 20",
    "q": "Quelle affirmation décrit le mieux le concept de HEAD de Git ?",
    "choices": {
      "A": "Un pointeur sur le fichier le plus récemment modifié dans le stage/index",
      "B": "Un pointeur vers la branche master",
      "C": "Un pointeur sur la dernière commit dans la branche en cours de vérification (check-out).",
      "D": "Un pointeur sur l’endroit où le référentiel est stocké en mémoire."
    },
    "correct": "C",
    "explanation": "<p>Dans Git, HEAD est une référence au commit actuel sur la branche en cours de vérification (check-out). Il représente l’extrémité de la branche, pointant vers le dernier commit sur lequel vous travaillez. HEAD peut être considéré comme le « marqueur de la branche courante » ou le « pointeur vers la branche active ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 20",
    "q": "Après avoir modifié plusieurs fichiers, vous vous rendez compte que les modifications apportées au fichier config.properties sont incorrectes et qu’elles doivent être supprimées du « stage » et du répertoire de travail. Quelle commande pouvez-vous utiliser pour supprimer les modifications apportées au fichier ?",
    "choices": {
      "A": "$ git reset HEAD^ — config.properties",
      "B": "$ git rm config.properties",
      "C": "$ git rf config.properties",
      "D": "$ git checkout HEAD — config.properties"
    },
    "correct": "A",
    "explanation": "<p>Utiliser: $ git reset HEAD^ -- config.properties</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 20",
    "q": "Votre entreprise a déplacé son dépôt distant sur GitHub à l’emplacement suivant: https://github.com/name/test-api.git. Quelle commande met à jour le dépôt distant, nommé origin, pour qu’il pointe vers le nouveau dépôt distant à cet emplacement ?",
    "choices": {
      "A": "git remote create-update origin https://github.com/name/test-api.git",
      "B": "git remote update origin https://github.com/name/test-api.git",
      "C": "git remote set-url origin https://github.com/name/test-api.git",
      "D": "git remote add https://github.com/name/test-api.git"
    },
    "correct": "C",
    "explanation": "<p>Utiliser: git remote set-url origin https://github.com/name/test-api.git</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 20",
    "q": "Quand la commande cherry-pick est-elle utilisée ?",
    "choices": {
      "A": "lorsqu’un commit d’une branche doit être copié dans une autre branche",
      "B": "lorsque le HEAD doit être réinitialisé à un commit spécifique",
      "C": "lorsqu’un commit spécifique doit être extrait du dépôt distant",
      "D": "lorsqu’un script hook doit être invoqué"
    },
    "correct": "A",
    "explanation": "<p>La commande cherry-pick est utilisée lorsqu’un commit d’une branche doit être copié dans une autre branche.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 20",
    "q": "Comment décririez-vous un dépôt forké?",
    "choices": {
      "A": "une copie supprimée ou archivée d’un référentiel",
      "B": "une branche de version bêta d’un référentiel",
      "C": "une branche future d’un référentiel",
      "D": "une copie séparée d’un référentiel"
    },
    "correct": "D",
    "explanation": "<p>Un fork est une copie d’un dossier de projet (dépôt) dans votre compte Github ou sur votre bureau si vous utilisez Github sur votre bureau. Forks vous permet d’apporter des modifications à un projet sans affecter le dépôt d’origine.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 20",
    "q": "Comment exclure d’un dépôt Git des fichiers non trackés dans le répertoire de travail ?",
    "choices": {
      "A": "Vous ne pouvez pas exclure les fichiers du dépôt.",
      "B": "Marquez les fichiers avec exclu.",
      "C": "Ajouter un motif correspondant aux fichiers au fichier .gitignore.",
      "D": "Ajouter les fichiers à la branche omise"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 20",
    "q": "Quelle commande crée une copie quasi-exacte de l’ensemble du dépôt à partir d’un serveur ?",
    "choices": {
      "A": "$ git checkout <url>",
      "B": "$ git pull <url>",
      "C": "$ git clone <url>",
      "D": "$ git replicate <url>"
    },
    "correct": "C",
    "explanation": "<p>La commande $ git clone <url> crée une copie quasi-exacte de l’ensemble du dépôt à partir d’un serveur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 20",
    "q": "Que se passerait-il si vous exécutiez la commande git reset testfile.js ?",
    "choices": {
      "A": "testfile.js serait remis à l’état de fichier vierge.",
      "B": "testfile.js serait réinitialisé à son premier état sauvegardé.",
      "C": "testfile.js serait réinitialisé à sa dernière copie sauvegardée.",
      "D": "testfile.js serait supprimé de la zone stage/index, si elle existe."
    },
    "correct": "C",
    "explanation": "<p>Le fichier testfile.js serait réinitialisé à sa dernière copie sauvegardée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 20",
    "q": "Quelle situation peut se produire lorsque l’on tente de combiner des branches contenant des modifications du même morceau de code ?",
    "choices": {
      "A": "Code perdu",
      "B": "annulation automatique",
      "C": "collisions",
      "D": "conflit de merge"
    },
    "correct": "D",
    "explanation": "<p>Les conflits de merge surviennent lorsque des modifications concurrentes sont apportées à la même ligne d’un fichier, ou lorsqu’une personne modifie un fichier et qu’une autre le supprime.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 21",
    "q": "Quelle pratique peut aider à réduire les chances de rencontrer un conflit de merge ?",
    "choices": {
      "A": "Fournir des messages de commit détaillés qui décrivent les changements introduits par le commit.",
      "B": "Effectuer des commits importants qui introduisent plusieurs fonctionnalités.",
      "C": "Maintenir les branches du référentiel local synchronisées avec les branches du référentiel distant en effectuant des commit, des push et des pull fréquemment.",
      "D": "Éviter les interactions fréquentes avec le référentiel distant afin de réduire la probabilité de conflits de pull."
    },
    "correct": "C",
    "explanation": "<p>Pour éviter de rencontrer un conflit de merge, maintenir les branches du référentiel local synchronisées avec les branches du référentiel distant en effectuant des commit, des push et des pull fréquemment.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 21",
    "q": "Quelle commande pouvez-vous utiliser pour supprimer les fichiers non trackés du répertoire de travail ?",
    "choices": {
      "A": "$ git rm -all",
      "B": "$ git rm –cached",
      "C": "$ git clean -d -f",
      "D": "$ git checkout"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 21",
    "q": "Quelle est la meilleure façon de signaler un bogue sur un projet GitHub ?",
    "choices": {
      "A": "Envoyer un email au propriétaire du projet.",
      "B": "Je ne m’embête pas à signaler des bogues de logiciels car il n’y a pas de transparence et ils ne sont jamais corrigés de toute façon.",
      "C": "Recherchez le bogue dans les anomalies existantes du projet et créez-en une nouvelle si elle n’a pas encore été signalée.",
      "D": "Utilisez git search -diff pour comparer tous les commits dans l’historique de votre dépôt."
    },
    "correct": "C",
    "explanation": "<p>Les anomalies d’un projet sont visibles par toute personne ayant accès au projet. Vous constaterez donc peut-être qu’une solution est déjà prévue ou disponible. Sinon, vous pouvez créer et suivre le problème vous-même.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 21",
    "q": "Supposons que vous ayez créé une correction de bogue sur une nouvelle branche et que vous souhaitiez qu’elle fasse partie de la prochaine version de production générée à partir de la branche principale. Que devez-vous faire ensuite ?",
    "choices": {
      "A": "Copier les modifications de votre branche et les commiter directement sur la branche principale.",
      "B": "Créer une « pull request » pour merger votre nouvelle branche dans la branche principale.",
      "C": "En y réfléchissant bien, je ne vais peut-être pas partager cette correction. Je vais juste le mettre dans ma propre version privée du code source.",
      "D": "Utilisez git bisect pour comparer le commit bogué à un premier commit qui fonctionne comme prévu."
    },
    "correct": "B",
    "explanation": "<p>Les « pull request » sont le moyen correct de communiquer que les modifications sont prêtes à être examinées et finalement incluses dans la branche principale.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 21",
    "q": "Git Pull est une combinaison de __________.",
    "choices": {
      "A": "add et commit.",
      "B": "branch et checkout.",
      "C": "fetch et merge.",
      "D": "Aucune de ces combinaisons."
    },
    "correct": "C",
    "explanation": "<p>Git Pull est une combinaison de fetch et merge.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 21",
    "q": "Expliquez le concept de « Git blame » et quand il est utilisé dans un flux de travail de contrôle de version.",
    "choices": {
      "A": "Git blame est une commande permettant de trouver et d’exposer l’identité des contributeurs dans un dépôt Git.",
      "B": "Elle est utilisée pour blâmer les autres pour les problèmes de code dans un projet collaboratif.",
      "C": "Git blame est une fonctionnalité permettant de suivre l’emplacement des bogues dans le code.",
      "D": "Git blame est un outil permettant d’afficher qui a modifié en dernier lieu chaque ligne d’un fichier, ce qui permet de suivre les modifications et de comprendre l’historique et la paternité du code."
    },
    "correct": "D",
    "explanation": "<p>Git blame est un outil permettant d’afficher qui a modifié en dernier lieu chaque ligne d’un fichier, ce qui permet de suivre les modifications et de comprendre l’historique et la paternité du code.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 21",
    "q": "Vous regardez une page de dépôt et cliquez sur un nom de dossier pour l’ouvrir. Vous avez activé la recherche de code, donc vous arrivez dans la vue du code. Quel est le moyen le plus rapide de trouver un fichier sur un chemin dans votre dépôt ?",
    "choices": {
      "A": "Appuyez sur la touche slash(/) puis sur la touche T.",
      "B": "Passez à la recherche avancée.",
      "C": "Dans le menu de recherche, sélectionnez Path.",
      "D": "Appuyez sur la touche T."
    },
    "correct": "A",
    "explanation": "<p>Appuyez sur la touche slash(/) puis sur la touche T.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 21",
    "q": "Comment sauvegarder une recherche que vous utilisez souvent sur GitHub ?",
    "choices": {
      "A": "Cliquez sur Save dans la boîte de recherche.",
      "B": "Cliquez sur Save dans le menu de recherche avancée.",
      "C": "Cliquez sur Save sur la page des résultats de la recherche.",
      "D": "Ajoutez un signet à la page des résultats de la recherche."
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 22",
    "q": "Quel est le moyen le plus rapide de lancer une recherche sur les pages web de Github ?",
    "choices": {
      "A": "Appuyez sur la touche slash(/) sur n’importe quelle page du site.",
      "B": "Cliquez sur l’onglet Recherche de la version Github.",
      "C": "Cliquez sur le lien Recherche avancée.",
      "D": "Cliquez sur le champ de recherche et tapez votre requête."
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 22",
    "q": "L’attribution d’une tâche à une personne implique qu’elle ____.",
    "choices": {
      "A": "recevra une notification lui demandant d’examiner le problème",
      "B": "est responsable de la résolution du problème",
      "C": "est informée des détails du problème",
      "D": "supervise l’équipe chargée de résoudre le problème"
    },
    "correct": "B",
    "explanation": "<p>L’attribution d’une tâche à une personne implique qu’elle est responsable de la résolution du problème.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 22",
    "q": "Que fait un « Template repository » ?",
    "choices": {
      "A": "Il crée une démonstration en direct du référentiel actuel à des fins de formation.",
      "B": "Il vous permet de créer une structure et des fichiers par défaut basés sur le référentiel actuel.",
      "C": "Il vous permet d’archiver et de stocker les paramètres d’un projet.",
      "D": "Il importe les paramètres d’un autre projet dans le projet actuel."
    },
    "correct": "B",
    "explanation": "<p>Template repository vous permet de créer une structure et des fichiers par défaut basés sur le référentiel actuel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 22",
    "q": "Quel est l’objectif principal du panneau Chat ?",
    "choices": {
      "B": "Pour discuter avec d’autres développeurs qui travaillent dans votre entreprise",
      "C": "Pour avoir une discussion conversationnelle avec l’IA derrière Copilot"
    },
    "correct": "C",
    "explanation": "<p>Pour avoir une discussion conversationnelle avec l’IA derrière Copilot</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 22",
    "q": "Dans les projets GitHub, comment attribuer une tâche à un collaborateur ?",
    "choices": {
      "A": "Étiqueter l’élément avec son nom d’utilisateur.",
      "B": "Sélectionnez son nom d’utilisateur dans le champ Assignees.",
      "C": "Déplacez l’élément dans sa colonne dans la vue Tableau de bord.",
      "D": "Ajoutez son identifiant dans les commentaires."
    },
    "correct": "B",
    "explanation": "<p>Sélectionnez son nom d’utilisateur dans le champ Assignees.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 22",
    "q": "Quel est l’éditeur de texte par défaut de l’interpréteur de commandes Bash avec une installation de Git sous Windows ?",
    "choices": {
      "A": "Emacs",
      "B": "Vim",
      "C": "Notepad++",
      "D": "Bash"
    },
    "correct": "B",
    "explanation": "<p>L’éditeur de texte par défaut de Git Bash lorsqu’il est installé sur une machine Windows est Vim. Malheureusement pour les utilisateurs de Windows qui ne sont pas familiers avec Vim, vous pouvez changer l’éditeur de texte par défaut de Git pour quelque chose de plus convivial, comme Emacs ou Notepad++.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 22",
    "q": "Avant d’installer Git, lequel des produits prérequis suivants doit être présent et configuré sur votre système d’exploitation local ?",
    "choices": {
      "A": "Serveur compatible avec le profil web Jakarta Enterprise Edition",
      "B": "Java Development Kit 1.8 ou plus récent",
      "C": "Apache Maven",
      "D": "Aucun de ces produits"
    },
    "correct": "D",
    "explanation": "<p>L’un des avantages de Git est qu’il ne nécessite aucune dépendance autre qu’un système d’exploitation compatible, c’est-à-dire n’importe quel Mac moderne, Windows OS ou Linux. Contrairement aux outils d’intégration continue, tels que Jenkins, Git ne nécessite pas de profil web Jakarta EE, tel que Tomcat, pour l’hébergement. Et contrairement à des outils comme Apache Maven, il n’a pas besoin d’un JDK ou d’un environnement d’exécution Java pour fonctionner.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 22",
    "q": "Lequel des éléments suivants n’est pas une portée de configuration de Git ?",
    "choices": {
      "A": "Local",
      "B": "User",
      "C": "System",
      "D": "Globale"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 22",
    "q": "Après avoir initialisé un nouveau dépôt Git et créé un fichier nommé test.html, laquelle des commandes suivantes ne fonctionnera pas si elle est exécutée ?",
    "choices": {
      "A": "$ git add test.html",
      "B": "$ git status",
      "C": "$ git add .",
      "D": "$ git commit -m “fichier test”"
    },
    "correct": "D",
    "explanation": "<p>Chacune de ces commandes aboutira à l’exception du commit Git. Pour qu’un fichier fasse partie d’un commit, il faut d’abord l’ajouter à l’index Git à l’aide de la commande add. Après avoir ajouté un fichier à l’index, un commit Git peut être exécuté.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 22",
    "q": "Quel fournisseur a acquis GitHub pour 7,5 milliards de dollars en juin 2018 ?",
    "choices": {
      "A": "Oracle",
      "B": "Microsoft",
      "C": "IBM",
      "D": "Google"
    },
    "correct": "B",
    "explanation": "<p>Étant donné les racines de Git dans l’espace Linux et Apache, beaucoup de gens ont été surpris lorsque Microsoft a annoncé son acquisition de GitHub, un achat qui a vu de nombreux projets portés de manière quelque peu irrationnelle sur GitLab, un concurrent de GitHub. Il faut s’attendre à voir davantage de projets Zune et Windows CE hébergés sur GitHub.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
