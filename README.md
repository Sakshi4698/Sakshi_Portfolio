# Sakshi Portfolio

Sakshi Ladda's three-page portfolio website.

Run `npm install` once, then `npm start` for local development. After adding new
Tailwind utility classes, run `npm run build:css` to regenerate `utilities.css`.
Shared responsive styles live in `style.css`; gallery controls live in `site.js`.

Run `npm run build` to generate all three pages and their assets in `dist/`.
Run `npm run preview` to inspect that production build. Deploy the contents of
`dist/` to a static host; no route rewrites are required for the HTML pages.

See [AUDIT.md](AUDIT.md) for the responsive review, fixes, and verification limits.
