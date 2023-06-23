// Update the current year
const currentYearSpan = document.getElementById('currentYear');
//currentYearSpan.textContent = new Date().getFullYear();
currentYearSpan.innerHTML = new Date().getFullYear();

// Update the last modified information
const lastModifiedParagraph = document.getElementById('lastModified');
//lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
lastModifiedParagraph.innerHTML = 'Last modified: ' + document.lastModified;
