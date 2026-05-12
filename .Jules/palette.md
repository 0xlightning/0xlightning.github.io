## 2025-05-14 - [Markdown Badge URL Encoding]
**Learning:** Shields.io badges with parentheses in labels (e.g., "Wati (WhatsApp)") can break Markdown link parsing if not URL-encoded.
**Action:** Use `%28` and `%29` for parentheses in Markdown image URLs.

## 2025-05-14 - [Jekyll to Static Site Transition]
**Learning:** Transitioning a GitHub Profile from Jekyll to a custom `index.html` requires deleting `_config.yml` to prevent Jekyll from processing the site, allowing Tailwind CDN and custom CSS to render correctly.
**Action:** Always verify site rendering with a screenshot after removing Jekyll configurations.
