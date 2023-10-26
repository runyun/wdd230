const msToDays = 84600000;
const theDateToday = new Date();
let welcoming = document.querySelector('#welcoming');

let lastVisitMs = Number(localStorage.getItem('lastVisit'));

function getWelcoming(lastVisitMs){
    if(lastVisitMs == 0){
        return "Welcome! Let us know if you have any questions.";    
    }

    let daysLeft = (theDateToday.getTime() - lastVisitMs) / msToDays;
    daysLeft = daysLeft.toFixed(0);
    if(daysLeft < 1){
        return "Back so soon! Awesome!";
    }

    let dayUnit = "day";
    if(daysLeft > 1){
        dayUnit = "days";
    }

    return `You last visited ${daysLeft} ${dayUnit} ago.`
}

document.querySelector('#welcoming').textContent = getWelcoming(lastVisitMs);

localStorage.setItem('lastVisit', theDateToday.getTime());