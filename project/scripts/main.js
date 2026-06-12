/* =====================================================
   ROOTS & RISE — MAIN JAVASCRIPT
   YouthRise Changemakers · Mathare, Nairobi
   WDD131 Final Project
   ===================================================== */

'use strict';

/* ─────────────────────────────────────────
   DATA — Objects & Arrays
───────────────────────────────────────── */
const partners = [
  { name: 'TaRL Africa', role: 'Curriculum design, level-based assessment tools, teacher training methodology', emoji: '📚' },
  { name: 'Uwezo Kenya', role: 'Learning assessments, quality benchmarking, advocacy data', emoji: '📊' },
  { name: 'PAL Network', role: 'Regional learning standards, cross-country best practice sharing', emoji: '🌍' },
  { name: 'Local Chiefs & Elders', role: 'Community mobilization and trust-building', emoji: '🤝' },
  { name: 'County Education Offices', role: 'Formal linkage to the education system, teacher recognition', emoji: '🏛️' },
  { name: 'Local Health CHVs', role: 'Supporting the nutrition component and health referrals', emoji: '🏥' },
];

const rootCauses = [
  { emoji: '👩‍🏫', title: 'Undertrained teachers', response: 'Structured PD with TaRL/Uwezo/PAL-backed curriculum' },
  { emoji: '🗣️', title: 'Language mismatch', response: 'Swahili (urban), mother tongue (rural), phased transition' },
  { emoji: '👥', title: 'Overcrowded classrooms', response: 'Hard cap of 1:10 teacher-to-learner ratio' },
  { emoji: '🏫', title: 'No ECDE before Grade 1', response: 'Pre-primary readiness module for out-of-school children' },
  { emoji: '🍵', title: 'Hunger reducing focus', response: 'Daily porridge for every child, every session' },
  { emoji: '📖', title: 'Low parental literacy', response: 'Dedicated adult literacy and numeracy classes' },
];

const problemCauses = [
  { icon: '📋', title: 'Interventions target symptoms, not roots', body: 'Most programmes fix one piece — a new curriculum, a textbook, a school feeding initiative — without addressing the full ecosystem. Partial solutions produce partial results.' },
  { icon: '🔍', title: 'The most excluded are the hardest to reach', body: 'Government and NGO programmes naturally gravitate toward what is measurable and accessible. The community teacher with no training, the out-of-school child, and the illiterate parent are invisible to most systems.' },
  { icon: '🎓', title: 'Teachers are deployed, not developed', body: 'Kenya trains teachers to pass exams, not to teach foundational skills at the right level. Professional development is treated as a bonus, not a baseline.' },
  { icon: '🗣️', title: 'Language policy acknowledged, not acted on', body: 'Research and Kenya\'s own policy recognise mother tongue as the most effective language of early instruction. Yet in practice, implementation remains inconsistent and politically complicated.' },
  { icon: '👨‍👩‍👧', title: 'Adults are left out of the equation', body: 'A child\'s learning does not end at the classroom door. Yet virtually no FLN programme systematically addresses the literacy and digital exclusion of the parents and guardians those children go home to.' },
  { icon: '💰', title: 'Short-term funding, long-term problem', body: 'Most FLN interventions are project-based — funded in 2–3 year cycles that end just as community trust is being built and results are beginning to show. Donors move on. The gap stays.' },
];

const teacherModules = [
  { label: 'FLN Pedagogy', desc: 'Teaching reading and numeracy using TaRL\'s proven level-based methodology' },
  { label: 'Language of Instruction', desc: 'Bilingual delivery — Swahili + English (urban); Mother tongue + Swahili (rural)' },
  { label: 'Learner-Centred Methods', desc: 'Activity-based learning, storytelling, games, songs' },
  { label: 'Assessment for Learning', desc: 'Simple, ongoing diagnostic tools to track each child\'s level' },
  { label: 'Inclusive Education', desc: 'Reaching children with learning differences, shy learners, and late starters' },
  { label: 'Classroom Management', desc: 'Managing small groups effectively within the 1:10 ratio' },
];

const deliverySteps = [
  'Initial 5-day intensive bootcamp before programme launch',
  'Monthly half-day refresher sessions — peer learning circles',
  'Quarterly classroom observation and coaching by YouthRise master trainers',
  'Certified YouthRise FLN Educator credential upon completion',
];

const learnerLevels = [
  { level: 'Level 1', name: 'Beginners', desc: 'Cannot yet recognise letters or numbers' },
  { level: 'Level 2', name: 'Emerging', desc: 'Recognises letters/numbers but cannot form words or count fluently' },
  { level: 'Level 3', name: 'Developing', desc: 'Can read simple words and do basic counting' },
  { level: 'Level 4', name: 'Advancing', desc: 'Ready for bridging to formal Grade 1 curriculum' },
];

const adultModules = [
  {
    title: 'Module A — Basic Literacy',
    items: ['Recognising and writing their own name', 'Reading simple signs, labels, and messages (Swahili)', 'Reading and writing basic sentences'],
  },
  {
    title: 'Module B — Functional Numeracy',
    items: ['Counting, addition, subtraction in daily-life contexts', 'Understanding prices, change, and receipts', 'Detecting overcharging and short-changing', 'Basic record-keeping for small businesses'],
  },
  {
    title: 'Module C — Digital & Mobile Literacy',
    items: ['Making and receiving phone calls', 'Checking M-PESA balance and transaction history', 'Identifying and avoiding M-PESA scams', 'Sending a basic SMS'],
  },
];

const responseTableData = [
  { cause: 'Undertrained teachers', response: 'Structured PD with TaRL/Uwezo/PAL-backed curriculum' },
  { cause: 'Language of instruction mismatch', response: 'Swahili (urban), mother tongue (rural), phased transition' },
  { cause: 'Overcrowded classes', response: 'Hard cap of 1:10 teacher-to-learner ratio' },
  { cause: 'No ECDE before Grade 1', response: 'Pre-primary readiness module for out-of-school children' },
  { cause: 'Hunger reducing concentration', response: 'Daily porridge for every child, every session' },
  { cause: 'Low parental literacy & support', response: 'Dedicated adult literacy and numeracy classes' },
  { cause: 'Digital exclusion & financial scams', response: 'Mobile and M-PESA literacy for adults' },
  { cause: 'Inappropriate curriculum', response: 'Learner-friendly, ability-based, partner-approved content' },
];

const waysToHelp = [
  { icon: '🧑‍🏫', title: 'Volunteer as a Teacher', body: 'Bring your skills to a community learning session. We provide full TaRL training. No formal teaching qualification required — just commitment and care.' },
  { icon: '💛', title: 'Donate', body: 'Your contribution directly funds porridge for children, learning materials, and teacher stipends. Every shilling reaches the learning room.' },
  { icon: '🤝', title: 'Become a Partner', body: 'Organisations, NGOs, and institutions can partner with us on programme delivery, funding, research, or advocacy.' },
  { icon: '📣', title: 'Spread the Word', body: 'Share our work on social media, talk about the FLN crisis, and help us reach people who can make a difference.' },
];

const faqData = [
  { q: 'What exactly is the FLN crisis in Mathare?', a: 'Foundational Literacy and Numeracy (FLN) refers to a child\'s ability to read, write, and do basic arithmetic. In Kenya, 60% of Grade 4 learners cannot read a Grade 3 appropriate text. In informal settlements like Mathare, the situation is worse — compounded by overcrowded classrooms, language barriers, and lack of ECDE access.' },
  { q: 'Is there an adult literacy component? Can my parent join?', a: 'Yes — absolutely. Pillar 3 of our programme is dedicated to adult literacy, functional numeracy, and digital inclusion. Sessions are held 2–3 evenings per week and on weekends to fit working schedules. Contact us and we will connect you to the nearest session.' },
  { q: 'How is Roots and Rise different from other literacy programmes?', a: 'Most programmes address one piece of the puzzle. We address all of them simultaneously — the teacher, the child, and the parent — in the right language, at the right level, with nutritional support. We also stay. We are not a 2-year pilot. We are community infrastructure.' },
  { q: 'What commitment is required from volunteer teachers?', a: 'Volunteers attend our 5-day intensive bootcamp, then commit to at least one session per week for a minimum of 3 months. Monthly peer learning circles provide ongoing support. We also offer a certified YouthRise FLN Educator credential upon completion.' },
  { q: 'How do you measure impact?', a: 'Every child is assessed at intake using TaRL diagnostic tools and placed into an ability level. Weekly progress sheets track movement between levels. We run formal assessments at baseline, midline, and endline of each programme cycle — and benchmark against Uwezo Kenya\'s national learning data.' },
];

/* ─────────────────────────────────────────
   UTILITY FUNCTIONS
───────────────────────────────────────── */
function formatNumber(num) {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  } else if (num >= 1000) {
    return `${(num / 1000).toFixed(0)}K`;
  }
  return `${num}`;
}

function setYear() {
  const year = new Date().getFullYear();
  const yearEls = document.querySelectorAll('#year, .footer-year');
  yearEls.forEach(el => { el.textContent = year; });
}

/* ─────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────── */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    // Animate hamburger to X
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'translateY(6px) rotate(45deg)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'translateY(-6px) rotate(-45deg)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close on outside click
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });
}

/* ─────────────────────────────────────────
   COUNTER ANIMATION (DOM + conditional)
───────────────────────────────────────── */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1800;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(eased * target);

    if (target >= 1000000) {
      el.textContent = `${(current / 1000000).toFixed(1)}M${suffix}`;
    } else if (target >= 1000) {
      el.textContent = `${(current / 1000).toFixed(0)}K${suffix}`;
    } else {
      el.textContent = `${current}${suffix}`;
    }

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }
  requestAnimationFrame(update);
}

function initCounters() {
  const counters = document.querySelectorAll('.stat-num[data-target]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.counted) {
        entry.target.dataset.counted = 'true';
        animateCounter(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observer.observe(c));
}

/* Hero badge counter for children reached (localStorage persistence) */
function initHeroBadge() {
  const badge = document.getElementById('children-count');
  if (!badge) return;

  // Use localStorage to store / retrieve the displayed count
  const stored = localStorage.getItem('rr_children_reached');
  const target = stored ? parseInt(stored, 10) : 480;

  badge.textContent = formatNumber(target);

  // Animate on load
  let current = 0;
  const step = Math.ceil(target / 60);
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    badge.textContent = formatNumber(current);
    if (current >= target) clearInterval(timer);
  }, 30);
}

/* ─────────────────────────────────────────
   SCROLL REVEAL
───────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.fade-up, .cause-item, .cause-card, .chain-step');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger delay using index
        const delay = entry.target.dataset.delay || 0;
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // Set stagger delays
  document.querySelectorAll('.cause-item').forEach((el, i) => {
    el.dataset.delay = i * 80;
  });
  document.querySelectorAll('.cause-card').forEach((el, i) => {
    el.dataset.delay = i * 100;
  });
  document.querySelectorAll('.chain-step').forEach((el, i) => {
    el.dataset.delay = i * 150;
  });

  els.forEach(el => observer.observe(el));
}

/* ─────────────────────────────────────────
   HOME PAGE BUILDERS
───────────────────────────────────────── */
function buildRootCauseList() {
  const container = document.getElementById('root-cause-list');
  if (!container) return;

  container.innerHTML = rootCauses.map(item => `
    <div class="cause-item">
      <span class="cause-emoji" aria-hidden="true">${item.emoji}</span>
      <div class="cause-text">
        <strong>${item.title}</strong>
        ${item.response}
      </div>
    </div>
  `).join('');
}

function buildPartnersGrid() {
  const grid = document.getElementById('partners-grid');
  if (!grid) return;

  grid.innerHTML = partners.map(p => `
    <div class="partner-card fade-up">
      <span class="partner-emoji" aria-hidden="true">${p.emoji}</span>
      <p class="partner-name">${p.name}</p>
      <p class="partner-role">${p.role}</p>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────
   PROGRAMME PAGE BUILDERS
───────────────────────────────────────── */
function buildProblemCauses() {
  const grid = document.getElementById('problem-causes-grid');
  if (!grid) return;

  grid.innerHTML = problemCauses.map(item => `
    <div class="cause-card">
      <span class="cause-card-icon" aria-hidden="true">${item.icon}</span>
      <h3 class="cause-card-title">${item.title}</h3>
      <p class="cause-card-body">${item.body}</p>
    </div>
  `).join('');
}

function buildTeacherModuleTable() {
  const container = document.getElementById('module-table-1');
  if (!container) return;

  container.innerHTML = `
    <div class="module-table-inner">
      ${teacherModules.map(m => `
        <div class="module-row">
          <span class="module-label">${m.label}</span>
          <span class="module-desc">${m.desc}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function buildDeliverySteps() {
  const container = document.getElementById('delivery-steps-1');
  if (!container) return;

  container.innerHTML = `
    <div class="delivery-steps">
      ${deliverySteps.map((step, i) => `
        <div class="delivery-step">
          <span class="step-dot" aria-hidden="true">${i + 1}</span>
          <span>${step}</span>
        </div>
      `).join('')}
    </div>
  `;
}

function buildLevelsGrid() {
  const grid = document.getElementById('levels-grid');
  if (!grid) return;

  grid.innerHTML = learnerLevels.map(l => `
    <div class="level-card">
      <p class="level-badge">${l.level}</p>
      <p class="level-name">${l.name}</p>
      <p class="level-desc">${l.desc}</p>
    </div>
  `).join('');
}

function buildAdultModules() {
  const container = document.getElementById('adult-modules');
  if (!container) return;

  container.innerHTML = adultModules.map(mod => `
    <div class="adult-module">
      <p class="adult-module-title">${mod.title}</p>
      <ul>
        ${mod.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function buildResponseTable() {
  const tbody = document.querySelector('#response-table tbody');
  if (!tbody) return;

  tbody.innerHTML = responseTableData.map(row => `
    <tr>
      <td>${row.cause}</td>
      <td>${row.response}</td>
    </tr>
  `).join('');
}

function buildPartnersFullGrid() {
  const grid = document.getElementById('partners-full-grid');
  if (!grid) return;

  grid.innerHTML = partners.map(p => `
    <div class="partner-full-card fade-up">
      <p class="partner-full-name">${p.emoji} ${p.name}</p>
      <p class="partner-full-role">${p.role}</p>
    </div>
  `).join('');
}

/* ─────────────────────────────────────────
   CONTACT PAGE BUILDERS
───────────────────────────────────────── */
function buildWaysGrid() {
  const grid = document.getElementById('ways-grid');
  if (!grid) return;

  grid.innerHTML = waysToHelp.map(w => `
    <div class="way-card fade-up">
      <span class="way-icon" aria-hidden="true">${w.icon}</span>
      <h3 class="way-title">${w.title}</h3>
      <p class="way-body">${w.body}</p>
    </div>
  `).join('');
}

function buildFAQ() {
  const list = document.getElementById('faq-list');
  if (!list) return;

  list.innerHTML = faqData.map((item, i) => `
    <div class="faq-item" id="faq-item-${i}">
      <button
        class="faq-question"
        aria-expanded="false"
        aria-controls="faq-answer-${i}"
        data-index="${i}"
      >
        <span>${item.q}</span>
        <span class="faq-chevron" aria-hidden="true">▼</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}" role="region">
        <p>${item.a}</p>
      </div>
    </div>
  `).join('');

  // Attach event listeners
  list.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(isOpen));

      // Close others (conditional branching)
      if (isOpen) {
        list.querySelectorAll('.faq-item.open').forEach(other => {
          if (other !== item) {
            other.classList.remove('open');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          }
        });
      }

      // Persist open FAQ in localStorage
      const openIndex = isOpen ? btn.dataset.index : null;
      if (openIndex !== null) {
        localStorage.setItem('rr_faq_open', openIndex);
      } else {
        localStorage.removeItem('rr_faq_open');
      }
    });
  });

  // Restore open FAQ from localStorage
  const stored = localStorage.getItem('rr_faq_open');
  if (stored !== null) {
    const item = document.getElementById(`faq-item-${stored}`);
    const btn = item && item.querySelector('.faq-question');
    if (item && btn) {
      item.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
  }
}

/* ─────────────────────────────────────────
   FORM VALIDATION & SUBMISSION
───────────────────────────────────────── */
function validateField(input) {
  const id = input.id;
  const value = input.value.trim();
  const errorEl = document.getElementById(`${id}-error`);

  // Conditional branching for different field types
  if (input.required && value === '') {
    if (errorEl) errorEl.textContent = 'This field is required.';
    input.classList.add('error');
    return false;
  }

  if (input.type === 'email' && value !== '') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      if (errorEl) errorEl.textContent = 'Please enter a valid email address.';
      input.classList.add('error');
      return false;
    }
  }

  if (id === 'message' && value.length < 10) {
    if (errorEl) errorEl.textContent = 'Please write at least 10 characters.';
    input.classList.add('error');
    return false;
  }

  if (errorEl) errorEl.textContent = '';
  input.classList.remove('error');
  return true;
}

function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  // Character counter using template literal
  const textarea = document.getElementById('message');
  const charCount = document.getElementById('char-count');
  const maxChars = 500;

  if (textarea && charCount) {
    textarea.addEventListener('input', () => {
      const len = textarea.value.length;
      charCount.textContent = `${len} / ${maxChars} characters`;

      if (len > maxChars) {
        textarea.value = textarea.value.substring(0, maxChars);
        charCount.textContent = `${maxChars} / ${maxChars} characters`;
      }
    });
  }

  // Real-time validation on blur
  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });

  // Submit
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate all required fields
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) isValid = false;
    });

    if (!isValid) return;

    // Collect form data using objects & template literals
    const formData = {
      firstName: document.getElementById('first-name').value.trim(),
      lastName: document.getElementById('last-name').value.trim(),
      email: document.getElementById('email').value.trim(),
      organisation: document.getElementById('organisation').value.trim(),
      role: document.getElementById('role').value,
      message: document.getElementById('message').value.trim(),
      newsletter: document.getElementById('newsletter').checked,
      timestamp: new Date().toISOString(),
    };

    // Save to localStorage
    const submissions = JSON.parse(localStorage.getItem('rr_form_submissions') || '[]');
    submissions.push(formData);
    localStorage.setItem('rr_form_submissions', JSON.stringify(submissions));

    // Show success state
    const successEl = document.getElementById('form-success');
    if (successEl) {
      form.hidden = true;
      successEl.hidden = false;
      successEl.focus();
    }
  });

  // Pre-fill from localStorage if user has submitted before
  const stored = localStorage.getItem('rr_form_submissions');
  if (stored) {
    const submissions = JSON.parse(stored);
    if (submissions.length > 0) {
      const last = submissions[submissions.length - 1];
      const firstNameEl = document.getElementById('first-name');
      const lastNameEl = document.getElementById('last-name');
      const emailEl = document.getElementById('email');
      if (firstNameEl) firstNameEl.value = last.firstName || '';
      if (lastNameEl) lastNameEl.value = last.lastName || '';
      if (emailEl) emailEl.value = last.email || '';
    }
  }
}

/* ─────────────────────────────────────────
   STICKY NAV SHADOW on scroll
───────────────────────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.style.boxShadow = '0 4px 24px rgba(0,0,0,.35)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });
}

/* ─────────────────────────────────────────
   VISIT COUNTER (localStorage demo)
───────────────────────────────────────── */
function trackVisit() {
  const key = 'rr_visit_count';
  const count = parseInt(localStorage.getItem(key) || '0', 10) + 1;
  localStorage.setItem(key, String(count));
}

/* ─────────────────────────────────────────
   INIT — dispatch by page
───────────────────────────────────────── */
function init() {
  setYear();
  initNav();
  initNavScroll();
  trackVisit();

  const page = window.location.pathname.split('/').pop() || 'index.html';

  if (page === 'index.html' || page === '') {
    // Home page
    buildRootCauseList();
    buildPartnersGrid();
    initCounters();
    initHeroBadge();
    initScrollReveal();
  } else if (page === 'programme.html') {
    // Programme page
    buildProblemCauses();
    buildTeacherModuleTable();
    buildDeliverySteps();
    buildLevelsGrid();
    buildAdultModules();
    buildResponseTable();
    buildPartnersFullGrid();
    initScrollReveal();
  } else if (page === 'contact.html') {
    // Contact page
    buildWaysGrid();
    buildFAQ();
    initContactForm();
    initScrollReveal();
  }
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
