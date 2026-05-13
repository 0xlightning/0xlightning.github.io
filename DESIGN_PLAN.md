# Website Improvement Plan

## 1. Content & Architecture (Implemented)
- **Consolidation:** Merged hardware-focused refinements from the `palette-ux-ctf-integration` branch.
- **Tech Stack Expansion:** Categorized skills into Frontend, Backend, Hardware, AI, eCommerce, and No-Code for better readability.
- **Hardware Integration:** Added a visual ASCII architecture diagram to explain the physical-to-web flow.
- **CTF Integration:** Fixed links to point to the live hosted writeups instead of repository files.

## 2. Design & UX (Implemented)
- **Animation Engine:** Integrated `motion.dev` (Motion library) for high-performance animations.
- **Entrance Animations:** Staggered reveal for the hero section and social links.
- **Scroll-Triggered Reveals:** Used `inView` to animate sections as they enter the viewport.
- **Micro-Interactions:** Added scale and glow effects on card hovers.
- **Accessibility:** Ensured all icons have ARIA labels and external links use `rel="noopener noreferrer"`.

## 3. Future Roadmap (Proposed)
- **Dark/Light Mode:** Implement a theme switcher using Tailwind's `dark:` classes.
- **Project Filtering:** Add a JS-based filter for the tech stack to highlight specific projects.
- **Blog Integration:** Pull latest CTF writeup titles via GitHub API or RSS.
- **Interactive Hardware Demo:** Use a Three.js component to show a 3D model of an ESP32.
