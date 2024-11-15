document.addEventListener('DOMContentLoaded', () => {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuItems = document.querySelector('.menu-items');

    hamburgerIcon.addEventListener('click', () => {
        hamburgerIcon.classList.toggle('active');
        menuItems.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburgerIcon.contains(e.target) && !menuItems.contains(e.target)) {
            hamburgerIcon.classList.remove('active');
            menuItems.classList.remove('active');
        }
    });
}); 