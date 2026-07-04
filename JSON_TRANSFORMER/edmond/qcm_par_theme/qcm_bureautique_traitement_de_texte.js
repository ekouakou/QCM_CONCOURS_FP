const QCM = [
  {
    "num": "Q1",
    "partie": "Bureautique - Traitement de texte",
    "q": "Quelle est la procédure standard pour protéger un document bureautique par un mot de passe ?",
    "choices": {
      "A": "Utiliser la commande 'Mot de passe' située dans le menu Insertion.",
      "B": "Indiquer un mot de passe dans les options générales d'enregistrement du document.",
      "C": "Saisir le mot de passe directement dans les propriétés avancées du document.",
      "D": "Aucune de ces méthodes ne permet de protéger un document."
    },
    "correct": "B",
    "explanation": "<p>Pour sécuriser un document contre les accès non autorisés, il est nécessaire d'accéder aux <strong>options de sécurité</strong> au moment de l'enregistrement. Dans la plupart des suites bureautiques comme Microsoft Word ou LibreOffice :</p><ul><li>Il faut passer par <strong>Fichier > Enregistrer sous</strong>.</li><li>Ouvrir les <strong>Outils</strong> ou <strong>Options générales</strong>.</li><li>Définir un mot de passe pour l'ouverture ou la modification.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le menu 'Insertion' est réservé à l'ajout d'objets (images, tableaux, liens), il ne gère pas la sécurité du fichier."
      },
      {
        "l": "C",
        "t": "Les propriétés du document (métadonnées) servent à décrire le fichier (auteur, mots-clés, titre) mais ne permettent pas de restreindre l'accès par mot de passe."
      },
      {
        "l": "D",
        "t": "Cette option est invalide car le logiciel propose nativement des fonctionnalités de chiffrement lors de la sauvegarde."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'utilisateur maîtrise les fonctionnalités de sécurité et les menus de gestion des fichiers plutôt que les outils d'édition de contenu.",
    "summary": [
      "La protection par mot de passe s'active lors de l'enregistrement du fichier.",
      "Les propriétés du document ne servent pas à définir des accès sécurisés.",
      "Il faut distinguer le menu Insertion des menus de configuration système/fichier.",
      "La sécurité logicielle est une fonctionnalité standard accessible via les options générales d'enregistrement."
    ]
  },
  {
    "num": "Q2",
    "partie": "Bureautique - Traitement de texte",
    "q": "Quels sont les types de formats de fichiers que Microsoft Word est capable d'enregistrer ?",
    "choices": {
      "A": "Les formats documents Word (.docx) et modèles de documents (.dotx) uniquement.",
      "B": "Les formats documents Word (.docx) et pages Web (.html) uniquement.",
      "C": "Une grande variété de types de fichiers (PDF, ODT, RTF, TXT, XML, etc.).",
      "D": "Le format d'image BMP exclusivement."
    },
    "correct": "C",
    "explanation": "<p>Microsoft Word est une application de traitement de texte polyvalente conçue pour être interopérable avec de nombreux formats.</p><ul><li><strong>Flexibilité</strong> : Outre ses formats natifs (.docx, .doc, .dotx), Word permet l'exportation et l'enregistrement dans des standards ouverts comme l'<strong>OpenDocument (.odt)</strong>.</li><li><strong>Formats d'échange</strong> : Il supporte également le <strong>PDF</strong> pour la distribution, le <strong>RTF</strong> pour la compatibilité entre logiciels, ainsi que le texte brut (.txt) et le format <strong>XML</strong>.</li><li><strong>Conclusion</strong> : Affirmer que Word est limité à un ou deux types de fichiers est inexact, car le logiciel propose une liste déroulante étendue dans sa fenêtre \"Enregistrer sous\".</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette réponse est trop restrictive ; Word ne limite pas ses options de sauvegarde à ses propres formats de modèles."
      },
      {
        "l": "B",
        "t": "Bien que Word puisse enregistrer en page Web, cette option n'est pas la seule disponible."
      },
      {
        "l": "D",
        "t": "Le format BMP est un format d'image matricielle et non un format de traitement de texte supporté par Word pour l'enregistrement de documents."
      }
    ],
    "examiner": "Évaluer la connaissance de l'utilisateur sur les fonctionnalités d'exportation et la polyvalence logicielle de Microsoft Word.",
    "summary": [
      "Microsoft Word supporte une large gamme de formats de fichiers pour l'enregistrement.",
      "Les formats natifs incluent .docx, .doc et les modèles .dotx.",
      "Le logiciel permet l'exportation vers des standards comme le PDF et l'OpenDocument (ODT).",
      "La polyvalence des formats est essentielle pour assurer la compatibilité entre différents systèmes et logiciels."
    ]
  },
  {
    "num": "Q3",
    "partie": "Bureautique - Traitement de texte",
    "q": "Dans le cadre de la réalisation d'un publipostage avec Microsoft Word, laquelle de ces combinaisons source de données est techniquement impossible ou non conventionnelle pour effectuer cette opération ?",
    "choices": {
      "A": "Document Word utilisé comme lettre type et base de données Publisher",
      "B": "Document Word utilisé comme lettre type et base de données Excel",
      "C": "Document Word utilisé comme lettre type et fichier Word (tableau ou liste)",
      "D": "Document Word utilisé comme lettre type et base de données Access"
    },
    "correct": "A",
    "explanation": "<p>Le processus de publipostage de Microsoft Word nécessite une source de données structurée contenant des enregistrements et des champs (colonnes). Si <strong>Excel</strong> (tableur), <strong>Word</strong> (tableaux ou listes) et <strong>Access</strong> (base de données relationnelle) sont des formats de fichiers nativement supportés par l'assistant de publipostage, ce n'est pas le cas de <strong>Publisher</strong>.</p><p>Publisher est un logiciel de PAO (Publication Assistée par Ordinateur) destiné à la mise en page de documents graphiques. Il ne gère pas de structures de données exploitables par l'outil de fusion et publipostage de Word.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Excel est la source de données la plus courante et la plus recommandée pour un publipostage grâce à sa structure tabulaire claire."
      },
      {
        "l": "C",
        "t": "Word accepte parfaitement un document Word contenant un tableau comme source de données pour le publipostage."
      },
      {
        "l": "D",
        "t": "Access est une base de données professionnelle nativement compatible avec le processus de fusion de Word."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance des formats de fichiers compatibles avec l'outil de fusion et publipostage de la suite Microsoft Office.",
    "summary": [
      "Le publipostage Word nécessite une source de données structurée.",
      "Excel, Word et Access sont les formats standards de données compatibles.",
      "Publisher est un logiciel de mise en page et non une base de données.",
      "Il est impossible d'utiliser directement un fichier .pub comme source pour une fusion Word."
    ]
  },
  {
    "num": "Q4",
    "partie": "Bureautique - Traitement de texte",
    "q": "L'interface utilisateur de Microsoft Word est-elle personnalisable ?",
    "choices": {
      "A": "Elle n'est pas personnalisable.",
      "B": "Elle est personnalisable.",
      "C": "Elle est reprogrammable.",
      "D": "Elle est inutilisable."
    },
    "correct": "B",
    "explanation": "<p>L'interface de Microsoft Word est conçue pour être flexible. L'utilisateur peut <strong>personnaliser la barre d'outils Accès rapide</strong>, ajouter ou supprimer des onglets dans le ruban, et modifier les groupes de commandes selon ses besoins de productivité.</p><ul><li>La personnalisation permet d'accéder rapidement aux fonctions les plus utilisées.</li><li>Il ne faut pas confondre \"personnalisation\" (configuration de l'interface) et \"reprogrammation\" (modification du code source du logiciel).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est incorrect car Word offre de nombreuses options de personnalisation de son interface."
      },
      {
        "l": "C",
        "t": "C'est un abus de langage : l'interface est personnalisable, mais l'utilisateur ne 'reprogramme' pas le logiciel lui-même."
      },
      {
        "l": "D",
        "t": "C'est une réponse absurde, car Word est l'un des logiciels de traitement de texte les plus utilisés au monde."
      }
    ],
    "examiner": "Évaluer si l'utilisateur connaît les fonctionnalités de flexibilité et de configuration de l'environnement de travail dans Microsoft Word.",
    "summary": [
      "L'interface de Word est hautement configurable pour s'adapter aux besoins de l'utilisateur.",
      "La barre d'outils 'Accès rapide' est le principal élément personnalisable pour gagner du temps.",
      "Le ruban peut également être réorganisé ou complété par des onglets personnalisés.",
      "La personnalisation améliore significativement l'efficacité rédactionnelle au quotidien."
    ]
  }
];
