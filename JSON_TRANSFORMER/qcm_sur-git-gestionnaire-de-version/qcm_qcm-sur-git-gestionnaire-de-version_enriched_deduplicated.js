const QCM = [
  {
    "num": "Q1",
    "partie": "Commandes Git",
    "q": "Après avoir commencé à fusionner une branche de fonction dans votre branche principale, vous rencontrez un conflit de fusion et décidez de ne pas effectuer la fusion. Comment pouvez-vous arrêter la fusion et revenir à l’état antérieur à la fusion ?",
    "choices": {
      "A": "Utilisez $ git restore -p",
      "B": "Utilisez $ git merge -u",
      "C": "Utiliser $ git merge –abort",
      "D": "Utilisez $ git merge –undo"
    },
    "correct": "C",
    "explanation": "$ git merge --abort",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Commandes Git",
    "q": "Après avoir modifié certains fichiers existants dans un référentiel, vous décidez de supprimer les modifications. Quelle commande pouvez-vous utiliser ?",
    "choices": {
      "A": "$ git restore",
      "B": "$ git undo",
      "C": "$ git clean",
      "D": "$ git checkout ."
    },
    "correct": "D",
    "explanation": "$ git checkout .",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Commandes Git",
    "q": "Après avoir placé par erreur un fichier nommé monFichier dans l’index, comment le supprimer de l’index pour l’exclure de votre prochain commit ?",
    "choices": {
      "A": "Utilisez $ git reset HEAD^.",
      "B": "Utilisez $ git reset myFile.txt.",
      "C": "Utiliser $ git -rm monFichier.txt.",
      "D": "Utiliser $ git reset."
    },
    "correct": "B",
    "explanation": "Utilisez $ git reset myFile.txt.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Commandes Git",
    "q": "Après avoir placé une série de modifications dans l’index, quelle commande pourriez-vous utiliser pour les réviser avant de les commiter ?",
    "choices": {
      "A": "$ git diff –cached",
      "B": "$ git diff",
      "C": "$ git diff –HEAD",
      "D": "$ git status -v -v"
    },
    "correct": "A",
    "explanation": "$ git diff --cached",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Commandes Git",
    "q": "Que fait la commande $ git stash drop ?",
    "choices": {
      "A": "supprime l’entrée la plus récente du cache (stash)",
      "B": "supprime le cache (stash)",
      "C": "liste tout ce qui se trouve dans le cache (stash)",
      "D": "jette l’entrée la plus ancienne"
    },
    "correct": "A",
    "explanation": "La commande $ git stash drop supprime l’entrée la plus récente du cache(stash).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Commandes Git",
    "q": "Quel changement la commande 'git rm --cached testfile.js' apportera-t-elle aux fichiers de la zone de transit (staging area) ?",
    "choices": {
      "A": "testfile.js sera supprimé de la zone de transit et ses modifications ne seront plus suivies.",
      "B": "testfile.js sera supprimé de la zone de transit mais ses modifications seront toujours suivies.",
      "C": "Une copie de testfile.js sera mise en cache sur votre bureau.",
      "D": "La copie actuelle de testfile.js sera sauvegardée dans la zone de transit."
    },
    "correct": "A",
    "explanation": "Le fichier testfile.js sera supprimé de la zone de transit (staging area) et ses modifications ne seront plus suivies.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Commandes Git",
    "q": "Quelle commande crée correctement un tag léger ?",
    "choices": {
      "A": "$ git tag v3.8.1",
      "B": "$ git tag –light “v3.8.1”",
      "C": "$ git tag v3.8.1 —-annotate -m “<tagMessage>”",
      "D": "$ git tag -l v3.8.1"
    },
    "correct": "A",
    "explanation": "$ git tag v3.8.1",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Commandes Git",
    "q": "Quelle commande crée une nouvelle branche à partir de la branche actuellement checkée ?",
    "choices": {
      "A": "$ git -b checkout <nomDeLaBranche>",
      "B": "$ git branch",
      "C": "$ git checkout <nomDeLaBranche>",
      "D": "$ git checkout -b <nomDeLaBranche>"
    },
    "correct": "D",
    "explanation": "La commande $ git checkout -b <nomDeLaBranche> crée une nouvelle branche à partir de la branche actuellement checkée.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Commandes Git",
    "q": "Quelle commande Git permet de commencer le tracking d’un nouveau fichier ?",
    "choices": {
      "A": "add",
      "B": "addfile",
      "C": "begin",
      "D": "track"
    },
    "correct": "A",
    "explanation": "La commande git add prend le chemin d’accès d’un fichier ou d’un répertoire pour commencer à le suivre.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Commandes Git",
    "q": "Quelle commande permet de lister les tags de la série 1.4.2 ?",
    "choices": {
      "A": "$ git tag ‘v1.4.2’",
      "B": "$ git tag -l ‘v1.4.2.*’",
      "C": "$ git tag-list ‘v1.4.2*’",
      "D": "$ git tag ‘v1.4.2*’"
    },
    "correct": "B",
    "explanation": "La commande $ git tag -l 'v1.4.2.*' permet de lister les tags de la série 1.4.2.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Commandes Git",
    "q": "Quelle est la différence entre les commandes git stash et git stash pop ?",
    "choices": {
      "A": "git stash supprime un commit de l’historique du repo, tandis que git stash pop sauvegarde les modifications sur plusieurs branches.",
      "B": "git stash sauvegarde les modifications sur plusieurs branches, alors que git stash pop supprime un commit de l’historique du repo.",
      "C": "git stash supprime le commit le plus récent, tandis que git stash pop enregistre les modifications en cours.",
      "D": "git stash crée une entrée de stash, tandis que git stash pop place un état sauvegardé dans le répertoire de travail."
    },
    "correct": "D",
    "explanation": "git stash crée une entrée de stash, tandis que git stash pop place un état sauvegardé de la liste de stash dans le répertoire de travail.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q12",
    "partie": "Commandes Git",
    "q": "Quelle est la différence entre un soft reset (git reset –soft) et un hard reset (git reset -hard) ?",
    "choices": {
      "A": "Un soft reset ne modifie que le commit vers lequel HEAD pointe, alors qu’un hard reset réinitialise l’index et l’arbre de travail pour qu’ils correspondent au commit spécifié, en abandonnant tous les changements.",
      "B": "Un soft reset met en cache l’ancien pointeur HEAD, alors qu’un hard reset le supprime entièrement.",
      "C": "Un hard reset ne modifie que l’emplacement du pointeur HEAD, tandis qu’un soft reset modifie le HEAD et l’index.",
      "D": "Un hard reset met en cache l’ancien pointeur HEAD, tandis qu’un soft reset le supprime entièrement."
    },
    "correct": "A",
    "explanation": "Un soft reset ne modifie que le commit vers lequel HEAD pointe, alors qu’un hard reset réinitialise l’index et l’arbre de travail pour qu’ils correspondent au commit spécifié, en abandonnant tous les changements.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q13",
    "partie": "Commandes Git",
    "q": "Quelle option permet d’inclure le nom du responsable du commit dans le format de log personnalisé ?",
    "choices": {
      "A": "%ce",
      "B": "%cr",
      "C": "%cd",
      "D": "%cn"
    },
    "correct": "D",
    "explanation": "%cn affiche le nom de l'auteur (committer name).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q14",
    "partie": "Commandes Git",
    "q": "Quelle stratégie est utilisée par Git pour fusionner deux branches ?",
    "choices": {
      "A": "LIFO",
      "B": "récursive",
      "C": "FIFO",
      "D": "octopus"
    },
    "correct": "D",
    "explanation": "Octopus est la stratégie par défaut pour plus de deux branches fusionnées.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q15",
    "partie": "Commandes Git",
    "q": "Quelle touche renvoie une série de suggestions à choisir lors de l’écriture d’une commande Git ?",
    "choices": {
      "A": "Ctrl",
      "B": "Maj",
      "C": "Tab",
      "D": "Alt"
    },
    "correct": "C",
    "explanation": "La touche ‘Tab’ renvoie une série de suggestions.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q16",
    "partie": "Commandes Git",
    "q": "Quels types de tags Git prend-il en charge ?",
    "choices": {
      "A": "lourdes et concises",
      "B": "légères et immuables",
      "C": "lourd et annoté",
      "D": "léger et annoté"
    },
    "correct": "D",
    "explanation": "Les tags annotés sont destinés à la production, les tags légers aux objets privés ou temporaires.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q17",
    "partie": "Commandes Git",
    "q": "Vous souhaitez effectuer un git reset mais vous ne vous souvenez pas de toutes les options disponibles. Quelle commande utiliseriez-vous pour obtenir une description de ces options ?",
    "choices": {
      "A": "$ git help reset",
      "B": "$ git -h reset",
      "C": "$ git options reset",
      "D": "$ git reset help"
    },
    "correct": "A",
    "explanation": "$ git help reset",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Concepts de base",
    "q": "Lequel de ces termes décrit le mieux git ?",
    "choices": {
      "A": "Environnement de développement intégré",
      "B": "Système de contrôle de version distribué",
      "C": "Système de suivi des problèmes",
      "D": "Service d’hébergement de référentiel basé sur le web"
    },
    "correct": "B",
    "explanation": "<p>Git est un système de contrôle de version distribué, ce qui signifie qu’il permet à plusieurs utilisateurs de collaborer à un projet.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Concepts de base",
    "q": "Lequel de ces termes décrit le mieux GitHub ?",
    "choices": {
      "A": "Environnement de développement intégré",
      "B": "Système de contrôle de version distribué",
      "C": "Système de suivi des problèmes",
      "D": "Service d’hébergement de référentiel basé sur le web"
    },
    "correct": "D",
    "explanation": "<p>GitHub est un service d’hébergement de référentiels basé sur le web qui permet aux utilisateurs de stocker et de gérer leurs référentiels de code.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Concepts de base",
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
    "num": "Q4",
    "partie": "Concepts de base",
    "q": "Qui a inventé le GIT ?",
    "choices": {
      "A": "Junio C. Hamano",
      "B": "James Gosling",
      "C": "Koska Kawaguchi",
      "D": "Linus Torvalds"
    },
    "correct": "D",
    "explanation": "<p>Linus Torvalds est considéré comme l’inventeur du GIT.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Concepts Généraux",
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
    "partie": "Concepts Généraux",
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
    "num": "Q3",
    "partie": "Concepts Généraux",
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
    "num": "Q4",
    "partie": "Concepts Généraux",
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
    "num": "Q5",
    "partie": "Concepts Généraux",
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
    "num": "Q6",
    "partie": "Concepts Généraux",
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
    "num": "Q7",
    "partie": "Concepts Généraux",
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
    "num": "Q8",
    "partie": "Concepts Généraux",
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
    "num": "Q9",
    "partie": "Concepts Généraux",
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
    "num": "Q10",
    "partie": "Concepts Généraux",
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
    "num": "Q11",
    "partie": "Concepts Généraux",
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
    "num": "Q12",
    "partie": "Concepts Généraux",
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
    "num": "Q13",
    "partie": "Concepts Généraux",
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
    "num": "Q14",
    "partie": "Concepts Généraux",
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
    "num": "Q15",
    "partie": "Concepts Généraux",
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
    "num": "Q16",
    "partie": "Concepts Généraux",
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
    "num": "Q17",
    "partie": "Concepts Généraux",
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
    "num": "Q18",
    "partie": "Concepts Généraux",
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
    "num": "Q19",
    "partie": "Concepts Généraux",
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
    "num": "Q20",
    "partie": "Concepts Généraux",
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
    "num": "Q21",
    "partie": "Concepts Généraux",
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
    "num": "Q22",
    "partie": "Concepts Généraux",
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
    "num": "Q23",
    "partie": "Concepts Généraux",
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
    "num": "Q24",
    "partie": "Concepts Généraux",
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
    "num": "Q25",
    "partie": "Concepts Généraux",
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
    "num": "Q26",
    "partie": "Concepts Généraux",
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
    "num": "Q27",
    "partie": "Concepts Généraux",
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
    "num": "Q28",
    "partie": "Concepts Généraux",
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
    "num": "Q29",
    "partie": "Concepts Généraux",
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
    "num": "Q30",
    "partie": "Concepts Généraux",
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
    "num": "Q1",
    "partie": "Configuration",
    "q": "Quel paramètre détermine le pager utilisé lors de la sortie des pages Git ?",
    "choices": {
      "A": "core.page",
      "B": "page",
      "C": "pager",
      "D": "core.pager"
    },
    "correct": "D",
    "explanation": "Ce paramètre détermine quel pager est utilisé lorsque les pages Git sont affichées, comme les logs et les diff (par défaut 'less').",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Cryptographie",
    "q": "Qu’est-ce qui ne peut pas être signé cryptographiquement dans Git ?",
    "choices": {
      "A": "Les tags",
      "B": "Les branches",
      "C": "Commits fusionnés",
      "D": "Commits réguliers"
    },
    "correct": "B",
    "explanation": "<p>Les branches ne sont que des pointeurs vers des commits, elles ne sont pas signées directement comme des objets commit ou des tags.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Git",
    "q": "‘git describe’ recherche le ___ le plus proche accessible depuis le commit",
    "choices": {
      "A": "tag",
      "B": "remote",
      "C": "author",
      "D": "branch"
    },
    "correct": "A",
    "explanation": "<p>La commande git describe trouve le tag accessible le plus récent d’un commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Git",
    "q": "Après avoir initialisé un nouveau dépôt Git et créé un fichier nommé test.html, laquelle des commandes suivantes ne fonctionnera pas si elle est exécutée sans étape préalable ?",
    "choices": {
      "A": "$ git add test.html",
      "B": "$ git status",
      "C": "$ git add .",
      "D": "$ git commit -m “fichier test”"
    },
    "correct": "D",
    "explanation": "<p>Pour qu’un fichier fasse partie d’un commit, il faut d’abord l’ajouter à l’index Git à l’aide de la commande add.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Git",
    "q": "Après un premier push, quelle commande pouvez-vous utiliser pour pousser sans préciser le remote/branche ?",
    "choices": {
      "A": "$ git push master",
      "B": "$ git push origin",
      "C": "Même chose que précédemment.",
      "D": "$ git push"
    },
    "correct": "D",
    "explanation": "Si le remote est configuré (upstream), git push suffit.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Git",
    "q": "Avant d’installer Git, quel produit prérequis doit être présent sur votre système d’exploitation ?",
    "choices": {
      "A": "Serveur compatible avec le profil web Jakarta Enterprise Edition",
      "B": "Java Development Kit 1.8 ou plus récent",
      "C": "Apache Maven",
      "D": "Aucun de ces produits"
    },
    "correct": "D",
    "explanation": "<p>L’un des avantages de Git est qu’il ne nécessite aucune dépendance logicielle autre qu’un système d’exploitation compatible.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Git",
    "q": "Comment afficher la liste des fichiers ajoutés ou modifiés dans un commit spécifique ?",
    "choices": {
      "A": "Trouvez le commit dans le dépôt distant.",
      "B": "Utilisez la commande diff-tree avec le hash du commit.",
      "C": "Exécuter git commit –info avec le hash du commit.",
      "D": "Accéder aux données du commit stash avec git stash."
    },
    "correct": "B",
    "explanation": "Utilisez la commande git diff-tree avec le hash du commit.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Git",
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
    "partie": "Git",
    "q": "Comment changer de branche dans Git ?",
    "choices": {
      "A": "$ git switch",
      "B": "$ git move",
      "C": "$ git jump",
      "D": "$ git hop"
    },
    "correct": "A",
    "explanation": "<p>La commande git switch <branch-name> permet de changer de branche.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Git",
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
    "num": "Q9",
    "partie": "Git",
    "q": "Comment enregistrer l’état actuel de votre code dans git?",
    "choices": {
      "A": "En validant les modifications mises en scène avec",
      "B": "En ajoutant toutes les modifications et en les mettant en scène avec",
      "C": "En ajoutant toutes les modifications et en les organisant avec",
      "D": "En créant un nouveau commit avec"
    },
    "correct": "A",
    "explanation": "<p>La commande « commit » est utilisée pour enregistrer les modifications dans le dépôt local. Notez que vous devez explicitement indiquer à Git les modifications que vous souhaitez inclure dans un commit avant d’exécuter la commande « git commit ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Git",
    "q": "Comment fusionner plusieurs commits sans utiliser git merge –squash ?",
    "choices": {
      "A": "Vous ne pouvez pas.",
      "B": "Rebasing",
      "C": "Caching",
      "D": "Reflogging"
    },
    "correct": "B",
    "explanation": "Dans Git, il y a deux méthodes d’intégrer les modifications d’une branche dans une autre : en fusionnant (merge) et en rebasant (rebase).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Git",
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
    "num": "Q12",
    "partie": "Git",
    "q": "Comment récupérer les dernières mises à jour d’un dépôt distant sans les fusionner ?",
    "choices": {
      "A": "$ git pull",
      "B": "$ git get",
      "C": "$ git fetch",
      "D": "$ git update"
    },
    "correct": "C",
    "explanation": "<p>La commande git fetch récupère les mises à jour d’un dépôt distant mais ne les fusionne pas.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q13",
    "partie": "Git",
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
    "num": "Q14",
    "partie": "Git",
    "q": "Comment sauvegarder temporairement son travail en cours sans commiter ?",
    "choices": {
      "A": "Ce n’est pas possible.",
      "B": "Git hold.",
      "C": "Git local-cache.",
      "D": "Utilisez git stash."
    },
    "correct": "D",
    "explanation": "Git stash met de côté les modifications locales non commises.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q15",
    "partie": "Git",
    "q": "Comment spécifier une branche quand un tag a le même nom ?",
    "choices": {
      "A": "refs/push-feature",
      "B": "show push-feature",
      "C": "refs/heads/push-feature",
      "D": "refs/tags/push-feature"
    },
    "correct": "C",
    "explanation": "Utiliser le chemin complet refs/heads/ permet de lever l'ambiguïté.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q16",
    "partie": "Git",
    "q": "Comment vérifier l’état de votre référentiel local depuis votre dernier commit?",
    "choices": {
      "A": "$ git check",
      "B": "$ git commit",
      "C": "$ git diff",
      "D": "$ git status"
    },
    "correct": "D",
    "explanation": "<p>La commande git status affiche l’état du répertoire de travail. Elle vous permet de voir quelles modifications ont été mises à disposition, lesquelles ne l’ont pas été, et quels fichiers ne sont pas suivis par Git.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q17",
    "partie": "Git",
    "q": "Dans Git, une branche est :",
    "choices": {
      "A": "Une partie secrète de la configuration de Git.",
      "B": "Une version séparée du dépôt principal(main repository).",
      "C": "Un champ que vous pouvez utiliser pour taper des commandes.",
      "D": "Rien, c’est un mot qui n’a pas de sens."
    },
    "correct": "B",
    "explanation": "<p>Dans Git, les branches font partie du processus de développement quotidien. Les branches Git sont en fait un pointeur vers un instantané de vos modifications.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q18",
    "partie": "Git",
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
    "num": "Q19",
    "partie": "Git",
    "q": "En regardant les commandes (ex: git cherry-pick), décrivez ce qui se passe.",
    "choices": {
      "A": "Le commit est en train d’être marqué pour mise en production.",
      "B": "Un commit est en train d’être copié de sa branche d’origine vers la branche cible.",
      "C": "Le commit est en train d’être sélectionné comme nouveau HEAD.",
      "D": "Un commit est en train d’être supprimé.",
      "E": "La branche est basculée sur la branche cible, et le commit spécifié est appliqué."
    },
    "correct": "E",
    "explanation": "La commande git cherry-pick applique les changements du commit spécifié à la branche courante.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q20",
    "partie": "Git",
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
    "num": "Q21",
    "partie": "Git",
    "q": "Git Pull est une combinaison de _________________",
    "choices": {
      "A": "fetch et merge",
      "B": "add et commit",
      "C": "branch et checkout",
      "D": "Aucun de ces éléments"
    },
    "correct": "A",
    "explanation": "La commande git pull est en fait une combinaison de deux autres commandes, git fetch suivi de git merge. Dans un premier temps, git pull exécute un git fetch sur la branche locale vers laquelle HEAD pointe. Une fois le contenu téléchargé, git pull entre dans un processus de fusion.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q22",
    "partie": "Git",
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
    "num": "Q23",
    "partie": "Git",
    "q": "Git reflog est utilisé pour __________",
    "choices": {
      "A": "tracer les modifications des auteurs",
      "B": "stocker l’historique des conflits de fusion",
      "C": "stocker l’historique des mises à jour des références",
      "D": "se synchroniser avec les branches de contrôle à distance"
    },
    "correct": "C",
    "explanation": "<p>Les reflogs gardent une trace de la modification des têtes de branches et d’autres références dans le dépôt local.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q24",
    "partie": "Git",
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
    "num": "Q25",
    "partie": "Git",
    "q": "Laquelle des commandes suivantes est utilisée pour réinitialiser le HEAD actuel à l’état spécifié ?",
    "choices": {
      "A": "$ git reset",
      "B": "$ git restore",
      "C": "$ git checkout",
      "D": "$ git diff"
    },
    "correct": "A",
    "explanation": "<p>La commande GIT reset est utilisée pour réinitialiser le HEAD actuel à l’état spécifié.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q26",
    "partie": "Git",
    "q": "Laquelle des commandes suivantes permet d’afficher les changements entre les modifications (commits) ?",
    "choices": {
      "A": "$ git commit",
      "B": "$ git reset",
      "C": "$ git diff",
      "D": "$ git show"
    },
    "correct": "C",
    "explanation": "<p>La commande « GIT diff » est utilisée pour montrer les changements entre les commits.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q27",
    "partie": "Git",
    "q": "Laquelle des commandes suivantes permet de regrouper deux ou plusieurs historiques de développement ?",
    "choices": {
      "A": "$ git merge",
      "B": "$ git concat",
      "C": "$ git join",
      "D": "$ git branch"
    },
    "correct": "A",
    "explanation": "<p>La commande merge de Git est utilisée pour combiner deux ou plusieurs historiques de développement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q28",
    "partie": "Git",
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
    "num": "Q29",
    "partie": "Git",
    "q": "Lequel des éléments suivants est l’éditeur de texte par défaut de l’interpréteur de commandes Bash dans le cas d’une installation de Git sous Windows ?",
    "choices": {
      "A": "Vim",
      "B": "Bash",
      "C": "Emacs",
      "D": "Notepad++"
    },
    "correct": "A",
    "explanation": "<p>Sous Windows, si vous utilisez Git Bash, l’éditeur par défaut sera Vim.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q30",
    "partie": "Git",
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
    "num": "Q31",
    "partie": "Git",
    "q": "Les attributs Git sont utilisés pour __________",
    "choices": {
      "A": "écraser la configuration globale",
      "B": "contrôler les autorisations d’accès aux refs",
      "C": "ajouter des métadonnées à certains fichiers ou objets",
      "D": "spécifier certains paramètres pour des fichiers particuliers ou des types de fichiers dans le référentiel"
    },
    "correct": "D",
    "explanation": "<p>Les attributs permettent de spécifier des stratégies pour des fichiers particuliers dans le référentiel.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q32",
    "partie": "Git",
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
    "num": "Q33",
    "partie": "Git",
    "q": "Où sont stockés les fichiers avant qu’ils ne soient transférés dans le référentiel local ?",
    "choices": {
      "A": "git",
      "B": "les fichiers sauvegardés",
      "C": "documents git",
      "D": "zone staging/index"
    },
    "correct": "D",
    "explanation": "<p>La zone staging est un fichier qui stocke des informations sur ce qui sera intégré dans votre prochain commit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q34",
    "partie": "Git",
    "q": "Pour créer un dépôt Git, quelle commande devez-vous exécuter ?",
    "choices": {
      "A": "$ git create <nom du projet>",
      "B": "$ git new",
      "C": "$ git new <nom du projet>",
      "D": "$ git init"
    },
    "correct": "D",
    "explanation": "Pour créer un nouveau référentiel, vous utiliserez la commande git init. L’exécution de cette commande créera un nouveau sous-répertoire .git dans votre répertoire de travail actuel.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q35",
    "partie": "Git",
    "q": "Pourquoi git rerere ne fonctionne-t-il pas ?",
    "choices": {
      "A": "L’option -all n’est pas activée.",
      "B": "L’option rerere.enabled n’est pas activée dans la config.",
      "C": "Le hachage du commit est manquant.",
      "D": "Le chemin d’accès n’est pas spécifié."
    },
    "correct": "B",
    "explanation": "La fonctionnalité 'reuse recorded resolution' (rerere) doit être explicitement activée.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q36",
    "partie": "Git",
    "q": "Pourquoi utiliser une commande de rebase interactive ?",
    "choices": {
      "A": "Pour effectuer une recherche comparative des différences entre les 10 derniers commits.",
      "B": "Pour lister les 10 derniers commits et les modifier avec la commande squash ou fixup.",
      "C": "Pour supprimer les 10 derniers commits et réinitialiser le HEAD.",
      "D": "Pour mettre en cache localement les 10 dernières modifications."
    },
    "correct": "B",
    "explanation": "Pour lister les derniers commits et les modifier (squash, reword, fixup) via un éditeur.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q37",
    "partie": "Git",
    "q": "Qu’est-ce qu’un « Merge conflict » (conflit de fusion) ?",
    "choices": {
      "A": "Une erreur dans la configuration de Git",
      "B": "Un désaccord entre les membres de l’équipe",
      "C": "Des changements qui se chevauchent entre les branches",
      "D": "Un problème de synchronisation des dépôts distants"
    },
    "correct": "C",
    "explanation": "<p>Un conflit de fusion se produit lorsqu’il y a des changements dans la même partie d’un fichier à la fois dans la branche courante et dans la branche à fusionner.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q38",
    "partie": "Git",
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
    "num": "Q39",
    "partie": "Git",
    "q": "Que contient le répertoire .git ?",
    "choices": {
      "A": "Les fichiers de configuration",
      "B": "Le code source",
      "C": "La documentation du projet",
      "D": "Les métadonnées du référentiel et l’historique des versions"
    },
    "correct": "D",
    "explanation": "<p>Le répertoire .git contient toutes les métadonnées et la base de données des objets du dépôt.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q40",
    "partie": "Git",
    "q": "Que fait la commande git commit -am 'message' ?",
    "choices": {
      "A": "Rien.",
      "B": "Ajoute tous les nouveaux fichiers à la zone de staging.",
      "C": "Commite tous les nouveaux fichiers avec un message.",
      "D": "Ajoute tous les fichiers déjà suivis (modifiés) à la zone de staging, puis les commite."
    },
    "correct": "D",
    "explanation": "L'option -a permet d'ajouter les fichiers modifiés et -m définit le message.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q41",
    "partie": "Git",
    "q": "Que fait la commande git reset --soft HEAD~1 sur le dépôt ?",
    "choices": {
      "A": "Elle supprime tous les commits précédents.",
      "B": "Elle réinitialise la branche de travail au premier commit.",
      "C": "Il conserve le HEAD au commit actuel mais efface tous les commits précédents.",
      "D": "Il met HEAD à la commit précédente et laisse les changements de la commit annulée dans le stage/index."
    },
    "correct": "D",
    "explanation": "Le reset --soft déplace le pointeur HEAD mais garde les changements dans l'index (staging).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q42",
    "partie": "Git",
    "q": "Que font ces commandes de reset sur l’historique des commits (ex: git reset --hard HEAD~5) ?",
    "choices": {
      "A": "Elles réinitialisent le HEAD au cinquième commit du repository, puis fusionnent avec la branche master.",
      "B": "Le HEAD de la branche courante est réinitialisé à cinq commits, puis les commits précédents sont écrasés en un seul commit.",
      "C": "Elles suppriment les cinq derniers commits.",
      "D": "Elles fusionnent les cinq derniers commits dans une nouvelle branche."
    },
    "correct": "B",
    "explanation": "La commande réinitialise le HEAD et modifie l'index/working directory.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q43",
    "partie": "Git",
    "q": "Que représente le HEAD dans Git ?",
    "choices": {
      "A": "Le premier commit dans le dépôt",
      "B": "Le dernier commit dans le dépôt distant",
      "C": "Le commit en cours d’extraction",
      "D": "La base de la branche actuelle"
    },
    "correct": "C",
    "explanation": "<p>Dans Git, HEAD est un pointeur spécial qui pointe vers le commit actuellement extrait.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q44",
    "partie": "Git",
    "q": "Que signifie le signe « + » au début d’une référence ?",
    "choices": {
      "A": "Qu’une authentification est nécessaire",
      "B": "Que la branche distante peut ne pas exister",
      "C": "Qu’il existe une correspondance « one-to-many » entre les références",
      "D": "Que les mises à jour par écrasement (non fast-forward) sont autorisées"
    },
    "correct": "D",
    "explanation": "<p>Le signe + permet de forcer le référentiel distant à effectuer une mise à jour non rapide.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q45",
    "partie": "Git",
    "q": "Quel est l’éditeur de texte par défaut de l’interpréteur de commandes Bash avec une installation de Git sous Windows ?",
    "choices": {
      "A": "Emacs",
      "B": "Vim",
      "C": "Notepad++",
      "D": "Bash"
    },
    "correct": "B",
    "explanation": "<p>L’éditeur de texte par défaut de Git Bash lorsqu’il est installé sur une machine Windows est Vim.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q46",
    "partie": "Git",
    "q": "Quel est l’ordre correct pour soumettre vos modifications depuis le répertoire de travail jusqu’au dépôt distant ?",
    "choices": {
      "A": "git add, git commit, git push",
      "B": "git add, git push, git commit",
      "C": "git commit, git add, git push",
      "D": "git push, git add, git commit"
    },
    "correct": "A",
    "explanation": "<p>L’ordre correct est de commencer par utiliser « git add » pour organiser les modifications, puis d’utiliser « git commit » pour valider, et enfin « git push » pour envoyer.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q47",
    "partie": "Git",
    "q": "Quel est le but de ‘git filter-branch’ ?",
    "choices": {
      "A": "Effectuer le garbage collection sur une seule branche",
      "B": "Effectuer une recherche de texte à l’intérieur d’un ensemble particulier de branches",
      "C": "Pour dresser la liste de toutes les branches locales, à l’exception de celles qui sont filtrées par un prédicat donné",
      "D": "Pour réécrire l’historique en appliquant une opération à tous les commits"
    },
    "correct": "D",
    "explanation": "<p>git filter-branch est un outil puissant utilisé pour réécrire l’historique d’un dépôt.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q48",
    "partie": "Git",
    "q": "Quel est le contraire de GIT clone ?",
    "choices": {
      "A": "GIT push",
      "B": "GIT add",
      "C": "GIT upload",
      "D": "GIT status"
    },
    "correct": "A",
    "explanation": "<p>Le contraire de GIT clone est GIT push. GIT clone est utilisé pour créer une copie locale, tandis que GIT push est utilisé pour envoyer les modifications vers le dépôt distant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q49",
    "partie": "Git",
    "q": "Quel est le nom du fichier utilisé pour indiquer à Git d’ignorer certains fichiers ?",
    "choices": {
      "A": "gitignore",
      "B": ".gitignore ️",
      "C": "ignore.git",
      "D": "ignore"
    },
    "correct": "B",
    "explanation": "L’objectif des fichiers gitignore est de s’assurer que certains fichiers qui ne sont pas trackés par Git restent non trackés.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q50",
    "partie": "Git",
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
    "num": "Q51",
    "partie": "Git",
    "q": "Quelle affirmation est vraie sur git push et les tags ?",
    "choices": {
      "A": "Par défaut, un push n’envoie pas de tags au dépôt distant.",
      "B": "Les commits ne peuvent être taggés que lorsqu’ils sont créés.",
      "C": "Les tags sont toujours poussés par défaut.",
      "D": "Seules les tags annotés sont poussés."
    },
    "correct": "A",
    "explanation": "Les tags doivent être explicitement poussés (git push --tags).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q52",
    "partie": "Git",
    "q": "Quelle commande crée une nouvelle branche dans Git ?",
    "choices": {
      "A": "$ git new branch",
      "B": "$ git branch-new",
      "C": "$ git branch",
      "D": "$ git create-branch"
    },
    "correct": "C",
    "explanation": "<p>En utilisant git branch <branch-name>, vous pouvez créer une nouvelle branche.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q53",
    "partie": "Git",
    "q": "Quelle commande créerait l’alias c pour la commande commit (au niveau global ou utilisateur) ?",
    "choices": {
      "A": "$ git config –global alias.c commit",
      "B": "$ git config –global alias.commit c",
      "C": "$ git config alias.c commit",
      "D": "$ git config alias.commit c"
    },
    "correct": "A",
    "explanation": "La commande $ git config --global alias.c commit crée l’alias c pour la commande commit.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q54",
    "partie": "Git",
    "q": "Quelle commande définit l’email de l’auteur à utiliser pour toutes les commits de l’utilisateur actuel.",
    "choices": {
      "A": "$ git email–amend",
      "B": "$ git config –global user.email",
      "C": "$ git clean -f",
      "D": "$ git log –author = “ ”"
    },
    "correct": "B",
    "explanation": "<p>On utilise la commande $ git config --global user.email pour définir l’email de l’auteur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q55",
    "partie": "Git",
    "q": "Quelle commande est utilisé pour transférer votre code et vos modifications dans GitHub?",
    "choices": {
      "A": "$ git add",
      "B": "$ git upload",
      "C": "$ git push",
      "D": "$ git status"
    },
    "correct": "C",
    "explanation": "<p>La commande git push est utilisée pour transférer le contenu d’un repository local vers un repository distant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q56",
    "partie": "Git",
    "q": "Quelle commande exécuteriez-vous pour enregistrer les modifications dans le fichier js/app.js ?",
    "choices": {
      "A": "$ git add js/app.js",
      "B": "$ git stage js/app.js",
      "C": "$ git commit js/app.js",
      "D": "$ git commit js/app.js –to-staging-area"
    },
    "correct": "A",
    "explanation": "La commande $ git add js/app.js enregistre les modifications dans le fichier js/app.js dans la zone de staging.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q57",
    "partie": "Git",
    "q": "Quelle commande permet d’afficher le diff du fichier README, en comparant la version dans la zone de staging avec la dernière version commitée ?",
    "choices": {
      "A": "$ git diff README",
      "B": "$ git diff staged README",
      "C": "$ git difference–staged README",
      "D": "$ git diff –staged README"
    },
    "correct": "D",
    "explanation": "La commande $ git diff --staged README affiche le diff entre la zone de staging et le dernier commit.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q58",
    "partie": "Git",
    "q": "Quelle commande permet d’ajouter une branche distante au référentiel ?",
    "choices": {
      "A": "$ git remote add <nom> <url>",
      "B": "$ git branch –remote <nom> <url>",
      "C": "$ git remote new <nom> <url>",
      "D": "$ git branch <nom> <url>"
    },
    "correct": "A",
    "explanation": "La commande $ git remote add <nom> <url> permet d’ajouter une branche distante au référentiel.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q59",
    "partie": "Git",
    "q": "Quelle commande peut être utilisée pour lister les branches qui ont été fusionnées dans la branche en cours de vérification ?",
    "choices": {
      "A": "$ git master –status",
      "B": "$ git branch –merged",
      "C": "$ git branch –status",
      "D": "$ git status –merged"
    },
    "correct": "B",
    "explanation": "<p>Utilisez la commande git branch -merged pour lister les branches qui ont été fusionnées dans la branche courante.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q60",
    "partie": "Git",
    "q": "Quelle commande pour vérifier l’historique de votre référentiel?",
    "choices": {
      "A": "$ git checkout",
      "B": "$ git fetch",
      "C": "$ git log",
      "D": "$ git diff"
    },
    "correct": "C",
    "explanation": "<p>La commande git log affiche les traces des commit. Elle permet de lister l’historique du projet.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q61",
    "partie": "Git",
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
    "num": "Q62",
    "partie": "Git",
    "q": "Quelle commande vous permettra de savoir qui a modifié un fichier?",
    "choices": {
      "A": "$ git blame",
      "B": "$ git diff",
      "C": "$ git log",
      "D": "$ git log –source"
    },
    "correct": "A",
    "explanation": "<p>La commande git blame est utilisée pour savoir quel commit est responsable des dernières modifications apportées à un fichier.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q63",
    "partie": "Git",
    "q": "Quelle est l'étape recommandée après avoir fusionné une branche ?",
    "choices": {
      "A": "Rien.",
      "B": "Exécuter git branch -d [branche] pour supprimer la branche fusionnée.",
      "C": "Git commit.",
      "D": "Git push."
    },
    "correct": "B",
    "explanation": "Il est recommandé de nettoyer les branches locales fusionnées.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q64",
    "partie": "Git",
    "q": "Quelle est l’option, lorsque l’on se déplace vers une branche, pour créer la branche si elle n’existe pas ?",
    "choices": {
      "A": "-b",
      "B": "-all",
      "C": "-new",
      "D": "-newbranch"
    },
    "correct": "A",
    "explanation": "<p>git checkout -b <branchname> permet de créer et basculer sur une nouvelle branche simultanément.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q65",
    "partie": "Git",
    "q": "Quelle est l’utilisation correcte de la commande « push » ?",
    "choices": {
      "A": "$ git push <remote> <branch>",
      "B": "$ git push <branch> <remote>",
      "C": "Les deux sont corrects",
      "D": "Aucun des deux"
    },
    "correct": "A",
    "explanation": "<p>L’utilisation correcte de la commande push est « GIT push <remote> <branch> ».</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q66",
    "partie": "Git",
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
    "num": "Q67",
    "partie": "Git",
    "q": "Quelle est la commande pour fusionner la branche actuelle avec la branche « new-branch » ?",
    "choices": {
      "A": "$ git add new-email",
      "B": "$ git commit -merge new-email",
      "C": "$ git merge new-branch",
      "D": "Aucune de ces options"
    },
    "correct": "C",
    "explanation": "<p>git merge est une commande utilisée pour combiner les modifications d’une ou plusieurs branches dans la branche courante.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q68",
    "partie": "Git",
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
    "num": "Q69",
    "partie": "Git",
    "q": "Quelle est la commande pour supprimer la branche « new-branch » ?",
    "choices": {
      "A": "$ git remove new-branch",
      "B": "$ git delete new-branch",
      "C": "$ git branch -d new-branch",
      "D": "$ git delete branch new-branch"
    },
    "correct": "C",
    "explanation": "<p>git branch -d est la commande pour supprimer une branche localement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q70",
    "partie": "Git",
    "q": "Quelle est la commande pour supprimer la branche distante « test-branch » ?",
    "choices": {
      "A": "$ git remove test-branch",
      "B": "$ git delete test-branch",
      "C": "$ git branch -d test-branch",
      "D": "$ git push origin –delete test-branch"
    },
    "correct": "D",
    "explanation": "<p>Pour supprimer une branche distante, vous devez utiliser la commande git push avec l’option –delete.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q71",
    "partie": "Git",
    "q": "Quelle est la commande pour transférer le référentiel actuel vers l’origine distante ?",
    "choices": {
      "A": "$ git push origin",
      "B": "$ git merge remote",
      "C": "$ git remote push",
      "D": "$ git remote commit"
    },
    "correct": "A",
    "explanation": "<p>git push origin est une commande git qui pousse une ou plusieurs branches locales vers un dépôt distant.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q72",
    "partie": "Git",
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
    "num": "Q73",
    "partie": "Git",
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
    "num": "Q74",
    "partie": "Git",
    "q": "Quelle est la différence entre les tags et les branches dans Git ?",
    "choices": {
      "A": "Les tags ne peuvent pointer que sur une branche",
      "B": "Les tags ne peuvent pas être poussés vers une branche distante",
      "C": "Les branches contiennent des copies complètes des fichiers de leur historique",
      "D": "Les tags ne peuvent pas être déplacés et peuvent être signés de manière cryptographique"
    },
    "correct": "D",
    "explanation": "<p>Les tags sont utilisés pour marquer des points importants tandis que les branches sont des lignes de développement dynamiques.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q75",
    "partie": "Git",
    "q": "Quelle est la fonction de « GIT PUSH » dans GIT ?",
    "choices": {
      "A": "GIT PUSH les refs distants avec les objets associés.",
      "B": "GIT PUSH met à jour les références distantes.",
      "C": "GIT PUSH met à jour les refs distants ainsi que les objets associés."
    },
    "correct": "C",
    "explanation": "GIT PUSH met à jour les refs distants ainsi que les objets associés.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q76",
    "partie": "Git",
    "q": "Quelle pratique peut aider à réduire les chances de rencontrer un conflit de merge ?",
    "choices": {
      "A": "Fournir des messages de commit détaillés.",
      "B": "Effectuer des commits importants qui introduisent plusieurs fonctionnalités.",
      "C": "Maintenir les branches du référentiel local synchronisées avec les branches du référentiel distant en effectuant des commit, des push et des pull fréquemment.",
      "D": "Éviter les interactions fréquentes avec le référentiel distant."
    },
    "correct": "C",
    "explanation": "<p>Pour éviter de rencontrer un conflit de merge, maintenir les branches du référentiel local synchronisées avec les branches du référentiel distant en effectuant des commit, des push et des pull fréquemment.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q77",
    "partie": "Git",
    "q": "Quelle technique de somme de contrôle utilisée par Git ?",
    "choices": {
      "A": "SHA-1",
      "B": "SHA-2",
      "C": "MD5",
      "D": "Bit de parité"
    },
    "correct": "A",
    "explanation": "<p>GIT utilise la fonction de hachage SHA-1 pour nommer le contenu. Par exemple, les fichiers, les répertoires et les révisions sont désignés par des valeurs de hachage.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q78",
    "partie": "Git",
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
    "num": "Q79",
    "partie": "Git",
    "q": "Quels sont les fichiers dans lesquels on peut effectuer une recherche à l’aide de « git grep » ?",
    "choices": {
      "A": "Toutes les arborescences locales de Git",
      "B": "L’arbre de travail actuel",
      "C": "Tous les fichiers sur l’ordinateur",
      "D": "Arbre de travail courant et arbre de travail distant"
    },
    "correct": "A",
    "explanation": "<p>Git grep permet de rechercher une chaîne dans n’importe quel arbre de commit, dans le répertoire de travail ou dans l’index.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q80",
    "partie": "Git",
    "q": "Quels sont les fichiers que ce .gitignore est programmé pour ignorer ?",
    "choices": {
      "A": "Tous les fichiers avec une extension .swift, .txt, ou metadata, ainsi que le répertoire build.",
      "B": "Uniquement le répertoire build.",
      "C": "Tous les fichiers du répertoire build, ainsi que les fichiers se terminant par .txt ou .metadata.",
      "D": "Uniquement les fichiers portant les extensions .swift et .txt."
    },
    "correct": "C",
    "explanation": "Une ligne commençant par # sert de commentaire. Les motifs listés (ex: build/, *.txt) sont ignorés.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q81",
    "partie": "Git",
    "q": "Si vous clonez un dépôt git existant, que se passera-t-il ?",
    "choices": {
      "A": "Une nouvelle copie écraserait le dépôt central.",
      "B": "Une copie du dépôt serait créée sur votre machine locale.",
      "C": "Rien, le clonage n’est pas une fonction git supportée.",
      "D": "Une copie du dépôt serait créée sur la plateforme d’hébergement."
    },
    "correct": "B",
    "explanation": "Le clonage crée une copie complète du dépôt sur la machine locale.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q82",
    "partie": "Git",
    "q": "Si vous clonez un dépôt qui contient des sous-modules, ils seront initialisés __________",
    "choices": {
      "A": "seulement après",
      "B": "après",
      "C": "seulement si vous clonez avec l’argument –recursif",
      "D": "seulement si vous clonez avec l’argument –submodules"
    },
    "correct": "B",
    "explanation": "Ils seront initialisés après git submodule init et git submodule update ou si vous clonez avec l’argument –recursif.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q83",
    "partie": "Git",
    "q": "Vous trouvez un bogue, comment isoler le commit responsable ?",
    "choices": {
      "A": "Remontez manuellement dans l’historique.",
      "B": "Utilisez git search.",
      "C": "Exécutez un git rebase.",
      "D": "Utilisez git bisect pour comparer le commit bogué à un commit sain."
    },
    "correct": "D",
    "explanation": "Git bisect effectue une recherche binaire dans l'historique pour trouver le commit fautif.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q84",
    "partie": "Git",
    "q": "Vous voulez fusionner une branche de fonctionnalité dans une branche beta. Comment faire ?",
    "choices": {
      "A": "Allez sur la branche de fonctionnalité et exécutez git merge beta.",
      "B": "Allez sur la branche master.",
      "C": "Supprimez la branche de fonctionnalité.",
      "D": "Allez sur la branche beta et exécuter git merge [nom_branche_feature]."
    },
    "correct": "D",
    "explanation": "On fusionne toujours la branche source dans la branche de destination actuelle.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Git Add",
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
    "num": "Q2",
    "partie": "Git Add",
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
    "num": "Q1",
    "partie": "Git Branches",
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
    "num": "Q2",
    "partie": "Git Branches",
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
    "num": "Q1",
    "partie": "Git Cherry-pick",
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
    "num": "Q1",
    "partie": "Git Clone",
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
    "num": "Q1",
    "partie": "Git Commit",
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
    "partie": "Git Concepts",
    "q": "A partir de quelle version Git propose-t-il d’inverser un fichier pour revenir à ce qu’il était lors de la dernière commit ?",
    "choices": {
      "A": "1.7",
      "B": "1.6",
      "C": "2.0",
      "D": "1.8"
    },
    "correct": "D",
    "explanation": "GIT Version 1.8.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Git Concepts",
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
    "num": "Q3",
    "partie": "Git Concepts",
    "q": "Cette commande 'git tag -a v1.0 -m \"message\"' est un exemple de quel type de tag ?",
    "choices": {
      "A": "verbeux",
      "B": "annoté",
      "C": "léger",
      "D": "différé"
    },
    "correct": "B",
    "explanation": "L'option -a indique un tag annoté.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Git Concepts",
    "q": "Combien de commits un dépôt peut-il avoir ?",
    "choices": {
      "A": "N’importe quel nombre de commits",
      "B": "un seul commit local par dépôt",
      "C": "seulement trois commits par branche",
      "D": "un seul commit par HEAD"
    },
    "correct": "A",
    "explanation": "N’importe quel nombre de commits.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Git Concepts",
    "q": "Comment Git considère-t-il ses données ?",
    "choices": {
      "A": "Fichier",
      "B": "Dossier",
      "C": "Snapshot (Instantané)",
      "D": "Aucune de ces données"
    },
    "correct": "C",
    "explanation": "Git considère plutôt ses données comme une série d’instantanés (snapshots) d’un système de fichiers simplifié.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Git Concepts",
    "q": "Comment Git gère-t-il les branches en interne ?",
    "choices": {
      "A": "en créant un pointeur sur l’instantané ou le commit le plus récent de la branche.",
      "B": "en créant un tableau de données des branches dans le même dépôt.",
      "C": "en créant un dictionnaire de données des modifications de code.",
      "D": "en créant un fichier log de débogage qui stocke les modifications du référentiel."
    },
    "correct": "A",
    "explanation": "Git gère en interne les branches en créant un pointeur sur l’instantané ou le commit le plus récent de la branche.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Git Concepts",
    "q": "Qu’est-ce qu’un dépôt distant ?",
    "choices": {
      "A": "une version du dépôt qui reflète les modifications apportées à la branche master du dépôt local dans le contexte d’une collaboration open-source",
      "B": "le dépôt principal élu par l’arbitre Git trouvé dans les dépôts locaux des membres de l’équipe qui collaborent",
      "C": "une version en lecture seule du référentiel stockée sur un serveur de sauvegarde au cas où les référentiels locaux seraient perdus ou corrompus",
      "D": "une version du référentiel hébergée sur l’internet ou le réseau, vers laquelle les collaborateurs poussent ou retirent des données."
    },
    "correct": "D",
    "explanation": "Un dépôt distant est une version du référentiel hébergée sur l’internet ou le réseau, vers laquelle les collaborateurs poussent ou retirent des données.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Git Concepts",
    "q": "Que contient l’objet commit ?",
    "choices": {
      "A": "Un ensemble de fichiers représentant l’état d’un projet à un moment donné.",
      "B": "Une référence aux objets de commit parents.",
      "C": "Un nom SHA1, une chaîne de 40 caractères qui identifie de manière unique l’objet commit.",
      "D": "Une référence aux objets commit parents et un ensemble de fichiers représentant l’état d’un projet à un moment donné, ainsi qu’un nom SHA1, une chaîne de 40 caractères qui identifie de manière unique l’objet commit."
    },
    "correct": "D",
    "explanation": "L’objet commit contient une référence aux objets commit parents et un ensemble de fichiers représentant l’état d’un projet à un moment donné, ainsi qu’un nom SHA1, une chaîne de 40 caractères qui identifie de manière unique l’objet commit.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Git Concepts",
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
    "partie": "Git Concepts",
    "q": "Que stocke refs ?",
    "choices": {
      "A": "La valeur SHA-1",
      "B": "Aucune de ces valeurs",
      "C": "Nom de la branche",
      "D": "Nom du projet"
    },
    "correct": "C",
    "explanation": "Une tête de branche est stockée dans la hiérarchie refs/heads.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Git Concepts",
    "q": "Quel est le principal problème lié à l’utilisation de git rebase lorsque l’on travaille avec plusieurs développeurs ?",
    "choices": {
      "A": "Rebase modifie l'historique de la branche et peut causer des problèmes de synchronisation dans les dépôts partagés.",
      "B": "Rebase crée une copie temporaire de la branche master dans le dépôt distant.",
      "C": "Rebase déplace le HEAD de la branche master distante d’un commit vers l’avant.",
      "D": "Rebase supprime tout l’historique des commit pour la nouvelle branche feature."
    },
    "correct": "A",
    "explanation": "Les nouveaux historiques créés par le rebasage n’affectent qu’un seul dépôt. Réécrire l'historique partagé pose des problèmes aux autres collaborateurs.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q12",
    "partie": "Git Concepts",
    "q": "Quelle est la différence entre Git et SVN ?",
    "choices": {
      "A": "Git fonctionne uniquement sous Linux, tandis que SVN fonctionne sur tous les systèmes d’exploitation.",
      "B": "SVN fonctionne uniquement sous Linux, tandis que Git fonctionne sur tous les systèmes d’exploitation.",
      "C": "SVN est un système centralisé, alors que Git est un système distribué.",
      "D": "Git est un système centralisé, tandis que SVN est un système distribué."
    },
    "correct": "C",
    "explanation": "SVN est un système centralisé, alors que Git est un système distribué.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Git Config",
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
    "num": "Q1",
    "partie": "Git Fork",
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
    "num": "Q1",
    "partie": "Git HEAD",
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
    "partie": "Git HEAD",
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
    "num": "Q1",
    "partie": "Git Ignore",
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
    "num": "Q1",
    "partie": "Git Index",
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
    "num": "Q1",
    "partie": "Git Log",
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
    "partie": "Git Log",
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
    "num": "Q1",
    "partie": "Git Merge",
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
    "partie": "Git Plateformes",
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
    "num": "Q1",
    "partie": "Git Push & Remote",
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
    "num": "Q2",
    "partie": "Git Push & Remote",
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
    "num": "Q1",
    "partie": "Git Reflog",
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
    "num": "Q2",
    "partie": "Git Reflog",
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
    "num": "Q1",
    "partie": "Git Remote",
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
    "num": "Q1",
    "partie": "Git Reset",
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
    "num": "Q2",
    "partie": "Git Reset",
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
    "num": "Q1",
    "partie": "Git Stash",
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
    "num": "Q2",
    "partie": "Git Stash",
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
    "num": "Q1",
    "partie": "Git Sync",
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
    "num": "Q2",
    "partie": "Git Sync",
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
    "num": "Q1",
    "partie": "GitHub",
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
    "num": "Q2",
    "partie": "GitHub",
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
    "num": "Q3",
    "partie": "GitHub",
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
    "num": "Q4",
    "partie": "GitHub",
    "q": "Que fait un « Template repository » ?",
    "choices": {
      "A": "Il crée une démonstration en direct du référentiel actuel.",
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
    "num": "Q5",
    "partie": "GitHub",
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
    "num": "Q6",
    "partie": "GitHub",
    "q": "Quel fournisseur a acquis GitHub pour 7,5 milliards de dollars en juin 2018 ?",
    "choices": {
      "A": "Oracle",
      "B": "Microsoft",
      "C": "IBM",
      "D": "Google"
    },
    "correct": "B",
    "explanation": "<p>Microsoft a annoncé son acquisition de GitHub en 2018.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "GitHub",
    "q": "Quelle est la meilleure façon de signaler un bogue sur un projet GitHub ?",
    "choices": {
      "A": "Envoyer un email au propriétaire du projet.",
      "B": "Je ne m’embête pas à signaler des bogues de logiciels.",
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
    "num": "Q8",
    "partie": "GitHub",
    "q": "Supposons que vous ayez créé une correction de bogue sur une nouvelle branche et que vous souhaitiez qu’elle fasse partie de la branche principale. Que devez-vous faire ensuite ?",
    "choices": {
      "A": "Copier les modifications de votre branche et les commiter directement sur la branche principale.",
      "B": "Créer une « pull request » pour merger votre nouvelle branche dans la branche principale.",
      "C": "Ne pas partager cette correction.",
      "D": "Utilisez git bisect pour comparer le commit bogué."
    },
    "correct": "B",
    "explanation": "<p>Les « pull request » sont le moyen correct de communiquer que les modifications sont prêtes à être examinées et finalement incluses dans la branche principale.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "GitHub",
    "q": "Vous regardez une page de dépôt et vous souhaitez trouver un fichier. Quel est le moyen le plus rapide de trouver un fichier sur un chemin dans votre dépôt ?",
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
    "num": "Q1",
    "partie": "IA",
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
    "num": "Q1",
    "partie": "Sécurité / SSH",
    "q": "Quel utilisateur doit être créé en premier lors de la configuration de SSH ?",
    "choices": {
      "A": "git",
      "B": "admin",
      "C": "root",
      "D": "Aucun de ces utilisateurs"
    },
    "correct": "D",
    "explanation": "La question n’est pas assez précise pour donner une réponse définitive, car elle dépend du cas d’utilisation spécifique et de la configuration de l’installation SSH.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Sécurité / SSH",
    "q": "Quelle est l’extension habituelle du fichier contenant la clé publique ?",
    "choices": {
      "A": "ssh",
      "B": "pub",
      "C": "key"
    },
    "correct": "B",
    "explanation": "L’extension habituelle du fichier contenant la clé publique est .pub.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];