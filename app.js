
const img = document.getElementById('thousand-01');
const mediaQuery = window.matchMedia('(max-width: 600px)');

// Додаємо обробник події для наведення миші
img.addEventListener('mouseover', () => {
    // Генеруємо випадкові координати для руху
    const offsetX = Math.random() * 100 - 50; // Випадкове зміщення по горизонталі в межах [-50, 50]
    const offsetY = Math.random() * 100 - 50; // Випадкове зміщення по вертикалі в межах [-50, 50]

    // Застосовуємо трансформацію до зображення
    img.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

// Додаємо обробник події для зняття миші
img.addEventListener('mouseout', () => {
    // При знятті миші повертаємо зображення в початкове положення
    img.style.transform = 'translate(0, 0)';
});
document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const menu = document.querySelector('.menu');

    burgerMenu.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});