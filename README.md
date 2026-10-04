# Shwet Anand - Portfolio (React + Vite)

## Setup
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # outputs dist/
    npm run preview

## Edit your content
Everything lives in `src/data/portfolioData.js`. Search for `TODO` and fill in:
GitHub, LinkedIn, email, project GitHub/demo links, internship dates.
Links left empty are shown disabled, so nothing is broken.

## Resume
Put your PDF at `public/resume.pdf` (or change `resumePath`).

## Deploy to Vercel
1. Push to GitHub.
2. vercel.com > Add New > Project > import the repo.
3. Framework: Vite (auto-detected). Build: `npm run build`. Output: `dist`.
4. Deploy. Or run `npx vercel` from this folder.
