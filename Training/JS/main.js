var hamburgerButton = document.querySelector('.hamburger__button');
var mobileNav = document.querySelector('.mobile');

function openMobiles(params) {
    mobileNav.classList.add('open');
}

function closeMobile() {
    mobileNav.classList.remove('open');
}























hamburgerButton.addEventListener('click',openMobiles);
mobileNav.addEventListener('click', closeMobile);