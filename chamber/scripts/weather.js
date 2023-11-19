
const key = '98185f587a5e31720e806dd1a3bbbe98';
const lat = 24.07;
const lon = 120.56;
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

async function displayCurrent() {
    const data = await apiFetch(weatherurl);
    const temperature = data.main.temp;
    const windSpeed = data.wind.speed;

    const currentTemp = document.querySelector('#current-temp');
    const weatherIcon = document.querySelector('#weather-icon');
    const captionDesc = document.querySelector('#weather-descript');
    const windChill = document.getElementById('wind-chill');

    currentTemp.textContent = Math.round(temperature);
    weatherIcon.src = weatherIconBaseUrl + `${data.weather[0].icon}.png`;
    weatherIcon.alt = `${data.weather[0].description}`;
    captionDesc.textContent = `${captalize(data.weather[0].description)}`;

 
    let tempWindChill = calculate_wind_chill(temperature, windSpeed);
    if (Number.isInteger(tempWindChill)) {
        tempWindChill += '℃';
    }
    windChill.textContent = tempWindChill;
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

function calculate_wind_chill (temperature, wind_speed) {

    if(wind_speed < 4.9 || temperature > 10){
        return "N/A"
    }

    let wind_chill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(wind_speed, 0.16) + 0.3965 * temperature * Math.pow(wind_speed, 0.16);

    return Math.round(wind_chill);
}

async function displayForecast() {
    const container = document.querySelector('#weather');
    const data = await apiFetch(forecasturl);
    const timestamp = data.list[0].dt;

    const dayInSecond = 24 * 60 * 60;

    const forecastDays = 3;
    let dayCount = 1;
    
    while(dayCount <= forecastDays){

        const forecastDay = timestamp + dayInSecond * dayCount;

        data.list.forEach(row => {
            if(row.dt == forecastDay){
                const forecast = renderForeCast(row);
                container.appendChild(forecast);
            }
        });

        dayCount += 1;
    }
}

function renderForeCast(data) {
    const timestampInMs = data.dt * 1000;
    const date = new Date(timestampInMs);
    const dayOfWeek = date.toString().substring(0, 3);

    const temperature = Math.round(data.main.temp) + '℃';
    const imgsrc = weatherIconBaseUrl + `${data.weather[0].icon}.png`;
    const imgalt = `${data.weather[0].description}`;

    const section = document.createElement('section');
    const week = document.createElement('p');
    const weatherIcon = document.createElement('img');
    const temp = document.createElement('p');

    week.textContent = dayOfWeek;
    weatherIcon.src = imgsrc;
    weatherIcon.alt = imgalt;
    temp.textContent = temperature;

    section.appendChild(week);
    section.appendChild(weatherIcon);
    section.appendChild(temp);

    return section;
}

displayCurrent();

displayForecast();

