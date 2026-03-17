// ===== SCROLL ANIMATIONS =====
(function () {
    'use strict';

    // Typed-text strings for hero subtitle
    var strings = [
        'Full Stack Developer',
        'UI/UX Designer',
        'Tech Enthusiast',
        'Problem Solver'
    ];
    var idx = 0, charIdx = 0, deleting = false;

    function typedEffect() {
        var el = document.getElementById('typed-text');
        if (!el) return;

        var current = strings[idx];

        if (!deleting) {
            el.textContent = current.slice(0, charIdx + 1);
            charIdx++;
            if (charIdx === current.length) {
                deleting = true;
                setTimeout(typedEffect, 1800);
                return;
            }
        } else {
            el.textContent = current.slice(0, charIdx - 1);
            charIdx--;
            if (charIdx === 0) {
                deleting = false;
                idx = (idx + 1) % strings.length;
            }
        }
        setTimeout(typedEffect, deleting ? 60 : 90);
    }

    // Intersection Observer for fade-in / slide-up elements
    function initScrollReveal() {
        var options = { threshold: 0.12, rootMargin: '0px 0px -50px 0px' };

        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        var selectors = [
            '.fade-in',
            '.skill-card',
            '.project-card',
            '.stat-card',
            '.contact-link'
        ];

        selectors.forEach(function (sel) {
            document.querySelectorAll(sel).forEach(function (el, i) {
                // Stagger delay
                el.style.transitionDelay = (i * 0.07) + 's';
                observer.observe(el);
            });
        });
    }

    function init() {
        typedEffect();
        initScrollReveal();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
