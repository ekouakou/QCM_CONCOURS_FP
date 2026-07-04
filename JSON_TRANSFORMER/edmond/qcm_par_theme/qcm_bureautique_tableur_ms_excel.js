const QCM = [
  {
    "num": "Q1",
    "partie": "Bureautique - Tableur (MS Excel)",
    "q": "Le texte fourni ne contient pas de question exploitable concernant l'utilisation de Microsoft Excel. Veuillez fournir un énoncé de question valide afin que je puisse l'analyser et le restructurer.",
    "choices": {
      "A": "Information manquante",
      "B": "Information manquante",
      "C": "Information manquante",
      "D": "Information manquante"
    },
    "correct": null,
    "explanation": "<p>L'extrait soumis ne contient pas de question, mais uniquement l'en-tête d'un questionnaire. Par conséquent, aucune analyse pédagogique ne peut être réalisée sur le contenu technique.</p>",
    "wrongAnalysis": [],
    "examiner": "Non applicable",
    "summary": [
      "Aucune question n'a été détectée dans l'extrait fourni.",
      "L'analyse nécessite un énoncé clair et des propositions de réponses.",
      "Veuillez soumettre une question complète pour obtenir une structuration détaillée."
    ]
  },
  {
    "num": "Q2",
    "partie": "Bureautique - Tableur (MS Excel)",
    "q": "Quelle est la définition et le rôle principal d'un tableau croisé dynamique (TCD) dans Microsoft Excel ?",
    "choices": {
      "A": "Un tableau de bilan intégrant des commentaires personnalisés.",
      "B": "Un tableau contenant volontairement des données redondantes pour faciliter la lecture.",
      "C": "Un outil de synthèse permettant de calculer, résumer et analyser de grands volumes de données.",
      "D": "Un tableau de données classique sans fonctionnalité de calcul automatique."
    },
    "correct": "C",
    "explanation": "<p>Un <strong>Tableau Croisé Dynamique (TCD)</strong> est l'un des outils les plus puissants d'Excel pour l'analyse de données. Contrairement à un tableau classique, il permet de :</p><ul><li><strong>Synthétiser :</strong> Regrouper des milliers de lignes en quelques catégories clés.</li><li><strong>Calculer :</strong> Appliquer des fonctions (somme, moyenne, comptage) sans écrire de formules manuelles.</li><li><strong>Explorer :</strong> Modifier dynamiquement l'affichage des données par simple glisser-déposer (changement de lignes, colonnes ou filtres).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les commentaires ne sont pas la fonction propre du TCD; il s'agit d'une fonctionnalité de mise en forme ou d'annotation globale à Excel."
      },
      {
        "l": "B",
        "t": "Au contraire, le TCD aide souvent à identifier et nettoyer les redondances plutôt qu'à les créer."
      },
      {
        "l": "D",
        "t": "Un TCD est un outil d'analyse dynamique et non un tableau de données statique et \"banal\"."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la valeur ajoutée des fonctionnalités avancées d'Excel par rapport à la gestion de données de base.",
    "summary": [
      "Le tableau croisé dynamique est un outil de synthèse et d'analyse de données.",
      "Il permet de transformer des listes brutes en rapports structurés sans utiliser de formules complexes.",
      "Il offre une grande flexibilité pour réorganiser l'affichage des données instantanément.",
      "Il est idéal pour gérer et analyser de grands volumes d'informations."
    ]
  },
  {
    "num": "Q3",
    "partie": "Bureautique - Tableur (MS Excel)",
    "q": "Quelle est la procédure correcte pour supprimer une feuille de calcul dans un classeur Microsoft Excel ?",
    "choices": {
      "A": "Utiliser la touche SUPPR du clavier.",
      "B": "Utiliser le menu Édition > Supprimer.",
      "C": "Sélectionner toutes les cellules de la feuille, faire un clic droit et choisir Supprimer.",
      "D": "Effectuer un clic droit sur l'onglet de la feuille en bas de l'écran, puis sélectionner 'Supprimer'."
    },
    "correct": "D",
    "explanation": "<p>Dans Microsoft Excel, la gestion des feuilles se fait principalement via les <strong>onglets de feuille</strong> situés en bas de l'interface.</p><p>La méthode standard et la plus efficace pour supprimer une feuille consiste à :</p><ul><li>Faire un <strong>clic droit</strong> directement sur l'onglet de la feuille concernée.</li><li>Sélectionner l'option <strong>Supprimer</strong> dans le menu contextuel qui apparaît.</li></ul><p><em>Note : Si la feuille contient des données, Excel affichera une boîte de dialogue pour confirmer la suppression définitive, car cette action ne peut pas être annulée par la commande 'Annuler' (Ctrl+Z).</em></p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La touche SUPPR efface uniquement le contenu des cellules sélectionnées, mais ne supprime pas la structure de la feuille elle-même."
      },
      {
        "l": "B",
        "t": "Le menu 'Édition' dans les versions modernes d'Excel ne contient pas de fonction directe pour supprimer une feuille entière."
      },
      {
        "l": "C",
        "t": "Supprimer les cellules ne supprime pas la feuille. La feuille restera vide dans le classeur, occupant toujours de l'espace mémoire."
      }
    ],
    "examiner": "L'examinateur évalue la connaissance de l'interface utilisateur d'Excel et la distinction entre supprimer le contenu d'une feuille et supprimer l'objet feuille en lui-même.",
    "summary": [
      "La suppression d'une feuille s'effectue via l'onglet de feuille en bas de l'écran.",
      "Un clic droit sur l'onglet permet d'accéder à l'option 'Supprimer'.",
      "La suppression d'une feuille est irréversible : elle ne peut pas être annulée par Ctrl+Z.",
      "La touche SUPPR du clavier ne sert qu'à effacer le contenu des cellules."
    ]
  },
  {
    "num": "Q4",
    "partie": "Bureautique - Tableur (MS Excel)",
    "q": "Quel est l'effet immédiat de l'application d'un filtre automatique sur une colonne dans un tableau Microsoft Excel ?",
    "choices": {
      "A": "Supprime définitivement les enregistrements qui ne correspondent pas aux critères définis.",
      "B": "Masque temporairement les lignes des enregistrements qui ne correspondent pas aux critères définis.",
      "C": "Crée automatiquement une nouvelle feuille ou un nouveau tableau contenant uniquement les données filtrées.",
      "D": "Aucune des propositions précédentes."
    },
    "correct": "B",
    "explanation": "<p>L'utilisation de la fonctionnalité <strong>Filtre automatique</strong> dans Excel est un outil de consultation et d'analyse dynamique.</p><p>Contrairement à une suppression de données, le filtrage agit comme un <strong>masquage visuel</strong> :</p><ul><li>Les lignes qui ne respectent pas vos critères de sélection deviennent invisibles (le numéro de ligne apparaît alors en bleu dans la marge).</li><li>Les données originales sont intégralement conservées et peuvent être retrouvées instantanément en effaçant le filtre.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le filtre ne supprime jamais les données. Pour supprimer des lignes, il faudrait effectuer une action explicite de suppression."
      },
      {
        "l": "C",
        "t": "Bien que l'on puisse copier les résultats vers un autre emplacement, le filtre automatique lui-même ne génère pas de nouvelle structure de données indépendante."
      },
      {
        "l": "D",
        "t": "La proposition B est une description exacte du comportement technique du filtre."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension de l'utilisateur sur la nature réversible et non destructive des outils de filtrage dans un tableur.",
    "summary": [
      "Le filtre automatique masque les lignes ne correspondant pas au critère, sans altérer les données sources.",
      "Les données 'masquées' restent présentes dans le classeur et sont toujours calculées dans les formules globales.",
      "Le filtrage est une opération réversible qui permet d'afficher ou de cacher des informations à la demande.",
      "Il est crucial de distinguer le filtrage (masquage) de la suppression (effacement définitif)."
    ]
  },
  {
    "num": "Q5",
    "partie": "Bureautique - Tableur (MS Excel)",
    "q": "Quelle barre d'outils ou groupe de commandes permet de visualiser les relations entre une cellule contenant une erreur de calcul et ses cellules dépendantes ?",
    "choices": {
      "A": "La barre d'outils Audit de formules",
      "B": "La barre d'outils Formulaire",
      "C": "La barre d'outils Révision",
      "D": "La barre d'outils Données externes"
    },
    "correct": "A",
    "explanation": "<p>Dans Microsoft Excel, l'onglet <strong>Formules</strong> contient un groupe nommé <strong>Audit de formules</strong>. Cet outil est indispensable pour diagnostiquer les erreurs.</p><ul><li><strong>Repérer les antécédents :</strong> Affiche des flèches vers les cellules qui fournissent des données à la formule active.</li><li><strong>Repérer les dépendants :</strong> Affiche des flèches vers les cellules qui utilisent le résultat de la cellule active.</li><li><strong>Évaluation de formule :</strong> Permet de suivre le calcul étape par étape pour identifier l'origine exacte d'une erreur (ex: #DIV/0!).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La barre d'outils Formulaire est destinée à la création d'interfaces interactives (boutons, zones de liste, cases à cocher) et non au débogage de calculs."
      },
      {
        "l": "C",
        "t": "L'onglet Révision est principalement utilisé pour la protection des feuilles, le suivi des modifications, les commentaires et la vérification orthographique."
      },
      {
        "l": "D",
        "t": "Le groupe Données externes est dédié à l'importation de données depuis des sources extérieures (Web, texte, bases de données) et n'a aucun lien avec l'analyse des formules."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat maîtrise les outils de débogage et d'audit de formules intégrés à Excel pour garantir la fiabilité des données.",
    "summary": [
      "L'audit de formules est essentiel pour comprendre les dépendances entre les cellules.",
      "Le groupe 'Audit de formules' permet de tracer visuellement les antécédents et les dépendants d'une cellule.",
      "Les flèches bleues indiquent les relations normales, tandis que les flèches rouges signalent des erreurs.",
      "L'outil 'Évaluation de formule' aide à identifier précisément quelle partie d'une fonction provoque une erreur."
    ]
  },
  {
    "num": "Q6",
    "partie": "Bureautique - Tableur (MS Excel)",
    "q": "Quelle est l'extension de fichier standard utilisée pour un classeur Microsoft Excel ?",
    "choices": {
      "A": ".xls",
      "B": ".doc",
      "C": ".docx",
      "D": ".xla"
    },
    "correct": "A",
    "explanation": "<p>L'extension <strong>.xls</strong> est l'extension historique des classeurs créés avec les versions de Microsoft Excel antérieures à 2007 (format binaire). Bien que les versions modernes utilisent majoritairement <strong>.xlsx</strong> (format OpenXML), le format <strong>.xls</strong> reste l'extension de référence pour identifier un classeur classique dans ce contexte.</p><ul><li><strong>.doc/.docx</strong> : Réservés au traitement de texte Microsoft Word.</li><li><strong>.xla</strong> : Correspond à un complément (add-in) Excel, et non à un classeur standard.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le format .doc est réservé aux documents Microsoft Word."
      },
      {
        "l": "C",
        "t": "Le format .docx est l'extension moderne des documents Word, non des classeurs Excel."
      },
      {
        "l": "D",
        "t": "Le format .xla est un complément Excel, utilisé pour stocker des macros et des fonctions personnalisées, et non pour des données de classeur classiques."
      }
    ],
    "examiner": "Évaluer la connaissance fondamentale des extensions de fichiers de la suite Microsoft Office.",
    "summary": [
      "Les classeurs Excel de versions anciennes utilisent l'extension .xls.",
      "Les classeurs Excel modernes utilisent par défaut l'extension .xlsx.",
      "Les documents Word utilisent les extensions .doc ou .docx.",
      "L'extension .xla est spécifique aux compléments Excel.",
      "Savoir identifier les formats de fichiers est essentiel pour la gestion de documents numériques."
    ]
  },
  {
    "num": "Q7",
    "partie": "Bureautique - Tableur (MS Excel)",
    "q": "Le texte fourni ne contient pas de question exploitable concernant la présentation PowerPoint ou le tableur MS Excel. Veuillez fournir le contenu détaillé de la question pour analyse.",
    "choices": {
      "A": "Donnée manquante",
      "B": "Donnée manquante",
      "C": "Donnée manquante",
      "D": "Donnée manquante"
    },
    "correct": "A",
    "explanation": "<p>L'extrait fourni ne contient pas d'énoncé de question ni de choix de réponse valides.</p><p>Pour bénéficier de l'analyse pédagogique, veuillez soumettre le contenu complet de la question et des options associées.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Aucune donnée disponible pour analyse."
      },
      {
        "l": "C",
        "t": "Aucune donnée disponible pour analyse."
      },
      {
        "l": "D",
        "t": "Aucune donnée disponible pour analyse."
      }
    ],
    "examiner": "Vérification de la validité de l'énoncé.",
    "summary": [
      "L'extrait fourni est incomplet.",
      "Aucun concept pédagogique ne peut être extrait sans contenu.",
      "Veuillez soumettre une question formatée pour obtenir une analyse détaillée."
    ]
  }
];
