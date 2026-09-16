---
name: "Add Vercel production configuration"
about: "Automatically generated PR to add vercel.json with production build settings for Vercel.\n\nNotes:\n- This adds Next.js-oriented build settings and safe default environment variables.\n- Do NOT store secrets here; add them in Vercel dashboard.\n"
labels: ["chore"]
---

This Pull Request adds a vercel.json file to the repository to help Vercel correctly detect and run production builds.

File added:
- vercel.json

vercel.json contents (summary):
- buildCommand: next build
- installCommand: npm ci
- framework: nextjs
- nodeVersion: 20.x
- env: NEXT_PUBLIC_API_URL (default) and NODE_ENV=production (default)

Why:
- The Vercel dashboard reported "Add: Production environment configuration for Vercel deployment" and "No Production Deployment". Adding this configuration helps ensure Vercel knows how to build and deploy the production app.

Next steps for maintainers:
- Review and adjust build/output settings if this is not a Next.js app.
- Add real secrets and API keys in the Vercel dashboard (Project Settings → Environment Variables) and mark them for Production.
- Merge the PR to trigger a production deployment from the default branch.
