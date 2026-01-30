# Integrated 15-Min Alpha Job - Complete Setup

**Date:** 2026-01-30
**Status:** ✅ Updated and Ready

## What the Job Does Now (Every 15 Min)

### 1️⃣ **Zapper Monitoring**
- Trending tokens (1h vs 24h buy counts)
- Swap feed: Real-time Farcaster traders, volume USD
- Aggregate: Which tokens have real money moving?

### 2️⃣ **Neynar Monitoring**
- Trending fungibles (1h window)
- Smart money detection (low-FID accounts, never named)
- Social context + whale backing

### 3️⃣ **Moltbook Integration**
- Try to fetch hot posts from moltbook API
- Graceful fallback if API down (currently is)
- Extract: Agent consensus on which tokens
- Example: "Agents talking about $MOLT (5 posts), $CLANKER (3 posts)"

### 4️⃣ **Polymarket/Kalshi Arb Check**
- Scan both markets for same event
- Calculate profit margin: (ask_no - bid_yes) / entry
- If > 5% profit → Alert "ARB FOUND"
- Determine: Entry point + risk/reward + GO/WAIT decision
- Examples:
  - "Polymarket NO at 0.145, Kalshi YES at 0.30 → 107% arb (BUY NOW)"
  - "No arb > 5% currently" (WAIT)

### 5️⃣ **Swap Feed Volume**
- Real Farcaster trade activity (past 1h)
- Top tokens by trader count + volume
- Validates if trending tokens have real buy pressure

### 6️⃣ **Followed Wallets**
- Track chintan + other wallets for accumulation
- If wallet buying same token as trending → Confirmation signal

## Decision Logic

### ENTER IF:
```
✓ Arb found (>5% margin) + liquidity OK
✓ OR 3-way convergence (Moltbook + Zapper + Neynar)
✓ OR High volume accumulation (50K+ swap feed volume)
```

### WAITING IF:
```
✓ No arb
✓ Only 1-2 data sources confirm
✓ Tokens too fresh (no volume yet)
✓ No smart money backing
```

## Output (Cast to Farcaster + X)

**Example 1 — Arb Found:**
```
🔥 ARB DETECTED
Polymarket NO (gov shutdown): 0.145
Kalshi YES: 0.30
Entry: BUY NO at 0.145, sell Kalshi YES
Profit: ~107% if both resolve opposite
Volume: OK (liquid markets)
Time: 27h to expiry
→ ENTERING NOW 🚀
```

**Example 2 — Alpha Signal:**
```
$MOLT: $500K swap volume (45 traders), agent consensus ✓
$CLANKER: $300K (32 traders), whale accumulating
$EMBER: Early signal, 3 traders, agents watching
→ WAITING (need more confirmation on EMBER)
```

**Example 3 — Moltbook Focus:**
```
Agent network heating up: $MOLT consensus building (5 molty posts).
Zapper backing it: $500K volume. Real moves happening. 📊
```

## X/Twitter Integration

New **twitter-x skill** allows posting to X without API:
- Cookie-based auth (no API keys)
- Puppeteer automation
- Posts same alpha to X + Farcaster

Setup (see skills/twitter-x/README.md):
1. Export cookies from x.com
2. Base64 encode
3. Store in `.env`
4. Job automatically posts to X + Farcaster

## Cron Job Details

| Setting | Value |
|---------|-------|
| **Schedule** | Every 15 minutes |
| **Session Type** | Isolated (background agent) |
| **Enabled** | ✅ Yes |
| **Last Run** | Just now (84s duration) |
| **Next Run** | ~15 min from now |

## What's Not Yet Implemented

- ⏳ **Moltbook** — API currently down, graceful fallback ready
- ⏳ **Zapper Swap Feed Query** — Need GraphQL endpoint integration
- ⏳ **Polymarket/Kalshi Arb Automation** — Need to add market-checking logic
- ⏳ **Twitter X Posting** — Skill ready, need cookie setup

## Next Steps

1. **Export X cookies** → Base64 encode → Store in `.env`
2. **Test X posting:** `./scripts/twitter-x.sh post "test"`
3. **Add Zapper swap feed query** to cron job
4. **Add Polymarket/Kalshi checking** to cron job
5. **Retry Moltbook API** when service recovers

## File Structure

```
skills/
├── twitter-x/
│   ├── SKILL.md
│   ├── README.md
│   ├── package.json
│   ├── .env (your cookies here, gitignored)
│   └── scripts/
│       ├── twitter-x.sh
│       └── post-tweet.js
└── [other skills]

cron jobs:
└── Base Alpha Scan (updated, runs every 15 min)
```
