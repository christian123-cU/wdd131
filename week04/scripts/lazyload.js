/**
 * WDD 131 – Lazy Loading Activity
 * scripts.js
 */

// ── 1. Last Modified Date ──────────────────────────────────────────
// Display the date the document was last modified in the footer
const lastModifiedEl = document.getElementById('last-modified');

if (lastModifiedEl) {
  const rawDate = document.lastModified;           // "MM/DD/YYYY HH:MM:SS"
  const dateObj = new Date(rawDate);

  // Format nicely: e.g. "Last modified: Wednesday, May 21, 2025 at 3:04 PM"
  const formatted = dateObj.toLocaleString('en-US', {
    weekday: 'long',
    year:    'numeric',
    month:   'long',
    day:     'numeric',
    hour:    'numeric',
    minute:  '2-digit',
  });

  lastModifiedEl.textContent = `Last modified: ${formatted}`;
}


// ── 2. IntersectionObserver – Trigger fade animation on scroll ─────
// The CSS animation plays when the image loads (triggered by lazy load).
// This observer adds a class to re-trigger the animation precisely when
// the image enters the viewport, for a polished scroll-reveal effect.

const images = document.querySelectorAll('.photo-card img');

const observerOptions = {
  root:       null,       // viewport
  rootMargin: '0px',
  threshold:  0.15,       // fire when 15% of image is visible
};

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;

      // Reset animation so it plays fresh on scroll-in
      img.style.animation = 'none';
      // Force reflow to restart the animation
      void img.offsetHeight;
      img.style.animation = '';

      // Stop observing once animated
      obs.unobserve(img);
    }
  });
}, observerOptions);

images.forEach(img => observer.observe(img));


// ── 3. Console info for DevTools watchers ─────────────────────────
console.log(
  '%c🖼 Lazy Loading Demo',
  'color: #c9a96e; font-size: 14px; font-weight: bold;'
);
console.log(
  '%cOpen the Network tab → filter by "Img" to watch images load as you scroll.',
  'color: #888; font-size: 12px;'
);
