const QCM = [
  {
    "num": "Q1",
    "partie": "Architecture des processeurs",
    "q": "CISC signifie ______?",
    "choices": {
      "A": "Common Instruction Set Computers",
      "B": "Complex Instruction Set Compilers",
      "C": "Complex Instruction Set Computers",
      "D": "Compound Instruction Set Computers"
    },
    "correct": "C",
    "explanation": "CISC signifie Complex Instruction Set Computer, une architecture où les instructions complexes effectuent plusieurs opérations.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture des processeurs",
    "q": "Dans le cas où il y a un seul opérande de mémoire, et lorsqu’un deuxième opérande est nécessaire, nous utilisons un registre appelé _____?",
    "choices": {
      "A": "accumulator",
      "B": "register",
      "C": "operand",
      "D": "source"
    },
    "correct": "A",
    "explanation": "L'accumulateur est le registre principal du processeur utilisé pour stocker les résultats intermédiaires des opérations arithmétiques et logiques.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Architecture des processeurs",
    "q": "L’accès à la mémoire dans l’architecture RISC est limité aux instructions?",
    "choices": {
      "A": "CALL et RET",
      "B": "PUSH et POP",
      "C": "STA et LDA",
      "D": "MOV et JMP"
    },
    "correct": "C",
    "explanation": "Dans les architectures RISC, l'accès à la mémoire se fait généralement par des instructions de chargement (Load - LDA) et de stockage (Store - STA) explicites.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Architecture des processeurs",
    "q": "Le registre qui garde une trace des instructions du programme en mémoire est _____?",
    "choices": {
      "A": "Registre de contrôle",
      "B": "Compteur ordinal",
      "C": "Registre d’état",
      "D": "Registre direct"
    },
    "correct": "B",
    "explanation": "Le compteur ordinal (Program Counter) contient l'adresse de la prochaine instruction à exécuter.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Architecture des processeurs",
    "q": "Les instructions qui entraînent le transfert de données d’un emplacement à un autre sans modifier le contenu de l’information binaire sont _____?",
    "choices": {
      "A": "Instruction de transfert de données",
      "B": "Instruction de manipulation de données",
      "C": "Instruction de contrôle de programme"
    },
    "correct": "A",
    "explanation": "Les instructions de transfert (Move, Load, Store) permettent de déplacer des données d'un point A à un point B sans altération.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Architecture des processeurs",
    "q": "Pipelining augmente ________ des instructions du processeur.",
    "choices": {
      "A": "l’efficacité",
      "B": "la latence",
      "C": "sont vrais.",
      "D": "les deux"
    },
    "correct": "D",
    "explanation": "Le pipelining améliore le débit global (nombre d'instructions traitées par seconde) tout en optimisant l'efficacité de l'utilisation du matériel, bien qu'il puisse complexifier la gestion des dépendances.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Architecture des processeurs",
    "q": "Qu’est-ce qu’un « pipeline » dans un processeur ?",
    "choices": {
      "A": "Une méthode pour transférer des données entre différents périphériques",
      "B": "Un système qui permet d’exécuter plusieurs instructions simultanément en les divisant en étapes",
      "C": "Un type de mémoire cache pour optimiser les accès aux données",
      "D": "Un type de bus permettant d’accélérer la communication entre le processeur et la mémoire"
    },
    "correct": "B",
    "explanation": "Le « pipeline » est une technique utilisée par les processeurs pour exécuter plusieurs instructions simultanément. Il divise chaque instruction en plusieurs étapes (par exemple, récupération, décodage, exécution, etc.) et permet à différentes étapes de différentes instructions d’être traitées en parallèle, ce qui accélère l’exécution globale des instructions.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Architecture des processeurs",
    "q": "Qu’est-ce que le « clock cycle » dans un processeur ?",
    "choices": {
      "A": "La vitesse à laquelle le processeur peut exécuter une instruction",
      "B": "Le nombre d’instructions qu’un processeur peut exécuter en une seconde",
      "C": "Le temps nécessaire pour qu’une instruction soit traitée par le processeur",
      "D": "Le nombre de cœurs présents dans le processeur"
    },
    "correct": "C",
    "explanation": "Le cycle d'horloge est l'unité de temps fondamentale qui rythme les opérations élémentaires du processeur.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Architecture des processeurs",
    "q": "Quelle unité décode et traduit chaque instruction et génère les signaux d’activation pour l'ALU ?",
    "choices": {
      "A": "Unité arithmétique",
      "B": "Unité logique",
      "C": "Unité de contrôle",
      "D": "CPU"
    },
    "correct": "C",
    "explanation": "L'unité de contrôle est responsable de l'interprétation des instructions et de la coordination des autres composants du processeur via des signaux de contrôle.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Architecture des processeurs",
    "q": "Un microprogramme écrit sous forme de chaîne de 0 et de 1 est un ___?",
    "choices": {
      "A": "micro-instruction symbolique",
      "B": "micro-instruction binaire",
      "C": "micro-instruction symbolique",
      "D": "microprogramme binaire"
    },
    "correct": "D",
    "explanation": "Un microprogramme est le niveau le plus bas de la programmation d'un processeur, s'exprimant directement en binaire pour activer les circuits de contrôle.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Architecture des processeurs",
    "q": "Un système complet de micro-ordinateurs se compose de _______?",
    "choices": {
      "A": "microprocesseur",
      "B": "mémoire",
      "C": "périphériques",
      "D": "Tous les éléments ci-dessus"
    },
    "correct": "D",
    "explanation": "Un micro-ordinateur comprend un microprocesseur, de la mémoire principale et des interfaces de communication pour les périphériques.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Architecture processeur",
    "q": "L’exécution effective des instructions dans un ordinateur a lieu dans ___________.",
    "choices": {
      "A": "L’UAL",
      "B": "Unité de contrôle",
      "C": "L’unité de stockage",
      "D": "Aucun des éléments ci-dessus"
    },
    "correct": "A",
    "explanation": "L’Unité Arithmétique et Logique (UAL) est responsable des opérations de calcul et de traitement logique.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture processeur",
    "q": "Lequel des éléments suivants est l’adresse générée par le CPU ?",
    "choices": {
      "A": "L’adresse physique",
      "B": "L’adresse absolue",
      "C": "L’adresse logique",
      "D": "Aucune des adresses mentionnées"
    },
    "correct": "C",
    "explanation": "Une adresse logique est générée par le processeur lorsqu’un programme est en cours d’exécution, elle est également appelée adresse virtuelle.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Architecture processeur",
    "q": "Les instructions au niveau de la machine, qui indiquent au processeur central ce qui doit être fait, est __________",
    "choices": {
      "A": "Code d’opération",
      "B": "Adresse",
      "C": "Opérande",
      "D": "Aucune de ces valeurs"
    },
    "correct": "A",
    "explanation": "L'opcode ou code d'opération définit l'action que le processeur doit réaliser.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Architecture Processeur",
    "q": "Qu’est-ce qu’un « Interrupt Service Routine » (ISR) ?",
    "choices": {
      "A": "Un programme qui surveille la mémoire et supprime les erreurs",
      "B": "Une fonction qui réinitialise le processeur après une panne",
      "C": "Un programme/fonction qui gère les interruptions en répondant à des événements urgents",
      "D": "Un dispositif qui permet de contrôler la vitesse du processeur"
    },
    "correct": "C",
    "explanation": "<p>L’ISR est un morceau de code qui s’exécute lorsque le processeur reçoit une interruption pour traiter un événement externe ou critique.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture Processeur",
    "q": "Qu’est-ce qu’un « processeur multi-threading » ?",
    "choices": {
      "A": "Un processeur qui peut exécuter plusieurs programmes en même temps",
      "B": "Un processeur qui exécute des instructions dans un ordre aléatoire",
      "C": "Un processeur qui utilise plusieurs cœurs pour exécuter des tâches",
      "D": "Un processeur capable de gérer plusieurs threads simultanément au sein d'un même cœur"
    },
    "correct": "D",
    "explanation": "<p>Le multi-threading (ex: Hyper-threading) permet à un cœur de traiter plusieurs flux d'instructions pour mieux utiliser ses ressources internes.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Architecture Processeur",
    "q": "Qu’est-ce qu’un « processeur parallèle » ?",
    "choices": {
      "A": "Un processeur exécutant plusieurs instructions sur un seul cœur",
      "B": "Un processeur utilisant plusieurs cœurs pour traiter plusieurs tâches simultanément",
      "C": "Un processeur dédié uniquement aux graphismes",
      "D": "Un processeur optimisé pour l’exécution séquentielle"
    },
    "correct": "B",
    "explanation": "<p>L'architecture parallèle repose sur l'utilisation de plusieurs unités de traitement (cœurs) travaillant en simultané.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Architecture Processeur",
    "q": "Qu’est-ce qu’une « interruption » masquable ?",
    "choices": {
      "A": "Une interruption qui ne peut pas être ignorée par le processeur",
      "B": "Une interruption qui peut être temporairement ignorée par le processeur",
      "C": "Une interruption générée par un périphérique de sortie",
      "D": "Une interruption qui permet au processeur de gérer les erreurs système"
    },
    "correct": "B",
    "explanation": "<p>Une interruption masquable peut être désactivée par le logiciel via des flags pour prioriser des tâches critiques.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Architecture Processeur",
    "q": "Que désigne le terme « thread » dans un processeur multicœur ?",
    "choices": {
      "A": "Une unité de stockage pour les données temporaires",
      "B": "Une séquence d’instructions pouvant être exécutée indépendamment",
      "C": "Un type de mémoire partagée entre les différents cœurs de processeur",
      "D": "Un programme qui gère l’exécution des instructions dans le processeur"
    },
    "correct": "B",
    "explanation": "<p>Un « thread » est une unité d'exécution (séquence d'instructions) pouvant être traitée indépendamment par un cœur de processeur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Architecture Processeur",
    "q": "Quel est l’objectif principal de l’architecture de pipeline dans un processeur ?",
    "choices": {
      "A": "Permettre l’exécution simultanée de plusieurs instructions",
      "B": "Optimiser la gestion des entrées/sorties",
      "C": "Améliorer la gestion de la mémoire cache",
      "D": "Gérer les connexions réseau du processeur"
    },
    "correct": "A",
    "explanation": "<p>Le pipeline dans un processeur est un mécanisme qui permet d’exécuter plusieurs instructions simultanément en les découpant en différentes étapes (comme la récupération, le décodage, l’exécution, etc.). Cela permet d’améliorer l’efficacité et la vitesse d’exécution des instructions.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Architecture Processeur",
    "q": "Quel est le rôle du « vecteur d’interruption » ?",
    "choices": {
      "A": "Gérer les accès aux périphériques externes",
      "B": "Signaler au processeur qu’une tâche urgente nécessite une attention immédiate via une table d'adresses",
      "C": "Stocker les données temporairement lors de l’exécution d’un programme",
      "D": "Fournir un accès direct à la mémoire"
    },
    "correct": "B",
    "explanation": "<p>Un vecteur d’interruption est une adresse dans la mémoire où le processeur doit se rendre lorsqu’il reçoit une interruption. Cela permet au processeur de gérer des événements urgents via une routine dédiée.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Architecture Processeur",
    "q": "Quelle est la différence principale entre l’architecture RISC et CISC ?",
    "choices": {
      "A": "RISC utilise un jeu d’instructions complexe, tandis que CISC utilise un jeu d’instructions simple",
      "B": "RISC est optimisé pour des opérations simples (instructions réduites), tandis que CISC permet des opérations plus complexes en une seule instruction",
      "C": "RISC nécessite plus de cycles d’horloge pour exécuter des instructions",
      "D": "CISC est plus rapide que RISC en termes de traitement des données"
    },
    "correct": "B",
    "explanation": "<p>RISC (Reduced Instruction Set Computer) utilise un jeu d’instructions simplifié, optimisé pour des exécutions rapides. CISC (Complex Instruction Set Computer) dispose de nombreuses instructions complexes, permettant de réaliser des opérations multiples en une seule instruction.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Architecture Processeur",
    "q": "Quelle est la fonction principale d’un « registre » dans un processeur ?",
    "choices": {
      "A": "Stocker de grandes quantités de données pour le long terme",
      "B": "Effectuer des calculs arithmétiques et logiques",
      "C": "Stocker temporairement des données et instructions ultra-rapidement accessibles par le processeur",
      "D": "Permettre l’exécution d’instructions en parallèle"
    },
    "correct": "C",
    "explanation": "<p>Les registres sont les mémoires internes les plus rapides du processeur, servant à stocker les données en cours de traitement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Architecture Processeur",
    "q": "Quelle est la principale caractéristique d’un processeur multicœur ?",
    "choices": {
      "A": "Un processeur multicœur a une capacité de calcul plus grande car il peut exécuter plusieurs instructions en parallèle",
      "B": "Un processeur multicœur utilise une seule unité de contrôle",
      "C": "Un processeur multicœur ne dispose pas de cache",
      "D": "Un processeur multicœur ne peut pas exécuter plusieurs instructions simultanément"
    },
    "correct": "A",
    "explanation": "<p>Un processeur multicœur contient plusieurs unités de traitement indépendantes (cœurs), permettant d'exécuter plusieurs threads ou instructions en parallèle.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Processeur",
    "q": "En informatique, ALU a ________?",
    "choices": {
      "A": "2 unités",
      "B": "3 unités",
      "C": "4 unités",
      "D": "5 unités"
    },
    "correct": "A",
    "explanation": "<p>ALU est divisée en deux unités, une unité arithmétique (AU) et une unité logique (LU).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Processeur",
    "q": "L’adresse de l’instruction exécutée par le processeur est contenue dans un _____?",
    "choices": {
      "A": "compteur ordinale",
      "B": "registre d’instruction en cours",
      "C": "registre d’adresse mémoire",
      "D": "registre du buffer mémoire"
    },
    "correct": "A",
    "explanation": "<p>Le pointeur d’instruction, également appelé compteur ordinale, est un registre spécial dans un processeur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Processeur",
    "q": "La zone de stockage temporaire dans le CPU est appelée ______?",
    "choices": {
      "A": "Registre",
      "B": "ROM",
      "C": "RAM",
      "D": "ALU"
    },
    "correct": "A",
    "explanation": "<p>Les registres sont utilisés pour le stockage temporaire de données ou d’instructions pendant l’exécution du programme.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Processeur",
    "q": "Le registre informatique qui collecte le résultat du calcul est appelé ___?",
    "choices": {
      "A": "Pointeur d’instruction",
      "B": "Espace de stockage",
      "C": "Registre de stockage",
      "D": "Accumulateur"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
