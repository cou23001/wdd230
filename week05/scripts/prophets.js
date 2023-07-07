const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data);
    //return data;
    console.log(data);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    // card build code goes here
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        card.classList.add('card');

        let fullName = document.createElement('h2'); // fill in the blank
        let portrait = document.createElement('img');
        let birthdate = document.createElement('h3');
        let birthplace = document.createElement('h3');


        // Build the h2 content out to show the prophet's full name
        fullName.textContent = `${prophet.name} ${prophet.lastname}`; // fill in the blank
        birthdate.textContent = `Date of birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of birth: ${prophet.birthplace}`;

        // Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '170');
        portrait.setAttribute('height', '220');
        portrait.style.display = 'block';
        portrait.style.margin = '0 auto'; 

        // Append the section(card) with the created elements
        card.appendChild(fullName); //fill in the blank
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        //console.log(birthdate)
        cards.appendChild(card);

    });
}
//console.log("Hello")
getProphetData();