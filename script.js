console.log("0xlightning portfolio loaded ⚡");

// Hamburger menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Close mobile menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Intersection Observer for active nav links
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

const options = {
    threshold: 0.3,
    rootMargin: "-70px 0px 0px 0px" // Offset for sticky nav
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navItems.forEach(item => {
                item.classList.remove('active');
                if (item.getAttribute('href').substring(1) === entry.target.id) {
                    item.classList.add('active');
                }
            });
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// Animate timeline entries on scroll
const timelineEntries = document.querySelectorAll('.timeline-entry');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

timelineEntries.forEach(entry => {
    timelineObserver.observe(entry);
});

// Skills Filtering Logic
const filterButtons = document.querySelectorAll('.filter-btn');
const skillCards = document.querySelectorAll('.skill-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const category = button.getAttribute('data-filter');

        skillCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.classList.remove('hidden');
                }, 10);
            } else {
                card.classList.add('hidden');
                setTimeout(() => {
                    if (card.classList.contains('hidden')) {
                        card.style.display = 'none';
                    }
                }, 300);
            }
        });
    });
});

// Project Card Flip Logic
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
});

// GSAP Animation for Skills Grid
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Initial entry animation
    gsap.to(".skill-card", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: {
            amount: 0.8
        },
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });
}
