// Update the current year
const currentYearSpan = document.getElementById('currentYear');
if (currentYearSpan) {
  currentYearSpan.innerHTML = new Date().getFullYear();
}

// Update the last modified information
const lastModifiedParagraph = document.getElementById('lastModified');
lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;

// Print the messages in the sidebar
var currentDate = new Date();
var previousVisit = localStorage.getItem('visitDate');

if (previousVisit) {
  var timeDiff = currentDate - new Date(previousVisit);
  var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

  var messageElement = document.getElementById('message');
  if (messageElement) {
    if (daysDiff === 0) {
      messageElement.textContent = "Back so soon! Awesome!";
    } else {
      var message = "You last visited " + daysDiff + " ";
      message += daysDiff === 1 ? "day" : "days";
      message += " ago.";
      messageElement.textContent = message;
    }
  }
} else {
  var welcomeMessageElement = document.getElementById('message');
  if (welcomeMessageElement) {
    welcomeMessageElement.textContent = "Welcome! Let us know if you have any questions.";
  }
}

localStorage.setItem('visitDate', currentDate);