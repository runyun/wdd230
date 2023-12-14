
async function getRentalData(){
    let response = await fetch("data/transportation.json");
    if(response.ok){
        let data = await response.json();
        displayData(data);
    }
}

function displayData(data){

    let spotlight = document.getElementById('rental-spotlight');

    data.transportations.forEach(type => {

        type.catolog.forEach(transportation => {

            let section = document.createElement('section');
            let imageContainer = document.createElement('div');
            let image = document.createElement('img');

            let description = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            
            let capacity = transportation.capacity;

            image.src = transportation.imageurl;
            image.loading = 'lazy';
            image.alt = "A picture only shows the object of " + transportation.name;
            h2.textContent = transportation.name;
            h3.textContent = `${'👤 '.repeat(capacity)}${capacity} ${capacity > 1 ? "People" : "Person"}`;

            imageContainer.appendChild(image);
            description.appendChild(h2);
            description.appendChild(h3);

            section.appendChild(imageContainer);
            section.appendChild(description);

            spotlight.appendChild(section);
        })
    });
}


getRentalData();