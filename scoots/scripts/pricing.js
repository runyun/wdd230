
async function getRentalData(){
    let response = await fetch("data/transportation.json");
    if(response.ok){
        let data = await response.json();
        displayData(data);
    }
}

function displayData(data){

    let tbody = document.querySelector('tbody');

    data.transportations.forEach(type => {

        type.catolog.forEach(transportation => {

            let row = document.createElement('tr');

            let type = document.createElement('td');
            let typeImage = document.createElement('img');
            let typeName = document.createElement('p');
            
            let maxPeople = document.createElement('td');
            let reserHalf = document.createElement('td');
            let reserFull = document.createElement('td');
            let inHalf = document.createElement('td');
            let inFull = document.createElement('td');
            
            typeName.textContent = transportation.name;
            maxPeople.textContent = transportation.capacity;
            reserHalf.textContent = '$' + transportation.price.reservation.half_day;
            reserFull.textContent = '$' + transportation.price.reservation.full_day;
            inHalf.textContent = '$' + transportation.price.walk_in.half_day;
            inFull.textContent = '$' + transportation.price.walk_in.full_day;

            typeImage.src = transportation.imageurl;
            typeImage.alt = "Picture only shows the object of " + transportation.name;
            typeImage.loading = 'lazy';

            type.appendChild(typeImage);
            type.appendChild(typeName);
            
            row.appendChild(type);
            row.appendChild(maxPeople);
            row.appendChild(reserHalf);
            row.appendChild(reserFull);
            row.appendChild(inHalf);
            row.appendChild(inFull);

            tbody.appendChild(row);
        })
    });
}


getRentalData();