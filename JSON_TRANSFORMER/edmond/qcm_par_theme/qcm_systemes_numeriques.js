const QCM = [
  {
    "num": "Q1",
    "partie": "Systèmes numériques",
    "q": "Quel est le résultat de l'addition binaire de 0011 et 1001 ?",
    "choices": {
      "A": "1100",
      "B": "111001",
      "C": "1110",
      "D": "11101"
    },
    "correct": "A",
    "explanation": "<p>Pour effectuer l'addition binaire <strong>0011 + 1001</strong>, nous alignons les chiffres et procédons colonne par colonne de droite à gauche :</p><ul><li>Colonne 1 (droite) : 1 + 1 = 10 (on pose 0, on retient 1)</li><li>Colonne 2 : 1 + 0 + 1 (retenue) = 10 (on pose 0, on retient 1)</li><li>Colonne 3 : 0 + 0 + 1 (retenue) = 1</li><li>Colonne 4 (gauche) : 0 + 1 = 1</li></ul><p>Le résultat final est donc <strong>1100</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Ce résultat est une concaténation erronée des chaînes et non une opération arithmétique."
      },
      {
        "l": "C",
        "t": "Cette réponse correspond à une erreur de retenue dans la deuxième colonne."
      },
      {
        "l": "D",
        "t": "Cette valeur est totalement incohérente avec l'addition binaire sur 4 bits."
      }
    ],
    "examiner": "Évaluer la maîtrise des opérations arithmétiques de base en système binaire et la gestion des retenues.",
    "summary": [
      "L'addition binaire suit les mêmes règles que l'addition décimale, mais avec une base 2.",
      "La règle fondamentale est 1 + 1 = 10 en binaire (0 avec une retenue de 1).",
      "Il est essentiel de bien aligner les bits pour ne pas oublier la gestion des retenues successives.",
      "La vérification peut se faire en convertissant les nombres en décimal (3 + 9 = 12, ce qui donne 1100 en binaire)."
    ]
  },
  {
    "num": "Q2",
    "partie": "Systèmes numériques",
    "q": "Quelle est l'unité d'information fondamentale en informatique ?",
    "choices": {
      "A": "Le bit",
      "B": "L'octet",
      "C": "Le binaire",
      "D": "Le byte"
    },
    "correct": "A",
    "explanation": "<p>En informatique, le <strong>bit</strong> (abréviation de <em>binary digit</em>) est l'unité élémentaire d'information.</p><p>Il ne peut prendre que deux valeurs distinctes : <strong>0</strong> ou <strong>1</strong>. Toutes les données traitées par un ordinateur (nombres, textes, images, sons) sont finalement représentées par une combinaison de ces bits.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'octet est composé de 8 bits. C'est une unité de mesure de stockage plus grande, pas l'unité fondamentale."
      },
      {
        "l": "C",
        "t": "Le binaire est un système de numération (base 2), et non une unité d'information."
      },
      {
        "l": "D",
        "t": "Le terme 'byte' est la traduction anglaise du mot 'octet'. Il désigne également un regroupement de 8 bits."
      }
    ],
    "examiner": "Vérifier si le candidat distingue l'unité de base indivisible (le bit) des unités dérivées (l'octet) et comprend les concepts de base du système binaire.",
    "summary": [
      "Le bit est la plus petite unité d'information en informatique.",
      "Un bit possède deux états : 0 ou 1.",
      "L'octet (byte) est une unité composée de 8 bits.",
      "Le système binaire est la base de représentation numérique utilisée par les processeurs."
    ]
  }
];
