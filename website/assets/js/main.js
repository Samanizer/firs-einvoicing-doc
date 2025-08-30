/**
 * Main JavaScript file for FIRS E-Invoicing Proposal Website
 * Professional enterprise functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize navigation
    initializeNavigation();
    
    // Initialize smooth scrolling
    initializeSmoothScrolling();
    
    // Initialize diagram interactions
    initializeDiagramInteractions();
    
    // Initialize responsive features
    initializeResponsiveFeatures();
    
    // Initialize print functionality
    initializePrintFunctionality();
});

/**
 * Navigation functionality
 */
function initializeNavigation() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Mark active navigation item
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || 
            (currentPage === '' && href === 'index.html') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            link.classList.add('active');
        }
    });
    
    // Mobile navigation toggle
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close mobile menu when clicking on links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbarCollapse.classList.remove('show');
            });
        });
    }
}

/**
 * Smooth scrolling for anchor links
 */
function initializeSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 100; // Account for fixed navbar
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Diagram interactions and enhancements
 */
function initializeDiagramInteractions() {
    const diagrams = document.querySelectorAll('.diagram-container img');
    
    diagrams.forEach(diagram => {
        // Add loading state
        diagram.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
        
        // Add hover effects for interactive diagrams
        diagram.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        diagram.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
        
        // Add click to expand functionality
        diagram.addEventListener('click', function() {
            openDiagramModal(this);
        });
        
        // Add cursor pointer to indicate clickability
        diagram.style.cursor = 'pointer';
    });
}

/**
 * Open diagram in modal for detailed view
 */
function openDiagramModal(diagram) {
    // Create modal if it doesn't exist
    let modal = document.getElementById('diagramModal');
    
    if (!modal) {
        modal = createDiagramModal();
    }
    
    // Set diagram source and title
    const modalImg = modal.querySelector('.modal-diagram');
    const modalTitle = modal.querySelector('.modal-title');
    
    modalImg.src = diagram.src;
    modalTitle.textContent = diagram.alt || 'Diagram';
    
    // Show modal
    if (typeof bootstrap !== 'undefined') {
        const bsModal = new bootstrap.Modal(modal);
        bsModal.show();
    } else {
        modal.style.display = 'block';
        modal.classList.add('show');
    }
}

/**
 * Create diagram modal HTML
 */
function createDiagramModal() {
    const modalHTML = `
        <div class="modal fade" id="diagramModal" tabindex="-1" aria-labelledby="diagramModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-xl">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="diagramModalLabel">Diagram</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body text-center">
                        <img src="" alt="Diagram" class="modal-diagram img-fluid">
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    return document.getElementById('diagramModal');
}

/**
 * Responsive features and mobile optimizations
 */
function initializeResponsiveFeatures() {
    // Adjust font sizes for mobile
    function adjustForMobile() {
        const isMobile = window.innerWidth < 768;
        const heroTitle = document.querySelector('.hero-section h1');
        
        if (heroTitle) {
            if (isMobile) {
                heroTitle.style.fontSize = '2rem';
            } else {
                heroTitle.style.fontSize = '3rem';
            }
        }
    }
    
    // Initial check
    adjustForMobile();
    
    // Listen for resize events
    window.addEventListener('resize', debounce(adjustForMobile, 250));
    
    // Touch-friendly enhancements for mobile
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
        
        // Improve touch targets
        const buttons = document.querySelectorAll('.btn, .nav-link');
        buttons.forEach(button => {
            button.style.minHeight = '44px';
            button.style.minWidth = '44px';
        });
    }
}

/**
 * Print functionality
 */
function initializePrintFunctionality() {
    // Add print button if needed
    const printBtn = document.getElementById('printBtn');
    if (printBtn) {
        printBtn.addEventListener('click', function() {
            window.print();
        });
    }
    
    // Optimize for print
    window.addEventListener('beforeprint', function() {
        // Expand all collapsed sections for print
        const collapses = document.querySelectorAll('.collapse:not(.show)');
        collapses.forEach(collapse => {
            collapse.classList.add('show');
        });
    });
}

/**
 * Utility function: Debounce
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Scroll to top functionality
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Show scroll to top button when scrolled
 */
window.addEventListener('scroll', debounce(function() {
    const scrollBtn = document.getElementById('scrollToTop');
    if (scrollBtn) {
        if (window.pageYOffset > 300) {
            scrollBtn.style.display = 'block';
        } else {
            scrollBtn.style.display = 'none';
        }
    }
}, 100));

/**
 * Form validation helpers (if forms are added later)
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Animation helpers for enhanced user experience
 */
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Initialize animations if elements exist
if (document.querySelector('.animate-on-scroll')) {
    animateOnScroll();
}

/**
 * Console log for development
 */
console.log('FIRS E-Invoicing Proposal Website - Professional Enterprise Solution by Bluelight');
console.log('All systems operational ✓');