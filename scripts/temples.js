// Footer year and last modified
const currentYear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modification: ${document.lastModified}`;

// Hamburger menu
const hamButton = document.querySelector('#menu');
const navLinks = document.querySelector('.nav-links');

hamButton.addEventListener('click', function() {
  navLinks.classList.toggle('open');
  hamButton.classList.toggle('open');
});