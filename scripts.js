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
    const animatedElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .slide-in-bottom, .code-block');
    animatedElements.forEach(el => observer.observe(el));
});

// Terminal Boot Animation
const terminalOutput = document.getElementById('terminal-output');

const bootSequence = [
    { text: 'Initializing DevOps Portfolio...', type: 'info', delay: 200 },
    { text: '[✓] Loading profile information...', type: 'success', delay: 500 },
    { text: '[✓] Connecting to AWS Cloud...', type: 'success', delay: 800 },
    { text: '[✓] Docker daemon started', type: 'success', delay: 1100 },
    { text: '[✓] Kubernetes cluster connected', type: 'success', delay: 1400 },
    { text: '[✓] CI/CD pipelines initialized', type: 'success', delay: 1700 },
    { text: '[✓] Terraform state loaded', type: 'success', delay: 2000 },
    { text: '[✓] Ansible playbook executed', type: 'success', delay: 2300 },
    { text: '[✓] Prometheus metrics collected', type: 'success', delay: 2600 },
    { text: '[✓] Grafana dashboards rendered', type: 'success', delay: 2900 },
    { text: '', type: 'info', delay: 3200 },
    { text: '┌─────────────────────────────────────────────┐', type: 'command', delay: 3500 },
    { text: '│   Welcome to Lokesh Reddy\'s DevOps Space  │', type: 'command', delay: 3800 },
    { text: '└─────────────────────────────────────────────┘', type: 'command', delay: 4100 },
    { text: '', type: 'info', delay: 4400 },
    { text: '🚀 Portfolio deployed successfully!', type: 'success', delay: 4700 },
];

function playBootSequence() {
    let accumulatedDelay = 0;
    
    bootSequence.forEach((line, index) => {
        accumulatedDelay = line.delay;
        setTimeout(() => {
            const lineElement = document.createElement('div');
            lineElement.className = `line ${line.type}`;
            lineElement.textContent = line.text;
            
            if (terminalOutput) {
                terminalOutput.appendChild(lineElement);
                // Trigger reflow to restart animation
                lineElement.offsetHeight;
                lineElement.style.animation = 'none';
                lineElement.offsetHeight;
                lineElement.style.animation = null;
                
                // Scroll to bottom
                const terminalBody = document.querySelector('.terminal-body');
                if (terminalBody) {
                    terminalBody.scrollTop = terminalBody.scrollHeight;
                }
            }
            
            // Hide overlay after sequence completes
            if (index === bootSequence.length - 1) {
                setTimeout(() => {
                    const overlay = document.getElementById('landing-overlay');
                    if (overlay) {
                        overlay.style.display = 'none';
                    }
                }, 500);
            }
        }, line.delay);
    });
}

// Start boot animation when DOM is ready
document.addEventListener('DOMContentLoaded', playBootSequence);

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

// Add typing effect to skill cards on hover
const skillItems = document.querySelectorAll('.skill-category li');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.05)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Add click handler to resume download button
const resumeButton = document.querySelector('.download-button');
if (resumeButton) {
    resumeButton.addEventListener('click', function(e) {
        console.log('%c📄 Resume download clicked!', 'color: #3fb950;');
    });
}

// Add smooth reveal animation on scroll for all sections
const sections = document.querySelectorAll('section');
sections.forEach((section, index) => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    observer.observe(section);
});
