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

    // Sidebar toggle for mobile
    const sidebar = document.querySelector('.sidebar');
    const toggleBtn = document.querySelector('.sidebar-toggle');
    if (sidebar && toggleBtn) {
        // Hide sidebar by default on mobile
        if (window.innerWidth <= 900) {
            sidebar.classList.remove('visible');
        }

        toggleBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            sidebar.classList.toggle('visible');
        });

        // Hide sidebar when clicking outside (on mobile)
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 900 && sidebar.classList.contains('visible')) {
                if (!sidebar.contains(e.target) && e.target !== toggleBtn) {
                    sidebar.classList.remove('visible');
                }
            }
        });

        // Hide sidebar with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && sidebar.classList.contains('visible')) {
                sidebar.classList.remove('visible');
            }
        });

        // Hide sidebar when a link is clicked (on mobile)
        sidebar.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 900) {
                    sidebar.classList.remove('visible');
                }
            });
        });
    }

    // Always show main nav
    document.querySelector(".main-nav").classList.add("visible");
});