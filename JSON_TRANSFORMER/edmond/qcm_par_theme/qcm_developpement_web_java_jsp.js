const QCM = [
  {
    "num": "Q1",
    "partie": "Développement Web Java (JSP)",
    "q": "Dans le cadre de la spécification JSP (JavaServer Pages), est-il possible d'utiliser plusieurs directives 'page' au sein d'un même fichier ?",
    "choices": {
      "A": "Oui, il peut y avoir plusieurs directives 'page' dans un fichier JSP.",
      "B": "Non, il ne peut y avoir qu'une seule directive 'page' dans un fichier JSP.",
      "C": "Non, les directives 'page' ne sont pas autorisées en JSP.",
      "D": "La directive 'page' n'existe pas en tant que telle dans la syntaxe JSP."
    },
    "correct": "A",
    "explanation": "<p>En JSP, la directive <strong>&lt;%@ page ... %&gt;</strong> permet de définir des attributs de configuration pour la page (comme le langage, le type de contenu, les imports, etc.).</p><p>Selon la spécification officielle, il est tout à fait autorisé d'inclure plusieurs directives 'page' dans une même page JSP, à condition que les attributs ne soient pas contradictoires (à l'exception de l'attribut <code>import</code> qui est cumulatif).</p><ul><li>Les directives multiples sont souvent utilisées pour séparer les imports de classes des configurations de bufferisation ou de session.</li><li>L'attribut <code>import</code> est le seul qui puisse être répété avec des valeurs différentes pour ajouter des packages au contexte.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "C'est une erreur courante. Bien que la lisibilité soit meilleure avec une seule directive, la spécification autorise techniquement plusieurs déclarations."
      },
      {
        "l": "C",
        "t": "Les directives 'page' sont fondamentales en JSP pour définir les propriétés de la page générée."
      },
      {
        "l": "D",
        "t": "La directive 'page' est l'une des directives les plus utilisées en technologie JSP pour configurer l'environnement d'exécution."
      }
    ],
    "examiner": "Évaluer la compréhension de la syntaxe des directives JSP et des règles de cumul des attributs de configuration.",
    "summary": [
      "La directive 'page' peut être utilisée plusieurs fois dans un fichier JSP.",
      "L'attribut 'import' est cumulatif et peut être défini dans plusieurs directives séparées.",
      "Les attributs autres qu'import ne doivent pas être redéfinis avec des valeurs conflictuelles.",
      "Les directives de type 'page' servent à configurer les métadonnées de la page compilée en Servlet."
    ]
  },
  {
    "num": "Q2",
    "partie": "Développement Web Java (JSP)",
    "q": "Dans le contexte du développement Java Web (JSP), quelle est la fonction principale de la directive <%@ page %> ?",
    "choices": {
      "A": "Elle permet d'inclure dynamiquement le contenu d'un autre fichier au moment de la requête.",
      "B": "Elle définit les attributs globaux de la page JSP, tels que le langage de script, la gestion des erreurs ou les imports de classes.",
      "C": "Elle est utilisée pour déclarer des variables et des méthodes Java accessibles dans toute la page.",
      "D": "Elle sert à insérer un commentaire ignoré lors de la compilation de la page JSP."
    },
    "correct": "B",
    "explanation": "<p>La directive <strong>&lt;%@ page %&gt;</strong> est essentielle dans une page JSP. Elle communique des informations spécifiques au moteur JSP concernant la page entière.</p><ul><li><strong>Langage</strong> : définit le langage de script (ex: <code>language=\"java\"</code>).</li><li><strong>Imports</strong> : permet d'importer des classes Java nécessaires.</li><li><strong>Gestion des erreurs</strong> : définit la page d'erreur (<code>errorPage</code>).</li><li><strong>Session</strong> : contrôle si la page participe à une session HTTP.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Ceci décrit la directive d'inclusion <%@ include %> ou l'action <jsp:include>."
      },
      {
        "l": "C",
        "t": "La déclaration de variables et méthodes se fait via les balises de déclaration <%! %>."
      },
      {
        "l": "D",
        "t": "Les commentaires JSP sont délimités par <%-- --%>."
      }
    ],
    "examiner": "Évaluer la maîtrise de la syntaxe JSP et la distinction entre les différentes balises de directives et de script.",
    "summary": [
      "La directive page configure les propriétés globales de la JSP.",
      "Elle permet d'importer des bibliothèques Java.",
      "Elle gère les directives de session et de typage MIME.",
      "Elle est traitée lors de la phase de traduction de la JSP en Servlet."
    ]
  },
  {
    "num": "Q3",
    "partie": "Développement Web Java (JSP)",
    "q": "Quelle est la nature du langage Java en termes d'exécution ?",
    "choices": {
      "A": "Compilé",
      "B": "Interprété",
      "C": "Compilé et interprété",
      "D": "Ni compilé ni interprété"
    },
    "correct": "C",
    "explanation": "<p>Le langage Java repose sur un processus hybride :</p><ul><li><strong>Phase de compilation :</strong> Le code source (.java) est transformé par le compilateur <code>javac</code> en <strong>bytecode</strong> (.class). Ce bytecode est un langage intermédiaire indépendant de la plateforme.</li><li><strong>Phase d'interprétation/exécution :</strong> La machine virtuelle Java (JVM) charge ce bytecode et l'interprète ou le compile à la volée en code machine natif via le compilateur <strong>JIT (Just-In-Time)</strong> pour optimiser les performances.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que Java utilise un compilateur (javac), s'arrêter là serait incomplet car le résultat n'est pas du code machine exécutable directement par le processeur."
      },
      {
        "l": "B",
        "t": "Bien que la JVM interprète le bytecode, Java n'est pas un langage interprété pur, car il nécessite une étape de compilation préalable."
      },
      {
        "l": "D",
        "t": "Cette proposition est fausse car Java utilise systématiquement des mécanismes de compilation et d'interprétation pour fonctionner."
      }
    ],
    "examiner": "Évaluer la compréhension de l'architecture d'exécution de Java, notamment la distinction entre le bytecode et la compilation native.",
    "summary": [
      "Le code source Java est d'abord compilé en bytecode.",
      "Le bytecode est universel et s'exécute sur n'importe quelle machine dotée d'une JVM.",
      "La JVM exécute le bytecode via un interpréteur et un compilateur JIT.",
      "Cette approche hybride permet d'allier portabilité et performance."
    ]
  },
  {
    "num": "Q4",
    "partie": "Développement Web Java (JSP)",
    "q": "Par quelle entreprise le langage de programmation Java a-t-il été initialement développé ?",
    "choices": {
      "A": "Hewlett-Packard",
      "B": "Sun Microsystems",
      "C": "Microsoft",
      "D": "Oracle"
    },
    "correct": "B",
    "explanation": "<p>Le langage <strong>Java</strong> a été créé par <strong>James Gosling</strong> chez <strong>Sun Microsystems</strong> au début des années 1990 (sorti officiellement en 1995). Bien qu'<strong>Oracle Corporation</strong> ait acquis Sun Microsystems en 2010 et détienne désormais les droits et la maintenance de Java, l'origine du développement appartient historiquement à Sun.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Hewlett-Packard est un constructeur informatique majeur, mais n'a pas participé à la création de Java."
      },
      {
        "l": "C",
        "t": "Microsoft a développé son propre langage concurrent, C#, en réponse au succès de Java, mais n'est pas le créateur de Java."
      },
      {
        "l": "D",
        "t": "Oracle est l'actuel propriétaire et éditeur de Java suite au rachat de Sun Microsystems en 2010, mais n'est pas à l'origine de sa conception initiale."
      }
    ],
    "examiner": "Évaluer la connaissance historique de l'écosystème Java et la distinction entre créateur initial et propriétaire actuel.",
    "summary": [
      "Java a été conçu à l'origine par James Gosling chez Sun Microsystems.",
      "La première version officielle du langage est sortie en 1995.",
      "Sun Microsystems a été racheté par Oracle Corporation en 2010.",
      "Oracle est l'entité responsable du développement et des mises à jour actuelles de Java."
    ]
  },
  {
    "num": "Q5",
    "partie": "Développement Web Java (JSP)",
    "q": "Concernant l'utilisation des directives au sein d'une page JSP (JavaServer Pages), laquelle de ces affirmations est correcte ?",
    "choices": {
      "A": "Il peut y avoir plusieurs directives 'page' dans une même page JSP.",
      "B": "Il ne peut y avoir qu'une seule directive 'page' dans une page JSP.",
      "C": "Il n'est pas possible d'utiliser de directives 'page' dans une page JSP.",
      "D": "La directive 'page' n'existe pas dans la spécification JSP."
    },
    "correct": "A",
    "explanation": "<p>La spécification JSP autorise la présence de <strong>plusieurs directives <code>&lt;%@ page %&gt;</code></strong> dans un même fichier JSP.</p><p>Cependant, il existe une règle importante : <strong>les attributs ne peuvent pas être redéfinis</strong> avec des valeurs différentes au sein d'une même page, à l'exception de l'attribut <code>import</code>. L'attribut <code>import</code> est le seul qui peut être répété ou cumulé sur plusieurs directives <code>page</code> différentes.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "C'est incorrect car la spécification JSP autorise plusieurs directives 'page', particulièrement pour gérer les imports Java de manière modulaire."
      },
      {
        "l": "C",
        "t": "Les directives sont un pilier fondamental de JSP pour configurer la page (langage, buffer, gestion des erreurs, etc.)."
      },
      {
        "l": "D",
        "t": "La directive 'page' est l'une des directives les plus utilisées en JSP pour définir les propriétés de la page traduite en servlet."
      }
    ],
    "examiner": "L'examinateur cherche à tester votre connaissance fine de la spécification JSP et des règles de configuration des pages, notamment sur la gestion des attributs et la modularité des directives.",
    "summary": [
      "Une page JSP peut contenir plusieurs directives 'page'.",
      "L'attribut 'import' est le seul pouvant être répété sur plusieurs directives 'page'.",
      "La redéfinition des autres attributs (ex: 'session', 'isErrorPage') sur plusieurs directives est interdite.",
      "Les directives 'page' servent à configurer la compilation de la page JSP en servlet."
    ]
  },
  {
    "num": "Q6",
    "partie": "Développement Web Java (JSP)",
    "q": "L'extrait de texte fourni est incomplet et ne contient pas de question spécifique. Veuillez fournir l'énoncé de la question ainsi que ses propositions pour que je puisse réaliser l'analyse pédagogique.",
    "choices": {
      "A": "Information manquante",
      "B": "En attente de saisie",
      "C": "Question non définie",
      "D": "Aucune proposition valide"
    },
    "correct": "A",
    "explanation": "<p>L'extrait fourni ne contient aucun énoncé exploitable. Pour effectuer une analyse pédagogique pertinente, il est nécessaire de fournir :</p><ul><li>L'énoncé clair de la problématique technique.</li><li>Les choix de réponses associés.</li><li>L'identification de la réponse correcte.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Le système est en attente d'une entrée utilisateur valide."
      },
      {
        "l": "C",
        "t": "Aucune question n'a été formulée dans le texte source."
      },
      {
        "l": "D",
        "t": "Il n'existe pas de contenu permettant de valider ou d'invalider une proposition."
      }
    ],
    "examiner": "Évaluation de la capacité à structurer une question technique à partir d'un énoncé.",
    "summary": [
      "Aucun contenu exploitable n'a été détecté.",
      "Veuillez soumettre le texte complet de la question.",
      "L'analyse pédagogique nécessite un énoncé et des choix de réponse.",
      "Le formatage attendu est respecté dès réception des données."
    ]
  },
  {
    "num": "Q7",
    "partie": "Développement Web Java (JSP)",
    "q": "Comment le langage Java est-il classé en termes d'exécution ?",
    "choices": {
      "A": "Compilé",
      "B": "Interprété",
      "C": "Compilé et interprété",
      "D": "Ni compilé ni interprété"
    },
    "correct": "C",
    "explanation": "<p>Le langage Java utilise un processus hybride :</p><ul><li><strong>Compilation :</strong> Le code source (.java) est d'abord compilé par <em>javac</em> en <strong>bytecode</strong> (.class), un langage intermédiaire indépendant de la plateforme.</li><li><strong>Interprétation :</strong> Ce bytecode est ensuite lu et interprété par la <strong>Machine Virtuelle Java (JVM)</strong> sur la machine cible, souvent optimisé par un compilateur JIT (Just-In-Time) pour améliorer les performances.</li></ul>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "C'est incomplet. Java produit du bytecode, qui nécessite un environnement d'exécution (JVM) pour fonctionner, contrairement à un langage purement compilé (comme le C) qui produit du code machine natif."
      },
      {
        "l": "B",
        "t": "C'est inexact. Java n'est pas interprété directement depuis le code source ; le passage par une étape de compilation en bytecode est indispensable avant l'exécution."
      },
      {
        "l": "D",
        "t": "Cette affirmation est totalement fausse, car le cycle de vie d'un programme Java repose précisément sur ces deux étapes."
      }
    ],
    "examiner": "Évaluer la compréhension du candidat sur l'architecture d'exécution Java et le rôle de la JVM.",
    "summary": [
      "Le code Java est d'abord compilé en bytecode indépendant de la plateforme.",
      "La JVM interprète ensuite ce bytecode lors de l'exécution sur la machine hôte.",
      "Ce modèle hybride permet la portabilité du code (Write Once, Run Anywhere).",
      "Le compilateur JIT améliore les performances en compilant le bytecode en code machine lors de l'exécution."
    ]
  },
  {
    "num": "Q8",
    "partie": "Développement Web Java (JSP)",
    "q": "Quelle entreprise est à l'origine du développement du langage de programmation Java ?",
    "choices": {
      "A": "Hewlett-Packard",
      "B": "Sun Microsystems",
      "C": "Microsoft",
      "D": "Oracle"
    },
    "correct": "B",
    "explanation": "<p>Le langage <strong>Java</strong> a été initialement conçu et développé par <strong>Sun Microsystems</strong> au début des années 1990 (sous l'impulsion de James Gosling). La première version publique est apparue en 1996.</p><p>Bien que <strong>Oracle</strong> ait acquis Sun Microsystems en 2010 et soit désormais responsable de la gestion et de l'évolution du langage, la création et la paternité historique du projet reviennent bien à Sun Microsystems.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Hewlett-Packard (HP) est une entreprise informatique majeure, mais elle n'a jamais participé à la création du langage Java."
      },
      {
        "l": "C",
        "t": "Microsoft a développé son propre langage, le C#, qui présente des similitudes avec Java, mais n'est pas le créateur de ce dernier."
      },
      {
        "l": "D",
        "t": "Oracle a acquis Sun Microsystems en 2010. Bien qu'Oracle soit l'actuel propriétaire et mainteneur de Java, il ne l'a pas créé."
      }
    ],
    "examiner": "L'examinateur souhaite vérifier vos connaissances historiques sur l'écosystème Java et la distinction entre le créateur originel et l'acquéreur actuel.",
    "summary": [
      "Java a été créé par Sun Microsystems au début des années 90.",
      "L'équipe initiale était dirigée par James Gosling.",
      "Oracle a racheté Sun Microsystems en 2010, devenant ainsi le nouveau propriétaire de la technologie.",
      "Il est important de distinguer l'historique de conception de la gestion actuelle du langage."
    ]
  }
];
