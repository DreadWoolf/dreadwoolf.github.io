/* ===================================================================
   RASMUS PORTFOLIO — CONTENT CONFIGURATION
   ===================================================================
   Edit THIS FILE when you change your profile, skills, or work experience.
   The project list and featured selections live in projects-data.js.
   
   1) PROFILE + ORBIT SPEEDS
   2) SKILL PLANETS
   3) INDUSTRIAL EXPERIENCE

   The full project list lives in projects-data.js.
   =================================================================== */

const PORTFOLIO = {
  // 1) PROFILE + ORBIT SPEEDS
  profileImage: "profile_img.jpg", // RE appears automatically if image is absent.
  orbitSeconds: { inner: 100, middle: 145, outer: 205 },

  // 2) SKILL PLANETS — the labels are in index.html; explanations go here.
  skillDescriptions: {
    "Python": "Building models, experiments and practical ML tools.",
    "PyTorch": "Training and evaluating deep learning models.",
    "Machine Learning": "From data and experiments to reliable predictions.",
    "AI Security": "Investigating adversarial attacks and model robustness.",
    "Digital Ethics": "Exploring privacy, responsible data collection, and ethical challenges in AI.",
    "Federated Learning": "Exploring distributed training and malicious-client attacks."
  },

  // 3) INDUSTRIAL EXPERIENCE — shown BELOW the academic experience.
  // Change role, period or description here. Periods are left unspecified until confirmed.
  industrialExperience: [
    {
      company: "Kongamek",
      role: "Industrial production & material handling",
      period: "PREVIOUS EMPLOYMENT",
      description: "Worked with powder coating, forklift operation and product assembly across varied industrial production tasks."
    },
    {
      company: "Nordisk Återvinning",
      role: "Refuse truck driving",
      period: "PREVIOUS EMPLOYMENT",
      description: "Drove a refuse collection truck (waste collection vehicle) in day-to-day waste collection work."
    }
  ]
};
