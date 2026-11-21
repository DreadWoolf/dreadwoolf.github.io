/* ============================================================================
   PROJECTS — EDIT THIS FILE ONLY WHEN CHANGING YOUR PROJECT LIST
   ============================================================================
   Each object is one project. Projects appear in this exact order on
   projects.html. To choose the FOUR shown on index.html, set:

     featured: true    -> show on the homepage (select EXACTLY 4)
     featured: false   -> show only on projects.html

   `url`: link to an actual public project repository. Use "" for private or
   unpublished code (no dead link will be displayed).

   To add a new project: copy an object, update title/description/tags/url,
   and choose featured: true or false. No HTML changes are needed.
   ============================================================================ */

window.PORTFOLIO_PROJECTS = [
  {
    title: "MALLORN – Astronomical Classification",
    icon: "✦",
    featured: true,              // 1 of the four homepage projects
    description: "Classifying tidal disruption events from astronomical light curves using feature engineering, stacked ensembles and statistical evaluation.",
    tags: ["Machine Learning", "Python", "Ensemble Learning", "Astronomy"],
    url: "https://github.com/DreadWoolf/Mallorn-Classification"
  },
  {
    title: "Federated Learning Security",
    icon: "◈",
    featured: true,              // 2 of the four homepage projects
    description: "Evaluating label-flipping attacks against federated learning and comparing aggregation strategies under malicious clients.",
    tags: ["Python", "PyTorch", "Flower", "AI Security"],
    url: ""                     // Private: add its public URL later.
  },
  {
    title: "Spam Classification & Statistical Testing",
    icon: "⌁",
    featured: true,              // 3 of the four homepage projects
    description: "Comparing supervised classifiers on the Spambase dataset using cross-validation, F1 score, and Friedman/Nemenyi significance tests.",
    tags: ["Machine Learning", "Classification", "Statistics"],
    url: "https://github.com/DreadWoolf/Spam-classification"
  },
  {
    title: "scikit-learn Architecture Analysis",
    icon: "◇",
    featured: true,              // 4 of the four homepage projects
    description: "Analyzing scikit-learn's modular architecture, quality attributes, component boundaries, and interoperability with external data formats.",
    tags: ["Software Architecture", "scikit-learn", "Analysis"],
    url: ""                     // Add public repository link if available.
  },
  {
    title: "Pisces Trip Planner",
    icon: "✧",
    featured: false,
    description: "Designing a service-oriented trip-planning system with API integration, availability tactics and explicit architectural trade-offs.",
    tags: ["System Design", "API Integration", "Architecture"],
    url: ""
  },
  {
    title: "Wine Quality Classification",
    icon: "◌",
    featured: false,
    description: "Exploring machine-learning methods for classifying wine quality using physicochemical measurements and model evaluation.",
    tags: ["Python", "Classification", "Data Analysis"],
    url: "https://github.com/DreadWoolf/Wine-quality-classification"
  },
  {
    title: "COVID-19 Data Analysis — Europe",
    icon: "▦",
    featured: false,
    description: "Exploratory data analysis of European COVID-19 cases, vaccinations and hospital trends using visualization and statistical methods.",
    tags: ["Python", "Data Analysis", "Statistics"],
    url: "https://github.com/DreadWoolf/Covid19-data-analysis-EU"
  },
  {
    title: "Adversarial Machine Learning",
    icon: "⊙",
    featured: false,
    description: "Investigating how adversarial input perturbations influence model predictions and robustness.",
    tags: ["AI Security", "Adversarial ML", "Python"],
    url: ""
  }
];
