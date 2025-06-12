// Theme management
function setTheme(theme) {
    const body = document.body;
    const lightBtn = document.querySelector('.light-btn');
    const darkBtn = document.querySelector('.dark-btn');
    
    if (theme === 'light') {
        body.className = 'light-theme';
        lightBtn.classList.add('active');
        darkBtn.classList.remove('active');
        localStorage.setItem('theme', 'light');
    } else {
        body.className = 'dark-theme';
        darkBtn.classList.add('active');
        lightBtn.classList.remove('active');
        localStorage.setItem('theme', 'dark');
    }
}

// Load saved theme on page load
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Book card hover effects
    const bookCards = document.querySelectorAll('.book-card');
    bookCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe sections for scroll animations
    const sections = document.querySelectorAll('.about-section, .books-section, .events-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Parallax effect for book covers
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.book-cover');
        
        parallaxElements.forEach(element => {
            const speed = 0.1;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Scroll to top function
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Add scroll indicator to scroll-to-top button
    window.addEventListener('scroll', function() {
        const scrollTop = document.querySelector('.scroll-top');
        if (window.pageYOffset > 300) {
            scrollTop.style.opacity = '1';
            scrollTop.style.visibility = 'visible';
        } else {
            scrollTop.style.opacity = '0';
            scrollTop.style.visibility = 'hidden';
        }
    });
    
    // Initialize scroll-to-top button visibility
    document.addEventListener('DOMContentLoaded', function() {
        const scrollTop = document.querySelector('.scroll-top');
        scrollTop.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
        scrollTop.style.opacity = '0';
        scrollTop.style.visibility = 'hidden';
    });
    
    // Enhanced button interactions
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.explore-btn, .read-more-btn');
        
        buttons.forEach(button => {
            button.addEventListener('click', function(e) {
                // Create ripple effect
                const ripple = document.createElement('span');
                const rect = this.getBoundingClientRect();
                const size = Math.max(rect.width, rect.height);
                const x = e.clientX - rect.left - size / 2;
                const y = e.clientY - rect.top - size / 2;
                
                ripple.style.width = ripple.style.height = size + 'px';
                ripple.style.left = x + 'px';
                ripple.style.top = y + 'px';
                ripple.classList.add('ripple');
                
                this.appendChild(ripple);
                
                setTimeout(() => {
                    ripple.remove();
                }, 600);
            });
        });
    });
    
    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .explore-btn, .read-more-btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
});
// Add this to your existing DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    // Your existing code...
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
    const mobileCloseBtn = document.querySelector(".mobile-close-btn");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener("click", () => {
            mobileNav.classList.add("active");
            document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
        });
    }
    
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            document.body.style.overflow = ""; // Re-enable scrolling
        });
    }
    
    mobileNavLinks.forEach(link => {
        link.addEventListener("click", function() {
            mobileNav.classList.remove("active");
            document.body.style.overflow = ""; // Re-enable scrolling
            
            // Smooth scroll to section
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
    
    // Update the selector for nav links to match the new structure
    const navLinks = document.querySelectorAll(".nav-menu .nav-link");
    // Rest of your existing code for navLinks...
});
// Add this to your existing DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
    // Your existing code...
    
    // Scroll to top button functionality
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
        
        // Show/hide scroll to top button based on scroll position
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add("visible");
            } else {
                scrollTopBtn.classList.remove("visible");
            }
        });
    }
});