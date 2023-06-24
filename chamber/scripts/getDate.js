// Update the current year
const currentYearSpan = document.getElementById('currentYear');
currentYearSpan.innerHTML = new Date().getFullYear();

// Update the last modified information
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
//lastModifiedParagraph.innerHTML = 'Last modified: ' + document.lastModified;

flatpickr('#calendar', {
    inline: true
});

// Print the messages in the sidebar
var currentDate = new Date();

var previousVisit = localStorage.getItem('visitDate');

if (previousVisit) {
  var timeDiff = currentDate - new Date(previousVisit);

  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  if (daysDiff === 0) {
    document.getElementById('message').textContent = "Back so soon! Awesome!";
  } else {
    var message = "You last visited " + daysDiff + " ";
    message += daysDiff === 1 ? "day" : "days";
    message += " ago.";
    document.getElementById('message').textContent = message;
  }
} else {
  document.getElementById('message').textContent = "Welcome! Let us know if you have any questions.";
}

localStorage.setItem('visitDate', currentDate);
