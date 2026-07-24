# iamagentkay

Terminal-style portfolio for **kaushal raj / agentkay**.
Next.js 15 · Tailwind · static export · deployed on Cloudflare Pages.

## Local dev

```bash
npm install
npm run dev
```

Open http://localhost:3000 and type `help` in the terminal.

## Edit content

All content lives in one file: [`app/data/profile.ts`](app/data/profile.ts).
Change your name, links, projects, and skills there — the terminal picks it up.

The resume lives in [`resume.md`](resume.md). Keep it in sync with `public/resume.md`
(the copy served at `/resume.md` on the deployed site).

## Deploy to Cloudflare Pages

**First time:**

```bash
npx wrangler login
npx wrangler pages project create iamagentkay --production-branch=main
```

**Every deploy:**

```bash
npm run deploy
```

That runs `next build` (which emits static files to `out/`) and pushes with
`wrangler pages deploy out --project-name=iamagentkay`.

## Commands available in the terminal

`help` · `about` · `whoami` · `projects` · `skills` · `now` · `contact` · `resume` · `social` · `clear`

Tab-completes command names. Up/down cycles history.
