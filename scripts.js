// Scroll Animation Observer
document.addEventListener('DOMContentLoaded', function() {
    // Options for the Intersection Observer
    const observerOptions = {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // trigger when 10% of element is visible
    };

    // Create the Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    // Target elements to animate
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .slide-in-bottom');
    animatedElements.forEach(el => observer.observe(el));
});

// DevOps-themed typing animation (optional - can be enabled)
// Uncomment below if you want typing effect
/*
const typingText = 'Lokesh Reddy K - DevOps Engineer';
const typingElement = document.getElementById('typing-text');
const cursor = document.querySelector('.cursor');
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    if (isDeleting) {
        typingElement.textContent = typingText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingElement.textContent = typingText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === typingText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typingSpeed = 500; // Pause before re-typing
    }

    setTimeout(type, typingSpeed);
}

// Start typing animation
// document.addEventListener('DOMContentLoaded', type);
*/

// Create floating particles
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;

    const particleCount = 20;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position and animation properties
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
        
        // Random colors from DevOps palette
        const colors = ['#58a6ff', '#3fb950', '#d29922', '#bc8cff', '#39c5cf'];
        particle.style.background = colors[Math.floor(Math.random() * colors.length)];
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
document.addEventListener('DOMContentLoaded', createParticles);

// Add server status pulsing effect
function updateServerStatus() {
    const statusDots = document.querySelectorAll('.status-dot');
    statusDots.forEach((dot, index) => {
        // Stagger the pulse animation
        dot.style.animationDelay = (index * 0.5) + 's';
    });
}

// Initialize server status
document.addEventListener('DOMContentLoaded', updateServerStatus);

// Console message for DevOps feel
console.log('%c🚀 Welcome to Lokesh Reddy\'s DevOps Portfolio!', 'color: #3fb950; font-size: 20px; font-weight: bold;');
console.log('%c💼 DevOps Engineer | AWS | Docker | Kubernetes | CI/CD', 'color: #58a6ff; font-size: 14px;');
console.log('%c📧 Contact: lokesh.reddy3010@gmail.com', 'color: #d29922; font-size: 14px;');
console.log('%c🔧 Ready to automate and optimize your infrastructure!', 'color: #bc8cff; font-size: 14px;');
