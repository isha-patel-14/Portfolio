// // Typing Animation
// const roles = [
//     "Full Stack Developer",
//     "MERN Stack Developer",
//     "Web Enthusiast",
//     "UI/UX Designer"
// ];

// let roleIndex = 0;
// let charIndex = 0;
// let isDeleting = false;
// let typingDelay = 200;
// let erasingDelay = 100;
// let newTextDelay = 2000;

// function typeText() {
//     const currentRole = roles[roleIndex];
//     const typedTextElement = document.getElementById('typed-text');

//     if (isDeleting) {
//         charIndex--;
//         typingDelay = erasingDelay;
//     } else {
//         charIndex++;
//         typingDelay = 200;
//     }

//     typedTextElement.textContent = currentRole.substring(0, charIndex);

//     if (!isDeleting && charIndex === currentRole.length) {
//         isDeleting = true;
//         typingDelay = newTextDelay;
//     } else if (isDeleting && charIndex === 0) {
//         isDeleting = false;
//         roleIndex = (roleIndex + 1) % roles.length;
//     }

//     setTimeout(typeText, typingDelay);
// }

// // Start typing animation when page loads
// document.addEventListener('DOMContentLoaded', () => {
//     typeText();
    
//     // Initialize theme
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     document.documentElement.setAttribute('data-theme', savedTheme);
//     updateThemeToggle(savedTheme);
// });

// // Theme Toggle
// const themeToggle = document.getElementById('themeToggle');
// themeToggle.addEventListener('click', () => {
//     const currentTheme = document.documentElement.getAttribute('data-theme');
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
//     document.documentElement.setAttribute('data-theme', newTheme);
//     localStorage.setItem('theme', newTheme);
//     updateThemeToggle(newTheme);
// });

// function updateThemeToggle(theme) {
//     themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
// }

// // Smooth scroll for navigation links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         document.querySelector(this.getAttribute('href')).scrollTop = 0;
//         document.querySelector(this.getAttribute('href')).scrollIntoView({
//             behavior: 'smooth'
//         });
//     });
// });

// // Form Submission with "Sending..." Indicator
// document.getElementById('contact-form').addEventListener('submit', async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const formData = new FormData(form);
//     const submitButton = form.querySelector('.submit-btn');

//     // Show "Sending..."
//     submitButton.textContent = 'Sending...';
//     submitButton.disabled = true;

//     try {
//         const response = await fetch(form.action, {
//             method: 'POST',
//             body: formData,
//             headers: { 'Accept': 'application/json' }
//         });

//         if (response.ok) {
//             submitButton.textContent = 'Sent!';
//             alert('Thank you for your message! I will get back to you soon.');
//             form.reset();

//             // Reset button after 3 seconds
//             setTimeout(() => {
//                 submitButton.textContent = 'Send Message';
//                 submitButton.disabled = false;
//             }, 3000);
//         } else {
//             throw new Error('Form submission failed');
//         }
//     } catch (error) {
//         console.error('Error submitting form:', error);
//         alert('Oops! Something went wrong, please try again.');
//         submitButton.textContent = 'Send Message';
//         submitButton.disabled = false;
//     }
// });


// // Intersection Observer for scroll animations
// const observerOptions = {
//     threshold: 0.1
// };

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('fade-in');
//         }
//     });
// }, observerOptions);

// // Observe all sections
// document.querySelectorAll('section').forEach(section => {
//     observer.observe(section);
// });


particlesJS("particles-js", {
    "particles": {
        "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#00ffcc" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5, "random": true },
        "size": { "value": 3, "random": true },
        "line_linked": { "enable": true, "distance": 150, "color": "#ff007a", "opacity": 0.4, "width": 1 },
        "move": { "enable": true, "speed": 2, "direction": "none", "random": false, "straight": false }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" } },
        "modes": { "repulse": { "distance": 100, "duration": 0.4 } }
    },
    "retina_detect": true
});

// Typing Animation
const roles = ["Full Stack Developer", "MERN Stack Developer", "Web Enthusiast", "UI/UX Designer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 200;
let erasingDelay = 100;
let newTextDelay = 2000;

function typeText() {
    const currentRole = roles[roleIndex];
    const typedTextElement = document.getElementById('typed-text');
    if (isDeleting) {
        charIndex--;
        typingDelay = erasingDelay;
    } else {
        charIndex++;
        typingDelay = 200;
    }
    typedTextElement.textContent = currentRole.substring(0, charIndex);
    if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingDelay = newTextDelay;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(typeText, typingDelay);
}


// Navbar
document.getElementById("hamburger").addEventListener("click", function () {
    document.getElementById("navLinks").classList.toggle("active");
});




// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Form Submission
document.getElementById('contact-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = form.querySelector('.submit-btn');
    submitButton.textContent = 'Sending...';
    submitButton.disabled = true;
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        if (response.ok) {
            submitButton.textContent = 'Sent!';
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
            setTimeout(() => {
                submitButton.textContent = 'Send Message';
                submitButton.disabled = false;
            }, 3000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Oops! Something went wrong, please try again.');
        submitButton.textContent = 'Send Message';
        submitButton.disabled = false;
    }
});

// Start Typing Animation and Theme
document.addEventListener('DOMContentLoaded', () => {
    typeText();
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeToggle(savedTheme);
});