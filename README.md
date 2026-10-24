# iamagentkay

Kaushal Raj’s minimal developer portfolio, with an alternate terminal view at `/terminal`. Built with Next.js 15, React, TypeScript, and Tailwind CSS, with static export for Cloudflare Pages.

## Development

```bash
npm install
npm run dev
```

Open http://localhost:3000. Edit projects, skills, and contact details in `app/data/profile.ts`; the homepage lives in `app/page.tsx`, terminal commands live in `components/commands.tsx` and styling in `app/globals.css`.

## Build and deploy

```bash
npm run build
npm run deploy
```

The build exports to `out/`. Deployment targets the Cloudflare Pages project `iamagentkay` and requires an authenticated Wrangler session.

## Resume sources

`resume.md`, `public/resume.md`, and `resume.tex` are maintained separately from the portfolio.
