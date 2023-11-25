// HAMBURGER MENU
const menu = document.getElementById('menu');
const navMenu = document.getElementsByTagName('nav')[0];
menu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
    menu.classList.toggle('show');

    if (menu.textContent == '≡'){
        menu.textContent = 'x';
    }else{
        menu.textContent = '≡';
    }
});

// DARK MODE SWITCH
const switchContainer = document.querySelector("#dark-mode-switch");
const switcher = document.querySelector("#dark-mode-switch button");
const darkContent = '🌙';
const lightContent = '☀️';

const body = document.querySelector("body");
switchContainer.addEventListener("click", () => {
    if (switcher.textContent == darkContent){
        body.classList.remove('light');
        body.classList.add('dark');

        switcher.textContent = lightContent;
    }else{
        body.classList.remove('dark');
        body.classList.add('light');

        switcher.textContent = darkContent;
    }
});

// NAVIGATION WAYFINDING
const navigationItem = document.querySelectorAll('#navigation nav a');
for(let i=0; i < navigationItem.length; i++){ 
    let path = navigationItem[i].getAttribute('href').split('/').pop(); 

    if (path == '#'){
        navigationItem[i].classList.add('active');
    }
};
	