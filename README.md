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
The downloadable CV is `public/Omar_Elhfnawy_CV.pdf`.

## Motion

- Hero load sequence and signature stroke are pure CSS, so they never wait on hydration.
- Scroll reveals and the journey timeline use GSAP and are disabled for `prefers-reduced-motion`.
