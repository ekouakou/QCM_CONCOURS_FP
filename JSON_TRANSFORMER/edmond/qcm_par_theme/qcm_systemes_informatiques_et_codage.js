const QCM = [
  {
    "num": "Q1",
    "partie": "Systèmes informatiques et Codage",
    "q": "Le code ASCII (American Standard Code for Information Interchange) peut être défini comme une table de correspondance entre quels éléments ?",
    "choices": {
      "A": "Une valeur et son adresse mémoire associée.",
      "B": "Un caractère typographique et sa valeur numérique unique.",
      "C": "Un nombre réel et son inverse mathématique.",
      "D": "Une adresse mémoire et son contenu binaire."
    },
    "correct": "B",
    "explanation": "<p>Le <strong>code ASCII</strong> est un standard de codage informatique qui permet de représenter des caractères (lettres, chiffres, symboles de ponctuation, caractères de contrôle) sous forme de valeurs numériques.</p><ul><li>Chaque caractère se voit attribuer un nombre entier unique compris entre 0 et 127 (pour l'ASCII standard).</li><li>Par exemple, la lettre 'A' majuscule est représentée par la valeur 65.</li><li>Ce système permet aux ordinateurs de manipuler du texte en traitant des nombres binaires.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le code ASCII n'a aucun rapport avec l'adressage mémoire ; une adresse est un pointeur vers un emplacement en RAM."
      },
      {
        "l": "C",
        "t": "Il s'agit d'une confusion avec des opérations mathématiques ou arithmétiques. L'ASCII est un système de codage de caractères, non de calcul numérique."
      },
      {
        "l": "D",
        "t": "L'association entre une adresse mémoire et un contenu est le principe même du fonctionnement de la mémoire vive (RAM), mais ce n'est pas le rôle de l'ASCII."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension fondamentale de la représentation des données en informatique et la définition précise du codage des caractères.",
    "summary": [
      "Le code ASCII est une norme de codage de caractères pour le traitement de l'information.",
      "Il établit une correspondance bijective entre un caractère et un code numérique (entier).",
      "L'ASCII standard utilise des valeurs allant de 0 à 127, codées sur 7 bits.",
      "Ce codage est essentiel pour permettre la communication textuelle entre les différents composants d'un système informatique."
    ]
  },
  {
    "num": "Q2",
    "partie": "Systèmes informatiques et Codage",
    "q": "Quelle est la valeur du nombre binaire '1001' exprimée en système hexadécimal ?",
    "choices": {
      "A": "9",
      "B": "1A",
      "C": "F4",
      "D": "F3"
    },
    "correct": "A",
    "explanation": "<p>Pour convertir un nombre binaire en hexadécimal, il faut suivre les étapes suivantes :</p><ul><li>Le nombre binaire donné est <strong>1001</strong>.</li><li>En base 2, ce nombre correspond au calcul : (1 × 2³) + (0 × 2²) + (0 × 2¹) + (1 × 2⁰) = 8 + 0 + 0 + 1 = <strong>9</strong>.</li><li>Le système hexadécimal utilise les chiffres de 0 à 9 suivis des lettres A à F pour représenter les valeurs de 10 à 15.</li><li>Comme le résultat obtenu est 9, sa représentation en hexadécimal est strictement identique : <strong>9</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le choix '1A' est incorrect car il représente une valeur décimale de 26, ce qui est bien supérieur à 9."
      },
      {
        "l": "C",
        "t": "Le choix 'F4' est incorrect, il s'agit d'une valeur hexadécimale beaucoup plus grande (244 en décimal)."
      },
      {
        "l": "D",
        "t": "Le choix 'F3' est incorrect, il correspond à la valeur décimale 243."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension des systèmes de numération (binaire vers hexadécimal) et la capacité du candidat à effectuer des conversions simples entre bases.",
    "summary": [
      "Le système hexadécimal est une base 16 utilisant les symboles 0-9 et A-F.",
      "La conversion d'un binaire 4 bits vers hexadécimal se fait directement en calculant sa valeur décimale.",
      "Le nombre binaire 1001 correspond à 9 en décimal et reste 9 en hexadécimal.",
      "Il est crucial de ne pas confondre la notation hexadécimale avec d'autres bases plus complexes."
    ]
  }
];
