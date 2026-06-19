# Changelog

All notable changes to the KiMZ.Dev website are documented here.

Format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

---

## [2.1.0] — 2026-06-19

### Added
- **GitHub Actions CI** — `.github/workflows/quality.yml` (HTMLHint, ESLint, Stylelint, Lychee link check)
- **Pause/play button** for hero slider with `aria-pressed` and SVG icons
- **Pathway preselection** — clicking pathway CTAs preselects the matching enquiry type in the contact form via `data-enquiry`
- **Build marker** — `<meta name="kimz-build" content="v2-maintenance">` for deployment verification
- **`<main id="main-content">`** wrapping all page content
- `fetchpriority="high"` on first hero image

### Changed
- **Hero dots** — `<div onclick>` replaced with `<button type="button" data-slide-index aria-label aria-current>`
- **Mobile hamburger** — Unicode `☰` replaced with inline SVG menu/close icons
- **Inline handlers removed** — all `onclick=` attributes replaced with `addEventListener` in JS
- **clark.js refactored** — reorganised into 11 named sections (435 lines), guards for missing elements, sanitised mailto, translated dropdown options
- **Inactive hero slides** — now use `visibility: hidden`, `pointer-events: none`, `aria-hidden="true"`, links removed from tab order
- **Slider pause behaviour** — stops permanently after user clicks a dot (until Play pressed)
- **SWA config** — fallback rewrites to `/404.html` (not `/index.html`) so unknown routes show custom 404
- **Skip link** — now targets `<main id="main-content">` (was `#about`)
- **PROMPT.md** — versioned with revision history table
- **README.md** — public repo noted, content governance section, owner validation, corrected file tree

### Removed
- 14 legacy files: `index-old.html`, `clark.html`, `about.html`, `courses.html`, `contact.html`, `workshop.html`, `css/style.css`, `js/main.js`, 6 original source PNGs
- All inline `onclick` event handlers from HTML

---

## [2.0.0] — 2026-06-19

### Added
- **Audience Pathways** section — dedicated entry points for Students, Universities, and Organisations
- **Credibility section** — "Why Learn With Karim" with 4 evidence-backed pillars
- **Accessibility (WCAG 2.1 AA):**
  - Skip-to-content link
  - `:focus-visible` outlines (2px amber)
  - `prefers-reduced-motion` support (kills animations + slider auto-rotation)
  - Progressive enhancement (`.js` class pattern)
  - Mobile nav ARIA attributes + Escape key to close
  - Hero slider pause on hover/focus
  - Visible `<label>` elements on all form inputs
- **SEO & Platform files:**
  - `robots.txt` with sitemap reference
  - `sitemap.xml` (index, blog, privacy)
  - `site.webmanifest` (PWA-ready)
  - `404.html` (branded custom error page)
  - `privacy.html` (static privacy policy)
  - Structured data (JSON-LD `ProfessionalService`)
  - Open Graph + Twitter Card meta tags
  - Canonical URLs on all pages
  - `<meta name="theme-color">`
- **Security headers** in `staticwebapp.config.json`:
  - X-Content-Type-Options: nosniff
  - X-Frame-Options: DENY
  - Referrer-Policy: strict-origin-when-cross-origin
  - Permissions-Policy: camera=() microphone=() geolocation=()
- **Bilingual expansion** — AR translations for pathways, credibility, skills, footer disclaimer
- **Contact form** — Organisation field, 8 enquiry type categories
- **Employer disclaimer** in footer
- **Privacy link** in footer
- `CHANGELOG.md` (this file)

### Changed
- **Resume** split into 3 distinct Microsoft roles (Senior 2024+, Engineer II 2020–2024, Engineer 2017–2020)
- **Skills** — replaced arbitrary percentages with evidence-based labels (Advanced / Strong Applied / Research & Applied)
- **Education** — "GPA 82" corrected to "overall result: 82%"
- **About bio** — qualified AI automation claims with proper context
- **Blog section** — fake subscription CTA replaced with "Follow on LinkedIn / Subscribe on YouTube"
- **CSS fonts** — moved from `@import` to `<link rel="preconnect">` + `<link href="...">` in HTML head
- **External links** — all `target="_blank"` links now include `rel="noopener noreferrer"`
- **Images** — added explicit `width` and `height` attributes to prevent CLS
- **Page titles** — improved for SEO ("Karim Khidr | AI & Cybersecurity Trainer in Ireland — KiMZ.Dev")

### Fixed
- Blog page title wording
- Missing CSS variables (`--dark-2`, `--dark-3`, `--white`, `--gray`)

---

## [1.2.0] — 2026-06-18

### Added
- `README.md` — project overview, tech stack, structure, deployment guide
- `PROMPT.md` — AI-ready build prompt to recreate the site from scratch

---

## [1.1.0] — 2026-06-18

### Added
- Optimized image pipeline (WebP + PNG fallbacks in `assets/img/optimized/`)
- Hero slider background images with dark overlay
- About section avatar integration
- CSS variables for image sizing

### Changed
- All brand PNGs (1.5–2MB each) optimised to WebP (18–61KB, ~97% reduction)

---

## [1.0.2] — 2026-06-18

### Added
- Branded favicon — amber "K" on charcoal rounded rectangle
- `favicon.svg` (scalable), `favicon.ico` (16/32/48px), `apple-touch-icon.png` (180px)
- Favicon `<link>` tags in both `index.html` and `blog.html`

---

## [1.0.1] — 2026-06-18

### Changed
- `blog.html` rebuilt with Clark design system (was using old `style.css` + `main.js`)
- Blog page now matches main site: navbar, section headings, card grid, footer with SVG social icons

---

## [1.0.0] — 2026-06-17

### Added
- Complete Clark-inspired single-page portfolio site
- 10 sections: Hero Slider, About, Resume, Courses, Skills, Projects, Blog, Contact, Footer
- Bilingual EN/AR toggle with localStorage persistence and RTL support
- Scroll spy, navbar shrink, scroll animations, animated counters
- Custom SVG icons throughout (no emoji, no icon fonts)
- `clark.css` design system with CSS variables
- `clark.js` — slider, i18n, IntersectionObserver animations
- `staticwebapp.config.json` for Azure SWA

---

## [0.1.0] — 2026-06-17

### Added
- Initial multi-page website (index, about, courses, workshop, contact, blog)
- Basic styling with `style.css` + `main.js`
- Deployed to Azure Static Web Apps (free tier)
