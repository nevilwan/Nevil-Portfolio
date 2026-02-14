/* ===================================
   THEME MANAGEMENT (Dark Mode)
   =================================== */
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const preferredTheme = localStorage.getItem('theme') || 'light';

// Set initial theme
htmlElement.setAttribute('data-theme', preferredTheme);
updateThemeIcon(preferredTheme);

function updateThemeIcon(theme) {
    if (themeToggle) {
        themeToggle.innerHTML = theme === 'dark' ? '<i class="bi bi-sun-fill"></i>' : '<i class="bi bi-moon-fill"></i>';
    }
}

themeToggle?.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

/* ===================================
   TYPING EFFECT
   =================================== */
const typingElement = document.getElementById('typing-effect');
const roles = [
    'Software Developer',
    'Data Analyst',
    'Problem Solver',
    'Full-Stack Engineer'
];

let currentRole = 0;
let currentChar = 0;
let isDeleting = false;

function typeEffect() {
    const role = roles[currentRole];
    
    if (isDeleting) {
        typingElement.textContent = role.substring(0, currentChar - 1);
        currentChar--;
        
        if (currentChar === 0) {
            isDeleting = false;
            currentRole = (currentRole + 1) % roles.length;
            setTimeout(typeEffect, 500);
            return;
        }
    } else {
        typingElement.textContent = role.substring(0, currentChar + 1);
        currentChar++;
        
        if (currentChar === role.length) {
            isDeleting = true;
            setTimeout(typeEffect, 2000);
            return;
        }
    }
    
    setTimeout(typeEffect, isDeleting ? 50 : 100);
}

if (typingElement) {
    typeEffect();
}

/* ===================================
   NAVIGATION & SCROLL EFFECTS
   =================================== */
const navbar = document.getElementById('mainNav');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
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

/* ===================================
   SCROLL TO TOP BUTTON
   =================================== */
const scrollTopBtn = document.getElementById('scrollTopBtn');

function toggleScrollTopButton() {
    if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
}

scrollTopBtn?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* ===================================
   INTERSECTION OBSERVER FOR ANIMATIONS
   =================================== */
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', () => {
    const revealElements = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
    revealElements.forEach(element => {
        observer.observe(element);
    });
});

/* ===================================
   CONTACT FORM HANDLING
   =================================== */
const contactForm = document.getElementById('contactForm');

contactForm?.addEventListener('submit', (e) => {
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
    
    // Determine endpoint
    const endpoint = contactForm.dataset.formspree || null;
    
    if (!endpoint) {
        console.warn('Contact form endpoint not configured. Set data-formspree on the form element.');
        console.log('Form data (local):', formData);
        showAlert('Form endpoint not configured. Please set the form action in the HTML.', 'info');
        return;
    }
    
    // Submit to Formspree or other backend
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
    
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => {
            alertDiv.remove();
        }, 150);
    }, 5000);
}

/* ===================================
   CV DOWNLOAD HANDLER
   =================================== */
const downloadCVBtn = document.getElementById('downloadCV');

downloadCVBtn?.addEventListener('click', (e) => {
    e.preventDefault();
    const href = downloadCVBtn.getAttribute('href');
    if (!href) {
        showAlert('CV download not available.', 'info');
        return;
    }
    
    // Check file existence via HEAD request
    fetch(href, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                console.log('CV download initiated');
                window.location.href = href;
            } else {
                showAlert('CV download will be available soon. Please contact me directly for my resume.', 'info');
            }
        })
        .catch(() => {
            showAlert('CV download will be available soon. Please contact me directly for my resume.', 'info');
        });
});

/* ===================================
   PROJECT CARD INTERACTIONS
   =================================== */
const projectCards = document.querySelectorAll('.project-card-modern, .data-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transition = 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });
});

const projectLinks = document.querySelectorAll('.project-btn, .data-link');
projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        if (link.getAttribute('href') === '#') {
            e.preventDefault();
            showAlert('Project details coming soon!', 'info');
        }
    });
});

/* ===================================
   SKILL TAGS INTERACTION
   =================================== */
const skillTags = document.querySelectorAll('.skill-tag, .competency-tag, .tech-badge, .tool-tag');

skillTags.forEach(tag => {
    tag.addEventListener('click', () => {
        const skill = tag.textContent.trim();
        showAlert(`Interested in ${skill}? Check out my related projects!`, 'info');
    });
});

/* ===================================
   FORM INPUT ENHANCEMENTS
   =================================== */
const formInputs = document.querySelectorAll('.form-control');

formInputs.forEach(input => {
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

/* ===================================
   SOCIAL LINKS
   =================================== */
const socialLinks = document.querySelectorAll('.social-links a');

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href === 'mailto:nevil.wandera@example.com') {
            // Allow email links
            return;
        }
        // External links open in new tab
        if (!href.startsWith('#')) {
            e.preventDefault();
            window.open(href, '_blank');
        }
    });
});

/* ===================================
   STATS COUNTER ANIMATION
   =================================== */
const statNumbers = document.querySelectorAll('.stat-number');

const animateValue = (element, start, end, duration) => {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        const isSuffix = element.textContent.includes('+');
        element.textContent = value + (isSuffix ? '+' : '');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.dataset.animated) {
            entry.target.dataset.animated = 'true';
            
            const text = entry.target.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            if (!isNaN(number)) {
                animateValue(entry.target, 0, number, 2000);
            }
            
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => statsObserver.observe(stat));

/* ===================================
   PAGE INITIALIZATION
   =================================== */
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully! 🚀');
    
    // Bootstrap tooltips if available
    if (typeof bootstrap !== 'undefined') {
        const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        tooltipTriggerList.map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    }
});
