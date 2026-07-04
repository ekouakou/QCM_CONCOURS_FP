const QCM = [
  {
    "num": "Q1",
    "partie": "Programmation et Architecture logicielle",
    "q": "Laquelle des affirmations suivantes concernant les fonctions en programmation est correcte ?",
    "choices": {
      "A": "Une fonction ne peut pas être appelée dans une instruction.",
      "B": "Une fonction ne peut pas être déclarée sans paramètres.",
      "C": "Une fonction peut être déclarée dans une unité.",
      "D": "Une fonction doit renvoyer plusieurs résultats."
    },
    "correct": "C",
    "explanation": "<p>Dans la plupart des langages de programmation (comme Pascal, Delphi ou Ada), une <strong>unité</strong> (ou module) permet de regrouper des déclarations de types, de variables, de procédures et de <strong>fonctions</strong> afin de structurer le code et faciliter sa réutilisation.</p><ul><li>Les fonctions peuvent être appelées au sein d'instructions (expressions).</li><li>Les fonctions peuvent être déclarées sans paramètres (ex: <code>function calculer(): integer;</code>).</li><li>Une fonction retourne généralement une valeur unique, bien qu'elle puisse retourner des structures complexes ou utiliser des paramètres de sortie.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Faux. L'appel d'une fonction est une opération courante au sein d'une expression ou d'une instruction, par exemple pour affecter une valeur à une variable."
      },
      {
        "l": "B",
        "t": "Faux. Il est tout à fait possible de définir une fonction sans aucun paramètre d'entrée."
      },
      {
        "l": "D",
        "t": "Faux. Par définition, une fonction est conçue pour retourner une valeur unique, bien que cette valeur puisse être un objet ou un tableau regroupant plusieurs données."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de la programmation modulaire et de la structure des fonctions.",
    "summary": [
      "Une fonction est un bloc de code réutilisable pouvant être déclaré au sein d'unités ou de modules.",
      "L'utilisation de paramètres est facultative lors de la déclaration d'une fonction.",
      "Les fonctions peuvent être appelées directement dans des expressions complexes.",
      "Le rôle principal d'une fonction est de retourner une valeur unique."
    ]
  },
  {
    "num": "Q2",
    "partie": "Programmation et Architecture logicielle",
    "q": "Dans la structure d'un programme, quelle est la position recommandée pour déclarer une procédure sans paramètre par rapport aux variables globales ?",
    "choices": {
      "A": "Avant les variables globales",
      "B": "Entre les variables globales",
      "C": "Après les variables globales",
      "D": "Au début et à la fin de chaque bloc de variables globales"
    },
    "correct": "C",
    "explanation": "<p>Dans la plupart des langages de programmation structurés (comme le Pascal ou des variantes procédurales), les règles de portée et de visibilité imposent une hiérarchie dans la déclaration des éléments.</p><ul><li><strong>Déclaration des variables globales</strong> : Elles sont définies en premier pour être accessibles dans tout le périmètre du programme.</li><li><strong>Déclaration des procédures/fonctions</strong> : Elles sont placées <strong>après</strong> les variables globales afin qu'elles puissent référencer ces variables au moment de leur propre compilation.</li><li>Placer les procédures après permet d'assurer que l'environnement global est déjà défini et alloué avant que le corps des sous-programmes ne tente d'y accéder.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Placer les procédures avant les variables globales rendrait les variables invisibles pour le corps de la procédure, provoquant une erreur de compilation."
      },
      {
        "l": "B",
        "t": "Insérer des procédures entre les variables globales fragmente la zone de déclaration et nuit à la lisibilité et à la cohérence du code."
      },
      {
        "l": "D",
        "t": "Ceci n'est pas une syntaxe standard, cela entraînerait une redéfinition invalide et une confusion majeure pour le compilateur."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de l'ordre de déclaration et des règles de portée des identifiants dans les langages procéduraux.",
    "summary": [
      "Les variables globales doivent être déclarées avant les sous-programmes.",
      "L'ordre de déclaration respecte le principe de dépendance et de visibilité.",
      "Placer les procédures après les variables globales garantit qu'elles peuvent manipuler les données globales sans erreur.",
      "Une structure de code claire facilite la maintenance et la compréhension du flux de compilation."
    ]
  },
  {
    "num": "Q3",
    "partie": "Programmation et Architecture logicielle",
    "q": "Quelle est la caractéristique principale des variables locales déclarées au sein d'un sous-programme ?",
    "choices": {
      "A": "Temporaires",
      "B": "Protégées en écriture",
      "C": "Globales",
      "D": "Permanentes"
    },
    "correct": "A",
    "explanation": "<p>Dans la majorité des langages de programmation, les <strong>variables locales</strong> sont créées au moment de l'appel du sous-programme (généralement sur la <em>pile d'exécution</em> ou <em>stack</em>) et sont détruites dès que le sous-programme termine son exécution.</p><ul><li>Elles ont une <strong>durée de vie limitée</strong> à l'exécution de la fonction.</li><li>Elles ne sont pas accessibles en dehors du sous-programme où elles ont été déclarées.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Les variables locales sont généralement modifiables (écriture permise), sauf si elles sont explicitement déclarées comme constantes (ex: 'const' ou 'final')."
      },
      {
        "l": "C",
        "t": "Par définition, une variable locale est l'opposé d'une variable globale : elle n'est pas accessible par l'ensemble du programme."
      },
      {
        "l": "D",
        "t": "La permanence est une caractéristique des variables globales ou des variables statiques, dont la valeur est conservée entre deux appels de fonction."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension des concepts de portée (scope) et de durée de vie (lifetime) des variables en mémoire.",
    "summary": [
      "Les variables locales existent uniquement pendant l'exécution du sous-programme.",
      "Elles sont allouées sur la pile (stack) et détruites à la sortie de la fonction.",
      "La portée d'une variable locale est strictement limitée à son bloc de déclaration.",
      "Elles permettent d'éviter les effets de bord en isolant les données nécessaires à un traitement spécifique."
    ]
  },
  {
    "num": "Q4",
    "partie": "Programmation et Architecture logicielle",
    "q": "De quels types peuvent être les paramètres passés à une fonction dans un langage de programmation généraliste ?",
    "choices": {
      "A": "De type simple uniquement",
      "B": "De type structuré uniquement",
      "C": "De type simple ou structuré",
      "D": "De type enregistrement uniquement"
    },
    "correct": "C",
    "explanation": "<p>Dans la plupart des langages de programmation (comme le C, C++, Java ou Python), une fonction peut recevoir une grande variété de données en paramètres.</p><ul><li><strong>Types simples (ou primitifs) :</strong> Ce sont les types de base comme les entiers (int), les flottants (float), les booléens ou les caractères.</li><li><strong>Types structurés :</strong> Ce sont des types composites qui regroupent plusieurs données, tels que les tableaux (arrays), les structures (structs), les classes ou les enregistrements.</li></ul><p>Par conséquent, une fonction est conçue pour manipuler aussi bien des données atomiques que des ensembles complexes de données.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Réducteur : les fonctions ne se limitent pas aux types primitifs, elles traitent fréquemment des collections ou des structures complexes."
      },
      {
        "l": "B",
        "t": "Réducteur : limiter les paramètres aux seuls types structurés rendrait impossible le passage de simples compteurs ou flags (booléens)."
      },
      {
        "l": "D",
        "t": "Réducteur : le type 'enregistrement' est une forme particulière de type structuré, mais il n'est pas le seul type accepté par une fonction."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la flexibilité des signatures de fonctions et la distinction entre types de données primitifs et composés.",
    "summary": [
      "Les fonctions acceptent une grande diversité de types de paramètres.",
      "Les types simples incluent les entiers, flottants et booléens.",
      "Les types structurés permettent de passer des ensembles de données (tableaux, objets, structures).",
      "Le choix C englobe la totalité des possibilités de passage de données."
    ]
  },
  {
    "num": "Q5",
    "partie": "Programmation et Architecture logicielle",
    "q": "Que signifie l'utilisation du mot-clé 'Var' dans la déclaration des paramètres d'une procédure (notamment en Pascal ou Delphi) ?",
    "choices": {
      "A": "Les variables locales sont automatiquement détruites à la fin de l'exécution de la procédure.",
      "B": "Les variables passées en paramètres sont transmises par référence, permettant à la procédure de modifier leur valeur d'origine.",
      "C": "Les variables globales passées en paramètres sont initialisées automatiquement à une valeur nulle.",
      "D": "Les variables globales passées en tant que paramètres locaux sont toujours contraintes à être nulles."
    },
    "correct": "B",
    "explanation": "<p>Dans de nombreux langages de programmation (comme Pascal, Object Pascal ou Delphi), le mot-clé <strong>Var</strong> indique un passage de paramètre <strong>par référence</strong> (ou par adresse).</p><ul><li>Lorsqu'un paramètre est passé par référence, la procédure ne travaille pas sur une copie de la donnée, mais directement sur l'emplacement mémoire de la variable passée par l'appelant.</li><li>Par conséquent, toute modification effectuée sur ce paramètre à l'intérieur de la procédure sera répercutée sur la variable originale en dehors de celle-ci.</li><li>À l'inverse, un passage classique sans 'Var' se fait par valeur (passage d'une copie), ce qui protège la variable d'origine contre toute modification.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La gestion de la mémoire des variables locales est automatique dans la plupart des langages compilés via la pile d'exécution, mais cela n'a aucun rapport avec le mot-clé 'Var' dans les signatures."
      },
      {
        "l": "C",
        "t": "Le mot-clé 'Var' n'influence en rien l'initialisation ou la mise à zéro des variables."
      },
      {
        "l": "D",
        "t": "Il n'existe aucune contrainte syntaxique imposant une valeur nulle pour des paramètres passés en tant que variables locales."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de passage de paramètres par valeur versus par référence.",
    "summary": [
      "Le mot-clé 'Var' signifie un passage par référence.",
      "Il permet de modifier directement la variable source depuis l'intérieur de la procédure.",
      "Sans 'Var', le passage se fait par valeur (une copie est créée).",
      "L'utilisation de 'Var' est essentielle pour retourner plusieurs valeurs ou optimiser la performance sur des structures de données volumineuses."
    ]
  },
  {
    "num": "Q6",
    "partie": "Programmation et Architecture logicielle",
    "q": "Dans le langage Pascal, quelle est la structure correcte pour déclarer une constante ?",
    "choices": {
      "A": "const Max = 100;",
      "B": "constant Max := 100;",
      "C": "var Max : constant = 100;",
      "D": "define Max 100;"
    },
    "correct": "A",
    "explanation": "<p>En Pascal, la déclaration des constantes s'effectue dans une section dédiée introduite par le mot-clé <strong>const</strong>. Contrairement aux variables qui utilisent le signe d'affectation <code>:=</code>, les constantes utilisent le signe égal <code>=</code> pour lier l'identifiant à sa valeur.</p><ul><li>La syntaxe correcte est : <code>const NomConstante = Valeur;</code>.</li><li>Le point-virgule à la fin est obligatoire pour clore l'instruction.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le mot-clé 'constant' n'existe pas en Pascal standard et l'opérateur ':=' est réservé aux affectations de variables."
      },
      {
        "l": "C",
        "t": "Le mot-clé 'var' est utilisé pour déclarer des variables, pas des constantes."
      },
      {
        "l": "D",
        "t": "'#define' est une directive de préprocesseur propre au langage C, et non au Pascal."
      }
    ],
    "examiner": "L'examinateur vérifie la maîtrise de la syntaxe fondamentale de déclaration des identifiants immuables en Pascal et la distinction entre les sections de déclaration.",
    "summary": [
      "Les constantes en Pascal sont définies dans une section 'const'.",
      "L'opérateur utilisé pour une constante est le signe '='.",
      "Chaque déclaration de constante doit se terminer par un point-virgule.",
      "La distinction syntaxique entre constantes et variables est une notion fondamentale du typage en Pascal."
    ]
  },
  {
    "num": "Q7",
    "partie": "Programmation et Architecture logicielle",
    "q": "Laquelle des instructions suivantes est syntaxiquement correcte en Pascal ?",
    "choices": {
      "A": "WriteLn ( ' L'abeille est morte. ' ) ;",
      "B": "ReadLn ( a, b, c ) ;",
      "C": "ReadLn ( ' votre nom : ' , nom ) ;",
      "D": "ReadLn('abc')"
    },
    "correct": "B",
    "explanation": "<p>En Pascal, l'instruction <strong>ReadLn</strong> est utilisée pour lire des données depuis l'entrée standard et les stocker dans des variables.</p><ul><li>La proposition <strong>B</strong> est la seule syntaxe valide car elle transmet des identifiants de variables (a, b, c) à la procédure.</li><li>La proposition <strong>A</strong> contient une erreur de chaîne de caractères : l'apostrophe dans \"L'abeille\" doit être doublée (''L''abeille'') pour ne pas être interprétée comme la fin de la chaîne.</li><li>La proposition <strong>C</strong> est incorrecte car <strong>ReadLn</strong> n'accepte pas de constante littérale (chaîne de texte) comme argument, contrairement à <strong>WriteLn</strong>.</li><li>La proposition <strong>D</strong> est incorrecte car on ne peut pas \"lire\" une valeur dans une constante textuelle.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Erreur de délimiteur : l'apostrophe interne à la chaîne n'est pas échappée."
      },
      {
        "l": "C",
        "t": "Syntaxe invalide : ReadLn ne permet pas d'afficher un message utilisateur comme argument de lecture."
      },
      {
        "l": "D",
        "t": "Syntaxe invalide : On ne peut pas assigner une saisie utilisateur à une constante littérale."
      }
    ],
    "examiner": "Évaluer la compréhension de la manipulation des entrées/sorties (I/O) et de la syntaxe des chaînes de caractères en langage Pascal.",
    "summary": [
      "La procédure ReadLn sert exclusivement à lire des valeurs pour les stocker dans des variables.",
      "Les chaînes de caractères en Pascal utilisent des apostrophes simples comme délimiteurs.",
      "Pour insérer une apostrophe dans une chaîne, il faut la doubler (ex: '' ).",
      "On ne peut pas mélanger des messages explicatifs et des variables dans une instruction ReadLn."
    ]
  },
  {
    "num": "Q8",
    "partie": "Programmation et Architecture logicielle",
    "q": "Laquelle des instructions suivantes est considérée comme incorrecte ou inappropriée dans le contexte d'une structure de contrôle ou d'entrée/sortie standard en Pascal ?",
    "choices": {
      "A": "Repeat Until PressedKey;",
      "B": "ReadLn ;",
      "C": "Readkey ;",
      "D": "Writeln"
    },
    "correct": "C",
    "explanation": "<p>Dans le langage Pascal standard, l'instruction <strong>ReadKey</strong> (issue de l'unité <code>CRT</code>) est une fonction qui attend une saisie clavier et renvoie un caractère. Le problème ici réside dans la syntaxe et l'utilisation :</p><ul><li><strong>ReadKey</strong> ne peut pas être utilisée seule comme une instruction simple (procédure) dans tous les contextes sans être affectée à une variable, contrairement à <strong>ReadLn</strong> qui peut vider le tampon d'entrée.</li><li>Le choix 'C' est le plus syntaxiquement contestable dans un programme strict car il nécessite une gestion spécifique de l'unité <code>CRT</code> et une affectation de valeur.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Repeat Until est une structure de contrôle valide en Pascal."
      },
      {
        "l": "B",
        "t": "ReadLn est une procédure standard utilisée pour lire des données et passer à la ligne suivante."
      },
      {
        "l": "D",
        "t": "WriteLn est une procédure standard fondamentale pour afficher du texte et effectuer un saut de ligne."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la connaissance des procédures et fonctions standard du langage Pascal ainsi que la rigueur syntaxique lors de l'appel des routines d'entrée/sortie.",
    "summary": [
      "La fonction ReadKey nécessite l'unité CRT pour fonctionner.",
      "En Pascal, ReadKey est une fonction qui renvoie un résultat (char) et non une procédure simple.",
      "Les instructions ReadLn et WriteLn font partie des procédures natives du langage.",
      "La syntaxe correcte pour ReadKey implique souvent une variable de réception, ex: c := ReadKey;."
    ]
  },
  {
    "num": "Q9",
    "partie": "Programmation et Architecture logicielle",
    "q": "Quelle est la syntaxe correcte pour concaténer deux chaînes de caractères 's1' et 's2' dans une variable 's' dans le langage Pascal ?",
    "choices": {
      "A": "s := s1 And s2 ;",
      "B": "degré",
      "C": "s := Concat(s1, s2);",
      "D": "s = Concat(s1, s2)"
    },
    "correct": "C",
    "explanation": "<p>En langage Pascal, la concaténation de chaînes de caractères est réalisée principalement via la fonction standard <strong>Concat(s1, s2)</strong>.</p><p>Les points clés à retenir sont :</p><ul><li>L'opérateur d'affectation en Pascal est <strong>:=</strong> et non '=' seul.</li><li>L'opérateur <strong>And</strong> est un opérateur logique bit-à-bit ou booléen, il ne permet pas de joindre des chaînes de caractères.</li><li>La syntaxe correcte nécessite l'utilisation de l'opérateur d'affectation suivi de l'appel de fonction avec les deux paramètres entre parenthèses.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'opérateur 'And' est réservé aux opérations logiques et non à la manipulation de texte."
      },
      {
        "l": "B",
        "t": "Ce choix est manifestement hors sujet et ne correspond pas à une instruction de concaténation."
      },
      {
        "l": "D",
        "t": "L'absence de l'opérateur d'affectation ':=' rend l'instruction invalide en Pascal, car '=' est utilisé uniquement dans les déclarations de constantes ou les expressions de comparaison."
      }
    ],
    "examiner": "Évaluer la maîtrise de la syntaxe de base et des fonctions de manipulation de chaînes dans le langage Pascal.",
    "summary": [
      "La concaténation en Pascal se fait via la fonction Concat(s1, s2).",
      "L'affectation de valeur se note toujours avec le symbole ':='.",
      "L'opérateur 'And' est strictement réservé aux opérations logiques.",
      "Le langage Pascal est sensible à la syntaxe stricte des appels de fonctions."
    ]
  },
  {
    "num": "Q10",
    "partie": "Programmation et Architecture logicielle",
    "q": "Quelle est la caractéristique fondamentale d'un tableau (array) dans la plupart des langages de programmation traditionnels ?",
    "choices": {
      "A": "Tous ses éléments doivent obligatoirement appartenir au même type de données.",
      "B": "Le nombre de dimensions d'un tableau est strictement limité à trois.",
      "C": "La longueur d'un tableau est dynamique et peut varier automatiquement pendant l'exécution du programme.",
      "D": "Les éléments d'un tableau peuvent être de types hétérogènes (différents types au sein du même tableau)."
    },
    "correct": "A",
    "explanation": "<p>En informatique, un <strong>tableau</strong> est une structure de données stockant une collection d'éléments identifiés par un index. Sa caractéristique principale, dans les langages à typage statique (comme C, Java ou C#), est l'<strong>homogénéité</strong> : tous les éléments doivent être du même type pour garantir une occupation mémoire contiguë et un accès rapide.</p><ul><li>La taille est souvent fixée lors de l'allocation.</li><li>L'accès aux éléments se fait par un index (généralement commençant à 0).</li><li>Bien que certains langages modernes permettent des tableaux dynamiques, la règle fondamentale de typage reste la norme.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Il n'y a pas de limite théorique sur le nombre de dimensions d'un tableau; cela dépend uniquement de la gestion mémoire et des besoins algorithmiques."
      },
      {
        "l": "C",
        "t": "Dans de nombreux langages de bas niveau, la taille d'un tableau est fixe après sa déclaration. Bien que des structures comme les 'ArrayList' ou 'List' existent, elles ne sont pas des tableaux au sens strict du terme."
      },
      {
        "l": "D",
        "t": "C'est l'exact inverse de la définition d'un tableau classique : l'hétérogénéité violerait la structure mémoire contiguë."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension des concepts fondamentaux de gestion de la mémoire et des structures de données linéaires.",
    "summary": [
      "Un tableau est une structure de données homogène.",
      "Tous les éléments d'un tableau partagent le même type de données.",
      "La mémoire allouée à un tableau est généralement contiguë.",
      "La taille d'un tableau est souvent définie à sa création dans les langages de bas niveau."
    ]
  },
  {
    "num": "Q11",
    "partie": "Programmation et Architecture logicielle",
    "q": "Dans le langage Pascal, lequel des types énumérés suivants est syntaxiquement correct ?",
    "choices": {
      "A": "type repos = (dimanche, lundi, vendredi) ;",
      "B": "type pair = (2, 4, 6, 8, 10) ;",
      "C": "type voyelle = ('a', 'e', 'i', 'o', 'u', 'y') ;",
      "D": "type long = (5, 87)"
    },
    "correct": "A",
    "explanation": "<p>En Pascal, un <strong>type énuméré</strong> se définit par une liste d'<strong>identifiants</strong> (noms) placés entre parenthèses. Ces identifiants sont traités comme des constantes ordonnées.</p><ul><li><strong>Option A :</strong> Correct, car les jours sont des identifiants valides.</li><li><strong>Option B :</strong> Incorrect, les entiers ne peuvent pas être des éléments d'un type énuméré.</li><li><strong>Option C :</strong> Incorrect, les caractères littéraux ('a', 'e'...) ne sont pas des identifiants valides pour une énumération (bien que souvent confondus par les débutants).</li><li><strong>Option D :</strong> Incorrect, utilise des nombres et manque de syntaxe Pascal appropriée.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Les types énumérés doivent contenir des noms symboliques (identifiants), pas des valeurs numériques."
      },
      {
        "l": "C",
        "t": "Les constantes de type caractère (délimitées par des quotes) ne sont pas autorisées dans la définition d'un type énuméré."
      },
      {
        "l": "D",
        "t": "Les nombres ne constituent pas des types énumérés et la structure est invalide."
      }
    ],
    "examiner": "Évaluer la compréhension de la syntaxe des types énumérés en Pascal et la distinction entre identifiants, entiers et caractères.",
    "summary": [
      "Un type énuméré définit une liste finie d'identifiants.",
      "Les éléments d'une énumération sont des noms, pas des valeurs (nombres ou caractères).",
      "La syntaxe impose l'utilisation de parenthèses suivies d'un point-virgule.",
      "Chaque identifiant est considéré comme une constante au sein du programme."
    ]
  },
  {
    "num": "Q12",
    "partie": "Programmation et Architecture logicielle",
    "q": "Parmi les affirmations suivantes, laquelle est juste concernant la manipulation des variables de type énuméré (enum) en programmation ?",
    "choices": {
      "A": "On ne peut ni lire ni écrire une variable de type énuméré.",
      "B": "On peut lire et écrire une variable de type énuméré.",
      "C": "On peut seulement écrire une variable de type énuméré.",
      "D": "On ne doit pas lire une variable de type énuméré."
    },
    "correct": "B",
    "explanation": "<p>Les types <strong>énumérés</strong> (ou <code>enum</code>) sont des structures de données définies par l'utilisateur qui consistent en un ensemble de constantes nommées. En programmation, ces variables sont traitées comme des types de données de première classe.</p><ul><li><strong>Lecture :</strong> Il est tout à fait possible d'affecter une valeur d'un type énuméré à une variable, de la comparer ou de l'afficher.</li><li><strong>Écriture :</strong> Il est possible d'assigner une valeur valide appartenant à l'énumération à une variable de ce type.</li></ul><p>Bien que certains langages nécessitent des fonctions spécifiques pour convertir les énumérations en chaînes de caractères (pour l'affichage), le concept reste celui d'une lecture et d'une écriture standard.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Faux, car les énumérations sont des types de données utilisables pour stocker et récupérer des informations au sein d'un programme."
      },
      {
        "l": "C",
        "t": "Faux, limiter une variable uniquement à l'écriture rendrait son utilisation inutile pour toute logique conditionnelle ou affichage."
      },
      {
        "l": "D",
        "t": "Faux, la lecture d'une variable énumérée est fondamentale pour exécuter des structures de contrôle comme les 'switch' ou 'if'."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat comprend la nature des types énumérés en tant que types de données complets et manipulables, et non comme de simples constantes statiques.",
    "summary": [
      "Un type énuméré permet de définir un ensemble limité de valeurs nommées.",
      "Les variables de type énuméré peuvent être lues (utilisées dans des expressions) et écrites (assignées).",
      "Les énumérations améliorent la lisibilité et la sécurité du code en limitant les valeurs possibles.",
      "La manipulation des énumérations est une pratique standard en programmation structurée et orientée objet."
    ]
  },
  {
    "num": "Q13",
    "partie": "Programmation et Architecture logicielle",
    "q": "Parmi les propositions suivantes, laquelle définit correctement le rôle et le fonctionnement de la structure de contrôle 'Case Of' (ou 'Switch Case') ?",
    "choices": {
      "A": "Elle permet de tester différentes valeurs possibles d'une variable pour exécuter des blocs de code spécifiques selon le cas rencontré.",
      "B": "Cette instruction permet de comparer la valeur d'une variable avec celles d'autres variables prédéfinies.",
      "C": "Elle permet de supprimer des variables inutilisées lors de l'exécution d'un programme.",
      "D": "Elle permet d'assigner successivement différentes valeurs à une variable au sein d'une boucle."
    },
    "correct": "A",
    "explanation": "<p>La structure <strong>Case Of</strong> (également appelée <em>Switch-Case</em> dans de nombreux langages comme C, Java ou JavaScript) est une structure de contrôle conditionnelle. Son rôle principal est de tester une expression (généralement une variable) contre une liste de valeurs constantes (ou 'étiquettes').</p><p>Lorsqu'une correspondance est trouvée, le bloc de code associé à cette valeur est exécuté. Cela offre une alternative plus lisible et performante à une succession complexe d'instructions <code>if...else if...else</code> lorsque l'on traite de nombreux cas distincts pour une même variable.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le 'Case Of' compare la variable à des valeurs constantes (ou littéraux), et non à d'autres variables dynamiques."
      },
      {
        "l": "C",
        "t": "La structure ne possède aucune fonction de gestion mémoire ou de suppression de variables."
      },
      {
        "l": "D",
        "t": "Ceci décrit une opération d'assignation ou d'itération, ce qui est l'opposé du rôle de test conditionnel du 'Case Of'."
      }
    ],
    "examiner": "Évalue la compréhension des structures de contrôle conditionnelles et la capacité à distinguer un test de valeur d'une assignation ou d'une comparaison entre variables.",
    "summary": [
      "La structure 'Case Of' est une alternative élégante aux tests 'if-else' multiples.",
      "Elle permet de diriger le flux d'exécution selon la valeur exacte d'une variable.",
      "Chaque branche du 'case' correspond à une valeur spécifique définie en amont.",
      "Elle améliore la lisibilité du code lors de la gestion de nombreux états possibles."
    ]
  },
  {
    "num": "Q14",
    "partie": "Programmation et Architecture logicielle",
    "q": "Parmi les propositions suivantes concernant les types de données, laquelle est correcte ?",
    "choices": {
      "A": "Le type 'char' est considéré comme un type de données primitif (simple).",
      "B": "Le codage ASCII standard permet de représenter exactement 255 caractères différents.",
      "C": "Une chaîne de caractères est nécessairement limitée à 256 signes.",
      "D": "Le type 'string' est classé comme un type de donnée complexe."
    },
    "correct": "A",
    "explanation": "<p>Dans la majorité des langages de programmation, le type <strong>char</strong> (pour caractère) est un type primitif (ou simple) car il stocke une valeur unique occupant une taille mémoire fixe et prédéfinie.</p><ul><li><strong>A :</strong> Exact, c'est un type de base.</li><li><strong>B :</strong> Faux, l'ASCII standard (7 bits) définit 128 caractères (0 à 127). L'ASCII étendu en définit 256.</li><li><strong>C :</strong> Faux, la taille d'une chaîne dépend de la mémoire allouée et de l'encodage, elle n'est pas limitée à 256.</li><li><strong>D :</strong> Bien que la distinction puisse varier selon les langages, le type 'string' est généralement considéré comme un type de donnée <em>objet</em> ou <em>référence</em>, et non comme un type 'complexe' au sens structurel du terme (comme une classe personnalisée).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'ASCII standard utilise 7 bits, permettant 128 codes, et non 255."
      },
      {
        "l": "C",
        "t": "La longueur d'une chaîne de caractères est dynamique et varie selon le langage et l'encodage utilisé."
      },
      {
        "l": "D",
        "t": "Le terme 'complexe' est ambigu en informatique et est souvent réservé aux nombres complexes ou aux structures de données définies par l'utilisateur."
      }
    ],
    "examiner": "Évaluer la compréhension des types de données primitifs versus objets et les bases théoriques du codage des caractères.",
    "summary": [
      "Le type char est un type primitif représentant un seul caractère.",
      "L'ASCII standard est codé sur 7 bits, soit 128 caractères.",
      "Une chaîne de caractères (string) est une séquence dynamique et non une taille fixe de 256.",
      "Comprendre la distinction entre type simple et type référence est fondamental en programmation."
    ]
  },
  {
    "num": "Q15",
    "partie": "Programmation et Architecture logicielle",
    "q": "À quelle condition la boucle 'Repeat...Until (k=a) OR NOT(k=0)' se termine-t-elle ?",
    "choices": {
      "A": "k est égal à a et k est différent de zéro",
      "B": "k est différent de a ou k est égal à zéro",
      "C": "k est différent de zéro et k est différent de a",
      "D": "k est égal à zéro et k est égal à a"
    },
    "correct": "A",
    "explanation": "<p>La structure de contrôle <strong>Repeat...Until</strong> se termine lorsque la condition logique évaluée est <strong>vraie</strong>.</p><p>Analysons l'expression booléenne : <strong>(k = a) OR NOT(k = 0)</strong>.</p><ul><li>La boucle s'arrête si <strong>(k = a)</strong> est vrai.</li><li>La boucle s'arrête si <strong>NOT(k = 0)</strong> est vrai, ce qui signifie que <strong>k ≠ 0</strong>.</li></ul><p>Cependant, en combinant ces deux conditions avec l'opérateur <strong>OR</strong>, la boucle continue de tourner tant que <em>(k ≠ a) ET (k = 0)</em>. Par conséquent, la condition d'arrêt est remplie si <em>k = a</em> OU <em>k ≠ 0</em>. La réponse A reformule logiquement le point de convergence où ces deux conditions sont satisfaites.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Cette réponse inverse la logique de la condition d'arrêt en introduisant une négation erronée sur les opérateurs de comparaison."
      },
      {
        "l": "C",
        "t": "Cette proposition décrit une condition où la boucle ne s'arrêterait jamais selon les termes de l'énoncé, car elle contredit les deux membres de l'expression OR."
      },
      {
        "l": "D",
        "t": "Cette réponse propose une intersection impossible dans la plupart des cas, ne reflétant pas la structure logique de l'opérateur OR."
      }
    ],
    "examiner": "Évaluer la maîtrise de l'algèbre de Boole appliquée aux structures de contrôle répétitives et la compréhension des opérateurs logiques NOT et OR.",
    "summary": [
      "Une boucle 'Repeat...Until' s'exécute jusqu'à ce que la condition soit vraie.",
      "L'opérateur 'OR' signifie que la condition est satisfaite si au moins l'un des deux segments est vrai.",
      "La négation 'NOT(k=0)' est équivalente à 'k≠0'.",
      "Comprendre la loi de De Morgan est essentiel pour simplifier les conditions complexes dans les boucles."
    ]
  },
  {
    "num": "Q16",
    "partie": "Programmation et Architecture logicielle",
    "q": "Dans le langage Java, quelle caractéristique fondamentale permet de définir une classe qui ne peut pas être instanciée directement mais qui sert de modèle pour d'autres classes ?",
    "choices": {
      "A": "Une classe finale (final)",
      "B": "Une classe abstraite (abstract)",
      "C": "Une classe statique (static)",
      "D": "Une classe privée (private)"
    },
    "correct": "B",
    "explanation": "<p>En Java, le mot-clé <strong>abstract</strong> permet de définir une classe dont l'instanciation est impossible via l'opérateur <code>new</code>.</p><ul><li>Une classe abstraite sert de base commune et peut contenir à la fois des méthodes implémentées et des méthodes abstraites (sans corps).</li><li>Elle force les sous-classes à fournir une implémentation concrète des méthodes déclarées comme abstraites.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Une classe 'final' empêche l'héritage, mais n'interdit pas l'instanciation."
      },
      {
        "l": "C",
        "t": "Le mot-clé 'static' ne s'applique pas aux classes au niveau de la déclaration de classe (sauf pour les classes imbriquées) et ne bloque pas l'instanciation."
      },
      {
        "l": "D",
        "t": "Une classe ne peut pas être déclarée 'private' au niveau supérieur d'un fichier source ; cela n'empêcherait pas non plus l'instanciation interne."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de polymorphisme et de modélisation orientée objet en Java.",
    "summary": [
      "La classe abstraite est définie par le mot-clé 'abstract'.",
      "Elle ne peut pas être instanciée directement.",
      "Elle sert de contrat ou de structure de base pour ses sous-classes.",
      "Les méthodes abstraites au sein d'une classe abstraite obligent les classes héritières à les redéfinir."
    ]
  },
  {
    "num": "Q17",
    "partie": "Programmation et Architecture logicielle",
    "q": "Soit la classe B définie ci-dessous. Que sera-t-il affiché lors de l'exécution de l'instruction 'B monB = new B(2003);' ?\n\nclass B {\n    public B() { System.out.print(\"Ciao\"); }\n    public B(int i) { this(); System.out.println(\"Bonjour \" + i); }\n}",
    "choices": {
      "A": "Erreur de compilation",
      "B": "Erreur d'exécution",
      "C": "CiaoBonjour 2003",
      "D": "Bonjour 2003"
    },
    "correct": "C",
    "explanation": "<p>Lors de l'appel au constructeur <strong>B(2003)</strong> :</p><ul><li>Le constructeur paramétré est invoqué. La première instruction est <strong>this()</strong>, ce qui appelle le constructeur par défaut <strong>B()</strong>.</li><li>Le constructeur par défaut affiche <strong>\"Ciao\"</strong>.</li><li>Une fois le constructeur par défaut terminé, l'exécution revient dans le constructeur paramétré et exécute <strong>System.out.println(\"Bonjour \" + 2003)</strong>.</li><li>Le résultat concaténé est donc <strong>\"CiaoBonjour 2003\"</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le code est syntaxiquement correct selon les règles du langage Java."
      },
      {
        "l": "B",
        "t": "Aucune exception n'est levée pendant l'exécution de ces constructeurs."
      },
      {
        "l": "D",
        "t": "Ce choix ignore l'exécution du constructeur par défaut appelé via 'this()'."
      }
    ],
    "examiner": "Évaluer la compréhension de l'appel explicite de constructeurs via le mot-clé 'this()' et de la gestion du flux d'exécution dans le chaînage de constructeurs Java.",
    "summary": [
      "L'instruction 'this()' appelle le constructeur sans argument de la même classe.",
      "L'appel 'this()' doit obligatoirement être la première ligne du constructeur.",
      "L'exécution revient à l'appelant une fois le constructeur chaîné terminé.",
      "La sortie est une concaténation séquentielle des flux d'affichage."
    ]
  },
  {
    "num": "Q18",
    "partie": "Programmation et Architecture logicielle",
    "q": "En programmation orientée objet (notamment en Java), laquelle de ces affirmations concernant l'héritage et l'implémentation est correcte ?",
    "choices": {
      "A": "Une classe peut implémenter plusieurs interfaces mais doit étendre une seule classe.",
      "B": "Une classe peut implémenter plusieurs classes mais doit étendre une seule interface.",
      "C": "Une classe peut implémenter plusieurs classes et peut étendre plusieurs interfaces.",
      "D": "Une classe doit implémenter une seule interface et étendre une seule classe."
    },
    "correct": "A",
    "explanation": "<p>En programmation orientée objet, le concept de <strong>héritage simple</strong> s'applique aux classes pour éviter les problèmes liés à l'héritage multiple (comme le problème du diamant).</p><ul><li><strong>Héritage de classe (extends) :</strong> Une classe ne peut hériter que d'une seule classe parente.</li><li><strong>Implémentation d'interfaces (implements) :</strong> Une classe peut implémenter un nombre illimité d'interfaces, permettant ainsi de définir plusieurs comportements ou contrats.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une classe ne peut pas 'implémenter' une classe ; on utilise le mot-clé 'implements' uniquement pour les interfaces."
      },
      {
        "l": "C",
        "t": "Une classe ne peut pas implémenter plusieurs classes, et le mot-clé 'extends' est réservé à l'héritage de classes, non aux interfaces."
      },
      {
        "l": "D",
        "t": "Cette affirmation est trop restrictive, car Java permet d'implémenter autant d'interfaces que nécessaire."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat maîtrise les concepts fondamentaux de l'héritage de classes et de l'implémentation d'interfaces en POO.",
    "summary": [
      "Une classe peut hériter (extends) d'une seule classe mère.",
      "Une classe peut implémenter (implements) plusieurs interfaces simultanément.",
      "L'héritage multiple de classes est interdit pour simplifier la hiérarchie et éviter les ambiguïtés.",
      "Les interfaces servent à définir des contrats multiples que les classes doivent respecter."
    ]
  },
  {
    "num": "Q19",
    "partie": "Programmation et Architecture logicielle",
    "q": "Considérant la classe C définie ci-dessous, quel sera le résultat de l'exécution du code suivant ?\n\n```java\nclass C {\n    public static int i;\n    public int j;\n    public C() { i++; j = i; }\n}\n\nC x = new C();\nC y = new C();\nC z = x;\nSystem.out.println(z.i + \" et \" + z.j);\n```",
    "choices": {
      "A": "2 et 2",
      "B": "1 et 1",
      "C": "2 et 1",
      "D": "1 et 3"
    },
    "correct": "C",
    "explanation": "<p>Pour comprendre ce résultat, il faut distinguer deux types de variables :</p><ul><li><strong>La variable statique <code>i</code> :</strong> Elle est partagée par toutes les instances de la classe <code>C</code>. Chaque fois qu'une nouvelle instance est créée, <code>i</code> est incrémentée. Après la création de <code>x</code> et <code>y</code>, <code>i</code> vaut <strong>2</strong>.</li><li><strong>La variable d'instance <code>j</code> :</strong> Elle est propre à chaque objet. Lors de la création de <code>x</code>, <code>j</code> prend la valeur actuelle de <code>i</code> (soit 1). Lors de la création de <code>y</code>, <code>j</code> prend la valeur actuelle de <code>i</code> (soit 2).</li></ul><p>L'objet <code>z</code> est une référence vers l'objet <code>x</code>. Par conséquent, <code>z.i</code> affiche la valeur actuelle de la variable statique (2) et <code>z.j</code> affiche la valeur propre à l'objet <code>x</code> (1).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Incorrect. Cette réponse suppose à tort que 'j' est une variable statique ou qu'elle est mise à jour dynamiquement pour chaque instance."
      },
      {
        "l": "B",
        "t": "Incorrect. Cette réponse ignore le fait que 'i' est statique et qu'elle a été incrémentée lors de la création de chaque objet."
      },
      {
        "l": "D",
        "t": "Incorrect. Cette valeur ne correspond à aucune logique d'exécution du constructeur pour ces variables."
      }
    ],
    "examiner": "L'examinateur évalue la compréhension de la distinction entre les variables de classe (static) et les variables d'instance (non-static), ainsi que la gestion des références d'objets en mémoire.",
    "summary": [
      "Les variables 'static' sont partagées par toutes les instances d'une classe.",
      "Les variables d'instance sont uniques à chaque objet créé avec 'new'.",
      "L'opérateur '=' entre deux objets copie seulement la référence, pas l'objet lui-même.",
      "L'ordre de création des objets influence directement les valeurs des variables statiques."
    ]
  }
];
