

const key = '98185f587a5e31720e806dd1a3bbbe98';
const lat = 20.51;
const lon = -86.94;
const weatherurl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
const forecasturl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
const weatherIconBaseUrl = 'https://openweathermap.org/img/w/';


async function apiFetch(url) {
    try {
        const response = await fetch(url);
        
        if (response.ok) {
            const data = await response.json();

            return data;
        }else {
            throw Error(await response.text());
        }

    } catch (error) {
        console.log(error);
    }
}

async function getTodayWeather() {
    const data = await apiFetch(weatherurl);
    return data;
}

async function getForecastWeather() {
    let result = null;
    const data = await apiFetch(forecasturl);

    const today = new Date().getDate();
    
    data.list.forEach(row => {
        let temp = new Date(row.dt * 1000);

        // Get the spesific time data: Tomorrow 17:00
        if(temp.getDate() == today + 1 && temp.getHours() == 17){
            result = row;
        }
    });

    return result;
}

function getWeatherDisplay(data, title) {
    const temperature = data.main.temp;
    const humidity = data.main.humidity;
    const description = captalize(data.weather[0].description);
    const weather = data.weather[0].main;
    const icon =data.weather[0].icon;

    const section = document.createElement('section');
    const heading = document.createElement('h3');

    const infoContainer = document.createElement('div');
    infoContainer.classList.add('infoContainer');
    const weatherIcon = document.createElement('div');
    weatherIcon.classList.add('weather-icon');
    const weather_image = document.createElement('img');
    const span = document.createElement('span');
    const p1 = document.createElement('p');
    const humidity_img = document.createElement('img');
    const p2 = document.createElement('p');


    heading.textContent = `${title} - ${weather}`;
    weather_image.src = weatherIconBaseUrl + icon + '.png';
    weather_image.alt = description;
    span.textContent = description;
    p1.textContent = '🌡 ' + Math.round(temperature) + ' ℃';
    humidity_img.src = 'images/humidity.png';
    humidity_img.alt = `A rain drop icon and number indicates humidity is ${humidity}%`
    p2.innerHTML = `${humidity_img.outerHTML} ${humidity} %`;

    weatherIcon.appendChild(weather_image);
    weatherIcon.appendChild(span);
    
    section.appendChild(heading);
    infoContainer.appendChild(weatherIcon);
    infoContainer.appendChild(p1);
    infoContainer.appendChild(p2);
    section.append(infoContainer);

    return section;
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

async function displayWeather(){
    const weatherArea = document.querySelector('#weather');

    const todayWeather = getWeatherDisplay(await getTodayWeather(), 'Today');
    weatherArea.appendChild(todayWeather);
    
    const forecastWeather = getWeatherDisplay(await getForecastWeather(), 'Tomorrow 3pm');
    weatherArea.appendChild(forecastWeather);
}

async function displayBanner(){
    const today = await getTodayWeather();
    const bannerText = document.querySelector('#reminder p');
    bannerText.textContent += ' ' + Math.round(today.main.temp_max) + '℃';
}

// Hide banner
document.querySelector('#reminder button').addEventListener('click', ()=>{
    document.querySelector('#reminder').style.display = 'none';
})

displayBanner();

displayWeather();

