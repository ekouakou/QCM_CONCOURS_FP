const QCM = [
  {
    "num": "Q1",
    "partie": "Architecture des ordinateurs",
    "q": "______ est utilisé pour surmonter les différences de vitesse de transfert de données entre différents appareils.",
    "choices": {
      "A": "Circuits d’amélioration de la vitesse",
      "B": "Circuits de pont",
      "C": "Bus multiples",
      "D": "Les registres tampon (buffers)"
    },
    "correct": "D",
    "explanation": "<p>En utilisant les registres de mémoire tampon, le processeur envoie les données à la vitesse du processeur et elles sont stockées avant d'être envoyées au périphérique.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture des ordinateurs",
    "q": "Au cours de l’exécution d’un programme, quel registre est initialisé en premier ?",
    "choices": {
      "A": "MDR",
      "B": "MAR",
      "C": "PC"
    },
    "correct": "C",
    "explanation": "<p>Pour l’exécution d’un processus, l’instruction est d’abord placée dans le registre PC (Program Counter).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Architecture des ordinateurs",
    "q": "Dans les ordinateurs, la soustraction est généralement effectuée par le ___________.",
    "choices": {
      "A": "complément à 9",
      "B": "complément à 10",
      "C": "complément à 1",
      "D": "complément à 2"
    },
    "correct": "D",
    "explanation": "<p>Le complément à deux est utilisé en informatique car il utilise la notation binaire pour représenter les nombres entiers négatifs. Il simplifie le processus des opérations arithmétiques telles que l’addition et la soustraction sur les ordinateurs, en particulier entre les nombres positifs et négatifs, en évitant la nécessité d’algorithmes de soustraction distincts.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Architecture des ordinateurs",
    "q": "Dans quel mode d’adressage l’opérande est-il donné explicitement dans l’instruction ?",
    "choices": {
      "A": "Absolu",
      "B": "Immédiat",
      "C": "Indirect",
      "D": "Direct"
    },
    "correct": "B",
    "explanation": "<p>L’adressage immédiat n’est pas vraiment un mode d’adressage en mémoire; il s’agit plutôt d’un format d’instruction qui inclut directement les données sur lesquelles il faut agir dans le contexte de l’instruction. Cette forme d’accès à l’opérande simplifie le cycle d’exécution de l’instruction puisqu’aucune recherche supplémentaire n’est nécessaire.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Architecture des ordinateurs",
    "q": "Dans un ordinateur, CU signifie ________?",
    "choices": {
      "A": "Control Unit",
      "B": "Cache Unit",
      "C": "Calculating Unit",
      "D": "Communication Unit"
    },
    "correct": "A",
    "explanation": "<p>CU (Control Unit) ou l’unité de contrôle est la partie du CPU qui dirige le fonctionnement du processeur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Architecture des ordinateurs",
    "q": "Deux processeurs A et B ont des fréquences d’horloge de 700 Mhz et 900 Mhz respectivement. Supposons que A puisse exécuter une instruction en 3 phases et que B puisse l’exécuter en 5 phases. Pour l’exécution de la même instruction, quel processeur est le plus rapide ?",
    "choices": {
      "A": "Processeur A",
      "B": "Processeur B",
      "C": "Les deux prennent le même temps",
      "D": "Information insuffisante"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Architecture des ordinateurs",
    "q": "ISP signifie _________.",
    "choices": {
      "A": "Instruction Set Processor",
      "B": "Information Standard Processing",
      "C": "Interchange Standard Protocol",
      "D": "Interrupt Service Procedure"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Architecture des ordinateurs",
    "q": "L’architecture Von Neumann est ___________.",
    "choices": {
      "A": "SISD",
      "B": "SIMD",
      "C": "MIMD",
      "D": "MISD"
    },
    "correct": "A",
    "explanation": "<p>SISD (Single Instruction, Single Data) fait référence à l’architecture traditionnelle de von Neumann, SISD représente l’organisation d’un ordinateur contenant une unité de contrôle, une unité de traitement et une unité de mémoire. Les instructions sont exécutées de manière séquentielle et le système peut ou non disposer de capacités internes de traitement parallèle.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Architecture des ordinateurs",
    "q": "L’étape où l’ordinateur exécute l’action donnée dans l’instruction s’appelle ______?",
    "choices": {
      "A": "fetch",
      "B": "calculate",
      "C": "decode",
      "D": "execute"
    },
    "correct": "D",
    "explanation": "Le cycle d'instruction comprend le fetch (récupération), le decode (décodage) et l'execute (exécution).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Architecture des ordinateurs",
    "q": "L’inconvénient de la construction d’une grande mémoire avec la DRAM est ________.",
    "choices": {
      "A": "La lenteur de fonctionnement",
      "B": "Le coût élevé",
      "C": "L’inefficacité de l’organisation de la mémoire",
      "D": "Tous ces éléments"
    },
    "correct": "A",
    "explanation": "<p>L’inconvénient de la construction d’une grande mémoire avec la DRAM est la lenteur de son fonctionnement. Cela peut affecter les performances globales du système et le rendre inadapté aux applications qui nécessitent des temps d’accès rapides.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Architecture des ordinateurs",
    "q": "L’instruction décodée est stockée sur ______",
    "choices": {
      "A": "IR (Instruction Register)",
      "B": "PC (Program Counter)",
      "C": "Registres",
      "D": "MDR"
    },
    "correct": "A",
    "explanation": "<p>L’instruction, après avoir été obtenue du PC, est décodée et stockée dans l’IR (Instruction Register).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q12",
    "partie": "Architecture des ordinateurs",
    "q": "L’opération exécutée sur des données stockées dans des registres est appelée __________",
    "choices": {
      "A": "Macro-opération",
      "B": "Micro-opération",
      "C": "Opération sur les bits",
      "D": "Opération sur octet"
    },
    "correct": "B",
    "explanation": "<p>Micro-opérations signifie: Effectuer des opérations arithmétiques sur des données numériques stockées dans des registres.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q13",
    "partie": "Architecture des ordinateurs",
    "q": "La fréquence d’horloge du processeur peut être améliorée _________",
    "choices": {
      "A": "en améliorant la technologie des circuits logiques",
      "B": "en réduisant le nombre de traitements effectués en une seule phase",
      "C": "en utilisant la méthode d’overclocking",
      "D": "Tous ces éléments"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q14",
    "partie": "Architecture des ordinateurs",
    "q": "La manière dont les composants informatiques sont connectés les uns aux autres est appelée ________?",
    "choices": {
      "A": "mise en page informatique",
      "B": "l’architecture des ordinateurs",
      "C": "pièces d’ordinateur",
      "D": "matériel informatique"
    },
    "correct": "B",
    "explanation": "<p>L’architecture des ordinateurs est l’ensemble des principes qui décrivent comment le matériel et les logiciels se connectent pour faire fonctionner un ordinateur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q15",
    "partie": "Architecture des ordinateurs",
    "q": "La mémoire qui permet l’opération de lecture et d’écriture simultanées est _________?",
    "choices": {
      "A": "ROM",
      "B": "RAM",
      "C": "EPROM",
      "D": "EEPROM"
    },
    "correct": "B",
    "explanation": "La mémoire qui permet l’opération de lecture et d’écriture simultanées est RAM (Random Access Memory).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q16",
    "partie": "Architecture des ordinateurs",
    "q": "La principale raison d’utiliser une structure à bus unique est la suivante: ________.",
    "choices": {
      "A": "Transferts de données rapides",
      "B": "Connectivité et vitesse rentables",
      "C": "Connectivité rentable et facilité de connexion des périphériques",
      "D": "Aucun de ces avantages"
    },
    "correct": "C",
    "explanation": "<p>L’utilisation d’une structure à BUS unique permet de minimiser le matériel nécessaire et donc de réduire le coût.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q17",
    "partie": "Architecture des ordinateurs",
    "q": "La structure à _________ est généralement utilisée pour connecter les périphériques d’E/S.",
    "choices": {
      "A": "bus unique",
      "B": "bus multiple",
      "C": "bus en étoile",
      "D": "deux bus"
    },
    "correct": "A",
    "explanation": "<p>Le BUS est un ensemble de fils qui transportent des adresses, des signaux de contrôle et des données.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q18",
    "partie": "Architecture des ordinateurs",
    "q": "Laquelle des opérations suivantes est principalement effectuée par la mémoire vive (RAM)?",
    "choices": {
      "A": "Lecture seule",
      "B": "Lecture et écriture",
      "C": "Écriture seulement",
      "D": "Dépend du système"
    },
    "correct": "B",
    "explanation": "<p>Le terme RAM fait référence à une mémoire de lecture et d’écriture, c’est-à-dire que vous pouvez à la fois écrire des données dans la RAM et lire des données à partir de la RAM.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q19",
    "partie": "Architecture des ordinateurs",
    "q": "Le bit utilisé pour indiquer que l’emplacement du cache est mis à jour est ________.",
    "choices": {
      "A": "Flag bit",
      "B": "Reference bit",
      "C": "Update bit",
      "D": "Dirty bit"
    },
    "correct": "D",
    "explanation": "<p>Lorsque les données mises en cache sont modifiées, le bit « dirty » est activé et un signal est envoyé au processeur, pour indiquer que les données de la mémoire cache ont été modifiées et doivent être réécrites.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q20",
    "partie": "Architecture des ordinateurs",
    "q": "Le CD-ROM est un ______.",
    "choices": {
      "A": "Fichier MP3",
      "B": "Microprocesseur",
      "C": "Disque magnétique",
      "D": "Support de stockage"
    },
    "correct": "D",
    "explanation": "<p>Un CD-ROM est un type de disque optique qui permet de stocker des données.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q21",
    "partie": "Architecture des ordinateurs",
    "q": "Le cerveau d’un ordinateur est _____?",
    "choices": {
      "A": "CPU",
      "B": "Logiciel",
      "C": "Disque dur",
      "D": "Mémoire"
    },
    "correct": "A",
    "explanation": "<p>Le processeur, couramment appelé unité centrale de traitement (CPU), est le cerveau de l’ordinateur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q22",
    "partie": "Architecture des ordinateurs",
    "q": "Le circuit utilisé pour stocker un bit de données est connu sous le nom de __________.",
    "choices": {
      "A": "Registre",
      "B": "Encodeur",
      "C": "Décodeur",
      "D": "Bascule"
    },
    "correct": "D",
    "explanation": "<p>Une bascule est un circuit qui stocke un seul bit (chiffre binaire) de données. Les données stockées peuvent être modifiées en appliquant des entrées variables. Il existe 4 types de bascules : SR, JK, T et D.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q23",
    "partie": "Architecture des ordinateurs",
    "q": "Le composant informatique le plus rapide est ______?",
    "choices": {
      "A": "RAM",
      "B": "cache",
      "C": "registre",
      "D": "disque dur"
    },
    "correct": "C",
    "explanation": "Les registres de l’unité centrale sont les éléments de stockage les plus rapides au sein d’un ordinateur.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q24",
    "partie": "Architecture des ordinateurs",
    "q": "Le Compteur de programme (PC) est également appelé _______?",
    "choices": {
      "A": "pointeur d’instruction",
      "B": "pointeur de mémoire",
      "C": "compteur de données",
      "D": "pointeur de fichier"
    },
    "correct": "A",
    "explanation": "Le PC contient l'adresse de l'instruction en cours d'exécution, d'où le terme pointeur d'instruction.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q25",
    "partie": "Architecture des ordinateurs",
    "q": "Le délai entre deux initiations successives d’une opération de mémoire _______.",
    "choices": {
      "A": "Temps d’accès à la mémoire",
      "B": "Temps de recherche en mémoire",
      "C": "Temps de cycle de la mémoire",
      "D": "Délai d’instruction"
    },
    "correct": "C",
    "explanation": "<p>Le temps de cycle de la mémoire est le temps nécessaire pour terminer une tâche et en commencer une autre.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q26",
    "partie": "Architecture des ordinateurs",
    "q": "Le mode d’adressage utilisé dans l’instruction ADD X Y, est ________.",
    "choices": {
      "A": "absolu",
      "B": "indirect",
      "C": "index",
      "D": "aucun de ces modes"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q27",
    "partie": "Architecture des ordinateurs",
    "q": "Le processeur est composé des pièces suivantes ______?",
    "choices": {
      "A": "CU (unité de contrôle) et mémoire principale",
      "B": "CU (unité de contrôle) et ALU(Unité Arithmétique et Logique)",
      "C": "Mémoire principale et stockage",
      "D": "Système d’exploitation et application"
    },
    "correct": "B",
    "explanation": "Le processeur est constitué principalement de l'unité de contrôle et de l'unité arithmétique et logique.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q28",
    "partie": "Architecture des ordinateurs",
    "q": "Le registre ______ connecté au bus du processeur permet un transfert unidirectionnel.",
    "choices": {
      "C": "Temp"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q29",
    "partie": "Architecture des ordinateurs",
    "q": "Le temps d’accès à la mémoire est _____ le temps nécessaire pour effectuer une seule opération du CPU.",
    "choices": {
      "A": "plus court que",
      "B": "plus long que",
      "C": "Négligeable à",
      "D": "Identique à"
    },
    "correct": "B",
    "explanation": "En raison de la hiérarchie mémoire, l'accès à la RAM est toujours nettement plus lent que l'exécution interne par le CPU.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q30",
    "partie": "Architecture des ordinateurs",
    "q": "Lequel des éléments suivants est un exemple de mémoire non volatile ?",
    "choices": {
      "A": "RAM",
      "B": "Registre",
      "C": "Disque dur",
      "D": "Mémoire cache"
    },
    "correct": "C",
    "explanation": "Le disque dur est non volatile : il conserve les données sans alimentation électrique.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q31",
    "partie": "Architecture des ordinateurs",
    "q": "Les cellules de la mémoire de l’ordinateur sont organisées en un groupe de_________?",
    "choices": {
      "A": "8 bits",
      "B": "5 bits",
      "C": "12 bits",
      "D": "4 bits"
    },
    "correct": "A",
    "explanation": "L'organisation de base de la mémoire est généralement basée sur des groupes de 8 bits (octets).",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q32",
    "partie": "Architecture des ordinateurs",
    "q": "Les composants internes du processeur sont connectés par _______",
    "choices": {
      "A": "le circuit de connectivité interne du processeur",
      "B": "le bus du processeur",
      "C": "le bus de mémoire",
      "D": "Rambus"
    },
    "correct": "B",
    "explanation": "<p>Le BUS du processeur est utilisé pour connecter les différents composants afin de fournir une connexion directe.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q33",
    "partie": "Architecture des ordinateurs",
    "q": "Les ordinateurs utilisent des techniques de mode d’adressage pour __________.",
    "choices": {
      "A": "donner à l’utilisateur une certaine souplesse de programmation en lui fournissant des facilités telles que des pointeurs vers des compteurs de mémoire pour le contrôle des boucles",
      "B": "réduire le nombre de bits dans le champ de l’instruction",
      "C": "spécifier des règles pour modifier ou interpréter le champ d’adresse de l’instruction."
    },
    "correct": "C",
    "explanation": "<p>Les ordinateurs utilisent des techniques de mode d’adressage pour répondre à l’un des besoins suivants :1. Donner à l’utilisateur une souplesse de programmation en lui fournissant des facilités telles que des pointeurs vers la mémoire, des compteurs pour le contrôle des boucles, l’indexation des données et la relocalisation du programme.2. Réduire le nombre de bits dans le champ d’adressage de l’instruction.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q34",
    "partie": "Architecture des ordinateurs",
    "q": "Les périphériques de saisie peuvent envoyer des informations au processeur.",
    "choices": {
      "A": "Lorsque l’indicateur d’état SIN est activé",
      "B": "Lorsque les données arrivent indépendamment de l’indicateur SIN",
      "C": "Aucun des deux cas",
      "D": "A ou B"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q35",
    "partie": "Architecture des ordinateurs",
    "q": "Lors d’une opération d’écriture, si le bloc requis n’est pas présent dans la mémoire cache, ______ se produit.",
    "choices": {
      "A": "Absence d’écriture",
      "B": "Latence d’écriture",
      "C": "Écriture réussie",
      "D": "Délai d’écriture"
    },
    "correct": "A",
    "explanation": "<p>Cela indique que l’opération a été manquée et que le bloc requis a été placé dans le cache.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q36",
    "partie": "Architecture des ordinateurs",
    "q": "Lorsque l’arithmétique, la logique et l’unité de contrôle d’un ordinateur sont combinées en une seule unité, on parle de ________?",
    "choices": {
      "A": "unité centrale de traitement",
      "B": "unité de mémoire",
      "C": "unité d’E/S",
      "D": "unité opérant"
    },
    "correct": "A",
    "explanation": "<p>L’unité centrale de traitement (CPU), est la partie principale de tout système informatique numérique, généralement composée de la mémoire principale(RAM), de l’unité de contrôle et de l’unité arithmétique-logique.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q37",
    "partie": "Architecture des ordinateurs",
    "q": "Lorsque le CPU détecte une interruption, il enregistre alors son ______?",
    "choices": {
      "A": "Etat précédent",
      "B": "sont vrais.",
      "C": "Etat actuel",
      "D": "les deux"
    },
    "correct": "C",
    "explanation": "Le CPU sauvegarde son état actuel avant de traiter une interruption pour pouvoir reprendre sa tâche ultérieurement.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q38",
    "partie": "Architecture des ordinateurs",
    "q": "MIMD signifie __________.",
    "choices": {
      "A": "Multiple instruction multiple data",
      "B": "Multiple instruction memory data",
      "C": "Memory instruction multiple data",
      "D": "Multiple information memory data"
    },
    "correct": "A",
    "explanation": "<p>MIMD est l’abréviation de Multiple Instruction and Multiple Data Stream (flux d’instructions et de données multiples). Dans cette organisation, tous les processeurs d’un ordinateur parallèle peuvent exécuter des instructions distinctes et agir sur des données différentes en même temps. Chaque processeur du MIMD a son propre programme et chaque programme génère un flux d’instructions.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q39",
    "partie": "Architecture des ordinateurs",
    "q": "Pendant l’exécution des instructions, une copie des instructions est placée dans le ______.",
    "choices": {
      "A": "le registre",
      "B": "RAM",
      "C": "Le tas du système",
      "D": "Cache"
    },
    "correct": "D",
    "explanation": "<p>Pendant l’exécution, une copie des instructions est placée dans le cache pour accélérer l'accès.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q40",
    "partie": "Architecture des ordinateurs",
    "q": "Pour réduire le temps d’accès à la mémoire, nous utilisons généralement ______.",
    "choices": {
      "A": "des tas (heaps)",
      "B": "des RAM de plus grande capacité",
      "C": "SDRAM",
      "D": "Cache"
    },
    "correct": "D",
    "explanation": "<p>La mémoire cache réduit efficacement le temps d’accès de l’unité centrale (CPU) à la mémoire principale (RAM).</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q41",
    "partie": "Architecture des ordinateurs",
    "q": "Qu’est-ce qu’un « registre » dans un processeur ?",
    "choices": {
      "A": "Un type de mémoire à long terme",
      "B": "Une petite unité de stockage dans le processeur utilisée pour des calculs rapides",
      "C": "Un périphérique externe pour stocker des données",
      "D": "Un composant pour gérer l’affichage graphique"
    },
    "correct": "B",
    "explanation": "Les registres sont des unités de stockage internes au processeur pour un accès extrêmement rapide.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q42",
    "partie": "Architecture des ordinateurs",
    "q": "Qu’est-ce que l’unité centrale de traitement (CPU) dans un ordinateur ?",
    "choices": {
      "A": "Une unité de stockage de données",
      "B": "L’endroit où se trouvent les périphériques de saisie",
      "C": "Le circuit principal qui exécute les instructions du programme",
      "D": "Un composant qui contrôle les entrées/sorties de l’ordinateur"
    },
    "correct": "C",
    "explanation": "L’unité centrale de traitement (CPU) est responsable de l’exécution des instructions du programme. Elle est considérée comme le « cerveau » de l’ordinateur.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q43",
    "partie": "Architecture des ordinateurs",
    "q": "Qu’est-ce que la mémoire vive (RAM) ?",
    "choices": {
      "A": "Une mémoire qui conserve les données même lorsqu’elle est éteinte",
      "B": "Une mémoire utilisée pour stocker les programmes et les données en cours d’exécution",
      "C": "Un périphérique d’entrée",
      "D": "Un type de disque dur"
    },
    "correct": "B",
    "explanation": "La RAM est une mémoire volatile utilisée pour stocker temporairement les données en cours d’exécution.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q44",
    "partie": "Architecture des ordinateurs",
    "q": "Qu’est-ce que le bus système ?",
    "choices": {
      "A": "Un composant qui stocke les données de manière permanente",
      "B": "Un canal de communication qui permet le transfert de données entre les différents composants de l’ordinateur",
      "C": "Un périphérique d’entrée qui permet à l’utilisateur de saisir des informations",
      "D": "Une partie de la mémoire vive (RAM)"
    },
    "correct": "B",
    "explanation": "Un bus système est un canal de communication permettant le transfert de données entre les composants de l’ordinateur.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q45",
    "partie": "Architecture des ordinateurs",
    "q": "Que signifie le terme « architecture de von Neumann » ?",
    "choices": {
      "A": "Un modèle d’ordinateur dans lequel le processeur et la mémoire partagent le même espace d’adressage",
      "B": "Un type d’architecture qui sépare les unités de calcul et de contrôle",
      "C": "Un type d’ordinateur utilisant un processeur multiprocesseur",
      "D": "Une architecture utilisant plusieurs bus pour séparer les données et les instructions"
    },
    "correct": "A",
    "explanation": "L'architecture de von Neumann utilise un espace mémoire partagé pour les données et les instructions.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q46",
    "partie": "Architecture des ordinateurs",
    "q": "Quel est le rôle de l’unité de contrôle dans un processeur ?",
    "choices": {
      "A": "Effectuer les calculs mathématiques",
      "B": "Gérer l’exécution des instructions et coordonner les autres unités du processeur",
      "C": "Gérer la mémoire vive (RAM)",
      "D": "Assurer la communication avec les périphériques d’entrée/sortie"
    },
    "correct": "B",
    "explanation": "L’unité de contrôle coordonne le flux d’exécution des instructions et les autres unités du CPU.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q47",
    "partie": "Architecture des ordinateurs",
    "q": "Quel est le rôle du contrôleur de mémoire dans un ordinateur ?",
    "choices": {
      "A": "Gérer l’exécution des instructions dans le processeur",
      "B": "Contrôler l’accès aux périphériques externes",
      "C": "Gérer les transferts de données entre le processeur et la mémoire principale",
      "D": "Stocker des données à long terme"
    },
    "correct": "C",
    "explanation": "Le contrôleur de mémoire supervise les lectures et écritures entre le CPU et la RAM.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q48",
    "partie": "Architecture des ordinateurs",
    "q": "Quel type de processeur est utilisé dans un système multiprocesseur ?",
    "choices": {
      "A": "Un processeur avec plusieurs unités de contrôle",
      "B": "Un seul processeur avec plusieurs cœurs",
      "C": "Plusieurs processeurs travaillant en parallèle",
      "D": "Un processeur unique avec plusieurs bus"
    },
    "correct": "C",
    "explanation": "Un système multiprocesseur s'appuie sur plusieurs unités de traitement indépendantes travaillant en parallèle.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q49",
    "partie": "Architecture des ordinateurs",
    "q": "Quel(s) registre(s) du processeur est/sont connecté(s) au bus de mémoire ?",
    "choices": {
      "B": "MAR",
      "D": "PC et MAR"
    },
    "correct": "B",
    "explanation": "<p>MAR est connecté au BUS mémoire afin d’accéder à la mémoire.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q50",
    "partie": "Architecture des ordinateurs",
    "q": "Quelle est la fonction de l’unité arithmétique et logique (ALU) ?",
    "choices": {
      "A": "Gérer les entrées/sorties de l’ordinateur",
      "B": "Contrôler le transfert de données entre les différents composants",
      "C": "Exécuter les opérations mathématiques et logiques",
      "D": "Stocker les programmes exécutés par le processeur"
    },
    "correct": "C",
    "explanation": "L’ALU réalise les calculs mathématiques et les comparaisons logiques.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q51",
    "partie": "Architecture des ordinateurs",
    "q": "Quelle est la fonction principale de la mémoire cache ?",
    "choices": {
      "A": "Stocker les fichiers utilisateurs",
      "B": "Accélérer l’accès aux données fréquemment utilisées par le processeur",
      "C": "Stocker les données à long terme",
      "D": "Assurer la communication entre le processeur et la mémoire principale"
    },
    "correct": "B",
    "explanation": "La mémoire cache réduit les délais d’accès en stockant les données les plus fréquemment utilisées par le CPU.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q52",
    "partie": "Architecture des ordinateurs",
    "q": "Quelle est la principale différence entre la mémoire cache de niveau 1 (L1) et la mémoire cache de niveau 2 (L2) ?",
    "choices": {
      "A": "La mémoire L1 est plus lente que la L2",
      "B": "La mémoire L2 est intégrée directement dans le processeur, tandis que la L1 est séparée",
      "C": "La mémoire L1 est plus proche du cœur du processeur et donc plus rapide que la L2",
      "D": "La mémoire L2 est utilisée pour les données statiques, tandis que la L1 est utilisée pour les données dynamiques"
    },
    "correct": "C",
    "explanation": "Le cache L1 est intégré au cœur et est le plus rapide de la hiérarchie cache.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q53",
    "partie": "Architecture des ordinateurs",
    "q": "Quels registres peuvent interagir avec le stockage secondaire ?",
    "choices": {
      "A": "MAR"
    },
    "correct": "A",
    "explanation": "<p>Le registre MAR peut interagir avec le stockage secondaire comme disques durs (HDD) afin d’en extraire des données.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q54",
    "partie": "Architecture des ordinateurs",
    "q": "Qui n’est pas considéré comme un périphérique de l’ordinateur?",
    "choices": {
      "A": "Disque",
      "B": "Clavier",
      "C": "Moniteur",
      "D": "CPU"
    },
    "correct": "D",
    "explanation": "Le CPU (Central Processing Unit) est le processeur, le cœur du système, et non un périphérique externe.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q55",
    "partie": "Architecture des ordinateurs",
    "q": "Un « BUS » informatique est composé de ______?",
    "choices": {
      "A": "registres",
      "B": "accumulateurs",
      "C": "ensemble de lignes parallèles",
      "D": "horloge d’ordinateur"
    },
    "correct": "C",
    "explanation": "Un bus informatique transfère plusieurs bits de données en simultané via un ensemble de lignes parallèles.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q56",
    "partie": "Architecture des ordinateurs",
    "q": "Un pipeline d’instructions peut être implémenté au moyen de __________",
    "choices": {
      "A": "Buffer LIFO",
      "B": "Buffer FIFO",
      "C": "Pile",
      "D": "Aucun des éléments ci-dessus"
    },
    "correct": "B",
    "explanation": "<p>Une mémoire tampon FIFO est un moyen utile de stocker des données qui arrivent à un périphérique du microcontrôleur de manière asynchrone, mais qui ne peuvent pas être lues immédiatement. FIFO est l’abréviation de first in first out (premier entré, premier sorti) et signifie que les données écrites en premier dans la mémoire tampon en sortent les premières.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q57",
    "partie": "Architecture des ordinateurs",
    "q": "Un processeur qui effectue l’extraction ou le décodage d’une instruction différente pendant l’exécution d’une autre instruction est appelé ______.",
    "choices": {
      "A": "Super-scaling",
      "B": "Pipe-lining",
      "C": "Calcul parallèle"
    },
    "correct": "B",
    "explanation": "<p>Le pipe-lining est le processus d’amélioration des performances par le traitement simultané de différentes instructions.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Architecture Système",
    "q": "Dans un système multiprocesseur, quelle méthode est utilisée pour assurer la synchronisation entre les processeurs ?",
    "choices": {
      "A": "La gestion par interruption",
      "B": "La mémoire partagée",
      "C": "Le système de bus parallèle",
      "D": "La gestion des processus via des threads"
    },
    "correct": "B",
    "explanation": "<p>Dans un système multiprocesseur, la mémoire partagée permet à plusieurs processeurs de lire et d’écrire dans une mémoire commune, synchronisée via des verrous ou signaux.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture Système",
    "q": "Qu’est-ce qu’un « bus système » ?",
    "choices": {
      "A": "Un composant utilisé pour contrôler l’accès à la mémoire principale",
      "B": "Un réseau de communication qui permet d’échanger des informations entre le processeur, la mémoire et les périphériques",
      "C": "Un périphérique permettant de connecter plusieurs ordinateurs entre eux",
      "D": "Un type de processeur spécialisé dans les calculs graphiques"
    },
    "correct": "B",
    "explanation": "<p>Le bus système est un ensemble de lignes de communication (fils ou canaux) qui permet de transférer des données et des signaux de commande entre les différents composants du système, comme le processeur, la mémoire et les périphériques.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Architecture Système",
    "q": "Qu’est-ce qu’un « contrôleur d’interruptions » ?",
    "choices": {
      "A": "Un composant qui gère les demandes de lecture et d’écriture en mémoire",
      "B": "Un circuit qui détecte les erreurs et redémarre le système en cas de panne",
      "C": "Un composant qui gère et priorise les interruptions envoyées au processeur par les périphériques ou autres composants",
      "D": "Un contrôleur qui gère l’exécution des instructions arithmétiques dans le processeur"
    },
    "correct": "C",
    "explanation": "<p>Le contrôleur d’interruptions est responsable de gérer les demandes d’interruption envoyées par des périphériques (comme un clavier ou une carte réseau) et de décider de l’ordre dans lequel elles sont traitées par le processeur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Architecture Système",
    "q": "Qu’est-ce qu’un « processeur à architecture VLIW » ?",
    "choices": {
      "A": "Un processeur qui exécute plusieurs instructions en même temps, en utilisant une seule étape d’exécution",
      "B": "Un processeur avec un grand nombre de cœurs pour maximiser l’exécution parallèle",
      "C": "Un processeur qui utilise une approche de traitement parallèle en traitant plusieurs données sur une même instruction",
      "D": "Un processeur capable d’exécuter plusieurs instructions à la fois grâce à une architecture très complexe"
    },
    "correct": "D",
    "explanation": "<p>VLIW (Very Long Instruction Word) est une architecture où plusieurs instructions sont encodées dans un seul mot d’instruction. Le processeur peut alors exécuter ces instructions simultanément, ce qui permet d’augmenter le parallélisme et de maximiser les performances.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Architecture Système",
    "q": "Qu’est-ce qu’une « architecture à mémoire partagée » ?",
    "choices": {
      "A": "Une architecture dans laquelle chaque processeur dispose de sa propre mémoire",
      "B": "Une architecture dans laquelle les processeurs partagent une mémoire principale",
      "C": "Une architecture où la mémoire est uniquement utilisée pour les données temporaires",
      "D": "Une architecture où chaque périphérique d’entrée/sortie a sa propre mémoire"
    },
    "correct": "B",
    "explanation": "<p>L’architecture à mémoire partagée permet à plusieurs processeurs d’accéder à une mémoire centrale commune. Ce type d’architecture est souvent utilisé dans les systèmes multiprocesseurs, où tous les processeurs peuvent lire et écrire dans la même mémoire.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Architecture Système",
    "q": "Qu’est-ce qu’une « Interrupt Vector Table » ?",
    "choices": {
      "A": "Une table qui stocke les données de la mémoire cache",
      "B": "Une table utilisée pour le stockage des fichiers système",
      "C": "Un tableau associant chaque interruption à l'adresse de son gestionnaire (ISR)",
      "D": "Une liste d’instructions utilisées pour la gestion des processus"
    },
    "correct": "C",
    "explanation": "<p>C'est une table d'adressage qui permet au processeur de diriger le flux vers la routine (ISR) appropriée lors d'une interruption.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Architecture Système",
    "q": "Qu’est-ce que le « traitement parallèle » ?",
    "choices": {
      "A": "Exécuter plusieurs programmes différents sur un même processeur",
      "B": "Exécuter une même instruction plusieurs fois dans un processeur",
      "C": "Exécuter plusieurs instructions simultanément à l’aide de plusieurs cœurs de processeur",
      "D": "Optimiser l’accès à la mémoire cache"
    },
    "correct": "C",
    "explanation": "<p>Le traitement parallèle consiste à exécuter plusieurs instructions ou tâches simultanément en utilisant plusieurs unités de traitement (cœurs de processeur). Cela permet de diviser le travail en sous-tâches, ce qui améliore l’efficacité et la performance du système.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Architecture Système",
    "q": "Quel est l’objectif principal de la « normalisation » dans l’architecture des ordinateurs ?",
    "choices": {
      "A": "Assurer la compatibilité entre différents types de périphériques et de processeurs",
      "B": "Augmenter la capacité de stockage des disques durs",
      "C": "Optimiser la vitesse d’accès à la mémoire cache",
      "D": "Réduire la consommation d’énergie des processeurs"
    },
    "correct": "A",
    "explanation": "<p>La normalisation dans l’architecture des ordinateurs vise à garantir l’interopérabilité entre différents composants matériels et logiciels. Cela permet aux périphériques, processeurs et autres composants de fonctionner ensemble de manière cohérente et sans conflit.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Architecture Système",
    "q": "Quelle est la différence entre un « processeur 32 bits » et un « processeur 64 bits » ?",
    "choices": {
      "A": "Un processeur 32 bits peut gérer plus de mémoire que un processeur 64 bits",
      "B": "Un processeur 64 bits peut traiter plus de données simultanément et accéder à plus de mémoire qu’un processeur 32 bits",
      "C": "Un processeur 64 bits est toujours plus lent qu’un processeur 32 bits",
      "D": "Un processeur 32 bits ne peut exécuter que des applications 32 bits, tandis qu’un processeur 64 bits peut exécuter uniquement des applications 64 bits"
    },
    "correct": "B",
    "explanation": "<p>Les processeurs 64 bits peuvent gérer des quantités de mémoire beaucoup plus grandes (plus de 4 Go) par rapport aux processeurs 32 bits. Ils peuvent également traiter plus de données en parallèle, ce qui les rend plus rapides pour certaines applications, notamment les applications gourmandes en mémoire.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Architecture Système",
    "q": "Quelle est la différence principale entre « BIOS » et « UEFI » ?",
    "choices": {
      "A": "UEFI est plus lent que le BIOS",
      "B": "BIOS est une norme plus ancienne qui utilise un processus d’amorçage en 16 bits, tandis qu’UEFI supporte des processus d’amorçage en 32 bits ou 64 bits et offre plus de fonctionnalités",
      "C": "BIOS est compatible uniquement avec les systèmes Windows, tandis qu’UEFI est compatible avec tous les systèmes d’exploitation",
      "D": "UEFI est utilisé uniquement pour les serveurs, tandis que BIOS est utilisé pour les ordinateurs personnels"
    },
    "correct": "B",
    "explanation": "<p>Le BIOS (Basic Input/Output System) est un système d’amorçage plus ancien qui utilise une architecture 16 bits. L’UEFI (Unified Extensible Firmware Interface) remplace le BIOS et offre des fonctionnalités avancées comme un démarrage plus rapide, une interface graphique, un support pour des partitions de disque plus grandes et des systèmes d’amorçage en 32/64 bits.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q11",
    "partie": "Architecture Système",
    "q": "Quelle est la fonction d’un « bus de contrôle » ?",
    "choices": {
      "A": "Transporter les données entre le processeur et la mémoire",
      "B": "Gérer les signaux de synchronisation et de contrôle entre les différents composants",
      "C": "Assurer la communication avec les périphériques d’entrée/sortie",
      "D": "Effectuer des calculs arithmétiques et logiques"
    },
    "correct": "B",
    "explanation": "<p>Le bus de contrôle transporte des signaux (lecture/écriture, interruption) pour synchroniser les composants du système.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q12",
    "partie": "Architecture Système",
    "q": "Quelle est la principale fonction d’un « bus d’adresse » dans un système informatique ?",
    "choices": {
      "A": "Transférer les données entre les différents composants du système",
      "B": "Acheminer les instructions entre le processeur et la mémoire",
      "C": "Identifier la mémoire à laquelle une instruction ou une donnée doit être accédée",
      "D": "Gérer la communication avec les périphériques externes"
    },
    "correct": "C",
    "explanation": "<p>Le bus d’adresse transporte l’adresse mémoire spécifique que le processeur utilise pour accéder à des données ou des instructions. Il indique où les données doivent être lues ou écrites.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
