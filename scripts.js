// Smooth scroll and animations
document.addEventListener('DOMContentLoaded', function() {
    
    // Console message for DevOps feel
    console.log('%c🚀 Welcome to Lokesh Reddy\'s DevOps Portfolio!', 'color: #06b6d4; font-size: 18px; font-weight: bold;');
    console.log('%c💼 DevOps Engineer | AWS | Docker | Kubernetes | CI/CD', 'color: #8b5cf6; font-size: 13px;');
    console.log('%c📧 Contact: lokesh.reddy3010@gmail.com', 'color: #ec4899; font-size: 13px;');
    console.log('%c🔧 Ready to automate and optimize your infrastructure!', 'color: #10b981; font-size: 13px;');

    // Smooth scroll for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Skill tooltip functionality for both About and Skills sections
    const tooltip = document.getElementById('skill-tooltip');
    
    // Handle Skills section hover
    document.querySelectorAll('.skill-category li').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const desc = this.getAttribute('data-desc');
            if (desc && tooltip) {
                tooltip.textContent = desc;
                tooltip.classList.add('visible');
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (tooltip) {
                tooltip.classList.remove('visible');
            }
        });
    });

    // Handle About section hover
    document.querySelectorAll('.skill-highlight').forEach(item => {
        item.addEventListener('mouseenter', function() {
            const desc = this.getAttribute('data-desc');
            if (desc && tooltip) {
                tooltip.textContent = desc;
                tooltip.classList.add('visible');
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (tooltip) {
                tooltip.classList.remove('visible');
            }
        });
    });

    // Intersection Observer for section animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        observer.observe(section);
    });

    // Footer year update
    const yearEl = document.querySelector('footer p');
    if (yearEl) {
        yearEl.innerHTML = `&copy; ${new Date().getFullYear()} Lokesh Reddy Kotameeda. All rights reserved.`;
    }
});