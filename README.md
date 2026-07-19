# AIDIRL Website

Website for the **Artificial Intelligence and Data Innovation Research Lab (AIDIRL)**,
Department of Computer Science, University of Gwadar.

Plain HTML/CSS/JS (no build step, no Jekyll gems required) — deploys directly on GitHub Pages.

## Structure

```
├── index.html            Home — hero, intro, news timeline
├── projects.html         Current & upcoming research projects
├── publications.html     Publications, filterable by category
├── themes.html           14 priority research thematic areas
├── team.html             Director + current students
├── about.html            Purpose, objectives, governance, funding, contact
├── css/style.css         Shared design system (colors, type, components)
├── js/main.js             Nav toggle, scroll reveal, back-to-top, filters
├── assets/images/        Place photos and images here
└── README.md
```

## Deploying to GitHub Pages

1. Create a new repository (or use an existing one), e.g. `aidirl.github.io` or `<username>/aidirl-site`.
2. Push this folder's contents to the repository's `main` branch.
3. In the repo, go to **Settings → Pages**.
4. Under **Source**, choose the `main` branch and the `/ (root)` folder, then **Save**.
5. GitHub will publish the site at `https://<username>.github.io/<repo>/` (or the repo's configured custom domain).

No build step is required — GitHub Pages serves the HTML/CSS/JS files as-is.

## Updating content

- **News** — edit the `.timeline` block in `index.html`; keep entries in reverse chronological order.
- **Projects** — edit the `.card-grid` blocks in `projects.html`.
- **Publications** — edit `.pub-item` blocks in `publications.html`. Each item needs a `data-category`
  of `journal` or `thesis` so the filter buttons work; add new categories by adding a matching filter button.
- **Themes** — edit `.theme-card` blocks in `themes.html`. Each card's "Learn more" expands `.theme-more`.
- **Team** — edit `team.html`. Replace the placeholder `Student Name` cards in the "Current Students"
  section with real names, and remove a card entirely when a student is no longer current. Every
  student card must use the label "Undergraduate Student" (not "Research Assistant") per lab policy.
- **About** — edit the `.about-section` blocks in `about.html`.
- **Navigation & footer** — the same header/footer markup is duplicated at the top and bottom of each
  page (no templating layer). When you change a nav link or footer detail, update it in all six pages.
- **Images** — drop photos into `assets/images/` and reference them with a relative path, e.g.
  `assets/images/photo.jpg`. The Director's photo currently points to a GitHub avatar URL in `team.html`.

## Design notes

- Palette: deep navy (`#0A2540`) and marine teal (`#1E7A6E`, `#35A996`) with a brass/ochre accent
  (`#C2872E`) — a coastal-research identity nodding to Gwadar's coast and Balochistan's landscape.
- Type: **Fraunces** (display/headings), **Inter** (body), **IBM Plex Mono** (labels, eyebrows, data).
  Loaded from Google Fonts via `<link>` tags in each page's `<head>`.
- Signature motif: the bathymetric "contour line" graphic in the hero and the small logomark —
  doubling as both a coastline depth-contour and a waveform, tying the lab's marine research theme
  to its language/audio NLP work.
