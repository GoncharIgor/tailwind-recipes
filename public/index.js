const burgerElement = document.getElementById('burger');
const menuElement = document.getElementById('nav-menu');

burgerElement.addEventListener('click', () => {
    if (menuElement.classList.contains('hidden')) {
        menuElement.classList.remove('hidden');
    } else {
        menuElement.classList.add('hidden');
    }
});
