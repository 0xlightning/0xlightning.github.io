## 2025-05-14 - [Markdown Badge URL Encoding]
**Learning:** Shields.io badges with parentheses in labels (e.g., "Wati (WhatsApp)") can break Markdown link parsing if not URL-encoded.
**Action:** Use `%28` and `%29` for parentheses in Markdown image URLs.

## 2025-05-14 - [Jekyll to Static Site Transition]
**Learning:** Transitioning a GitHub Profile from Jekyll to a custom `index.html` requires deleting `_config.yml` to prevent Jekyll from processing the site, allowing Tailwind CDN and custom CSS to render correctly.
**Action:** Always verify site rendering with a screenshot after removing Jekyll configurations.

## 2025-05-15 - [Accessibility & Security Best Practices]
**Learning:** ARIA labels on social links and `rel="noopener noreferrer"` on external links are essential for a professional and secure portfolio.
**Action:** Ensure all `target="_blank"` links have proper security attributes and all icon-only links have ARIA labels.

## 2025-05-15 - [Motion.dev Animation Integration]
**Learning:** Using the Motion library (v11) via CDN allows for complex staggered and scroll-triggered animations in a build-less static site. Staggering ensures a smoother "reveal" for grids and lists.
**Action:** Use `inView` for scroll reveals and `stagger` for grid items to enhance perceived performance and UX.

## 2025-05-15 - [Repository Hygiene]
**Learning:** Installing local testing tools (like Playwright via pnpm) generates large `node_modules` and lockfiles. These must be excluded from the final PR to keep the profile site lightweight and git-clean.
**Action:** Always maintain a `.gitignore` and ensure temporary scripts or dependency folders are removed before submission.
