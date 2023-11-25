
async function getData(){
	const url = "data/members.json";
	let response = await fetch(url);
	
	if(response.ok){
		let data = await response.json();
		displayData(data.companies);
	}
}

function getLimitCompanies(companies) {

    const showAmount = 3;

    const qualifyMembers = companies.filter(company => company.membership == 'Gold' || company.membership == 'Silver');
    if (qualifyMembers.length < showAmount) {
        return qualifyMembers;
    }

    let result = [];
    while (result.length < showAmount) {
        const randomIndex = Math.floor(Math.random() * qualifyMembers.length);
        if (!result.includes(qualifyMembers[randomIndex])){
            result.push(qualifyMembers[randomIndex]);
        };
    };
    return result;
}

function displayData(companies){
	const companiesDisplay = document.querySelector('#business-spotlight');

    const showCompanies = getLimitCompanies(companies);

	showCompanies.forEach(company => {
		let section = document.createElement('section');
		let link = document.createElement('a');
		let heading = document.createElement('h3');
		let tel = document.createElement('p');
		let address = document.createElement('p');

		link.href = company.url;
		heading.textContent = company.name;
		tel.textContent = `☎︎ ${company.phone}`;
		address.textContent = `⚑ ${company.address}`;

		link.appendChild(heading);

		section.appendChild(link);
		section.appendChild(tel);
		section.appendChild(address);

		companiesDisplay.appendChild(section);
	});
}

getData();