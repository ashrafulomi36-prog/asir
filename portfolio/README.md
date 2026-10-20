# Muhammad Asir Hossain Chowdhury — Portfolio

AI/ML-focused portfolio built with **Next.js 15 (App Router)**, **TypeScript** and **Tailwind CSS**. No animation or UI libraries; first-load JS is ~111 kB.

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run check        # lint + typecheck + production build
```

## Editing content

Everything — copy, projects, metrics, skills, learning modules, achievements — lives in **`src/data/site.ts`**. Components never need editing for content changes.

> Rule for projects: only put a number on the site if it can be reproduced from the repository.

### Résumé button
Drop your file at `public/resume.pdf`. The "Download résumé" link appears automatically at the next build and is hidden otherwise (so there is never a dead link).

### Teaching Demo (hidden until you have a video)
In `src/data/site.ts`, replace `export const teachingDemo = null` with an object (an example is in the comment above it). YouTube, Vimeo and direct `.mp4` URLs are supported. While it is `null`, the section **and** its nav link are not rendered.

## Contact form (Resend)

The form posts to `/api/contact`, a server-side route. The API key is never exposed to the browser.

1. Create a free account at <https://resend.com> and create an API key.
2. In Vercel → Project → Settings → Environment Variables add (Production + Preview):
   - `RESEND_API_KEY` — your key
   - `CONTACT_TO_EMAIL` — where messages go (`asirmuhammad76@gmail.com`; with Resend's test sender this must be the email you signed up with)
   - `CONTACT_FROM_EMAIL` — optional; defaults to `Portfolio Contact <onboarding@resend.dev>`. Verify your own domain in Resend to change it.
3. Redeploy, then **send yourself a real test message** from the live site.

Without these variables the form shows a friendly error with your email address as the fallback.
Protections: input validation, honeypot field, same-origin check, small per-IP rate limit, HTML escaping and header-injection stripping.

## Deploy

### GitHub
```bash
git init && git add . && git commit -m "Portfolio v2"
git branch -M main
git remote add origin https://github.com/MuhammadAsir/<repo-name>.git
git push -u origin main
```

### Vercel
Import the GitHub repo at <https://vercel.com/new>. The Next.js preset needs no configuration. Add the environment variables above, then deploy. To keep the `asirhossain.vercel.app` address, attach it to this project (Settings → Domains) after removing it from the old project.

## Project structure

```
src/
  app/            layout, page, API route, sitemap, robots, OG image, favicon
  components/     one file per section (+ ProjectCard, ModuleBrowser, ContactForm)
  data/site.ts    all content
public/projects/  result charts taken from the project repositories
```
