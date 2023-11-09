const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("#companies_display");


gridbutton.addEventListener("click", () => {
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", ()=> {
	display.classList.add("list");
	display.classList.remove("grid");
}); 



getData();

async function getData(){
	const url = "data/members.json";
	let response = await fetch(url);
	
	if(response.ok){
		let data = await response.json();
		displayData(data.companies);
	}
}

function displayData(companies){
	const companiesDisplay = document.querySelector('#companies_display');

	companies.forEach(company => {
		let section = document.createElement('section');
		let link = document.createElement('a');
		let heading = document.createElement('h2');
		let image = document.createElement('img');
		let tel = document.createElement('p');
		let address = document.createElement('p');
		let membership = document.createElement('p');

		link.href = company.url;
		heading.textContent = company.name;
		image.src = company.image;
		image.height = 200;
		tel.textContent = `☎︎ ${company.phone}`;
		address.textContent = `⚑ ${company.address}`;
		membership.textContent = `★ ${company.membership}`;

		link.appendChild(heading);
		link.appendChild(image);

		section.appendChild(link);
		section.appendChild(tel);
		section.appendChild(address);
		section.appendChild(membership);

		companiesDisplay.appendChild(section);
	});
}

// DARK MODE SWITCH
// button selector from the base.js file 
const evenRow = document.querySelector("#companies_display:nth-child(even)");

switchContainer.addEventListener("click", () => {
    if (switcher.checked){
        evenRow.classList.remove('light');
        evenRow.classList.add('dark');
    }else{
        evenRow.classList.remove('dark');
        evenRow.classList.add('light');
    }
});
