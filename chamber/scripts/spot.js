document.addEventListener("DOMContentLoaded", function() {
    const spotlightContainers = document.querySelectorAll('.spotlight-container');
    
    async function fetchSpotlightData() {
      try {
        const response = await fetch('https://cou23001.github.io/wdd230/data/members.json');
    
        if (response.ok) {
          const data = await response.json();
          displaySpotlights(data);
        } else {
          throw Error(await response.text());
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    function displaySpotlights(data) {
      try {
        const members = data.members;
        const spotlightMembers = members.filter(
          (member) => member.membershipLevel === "Silver" || member.membershipLevel === "Gold"
        );
    
        if (spotlightMembers.length > 0) {
          spotlightContainers.forEach((container) => {
            const spotlightImage = container.querySelector('.spotlight-image');
            const spotlightOrganization = container.querySelector('.spotlight-organization');
            const spotlightLocation = container.querySelector('.spotlight-location');
            const spotlightPhone = container.querySelector('.spotlight-phone');
            

            const randomIndex = Math.floor(Math.random() * spotlightMembers.length);
            const spotlightMember = spotlightMembers[randomIndex];
    
            spotlightImage.src = `images/logos/${spotlightMember.image}`;
            spotlightOrganization.innerHTML = `<a href="${spotlightMember.website}" target="_blank" style="color: black;">${spotlightMember.organization}</a>`;
            spotlightLocation.textContent = `${spotlightMember.city}, ${spotlightMember.state}, ${spotlightMember.country}`;
            spotlightPhone.textContent = spotlightMember.phone;
            console.log(spotlightMember.phone);
          });
        } else {
          throw new Error("No spotlight members found.");
        }
      } catch (error) {
        console.log(error);
      }
    }
    
    fetchSpotlightData();
  });
  