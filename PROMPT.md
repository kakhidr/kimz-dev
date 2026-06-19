# Build Prompt — KiMZ.Dev Website

> Use this prompt with an AI coding assistant (GitHub Copilot, Claude, ChatGPT, etc.) to recreate or extend this website.

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
- **Fonts:** Poppins (English), Cairo (Arabic)
- **Style:** Premium, minimal, cinematic, dark theme, creator-focused
- **Icons:** Custom inline SVG only — no emoji, no icon fonts
- **No frameworks:** Pure HTML/CSS/JS, zero dependencies

### Sections (single-page, scroll-based navigation)

1. **Navbar** — Fixed, transparent → solid on scroll. Brand "KiMZ.Dev" top-left. Scroll spy highlights active section. Language toggle button (EN/AR). Mobile hamburger menu.

2. **Hero Slider** — Fullscreen, 3 slides auto-rotating every 5 seconds with dot navigation:
   - Slide 1: Personal intro — "I'm Karim Khidr", AI & Cybersecurity Trainer, avatar image, CTA buttons
   - Slide 2: Training value prop — "Learn. Build. Secure.", experience highlight
   - Slide 3: YouTube channel — "The Workshop" (ورشة كيمز), subscribe CTA
   - Each slide supports a background image with dark overlay

3. **About** — Two-column: profile photo (left) + bio text with info list (right). Animated counter ("20+ Years in Tech"). Contact Me button.

4. **Resume** — Career timeline (balanced two-column layout):
   - Left column: Career roles with dates, titles, companies, descriptions
   - Right column: Education, advisory, brand work
   - Include: Microsoft Senior Service Engineer (2024–present), Service Engineer II (2020–2024), Service Engineer (2017–2020), Orange Business Services roles (2007–2017), Alexandria University instructor (2005–2007)
   - Education: MSc Cybersecurity First Class Honours (GPA 82, Dissertation 91), BEng Electronics & Communications

5. **Courses** — 6 service cards in a 3×2 grid:
   - AI Automation & Workflows
   - Cybersecurity Fundamentals
   - AI in Security Operations
   - Cloud & SRE Practices
   - Corporate Training Programs
   - 1:1 Consulting & Advisory
   - Each card: SVG icon, title, description

6. **Skills** — Animated progress bars that fill on scroll:
   - AI & Automation (92%), Cybersecurity (88%), Cloud & Azure (85%), Incident Management (90%), Leadership (82%), Technical Writing (78%)

7. **Projects** — 6 cards in a 3×2 grid:
   - AI Incident Triage, MSc Dissertation, Warshet KiMZ, Security Automation, Cloud Monitoring, Knowledge Management
   - Each card: SVG icon, title, description

8. **Blog** — 3 preview cards linking to `blog.html`:
   - "AI Workflows That Replaced 70% of Manual Work"
   - "MSc Cybersecurity Journey"
   - "AI Copilots in Security: Hype vs. Reality"
   - Each card: SVG icon, meta (date + tags), title, excerpt

9. **Contact** — Two-column: info list (left) + form (right)
   - Info: Location (Dublin), Email, LinkedIn, YouTube
   - Form: Name, Email, Subject dropdown, Message, Submit button
   - Form uses mailto handler (no backend required)

10. **Footer** — Brand "KiMZ.Dev", Arabic tagline, social SVG icons (YouTube, Instagram, LinkedIn, Email), copyright, Colorlib credit

### Bilingual (i18n) System

- Language toggle button in navbar
- Stores preference in `localStorage` key `kimz-lang`
- All translatable elements have `data-i18n="section.key"` attributes
- Full EN and AR translation objects in JavaScript
- AR mode: sets `dir="rtl"` on body, switches font to Cairo
- Translations cover: navbar, hero slides, about, resume, courses, skills, projects, blog, contact, footer

### Animations & Interactions

- **Scroll spy:** Highlights active nav link based on scroll position
- **Navbar shrink:** Reduces padding and adds background on scroll
- **Hero slider:** Auto-rotate with fade transitions, clickable dots
- **Scroll animations:** Elements with `.animate` class fade in + slide up when entering viewport (IntersectionObserver)
- **Skill bars:** Fill to target width when scrolled into view
- **Counter:** Animates from 0 to target number on scroll
- **Section headings:** Large background text (`.big-text`) behind section title, `user-select: none`

### Standalone Blog Page (`blog.html`)

- Same navbar (links back to `index.html#section`)
- Same Clark design system (clark.css + clark.js)
- Section heading with big-text background
- Blog cards with SVG icons (same style as main page)
- 4 articles (Coming Soon placeholders)
- Subscribe CTA box with SVG icon
- Same footer

### Favicon

- Amber gold letter "K" on dark charcoal rounded rectangle
- Formats: SVG (scalable), ICO (16/32/48px), Apple Touch Icon (180px PNG)

### Image Optimization

- All images in `assets/img/optimized/` as WebP (primary) + PNG (fallback)
- Avatar images: 400×400px, ~20KB WebP
- Hero background: 1920×1080 max, ~60KB WebP
- Banner: 1200×400 max, ~44KB WebP
- Use `loading="lazy"` on non-critical images

### Hosting & Deployment

- Azure Static Web Apps (Free tier)
- No build step — `--skipAppBuild true`
- `staticwebapp.config.json` for routing (navigationFallback to index.html)
- Also works on any static host: GitHub Pages, Netlify, Vercel

### Content Rules

- No internal/confidential company references
- No emoji as icons (use SVG)
- Keep accessibility: alt tags, aria-labels, semantic HTML
- Responsive: mobile-first with breakpoints at 768px, 992px, 1200px
- Colorlib attribution required in footer (CC BY 3.0)

---

## File Output Expected

```
index.html          (~25KB) — Main single-page site
blog.html           (~5KB)  — Standalone blog page
css/clark.css       (~18KB) — Complete design system
js/clark.js         (~11KB) — All interactions and i18n
favicon.svg         (<1KB)  — SVG favicon
staticwebapp.config.json — Azure SWA config
```

## Social Links

- YouTube: https://youtube.com/@warshetkimz
- Instagram: https://instagram.com/warshetkimz
- LinkedIn: https://linkedin.com/in/karim-khidr-39a57123
- Email: kkhidr@gmail.com
