const forecastRow = document.getElementById('forecast-row');

// Fetch forecast data from the API
async function fetchForecastData() {
  try {
    const response = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=16.75&lon=-93.1167&appid=4a8dfd912f7300f5b84fbba2ec797ee8&units=imperial');

    if (response.ok) {
      const data = await response.json();
      displayForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

// Display the forecast data in the forecast cards
function displayForecast(forecastData) {
    const uniqueDays = new Set();
    const filteredForecastData = [];
  
    forecastData.forEach(forecast => {
      const date = new Date(forecast.dt * 1000);
      const day = date.getDate();
  
      if (!uniqueDays.has(day)) {
        filteredForecastData.push(forecast);
        uniqueDays.add(day);
      }
    });
  
    filteredForecastData.slice(1, 4).forEach(forecast => {
      const forecastCard = document.createElement('div');
      forecastCard.classList.add('forecast-card');
  
      if (forecast.weather.length > 0) {
        const forecastImage = document.createElement('img');
        forecastImage.classList.add('forecast-image');
        forecastImage.src = `https://openweathermap.org/img/w/${forecast.weather[0].icon}.png`;
        forecastImage.alt = 'Weather Icon';
        forecastCard.appendChild(forecastImage);
      }
  
      const forecastWeather = document.createElement('div');
      forecastWeather.classList.add('forecast-weather');
      forecastWeather.textContent = Math.round(forecast.main.temp) + ' °F' || 'N/A';
      forecastCard.appendChild(forecastWeather);
  
      const forecastDate = document.createElement('div');
      forecastDate.classList.add('forecast-date');
      forecastDate.textContent = formatDate(forecast.dt) || 'N/A';
      forecastCard.appendChild(forecastDate);
  
      forecastRow.appendChild(forecastCard);
    });
}

// Format the date in a readable format
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('en-US', { weekday: 'short'});
}

// Call the fetchForecastData function to fetch and display the forecast
fetchForecastData();
