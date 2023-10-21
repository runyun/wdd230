
function calculate_wind_chill (temperature, wind_speed) {

    if(wind_speed < 4 || temperature > 50){
        return "N/A"
    }

    let wind_chill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(wind_speed, 0.16) + 0.4275 * temperature * Math.pow(wind_speed, 0.16);

    return Math.round(wind_chill);
}

const temperature = document.getElementById('temperature').innerText;
const wind_speed = document.getElementById('wind_speed').innerText;
document.getElementById('wind_chill').innerText = calculate_wind_chill(temperature, wind_speed);
