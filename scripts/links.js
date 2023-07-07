const baseURL = "https://cou23001.github.io/wdd230/";
const linksURL = "https://cou23001.github.io/wdd230/data/links.json";
const currentWeek = document.querySelector('#current-week');

async function apiFetch() {
    try {
        const response = await fetch(linksURL);
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
    const displayWeeks = (weeks) => {
        weeks.forEach((week) => {
            currentWeek.innerHTML = ``;
            /*
            currentTemp.innerHTML = `${data.main.temp}&deg;F`;
            const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
            let desc = data.weather[0].description;
            //console.log(desc);
            weatherIcon.setAttribute('src',iconsrc);
            weatherIcon.setAttribute('alt',desc);
            captionDesc.textContent = `${desc}`;
            */
        });
    }
}
apiFetch();