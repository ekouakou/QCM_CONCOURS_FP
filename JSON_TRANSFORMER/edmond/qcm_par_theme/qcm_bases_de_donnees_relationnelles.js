const QCM = [
  {
    "num": "Q1",
    "partie": "Bases de données relationnelles",
    "q": "Pour créer une requête SQL dans une base de données relationnelle, quels sont les éléments essentiels à identifier ?",
    "choices": {
      "A": "La ou les tables concernées",
      "B": "La date de création de la base de données",
      "C": "La clé primaire des tables",
      "D": "Le nombre d'enregistrements contenus dans la base de données"
    },
    "correct": "A",
    "explanation": "<p>Pour formuler une requête SQL (en utilisant l'instruction <code>SELECT</code>), il est indispensable de définir la source des données.</p><ul><li><strong>La clause FROM</strong> : Elle spécifie la ou les tables dans lesquelles les données doivent être extraites. Sans identifier les tables, le moteur de base de données ne peut pas localiser les colonnes demandées.</li><li>Les autres informations (date de création, nombre d'enregistrements) ne sont pas nécessaires pour extraire des données spécifiques.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La date de création est une métadonnée administrative qui n'a aucun impact sur la structure logique des données."
      },
      {
        "l": "C",
        "t": "Bien que la clé primaire soit utile pour lier des tables (JOIN) ou filtrer des résultats, elle n'est pas strictement nécessaire pour effectuer une requête de base sur une seule table."
      },
      {
        "l": "D",
        "t": "Le volume de données est une information de gestion système, mais elle n'intervient pas dans la syntaxe ou la logique de construction d'une requête SQL."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension fondamentale de la syntaxe SQL et la connaissance des composants requis pour l'exécution d'une instruction SELECT.",
    "summary": [
      "Une requête SQL nécessite obligatoirement la définition d'une source de données.",
      "La clause FROM permet d'indiquer la ou les tables ciblées par la requête.",
      "Les métadonnées comme la date de création ou le nombre total d'enregistrements sont inutiles pour le requêtage classique.",
      "La maîtrise de la structure des tables est le prérequis indispensable à toute manipulation de données."
    ]
  },
  {
    "num": "Q2",
    "partie": "Bases de données relationnelles",
    "q": "Quel est l'objectif principal de la normalisation d'un modèle de données ?",
    "choices": {
      "A": "Vérifier que le modèle est conforme aux normes ISO.",
      "B": "Vérifier que le modèle respecte les conventions de nommage internes à l'entreprise.",
      "C": "Minimiser la redondance des informations et assurer la cohérence des données.",
      "D": "S'assurer que le modèle est validé par les utilisateurs finaux."
    },
    "correct": "C",
    "explanation": "<p>La <strong>normalisation</strong> est une étape fondamentale dans la conception de bases de données relationnelles. Ses objectifs principaux sont :</p><ul><li><strong>Réduire la redondance</strong> : Éviter le stockage des mêmes informations à plusieurs endroits pour économiser de l'espace.</li><li><strong>Assurer l'intégrité référentielle</strong> : Garantir que les dépendances entre les données sont logiques et cohérentes.</li><li><strong>Faciliter la maintenance</strong> : Éviter les anomalies lors des opérations de mise à jour, d'insertion ou de suppression.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La normalisation en bases de données n'a aucun lien direct avec les normes ISO, qui concernent des standards internationaux de gestion de la qualité ou de sécurité."
      },
      {
        "l": "B",
        "t": "Bien que les entreprises puissent avoir leurs propres normes, la normalisation au sens technique (formes normales) est un concept mathématique universel et non une directive interne."
      },
      {
        "l": "D",
        "t": "La validation utilisateur est une étape fonctionnelle importante, mais elle est distincte de la structure technique et logique imposée par la normalisation des données."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension théorique des principes fondamentaux de conception de bases de données et la capacité à distinguer les enjeux techniques de la normalisation des simples processus de validation ou de conformité administrative.",
    "summary": [
      "La normalisation vise à structurer les tables pour éviter la duplication des données.",
      "Elle permet de garantir la cohérence et l'intégrité de la base de données.",
      "Elle prévient les anomalies de mise à jour lors des opérations DML.",
      "Il s'agit d'un processus logique basé sur les dépendances fonctionnelles entre les attributs."
    ]
  },
  {
    "num": "Q3",
    "partie": "Bases de données relationnelles",
    "q": "Quels sont les éléments fondamentaux requis pour formuler une requête SQL permettant d'extraire ou d'interagir avec des données au sein d'une base de données relationnelle ?",
    "choices": {
      "A": "La ou les tables concernées",
      "B": "La date de création de la base de données",
      "C": "La clé primaire des tables",
      "D": "Le nombre d'enregistrements contenus dans la base de données"
    },
    "correct": "A",
    "explanation": "<p>Pour interroger une base de données relationnelle via le langage SQL, l'élément indispensable est la connaissance de la structure des données, et plus particulièrement des <strong>tables</strong> cibles.</p><ul><li>La clause <code>FROM</code> (ou <code>JOIN</code>) est obligatoire pour définir la source des données.</li><li>Sans identifier la table, le moteur de base de données ne peut pas localiser les colonnes à traiter.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La date de création est une métadonnée administrative qui n'a aucune influence sur la syntaxe ou l'exécution d'une requête de manipulation de données (DML)."
      },
      {
        "l": "C",
        "t": "Bien que la clé primaire soit utile pour identifier des lignes uniques, elle n'est pas strictement obligatoire pour formuler une requête de sélection (SELECT) si l'on souhaite extraire l'ensemble des données ou filtrer sur d'autres critères."
      },
      {
        "l": "D",
        "t": "Le nombre d'enregistrements (cardinalité) est une information statistique sur l'état de la table, mais elle n'est pas nécessaire pour écrire une requête valide."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si l'apprenant comprend la structure logique de base du langage SQL et l'importance de la clause FROM dans la construction d'une requête.",
    "summary": [
      "Une requête SQL nécessite impérativement de définir la source des données (les tables).",
      "Les métadonnées telles que la date de création sont inutiles pour l'écriture des requêtes.",
      "La connaissance des clés primaires est utile pour l'optimisation, mais non requise pour la syntaxe de base.",
      "La structure des tables est le pilier central de toute interaction avec un système de gestion de base de données relationnelle (SGBDR)."
    ]
  },
  {
    "num": "Q4",
    "partie": "Bases de données relationnelles",
    "q": "Quel est l'objectif principal de la normalisation d'un modèle de données relationnel ?",
    "choices": {
      "A": "Vérifier la conformité du modèle aux standards de certification ISO.",
      "B": "S'assurer que le modèle respecte strictement les conventions de nommage de l'entreprise.",
      "C": "Minimiser la redondance des données et garantir l'intégrité et la cohérence de la base.",
      "D": "Garantir que le modèle est techniquement prêt pour une validation fonctionnelle par les utilisateurs."
    },
    "correct": "C",
    "explanation": "<p>La <strong>normalisation</strong> est une technique de conception utilisée en modélisation relationnelle pour organiser les données de manière efficace.</p><p>Ses objectifs fondamentaux sont :</p><ul><li><strong>Réduire la redondance</strong> : Éviter le stockage des mêmes informations à plusieurs endroits.</li><li><strong>Assurer l'intégrité</strong> : Prévenir les anomalies de mise à jour, d'insertion et de suppression.</li><li><strong>Faciliter la maintenance</strong> : Maintenir une cohérence logique des données.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La normalisation en base de données répond à des règles mathématiques (formes normales) et non à une certification ISO logicielle."
      },
      {
        "l": "B",
        "t": "Le respect des normes de l'entreprise est une question de gouvernance et de nommage, pas de structure logique des données."
      },
      {
        "l": "D",
        "t": "La validation utilisateur concerne le respect des règles métier, alors que la normalisation est une étape technique de structuration."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension théorique des principes fondamentaux de la conception de bases de données et la distinction entre normalisation structurelle et normes administratives.",
    "summary": [
      "La normalisation vise avant tout à éliminer la redondance inutile des données.",
      "Elle permet de prévenir les anomalies de modification et de supprimer les incohérences.",
      "Il existe plusieurs formes normales (1NF, 2NF, 3NF, etc.) définissant le niveau de structuration.",
      "Une bonne normalisation améliore la fiabilité et la performance de gestion des données."
    ]
  },
  {
    "num": "Q5",
    "partie": "Bases de données relationnelles",
    "q": "Quelle est la nature de la contrainte fondamentale permettant d'établir une relation entre deux tables dans une base de données relationnelle ?",
    "choices": {
      "A": "Les deux tables doivent impérativement être indexées sur toutes leurs colonnes.",
      "B": "Les deux tables doivent posséder exactement le même nombre d'enregistrements.",
      "C": "La relation repose sur l'association entre une clé primaire (unique) et une clé étrangère (pouvant contenir des doublons).",
      "D": "Les deux tables doivent être non indexées pour garantir l'intégrité référentielle."
    },
    "correct": "C",
    "explanation": "<p>Dans le modèle relationnel, une relation entre deux tables est définie par la présence d'une <strong>clé étrangère</strong> dans une table qui fait référence à la <strong>clé primaire</strong> d'une autre table.</p><ul><li>La table contenant la clé primaire garantit l'unicité de chaque ligne (pas de doublons).</li><li>La table contenant la clé étrangère peut, quant à elle, faire référence plusieurs fois à la même clé primaire, ce qui permet d'établir des relations de type <em>un-à-plusieurs</em> (1:n).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'indexation améliore les performances de recherche, mais n'est pas une contrainte structurelle obligatoire pour établir une relation."
      },
      {
        "l": "B",
        "t": "Il n'y a aucune corrélation nécessaire entre le nombre de lignes (cardinalité) des deux tables pour créer une relation."
      },
      {
        "l": "D",
        "t": "Au contraire, l'indexation sur les clés étrangères est fortement recommandée pour optimiser les jointures et les performances globales."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de clés primaires, de clés étrangères et du fonctionnement des relations au sein d'une base de données SQL.",
    "summary": [
      "Une relation repose sur le lien entre une clé primaire et une clé étrangère.",
      "La clé primaire garantit l'unicité des enregistrements dans la table parente.",
      "La clé étrangère permet de lier plusieurs enregistrements enfants à un seul enregistrement parent.",
      "L'indexation n'est pas une condition de validité de la relation, bien qu'elle soit essentielle pour la performance."
    ]
  },
  {
    "num": "Q6",
    "partie": "Bases de données relationnelles",
    "q": "Quelle instruction PHP permet d'exécuter une requête SQL sur un serveur MySQL ?",
    "choices": {
      "A": "$myResult = mysqli_query($link, 'requete sql');",
      "B": "$myResult = mysql('requete sql');",
      "C": "$myResult = mysqli_fetch('requete sql');",
      "D": "$myResult = mysql;"
    },
    "correct": "A",
    "explanation": "<p>Pour exécuter une requête SQL en PHP, on utilise une fonction dédiée à l'interface de base de données. Historiquement, l'extension <strong>mysql_query</strong> était utilisée, mais elle est aujourd'hui <strong>obsolète et supprimée</strong> des versions récentes de PHP.</p><p>La norme actuelle consiste à utiliser l'extension <strong>mysqli</strong> (MySQL Improved) ou <strong>PDO</strong> (PHP Data Objects). La fonction <code>mysqli_query()</code> prend deux arguments principaux :</p><ul><li>La connexion à la base de données (le lien).</li><li>La chaîne de caractères contenant la requête SQL.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La fonction 'mysql()' n'existe pas dans les bibliothèques PHP natives pour interroger une base de données."
      },
      {
        "l": "C",
        "t": "La fonction 'mysqli_fetch' (ou 'mysql_fetch_array') sert à lire les résultats d'une requête déjà exécutée, elle ne permet pas d'envoyer la requête elle-même au serveur."
      },
      {
        "l": "D",
        "t": "L'instruction 'mysql' seule est un nom de module ou une constante indéfinie, elle ne permet aucune action sur la base de données."
      }
    ],
    "examiner": "Évaluer la connaissance de l'étudiant sur les fonctions de connexion et d'exécution de requêtes SQL en PHP, tout en vérifiant sa sensibilisation aux bonnes pratiques (obsolescence de l'extension mysql).",
    "summary": [
      "L'extension mysql_query est obsolète ; utilisez mysqli_query ou PDO.",
      "La fonction mysqli_query nécessite une instance de connexion active.",
      "L'exécution d'une requête est une étape distincte de la récupération des données (fetch).",
      "Toujours sécuriser les requêtes SQL contre les injections via des requêtes préparées."
    ]
  },
  {
    "num": "Q7",
    "partie": "Bases de données relationnelles",
    "q": "Dans le contexte de l'utilisation de l'extension MySQL native de PHP, que contient la variable $myResult suite à une requête de sélection ?",
    "choices": {
      "A": "Un tableau de données associatif ordinaire",
      "B": "Un identifiant de ressource (result set) permettant de parcourir les résultats avec mysql_fetch_array($myResult)",
      "C": "Un tableau de pointeurs vers les données stockées dans la mémoire vive du serveur MySQL",
      "D": "Un tableau de données typées et pré-chargées en mémoire"
    },
    "correct": "B",
    "explanation": "<p>En PHP, lors de l'exécution d'une requête SQL via l'extension <code>mysql_*</code> (obsolète), la fonction de requête ne renvoie pas directement les données sous forme de tableau.</p><p>Elle retourne un <strong>objet de ressource (resource)</strong> qui agit comme un pointeur ou un curseur sur l'ensemble des résultats stockés côté serveur. Pour extraire ces données ligne par ligne, il est nécessaire d'utiliser des fonctions d'itération telles que :</p><ul><li><code>mysql_fetch_array()</code></li><li><code>mysql_fetch_assoc()</code></li><li><code>mysql_fetch_row()</code></li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La requête ne récupère pas immédiatement les données dans un tableau PHP; elle renvoie uniquement une référence au jeu de résultats."
      },
      {
        "l": "C",
        "t": "Bien qu'il s'agisse techniquement d'une ressource interne, parler de 'tableau de pointeurs' est une simplification inexacte du fonctionnement du driver PHP."
      },
      {
        "l": "D",
        "t": "Les données ne sont pas chargées en mémoire sous forme de tableau typé dès l'exécution de la requête pour des raisons d'optimisation de performance."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la notion de 'jeu de résultats' (result set) et la distinction entre l'exécution d'une requête et l'extraction effective des données en PHP.",
    "summary": [
      "La fonction mysql_query retourne une ressource, et non les données brutes.",
      "Il faut utiliser une fonction fetch pour parcourir le résultat.",
      "L'extension mysql_* est obsolète depuis PHP 5.5 et supprimée depuis PHP 7.",
      "La ressource agit comme un curseur permettant de naviguer dans les lignes retournées par la base de données."
    ]
  },
  {
    "num": "Q8",
    "partie": "Bases de données relationnelles",
    "q": "Quelle fonction permet d'obtenir le nombre de colonnes (champs) présentes dans un jeu de résultats retourné par une requête MySQL en PHP ?",
    "choices": {
      "A": "$fields = mysql_num_fields($myResult);",
      "B": "$fields = mysql_field($myResult);",
      "C": "$fields = num_fields($myResult);",
      "D": "$fields = num($myResult);"
    },
    "correct": "A",
    "explanation": "<p>Pour compter le nombre de colonnes dans un jeu de résultats MySQL avec l'ancienne extension <strong>mysql</strong> de PHP, on utilise la fonction <strong>mysql_num_fields()</strong>.</p><p>Note importante : Cette extension est obsolète depuis PHP 5.5.0 et a été supprimée dans PHP 7.0.0. Il est fortement recommandé d'utiliser <strong>PDO</strong> ou <strong>mysqli</strong> (avec <code>mysqli_num_fields</code>) dans les projets modernes.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La fonction mysql_field() n'existe pas sous cette forme et n'est pas destinée à compter les colonnes."
      },
      {
        "l": "C",
        "t": "La fonction num_fields() n'est pas une fonction native de l'extension MySQL de PHP."
      },
      {
        "l": "D",
        "t": "La fonction num() n'est pas une fonction valide pour cette manipulation."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance des fonctions de base de l'API MySQL héritée en PHP.",
    "summary": [
      "La fonction correcte pour compter les colonnes dans l'extension mysql est mysql_num_fields().",
      "L'extension mysql est obsolète et ne doit plus être utilisée dans le développement actuel.",
      "Pour le développement moderne, privilégiez l'extension mysqli ou l'interface PDO.",
      "La syntaxe des fonctions en PHP est sensible au nom complet (ici le suffixe _fields est crucial)."
    ]
  },
  {
    "num": "Q9",
    "partie": "Bases de données relationnelles",
    "q": "Quelle fonction permet d'obtenir le nombre de lignes retournées par une requête dans le cadre de l'extension PHP MySQL originale ?",
    "choices": {
      "A": "$lignes = num_rows($myResult);",
      "B": "$lignes = mysql_num_rows($myResult);",
      "C": "$lignes = mysql_rows($myResult);",
      "D": "$lignes = mysql_num($myResult);"
    },
    "correct": "B",
    "explanation": "<p>Dans l'extension <strong>mysql</strong> originale de PHP (aujourd'hui obsolète), la fonction <code>mysql_num_rows()</code> est celle utilisée pour retourner le nombre de lignes présentes dans un jeu de résultats (<code>result set</code>).</p><ul><li>Elle prend en paramètre l'identifiant du résultat retourné par <code>mysql_query()</code>.</li><li><strong>Note importante :</strong> Cette extension a été supprimée dans PHP 7.0. Il est fortement recommandé d'utiliser <code>mysqli_num_rows()</code> ou la méthode <code>$result->num_rows</code> avec l'extension <strong>MySQLi</strong> ou <strong>PDO</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette syntaxe est incomplète et n'existe pas en tant que fonction native PHP standard."
      },
      {
        "l": "C",
        "t": "Il s'agit d'une confusion sur le nom de la fonction ; aucune fonction native ne porte ce nom."
      },
      {
        "l": "D",
        "t": "Il s'agit d'une simplification incorrecte du nom de la fonction, qui n'est pas reconnue par l'interpréteur PHP."
      }
    ],
    "examiner": "Évalue la connaissance des fonctions de l'extension MySQL native de PHP et la syntaxe associée à la manipulation des jeux de résultats.",
    "summary": [
      "La fonction mysql_num_rows() compte les lignes d'un résultat MySQL dans l'ancienne extension PHP.",
      "L'extension mysql_ est obsolète et supprimée depuis PHP 7.0 au profit de MySQLi ou PDO.",
      "Il est essentiel d'utiliser l'extension MySQLi avec la méthode $result->num_rows dans les développements modernes.",
      "La précision syntaxique est cruciale car les noms des fonctions PHP sont très spécifiques."
    ]
  },
  {
    "num": "Q10",
    "partie": "Bases de données relationnelles",
    "q": "Quel est le résultat produit par une jointure simple (INNER JOIN) entre deux tables ?",
    "choices": {
      "A": "Une ligne pour chaque combinaison possible entre les éléments des deux tables.",
      "B": "Une ligne pour chaque élément de la première table citée.",
      "C": "Une ligne pour chaque élément commun aux deux tables selon la condition de jointure.",
      "D": "Une ligne pour chaque élément de la dernière table citée."
    },
    "correct": "C",
    "explanation": "<p>Une jointure simple, souvent appelée <strong>INNER JOIN</strong>, est l'opération standard qui permet de combiner des colonnes de deux tables basées sur une condition de correspondance (généralement une égalité entre une clé primaire et une clé étrangère).</p><p>Le résultat contient uniquement les lignes où la condition de jointure est vérifiée dans les deux tables :</p><ul><li>Si une ligne dans la table A n'a pas de correspondance dans la table B, elle est exclue du résultat.</li><li>Si une ligne dans la table B n'a pas de correspondance dans la table A, elle est également exclue.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci décrit un produit cartésien (CROSS JOIN), qui combine chaque ligne de la première table avec chaque ligne de la seconde."
      },
      {
        "l": "B",
        "t": "Cela correspondrait à une jointure externe à gauche (LEFT JOIN) dans le cas où toutes les lignes de la table de gauche sont conservées."
      },
      {
        "l": "D",
        "t": "Cela correspondrait à une jointure externe à droite (RIGHT JOIN) dans le cas où toutes les lignes de la table de droite sont conservées."
      }
    ],
    "examiner": "Évaluer la compréhension fondamentale du mécanisme de filtrage inhérent à la jointure interne (INNER JOIN) en SQL.",
    "summary": [
      "Une jointure interne (INNER JOIN) ne retourne que les lignes qui possèdent une correspondance dans les deux tables.",
      "L'absence de correspondance dans l'une des tables entraîne l'exclusion de la ligne dans le résultat final.",
      "Il ne faut pas confondre la jointure simple avec le produit cartésien qui génère toutes les combinaisons possibles.",
      "La condition de jointure est l'élément clé qui détermine quelles données sont conservées."
    ]
  },
  {
    "num": "Q11",
    "partie": "Bases de données relationnelles",
    "q": "Qu'est-ce qu'une jointure gauche (LEFT JOIN) en SQL ?",
    "choices": {
      "A": "Une jointure qui ne retourne que les enregistrements possédant des correspondances dans les deux tables.",
      "B": "Une jointure qui retourne tous les enregistrements provenant des deux tables, qu'il y ait correspondance ou non.",
      "C": "Une jointure qui ne retourne aucun enregistrement, agissant comme un filtre restrictif.",
      "D": "Une jointure qui garantit l'affichage de tous les enregistrements de la table de gauche, complétés par les données correspondantes de la table de droite si elles existent."
    },
    "correct": "D",
    "explanation": "<p>La <strong>jointure gauche</strong> (ou <code>LEFT JOIN</code>) est un type de jointure qui permet de conserver l'intégralité des données de la table située à gauche de la clause <code>JOIN</code>.</p><ul><li>Si une correspondance est trouvée dans la table de droite, les colonnes associées sont remplies.</li><li>Si aucune correspondance n'est trouvée, les colonnes issues de la table de droite contiendront des valeurs <code>NULL</code>, mais la ligne de la table de gauche restera présente dans le résultat.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci définit une jointure interne (INNER JOIN), qui exclut les données orphelines."
      },
      {
        "l": "B",
        "t": "Ceci définit une jointure complète (FULL OUTER JOIN), qui combine les enregistrements des deux tables sans restriction."
      },
      {
        "l": "C",
        "t": "Une jointure qui ne retourne aucun élément n'est pas une opération de jointure standard, mais plutôt une erreur de logique de filtrage."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier si le candidat comprend la notion de conservation des données d'une table pivot lors d'une opération de jointure SQL.",
    "summary": [
      "Une jointure gauche (LEFT JOIN) priorise la table déclarée à gauche.",
      "Elle retourne systématiquement toutes les lignes de la table de gauche.",
      "Les lignes sans correspondance à droite reçoivent des valeurs NULL pour les colonnes de droite.",
      "Elle est essentielle pour lister des entités même lorsqu'elles n'ont pas de relations associées."
    ]
  },
  {
    "num": "Q12",
    "partie": "Bases de données relationnelles",
    "q": "Quelle requête SQL permet d'afficher tous les éléments de la table 'TITRES', en effectuant une jointure gauche (LEFT JOIN) avec la table 'AUTEUR' ?",
    "choices": {
      "A": "SELECT TITRE, AUTEUR FROM TITRES LEFT JOIN AUTEUR ON...",
      "B": "SELECT TITRE, AUTEUR FROM AUTEUR LEFT JOIN TITRES ON...",
      "C": "SELECT AUTEUR, TITRE FROM TITRES LEFT JOIN TITRES ON...",
      "D": "SELECT * FROM TITRES LEFT JOIN AUTEUR ON..."
    },
    "correct": "D",
    "explanation": "<p>La clause <strong>LEFT JOIN</strong> permet de récupérer tous les enregistrements de la table de gauche (celle indiquée avant le JOIN), même s'il n'y a aucune correspondance dans la table de droite.</p><p>Pour afficher <strong>tous</strong> les éléments de la table TITRES, il est impératif d'utiliser l'opérateur <strong>SELECT *</strong> (ou de lister toutes les colonnes nécessaires) et de placer TITRES à gauche du LEFT JOIN : <code>SELECT * FROM TITRES LEFT JOIN AUTEUR ON ...</code>.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que la structure soit correcte, le choix 'A' limite l'affichage aux colonnes TITRE et AUTEUR, contrairement à l'énoncé qui demande de faire apparaître tous les éléments."
      },
      {
        "l": "B",
        "t": "Inverser les tables (AUTEUR à gauche) donnerait la priorité à la table AUTEUR, ce qui ne garantit pas l'affichage de tous les titres."
      },
      {
        "l": "C",
        "t": "Cette requête tente une jointure sur la même table sans condition valide, ce qui est syntaxiquement et logiquement incorrect."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension du fonctionnement des jointures externes (LEFT JOIN) et la capacité à sélectionner l'intégralité des données d'une table cible.",
    "summary": [
      "Une jointure LEFT JOIN conserve toutes les lignes de la table située à gauche.",
      "L'utilisation de 'SELECT *' est nécessaire pour afficher tous les champs d'une table.",
      "L'ordre des tables dans une requête LEFT JOIN est crucial pour le résultat final.",
      "Si aucune correspondance n'est trouvée dans la table de droite, les colonnes correspondantes afficheront NULL."
    ]
  },
  {
    "num": "Q13",
    "partie": "Bases de données relationnelles",
    "q": "Quel est le mot-clé SQL standard utilisé pour modifier la structure d'une table existante ?",
    "choices": {
      "A": "MODIFY TABLE nomDeTable...",
      "B": "ALTER TABLE nomDeTable...",
      "C": "UPDATE TABLE nomDeTable...",
      "D": "DROP TABLE nomDeTable..."
    },
    "correct": "B",
    "explanation": "<p>En SQL, le langage de définition de données (<strong>DDL</strong>) est utilisé pour gérer la structure des objets. Pour modifier la structure d'une table (ajouter, supprimer ou modifier des colonnes), on utilise l'instruction <strong>ALTER TABLE</strong>.</p><ul><li><strong>ALTER</strong> est réservé à la modification de structure.</li><li><strong>UPDATE</strong> est une commande du langage de manipulation de données (<strong>DML</strong>) servant à modifier le contenu des lignes.</li><li><strong>DROP</strong> est utilisé pour supprimer une table entière.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le mot-clé 'MODIFY' est parfois utilisé comme clause spécifique au sein de l'instruction ALTER dans certains SGBD (comme MySQL), mais il ne constitue pas le mot-clé initial de l'instruction."
      },
      {
        "l": "C",
        "t": "'UPDATE' est une instruction DML utilisée pour modifier les données contenues dans les lignes d'une table, et non pour altérer sa structure."
      },
      {
        "l": "D",
        "t": "'DROP' est utilisé pour supprimer définitivement une table et toutes ses données de la base de données."
      }
    ],
    "examiner": "Évaluer la distinction entre les commandes DDL (Data Definition Language) et DML (Data Manipulation Language) et la connaissance de la syntaxe SQL fondamentale.",
    "summary": [
      "La commande ALTER TABLE permet de modifier la structure d'une table existante.",
      "Le langage DDL gère la structure (ALTER, CREATE, DROP), tandis que le DML gère les données (SELECT, UPDATE, INSERT).",
      "L'instruction UPDATE ne modifie jamais la structure (colonnes, types) d'une table.",
      "La suppression de la structure d'un objet se fait via DROP, non via ALTER."
    ]
  }
];
