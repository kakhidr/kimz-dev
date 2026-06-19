# KiMZ.Dev — Personal Brand & Training Website

> **Live:** [brave-sea-000870403.7.azurestaticapps.net](https://brave-sea-000870403.7.azurestaticapps.net)

A single-page portfolio and training website for **Karim Khidr (KiMZ)** — AI & Cybersecurity trainer, Senior Engineer, and creator of Warshet KiMZ (ورشة كيمز).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML, CSS, vanilla JavaScript — no frameworks, no required build step |
| **Design** | Clark-inspired single-page layout (Colorlib, CC BY 3.0) |
| **Hosting** | Azure Static Web Apps (Free tier) |
| **Source** | GitHub (public repo) |
| **Domain** | kimz.dev (planned) |
| **i18n** | Bilingual EN/AR toggle (localStorage-persisted) |
| **SEO** | Structured data (JSON-LD), Open Graph, Twitter Cards |
| **External** | Google Fonts (runtime CDN dependency) |

## Features

- 🎯 **Hero Slider** — 3 auto-rotating slides with background images, dot navigation, pause on hover/focus
- 👤 **About** — Bio, stats counters, personal info
- 📋 **Resume** — Career timeline (3 Microsoft roles + prior experience + education)
- 🎓 **Courses** — 6 service cards with custom SVG icons
- 📊 **Skills** — Evidence-based skill labels (no arbitrary percentages)
- 🚀 **Projects** — 6 project showcase cards
- ✍️ **Blog** — Preview cards + standalone blog page
- 📬 **Contact** — Expanded form with 8 enquiry categories (mailto handler)
- 🌐 **Bilingual** — Full EN/AR toggle with RTL support
- ⚡ **Performance** — Optimized WebP images, lazy loading, no dependencies
- ♿ **Accessibility** — Skip-to-content, `:focus-visible`, `prefers-reduced-motion`, ARIA attributes, progressive enhancement
- 🔒 **Security** — Security headers (X-Content-Type-Options, X-Frame-Options, Permissions-Policy, Referrer-Policy)
- 🧭 **SEO** — Sitemap, robots.txt, structured data, canonical URLs, OG/Twitter meta
- 🛤️ **Audience Pathways** — Dedicated entry points for Students, Universities, and Organisations
- ✅ **Credibility** — "Why Learn With Karim" section with 4 evidence-backed pillars

## Brand Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--gold` | `#D89D2A` | Primary accent, headings, CTAs |
| `--bg` | `#1A1A1A` | Main background |
| `--text` | `#F5F5F5` | Body text |
| `--gold-dim` | `#b8860b` | Borders, secondary accent |
| Font (EN) | Poppins | All English text |
| Font (AR) | Cairo | Arabic text, taglines |

## Project Structure

```
kimz-dev/
├── index.html                 # Main single-page site
├── blog.html                  # Standalone blog listing
├── privacy.html               # Privacy policy
├── 404.html                   # Custom error page
├── favicon.svg                # SVG favicon (amber K on charcoal)
├── favicon.ico                # ICO multi-size (16/32/48px)
├── apple-touch-icon.png       # iOS bookmark icon (180px)
├── robots.txt                 # Search engine crawl directives
├── sitemap.xml                # XML sitemap (3 URLs)
├── site.webmanifest           # PWA manifest
├── css/
│   └── clark.css              # Full design system (~20KB)
├── js/
│   └── clark.js               # Slider, i18n, animations, a11y (~13KB)
├── assets/
│   └── img/
│       ├── optimized/         # WebP + PNG (production-ready)
│       │   ├── avatar-night.webp
│       │   ├── avatar-warm.webp
│       │   ├── avatar-vector.webp
│       │   ├── hero-bg.webp
│       │   └── banner-youtube.webp
│       └── *.png              # Original high-res brand assets
├── staticwebapp.config.json   # Azure SWA routing + security headers
├── PROMPT.md                  # Build prompt for AI assistants
├── CHANGELOG.md               # Version history
└── README.md                  # This file
```

### Legacy files (kept for reference)
- `index-old.html` — Previous multi-page home
- `clark.html` — Copy of index.html (original build name)
- `courses.html`, `workshop.html`, `about.html`, `contact.html` — Old multi-page versions
- `css/style.css`, `js/main.js` — Old multi-page assets

## Deployment

### Azure Static Web Apps

```bash
# Get deployment token
az staticwebapp secrets list --name kimz-dev --resource-group karim-profile-rg --query "properties.apiKey" -o tsv

# Deploy (using StaticSitesClient directly, skip build)
StaticSitesClient.exe upload --app ./kimz-dev --outputLocation ./kimz-dev --apiToken <TOKEN> --skipAppBuild true
```

### Local preview

Just open `index.html` in a browser — no build step needed.

```bash
# Or use any static server
npx serve .
# or
python -m http.server 8000
```

## Accessibility

The site is designed toward WCAG 2.1/2.2 AA principles. Automated checks and manual keyboard, screen-reader and contrast testing are required before claiming conformance.

Current implementations:

- Skip-to-content link (targets `<main id="main-content">`)
- `:focus-visible` outlines on all interactive elements (2px amber)
- `prefers-reduced-motion` disables all transitions/animations AND stops hero auto-rotation
- Progressive enhancement — `.js` class on `<html>`, animations only apply when JS loads
- Mobile nav SVG icons with `aria-expanded`, `aria-controls`, `aria-hidden`, Escape closes
- Hero slider dots are `<button>` elements with `aria-label` and `aria-current`
- Pause/play button for hero slider; stops permanently after direct dot interaction
- Inactive slides use `visibility: hidden` and `pointer-events: none`
- Visible form labels on all inputs
- Semantic HTML — `<main>`, `<nav>`, `<section>`, `<footer>` landmark regions

## Content Governance

Courses, projects, case studies and blog articles remain placeholders until
reviewed and approved by the site owner. Contributors and AI coding assistants
must not invent or publish missing content. New content should be added only
after factual, confidentiality and quality review.

## Contact Form

The contact form uses a `mailto:` handler — submitting opens the visitor's email client with a pre-composed message. No data is stored, transmitted to a backend, or processed server-side. A visible notice explains this behaviour to the user.

Pathway links (Students, Universities, Organisations) preselect the appropriate enquiry type in the contact form via `data-enquiry` attributes.

## Owner Validation Required

- Confirm Senior Service Engineer start year: 2023 or 2024 (currently 2024).
- Review and approve course content before publication.
- Review and approve project case studies before publication.
- Review and approve blog articles before publication.
- Confirm any future analytics implementation and privacy wording.

## License & Credits

- Website code: Personal project by Karim Khidr
- Design inspired by [Clark template](https://colorlib.com) (CC BY 3.0 — attribution in footer)
- Brand assets: Warshet KiMZ © 2026

---

*Built with GitHub Copilot CLI · Hosted on Azure Static Web Apps (Free tier)*
