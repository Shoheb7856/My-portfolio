# MD Shoheb — Animated Portfolio

An interactive, 3D animated developer portfolio built with React, Vite, Tailwind CSS,
Framer Motion, Three.js (react-three-fiber) and post-processing bloom.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Deploy (free hosting for recruiters)

### Option A — Vercel (recommended)
1. Push this project to GitHub (see below).
2. Go to https://vercel.com and sign in with GitHub.
3. Click **Add New → Project**, import this repo.
4. Vercel auto-detects Vite. Click **Deploy**.
5. You get a live link like `https://shoheb.vercel.app` — share that with recruiters.

### Option B — Netlify
1. Push to GitHub.
2. Go to https://app.netlify.com → **Add new site → Import an existing project**.
3. Pick the repo. Build settings are read from `netlify.toml`. Click **Deploy**.

### Option C — Cloudflare Pages
1. Push to GitHub.
2. https://pages.cloudflare.com → **Create a project** → connect the repo.
3. Build command: `npm run build`, output dir: `dist`. Deploy.

Every `git push` after that automatically redeploys the live site.

## Push to GitHub

```bash
git add .
git commit -m "Portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```
