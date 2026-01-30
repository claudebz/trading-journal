--- 
name: twitter-x 
version: 1.0.0 
description: Post to Twitter/X without API keys. Cookie-based auth + Puppeteer headless browser automation. Use for trade announcements, alpha signals, or any Farcaster updates you want to cross-post to X.
homepage: https://github.com/claudebz/twitter-x-skill
metadata: 
  moltbot:
    emoji: "𝕏"
    category: "social"
---

# Twitter/X Skill (No API Keys)

Post to Twitter/X directly using **browser cookies + Puppeteer**, no API keys needed.

## How It Works

1. **Export cookies** from your logged-in X session
2. **Base64 encode** the JSON
3. **Store in `.env`** as `TWITTER_COOKIES`
4. **Puppeteer** loads x.com with those cookies and posts the tweet

## Setup (3 Steps)

### Step 1: Export Cookies from X

**Option A – Cookie-Editor (easiest)**
- Install [Cookie-Editor](https://chrome.google.com/webstore/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)
- Log into [x.com](https://x.com)
- Open Cookie-Editor → Export → JSON
- Copy the full JSON array (everything inside `[ ... ]`)

**Option B – DevTools Console**
- Log into x.com
- Open DevTools (F12) → Console
- Paste:
```javascript
copy(JSON.stringify(
  document.cookie.split(';').map(c => {
    const [name, value] = c.trim().split('=');
    return { name, value, domain: '.x.com', path: '/' };
  }).filter(c => c.name && c.value)
));
```
- Your cookies are now in the clipboard

### Step 2: Base64 Encode

You need the JSON as one base64 string.

**macOS/Linux:**
```bash
# If you saved to cookies.json:
base64 -i cookies.json

# Or inline:
echo '[{"name":"auth_token","value":"..."}]' | base64
```

**Node.js:**
```bash
node -e "console.log(Buffer.from(JSON.stringify([{name:'auth_token',value:'...'}])).toString('base64'))"
```

### Step 3: Store in `.env`

Create `.env` in the `twitter-x` skill folder:
```
TWITTER_COOKIES=<your_base64_string_here>
```

**Never commit this file.** It's already in `.gitignore`.

## Usage

### Command Line

```bash
./scripts/twitter-x.sh post "Your tweet text here"
```

### In Node/Script

```javascript
const { postTweet } = require('./lib/twitter-x');
await postTweet('Your tweet text');
```

### In Moltbot Job

```
message: "Post to X: 'Alpha signal: $MOLT trending on all sources 🚀'"
```

## What It Posts

The skill posts:
- **Trade entries:** "Entered $MOLT at X price, target Y"
- **Alpha signals:** "Agent consensus on $MOLT, real volume backing it"
- **Updates:** "Polymarket arb found: BUY NO at 0.145"
- **Anything** you want to share on X

## Important Notes

- **Cookies expire** — You'll need to re-export every few weeks/months
- **No official API** — This is browser automation; use a dedicated account if risk-averse
- **Headless** — Puppeteer runs in headless mode (no visible browser)
- **Non-blocking** — If posting fails, the job continues (logged error, not fatal)

## Troubleshooting

**"Invalid cookies" error**
- Cookies may have expired; re-export and update `.env`
- Check that JSON has `auth_token` and `ct0`

**"Timeout" error**
- X may be slow; try again in a few seconds
- Cookies might be invalid; re-export

**"Login page instead of composer"**
- Cookies not being set correctly; verify base64 decode works
- Try Option A (Cookie-Editor) instead of DevTools

## Tech Stack

| Tool | Purpose |
|------|---------|
| **Puppeteer** | Headless Chrome browser automation |
| **puppeteer-extra-plugin-stealth** | Reduce bot detection |
| **Base64 cookies** | Session auth without API keys |

## Security

- `.env` is gitignored (never committed)
- Cookies are base64-encoded (simple obfuscation, not encryption)
- For real security, consider a dedicated/private account
- If compromised, revoke cookies by changing X password

---

## Reference: Cookie Format

Each cookie object:
```json
{
  "name": "auth_token",
  "value": "abc123def...",
  "domain": ".x.com",
  "path": "/"
}
```

Required for posting: `auth_token`, `ct0` (CSRF token), and session cookies.
