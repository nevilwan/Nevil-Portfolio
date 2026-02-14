// ===================================
// Navigation & Scroll Effects
// ===================================

// Get navigation element
const navbar = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

// Handle navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Show/hide scroll to top button
    toggleScrollTopButton();
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Smooth scrolling for nav links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const navHeight = navbar.offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                    toggle: true
                });
            }
        }
    });
});

// ===================================
// Scroll to Top Button
// ===================================

const scrollTopBtn = document.getElementById('scrollTopBtn');

function toggleScrollTopButton() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Intersection Observer for Animations
// ===================================

// Create observer for reveal animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Optionally unobserve after revealing
            // observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with reveal classes
document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(element => {
        observer.observe(element);
    });
});

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        subject: document.getElementById('subject').value.trim(),
        message: document.getElementById('message').value.trim()
    };

    // Form validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showAlert('Please fill in all fields', 'danger');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showAlert('Please enter a valid email address', 'danger');
        return;
    }

    // Determine endpoint: configured via data attribute on the form (set in HTML)
    const endpoint = contactForm.dataset.formspree || null; // e.g. https://formspree.io/f/your_form_id

    if (!endpoint) {
        // If no endpoint provided, log and inform the user (developer) to configure the form
        console.warn('Contact form endpoint not configured. Set data-formspree on the form element.');
        console.log('Form data (local):', formData);
        showAlert('Form endpoint not configured. Please set the form action in the HTML.', 'info');
        return;
    }

    // Submit to Formspree (or other POST endpoint) via fetch
    fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(async (response) => {
        if (response.ok) {
            showAlert('Thank you for your message! I will get back to you soon.', 'success');
            contactForm.reset();
        } else {
            let data;
            try { data = await response.json(); } catch (err) { data = null; }
            console.error('Form submission error', data || response.statusText);
            showAlert('Sorry, there was an error sending your message. Please try again later.', 'danger');
        }
    })
    .catch((err) => {
        console.error('Form submit failed', err);
        showAlert('Sorry, there was an error sending your message. Please try again.', 'danger');
    });
});

// Alert notification function
function showAlert(message, type) {
    // Create alert element
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-dismissible fade show position-fixed`;
    alertDiv.style.cssText = 'top: 100px; right: 20px; z-index: 9999; min-width: 300px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);';
    alertDiv.setAttribute('role', 'status');
    alertDiv.setAttribute('aria-live', 'polite');
    alertDiv.setAttribute('aria-atomic', 'true');
    alertDiv.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    
    // Add to body
    document.body.appendChild(alertDiv);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => {
            alertDiv.remove();
        }, 150);
    }, 5000);
}

// ===================================
// Download CV Button Tracking
// ===================================

const downloadCVBtn = document.getElementById('downloadCV');

downloadCVBtn.addEventListener('click', (e) => {
    // Prevent immediate navigation so we can check the file exists first
    e.preventDefault();
    const href = downloadCVBtn.getAttribute('href');
    if (!href) {
        showAlert('CV download not available.', 'info');
        return;
    }

    // Try a HEAD request to check file existence before redirecting
    fetch(href, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                // Track download event (for analytics)
                console.log('CV download initiated');
                // In production, call analytics here (gtag or other)
                window.location.href = href;
            } else {
                showAlert('CV download will be available soon. Please contact me directly for my resume.', 'info');
            }
        })
        .catch(() => {
            showAlert('CV download will be available soon. Please contact me directly for my resume.', 'info');
        });
});

// ===================================
// Project Card Interactions
// ===================================

const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    // Add hover effect tracking
    card.addEventListener('mouseenter', () => {
        // Optional: Add additional hover effects
    });
    
    // Handle project link clicks
    const projectLink = card.querySelector('.project-link');
    if (projectLink) {
        projectLink.addEventListener('click', (e) => {
            e.preventDefault();
            const projectTitle = card.querySelector('.project-title').textContent;
            console.log(`Project clicked: ${projectTitle}`);
            
            // In production, you would navigate to project detail page or open modal
            showAlert('Project details coming soon!', 'info');
        });
    }
});

// ===================================
// Skill Category Interactions
// ===================================

const skillCategories = document.querySelectorAll('.skill-category');

skillCategories.forEach(category => {
    category.addEventListener('mouseenter', () => {
        // Add pulse effect to icon
        const icon = category.querySelector('.skill-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    category.addEventListener('mouseleave', () => {
        const icon = category.querySelector('.skill-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===================================
// Timeline Animation Enhancement
// ===================================

const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            timelineObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'all 0.6s ease';
    timelineObserver.observe(item);
});

// ===================================
// Competency Tags Interaction
// ===================================

const competencyTags = document.querySelectorAll('.competency-tag');

competencyTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const skill = tag.textContent;
        console.log(`Skill clicked: ${skill}`);
        
        // Optional: Filter projects or show related content
        showAlert(`Interested in ${skill}? Check out my related projects below!`, 'info');
    });
});

// ===================================
// Form Input Enhancements
// ===================================

const formInputs = document.querySelectorAll('.form-control');

formInputs.forEach(input => {
    // Add floating label effect
    input.addEventListener('focus', () => {
        input.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
        if (!input.value) {
            input.parentElement.classList.remove('focused');
        }
    });
    
    // Character counter for textarea
    if (input.tagName === 'TEXTAREA') {
        const maxLength = 500;
        const counter = document.createElement('small');
        counter.className = 'text-muted d-block mt-1 text-end';
        counter.textContent = `0 / ${maxLength}`;
        input.parentElement.appendChild(counter);
        
        input.addEventListener('input', () => {
            const length = input.value.length;
            counter.textContent = `${length} / ${maxLength}`;
            
            if (length > maxLength) {
                counter.classList.add('text-danger');
                counter.classList.remove('text-muted');
            } else {
                counter.classList.add('text-muted');
                counter.classList.remove('text-danger');
            }
        });
    }
});

// ===================================
// Social Links Analytics
// ===================================

const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = link.querySelector('i').className;
        console.log(`Social link clicked: ${platform}`);
        
        // Track social media clicks
        /*
        if (typeof gtag !== 'undefined') {
            gtag('event', 'social_click', {
                'event_category': 'Social',
                'event_label': platform
            });
        }
        */
    });
});

// ===================================
// Statistics Counter Animation
// ===================================

const statNumbers = document.querySelectorAll('.stat-number');

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + (element.textContent.includes('+') ? '+' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const target = entry.target;
            const endValue = parseInt(target.textContent);
            animateValue(target, 0, endValue, 2000);
            statsObserver.unobserve(target);
        }
    });
}, {
    threshold: 0.5
});

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// ===================================
// Keyboard Navigation Accessibility
// ===================================

document.addEventListener('keydown', (e) => {
    // ESC key to close mobile menu
    if (e.key === 'Escape') {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        if (navbarCollapse.classList.contains('show')) {
            const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                toggle: true
            });
        }
    }
});

// ===================================
// Performance Optimization
// ===================================

// Lazy load images when they're near viewport
document.addEventListener('DOMContentLoaded', () => {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
});

// ===================================
// Print Preparation
// ===================================

window.addEventListener('beforeprint', () => {
    console.log('Preparing page for printing...');
    // Add any print-specific preparations here
});

window.addEventListener('afterprint', () => {
    console.log('Print completed');
});

// ===================================
// Easter Egg / Console Message
// ===================================

console.log('%c👋 Hello, Developer!', 'font-size: 20px; font-weight: bold; color: #e94560;');
console.log('%cThanks for checking out my portfolio code!', 'font-size: 14px; color: #1a1a2e;');
console.log('%cInterested in collaborating? Let\'s connect!', 'font-size: 14px; color: #0f3460;');
console.log('%c📧 nevil.wandera@example.com', 'font-size: 12px; color: #718096;');

// ===================================
// Service Worker Registration (Optional)
// ===================================

// Uncomment to enable PWA features
/*
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}
*/

// ===================================
// Initialize on DOM Load
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');
    
    // Initialize tooltips if Bootstrap is available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
});
