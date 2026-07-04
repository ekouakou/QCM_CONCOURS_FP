const QCM = [
  {
    "num": "Q1",
    "partie": "Développement Web - CSS",
    "q": "Quelle est la syntaxe correcte pour insérer un commentaire dans un fichier de feuille de style CSS ?",
    "choices": {
      "A": "' ceci est un commentaire",
      "B": "<!-- ceci est un commentaire -->",
      "C": "// ceci est un commentaire //",
      "D": "/* ceci est un commentaire */"
    },
    "correct": "D",
    "explanation": "<p>En CSS, les commentaires servent à annoter le code sans qu'ils soient interprétés par le navigateur. La syntaxe normalisée est <strong>/* contenu du commentaire */</strong>.</p><ul><li>Les commentaires peuvent s'étendre sur une ou plusieurs lignes.</li><li>Ils ne peuvent pas être imbriqués.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'utilisation de guillemets simples est incorrecte en CSS pour les commentaires."
      },
      {
        "l": "B",
        "t": "Cette syntaxe est utilisée pour les commentaires en HTML, et non en CSS."
      },
      {
        "l": "C",
        "t": "La double barre oblique est la syntaxe standard pour les commentaires sur une ligne en JavaScript, Java ou C++, mais elle n'est pas supportée nativement par CSS."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance précise de la syntaxe de base des langages du Web et la distinction entre les syntaxes de commentaires HTML, JS et CSS.",
    "summary": [
      "Les commentaires CSS utilisent exclusivement la syntaxe /* commentaire */.",
      "Le contenu placé entre les balises de commentaires est ignoré par les navigateurs.",
      "Il est impossible d'imbriquer des commentaires CSS les uns dans les autres.",
      "La syntaxe CSS est différente des commentaires HTML (<!-- -->) et des commentaires de style C (//)."
    ]
  },
  {
    "num": "Q2",
    "partie": "Développement Web - CSS",
    "q": "Que signifie l'acronyme CSS dans le contexte du développement web ?",
    "choices": {
      "A": "Computer Style Sheets",
      "B": "Cascading Style Sheets",
      "C": "Creative Style Sheets",
      "D": "Creating Style Sheets"
    },
    "correct": "B",
    "explanation": "<p><strong>CSS</strong> signifie <strong>Cascading Style Sheets</strong> (Feuilles de style en cascade). Ce langage est utilisé pour décrire la présentation, la mise en forme et la mise en page des documents HTML ou XML.</p><p>Le terme <strong>\"Cascading\"</strong> (cascade) fait référence à la manière dont le navigateur applique les styles selon une hiérarchie de priorités (spécificité, héritage, ordre d'apparition).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est un terme générique incorrect qui ne reflète pas la nature hiérarchique du langage."
      },
      {
        "l": "C",
        "t": "C'est une confusion fréquente basée sur l'idée que le CSS sert à la création visuelle, mais le terme 'Creative' n'est pas l'acronyme officiel."
      },
      {
        "l": "D",
        "t": "Bien que le CSS serve à créer des styles, le terme exact est 'Cascading' pour désigner le système de priorité des règles."
      }
    ],
    "examiner": "Vérifier la connaissance fondamentale des bases du développement web et de la terminologie technique standard.",
    "summary": [
      "CSS est l'acronyme de Cascading Style Sheets.",
      "Il est essentiel pour la séparation du contenu (HTML) et de la présentation (CSS).",
      "Le terme 'Cascading' définit le mécanisme de priorité d'application des styles.",
      "C'est la technologie standard utilisée pour le design sur le web."
    ]
  }
];
