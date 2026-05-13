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
