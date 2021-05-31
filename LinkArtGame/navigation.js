const menuIcon = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.mainNavBar')

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('change');
})