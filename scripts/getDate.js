document.addEventListener("DOMContentLoaded", function() {
  // Update the current year
  const currentYearSpan = document.getElementById('currentYear');
  //currentYearSpan.textContent = new Date().getFullYear();
  currentYearSpan.innerHTML = new Date().getFullYear();

  // Update the last modified information
  const lastModifiedParagraph = document.getElementById('lastModified');
  //lastModifiedParagraph.textContent = 'Last modified: ' + document.lastModified;
  lastModifiedParagraph.innerHTML = 'Last modified: ' + document.lastModified;


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

// current visits
var currentVisits = localStorage.getItem('visits');

if (currentVisits === null || currentVisits === undefined) {
  currentVisits = 1;
} else {
  currentVisits = parseInt(currentVisits, 10) + 1;
}

  localStorage.setItem('visits', currentVisits);
  document.getElementById('visits').textContent = `Visits: ${currentVisits}`;
});

const currentWeather = document.querySelector('#weather-only');
const currentDesc = document.querySelector('#weather-desc');
const weatherIcon = document.querySelector('#weather-icon');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=16.75&lon=-93.1167&appid=4a8dfd912f7300f5b84fbba2ec797ee8&units=imperial';

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error);
    }
}   

function displayResults(data) {
  let desc = data.weather[0].description;
  
  desc = desc.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  
  currentDesc.innerHTML = desc;
  currentWeather.innerHTML = `${data.main.temp} &deg;F`;
  
  weatherIcon.setAttribute('src',iconsrc);
  weatherIcon.setAttribute('alt',desc);
  weatherIcon.setAttribute('width',20)
}

apiFetch();
