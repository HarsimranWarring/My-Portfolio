// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
});

// Avatar interaction
const avatar = document.querySelector('.avatar');
if (avatar) {
    avatar.addEventListener('mouseover', () => {
        avatar.style.transform = 'scale(1.05)';
    });
    
    avatar.addEventListener('mouseout', () => {
        avatar.style.transform = 'scale(1)';
    });
}

console.log('✅ Portfolio loaded with all animations!');
