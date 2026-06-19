/* ═══════════════════════════════════════════════════════════════
   kimz.dev — Clark-Inspired JS
   Sections: DOM utilities, State, i18n, Mobile nav, Hero slider,
   Scroll spy, Navbar, Intersection animations, Counter, Contact form, Init
   ═══════════════════════════════════════════════════════════════ */

// ─── DOM Utilities ───
function $(sel, ctx) { return (ctx || document).querySelector(sel); }
function $$(sel, ctx) { return (ctx || document).querySelectorAll(sel); }

// ─── State ───
let currentLang = localStorage.getItem('kimz-lang') || 'en';
let currentSlide = 0;
let slideInterval = null;
let sliderPaused = false; // true after user interacts with dots/arrows

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// ─── Internationalisation ───
const translations = {
  en: {
    nav: { home: 'Home', about: 'About', resume: 'Resume', courses: 'Courses', skills: 'Skills', projects: 'Projects', blog: 'Blog', contact: 'Contact' },
    hero: [
      { sub: 'مرحباً · Hello!', h1: "I'm <span class='highlight'>Karim Khidr</span>", h2: 'AI & Cybersecurity Trainer · Senior Engineer', tagline: 'ورشة كيمز — مساحة للتجربة والتعلّم', btn1: 'Explore Courses', btn2: 'Watch on YouTube' },
      { sub: 'Train with confidence', h1: "Learn. Build. <span class='highlight'>Secure.</span>", h2: 'Practical AI & Cybersecurity training from 20+ years of production experience', tagline: '', btn1: 'View Courses', btn2: 'About Me' },
      { sub: 'ورشة كيمز', h1: "The <span class='highlight'>Workshop</span>", h2: 'Tutorials, experiments, and behind-the-scenes builds on YouTube', tagline: 'مساحة للتجربة والتعلّم', btn1: 'Subscribe', btn2: 'Learn More' }
    ],
    slider: { pause: 'Pause slider', play: 'Play slider', showSlide: 'Show slide' },
    about: { heading: 'About Me', big: 'About', bio1: "I'm <strong>Karim Khidr</strong> — most people know me as <strong style='color:var(--gold)'>KiMZ</strong>. I'm a Senior Service Engineer at Microsoft with over 20 years of experience in technology, cloud operations, cybersecurity, and automation.", bio2: "I hold a <strong style='color:var(--gold)'>First Class Honours MSc in Cybersecurity</strong> (overall result: 82%) and have designed AI-assisted workflows that reduced repetitive manual triage and coordination effort by approximately 60–70% within the target process. I started my career as a university instructor — and that passion for teaching never left.", counter_label: 'Years in Tech', btn: 'Contact Me' },
    resume: { heading: 'Resume', big: 'Resume', desc: 'A career spanning university teaching, global telecom operations, and enterprise cloud engineering.' },
    courses: { heading: 'Courses', big: 'Courses', desc: 'Hands-on training built from real-world production experience' },
    pathways: { heading: 'Who Is This For?', big: 'Pathways', students_title: 'Students & Junior Professionals', students_desc: 'Career-focused sessions, practical cybersecurity foundations and responsible use of AI as a learning assistant.', students_cta: 'Explore Student Training', universities_title: 'Universities', universities_desc: 'Guest lectures, 90-minute intensive sessions and applied programmes designed for computer science and cybersecurity students.', universities_cta: 'Request a University Session', orgs_title: 'Organisations', orgs_desc: 'Practical training and advisory sessions covering AI workflows, cybersecurity, cloud operations and technical service practices.', orgs_cta: 'Discuss Corporate Training' },
    credibility: { heading: 'Why Learn With Karim', big: 'Why', exp_title: 'Enterprise Experience', exp_desc: 'More than 20 years across support, service delivery, customer success, incident management, cloud operations and senior engineering.', teach_title: 'Teaching & Mentoring', teach_desc: 'University teaching, professional training design and applied student research mentoring.', research_title: 'Applied Cybersecurity Research', research_desc: 'First-class MSc research focused on adversarial machine learning, intrusion detection and explainable AI.', ai_title: 'Practical AI Workflows', ai_desc: 'Experience designing human-supervised workflows for summarisation, triage, routing, knowledge management and operational follow-through.' },
    skills: { heading: 'Capabilities', big: 'Skills', desc: 'Core competencies developed across 20+ years of engineering and operations' },
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
    slider: { pause: 'إيقاف العرض', play: 'تشغيل العرض', showSlide: 'عرض الشريحة' },
    about: { heading: 'عني', big: 'عني', bio1: "أنا <strong>كريم خضر</strong> — معظم الناس يعرفوني بـ <strong style='color:var(--gold)'>كيمز</strong>. مهندس أول في مايكروسوفت وعندي أكتر من ٢٠ سنة خبرة في التكنولوجيا، العمليات السحابية، الأمن السيبراني، والأتمتة.", bio2: "حاصل على <strong style='color:var(--gold)'>ماجستير أمن سيبراني بمرتبة الشرف الأولى</strong> (النتيجة الكلية: ٨٢٪) وصممت أنظمة مساعدة بالذكاء الاصطناعي قللت العمل اليدوي المتكرر في الفرز والتنسيق بنسبة ٦٠-٧٠٪ تقريباً. بدأت مسيرتي كمدرس جامعي — وشغف التعليم ما سابني أبداً.", counter_label: 'سنة خبرة', btn: 'تواصل معي' },
    resume: { heading: 'السيرة الذاتية', big: 'السيرة', desc: 'مسيرة مهنية تمتد من التدريس الجامعي إلى عمليات الاتصالات العالمية وهندسة السحابة.' },
    courses: { heading: 'الدورات', big: 'الدورات', desc: 'تدريب عملي مبني على خبرة حقيقية في بيئات الإنتاج' },
    pathways: { heading: 'لمن هذا؟', big: 'المسارات', students_title: 'الطلاب والمهنيون المبتدئون', students_desc: 'جلسات تركز على المسار المهني، أساسيات الأمن السيبراني العملية، والاستخدام المسؤول للذكاء الاصطناعي كمساعد تعليمي.', students_cta: 'استكشف تدريب الطلاب', universities_title: 'الجامعات', universities_desc: 'محاضرات ضيف، جلسات مكثفة ٩٠ دقيقة، وبرامج تطبيقية مصممة لطلاب علوم الحاسب والأمن السيبراني.', universities_cta: 'اطلب جلسة جامعية', orgs_title: 'المؤسسات', orgs_desc: 'تدريب عملي وجلسات استشارية تغطي أنظمة الذكاء الاصطناعي، الأمن السيبراني، العمليات السحابية والممارسات التقنية.', orgs_cta: 'ناقش التدريب المؤسسي' },
    credibility: { heading: 'لماذا تتعلم مع كريم', big: 'لماذا', exp_title: 'خبرة مؤسسية', exp_desc: 'أكثر من ٢٠ سنة في الدعم التقني، تقديم الخدمات، نجاح العملاء، إدارة الحوادث، العمليات السحابية والهندسة.', teach_title: 'التدريس والإرشاد', teach_desc: 'تدريس جامعي، تصميم برامج تدريبية، وإرشاد بحثي تطبيقي للطلاب.', research_title: 'بحث أمن سيبراني تطبيقي', research_desc: 'بحث ماجستير بمرتبة الشرف الأولى يركز على التعلم الآلي العدائي، كشف التسلل والذكاء الاصطناعي القابل للتفسير.', ai_title: 'أنظمة ذكاء اصطناعي عملية', ai_desc: 'خبرة في تصميم أنظمة عمل بإشراف بشري للتلخيص، الفرز، التوجيه، إدارة المعرفة والمتابعة التشغيلية.' },
    skills: { heading: 'القدرات', big: 'المهارات', desc: 'كفاءات أساسية مبنية على أكتر من ٢٠ سنة في الهندسة والعمليات' },
    projects: { heading: 'المشاريع والورشة', big: 'المشاريع', desc: 'معاينات الدورات، محتوى يوتيوب، وتجارب من ورشة كيمز' },
    blog: { heading: 'المدونة', big: 'المدونة', desc: 'أفكار عن الذكاء الاصطناعي، الأمان، الأتمتة، ورحلة التعلّم' },
    contact: { heading: 'تواصل معي', big: 'تواصل', desc: 'مهتم بالتدريب أو الاستشارات أو التعاون؟ كلمني.', name: 'الاسم', email: 'البريد الإلكتروني', org: 'المؤسسة أو الجامعة', subject: 'نوع الاستفسار', message: 'الرسالة', send: 'إرسال', name_label: 'الاسم', email_label: 'البريد الإلكتروني', org_label: 'المؤسسة / الجامعة (اختياري)', subject_label: 'نوع الاستفسار', message_label: 'الرسالة', mailto_notice: 'إرسال هذا النموذج سيفتح تطبيق البريد الإلكتروني مع الرسالة جاهزة. الموقع لا يرسل أو يخزن الرسالة مباشرة.', subjects: ['محاضرة جامعية', 'ورشة عمل طلابية', 'تدريب مؤسسي', 'استشارات أتمتة ذكاء اصطناعي', 'برنامج أمن سيبراني', 'فرصة تحدث', 'تعاون إبداعي', 'أخرى'] },
    footer: { copy: '© ٢٠٢٦ كيمز. جميع الحقوق محفوظة.', credit: 'تصميم مستوحى من Colorlib', disclaimer: 'الآراء والمحتوى في هذا الموقع شخصية ولا تمثل أو تشير إلى تأييد من أصحاب العمل الحاليين أو السابقين.' }
  }
};

// ─── Language switching ───
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kimz-lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  const t = translations[lang];
  const toggle = $('.lang-btn');
  if (toggle) {
    toggle.textContent = lang === 'en' ? 'عربي' : 'EN';
    toggle.setAttribute('aria-label', lang === 'en' ? 'Switch to Arabic' : 'التبديل إلى الإنجليزية');
  }

  // data-i18n elements
  $$('[data-i18n]').forEach(function(el) {
    var keys = el.getAttribute('data-i18n').split('.');
    var val = t;
    for (var i = 0; i < keys.length; i++) { if (val) val = val[keys[i]]; }
    if (val !== undefined && typeof val === 'string') {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
      else el.innerHTML = val;
    }
  });

  // Translate enquiry dropdown options
  var select = $('#enquiry-type');
  if (select && t.contact && t.contact.subjects) {
    var options = select.querySelectorAll('option[value]');
    t.contact.subjects.forEach(function(label, i) {
      if (options[i]) options[i].textContent = label;
    });
  }

  // Update hero slide text
  updateHeroSlide();

  // Update slider button labels
  var pauseBtn = $('.hero-pause');
  if (pauseBtn) {
    var key = pauseBtn.getAttribute('aria-pressed') === 'true' ? 'play' : 'pause';
    pauseBtn.setAttribute('aria-label', t.slider[key]);
  }

  // Update hero dot labels
  $$('.hero-dot').forEach(function(dot, i) {
    dot.setAttribute('aria-label', t.slider.showSlide + ' ' + (i + 1));
  });
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

// ─── Hero Slider ───
function updateHeroSlide() {
  var slides = $$('.hero-slide');
  var dots = $$('.hero-dot');
  if (!slides.length) return;

  slides.forEach(function(slide, i) {
    var isActive = i === currentSlide;
    slide.classList.toggle('active', isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
    // Remove inactive slide links from tab order
    slide.querySelectorAll('a, button').forEach(function(el) {
      el.tabIndex = isActive ? 0 : -1;
    });
  });

  dots.forEach(function(dot, i) {
    dot.classList.toggle('active', i === currentSlide);
    dot.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
  });

  var t = translations[currentLang];
  var slideData = t.hero[currentSlide];
  var activeSlide = slides[currentSlide];
  if (!activeSlide || !slideData) return;

  var sub = activeSlide.querySelector('.subheading');
  var h1 = activeSlide.querySelector('h1');
  var h2 = activeSlide.querySelector('h2');
  var tagline = activeSlide.querySelector('.arabic-line');
  var btns = activeSlide.querySelectorAll('.btn');

  if (sub) sub.innerHTML = slideData.sub;
  if (h1) h1.innerHTML = slideData.h1;
  if (h2) h2.innerHTML = slideData.h2;
  if (tagline) tagline.innerHTML = slideData.tagline;
  if (btns[0]) btns[0].textContent = slideData.btn1;
  if (btns[1]) btns[1].textContent = slideData.btn2;
}

function goToSlide(index) {
  var slides = $$('.hero-slide');
  if (!slides.length) return;
  currentSlide = ((index % slides.length) + slides.length) % slides.length;
  updateHeroSlide();
}

function nextSlide() { goToSlide(currentSlide + 1); }

function startSlider() {
  stopSlider();
  if (!prefersReducedMotion.matches && !sliderPaused) {
    slideInterval = setInterval(nextSlide, 5000);
  }
}

function stopSlider() {
  if (slideInterval) { clearInterval(slideInterval); slideInterval = null; }
}

function initSlider() {
  var heroSection = $('.hero');
  if (!heroSection) return;

  // Dot buttons
  $$('.hero-dot').forEach(function(dot) {
    dot.addEventListener('click', function() {
      var index = parseInt(this.getAttribute('data-slide-index'), 10);
      sliderPaused = true;
      stopSlider();
      goToSlide(index);
      updatePauseButton(true);
    });
  });

  // Pause/play button
  var pauseBtn = $('.hero-pause');
  if (pauseBtn) {
    pauseBtn.addEventListener('click', function() {
      sliderPaused = !sliderPaused;
      if (sliderPaused) {
        stopSlider();
      } else {
        startSlider();
      }
      updatePauseButton(sliderPaused);
    });
  }

  // Pause on hover/focus (only if not already manually paused)
  heroSection.addEventListener('mouseenter', function() { if (!sliderPaused) stopSlider(); });
  heroSection.addEventListener('mouseleave', function() { if (!sliderPaused) startSlider(); });
  heroSection.addEventListener('focusin', function() { if (!sliderPaused) stopSlider(); });
  heroSection.addEventListener('focusout', function() { if (!sliderPaused) startSlider(); });

  // Respect reduced motion changes
  prefersReducedMotion.addEventListener('change', function() {
    if (prefersReducedMotion.matches) { stopSlider(); } else if (!sliderPaused) { startSlider(); }
  });

  // Initial state
  goToSlide(0);
  if (!prefersReducedMotion.matches) startSlider();
}

function updatePauseButton(paused) {
  var pauseBtn = $('.hero-pause');
  if (!pauseBtn) return;
  var t = translations[currentLang];
  pauseBtn.setAttribute('aria-pressed', String(paused));
  pauseBtn.setAttribute('aria-label', paused ? t.slider.play : t.slider.pause);
  pauseBtn.innerHTML = paused ? '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><polygon points="3,1 13,8 3,15"/></svg>' : '<svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><rect x="2" y="1" width="4" height="14"/><rect x="10" y="1" width="4" height="14"/></svg>';
}

// ─── Mobile Navigation ───
function initMobileNav() {
  var toggle = $('.nav-toggle');
  var menu = $('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', function() {
    var isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    menu.setAttribute('aria-hidden', String(!isOpen));
    // Swap icon
    toggle.innerHTML = isOpen
      ? '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
      : '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
  });

  // Close on Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      toggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
      toggle.focus();
    }
  });

  // Close menu on nav link click
  menu.querySelectorAll('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function() {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      menu.setAttribute('aria-hidden', 'true');
      toggle.innerHTML = '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    });
  });
}

// ─── Scroll Spy ───
function initScrollSpy() {
  var navbar = $('.navbar');
  var sections = $$('section[id]');
  if (!navbar) return;

  window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 50);

    var current = '';
    sections.forEach(function(section) {
      if (window.scrollY >= section.offsetTop - 100) {
        current = section.getAttribute('id');
      }
    });

    $$('.nav-menu a').forEach(function(link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
}

// ─── Smooth Scroll ───
function initSmoothScroll() {
  $$('a[href^="#"]').forEach(function(link) {
    link.addEventListener('click', function(e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = $(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: prefersReducedMotion.matches ? 'auto' : 'smooth' });
      }
    });
  });
}

// ─── Intersection Animations ───
function initAnimations() {
  if (prefersReducedMotion.matches) return;

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry, i) {
      if (entry.isIntersecting) {
        setTimeout(function() { entry.target.classList.add('visible'); }, i * 80);
      }
    });
  }, { threshold: 0.1 });

  $$('.animate, .animate-left, .animate-right').forEach(function(el) {
    observer.observe(el);
  });
}

// ─── Skill Bars ───
function initSkillBars() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var bar = entry.target.querySelector('.progress-bar-fill');
        if (bar) bar.style.width = bar.getAttribute('data-width');
      }
    });
  }, { threshold: 0.3 });

  $$('.skill-item').forEach(function(el) { observer.observe(el); });
}

// ─── Counter Animation ───
function initCounters() {
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var target = parseInt(el.getAttribute('data-number'), 10);
        if (isNaN(target)) return;
        var current = 0;
        var step = target / 40;
        var timer = setInterval(function() {
          current += step;
          if (current >= target) { current = target; clearInterval(timer); }
          el.textContent = Math.floor(current) + '+';
        }, 30);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  $$('.counter-number').forEach(function(el) { observer.observe(el); });
}

// ─── Contact Form ───
function initContactForm() {
  var form = $('#contact-form');
  if (!form) return;

  // Pathway preselection: check URL hash
  var hash = window.location.hash;
  if (hash === '#contact') {
    var params = new URLSearchParams(window.location.search);
    var enquiry = params.get('enquiry');
    if (enquiry) {
      var select = $('#enquiry-type');
      if (select) {
        for (var i = 0; i < select.options.length; i++) {
          if (select.options[i].value === enquiry) { select.selectedIndex = i; break; }
        }
      }
    }
  }

  // Also support data-enquiry links
  $$('[data-enquiry]').forEach(function(link) {
    link.addEventListener('click', function() {
      var enquiryVal = this.getAttribute('data-enquiry');
      var select = $('#enquiry-type');
      if (select && enquiryVal) {
        for (var i = 0; i < select.options.length; i++) {
          if (select.options[i].value === enquiryVal) { select.selectedIndex = i; break; }
        }
      }
    });
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var fd = new FormData(form);
    var name = (fd.get('name') || '').toString().trim();
    var email = (fd.get('email') || '').toString().trim();
    var org = (fd.get('organisation') || '').toString().trim();
    var subject = (fd.get('subject') || 'Website Inquiry').toString();
    var message = (fd.get('message') || '').toString().trim();

    // Basic validation
    if (!name || !email || !message) return;

    // Sanitise for mailto (prevent header injection)
    subject = subject.replace(/[\r\n]/g, ' ');
    var body = 'Name: ' + name + '\nEmail: ' + email;
    if (org) body += '\nOrganisation: ' + org;
    body += '\n\n' + message;

    window.location.href = 'mailto:kkhidr@gmail.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  });
}

// ─── Language toggle binding ───
function initLangToggle() {
  var btn = $('.lang-btn');
  if (btn) {
    btn.addEventListener('click', toggleLanguage);
  }
}

// ─── Initialisation ───
document.addEventListener('DOMContentLoaded', function() {
  document.documentElement.classList.add('js');

  setLanguage(currentLang);
  initLangToggle();
  initMobileNav();
  initScrollSpy();
  initSmoothScroll();
  initAnimations();
  initSkillBars();
  initCounters();
  initContactForm();
  initSlider();
});