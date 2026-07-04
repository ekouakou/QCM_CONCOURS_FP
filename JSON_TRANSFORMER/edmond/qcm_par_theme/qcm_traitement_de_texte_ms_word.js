const QCM = [
  {
    "num": "Q1",
    "partie": "Traitement de texte MS-Word",
    "q": "Comment protéger un document Microsoft Word par un mot de passe ?",
    "choices": {
      "A": "Avec la commande \"Mot de passe\" située dans le menu Insertion.",
      "B": "En renseignant un mot de passe dans les options générales d'enregistrement du document.",
      "C": "En saisissant le mot de passe dans les propriétés avancées du document.",
      "D": "Aucune de ces options ne permet de protéger un document."
    },
    "correct": "B",
    "explanation": "<p>Pour protéger un document Word contre l'ouverture non autorisée, il est nécessaire d'accéder aux <strong>options de sécurité</strong> lors de l'enregistrement ou via les informations du document.</p><p>La procédure standard consiste à :</p><ul><li>Aller dans <strong>Fichier</strong> > <strong>Enregistrer sous</strong>.</li><li>Choisir le dossier de destination pour ouvrir la boîte de dialogue.</li><li>Cliquer sur le menu déroulant <strong>Outils</strong> (en bas de la fenêtre) puis sélectionner <strong>Options générales</strong>.</li><li>Saisir un <em>mot de passe pour l'ouverture</em>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le menu Insertion est dédié à l'ajout d'objets (images, tableaux, liens). Il ne contient aucune fonctionnalité liée à la sécurité."
      },
      {
        "l": "C",
        "t": "Bien que les propriétés du document permettent de gérer les métadonnées (auteur, titre, tags), elles ne permettent pas de définir des mots de passe de chiffrement."
      },
      {
        "l": "D",
        "t": "Cette option est incorrecte car Word propose nativement des options de chiffrement robustes pour sécuriser les fichiers."
      }
    ],
    "examiner": "Évaluer la maîtrise de l'utilisateur sur les fonctionnalités de sécurité et de gestion des fichiers dans l'environnement Microsoft Word.",
    "summary": [
      "La protection d'un document Word s'effectue via les options de chiffrement.",
      "Le réglage se trouve généralement dans la fenêtre 'Enregistrer sous' via le bouton 'Outils'.",
      "Il est possible de distinguer un mot de passe pour l'ouverture d'un mot de passe pour la modification.",
      "Ces options garantissent la confidentialité des données stockées dans le fichier .docx."
    ]
  },
  {
    "num": "Q2",
    "partie": "Traitement de texte MS-Word",
    "q": "Quelle barre d'outils doit être activée pour insérer ou tracer manuellement une zone de texte dans un document ?",
    "choices": {
      "A": "Image",
      "B": "Graphique",
      "C": "Formulaire",
      "D": "Dessin"
    },
    "correct": "D",
    "explanation": "<p>Dans les versions classiques de Microsoft Word, la création d'objets graphiques, y compris les zones de texte tracées manuellement, dépend de la barre d'outils <strong>Dessin</strong> (ou du groupe 'Illustrations' dans les versions modernes du ruban).</p><ul><li>La barre <strong>Dessin</strong> contient les outils de forme, les lignes et les zones de texte.</li><li>Les barres <em>Image</em> ou <em>Graphique</em> sont dédiées à la manipulation d'objets déjà insérés ou au formatage spécifique de ces derniers, et non à l'insertion de nouveaux conteneurs de texte.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La barre 'Image' sert à modifier les propriétés des images insérées (luminosité, rognage, habillage), elle n'offre pas d'outils de création de formes ou de zones de texte."
      },
      {
        "l": "B",
        "t": "La barre 'Graphique' est contextuelle et ne s'affiche que pour éditer des données ou la mise en forme d'un graphique existant."
      },
      {
        "l": "C",
        "t": "La barre 'Formulaire' est utilisée pour insérer des champs interactifs (cases à cocher, listes déroulantes) et non pour des zones de texte libres."
      }
    ],
    "examiner": "Évaluer la connaissance de l'interface et des outils de création graphique au sein d'un traitement de texte.",
    "summary": [
      "La barre d'outils 'Dessin' est indispensable pour manipuler les formes et les zones de texte.",
      "Une zone de texte est considérée comme un objet graphique dans Word.",
      "L'insertion d'objets graphiques ne dépend pas des outils dédiés aux images ou aux données chiffrées.",
      "Connaître l'emplacement des outils est essentiel pour une mise en page flexible et personnalisée."
    ]
  },
  {
    "num": "Q3",
    "partie": "Traitement de texte MS-Word",
    "q": "Quels sont les formats de fichiers pris en charge par Microsoft Word pour l'enregistrement d'un document ?",
    "choices": {
      "A": "Uniquement les formats de documents Word (.docx) et les modèles de documents (.dotx).",
      "B": "Uniquement les formats de documents Word (.docx) et les pages Web (.html).",
      "C": "Une grande variété de types de fichiers, incluant des formats texte, PDF, Web et d'échange de données.",
      "D": "Uniquement les formats d'image tels que BMP."
    },
    "correct": "C",
    "explanation": "<p>Microsoft Word est conçu pour être polyvalent. Bien que le format natif soit <strong>.docx</strong>, l'application permet d'enregistrer des documents dans de nombreux formats tiers pour garantir l'interopérabilité.</p><ul><li><strong>Formats texte :</strong> .txt, .rtf, .odt (OpenDocument).</li><li><strong>Formats de partage :</strong> .pdf, .xps.</li><li><strong>Formats Web :</strong> .html, .mht.</li><li><strong>Formats d'échange :</strong> XML, CSV (parfois via publipostage), etc.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est une vision trop restrictive ; Word ne se limite pas à ses propres formats de travail."
      },
      {
        "l": "B",
        "t": "Bien que Word puisse exporter en HTML, il propose bien plus d'options que les seuls formats Word et Web."
      },
      {
        "l": "D",
        "t": "Le format BMP est un format d'image matricielle. Bien que Word puisse insérer des images, il ne s'agit pas d'un format d'enregistrement de document textuel."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'utilisateur comprend la polyvalence de Microsoft Word en tant qu'outil de traitement de texte moderne capable d'interagir avec divers écosystèmes logiciels.",
    "summary": [
      "Microsoft Word supporte une large gamme de formats de fichiers au-delà du format natif .docx.",
      "L'exportation vers des formats comme le PDF ou l'OpenDocument (.odt) est native et courante.",
      "La flexibilité des formats permet de garantir la compatibilité avec d'autres logiciels de bureautique.",
      "Il est important de distinguer le format de travail (.docx) des formats d'exportation ou d'échange."
    ]
  },
  {
    "num": "Q4",
    "partie": "Traitement de texte MS-Word",
    "q": "Quelle est la capacité de personnalisation de l'interface utilisateur dans Microsoft Word ?",
    "choices": {
      "A": "Elle n'est pas personnalisable.",
      "B": "Elle est personnalisable.",
      "C": "Elle est entièrement reprogrammable.",
      "D": "Elle est inutilisable."
    },
    "correct": "B",
    "explanation": "<p>Microsoft Word est conçu pour offrir une grande flexibilité à ses utilisateurs. L'interface, notamment le <strong>Ruban</strong> et la <strong>Barre d'outils Accès rapide</strong>, est entièrement personnalisable pour s'adapter aux besoins spécifiques de l'utilisateur.</p><ul><li>Vous pouvez ajouter, supprimer ou réorganiser les onglets et les commandes du ruban.</li><li>La barre d'outils Accès rapide peut être modifiée pour contenir les fonctions les plus fréquemment utilisées.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette affirmation est fausse car Word propose nativement de nombreuses options de configuration pour l'interface."
      },
      {
        "l": "C",
        "t": "Si l'interface est personnalisable, le terme 'reprogrammable' est inapproprié dans ce contexte, car il suggère une modification du code source du logiciel, ce qui n'est pas le cas."
      },
      {
        "l": "D",
        "t": "Cette option est manifestement fausse, car Microsoft Word est l'un des traitements de texte les plus utilisés au monde."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si l'apprenant connaît les fonctionnalités de base de configuration et d'ergonomie de l'environnement de travail de Microsoft Word.",
    "summary": [
      "L'interface de Microsoft Word est hautement configurable.",
      "L'utilisateur peut modifier le Ruban pour afficher ses outils préférés.",
      "La barre d'outils Accès rapide permet un gain de productivité significatif.",
      "La personnalisation permet d'adapter l'outil à son propre flux de travail."
    ]
  },
  {
    "num": "Q5",
    "partie": "Traitement de texte MS-Word",
    "q": "Dans le cadre d'un publipostage réalisé avec Microsoft Word, laquelle de ces combinaisons de sources de données n'est pas techniquement supportée ?",
    "choices": {
      "A": "Lettre type Word et base de données Publisher",
      "B": "Lettre type Word et base de données Excel",
      "C": "Lettre type Word et base de données Word",
      "D": "Lettre type Word et base de données Access"
    },
    "correct": "A",
    "explanation": "<p>Le processus de publipostage dans <strong>Microsoft Word</strong> nécessite une source de données structurée contenant les informations des destinataires.</p><ul><li><strong>Excel</strong>, <strong>Access</strong> et les fichiers <strong>Word</strong> (tableaux ou documents de données) sont des formats de données tabulaires reconnus nativement par l'assistant de publipostage.</li><li><strong>Microsoft Publisher</strong> est un logiciel de mise en page et de publication assistée par ordinateur (PAO). Bien qu'il puisse générer ses propres publipostages, il n'est pas conçu pour servir de « base de données » source pour un document Word.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Excel est la source de données la plus couramment utilisée et parfaitement supportée par Word pour le publipostage."
      },
      {
        "l": "C",
        "t": "Un document Word contenant un tableau peut tout à fait servir de base de données pour un publipostage."
      },
      {
        "l": "D",
        "t": "Access est un gestionnaire de bases de données relationnelles dont les tables sont nativement compatibles avec l'outil de publipostage de Word."
      }
    ],
    "examiner": "Évaluer la connaissance des sources de données compatibles avec les outils de bureautique Microsoft Office.",
    "summary": [
      "Le publipostage Word nécessite une source de données structurée.",
      "Les formats Excel, Access et Word (tableaux) sont les sources standards.",
      "Publisher est un logiciel de mise en page, pas une base de données de publipostage.",
      "Une bonne connaissance des compatibilités inter-logiciels est essentielle pour une utilisation efficace de la suite Office."
    ]
  },
  {
    "num": "Q6",
    "partie": "Traitement de texte MS-Word",
    "q": "Parmi les versions suivantes de la suite bureautique Microsoft Office, laquelle n'a jamais existé ?",
    "choices": {
      "A": "Office 2000",
      "B": "Office 2006",
      "C": "Office 2007",
      "D": "Office 2010"
    },
    "correct": "B",
    "explanation": "<p>La suite Microsoft Office suit un cycle de publication spécifique basé sur des années de sortie bien définies. <strong>Office 2006</strong> n'a jamais été commercialisé par Microsoft.</p><ul><li><strong>Office 2000</strong> a succédé à Office 97.</li><li><strong>Office 2007</strong> a marqué un tournant majeur avec l'introduction de l'interface Ruban.</li><li><strong>Office 2010</strong> est la version ayant suivi la version 2007.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Office 2000 est une version authentique sortie en 1999."
      },
      {
        "l": "C",
        "t": "Office 2007 est une version authentique, célèbre pour l'introduction du format .docx."
      },
      {
        "l": "D",
        "t": "Office 2010 est une version authentique largement déployée en entreprise."
      }
    ],
    "examiner": "Évaluer la connaissance historique des différentes versions de la suite Microsoft Office et la capacité à identifier une information erronée.",
    "summary": [
      "Microsoft ne sort pas une version d'Office chaque année.",
      "La version 2006 n'existe pas dans le calendrier officiel des sorties Microsoft Office.",
      "Il est important de connaître la chronologie des versions pour éviter les erreurs de compatibilité.",
      "L'interface moderne des versions Office a réellement débuté avec l'édition 2007."
    ]
  }
];
