// ===== TEMPLE DATA ARRAY =====
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "images/mexico.jpg"
  },
  // ===== THREE ADDITIONAL TEMPLES =====
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "images/saltlake.jpg"
  },
  {
    templeName: "Nairobi Kenya",
    location: "Nairobi, Kenya",
    dedicated: "2024, February, 18",
    area: 19124,
    imageUrl: "images/nairobi.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40000,
    imageUrl: "images/rome.jpg"
  }
];


// ===== FILTER CONFIG =====
const filterConfig = {
  home:  { label: "All Temples",    subtitle: "A sacred collection from around the world",     fn: () => true },
  old:   { label: "Old Temples",    subtitle: "Dedicated before 1900",                         fn: t => parseInt(t.dedicated) < 1900 },
  new:   { label: "New Temples",    subtitle: "Dedicated after 2000",                          fn: t => parseInt(t.dedicated) > 2000 },
  large: { label: "Large Temples",  subtitle: "Over 90,000 square feet",                       fn: t => t.area > 90000 },
  small: { label: "Small Temples",  subtitle: "Under 10,000 square feet",                      fn: t => t.area < 10000 }
};


// ===== CREATE A TEMPLE CARD =====
function createTempleCard(temple) {
  const card = document.createElement('div');
  card.classList.add('temple-card');

  card.innerHTML = `
    <img
      src="${temple.imageUrl}"
      alt="${temple.templeName} Temple"
      loading="lazy"
    >
    <div class="card-body">
      <h3>${temple.templeName}</h3>
      <div class="card-detail">
        <span class="detail-label">Location</span>
        <span class="detail-value">${temple.location}</span>
      </div>
      <div class="card-detail">
        <span class="detail-label">Dedicated</span>
        <span class="detail-value">${temple.dedicated}</span>
      </div>
      <div class="card-detail">
        <span class="detail-label">Size</span>
        <span class="detail-value">${temple.area.toLocaleString()} sq ft</span>
      </div>
    </div>
  `;

  return card;
}


// ===== RENDER GALLERY =====
function renderGallery(filter = 'home') {
  const gallery     = document.getElementById('gallery');
  const titleEl     = document.getElementById('filter-title');
  const subtitleEl  = document.getElementById('filter-subtitle');

  const config   = filterConfig[filter];
  const filtered = temples.filter(config.fn);

  titleEl.textContent    = config.label;
  subtitleEl.textContent = config.subtitle;

  // Clear current cards
  gallery.innerHTML = '';

  if (filtered.length === 0) {
    gallery.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">✦</div>
        <p>No temples match this filter.</p>
      </div>`;
    return;
  }

  filtered.forEach(temple => {
    gallery.appendChild(createTempleCard(temple));
  });
}


// ===== NAV FILTER LISTENERS =====
function initNav() {
  const navLinks = document.querySelectorAll('.nav-links a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();

      // Update active class
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');

      // Close mobile menu
      document.querySelector('.nav-links').classList.remove('open');
      document.getElementById('menu').classList.remove('open');

      // Render filtered gallery
      renderGallery(this.dataset.filter);
    });
  });
}


// ===== HAMBURGER =====
function initHamburger() {
  const hamButton = document.getElementById('menu');
  const navLinks  = document.querySelector('.nav-links');

  hamButton.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    this.classList.toggle('open');
    this.innerHTML = navLinks.classList.contains('open') ? '&#10006;' : '&#9776;';
  });
}


// ===== FOOTER =====
function initFooter() {
  document.getElementById('currentyear').textContent  = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;
}


// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHamburger();
  initFooter();
  renderGallery('home');
});
