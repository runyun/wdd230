
// NAVIGATION WAYFINDING
const navigationItem = document.querySelectorAll('nav a');
for(let i = 0; i < navigationItem.length; i++){ 
    let path = navigationItem[i].getAttribute('href');

    if (path == '#'){
        navigationItem[i].classList.add('active');
    }
};
	

document.querySelector('#copy-year').textContent = new Date().getFullYear();


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