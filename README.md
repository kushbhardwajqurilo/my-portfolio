# Kush Bhardwaj — Portfolio (Vite + React + Tailwind)

This repository is a production-ready React portfolio built with **Vite**, **React**, and **TailwindCSS**.
Designed with a dark neon theme, glassmorphism, parallax and smooth motion. Ready to deploy on **Vercel**.

## Features
- Vite + React, routing centralized in `src/app.jsx` (react-router).
- TailwindCSS with Inter / Space Grotesk fonts.
- Dark theme (default) with light/dark toggle persisted to `localStorage`.
- Glassmorphism cards, neon gradients, framer-motion animations.
- Contact form that posts to a configurable endpoint (`VITE_CONTACT_API_URL`).
- SEO basics (meta tags, OG placeholder), sitemap & robots.
- `vercel.json` ready for Vercel; set env vars in Vercel dashboard.

## Quick start
1. Install:
```bash
npm install
```
2. Dev server:
```bash
npm run dev
# open http://localhost:5173
```
3. Build:
```bash
npm run build
npm run preview
```

## Deploy on Vercel
- Connect this repo to Vercel.
- Build command: `npm run build`
- Output Directory: `dist`
- Add Environment Variables (Vercel Dashboard or `vercel env`):
  - `VITE_CONTACT_API_URL` — (optional) endpoint for contact form, e.g., a serverless function URL.
  - `VITE_SITE_URL` — your site URL (e.g., https://your-site.vercel.app)
  - `VITE_ANALYTICS_ID` — optional analytics key

## Notes
- Change the name, tagline, and profile image in `/public/images/profile.jpg` or `src/data/siteConfig.js`.
- Contact form example posts JSON `{ name, email, message }` to `VITE_CONTACT_API_URL`.
- To use serverless functions, create an API in Vercel (e.g. `/api/contact`) and set `VITE_CONTACT_API_URL` to that function's URL.

## Files included
- `vercel.json`, `package.json`, `tailwind.config.js`, `postcss.config.js`
- `src/` with components, pages, hooks
- `public/images/` with placeholders (profile.jpg, project images, og placeholder)
- `sitemap.xml`, `robots.txt`
- `.github/workflows/ci.yml` (sample CI)

Enjoy! — deploy and customize for Kush Bhardwaj.
