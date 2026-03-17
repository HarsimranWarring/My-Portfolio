// ===== MAIN.JS — Core functionality =====
(function () {
    'use strict';

    // ---- Navbar scroll effect & active link highlighting ----
    var navbar    = document.getElementById('navbar');
    var navLinks  = document.querySelectorAll('.nav-link');
    var sections  = document.querySelectorAll('section[id]');
    var backTop   = document.getElementById('back-to-top');

    function onScroll() {
        var scrollY = window.pageYOffset;

        // Navbar shadow
        if (navbar) {
            navbar.classList.toggle('scrolled', scrollY > 50);
        }

        // Back-to-top visibility
        if (backTop) {
            backTop.classList.toggle('visible', scrollY > 400);
        }

        // Active nav link
        var current = '';
        sections.forEach(function (section) {
            var top = section.offsetTop - 90;
            if (scrollY >= top) {
                current = section.getAttribute('id');
            }
        });
        navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load

    // ---- Back to top ----
    if (backTop) {
        backTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ---- Hamburger menu ----
    var hamburger = document.getElementById('hamburger');
    var navMenu   = document.getElementById('nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function () {
            var isOpen = navMenu.classList.toggle('open');
            hamburger.classList.toggle('active', isOpen);
            hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        // Close on outside click
        document.addEventListener('click', function (e) {
            if (!navbar.contains(e.target)) {
                navMenu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    // ---- Scroll indicator click ----
    var scrollIndicator = document.getElementById('scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function () {
            if (typeof window.scrollToSection === 'function') {
                window.scrollToSection('about');
            }
        });
    }

    // ---- Contact form submission ----
    var contactForm = document.getElementById('contact-form');
    var formSuccess = document.getElementById('form-success');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            var isValid = true;
            contactForm.querySelectorAll('[required]').forEach(function (field) {
                if (!field.value.trim()) {
                    field.style.borderColor = '#ef4444';
                    isValid = false;
                } else {
                    field.style.borderColor = '';
                }
            });
            if (!isValid) return;

            // Simulate success (replace with real API call if needed)
            contactForm.style.display = 'none';
            if (formSuccess) formSuccess.removeAttribute('hidden');
        });

        // Live validation reset
        contactForm.querySelectorAll('[required]').forEach(function (field) {
            field.addEventListener('input', function () {
                field.style.borderColor = '';
            });
        });
    }

    console.log('✅ Portfolio loaded successfully!');
})();
