// get elements from the document
const radiusOutput = document.getElementById('radius');
const areaOutput = document.querySelector('#area');

let area = 0;
const PI = 3.14159;   // fix 1: was == instead of =

let radius = 10;      // fix 2: was const, changed to let so it can be reassigned
area = PI * radius * radius;
radiusOutput.textContent = radius;   // fix 3: was radiusOutput = radius
areaOutput.textContent = area;       // fix 4: was areaOutput = area

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;