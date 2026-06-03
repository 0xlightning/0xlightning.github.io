console.log("0xlightning portfolio loaded ⚡");

// ==========================================
// 1. DATASETS
// ==========================================

const timelineData = [
  {
    notation: "e4",
    period: "Pre-2023",
    title: "The Foundation",
    description: "Explored electronics, computer hardware, and embedded systems. ECE background built practical problem-solving depth that now powers IoT integrations.",
    skills: ["Electronics", "C++ basics", "Embedded Systems", "Problem-solving"]
  },
  {
    notation: "d4",
    period: "2023",
    title: "Hardware meets software",
    description: "Wrote C++ firmware for Arduino and ESP32. Built hardware-integrated systems — sensors talking to web dashboards in real time via Serial/HTTP protocols.",
    skills: ["C++", "Arduino", "ESP32", "Embedded Firmware", "Serial/HTTP", "IoT"]
  },
  {
    notation: "Nf3",
    period: "2024",
    title: "Going full-stack",
    description: "Shipped first MERN SaaS dashboards. Integrated eCommerce automation with Shopify & Zoho CRM. Discovered AI-accelerated development with Claude Code.",
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "Firebase", "TypeScript"]
  },
  {
    notation: "O-O",
    period: "Feb 2024 – Present",
    title: "Full Stack Developer — Active Theory",
    description: "Building enterprise SaaS platforms, eCommerce automation, and IoT dashboards. Reduced cart abandonment 30% via WhatsApp API. Cut dev time 40–75% with AI tooling. Delivering production MVPs in 4–7 days.",
    skills: ["Next.js SSR", "JWT/OAuth 2.0", "RBAC", "Shopify Liquid", "WhatsApp API", "LLM Integration", "Playwright", "Agile/Scrum"]
  }
];

const skillsData = [
  // QUEEN — Core / Most powerful
  { symbol: "♛", name: "React.js", category: "frontend", tooltip: "Core frontend framework" },
  { symbol: "♛", name: "Next.js", category: "frontend", tooltip: "SSR/SSG, production SaaS" },
  { symbol: "♛", name: "Node.js", category: "backend", tooltip: "Backend services & APIs" },
  { symbol: "♛", name: "TypeScript", category: "frontend", tooltip: "Type-safe fullstack dev" },

  // ROOK — Solid foundations
  { symbol: "♜", name: "MongoDB", category: "backend", tooltip: "Primary database" },
  { symbol: "♜", name: "Firebase", category: "backend", tooltip: "Auth, Firestore, Cloud Fn" },
  { symbol: "♜", name: "PostgreSQL", category: "backend", tooltip: "Relational database" },
  { symbol: "♜", name: "Shopify (Liquid)", category: "ecommerce", tooltip: "Custom theme dev" },
  { symbol: "♜", name: "Tailwind CSS", category: "frontend", tooltip: "Utility-first styling" },

  // BISHOP — Diagonal power moves
  { symbol: "♝", name: "REST API Dev", category: "backend", tooltip: "Express.js & API design" },
  { symbol: "♝", name: "JWT / OAuth 2.0", category: "backend", tooltip: "Auth & security" },
  { symbol: "♝", name: "RBAC", category: "backend", tooltip: "Role-based access control" },
  { symbol: "♝", name: "WebSocket", category: "backend", tooltip: "Real-time data sync" },
  { symbol: "♝", name: "LLM Integration", category: "ai-tools", tooltip: "Multi-agent orchestration" },
  { symbol: "♝", name: "Prompt Engineering", category: "ai-tools", tooltip: "Context-aware AI prompts" },

  // KNIGHT — Tactical leaps
  { symbol: "♞", name: "WhatsApp Business API", category: "ecommerce", tooltip: "Wati, cart abandonment -30%" },
  { symbol: "♞", name: "Zoho CRM API", category: "ecommerce", tooltip: "CRM data sync" },
  { symbol: "♞", name: "JavaScript ES6+", category: "frontend", tooltip: "Core language" },
  { symbol: "♞", name: "Redux / Zustand", category: "frontend", tooltip: "State management" },
  { symbol: "♞", name: "Prisma", category: "backend", tooltip: "ORM for PostgreSQL" },
  { symbol: "♞", name: "Docker", category: "tools", tooltip: "Containerisation" },
  { symbol: "♞", name: "Playwright", category: "tools", tooltip: "E2E testing" },
  { symbol: "♞", name: "CI/CD Pipelines", category: "tools", tooltip: "Automated deployments" },

  // PAWN — Essential infantry
  { symbol: "♟", name: "Arduino", category: "hardware", tooltip: "Embedded firmware" },
  { symbol: "♟", name: "ESP32", category: "hardware", tooltip: "IoT device programming" },
  { symbol: "♟", name: "C++ (Embedded)", category: "hardware", tooltip: "Sensor firmware" },
  { symbol: "♟", name: "HTML5 / CSS3", category: "frontend", tooltip: "Semantic web standards" },
  { symbol: "♟", name: "SSR / SSG / PWA", category: "frontend", tooltip: "Next.js rendering modes" },
  { symbol: "♟", name: "Git / GitHub", category: "tools", tooltip: "Version control" },
  { symbol: "♟", name: "Python", category: "backend", tooltip: "Scripting & automation" },
  { symbol: "♟", name: "Netlify / Render", category: "tools", tooltip: "Cloud deployment" },
  { symbol: "♟", name: "Claude Code", category: "ai-tools", tooltip: "AI-accelerated dev" }
];

const categoryMap = {
  "frontend": "Frontend",
  "backend": "Backend & DB",
  "hardware": "Hardware / IoT",
  "ai-tools": "AI & LLM",
  "ecommerce": "eCommerce & CRM",
  "nocode": "No-code",
  "tools": "DevOps & Tools"
};

const projectsData = [
  {
    name: "eCommerce Platform with Automation Suite",
    type: "SaaS · eCommerce · Automation",
    desc: "Full Shopify eCommerce platform with custom Liquid theme, optimised checkout flows, and WhatsApp Business API automation — reducing cart abandonment by 30%.",
    thumb: "assets/projects/ecommerce.svg",
    tech: ["Shopify (Liquid)", "WhatsApp Business API", "Wati", "Zoho CRM", "Node.js"],
    link: "https://github.com/0xlightning"
  },
  {
    name: "Enterprise SaaS Dashboard Platform",
    type: "SaaS · Full Stack · Auth",
    desc: "Multi-tenant SaaS dashboard with Next.js SSR, Firebase Authentication, JWT, OAuth 2.0 (Google, GitHub), RBAC, and high-concurrency architecture optimised for SEO and scale.",
    thumb: "assets/projects/cyber.svg",
    tech: ["Next.js (SSR)", "Firebase Auth", "JWT", "RBAC", "MongoDB", "Tailwind CSS"],
    link: "https://github.com/0xlightning"
  },
  {
    name: "Internal AI Process Automation Platform",
    type: "AI · LLM Orchestration · Internal Tool",
    desc: "Unified internal platform consolidating multiple LLMs via a single API orchestration layer — enabling context-aware code generation, intelligent debugging, and automated docs. Boosted team productivity by 40%.",
    thumb: "assets/projects/hardware.svg",
    tech: ["Next.js", "TypeScript", "Node.js", "Zustand", "LLM API Orchestration", "Claude Code"],
    link: "https://github.com/0xlightning"
  }
];

const ctfData = [
  { name: "DAM CTF", year: "2020", url: "https://0xlightning.github.io/CTF-Players/2020/DAMCTF" },
  { name: "DARK CTF", year: "2020", url: "https://0xlightning.github.io/CTF-Players/2020/DARKCTF" },
  { name: "DownUnder CTF", year: "2020", url: "https://0xlightning.github.io/CTF-Players/2020/DownUnderCTF" },
  { name: "Syskron CTF", year: "2020", url: "https://0xlightning.github.io/CTF-Players/2020/Syskron%20Security%20CTF" }
];

// ==========================================
// 2. RENDERING LOGIC
// ==========================================

function renderTimeline() {
  const container = document.getElementById('timeline-container');
  if (!container) return;

  container.innerHTML = timelineData.map(entry => `
    <div class="timeline-entry">
        <div class="move-notation">${entry.notation}</div>
        <div class="timeline-card">
            <span class="period">${entry.period}</span>
            <h3>${entry.title}</h3>
            <p class="card-desc">${entry.description}</p>
            <div class="skills-unlocked">
                <label>Skills unlocked:</label>
                ${entry.skills.map(skill => `<span class="skill-badge">${skill}</span>`).join('')}
            </div>
        </div>
    </div>
  `).join('');
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  container.innerHTML = skillsData.map(skill => `
    <div class="skill-card" data-category="${skill.category}" data-tooltip="${skill.tooltip}">
        <div class="piece-symbol">${skill.symbol}</div>
        <p class="skill-name">${skill.name}</p>
        <span class="skill-cat">${categoryMap[skill.category] || skill.category}</span>
    </div>
  `).join('');
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  container.innerHTML = projectsData.map(project => `
    <div class="project-card">
        <div class="card-inner">
            <div class="card-front">
                <div class="project-image-container">
                    <img src="${project.thumb}" class="project-thumb" alt="${project.name}">
                    <div class="mini-board-overlay">
                        ${Array(16).fill('<div class="m-sq"></div>').join('')}
                    </div>
                </div>
                <h3 class="project-name">${project.name}</h3>
                <p class="project-type">${project.type}</p>
                <span class="flip-hint">tap to see more →</span>
            </div>
            <div class="card-back">
                <div class="check-badge">✓</div>
                <p class="project-desc">${project.desc}</p>
                <div class="tech-stack">
                    ${project.tech.map(t => `<span class="tech-badge">${t}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
            </div>
        </div>
    </div>
  `).join('');
}

function renderCTFs() {
  const container = document.getElementById('ctf-grid');
  if (!container) return;

  container.innerHTML = ctfData.map(ctf => `
    <a href="${ctf.url}" class="ctf-card" target="_blank" rel="noopener noreferrer">
        <div class="ctf-icon">🛡</div>
        <div class="ctf-info">
            <h4>${ctf.name}</h4>
            <span class="ctf-year">${ctf.year}</span>
        </div>
        <span class="ctf-link-text">View writeup →</span>
    </a>
  `).join('');
}

// ==========================================
// 3. APP INITIALIZATION
// ==========================================

function initApp() {
  // Render Dynamic Components First
  renderTimeline();
  renderSkills();
  renderProjects();
  renderCTFs();

  // Initialize Lenis Smooth Scroll
  const lenis = new Lenis();
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Page Loader
  const loader = document.getElementById('loader');
  if (loader) {
    const hideLoader = () => {
      setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => {
          loader.style.display = 'none';
        }, 500);
      }, 1200);
    };

    if (document.readyState === 'complete') {
      hideLoader();
    } else {
      window.addEventListener('load', hideLoader);
    }
  }

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

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      if (navLinks) navLinks.classList.remove('show');
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

  // Theme Toggle Logic
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.classList.add('dark');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('dark');

      // Save preference
      if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
      } else {
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // Timeline entries
    gsap.fromTo(".timeline-entry",
      { x: 60, opacity: 0, y: 20 },
      {
        x: 0, opacity: 1, y: 0,
        duration: 0.7,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#timeline",
          start: "top 70%"
        }
      }
    );

    // Skills Grid
    gsap.from(".skill-card", {
      y: 30,
      opacity: 0,
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

    // Strategy Section
    gsap.from(".gh-stat-badge", {
      scale: 0.8,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".gh-stats-container",
        start: "top 85%"
      }
    });

    gsap.from(".strategy-card", {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      scrollTrigger: {
        trigger: "#strategy",
        start: "top 80%"
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

    // Ambient Pieces Floating
    gsap.to(".ambient-piece", {
      y: "random(-40, 40)",
      x: "random(-20, 20)",
      rotation: "random(-15, 15)",
      duration: "random(4, 7)",
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
}

// Start application
initApp();
