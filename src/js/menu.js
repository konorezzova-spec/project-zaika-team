const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.nav-modal-overlay');
const closeMobileMenuButton = document.querySelector('.close-modal');
const mobileMenuLinks = document.querySelectorAll('.nav-modal-list-item, .modal-order-btn');


burgerMenu.addEventListener('click', function () {
    mobileMenu.classList.add('is-open');
})
closeMobileMenuButton.addEventListener('click', function () {
    mobileMenu.classList.remove('is-open');
})

mobileMenuLinks.forEach((link) => link.addEventListener('click', function() {
  mobileMenu.classList.remove('is-open');
}))