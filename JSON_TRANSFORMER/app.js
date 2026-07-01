// ════
//════════════════════════════════════════════════════════════
// DONNÉES — 23 questions complètes (toutes les parties du JSON)
// ════════════════════════════════════════════════════════════════
const QCM = [
  {
    "num": "Q1",
    "partie": "Partie 1",
    "q": "______ décrit un service cloud accessible uniquement à un nombre limité de personnes.",
    "choices": {
      "A": "Data Center",
      "B": "Cloud public",
      "C": "Cloud privé",
      "D": "Virtualisation"
    },
    "correct": "C",
    "explanation": "<p>Un cloud privé fournit des services de cloud computing aux utilisateurs autorisés via Internet ou un réseau interne. Puisqu’il ne peut être utilisé que par un groupe d’utilisateurs clairement défini, le cloud privé est également appelé cloud d’entreprise ou cloud interne.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un centre de données est une infrastructure physique qui héberge des services, pas un modèle de déploiement de cloud."
      },
      {
        "l": "B",
        "t": "Le cloud public est accessible au grand public via Internet, contredisant la notion de 'nombre limité de personnes'."
      },
      {
        "l": "D",
        "t": "La virtualisation est une technologie sous-jacente qui permet le cloud computing, mais ce n'est pas un modèle de service cloud en soi."
      }
    ],
    "examiner": "Cette question teste votre capacité à distinguer les modèles de déploiement de cloud basés sur leur accessibilité, et à ne pas les confondre avec les infrastructures physiques ou les technologies sous-jacentes.",
    "summary": [
      "Un cloud privé fournit des services cloud exclusivement à une seule organisation ou à un groupe d'utilisateurs restreint et autorisé.",
      "Il offre un niveau élevé de contrôle, de sécurité et de personnalisation par rapport aux solutions de cloud public.",
      "Il est essentiel de différencier les modèles de cloud (privé, public, hybride) des technologies qui les rendent possibles (virtualisation) ou des infrastructures qui les hébergent (centre de données)."
    ]
  },
  {
    "num": "Q2",
    "partie": "Partie 1",
    "q": "Quelle fonctionnalité du cloud computing permet au service de changer de taille ou de volume afin de répondre aux besoins des utilisateurs.",
    "choices": {
      "A": "Sécurité",
      "B": "Scalabilité",
      "C": "Économies de coûts",
      "D": "Virtualisation"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La sécurité protège les données et l'infrastructure, mais ne décrit pas l'ajustement de la taille des services."
      },
      {
        "l": "C",
        "t": "Les économies de coûts sont un avantage du cloud, pas une fonctionnalité qui permet aux services de changer de taille."
      },
      {
        "l": "D",
        "t": "La virtualisation est une technologie clé sous-jacente au cloud, mais pas la fonctionnalité elle-même qui gère le changement de taille des services."
      }
    ],
    "examiner": "Cette question teste la compréhension des caractéristiques fondamentales du cloud computing, en distinguant les fonctionnalités directes (scalabilité) des technologies sous-jacentes (virtualisation) ou des bénéfices (économies de coûts).",
    "summary": [
      "La scalabilité est la capacité d'un système à augmenter ou diminuer ses ressources (CPU, RAM, stockage) de manière dynamique pour s'adapter à la demande.",
      "Elle est essentielle pour assurer la performance des applications face aux variations de charge et optimiser les coûts en ne payant que pour les ressources utilisées.",
      "Il existe deux principaux types : la scalabilité horizontale (ajout ou retrait d'instances) et la scalabilité verticale (augmentation ou diminution des ressources d'une instance existante)."
    ]
  },
  {
    "num": "Q3",
    "partie": "Partie 1",
    "q": "Lorsque vous ajoutez une pile de logiciels, telle qu’un système d’exploitation et des applications, on parle du modèle _____.",
    "choices": {
      "A": "SaaS",
      "B": "PaaS",
      "C": "IaaS"
    },
    "correct": "A",
    "explanation": "<p>Software as a service (SaaS) est un modèle de distribution de logiciels dans lequel un fournisseur tiers héberge des applications et les met à la disposition des clients via Internet. Le SaaS est l’une des trois principales catégories du cloud computing.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "PaaS (Platform as a Service) fournit une plateforme et l'OS, mais le client déploie et gère ses propres applications, la pile complète n'est pas pré-fournie."
      },
      {
        "l": "C",
        "t": "IaaS (Infrastructure as a Service) fournit uniquement l'infrastructure virtuelle, l'utilisateur est responsable de l'installation et de la gestion de l'OS et des applications."
      }
    ],
    "examiner": "Cette question évalue votre capacité à distinguer les modèles de service de cloud computing en fonction du niveau de gestion et des composants inclus dans l'offre du fournisseur, en particulier lorsque la pile logicielle complète est pré-intégrée.",
    "summary": [
      "SaaS (Software as a Service) est le modèle où le fournisseur gère l'intégralité de la pile logicielle (OS, applications) et la met à disposition des utilisateurs via Internet.",
      "PaaS (Platform as a Service) offre une plateforme de développement et de déploiement (incluant OS et middleware), mais l'utilisateur gère ses propres applications.",
      "IaaS (Infrastructure as a Service) fournit les ressources informatiques de base (serveurs virtuels, réseau), laissant à l'utilisateur la charge de l'OS et de toutes les applications."
    ]
  },
  {
    "num": "Q4",
    "partie": "Partie 1",
    "q": "Lequel des modèles suivants est le modèle de service le plus raffiné et le plus restrictif?",
    "choices": {
      "A": "SaaS",
      "B": "PaaS",
      "C": "IaaS"
    },
    "correct": "B",
    "explanation": "<p>Lorsque le service nécessite que le client utilise une pile complète de matériel/logiciel/application, il utilise le modèle de service le plus raffiné et le plus restrictif.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "SaaS est le modèle le plus raffiné et restrictif pour l'utilisateur final qui consomme une application complète, mais la question se réfère plutôt au niveau de contrôle pour le développement et le déploiement d'applications."
      },
      {
        "l": "C",
        "t": "IaaS offre le plus de contrôle et de flexibilité au client sur l'infrastructure sous-jacente (OS, réseau, stockage), le rendant le moins raffiné et le moins restrictif des trois modèles."
      }
    ],
    "examiner": "Cette question teste la compréhension des niveaux d'abstraction et de contrôle dans les modèles de service cloud. Le piège est de confondre la restriction pour l'utilisateur final (SaaS) avec la restriction pour le développeur dans ses choix de plateforme et d'environnement de déploiement (PaaS).",
    "summary": [
      "PaaS (Platform as a Service) est considéré comme le plus raffiné pour le développeur car il fournit un environnement complet (OS, runtime, middleware) prêt à l'emploi, abstrayant l'infrastructure sous-jacente.",
      "Il est également le plus restrictif dans ce contexte car le développeur est limité aux langages, frameworks et services offerts par la plateforme spécifique, offrant moins de liberté que l'IaaS pour configurer l'environnement.",
      "Contrairement au SaaS, qui est une application complète gérée par le fournisseur et consommée par l'utilisateur final, le PaaS est destiné aux développeurs qui créent et déploient leurs propres applications sur une plateforme contrainte."
    ]
  },
  {
    "num": "Q5",
    "partie": "Partie 1",
    "q": "Toutes les applications du cloud computing souffrent du _______ à leur connectivité WAN.",
    "choices": {
      "A": "propagation",
      "B": "latence",
      "C": "bruit"
    },
    "correct": "B",
    "explanation": "<p>Alors que les applications de cloud computing excellent pour les tâches de traitement à grande échelle, si votre application nécessite de grandes quantités de transfert de données, le cloud computing peut ne pas être le meilleur modèle pour vous.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La propagation est une composante de la latence, représentant le temps de parcours du signal. Le problème général et ressenti par les applications est la latence globale."
      },
      {
        "l": "C",
        "t": "Le bruit affecte la qualité du signal et peut causer des erreurs ou des retransmissions, mais ce n'est pas le problème universel ou le plus direct dont 'souffrent' toutes les applications cloud en raison de leur connectivité WAN."
      }
    ],
    "examiner": "Cette question teste la compréhension des défis fondamentaux liés à l'utilisation du cloud computing, en particulier l'impact des caractéristiques du réseau WAN sur la performance des applications. Le piège consiste à choisir une composante spécifique (propagation) ou un problème indirect (bruit) plutôt que le problème global et omniprésent qu'est le délai ou la latence.",
    "summary": [
      "La latence est le délai que les données mettent pour voyager d'un point à un autre sur le réseau. C'est un facteur critique pour les applications cloud, surtout sur un WAN, car elle affecte directement la réactivité et l'expérience utilisateur.",
      "Toutes les applications cloud sont sujettes à une certaine latence due à la distance géographique et au nombre de sauts réseau (hops) sur le WAN, rendant certaines charges de travail (ex: temps réel, gros transferts de données) moins optimales pour le cloud.",
      "Une latence élevée peut entraîner des ralentissements, des temps de réponse prolongés et des performances dégradées pour les applications qui ne sont pas conçues pour la supporter ou qui nécessitent une interaction rapide."
    ]
  },
  {
    "num": "Q6",
    "partie": "Partie 1",
    "q": "__________ décrit un modèle de distribution dans lequel les applications sont hébergées par un fournisseur de services et mises à la disposition des utilisateurs.",
    "choices": {
      "A": "IAAS – Infrastructure-as-a-Service",
      "B": "PaaS – Platform-as-a-Service",
      "C": "SaaS – Software-as-a-Service"
    },
    "correct": "C",
    "explanation": "<p>Software as a service (SaaS) est un modèle de distribution de logiciels dans lequel un fournisseur tiers héberge des applications et les met à la disposition des clients via Internet. Le SaaS est l’une des trois principales catégories du cloud computing.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "IaaS fournit l'infrastructure (serveurs, stockage, réseau), pas les applications directement utilisables par les utilisateurs finaux."
      },
      {
        "l": "B",
        "t": "PaaS offre une plateforme de développement et de déploiement d'applications, mais ne distribue pas les applications aux utilisateurs finaux."
      }
    ],
    "examiner": "Cette question teste la capacité à distinguer les modèles de services cloud (IaaS, PaaS, SaaS) en se concentrant sur le niveau de service fourni spécifiquement pour la distribution et la mise à disposition d'applications aux utilisateurs finaux, un concept souvent confondu avec l'hébergement d'infrastructure ou de plateforme.",
    "summary": [
      "SaaS (Software-as-a-Service) est un modèle où le fournisseur héberge l'application et la met à disposition des utilisateurs via Internet, sans que l'utilisateur ait à gérer l'infrastructure ou la plateforme sous-jacente.",
      "IaaS (Infrastructure-as-a-Service) fournit des ressources d'infrastructure virtualisées (serveurs, stockage, réseau) sur lesquelles les utilisateurs déploient et gèrent leurs propres applications, systèmes d'exploitation et données.",
      "PaaS (Platform-as-a-Service) offre un environnement complet pour le développement, l'exécution et la gestion d'applications, permettant aux développeurs de se concentrer sur leur code sans gérer l'infrastructure sous-jacente."
    ]
  },
  {
    "num": "Q7",
    "partie": "Partie 1",
    "q": "Le cloud computing est un système _______ et il est de nature unidirectionnelle.",
    "choices": {
      "A": "stateless",
      "B": "stateful",
      "C": "fiable"
    },
    "correct": "A",
    "explanation": "<p>Le cloud computing est un système sans état (stateless), tout comme Internet.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 1",
    "q": "À l’origine, le modèle __________ n’avait pas besoin d’un cloud pour utiliser la virtualisation afin de mutualiser les ressources.",
    "choices": {
      "A": "NEFT",
      "B": "NIST",
      "C": "NIT"
    },
    "correct": "B",
    "explanation": "<p>NIST signifie « National Institute of Standards and Technology ».</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "NEFT est un système de transfert électronique de fonds ou un concept de transfert électronique de champ proche, sans rapport avec les modèles de virtualisation ou de mutualisation des ressources informatiques."
      },
      {
        "l": "C",
        "t": "NIT est un acronyme désignant généralement des instituts de technologie ou une table d'informations réseau, sans lien avec le sujet de la virtualisation et la mutualisation des ressources informatiques."
      }
    ],
    "examiner": "Cette question teste la compréhension de l'historique et de la relation entre la virtualisation, la mutualisation des ressources et les modèles de cloud computing. Elle met en lumière le fait que, si le NIST a formalisé le modèle de cloud, les technologies sous-jacentes comme la virtualisation existaient et pouvaient être utilisées pour mutualiser des ressources avant même la définition formelle du 'cloud' par le NIST, et sans nécessairement être opéré dans un environnement 'cloud' au sens strict.",
    "summary": [
      "Le NIST (National Institute of Standards and Technology) est reconnu pour sa définition et ses modèles de cloud computing.",
      "Avant l'émergence et la formalisation du 'cloud computing', des technologies comme la virtualisation étaient déjà utilisées pour la mutualisation des ressources dans les infrastructures informatiques traditionnelles.",
      "Le modèle NIST a structuré et défini le cloud, mais les fondations techniques qu'il décrit (comme la virtualisation) existaient et pouvaient fonctionner indépendamment d'un environnement 'cloud' tel que nous le concevons aujourd'hui."
    ]
  },
  {
    "num": "Q9",
    "partie": "Partie 1",
    "q": "Lequel des éléments suivants est lié au service fourni par le Cloud?",
    "choices": {
      "A": "Sourcing",
      "B": "Fiabilité",
      "C": "AaaS"
    },
    "correct": "A",
    "explanation": "<p>Sourcing ou externalisation signifie que le service est fourni par le client ou par le fournisseur de services.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "La fiabilité est une caractéristique essentielle d'un bon service cloud, mais pas le concept décrivant sa méthode de fourniture."
      },
      {
        "l": "C",
        "t": "AaaS (Anything as a Service) est un modèle de service cloud spécifique, alors que 'Sourcing' est le terme général pour l'externalisation de services."
      }
    ],
    "examiner": "Cette question teste votre compréhension du concept de 'sourcing' (externalisation) comme élément fondamental lié à la manière dont les services cloud sont fournis, en le distinguant des caractéristiques techniques ou des modèles de service spécifiques.",
    "summary": [
      "Le 'sourcing' ou l'externalisation est un principe clé du cloud computing, désignant la décision de faire appel à un prestataire externe pour la fourniture de services ou d'infrastructures IT.",
      "Il est crucial de différencier le sourcing (le mode d'acquisition du service) des attributs de qualité du service (comme la fiabilité) ou des modèles de consommation spécifiques (comme les offres XaaS).",
      "Le cloud computing est par essence une forme d'externalisation, où les ressources et services informatiques sont consommés et gérés par un fournisseur tiers plutôt qu'en interne."
    ]
  },
  {
    "num": "Q10",
    "partie": "Partie 1",
    "q": "_______ est un environnement d’exploitation complet avec une interface utilisateur et des applications.",
    "choices": {
      "A": "IaaS",
      "B": "SaaS",
      "C": "PaaS"
    },
    "correct": "B",
    "explanation": "<p>Dans le modèle SaaS, l’application est fournie au client via une interface client léger.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "L'IaaS fournit de l'infrastructure virtuelle (serveurs, stockage, réseau), pas un environnement complet avec des applications prêtes à l'emploi pour l'utilisateur final."
      },
      {
        "l": "C",
        "t": "Le PaaS offre une plateforme pour développer et déployer des applications (système d'exploitation, middleware, outils), mais ne fournit pas les applications finales aux utilisateurs."
      }
    ],
    "examiner": "Cette question teste la capacité à distinguer les différents modèles de service cloud (IaaS, PaaS, SaaS) en fonction de ce qu'ils fournissent à l'utilisateur et du niveau de gestion incombant au fournisseur.",
    "summary": [
      "SaaS (Software as a Service) fournit des applications complètes, prêtes à l'emploi, accessibles via une interface utilisateur (souvent un navigateur web).",
      "PaaS (Platform as a Service) offre une plateforme de développement et de déploiement d'applications, incluant un système d'exploitation et des outils, sans la gestion de l'infrastructure sous-jacente.",
      "IaaS (Infrastructure as a Service) propose des ressources d'infrastructure virtualisées (machines virtuelles, stockage, réseau), laissant la gestion du système d'exploitation et des applications au client."
    ]
  },
  {
    "num": "Q1",
    "partie": "Partie 2",
    "q": "Lequel des concepts de cloud computing suivants est lié à la mutualisation(pooling) et au partage de ressources?",
    "choices": {
      "A": "Polymorphisme",
      "B": "Abstraction",
      "C": "Virtualisation"
    },
    "correct": "C",
    "explanation": "<p>La virtualisation est la « création d’une version virtuelle (plutôt que réelle) de quelque chose, comme un serveur, un ordinateur desktop, un périphérique de stockage, un système d’exploitation ou des ressources réseau ».</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le polymorphisme est un concept de programmation orientée objet, sans lien direct avec la mutualisation de ressources physiques dans le cloud computing."
      },
      {
        "l": "B",
        "t": "L'abstraction masque la complexité sous-jacente des ressources, mais ne représente pas le mécanisme de mutualisation et de partage lui-même."
      }
    ],
    "examiner": "Cette question teste la compréhension des technologies fondamentales qui permettent au cloud computing d'offrir la mutualisation des ressources. Le piège peut être de confondre la manière dont les ressources sont présentées (abstraction) avec le mécanisme technique qui rend leur partage possible (virtualisation).",
    "summary": [
      "La virtualisation est la technologie clé qui permet de créer des versions virtuelles (logicielles) de ressources physiques (serveurs, stockage, réseau), les rendant divisibles et mutualisables.",
      "Elle facilite le partage d'une même infrastructure physique entre plusieurs utilisateurs ou applications, optimisant l'utilisation des ressources et permettant la multi-tenancy.",
      "Ce concept est fondamental pour l'élasticité, la scalabilité et la flexibilité qui caractérisent les services de cloud computing."
    ]
  },
  {
    "num": "Q2",
    "partie": "Partie 2",
    "q": "La communication entre les services se fait largement en utilisant le protocole ________",
    "choices": {
      "A": "REST",
      "B": "RESTful",
      "C": "SOAP"
    },
    "correct": "C",
    "explanation": "<p>SOAP définit une spécification de protocole de communication standard pour l’échange de messages basé sur XML. SOAP utilise différents protocoles de transport, tels que HTTP et SMTP.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "REST est un style architectural, pas un protocole de communication à part entière. Il s'appuie sur des protocoles existants comme HTTP."
      },
      {
        "l": "B",
        "t": "RESTful est un adjectif décrivant une API ou un service qui respecte les principes de l'architecture REST, ce n'est pas un protocole."
      }
    ],
    "examiner": "Cette question piège les candidats qui confondent un style architectural (REST) ou une caractéristique (RESTful) avec un protocole de communication (SOAP). Elle teste la capacité à distinguer ces concepts fondamentaux dans l'intégration de services.",
    "summary": [
      "SOAP (Simple Object Access Protocol) est un protocole de communication basé sur XML pour l'échange de messages structurés entre services, souvent via HTTP ou SMTP.",
      "REST (Representational State Transfer) est un style architectural pour la conception de systèmes distribués, qui n'est pas un protocole en soi mais s'appuie généralement sur HTTP.",
      "Il est crucial de distinguer entre un protocole de communication (qui définit les règles d'échange) et un style architectural (qui guide la conception globale)."
    ]
  },
  {
    "num": "Q3",
    "partie": "Partie 2",
    "q": "______ fait référence à l’emplacement et à la gestion de l’infrastructure du cloud",
    "choices": {
      "A": "Service",
      "B": "Application",
      "C": "Déploiement"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Un service cloud (IaaS, PaaS, SaaS) est une fonctionnalité offerte, pas l'emplacement ou la gestion de l'infrastructure elle-même."
      },
      {
        "l": "B",
        "t": "Une application est un logiciel qui s'exécute sur l'infrastructure cloud; elle ne définit pas son emplacement ou sa gestion."
      }
    ],
    "examiner": "Cette question évalue la capacité à distinguer les différentes composantes et couches du cloud computing, en ciblant spécifiquement le terme qui englobe la localisation et l'opération de l'infrastructure plutôt que les services ou les usages finaux.",
    "summary": [
      "Le 'déploiement' cloud fait référence au modèle opérationnel et à l'emplacement de l'infrastructure (ex: cloud public, privé, hybride, communautaire).",
      "Les modèles de déploiement définissent qui possède, gère et opère l'infrastructure cloud.",
      "Il est essentiel de ne pas confondre le modèle de déploiement avec les types de services cloud (IaaS, PaaS, SaaS) ou les applications qui y sont hébergées."
    ]
  },
  {
    "num": "Q4",
    "partie": "Partie 2",
    "q": "Lequel des modèles suivants est un modèle de déploiement?",
    "choices": {
      "A": "privé",
      "B": "publique",
      "C": "hybrid"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "Cette question teste la connaissance des trois principaux modèles de déploiement du cloud computing : privé, public et hybride. Le piège est que toutes les options proposées (privé, public, hybride) sont des modèles de déploiement valides, suggérant que la bonne réponse (D) représente probablement 'Toutes ces réponses'.",
    "summary": [
      "Les modèles de déploiement cloud définissent comment l'infrastructure est fournie et gérée, déterminant l'accès, la propriété et l'emplacement.",
      "Les trois modèles fondamentaux sont le cloud privé (exclusif à une seule organisation), le cloud public (disponible pour le grand public via Internet) et le cloud hybride (une combinaison des deux premiers).",
      "Chaque modèle présente des avantages distincts en termes de sécurité, de coût, de contrôle et de flexibilité, adaptés à différents besoins d'entreprise."
    ]
  },
  {
    "num": "Q5",
    "partie": "Partie 2",
    "q": "CaaS signifie _____________",
    "choices": {
      "A": "Compliance as service.",
      "B": "Computer as service.",
      "C": "Community as service.",
      "D": "Communication as service."
    },
    "correct": "D",
    "explanation": "<p>Communications as a service (CaaS) est un ensemble de services fournis par différents fournisseurs facilitant les communications professionnelles. Les organisations peuvent utiliser ces services pour réduire les coûts et accroître l’efficacité des processus opérationnels impliquant des télécommunications audio ou vidéo.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que 'Compliance as a Service' (CaaS ou CCaaS parfois) existe, il n'est pas le sens premier ou le plus courant de l'acronyme CaaS dans le contexte des services génériques, surtout au vu de la bonne réponse."
      },
      {
        "l": "B",
        "t": "Ce n'est pas l'acronyme standard pour CaaS. 'Compute as a Service' est plus courant mais différent et souvent inclus dans d'autres modèles comme l'IaaS."
      },
      {
        "l": "C",
        "t": "Ce n'est pas un acronyme reconnu pour CaaS dans le domaine des services informatiques ou de communication."
      }
    ],
    "examiner": "Cette question teste votre connaissance des acronymes courants dans le domaine des services cloud et des technologies de communication, en particulier les modèles 'as a Service'. Le piège consiste à confondre CaaS avec d'autres significations possibles ou à se fier à une interprétation moins commune de l'acronyme.",
    "summary": [
      "CaaS signifie 'Communication as a Service'.",
      "Il s'agit d'un ensemble de services visant à faciliter les communications professionnelles.",
      "L'objectif est de réduire les coûts et d'accroître l'efficacité des processus impliquant les télécommunications (audio, vidéo, etc.) au sein des organisations."
    ]
  },
  {
    "num": "Q6",
    "partie": "Partie 2",
    "q": "_________ computing désigne les applications et les services qui s’exécutent sur un réseau distribué à l’aide de ressources virtualisées.",
    "choices": {
      "A": "Distributed",
      "B": "Cloud",
      "C": "Soft",
      "D": "Parallel"
    },
    "correct": "B",
    "explanation": "<p>Les applications au niveau du Cloud Computing sont accessibles via des protocoles Internet et des normes de réseau courants.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le calcul distribué est un concept plus large qui englobe des systèmes où plusieurs ordinateurs travaillent ensemble, mais il ne spécifie pas nécessairement l'utilisation de ressources virtualisées ni la livraison de services comme le fait le cloud."
      },
      {
        "l": "C",
        "t": "Le 'Soft Computing' est un domaine de l'intelligence artificielle (logique floue, réseaux de neurones, algorithmes génétiques) et n'a aucun lien avec la description des applications et services sur un réseau distribué avec des ressources virtualisées."
      },
      {
        "l": "D",
        "t": "Le calcul parallèle se concentre sur l'exécution simultanée de tâches sur plusieurs processeurs ou cœurs. Bien que le cloud puisse utiliser des techniques parallèles, ce n'est pas sa définition fondamentale."
      }
    ],
    "examiner": "Cette question teste votre compréhension précise de la définition du Cloud Computing, en insistant sur ses caractéristiques clés : l'exécution sur un réseau distribué et l'utilisation de ressources virtualisées. Le piège réside dans le choix 'Distributed' qui est lié, mais moins spécifique que 'Cloud' pour la description donnée.",
    "summary": [
      "Le Cloud Computing désigne la fourniture de services informatiques (serveurs, stockage, bases de données, réseaux, logiciels, analyses et intelligence artificielle) via Internet ('le cloud').",
      "Il repose sur l'utilisation de ressources virtualisées, permettant une allocation dynamique et flexible des capacités.",
      "Les applications et services sont accessibles via un réseau distribué, offrant une évolutivité et une haute disponibilité."
    ]
  },
  {
    "num": "Q7",
    "partie": "Partie 2",
    "q": "Lequel des éléments suivants peut être identifié en tant que Cloud ?",
    "choices": {
      "A": "Applications Web",
      "B": "Intranet",
      "C": "Hadoop"
    },
    "correct": "B",
    "explanation": "<p>Lorsqu’un intranet devient suffisamment grand pour qu’un diagramme ne souhaite plus faire la différence entre des systèmes physiques individuels, l’intranet est également identifié comme un cloud.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les applications web sont des services qui peuvent s'exécuter sur un cloud, mais ne sont pas le cloud en tant qu'infrastructure."
      },
      {
        "l": "C",
        "t": "Hadoop est un framework de traitement distribué de données massives, pas une infrastructure cloud en soi."
      }
    ],
    "examiner": "Cette question vise à tester une compréhension plus large et potentiellement moins conventionnelle du concept de 'Cloud', notamment la capacité à identifier un cloud privé dans un contexte d'entreprise où l'intranet a évolué vers une abstraction de l'infrastructure physique.",
    "summary": [
      "Le Cloud se caractérise par l'abstraction des ressources physiques et la fourniture de services à la demande.",
      "Un intranet peut être considéré comme un cloud privé lorsqu'il atteint une échelle et un niveau de virtualisation où l'infrastructure physique sous-jacente est masquée et gérée comme un ensemble de ressources unifié.",
      "Les applications et les frameworks (comme Hadoop) sont des composants ou des consommateurs du cloud, mais pas le cloud lui-même."
    ]
  },
  {
    "num": "Q8",
    "partie": "Partie 2",
    "q": "Lequel des concepts suivants est essentiel au niveau du Cloud?",
    "choices": {
      "A": "Fiabilité",
      "B": "Productivité",
      "C": "Abstraction"
    },
    "correct": "C",
    "explanation": "<p>Le cloud computing masque les détails de l’implémentation du système à l’utilisateur. Les applications s’exécutent sur des systèmes physiques non spécifiés, les informations sont stockées dans un emplacement inconnu, la gestion des systèmes est déléguée à d’autres et l’accès aux ressources est accordé à l’utilisateur.</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "La fiabilité est un objectif crucial et une caractéristique attendue du Cloud, mais ce n'est pas un concept essentiel définissant son fonctionnement intrinsèque au même titre que l'abstraction."
      },
      {
        "l": "B",
        "t": "La productivité est un bénéfice majeur de l'utilisation du Cloud, mais pas un concept fondamental ou une caractéristique technique inhérente à la nature même du Cloud computing."
      }
    ],
    "examiner": "Cette question teste la capacité à distinguer les concepts fondamentaux qui définissent la nature du Cloud computing de ses bénéfices ou de ses objectifs de performance.",
    "summary": [
      "L'abstraction est le concept clé qui permet au Cloud de masquer la complexité de l'infrastructure sous-jacente aux utilisateurs.",
      "Elle permet aux utilisateurs de consommer des ressources sans se soucier des détails techniques ou de l'emplacement physique.",
      "Il est important de différencier les piliers conceptuels du Cloud (comme l'abstraction, l'élasticité, le self-service) de ses avantages (productivité, coût) ou de ses objectifs de qualité (fiabilité, sécurité)."
    ]
  },
  {
    "num": "Q9",
    "partie": "Partie 2",
    "q": "Trouvez la fausse déclaration:",
    "choices": {
      "A": "Toutes les applications bénéficient du déploiement dans le cloud",
      "B": "Avec le cloud computing, vous pouvez commencer très petit et devenir très grand très rapidement",
      "C": "Le cloud computing est révolutionnaire, même si la technologie sur laquelle il est construit est évolutive"
    },
    "correct": "A",
    "explanation": "<p>Les problèmes de latence, de contrôle des transactions, et en particulier de sécurité et de conformité réglementaire, sont des contraintes préoccupants.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "L'élasticité et la scalabilité sont des avantages fondamentaux du cloud, permettant de s'adapter rapidement aux besoins et de gérer des croissances importantes."
      },
      {
        "l": "C",
        "t": "Le cloud computing a révolutionné le modèle de livraison et de consommation des ressources IT, même si les technologies sous-jacentes comme la virtualisation ont évolué sur une plus longue période."
      }
    ],
    "examiner": "Cette question teste votre capacité à identifier les fausses généralisations concernant le cloud computing. Bien que le cloud offre de nombreux avantages, il n'est pas une solution universelle et certaines applications ont des exigences spécifiques qui le rendent inadapté ou moins optimal.",
    "summary": [
      "Toutes les applications ne sont pas idéales pour le cloud en raison de contraintes telles que la latence, le contrôle des transactions, la sécurité des données ou la conformité réglementaire.",
      "Il est crucial d'évaluer les besoins spécifiques de chaque application et de l'entreprise avant de décider d'un déploiement cloud.",
      "Les promesses du cloud (scalabilité, flexibilité, réduction des coûts) sont réelles, mais une approche nuancée est nécessaire pour éviter les pièges et optimiser les architectures."
    ]
  },
  {
    "num": "Q10",
    "partie": "Partie 2",
    "q": "________ possède de nombreuses caractéristiques de ce que l’on appelle maintenant le Cloud Computing.",
    "choices": {
      "A": "Internet",
      "B": "Logiciels",
      "C": "Web Service"
    },
    "correct": "A",
    "explanation": "<p>Internet offre une abstraction, fonctionne avec les mêmes protocoles, normes et utilise les mêmes applications et systèmes d’exploitation.</p>",
    "wrongAnalysis": [
      {
        "l": "B",
        "t": "Les logiciels sont des composants clés du Cloud (ex: SaaS), mais ne définissent pas l'ensemble des caractéristiques du Cloud Computing comme l'abstraction, l'élasticité ou le libre-service."
      },
      {
        "l": "C",
        "t": "Les Web Services sont des technologies fondamentales utilisées dans le Cloud pour la communication et l'intégration, mais ils ne représentent pas l'ensemble des caractéristiques d'un modèle de Cloud Computing complet."
      }
    ],
    "examiner": "Cette question évalue la capacité à identifier les racines et les précurseurs conceptuels du Cloud Computing, en soulignant que ses attributs clés (abstraction, infrastructure partagée, standardisation) étaient déjà présents, à leur manière, dans l'Internet.",
    "summary": [
      "Le Cloud Computing n'est pas une innovation entièrement nouvelle, mais une évolution qui s'appuie sur des concepts et des technologies existants, l'Internet étant le précurseur le plus évident.",
      "L'Internet et le Cloud partagent des caractéristiques fondamentales comme l'abstraction des ressources sous-jacentes, l'utilisation de protocoles et de normes communes, ainsi qu'une infrastructure partagée et accessible à distance.",
      "Comprendre les parallèles entre le fonctionnement de l'Internet et les principes du Cloud Computing est essentiel pour saisir la nature et l'architecture des services cloud modernes."
    ]
  },
  {
    "num": "Q1",
    "partie": "Partie 3",
    "q": "Lequel des éléments suivants est une plateforme cloud développée par Amazon?",
    "choices": {
      "A": "Azur",
      "B": "AWS",
      "C": "Cloudera"
    },
    "correct": "B",
    "explanation": "<p>Amazon Web Services(AWS) est l’une des entreprises les plus performantes dans le cloud. Il s’agit d’une infrastructure en tant que service qui vous permet de louer des ordinateurs virtuels sur l’infrastructure propre d’Amazon.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 3",
    "q": "Le cloud computing est une abstraction basée sur la notion de mutualisation des ressources physiques et de leur présentation en tant que ressource ________.",
    "choices": {
      "A": "réal",
      "B": "virtuel",
      "C": "cloud"
    },
    "correct": "B",
    "explanation": "<p>Le Cloud Computing est un nouveau modèle fournissant des ressources, d’applications de transfert et d’accès aux services indépendant de la plate-forme.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 3",
    "q": "Choisissez la déclaration correcte:",
    "choices": {
      "A": "L’utilisation du mot « Cloud » fait référence aux deux concepts essentiels",
      "B": "Le cloud computing abstrait les systèmes par mutualisation et partage des ressources",
      "C": "Le cloud computing n’est rien d’autre qu’Internet"
    },
    "correct": "B",
    "explanation": "<p>Abstraction et virtualisation sont les deux concepts essentiels au niveau du Cloud</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 3",
    "q": "Lequel des types de virtualisation suivants est également une caractéristique du cloud computing?",
    "choices": {
      "A": "Stockage",
      "B": "Application",
      "C": "CPU"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 3",
    "q": "La technologie utilisée pour distribuer les requêtes de service aux ressources est appelée _______",
    "choices": {
      "A": "Division de charge",
      "B": "Planification de charge",
      "C": "L’équilibrage de charge"
    },
    "correct": "C",
    "explanation": "<p>L’équilibrage de charge dans le cloud est défini comme la méthode de division des charges et des propriétés de calcul dans un cloud computing. Il permet aux entreprises de gérer les charges ou les applications en répartissant les ressources sur de nombreux ordinateurs, réseaux ou serveurs. L’équilibrage de charge dans le cloud inclut également le maintien de la circulation du trafic.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q6",
    "partie": "Partie 3",
    "q": "Choisissez la déclaration correcte:",
    "choices": {
      "A": "Un client peut demander l’accès à un service cloud à partir de n’importe quel emplacement.",
      "B": "le cloud a plusieurs instances d’application et dirige les demandes vers une instance en fonction des conditions",
      "C": "Les ordinateurs peuvent être partitionnés en un ensemble de machines virtuelles, une charge de travail étant affectée à chaque machine."
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Bien que l'accès aux services cloud soit large, des restrictions géographiques, légales, de conformité ou de réseau peuvent empêcher l'accès 'de n'importe quel emplacement'."
      },
      {
        "l": "B",
        "t": "La capacité d'avoir plusieurs instances est un avantage clé du cloud, mais toutes les applications ne démarrent pas avec cette configuration ou ne l'exigent pas constamment."
      },
      {
        "l": "C",
        "t": "La virtualisation via des machines virtuelles est fondamentale, mais le cloud utilise aussi d'autres abstractions (conteneurs, serverless). De plus, une VM peut souvent héberger plusieurs charges de travail et non une seule."
      }
    ],
    "examiner": "Cette question teste la compréhension nuancée des principes du cloud computing. Elle met en lumière que des affirmations apparemment justes peuvent être incorrectes en raison de leur caractère trop absolu ou de l'existence d'exceptions et de spécificités techniques.",
    "summary": [
      "Les principes du cloud computing sont puissants (accès universel, scalabilité, virtualisation) mais ne sont pas sans exceptions ni limitations concrètes.",
      "Il est crucial de distinguer les capacités générales du cloud de leur application universelle ou immédiate à chaque service ou déploiement.",
      "La virtualisation par VM est une base, mais le paysage cloud est plus diversifié avec des technologies comme les conteneurs et le serverless qui offrent différentes abstractions."
    ]
  },
  {
    "num": "Q7",
    "partie": "Partie 3",
    "q": "Lequel des logiciels suivants peut être utilisé pour mettre en œuvre l’équilibrage de charge?",
    "choices": {
      "A": "Apache mod_balancer",
      "B": "Apache mod_proxy_balancer",
      "C": "F6’s BigIP"
    },
    "correct": "B",
    "explanation": "<p>Ce module fournit le support de la répartition de charge pour tous les protocoles supportés(HTTP, FTP, WebSocket, etc).</p>",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Le module correct pour l'équilibrage de charge dans Apache est 'mod_proxy_balancer', et non 'mod_balancer' qui n'existe pas en tant que tel."
      },
      {
        "l": "C",
        "t": "F5 BIG-IP est une solution d'équilibrage de charge de premier plan, mais il s'agit d'une plateforme matérielle/logicielle commerciale et non d'un module intégré à Apache comme 'mod_proxy_balancer'."
      }
    ],
    "examiner": "Cette question évalue la connaissance précise des modules Apache dédiés à l'équilibrage de charge, distinguant le module exact des dénominations incorrectes ou des solutions commerciales externes.",
    "summary": [
      "Le module `mod_proxy_balancer` est le composant d'Apache httpd spécifiquement conçu pour la mise en œuvre de l'équilibrage de charge, supportant divers protocoles (HTTP, FTP, WebSocket, etc.).",
      "L'équilibrage de charge est une technique essentielle pour distribuer le trafic réseau ou les requêtes vers plusieurs serveurs, améliorant ainsi la performance, la fiabilité et la scalabilité des applications.",
      "Il est important de distinguer les solutions d'équilibrage de charge intégrées (comme les modules de serveurs web tels qu'Apache ou Nginx) des solutions dédiées ou commerciales (telles que F5 BIG-IP, HAProxy ou des services cloud)."
    ]
  },
  {
    "num": "Q8",
    "partie": "Partie 3",
    "q": "Lesquelles des ressources réseau suivantes peuvent être équilibrées?",
    "choices": {
      "A": "Connexions via des commutateurs(switch) intelligents",
      "B": "Serveur DNS",
      "C": "Ressource de stockage"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Les commutateurs acheminent le trafic et peuvent agréger des liens (LACP) pour répartir la charge sur plusieurs interfaces physiques, mais ils ne sont pas la 'ressource' directement équilibrée comme un service applicatif ou de données."
      }
    ],
    "examiner": "Cette question vise à évaluer la compréhension des types de ressources réseau qui peuvent faire l'objet d'un équilibrage de charge (load balancing), en distinguant les services ou systèmes backend des composants d'infrastructure qui facilitent le trafic.",
    "summary": [
      "L'équilibrage de charge consiste à répartir les requêtes, les connexions ou la charge de travail sur plusieurs instances d'une ressource pour optimiser les performances, améliorer la disponibilité et garantir la résilience.",
      "Les serveurs DNS (option B) sont couramment équilibrés (par exemple via DNS Round Robin, Anycast DNS ou des répartiteurs de charge) pour gérer un grand nombre de requêtes et fournir une haute disponibilité.",
      "Les ressources de stockage (option C), en particulier dans les architectures distribuées ou les systèmes SAN/NAS avec plusieurs contrôleurs, bénéficient également de l'équilibrage de charge pour répartir les opérations d'entrée/sortie (I/O) et l'accès aux données."
    ]
  },
  {
    "num": "Q9",
    "partie": "Partie 3",
    "q": "Lequel des éléments suivants est un équilibreur de charge plus sophistiqué?",
    "choices": {
      "A": "Rack server managers",
      "B": "Workload managers",
      "C": "Workspace managers"
    },
    "correct": "B",
    "explanation": "<p>Workload managers est un processus permettant de déterminer les charges appropriées afin de fournir des performances optimales aux applications et aux utilisateurs.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 3",
    "q": "Lequel des fournisseurs de services suivants offre moins de sécurité?",
    "choices": {
      "A": "SaaS",
      "B": "PaaS",
      "C": "IaaS"
    },
    "correct": "C",
    "explanation": "<p>Infrastructure as a Service (IaaS) sert de couche de base pour les autres modèles de distribution, et le manque de sécurité de cette couche affectera certainement les autres modèles de distribution.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q1",
    "partie": "Partie 4",
    "q": "Choisissez la déclaration correcte:",
    "choices": {
      "A": "Différents types de services de cloud fournissent différents niveaux de services de sécurité.",
      "B": "Pour adapter vos systèmes locaux à un modèle de cloud, vous devez déterminer les mécanismes de sécurité requis et les mapper aux contrôles existants dans le fournisseur de services de cloud choisi.",
      "C": "Les données doivent être transférées et stockées dans un format crypté à des fins de sécurité"
    },
    "correct": "D",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q2",
    "partie": "Partie 4",
    "q": "Parmi les services suivants, lesquels doivent être négociés dans les contrats?",
    "choices": {
      "A": "Journalisation",
      "B": "Audit",
      "C": "Conformité"
    },
    "correct": "D",
    "explanation": "<p>La journalisation, l’audit et la conformité réglementaire sont autant de fonctionnalités qui nécessitent une planification dans les systèmes de cloud computing.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q3",
    "partie": "Partie 4",
    "q": "Choisissez la fausse déclaration:",
    "choices": {
      "A": "Tout, de l’application à l’infrastructure, c’est la responsabilité du fournisseur.",
      "B": "Dans le modèle de déploiement, différents types de cloud expriment la manière dont l’infrastructure est déployée.",
      "C": "AaaS fournit des machines virtuelles, des systèmes d’exploitation, des applications, des services, des frameworks de développement, des transactions et des structures de contrôle"
    },
    "correct": "C",
    "explanation": "<p>PaaS fournit des machines virtuelles, des systèmes d’exploitation, des applications, des services, des infrastructures de développement, des transactions et des structures de contrôle.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q4",
    "partie": "Partie 4",
    "q": "_______ fournit des machines virtuelles, un stockage virtuel, une infrastructure virtuelle et d’autres actifs matériels",
    "choices": {
      "A": "IaaS",
      "B": "SaaS",
      "C": "PaaS"
    },
    "correct": "A",
    "explanation": "<p>Le fournisseur de services IaaS gère l’ensemble de l’infrastructure, tandis que le client est responsable de tous les autres aspects du déploiement.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q5",
    "partie": "Partie 4",
    "q": "Lequel des éléments suivants fournit des frameworks de développement et des structures de contrôle?",
    "choices": {
      "A": "IaaS",
      "B": "SaaS",
      "C": "PaaS"
    },
    "correct": "C",
    "explanation": "<p>PaaS fournit des machines virtuelles, des systèmes d’exploitation, des applications, des services, des infrastructures de développement, des transactions et des structures de contrôle.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q7",
    "partie": "Partie 4",
    "q": "Quel est le prestataire de services IaaS?",
    "choices": {
      "A": "EC2",
      "B": "EC1",
      "C": "EC10",
      "D": "hybride"
    },
    "correct": "A",
    "explanation": "<p>Sur Amazon EC2, un client dispose d’un ordinateur sous la forme d’une machine virtuelle.</p>",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q8",
    "partie": "Partie 4",
    "q": "Lequel des éléments suivants est utilisé pour la gestion des performances Web et les tests de charge?",
    "choices": {
      "A": "VMware Hyperic",
      "B": "Web metrics",
      "C": "Univa UD",
      "D": "Tapinsystems"
    },
    "correct": "B",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q9",
    "partie": "Partie 4",
    "q": "________ sert de fournisseur PaaS dans le système Google App Engine.",
    "choices": {
      "A": "Google",
      "B": "Amazone",
      "C": "Microsoft"
    },
    "correct": "A",
    "explanation": "",
    "wrongAnalysis": [],
    "examiner": "",
    "summary": []
  },
  {
    "num": "Q10",
    "partie": "Partie 4",
    "q": "Choisissez la fausse déclaration:",
    "choices": {
      "A": "Le client n’assume aucune responsabilité quant à la maintenance du matériel, du logiciel ou du développement des applications.",
      "B": "Le fournisseur est responsable de tous les aspects opérationnels du service.",
      "C": "La plate-forme App Engine de Google offre IaaaS"
    },
    "correct": "C",
    "explanation": "",
    "wrongAnalysis": [
      {
        "l": "A",
        "t": "Cette affirmation est généralement vraie dans les modèles PaaS (Platform as a Service) ou SaaS (Software as a Service), où le fournisseur gère l'infrastructure, le logiciel et souvent le développement, allégeant la charge du client."
      },
      {
        "l": "B",
        "t": "Dans la plupart des modèles de services cloud (PaaS, SaaS), le fournisseur assume la responsabilité de la majeure partie des aspects opérationnels du service pour garantir sa disponibilité et sa performance, rendant cette affirmation vraie."
      }
    ],
    "examiner": "Cette question teste la capacité à distinguer les différents modèles de services cloud (IaaS, PaaS, SaaS) et à identifier correctement la catégorie d'un produit cloud spécifique, en l'occurrence Google App Engine.",
    "summary": [
      "**IaaS (Infrastructure as a Service)** fournit des ressources informatiques virtualisées (machines virtuelles, réseaux, stockage) ; l'utilisateur gère le système d'exploitation et les applications.",
      "**PaaS (Platform as a Service)** offre une plateforme de développement et d'exécution d'applications, sans que l'utilisateur n'ait à gérer l'infrastructure sous-jacente (OS, serveurs). Google App Engine est un exemple typique de PaaS.",
      "**SaaS (Software as a Service)** propose des applications logicielles prêtes à l'emploi via internet ; le fournisseur gère tous les aspects techniques."
    ]
  }
];

// ════════════════════════════════════════════════════════════════
// ÉTAT
// ════════════════════════════════════════════════════════════════
let state = {
  current: 0,
  answers: new Array(QCM.length).fill(null),
  revealed: new Array(QCM.length).fill(false)
};

// ════════════════════════════════════════════════════════════════
// SIDEBAR
// ════════════════════════════════════════════════════════════════
function renderSidebar() {
  const parties = {};
  QCM.forEach((q, i) => {
    if (!parties[q.partie]) parties[q.partie] = [];
    parties[q.partie].push({ q, i });
  });
  let html = '<div class="sb-title">Questions (' + QCM.length + ')</div>';
  for (const [p, items] of Object.entries(parties)) {
    html += `<div class="pg"><div class="pl">${p}</div>`;
    items.forEach(({ q, i }) => {
      let cls = '';
      if (i === state.current) cls = ' active';
      else if (state.answers[i]) cls = state.answers[i] === q.correct ? ' correct' : ' wrong';
      const dot = state.answers[i] ? '<div class="qs"></div>' : '';
      html += `<div class="qi${cls}" onclick="goTo(${i})"><div class="qn">${i + 1}</div><span>${q.num}</span>${dot}</div>`;
    });
    html += '</div>';
  }
  document.getElementById('sidebar').innerHTML = html;
}

// ════════════════════════════════════════════════════════════════
// PROGRESS
// ════════════════════════════════════════════════════════════════
function renderProgress() {
  const answered = state.answers.filter(Boolean).length;
  const correct = state.answers.filter((a, i) => a === QCM[i].correct).length;
  const pct = Math.round((answered / QCM.length) * 100);
  document.getElementById('progressFill').style.width = pct + '%';
  document.getElementById('progressText').textContent = answered + ' / ' + QCM.length;
  document.getElementById('scoreDisplay').textContent = correct + ' / ' + answered;
}

// ════════════════════════════════════════════════════════════════
// MAIN RENDER
// ════════════════════════════════════════════════════════════════
function renderMain() {
  const q = QCM[state.current];
  const answered = state.answers[state.current];
  const revealed = state.revealed[state.current];

  let choicesHtml = '';
  Object.entries(q.choices).forEach(([k, v]) => {
    let cls = '', icon = '';
    if (answered) {
      if (k === q.correct) { cls = ' correct disabled'; icon = '<span class="ci">✓</span>'; }
      else if (k === answered) { cls = ' wrong disabled'; icon = '<span class="ci">✗</span>'; }
      else cls = ' ndis disabled';
    }
    choicesHtml += `<div class="choice${cls}" onclick="selectChoice('${k}')">
      <div class="cl">${k}</div>
      <div class="ct">${v}</div>
      ${icon}
    </div>`;
  });

  let expHtml = '';
  if (revealed) {
    const isCorrect = answered === q.correct;
    const wrongItemsHtml = (q.wrongAnalysis || []).map(w => `
      <div class="witem">
        <div class="wh"><div class="wl">${w.l}</div><div class="wlbl">Proposition ${w.l} — Pourquoi incorrecte</div></div>
        <div class="et">${w.t}</div>
      </div>`).join('');
    const summaryHtml = q.summary.map(s => `
      <div class="si-row"><div class="sa">→</div><div class="st">${s}</div></div>`).join('');

    expHtml = `<div class="explanation">
      <div class="ab${isCorrect ? '' : ' wa'}">
        <div class="ai">${isCorrect ? '✅' : '❌'}</div>
        <div>
          <div class="albl">${isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse'}</div>
          <div class="ac">La bonne réponse est la <strong>Proposition ${q.correct}</strong> : ${q.choices[q.correct]}</div>
        </div>
      </div>
      <div class="eb">
        <div class="ebt blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>Explication détaillée</div>
        <div class="et">${q.explanation}</div>
      </div>
      ${wrongItemsHtml ? `<div class="eb"><div class="ebt red"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M15 9l-6 6M9 9l6 6"/></svg>Analyse des propositions incorrectes</div><div class="wi">${wrongItemsHtml}</div></div>` : ''}
      <div class="eb">
        <div class="ebt purple"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>Ce que l'examinateur cherche à vérifier</div>
        <div class="et"><p>${q.examiner}</p></div>
      </div>
      <div class="eb">
        <div class="ebt yellow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>Ce qu'il faut retenir</div>
        <div class="sl">${summaryHtml}</div>
      </div>
    </div>`;
  }

  const revealDisplay = answered && !revealed ? 'block' : 'none';

  document.getElementById('main').innerHTML = `
    <div class="q-header">
      <span class="pt-tag">${q.partie}</span>
      <span class="qn-tag">${q.num} · ${state.current + 1} / ${QCM.length}</span>
    </div>
    <div class="qcard">
      <div class="qtext">${q.q}</div>
      <div class="choices">${choicesHtml}</div>
    </div>
    <div class="reveal-s" id="revealS" style="display:${revealDisplay}">
      <button class="reveal-btn" onclick="revealAnswer()">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
        Voir l'explication complète du cours
      </button>
    </div>
    ${expHtml}
    <div class="nav">
      <button class="nb" onclick="goTo(${state.current - 1})" ${state.current === 0 ? 'disabled' : ''}>← Précédent</button>
      ${state.current < QCM.length - 1
      ? `<button class="nb primary" onclick="goTo(${state.current + 1})">Suivant →</button>`
      : `<button class="nb primary" onclick="showResults()">Voir les résultats 🎉</button>`}
    </div>`;
  document.getElementById('main').scrollTop = 0;
}

// ════════════════════════════════════════════════════════════════
// INTERACTIONS
// ════════════════════════════════════════════════════════════════
function selectChoice(k) {
  if (state.answers[state.current]) return;
  state.answers[state.current] = k;
  renderAll();
}
function revealAnswer() {
  state.revealed[state.current] = true;
  renderAll();
}
function goTo(i) {
  if (i < 0 || i >= QCM.length) return;
  state.current = i;
  renderAll();
}
function renderAll() {
  renderSidebar();
  renderMain();
  renderProgress();
}

// ════════════════════════════════════════════════════════════════
// RÉSULTATS
// ════════════════════════════════════════════════════════════════
function showResults() {
  const correct = state.answers.filter((a, i) => a === QCM[i].correct).length;
  const answered = state.answers.filter(Boolean).length;
  const pct = Math.round((correct / QCM.length) * 100);
  const emoji = pct >= 80 ? '🏆' : pct >= 60 ? '👍' : '📚';
  const msg = pct >= 80 ? 'Excellent ! Vous maîtrisez les fondamentaux de Docker.' : pct >= 60 ? 'Bon résultat ! Quelques révisions suffiront pour consolider.' : 'Continuez à réviser avec les explications — vous progressez !';
  document.getElementById('main').innerHTML = `
    <div class="splash">
      <div class="splash-icon">${emoji}</div>
      <h1>Quiz terminé !</h1>
      <p>${msg}</p>
      <div class="splash-stats">
        <div class="sc"><div class="sn g">${correct}</div><div class="sl2">Bonnes réponses</div></div>
        <div class="sc"><div class="sn r">${answered - correct}</div><div class="sl2">Mauvaises réponses</div></div>
        <div class="sc"><div class="sn">${QCM.length - answered}</div><div class="sl2">Non répondues</div></div>
        <div class="sc"><div class="sn b">${pct}%</div><div class="sl2">Score final</div></div>
      </div>
      <button class="restart-btn" onclick="restart()">🔄 Recommencer le quiz</button>
    </div>`;
}
function restart() {
  state = { current: 0, answers: new Array(QCM.length).fill(null), revealed: new Array(QCM.length).fill(false) };
  renderAll();
}

// ════════════════════════════════════════════════════════════════
// EXPORT MODAL
// ════════════════════════════════════════════════════════════════
function showExportModal() { document.getElementById('exportModal').style.display = 'flex'; }
function closeModal() { document.getElementById('exportModal').style.display = 'none'; }

function buildExportContent() {
  let html = '';
  QCM.forEach((q, i) => {
    const choicesHtml = Object.entries(q.choices).map(([k, v]) =>
      `<div class="ec ${k === q.correct ? 'ecorrect' : ''}"><span class="ek">${k}</span> ${v}${k === q.correct ? ' ✓' : ''}</div>`
    ).join('');
    const wrongHtml = (q.wrongAnalysis || []).map(w =>
      `<div class="ew"><strong>Proposition ${w.l} :</strong> ${w.t}</div>`
    ).join('');
    const summaryHtml = q.summary.map(s => `<li>${s}</li>`).join('');
    html += `<div class="eq">
      <div class="eq-header"><span class="eq-num">Question ${i + 1}</span><span class="eq-tag">${q.partie} · ${q.num}</span></div>
      <div class="eq-q">${q.q}</div>
      <div class="eq-choices">${choicesHtml}</div>
      <div class="eq-section eq-answer"><strong>✅ Bonne réponse :</strong> Proposition ${q.correct} — ${q.choices[q.correct]}</div>
      <div class="eq-section">
        <div class="eq-section-title">📖 Explication détaillée</div>
        <div class="eq-text">${q.explanation}</div>
      </div>
      ${wrongHtml ? `<div class="eq-section"><div class="eq-section-title">❌ Analyse des propositions incorrectes</div>${wrongHtml}</div>` : ''}
      <div class="eq-section">
        <div class="eq-section-title">🎓 Ce que l'examinateur cherche à vérifier</div>
        <div class="eq-text"><p>${q.examiner}</p></div>
      </div>
      <div class="eq-section eq-summary">
        <div class="eq-section-title">⭐ Ce qu'il faut retenir</div>
        <ul>${summaryHtml}</ul>
      </div>
    </div>`;
  });
  return html;
}

function exportHTML() {
  const content = buildExportContent();
  const blob = new Blob([`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
<title>Cloud Computing QCM — Cours Complet</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f6f8fa;color:#1f2328;line-height:1.6;padding:0}
.cover{background:linear-gradient(135deg,#0d1117 0%,#1a2332 50%,#0d1117 100%);color:#fff;padding:60px 40px;text-align:center}
.cover h1{font-size:36px;font-weight:800;letter-spacing:-1px;margin-bottom:12px}
.cover p{font-size:16px;color:#8b949e;margin-bottom:24px}
.cover .meta{display:inline-flex;gap:20px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:10px;padding:14px 28px;font-size:14px}
.cover .meta span{color:#58a6ff;font-weight:600}
.container{max-width:900px;margin:0 auto;padding:40px 24px}
.eq{background:#fff;border:1px solid #d0d7de;border-radius:10px;padding:28px;margin-bottom:28px;page-break-inside:avoid}
.eq-header{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.eq-num{font-size:12px;font-weight:700;background:#0969da;color:#fff;padding:3px 10px;border-radius:20px}
.eq-tag{font-size:12px;color:#57606a;background:#f6f8fa;border:1px solid #d0d7de;padding:3px 10px;border-radius:20px}
.eq-q{font-size:17px;font-weight:600;color:#1f2328;margin-bottom:18px;line-height:1.5}
.eq-choices{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}
.ec{display:flex;gap:10px;padding:10px 14px;border-radius:6px;border:1px solid #d0d7de;background:#f6f8fa;font-size:14px;line-height:1.5}
.ec.ecorrect{background:#dafbe1;border-color:#2da44e;font-weight:600;color:#1a7f37}
.ek{font-weight:700;min-width:18px;flex-shrink:0}
.eq-section{margin-top:16px;padding-top:16px;border-top:1px solid #eaecef}
.eq-answer{background:#dafbe1;border:1px solid #2da44e;border-radius:8px;padding:12px 16px;margin-top:16px;font-size:14px;color:#1a7f37}
.eq-section-title{font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#57606a;margin-bottom:10px}
.eq-text{font-size:14px;line-height:1.8;color:#444c56}
.eq-text p{margin-bottom:10px}.eq-text p:last-child{margin-bottom:0}
.eq-text strong{color:#1f2328;font-weight:600}
.eq-text code,.eq-text em code,.ew code{font-family:'SF Mono','Fira Code',monospace;font-size:12.5px;background:#f6f8fa;border:1px solid #d0d7de;padding:1px 5px;border-radius:4px;color:#0969da}
.ew{background:#fff5f5;border-left:3px solid #d1242f;padding:10px 14px;border-radius:0 6px 6px 0;margin-bottom:8px;font-size:14px;line-height:1.7;color:#444c56}
.ew strong{color:#d1242f}
.eq-summary{background:#fffbee;border:1px solid #d4a72c;border-radius:8px;padding:16px}
.eq-summary ul{list-style:none;display:flex;flex-direction:column;gap:8px}
.eq-summary li{font-size:14px;line-height:1.6;color:#1f2328;padding-left:20px;position:relative}
.eq-summary li::before{content:"→";position:absolute;left:0;color:#d4a72c;font-weight:700}
.eq-summary li code{font-family:'SF Mono','Fira Code',monospace;font-size:12.5px;background:#f6f8fa;border:1px solid #d0d7de;padding:1px 5px;border-radius:4px;color:#0969da}
@media print{body{background:#fff}.cover{-webkit-print-color-adjust:exact;print-color-adjust:exact}.eq{break-inside:avoid}}
</style></head><body>
<div class="cover">
  <h1>🐳 Cloud Computing QCM — Cours Complet</h1>
  <p>Podcast de révision · Explications détaillées pour l'oral et les certifications</p>
  <div class="meta">
    <div><span>${QCM.length}</span> questions</div>
    <div><span>5</span> parties</div>
    <div>Généré le <span>${new Date().toLocaleDateString('fr-FR')}</span></div>
  </div>
</div>
<div class="container">${content}</div>
</body></html>`], { type: 'text/html;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'docker-qcm-cours-complet.html';
  a.click();
  closeModal();
}

function exportPrint() {
  const content = buildExportContent();
  const win = window.open('', '_blank');
  win.document.write(`<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8">
<title>Cloud Computing QCM — Cours Complet</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#fff;color:#1f2328;line-height:1.6;padding:20px}
.cover{background:linear-gradient(135deg,#0d1117,#1a2332);color:#fff;padding:40px;text-align:center;border-radius:10px;margin-bottom:32px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.cover h1{font-size:28px;font-weight:800;margin-bottom:8px}
.cover p{font-size:14px;color:#8b949e;margin-bottom:16px}
.cover .meta{display:inline-flex;gap:16px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:8px;padding:10px 20px;font-size:13px;color:#58a6ff;font-weight:600}
.eq{border:1px solid #d0d7de;border-radius:8px;padding:22px;margin-bottom:22px;break-inside:avoid}
.eq-header{display:flex;align-items:center;gap:8px;margin-bottom:12px}
.eq-num{font-size:11px;font-weight:700;background:#0969da;color:#fff;padding:2px 8px;border-radius:20px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.eq-tag{font-size:11px;color:#57606a;background:#f6f8fa;border:1px solid #d0d7de;padding:2px 8px;border-radius:20px}
.eq-q{font-size:16px;font-weight:600;margin-bottom:14px;line-height:1.5}
.eq-choices{display:flex;flex-direction:column;gap:7px;margin-bottom:14px}
.ec{display:flex;gap:8px;padding:8px 12px;border-radius:5px;border:1px solid #d0d7de;font-size:13px;line-height:1.5}
.ec.ecorrect{background:#dafbe1;border-color:#2da44e;font-weight:600;color:#1a7f37;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.ek{font-weight:700;min-width:16px;flex-shrink:0}
.eq-section{margin-top:14px;padding-top:14px;border-top:1px solid #eaecef}
.eq-answer{background:#dafbe1;border:1px solid #2da44e;border-radius:6px;padding:10px 14px;margin-top:14px;font-size:13px;color:#1a7f37;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.eq-section-title{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:#57606a;margin-bottom:8px}
.eq-text{font-size:13px;line-height:1.75;color:#444c56}
.eq-text p{margin-bottom:8px}.eq-text p:last-child{margin-bottom:0}
.eq-text strong{color:#1f2328}
.eq-text code,.ew code{font-family:monospace;font-size:12px;background:#f6f8fa;border:1px solid #d0d7de;padding:1px 4px;border-radius:3px;color:#0969da}
.ew{background:#fff5f5;border-left:3px solid #d1242f;padding:8px 12px;margin-bottom:7px;font-size:13px;line-height:1.7;color:#444c56;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.ew strong{color:#d1242f}
.eq-summary{background:#fffbee;border:1px solid #d4a72c;border-radius:6px;padding:14px;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.eq-summary ul{list-style:none;display:flex;flex-direction:column;gap:7px}
.eq-summary li{font-size:13px;line-height:1.6;padding-left:18px;position:relative}
.eq-summary li::before{content:"→";position:absolute;left:0;color:#d4a72c;font-weight:700}
.eq-summary li code{font-family:monospace;font-size:12px;background:#f6f8fa;border:1px solid #d0d7de;padding:1px 4px;border-radius:3px;color:#0969da}
</style></head><body>
<div class="cover">
  <h1>🐳 Cloud Computing QCM — Cours Complet</h1>
  <p>Podcast de révision · Explications détaillées</p>
  <div class="meta"><span>${QCM.length} questions</span> &nbsp;·&nbsp; <span>5 parties</span> &nbsp;·&nbsp; <span>${new Date().toLocaleDateString('fr-FR')}</span></div>
</div>
${content}
<script>window.onload=function(){window.print()}<\/script>
</body></html>`);
  win.document.close();
  closeModal();
}

// ════════════════════════════════════════════════════════════════
// INIT
// ════════════════════════════════════════════════════════════════
renderAll();