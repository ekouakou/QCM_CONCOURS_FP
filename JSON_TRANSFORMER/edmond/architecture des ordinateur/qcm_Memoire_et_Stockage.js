const QCM = [
  {
    "num": "Q1",
    "partie": "Architecture Mémoire",
    "q": "Qu’est-ce qu’un « cache de niveau 1 » (L1) ?",
    "choices": {
      "A": "Une mémoire cache située directement sur le processeur, utilisée pour stocker les instructions et les données fréquemment utilisées",
      "B": "Une mémoire cache située dans la mémoire principale, permettant de réduire l’accès aux données",
      "C": "Une mémoire cache utilisée pour stocker les données de disque dur",
      "D": "Une mémoire cache qui stocke uniquement les instructions du programme"
    },
    "correct": "A",
    "explanation": "<p>Le cache de niveau 1 (L1) est situé directement sur le processeur. Il est utilisé pour stocker les données et instructions les plus fréquemment utilisées, ce qui permet un accès très rapide. Le cache L1 est généralement plus petit que les caches de niveau supérieur (L2, L3), mais plus rapide.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture Mémoire",
    "q": "Qu’est-ce qu’une « page » dans un système de gestion de mémoire virtuelle ?",
    "choices": {
      "A": "Une unité de mémoire physique utilisée pour stocker les données sur le disque dur",
      "B": "Un composant du processeur chargé de gérer la mémoire",
      "C": "Une unité d’organisation des données dans la mémoire cache",
      "D": "Une unité de mémoire virtuelle qui correspond à une portion de la mémoire physique"
    },
    "correct": "D",
    "explanation": "<p>Dans la gestion de la mémoire virtuelle, la mémoire est divisée en « pages », qui sont des unités de mémoire virtuelle. Ces pages sont mappées sur des blocs de la mémoire physique. Cela permet une gestion efficace de l’utilisation de la mémoire, notamment en utilisant des techniques de pagination.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Architecture Mémoire",
    "q": "Qu’est-ce qu’une adresse virtuelle dans un système de gestion de mémoire ?",
    "choices": {
      "A": "Une adresse utilisée pour accéder directement à la mémoire physique",
      "B": "Une adresse assignée à chaque périphérique dans un système informatique",
      "C": "Une adresse logique utilisée par un programme pour accéder à la mémoire, qui est ensuite traduite en adresse physique",
      "D": "Une adresse utilisée pour la gestion des interruptions du processeur"
    },
    "correct": "C",
    "explanation": "<p>L’adresse virtuelle est une adresse utilisée par les programmes pour accéder à la mémoire, mais elle ne correspond pas directement à une position dans la mémoire physique. Le système d’exploitation, via une technique de gestion de mémoire appelée pagination ou segmentation, traduit les adresses virtuelles en adresses physiques.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Architecture Mémoire",
    "q": "Qu’est-ce que la « pagination » dans un système de gestion de la mémoire virtuelle ?",
    "choices": {
      "A": "Une méthode de gestion des erreurs liées à la mémoire",
      "B": "Un mécanisme pour compresser les données stockées en mémoire",
      "C": "Une méthode de gestion des pages de mémoire virtuelle en les découpant en segments plus petits",
      "D": "Une technique pour augmenter la vitesse d’accès à la mémoire cache"
    },
    "correct": "C",
    "explanation": "<p>La pagination est une technique de gestion de la mémoire virtuelle où la mémoire est divisée en « pages » de taille fixe. Cela permet de gérer la mémoire de manière plus flexible et de ne charger en mémoire que les pages nécessaires, réduisant ainsi l’utilisation des ressources.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Architecture Mémoire",
    "q": "Quel est le rôle de la « page de mémoire » dans un système avec gestion de la mémoire virtuelle ?",
    "choices": {
      "A": "Stocker de manière permanente les données des programmes",
      "B": "Diviser la mémoire physique en sections plus petites pour une gestion plus efficace",
      "C": "Fournir un accès direct aux instructions du programme",
      "D": "Augmenter la vitesse d’accès aux données en mémoire cache"
    },
    "correct": "B",
    "explanation": "<p>La gestion de la mémoire virtuelle repose sur la division de la mémoire physique en pages de mémoire. Ces pages permettent de gérer l’espace mémoire de manière plus flexible et d’améliorer l’accès aux données par le système d’exploitation, notamment en permettant l’échange de pages entre la RAM et le disque dur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Architecture Mémoire",
    "q": "Quelle est la différence entre la mémoire DRAM et la mémoire SRAM ?",
    "choices": {
      "A": "La DRAM est plus rapide mais plus coûteuse que la SRAM",
      "B": "La DRAM est volatile, tandis que la SRAM est non volatile",
      "C": "La DRAM nécessite un rafraîchissement constant pour maintenir les données, tandis que la SRAM n’en nécessite pas",
      "D": "La DRAM est utilisée dans les processeurs, tandis que la SRAM est utilisée dans les périphériques externes"
    },
    "correct": "C",
    "explanation": "<p>La DRAM (Dynamic RAM) est volatile et doit être régulièrement rafraîchie pour maintenir les données. En revanche, la SRAM (Static RAM) est plus rapide et ne nécessite pas de rafraîchissement, car elle conserve les données tant que l’alimentation est présente, mais elle est plus coûteuse et consomme plus de place.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Architecture Mémoire",
    "q": "Quelle est la fonction d’une « table de pages » dans un système de gestion de la mémoire virtuelle ?",
    "choices": {
      "A": "Assurer la gestion des fichiers ouverts et leur accès rapide",
      "B": "Gérer l’allocation de la mémoire physique pour chaque programme",
      "C": "Associer les adresses virtuelles aux adresses physiques en mémoire",
      "D": "Optimiser la vitesse d’accès à la mémoire cache"
    },
    "correct": "C",
    "explanation": "<p>La table de pages est utilisée dans les systèmes de mémoire virtuelle pour faire correspondre les adresses virtuelles (utilisées par les programmes) avec les adresses physiques réelles en mémoire. Cela permet une gestion plus flexible et efficace de la mémoire.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Gestion mémoire",
    "q": "La technique de gestion de la mémoire dans laquelle le système stocke et récupère les données du stockage secondaire pour les utiliser dans la mémoire principale est appelée __________",
    "choices": {
      "A": "fragmentation",
      "B": "pagination",
      "C": "mappage",
      "D": "aucune de ces techniques"
    },
    "correct": "B",
    "explanation": "La pagination est une technique de gestion de la mémoire dans laquelle la mémoire secondaire est divisée en blocs de taille fixe appelés pages, et la mémoire principale est divisée en blocs de taille fixe appelés frames.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Gestion mémoire",
    "q": "Le mappage de l’adresse virtuelle à l’adresse physique au moment de l’exécution est effectué par ________",
    "choices": {
      "A": "l’unité de gestion de la mémoire (MMU)",
      "B": "CPU",
      "C": "PCI"
    },
    "correct": "A",
    "explanation": "La MMU (Memory Management Unit) est le composant matériel responsable du mappage des adresses logiques vers les adresses physiques.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Gestion mémoire",
    "q": "Le programme traite toujours ___________",
    "choices": {
      "A": "l’adresse logique",
      "B": "l’adresse absolue",
      "C": "l’adresse physique",
      "D": "l’adresse relative"
    },
    "correct": "A",
    "explanation": "Les programmes en cours d'exécution utilisent des adresses logiques (ou virtuelles) qui sont ensuite traduites en adresses physiques par le matériel.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Gestion mémoire",
    "q": "Lequel des éléments suivants est utilisé comme dispositif de stockage primaire ?",
    "choices": {
      "A": "Bande magnétique",
      "B": "PROM",
      "C": "Disquette",
      "D": "Aucun des éléments ci-dessus"
    },
    "correct": "B",
    "explanation": "La mémoire primaire (ou principale) inclut généralement la RAM et la ROM/PROM, car elles sont directement accessibles par le processeur.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Gestion mémoire",
    "q": "Un buffer de mémoire utilisé pour compenser la différence de vitesse est appelé _________",
    "choices": {
      "A": "pointeur de pile",
      "B": "cache",
      "C": "accumulateur",
      "D": "bascule"
    },
    "correct": "B",
    "explanation": "La mémoire cache sert de stockage temporaire rapide pour atténuer les différences de vitesse entre les composants (ex: processeur et RAM).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Mémoire",
    "q": "Caractéristique(s) du mémoire en lecture seule est/sont ________?",
    "choices": {
      "A": "Lecture seule",
      "B": "Non volatil",
      "C": "Volatil",
      "D": "Lecture seule et Non volatil"
    },
    "correct": "D",
    "explanation": "<p>La mémoire morte (ROM) est non volatile et utilisée pour la lecture seule.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Mémoire",
    "q": "Généralement, la RAM dynamique est utilisée comme mémoire principale dans un système informatique car elle _________.",
    "choices": {
      "A": "consomme moins d’énergie",
      "B": "a une vitesse plus élevée",
      "C": "a une densité de cellules plus faible",
      "D": "nécessite un circuit de rafraîchissement"
    },
    "correct": "B",
    "explanation": "<p>La mémoire vive dynamique (DRAM) est couramment utilisée pour la mémoire principale des ordinateurs. Cela est dû à son taux de transfert plus élevé et à sa plus grande densité de stockage.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Mémoire",
    "q": "L’objectif d’une mémoire secondaire est de _____?",
    "choices": {
      "A": "Calculer des données",
      "B": "Stocker des données temporairement",
      "C": "Stocker en permanence des données"
    },
    "correct": "C",
    "explanation": "<p>La mémoire secondaire permet un stockage permanent et non volatile des données.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Mémoire",
    "q": "L’unité de mémoire à laquelle on accède par le contenu est appelée _________.",
    "choices": {
      "A": "Mémoire morte",
      "B": "Mémoire programmable",
      "C": "Mémoire virtuelle",
      "D": "Mémoire associative"
    },
    "correct": "D",
    "explanation": "<p>La mémoire associative est également connue sous le nom de mémoire adressable par le contenu (CAM), de stockage associatif ou de tableau associatif. Il s’agit d’un type particulier de mémoire qui est optimisé pour effectuer des recherches dans les données, plutôt que de fournir un simple accès direct aux données sur la base de leur adresse.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Mémoire",
    "q": "L’unité de mémoire qui communique directement avec la CPU est appelée ______?",
    "choices": {
      "A": "mémoire principale",
      "B": "mémoire secondaire",
      "C": "mémoire auxiliaire",
      "D": "mémoire de masse"
    },
    "correct": "A",
    "explanation": "La mémoire principale (RAM) est le stockage temporaire avec lequel le CPU interagit directement pour exécuter les programmes.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Mémoire",
    "q": "La mémoire cache agit entre __________",
    "choices": {
      "A": "l’unité centrale (CPU) et la RAM",
      "B": "la RAM et la ROM",
      "C": "l’unité centrale (CPU) et le disque dur",
      "D": "Aucun de ces éléments"
    },
    "correct": "A",
    "explanation": "<p>La mémoire cache est un type de mémoire extrêmement rapide qui stocke des données afin que les prochaines requêtes pour ces données puissent être traitées plus rapidement. Elle agit comme un buffer entre la mémoire vive et l’unité centrale. Elle stocke les données et les instructions fréquemment utilisées afin qu’elles soient immédiatement disponibles pour l’unité centrale lorsqu’elle en a besoin.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Mémoire",
    "q": "La mémoire cache est plus rapide, moins chère et plus petite que la mémoire vive (RAM).",
    "choices": {
      "A": "Vrai",
      "B": "Faux"
    },
    "correct": "A",
    "explanation": "La mémoire cache est conçue pour être extrêmement rapide, située très près du processeur, ce qui la rend plus coûteuse à produire et donc généralement plus petite en capacité que la RAM.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Mémoire",
    "q": "La mémoire de l’ordinateur utilisée pour accélérer le traitement de l’ordinateur est appelé _____?",
    "choices": {
      "A": "ROM",
      "B": "Mémoire cache",
      "C": "BIOS",
      "D": "RAM"
    },
    "correct": "B",
    "explanation": "<p>La mémoire cache contient les instructions fréquemment utilisées dont le processeur a besoin, offrant un accès plus rapide que la RAM.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Mémoire",
    "q": "La mémoire virtuelle se compose de ___________.",
    "choices": {
      "A": "RAM statique",
      "B": "RAM dynamique",
      "C": "Mémoire magnétique",
      "D": "Aucune de ces catégories"
    },
    "correct": "A",
    "explanation": "<p>La mémoire virtuelle est un élément essentiel des systèmes informatiques modernes, car elle leur permet d’exécuter des applications plus importantes et plusieurs applications simultanément. Il s’agit d’une technique de gestion de la mémoire qui utilise le stockage sur disque comme une extension de la mémoire physique, ce qui permet aux applications d’utiliser plus de mémoire que celle qui est physiquement disponible. La mémoire virtuelle est implémentée à l’aide d’une combinaison de composants logiciels et matériels, notamment la pagination, les tables de pages, les disques durs et les unités de gestion de la mémoire.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Mémoire",
    "q": "La puce EEPROM peut être ________?",
    "choices": {
      "A": "reprogrammé par la lumière ultraviolette",
      "B": "reprogrammé électroniquement",
      "C": "reconstruit",
      "D": "ré-enregistrer électroniquement"
    },
    "correct": "B",
    "explanation": "<p>La mémoire EEPROM est une mémoire non volatile qui peut être effacée et reprogrammée électroniquement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Mémoire",
    "q": "Le composant le plus probablement utilisé pour la technologie RAM statique (ou SRAM) est _____?",
    "choices": {
      "A": "Mémoire principale",
      "B": "Mémoire secondaire",
      "C": "Mémoire cache",
      "D": "Registres du CPU"
    },
    "correct": "C",
    "explanation": "<p>La mémoire SRAM est utilisée pour la mémoire cache d’un ordinateur en raison de sa rapidité.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q12",
    "partie": "Mémoire",
    "q": "Le concept de mémoire cache est basé sur _____________.",
    "choices": {
      "A": "sur la propriété de localité de référence",
      "B": "sur la règle heuristique des 90-10",
      "C": "sur le fait que les références ont généralement tendance à se regrouper"
    },
    "correct": "A",
    "explanation": "<p>Pour améliorer les performances d’un ordinateur, la mémoire cache s’appuie sur le concept de localité de référence. La localité de référence est un phénomène par lequel un programme informatique a tendance à accéder au même ensemble d’emplacements de mémoire pendant une période donnée. En d’autres termes, la localité de référence fait référence à la tendance du programme informatique à accéder aux instructions dont les adresses sont proches les unes des autres.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q13",
    "partie": "Mémoire",
    "q": "Le processeur dispose d’un accès direct à ______.",
    "choices": {
      "A": "mémoire principale",
      "B": "mémoire secondaire",
      "C": "cache",
      "D": "mémoire flash"
    },
    "correct": "A",
    "explanation": "Le processeur communique directement avec la mémoire principale (RAM) pour lire les instructions et les données à traiter.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q14",
    "partie": "Mémoire",
    "q": "Le temps moyen nécessaire pour accéder à un emplacement de stockage dans la mémoire et obtenir son contenu est appelé _________.",
    "choices": {
      "A": "le temps de recherche",
      "B": "le temps de rotation",
      "C": "le temps d’accès",
      "D": "le temps de transfert"
    },
    "correct": "C",
    "explanation": "<p>Le temps d’accès est le temps nécessaire à un disque pour localiser les données. Les temps d’accès typiques pour les lecteurs de disques modem sont compris entre 10 et 30 ms.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q15",
    "partie": "Mémoire",
    "q": "Le temps qui s’écoule entre le début d’une opération et son achèvement s’appelle _______?",
    "choices": {
      "A": "débit",
      "C": "temps d’accès à la mémoire",
      "D": "temps d’exécution"
    },
    "correct": "C",
    "explanation": "Le temps d'accès est le délai requis par la mémoire pour répondre à une requête de lecture ou d'écriture.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q16",
    "partie": "Mémoire",
    "q": "Le transfert de données entre la mémoire principale et le registre du CPU s’effectue via deux registres, à savoir _____?",
    "choices": {
      "A": "registre à usage général et MDR",
      "B": "accumulateur et compteur ordinale",
      "C": "MAR et MDR",
      "D": "MAR et accumulateur"
    },
    "correct": "C",
    "explanation": "Le MAR (Memory Address Register) stocke l'adresse cible et le MDR (Memory Data Register) stocke les données transférées.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q17",
    "partie": "Mémoire",
    "q": "Le type de mémoire non volatile qui ne peut pas être modifié par l’utilisateur est _____?",
    "choices": {
      "A": "SRAM",
      "B": "DRAM",
      "C": "ROM",
      "D": "RAM"
    },
    "correct": "C",
    "explanation": "<p>La mémoire morte (ROM) contient des données permanentes qui, normalement, ne peuvent être que lues.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q18",
    "partie": "Mémoire",
    "q": "Lors de l’exécution d’une boucle, l’instruction est stockée sur ______.",
    "choices": {
      "A": "Registres",
      "B": "Cache",
      "C": "le tas du système",
      "D": "Pile du système"
    },
    "correct": "B",
    "explanation": "<p>Lors de l’exécution d’une boucle, l’instruction est stockée dans la mémoire cache avec les données.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q19",
    "partie": "Mémoire",
    "q": "Qu’est-ce qu’un « cache associatif » ?",
    "choices": {
      "A": "Un type de cache où chaque ligne est associée à une adresse fixe",
      "B": "Un cache accessible par plusieurs processeurs",
      "C": "Un cache utilisé uniquement pour les données graphiques",
      "D": "Un type de cache où les données peuvent être placées dans plusieurs emplacements, facilitant la recherche"
    },
    "correct": "D",
    "explanation": "<p>Dans un cache associatif, une donnée peut être stockée à plusieurs endroits possibles, ce qui réduit les conflits de données comparé à un cache à correspondance directe.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q20",
    "partie": "Mémoire",
    "q": "Qu’est-ce qu’un « système de gestion de mémoire » (MMU) ?",
    "choices": {
      "A": "Un composant gérant les entrées/sorties",
      "B": "Un composant qui traduit les adresses virtuelles en adresses physiques et protège la mémoire",
      "C": "Un composant effectuant des calculs complexes",
      "D": "Un composant gérant la communication OS-Processeur"
    },
    "correct": "B",
    "explanation": "<p>La MMU est l'unité responsable de la gestion de la mémoire virtuelle et de la protection des espaces mémoire alloués aux processus.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q21",
    "partie": "Mémoire",
    "q": "Qu’est-ce qu’une « mémoire virtuelle » ?",
    "choices": {
      "A": "Une mémoire qui stocke les données à long terme",
      "B": "Un type de mémoire qui fonctionne uniquement sur les systèmes multi-utilisateurs",
      "C": "Une forme de stockage externe",
      "D": "Une technique utilisant une partie du disque comme extension de la RAM physique"
    },
    "correct": "D",
    "explanation": "<p>La mémoire virtuelle simule de la RAM supplémentaire en utilisant le disque (swap) pour permettre l'exécution de programmes plus grands que la mémoire physique disponible.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q22",
    "partie": "Mémoire",
    "q": "Quel est le rôle du « contrôleur de cache » ?",
    "choices": {
      "A": "Augmenter la vitesse de communication avec la mémoire principale",
      "B": "Gérer la hiérarchie et l'accès aux mémoires cache (L1, L2, L3) pour accélérer le processeur",
      "C": "Gérer l’accès aux périphériques externes",
      "D": "Exécuter les instructions dans le processeur"
    },
    "correct": "B",
    "explanation": "<p>Le contrôleur de cache gère les niveaux de cache ultra-rapides pour minimiser les accès lents à la mémoire RAM.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q23",
    "partie": "Mémoire",
    "q": "Quelle est la caractéristique de la mémoire RAM qui fait qu’elle n’est pas adaptée pour le stockage permanent ?",
    "choices": {
      "A": "Trop lente",
      "B": "Elle n’est pas fiable",
      "C": "Elle est volatile",
      "D": "Trop encombrante"
    },
    "correct": "C",
    "explanation": "<p>La mémoire RAM est une mémoire volatile qui peut stocker des données tant que le courant la traverse. Toutes les données sont perdues dès que le courant s’arrête. Nous pouvons stocker des données de manière permanente si le courant circule en permanence, mais ce n’est pas possible.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q24",
    "partie": "Mémoire",
    "q": "Quelle est la différence entre la mémoire « volatile » et « non volatile » ?",
    "choices": {
      "A": "La mémoire volatile conserve les données même après l’extinction, contrairement à la non volatile",
      "B": "La mémoire non volatile est utilisée pour le court terme",
      "C": "La mémoire volatile perd ses données lorsque l’alimentation est coupée, tandis que la non volatile les conserve",
      "D": "La mémoire volatile est plus lente que la mémoire non volatile"
    },
    "correct": "C",
    "explanation": "<p>La mémoire volatile (RAM) nécessite du courant pour maintenir les données. La mémoire non volatile (ROM, SSD) conserve les données sans alimentation.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q25",
    "partie": "Mémoire",
    "q": "Quelle est la principale caractéristique de la mémoire « DDR » ?",
    "choices": {
      "A": "Elle permet de stocker des données de manière non volatile",
      "B": "Elle utilise deux transferts de données par cycle d’horloge pour augmenter la vitesse",
      "C": "Elle est principalement utilisée pour le stockage à long terme",
      "D": "Elle fonctionne uniquement dans les ordinateurs de bureau"
    },
    "correct": "B",
    "explanation": "<p>DDR signifie Double Data Rate : la mémoire transfère des données sur les fronts montant et descendant du signal d'horloge, doublant ainsi le débit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Stockage",
    "q": "La méthode d’accès utilisée pour les bandes magnétiques est _________",
    "choices": {
      "A": "Direct",
      "B": "Aléatoire",
      "C": "Séquentielle",
      "D": "Aucune de ces méthodes"
    },
    "correct": "C",
    "explanation": "Le périphérique de stockage auxiliaire le plus utilisé sur les premiers ordinateurs était la bande magnétique. Comme les enregistrements sur un tel support doivent être stockés de manière séquentielle, ils doivent également être traités de manière séquentielle pour une efficacité optimale.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Stockage",
    "q": "La recherche d’informations est plus rapide à partir de ______________.",
    "choices": {
      "A": "Disquette",
      "B": "Bande magnétique",
      "C": "Disque dur",
      "D": "Aucun des éléments ci-dessus"
    },
    "correct": "C",
    "explanation": "Le disque dur offre un accès direct aux données, ce qui est significativement plus rapide que l'accès séquentiel des bandes magnétiques ou les performances des disquettes.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Stockage",
    "q": "Le CD-ROM est une ____________.",
    "choices": {
      "A": "Mémoire à semi-conducteurs",
      "B": "Registre de mémoire",
      "C": "Mémoire magnétique",
      "D": "Aucune de ces catégories"
    },
    "correct": "D",
    "explanation": "Le CD-ROM est un support de stockage optique.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Stockage",
    "q": "Le temps nécessaire pour lire un bloc de données d’un disque dans la mémoire se compose du temps de recherche, de la latence de rotation et du temps de transfert. Le temps de latence de rotation correspond à _________.",
    "choices": {
      "A": "le temps nécessaire au plateau pour effectuer une rotation complète",
      "B": "le temps nécessaire à la tête de lecture-écriture pour se positionner sur la piste appropriée",
      "C": "le temps nécessaire pour que le plateau fasse tourner le bon secteur sous la tête.",
      "D": "aucun des points ci-dessus"
    },
    "correct": "A",
    "explanation": "<p>La latence de rotation (en millisecondes) décrit le temps nécessaire au plateau pour effectuer une rotation complète et dépend directement du nombre de tours par minute.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Stockage",
    "q": "Une disquette contient _____________.",
    "choices": {
      "A": "Des pistes circulaires uniquement",
      "B": "Des secteurs uniquement",
      "C": "Des pistes circulaires et des secteurs",
      "D": "Aucune de ces deux catégories"
    },
    "correct": "C",
    "explanation": "Les supports magnétiques rotatifs comme les disquettes sont organisés en pistes circulaires, elles-mêmes subdivisées en secteurs.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
