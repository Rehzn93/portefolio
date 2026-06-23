/* =========================================================================
   DONNÉES DU PORTFOLIO, ✏️  C'EST ICI QUE TU REMPLIS / MODIFIES TOUT
   -------------------------------------------------------------------------
   • Texte déjà rempli  = repris de ton portfolio BUT1 (à relire / ajuster).
   • « À COMPLÉTER »     = à remplir pour le BUT2 (stage, nouvelles SAÉ…).
   • Les niveaux de jauge vont de 0 à 100.
   • Pour lier une SAÉ à une compétence : mettre le même identifiant
     (ex. "realiser") dans `competences` de la SAÉ ET la SAÉ dans `preuves`.
   ========================================================================= */

const DATA = {

  /* ----------------------------------------------------------------- PROFIL */
  profil: {
    prenom: "Rehan",
    nom: "MOHAMMAD",
    titre: "Étudiant en BUT Informatique",
    sousTitre: "IUT de Villetaneuse",
    accroche: "De la résolution de problèmes à l'<strong>intelligence artificielle</strong> appliquée à la <strong>santé</strong>.",
    email: "rehan93babinks@gmail.com",
    github: "https://github.com/rehzn93",   // ✏️ à vérifier
    linkedin: "#",                          // ✏️ À COMPLÉTER
  },

  /* ------------------------------------------------------------- ACCUEIL */
  accueil: {
    badge: "Portfolio · BUT2 · 2025–2026",
    titreLigne1: "Rehan",
    titreLigne2: "MOHAMMAD.",
    lead: "Étudiant en 2ᵉ année de BUT Informatique, en recherche d'une <strong>alternance</strong>. Ce qui me caractérise : la <strong>rigueur</strong> et la <strong>curiosité</strong>. Si je me suis orienté vers l'informatique, ce n'est pas par hasard, c'est pour relier la logique à des domaines concrets comme l'<strong>IA</strong> et la <strong>santé</strong>. Ce portfolio retrace mon parcours, mes compétences et l'évolution de mes SAÉ, du BUT1 au BUT2.",
    stats: [
      { valeur: "6",   label: "compétences BUT" },
      { valeur: "12+", label: "SAÉ réalisées" },
      { valeur: "2",   label: "années (BUT1 → BUT2)" },
    ],
    // Cartes flottantes du hero (icone : spark · target · code · rocket)
    cartes: [
      { label: "Domaine de prédilection", valeur: "IA & Santé", icone: "spark" },
      { label: "Objectif",                valeur: "Alternance", icone: "target" },
    ],
    // Fil conducteur : la phrase qui relie tout le portfolio
    filConducteur: "Mon fil conducteur : mettre la technique au service du concret et de l'humain, relier la logique de l'informatique à des domaines qui ont du sens pour moi, comme l'<strong>IA</strong> et la <strong>santé</strong>.",
  },

  /* ------------------------------------------------------------- PARCOURS */
  parcours: {
    presentation: `Actuellement étudiant en 2ᵉ année de BUT Informatique à l'IUT de Villetaneuse, j'ai depuis l'enfance le réflexe de chercher à comprendre comment les choses fonctionnent et de m'attaquer aux problèmes plutôt que de les contourner. C'est ce goût pour la logique, cette <strong>curiosité</strong> et cette <strong>rigueur</strong> qui m'ont naturellement conduit vers cette orientation, un choix réfléchi, pas le fruit du hasard.

Mes centres d'intérêt majeurs sont l'Intelligence Artificielle et l'informatique appliquée à la <strong>santé</strong>. Ce qui m'attire dans l'<strong>IA</strong>, c'est sa capacité à apprendre, à s'adapter et à résoudre des problèmes complexes, la technologie de demain. Pour l'informatique médicale, c'est la possibilité d'améliorer concrètement la vie des gens : aide au diagnostic, suivi des patients, recherche. Le monde de la médecine m'a toujours attiré ; pouvoir combiner ces deux domaines est un véritable objectif.`,

    // Pourquoi l'informatique ? (repris p.7 du PDF)
    pourquoiInfo: [
      {
        titre: "Résolution de problèmes & logique",
        texte: "Depuis que j'ai découvert l'informatique, je suis fasciné par la manière dont on utilise des algorithmes pour résoudre des problèmes concrets. Programmer, c'est résoudre des énigmes, j'aime cette logique derrière chaque ligne de code.",
      },
      {
        titre: "Créer & innover",
        texte: "L'informatique transforme une idée en quelque chose de réel et d'utile : une application, un site, un jeu. J'aime cette liberté de création, et le fait de pouvoir continuellement apprendre de nouvelles technologies rend ce domaine encore plus motivant.",
      },
    ],

    // Choix d'orientation
    orientation: `J'ai choisi l'informatique pour réunir trois choses qui me ressemblent : la logique, la création et l'utilité. Mon ambition professionnelle est de devenir ingénieur en informatique dans le secteur de l'<strong>IA</strong> ou de la <strong>santé</strong>, un métier en contact avec les gens, où je peux me rendre utile. Je ne m'épanouis pleinement que lorsque j'ai le sentiment d'être utile.`,

    // Qualités personnelles (repris p.3 du PDF)
    qualites: [
      { icone: "🥊", titre: "Persévérance", texte: "Quand je bloque, je ne lâche pas. La pratique du muay-thaï (sport de combat) a affûté mon esprit combatif, que j'applique à tous les domaines de ma vie, et donc à l'informatique." },
      { icone: "🔍", titre: "Curiosité", texte: "J'aime apprendre par moi-même, aller au-delà des cours. Je me documente beaucoup (documentaires, vidéos) sur l'IA, la cybersécurité et les domaines liés à l'informatique." },
      { icone: "🧭", titre: "Autonomie", texte: "J'ai l'habitude de travailler seul pour approfondir ce que j'apprends, ce qui me donne l'occasion d'explorer de nouvelles notions par moi-même, en dehors des projets imposés." },
    ],

    // Soft skills (repris p.6 du PDF), illustrés par des exemples du parcours SAÉ
    softskills: [
      { titre: "Capacité d'adaptation", texte: "Lors d'un projet encadré, j'ai dû travailler avec une technologie que je ne maîtrisais pas. Plutôt que de rester bloqué, je me suis adapté : tutoriels, questions aux camarades. Cela m'a permis de contribuer pleinement." },
      { titre: "Sens de l'analyse", texte: "J'aime décomposer un problème pour trouver une solution efficace. Sur un TP d'optimisation de base de données, j'ai identifié que la lenteur venait d'une mauvaise structuration des requêtes et proposé une restructuration plus performante." },
      { titre: "Communication claire", texte: "À l'oral comme à l'écrit, j'explique mes idées simplement, même sur des sujets techniques. Lors d'un exposé sur les systèmes de fichiers, j'ai reformulé des concepts difficiles pour que tout le groupe comprenne." },
    ],

    // Engagements (bénévolat / assos), ✏️ À COMPLÉTER avec tes détails
    engagements: [
      { titre: "Bénévolat à la mosquée", texte: "À compléter" },
      { titre: "Vie associative", texte: "À compléter" },
    ],

    // Évolution BUT1 → BUT2 (fil conducteur de progression)
    evolution: [
      { periode: "BUT1", titre: "Les fondations", texte: "Découverte de la programmation (<strong>Java</strong>, <strong>Python</strong>), des bases de données, de l'administration système et du travail en équipe. Premières SAÉ structurantes." },
      { periode: "BUT2", titre: "L'approfondissement & le stage", texte: "Des projets plus complexes et une vraie montée en <strong>autonomie</strong>, couronnés par un stage de 8 semaines à la DSI d'ICF Habitat (groupe SNCF) en administration système & réseau : cartographie du SI (projet <strong>Mercator</strong>), automatisation <strong>PowerShell</strong>, réseau, et découverte de l'<strong>IA</strong> d'entreprise." },
      { periode: "Cap", titre: "Vers l'<strong>alternance</strong> & l'ingénierie", texte: "Objectif : une <strong>alternance</strong> de qualité, puis une école d'ingénieur ou un master orienté <strong>IA</strong> / data science." },
    ],
  },

  /* --------------------------------------------------------- COMPÉTENCES BUT
     Les 6 compétences du référentiel BUT Informatique.
     niveauBut1 / niveauBut2 : 0 → 100 (ajuste selon ton ressenti).
     preuves : identifiants des SAÉ qui démontrent la compétence.
  -------------------------------------------------------------------------- */
  competences: [
    {
      id: "realiser", num: "01", titre: "Réaliser",
      sousTitre: "Développer une application informatique",
      desc: "Concevoir et développer des applications en utilisant des langages comme <strong>Python</strong> ou <strong>Java</strong>, de la conception à l'implémentation.",
      detail: "Je suis capable de mener une activité de développement d'applications. J'ai réalisé en binôme un jeu d'échecs en <strong>Java</strong> dans un projet tutoré, ainsi que divers mini-jeux en <strong>JavaScript</strong>. Ces travaux m'ont permis de percevoir toutes les étapes d'un projet logiciel, de la conception à l'implémentation.",
      niveauBut1: 55, niveauBut2: 80,
      pistesAmelioration: "Il me reste à fiabiliser ma façon de coder : couverture de tests systématique, design patterns et architecture en couches, sur des applications plus volumineuses et développées en équipe.",
      preuves: ["s3-01", "s2-01", "s1-02"],
    },
    {
      id: "optimiser", num: "02", titre: "Optimiser",
      sousTitre: "Optimiser des applications",
      desc: "Rendre un code plus compréhensible, plus performant et plus simple à maintenir.",
      detail: "J'ai appris à optimiser des applications : restructuration des boucles, minimisation des calculs superflus, gain réel de performance. J'ai aussi porté une attention accrue à la lisibilité (docstrings) et à la couverture de tests unitaires.",
      niveauBut1: 45, niveauBut2: 70,
      pistesAmelioration: "Passer d'une optimisation « au cas par cas » à une démarche mesurée : profiling, analyse de complexité, comparaison chiffrée des approches et tests de performance automatisés.",
      preuves: ["s1-02"],
    },
    {
      id: "administrer", num: "03", titre: "Administrer",
      sousTitre: "Administrer des systèmes informatiques communicants",
      desc: "Installer, configurer et sécuriser des systèmes et des réseaux.",
      detail: "J'ai appris à administrer des systèmes : configurer un réseau local simple, manipuler les droits d'accès sous <strong>Linux</strong>, comprendre le fonctionnement des serveurs. Ces bases me permettent de mieux comprendre les environnements dans lesquels mes applications seront utilisées.",
      niveauBut1: 38, niveauBut2: 62,
      pistesAmelioration: "Consolider la sécurité réseau (segmentation, pare-feu), l'automatisation (scripts / Ansible) et m'ouvrir à l'infrastructure cloud, que je n'ai fait qu'effleurer pendant mon stage.",
      preuves: ["s1-03", "s2-03"],
    },
    {
      id: "gerer", num: "04", titre: "Gérer les données",
      sousTitre: "Gérer des données de l'information",
      desc: "Modéliser et exploiter des bases de données relationnelles avec <strong>SQL</strong>.",
      detail: "Je sais gérer des données via la modélisation de bases relationnelles et l'utilisation de <strong>SQL</strong>. Sur un projet, j'ai conçu un <strong>schéma relationnel</strong> complet pour un réseau social fictif et écrit les requêtes associées.",
      niveauBut1: 50, niveauBut2: 76,
      pistesAmelioration: "Aller au-delà des schémas relationnels simples : optimisation et indexation des requêtes, procédures stockées, et découverte du NoSQL et de la donnée pour l'<strong>IA</strong>, l'un de mes objectifs.",
      preuves: ["s3-01", "s1-04", "s2-04"],
    },
    {
      id: "conduire", num: "05", titre: "Conduire un projet",
      sousTitre: "Conduire un projet",
      desc: "Analyser les besoins, planifier, répartir les rôles et suivre l'avancement.",
      detail: "J'ai été formé à la conduite de projet : analyse des besoins, planification, répartition des tâches, suivi d'avancement. J'ai découvert le rôle de chef de projet et des outils comme les diagrammes de <strong>Gantt</strong> et les tableaux de suivi, en intégrant l'importance d'objectifs clairs et mesurables.",
      niveauBut1: 50, niveauBut2: 73,
      pistesAmelioration: "M'exercer aux outils professionnels (Jira, Trello) sur des projets plus longs et progresser sur l'estimation des charges et la gestion des risques, un point où une SAÉ m'a montré mes limites.",
      preuves: ["s2-05", "s1-05"],
    },
    {
      id: "collaborer", num: "06", titre: "Collaborer",
      sousTitre: "Collaborer au sein d'une équipe informatique",
      desc: "Communiquer, écouter, s'adapter et tenir sa place dans un travail collectif.",
      detail: "La majorité des projets en IUT se font en binôme ou en petit groupe. J'ai compris l'intérêt de communiquer, d'écouter, de s'adapter et de tenir sa place. Cette capacité à collaborer est fondamentale dans les métiers de l'informatique, notamment dans la <strong>santé</strong>.",
      niveauBut1: 60, niveauBut2: 84,
      pistesAmelioration: "Renforcer ma maîtrise de <strong>Git</strong> en équipe (branches, revues de code, résolution de conflits) et prendre plus souvent un rôle moteur de coordination, au-delà de la simple exécution.",
      preuves: ["s3-01", "s2-06"],
    },
  ],

  /* ------------------------------------------------------- TECHNOS & OUTILS
     Compétences techniques concrètes. niveau : 1 (notions) → 3 (avancé).
     experiences : où je l'ai utilisée (liens vers SAÉ / stage / ce site).
     preuves : liens externes (dépôt GitHub, fichier…), « # » = à compléter.
  -------------------------------------------------------------------------- */
  technos: [
    //, Langages, 
    { id: "python", nom: "<strong>Python</strong>", categorie: "Langages", niveau: 3,
      resume: "Scripts d'automatisation et d'importation de données, <strong>API</strong> back-end.",
      experiences: [{ label: "Stage : projet Mercator", href: "#/stage" }, { label: "SAÉ S1.02", href: "#/sae/s1-02" }],
      preuves: [{ titre: "Dépôt GitHub", type: "GitHub", url: "#" }] },
    { id: "java", nom: "<strong>Java</strong>", categorie: "Langages", niveau: 2,
      resume: "Programmation orientée objet, conception d'une application complète.",
      experiences: [{ label: "SAÉ S2.01", href: "#/sae/s2-01" }],
      preuves: [{ titre: "Code du projet", type: "GitHub", url: "#" }] },
    { id: "javascript", nom: "<strong>JavaScript</strong>", categorie: "Langages", niveau: 2,
      resume: "Interactivité web et mini-jeux ; ce portfolio est en <strong>JavaScript</strong> pur.",
      experiences: [{ label: "Ce portfolio", href: "#/accueil" }, { label: "SAÉ S2.01", href: "#/sae/s2-01" }], preuves: [] },
    { id: "csharp", nom: "<strong>C#</strong>", categorie: "Langages", niveau: 1,
      resume: "Découverte du back-end du portail DSI (parcours <strong>Microsoft Learn</strong>).",
      experiences: [{ label: "Stage : équipe dev", href: "#/stage" }], preuves: [] },
    { id: "sql", nom: "<strong>SQL</strong>", categorie: "Langages", niveau: 2,
      resume: "Modélisation relationnelle et requêtes sur des bases de données.",
      experiences: [{ label: "SAÉ S1.04", href: "#/sae/s1-04" }], preuves: [] },
    { id: "powershell", nom: "<strong>PowerShell</strong>", categorie: "Langages", niveau: 2,
      resume: "Automatisation système : audit/nettoyage <strong>SPN</strong>, intégration à <strong>VTOM</strong>.",
      experiences: [{ label: "Stage : projet SPN", href: "#/stage" }], preuves: [] },

    //, Web & frameworks, 
    { id: "htmlcss", nom: "HTML / CSS", categorie: "Web & frameworks", niveau: 3,
      resume: "Intégration responsive et charte graphique cohérente.",
      experiences: [{ label: "Ce portfolio", href: "#/accueil" }], preuves: [] },
    { id: "flask", nom: "<strong>Flask</strong>", categorie: "Web & frameworks", niveau: 2,
      resume: "Conception d'une <strong>API</strong> REST exposant des scripts <strong>Python</strong>.",
      experiences: [{ label: "Stage : Mercator", href: "#/stage" }], preuves: [] },
    { id: "angular", nom: "<strong>Angular</strong>", categorie: "Web & frameworks", niveau: 1,
      resume: "Lecture et compréhension d'un front-end professionnel.",
      experiences: [{ label: "Stage : portail DSI", href: "#/stage" }], preuves: [] },

    //, Systèmes & réseau, 
    { id: "linux", nom: "<strong>Linux</strong>", categorie: "Systèmes & réseau", niveau: 2,
      resume: "Ligne de commande, droits, paquets, administration de serveurs.",
      experiences: [{ label: "SAÉ S1.03", href: "#/sae/s1-03" }, { label: "Stage", href: "#/stage" }], preuves: [] },
    { id: "reseau", nom: "Réseau & switching", categorie: "Systèmes & réseau", niveau: 2,
      resume: "Configuration de switches, boucles réseau et protocole <strong>Spanning Tree</strong>.",
      experiences: [{ label: "Stage : travaux réseau", href: "#/stage" }], preuves: [] },
    { id: "ad", nom: "<strong>Active Directory</strong>", categorie: "Systèmes & réseau", niveau: 2,
      resume: "Requêtes annuaire, gestion DNS/<strong>SPN</strong>, authentification <strong>Kerberos</strong>.",
      experiences: [{ label: "Stage : projet SPN", href: "#/stage" }], preuves: [] },
    { id: "virtu", nom: "Virtualisation", categorie: "Systèmes & réseau", niveau: 1,
      resume: "Machines virtuelles (<strong>VMware</strong>), sauvegardes (<strong>Veeam</strong>), supervision (<strong>Zabbix</strong>).",
      experiences: [{ label: "Stage", href: "#/stage" }], preuves: [] },

    //, Outils, 
    { id: "git", nom: "<strong>Git</strong>", categorie: "Outils", niveau: 2,
      resume: "Versioning et collaboration sur des projets de groupe.",
      experiences: [{ label: "SAÉ S2.06", href: "#/sae/s2-06" }], preuves: [] },
    { id: "putty", nom: "<strong>PuTTY</strong> / <strong>SFTP</strong>", categorie: "Outils", niveau: 2,
      resume: "Connexion et administration de serveurs à distance.",
      experiences: [{ label: "Stage : serveur Mercator", href: "#/stage" }], preuves: [] },
    { id: "vscode", nom: "VS Code / Visual Studio", categorie: "Outils", niveau: 2,
      resume: "Environnements de développement au quotidien.",
      experiences: [{ label: "Ce portfolio", href: "#/accueil" }, { label: "Stage", href: "#/stage" }], preuves: [] },

    //, Conception & design, 
    { id: "canva", nom: "Canva", categorie: "Conception & design", niveau: 3,
      resume: "Supports visuels et de présentation (dont mon portfolio de BUT1).",
      experiences: [{ label: "Supports & présentations", href: "#/parcours" }],
      preuves: [{ titre: "Portfolio BUT1 (PDF)", type: "PDF", url: "#" }] },
    { id: "gantt", nom: "Gestion de projet", categorie: "Conception & design", niveau: 2,
      resume: "Planification, diagrammes de <strong>Gantt</strong> et tableaux de suivi.",
      experiences: [{ label: "SAÉ S2.05", href: "#/sae/s2-05" }], preuves: [] },
  ],

  /* ---------------------------------------------------------------- SAÉ
     CATALOGUE. Mets `important: true` pour les SAÉ « phares » (analyse complète).
     type : "Équipe" ou "Solo".
     niveaux : jauges avant/après spécifiques à la SAÉ (compétence ciblée).
     preuves : { titre, type, url }, remplace url par tes liens / fichiers.
  -------------------------------------------------------------------------- */
  saes: [

    /* ===== SAÉ PHARES (déjà détaillées depuis ton PDF BUT1) ===== */
    {
      id: "s2-01", code: "SAÉ S2.01", important: true,
      titre: "Développement d'une application",
      semestre: "S2", annee: "BUT1", type: "Équipe",
      competences: ["realiser", "collaborer"],
      resume: "Développement d'une application en <strong>Java</strong> à partir d'un cahier des charges fonctionnel et technique exigeant.",
      objectif: "Développer une application complète en <strong>Java</strong> en respectant un cahier des charges fonctionnel et technique annoncé comme complexe.",
      mission: "Concevoir et implémenter l'application : modélisation des classes, structuration des packages, séparation entre logique métier et interface.",
      organisation: "Travail en binôme avec Rayan Kebbiche : relecture de code croisée et conventions de nommage rigoureuses.",
      role: "Conception objet, implémentation de modules, mise en place de tests.",
      difficultes: "Avant ce projet, mes bases en programmation orientée objet étaient peu étendues et je n'étais pas familiarisé avec la conception ni la gestion d'un projet de développement complet.",
      solution: "J'ai pris conscience de la nécessité d'une organisation claire, modulaire et réutilisable du code. Une séance de relecture en binôme m'a révélé l'importance d'un code clair et bien commenté pour le travail collaboratif, et la valeur des tests.",
      competencesAcquises: [
        "Conception orientée objet (classes, packages, conventions)",
        "Séparation logique métier / interface dès la conception",
        "Relecture de code et travail collaboratif",
        "Tests et fiabilisation du code",
      ],
      avant: "Bases limitées en POO, aucune expérience de la conception ni d'un projet de dev complet.",
      apres: "Capable de structurer une application modulaire, de séparer les responsabilités et de collaborer sur une base de code commune.",
      perspectives: "Avec le recul, je mettrais en place une couverture de tests complète dès le départ et des design patterns adaptés. Il me reste à progresser sur des architectures plus ambitieuses et sur les outils de qualité de code (linters, intégration continue).",
      niveaux: [
        { comp: "Réaliser", but1: 45, but2: 78 },
        { comp: "Collaborer", but1: 55, but2: 80 },
      ],
      preuves: [
        { titre: "Code source du projet", type: "GitHub", url: "#" },     // ✏️ lien à ajouter
        { titre: "Cahier des charges", type: "PDF", url: "#" },           // ✏️
        { titre: "Captures de l'application", type: "Image", url: "#" },  // ✏️
      ],
    },
    {
      id: "s2-06", code: "SAÉ S2.06", important: true,
      titre: "Organisation d'un travail d'équipe",
      semestre: "S2", annee: "BUT1", type: "Équipe",
      competences: ["collaborer", "conduire"],
      resume: "Première immersion profonde dans le travail collaboratif : organisation et répartition des tâches d'un projet de recherche d'<strong>alternance</strong>.",
      objectif: "Organiser et répartir les tâches d'un projet de recherche d'<strong>alternance</strong>, du choix des outils jusqu'au respect des délais de dépôt des livrables.",
      mission: "Coordonner le travail d'équipe via des outils de gestion (Discord, Google Docs/Drive) et assurer le suivi des livrables.",
      organisation: "Travail de groupe sur la durée, avec outils collaboratifs et points réguliers.",
      role: "Coordination, suivi des engagements, médiation lors d'un conflit d'agenda.",
      difficultes: "J'avais déjà travaillé en groupe, mais sans structure ni méthode d'articulation claire. Un conflit d'agenda entre plusieurs membres a menacé l'avancement.",
      solution: "J'ai proposé une nouvelle répartition plus équitable des tâches et initié un récapitulatif pour recadrer le groupe. J'ai compris que la réussite repose surtout sur la coordination, la communication et l'engagement collectif.",
      competencesAcquises: [
        "Organisation et répartition des tâches",
        "Communication et rendu intelligible du travail",
        "Gestion de conflit et médiation",
        "Respect des engagements et des délais",
      ],
      avant: "Travail de groupe sans réelle structure ni méthode.",
      apres: "Capable de structurer un travail collectif, de coordonner une équipe et de désamorcer un conflit d'organisation.",
      perspectives: "Je gagnerais à formaliser l'organisation dès le lancement (rôles, jalons, outil de suivi unique) plutôt qu'à réagir aux problèmes, et à m'exercer aux outils professionnels (Jira / Trello) en osant prendre plus tôt un rôle de coordination.",
      niveaux: [
        { comp: "Collaborer", but1: 50, but2: 82 },
        { comp: "Conduire", but1: 40, but2: 68 },
      ],
      preuves: [
        { titre: "Livrables du projet", type: "Drive", url: "#" },        // ✏️
        { titre: "Planning / répartition", type: "PDF", url: "#" },       // ✏️
      ],
    },
    {
      id: "s1-03", code: "SAÉ S1.03", important: true,
      titre: "Installation d'un poste de travail",
      semestre: "S1", annee: "BUT1", type: "Solo",
      competences: ["administrer"],
      resume: "Installation et configuration d'un poste de développement sous <strong>Linux</strong> avec tous les outils nécessaires pour coder dans un cadre professionnel.",
      objectif: "Installer et configurer un poste de travail sous <strong>Linux</strong>, prêt pour le développement professionnel.",
      mission: "Mise en place d'un environnement stable et sécurisé : ligne de commande, permissions, paquets, personnalisation du terminal, <strong>machine virtuelle</strong>.",
      organisation: "Travail individuel, en <strong>autonomie</strong>, dès le premier semestre.",
      role: "Administration complète du poste, du système aux outils.",
      difficultes: "Je n'avais jamais utilisé de système <strong>Unix</strong> et mon expérience de l'installation logicielle était limitée. Un problème de dépendances bloquait une installation.",
      solution: "J'ai appris la ligne de commande, la gestion des permissions et des paquets. J'ai configuré une <strong>machine virtuelle</strong> et résolu seul le problème de dépendances, une réussite technique mais aussi symbolique de la confiance acquise.",
      competencesAcquises: [
        "Ligne de commande <strong>Linux</strong> / <strong>Unix</strong>",
        "Gestion des permissions et des paquets",
        "Configuration d'une <strong>machine virtuelle</strong>",
        "Résolution autonome de problèmes système",
      ],
      avant: "Aucune expérience d'<strong>Unix</strong>, installation logicielle limitée.",
      apres: "Capable d'installer et configurer en <strong>autonomie</strong> un environnement de développement <strong>Linux</strong> complet.",
      perspectives: "Je veux automatiser ce type d'installation (scripts / Ansible) au lieu de tout configurer à la main, et approfondir la sécurisation du poste. Mon stage m'a montré l'écart avec un vrai environnement de production, c'est la direction que je souhaite creuser.",
      niveaux: [
        { comp: "Administrer", but1: 25, but2: 60 },
      ],
      preuves: [
        { titre: "Compte-rendu d'installation", type: "PDF", url: "#" },  // ✏️
        { titre: "Configuration du terminal", type: "Image", url: "#" },  // ✏️
      ],
    },
    {
      id: "s2-05", code: "SAÉ S2.05", important: true,
      titre: "Gestion d'un projet",
      semestre: "S2", annee: "BUT1", type: "Équipe",
      competences: ["conduire"],
      resume: "Formation à la compétence « conduire un projet » : analyse des besoins, planification, répartition des tâches et suivi d'avancement.",
      objectif: "Organiser l'ensemble des étapes d'un projet : analyse des besoins, planification, répartition des tâches, suivi d'avancement.",
      mission: "Structurer le projet avec des outils de gestion (<strong>Gantt</strong>, tableaux de suivi, tableaux collaboratifs) et se fixer des objectifs clairs et mesurables.",
      organisation: "Travail en binôme.",
      role: "Participation à la planification et au pilotage ; décision de réorganisation face au retard.",
      difficultes: "Nous avions déjà rencontré la notion de projet sans en connaître les outils. Après avoir pris conscience d'un retard très important, nous avons dû repartir de zéro sur le planning.",
      solution: "Décision difficile mais prise à deux : révision complète du planning et réorganisation générale. Cela m'a fait comprendre le rôle de chef de projet (anticiper, répartir, gérer l'imprévu, coordonner).",
      competencesAcquises: [
        "Analyse des besoins et planification",
        "Diagrammes de <strong>Gantt</strong> et tableaux de suivi",
        "Objectifs clairs et mesurables",
        "Gestion de l'imprévu et replanification",
      ],
      avant: "Notion de projet connue, mais sans outils ni méthode de structuration.",
      apres: "Capable de planifier, suivre et réorganiser un projet, et de comprendre les responsabilités du chef de projet.",
      perspectives: "La principale leçon, le retard, me pousse à progresser sur l'estimation des charges et l'anticipation des risques, avec un suivi plus régulier et chiffré (jalons, vélocité) sur des projets plus longs.",
      niveaux: [
        { comp: "Conduire", but1: 35, but2: 72 },
      ],
      preuves: [
        { titre: "Diagramme de Gantt", type: "PDF", url: "#" },           // ✏️
        { titre: "Tableau de suivi", type: "Tableur", url: "#" },         // ✏️
      ],
    },

    /* ===== ARCHIVE BUT1 (à compléter, garde la trace de TOUTES les SAÉ) ===== */
    { id: "s1-01", code: "SAÉ S1.01", important: false, titre: "Implémentation d'un besoin client",
      semestre: "S1", annee: "BUT1", type: "Solo", competences: ["realiser"],
      resume: "À compléter", todo: true, preuves: [] },
    { id: "s1-02", code: "SAÉ S1.02", important: false, titre: "Comparaison d'approches algorithmiques",
      semestre: "S1", annee: "BUT1", type: "Solo", competences: ["realiser", "optimiser"],
      resume: "À compléter", todo: true, preuves: [] },
    {
      id: "s1-04", code: "SAÉ S1.04", important: false,
      titre: "Création d'une base de données",
      semestre: "S1", annee: "BUT1", type: "Solo", competences: ["gerer"],
      resume: "Modélisation et création d'une base de données relationnelle (catastrophes climatiques), du modèle relationnel au script <strong>SQL</strong> et au peuplement depuis un fichier plat.",
      objectif: "Modéliser une base de données relationnelle, en comprendre le fonctionnement, écrire le script <strong>SQL</strong> de création des tables et la peupler à partir d'un fichier plat.",
      role: "Réalisée en <strong>autonomie</strong> : modélisation avec l'AGL <strong>SQL Power Architect</strong>, écriture du script <strong>SQL</strong> (des tables les plus indépendantes aux plus dépendantes : régions, pays, catastrophes climatiques) et peuplement des tables.",
      competencesAcquises: [
        "Modélisation d'un <strong>schéma relationnel</strong> (clés primaires / étrangères)",
        "Écriture de scripts <strong>SQL</strong> de création de tables",
        "Peuplement d'une base depuis un fichier plat",
        "Prise en main d'un AGL (<strong>SQL Power Architect</strong>)",
      ],
      niveaux: [{ comp: "Gérer les données", but1: 25, but2: 50 }],
      preuves: [{ titre: "Rapport SAÉ S1.04 (PDF)", type: "PDF", url: "#" }],
    },
    {
      id: "s1-05", code: "SAÉ S1.05", important: false,
      titre: "Recueil de besoins",
      semestre: "S1", annee: "BUT1", type: "Équipe", competences: ["conduire"],
      resume: "Étude des besoins sur la vie étudiante à l'IUT, en équipe de 8 : questionnaire, entretiens, personas et propositions d'amélioration chiffrées.",
      objectif: "Recueillir et analyser les besoins des étudiants concernant la vie étudiante et les infrastructures de l'IUT, puis proposer des améliorations chiffrées.",
      role: "Au sein d'une équipe de 8 : conception de questions, participation au formulaire collectif diffusé à des étudiants de plusieurs BUT, conduite d'entretiens et synthèse.",
      competencesAcquises: [
        "Recueil et analyse de besoins (questionnaire, entretiens)",
        "Construction de personas",
        "Synthèse et propositions d'amélioration",
        "Travail en grande équipe",
      ],
      niveaux: [{ comp: "Conduire un projet", but1: 25, but2: 45 }],
      preuves: [{ titre: "Rapport SAÉ S1.05 (PDF)", type: "PDF", url: "#" }],
    },
    {
      id: "s1-06", code: "SAÉ S1.06", important: false,
      titre: "Découverte de l'environnement économique",
      semestre: "S1", annee: "BUT1", type: "Solo", competences: [],
      resume: "Analyse de la stratégie environnementale d'Amazon (neutralité carbone, The Climate Pledge, énergies renouvelables) pour comprendre le contexte économique et sociétal du numérique.",
      objectif: "Étudier la stratégie environnementale et les enjeux de développement durable d'une grande entreprise du numérique, et savoir restituer cette analyse.",
      role: "Recherche documentaire et synthèse sur les initiatives écologiques d'Amazon (neutralité carbone, Shipment Zero, investissements dans les énergies renouvelables).",
      competencesAcquises: [
        "Recherche documentaire et esprit critique",
        "Compréhension des enjeux économiques et environnementaux du numérique",
        "Restitution et synthèse écrite",
      ],
      preuves: [{ titre: "Dossier SAÉ S1.06 (PDF)", type: "PDF", url: "#" }],
    },
    { id: "s2-02", code: "SAÉ S2.02", important: false, titre: "Exploration algorithmique d'un problème",
      semestre: "S2", annee: "BUT1", type: "Solo", competences: ["optimiser"],
      resume: "À compléter", todo: true, preuves: [] },
    {
      id: "s2-03", code: "SAÉ S2.03", important: false,
      titre: "Installation de services réseau",
      semestre: "S2", annee: "BUT1", type: "Solo", competences: ["administrer"],
      resume: "Installation et configuration d'un serveur web sous <strong>Linux</strong> : <strong>Apache</strong>, <strong>MariaDB</strong> et <strong>PHP</strong>, comptes utilisateurs, base de données et pages personnelles (userdir).",
      objectif: "Mettre en place un environnement serveur fonctionnel sous <strong>Linux</strong> et configurer les services réseau associés (web et base de données).",
      role: "Réalisée en <strong>autonomie</strong> : création d'un utilisateur, installation et configuration d'<strong>Apache</strong>, <strong>MariaDB</strong> et <strong>PHP</strong>, création de la base et gestion des droits, mise en service des pages personnelles (mod_userdir) et tests HTML/<strong>PHP</strong>.",
      competencesAcquises: [
        "Administration <strong>Linux</strong> en ligne de commande",
        "Installation et configuration d'un serveur web (<strong>Apache</strong>)",
        "Mise en place d'un SGBD (<strong>MariaDB</strong>) et gestion des droits",
        "Configuration de <strong>PHP</strong> et des pages personnelles (userdir)",
      ],
      niveaux: [{ comp: "Administrer", but1: 25, but2: 50 }],
      preuves: [{ titre: "Compte-rendu SAÉ S2.03", type: "DOCX", url: "#" }],
    },
    {
      id: "s2-04", code: "SAÉ S2.04", important: false,
      titre: "Exploitation d'une base de données",
      semestre: "S2", annee: "BUT1", type: "Solo", competences: ["gerer"],
      resume: "Exploitation et analyse d'une base de données de réseau social : requêtes <strong>SQL</strong> et visualisations pour dégager des tendances (corrélation engagement / vues, effet de seuil).",
      objectif: "Exploiter une base de données existante (activité d'utilisateurs et publications) par des requêtes et des visualisations afin d'en tirer des analyses pertinentes.",
      role: "Réalisée en <strong>autonomie</strong> : requêtes <strong>SQL</strong>, visualisations et interprétation statistique (corrélation de Pearson ≈ 0,95 entre engagement et vues, mise en évidence d'un effet de seuil).",
      competencesAcquises: [
        "Requêtes <strong>SQL</strong> d'exploitation",
        "Visualisation et interprétation de données",
        "Analyse statistique (corrélation)",
        "Restitution d'analyses",
      ],
      niveaux: [{ comp: "Gérer les données", but1: 40, but2: 60 }],
      preuves: [{ titre: "Rapport SAÉ S2.04 (PDF)", type: "PDF", url: "#" }],
    },

    /* ===== BUT2 (à créer au fil de l'année) ===== */
    {
      id: "s3-01", code: "SAÉ S3.01", important: true,
      titre: "Développement d'une application web : Suivi de colis",
      semestre: "S3", annee: "BUT2", type: "Équipe",
      competences: ["realiser", "gerer", "collaborer"],
      resume: "Application web de suivi des colis pour le service de reprographie de l'IUT : traçabilité complète du bon de commande à la livraison, développée en équipe de 5.",
      objectif: "Répondre à un besoin réel de l'IUT de Villetaneuse : le service de reprographie reçoit des colis mal identifiés (étiquettes des transporteurs sans département ni destinataire), ce qui provoque des retards de livraison et de paiement des fournisseurs. L'application doit assurer une traçabilité complète, du bon de commande jusqu'à la livraison finale.",
      mission: "Concevoir une application web multi-rôles (demandeur, éditeur, responsable colis, administrateur) en architecture <strong>MVC</strong> + couche Service, avec authentification <strong>CAS</strong> universitaire et déploiement <strong>Docker</strong>.",
      organisation: "Travail collaboratif en équipe de 5 (groupe JupiterA), pour un volume d'environ 145 h : répartition des tâches par compétences (backend, frontend, BDD, UML, documentation), réunions régulières, validation collective des choix techniques et ajustements en cours de route.",
      role: "J'ai pris en charge la couche données et métier : conception du <strong>Modèle Entité-Association</strong> (<strong>MEA</strong>) et du schéma, développement des classes <strong>DAO</strong> (CommandeDAO, ColisDAO, BonLivraisonDAO, Historique…) avec Adel, de la couche Service, et du lien entre la couche métier et les contrôleurs, soit 33 h, environ 23 % du projet.",
      difficultes: "Les risques majeurs étaient une mauvaise conception de la base de données (qui aurait imposé une refonte totale), l'intégration de l'authentification <strong>CAS</strong>, la fiabilité des données et la gestion des anomalies (colis sans bon de commande, données incohérentes).",
      solution: "J'ai sécurisé la conception en modélisant rigoureusement le <strong>MEA</strong> en amont et en structurant des <strong>DAO</strong> à requêtes préparées (protection contre les injections <strong>SQL</strong>). L'architecture <strong>MVC</strong> + couche Service a permis d'isoler les responsabilités et de répartir proprement le travail entre les 5 membres, rendant l'application maintenable malgré la taille de l'équipe.",
      competencesAcquises: [
        "Conception d'un modèle de données relationnel (<strong>MEA</strong> → schéma <strong>MySQL</strong>)",
        "Développement de la couche d'accès aux données (<strong>DAO</strong>) en <strong>Python</strong>",
        "Architecture <strong>MVC</strong> + couche Service (séparation des responsabilités)",
        "Travail collaboratif à 5 avec <strong>Git</strong>/<strong>GitHub</strong> et suivi de projet",
        "Rédaction d'un cahier des charges et de user stories",
      ],
      avant: "Je n'avais jamais conçu l'architecture de données d'une application web complète, ni travaillé en équipe d'une telle taille sur un projet aussi structuré.",
      apres: "Capable de concevoir un modèle relationnel, d'implémenter une couche <strong>DAO</strong>/Service sécurisée et de m'intégrer dans une architecture <strong>MVC</strong> partagée à plusieurs.",
      niveaux: [
        { comp: "Réaliser", but1: 55, but2: 80 },
        { comp: "Gérer les données", but1: 50, but2: 78 },
        { comp: "Collaborer", but1: 70, but2: 86 },
      ],
      perspectives: "Il me reste à renforcer les tests automatisés sur la couche <strong>DAO</strong>/Service et à approfondir le déploiement (<strong>Docker</strong>, CI/CD) au-delà du local, ainsi que des fonctionnalités avancées comme l'<strong>OCR</strong> des étiquettes.",
      preuves: [
        { titre: "Dépôt GitHub du projet", type: "GitHub", url: "https://github.com/Slaiyyerr/SAE_colis/tree/main" },
        { titre: "Cahier des charges", type: "PDF", url: "#" },
        { titre: "Maquettes & diagrammes UML", type: "PDF", url: "#" },
      ],
    },
    { id: "s3-04", code: "SAÉ S3.04", important: false, titre: "Bases de données avancées",
      semestre: "S3", annee: "BUT2", type: "Solo", competences: ["gerer", "optimiser"],
      resume: "À compléter", todo: true, preuves: [] },
  ],

  /* ---------------------------------------------------------------- STAGE BUT2
     Rempli à partir du rapport de stage (synthèse, PAS une recopie).
     ⚠️ Mes tâches et mon apport personnel sont volontairement mis en avant.
  -------------------------------------------------------------------------- */
  stage: {
    entreprise: "ICF Habitat (groupe SNCF)",
    secteur: "Systèmes d'Information, Exploitation, réseau & sécurité (DSI)",
    periode: "26 janvier → 20 mars 2026 · 8 semaines",
    poste: "Stagiaire Exploitation Informatique",
    intro: "ICF Habitat, filiale historique du groupe SNCF spécialisée dans le logement social (plus de 1 500 collaborateurs, siège au 24 rue de Paradis à Paris), m'a accueilli durant 8 semaines au sein de sa Direction des Systèmes d'Information. J'étais intégré à l'équipe Administration Réseau & Exploitation (8 personnes), encadré par Laurent Loyseau, responsable exploitation, réseau et sécurité.",

    missions: [
      "Projet principal, <strong>Mercator</strong> (cartographie du SI) : j'ai installé de zéro cet outil open-source sur un serveur virtuel dédié (CRT01, en SSH via <strong>PuTTY</strong>/<strong>SFTP</strong>), puis développé les scripts qui l'alimentent automatiquement avec les données réelles de l'entreprise (machines virtuelles, serveurs physiques, bases de données, applications <strong>IIS</strong>, sauvegardes <strong>Veeam</strong>).",
      "Mon apport clé sur <strong>Mercator</strong> : face à l'incompatibilité entre mes scripts <strong>Python</strong> et <strong>VTOM</strong> (l'ordonnanceur de l'entreprise, qui ne pilote que <strong>PowerShell</strong>), j'ai conçu une <strong>API</strong> <strong>Flask</strong> exposant ma logique <strong>Python</strong> en HTTP, la solution qui a débloqué le projet, puis automatisé la collecte directement depuis l'<strong>Active Directory</strong>, supprimant toute saisie manuelle.",
      "Projet <strong>SPN</strong> : j'ai automatisé la gestion des Service Principal Names dans l'<strong>Active Directory</strong> via deux scripts <strong>PowerShell</strong> (<strong>SPN</strong>-Audit-Auto.ps1 et <strong>SPN</strong>-Cleanup.ps1) mis en production dans le planificateur de tâches. Résultat concret : vérification passée de 2 h/mois manuelles à 5 min/jour automatisées, et taux de correction porté d'environ 60 % à près de 100 %.",
      "Réseau : mise en place de switches de A à Z (câblage, drivers, configuration en ligne de commande via <strong>PuTTY</strong>/Extreme), création volontaire d'une boucle réseau pour en observer les effets (tempête de broadcast), puis mise en place du protocole <strong>Spanning Tree</strong>.",
      "Exploitation & support : masterisation de postes (<strong>MECM</strong>, découverte d'<strong>Autopilot</strong>), gestion des expéditions de matériel vers les agences (tickets RITM, Chronopost) et résolution d'incidents utilisateurs via <strong>ServiceNow</strong> (diagnostic matériel, remplacement d'écrans, relation avec des utilisateurs non techniques).",
      "Immersion en équipe développement : apprentissage du <strong>C#</strong> (<strong>Microsoft Learn</strong>) et premiers tests sur le portail DSI (back-end <strong>C#</strong>, front-end <strong>Angular</strong>, <strong>Azure DevOps</strong>, <strong>API</strong> REST / <strong>Swagger</strong>).",
    ],
    decouvertes: [
      "Tout un écosystème d'outils professionnels : <strong>ServiceNow</strong> (gestion des tickets & traçabilité), <strong>Zabbix</strong> (supervision réseau), <strong>Veeam</strong>/<strong>VMware</strong> (sauvegarde & virtualisation), <strong>VTOM</strong> (ordonnancement), <strong>MECM</strong>/<strong>Autopilot</strong> (déploiement de postes), <strong>Active Directory</strong> & <strong>Kerberos</strong>.",
      "<strong>GenIA</strong>, l'<strong>IA</strong> interne d'ICF Habitat, basée sur ChatGPT mais confinée au système d'information pour garantir la confidentialité des données : une découverte en lien direct avec mon appétence pour l'<strong>IA</strong>.",
      "La réalité physique de l'infrastructure (visite de la salle serveur : baies, switches, stockage) et la coexistence de technologies historiques (<strong>AS400</strong>) avec des outils très modernes.",
    ],
    cultureEntreprise: "ICF Habitat porte une vocation sociale historique (loger les cheminots, puis le logement social au sens large) et des valeurs de service public et de solidarité. Côté DSI, j'ai découvert une équipe à taille humaine où chacun a sa spécialité, rythmée par une « morning routine » quotidienne sur Teams (bilan, priorités, blocages) et portée par une vraie culture du partage de savoir : les questions y sont accueillies sans jugement et l'expertise se transmet de façon informelle, au fil de l'eau. Le travail est flexible et autonome (télétravail régulier, méthode « explore, teste, échoue, corrige »), ce qui m'a rapidement responsabilisé.",
    metier: "J'ai découvert le métier d'administrateur système & réseau / exploitation, et il m'a beaucoup plu : un métier où la technicité se mêle à la réflexion et où l'imprévu fait partie du quotidien. Ce stage a confirmé mon intérêt pour ce domaine, tout en m'ouvrant d'autres horizons, le développement applicatif (<strong>C#</strong>/<strong>Angular</strong>) et surtout l'<strong>IA</strong> appliquée à l'entreprise (<strong>GenIA</strong>), qui rejoint mon projet professionnel.",

    // 2 compétences du BUT mises en avant grâce au stage
    competencesStage: [
      { id: "administrer", commentaire: "Cœur du stage : installation et administration de serveurs (<strong>PuTTY</strong>/<strong>SFTP</strong>), <strong>Active Directory</strong>, supervision (<strong>Zabbix</strong>), configuration de switches et <strong>Spanning Tree</strong>, déploiement de postes, une vraie montée en compétence sur l'exploitation d'un SI à l'échelle de 1 500 collaborateurs." },
      { id: "realiser", commentaire: "J'ai développé de vrais outils : scripts d'importation <strong>Python</strong>, <strong>API</strong> REST avec <strong>Flask</strong>, scripts d'automatisation <strong>PowerShell</strong> (projet <strong>SPN</strong>) et premiers pas en <strong>C#</strong>/<strong>Angular</strong>, du développement concret, en conditions de production." },
    ],

    objectifs: {
      court: "Confirmer mon orientation vers l'administration système & réseau et décrocher une <strong>alternance</strong> de qualité pour la fin du BUT, dans un environnement aussi formateur que celui que j'ai connu chez ICF Habitat.",
      moyen: "Après le BUT, intégrer une école d'ingénieur ou un master orienté <strong>IA</strong> / data science, en gardant le lien avec l'infrastructure et les systèmes que j'ai appris à administrer.",
      long: "Devenir ingénieur en informatique dans l'<strong>IA</strong> ou la <strong>santé</strong>, sur des projets à impact concret (aide au diagnostic, systèmes intelligents), en m'appuyant sur la double culture développement + infrastructure acquise pendant ce stage.",
    },
  },

  /* ----------------------------------------------------- RAPPORT D'ÉTONNEMENT
     ✏️ À COMPLÉTER : ce qui t'a surpris (positivement ou non) pendant le stage.
  -------------------------------------------------------------------------- */
  rapportEtonnement: [
    { titre: "La confiance accordée", texte: "J'ai été surpris de l'<strong>autonomie</strong> confiée à un stagiaire : sur un projet d'envergure comme <strong>Mercator</strong>, on me présentait le besoin global puis on me laissait définir ma propre approche technique. Cette confiance m'a poussé à structurer ma démarche et à assumer mes choix." },
    { titre: "La technique ne suffit pas", texte: "Je pensais qu'un bon niveau technique suffisait. J'ai découvert que la <strong>rigueur</strong> de la traçabilité (tout documenter dans <strong>ServiceNow</strong>), la communication quotidienne (morning routine) et le partage de savoir comptent tout autant que la maîtrise d'un outil." },
    { titre: "Une <strong>IA</strong> d'entreprise confidentielle", texte: "Découvrir <strong>GenIA</strong>, une <strong>IA</strong> interne de type ChatGPT mais confinée au système d'information pour protéger les données sensibles, m'a marqué : c'est exactement le genre d'usage responsable de l'<strong>IA</strong> qui rejoint mon projet professionnel." },
    { titre: "Entre héritage et modernité", texte: "J'imaginais une grande DSI 100 % à la pointe. En réalité, des technologies historiques comme l'<strong>AS400</strong> (IBM) cohabitent avec des approches très modernes comme <strong>Autopilot</strong> (cloud) : un système d'information d'entreprise se construit dans la durée." },
  ],

  /* ------------------------------------------------------------------ CONTACT */
  contact: {
    intro: "Curieux, autonome et persévérant, je recherche une <strong>alternance</strong> pour la fin de mon BUT. N'hésitez pas à me contacter.",
    liens: [
      { label: "Email",    valeur: "rehan93babinks@gmail.com", url: "mailto:rehan93babinks@gmail.com", icone: "✉️" },
      { label: "GitHub",   valeur: "github.com/rehzn93", url: "https://github.com/rehzn93", icone: "⌨" },
      { label: "LinkedIn", valeur: "À compléter",         url: "#", icone: "in" },
    ],
  },
};
