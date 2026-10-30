# Rashi Chugh — Portfolio Website

A responsive, colourful editorial portfolio website with animated gradient backgrounds and refreshed feminine visual styling for Rashi Chugh, Graphic Designer, Video Editor and Motion Graphic Designer.

## CV content included
- Profile summary covering graphic design, video editing, motion graphics, social media creatives, promotional materials, Adobe Creative Suite, Canva and AI-assisted workflows.
- Graphic Design Intern experience at Spectre Rex (July 2026–Present), including all five responsibility points described in the CV.
- Freelance Graphic Designer & Video Editor experience (2025–Present), including custom logos, magazine cover design, branding and colour theory, client communication and gaming video editing.
- Skills from the CV: Graphic Design, Branding and Visual Identity, Content Design, Motion Graphics, Video Editing, Canva, AI Design Tools, Typography and Layout, plus social media creatives and promotional materials from the profile summary.
- Creative tools shown in the CV: Adobe Photoshop, Adobe Illustrator, Adobe Premiere Pro, Adobe After Effects, Adobe Audition and Canva. AI design tools remain in the skills/workflow list because the CV does not name a specific AI software product.
- Education: B.Voc at Jagannath University & Arena Animation (2025–Present), CBSE Class XII (2024–2025) and Class X (2022–2023).
- Languages: English and Hindi.

## Included
- Actual portrait extracted from the supplied CV.
- CV download link.
- Light and dark themes with local preference persistence and OS preference detection.
- Responsive navigation and touch-friendly layouts.
- Lightweight IntersectionObserver scroll reveals, CSS-only dimensional accents and GPU-friendly decorative motion. Heavy GSAP, Motion and Three.js runtime dependencies have been removed for faster loading.
- Filterable project cards with detail modals.
- Expanded experience timeline with complete CV-backed responsibility details.
- Separate, clearly labelled Skills & Tools navigation and Education anchor.
- Email, phone and Behance links.
- Project image placeholders clearly marked for replacement with original work.

## Run locally

Requires Node.js compatible with the installed Vite release.

```bash
npm install
npm run dev
```

The dev server is configured to expose the site on your local network. Connect your phone and computer to the same Wi-Fi, then open the `Network` URL printed by Vite.

Open the local URL printed by Vite.

## Production build

```bash
npm run build
npm run preview
```

## Before publishing

1. Replace each clearly labelled project-art placeholder with Rashi's approved original project files. The CV describes the projects but does not include their artwork.
2. Confirm the public display of the phone number and email address.
3. Review the CV PDF download for public sharing.
4. Add any approved LinkedIn, Instagram, or other social links if desired.
5. Update the page metadata and domain details when deploying.

## Main content locations

- `src/App.tsx` — page sections, content, theme logic, project list, interactions.
- `src/styles.css` — visual system, responsive layouts, light/dark theme tokens.
- `public/assets/rashi-chugh-portrait.jpg` — portrait sourced from page 1 of the supplied CV.
- `public/assets/rashi-chugh-cv.pdf` — supplied CV.

## Dependency versions

The project pins stable package versions checked on 30 October 2026, including React 19.3.1, Vite 8.3.4 and Tailwind CSS 4.3.3. Scroll reveals use the browser IntersectionObserver API; decorative accents are CSS-rendered to keep the page lightweight. Recheck package compatibility before upgrading them together.

## Quick visual preview

Open `preview.html` directly in a browser for a lightweight static preview without installing Node dependencies. For the full React application with lightweight native scroll reveals and CSS-rendered visual accents, use the Vite steps above.

The contact form prepares an email draft in the visitor's default mail application. It does not silently send data or store messages; configure a form service/backend if server-side submissions are required.

## Deploy

- Use Node.js 22.12 or newer, then run `npm ci` and `npm run build`.
- Publish the generated `dist/` directory as the static site root. Vite copies the favicon, robots file, portrait and CV into the production output.
- This site uses in-page anchors and does not need a server rewrite rule. If client-side routes are added later, configure the host to serve `index.html` for those routes.
- The default Vite base path assumes the site is deployed at a domain root. Set Vite's `base` option before deploying under a subdirectory.
