const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Valid Book of Mormon books
const bomBooks = [
  '1 nephi', '2 nephi', 'jacob', 'enos', 'jarom', 'omni',
  'words of mormon', 'mosiah', 'alma', 'helaman',
  '3 nephi', '4 nephi', 'mormon', 'ether', 'moroni'
];

button.addEventListener('click', function() {

  const rawValue = input.value.trim();

  if (rawValue === '') {
    showMessage('Please enter a book and chapter.', 'error');
    input.focus();
    return;
  }

  // Format input: capitalize each word
  const formatted = rawValue
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase());

  // Validate: must start with a known Book of Mormon book
  const isValid = bomBooks.some(book =>
    rawValue.toLowerCase().startsWith(book)
  );

  if (!isValid) {
    showMessage(`"${formatted}" is not a valid Book of Mormon book.`, 'error');
    input.focus();
    return;
  }

  // Enforce Top 10 limit
  if (list.children.length >= 10) {
    showMessage('You have reached the Top 10 limit. Remove a chapter to add a new one.', 'error');
    input.focus();
    return;
  }

  // Prevent duplicates
  const existing = Array.from(list.querySelectorAll('li')).map(
    li => li.firstChild.textContent.trim().toLowerCase()
  );
  if (existing.includes(formatted.toLowerCase())) {
    showMessage(`"${formatted}" is already in your Top 10.`, 'error');
    input.focus();
    return;
  }

  // Build list item
  const li = document.createElement('li');
  const deleteButton = document.createElement('button');

  li.appendChild(document.createTextNode(formatted));

  deleteButton.textContent = '✖';
  deleteButton.setAttribute('aria-label', 'Close');

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    showMessage(`"${formatted}" removed.`, 'success');
    input.focus();
  });

  showMessage(`"${formatted}" added!`, 'success');
  input.value = '';
  input.focus();

});

// Allow pressing Enter to submit
input.addEventListener('keypress', function(e) {
  if (e.key === 'Enter') button.click();
});

// UI feedback helper
function showMessage(msg, type) {
  let msgBox = document.querySelector('#msgBox');
  if (!msgBox) {
    msgBox = document.createElement('p');
    msgBox.id = 'msgBox';
    list.before(msgBox);
  }
  msgBox.textContent = msg;
  msgBox.style.color = type === 'error' ? 'red' : 'green';
  msgBox.style.fontWeight = 'bold';
  msgBox.style.marginBottom = '8px';
  setTimeout(() => { msgBox.textContent = ''; }, 3000);
}