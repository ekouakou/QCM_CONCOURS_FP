const QCM = [
  {
    "num": "Q1",
    "partie": "Bureautique",
    "q": "Dans Microsoft Word, quel est le nom du modèle global par défaut qui contient les paramètres de mise en forme par défaut pour chaque nouveau document ?",
    "choices": {
      "A": "Global.dot",
      "B": "Word.dot",
      "C": "Aucun modèle par défaut",
      "D": "Normal.dot"
    },
    "correct": "D",
    "explanation": "<p>Dans Microsoft Word, le fichier <strong>Normal.dot</strong> (ou <strong>Normal.dotm</strong> dans les versions récentes) est le modèle global par défaut. Il stocke les personnalisations, les styles, les macros et les paramètres de mise en page qui sont appliqués automatiquement à chaque nouveau document créé.</p><ul><li>Lorsqu'un utilisateur modifie les polices, les marges ou les styles par défaut, ces changements sont enregistrés dans ce fichier.</li><li>Si ce fichier est supprimé ou corrompu, Word le recrée automatiquement au prochain lancement avec ses paramètres d'usine.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Global.dot n'est pas le nom standard du modèle par défaut de Microsoft Word."
      },
      {
        "l": "B",
        "t": "Word.dot n'existe pas en tant que modèle système par défaut dans l'architecture de Microsoft Word."
      },
      {
        "l": "C",
        "t": "Word ne peut pas fonctionner sans un modèle de base ; il s'appuie systématiquement sur le fichier Normal."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance de l'utilisateur sur l'architecture des fichiers de configuration de Microsoft Word et la gestion des modèles de documents.",
    "summary": [
      "Le fichier Normal.dot (ou .dotm) est le modèle de base de Microsoft Word.",
      "Il contient toutes les configurations par défaut appliquées aux nouveaux documents.",
      "Toute modification globale des styles s'enregistre dans ce fichier.",
      "Word recrée automatiquement ce fichier s'il est absent lors du démarrage."
    ]
  }
];
