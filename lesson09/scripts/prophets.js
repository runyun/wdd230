const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(url){
    const response = await fetch(url);

    if(response.ok) {
        const data = await response.json();
        
        displayProphets(data.prophets);
    }
}

getProphetData(url);

const displayProphets = (prophets) => {

    prophets.forEach(prophet => {
        
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthdate = document.createElement('p');
        let birthplace = document.createElement('p');

        fullName.innerText = `${prophet.name} ${prophet.lastname}`;
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `protrait of the prophet ${fullName.innerText}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', 340);
        portrait.setAttribute('height', 440);

        birthdate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthplace.textContent = `Place of Birth: ${prophet.birthplace}`;
       
        card.appendChild(fullName);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}