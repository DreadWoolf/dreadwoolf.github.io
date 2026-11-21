/* UI logic only. Projects are in projects-data.js; profile and skills are in portfolio-data.js. */
(() => {
  "use strict";
  const data = window.PORTFOLIO || (typeof PORTFOLIO !== "undefined" ? PORTFOLIO : null);
  if (!data) return;

  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // The optional profile photo replaces the RE fallback only if it loads.
  const profile = document.getElementById("profile-image");
  const initials = document.getElementById("profile-initials");
  if (profile && initials) {
    const photo = new Image();
    photo.onload = () => {
      profile.src = photo.src;
      profile.hidden = false;
      initials.hidden = true;
    };
    photo.onerror = () => { profile.hidden = true; initials.hidden = false; };
    photo.src = data.profileImage;
  }

  // Orbital speed. Each CSS animation receives the same speed as its partner.
  for (const [orbit, seconds] of Object.entries(data.orbitSeconds || {})) {
    document.querySelectorAll(`.planet-arm.orbit-${orbit}`).forEach(arm => {
      arm.style.setProperty("--duration", `${seconds}s`);
    });
  }

  const title = document.getElementById("skill-title");
  const description = document.getElementById("skill-description");
  if (title && description) {
    document.querySelectorAll(".planet").forEach(planet => {
      planet.setAttribute("aria-pressed", "false");
      planet.addEventListener("click", () => {
        document.querySelectorAll(".planet").forEach(button => {
          const active = button === planet;
          button.classList.toggle("is-active", active);
          button.setAttribute("aria-pressed", String(active));
        });
        title.textContent = planet.dataset.skill;
        description.textContent = data.skillDescriptions[planet.dataset.skill] || "";
      });
    });
  }

  // Safe DOM construction; text is rendered as text, not as injected HTML.
  function el(tag, className, content) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;
    return element;
  }
  function makeCard(project, index, fullWidth = false) {
    const card = el("article", `project-card${fullWidth ? " project-full" : ""}`);
    const top = el("div", "project-top");
    const icon = el("span", "project-icon", project.icon || "◈");
    icon.setAttribute("aria-hidden", "true");
    top.append(icon, el("span", "project-number", `PROJECT ${String(index + 1).padStart(2, "0")}`));
    const details = fullWidth ? el("div", "project-body") : card;
    details.append(el("h3", "", project.title));
    details.append(el("p", "", project.description));
    const tags = el("div", "tags");
    (project.tags || []).forEach(tag => tags.append(el("span", "tag", tag)));
    details.append(tags);
    if (project.url && /^https?:\/\//.test(project.url)) {
      const link = el("a", "project-link", "View project ↗");
      link.href = project.url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      details.append(link);
    }
    if (fullWidth) card.append(top, details);
    else card.prepend(top);
    return card;
  }

  // HOMEPAGE: four featured cards in a fixed 2x2 grid (one column on phones).
  // FULL PROJECTS PAGE: all projects, in the order defined in projects-data.js.
  const projects = Array.isArray(window.PORTFOLIO_PROJECTS) ? window.PORTFOLIO_PROJECTS : [];
  const featuredProjects = projects.filter(project => project.featured === true);
  const grid = document.getElementById("project-grid");
  if (grid && projects.length) {
    if (featuredProjects.length !== 4) {
      console.warn(`Expected exactly four featured projects; found ${featuredProjects.length}. Check projects-data.js.`);
    }
    grid.replaceChildren(...featuredProjects.slice(0, 4).map((project, i) => makeCard(project, i)));
  }

  const all = document.getElementById("all-projects-list");
  if (all && projects.length) all.replaceChildren(...projects.map((project, i) => makeCard(project, i, true)));

  const industrial = document.getElementById("industrial-experience");
  if (industrial) {
    (data.industrialExperience || []).forEach(job => {
      const item = el("div", "timeline-item");
      item.append(el("small", "", job.period));
      item.append(el("h3", "", job.company));
      item.append(el("p", "", `${job.role} — ${job.description}`));
      industrial.append(item);
    });
  }
})();
