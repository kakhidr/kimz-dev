/* ═══════════════════════════════════════════════════════════════
   kimz.dev — Clark-Inspired JS
   Slider, Scroll Spy, Animations, Skills, i18n
   ═══════════════════════════════════════════════════════════════ */

// ─── i18n ───
const translations = {
  en: {
    nav: { home: 'Home', about: 'About', resume: 'Resume', courses: 'Courses', skills: 'Skills', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
    hero: [
      { sub: 'مرحباً · Hello!', h1: "I'm <span class='highlight'>Karim Khidr</span>", h2: 'AI & Cybersecurity Trainer · Senior Engineer', tagline: 'ورشة كيمز — مساحة للتجربة والتعلّم', btn1: 'Explore Courses', btn2: 'Watch on YouTube' },
      { sub: 'Train with confidence', h1: "Learn. Build. <span class='highlight'>Secure.</span>", h2: 'Practical AI & Cybersecurity training from 20+ years of production experience', tagline: '', btn1: 'View Courses', btn2: 'About Me' },
      { sub: 'ورشة كيمز', h1: "The <span class='highlight'>Workshop</span>", h2: 'Tutorials, experiments, and behind-the-scenes builds on YouTube', tagline: 'مساحة للتجربة والتعلّم', btn1: 'Subscribe', btn2: 'Learn More' }
    ],
    about: { heading: 'About Me', big: 'About', bio1: "I'm <strong>Karim Khidr</strong> — most people know me as <strong style='color:var(--gold)'>KiMZ</strong>. I'm a Senior Service Engineer at Microsoft with over 20 years of experience in technology, cloud operations, cybersecurity, and automation.", bio2: "I hold a <strong style='color:var(--gold)'>First Class Honours MSc in Cybersecurity</strong> (overall result: 82%) and have designed AI-assisted workflows that reduced repetitive manual triage and coordination effort by approximately 60–70% within the target process. I started my career as a university instructor — and that passion for teaching never left.", counter_label: 'Years in Tech', btn: 'Contact Me' },
    resume: { heading: 'Resume', big: 'Resume', desc: 'A career spanning university teaching, global telecom operations, and enterprise cloud engineering.' },
    courses: { heading: 'Courses', big: 'Courses', desc: 'Hands-on training built from real-world production experience' },
    skills: { heading: 'My Skills', big: 'Skills', desc: 'Core competencies developed across 20+ years of engineering and operations' },
    projects: { heading: 'Projects & Workshop', big: 'Projects', desc: 'Course previews, YouTube content, and experiments from Warshet KiMZ' },
    blog: { heading: 'Blog', big: 'Blog', desc: 'Thoughts on AI, security, automation, and the learning journey' },
    contact: { heading: 'Contact', big: 'Contact', desc: "Interested in training, consulting, or collaboration? Let's talk.", name: 'Your Name', email: 'Your Email', org: 'Organisation or University', subject: 'Enquiry Type', message: 'Message', send: 'Send Message', name_label: 'Name', email_label: 'Email', org_label: 'Organisation / University (optional)', subject_label: 'Enquiry Type', message_label: 'Message', mailto_notice: 'Submitting this form will open your email application with the message prepared. The website does not send or store the message directly.', subjects: ['University Guest Lecture', 'Student Workshop', 'Corporate Training', 'AI Automation Advisory', 'Cybersecurity Programme', 'Speaking Opportunity', 'Creator Collaboration', 'Other'] },
    footer: { copy: '© 2026 KiMZ. All rights reserved.', credit: 'Design inspired by Colorlib', disclaimer: 'Views and content on this website are personal and do not represent or imply endorsement by current or former employers.' }
  },
  ar: {
    nav: { home: 'الرئيسية', about: 'عني', resume: 'السيرة', courses: 'الدورات', skills: 'المهارات', projects: 'المشاريع', blog: 'المدونة', contact: 'تواصل' },
    hero: [
      { sub: 'مرحباً · Hello!', h1: "أنا <span class='highlight'>كريم خضر</span>", h2: 'مدرب ذكاء اصطناعي وأمن سيبراني · مهندس أول', tagline: 'ورشة كيمز — مساحة للتجربة والتعلّم', btn1: 'استكشف الدورات', btn2: 'شاهد على يوتيوب' },
      { sub: 'تدرّب بثقة', h1: "تعلّم. ابنِ. <span class='highlight'>أمِّن.</span>", h2: 'تدريب عملي في الذكاء الاصطناعي والأمن السيبراني من خبرة +٢٠ سنة', tagline: '', btn1: 'الدورات', btn2: 'عني' },
      { sub: 'ورشة كيمز', h1: "<span class='highlight'>الورشة</span>", h2: 'دروس، تجارب، وبناء مشاريع على يوتيوب', tagline: 'مساحة للتجربة والتعلّم', btn1: 'اشترك', btn2: 'اعرف أكتر' }
    ],
    about: { heading: 'عني', big: 'عني', bio1: "أنا <strong>كريم خضر</strong> — معظم الناس يعرفوني بـ <strong style='color:var(--gold)'>كيمز</strong>. مهندس أول في مايكروسوفت وعندي أكتر من ٢٠ سنة خبرة في التكنولوجيا، العمليات السحابية، الأمن السيبراني، والأتمتة.", bio2: "حاصل على <strong style='color:var(--gold)'>ماجستير أمن سيبراني بمرتبة الشرف الأولى</strong> (النتيجة الكلية: ٨٢٪) وصممت أنظمة مساعدة بالذكاء الاصطناعي قللت العمل اليدوي المتكرر في الفرز والتنسيق بنسبة ٦٠-٧٠٪ تقريباً. بدأت مسيرتي كمدرس جامعي — وشغف التعليم ما سابني أبداً.", counter_label: 'سنة خبرة', btn: 'تواصل معي' },
    resume: { heading: 'السيرة الذاتية', big: 'السيرة', desc: 'مسيرة مهنية تمتد من التدريس الجامعي إلى عمليات الاتصالات العالمية وهندسة السحابة.' },
    courses: { heading: 'الدورات', big: 'الدورات', desc: 'تدريب عملي مبني على خبرة حقيقية في بيئات الإنتاج' },
    skills: { heading: 'مهاراتي', big: 'المهارات', desc: 'كفاءات أساسية مبنية على أكتر من ٢٠ سنة في الهندسة والعمليات' },
    projects: { heading: 'المشاريع والورشة', big: 'المشاريع', desc: 'معاينات الدورات، محتوى يوتيوب، وتجارب من ورشة كيمز' },
    blog: { heading: 'المدونة', big: 'المدونة', desc: 'أفكار عن الذكاء الاصطناعي، الأمان، الأتمتة، ورحلة التعلّم' },
    contact: { heading: 'تواصل معي', big: 'تواصل', desc: 'مهتم بالتدريب أو الاستشارات أو التعاون؟ كلمني.', name: 'الاسم', email: 'البريد الإلكتروني', org: 'المؤسسة أو الجامعة', subject: 'نوع الاستفسار', message: 'الرسالة', send: 'إرسال', name_label: 'الاسم', email_label: 'البريد الإلكتروني', org_label: 'المؤسسة / الجامعة (اختياري)', subject_label: 'نوع الاستفسار', message_label: 'الرسالة', mailto_notice: 'إرسال هذا النموذج سيفتح تطبيق البريد الإلكتروني مع الرسالة جاهزة. الموقع لا يرسل أو يخزن الرسالة مباشرة.', subjects: ['محاضرة جامعية', 'ورشة عمل طلابية', 'تدريب مؤسسي', 'استشارات أتمتة ذكاء اصطناعي', 'برنامج أمن سيبراني', 'فرصة تحدث', 'تعاون إبداعي', 'أخرى'] },
    footer: { copy: '© ٢٠٢٦ كيمز. جميع الحقوق محفوظة.', credit: 'تصميم مستوحى من Colorlib', disclaimer: 'الآراء والمحتوى في هذا الموقع شخصية ولا تمثل أو تشير إلى تأييد من أصحاب العمل الحاليين أو السابقين.' }
  }
};

let currentLang = localStorage.getItem('kimz-lang') || 'en';
let currentSlide = 0;
let slideInterval;

// ─── Language ───
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kimz-lang', lang);
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  const t = translations[lang];
  const toggle = document.querySelector('.lang-btn');
  if (toggle) toggle.textContent = lang === 'en' ? 'عربي' : 'EN';

  // Nav links
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let val = t;
    keys.forEach(k => { if (val) val = val[k]; });
    if (val !== undefined && typeof val === 'string') {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.innerHTML = val;
    }
  });

  // Update hero slide
  updateHeroSlide();
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

// ─── Hero Slider ───
function updateHeroSlide() {
  const t = translations[currentLang];
  const slide = t.hero[currentSlide];
  const activeSlide = document.querySelector('.hero-slide.active');
  if (!activeSlide) return;

  const sub = activeSlide.querySelector('.subheading');
  const h1 = activeSlide.querySelector('h1');
  const h2 = activeSlide.querySelector('h2');
  const tagline = activeSlide.querySelector('.arabic-line');

  if (sub) sub.innerHTML = slide.sub;
  if (h1) h1.innerHTML = slide.h1;
  if (h2) h2.innerHTML = slide.h2;
  if (tagline) tagline.innerHTML = slide.tagline;
}

function goToSlide(index) {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');

  slides.forEach(s => s.classList.remove('active'));
  dots.forEach(d => d.classList.remove('active'));

  currentSlide = index % slides.length;
  slides[currentSlide].classList.add('active');
  if (dots[currentSlide]) dots[currentSlide].classList.add('active');

  updateHeroSlide();
}

function nextSlide() { goToSlide(currentSlide + 1); }

function startSlider() {
  slideInterval = setInterval(nextSlide, 5000);
}

// ─── Navbar Scroll ───
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    // Shrink on scroll
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    // Scroll spy
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 100;
      if (window.scrollY >= top) current = section.getAttribute('id');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#' + current) link.classList.add('active');
    });
  });
}

// ─── Mobile Nav ───
function toggleMobileNav() {
  document.querySelector('.nav-menu').classList.toggle('open');
}

// ─── Scroll Animations ───
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.animate, .animate-left, .animate-right').forEach(el => observer.observe(el));
}

// ─── Skill Bars ───
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.progress-bar-fill');
        if (bar) bar.style.width = bar.getAttribute('data-width');
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll('.skill-item').forEach(el => observer.observe(el));
}

// ─── Counter Animation ───
function initCounters() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-number'));
        let current = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + '+';
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter-number').forEach(el => observer.observe(el));
}

// ─── Contact Form ───
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form);
    const subject = fd.get('subject') || 'Website Inquiry';
    const org = fd.get('organisation') ? `\nOrganisation: ${fd.get('organisation')}` : '';
    const body = `Name: ${fd.get('name')}\nEmail: ${fd.get('email')}${org}\n\n${fd.get('message')}`;
    window.location.href = `mailto:kkhidr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}

// ─── Smooth scroll for nav links ───
function initSmoothScroll() {
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.nav-menu').classList.remove('open');
    });
  });
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initNavbar();
  initSmoothScroll();
  initAnimations();
  initSkillBars();
  initCounters();
  initContactForm();
  goToSlide(0);
  startSlider();
});
