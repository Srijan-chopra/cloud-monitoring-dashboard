# Cloud Monitoring Dashboard (Vercel)

Real checks, real status codes, real response times, real alerts.

## Deploy (free, no command line)
1. Create free accounts at github.com and vercel.com (sign in to Vercel with GitHub).
2. On GitHub: New repository > upload ALL files from this folder (keep the `api` folder).
3. On Vercel: Add New > Project > import that repository > Deploy. No settings needed.
4. Open your Vercel URL (like https://yourname.vercel.app).

## Use it
- Press "Healthy endpoint", "Missing page", "Server error", "Slow request", or "Start automatic monitoring".
- Press "Send 10 x 404" to trigger the alert.
- Logs tab: run queries. Advisor and Service Health tabs update by themselves.

## Real notifications (optional, free)
1. Discord: Server Settings > Integrations > Webhooks > New Webhook > Copy URL.
2. Vercel: Project > Settings > Environment Variables > add `WEBHOOK_URL` = that URL.
3. Redeploy (Deployments > ... > Redeploy). Alerts now arrive in Discord.

## Run on your PC instead
Install Node.js, then in this folder run `npx vercel dev` and open http://localhost:3000
