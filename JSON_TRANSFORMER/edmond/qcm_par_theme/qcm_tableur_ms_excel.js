const QCM = [
  {
    "num": "Q1",
    "partie": "Tableur MS-Excel",
    "q": "Dans Microsoft Excel, quel est le rôle principal d'un tableau croisé dynamique ?",
    "choices": {
      "A": "Un tableau de bilan intégrant des commentaires spécifiques d'Excel.",
      "B": "Un tableau structuré pour conserver les données redondantes.",
      "C": "Un outil puissant d'analyse et de synthèse de données.",
      "D": "Un tableau simple sans fonctionnalité particulière."
    },
    "correct": "C",
    "explanation": "<p>Un <strong>tableau croisé dynamique (TCD)</strong> est un outil de traitement de données extrêmement puissant dans Excel. Il permet de :</p><ul><li><strong>Synthétiser</strong> de grandes quantités de données brutes.</li><li><strong>Calculer</strong> des statistiques (somme, moyenne, comptage) automatiquement.</li><li><strong>Réorganiser</strong> et filtrer les informations pour en extraire des tendances ou des indicateurs clés.</li></ul><p>Contrairement aux tableaux classiques, le TCD ne modifie pas les données sources mais crée une vue dynamique et interactive.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les commentaires dans Excel sont une fonctionnalité distincte et n'ont aucun rapport avec la structure d'un tableau croisé dynamique."
      },
      {
        "l": "B",
        "t": "Le TCD a justement pour but d'éliminer la redondance visuelle et de regrouper les données pour les rendre exploitables."
      },
      {
        "l": "D",
        "t": "Un TCD est un objet complexe et évolutif, ce qui est l'exact opposé d'un tableau banal."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la finalité métier d'un tableau croisé dynamique : passer d'une liste de données brutes à une information décisionnelle.",
    "summary": [
      "Le tableau croisé dynamique est l'outil de référence pour la synthèse de données.",
      "Il permet de manipuler de larges bases de données sans altérer la source.",
      "Il facilite le calcul automatique d'indicateurs (somme, moyenne, etc.).",
      "C'est un outil d'aide à la décision indispensable dans le domaine professionnel."
    ]
  },
  {
    "num": "Q2",
    "partie": "Tableur MS-Excel",
    "q": "Quelle est la procédure correcte pour supprimer une feuille de calcul au sein d'un classeur Microsoft Excel ?",
    "choices": {
      "A": "Utiliser la touche Suppr de votre clavier.",
      "B": "Utiliser la commande Édition > Supprimer.",
      "C": "Sélectionner l'ensemble des cellules de la feuille, faire un clic droit et choisir Supprimer dans le menu contextuel.",
      "D": "Utiliser la fonction Supprimer une feuille accessible depuis le menu contextuel de l'onglet ou le ruban Accueil."
    },
    "correct": "D",
    "explanation": "<p>Dans Microsoft Excel, la suppression d'une feuille de calcul complète est une action distincte de la suppression du contenu des cellules.</p><ul><li>La méthode standard consiste à faire un <strong>clic droit sur l'onglet de la feuille</strong> en bas de l'écran, puis à sélectionner <strong>Supprimer</strong>.</li><li>Alternativement, depuis l'onglet <strong>Accueil</strong> du ruban, vous pouvez utiliser le menu <strong>Supprimer</strong> puis <strong>Supprimer une feuille</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La touche Suppr efface uniquement le contenu des cellules sélectionnées, mais ne supprime pas la feuille elle-même."
      },
      {
        "l": "B",
        "t": "Le menu Édition n'existe plus sous cette forme dans les versions modernes d'Excel et ne contenait pas cette fonction spécifique."
      },
      {
        "l": "C",
        "t": "Cette action supprime les cellules ou les lignes/colonnes sélectionnées, mais la feuille elle-même restera présente dans le classeur."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance de l'utilisateur sur la gestion de la structure d'un classeur (feuilles) versus la gestion des données contenues dans les cellules.",
    "summary": [
      "La suppression d'une feuille est une action structurelle irréversible qui efface toutes les données contenues dans celle-ci.",
      "La touche Suppr agit sur les données (cellules), tandis que la commande Supprimer une feuille agit sur l'objet 'Feuille'.",
      "Le moyen le plus rapide est le clic droit sur l'onglet de la feuille situé dans la barre d'onglets en bas.",
      "Excel demande toujours une confirmation avant la suppression définitive d'une feuille contenant des données."
    ]
  },
  {
    "num": "Q3",
    "partie": "Tableur MS-Excel",
    "q": "Quel est l'effet immédiat de l'application d'un filtre automatique sur un champ d'un tableau dans Microsoft Excel ?",
    "choices": {
      "A": "Supprime définitivement les lignes ne correspondant pas aux critères sélectionnés.",
      "B": "Ouvre une fenêtre d'exploration de fichiers pour sélectionner un autre classeur.",
      "C": "Crée automatiquement une nouvelle feuille de calcul contenant uniquement les données filtrées.",
      "D": "Masque temporairement les lignes qui ne répondent pas aux critères définis tout en conservant les données intactes."
    },
    "correct": "D",
    "explanation": "<p>Le <strong>filtre automatique</strong> dans Excel est une fonctionnalité de consultation et d'analyse dynamique. Contrairement à une suppression, il n'altère pas l'intégrité des données sources.</p><ul><li>Lorsqu'un filtre est activé, Excel identifie les lignes qui ne satisfont pas la condition logique appliquée.</li><li>Ces lignes sont alors masquées (leur numéro de ligne devient bleu dans la marge), ce qui permet de se concentrer sur les données pertinentes.</li><li>Il est possible de rétablir l'affichage complet à tout moment en effaçant le filtre.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le filtrage n'est pas destructif ; les données masquées restent présentes dans le tableau et peuvent être récupérées instantanément."
      },
      {
        "l": "B",
        "t": "L'exploration de fichier est une fonction système ou de gestion de classeur, sans aucun rapport avec les outils de manipulation de données au sein d'une feuille."
      },
      {
        "l": "C",
        "t": "Excel ne génère pas de nouveau tableau par défaut. Si l'on souhaite extraire les données, il faut effectuer un copier-coller des résultats filtrés vers une autre destination."
      }
    ],
    "examiner": "Évaluer la compréhension de la distinction entre la suppression de données et le masquage dynamique dans les outils de gestion de base de données Excel.",
    "summary": [
      "Le filtre automatique masque les lignes ne correspondant pas au critère sans les supprimer.",
      "Les données masquées restent accessibles et peuvent être affichées à nouveau en effaçant le filtre.",
      "La numérotation des lignes filtrées apparaît en bleu pour indiquer l'état actif du filtre.",
      "Le filtrage est une méthode d'analyse rapide et non destructive."
    ]
  },
  {
    "num": "Q4",
    "partie": "Tableur MS-Excel",
    "q": "Quelle est la fonction principale de l'outil Solveur dans Microsoft Excel ?",
    "choices": {
      "A": "Identifier et corriger les erreurs de syntaxe dans les formules.",
      "B": "Résoudre uniquement des équations linéaires à une seule inconnue.",
      "C": "Rechercher la valeur optimale d'une cellule cible en modifiant plusieurs cellules variables, sous réserve de contraintes.",
      "D": "Exporter des données structurées vers un format de fichier texte externe."
    },
    "correct": "C",
    "explanation": "<p>Le <strong>Solveur</strong> est un complément puissant d'Excel conçu pour l'optimisation. Contrairement à la fonction 'Valeur cible' qui ne permet de modifier qu'une seule cellule, le Solveur permet de :</p><ul><li><strong>Modifier plusieurs cellules variables</strong> simultanément.</li><li>Appliquer des <strong>contraintes</strong> strictes (ex: limites supérieures, valeurs entières, égalités).</li><li>Rechercher un maximum, un minimum ou une valeur spécifique pour une cellule objectif.</li></ul><p>Il est utilisé pour résoudre des problèmes complexes d'allocation de ressources, de planification ou de modèles financiers.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le Solveur n'est pas un outil de débogage de formules; l'audit de formules est géré par d'autres fonctionnalités comme 'Vérification des erreurs'."
      },
      {
        "l": "B",
        "t": "Bien qu'il puisse résoudre des équations à une inconnue, ce choix est trop restrictif car il ignore sa capacité à gérer plusieurs variables simultanément."
      },
      {
        "l": "D",
        "t": "L'extraction de données vers un fichier texte relève des fonctionnalités d'exportation ou de Power Query, et non de l'outil d'optimisation Solveur."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la différence entre les outils de calcul simples (Valeur cible) et les outils d'optimisation avancée (Solveur).",
    "summary": [
      "Le Solveur est un outil d'optimisation avancé dans Excel.",
      "Il permet de modifier plusieurs cellules pour atteindre un objectif précis.",
      "Il est indispensable pour respecter des contraintes complexes dans un modèle.",
      "Il dépasse les capacités de la fonction Valeur cible, limitée à une seule variable."
    ]
  },
  {
    "num": "Q5",
    "partie": "Tableur MS-Excel",
    "q": "Dans une feuille de calcul Excel, les cellules A1 et A2 contiennent respectivement les dates '12/03/2004' et '12/04/2004'. Si vous sélectionnez ces deux cellules et utilisez la poignée de recopie pour étendre la sélection vers le bas jusqu'en A3, quelle valeur sera affichée dans la cellule A3 ?",
    "choices": {
      "A": "12/03/2004",
      "B": "12/05/2004",
      "C": "12/03/2005",
      "D": "13/03/2004"
    },
    "correct": "B",
    "explanation": "<p>Dans Excel, lorsque vous sélectionnez plusieurs cellules contenant une série logique (ici, une suite de dates espacées d'un mois), l'utilisation de la <strong>poignée de recopie</strong> prolonge cette logique.</p><ul><li>La différence entre 12/03/2004 et 12/04/2004 est exactement d'<strong>un mois</strong>.</li><li>En étirant la sélection, Excel détecte cet incrément et applique le même intervalle à la date suivante.</li><li>Le calcul est donc : 12/04/2004 + 1 mois = <strong>12/05/2004</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci répéterait simplement la première valeur, ce qui ne correspond pas à une progression logique détectée par Excel."
      },
      {
        "l": "C",
        "t": "Ceci ajouterait une année entière au lieu d'un mois, une erreur courante lorsqu'on confond l'incrémentation des jours ou des mois avec celle des années."
      },
      {
        "l": "D",
        "t": "Ceci ajouterait un jour au lieu d'un mois, ce qui ignorerait la progression logique établie par les deux premières cellules."
      }
    ],
    "examiner": "Évaluer la compréhension de l'utilisateur sur le fonctionnement de la poignée de recopie automatique d'Excel pour les séries temporelles.",
    "summary": [
      "La poignée de recopie d'Excel détecte automatiquement des motifs ou des séries dans les données sélectionnées.",
      "Pour deux dates successives, Excel calcule l'intervalle entre elles (jours, mois ou années).",
      "L'incrémentation est appliquée à la dernière cellule de la sélection pour prédire la suivante.",
      "Une série de dates basée sur le jour du mois permet une progression mois par mois."
    ]
  },
  {
    "num": "Q6",
    "partie": "Tableur MS-Excel",
    "q": "Quelle barre d'outils ou groupe de fonctionnalités permet d'établir le lien entre une erreur de calcul et ses cellules dépendantes dans Microsoft Excel ?",
    "choices": {
      "A": "La barre d'outils Audit",
      "B": "La barre d'outils Formulaire",
      "C": "La barre d'outils Révision",
      "D": "La barre d'outils Données externes"
    },
    "correct": "A",
    "explanation": "<p>Dans Microsoft Excel, l'outil dédié à l'analyse des relations entre les formules et les données est l'<strong>Audit de formules</strong> (souvent situé dans l'onglet 'Formules').</p><ul><li>Il permet d'<strong>afficher les flèches de dépendance</strong>, qui tracent une ligne visuelle entre les cellules utilisées dans un calcul et la cellule résultat.</li><li>Il aide à identifier rapidement l'origine d'une erreur (ex: #REF!, #DIV/0!) en remontant jusqu'à la cellule problématique.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La barre d'outils Formulaire est utilisée pour insérer des contrôles (boutons, cases à cocher) dans une feuille, elle n'a aucun lien avec le calcul."
      },
      {
        "l": "C",
        "t": "La barre d'outils Révision concerne principalement le suivi des modifications, les commentaires et la protection de la feuille."
      },
      {
        "l": "D",
        "t": "La barre d'outils Données externes est destinée à l'importation et à la connexion avec des sources de données tierces (SQL, Web, Text)."
      }
    ],
    "examiner": "Évaluer la maîtrise des outils d'audit de formules et de débogage d'Excel pour la maintenance et la vérification des feuilles de calcul.",
    "summary": [
      "L'audit de formules permet de visualiser les antécédents et les dépendants d'une cellule.",
      "Les flèches de dépendance facilitent la localisation visuelle d'une erreur de calcul.",
      "La fonction d'audit aide à comprendre la structure logique d'un classeur complexe.",
      "Il est essentiel de différencier les outils de calcul (Audit) des outils de gestion de données ou de formulaire."
    ]
  },
  {
    "num": "Q7",
    "partie": "Tableur MS-Excel",
    "q": "Quelle est l'extension de fichier standard associée à un classeur Microsoft Excel ?",
    "choices": {
      "A": ".jpeg",
      "B": ".doc",
      "C": ".xls",
      "D": ".xla"
    },
    "correct": "C",
    "explanation": "<p>L'extension <strong>.xls</strong> est l'extension historique utilisée par Microsoft Excel pour enregistrer ses classeurs (fichiers contenant des feuilles de calcul). Bien que les versions modernes d'Excel utilisent désormais le format <strong>.xlsx</strong> (format XML ouvert), le fichier .xls reste le symbole classique des classeurs Excel dans les tests de connaissances informatiques.</p><ul><li><strong>.jpeg</strong> : format d'image.</li><li><strong>.doc</strong> : format de document Microsoft Word.</li><li><strong>.xla</strong> : format spécifique aux compléments (add-ins) Excel.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le format .jpeg est un format de compression d'images numériques et n'a aucun lien avec les feuilles de calcul."
      },
      {
        "l": "B",
        "t": "Le format .doc est l'extension historique des documents créés avec le logiciel de traitement de texte Microsoft Word."
      },
      {
        "l": "D",
        "t": "Le format .xla est réservé aux compléments (add-ins) Excel, qui sont des programmes permettant d'ajouter des fonctionnalités spécifiques, et non aux classeurs de données classiques."
      }
    ],
    "examiner": "Évaluer la connaissance de base sur l'environnement Microsoft Office et l'identification des types de fichiers selon leur application associée.",
    "summary": [
      "Un classeur Excel est un fichier destiné au calcul et à l'analyse de données.",
      "L'extension .xls correspond aux formats Excel antérieurs à 2007.",
      "Il est important de distinguer les extensions de documents (Word) des extensions de classeurs (Excel).",
      "Le format moderne par défaut est le .xlsx, mais .xls reste l'extension standard pour les exercices académiques."
    ]
  },
  {
    "num": "Q8",
    "partie": "Tableur MS-Excel",
    "q": "Quelle est la procédure standard et correcte pour réaliser une somme automatique dans Microsoft Excel ?",
    "choices": {
      "A": "Je me place dans la cellule où le résultat doit s'afficher, je clique sur le bouton 'Somme automatique' du ruban, puis je valide avec la touche Entrée.",
      "B": "Je sélectionne l'ensemble des cellules à additionner, puis je clique sur le bouton 'Addition automatique'.",
      "C": "Je sélectionne la première cellule à sommer ainsi que la cellule de destination, puis je clique sur le bouton 'Somme automatique'.",
      "D": "Je sélectionne toutes les cellules contenant les valeurs, puis je navigue dans le menu Fonctions pour choisir 'Somme automatique'."
    },
    "correct": "A",
    "explanation": "<p>La fonction <strong>Somme automatique</strong> dans Excel est conçue pour simplifier le calcul de totaux. La méthode standard consiste à :</p><ul><li>Se positionner directement dans la cellule cible (celle où le résultat doit apparaître).</li><li>Cliquer sur l'icône <strong>Somme automatique</strong> (souvent située dans l'onglet 'Accueil' ou 'Formules').</li><li>Excel détecte automatiquement la plage de cellules adjacentes à sommer. Il ne reste qu'à valider avec la touche <strong>Entrée</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le bouton 'Addition automatique' n'existe pas dans l'interface standard d'Excel ; le terme exact est 'Somme automatique'."
      },
      {
        "l": "C",
        "t": "Sélectionner la cellule de destination avant de cliquer ne permet pas à Excel d'identifier correctement la plage source de manière intuitive."
      },
      {
        "l": "D",
        "t": "Le chemin 'Menu Fonctions/Somme automatique' est incorrect, car la fonction se trouve directement dans le ruban Accueil ou Formules."
      }
    ],
    "examiner": "Évaluer la maîtrise des fonctionnalités de base de calcul automatisé dans Excel et la connaissance de l'interface utilisateur.",
    "summary": [
      "La fonction Somme automatique se trouve dans l'onglet Accueil ou Formules.",
      "Il faut toujours sélectionner la cellule vide où le résultat sera affiché avant de lancer la fonction.",
      "Excel propose automatiquement une plage de cellules, qu'il est possible de modifier manuellement avant de valider.",
      "La touche Entrée finalise l'insertion de la formule =SOMME() dans la cellule."
    ]
  }
];
