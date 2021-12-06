const mobileBtn = document.getElementById('mobile-cta')
    nav = document.querySelector('.nav-bar')
    hideHamburger = document.querySelector('.mobile-menu')
    mobileBtnExit = document.getElementById('mobile-exit');


mobileBtn.addEventListener('click', () => {
    nav.classList.add('menu-btn')
    hideHamburger.classList.add('hamburger')
});

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('menu-btn')
    hideHamburger.classList.remove('hamburger')
});
