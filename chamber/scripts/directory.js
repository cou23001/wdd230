const linksURL = "https://cou23001.github.io/wdd230/data/members.json";
const cardsContainer = document.querySelector('.cards');
const toggleButton = document.getElementById('toggleButton');


fetch(linksURL)
    .then(response => response.json())
    .then(data => displayMembers(data.members))
    .catch(error => console.log('Error:', error));

    function displayMembers(members) {
    cardsContainer.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.classList.add('card', 'organization-info');

        const name = document.createElement('h3');
        name.textContent = member.firstName + ' ' + member.lastName;

        const organization = document.createElement('p');
        organization.textContent = member.organization;

        const address = document.createElement('p');
        address.textContent = member.address + ', ' + member.city + ', ' + member.state + ', ' + member.postalCode + ', ' + member.country;

        const phone = document.createElement('p');
        phone.textContent = 'Phone: ' + member.phone;

        const website = document.createElement('p');
        const websiteLink = document.createElement('a');
        websiteLink.href = member.website;
        websiteLink.textContent = `${member.website}`;
        website.appendChild(websiteLink);

        const image = document.createElement('img');
        image.src = `images/logos/${member.image}`;
        //console.log(image.src);
        image.alt = member.organization;

        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = 'Membership Level: ' + member.membershipLevel;

        card.appendChild(name);
        card.appendChild(organization);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(image);
        card.appendChild(membershipLevel);

        cardsContainer.appendChild(card);
    });
}

toggleButton.addEventListener('click', function() {
    cardsContainer.classList.toggle('list-view');
});