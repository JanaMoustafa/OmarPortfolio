# Omar Elhfnawy — Portfolio

Personal site for Omar Elhfnawy: cloud & DevOps, founder of Lokaly Egypt, and property consultant at August Real Estate.

Built with Next.js (App Router, static export-friendly), Tailwind CSS v4, GSAP + ScrollTrigger and Lenis smooth scrolling.

## Develop

```bash
npm install
npm run dev
```

## Editing content

All text (experience, case studies, skills, contact details) lives in `src/content.ts`.
Omar's portrait is `public/omar.jpg`.

## Motion

- Hero: letters scatter and assemble into the headline; the portrait opens like an aperture, traces its frame and tilts toward the pointer.
- Agencies pin and travel sideways on large screens, with an odometer for the revenue figure.
- About paragraph lights up word by word; the AI section sends pulses along live-measured connectors; the marquee reacts to scroll velocity.
- Scroll reveals and the journey timeline use GSAP and are disabled for `prefers-reduced-motion`.
