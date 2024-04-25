
const img = document.getElementById('thousand-01');
const mediaQuery = window.matchMedia('(max-width: 600px)');


img.addEventListener('mouseover', () => {
 
    const offsetX = Math.random() * 100 - 50; 
    const offsetY = Math.random() * 100 - 50; 

   
    img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});
img.addEventListener('mouseout', () => {

    img.style.transform = 'translate(0, 0)';
});
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    burgerMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});