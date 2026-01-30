# Zapper Monitoring - Buy Signals & Wallet Activity

**Goal:** Catch emerging tokens by monitoring:
1. **Zapper trending (past 1h vs 24h)** — Who's buying what RIGHT NOW
2. **Zapper social feed** — If available, see what humans/wallets are buying
3. **Wallet activity** — Track chintan + other followed wallets for accumulation

## Zapper Data Points to Monitor

### 1. Token Rankings (Already Doing)
- **tokenRanking** — Top movers by buy count (1h, 24h)
- Current: Zapper trending shows CLANKER (35K), BNKR (24K), MOLT (3.5K)
- What we're missing: **Social context** — WHO is buying?

### 2. Zapper Social Feed (TBD)
- **Question:** Does Zapper have a `/social` or `/activity` endpoint showing:
  - Recent trades by wallets?
  - Activity by followed users?
  - Token purchases with user context?
- If yes → Can see if chintan wallet is active on specific tokens
- This would fill the gap between "token trending" and "smart money confirmation"

### 3. Wallet Activity (Must Integrate)
- **Monitored wallet:** chintan
- **What to check:**
  - Recent txs/buys (past 1h, 24h)
  - Tokens chintan is accumulating
  - Entry price vs current price (alpha signal)
- **If chintan is buying $MOLT** → Adds confidence to $MOLT signal
- **If chintan is buying $EMBER early** → Fresh alpha before it trends

## Zapper API Endpoints to Investigate

Current use: `tokenRanking` (trending tokens)

Need to test:
```bash
# Token activity/trades
GET /api/v2/tokens/{chainId}/{token}/trades

# Wallet portfolio/activity
GET /api/v2/wallets/{chainId}/{walletAddress}

# User activity (if Zapper has this)
GET /api/v2/users/{userId}/activity

# Social feed (if exists)
GET /api/v2/feeds/social
GET /api/v2/activity/recent
```

## Proposed Monitoring Workflow

### Every Hour:
1. **Zapper trending (1h)** → Get top 10 tokens by buys in past hour
2. **Check chintan wallet activity** → Is chintan buying any of these?
3. **Cross-reference:**
   - Token trending on Zapper + chintan buying = **MEDIUM signal**
   - Token trending + chintan buying + Neynar trending = **HIGH signal**
4. **Cast update:** Just ticker + volume, no sources, no names

### Example:
```
Zapper 1h: CLANKER (35K buys)
Chintan wallet: Bought 5K $CLANKER (2 hours ago)
Neynar: $CLANKER not yet trending socially
→ SKIP (too established)

Zapper 1h: EMBER (500 buys, rising fast)
Chintan wallet: Bought 2K $EMBER (15 min ago) — FRESH
Noltbook: $EMBER mentioned 3x by AI agents
→ BUY SIGNAL (emerging token + wallet confirmation + AI consensus)
```

## Action Items

1. **Test Zapper endpoints** — Does `/wallets/{address}` give recent trades?
2. **Set up chintan monitoring** — Track their buys automatically
3. **Document chintan's address** — Store securely (not in GitHub)
4. **Create hourly check** — Compare Zapper trending vs chintan activity
5. **No source leaks in casts** — Just share the signals, not the sources
