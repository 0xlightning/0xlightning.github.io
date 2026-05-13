console.log("0xlightning portfolio loaded ⚡");

// Initialize Lenis Smooth Scroll
const lenis = new Lenis();

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Page Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 1200);
});

// Scroll Effects (Progress Bar & Nav background)
window.addEventListener('scroll', () => {
    const scrollProgress = document.getElementById('scroll-progress');
    const nav = document.getElementById('nav');

    // Progress bar
    const scrollTotal = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (window.scrollY / scrollTotal) * 100;
    if (scrollProgress) scrollProgress.style.width = progress + '%';

    // Nav background shift
    if (nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
});

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
    threshold: 0.4,
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

// GSAP Animations
if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline cards
    gsap.from(".timeline-card", {
        x: 60,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: "#timeline",
            start: "top 70%"
        }
    });

    // Skills Grid
    gsap.to(".skill-card", {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: { amount: 0.8 },
        scrollTrigger: {
            trigger: ".skills-grid",
            start: "top 90%",
            toggleActions: "play none none none"
        }
    });

    // CTF cards
    gsap.from(".ctf-card", {
        x: -40,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
        stagger: 0.15,
        scrollTrigger: {
            trigger: "#ctf",
            start: "top 75%"
        }
    });

    // Hardware diagram
    gsap.from(".hw-line", {
        opacity: 0,
        duration: 0.3,
        stagger: 0.1,
        scrollTrigger: {
            trigger: ".hw-diagram",
            start: "top 80%"
        }
    });

    // About Section
    gsap.from(".about-visual", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%"
        }
    });

    gsap.from(".about-text", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#about",
            start: "top 70%"
        }
    });

    // Contact Section
    gsap.from(".contact-card", {
        y: 30,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 75%"
        }
    });

    gsap.from(".result", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%"
        }
    });

    // Hero Floating Animations
    gsap.to(".floating", {
        y: 20,
        x: 10,
        rotation: 5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
    });

    // Hero Text Reveal
    const heroTl = gsap.timeline();
    heroTl.from(".hero-badge", { opacity: 0, y: 10, duration: 0.5, delay: 1.5 })
          .from(".hero-title", { opacity: 0, y: 20, duration: 0.8 }, "-=0.3")
          .from(".hero-subtitle", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
          .from(".hero-cta", { opacity: 0, y: 20, duration: 0.8 }, "-=0.5")
          .from(".social-links-hero", { opacity: 0, duration: 0.5 }, "-=0.3")
          .from(".hero-visual", { opacity: 0, scale: 0.9, duration: 1, ease: "power2.out" }, "-=0.8");
}
