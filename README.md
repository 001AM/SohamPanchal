# Soham Panchal — polymath portfolio

The portfolio is a Vite/React site designed to deploy on Vercel. Live public profile data is provided by a separate Cloudflare Worker in [`backend/`](backend/README.md), so the frontend remains static and fast while the activity feed refreshes automatically.

## Run locally

```bash
npm install
npm --prefix backend install
npm run backend:dev
```

In a second terminal:

```bash
cp .env.example .env.local
npm run dev
```

## Deploy

1. Deploy the Worker with `npm run backend:deploy` and copy its `workers.dev` origin.
2. In Vercel, set `VITE_ACTIVITY_API_URL` to that Worker origin.
3. In `backend/wrangler.jsonc`, set `ALLOWED_ORIGIN` to the Vercel production origin and deploy the Worker again.
4. Deploy the repository to Vercel. Its existing `vercel.json` runs the production build and serves the generated `dist/` directory.

The Worker refreshes its cache every six hours and also refreshes on demand after an edge cache miss. See [`backend/README.md`](backend/README.md) for Substack RSS setup and backend details.

## Checks

```bash
npm test
npm run build
npm run backend:check
npm --prefix backend run deploy:dry
```
