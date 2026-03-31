// mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('is-active');
});

// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// dark mode switching
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// form validation
const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    let isValid = true;
    // Simple validation logic here
    // Ensure required fields are filled in, etc.

    if (!isValid) {
        e.preventDefault();
        alert('Please fill in all required fields.');
    }
});

// intersection observer animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});

document.querySelectorAll('.animate-on-scroll').forEach((section) => {
    observer.observe(section);
});

// conversion tracking
function trackConversion(event) {
    // Logic to track conversions goes here
}

document.getElementById('conversion-button').addEventListener('click', trackConversion);
