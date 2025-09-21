document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navigation a');

    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.transform = 'scale(1.1)';
            link.style.backgroundColor = '#22ee44';
            link.style.transition = 'transform 0.1s, background-color 0.1s';
        });

        link.addEventListener('mouseleave', () => {
            link.style.transform = 'scale(1)';
            link.style.backgroundColor = '#131';
        });
    });
});
