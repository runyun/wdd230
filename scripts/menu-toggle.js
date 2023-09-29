const menu = document.getElementById('menu');
const navMenu = document.getElementsByTagName('nav')[0];


menu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
    menu.classList.toggle('show');
});