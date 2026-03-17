// ===== SMOOTH SCROLLING NAVIGATION =====
(function () {
    'use strict';

    /**
     * Smoothly scroll to a target element with optional offset.
     * @param {string} targetId - The ID of the section to scroll to.
     * @param {number} [offset=70] - Pixel offset (e.g. navbar height).
     */
    function scrollToSection(targetId, offset) {
        offset = offset !== undefined ? offset : 70;
        var target = document.getElementById(targetId);
        if (!target) return;
        var top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: top, behavior: 'smooth' });
    }

    /**
     * Attach smooth-scroll behaviour to all anchors with data-scroll
     * and to href="#section-id" nav links.
     */
    function init() {
        document.addEventListener('click', function (e) {
            var anchor = e.target.closest('a[href^="#"], a[data-scroll]');
            if (!anchor) return;

            var href = anchor.getAttribute('href');
            if (!href || href === '#') return;

            var id = href.replace('#', '');
            if (!id || !document.getElementById(id)) return;

            e.preventDefault();
            scrollToSection(id);

            // Close mobile menu if open
            var menu = document.getElementById('nav-menu');
            var hamburger = document.getElementById('hamburger');
            if (menu && menu.classList.contains('open')) {
                menu.classList.remove('open');
                hamburger.classList.remove('active');
                hamburger.setAttribute('aria-expanded', 'false');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

    // Expose for other modules
    window.scrollToSection = scrollToSection;
})();
