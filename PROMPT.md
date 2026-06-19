# Build Prompt — KiMZ.Dev Website

> **Version:** 2.1 — 19 June 2026  
> Use this prompt with an AI coding assistant (GitHub Copilot, Claude, ChatGPT, etc.) to recreate or extend this website.

### Revision History

| Version | Date | Changes |
|---------|------|---------|
| 2.1 | 2026-06-19 | Repo cleanup, inline handlers removed, hero dots as buttons, SVG hamburger, pause/play, GitHub Actions CI, SWA 404 fix, placeholder policy added |
| 2.0 | 2026-06-19 | Audience pathways, credibility section, accessibility (skip link, focus-visible, reduced-motion, progressive enhancement), SEO platform files, bilingual expansion, contact form expansion |
| 1.2 | 2026-06-18 | README + PROMPT documentation added |
| 1.1 | 2026-06-18 | Optimized images, hero backgrounds |
| 1.0 | 2026-06-17 | Initial Clark single-page build |

---

## Prompt

Build me a single-page portfolio and training website with the following specifications:

### Identity

- **Brand:** KiMZ.Dev (ورشة كيمز — Warshet KiMZ)
- **Owner:** Karim Khidr — AI & Cybersecurity Trainer, Senior Engineer, 20+ years in tech
- **Tagline (AR):** مساحة للتجربة والتعلّم
- **Tagline (EN):** Learn. Build. Secure.

### Design System

- **Template reference:** Clark by Colorlib (single-page portfolio structure)
- **Color palette:**
  - Primary: Amber Gold `#D89D2A`
  - Background: Dark Charcoal `#1A1A1A`
  - Text: Soft White `#F5F5F5`
  - Secondary surfaces: `#242424`, `#333333`
  - Accent dim: `#b8860b`
  - Accent bright: `#f0b840`
- **Fonts:** Poppins (English), Cairo (Arabic) — loaded via `<link>` in `<head>`, NOT `@import`
- **Style:** Premium, minimal, cinematic, dark theme, creator-focused
- **Icons:** Custom inline SVG only — no emoji, no icon fonts
- **No frameworks:** No JavaScript frameworks or build dependencies (Google Fonts is an external runtime dependency loaded via CDN)

### Sections (single-page, scroll-based navigation)

1. **Navbar** — Fixed, transparent → solid on scroll. Brand "KiMZ.Dev" top-left. Scroll spy highlights active section. Language toggle button (EN/AR). Mobile hamburger menu with ARIA attributes (`aria-expanded`, `aria-controls`, `aria-hidden`), Escape key to close.

2. **Hero Slider** — Fullscreen, 3 slides auto-rotating every 5 seconds with dot navigation:
   - Slide 1: Personal intro — "I'm Karim Khidr", AI & Cybersecurity Trainer, avatar image, CTA buttons
   - Slide 2: Training value prop — "Learn. Build. Secure.", experience highlight
   - Slide 3: YouTube channel — "The Workshop" (ورشة كيمز), subscribe CTA
   - Each slide supports a background image with dark overlay
   - Pauses on hover/focus, respects `prefers-reduced-motion`

3. **Audience Pathways** — 3-card grid entry points:
   - Students & Self-Learners → free YouTube content
   - Universities & Colleges → guest lectures, workshop modules
   - Organisations & Teams → custom corporate training
   - Each card: SVG icon, heading, short description, CTA link

4. **About** — Two-column: profile photo (left) + bio text with info list (right). Animated counter ("20+ Years in Tech"). Contact Me button.

5. **Resume** — Career timeline (balanced two-column layout):
   - Left column: Career roles with dates, titles, companies, descriptions
   - Right column: Education, advisory, brand work
   - **Three distinct Microsoft roles:**
     - Senior Service Engineer (2024–present)
     - Service Engineer II (2020–2024)
     - Service Engineer (2017–2020)
   - Prior: Orange Business Services (2007–2017), Alexandria University (2005–2007)
   - Education: MSc Cybersecurity First Class Honours (overall result: 82%, Dissertation 91%), BEng Electronics & Communications
   - **No "GPA 82"** — use "overall result: 82%"

6. **Courses** — 6 service cards in a 3×2 grid:
   - AI Automation & Workflows
   - Cybersecurity Fundamentals
   - AI in Security Operations
   - Cloud & SRE Practices
   - Corporate Training Programs
   - 1:1 Consulting & Advisory
   - Each card: SVG icon, title, description

7. **Credibility ("Why Learn With Karim")** — 4-card grid:
   - Real-World Engineering (20+ years production, not classroom-only)
   - Proven Research (MSc First Class, published dissertation)
   - Bilingual Delivery (EN + AR, cultural bridge)
   - Active Practitioner (still engineering daily, current tooling)

8. **Skills** — Evidence-based skill labels (NOT percentage bars):
   - AI & Automation → "Advanced" (daily production use)
   - Cybersecurity → "Strong Applied" (MSc + enterprise ops)
   - Cloud & Azure → "Advanced" (7+ years Azure)
   - Incident Management → "Advanced" (enterprise-scale)
   - Leadership → "Strong Applied" (team lead + training)
   - Technical Writing → "Research & Applied" (MSc dissertation + docs)

9. **Projects** — 6 cards in a 3×2 grid:
   - AI Incident Triage, MSc Dissertation, Warshet KiMZ, Security Automation, Cloud Monitoring, Knowledge Management
   - Each card: SVG icon, title, description
   - (Placeholder — detailed project pages pending user content)

10. **Blog** — 3 preview cards linking to `blog.html`:
    - Each card: SVG icon, meta (date + tags), title, excerpt
    - (Content pending — no fabricated articles)

11. **Contact** — Two-column: info list (left) + form (right)
    - Info: Location (Dublin), Email, LinkedIn, YouTube
    - Form: Name, Organisation, Email, Enquiry Type dropdown (8 categories), Message, Submit
    - Enquiry types: General, Training for Myself, University/College Partnership, Corporate Team Training, Guest Lecture, Consulting/Advisory, Content/Media Collaboration, Other
    - Form uses mailto handler (no backend required)
    - Visible `<label>` elements above every input

12. **Footer** — Brand "KiMZ.Dev", Arabic tagline, social SVG icons (YouTube, Instagram, LinkedIn, Email), copyright, Colorlib credit, privacy link, employer disclaimer

### Bilingual (i18n) System

- Language toggle button in navbar (no inline handlers — `addEventListener` only)
- Stores preference in `localStorage` key `kimz-lang`
- All translatable elements have `data-i18n="section.key"` attributes
- Full EN and AR translation objects in JavaScript
- AR mode: sets `document.documentElement.lang` and `document.documentElement.dir`
- Dropdown options translated on language switch
- Translations cover: navbar, hero slides, slider labels, pathways, about, resume, courses, credibility, skills, projects, blog, contact, footer (including disclaimer)

### Accessibility (WCAG 2.1/2.2 AA principles)

- **Skip-to-content** link targets `<main id="main-content">`
- **`:focus-visible`** outlines on all interactive elements (2px amber)
- **`prefers-reduced-motion`** disables all transitions/animations AND stops hero auto-rotation
- **Progressive enhancement** — `.js` class on `<html>`, animations only apply when JS loads
- **No inline event handlers** — all interactions via `addEventListener` in `clark.js`
- **Mobile nav** — SVG hamburger/close icons, `aria-expanded`, `aria-controls`, `aria-hidden`; Escape closes nav and returns focus
- **Hero dots** — `<button type="button">` with `data-slide-index`, `aria-label`, `aria-current`
- **Pause/play button** — `aria-pressed`, stops slider permanently after user interaction
- **Inactive slides** — `visibility: hidden`, `pointer-events: none`, `aria-hidden="true"`, links removed from tab order
- **Hero slider** pauses on `mouseenter`/`focusin`, resumes on leave (only if not manually paused)
- **Visible labels** on all form inputs
- **Semantic HTML** — `<main>`, `<nav>`, `<section>`, `<footer>` landmark regions

### SEO & Platform Files

- `robots.txt` — Allow all, reference sitemap
- `sitemap.xml` — All public URLs (index, blog, privacy)
- `site.webmanifest` — PWA-ready with brand colors and icons
- `404.html` — Styled custom error page
- `privacy.html` — Static privacy policy (no cookies, explains Google Fonts + Azure hosting)
- `staticwebapp.config.json` — Security headers + 404 override
- Structured data (JSON-LD `ProfessionalService`) in `<head>`
- Open Graph + Twitter Card meta tags
- Canonical URLs on all pages
- `<meta name="theme-color" content="#D89D2A">`

### Animations & Interactions

- **Scroll spy:** Highlights active nav link based on scroll position
- **Navbar shrink:** Reduces padding and adds background on scroll
- **Hero slider:** Auto-rotate with fade transitions, clickable dots, pause on interaction
- **Scroll animations:** Elements with `.animate` class fade in + slide up when entering viewport (IntersectionObserver), only when JS loaded (`.js` class present)
- **Skill labels:** Fade in on scroll (no percentage fill animations)
- **Counter:** Animates from 0 to target number on scroll
- **Section headings:** Large background text (`.big-text`) behind section title, `user-select: none`

### Standalone Blog Page (`blog.html`)

- Same navbar (links back to `index.html#section`)
- Same Clark design system (clark.css + clark.js)
- Section heading with big-text background
- Blog cards with SVG icons (same style as main page)
- 4 articles (Coming Soon placeholders)
- Subscribe CTA replaced with "Follow on LinkedIn / Subscribe on YouTube" links
- Same footer with disclaimer

### Favicon

- Amber gold letter "K" on dark charcoal rounded rectangle
- Formats: SVG (scalable), ICO (16/32/48px), Apple Touch Icon (180px PNG)

### Image Optimization

- All images in `assets/img/optimized/` as WebP (primary) + PNG (fallback)
- Avatar images: 400×400px, ~20KB WebP
- Hero background: 1920×1080 max, ~60KB WebP
- Banner: 1200×400 max, ~44KB WebP
- Use `loading="lazy"` on non-critical images
- Explicit `width` and `height` attributes on all `<img>` tags (prevents CLS)

### Hosting & Deployment

- Azure Static Web Apps (Free tier)
- No build step — `--skipAppBuild true`
- `staticwebapp.config.json` for routing, security headers, and custom 404
- Also works on any static host: GitHub Pages, Netlify, Vercel

### Content Rules

- No internal/confidential company references
- No emoji as icons (use SVG)
- No fabricated content — use placeholders where user hasn't provided material
- Employer disclaimer in footer: "Views expressed are personal..."
- Accessibility: designed toward WCAG 2.1/2.2 AA principles, subject to automated and manual testing
- Responsive: mobile-first with breakpoints at 768px, 992px, 1200px
- Colorlib attribution required in footer (CC BY 3.0)
- All external links must have `rel="noopener noreferrer"`

### Content Placeholder Policy

Courses, projects, case studies and blog articles are intentionally placeholders
until reviewed and approved by the site owner. AI coding assistants must not
invent or publish missing content.

### Owner Validation Notes

- TODO(owner): Confirm whether Senior Service Engineer began in 2023 or 2024 (currently set to 2024).
- Review and approve course content before publication.
- Review and approve project case studies before publication.
- Review and approve blog articles before publication.

---

## File Output Expected

```
index.html                  (~30KB) — Main single-page site
blog.html                   (~6KB)  — Standalone blog page
privacy.html                (~3KB)  — Privacy policy
404.html                    (~2KB)  — Custom error page
css/clark.css               (~20KB) — Complete design system
js/clark.js                 (~13KB) — All interactions, i18n, and a11y
favicon.svg                 (<1KB)  — SVG favicon
robots.txt                  (<1KB)  — Crawl directives
sitemap.xml                 (<1KB)  — XML sitemap
site.webmanifest            (<1KB)  — PWA manifest
staticwebapp.config.json    (<1KB)  — Azure SWA config + security headers
```

## Social Links

- YouTube: https://youtube.com/@warshetkimz
- Instagram: https://instagram.com/warshetkimz
- LinkedIn: https://linkedin.com/in/karim-khidr-39a57123
- Email: kkhidr@gmail.com
