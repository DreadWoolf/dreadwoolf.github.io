# Rasmus Portfolio — GitHub Pages

Built on the original dark design. No frameworks or build step required.

## Upload to GitHub

Upload these files **all together to the root of the GitHub Pages repository** (do not upload the ZIP itself):

- `index.html` — homepage (all 4 featured cards visible at once)
- `projects.html` — full list of projects, shown vertically
- `style.css` — original dark styling and responsive layout
- **`projects-data.js`** — ALL projects; which 4 appear on the homepage
- `portfolio-data.js` — orbit speeds, profile photo filename, planet details and industrial experience
- `site.js` — draws project cards, loads photo, and handles planet clicks
- `profile_img.jpg` — optional profile photo; RE appears in its absence

## Choose the four featured projects

Edit **only** `projects-data.js` to change the project list. In each project object:

- `featured: true` — appear on the homepage and all-projects page
- `featured: false` — appear only on the all-projects page
- `url: ""` — show no link for private/unpublished projects
- `url: "https://..."` — show **View project** link if published

Set `featured: true` on exactly **four** project entries. They appear in a 2×2 grid on desktop, and in a one-column stack on mobile (no hidden cards, no arrows). The sequence of project objects controls order on both pages. `site.js` warns in the browser console if not exactly four are selected.

## Your profile and work experience

Edit `portfolio-data.js` to change `profileImage`, `orbitSeconds`, `skillDescriptions`, and `industrialExperience`. The latter appears **below** Education & academic/teaching experience on the homepage. The industrial role titles/descriptions currently reflect powder coating, forklift operation and assembly at Kongamek, plus refuse-truck driving at Nordisk Återvinning. Employment dates have not been invented.

Add `profile_img.jpg` to the same folder if you want your image in the center of the solar system; otherwise RE is used automatically. Orbit speeds and the dark background are unchanged from v4.

## Mobile behavior

On phones, all four featured projects are stacked vertically rather than put behind a carousel. This is deliberate: recruiters should be able to see all four without discovering arrow controls.

## GitHub Pages

On GitHub Free, the repository must be **public** to publish with Pages. It can remain private during local development. Check that you publish to your actual GitHub account and that its username-based Pages repository is named `<username>.github.io`.
