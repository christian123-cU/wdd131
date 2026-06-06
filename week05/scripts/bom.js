const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapterList');

// Valid Book of Mormon books
const bomBooks = [
  '1 nephi', '2 nephi', 'jacob', 'enos', 'jarom', 'omni',
  'words of mormon', 'mosiah', 'alma', 'helaman',
  '3 nephi', '4 nephi', 'mormon', 'ether', 'moroni'
];

// ── localStorage: initialize array ──────────────────────────────
let chaptersArray = getChapterList() || [];

// ── Populate list on page load ───────────────────────────────────
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// ── Button click event listener ──────────────────────────────────
button.addEventListener('click', () => {
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

  if (input.value != '') {
    displayList(input.value);           // call displayList to render the item
    chaptersArray.push(input.value);    // add chapter to the array
    setChapterList();                   // update localStorage
    input.value = '';                   // clear the input
    input.focus();                      // set focus back to input
  }
});

// ── Allow pressing Enter to submit ───────────────────────────────
input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') button.click();
});

// ── displayList function ─────────────────────────────────────────
function displayList(item) {
  // Format item for display
  const formatted = item
    .toLowerCase()
    .replace(/\b\w/g, char => char.toUpperCase());

  let li = document.createElement('li');
  let deleteButton = document.createElement('button');

  li.appendChild(document.createTextNode(formatted));

  deleteButton.textContent = '✖';
  deleteButton.setAttribute('aria-label', 'Delete');
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener('click', function () {
    list.removeChild(li);
    deleteChapter(li.textContent);  // remove from array and localStorage
    showMessage(`"${formatted}" removed.`, 'success');
    input.focus();
  });

  showMessage(`"${formatted}" added!`, 'success');
}

// ── setChapterList function ──────────────────────────────────────
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// ── getChapterList function ──────────────────────────────────────
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// ── deleteChapter function ───────────────────────────────────────
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);  // remove the ✖ character
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

// ── UI feedback helper ───────────────────────────────────────────
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
