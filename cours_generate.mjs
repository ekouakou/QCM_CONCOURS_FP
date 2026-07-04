"use strict";
/* =========================================================================
   BASES & CONVERSIONS — script.js
   Toute la logique de l'application : contenu du cours, conversions,
   génération d'exercices et de quiz, progression (LocalStorage),
   recherche, thème clair/sombre, et export PDF.
   ========================================================================= */

/* ============================== UTILITAIRES DE CONVERSION ============================== */

const HEX_DIGITS = "0123456789ABCDEF";

/** Convertit un entier décimal (Number) vers une chaîne dans la base donnée (2, 8 ou 16). */
function decToBase(n, base) {
    if (n === 0) return "0";
    let neg = n < 0; n = Math.abs(Math.trunc(n));
    let out = "";
    while (n > 0) {
        out = HEX_DIGITS[n % base] + out;
        n = Math.floor(n / base);
    }
    return (neg ? "-" : "") + out;
}

/** Convertit une chaîne dans une base donnée vers un entier décimal (Number). */
function baseToDec(str, base) {
    str = String(str).trim().toUpperCase();
    let neg = str.startsWith("-"); if (neg) str = str.slice(1);
    let n = 0;
    for (const ch of str) {
        const v = HEX_DIGITS.indexOf(ch);
        if (v < 0 || v >= base) return NaN;
        n = n * base + v;
    }
    return neg ? -n : n;
}

/** Retourne le détail des divisions successives (méthode des divisions par la base). */
function divisionSteps(n, base) {
    const steps = [];
    let q = n;
    if (q === 0) steps.push({ q: 0, divisor: base, r: 0, next: 0 });
    while (q > 0) {
        const r = q % base;
        const next = Math.floor(q / base);
        steps.push({ q, divisor: base, r, next });
        q = next;
    }
    return steps;
}

/** Retourne le détail de la somme pondérée (méthode des puissances). */
function positionalSteps(str, base) {
    str = String(str).toUpperCase();
    const len = str.length;
    const parts = [];
    for (let i = 0; i < len; i++) {
        const digitChar = str[i];
        const digitVal = HEX_DIGITS.indexOf(digitChar);
        const power = len - 1 - i;
        parts.push({ digitChar, digitVal, power, weight: Math.pow(base, power), product: digitVal * Math.pow(base, power) });
    }
    return parts;
}

function padBits(str, size) { return str.padStart(size, "0"); }

/** Table de correspondance binaire (3 bits) <-> chiffre octal, ou (4 bits) <-> chiffre hexadécimal. */
const OCT_GROUPS = {
    "0": "000", "1": "001", "2": "010", "3": "011", "4": "100", "5": "101", "6": "110", "7": "111"
};
const HEX_GROUPS = {
    "0": "0000", "1": "0001", "2": "0010", "3": "0011", "4": "0100", "5": "0101", "6": "0110", "7": "0111",
    "8": "1000", "9": "1001", "A": "1010", "B": "1011", "C": "1100", "D": "1101", "E": "1110", "F": "1111"
};

function randInt(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

/* ============================================================================
   DONNÉES DU COURS
   Chaque chapitre suit un même modèle : intro, explication détaillée, théorie,
   règles, erreurs fréquentes, astuces, tableaux, exemples résolus, résumé.
   Ce modèle unique alimente à la fois l'affichage HTML et l'export PDF.
   ============================================================================ */

const COURSE = [

    /* --------------------------- 1. SYSTÈMES DE NUMÉRATION --------------------------- */
    {
        id: "sys-dec", group: "systemes", badge: "base10", title: "Le système décimal (base 10)",
        subtitle: "La base que vous utilisez déjà tous les jours, pour mieux comprendre les autres.",
        content: {
            intro: "Le système décimal utilise 10 symboles — de 0 à 9 — pour écrire n'importe quel nombre. C'est le système que vous avez appris à l'école, celui de la vie de tous les jours : prix, âges, distances. Comprendre <em>pourquoi</em> il fonctionne ainsi est la clé pour comprendre toutes les autres bases.",
            detailed: [
                "Un système de numération est une convention pour écrire des nombres à l'aide d'un ensemble limité de symboles appelés <strong>chiffres</strong>. Le nombre de symboles disponibles s'appelle la <strong>base</strong> (ou <em>radix</em>). En base 10, on dispose de 10 chiffres : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9.",
                "Ce qui rend un système de numération puissant, ce n'est pas seulement la liste de ses symboles, mais le <strong>principe positionnel</strong> : la valeur d'un chiffre dépend de sa position dans le nombre. Dans « 345 », le chiffre 3 ne vaut pas 3, il vaut 300, parce qu'il occupe la position des centaines.",
                "Plus précisément, chaque position correspond à une <strong>puissance de la base</strong>. En partant de la droite (position 0), chaque position vaut la base élevée à cette puissance : unités (10⁰=1), dizaines (10¹=10), centaines (10²=100), milliers (10³=1000), etc. Le nombre 345 se décompose ainsi : 3×10² + 4×10¹ + 5×10⁰ = 300 + 40 + 5 = 345."
            ],
            theory: [
                { h: "Pourquoi 10 ?", p: "Historiquement, la base 10 vient probablement du fait que nous avons 10 doigts. Rien de mathématiquement obligatoire ne nous impose cette base : un ordinateur, lui, n'a que deux « doigts » électriques (courant on/off), d'où le binaire." },
                { h: "Le principe positionnel", p: "C'est ce principe — et non les symboles eux-mêmes — que l'on retrouve à l'identique en binaire, en octal et en hexadécimal. Une fois qu'on l'a compris en base 10, on peut le transposer telle quelle à n'importe quelle base." }
            ],
            schema: { kind: "placevalue", number: "2345", base: 10 },
            rules: [
                "Une base <em>b</em> utilise exactement <em>b</em> symboles distincts, de 0 à b−1.",
                "La position la plus à droite est toujours la position 0 (poids = base⁰ = 1).",
                "La valeur totale d'un nombre est la somme de chaque chiffre multiplié par le poids de sa position.",
                "Plus un chiffre est à gauche, plus son poids — et donc son influence sur la valeur totale — est grand."
            ],
            mistakes: [
                "Confondre le <strong>chiffre</strong> (le symbole, ex. « 3 ») et sa <strong>valeur positionnelle</strong> (ex. 300 dans 345).",
                "Oublier que la position la plus à droite correspond à la puissance 0, pas à la puissance 1.",
                "Penser que la base 10 est « la vraie » façon de compter, alors que ce n'est qu'une convention parmi d'autres, la plus familière."
            ],
            tips: [
                "Pensez à un compteur kilométrique : quand une position atteint son symbole maximal (9 en décimal) et qu'on ajoute encore 1, elle repasse à 0 et fait « retenir » 1 à la position suivante. C'est exactement ce qui se passe dans toutes les bases.",
                "Retenez la formule générique : <code>valeur = Σ (chiffre × base^position)</code>. Elle sera votre outil universel pour toutes les conversions à venir."
            ],
            tables: [
                {
                    caption: "Décomposition positionnelle du nombre 2345 en base 10", headers: ["Position", "3", "2", "1", "0"], rows: [
                        ["Puissance", "10³", "10²", "10¹", "10⁰"],
                        ["Poids", "1000", "100", "10", "1"],
                        ["Chiffre", "2", "3", "4", "5"],
                        ["Contribution", "2000", "300", "40", "5"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Décomposer 4 host",
                    steps: ["Écrire le nombre : 4host n'est pas un nombre, reprenons : 407", "407 = 4×10² + 0×10¹ + 7×10⁰", "= 4×100 + 0×10 + 7×1", "= 400 + 0 + 7"], result: "407 = 407 (vérification de la logique positionnelle)"
                },
                {
                    title: "Exemple 2 — Décomposer 9 806",
                    steps: ["9806 = 9×10³ + 8×10² + 0×10¹ + 6×10⁰", "= 9×1000 + 8×100 + 0×10 + 6×1", "= 9000 + 800 + 0 + 6"], result: "9806 = 9806"
                }
            ],
            summary: [
                "La base 10 utilise 10 chiffres (0 à 9).",
                "Chaque position vaut une puissance de 10, en partant de 10⁰ à droite.",
                "La valeur d'un nombre = somme des (chiffre × poids de sa position).",
                "Ce principe positionnel est universel : il s'appliquera identiquement en base 2, 8 et 16."
            ]
        }
    },

    {
        id: "sys-bin", group: "systemes", badge: "base2", title: "Le système binaire (base 2)",
        subtitle: "Le langage natif des ordinateurs : seulement deux symboles, 0 et 1.",
        content: {
            intro: "Le système binaire n'utilise que deux chiffres : 0 et 1. C'est la base de toute l'informatique, car un circuit électronique ne connaît naturellement que deux états stables : courant absent (0) ou courant présent (1).",
            detailed: [
                "Chaque chiffre binaire s'appelle un <strong>bit</strong> (contraction de <em>binary digit</em>). Un groupe de 8 bits s'appelle un <strong>octet</strong> (ou <em>byte</em> en anglais), l'unité de base pour mesurer la mémoire et le stockage.",
                "Le principe positionnel reste exactement le même qu'en décimal, sauf que la base est 2 : chaque position vaut une puissance de 2. En partant de la droite : 2⁰=1, 2¹=2, 2²=4, 2³=8, 2⁴=16, 2⁵=32, 2⁶=64, 2⁷=128…",
                "Comme il n'y a que deux symboles, les nombres binaires s'allongent vite : il faut 8 bits pour représenter les nombres de 0 à 255, alors que 3 chiffres décimaux suffisent pour le même intervalle. C'est le prix à payer pour la simplicité électronique du binaire."
            ],
            theory: [
                { h: "Pourquoi le binaire pour les ordinateurs ?", p: "Un état électrique « un peu allumé » serait ambigu et sensible au bruit électronique. Deux états francs (haut/bas, présence/absence de tension) sont fiables à distinguer, rapides à commuter, et faciles à combiner en portes logiques (ET, OU, NON) qui forment tous les circuits numériques." },
                { h: "Bit, octet, mot", p: "Un bit est la plus petite unité d'information (0 ou 1). Un octet regroupe 8 bits et peut représenter 2⁸ = 256 valeurs différentes (de 0 à 255). Les processeurs manipulent aussi des « mots » de 16, 32 ou 64 bits." }
            ],
            schema: { kind: "placevalue", number: "10110", base: 2 },
            rules: [
                "Seuls deux symboles existent : 0 et 1.",
                "Chaque position vaut une puissance de 2, en partant de 2⁰ à droite.",
                "Un octet = 8 bits = valeurs de 0 à 255 (soit 2⁸ = 256 combinaisons possibles).",
                "Plus il y a de bits, plus l'intervalle de valeurs représentables est grand : n bits → de 0 à 2ⁿ−1."
            ],
            mistakes: [
                "Lire un nombre binaire « comme du décimal » (ex. croire que 10 en binaire vaut dix — il vaut deux).",
                "Oublier des zéros non significatifs à gauche lorsqu'on doit aligner des groupes de 4 ou 8 bits.",
                "Confondre bit (un seul chiffre binaire) et octet (un groupe de 8 bits)."
            ],
            tips: [
                "Mémorisez les 8 premières puissances de 2 par cœur : 1, 2, 4, 8, 16, 32, 64, 128. Elles reviennent sans cesse en informatique (tailles de mémoire, ports réseau, etc.).",
                "Pour lire un octet rapidement, découpez-le en deux groupes de 4 bits (un « quartet ») : c'est exactement ce découpage qui sert de base à la conversion vers l'hexadécimal."
            ],
            tables: [
                { caption: "Puissances de 2, de 2⁰ à 2⁷", headers: ["2⁷", "2⁶", "2⁵", "2⁴", "2³", "2²", "2¹", "2⁰"], rows: [["128", "64", "32", "16", "8", "4", "2", "1"]] },
                {
                    caption: "Décomposition positionnelle de 10110₂", headers: ["Position", "4", "3", "2", "1", "0"], rows: [
                        ["Puissance", "2⁴", "2³", "2²", "2¹", "2⁰"],
                        ["Poids", "16", "8", "4", "2", "1"],
                        ["Bit", "1", "0", "1", "1", "0"],
                        ["Contribution", "16", "0", "4", "2", "0"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Que vaut 1011₂ en décimal ?",
                    steps: ["1011₂ = 1×2³ + 0×2² + 1×2¹ + 1×2⁰", "= 1×8 + 0×4 + 1×2 + 1×1", "= 8 + 0 + 2 + 1"], result: "1011₂ = 11 en décimal"
                },
                {
                    title: "Exemple 2 — Combien de valeurs sur 4 bits ?",
                    steps: ["Avec n bits, on peut représenter 2ⁿ valeurs distinctes", "Ici n = 4", "2⁴ = 16"], result: "4 bits permettent de représenter 16 valeurs : de 0000₂ (0) à 1111₂ (15)"
                }
            ],
            summary: [
                "Le binaire n'utilise que 0 et 1 (des « bits »).",
                "8 bits forment un octet, qui représente 256 valeurs possibles (0 à 255).",
                "Le principe positionnel est identique au décimal, avec des puissances de 2.",
                "C'est le langage natif de l'électronique numérique — toutes les autres bases servent surtout à le rendre plus lisible pour les humains."
            ]
        }
    },

    {
        id: "sys-oct", group: "systemes", badge: "base8", title: "Le système octal (base 8)",
        subtitle: "Huit symboles, très pratique pour regrouper les bits par trois.",
        content: {
            intro: "Le système octal utilise 8 symboles : 0, 1, 2, 3, 4, 5, 6, 7. Il est aujourd'hui moins utilisé que l'hexadécimal, mais on le rencontre encore dans certains contextes (permissions de fichiers Unix/Linux, anciens systèmes informatiques) et il reste un excellent exercice pour comprendre le principe des bases.",
            detailed: [
                "Comme pour le décimal et le binaire, chaque position d'un nombre octal correspond à une puissance de 8 : 8⁰=1, 8¹=8, 8²=64, 8³=512…",
                "L'intérêt principal de l'octal vient de sa relation directe avec le binaire : puisque 8 = 2³, <strong>chaque chiffre octal correspond exactement à un groupe de 3 bits</strong>. Cette propriété rend les conversions binaire ↔ octal particulièrement rapides, sans passer par le décimal.",
                "L'octal a été très utilisé à l'époque des ordinateurs à mots de 12, 24 ou 36 bits (multiples de 3), avant que l'architecture à 8, 16, 32 et 64 bits (multiples de 4) ne généralise l'usage de l'hexadécimal à sa place."
            ],
            theory: [
                { h: "8 = 2³, la clé de tout", p: "Parce que 3 bits suffisent exactement pour représenter les 8 chiffres octaux (000 à 111, soit 0 à 7), on peut convertir du binaire vers l'octal (et inversement) par simple groupement de bits, sans calcul de division ni de puissance." },
                { h: "Où rencontre-t-on l'octal aujourd'hui ?", p: "La commande Unix/Linux <code>chmod 755</code> est un exemple vivant : chaque chiffre octal (7, 5, 5) encode 3 permissions binaires (lecture/écriture/exécution) pour le propriétaire, le groupe et les autres utilisateurs." }
            ],
            schema: { kind: "placevalue", number: "572", base: 8 },
            rules: [
                "Les chiffres valides en octal vont de 0 à 7 — jamais 8 ou 9.",
                "Chaque position vaut une puissance de 8, en partant de 8⁰ à droite.",
                "1 chiffre octal = exactement 3 bits (car 8 = 2³).",
                "On note parfois un nombre octal avec le préfixe 0 ou 0o (ex. 0o572)."
            ],
            mistakes: [
                "Utiliser les chiffres 8 ou 9 dans un nombre octal — ils n'existent pas dans cette base.",
                "Oublier de compléter un groupe de bits à 3 chiffres avec des zéros non significatifs lors d'une conversion depuis le binaire.",
                "Confondre l'octal (8 = 2³, groupes de 3 bits) avec l'hexadécimal (16 = 2⁴, groupes de 4 bits)."
            ],
            tips: [
                "Retenez « octal = triplets de bits » : c'est la seule chose à mémoriser pour convertir instantanément entre binaire et octal.",
                "Les 8 premiers chiffres octaux (0 à 7) correspondent directement aux 8 combinaisons de 3 bits, de 000 à 111 — apprenez ce tableau par cœur, il sert de « dictionnaire » de conversion."
            ],
            tables: [
                { caption: "Correspondance chiffre octal ↔ 3 bits", headers: ["Octal", "0", "1", "2", "3", "4", "5", "6", "7"], rows: [["Binaire (3 bits)", "000", "001", "010", "011", "100", "101", "110", "111"]] },
                {
                    caption: "Décomposition positionnelle de 572₈", headers: ["Position", "2", "1", "0"], rows: [
                        ["Puissance", "8²", "8¹", "8⁰"], ["Poids", "64", "8", "1"], ["Chiffre", "5", "7", "2"], ["Contribution", "320", "56", "2"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Que vaut 572₈ en décimal ?",
                    steps: ["572₈ = 5×8² + 7×8¹ + 2×8⁰", "= 5×64 + 7×8 + 2×1", "= 320 + 56 + 2"], result: "572₈ = 378 en décimal"
                },
                {
                    title: "Exemple 2 — Que vaut 17₈ en décimal ?",
                    steps: ["17₈ = 1×8¹ + 7×8⁰", "= 1×8 + 7×1", "= 8 + 7"], result: "17₈ = 15 en décimal"
                }
            ],
            summary: [
                "L'octal utilise 8 symboles : 0 à 7.",
                "Chaque position vaut une puissance de 8.",
                "1 chiffre octal = 3 bits exactement, ce qui simplifie énormément les conversions avec le binaire.",
                "On le rencontre encore dans les permissions Unix/Linux et certains systèmes historiques."
            ]
        }
    },

    {
        id: "sys-hex", group: "systemes", badge: "base16", title: "Le système hexadécimal (base 16)",
        subtitle: "Seize symboles — 0 à 9 puis A à F — le langage préféré des programmeurs.",
        content: {
            intro: "Le système hexadécimal utilise 16 symboles : les chiffres 0 à 9, puis les lettres A, B, C, D, E, F pour représenter les valeurs 10 à 15. C'est la base la plus utilisée en programmation pour représenter des octets de façon compacte : couleurs web (#FF5733), adresses mémoire, empreintes de fichiers, codes d'erreur…",
            detailed: [
                "Comme pour les autres bases, chaque position correspond à une puissance de 16 : 16⁰=1, 16¹=16, 16²=256, 16³=4096…",
                "L'atout majeur de l'hexadécimal vient de sa relation avec le binaire : 16 = 2⁴, donc <strong>chaque chiffre hexadécimal correspond exactement à un groupe de 4 bits</strong> (un « quartet », parfois appelé <em>nibble</em>). Un octet complet (8 bits) s'écrit ainsi avec exactement 2 chiffres hexadécimaux — d'où sa popularité pour décrire la mémoire d'un ordinateur de façon compacte et lisible.",
                "Les lettres A à F ne sont pas arbitraires : elles prolongent simplement la suite des chiffres après 9, pour disposer de 16 symboles distincts. A vaut 10, B vaut 11, C vaut 12, D vaut 13, E vaut 14, F vaut 15."
            ],
            theory: [
                { h: "16 = 2⁴, la clé de tout", p: "Un quartet de 4 bits peut représenter 2⁴ = 16 valeurs (0000 à 1111), exactement le nombre de symboles disponibles en hexadécimal. Résultat : convertir binaire ↔ hexadécimal se fait par simple groupement de 4 bits, sans aucun calcul de puissance." },
                { h: "Pourquoi les programmeurs adorent l'hexadécimal", p: "Écrire un octet en binaire (ex. 11111111) est long et source d'erreurs de lecture. En hexadécimal, ce même octet s'écrit FF — deux caractères, lisibles, et faciles à regrouper deux par deux pour représenter chaque octet d'une donnée plus grande." }
            ],
            schema: { kind: "placevalue", number: "2AF", base: 16 },
            rules: [
                "Les symboles valides sont 0-9 puis A-F (A=10, B=11, C=12, D=13, E=14, F=15).",
                "Chaque position vaut une puissance de 16, en partant de 16⁰ à droite.",
                "1 chiffre hexadécimal = exactement 4 bits (car 16 = 2⁴).",
                "On préfixe souvent un nombre hexadécimal par 0x (ex. 0x2AF) pour éviter toute confusion avec un nombre décimal."
            ],
            mistakes: [
                "Oublier que les lettres A à F représentent des valeurs numériques (10 à 15), pas de simples lettres.",
                "Mélanger majuscules et minuscules sans cohérence (les deux sont valides, mais mieux vaut rester cohérent : 2AF ou 2af, pas 2Af de façon incohérente dans un même document).",
                "Oublier le préfixe 0x dans un contexte où l'ambiguïté avec un nombre décimal est possible (10 en hexadécimal ≠ 10 en décimal)."
            ],
            tips: [
                "Apprenez par cœur la correspondance des 16 quartets (0000 à 1111 ↔ 0 à F) : c'est le tableau le plus utile de tout ce cours, il sert à quasiment toutes les conversions rapides.",
                "Pour convertir un octet complet, découpez-le toujours en deux groupes de 4 bits — jamais 3 ou 5 — et convertissez chaque groupe séparément."
            ],
            tables: [
                {
                    caption: "Correspondance chiffre hexadécimal ↔ 4 bits (quartet)", headers: ["Hex", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], rows: [
                        ["Décimal", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
                        ["Binaire (4 bits)", "0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"]
                    ]
                },
                {
                    caption: "Décomposition positionnelle de 2AF₁₆", headers: ["Position", "2", "1", "0"], rows: [
                        ["Puissance", "16²", "16¹", "16⁰"], ["Poids", "256", "16", "1"], ["Chiffre", "2", "A (10)", "F (15)"], ["Contribution", "512", "160", "15"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Que vaut 2AF₁₆ en décimal ?",
                    steps: ["2AF₁₆ = 2×16² + A×16¹ + F×16⁰", "A=10, F=15 → 2×256 + 10×16 + 15×1", "= 512 + 160 + 15"], result: "2AF₁₆ = 687 en décimal"
                },
                {
                    title: "Exemple 2 — Que vaut FF₁₆ en décimal ?",
                    steps: ["FF₁₆ = F×16¹ + F×16⁰", "F=15 → 15×16 + 15×1", "= 240 + 15"], result: "FF₁₆ = 255 en décimal (c'est la valeur maximale d'un octet !)"
                }
            ],
            summary: [
                "L'hexadécimal utilise 16 symboles : 0-9 puis A-F.",
                "Chaque position vaut une puissance de 16.",
                "1 chiffre hexadécimal = 4 bits exactement — 2 chiffres hex = 1 octet complet.",
                "C'est la base la plus utilisée en programmation pour représenter la mémoire de façon compacte et lisible."
            ]
        }
    },

    /* --------------------------- 2. CONVERSIONS AVEC LE DÉCIMAL --------------------------- */
    {
        id: "conv-d2b", group: "conversions", badge: "base2", conv: "d2b", title: "Décimal → Binaire",
        subtitle: "La méthode des divisions successives par 2.",
        content: {
            intro: "Pour convertir un nombre décimal en binaire, on divise ce nombre plusieurs fois de suite par 2, en notant à chaque étape le reste. Ces restes, lus de bas en haut, forment le nombre binaire recherché.",
            detailed: [
                "Cette méthode s'appelle la <strong>méthode des divisions successives</strong> (ou méthode du reste). Le principe : diviser le nombre par la base cible (ici 2), noter le reste (0 ou 1), remplacer le nombre par le quotient obtenu, et répéter jusqu'à obtenir un quotient nul.",
                "Pourquoi cela fonctionne-t-il ? Parce qu'un nombre en base 2 s'écrit comme une somme de puissances de 2. Diviser par 2 et regarder le reste revient exactement à extraire, un par un, chaque bit du nombre — en commençant par le bit de poids le plus faible (le plus à droite)."
            ],
            rules: [
                "On divise toujours par la base cible (ici 2), jamais par la base de départ.",
                "On lit les restes obtenus <strong>de bas en haut</strong> (du dernier calculé au premier) pour former le résultat.",
                "On arrête dès que le quotient devient 0.",
                "Cas particulier : 0 en décimal s'écrit simplement 0 en binaire."
            ],
            mistakes: [
                "Lire les restes de haut en bas au lieu de bas en haut — c'est l'erreur la plus fréquente, elle inverse complètement le résultat.",
                "Arrêter la division une étape trop tôt, en oubliant le tout dernier reste (souvent 1, quand le dernier quotient valait 1).",
                "Confondre le quotient et le reste à chaque étape."
            ],
            tips: [
                "Faites toujours un tableau à deux colonnes (quotient / reste) : cela évite les erreurs de lecture.",
                "Vérifiez votre résultat en reconvertissant le binaire obtenu vers le décimal (chapitre suivant) — si vous retrouvez le nombre de départ, la conversion est correcte."
            ],
            tables: [
                {
                    caption: "Méthode générale des divisions successives", headers: ["Étape", "Opération", "Quotient", "Reste (bit)"], rows: [
                        ["1", "N ÷ 2", "q1", "r1 (bit de poids faible)"],
                        ["2", "q1 ÷ 2", "q2", "r2"],
                        ["…", "…", "…", "…"],
                        ["n", "qₙ₋₁ ÷ 2", "0", "rₙ (bit de poids fort)"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 13 en binaire", steps: [
                        "13 ÷ 2 = 6, reste 1",
                        "6 ÷ 2 = 3, reste 0",
                        "3 ÷ 2 = 1, reste 1",
                        "1 ÷ 2 = 0, reste 1",
                        "On lit les restes de bas en haut : 1 1 0 1"
                    ], result: "13 en décimal = 1101 en binaire"
                },
                {
                    title: "Exemple 2 — Convertir 37 en binaire", steps: [
                        "37 ÷ 2 = 18, reste 1",
                        "18 ÷ 2 = 9, reste 0",
                        "9 ÷ 2 = 4, reste 1",
                        "4 ÷ 2 = 2, reste 0",
                        "2 ÷ 2 = 1, reste 0",
                        "1 ÷ 2 = 0, reste 1",
                        "Lecture de bas en haut : 1 0 0 1 0 1"
                    ], result: "37 en décimal = 100101 en binaire"
                }
            ],
            summary: [
                "On divise successivement par 2 et on note chaque reste.",
                "On lit les restes de bas en haut pour obtenir le nombre binaire.",
                "On s'arrête quand le quotient atteint 0.",
                "Cette même méthode « division successive » servira aussi pour convertir vers l'octal et l'hexadécimal — seule la base de division change."
            ]
        }
    },

    {
        id: "conv-b2d", group: "conversions", badge: "base10", conv: "b2d", title: "Binaire → Décimal",
        subtitle: "La méthode positionnelle : multiplier chaque bit par son poids.",
        content: {
            intro: "Pour convertir un nombre binaire en décimal, on multiplie chaque bit par la puissance de 2 correspondant à sa position, puis on additionne le tout. C'est l'application directe du principe positionnel vu au premier chapitre.",
            detailed: [
                "Cette méthode s'appelle la <strong>méthode positionnelle</strong> (ou méthode des puissances). On numérote les positions à partir de 0 en partant de la droite, on associe à chaque position la puissance de 2 correspondante, on multiplie chaque bit par le poids de sa position, puis on additionne tous les résultats.",
                "C'est la méthode inverse de la conversion Décimal → Binaire vue précédemment : là où l'on divisait successivement, on multiplie et on additionne."
            ],
            rules: [
                "La position la plus à droite est toujours la position 0, de poids 2⁰ = 1.",
                "On multiplie chaque bit (0 ou 1) par le poids de sa position.",
                "La somme de tous les produits donne le résultat décimal.",
                "Un bit à 0 ne contribue jamais à la somme (0 × poids = 0), on peut l'ignorer pour aller plus vite."
            ],
            mistakes: [
                "Commencer la numérotation des positions à 1 au lieu de 0 — cela décale toutes les puissances de 2.",
                "Numéroter les positions de gauche à droite au lieu de droite à gauche.",
                "Oublier d'additionner tous les termes à la fin (rester au stade des produits séparés)."
            ],
            tips: [
                "Écrivez la liste des puissances de 2 juste au-dessus de chaque bit avant de commencer les calculs : cela évite toute confusion.",
                "Seuls les bits à 1 comptent : additionnez directement les poids des positions où il y a un 1, c'est plus rapide que de multiplier systématiquement par 0."
            ],
            tables: [
                {
                    caption: "Méthode générale", headers: ["Bit (de gauche à droite)", "Position (depuis la droite)", "Poids (2^position)", "Contribution"], rows: [
                        ["b₃", "3", "8", "b₃ × 8"], ["b₂", "2", "4", "b₂ × 4"], ["b₁", "1", "2", "b₁ × 2"], ["b₀", "0", "1", "b₀ × 1"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 1101₂ en décimal", steps: [
                        "Numéroter les positions depuis la droite : 1(pos3) 1(pos2) 0(pos1) 1(pos0)",
                        "1×2³ + 1×2² + 0×2¹ + 1×2⁰",
                        "= 1×8 + 1×4 + 0×2 + 1×1",
                        "= 8 + 4 + 0 + 1"
                    ], result: "1101₂ = 13 en décimal"
                },
                {
                    title: "Exemple 2 — Convertir 100101₂ en décimal", steps: [
                        "Positions (de droite à gauche) : 1,0,1,0,0,1 → positions 0 à 5",
                        "1×2⁵ + 0×2⁴ + 0×2³ + 1×2² + 0×2¹ + 1×2⁰",
                        "= 32 + 0 + 0 + 4 + 0 + 1"
                    ], result: "100101₂ = 37 en décimal"
                }
            ],
            summary: [
                "On associe à chaque bit le poids 2^position, position 0 étant la plus à droite.",
                "On additionne les contributions de tous les bits à 1.",
                "C'est la méthode inverse des divisions successives (Décimal → Binaire).",
                "Cette même logique positionnelle s'appliquera à l'octal (puissances de 8) et à l'hexadécimal (puissances de 16)."
            ]
        }
    },

    {
        id: "conv-d2o", group: "conversions", badge: "base8", conv: "d2o", title: "Décimal → Octal",
        subtitle: "Divisions successives… mais par 8 cette fois.",
        content: {
            intro: "La conversion décimal vers octal utilise exactement la même méthode que décimal vers binaire : des divisions successives, mais cette fois par 8 au lieu de 2.",
            detailed: [
                "On divise le nombre décimal par 8, on note le reste (qui sera toujours compris entre 0 et 7, puisque c'est un reste d'une division par 8), on continue avec le quotient, et on répète jusqu'à obtenir un quotient nul.",
                "Comme pour le binaire, les restes lus de bas en haut forment le nombre octal recherché."
            ],
            rules: [
                "On divise systématiquement par 8.",
                "Chaque reste obtenu est nécessairement un chiffre entre 0 et 7.",
                "On lit les restes de bas en haut.",
                "On s'arrête quand le quotient vaut 0."
            ],
            mistakes: [
                "Diviser par 2 par réflexe (habitude du binaire) au lieu de diviser par 8.",
                "Lire les restes dans le mauvais ordre (de haut en bas au lieu de bas en haut).",
                "Oublier le dernier reste quand le calcul se termine par un quotient de 1."
            ],
            tips: [
                "Si vous connaissez déjà la table de multiplication de 8 (8, 16, 24, 32, 40…), les divisions successives seront beaucoup plus rapides.",
                "Pour les petits nombres (inférieurs à 64), il est souvent plus rapide de convertir d'abord en binaire puis de regrouper les bits par 3 (voir le chapitre Binaire → Octal)."
            ],
            tables: [
                {
                    caption: "Méthode des divisions successives par 8", headers: ["Étape", "Opération", "Quotient", "Reste (chiffre octal)"], rows: [
                        ["1", "N ÷ 8", "q1", "r1"], ["2", "q1 ÷ 8", "q2", "r2"], ["…", "…", "…", "…"], ["n", "qₙ₋₁ ÷ 8", "0", "rₙ"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 378 en octal", steps: [
                        "378 ÷ 8 = 47, reste 2",
                        "47 ÷ 8 = 5, reste 7",
                        "5 ÷ 8 = 0, reste 5",
                        "Lecture de bas en haut : 5 7 2"
                    ], result: "378 en décimal = 572 en octal"
                },
                {
                    title: "Exemple 2 — Convertir 100 en octal", steps: [
                        "100 ÷ 8 = 12, reste 4",
                        "12 ÷ 8 = 1, reste 4",
                        "1 ÷ 8 = 0, reste 1",
                        "Lecture de bas en haut : 1 4 4"
                    ], result: "100 en décimal = 144 en octal"
                }
            ],
            summary: [
                "Même méthode que décimal → binaire, avec des divisions par 8.",
                "Chaque reste est un chiffre entre 0 et 7.",
                "On lit les restes de bas en haut.",
                "Alternative possible : passer par le binaire puis regrouper les bits par 3 (voir chapitre dédié)."
            ]
        }
    },

    {
        id: "conv-o2d", group: "conversions", badge: "base10", conv: "o2d", title: "Octal → Décimal",
        subtitle: "La méthode positionnelle avec des puissances de 8.",
        content: {
            intro: "Pour convertir un nombre octal en décimal, on applique la méthode positionnelle vue précédemment, mais avec des puissances de 8 au lieu de puissances de 2.",
            detailed: [
                "Chaque chiffre du nombre octal est multiplié par 8 élevé à la puissance correspondant à sa position (0 pour le chiffre le plus à droite, puis 1, 2, 3…), et on additionne tous les résultats.",
                "Comme les chiffres octaux vont de 0 à 7, chaque produit reste dans des proportions raisonnables, mais grandit vite car les puissances de 8 (1, 8, 64, 512…) augmentent rapidement."
            ],
            rules: [
                "Position 0 = chiffre le plus à droite, de poids 8⁰ = 1.",
                "On multiplie chaque chiffre par le poids de sa position (une puissance de 8).",
                "On additionne toutes les contributions pour obtenir le résultat décimal.",
                "Aucun chiffre du nombre octal ne doit dépasser 7 — sinon ce n'est pas un nombre octal valide."
            ],
            mistakes: [
                "Utiliser des puissances de 2 ou de 10 par erreur au lieu de puissances de 8.",
                "Mal numéroter les positions (oublier de commencer à 0 depuis la droite).",
                "Traiter un chiffre 8 ou 9 comme valide alors qu'il ne peut pas exister en octal — c'est le signe d'une erreur en amont."
            ],
            tips: [
                "Mémorisez les débuts des puissances de 8 : 1, 8, 64, 512, 4096 — elles reviennent souvent.",
                "Pour vérifier votre calcul, reconvertissez le résultat décimal en octal (chapitre précédent) : vous devez retrouver le nombre de départ."
            ],
            tables: [
                { caption: "Puissances de 8", headers: ["8⁰", "8¹", "8²", "8³"], rows: [["1", "8", "64", "512"]] }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 572₈ en décimal", steps: [
                        "572₈ = 5×8² + 7×8¹ + 2×8⁰", "= 5×64 + 7×8 + 2×1", "= 320 + 56 + 2"
                    ], result: "572₈ = 378 en décimal"
                },
                {
                    title: "Exemple 2 — Convertir 144₈ en décimal", steps: [
                        "144₈ = 1×8² + 4×8¹ + 4×8⁰", "= 1×64 + 4×8 + 4×1", "= 64 + 32 + 4"
                    ], result: "144₈ = 100 en décimal"
                }
            ],
            summary: [
                "On multiplie chaque chiffre octal par le poids de sa position (puissance de 8).",
                "On additionne toutes les contributions.",
                "Les chiffres octaux valides vont uniquement de 0 à 7.",
                "C'est la méthode inverse de Décimal → Octal."
            ]
        }
    },

    {
        id: "conv-d2h", group: "conversions", badge: "base16", conv: "d2h", title: "Décimal → Hexadécimal",
        subtitle: "Divisions successives par 16, avec des restes qui peuvent être des lettres.",
        content: {
            intro: "La conversion décimal vers hexadécimal suit encore la méthode des divisions successives, cette fois par 16. Particularité : un reste supérieur à 9 doit être transformé en lettre (A à F).",
            detailed: [
                "On divise le nombre par 16, on note le reste, on continue avec le quotient, jusqu'à quotient nul — exactement comme pour le binaire et l'octal.",
                "La différence essentielle : un reste de division par 16 peut valoir de 0 à 15. Les restes de 10 à 15 doivent être écrits sous forme de lettre : 10→A, 11→B, 12→C, 13→D, 14→E, 15→F."
            ],
            rules: [
                "On divise systématiquement par 16.",
                "Un reste de 0 à 9 s'écrit tel quel ; un reste de 10 à 15 s'écrit A à F.",
                "On lit les restes de bas en haut.",
                "On s'arrête quand le quotient atteint 0."
            ],
            mistakes: [
                "Écrire un reste de 10 à 15 sous forme de nombre à deux chiffres (« 10 ») au lieu de la lettre correspondante (« A ») — un chiffre hexadécimal est toujours un seul symbole.",
                "Se tromper dans la correspondance chiffre/lettre (par exemple confondre B=11 et C=12).",
                "Diviser par 10 par réflexe au lieu de diviser par 16."
            ],
            tips: [
                "Gardez sous les yeux la table de correspondance 10=A, 11=B, 12=C, 13=D, 14=E, 15=F jusqu'à ce qu'elle devienne un réflexe.",
                "Pour les nombres qui correspondent à un octet (0-255), le résultat tiendra toujours sur exactement 2 chiffres hexadécimaux."
            ],
            tables: [
                { caption: "Restes à deux chiffres → lettres hexadécimales", headers: ["Reste", "10", "11", "12", "13", "14", "15"], rows: [["Symbole", "A", "B", "C", "D", "E", "F"]] }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 687 en hexadécimal", steps: [
                        "687 ÷ 16 = 42, reste 15 → F",
                        "42 ÷ 16 = 2, reste 10 → A",
                        "2 ÷ 16 = 0, reste 2",
                        "Lecture de bas en haut : 2 A F"
                    ], result: "687 en décimal = 2AF en hexadécimal"
                },
                {
                    title: "Exemple 2 — Convertir 255 en hexadécimal", steps: [
                        "255 ÷ 16 = 15, reste 15 → F",
                        "15 ÷ 16 = 0, reste 15 → F",
                        "Lecture de bas en haut : F F"
                    ], result: "255 en décimal = FF en hexadécimal (la valeur maximale d'un octet)"
                }
            ],
            summary: [
                "Même méthode que décimal → binaire/octal, avec des divisions par 16.",
                "Un reste de 10 à 15 s'écrit A à F.",
                "On lit les restes de bas en haut.",
                "Un octet (0-255) se convertit toujours en exactement 2 chiffres hexadécimaux."
            ]
        }
    },

    {
        id: "conv-h2d", group: "conversions", badge: "base10", conv: "h2d", title: "Hexadécimal → Décimal",
        subtitle: "La méthode positionnelle avec des puissances de 16.",
        content: {
            intro: "Pour convertir un nombre hexadécimal en décimal, on applique la méthode positionnelle avec des puissances de 16, en pensant à convertir d'abord les lettres A-F en leur valeur numérique (10 à 15).",
            detailed: [
                "Chaque chiffre (ou lettre) est multiplié par 16 élevé à la puissance de sa position, en partant de 0 à droite. On additionne ensuite toutes les contributions.",
                "Les puissances de 16 grandissent très vite : 1, 16, 256, 4096… C'est pourquoi l'hexadécimal permet d'écrire de grands nombres avec très peu de chiffres."
            ],
            rules: [
                "Convertir d'abord chaque lettre en sa valeur numérique : A=10, B=11, C=12, D=13, E=14, F=15.",
                "Position 0 = chiffre le plus à droite, de poids 16⁰ = 1.",
                "Multiplier chaque valeur par le poids de sa position, puis additionner.",
                "Vérifier qu'aucun symbole du nombre de départ n'est en dehors de 0-9 et A-F."
            ],
            mistakes: [
                "Oublier de convertir une lettre en sa valeur numérique avant de multiplier (traiter A comme s'il valait 1 au lieu de 10, par exemple).",
                "Utiliser des puissances de 10 par réflexe au lieu de puissances de 16.",
                "Se tromper dans les puissances de 16 (256 et non 250, par exemple)."
            ],
            tips: [
                "Réécrivez systématiquement le nombre hexadécimal en remplaçant chaque lettre par sa valeur numérique avant de commencer les calculs — cela réduit les erreurs.",
                "Pour un nombre à 2 chiffres hexadécimaux (un octet), la formule se simplifie : valeur = chiffre_gauche × 16 + chiffre_droite."
            ],
            tables: [
                { caption: "Puissances de 16", headers: ["16⁰", "16¹", "16²", "16³"], rows: [["1", "16", "256", "4096"]] }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 2AF₁₆ en décimal", steps: [
                        "Remplacer les lettres : A=10", "2AF = 2×16² + 10×16¹ + 15×16⁰", "= 2×256 + 10×16 + 15×1", "= 512 + 160 + 15"
                    ], result: "2AF₁₆ = 687 en décimal"
                },
                {
                    title: "Exemple 2 — Convertir 1F₁₆ en décimal", steps: [
                        "F = 15", "1F = 1×16¹ + 15×16⁰", "= 16 + 15"
                    ], result: "1F₁₆ = 31 en décimal"
                }
            ],
            summary: [
                "Convertir chaque lettre en valeur numérique (A=10 … F=15) avant tout calcul.",
                "Multiplier chaque valeur par 16^position, position 0 à droite.",
                "Additionner toutes les contributions.",
                "C'est la méthode inverse de Décimal → Hexadécimal."
            ]
        }
    },

    /* --------------------------- 3. CONVERSIONS ENTRE BINAIRE, OCTAL, HEXADÉCIMAL --------------------------- */
    {
        id: "conv-b2h", group: "conversions", badge: "base16", conv: "b2h", title: "Binaire → Hexadécimal",
        subtitle: "La méthode la plus rapide de tout le cours : regrouper les bits par 4.",
        content: {
            intro: "Convertir un nombre binaire en hexadécimal est très rapide, car chaque chiffre hexadécimal correspond exactement à un groupe de 4 bits. Il suffit de regrouper les bits par 4 depuis la droite et de convertir chaque groupe individuellement.",
            detailed: [
                "Puisque 16 = 2⁴, un groupe de 4 bits (0000 à 1111) peut exprimer exactement les 16 valeurs possibles d'un chiffre hexadécimal (0 à F). Cette coïncidence mathématique est ce qui rend la conversion instantanée, sans passer par le décimal.",
                "Méthode : partir de la droite du nombre binaire, découper en groupes de 4 bits ; si le dernier groupe (le plus à gauche) contient moins de 4 bits, le compléter avec des zéros non significatifs ; puis remplacer chaque groupe de 4 bits par le chiffre hexadécimal correspondant, à l'aide de la table de correspondance."
            ],
            rules: [
                "On regroupe toujours les bits par 4, en partant de la droite.",
                "On complète le groupe le plus à gauche avec des zéros si nécessaire (ajout à gauche, jamais à droite).",
                "Chaque groupe de 4 bits se remplace directement par un chiffre hexadécimal (0-F) grâce à la table de correspondance.",
                "Aucun calcul de puissance ni de division n'est nécessaire pour cette conversion."
            ],
            mistakes: [
                "Regrouper les bits par 3 (réflexe de l'octal) au lieu de 4.",
                "Ajouter les zéros de complétion à droite au lieu de la gauche, ce qui change la valeur du nombre.",
                "Commencer le regroupement depuis la gauche au lieu de la droite, ce qui décale tous les groupes."
            ],
            tips: [
                "Affichez toujours la table 0000-1111 ↔ 0-F pendant vos premiers exercices, jusqu'à la connaître par cœur.",
                "Pensez « paquets de 4, en partant de la droite » — c'est la phrase-clé à retenir pour cette conversion et son inverse."
            ],
            tables: [
                { caption: "Table de correspondance (rappel)", headers: ["Binaire", "0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"], rows: [["Hexadécimal", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]] }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 10110110₂ en hexadécimal", steps: [
                        "Regrouper par 4 depuis la droite : 1011 0110",
                        "1011 → B", "0110 → 6"
                    ], result: "10110110₂ = B6 en hexadécimal"
                },
                {
                    title: "Exemple 2 — Convertir 1101₂ en hexadécimal", steps: [
                        "Un seul groupe de 4 bits : 1101",
                        "1101 → D"
                    ], result: "1101₂ = D en hexadécimal"
                },
                {
                    title: "Exemple 3 — Convertir 111₂ (moins de 4 bits) en hexadécimal", steps: [
                        "Compléter à gauche avec des zéros pour obtenir 4 bits : 0111",
                        "0111 → 7"
                    ], result: "111₂ = 7 en hexadécimal"
                }
            ],
            summary: [
                "On regroupe les bits par 4 depuis la droite, en complétant à gauche si besoin.",
                "Chaque groupe de 4 bits devient directement un chiffre hexadécimal.",
                "Aucun calcul de puissance n'est nécessaire : c'est une simple substitution.",
                "C'est la conversion la plus rapide du cours, une fois la table mémorisée."
            ]
        }
    },

    {
        id: "conv-h2b", group: "conversions", badge: "base2", conv: "h2b", title: "Hexadécimal → Binaire",
        subtitle: "L'inverse de la précédente : chaque chiffre hex devient 4 bits.",
        content: {
            intro: "Pour convertir un nombre hexadécimal en binaire, on effectue l'opération inverse de la conversion précédente : chaque chiffre hexadécimal est remplacé par son équivalent sur exactement 4 bits, puis on assemble tous les groupes.",
            detailed: [
                "Contrairement à la conversion binaire → hexadécimal (où l'on pouvait avoir besoin de compléter le tout premier groupe), ici chaque chiffre hexadécimal produit toujours un groupe complet de 4 bits — y compris les zéros non significatifs à l'intérieur du groupe.",
                "C'est cette exigence des 4 bits complets par chiffre qui rend la méthode fiable : oublier un zéro au milieu du groupe décale toute la suite du nombre."
            ],
            rules: [
                "Chaque chiffre hexadécimal se traduit par exactement 4 bits, sans exception.",
                "On conserve tous les zéros non significatifs à l'intérieur de chaque groupe de 4 bits (sauf éventuellement au tout début du nombre final, une fois tous les groupes assemblés).",
                "On assemble les groupes dans le même ordre que les chiffres hexadécimaux d'origine.",
                "On peut ensuite simplifier les zéros non significatifs en tête du résultat final si le contexte le permet."
            ],
            mistakes: [
                "Omettre un zéro à l'intérieur d'un groupe (écrire 101 au lieu de 0101 pour le chiffre 5), ce qui décale tous les bits suivants.",
                "Confondre le sens de la conversion et regrouper au lieu de développer.",
                "Se tromper sur la valeur numérique d'une lettre avant de la convertir en binaire."
            ],
            tips: [
                "Écrivez systématiquement chaque groupe de 4 bits sous le chiffre hexadécimal correspondant avant de les assembler : cela évite d'en oublier.",
                "Utilisez la même table de correspondance que pour Binaire → Hexadécimal — elle fonctionne dans les deux sens."
            ],
            tables: [
                { caption: "Table de correspondance (rappel)", headers: ["Hexadécimal", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"], rows: [["Binaire", "0000", "0001", "0010", "0011", "0100", "0101", "0110", "0111", "1000", "1001", "1010", "1011", "1100", "1101", "1110", "1111"]] }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir B6₁₆ en binaire", steps: [
                        "B → 1011", "6 → 0110", "Assembler : 1011 0110"
                    ], result: "B6₁₆ = 10110110 en binaire"
                },
                {
                    title: "Exemple 2 — Convertir 2AF₁₆ en binaire", steps: [
                        "2 → 0010", "A → 1010", "F → 1111", "Assembler : 0010 1010 1111"
                    ], result: "2AF₁₆ = 001010101111 en binaire (souvent simplifié en 1010101111)"
                }
            ],
            summary: [
                "Chaque chiffre hexadécimal devient un groupe complet de 4 bits.",
                "On n'omet jamais les zéros non significatifs à l'intérieur d'un groupe.",
                "On assemble les groupes dans l'ordre d'origine.",
                "C'est la conversion inverse de Binaire → Hexadécimal, avec la même table."
            ]
        }
    },

    {
        id: "conv-b2o", group: "conversions", badge: "base8", conv: "b2o", title: "Binaire → Octal",
        subtitle: "Même principe que pour l'hexadécimal, mais par groupes de 3 bits.",
        content: {
            intro: "Convertir un nombre binaire en octal fonctionne exactement comme pour l'hexadécimal, mais avec des groupes de 3 bits au lieu de 4, puisque 8 = 2³.",
            detailed: [
                "On part de la droite du nombre binaire, on découpe en groupes de 3 bits, on complète le groupe le plus à gauche avec des zéros si nécessaire, puis on remplace chaque groupe par le chiffre octal correspondant (0 à 7)."
            ],
            rules: [
                "On regroupe les bits par 3, en partant de la droite.",
                "On complète le groupe le plus à gauche avec des zéros si nécessaire.",
                "Chaque groupe de 3 bits devient directement un chiffre octal (0-7).",
                "Aucun calcul de puissance n'est nécessaire."
            ],
            mistakes: [
                "Regrouper par 4 (réflexe de l'hexadécimal) au lieu de 3.",
                "Ajouter les zéros de complétion à droite au lieu de la gauche.",
                "Oublier qu'un groupe de 3 bits ne peut jamais donner un chiffre supérieur à 7."
            ],
            tips: [
                "Pensez « paquets de 3, en partant de la droite » pour l'octal — à ne pas confondre avec les paquets de 4 pour l'hexadécimal.",
                "La table 000-111 ↔ 0-7 est courte : elle se mémorise en quelques minutes."
            ],
            tables: [
                { caption: "Table de correspondance (rappel)", headers: ["Binaire", "000", "001", "010", "011", "100", "101", "110", "111"], rows: [["Octal", "0", "1", "2", "3", "4", "5", "6", "7"]] }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 101111010₂ en octal", steps: [
                        "Regrouper par 3 depuis la droite : 101 111 010",
                        "101 → 5", "111 → 7", "010 → 2"
                    ], result: "101111010₂ = 572 en octal"
                },
                {
                    title: "Exemple 2 — Convertir 1100100₂ en octal", steps: [
                        "Regrouper par 3 depuis la droite : 1 100 100",
                        "Compléter le premier groupe : 001",
                        "001 → 1", "100 → 4", "100 → 4"
                    ], result: "1100100₂ = 144 en octal"
                }
            ],
            summary: [
                "On regroupe les bits par 3 depuis la droite, en complétant à gauche si besoin.",
                "Chaque groupe de 3 bits devient directement un chiffre octal.",
                "Même logique que Binaire → Hexadécimal, avec des groupes plus courts.",
                "Aucun calcul de puissance n'est nécessaire."
            ]
        }
    },

    {
        id: "conv-o2b", group: "conversions", badge: "base2", conv: "o2b", title: "Octal → Binaire",
        subtitle: "Chaque chiffre octal devient exactement 3 bits.",
        content: {
            intro: "Pour convertir un nombre octal en binaire, on remplace chaque chiffre octal par son équivalent sur exactement 3 bits, puis on assemble tous les groupes dans l'ordre.",
            detailed: [
                "Comme pour l'hexadécimal → binaire, chaque chiffre produit toujours un groupe complet — ici 3 bits, jamais moins — y compris les zéros non significatifs à l'intérieur du groupe."
            ],
            rules: [
                "Chaque chiffre octal se traduit par exactement 3 bits.",
                "On conserve tous les zéros à l'intérieur de chaque groupe de 3 bits.",
                "On assemble les groupes dans le même ordre que les chiffres d'origine.",
                "Les chiffres octaux valides vont de 0 à 7 uniquement."
            ],
            mistakes: [
                "Omettre un zéro à l'intérieur d'un groupe de 3 bits, ce qui décale tout le reste du nombre.",
                "Utiliser des groupes de 4 bits par confusion avec l'hexadécimal.",
                "Essayer de convertir un chiffre 8 ou 9, invalide en octal."
            ],
            tips: [
                "Écrivez chaque groupe de 3 bits sous son chiffre octal avant d'assembler, comme pour hexadécimal → binaire.",
                "La table 0-7 ↔ 000-111 est la même que celle utilisée pour Binaire → Octal, simplement lue dans l'autre sens."
            ],
            tables: [
                { caption: "Table de correspondance (rappel)", headers: ["Octal", "0", "1", "2", "3", "4", "5", "6", "7"], rows: [["Binaire", "000", "001", "010", "011", "100", "101", "110", "111"]] }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 572₈ en binaire", steps: [
                        "5 → 101", "7 → 111", "2 → 010", "Assembler : 101 111 010"
                    ], result: "572₈ = 101111010 en binaire"
                },
                {
                    title: "Exemple 2 — Convertir 144₈ en binaire", steps: [
                        "1 → 001", "4 → 100", "4 → 100", "Assembler : 001 100 100"
                    ], result: "144₈ = 001100100 en binaire (souvent simplifié en 1100100)"
                }
            ],
            summary: [
                "Chaque chiffre octal devient un groupe complet de 3 bits.",
                "On n'omet jamais les zéros à l'intérieur du groupe.",
                "On assemble les groupes dans l'ordre d'origine.",
                "C'est la conversion inverse de Binaire → Octal."
            ]
        }
    },

    {
        id: "conv-o2h", group: "conversions", badge: "base16", conv: "o2h", title: "Octal → Hexadécimal",
        subtitle: "Une conversion en deux étapes, en passant par le binaire.",
        content: {
            intro: "Il n'existe pas de correspondance directe et simple entre l'octal et l'hexadécimal, car 8 et 16 ne partagent pas le même regroupement de bits (3 contre 4). La méthode la plus fiable consiste donc à passer par une étape intermédiaire : le binaire.",
            detailed: [
                "Étape 1 : convertir le nombre octal en binaire, en remplaçant chaque chiffre octal par ses 3 bits (voir chapitre Octal → Binaire).",
                "Étape 2 : regrouper ce nombre binaire par paquets de 4 bits en partant de la droite, puis convertir chaque paquet en chiffre hexadécimal (voir chapitre Binaire → Hexadécimal).",
                "Il est également possible de passer par le décimal (Octal → Décimal, puis Décimal → Hexadécimal), mais la méthode par le binaire est en général plus rapide à la main."
            ],
            rules: [
                "Toujours passer par une étape intermédiaire — binaire ou décimal — jamais de conversion directe chiffre à chiffre.",
                "Lors du passage octal → binaire, chaque chiffre produit exactement 3 bits.",
                "Lors du passage binaire → hexadécimal, on regroupe par 4 bits depuis la droite du nombre binaire complet (pas chiffre octal par chiffre octal).",
                "On complète avec des zéros à gauche si le dernier regroupement de 4 bits est incomplet."
            ],
            mistakes: [
                "Essayer d'associer directement un chiffre octal à un chiffre hexadécimal — cette correspondance directe n'existe pas.",
                "Regrouper les bits par 4 en respectant les anciennes frontières des groupes de 3 (chiffre octal par chiffre octal) au lieu de repartir de la droite du nombre binaire complet.",
                "Oublier une étape et mélanger les deux méthodes."
            ],
            tips: [
                "Écrivez explicitement le résultat binaire intermédiaire sur une ligne séparée : cela évite de mélanger les regroupements par 3 et par 4.",
                "Pour les petits nombres, la méthode par le décimal (avec une calculatrice mentale) peut parfois être plus rapide — les deux méthodes sont valables."
            ],
            tables: [
                {
                    caption: "Récapitulatif de la méthode en 2 étapes", headers: ["Étape", "Action", "Regroupement"], rows: [
                        ["1", "Octal → Binaire", "3 bits par chiffre octal"],
                        ["2", "Binaire → Hexadécimal", "4 bits par chiffre hexadécimal, repartir de la droite"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 572₈ en hexadécimal", steps: [
                        "Étape 1 (Octal → Binaire) : 5→101, 7→111, 2→010 → 101111010",
                        "Étape 2 (Binaire → Hexadécimal) : regrouper par 4 depuis la droite → 0001 0111 1010",
                        "0001→1, 0111→7, 1010→A"
                    ], result: "572₈ = 17A en hexadécimal"
                },
                {
                    title: "Exemple 2 — Convertir 17₈ en hexadécimal", steps: [
                        "Étape 1 : 1→001, 7→111 → 001111",
                        "Étape 2 : regrouper par 4 → 0000 1111",
                        "0000→0, 1111→F"
                    ], result: "17₈ = 0F en hexadécimal, soit F"
                }
            ],
            summary: [
                "Aucune correspondance directe chiffre à chiffre entre octal et hexadécimal.",
                "Méthode recommandée : Octal → Binaire (groupes de 3), puis Binaire → Hexadécimal (groupes de 4, repartir de la droite).",
                "Alternative possible : passer par le décimal.",
                "Toujours vérifier le résultat en reconvertissant en sens inverse."
            ]
        }
    },

    {
        id: "conv-h2o", group: "conversions", badge: "base8", conv: "h2o", title: "Hexadécimal → Octal",
        subtitle: "L'inverse de la précédente : à nouveau, on passe par le binaire.",
        content: {
            intro: "Comme pour la conversion octal → hexadécimal, il n'existe pas de raccourci direct entre l'hexadécimal et l'octal. On passe par le binaire, mais dans le sens inverse.",
            detailed: [
                "Étape 1 : convertir le nombre hexadécimal en binaire, en remplaçant chaque chiffre hexadécimal par ses 4 bits (voir chapitre Hexadécimal → Binaire).",
                "Étape 2 : regrouper ce nombre binaire par paquets de 3 bits en partant de la droite, puis convertir chaque paquet en chiffre octal (voir chapitre Binaire → Octal)."
            ],
            rules: [
                "Toujours passer par le binaire (ou le décimal) comme étape intermédiaire.",
                "Lors du passage hexadécimal → binaire, chaque chiffre produit exactement 4 bits.",
                "Lors du passage binaire → octal, on regroupe par 3 bits depuis la droite du nombre binaire complet.",
                "On complète avec des zéros à gauche si le dernier regroupement de 3 bits est incomplet."
            ],
            mistakes: [
                "Essayer d'associer directement un chiffre hexadécimal à un chiffre octal.",
                "Repartir des anciennes frontières de 4 bits au lieu de regrouper à nouveau par 3 depuis la droite du nombre binaire complet.",
                "Oublier de compléter le dernier groupe de 3 bits avec des zéros."
            ],
            tips: [
                "Comme pour l'autre sens, séparez bien les deux étapes sur deux lignes distinctes.",
                "Utilisez cette conversion pour vous entraîner à enchaîner deux méthodes déjà connues — c'est un excellent test de maîtrise globale du cours."
            ],
            tables: [
                {
                    caption: "Récapitulatif de la méthode en 2 étapes", headers: ["Étape", "Action", "Regroupement"], rows: [
                        ["1", "Hexadécimal → Binaire", "4 bits par chiffre hexadécimal"],
                        ["2", "Binaire → Octal", "3 bits par chiffre octal, repartir de la droite"]
                    ]
                }
            ],
            examples: [
                {
                    title: "Exemple 1 — Convertir 17A₁₆ en octal", steps: [
                        "Étape 1 (Hex → Binaire) : 1→0001, 7→0111, A→1010 → 000101111010",
                        "Étape 2 (Binaire → Octal) : regrouper par 3 depuis la droite → 000 101 111 010",
                        "000→0, 101→5, 111→7, 010→2"
                    ], result: "17A₁₆ = 0572 en octal, soit 572"
                },
                {
                    title: "Exemple 2 — Convertir FF₁₆ en octal", steps: [
                        "Étape 1 : F→1111, F→1111 → 11111111",
                        "Étape 2 : regrouper par 3 depuis la droite → 011 111 111",
                        "011→3, 111→7, 111→7"
                    ], result: "FF₁₆ = 377 en octal"
                }
            ],
            summary: [
                "Aucune correspondance directe chiffre à chiffre entre hexadécimal et octal.",
                "Méthode recommandée : Hexadécimal → Binaire (groupes de 4), puis Binaire → Octal (groupes de 3, repartir de la droite).",
                "C'est la conversion inverse d'Octal → Hexadécimal.",
                "Vérifiez toujours votre résultat en reconvertissant en sens inverse."
            ]
        }
    }

];

/* Ordre d'affichage global (index dans COURSE = ordre de navigation) */
COURSE.forEach((c, i) => c.order = i);

const CONVERSION_LABELS = {
    d2b: "Décimal → Binaire", b2d: "Binaire → Décimal",
    d2o: "Décimal → Octal", o2d: "Octal → Décimal",
    d2h: "Décimal → Hexadécimal", h2d: "Hexadécimal → Décimal",
    b2h: "Binaire → Hexadécimal", h2b: "Hexadécimal → Binaire",
    b2o: "Binaire → Octal", o2b: "Octal → Binaire",
    o2h: "Octal → Hexadécimal", h2o: "Hexadécimal → Octal"
};
const CONV_BASES = {
    d2b: [10, 2], b2d: [2, 10], d2o: [10, 8], o2d: [8, 10], d2h: [10, 16], h2d: [16, 10],
    b2h: [2, 16], h2b: [16, 2], b2o: [2, 8], o2b: [8, 2], o2h: [8, 16], h2o: [16, 8]
};
const BASE_BADGE = { 2: "base2", 8: "base8", 10: "base10", 16: "base16" };
const BASE_NAME = { 2: "binaire", 8: "octal", 10: "décimal", 16: "hexadécimal" };

/* ============================================================================
   GÉNÉRATEUR D'EXERCICES
   ============================================================================ */

function randomSourceNumber(fromBase) {
    // Choisit un nombre "de départ" raisonnable selon la base, et le renvoie
    // à la fois sous forme décimale (Number) et sous forme de chaîne dans fromBase.
    let dec;
    if (fromBase === 2) dec = randInt(5, 250);
    else if (fromBase === 8) dec = randInt(5, 450);
    else if (fromBase === 16) dec = randInt(5, 4000);
    else dec = randInt(5, 4000); // decimal source
    return { dec, str: decToBase(dec, fromBase) };
}

/** Construit un exercice pour un type de conversion donné (clé de CONVERSION_LABELS). */
function buildExercise(type) {
    const [fromBase, toBase] = CONV_BASES[type];
    const { dec, str: fromStr } = randomSourceNumber(fromBase);
    const correct = decToBase(dec, toBase);
    let steps = [];

    if (fromBase === 10) {
        // décimal -> base : divisions successives
        const div = divisionSteps(dec, toBase);
        steps = div.map(s => `${s.q} ÷ ${toBase} = ${s.next}, reste ${s.r}${s.r >= 10 ? " → " + HEX_DIGITS[s.r] : ""}`);
        steps.push(`Lecture des restes de bas en haut : ${correct}`);
    } else if (toBase === 10) {
        // base -> décimal : méthode positionnelle
        const parts = positionalSteps(fromStr, fromBase);
        steps = parts.map(p => `${p.digitChar}×${fromBase}^${p.power} = ${p.digitChar}×${p.weight} = ${p.product}`);
        const total = parts.reduce((a, p) => a + p.product, 0);
        steps.push(`Somme : ${parts.map(p => p.product).join(" + ")} = ${total}`);
    } else if ((fromBase === 2 && toBase === 16) || (fromBase === 2 && toBase === 8)) {
        const groupSize = toBase === 16 ? 4 : 3;
        const groups = groupBits(fromStr, groupSize);
        const table = toBase === 16 ? HEX_GROUPS : OCT_GROUPS;
        const inv = Object.fromEntries(Object.entries(table).map(([k, v]) => [v, k]));
        steps.push(`Regrouper les bits par ${groupSize} depuis la droite : ${groups.join(" ")}`);
        steps.push(...groups.map(g => `${g} → ${inv[g]}`));
    } else if ((fromBase === 16 && toBase === 2) || (fromBase === 8 && toBase === 2)) {
        const table = fromBase === 16 ? HEX_GROUPS : OCT_GROUPS;
        steps.push(...fromStr.split("").map(ch => `${ch} → ${table[ch]}`));
        steps.push(`Assembler les groupes : ${correct}`);
    } else if ((fromBase === 8 && toBase === 16) || (fromBase === 16 && toBase === 8)) {
        const viaBin = decToBase(dec, 2);
        steps.push(`Étape 1 — passer par le binaire : ${fromStr} (base ${fromBase}) = ${viaBin} en binaire`);
        steps.push(`Étape 2 — regrouper le binaire vers la base ${toBase} : résultat = ${correct}`);
    }

    return {
        type, fromBase, toBase,
        question: `Convertissez ${fromStr} (base ${fromBase}, ${BASE_NAME[fromBase]}) en base ${toBase} (${BASE_NAME[toBase]}).`,
        fromStr, correct, steps
    };
}

function groupBits(bin, size) {
    let s = bin;
    while (s.length % size !== 0) s = "0" + s;
    const groups = [];
    for (let i = 0; i < s.length; i += size) groups.push(s.slice(i, i + size));
    return groups;
}

function normalizeAnswer(str) { return String(str).trim().toUpperCase().replace(/^0+(?=[0-9A-F])/, "") || "0"; }

/* ============================================================================
   ÉTAT GLOBAL & PERSISTANCE (LocalStorage)
   ============================================================================ */

const STORAGE_KEY = "basesconv_progress_v1";
const THEME_KEY = "basesconv_theme";

function loadProgress() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return { done: {}, scores: {}, lastChapter: null };
        return JSON.parse(raw);
    } catch (e) { return { done: {}, scores: {}, lastChapter: null }; }
}
function saveProgress() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state.progress)); } catch (e) { } }

const state = {
    progress: loadProgress(),
    currentChapterId: null,
    currentExercise: null,
    exerciseScore: { correct: 0, total: 0 },
    timerInterval: null, timerSeconds: 0, timerOn: false
};

function markChapterDone(id) { state.progress.done[id] = true; saveProgress(); renderSidebar(); updateGlobalProgress(); }
function isChapterDone(id) { return !!state.progress.done[id]; }

function updateGlobalProgress() {
    const total = COURSE.length;
    const done = COURSE.filter(c => isChapterDone(c.id)).length;
    const pct = Math.round((done / total) * 100);
    document.getElementById("globalProgressFill").style.width = pct + "%";
    document.getElementById("globalProgressLabel").textContent = pct + " %";
}

/* ============================================================================
   RENDU : SIDEBAR
   ============================================================================ */

function renderSidebar() {
    const nav = document.getElementById("chapterNav");
    nav.innerHTML = "";
    const groups = [
        { key: "systemes", label: "Systèmes de numération" },
        { key: "conversions", label: "Conversions" }
    ];
    groups.forEach(g => {
        const title = document.createElement("div");
        title.className = "nav-group-title";
        title.textContent = g.label;
        nav.appendChild(title);
        COURSE.filter(c => c.group === g.key).forEach(c => {
            const btn = document.createElement("button");
            btn.className = "nav-item" + (isChapterDone(c.id) ? " done" : "") + (state.currentChapterId === c.id ? " active" : "");
            btn.innerHTML = `<span class="nav-dot" style="background:var(--${c.badge})"></span><span>${esc(c.title)}</span><span class="nav-check">✓</span>`;
            btn.addEventListener("click", () => navigateTo("chapter", c.id));
            nav.appendChild(btn);
        });
    });
}

/* ============================================================================
   RENDU : ACCUEIL
   ============================================================================ */

function renderHomeCards() {
    const sys = document.getElementById("homeCardsSystemes");
    const conv = document.getElementById("homeCardsConversions");
    sys.innerHTML = ""; conv.innerHTML = "";
    COURSE.forEach(c => {
        const card = document.createElement("button");
        card.className = "chapter-card";
        card.innerHTML = `
      <span class="chapter-card-badge" style="background:var(--${c.badge}-bg);color:var(--${c.badge})">${c.conv ? esc(c.conv.replace("2", "→").toUpperCase()) : c.title[0]}</span>
      <span class="chapter-card-title">${esc(c.title)}</span>
      <span class="chapter-card-desc">${esc(c.subtitle)}</span>
      ${isChapterDone(c.id) ? '<span class="chapter-card-done">✓</span>' : ""}
    `;
        card.addEventListener("click", () => navigateTo("chapter", c.id));
        (c.group === "systemes" ? sys : conv).appendChild(card);
    });
}

function updateHeroDial() {
    const input = document.getElementById("heroDialInput");
    let n = parseInt(input.value, 10);
    if (isNaN(n) || n < 0) n = 0;
    document.getElementById("heroDialBin").textContent = decToBase(n, 2);
    document.getElementById("heroDialOct").textContent = decToBase(n, 8);
    document.getElementById("heroDialDec").textContent = String(n);
    document.getElementById("heroDialHex").textContent = decToBase(n, 16);
}

function updateResumeNote() {
    const note = document.getElementById("resumeNote");
    const last = state.progress.lastChapter;
    const chapter = COURSE.find(c => c.id === last);
    if (chapter) {
        note.hidden = false;
        document.getElementById("resumeChapterName").textContent = chapter.title;
    } else {
        note.hidden = true;
    }
}

/* ============================================================================
   RENDU : CONTENU D'UN CHAPITRE (leçon)
   ============================================================================ */

function renderPlaceValueSchema(numberStr, base) {
    const digits = numberStr.split("");
    const len = digits.length;
    let html = '<div class="place-schema">';
    digits.forEach((d, i) => {
        const power = len - 1 - i;
        const weight = Math.pow(base, power);
        html += `<div class="place-cell"><div class="pc-pow">${base}^${power}</div><div class="pc-val">${weight}</div><div class="pc-digit">${esc(d)}</div></div>`;
    });
    html += "</div>";
    return html;
}

function renderTableHtml(t) {
    let html = '<div class="table-scroll"><table class="data-table">';
    if (t.caption) html += `<caption>${esc(t.caption)}</caption>`;
    html += "<thead><tr>" + t.headers.map(h => `<th>${esc(h)}</th>`).join("") + "</tr></thead><tbody>";
    t.rows.forEach(r => { html += "<tr>" + r.map(c => `<td>${esc(c)}</td>`).join("") + "</tr>"; });
    html += "</tbody></table></div>";
    return html;
}

function renderExampleHtml(ex, idx) {
    return `<div class="example-card">
    <h4>${esc(ex.title)}</h4>
    <ol class="example-steps">${ex.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>
    <div class="example-result">✓ ${esc(ex.result)}</div>
  </div>`;
}

function renderLessonHtml(chapter) {
    const c = chapter.content;
    let html = "";

    html += `<section><p class="lead">${c.intro}</p></section>`;

    html += `<section><h2>📘 Explication détaillée</h2>${c.detailed.map(p => `<p>${p}</p>`).join("")}</section>`;

    if (c.theory && c.theory.length) {
        html += `<section><h2>🧠 Notions théoriques</h2>`;
        c.theory.forEach(t => { html += `<h3>${esc(t.h)}</h3><p>${t.p}</p>`; });
        html += `</section>`;
    }

    if (c.schema && c.schema.kind === "placevalue") {
        html += `<section><h2>📐 Schéma : décomposition positionnelle</h2>
      <p>Voici la décomposition du nombre <strong>${esc(c.schema.number)}</strong> en base ${c.schema.base} :</p>
      ${renderPlaceValueSchema(c.schema.number, c.schema.base)}</section>`;
    }

    if (c.tables && c.tables.length) {
        html += `<section><h2>📊 Tableaux de référence</h2>${c.tables.map(renderTableHtml).join("")}</section>`;
    }

    html += `<section><h2>✅ Règles à retenir</h2><div class="callout callout-rules"><ul>${c.rules.map(r => `<li>${r}</li>`).join("")}</ul></div></section>`;

    html += `<section><h2>⚠️ Erreurs fréquentes</h2><div class="callout callout-mistakes"><ul>${c.mistakes.map(r => `<li>${r}</li>`).join("")}</ul></div></section>`;

    html += `<section><h2>💡 Astuces de mémorisation</h2><div class="callout callout-tips"><ul>${c.tips.map(r => `<li>${r}</li>`).join("")}</ul></div></section>`;

    html += `<section><h2>🧩 Exemples résolus</h2>${c.examples.map(renderExampleHtml).join("")}</section>`;

    html += `<section><h2>📝 Résumé du chapitre</h2><div class="callout callout-summary"><ul>${c.summary.map(r => `<li>${r}</li>`).join("")}</ul></div></section>`;

    return html;
}

function renderChapterBitstrip(order) {
    const el = document.getElementById("chapterBitstrip");
    const bits = decToBase(order + 1, 2).padStart(8, "0");
    el.innerHTML = bits.split("").map(b => `<span class="${b === "1" ? "on" : ""}"></span>`).join("");
}

/* ============================================================================
   MOTEUR D'EXERCICES (bloc "entraînement" en bas de chapitre)
   ============================================================================ */

function newExercise(chapter) {
    const type = chapter.conv || pickRandomConvType();
    state.currentExercise = buildExercise(type);
    renderExerciseCard();
    document.getElementById("exerciseFeedback").hidden = true;
    document.getElementById("exerciseFeedback").className = "exercise-feedback";
    resetTimer();
}

function pickRandomConvType() {
    const keys = Object.keys(CONVERSION_LABELS);
    return keys[randInt(0, keys.length - 1)];
}

function renderExerciseCard() {
    const ex = state.currentExercise;
    const card = document.getElementById("exerciseCard");
    card.innerHTML = `
    <div class="exercise-question">
      <span class="conv-badge" style="background:var(--${BASE_BADGE[ex.toBase]}-bg);color:var(--${BASE_BADGE[ex.toBase]})">${esc(CONVERSION_LABELS[ex.type])}</span>
      ${esc(ex.question)}
    </div>
    <div class="exercise-input-row">
      <input type="text" id="exerciseInput" class="exercise-input" placeholder="Votre réponse en base ${ex.toBase}…" autocomplete="off" autocapitalize="characters">
    </div>`;
    document.getElementById("exerciseInput").addEventListener("keydown", e => { if (e.key === "Enter") checkExerciseAnswer(); });
}

function checkExerciseAnswer() {
    const ex = state.currentExercise;
    const input = document.getElementById("exerciseInput");
    const given = normalizeAnswer(input.value || "");
    const correct = normalizeAnswer(ex.correct);
    const fb = document.getElementById("exerciseFeedback");
    const isOk = given === correct && given !== "";

    state.exerciseScore.total++;
    if (isOk) state.exerciseScore.correct++;
    document.getElementById("scoreLabel").textContent = `${state.exerciseScore.correct} / ${state.exerciseScore.total}`;

    fb.hidden = false;
    fb.className = "exercise-feedback " + (isOk ? "ok" : "ko");
    fb.innerHTML = `<strong>${isOk ? "✓ Bonne réponse !" : "✗ Pas tout à fait."}</strong> La réponse correcte est <strong>${esc(ex.correct)}</strong>.
    <div class="fb-steps">${ex.steps.map(s => "· " + esc(s)).join("<br>")}</div>`;
}

function showSolution() {
    checkExerciseAnswer_display_only();
}
function checkExerciseAnswer_display_only() {
    const ex = state.currentExercise;
    const fb = document.getElementById("exerciseFeedback");
    fb.hidden = false;
    fb.className = "exercise-feedback ok";
    fb.innerHTML = `<strong>Solution :</strong> ${esc(ex.correct)}
    <div class="fb-steps">${ex.steps.map(s => "· " + esc(s)).join("<br>")}</div>`;
}

function resetExercise() {
    state.exerciseScore = { correct: 0, total: 0 };
    document.getElementById("scoreLabel").textContent = "0 / 0";
    const chapter = COURSE.find(c => c.id === state.currentChapterId);
    if (chapter) newExercise(chapter);
}

/* Chronomètre optionnel */
function resetTimer() {
    clearInterval(state.timerInterval);
    state.timerSeconds = 0;
    document.getElementById("timerDisplay").textContent = "00:00";
    if (state.timerOn) startTimer();
}
function startTimer() {
    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(() => {
        state.timerSeconds++;
        const m = String(Math.floor(state.timerSeconds / 60)).padStart(2, "0");
        const s = String(state.timerSeconds % 60).padStart(2, "0");
        document.getElementById("timerDisplay").textContent = `${m}:${s}`;
    }, 1000);
}

/* ============================================================================
   QUIZ (fin de chapitre + quiz final) — QCM à 4 choix
   ============================================================================ */

function buildQuizQuestion(type) {
    const ex = buildExercise(type);
    const options = new Set([ex.correct]);
    while (options.size < 4) {
        const [, toBase] = CONV_BASES[type];
        const decVal = baseToDec(ex.correct, toBase);
        const delta = randInt(-8, 8) || 1;
        let distractor = decToBase(Math.max(0, decVal + delta), toBase);
        if (distractor !== ex.correct) options.add(distractor);
        if (options.size >= 4) break;
        // sécurité anti-boucle infinie
        if (options.size < 4 && Math.random() < 0.1) options.add(decToBase(randInt(1, 999), toBase));
    }
    const opts = shuffle([...options]).slice(0, 4);
    if (!opts.includes(ex.correct)) opts[randInt(0, 3)] = ex.correct;
    return { question: ex.question, options: opts, correct: ex.correct, steps: ex.steps, type };
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) { const j = randInt(0, i);[a[i], a[j]] = [a[j], a[i]]; }
    return a;
}

function renderQuiz(container, questions, onFinish) {
    let index = 0, score = 0;
    const answers = [];

    function renderQ() {
        const q = questions[index];
        container.innerHTML = `
      <div class="quiz-question">
        <div class="quiz-question-text">Question ${index + 1} / ${questions.length} — ${esc(q.question)}</div>
        <div class="quiz-options">
          ${q.options.map((o, i) => `<button class="quiz-option" data-opt="${esc(o)}">${esc(o)}</button>`).join("")}
        </div>
      </div>`;
        container.querySelectorAll(".quiz-option").forEach(btn => {
            btn.addEventListener("click", () => {
                const chosen = btn.getAttribute("data-opt");
                const isOk = chosen === q.correct;
                if (isOk) score++;
                answers.push({ q, chosen, isOk });
                container.querySelectorAll(".quiz-option").forEach(b => {
                    b.disabled = true;
                    if (b.getAttribute("data-opt") === q.correct) b.classList.add("correct");
                    else if (b === btn) b.classList.add("incorrect");
                });
                setTimeout(() => {
                    index++;
                    if (index < questions.length) renderQ();
                    else finish();
                }, 900);
            });
        });
    }

    function finish() {
        const pct = Math.round((score / questions.length) * 100);
        container.innerHTML = `
      <div class="quiz-summary">
        <div class="qs-score">${score} / ${questions.length}</div>
        <p>${pct}% de bonnes réponses</p>
      </div>`;
        onFinish(score, questions.length);
    }

    renderQ();
}

function startChapterQuiz(chapter) {
    const type = chapter.conv;
    const area = document.getElementById("chapterQuizArea");
    let questions;
    if (type) {
        questions = Array.from({ length: 5 }, () => buildQuizQuestion(type));
    } else {
        // chapitres "systèmes" : mélange de conversions liées à leur base
        const relatedTypes = Object.keys(CONVERSION_LABELS).filter(t => CONV_BASES[t].includes(chapter.baseNum || 10));
        questions = Array.from({ length: 5 }, () => buildQuizQuestion(relatedTypes.length ? relatedTypes[randInt(0, relatedTypes.length - 1)] : pickRandomConvType()));
    }
    renderQuiz(area, questions, (score, total) => {
        if (score / total >= 0.6) {
            markChapterDone(chapter.id);
            showToast("Chapitre validé et marqué comme terminé ✓");
        } else {
            showToast("Score insuffisant pour valider (60% requis) — retentez le quiz !");
        }
    });
}

function startFinalQuiz() {
    const area = document.getElementById("finalQuizArea");
    const types = Object.keys(CONVERSION_LABELS);
    const questions = Array.from({ length: 20 }, () => buildQuizQuestion(types[randInt(0, types.length - 1)]));
    renderQuiz(area, questions, (score, total) => {
        showToast(`Quiz final terminé : ${score} / ${total}`);
    });
}

/* ============================================================================
   NAVIGATION / ROUTAGE
   ============================================================================ */

function navigateTo(page, chapterId) {
    document.querySelectorAll(".page").forEach(p => p.hidden = true);
    closeSidebarMobile();
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (page === "home") {
        document.getElementById("page-home").hidden = false;
        state.currentChapterId = null;
        renderHomeCards();
        updateResumeNote();
        location.hash = "#home";
    } else if (page === "chapter") {
        const chapter = COURSE.find(c => c.id === chapterId) || COURSE[0];
        state.currentChapterId = chapter.id;
        state.progress.lastChapter = chapter.id;
        saveProgress();
        document.getElementById("page-chapter").hidden = false;
        document.getElementById("chapterBadge").textContent = chapter.title.split(" ")[0] + " · base " + (CONV_BASES[chapter.conv] ? CONV_BASES[chapter.conv][1] : chapterBaseOf(chapter));
        document.getElementById("chapterBadge").style.background = `var(--${chapter.badge}-bg)`;
        document.getElementById("chapterBadge").style.color = `var(--${chapter.badge})`;
        document.getElementById("chapterTitle").textContent = chapter.title;
        document.getElementById("chapterSubtitle").textContent = chapter.subtitle;
        document.getElementById("chapterIndexLabel").textContent = `Chapitre ${chapter.order + 1} / ${COURSE.length}`;
        document.getElementById("lessonBody").innerHTML = renderLessonHtml(chapter);
        renderChapterBitstrip(chapter.order);

        state.exerciseScore = { correct: 0, total: 0 };
        document.getElementById("scoreLabel").textContent = "0 / 0";
        newExercise(chapter);

        document.getElementById("chapterQuizArea").innerHTML = "";
        document.getElementById("prevChapterBtn").disabled = chapter.order === 0;
        document.getElementById("nextChapterBtn").textContent = chapter.order === COURSE.length - 1 ? "Terminer →" : "Chapitre suivant →";

        renderSidebar();
        location.hash = "#chapter/" + chapter.id;
    } else if (page === "quiz") {
        document.getElementById("page-quiz").hidden = false;
        startFinalQuiz();
        location.hash = "#quiz";
    }
}

function chapterBaseOf(chapter) {
    if (chapter.id === "sys-dec") return 10;
    if (chapter.id === "sys-bin") return 2;
    if (chapter.id === "sys-oct") return 8;
    if (chapter.id === "sys-hex") return 16;
    return "";
}

function closeSidebarMobile() {
    document.getElementById("sidebar").classList.remove("open");
    document.getElementById("sidebarScrim").classList.remove("show");
    document.getElementById("menuToggle").setAttribute("aria-expanded", "false");
}

/* ============================================================================
   RECHERCHE
   ============================================================================ */

function buildSearchIndex() {
    return COURSE.map(c => {
        const text = [
            c.title, c.subtitle, c.content.intro, c.content.detailed.join(" "),
            (c.content.theory || []).map(t => t.h + " " + t.p).join(" "),
            c.content.rules.join(" "), c.content.mistakes.join(" "), c.content.tips.join(" "),
            c.content.summary.join(" ")
        ].join(" ").replace(/<[^>]+>/g, "");
        return { id: c.id, title: c.title, text };
    });
}
let SEARCH_INDEX = null;

function runSearch(query) {
    if (!SEARCH_INDEX) SEARCH_INDEX = buildSearchIndex();
    const q = query.trim().toLowerCase();
    const results = document.getElementById("searchResults");
    if (q.length < 2) { results.hidden = true; results.innerHTML = ""; return; }

    const matches = SEARCH_INDEX
        .map(item => {
            const lower = item.text.toLowerCase();
            const idx = lower.indexOf(q);
            return idx >= 0 ? { ...item, idx } : null;
        })
        .filter(Boolean)
        .slice(0, 8);

    results.innerHTML = "";
    if (!matches.length) {
        results.innerHTML = `<div class="search-empty">Aucun résultat pour « ${esc(query)} ».</div>`;
    } else {
        matches.forEach(m => {
            const start = Math.max(0, m.idx - 40);
            const snippet = (start > 0 ? "…" : "") + m.text.slice(start, m.idx + q.length + 60) + "…";
            const highlighted = esc(snippet).replace(new RegExp(esc(query), "ig"), s => `<mark>${s}</mark>`);
            const btn = document.createElement("button");
            btn.className = "search-result-item";
            btn.innerHTML = `<span class="srt">${esc(m.title)}</span><span class="srs">${highlighted}</span>`;
            btn.addEventListener("click", () => {
                navigateTo("chapter", m.id);
                results.hidden = true;
                document.getElementById("searchInput").value = "";
            });
            results.appendChild(btn);
        });
    }
    results.hidden = false;
}

/* ============================================================================
   THÈME CLAIR / SOMBRE
   ============================================================================ */

function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { }
}
function initTheme() {
    let theme;
    try { theme = localStorage.getItem(THEME_KEY); } catch (e) { }
    if (!theme) theme = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    applyTheme(theme);
}

/* ============================================================================
   TOAST
   ============================================================================ */

let toastTimeout = null;
function showToast(msg) {
    const t = document.getElementById("toast");
    t.textContent = msg;
    t.hidden = false;
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => { t.hidden = true; }, 3200);
}

/* ============================================================================
   EXPORT PDF (jsPDF + jsPDF-AutoTable)
   ============================================================================ */

function stripHtml(html) { const d = document.createElement("div"); d.innerHTML = html; return d.textContent || ""; }

async function generateCoursePdf() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageW = doc.internal.pageSize.getWidth();
    const pageH = doc.internal.pageSize.getHeight();
    const margin = 50;
    let y = margin;
    const lineH = 14;
    const tocEntries = []; // { title, page }

    function addFooter() {
        const pageCount = doc.internal.getNumberOfPages();
        for (let i = 2; i <= pageCount; i++) {
            doc.setPage(i);
            doc.setFontSize(9); doc.setTextColor(140);
            doc.text(String(i - 1), pageW / 2, pageH - 24, { align: "center" });
        }
    }

    function ensureSpace(h) {
        if (y + h > pageH - margin) { doc.addPage(); y = margin; }
    }
    function heading(text, size = 16) {
        ensureSpace(size + 16);
        doc.setFont("helvetica", "bold"); doc.setFontSize(size); doc.setTextColor(20, 30, 40);
        doc.text(text, margin, y); y += size + 10;
    }
    function subheading(text) {
        ensureSpace(24);
        doc.setFont("helvetica", "bold"); doc.setFontSize(12); doc.setTextColor(60, 70, 90);
        doc.text(text, margin, y); y += 18;
    }
    function paragraph(text) {
        doc.setFont("helvetica", "normal"); doc.setFontSize(10.5); doc.setTextColor(40, 46, 54);
        const clean = stripHtml(text);
        const lines = doc.splitTextToSize(clean, pageW - margin * 2);
        lines.forEach(line => { ensureSpace(lineH); doc.text(line, margin, y); y += lineH; });
        y += 4;
    }
    function bulletList(items, color = [40, 46, 54]) {
        doc.setFont("helvetica", "normal"); doc.setFontSize(10.5); doc.setTextColor(...color);
        items.forEach(it => {
            const clean = "•  " + stripHtml(it);
            const lines = doc.splitTextToSize(clean, pageW - margin * 2 - 10);
            lines.forEach((line, li) => { ensureSpace(lineH); doc.text(li === 0 ? line : "   " + line, margin, y); y += lineH; });
        });
        y += 6;
    }
    function table(t) {
        ensureSpace(30);
        doc.autoTable({
            startY: y, margin: { left: margin, right: margin },
            head: [t.headers], body: t.rows,
            styles: { font: "courier", fontSize: 8.5, cellPadding: 4 },
            headStyles: { fillColor: [30, 42, 58], textColor: 255 },
            theme: "grid"
        });
        y = doc.lastAutoTable.finalY + 16;
    }

    // ---- Page de titre ----
    doc.setFillColor(16, 22, 30); doc.rect(0, 0, pageW, pageH, "F");
    doc.setTextColor(255, 255, 255); doc.setFont("helvetica", "bold"); doc.setFontSize(28);
    doc.text("Bases & Conversions", margin, 200);
    doc.setFontSize(14); doc.setFont("helvetica", "normal");
    doc.text("Le cours complet des systèmes de numération", margin, 230);
    doc.setFontSize(10); doc.setTextColor(180);
    doc.text("Décimal · Binaire · Octal · Hexadécimal — Théorie, exemples et exercices", margin, 254);

    // ---- Page Table des matières (placeholder, remplie à la fin) ----
    doc.addPage();
    const tocPageIndex = doc.internal.getNumberOfPages();
    y = margin;
    heading("Table des matières", 18);
    y += 10;

    // ---- Contenu ----
    COURSE.forEach((c, i) => {
        doc.addPage();
        y = margin;
        const pageNum = doc.internal.getNumberOfPages();
        tocEntries.push({ title: `${i + 1}. ${c.title}`, page: pageNum - 1 }); // -1 car TOC compte hors page de garde

        heading(`${i + 1}. ${c.title}`, 17);
        doc.setFont("helvetica", "italic"); doc.setFontSize(10.5); doc.setTextColor(90);
        doc.text(doc.splitTextToSize(c.subtitle, pageW - margin * 2), margin, y); y += 22;

        const ct = c.content;
        subheading("Explication simple"); paragraph(ct.intro);
        subheading("Explication détaillée"); ct.detailed.forEach(p => paragraph(p));
        if (ct.theory && ct.theory.length) {
            subheading("Notions théoriques");
            ct.theory.forEach(t => { paragraph(t.h + " — " + t.p); });
        }
        if (ct.tables && ct.tables.length) {
            subheading("Tableaux de référence");
            ct.tables.forEach(table);
        }
        subheading("Règles à retenir"); bulletList(ct.rules);
        subheading("Erreurs fréquentes"); bulletList(ct.mistakes, [150, 40, 30]);
        subheading("Astuces de mémorisation"); bulletList(ct.tips, [20, 110, 70]);
        subheading("Exemples résolus");
        ct.examples.forEach(ex => {
            doc.setFont("helvetica", "bold"); doc.setFontSize(10.5); doc.setTextColor(30, 40, 50);
            ensureSpace(16); doc.text(ex.title, margin, y); y += 15;
            bulletList(ex.steps);
            paragraph("Résultat : " + ex.result);
        });
        subheading("Résumé du chapitre"); bulletList(ct.summary);
    });

    // ---- Remplir la table des matières ----
    doc.setPage(tocPageIndex);
    y = margin + 40;
    doc.setFont("helvetica", "normal"); doc.setFontSize(11); doc.setTextColor(40);
    tocEntries.forEach(entry => {
        ensureSpace(20);
        const label = entry.title;
        const pageLabel = String(entry.page);
        doc.text(label, margin, y);
        doc.text(pageLabel, pageW - margin, y, { align: "right" });
        y += 20;
    });

    addFooter();
    doc.save("bases-et-conversions-cours.pdf");
}

/* ============================================================================
   INITIALISATION / ÉVÉNEMENTS
   ============================================================================ */

function boot() {
    initTheme();
    renderSidebar();
    updateGlobalProgress();
    renderHomeCards();
    updateResumeNote();
    updateHeroDial();

    // Masquer la bande de chargement
    setTimeout(() => document.getElementById("bootStrip").classList.add("hidden"), 500);

    // --- Thème ---
    document.getElementById("themeToggle").addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "light";
        applyTheme(current === "dark" ? "light" : "dark");
    });

    // --- Menu mobile ---
    document.getElementById("menuToggle").addEventListener("click", () => {
        const sidebar = document.getElementById("sidebar");
        const open = sidebar.classList.toggle("open");
        document.getElementById("sidebarScrim").classList.toggle("show", open);
        document.getElementById("menuToggle").setAttribute("aria-expanded", String(open));
    });
    document.getElementById("sidebarScrim").addEventListener("click", closeSidebarMobile);

    // --- Navigation ---
    document.querySelectorAll('[data-nav="home"]').forEach(el => el.addEventListener("click", e => { e.preventDefault(); navigateTo("home"); }));
    document.getElementById("backHomeBtn").addEventListener("click", () => navigateTo("home"));
    document.getElementById("backHomeBtn2").addEventListener("click", () => navigateTo("home"));
    document.getElementById("startCourseBtn").addEventListener("click", () => navigateTo("chapter", COURSE[0].id));
    document.getElementById("startQuizFinalBtn").addEventListener("click", () => navigateTo("quiz"));
    document.getElementById("finalQuizCard").addEventListener("click", () => navigateTo("quiz"));
    document.getElementById("resumeBtn").addEventListener("click", () => navigateTo("chapter", state.progress.lastChapter));

    document.getElementById("prevChapterBtn").addEventListener("click", () => {
        const c = COURSE.find(c => c.id === state.currentChapterId);
        if (c && c.order > 0) navigateTo("chapter", COURSE[c.order - 1].id);
    });
    document.getElementById("nextChapterBtn").addEventListener("click", () => {
        const c = COURSE.find(c => c.id === state.currentChapterId);
        if (!c) return;
        if (c.order < COURSE.length - 1) navigateTo("chapter", COURSE[c.order + 1].id);
        else navigateTo("home");
    });

    // --- Exercices ---
    document.getElementById("checkAnswerBtn").addEventListener("click", checkExerciseAnswer);
    document.getElementById("solutionBtn").addEventListener("click", showSolution);
    document.getElementById("newExerciseBtn").addEventListener("click", () => {
        const c = COURSE.find(c => c.id === state.currentChapterId);
        if (c) newExercise(c);
    });
    document.getElementById("resetExerciseBtn").addEventListener("click", resetExercise);
    document.getElementById("timerToggle").addEventListener("change", e => {
        state.timerOn = e.target.checked;
        document.getElementById("timerDisplay").hidden = !state.timerOn;
        if (state.timerOn) startTimer(); else clearInterval(state.timerInterval);
    });

    // --- Quiz de chapitre ---
    document.getElementById("startChapterQuizBtn").addEventListener("click", () => {
        const c = COURSE.find(c => c.id === state.currentChapterId);
        if (c) startChapterQuiz(c);
    });

    // --- Réinitialisation progression ---
    document.getElementById("resetProgressBtn").addEventListener("click", () => {
        if (confirm("Réinitialiser toute votre progression et vos scores ? Cette action est irréversible.")) {
            state.progress = { done: {}, scores: {}, lastChapter: null };
            saveProgress();
            renderSidebar(); updateGlobalProgress(); renderHomeCards(); updateResumeNote();
            showToast("Progression réinitialisée.");
        }
    });

    // --- Recherche ---
    const searchInput = document.getElementById("searchInput");
    searchInput.addEventListener("input", () => runSearch(searchInput.value));
    document.addEventListener("click", e => {
        if (!e.target.closest(".search-wrap")) document.getElementById("searchResults").hidden = true;
    });

    // --- Dial héro ---
    document.getElementById("heroDialInput").addEventListener("input", updateHeroDial);

    // --- PDF ---
    document.getElementById("pdfBtn").addEventListener("click", async () => {
        const btn = document.getElementById("pdfBtn");
        btn.disabled = true; const original = btn.innerHTML; btn.innerHTML = "Génération…";
        try { await generateCoursePdf(); showToast("PDF généré et téléchargé ✓"); }
        catch (e) { console.error(e); showToast("Erreur lors de la génération du PDF."); }
        finally { btn.disabled = false; btn.innerHTML = original; }
    });

    // --- Routage initial via hash ---
    const hash = location.hash;
    if (hash.startsWith("#chapter/")) navigateTo("chapter", hash.replace("#chapter/", ""));
    else if (hash === "#quiz") navigateTo("quiz");
    else navigateTo("home");
}

document.addEventListener("DOMContentLoaded", boot);