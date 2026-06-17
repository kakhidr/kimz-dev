/* ═══════════════════════════════════════════
   kimz.dev — Bilingual (i18n) System
   ═══════════════════════════════════════════ */

const translations = {
  en: {
    nav: { home: 'Home', courses: 'Courses', workshop: 'Workshop', blog: 'Blog', about: 'About', contact: 'Contact' },
    hero: {
      badge: '🚀 AI & Cybersecurity Training',
      title: 'Learn. Build. <span class="gold">Secure.</span>',
      subtitle: 'Practical training in AI, Cybersecurity, and Automation — designed for professionals who want to build real skills, not just watch tutorials.',
      tagline: 'ورشة كيمز — مساحة للتجربة والتعلّم',
      cta_courses: 'Explore Courses',
      cta_youtube: 'Watch on YouTube'
    },
    courses: {
      title: 'Courses',
      subtitle: 'Hands-on training from someone who builds and ships in production every day.',
      badge_coming: 'Coming Soon',
      badge_live: 'Enrolling Now',
      contact_cta: 'Register Interest'
    },
    workshop: {
      title: 'Workshop — YouTube',
      subtitle: 'Subscribe to Warshet KiMZ for tutorials, experiments, and behind-the-scenes builds.'
    },
    blog: {
      title: 'Blog',
      subtitle: 'Thoughts on AI, security, automation, and the learning journey.',
      read_more: 'Read More →'
    },
    about: {
      title: 'About KiMZ',
      subtitle: 'The person behind the workshop.'
    },
    contact: {
      title: 'Get In Touch',
      subtitle: 'Interested in training, collaboration, or consulting? Let\'s talk.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      subjects: ['Course Inquiry', 'Corporate Training', 'Consulting', 'Collaboration', 'Other']
    },
    footer: {
      copy: '© 2026 KiMZ. All rights reserved.',
      tagline: 'مساحة للتجربة والتعلّم'
    }
  },
  ar: {
    nav: { home: 'الرئيسية', courses: 'الدورات', workshop: 'الورشة', blog: 'المدونة', about: 'عني', contact: 'تواصل' },
    hero: {
      badge: '🚀 تدريب في الذكاء الاصطناعي والأمن السيبراني',
      title: 'تعلّم. ابنِ. <span class="gold">أمِّن.</span>',
      subtitle: 'تدريب عملي في الذكاء الاصطناعي، الأمن السيبراني، والأتمتة — مصمم للمحترفين اللي عايزين يبنوا مهارات حقيقية.',
      tagline: 'ورشة كيمز — مساحة للتجربة والتعلّم',
      cta_courses: 'استكشف الدورات',
      cta_youtube: 'شاهد على يوتيوب'
    },
    courses: {
      title: 'الدورات',
      subtitle: 'تدريب عملي من شخص يبني ويشغّل في بيئات الإنتاج كل يوم.',
      badge_coming: 'قريباً',
      badge_live: 'التسجيل مفتوح',
      contact_cta: 'سجّل اهتمامك'
    },
    workshop: {
      title: 'الورشة — يوتيوب',
      subtitle: 'اشترك في ورشة كيمز لمتابعة التجارب والدروس.'
    },
    blog: {
      title: 'المدونة',
      subtitle: 'أفكار عن الذكاء الاصطناعي، الأمان، الأتمتة، ورحلة التعلّم.',
      read_more: 'اقرأ المزيد ←'
    },
    about: {
      title: 'عن كيمز',
      subtitle: 'الشخص اللي ورا الورشة.'
    },
    contact: {
      title: 'تواصل معي',
      subtitle: 'مهتم بالتدريب أو التعاون أو الاستشارات؟ كلمني.',
      name: 'الاسم',
      email: 'البريد الإلكتروني',
      subject: 'الموضوع',
      message: 'الرسالة',
      send: 'إرسال',
      subjects: ['استفسار عن دورة', 'تدريب مؤسسي', 'استشارات', 'تعاون', 'أخرى']
    },
    footer: {
      copy: '© ٢٠٢٦ كيمز. جميع الحقوق محفوظة.',
      tagline: 'مساحة للتجربة والتعلّم'
    }
  }
};

let currentLang = localStorage.getItem('kimz-lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kimz-lang', lang);
  document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;

  // Update toggle button
  const toggle = document.querySelector('.lang-toggle');
  if (toggle) toggle.textContent = lang === 'en' ? 'عربي' : 'EN';

  // Update all [data-i18n] elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const keys = el.getAttribute('data-i18n').split('.');
    let value = translations[lang];
    keys.forEach(k => { if (value) value = value[k]; });
    if (value) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = value;
      } else {
        el.innerHTML = value;
      }
    }
  });

  // Update nav links active state
  updateActiveNav();
}

function toggleLanguage() {
  setLanguage(currentLang === 'en' ? 'ar' : 'en');
}

// ─── Mobile Nav ───
function toggleMobileNav() {
  document.querySelector('.nav-links').classList.toggle('open');
}

// ─── Active Nav Link ───
function updateActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-page') === path);
  });
}

// ─── Scroll Animations ───
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── Contact Form (Formspree or mailto fallback) ───
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const subject = data.get('subject') || 'Website Inquiry';
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:kkhidr@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    form.reset();
  });
}

// ─── Init ───
document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initScrollAnimations();
  initContactForm();
  updateActiveNav();
});
