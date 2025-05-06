document.addEventListener("DOMContentLoaded", function() {
    // Function to handle the animated gradient background
    function setGradientBackground() {
        const body = document.body;
        let colors = ["#00c6ff", "#0072ff", "#00ff8c", "#00c6ff"];
        let currentIndex = 0;

        setInterval(() => {
            body.style.background = `linear-gradient(45deg, ${colors[currentIndex]}, ${colors[(currentIndex + 1) % colors.length]})`;
            currentIndex = (currentIndex + 1) % colors.length;
        }, 3000);
    }

    // Function to add smooth scroll to sections
    function smoothScroll() {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            });
        });
    }

    // Initialize functions
    setGradientBackground();
    smoothScroll();
});