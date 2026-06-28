document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const bodyElement = document.body;

    themeToggleBtn.addEventListener('click', () => {
        // 1. Toggle the dark-mode class on the body
        bodyElement.classList.toggle('dark-mode');

        // 2. Update the button icon based on the current mode
        if (bodyElement.classList.contains('dark-mode')) {
            themeToggleBtn.textContent = '☀️'; // Sun icon for light mode option
        } else {
            themeToggleBtn.textContent = '🌙'; // Moon icon for dark mode option
        }
    });
});
// Scroll Animation Logic
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.1 }); // Triggers when 10% of the element is visible

// Find all elements we want to animate
document.querySelectorAll('section, .project-card').forEach((el) => {
    el.classList.add('hidden'); // Hide them initially
    observer.observe(el);       // Start watching them
});