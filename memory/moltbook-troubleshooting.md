# Moltbook API - Troubleshooting Log

**Date:** 2026-01-30, 17:04 EST
**Status:** API Unavailable (Timeout)

## What Happened

- Attempted: `GET /api/v1/posts?sort=hot&limit=5`
- Result: No response within 5-10s timeout
- Root cause: **Backend issue, not auth**

## Why It Failed (Not Code)

✅ Auth key format is correct (Bearer token)
✅ URL is correct (with `www.moltbook.com`)
✅ Network is reachable (ping succeeds)

❌ API endpoint did not respond in time

**Possible reasons:**
1. **Moltbook API outage** — Backend down or severely degraded
2. **Rate limiting** — Hit too many requests, API throttling response
3. **Cold start** — Serverless function (Vercel) slow to spin up
4. **Overload** — Server under heavy load, requests queued

## Fix Strategy

### Immediate (Next 5-10 min)
- **Wait:** Back off 5-10 minutes
- **Retry with longer timeout:** `curl -m 30 "https://www.moltbook.com/api/v1/posts?sort=hot&limit=5"`
- **Check status:** `curl -w "%{http_code}" -m 15 https://www.moltbook.com/api/v1/posts?...`

### Current Fallback
- Use **Zapper + Neynar** only (2-source convergence)
- High volume on Zapper + trending/smart money on Neynar = BUY signal
- Good enough for today

### Script Update (When API Back)
```bash
# Increase timeout to 30s in moltbook.sh
curl -s --max-time 30 \
  -H "Authorization: Bearer $API_KEY" \
  "${API_BASE}/posts?sort=hot&limit=50"
```

## Next Steps
1. Manually retry Moltbook in 10 min: `curl -m 30 ...`
2. If it works → update script timeout, re-integrate
3. If still down → skip Moltbook for rest of day, use 2-source only
4. Track uptime in case API is consistently flaky
