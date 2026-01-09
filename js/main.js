document.addEventListener('DOMContentLoaded', () => {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger);

    // Sticky Navbar
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Hero Animations

    const heroTl = gsap.timeline();
    if(document.querySelector('.hero-content h1')){

        heroTl.from('.hero-content h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }).from('.hero-content p', {
            y: 30,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        }, '-=0.6').from('.hero-btns', {
            y: 20,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        }, '-=0.6');
    }

    // Section Entrance Animations
    const revealSections = document.querySelectorAll('section');
    revealSections.forEach(section => {
        const sectionTitle = section.querySelector('.section-title');
        const contentItems = section.querySelectorAll('.row > div');

        if (sectionTitle) {
            gsap.from(sectionTitle, {
                scrollTrigger: {
                    trigger: sectionTitle,
                    start: 'top 80%',
                },
                y: 50,
                opacity: 1,
                duration: 1,
                ease: 'power3.out'
            });
        }

        if (contentItems.length > 0) {
            gsap.from(contentItems, {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 70%',
                },
                y: 60,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: 'power3.out'
            });
        }
    });

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-item h3');
    stats.forEach(stat => {
        const text = stat.innerText;
        const target = parseFloat(text.replace(/[^\d.]/g, ''));
        const suffix = text.replace(/[\d.]/g, '');
        
        gsap.from(stat, {
            scrollTrigger: {
                trigger: stat,
                start: 'top 90%',
            },
            innerHTML: 0,
            duration: 2,
            ease: 'power2.out',
            snap: { innerHTML: 1 },
            onUpdate: function() {
                stat.innerHTML = Math.floor(this.targets()[0].innerHTML) + suffix;
            }
        });
    });

    // About Section Specific: Mini Cards Stagger
    
});
