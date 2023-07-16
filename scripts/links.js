const baseURL = "https://cou23001.github.io/wdd230/";
const linksURL = "https://cou23001.github.io/wdd230/data/links.json";

const bulletsList = document.querySelector('.bullets');

fetch(linksURL)
    .then(response => response.json())
    .then(data => displayLearningActivities(data.links))
    .catch(error => console.log('Error:', error));

function displayLearningActivities(links) {
    links.forEach(link => {
        const week = link.week;
        const linkItems = link.links;

        const listItem = document.createElement('li');
        listItem.textContent = `${week}: `;
        //console.log(listItem);

        linkItems.forEach((item, index) => {
            const url = item.url;
            const title = item.title;

            const linkElement = document.createElement(`a`);
            linkElement.href = url;
            linkElement.textContent = title;

            if (index !== linkItems.length - 1) {
                const separator = document.createTextNode(' | ');
                listItem.appendChild(linkElement);
                listItem.appendChild(separator);
            } else {
                listItem.appendChild(linkElement);
            }
        });
        bulletsList.appendChild(listItem);
    });
}