// Update the current year
const currentYearSpan = document.getElementById('currentYear');
//currentYearSpan.textContent = new Date().getFullYear();
currentYearSpan.innerHTML = new Date().getFullYear();

// Update the last modified information
const lastModifiedParagraph = document.getElementById('lastModified');
//lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
lastModifiedParagraph.innerHTML = 'Last modified: ' + document.lastModified;


// current visits
var currentVisits = localStorage.getItem('visits');

if (currentVisits === null || currentVisits === undefined) {
  currentVisits = 1;
} else {
  currentVisits = parseInt(currentVisits, 10) + 1;
}

localStorage.setItem('visits', currentVisits);
document.getElementById('visits').textContent = currentVisits;

