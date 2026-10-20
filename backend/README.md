# Activity sync backend

A small Cloudflare Worker that keeps the portfolio's public activity cards fresh. It collects public data from GitHub, LeetCode, Chess.com, Dev.to, Medium RSS, npm, and, when configured, a Substack publication RSS feed. The supplied Substack author profile, LinkedIn, and X remain direct links because they do not provide suitable unauthenticated feeds for this use.

The Worker is request-driven (so there is no sleeping server) and also refreshes its edge cache every six hours with a Cron Trigger.

## Deploy

1. Install and authenticate:

   ```bash
   npm install
   npx wrangler login
   ```

2. In `wrangler.jsonc`, replace `ALLOWED_ORIGIN` with the production Vercel origin, for example `https://your-site.vercel.app`.

3. If a Substack publication exists, add its RSS URL under `vars`:

   ```jsonc
   "SUBSTACK_FEED_URL": "https://your-publication.substack.com/feed"
   ```

4. Deploy:

   ```bash
   npm run deploy
   ```

5. Add the returned Worker origin to the Vercel project as `VITE_ACTIVITY_API_URL`, then redeploy the frontend.

## Local development

```bash
npm run dev
```

The API is available at `http://localhost:8787/activity`; the health check is at `/health`. To connect the Vite app locally, copy the root `.env.example` to `.env.local`.
