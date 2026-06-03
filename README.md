# Premium Chess-Themed Portfolio (0xlightning)

Welcome to the official repository for **0xlightning.github.io**, a premium personal portfolio website. This project is built around the theme of chess strategy: every move is intentional, every line of code serves a purpose, and architecture is thought three steps ahead.

---

## ⚡ Developer Profile

- **Name:** K S Praveen (alias: `0xlightning`)
- **Location:** Coimbatore, India
- **Identity:** Full-Stack SaaS Developer, Hardware+Web Builder, AI-First Dev, eCommerce & Automation Architect.
- **Tagline:** *"Chasing the top spot — one build at a time. ⚡"*
- **Socials:** [GitHub](https://github.com/0xlightning) | [LinkedIn](https://linkedin.com/in/kspraveen20/) | [Twitter/X](https://twitter.com/0xlightning) | [Telegram](https://t.me/0xlightning) | [Instagram](https://www.instagram.com/lightningxzer0/)

### Technical Stack
- **Frontend:** HTML5, CSS3 (Vanilla), JavaScript (ES6+), GSAP (3.12.5), Lenis (Smooth Scroll), Lucide Icons
- **Backend:** Node.js, Firebase, MongoDB, Python
- **Hardware:** Arduino, ESP32, C++ embedded firmware, MQTT
- **AI Tools:** Claude Code, Ollama, Replit AI, Lovable AI
- **eCommerce:** Shopify, Zoho CRM, Wati (WhatsApp automation)
- **No-code:** Webflow, Framer

---

## 🎨 Design System & Theme Guidelines

The portfolio adopts a **Premium Light Scandinavian Chess** aesthetic, representing a clean, professional, and strategic creative developer experience.

### Color Palette
- **Bg Main (Dark Theme):** `#0d1117` (Main dark background)
- **Bg Card/Section (Dark Theme):** `#161b22`
- **Bg Hover/Input (Dark Theme):** `#21262d`
- **Primary Accent:** `#00D9FF` (Cyan brand color)
- **Secondary Accent:** `#26A69A` (Teal)
- **Chess Light Square:** `#f0d9b5`
- **Chess Dark Square:** `#b58863`
- **Primary Text:** `#e6edf3`
- **Muted Text:** `#8b949e`
- *Note: The site supports light and dark modes with off-white, light-gray layers, soft shadows, and clean black typography in the light mode.*

### Typography Hierarchy
- **Main Font:** `Inter` (Sans-serif)
- **Accent/Code Font:** `Fira Code` (Monospace)
- **Hero Heading Style:**
  ```css
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 700;
  line-height: 0.95;
  letter-spacing: -0.04em;
  ```
- **Body Style:**
  ```css
  font-size: 16px;
  line-height: 1.8;
  ```

### Chess UI Integration Rules
- **Vibe:** Strategic, artistic, elegant, and minimal. (Not cartoonish or over-decorated gaming-heavy UI).
- **Floating Pieces:** Low-opacity SVG chess pieces (`King`, `Queen`, `Knight`, `Bishop`) drifting in the background with opacity `0.03` to `0.08`, utilizing mouse parallax, slight rotation, and blur effects.
- **Section Accents:** Use pawns minimally. Use the King, Queen, Knight, and Bishop strategically across sections.

---

## 📂 Section Layouts & Animations

### 1. Navigation Bar
- **Structure:** Left logo/initials (`♟ 0xlightning`), center links, right theme switcher + mobile hamburger menu.
- **Style:** Floating rounded bar with glassmorphism blur and thin borders. Sticky scroll behavior.

### 2. Hero Section
- **Concept:** Strong typography reveal with a premium king composition and floating ambient pieces.
- **Intro text:** *"Building elegant digital experiences with modern web technologies."*

### 3. About Section
- **Concept:** Minimal two-column layout. Left has a profile frame decoration (Chess Pawn + decorations), right contains the bio, stats (2024+ Years Pro, 50+ Builds Shipped), and chess strategy metaphors.

### 4. Strategy & Activity
- **Concept:** Displays real-time GitHub streak and contribution graphs combined with strategy cards (Shipping SaaS, AI Workflows, eCommerce, Hardware, etc.).

### 5. Timeline ("The Game So Far")
- **Concept:** Chess notation move-by-move mapping (e.g., `e4`, `d4`, `Nf3`, `O-O`) connected via a scroll progress line to key experience periods. Displays skills unlocked per period.

### 6. Skills Section ("Pieces on the Board")
- **Concept:** Dynamic skill cards showing chess symbols as competency indicators (♛ Queen, ♜ Rook, ♝ Bishop, ♞ Knight, ♟ Pawn) with interactive filter controls (Frontend, Backend, Hardware, AI & Tools, etc.) and category indicators.

### 7. Projects Section ("Tactical Plays")
- **Concept:** 3D card-flip interaction. Clicking flips the card from a visual thumbnail with a chess-board overlay to show technical details, a verification checkmark badge, and the GitHub links.

### 8. CTF writeups & Hardware Architecture
- **Concept:** Features a custom ASCII system architecture mapping ESP32/Arduino sensors up to MERN/Next.js/Shopify dashboards. Integrates cybersecurity writeups for competitions (DAM CTF, DARK CTF, DownUnder CTF, Syskron CTF).

### 9. Contact & Footer
- **Concept:** Shows a "1-0" match result badge, Holopin badges, direct contact links (GitHub, LinkedIn, Twitter, Telegram, Instagram), and a custom footer stating *"Designed & developed with precision."*

---

## 📈 Roadmap & Evolution

### Phase 1: Strategic Planning & Setup
- [x] Create documentation and audit assets/broken SVGs.
- [x] Set up local development environment (build-free setup).

### Phase 2: Core Refactoring
- [x] Update CSS styles with variables.
- [x] Implement floating glassmorphism nav, mobile responsiveness, and typography hierarchy.

### Phase 3: Visual Identity & Animation
- [x] Integrate high-quality chess SVGs.
- [x] Add slow-floating background animations, project card flipping, and skills grid.

### Phase 4: Polish & Performance
- [x] Add noise texture overlay for editorial finish.
- [x] Refine section transitions and implement Lenis smooth scroll.
- [x] Optimize SVG assets and clean up footer branding.

### Phase 5: Code Quality & Reusability (Current)
- [x] Refactor repeating UI blocks (skills, projects, timeline, CTFs) into a dynamic JSON-based rendering system in `script.js`.
- [x] Consolidate multiple disconnected documentation files to avoid duplication.

---

## 🔗 Resources & References

- **SVGs:** [SVGRepo Chess Collection](https://www.svgrepo.com/collection/chess-pieces-vectors/) | [Lucide Icons](https://lucide.dev/icons/)
- **Inspirations:** [Brittany Chiang](https://brittanychiang.com/) | [Rauno Freiberg](https://rauno.me/) | [Lee Robinson](https://leerob.com/)
- **Effects:** Radial gradients, noise overlays, floating pieces, mouse parallax. Avoid heavy 3D files or distracting particle clouds.
