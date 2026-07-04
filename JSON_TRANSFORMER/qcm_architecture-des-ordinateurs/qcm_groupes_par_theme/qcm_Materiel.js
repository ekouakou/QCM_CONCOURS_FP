const QCM = [
  {
    "num": "Q1",
    "partie": "Architecture Matérielle",
    "q": "Qu’est-ce qu’un « co-processeur » dans un système informatique ?",
    "choices": {
      "A": "Un processeur secondaire utilisé pour effectuer des tâches spécifiques, comme les calculs graphiques ou mathématiques",
      "B": "Un processeur qui contrôle l’accès à la mémoire",
      "C": "Un processeur dédié à la gestion des entrées/sorties",
      "D": "Un processeur utilisé pour gérer les périphériques de stockage"
    },
    "correct": "A",
    "explanation": "<p>Un co-processeur est un processeur dédié à des tâches spécifiques, comme les calculs mathématiques (ex. : le calcul des nombres flottants), les opérations graphiques (ex. : GPU), ou même le traitement du signal. Il travaille en complément du processeur principal pour alléger sa charge de travail.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Architecture Matérielle",
    "q": "Qu’est-ce qu’un « moteur graphique » dans un processeur ?",
    "choices": {
      "A": "Une unité de calcul utilisée pour effectuer des opérations arithmétiques",
      "B": "Une unité de traitement spécialisée dans le rendu des images et des graphiques",
      "C": "Un composant qui gère les entrées-sorties avec les périphériques externes",
      "D": "Une unité qui gère les connexions réseau"
    },
    "correct": "B",
    "explanation": "<p>Le moteur graphique (ou GPU, pour « Graphics Processing Unit ») est responsable du rendu des graphiques et des images. Il traite les données visuelles, comme les textures et les effets 3D, et est essentiel dans les applications graphiques et les jeux vidéo.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Architecture Matérielle",
    "q": "Qu’est-ce qu’un « registre de données » dans un processeur ?",
    "choices": {
      "A": "Un composant utilisé pour effectuer des calculs logiques",
      "B": "Un mécanisme de gestion des périphériques de stockage externe",
      "C": "Un composant utilisé pour synchroniser les signaux du processeur",
      "D": "Un espace de stockage temporaire pour les données en cours de traitement"
    },
    "correct": "D",
    "explanation": "<p>Le registre de données est une petite zone de mémoire à accès ultra-rapide située à l’intérieur du processeur. Il est utilisé pour stocker temporairement des données ou résultats de calculs qui sont en cours de traitement, facilitant ainsi l’exécution des instructions.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Architecture Matérielle",
    "q": "Qu’est-ce qu’une « instruction » dans le contexte de l’architecture des ordinateurs ?",
    "choices": {
      "A": "Un signal envoyé par le processeur pour indiquer qu’une tâche est terminée",
      "B": "Un ensemble de données utilisées pour effectuer des calculs dans le processeur",
      "C": "Une opération spécifique que le processeur peut effectuer, comme l’addition ou la comparaison",
      "D": "Un message envoyé à l’utilisateur pour lui indiquer que l’ordinateur est en train de traiter des données"
    },
    "correct": "C",
    "explanation": "<p>Une instruction est une commande que le processeur exécute pour réaliser une opération spécifique, comme une opération arithmétique, logique ou de gestion de données. Chaque instruction est codée sous forme de binaire et est traitée lors de l’exécution du programme.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Architecture Matérielle",
    "q": "Qu’est-ce que la mémoire « flash » ?",
    "choices": {
      "A": "Une mémoire volatile utilisée pour le stockage à long terme",
      "B": "Une mémoire utilisée uniquement dans les cartes graphiques",
      "C": "Une mémoire temporaire utilisée pendant l’exécution des programmes",
      "D": "Une mémoire non volatile utilisée dans les clés USB, les SSD, etc."
    },
    "correct": "D",
    "explanation": "<p>La mémoire flash est une mémoire non volatile qui conserve ses données même lorsqu’elle est hors tension. Elle est couramment utilisée dans les disques SSD, les clés USB et d’autres dispositifs de stockage portable.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Architecture Matérielle",
    "q": "Que désigne l’acronyme « GPU » ?",
    "choices": {
      "A": "General Processing Unit",
      "B": "General Purpose Unit",
      "C": "Graphics Processing Unit",
      "D": "Global Processing Unit"
    },
    "correct": "C",
    "explanation": "<p>Un GPU (Graphics Processing Unit) est un processeur spécialisé dans le traitement des graphismes et le calcul parallèle massif.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Architecture Matérielle",
    "q": "Que désigne le terme « système sur puce » (SoC) ?",
    "choices": {
      "A": "Un processeur dédié aux calculs graphiques",
      "B": "Un circuit intégré regroupant plusieurs composants essentiels d'un ordinateur (CPU, GPU, RAM, etc.)",
      "C": "Une architecture informatique intégrant plusieurs ordinateurs dans un châssis",
      "D": "Un type de mémoire pour systèmes embarqués"
    },
    "correct": "B",
    "explanation": "<p>Le SoC (System on Chip) intègre le processeur, la mémoire et les contrôleurs sur une seule puce, courant dans les smartphones.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Architecture Matérielle",
    "q": "Quelle est la fonction du « registre de programme » dans un processeur ?",
    "choices": {
      "A": "Contenir le programme en cours d’exécution",
      "B": "Garder la trace de l’adresse de l’instruction suivante à exécuter",
      "C": "Stocker les résultats des calculs effectués par l’ALU",
      "D": "Gérer les entrées-sorties des périphériques"
    },
    "correct": "B",
    "explanation": "<p>Le registre de programme (ou compteur de programme) contient l’adresse de l’instruction suivante à exécuter. Ce registre est essentiel pour le suivi de l’exécution du programme et l’ordonnancement des instructions dans le processeur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Architecture Matérielle",
    "q": "Quelle est la principale différence entre un SSD et un HDD ?",
    "choices": {
      "A": "Le SSD utilise des disques magnétiques",
      "B": "Le SSD est plus rapide que le HDD car il utilise de la mémoire flash sans pièces mobiles",
      "C": "Le HDD est plus fiable que le SSD",
      "D": "Le SSD offre une capacité de stockage beaucoup plus grande"
    },
    "correct": "B",
    "explanation": "<p>Le SSD utilise des puces de mémoire flash, offrant des temps d'accès quasi instantanés contrairement au HDD à plateaux rotatifs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Matériel",
    "q": "Lequel des éléments suivants contient la mémoire morte, l’unité centrale, la mémoire vive et les cartes d’extension ?",
    "choices": {
      "A": "Le disque dur",
      "B": "Disquette",
      "C": "La carte mère",
      "D": "Imprimante"
    },
    "correct": "C",
    "explanation": "La carte mère est la carte de circuit imprimé principale qui interconnecte tous les composants essentiels d'un ordinateur.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Matériel",
    "q": "Lequel des éléments suivants ne représente pas un périphérique d’E/S",
    "choices": {
      "A": "Haut-parleur",
      "B": "Imprimante",
      "C": "Clavier",
      "D": "Carte PCI",
      "E": "ALU"
    },
    "correct": "E",
    "explanation": "L'ALU (Unité Arithmétique et Logique) est un composant interne du processeur, ce n'est pas un périphérique d'entrée/sortie.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Matériel informatique",
    "q": "L'ensemble des chemins électriques utilisés pour transférer des données est appelé : _____?",
    "choices": {
      "A": "bus",
      "B": "moniteurs",
      "C": "horloge d’ordinateur",
      "D": "les ports"
    },
    "correct": "A",
    "explanation": "Un bus est un système de lignes physiques servant à la transmission de signaux entre les composants d'un système informatique.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Matériel informatique",
    "q": "Le bus PCI (Peripheral Component Interconnect) peut transférer 32 bits de données à chaque impulsion d’horloge.",
    "choices": {
      "A": "Vrai",
      "B": "Faux"
    },
    "correct": "A",
    "explanation": "Le bus PCI standard fonctionne à 33 MHz et transfère 32 bits (4 octets) par cycle, offrant un débit théorique de 133 Mo/s.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Matériel informatique",
    "q": "Pour étendre la connectivité du bus du processeur, nous utilisons ________",
    "choices": {
      "A": "le bus PCI",
      "B": "le bus SCSI",
      "C": "Contrôleurs",
      "D": "Bus multiple"
    },
    "correct": "A",
    "explanation": "<p>Le bus PCI est utilisé pour connecter d’autres périphériques qui nécessitent une connexion directe avec le processeur.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Matériel informatique",
    "q": "Un ensemble de lignes qui connecte plusieurs appareils s’appelle _______?",
    "choices": {
      "A": "Un bus",
      "B": "Fils de connexion",
      "C": "Fils internes"
    },
    "correct": "A",
    "explanation": "Un bus est un sous-système utilisé pour connecter les composants d’un ordinateur et transférer des données entre eux.",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  }
];
