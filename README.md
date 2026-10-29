# Indusha & Anjana Wedding Invitation

Next.js invitation converted to Tailwind CSS 4. The existing content, assets,
responsive breakpoints, animations, and interactions are preserved.

## Run locally

```bash
npm ci
npm run dev
```

Open http://localhost:3000.

```bash
npm run build
npm start
npm run lint
```

## Styling

Component styling lives in Tailwind classes in `src/components` and `src/app`.
Exact values and custom screen ranges use Tailwind arbitrary values and variants
to match the original CSS. Semantic classes such as `hero`, `event-card`,
`opening`, and `visible` remain as hooks for contextual and state variants;
they do not depend on the old stylesheet. Gallery layout classes are listed
statically so Tailwind detects every image position.

`src/app/globals.css` contains Tailwind imports, shared foundations, theme
variables, animation keyframes, and reduced-motion rules. Falling leaves retain
inline styles for values supplied by their data array.

## Existing behavior

The RSVP form displays a browser confirmation; it is not connected to a server.
The music button changes its visual state; the original project has no audio
player or music file wired to it. Google Fonts and the story image require
internet access, as in the original project.

## Validation

Production build (`npm run build -- --webpack`) and TypeScript checks passed.
Lint completed with no errors and three existing Next.js image warnings.
Compared layout and typography with the original at 390, 480, 520, 600, 650,
760, 768, 800, 900, 1000, 1024, and 1440 pixels. Checked entrance opening,
mobile navigation, RSVP selection, guest counter, and reduced motion.
