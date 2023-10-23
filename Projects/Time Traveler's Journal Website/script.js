// JavaScript for interactive features
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }

    // Add animations to journal entries
    const entries = document.querySelectorAll('.entry');
    entries.forEach((entry, index) => {
        entry.style.animation = `fadeInUp 1s ${index * 0.2}s both`;
    });
});
