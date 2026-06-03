export const timelineData = [
  {
    notation: "O-O",
    period: "Feb 2024 – Present",
    title: "Full Stack Developer — Active Theory, Coimbatore",
    description: "Designed and developed full-stack web applications across SaaS, eCommerce, and IoT domains. Architected multi-tenant SaaS platforms with Next.js SSR, Firebase Auth, MongoDB, and RBAC optimized for SEO performance and scalability. Developed custom Shopify themes and built Node.js middleware for real-time Shopify–Zoho CRM synchronization. Implemented WhatsApp Business API, reducing cart abandonment by 30%. Built real-time IoT dashboards and integrated AI development tools into engineering workflows, reducing build time by 40–75%.",
    skills: ["React.js", "Next.js", "Node.js", "MongoDB", "Shopify Liquid", "IoT", "AI Integration"]
  }
];

export const skillsData = [
  // Frontend
  { symbol: "♛", name: "React.js", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "Next.js", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "TypeScript", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "JavaScript (ES6+)", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "Redux", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "Zustand", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "Tailwind CSS", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "HTML5 / CSS3", category: "frontend", tooltip: "" },
  { symbol: "♛", name: "SSR / SSG / PWA", category: "frontend", tooltip: "" },

  // Backend & APIs
  { symbol: "♜", name: "Node.js", category: "backend", tooltip: "" },
  { symbol: "♜", name: "Express.js", category: "backend", tooltip: "" },
  { symbol: "♜", name: "REST API Dev", category: "backend", tooltip: "" },
  { symbol: "♜", name: "WebSocket", category: "backend", tooltip: "" },
  { symbol: "♜", name: "Microservices", category: "backend", tooltip: "" },
  { symbol: "♜", name: "Webhook Arch", category: "backend", tooltip: "" },

  // Databases & Cloud
  { symbol: "♞", name: "MongoDB", category: "database", tooltip: "" },
  { symbol: "♞", name: "PostgreSQL", category: "database", tooltip: "" },
  { symbol: "♞", name: "Firebase", category: "database", tooltip: "" },
  { symbol: "♞", name: "Prisma", category: "database", tooltip: "" },
  { symbol: "♞", name: "MySQL", category: "database", tooltip: "" },

  // Auth & Security
  { symbol: "♝", name: "JWT", category: "security", tooltip: "" },
  { symbol: "♝", name: "OAuth 2.0", category: "security", tooltip: "" },
  { symbol: "♝", name: "RBAC", category: "security", tooltip: "" },
  { symbol: "♝", name: "Auth & Authz", category: "security", tooltip: "" },

  // System Design & DevOps
  { symbol: "♟", name: "System Design", category: "devops", tooltip: "" },
  { symbol: "♟", name: "Scalable Arch", category: "devops", tooltip: "" },
  { symbol: "♟", name: "Docker", category: "devops", tooltip: "" },
  { symbol: "♟", name: "CI/CD", category: "devops", tooltip: "" },
  { symbol: "♟", name: "Git / GitHub", category: "devops", tooltip: "" },
  { symbol: "♟", name: "Playwright", category: "devops", tooltip: "" },
  { symbol: "♟", name: "Agile/Scrum", category: "devops", tooltip: "" },

  // eCommerce & AI
  { symbol: "★", name: "Shopify (Liquid)", category: "ecommerce", tooltip: "" },
  { symbol: "★", name: "Zoho CRM API", category: "ecommerce", tooltip: "" },
  { symbol: "★", name: "WhatsApp API", category: "ecommerce", tooltip: "" },
  { symbol: "★", name: "LLM Integration", category: "ai", tooltip: "" },
  { symbol: "★", name: "Prompt Engineering", category: "ai", tooltip: "" },
  { symbol: "★", name: "Multi-Agent Systems", category: "ai", tooltip: "" }
];

export const categoryMap: Record<string, string> = {
  "frontend": "Frontend",
  "backend": "Backend & APIs",
  "database": "Databases & Cloud",
  "security": "Auth & Security",
  "devops": "System Design & DevOps",
  "ecommerce": "eCommerce & CRM",
  "ai": "AI & LLM"
};

export const projectsData = [
  {
    name: "eCommerce Platform with Automation Suite",
    type: "eCommerce · Automation",
    desc: "Built a full eCommerce platform with custom Shopify theme development, optimized checkout flows, and dynamic product filtering. Implemented WhatsApp Business API for abandoned cart recovery, order notifications, and customer support — reducing cart abandonment by 30%.",
    thumb: "/assets/projects/ecommerce.svg",
    tech: ["Shopify (Liquid)", "WhatsApp Business API (Wati)"],
    link: "https://github.com/0xlightning"
  },
  {
    name: "Enterprise SaaS Dashboard Platform",
    type: "SaaS · Full Stack",
    desc: "Designed and built a multi-tenant SaaS dashboard with server-side rendering, role-based access control, and high-concurrency architecture. Implemented enterprise-grade authentication including JWT, OAuth 2.0 (Google, GitHub), and encrypted data transmission.",
    thumb: "/assets/projects/cyber.svg",
    tech: ["Next.js (SSR)", "Firebase Authentication", "JWT", "RBAC", "Tailwind CSS"],
    link: "https://github.com/0xlightning"
  },
  {
    name: "Internal AI Process Automation Platform",
    type: "AI · Internal Tool",
    desc: "Architected a unified internal platform consolidating multiple LLMs via a single API orchestration layer. Enabled context-aware code generation, intelligent debugging, and automated documentation, improving team productivity by 40%.",
    thumb: "/assets/projects/hardware.svg",
    tech: ["Next.js", "TypeScript", "Node.js", "Zustand", "Tailwind CSS", "LLM API Orchestration", "Claude Code", "REST APIs"],
    link: "https://github.com/0xlightning"
  }
];

export const ctfData = [];
