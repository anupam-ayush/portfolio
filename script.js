document.addEventListener('DOMContentLoaded', (event) => {
            
    // --- 1. Mobile Menu Toggle ---
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            
            // Toggle ARIA expanded attribute for accessibility
            const isExpanded = menuBtn.getAttribute('aria-expanded') === 'true';
            menuBtn.setAttribute('aria-expanded', !isExpanded);
            
            // Change icon to 'X' when open
            if (mobileMenu.classList.contains('hidden')) {
                menuBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
            } else {
                menuBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>`;
            }
        });
    }
    
    // Close mobile menu when a link is clicked
    if (mobileMenu) {
        const navLinks = mobileMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
                if (menuBtn) {
                    menuBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/.svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>`;
                    menuBtn.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    // --- 2. Fade-in on Scroll ---
    // Select all sections with the .fade-in-section class
    const sections = document.querySelectorAll('.fade-in-section');
    
    // Configure the observer
    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 
    };
    
    // Create the observer callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            // If the element is intersecting (visible)
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element once it's visible
                observer.unobserve(entry.target);
            }
        });
    };
    
    // Instantiate and start the observer
    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach(section => {
        observer.observe(section);
    });

});
