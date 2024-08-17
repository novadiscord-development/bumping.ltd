document.addEventListener('DOMContentLoaded', () => {
    // Handle section animations
    const sections = document.querySelectorAll('section');

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const sectionHeight = section.offsetHeight;

            if (sectionTop < viewportHeight - 100 && sectionTop + sectionHeight > 100) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            } else {
                section.style.opacity = 0;
                section.style.transform = 'translateY(50px)';
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger on page load
});

document.querySelector('.burger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the active class
});


