// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');

    if (btnMenu) {
        btnMenu.addEventListener('click', () => {
            menuMobile.classList.toggle('hidden');
        });
    }
});