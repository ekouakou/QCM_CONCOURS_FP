const QCM = [
  {
    "num": "Q1",
    "partie": "Bases de données MySQL",
    "q": "Quelle commande SQL permet de supprimer définitivement une table existante ainsi que toutes les données qu'elle contient ?",
    "choices": {
      "A": "DELETE TABLE nom_table;",
      "B": "DROP TABLE nom_table;",
      "C": "REMOVE TABLE nom_table;",
      "D": "TRUNCATE TABLE nom_table;"
    },
    "correct": "B",
    "explanation": "<p>La commande <strong>DROP TABLE</strong> est l'instruction DDL (Data Definition Language) utilisée pour supprimer totalement une table d'une base de données.</p><ul><li>Elle supprime la structure de la table, ses index, ses déclencheurs (triggers) et l'intégralité des données stockées.</li><li>Une fois exécutée, l'opération est irréversible (sauf restauration via une sauvegarde).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La commande DELETE n'existe pas avec la clause TABLE ; DELETE est utilisée pour supprimer des lignes spécifiques au sein d'une table."
      },
      {
        "l": "C",
        "t": "La commande REMOVE n'est pas une instruction SQL standard pour la gestion des objets de base de données."
      },
      {
        "l": "D",
        "t": "TRUNCATE vide la table de toutes ses données mais conserve sa structure (les colonnes et index restent en place)."
      }
    ],
    "examiner": "L'examinateur vérifie ici votre maîtrise des commandes DDL (Data Definition Language) et votre capacité à distinguer la suppression d'une structure de table par rapport à la simple suppression de lignes de données.",
    "summary": [
      "DROP TABLE supprime l'intégralité de la table et de ses données.",
      "TRUNCATE TABLE réinitialise la table sans supprimer sa structure.",
      "DELETE est utilisé uniquement pour manipuler des enregistrements individuels.",
      "La suppression par DROP est définitive et nécessite une grande prudence."
    ]
  },
  {
    "num": "Q2",
    "partie": "Bases de données MySQL",
    "q": "Quel est le fichier de configuration principal utilisé pour définir les paramètres de MySQL sur un système d'exploitation Windows ?",
    "choices": {
      "A": "Le fichier mysql.ini",
      "B": "Le fichier my.ini",
      "C": "La base de registre uniquement",
      "D": "La base de registre et le fichier mysql"
    },
    "correct": "B",
    "explanation": "<p>Sous Windows, MySQL utilise principalement le fichier <strong>my.ini</strong> pour stocker les configurations du serveur. Ce fichier permet de définir des variables système telles que le port d'écoute, le répertoire de données (datadir) et les limites de mémoire.</p><ul><li>Le fichier <strong>my.ini</strong> est l'équivalent du fichier <em>my.cnf</em> utilisé sur les systèmes Linux/Unix.</li><li>Bien que MySQL puisse lire certaines configurations depuis la base de registre, <em>my.ini</em> reste l'emplacement standard et recommandé pour la gestion des paramètres.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le nom 'mysql.ini' est une confusion courante, mais le fichier standard se nomme 'my.ini'."
      },
      {
        "l": "C",
        "t": "La base de registre est utilisée pour des réglages système (comme le démarrage du service), mais elle n'est pas le fichier de configuration principal pour l'instance MySQL."
      },
      {
        "l": "D",
        "t": "Cette option est incorrecte car elle propose un mélange erroné de méthodes de configuration."
      }
    ],
    "examiner": "Évaluer la connaissance de l'architecture de configuration de MySQL sur l'environnement Windows.",
    "summary": [
      "MySQL sur Windows utilise le fichier 'my.ini' pour sa configuration.",
      "Le fichier 'my.ini' est l'équivalent du 'my.cnf' sous Linux.",
      "Il permet de personnaliser le comportement du serveur et les performances.",
      "La localisation de ce fichier est cruciale pour le bon démarrage du service MySQL."
    ]
  },
  {
    "num": "Q3",
    "partie": "Bases de données MySQL",
    "q": "Quelle est la contrainte fondamentale permettant d'établir une relation entre deux tables dans une base de données relationnelle ?",
    "choices": {
      "A": "Les tables doivent obligatoirement être indexées sur toutes leurs colonnes.",
      "B": "Les tables doivent impérativement posséder le même nombre d'enregistrements.",
      "C": "La table source (parent) doit posséder une clé primaire unique, tandis que la table liée (enfant) peut contenir des doublons dans sa clé étrangère.",
      "D": "Les tables doivent être exemptes de tout index pour permettre la liaison."
    },
    "correct": "C",
    "explanation": "<p>Dans le modèle relationnel, une relation est établie entre une <strong>clé primaire</strong> (dans la table parent) et une <strong>clé étrangère</strong> (dans la table enfant).</p><ul><li>La clé primaire garantit l'unicité de chaque enregistrement dans la table parente.</li><li>La clé étrangère dans la table enfant peut se répéter (présence de doublons) pour permettre à plusieurs enregistrements d'être associés à une même entité parente (relation 1-N).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'indexation est une recommandation pour la performance, mais elle n'est pas une contrainte structurelle pour définir une relation."
      },
      {
        "l": "B",
        "t": "Il n'y a aucune corrélation imposée entre le nombre de lignes des deux tables liées."
      },
      {
        "l": "D",
        "t": "Au contraire, l'utilisation d'index sur les clés étrangères est fortement conseillée pour optimiser les performances des jointures."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts de clés primaires, de clés étrangères et de l'intégrité référentielle dans un système de gestion de bases de données.",
    "summary": [
      "Une relation repose sur le lien entre une clé primaire et une clé étrangère.",
      "L'unicité est requise uniquement sur la colonne référencée (clé primaire).",
      "La colonne de liaison dans la table enfant accepte des doublons pour gérer les relations un-à-plusieurs.",
      "L'indexation des colonnes de liaison est une pratique recommandée pour la rapidité des requêtes SQL."
    ]
  },
  {
    "num": "Q4",
    "partie": "Bases de données MySQL",
    "q": "Quel fichier de configuration est principalement utilisé pour définir les paramètres de MySQL sous le système d'exploitation Windows ?",
    "choices": {
      "A": "Le fichier mysql.ini",
      "B": "Le fichier my.ini",
      "C": "La base de registre uniquement",
      "D": "La base de registre combinée avec un fichier mysql"
    },
    "correct": "B",
    "explanation": "<p>Sous Windows, MySQL utilise le fichier <strong>my.ini</strong> comme fichier de configuration principal pour définir les paramètres du serveur, tels que les ports, le répertoire des données, la gestion de la mémoire (buffers), et les options de moteur de stockage.</p><p>Bien que d'autres systèmes (comme Linux) utilisent généralement <code>my.cnf</code>, l'architecture Windows privilégie <code>my.ini</code>, qui est lu lors du démarrage du service MySQL.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le fichier 'mysql.ini' n'est pas le standard conventionnel utilisé par l'installeur officiel de MySQL pour la configuration globale."
      },
      {
        "l": "C",
        "t": "La base de registre Windows peut contenir des informations de service, mais elle ne sert pas de fichier de configuration principal pour les paramètres internes du moteur MySQL."
      },
      {
        "l": "D",
        "t": "Cette réponse est incorrecte car elle mélange des mécanismes qui ne constituent pas la méthode standard de configuration de MySQL sur Windows."
      }
    ],
    "examiner": "Évaluer la connaissance pratique de l'administration système et de la configuration de l'environnement MySQL sur plateforme Windows.",
    "summary": [
      "MySQL utilise le fichier 'my.ini' comme fichier de configuration standard sur Windows.",
      "Le fichier de configuration permet de personnaliser les performances et le comportement du serveur.",
      "La configuration du serveur est distincte des entrées de la base de registre utilisées pour le service Windows.",
      "Une bonne connaissance des fichiers de configuration est essentielle pour le dépannage et l'optimisation des bases de données."
    ]
  },
  {
    "num": "Q5",
    "partie": "Bases de données MySQL",
    "q": "Quelle est la principale contrainte lors de la définition d'une relation entre deux tables au sein d'une base de données relationnelle ?",
    "choices": {
      "A": "Les deux tables doivent impérativement être indexées sur leurs colonnes respectives.",
      "B": "Les deux tables doivent obligatoirement posséder le même nombre d'enregistrements.",
      "C": "La relation est typiquement établie entre une clé primaire (unique) et une clé étrangère (pouvant comporter des doublons).",
      "D": "Les deux tables doivent être dépourvues d'index pour permettre la jointure."
    },
    "correct": "C",
    "explanation": "<p>Dans le modèle relationnel, une relation entre deux tables est généralement construite sur la base d'une <strong>clé primaire</strong> (dans la table parente) et d'une <strong>clé étrangère</strong> (dans la table enfant).</p><ul><li>La clé primaire garantit l'unicité de chaque ligne.</li><li>La clé étrangère permet de référencer la table parente et, selon la cardinalité (ex: relation un-à-plusieurs), elle peut tout à fait contenir des valeurs en double (plusieurs enfants pour un seul parent).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Si l'indexation est fortement recommandée pour les performances, elle n'est pas une contrainte structurelle obligatoire pour créer la relation elle-même."
      },
      {
        "l": "B",
        "t": "Les tables liées n'ont aucunement besoin d'avoir un nombre identique de lignes ; une relation permet justement de lier un enregistrement à plusieurs autres."
      },
      {
        "l": "D",
        "t": "L'absence d'index rendrait les requêtes de jointure extrêmement lentes, mais ce n'est pas une contrainte de définition de la relation."
      }
    ],
    "examiner": "Évaluer la compréhension des concepts fondamentaux de modélisation relationnelle, notamment la distinction entre clé primaire et clé étrangère.",
    "summary": [
      "Une relation repose sur l'association entre une clé primaire et une clé étrangère.",
      "La clé primaire assure l'unicité des données dans la table référencée.",
      "La clé étrangère permet d'établir le lien et peut accepter des doublons dans une relation de type 1:N.",
      "L'indexation est une pratique d'optimisation, non une condition sine qua non de la relation."
    ]
  },
  {
    "num": "Q6",
    "partie": "Bases de données MySQL",
    "q": "Quelle fonction PHP permet d'exécuter une requête SQL sur une base de données MySQL ?",
    "choices": {
      "A": "$myResult = mysqli_query($link, $query);",
      "B": "$myResult = mysql($query);",
      "C": "$myResult = mysql_fetch($query);",
      "D": "$myResult = mysql_execute($query);"
    },
    "correct": "A",
    "explanation": "<p>Pour interagir avec une base de données MySQL via PHP, on utilise l'extension <strong>MySQLi</strong> (MySQL Improved). La fonction principale pour envoyer une requête est <code>mysqli_query()</code>.</p><p>Note importante : L'ancienne extension <code>mysql_*</code> (utilisée dans l'énoncé original) est obsolète depuis PHP 5.5.0 et supprimée depuis PHP 7.0.0. Il est impératif d'utiliser <strong>MySQLi</strong> ou <strong>PDO</strong>.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La fonction 'mysql()' n'existe pas dans l'API PHP pour exécuter des requêtes."
      },
      {
        "l": "C",
        "t": "La fonction 'mysql_fetch' (ou mysqli_fetch_array) sert à récupérer les résultats d'une requête déjà exécutée, pas à l'envoyer."
      },
      {
        "l": "D",
        "t": "La fonction 'mysql_execute' n'est pas une fonction standard de l'API PHP pour MySQL."
      }
    ],
    "examiner": "Évalue la connaissance de l'API PHP pour la manipulation de bases de données et la distinction entre l'exécution d'une requête et le parcours des résultats.",
    "summary": [
      "L'extension mysql_* est obsolète et ne doit plus être utilisée.",
      "Utilisez l'extension MySQLi ou PDO pour vos connexions et requêtes.",
      "mysqli_query() est la fonction standard pour envoyer une instruction SQL au serveur.",
      "Il faut toujours fournir un lien de connexion valide en premier argument de mysqli_query()."
    ]
  },
  {
    "num": "Q7",
    "partie": "Bases de données MySQL",
    "q": "Dans le contexte de l'extension PHP 'mysql_*' (obsolète), que contient la variable $myResult suite à l'exécution d'une requête SELECT via mysql_query() ?",
    "choices": {
      "A": "Un tableau de données ordinaire.",
      "B": "Une ressource (pointeur) représentant le jeu de résultats, exploitable via des fonctions comme mysql_fetch_array().",
      "C": "Un tableau de pointeurs vers les données stockées dans MySQL.",
      "D": "Un tableau de données typé."
    },
    "correct": "B",
    "explanation": "<p>Dans l'ancienne extension <strong>mysql_*</strong> de PHP, la fonction <code>mysql_query()</code> ne renvoie pas directement les données sous forme de tableau. Elle retourne une <strong>ressource</strong> (un identifiant de résultat ou <em>result set pointer</em>).</p><p>Pour accéder aux données proprement dites, il est nécessaire de passer cette ressource à des fonctions de lecture comme :</p><ul><li><code>mysql_fetch_array()</code></li><li><code>mysql_fetch_assoc()</code></li><li><code>mysql_fetch_row()</code></li></ul><p>Ces fonctions extraient les données ligne par ligne et les convertissent en tableaux PHP.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La requête ne retourne pas immédiatement les données en mémoire sous forme de tableau PHP, mais une référence vers le résultat côté serveur."
      },
      {
        "l": "C",
        "t": "Bien qu'il s'agisse d'un pointeur interne, le terme 'tableau de pointeurs' est techniquement incorrect pour décrire l'objet 'resource' retourné par PHP."
      },
      {
        "l": "D",
        "t": "PHP ne retourne pas un 'tableau typé' après une requête SQL ; le typage est géré dynamiquement lors de l'extraction par les fonctions de fetch."
      }
    ],
    "examiner": "Évaluer la compréhension du fonctionnement des anciennes APIs MySQL en PHP et la distinction entre une ressource de résultat et les données extraites.",
    "summary": [
      "La fonction mysql_query() retourne une ressource et non les données brutes.",
      "Il faut utiliser des fonctions de fetch (ex: mysql_fetch_array) pour transformer cette ressource en données exploitables.",
      "L'extension mysql_* est obsolète et sécuritairement déconseillée au profit de PDO ou MySQLi.",
      "Le concept de 'ressource' agit comme un curseur permettant de parcourir les résultats de la requête."
    ]
  },
  {
    "num": "Q8",
    "partie": "Bases de données MySQL",
    "q": "Quelle fonction PHP, issue de l'extension MySQL originale (obsolète), permet de déterminer le nombre de colonnes (champs) contenues dans un résultat de requête SQL ?",
    "choices": {
      "A": "mysql_num_fields($myResult)",
      "B": "mysql_field($myResult)",
      "C": "num_fields($myResult)",
      "D": "num($myResult)"
    },
    "correct": "A",
    "explanation": "<p>Dans l'ancienne extension PHP <strong>mysql_*</strong>, la fonction <code>mysql_num_fields()</code> est utilisée pour récupérer le nombre de colonnes dans un jeu de résultats retourné par une requête <code>SELECT</code>.</p><ul><li><strong>Note importante :</strong> L'extension <code>mysql_*</code> est désormais totalement <strong>obsolète</strong> et supprimée depuis PHP 7.0. Il est fortement recommandé d'utiliser <code>mysqli_num_fields()</code> ou la méthode <code>PDOStatement::columnCount()</code> dans les applications modernes.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La fonction mysql_field n'existe pas en tant que telle pour compter les colonnes; elle est souvent confondue avec des fonctions de récupération d'informations sur un champ spécifique."
      },
      {
        "l": "C",
        "t": "num_fields n'est pas une fonction native de PHP, il manque le préfixe propre à l'extension utilisée."
      },
      {
        "l": "D",
        "t": "num est une fonction générique inexistante dans le contexte de l'API MySQL de PHP."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance des anciennes fonctions de l'API MySQL en PHP et la capacité à identifier la syntaxe correcte parmi des options similaires.",
    "summary": [
      "La fonction pour compter les colonnes dans l'extension mysql était mysql_num_fields().",
      "L'extension mysql est obsolète et ne doit plus être utilisée dans les nouveaux projets.",
      "Privilégiez les extensions mysqli ou PDO pour interagir avec les bases de données MySQL.",
      "La rigueur syntaxique est essentielle en PHP pour appeler les fonctions de bibliothèque."
    ]
  },
  {
    "num": "Q9",
    "partie": "Bases de données MySQL",
    "q": "Quelle est la fonction correcte permettant d'obtenir le nombre de lignes retournées par une requête SELECT avec l'extension PHP mysql ?",
    "choices": {
      "A": "$lignes = num_rows($myResult);",
      "B": "$lignes = mysql_num_rows($myResult);",
      "C": "$lignes = mysql_rows($myResult);",
      "D": "$lignes = mysql_num($myResult);"
    },
    "correct": "B",
    "explanation": "<p>Dans l'ancienne extension PHP <strong>mysql</strong> (aujourd'hui obsolète), la fonction <strong>mysql_num_rows()</strong> est celle qui permet de retourner le nombre de lignes dans un ensemble de résultats (result set).</p><p>Il est important de noter que cette fonction ne fonctionne que pour les requêtes de type <code>SELECT</code> ou <code>SHOW</code>.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "num_rows n'existe pas en tant que fonction native PHP ; c'est une méthode de l'objet mysqli."
      },
      {
        "l": "C",
        "t": "mysql_rows n'est pas une fonction valide de l'extension mysql."
      },
      {
        "l": "D",
        "t": "mysql_num n'est pas une fonction valide de l'extension mysql."
      }
    ],
    "examiner": "Évaluer la connaissance de l'API historique de PHP pour interagir avec MySQL et la syntaxe spécifique des fonctions de récupération de métadonnées.",
    "summary": [
      "La fonction mysql_num_rows() est utilisée pour compter les lignes d'un résultat.",
      "Cette fonction est spécifique à l'extension mysql (obsolète depuis PHP 5.5).",
      "Pour les versions modernes, il convient d'utiliser l'extension MySQLi ou PDO.",
      "La fonction s'applique uniquement aux résultats de requêtes SELECT."
    ]
  },
  {
    "num": "Q10",
    "partie": "Bases de données MySQL",
    "q": "Lorsqu'on réalise une jointure simple (INNER JOIN) entre deux tables, quel est le résultat obtenu au niveau des lignes en sortie ?",
    "choices": {
      "A": "Une ligne pour chaque combinaison possible d'éléments des deux tables.",
      "B": "Une ligne pour chaque élément présent uniquement dans la première table.",
      "C": "Une ligne pour chaque élément commun aux deux tables selon la condition de jointure.",
      "D": "Une ligne pour chaque élément présent uniquement dans la deuxième table."
    },
    "correct": "C",
    "explanation": "<p>Une <strong>jointure interne</strong> (ou <em>INNER JOIN</em>), souvent appelée jointure simple, permet de combiner des lignes de deux tables basées sur une condition de correspondance (généralement une égalité entre deux clés).</p><p>Le résultat ne contient que les lignes pour lesquelles la condition de jointure est <strong>vraie</strong> dans les deux tables. Si un enregistrement d'une table ne trouve pas de correspondance dans l'autre, il est exclu du résultat final.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci correspond à une jointure croisée (CROSS JOIN) ou produit cartésien, et non à une jointure simple."
      },
      {
        "l": "B",
        "t": "Ceci décrit le comportement d'une jointure externe gauche (LEFT JOIN) qui conserverait tous les éléments de la table de gauche."
      },
      {
        "l": "D",
        "t": "Ceci décrit le comportement d'une jointure externe droite (RIGHT JOIN) qui conserverait tous les éléments de la table de droite."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la logique de filtrage des données lors de l'utilisation de l'opérateur INNER JOIN par rapport aux autres types de jointures.",
    "summary": [
      "La jointure simple (INNER JOIN) ne retourne que les correspondances exactes.",
      "Toute ligne sans correspondance dans l'autre table est automatiquement filtrée.",
      "Le nombre de lignes résultantes dépend de la cardinalité de la relation (1:1 ou 1:N).",
      "C'est l'opérateur de jointure par défaut le plus utilisé en SQL."
    ]
  },
  {
    "num": "Q11",
    "partie": "Bases de données MySQL",
    "q": "Qu'est-ce qu'une jointure gauche (LEFT JOIN) dans le contexte d'une base de données relationnelle ?",
    "choices": {
      "A": "Une jointure qui ne retourne que les enregistrements possédant des correspondances dans les deux tables.",
      "B": "Une jointure qui retourne tous les enregistrements provenant des deux tables, avec des valeurs NULL là où les correspondances manquent.",
      "C": "Une jointure qui ne retourne aucun enregistrement, agissant comme un filtre restrictif total.",
      "D": "Une jointure qui garantit que tous les enregistrements de la table de gauche apparaissent, complétés par les données correspondantes de la table de droite si elles existent."
    },
    "correct": "D",
    "explanation": "<p>Une <strong>jointure gauche (LEFT JOIN)</strong> est une opération qui permet de récupérer l'intégralité des lignes de la table située à gauche de la clause JOIN.</p><ul><li>Si une ligne de la table de gauche possède une correspondance dans la table de droite, les colonnes associées sont affichées.</li><li>Si aucune correspondance n'existe, les colonnes issues de la table de droite sont affichées avec des valeurs <strong>NULL</strong>.</li></ul><p>Cela permet de conserver les données principales même si les données liées sont absentes.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci définit une jointure interne (INNER JOIN), qui exclut les enregistrements sans correspondance."
      },
      {
        "l": "B",
        "t": "Ceci décrit une jointure complète (FULL OUTER JOIN), qui inclut tous les enregistrements des deux tables sans privilégier un côté."
      },
      {
        "l": "C",
        "t": "Une jointure ne peut pas par définition exclure tous les éléments, à moins que les conditions de jointure ne soient volontairement impossibles à satisfaire."
      }
    ],
    "examiner": "Évaluer la compréhension de la manipulation des données relationnelles et la capacité à distinguer le fonctionnement des différents types de jointures SQL.",
    "summary": [
      "Le LEFT JOIN conserve toujours la totalité des enregistrements de la table située à gauche.",
      "Les correspondances de la table de droite sont ajoutées lorsqu'elles existent.",
      "En l'absence de correspondance, les colonnes de la table de droite affichent NULL.",
      "C'est une clause essentielle pour lister des entités même si leurs relations (clés étrangères) ne sont pas renseignées."
    ]
  },
  {
    "num": "Q12",
    "partie": "Bases de données MySQL",
    "q": "Quelle requête SQL permet d'afficher tous les éléments de la table 'TITRES', en effectuant une jointure gauche avec la table 'AUTEUR' ?",
    "choices": {
      "A": "SELECT TITRE, AUTEUR FROM TITRES LEFT JOIN AUTEUR ON ...",
      "B": "SELECT TITRE, AUTEUR FROM AUTEUR LEFT JOIN TITRES ON ...",
      "C": "SELECT AUTEUR, TITRE FROM TITRES LEFT JOIN TITRES ON ...",
      "D": "SELECT * FROM TITRES LEFT JOIN AUTEUR ON ..."
    },
    "correct": "D",
    "explanation": "<p>Pour afficher <strong>tous les éléments</strong> d'une table cible lors d'une jointure, on utilise l'opérateur <code>LEFT JOIN</code>. La syntaxe <code>SELECT *</code> permet de récupérer l'ensemble des colonnes des deux tables impliquées dans la jointure.</p><p>Le choix A est incorrect car il ne sélectionne que deux colonnes spécifiques au lieu de tout le contenu, et le choix D, bien que comportant une syntaxe incomplète dans l'énoncé d'origine, est le seul à proposer l'instruction <code>SELECT *</code> conforme à l'objectif de lister tous les éléments de la table source.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que la jointure soit correcte, cette option restreint les colonnes affichées (SELECT TITRE, AUTEUR) au lieu d'afficher tous les éléments."
      },
      {
        "l": "B",
        "t": "Cette requête inverse l'ordre des tables, ce qui transformerait la table principale en 'AUTEUR', ne garantissant pas l'affichage de tous les 'TITRES'."
      },
      {
        "l": "C",
        "t": "Cette option tente une auto-jointure (TITRES sur TITRES), ce qui est inapproprié pour associer des titres à leurs auteurs respectifs."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la maîtrise de la clause LEFT JOIN et la capacité à sélectionner l'intégralité des données d'une table avec l'astérisque (*).",
    "summary": [
      "Une jointure LEFT JOIN conserve toutes les lignes de la table de gauche.",
      "L'astérisque (*) est le caractère générique pour sélectionner toutes les colonnes d'une table.",
      "L'ordre des tables dans une requête LEFT JOIN est crucial pour déterminer quelle table est préservée.",
      "Une jointure nécessite une condition de jointure (clause ON) pour lier les tables correctement."
    ]
  },
  {
    "num": "Q13",
    "partie": "Bases de données MySQL",
    "q": "Quelle est la commande SQL correcte permettant d'initier la modification de la structure d'une table existante ?",
    "choices": {
      "A": "MODIFY TABLE nom_table...",
      "B": "ALTER TABLE nom_table...",
      "C": "UPDATE TABLE nom_table...",
      "D": "DROP TABLE nom_table..."
    },
    "correct": "B",
    "explanation": "<p>En langage SQL, la commande <strong>ALTER TABLE</strong> est le mot-clé standard utilisé pour modifier la structure d'une table existante (ajouter, supprimer ou modifier des colonnes, changer des index, etc.).</p><ul><li><strong>ALTER</strong> concerne la structure (DDL - Data Definition Language).</li><li><strong>UPDATE</strong> concerne les données (DML - Data Manipulation Language).</li><li><strong>DROP</strong> est utilisé pour supprimer un objet entier (table, base, etc.).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "MODIFY est une clause utilisée après ALTER TABLE pour modifier une colonne spécifique, mais ce n'est pas le mot-clé initial de la requête."
      },
      {
        "l": "C",
        "t": "UPDATE est utilisé pour modifier les valeurs contenues dans les lignes d'une table, et non pour modifier la structure (schéma) de la table elle-même."
      },
      {
        "l": "D",
        "t": "DROP TABLE est une instruction DDL qui supprime définitivement la structure et les données d'une table, elle ne sert pas à la modifier."
      }
    ],
    "examiner": "Évaluer la maîtrise des commandes DDL (Data Definition Language) et la distinction entre la modification de structure et la modification de contenu.",
    "summary": [
      "ALTER TABLE est la commande dédiée à la modification du schéma d'une table.",
      "La commande MODIFY est utilisée en complément après ALTER pour définir le changement sur une colonne précise.",
      "L'instruction UPDATE est réservée à la manipulation des données (lignes) et non de la structure.",
      "DROP TABLE est une action destructive qui supprime l'objet table de la base de données."
    ]
  },
  {
    "num": "Q14",
    "partie": "Bases de données MySQL",
    "q": "Dans le contexte d'une base de données MySQL, quelle est la fonction principale de l'instruction 'JOIN' lors de la récupération de données ?",
    "choices": {
      "A": "Supprimer les enregistrements en double dans une table.",
      "B": "Combiner des lignes provenant de deux ou plusieurs tables basées sur une colonne commune.",
      "C": "Modifier la structure d'une table existante en ajoutant une nouvelle contrainte.",
      "D": "Trier les résultats d'une requête de manière croissante ou décroissante."
    },
    "correct": "B",
    "explanation": "<p>L'instruction <strong>JOIN</strong> est fondamentale en SQL pour effectuer des requêtes relationnelles. Elle permet d'interroger simultanément plusieurs tables liées entre elles par une clé étrangère ou une colonne commune.</p><ul><li><strong>INNER JOIN</strong> : Retourne les lignes qui ont des correspondances dans les deux tables.</li><li><strong>LEFT JOIN</strong> : Retourne toutes les lignes de la table de gauche et les correspondances de la table de droite.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La suppression des doublons s'effectue généralement via le mot-clé DISTINCT ou par une opération de nettoyage de données, et non par un JOIN."
      },
      {
        "l": "C",
        "t": "La modification de la structure d'une table s'effectue avec l'instruction ALTER TABLE, pas via un JOIN."
      },
      {
        "l": "D",
        "t": "Le tri des données se réalise via la clause ORDER BY, et non par une jointure."
      }
    ],
    "examiner": "Évaluer la compréhension de la manipulation des données relationnelles et la maîtrise de la syntaxe SQL pour les jointures.",
    "summary": [
      "L'instruction JOIN permet de croiser des données issues de tables distinctes.",
      "Une condition de correspondance est nécessaire pour lier les tables (généralement une clé primaire et une clé étrangère).",
      "Le choix du type de jointure (INNER, LEFT, RIGHT) définit le comportement vis-à-vis des données manquantes.",
      "La clause JOIN est essentielle pour respecter la normalisation des bases de données."
    ]
  }
];
