document.addEventListener('DOMContentLoaded', function() {
    
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

    // Footer year update
    const yearEl = document.querySelector('footer p');
    if (yearEl) {
        yearEl.innerHTML = `&copy; ${new Date().getFullYear()} Lokesh Reddy Kotameeda. All rights reserved.`;
    }
});