
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-descript');

const key = '98185f587a5e31720e806dd1a3bbbe98';
const lat = 24.07;
const lon = 120.56;
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;

async function apiFetch() {
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();

            displayResults(data);

        }else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.textContent = `${Math.round(data.main.temp)} ℃`;
    weatherIcon.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.alt = `${data.weather[0].description}`;
    captionDesc.textContent = `${captalize(data.weather[0].description)}`;
}

function captalize(words){
    const wordsArray = words.split(' ');

    let result = '';
    wordsArray.forEach(word => {
       const captalizeWord = word[0].toUpperCase() + word.substring(1); 
       result += ' ' + captalizeWord;
    });

    return result;
}

apiFetch();