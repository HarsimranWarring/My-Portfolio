// ===== DARK / LIGHT THEME TOGGLE =====
(function () {
    'use strict';

    var STORAGE_KEY = 'hw-theme';
    var html = document.documentElement;
    var toggleBtn, icon;

    function applyTheme(theme) {
        html.setAttribute('data-theme', theme);
        localStorage.setItem(STORAGE_KEY, theme);
        if (icon) {
            if (theme === 'dark') {
                icon.classList.replace('fa-moon', 'fa-sun');
            } else {
                icon.classList.replace('fa-sun', 'fa-moon');
            }
        }
    }

    function getPreferredTheme() {
        var stored = localStorage.getItem(STORAGE_KEY);
        if (stored) return stored;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    function init() {
        toggleBtn = document.getElementById('theme-toggle');
        icon = document.getElementById('theme-icon');

        // Apply saved / system preference immediately
        applyTheme(getPreferredTheme());

        if (toggleBtn) {
            toggleBtn.addEventListener('click', function () {
                var current = html.getAttribute('data-theme');
                applyTheme(current === 'dark' ? 'light' : 'dark');
            });
        }

        // Sync when OS preference changes (no stored preference)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
            if (!localStorage.getItem(STORAGE_KEY)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
