# Twitter/X Skill - Post Without API Keys

Post to Twitter/X using **Puppeteer + stored cookies**, no API keys required.

## Quick Start

### 1. Install Dependencies

```bash
cd skills/twitter-x
npm install
```

### 2. Export and Store Cookies

**Option A – Cookie-Editor (Chrome)**
1. Install [Cookie-Editor](https://chrome.google.com/webstore/detail/cookie-editor/hlkenndednhfkekhgcdicdfddnkalmdm)
2. Log into [x.com](https://x.com)
3. Open Cookie-Editor → Export → JSON
4. Copy the JSON array `[{...}, {...}]`

**Option B – DevTools Console**
1. Log into [x.com](https://x.com)
2. Open DevTools (F12) → Console
3. Paste:
```javascript
copy(JSON.stringify(
  document.cookie.split(';').map(c => {
    const [name, value] = c.trim().split('=');
    return { name, value, domain: '.x.com', path: '/' };
  }).filter(c => c.name && c.value)
));
```

### 3. Base64 Encode

```bash
# macOS/Linux:
echo '[{"name":"auth_token","value":"..."}...]' | base64

# Or use any online base64 tool
```

### 4. Create `.env`

```bash
echo 'TWITTER_COOKIES=<your_base64_string_here>' > .env
```

### 5. Test

```bash
./scripts/twitter-x.sh post "Test tweet from twitter-x skill 🚀"
```

## Usage

### Command Line

```bash
./scripts/twitter-x.sh post "Your tweet here"
```

### In Moltbot Job

```
message: "Post to X: 'Alpha signal: $MOLT trending on all sources 🚀'"
```

## How It Works

1. **Decode** base64 cookies → JSON
2. **Launch Puppeteer** (headless Chrome)
3. **Set cookies** (session auth)
4. **Navigate to x.com/compose**
5. **Type tweet** into textarea
6. **Click Post** button
7. **Success** — tweet is posted

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "Invalid cookies" | Re-export from Cookie-Editor, re-base64 |
| "Login page" | Cookies expired; update `.env` |
| "Timeout" | X may be slow; try again |
| "Post button disabled" | Tweet text may be invalid (too short, blocked) |

## Requirements

- **Node.js** 14+
- **npm** (for `puppeteer`, `puppeteer-extra`, `puppeteer-extra-plugin-stealth`)
- **Headless environment** (for Puppeteer in cloud; tested on Railway)

## Security Notes

- `.env` is gitignored (never committed)
- Cookies are base64-encoded (not encrypted—obfuscation only)
- For production, use a dedicated/throwaway account
- Cookies expire; you'll need to refresh them every few weeks

## Integration with Cron

The main 15-min alpha scan cron job can now post to both **Farcaster** and **X**:

```
Cast to X and Farcaster the findings: tickers, volume, arb opportunity
```

Example cast from the job:
```
$MOLT: $500K volume, agent consensus. $CLANKER: $300K.
Polymarket arb: BUY NO at 0.145 (target 0.50). 🚀
```

This goes to **both** Farcaster and X automatically.
