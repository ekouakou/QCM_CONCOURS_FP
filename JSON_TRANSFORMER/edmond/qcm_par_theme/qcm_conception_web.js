const QCM = [
  {
    "num": "Q1",
    "partie": "Conception Web",
    "q": "Quelle est la syntaxe correcte pour insérer un commentaire au sein d'un fichier CSS ?",
    "choices": {
      "A": "' ceci est un commentaire",
      "B": "<!-- ceci est un commentaire -->",
      "C": "// ceci est un commentaire //",
      "D": "/* ceci est un commentaire */"
    },
    "correct": "D",
    "explanation": "<p>En CSS, les commentaires servent à annoter le code sans qu'il ne soit interprété par le navigateur. La syntaxe officielle, héritée du langage C, est la suivante :</p><ul><li>Ouverture : <strong>/*</strong></li><li>Fermeture : <strong>*/</strong></li></ul><p>Tout ce qui est compris entre ces deux balises est ignoré par le moteur de rendu CSS.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'apostrophe simple n'est pas un délimiteur de commentaire en CSS et générera une erreur de syntaxe."
      },
      {
        "l": "B",
        "t": "Cette syntaxe <!-- --> est utilisée pour les commentaires dans les fichiers HTML, pas pour les fichiers CSS."
      },
      {
        "l": "C",
        "t": "Bien que les doubles slashs // soient utilisés dans les langages comme JavaScript ou C++, ils ne sont pas supportés par la norme CSS pour les commentaires multi-lignes."
      }
    ],
    "examiner": "Évaluer la connaissance fondamentale de la syntaxe CSS et la distinction entre les types de commentaires selon le langage (HTML vs CSS).",
    "summary": [
      "La syntaxe unique pour les commentaires en CSS est /* commentaire */.",
      "Il n'existe pas de syntaxe pour les commentaires sur une seule ligne (type //) en CSS standard.",
      "Les commentaires HTML <!-- --> ne doivent jamais être utilisés dans une feuille de style CSS.",
      "L'utilisation d'une syntaxe incorrecte peut bloquer l'interprétation des règles CSS qui suivent dans le fichier."
    ]
  },
  {
    "num": "Q2",
    "partie": "Conception Web",
    "q": "Quel est l'élément HTML standard utilisé pour lier une feuille de style externe à une page web ?",
    "choices": {
      "A": "<stylesheet>style.css</stylesheet>",
      "B": "<link rel=\"stylesheet\" type=\"text/css\" href=\"style.css\">",
      "C": "<style src=\"style.css\">",
      "D": "<style src=\"style.css\" />"
    },
    "correct": "B",
    "explanation": "<p>Pour lier une feuille de style externe (CSS) à un document HTML, la balise standard est <strong>&lt;link&gt;</strong>.</p><ul><li>L'attribut <strong>rel=\"stylesheet\"</strong> indique au navigateur que le fichier lié est une feuille de style.</li><li>L'attribut <strong>href</strong> spécifie le chemin vers le fichier CSS.</li><li>La balise <strong>&lt;link&gt;</strong> se place exclusivement dans la section <strong>&lt;head&gt;</strong> du document HTML.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La balise <stylesheet> n'existe pas dans les spécifications HTML5."
      },
      {
        "l": "C",
        "t": "La balise <style> est utilisée pour insérer du CSS interne (entre des balises <style>...</style>) et ne supporte pas l'attribut 'src'."
      },
      {
        "l": "D",
        "t": "Bien que la syntaxe soit proche de l'auto-fermeture, la balise <style> ne permet pas de charger un fichier externe via un attribut 'src'."
      }
    ],
    "examiner": "Évaluer la maîtrise de l'intégration des ressources externes dans un document HTML.",
    "summary": [
      "La balise <link> est l'unique standard pour lier des fichiers CSS externes.",
      "L'attribut rel=\"stylesheet\" est obligatoire pour que le navigateur interprète le fichier lié comme du CSS.",
      "La balise <style> est réservée au code CSS écrit directement dans la page.",
      "Les balises de liaison doivent toujours être situées dans l'en-tête (<head>) du document."
    ]
  },
  {
    "num": "Q3",
    "partie": "Conception Web",
    "q": "Quelle balise HTML est utilisée pour intégrer des styles CSS directement à l'intérieur d'un document HTML ?",
    "choices": {
      "A": "<style></style>",
      "B": "<styles></styles>",
      "C": "<css></css>",
      "D": "<script></script>"
    },
    "correct": "A",
    "explanation": "<p>La balise <strong>&lt;style&gt;</strong> est l'élément HTML standard utilisé pour définir des règles de style CSS internes au sein d'une page Web.</p><ul><li>Elle est généralement placée dans la section <strong>&lt;head&gt;</strong> du document.</li><li>Le navigateur interprète le contenu de cette balise comme des directives de mise en forme CSS.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La balise <styles> n'existe pas en HTML ; il s'agit d'une erreur courante consistant à ajouter un 's' au nom de l'élément."
      },
      {
        "l": "C",
        "t": "La balise <css> n'est pas une balise valide en HTML. Le langage CSS est lié au document via l'attribut 'rel=\"stylesheet\"' d'un lien ou via la balise <style>."
      },
      {
        "l": "D",
        "t": "La balise <script> est utilisée pour inclure du code JavaScript dans un document, et non pour définir des styles CSS."
      }
    ],
    "examiner": "L'examinateur vérifie la connaissance de la structure de base du langage HTML et la capacité du candidat à distinguer les balises de structure, de style et de script.",
    "summary": [
      "La balise <style> permet d'inclure du CSS directement dans le document HTML.",
      "Il n'existe pas d'élément <styles> ou <css> dans les spécifications HTML.",
      "La balise <script> est strictement réservée à l'exécution de scripts (JavaScript).",
      "L'utilisation de la balise <style> est recommandée pour des styles spécifiques à une seule page."
    ]
  },
  {
    "num": "Q4",
    "partie": "Conception Web",
    "q": "Quelle propriété CSS permet de mettre du texte en gras ?",
    "choices": {
      "A": "font-weight: bold;",
      "B": "style: bold;",
      "C": "font-bold: true;",
      "D": "bold: true;"
    },
    "correct": "A",
    "explanation": "<p>En CSS, pour modifier l'épaisseur de la police d'un élément, on utilise la propriété <strong>font-weight</strong>. La valeur <code>bold</code> est le standard pour appliquer le gras. Il est important de noter que le CSS ne suit pas une syntaxe de type 'boolean' (comme <code>true</code> ou <code>false</code>) pour cette propriété.</p><ul><li>La syntaxe correcte est : <code>sélecteur { font-weight: bold; }</code>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La propriété 'style' n'existe pas en CSS pour définir l'épaisseur d'une police."
      },
      {
        "l": "C",
        "t": "Le CSS n'utilise pas de valeurs booléennes comme 'true' ou 'false' pour les propriétés de style."
      },
      {
        "l": "D",
        "t": "'bold' n'est pas une propriété CSS valide, mais une valeur associée à 'font-weight'."
      }
    ],
    "examiner": "Évalue la connaissance de la syntaxe CSS de base et des propriétés typographiques standard.",
    "summary": [
      "La propriété CSS pour gérer l'épaisseur d'une police est font-weight.",
      "La valeur standard pour mettre un texte en gras est 'bold'.",
      "Les propriétés CSS ne supportent pas les valeurs booléennes.",
      "Il faut distinguer les noms de propriétés des valeurs associées."
    ]
  },
  {
    "num": "Q5",
    "partie": "Conception Web",
    "q": "Qu'est-ce que PHP et MySQL dans le contexte du développement web ?",
    "choices": {
      "A": "Des navigateurs pour naviguer sur Internet.",
      "B": "Des outils utilisés pour la création et la gestion de sites web dynamiques.",
      "C": "Des sigles d'organismes internationaux régissant les protocoles Internet.",
      "D": "Des bibliothèques natives du langage JavaScript dédiées à la gestion des bases de données."
    },
    "correct": "B",
    "explanation": "<p>Dans le développement web, <strong>PHP</strong> (Hypertext Preprocessor) est un langage de script côté serveur, et <strong>MySQL</strong> est un système de gestion de bases de données relationnelles (SGBDR).</p><ul><li>PHP permet de générer du contenu dynamique sur les pages web.</li><li>MySQL permet de stocker, organiser et manipuler les données nécessaires au fonctionnement de ces sites.</li><li>Ensemble, ils forment la base de la plupart des architectures web dynamiques (la pile LAMP).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les navigateurs (comme Chrome, Firefox ou Safari) servent à afficher le contenu web, tandis que PHP et MySQL fonctionnent sur le serveur."
      },
      {
        "l": "C",
        "t": "Il existe des organismes comme le W3C ou l'IETF pour régir le web, mais PHP et MySQL sont des outils logiciels, non des instances de régulation."
      },
      {
        "l": "D",
        "t": "PHP et MySQL sont distincts de JavaScript. JavaScript s'exécute majoritairement côté client, alors que PHP et MySQL opèrent côté serveur."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier si le candidat distingue les rôles fondamentaux des technologies serveurs (PHP, MySQL) par rapport aux navigateurs ou aux langages clients.",
    "summary": [
      "PHP est un langage de programmation exécuté côté serveur.",
      "MySQL est un système de gestion de bases de données relationnelles.",
      "Leur association permet de créer des sites web dynamiques et interactifs.",
      "Ils ne doivent pas être confondus avec le matériel, les navigateurs ou les protocoles de réseau."
    ]
  }
];
