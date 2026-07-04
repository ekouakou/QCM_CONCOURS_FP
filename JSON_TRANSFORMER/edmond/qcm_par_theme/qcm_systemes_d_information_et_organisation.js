const QCM = [
  {
    "num": "Q1",
    "partie": "Systèmes d'Information et Organisation",
    "q": "Qu'est-ce qu'une règle de gestion au sein d'une organisation ?",
    "choices": {
      "A": "Une loi qui régit le déroulement des processus du système opérant.",
      "B": "Une loi qui régit le déroulement des processus du système de pilotage.",
      "C": "Une loi qui régit le déroulement des processus du système d'information.",
      "D": "Une loi qui régit le fonctionnement global des processus de l'organisation."
    },
    "correct": "D",
    "explanation": "<p>Une <strong>règle de gestion</strong> est une contrainte ou une directive qui définit la manière dont une organisation fonctionne. Elle transcrit les politiques internes, les procédures légales ou les impératifs métier.</p><ul><li>Elle est transversale et n'est pas limitée à un seul sous-système (opérant, information ou pilotage).</li><li>Elle encadre l'ensemble des activités de l'<strong>organisation</strong>, assurant la cohérence des décisions et des processus.</li><li>Elle sert de base à la modélisation des données et des traitements dans le système d'information.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le système opérant ne concerne que les activités de production ou de service, ce qui est trop restrictif."
      },
      {
        "l": "B",
        "t": "Le système de pilotage concerne la prise de décision stratégique, mais les règles de gestion s'appliquent à tous les niveaux, pas seulement au pilotage."
      },
      {
        "l": "C",
        "t": "Bien que le système d'information implémente des règles de gestion, il ne les définit pas en propre ; il les traduit sous forme logique."
      }
    ],
    "examiner": "L'examinateur évalue votre compréhension de la portée globale d'une règle de gestion, qui dépasse la simple technique pour embrasser la stratégie organisationnelle.",
    "summary": [
      "Une règle de gestion est une directive contraignante régissant l'activité d'une organisation.",
      "Elle assure la cohérence et le respect des objectifs fixés par la direction.",
      "Elle s'applique transversalement à l'ensemble des processus métier.",
      "La modélisation des processus (ex: BPMN) repose sur ces règles pour structurer le système d'information."
    ]
  },
  {
    "num": "Q2",
    "partie": "Systèmes d'Information et Organisation",
    "q": "Dans le contexte des relations entre objets, que désigne la réflexivité ?",
    "choices": {
      "A": "Une relation d'un objet avec lui-même.",
      "B": "Une relation entre deux objets distincts.",
      "C": "Une relation entre un objet et une table de données.",
      "D": "Une relation entre les propriétés internes de plusieurs objets."
    },
    "correct": "A",
    "explanation": "<p>La <strong>réflexivité</strong> est une propriété fondamentale dans la modélisation (notamment en UML ou en bases de données relationnelles). Elle décrit une relation où une instance d'une classe est liée à une autre instance de la <strong>même classe</strong>.</p><ul><li>En UML, on la représente par une association bouclée sur la même classe.</li><li>Elle est couramment utilisée pour modéliser des hiérarchies (ex: un employé qui est le manager d'autres employés, un dossier parent/enfant).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Une relation entre deux objets distincts est une association classique, mais elle ne nécessite pas qu'ils appartiennent à la même classe."
      },
      {
        "l": "C",
        "t": "La relation entre un objet et une table relève plutôt du mapping objet-relationnel (ORM) et non du concept de réflexivité."
      },
      {
        "l": "D",
        "t": "La relation entre les propriétés décrit plutôt l'encapsulation ou la dépendance d'attributs, pas la réflexivité structurelle."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension des concepts de modélisation relationnelle et la capacité de l'étudiant à identifier les associations récursives.",
    "summary": [
      "La réflexivité définit une relation d'une classe avec elle-même.",
      "Elle est essentielle pour modéliser des structures hiérarchiques ou récursives.",
      "En modélisation, elle apparaît comme une association rebouclant sur la même entité.",
      "Elle permet de gérer des relations de type parent-enfant au sein d'une seule catégorie d'objets."
    ]
  },
  {
    "num": "Q3",
    "partie": "Systèmes d'Information et Organisation",
    "q": "Selon les principes de la programmation orientée objet, combien de sortes de propriétés (ou attributs) distingue-t-on généralement au sein d'une classe ?",
    "choices": {
      "A": "02 sortes de propriétés",
      "B": "04 sortes de propriétés",
      "C": "03 sortes de propriétés",
      "D": "06 sortes de propriétés"
    },
    "correct": "C",
    "explanation": "<p>En programmation orientée objet, on distingue généralement <strong>trois types de propriétés</strong> basés sur leur niveau de visibilité ou d'accessibilité :</p><ul><li><strong>Public :</strong> Accessibles depuis n'importe quelle autre classe.</li><li><strong>Privé (Private) :</strong> Accessibles uniquement au sein de la classe où elles sont définies.</li><li><strong>Protégé (Protected) :</strong> Accessibles au sein de la classe et par ses sous-classes (héritage).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Réduire à seulement deux sortes omet le niveau 'protégé' ou la distinction stricte entre encapsulation et visibilité."
      },
      {
        "l": "B",
        "t": "Quatre sortes est une confusion fréquente, souvent liée aux modificateurs d'accès spécifiques à certains langages (comme le 'package-private' en Java), mais le standard théorique en retient trois."
      },
      {
        "l": "D",
        "t": "Six sortes est une valeur arbitraire sans fondement théorique dans la modélisation objet classique."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la maîtrise des concepts fondamentaux de l'encapsulation et de la visibilité des membres d'une classe.",
    "summary": [
      "Les propriétés d'une classe sont régies par des modificateurs d'accès.",
      "La classification standard retient trois types : Public, Privé et Protégé.",
      "Le niveau d'accès détermine la sécurité et la modularité du code.",
      "L'encapsulation est le pilier qui justifie cette séparation des propriétés."
    ]
  },
  {
    "num": "Q4",
    "partie": "Systèmes d'Information et Organisation",
    "q": "Dans le contexte de la modélisation conceptuelle des données (type MCD), que signifie le fait qu'une cardinalité minimale soit égale à 1 pour une entité dans une relation ?",
    "choices": {
      "A": "C'est que le quart des occurrences de l'objet participe à une occurrence de la relation.",
      "B": "C'est qu'une partie des occurrences de l'objet participe toujours à une occurrence de la relation.",
      "C": "C'est que chaque occurrence de l'objet participe obligatoirement à au moins une occurrence de la relation.",
      "D": "C'est que toutes les occurrences de l'objet ne participent pas toujours à une occurrence de la relation."
    },
    "correct": "C",
    "explanation": "<p>Dans le modèle conceptuel des données (Merise), la <strong>cardinalité</strong> d'une entité dans une relation est composée d'un couple <em>(min, max)</em>. La borne minimale représente la <strong>participation</strong> de l'entité à la relation :</p><ul><li><strong>Min = 0 :</strong> La participation est facultative (une occurrence peut exister sans être liée).</li><li><strong>Min = 1 :</strong> La participation est <strong>obligatoire</strong> (toute occurrence de l'entité doit être associée à au moins une occurrence de la relation).</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La cardinalité minimale ne représente jamais une proportion fractionnaire ou un pourcentage des données."
      },
      {
        "l": "B",
        "t": "Cette réponse est imprécise car elle suggère une participation partielle, alors qu'une valeur de 1 impose une participation totale de toutes les occurrences."
      },
      {
        "l": "D",
        "t": "C'est l'inverse de la définition ; cette situation correspondrait plutôt à une cardinalité minimale de 0."
      }
    ],
    "examiner": "L'examinateur vérifie la compréhension de la contrainte d'intégrité référentielle et la notion de participation obligatoire dans un modèle entité-association.",
    "summary": [
      "La cardinalité minimale indique le nombre minimum de fois qu'une occurrence d'entité participe à une relation.",
      "Une cardinalité minimale de 1 signifie que la participation est obligatoire.",
      "Toute entité concernée doit être liée à au moins une occurrence de la relation pour être valide dans le système.",
      "La cardinalité minimale de 0 indique une participation facultative."
    ]
  },
  {
    "num": "Q5",
    "partie": "Systèmes d'Information et Organisation",
    "q": "Dans le cadre de la modélisation conceptuelle des données (Modèle Entité-Association), que signifie une cardinalité minimale égale à 0 pour une entité dans une relation ?",
    "choices": {
      "A": "Au moins une des occurrences de l'entité participe obligatoirement à la relation.",
      "B": "Toutes les occurrences de l'entité participent obligatoirement à la relation.",
      "C": "Il est possible qu'une occurrence de l'entité ne participe à aucune occurrence de la relation (participation optionnelle).",
      "D": "Seule une partie des occurrences de l'entité participe à la relation."
    },
    "correct": "C",
    "explanation": "<p>En modélisation de données, la <strong>cardinalité minimale</strong> définit le nombre minimal de fois qu'une occurrence d'une entité doit participer à une relation.</p><ul><li>Une valeur de <strong>0</strong> indique une <strong>participation optionnelle</strong> : une entité n'est pas obligée d'être liée à une autre instance pour exister ou être valide dans le système.</li><li>Une valeur de <strong>1</strong> (ou supérieure) indiquerait une <strong>participation obligatoire</strong>.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette description correspond à une cardinalité minimale de 1, indiquant une obligation de participation."
      },
      {
        "l": "B",
        "t": "Ceci définit une contrainte de participation totale pour toutes les instances, ce qui contredit la notion d'optionnalité offerte par le 0."
      },
      {
        "l": "D",
        "t": "Cette formulation est ambiguë et ne reflète pas la règle de gestion standard de la cardinalité minimale qui concerne l'existence ou non d'un lien obligatoire."
      }
    ],
    "examiner": "L'examinateur cherche à vérifier la compréhension des concepts de participation optionnelle versus obligatoire dans les diagrammes Entité-Association.",
    "summary": [
      "La cardinalité minimale exprime le nombre minimum d'associations pour une entité.",
      "Une cardinalité de 0 signifie que la participation de l'entité à la relation est optionnelle.",
      "Une cardinalité minimale de 1 signifie que la participation est obligatoire.",
      "La distinction entre 0 et 1 est fondamentale pour définir les contraintes d'intégrité métier."
    ]
  },
  {
    "num": "Q6",
    "partie": "Systèmes d'Information et Organisation",
    "q": "Quelles sont les trois caractéristiques fondamentales d'une relation au sein d'un modèle de données ?",
    "choices": {
      "A": "Sa nature, sa dimension et les différentes fonctionnalités",
      "B": "Sa collection, sa dimension et les différentes fonctionnalités",
      "C": "Sa classe, sa dimension et les différentes fonctionnalités",
      "D": "Sa collection, sa dimension et son type"
    },
    "correct": "C",
    "explanation": "<p>Dans le cadre de la modélisation de données (notamment dans l'approche objet ou les systèmes d'information), une relation se définit par trois piliers structurels :</p><ul><li><strong>La classe :</strong> Elle identifie l'entité ou le groupe d'objets sur lequel porte la relation.</li><li><strong>La dimension :</strong> Elle définit la cardinalité ou le nombre d'occurrences impliquées dans la relation.</li><li><strong>Les fonctionnalités :</strong> Elles décrivent le rôle ou l'action que la relation permet d'accomplir entre les entités.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le terme 'nature' n'est pas utilisé comme caractéristique technique standard pour définir une relation dans ce contexte."
      },
      {
        "l": "B",
        "t": "Le terme 'collection' est impropre ici ; il fait généralement référence à un groupe d'objets plutôt qu'à une propriété structurelle de la relation elle-même."
      },
      {
        "l": "D",
        "t": "Bien que 'type' puisse parfois être mentionné, il ne constitue pas la caractéristique principale définie par la théorie des modèles relationnels ou conceptuels ici."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier la compréhension théorique des composantes structurelles d'une relation dans un schéma de modélisation.",
    "summary": [
      "Une relation est définie par sa classe, sa dimension et ses fonctionnalités.",
      "La classe identifie les objets concernés par le lien.",
      "La dimension précise l'aspect quantitatif (cardinalité) de la relation.",
      "Les fonctionnalités précisent le rôle logique de la relation au sein du système."
    ]
  }
];
