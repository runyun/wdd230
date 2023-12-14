
document.querySelector('#addItem').addEventListener('click', () => { addItem();});

addFirstItem();

async function addFirstItem(){
    addItem(true);
}

async function addItem(isFirst = false){

    const container = document.createElement('div');
    container.classList.add('rentalItem');

    const itemAmount = document.querySelectorAll('.rentalItem').length;
    const requiredStar = '<span class="require-star">*</span>'

    const rentalSelector = await getRentalSelector(itemAmount, requiredStar);
    const rentalAmount = getRentalAmountInput(itemAmount, requiredStar);

    container.appendChild(rentalSelector);
    container.appendChild(rentalAmount);

    if (!isFirst){
        const deleteButton = getButton();
        deleteButton.addEventListener('click', () => {
            container.remove();
        });
        container.appendChild(deleteButton);
    }

    document.querySelector('#rentalList').appendChild(container);
}

function getButton(){
    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '❌';

    return deleteButton;
}


function getRentalAmountInput(number, requiredStar){

    const newObjectValue = 'amount'+number;

    const newAmount = document.createElement('div');
    newAmount.classList.add('rentalAmount');

    const label = document.createElement('label');
    label.htmlFor = newObjectValue;
    label.innerHTML = "Amount" + requiredStar;    

    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.id = newObjectValue;
    numberInput.name = newObjectValue;
    numberInput.min = 1;
    numberInput.max = 5;
    numberInput.value = 1;
    numberInput.required = true;

    newAmount.appendChild(label);
    newAmount.appendChild(numberInput);

    return newAmount;
}

async function getRentalSelector(number, requiredStar){

    const newType = "type" + number;

    const newRental = document.createElement('div');
    newRental.classList.add('rentalType');
    const lRental = document.createElement('label');
    lRental.htmlFor = newType;
    lRental.innerHTML = "Type" + requiredStar;    
    const sRental = document.createElement('select');
    sRental.name = newType;
    sRental.id = newType;
    sRental.required = true;
    const optgroup = document.createElement('optgroup');

    const selectList = await getRentalList();
    selectList.forEach(item => {
        const option = document.createElement('option');
        option.value = item;
        option.textContent = item;
        optgroup.appendChild(option);
    })

    sRental.appendChild(optgroup);

    newRental.appendChild(lRental);
    newRental.appendChild(sRental);

    return newRental;
}

async function getRentalList(){
    let result = [];
    let response = await fetch("data/transportation.json");
    if(response.ok){
        let data = await response.json();
        
        data.transportations.forEach(type => {
            let rentalType = type.type; 

            type.catolog.forEach(transportation => {
                let rentalName = transportation.name;    
                result.push(rentalType + ' ' + rentalName);
            })
        });
    }
    return result;
}
