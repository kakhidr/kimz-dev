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

## Features

- 🎯 **Hero Slider** — 3 auto-rotating slides with background images and dot navigation
- 👤 **About** — Bio, stats counters, personal info
- 📋 **Resume** — Career timeline (5 roles + advisory work)
- 🎓 **Courses** — 6 service cards with custom SVG icons
- 📊 **Skills** — Animated progress bars triggered on scroll
- 🚀 **Projects** — 6 project showcase cards
- ✍️ **Blog** — Preview cards + standalone blog page
- 📬 **Contact** — Info + form (mailto handler)
- 🌐 **Bilingual** — Full EN/AR toggle with RTL support
- ⚡ **Performance** — Optimized WebP images, lazy loading, no dependencies

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
├── favicon.svg                # SVG favicon (amber K on charcoal)
├── favicon.ico                # ICO multi-size (16/32/48px)
├── apple-touch-icon.png       # iOS bookmark icon (180px)
├── css/
│   └── clark.css              # Full design system (18KB)
├── js/
│   └── clark.js               # Slider, i18n, animations, scroll spy (11KB)
├── assets/
│   └── img/
│       ├── optimized/         # WebP + PNG (production-ready)
│       │   ├── avatar-night.webp
│       │   ├── avatar-warm.webp
│       │   ├── avatar-vector.webp
│       │   ├── hero-bg.webp
│       │   └── banner-youtube.webp
│       └── *.png              # Original high-res brand assets
├── staticwebapp.config.json   # Azure SWA routing config
├── PROMPT.md                  # Build prompt for AI assistants
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
StaticSitesClient.exe upload --app ./kimz-dev --apiToken <TOKEN> --skipAppBuild true
```

### Local preview

Just open `index.html` in a browser — no build step needed.

```bash
# Or use any static server
npx serve .
# or
python -m http.server 8000
```

## License & Credits

- Website code: Personal project by Karim Khidr
- Design inspired by [Clark template](https://colorlib.com) (CC BY 3.0 — attribution in footer)
- Brand assets: Warshet KiMZ © 2026

---

*Built with GitHub Copilot CLI · Hosted on Azure Static Web Apps (Free tier)*
