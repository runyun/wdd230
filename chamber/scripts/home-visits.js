let homeVisit = Number(localStorage.getItem('home-visits'));

if(homeVisit == null){
    homeVisit = 1;
}else{
    homeVisit += 1;
}

localStorage.setItem('home-visits', homeVisit);

document.querySelector('#home-visits').textContent = homeVisit;