// HAMBURGER MENU
const menu = document.getElementById('menu');
const navMenu = document.getElementsByTagName('nav')[0];


menu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
    menu.classList.toggle('show');
});

// DARK MODE SWITCH
const switchContainer = document.querySelector(".switch");
const switcher = document.querySelector(".switch input");
const body = document.querySelector("body");

switchContainer.addEventListener("click", () => {
    if (switcher.checked){
        body.style.backgroundColor = '#30343F';
        body.style.color ='white';
    }else{
        body.style.backgroundColor = 'var(--backround-color)';
        body.style.color ='black';
    }
});
