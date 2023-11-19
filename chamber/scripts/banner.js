
// CLOSE BANNER 
const today = new Date();
const weekofday = today.getDay(); 
const bannerClose = document.querySelector('#close-banner');
const banner = document.querySelector('#banner');

if (weekofday < 4 && weekofday > 0){
    banner.classList.remove('close');
}

bannerClose.addEventListener('click', function(){
    banner.classList.add('close');
});
