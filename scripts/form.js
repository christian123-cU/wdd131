// ── Product Array ────────────────────────────────────────────────
const products = [
  { id: "fc-1888", name: "flux capacitor",      averagerating: 4.5 },
  { id: "fc-2050", name: "power laces",          averagerating: 4.7 },
  { id: "fs-1987", name: "time circuits",        averagerating: 3.5 },
  { id: "ac-2000", name: "low voltage reactor",  averagerating: 3.9 },
  { id: "jj-1969", name: "warp equalizer",       averagerating: 5.0 }
];

// ── Populate Product Select Dynamically ─────────────────────────
const productSelect = document.querySelector('#productName');

products.forEach(product => {
  const option = document.createElement('option');
  option.value = product.id;
  option.textContent = product.name.replace(/\b\w/g, c => c.toUpperCase());
  productSelect.appendChild(option);
});

// ── Form Validation on Submit ────────────────────────────────────
const form = document.querySelector('#reviewForm');

form.addEventListener('submit', (e) => {
  const errors = [];

  // 1. Product Name
  if (!productSelect.value) {
    errors.push('Please select a product.');
    productSelect.classList.add('input-error');
  } else {
    productSelect.classList.remove('input-error');
  }

  // 2. Rating — check if any radio is selected
  const ratingSelected = document.querySelector('input[name="rating"]:checked');
  const ratingGroup = document.querySelector('.star-rating');
  if (!ratingSelected) {
    errors.push('Please select an overall rating.');
    ratingGroup.classList.add('input-error');
  } else {
    ratingGroup.classList.remove('input-error');
  }

  // 3. Install Date
  const installDate = document.querySelector('#installDate');
  if (!installDate.value) {
    errors.push('Please enter the date of installation.');
    installDate.classList.add('input-error');
  } else {
    installDate.classList.remove('input-error');
  }

  // If any errors, prevent submission and show messages
  if (errors.length > 0) {
    e.preventDefault();
    showErrors(errors);
  }
});

// ── Show Error Messages ──────────────────────────────────────────
function showErrors(errors) {
  // Remove existing error box if present
  const existing = document.querySelector('#errorBox');
  if (existing) existing.remove();

  const box = document.createElement('div');
  box.id = 'errorBox';
  box.setAttribute('role', 'alert');
  box.innerHTML = `
    <strong>Please complete the required fields:</strong>
    <ul>${errors.map(e => `<li>${e}</li>`).join('')}</ul>
  `;

  // Insert error box above the submit button
  const submitGroup = document.querySelector('.submit-group');
  form.insertBefore(box, submitGroup);
  box.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// ── Clear error highlight on input change ────────────────────────
productSelect.addEventListener('change', () => {
  productSelect.classList.remove('input-error');
  clearErrorBox();
});

document.querySelectorAll('input[name="rating"]').forEach(radio => {
  radio.addEventListener('change', () => {
    document.querySelector('.star-rating').classList.remove('input-error');
    clearErrorBox();
  });
});

document.querySelector('#installDate').addEventListener('change', () => {
  document.querySelector('#installDate').classList.remove('input-error');
  clearErrorBox();
});

function clearErrorBox() {
  const box = document.querySelector('#errorBox');
  if (box) box.remove();
}

// ── Footer: Year & Last Modified ────────────────────────────────
document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
