// ===== SCROLL-TRIGGERED FADE-IN =====
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const parent = entry.target.parentElement;
            const siblings = parent ? parent.querySelectorAll('.fade-in') : [entry.target];
            siblings.forEach((el, i) => {
                setTimeout(() => {
                    el.classList.add('visible');
                }, i * 120);
            });
            fadeObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.fade-in').forEach(el => {
    fadeObserver.observe(el);
});

// ===== AVATAR INTERACTION =====
const avatar = document.querySelector('.avatar');
if (avatar) {
    avatar.addEventListener('mouseover', () => {
        avatar.style.transform = 'scale(1.05)';
    });
    avatar.addEventListener('mouseout', () => {
        avatar.style.transform = 'scale(1)';
    });
}

// ===== SCROLL INDICATOR =====
const scrollIndicator = document.querySelector('.scroll-indicator');
if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
        window.location.href = 'about.html';
    });
}

console.log('✅ Portfolio loaded with all animations!');
