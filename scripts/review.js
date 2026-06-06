// ── Review Counter using localStorage ───────────────────────────
// Each time review.html loads after form submission, increment by 1

function getReviewCount() {
  return parseInt(localStorage.getItem('reviewCount')) || 0;
}

function setReviewCount(count) {
  localStorage.setItem('reviewCount', count);
}

// Increment on every page load
const newCount = getReviewCount() + 1;
setReviewCount(newCount);

// Display the counter
document.getElementById('reviewCount').textContent = newCount;

// ── Parse URL Params & Display Summary ──────────────────────────
const params = new URLSearchParams(window.location.search);
const summaryList = document.getElementById('summaryList');

// Helper to capitalize words
const cap = str => str.replace(/\b\w/g, c => c.toUpperCase());

// Product Name
const productId = params.get('productName');
const productNames = {
  'fc-1888': 'Flux Capacitor',
  'fc-2050': 'Power Laces',
  'fs-1987': 'Time Circuits',
  'ac-2000': 'Low Voltage Reactor',
  'jj-1969': 'Warp Equalizer'
};
if (productId) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>Product</strong><span>${productNames[productId] || cap(productId)}</span>`;
  summaryList.appendChild(li);
}

// Rating
const rating = params.get('rating');
if (rating) {
  const stars = '★'.repeat(Number(rating)) + '☆'.repeat(5 - Number(rating));
  const li = document.createElement('li');
  li.innerHTML = `<strong>Rating</strong><span>${stars} (${rating}/5)</span>`;
  summaryList.appendChild(li);
}

// Install Date
const installDate = params.get('installDate');
if (installDate) {
  const formatted = new Date(installDate + 'T00:00:00').toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric'
  });
  const li = document.createElement('li');
  li.innerHTML = `<strong>Installed</strong><span>${formatted}</span>`;
  summaryList.appendChild(li);
}

// Features (multiple values)
const features = params.getAll('features');
if (features.length > 0) {
  const li = document.createElement('li');
  li.innerHTML = `<strong>Useful Features</strong><span>${features.join(', ')}</span>`;
  summaryList.appendChild(li);
}

// Written Review
const review = params.get('writtenReview');
if (review && review.trim() !== '') {
  const li = document.createElement('li');
  li.innerHTML = `<strong>Review</strong><span>"${review.trim()}"</span>`;
  summaryList.appendChild(li);
}

// User Name
const userName = params.get('userName');
if (userName && userName.trim() !== '') {
  const li = document.createElement('li');
  li.innerHTML = `<strong>Reviewer</strong><span>${cap(userName.trim())}</span>`;
  summaryList.appendChild(li);
}

// Hide summary block if nothing to show
if (summaryList.children.length === 0) {
  document.getElementById('summaryBlock').style.display = 'none';
}

// ── Footer: Year & Last Modified ────────────────────────────────
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
