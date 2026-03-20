const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.nav-modal-overlay');
const closeMobileMenuButton = document.querySelector('.close-modal');


burgerMenu.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
})
closeMobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
})