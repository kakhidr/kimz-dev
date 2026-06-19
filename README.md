# KiMZ.Dev — Personal Brand & Training Website

> **Live:** [brave-sea-000870403.7.azurestaticapps.net](https://brave-sea-000870403.7.azurestaticapps.net)

A single-page portfolio and training website for **Karim Khidr (KiMZ)** — AI & Cybersecurity trainer, Senior Engineer, and creator of Warshet KiMZ (ورشة كيمز).

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | Pure HTML, CSS, JavaScript — zero frameworks |
| **Design** | Clark-inspired single-page layout (Colorlib, CC BY 3.0) |
| **Hosting** | Azure Static Web Apps (Free tier) |
| **Source** | GitHub (private repo) |
| **Domain** | kimz.dev (planned) |
| **i18n** | Bilingual EN/AR toggle (localStorage-persisted) |
| **SEO** | Structured data (JSON-LD), Open Graph, Twitter Cards |

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

The site implements progressive enhancement and follows WCAG 2.1 Level AA guidelines:

- Skip-to-content link for keyboard users
- `:focus-visible` outlines on all interactive elements
- `prefers-reduced-motion` disables animations and auto-rotation
- ARIA attributes on mobile nav (`aria-expanded`, `aria-controls`, `aria-hidden`)
- Escape key closes mobile menu
- Hero slider pauses on hover/focus
- Visible form labels on all inputs
- Semantic HTML structure with landmark regions

## License & Credits

- Website code: Personal project by Karim Khidr
- Design inspired by [Clark template](https://colorlib.com) (CC BY 3.0 — attribution in footer)
- Brand assets: Warshet KiMZ © 2026

---

*Built with GitHub Copilot CLI · Hosted on Azure Static Web Apps (Free tier)*
