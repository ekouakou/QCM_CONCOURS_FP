const QCM = [
  {
    "num": "Q1",
    "partie": "Codage des données",
    "q": "Le format ______ est généralement utilisé pour stocker des données (code décimal à codage binaire).",
    "choices": {
      "A": "BCD",
      "B": "Décimal",
      "C": "Hexadécimal",
      "D": "Octal"
    },
    "correct": "A",
    "explanation": "<p>Le format <strong>BCD (Binary Coded Decimal)</strong>, ou décimal codé en binaire, est une méthode d'encodage numérique où chaque chiffre décimal (de 0 à 9) est représenté par un groupement de quatre bits (un nibble). Contrairement au système binaire pur où une valeur entière est convertie globalement, le BCD traite chaque position décimale de manière indépendante.</p><p><strong>Architecture et Mécanisme :</strong> Dans ce système, les chiffres de 0 à 9 sont codés en utilisant les valeurs binaires 0000 à 1001. Les combinaisons de 1010 à 1111 (de A à F en hexadécimal) sont techniquement inutilisées dans le BCD standard, ce qui rend ce format moins dense en termes d'espace mémoire par rapport au binaire pur, mais facilite grandement l'interface avec les composants à affichage numérique.</p><p><strong>Cas d'usage :</strong> Le BCD est historiquement crucial dans les systèmes nécessitant une précision décimale exacte sans les erreurs d'arrondi inhérentes à la virgule flottante binaire (IEEE 754). Il est omniprésent dans :<ul><li><strong>Les systèmes financiers et comptables :</strong> où les calculs monétaires exigent une exactitude stricte au centime près.</li><li><strong>Les systèmes embarqués :</strong> notamment pour les contrôleurs d'horloges, les compteurs de fréquence et les écrans 7 segments où la conversion du binaire vers le décimal doit être rapide et matérielle.</li><li><strong>Le matériel de mesure :</strong> comme les voltmètres numériques ou les calculatrices de poche de première génération.</li></ul></p><p><strong>Bonnes pratiques et pièges :</strong> En tant qu'ingénieur, il est impératif de comprendre que le BCD consomme plus de mémoire (environ 20% de perte d'efficacité) puisqu'il n'utilise que 10 des 16 combinaisons possibles par octet. Il ne doit être utilisé que lorsque la manipulation directe des chiffres décimaux est requise, et non pour du stockage de données volumineuses ou du calcul scientifique complexe où le binaire pur (entier ou flottant) est largement supérieur en termes de performance CPU.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le terme 'Décimal' désigne le système de numérotation en base 10 utilisé par les humains, mais il n'est pas un format de stockage binaire en tant que tel."
      },
      {
        "l": "C",
        "t": "L'hexadécimal (base 16) est un système de représentation utile pour simplifier la lecture des adresses mémoires ou des octets, mais il n'est pas un codage de chiffres décimaux isolés."
      },
      {
        "l": "D",
        "t": "L'octal (base 8) est utilisé dans les systèmes informatiques (notamment pour les permissions Unix), mais il ne permet pas de représenter les chiffres décimaux par des groupes de 4 bits de manière directe."
      }
    ],
    "examiner": "L'examinateur teste votre capacité à distinguer les formats de représentation de données spécialisés des systèmes de numération standard. Le piège classique est de confondre le codage BCD avec la simple conversion binaire classique.",
    "summary": [
      "Le BCD code chaque chiffre décimal individuellement sur 4 bits.",
      "Il est privilégié pour éviter les erreurs d'arrondi liées aux flottants en finance.",
      "Il est moins efficace en termes d'utilisation de l'espace mémoire que le binaire pur.",
      "Il est essentiel pour le pilotage direct d'interfaces matérielles de type afficheur décimal."
    ]
  },
  {
    "num": "Q1",
    "partie": "Représentation des données",
    "q": "La représentation en virgule flottante est utilisée pour stocker __________.",
    "choices": {
      "A": "les valeurs booléennes",
      "B": "les nombres entiers",
      "C": "les nombres entiers réels",
      "D": "les entiers"
    },
    "correct": "C",
    "explanation": "<p>La <strong>représentation en virgule flottante</strong> (floating-point representation) est le standard informatique permettant de modéliser des nombres réels, incluant des fractions et des valeurs extrêmement grandes ou petites, au sein d'une mémoire numérique limitée. Contrairement aux nombres à virgule fixe, où la position du point décimal est immuable, la notation en virgule flottante autorise le point décimal à 'flotter' en fonction de l'exposant, maximisant ainsi la plage de valeurs représentables.</p><p>Le standard international dominant est l'<strong>IEEE 754</strong>. Un nombre en virgule flottante se compose généralement de trois éléments distincts stockés dans un mot mémoire : <ul><li><strong>Le signe (s)</strong> : 1 bit indiquant si le nombre est positif ou négatif.</li><li><strong>L'exposant (e)</strong> : Définit la magnitude du nombre (la puissance de base).</li><li><strong>La mantisse (ou significande, m)</strong> : Représente la précision réelle ou les chiffres significatifs du nombre.</li></ul></p><p><strong>Cas d'usage et importance :</strong> Cette représentation est cruciale dans le calcul scientifique, l'ingénierie financière, et le rendu graphique 3D où des nombres décimaux avec une précision variable sont requis. Cependant, elle introduit une notion capitale : <strong>l'erreur d'arrondi</strong>. Puisque la précision est limitée par le nombre de bits alloués (32 bits pour 'float' ou 64 bits pour 'double'), certains nombres décimaux simples (comme 0.1) ne peuvent pas être représentés de manière exacte en base 2, menant à des imprécisions cumulatives lors de calculs intensifs.</p><p><strong>Bonnes pratiques :</strong><ul><li>Ne jamais utiliser de virgule flottante pour des calculs monétaires stricts (préférez les types 'Decimal' ou 'BigInt' avec gestion de précision arbitraire).</li><li>Utilisez 'double' plutôt que 'float' par défaut pour réduire les erreurs d'accumulation dans les boucles complexes.</li><li>Comprendre que l'égalité stricte (==) entre deux nombres à virgule flottante est une erreur de conception majeure ; préférez une comparaison basée sur un seuil de tolérance (epsilon).</li></ul></p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les valeurs booléennes ne représentent que deux états (vrai/faux) et sont stockées sous forme de bits uniques ou d'octets, ne nécessitant aucune complexité liée à la virgule flottante."
      },
      {
        "l": "B",
        "t": "Les nombres entiers (nombres sans partie fractionnaire) sont représentés par des formats en 'complément à deux' qui sont plus efficaces et précis, sans avoir besoin d'exposant ou de mantisse."
      },
      {
        "l": "D",
        "t": "C'est un synonyme de la réponse B. Les entiers n'ont pas de virgule, par définition, donc leur stockage utilise des registres de type 'Integer' et non des unités de calcul flottant (FPU)."
      }
    ],
    "examiner": "L'examinateur teste votre compréhension des types de données primitifs et de la distinction entre les formats de stockage d'entiers et de réels. Le piège classique est de confondre la capacité de calcul (performances) avec la précision numérique (exactitude).",
    "summary": [
      "La virgule flottante est conçue pour représenter des nombres réels (incluant des fractions) et non des entiers.",
      "La norme IEEE 754 définit le standard de stockage via le signe, l'exposant et la mantisse.",
      "La virgule flottante introduit inévitablement des erreurs d'arrondi dues à la limite de précision binaire.",
      "Il est impératif d'utiliser des types de données spécifiques (Decimal/BigInt) pour les calculs financiers afin d'éviter les imprécisions de la virgule flottante."
    ]
  },
  {
    "num": "Q2",
    "partie": "Représentation des données",
    "q": "Un chiffre binaire est appelé _____________.",
    "choices": {
      "A": "Bit",
      "B": "Octet",
      "C": "Nombre",
      "D": "Caractère"
    },
    "correct": "A",
    "explanation": "<p>Dans le domaine de l'informatique et des systèmes numériques, l'unité fondamentale de mesure de l'information est le <strong>bit</strong> (abréviation de <em>Binary Digit</em>). Contrairement au système décimal que nous utilisons au quotidien (base 10, chiffres de 0 à 9), les systèmes informatiques reposent exclusivement sur l'algèbre de Boole et le système binaire (base 2).</p><p>Le bit est la plus petite unité d'information manipulable par un processeur. Il ne peut prendre que deux états distincts : <strong>0</strong> ou <strong>1</strong>. Ces états sont physiquement représentés dans le matériel par deux niveaux de tension électrique ou par l'état d'un transistor (ouvert ou fermé). Cette simplicité apparente est ce qui permet aux ordinateurs modernes de traiter des milliards d'opérations par seconde avec une fiabilité extrême.</p><p><strong>Architecture et Hiérarchie :</strong><ul><li><strong>Le Bit :</strong> L'atome d'information.</li><li><strong>Le Nibble (ou quartet) :</strong> Un groupement de 4 bits.</li><li><strong>L'Octet (Byte) :</strong> Composé de 8 bits, il est l'unité standard pour quantifier la mémoire et le stockage. Un octet peut représenter 2^8 = 256 valeurs différentes.</li><li><strong>Word (Mot) :</strong> La taille standard traitée par le CPU en un seul cycle d'horloge (généralement 32 ou 64 bits sur les architectures modernes).</li></ul></p><p><strong>Bonnes pratiques DevOps et Cloud :</strong> Lors de la conception de systèmes distribués ou de bases de données (comme Cassandra ou MongoDB), comprendre la taille des données en bits/octets est crucial pour optimiser le coût du stockage et la bande passante réseau. Une mauvaise gestion de la sérialisation des données peut entraîner une augmentation inutile de la latence dans les microservices.</p><p><strong>Erreurs de débutant :</strong> Confondre le bit (b) et l'octet (B) est une erreur classique, particulièrement critique dans les mesures de débit réseau (ex: 100 Mbps ne signifie pas 100 Mo/s, mais 12,5 Mo/s).</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'octet est un regroupement de 8 bits. Il s'agit d'une unité de mesure plus grande, pas du chiffre binaire individuel lui-même."
      },
      {
        "l": "C",
        "t": "Un nombre est une valeur mathématique qui peut être composée d'un ou plusieurs bits, mais le terme n'est pas spécifique à la représentation binaire unitaire."
      },
      {
        "l": "D",
        "t": "Un caractère est une unité sémantique (lettre, chiffre, symbole) qui nécessite généralement 8 bits (1 octet) ou plus (via l'encodage UTF-8) pour être représentée en binaire."
      }
    ],
    "examiner": "L'examinateur cherche ici à valider vos bases fondamentales sur la représentation des données. Le piège classique est la confusion entre le bit (unité atomique) et l'octet (unité d'adressage standard), souvent exploitée pour tester votre rigueur sur la terminologie technique.",
    "summary": [
      "Un bit (Binary Digit) est l'unité d'information minimale et ne peut valoir que 0 ou 1.",
      "Un octet (byte) se compose systématiquement de 8 bits.",
      "La notation 'b' désigne le bit, tandis que 'B' désigne l'octet.",
      "La compréhension de la base 2 est indispensable pour maîtriser l'architecture système et l'optimisation réseau."
    ]
  }
];
