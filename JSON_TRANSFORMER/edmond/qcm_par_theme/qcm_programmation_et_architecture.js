const QCM = [
  {
    "num": "Q1",
    "partie": "Programmation et Architecture",
    "q": "Comment nomme-t-on, en programmation, une variable dont la valeur correspond à l'adresse mémoire d'une autre variable ?",
    "choices": {
      "A": "Un variant",
      "B": "Une référence",
      "C": "Un pointeur",
      "D": "Une variante"
    },
    "correct": "C",
    "explanation": "<p>En programmation, notamment en C ou C++, un <strong>pointeur</strong> est une variable spécifique qui stocke l'adresse mémoire d'un autre emplacement de données.</p><ul><li>Il permet une manipulation directe de la mémoire.</li><li>Il est essentiel pour la gestion dynamique de la mémoire et les structures de données complexes (listes chaînées, arbres).</li><li>La valeur stockée dans le pointeur n'est pas la donnée elle-même, mais son emplacement (adresse) dans la RAM.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'variant' est souvent utilisé dans certains langages (comme le VBA) pour désigner un type de donnée capable de contenir différents types de valeurs, mais ce n'est pas une adresse mémoire."
      },
      {
        "l": "B",
        "t": "Bien qu'une référence soit un alias pour une autre variable, elle ne stocke pas explicitement une adresse mémoire comme un pointeur et ne peut généralement pas être réassignée."
      },
      {
        "l": "D",
        "t": "Le terme 'variante' n'est pas un concept standard de programmation pour désigner un type de variable ; c'est un mot du langage courant."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la maîtrise des concepts fondamentaux de gestion de la mémoire et la distinction entre les différents types de variables.",
    "summary": [
      "Un pointeur est une variable qui contient l'adresse mémoire d'une autre variable.",
      "Les pointeurs permettent l'accès direct et la manipulation de la mémoire.",
      "Ils diffèrent des références qui servent d'alias sans accès direct à l'adresse mémoire.",
      "Comprendre les pointeurs est crucial pour maîtriser des langages bas niveau comme le C et le C++."
    ]
  },
  {
    "num": "Q2",
    "partie": "Programmation et Architecture",
    "q": "Quelle est l'unité d'information fondamentale utilisée en informatique ?",
    "choices": {
      "A": "Le bit",
      "B": "L’octet",
      "C": "Le binaire",
      "D": "Le byte"
    },
    "correct": "A",
    "explanation": "<p>En informatique, l'unité d'information fondamentale est le <strong>bit</strong> (abréviation de <em>binary digit</em>). Il s'agit de la plus petite unité de donnée pouvant être représentée, prenant soit la valeur <strong>0</strong>, soit la valeur <strong>1</strong>.</p><ul><li>Le bit représente un état logique ou une tension électrique (basse ou haute).</li><li>C'est à partir de cette unité que se construisent les autres unités de mesure, telles que l'octet.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'octet est composé de 8 bits. C'est une unité de stockage standard pour les caractères, mais pas l'unité fondamentale indivisible."
      },
      {
        "l": "C",
        "t": "Le binaire est un système de numération (en base 2) et non une unité de mesure d'information."
      },
      {
        "l": "D",
        "t": "Le terme 'byte' est l'équivalent anglais de l'octet. Il désigne un regroupement de 8 bits."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension des concepts de base de la théorie de l'information et la distinction entre l'unité élémentaire (bit) et l'unité de stockage courante (octet).",
    "summary": [
      "Le bit est l'unité d'information la plus élémentaire en informatique.",
      "Un bit ne peut prendre que deux valeurs : 0 ou 1.",
      "Un octet est constitué d'un groupe de 8 bits.",
      "Le système binaire est la méthode de codage utilisant les bits pour représenter des données complexes."
    ]
  }
];
