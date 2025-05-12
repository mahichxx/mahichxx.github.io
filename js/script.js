document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');
    const body = document.body;
    if (!burgerMenu || !nav) return;
    
    burgerMenu.addEventListener('click', function() {
        this.classList.toggle('active');
        nav.classList.toggle('active');
        body.classList.toggle('no-scroll');
    });

    // Закрытие меню при клике на ссылку
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        });
    });

    // Закрытие меню при клике вне меню
    document.addEventListener('click', function(event) {
        if (!event.target.closest('nav') && !event.target.closest('.burger-menu')) {
            burgerMenu.classList.remove('active');
            nav.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
}); 