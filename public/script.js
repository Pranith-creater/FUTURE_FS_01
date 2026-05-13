document.addEventListener('DOMContentLoaded', () => {
    // ========== THEME TOGGLE ==========
    const themeToggle = document.querySelector('#themeToggle');
    const htmlElement = document.documentElement;
    const body = document.body;
    
    // Load saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.classList.add(savedTheme);
    updateThemeIcon(savedTheme);
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'light-mode') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
        
        body.classList.remove(currentTheme);
        body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // ========== MOBILE MENU TOGGLE ==========
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const icon = mobileMenuToggle.querySelector('i');

    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-xmark');
        } else {
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-link, .nav-btn, .theme-toggle').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        });
    });

    // ========== STICKY NAVBAR ==========
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // ========== SCROLL REVEAL ANIMATION ==========
    const revealElements = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        root: null,
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // ========== BLOB MOUSE FOLLOW EFFECT ==========
    const blob1 = document.querySelector('.blob-1');
    const blob2 = document.querySelector('.blob-2');

    document.addEventListener('mousemove', (e) => {
        const x = e.clientX;
        const y = e.clientY;
        
        requestAnimationFrame(() => {
            blob1.style.transform = `translate(${x * 0.02}px, ${y * 0.02}px)`;
            blob2.style.transform = `translate(${x * -0.02}px, ${y * -0.02}px)`;
        });
    });
    
    // ========== TYPEWRITER EFFECT ==========
    const terminalOutput = document.querySelector('.code-output');
    if (terminalOutput && terminalOutput.textContent) {
        const originalText = terminalOutput.textContent;
        terminalOutput.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < originalText.length) {
                terminalOutput.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // ========== CONTACT FORM HANDLING ==========
    const contactForm = document.querySelector('#contactForm');
    const formMessage = document.querySelector('#formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.querySelector('#name').value;
            const email = document.querySelector('#email').value;
            const message = document.querySelector('#message').value;
            
            // Clear previous messages
            formMessage.textContent = '';
            formMessage.className = '';
            
            try {
                // Send to backend
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ name, email, message })
                });

                if (response.ok) {
                    formMessage.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
                    formMessage.classList.add('success');
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                console.error('Error:', error);
                formMessage.textContent = '✗ Failed to send message. Please try again or email me directly.';
                formMessage.classList.add('error');
            }
        });
    }
});
