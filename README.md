# Muhammad Asir Hossain Chowdhury: Portfolio

A content-driven portfolio built with Next.js (App Router), TypeScript, Tailwind CSS and Framer Motion.
Live site: https://asirhossain.vercel.app

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npx tsc --noEmit
npm run build
```

## Contact form setup (required once)

The form posts to `app/api/contact/route.ts`, which sends email through [Resend](https://resend.com).
The API key stays on the server and is never sent to the browser.

1. Create a free Resend account and an API key.
2. In Vercel: Project, Settings, Environment Variables, add:
   - `RESEND_API_KEY`: your key
   - `CONTACT_TO_EMAIL`: where messages go. With the default `onboarding@resend.dev` sender this must be the
     same email you registered Resend with.
   - `CONTACT_FROM_EMAIL` (optional): a sender on a domain you have verified in Resend.
3. Redeploy, then send yourself a test message from the live site.

Until these variables are set, the form shows an error that points visitors to your email address.
For local testing copy `.env.example` to `.env.local`.

The route validates input, ignores a hidden honeypot field and applies a best-effort rate limit (5 messages per
10 minutes per IP on each server instance).

## Where to edit content (`/content`)

| Change | File |
| --- | --- |
| Name, headline, supporting text, About | `personal.ts` |
| Projects (featured case studies and other projects) | `projects.ts` |
| Learning Resources (repositories, modules) | `learning.ts` |
| Teaching Demo video | `teachingDemo.ts` |
| Skills (six categories) | `skills.ts` |
| Experience / Education | `experience.ts`, `education.ts` |
| Achievements, certifications, extracurricular | `achievements.ts`, `certifications.ts`, `leadership.ts` |
| Competitive programming | `competitiveProgramming.ts` |
| Social links, contact copy, navigation | `social.ts`, `contact.ts`, `navigation.ts` |
| Title, description, keywords, social preview text | `site.ts` |

### Add a project
Add an object to `projects.ts`. Set `featured: true` for a detailed case-study card (problem, methods,
what you implemented, results, images). Leave it out for a compact card. Only add `results` you have measured,
and only add `live` when the demo exists. Put images in `public/projects/` (WebP, under ~100 KB).

### Add a teaching demo video
Fill in `videoUrl` in `teachingDemo.ts` (a YouTube link, or a file such as `/videos/demo.mp4` placed in
`public/videos/`). The section and its navigation link stay hidden while `videoUrl` is empty.

### Add learning material
Add a module to a group in `learning.ts`. `folder` must match the folder name in the repository exactly.

### Resume
Replace `public/resume.pdf`.

### Theme
Edit the colour variables at the top of `app/globals.css`.
