document.addEventListener('DOMContentLoaded', function() {
    // Fade in hero header
    const hero = document.querySelector('.hero-header');
    if (hero) hero.classList.add('visible');

    // Fade in sections on scroll
    const sections = document.querySelectorAll('main section');
    sections.forEach(section => section.classList.add('fade-in-section'));

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            // Fade in when section is at least halfway into the viewport
            if (rect.top < window.innerHeight * 0.6) {
                section.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', revealSections);
    revealSections(); // Initial check
});