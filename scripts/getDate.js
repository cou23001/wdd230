document.addEventListener("DOMContentLoaded", function() {
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
});

const currentTemp = document.querySelector('#weather');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#figcaption');

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
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    currentTemp.innerHTML = `${data.main.temp}&deg;F - ${desc}`;
    
    
    //console.log(desc);
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent = `${desc}`;
}
apiFetch();
