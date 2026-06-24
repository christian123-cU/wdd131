/* =====================================================
   MASHIMONI CBO — MAIN JAVASCRIPT
   Mathare, Nairobi
   ===================================================== */

'use strict';

/* ─────────────────────────────────────────
   MOBILE NAV
───────────────────────────────────────── */
function initMobileNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    const spans = toggle.querySelectorAll('span');
    if (isOpen) {
      spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
    } else {
      spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  });

  // Close mobile menu when a link inside it is clicked
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    });
  });
}

/* ─────────────────────────────────────────
   STICKY NAV SHADOW ON SCROLL
───────────────────────────────────────── */
function initNavScroll() {
  const nav = document.querySelector('.site-nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ─────────────────────────────────────────
   BLOG FILTER BUTTONS (blogs.html)
───────────────────────────────────────── */
function initBlogFilters() {
  const buttons = document.querySelectorAll('.filter-btn');
  if (!buttons.length) return;

  const cards = document.querySelectorAll('.blog-full-card');

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.dataset.category;
      cards.forEach(card => {
        const matches = category === 'all' || card.dataset.category === category;
        card.style.display = matches ? '' : 'none';
      });
    });
  });
}

/* ─────────────────────────────────────────
   NEWSLETTER FORM (blogs.html)
───────────────────────────────────────── */
function initNewsletterForm() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('.newsletter-input');
    const btn = form.querySelector('button');
    if (input && input.value.trim()) {
      btn.textContent = 'Subscribed ✓';
      input.value = '';
      setTimeout(() => { btn.textContent = 'Subscribe'; }, 3000);
    }
  });
}

/* ─────────────────────────────────────────
   PARTNER / CONTACT FORM VALIDATION
───────────────────────────────────────── */
function validateField(input) {
  const value = input.value.trim();
  const errorEl = document.getElementById(`${input.id}-error`);

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

  if (errorEl) errorEl.textContent = '';
  input.classList.remove('error');
  return true;
}

function initPartnerForm() {
  const form = document.getElementById('partner-form');
  if (!form) return;

  const inputs = form.querySelectorAll('input[required], select[required], textarea[required]');

  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) isValid = false;
    });
    if (!isValid) return;

    const successEl = document.getElementById('form-success');
    if (successEl) {
      form.hidden = true;
      successEl.classList.add('show');
      successEl.setAttribute('tabindex', '-1');
      successEl.focus();
    }
  });
}

/* ─────────────────────────────────────────
   SET CURRENT YEAR IN FOOTER
───────────────────────────────────────── */
function setYear() {
  document.querySelectorAll('.footer-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ─────────────────────────────────────────
   INIT
───────────────────────────────────────── */
function init() {
  setYear();
  initMobileNav();
  initNavScroll();
  initBlogFilters();
  initNewsletterForm();
  initPartnerForm();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
