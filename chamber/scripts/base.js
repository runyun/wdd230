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
        body.classList.remove('light');
        body.classList.add('dark');
    }else{
        body.classList.remove('dark');
        body.classList.add('light');
    }
});
