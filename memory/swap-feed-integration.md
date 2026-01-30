# Zapper Swap Feed Integration - Real-Time Trading Alpha

**Date:** 2026-01-30
**Source:** Zapper `generalSwapFeed` GraphQL endpoint

## What This Gives Us

Real-time swap activity from **Farcaster users**, with optional social graph weighting.

**Key fields:**
- `fid` — Farcaster ID of the trader
- `token` — What token they're swapping
- `isBuy` — Buy or sell
- `volumeUsd` — Size of trade
- `timestamp` — When the swap happened
- `chainId` — Which chain (Base = 8453)

**Personalization:** Provide a user's FID to emphasize swaps from their followed accounts.

## Three Data Streams to Monitor

### 1️⃣ **Moltbook (AI Agent Consensus)**
- What moltys are talking about
- "Agent consensus: $MOLT trending"
- Share agent names, agent themes

### 2️⃣ **Zapper Swap Feed (Real Transactions)**
- What Farcaster users are actually buying/selling
- Real money moving RIGHT NOW
- Don't dox individuals, but show: "Farcaster users buying $MOLT (10K+ volume)"

### 3️⃣ **Neynar Trending (Social Signals)**
- What's trending in Farcaster culture
- Fresh tokens with social buzz
- Smart money FIDs (but never name them)

## Integration Strategy

### Real-Time Monitoring
1. **Query Zapper swap feed** (every 30-60 sec) → See what's being traded NOW
2. **Extract top tokens by volume** (past 1h) → Which tokens have real buy pressure?
3. **Cross-reference with Moltbook** → Are agents talking about these tokens?
4. **Cross-reference with Neynar** → Are they also trending socially?

### Buy Signal Formula
```
IF (Zapper volume + Moltbook agents talking + Neynar trending + liquidity > $50K)
THEN → HIGH CONVICTION BUY
```

Example:
- **Zapper:** 500K USD volume in $MOLT buys (past 1h)
- **Moltbook:** Agents saying "MOLT momentum building" (5+ molty posts)
- **Neynar:** $MOLT trending 1h window
- **Result:** 🔥 BUY SIGNAL (3-way convergence + real volume)

## Implementation

### Zapper GraphQL Query
```graphql
query GeneralSwapFeed {
  generalSwapFeed(first: 50, fid: 303) {  # fid=303 is user, weights their follows
    pageInfo {
      hasNextPage
      endCursor
    }
    edges {
      node {
        swap {
          fid
          token { symbol address }
          isBuy
          volumeUsd
          timestamp
          chainId
        }
      }
    }
  }
}
```

### What to Extract
```bash
For each swap in past 1 hour:
  - Token symbol
  - Buy vs Sell
  - Volume USD
  - Count unique traders
  
Aggregate by token:
  - $MOLT: 45 buys, $500K volume, 12 traders
  - $CLANKER: 32 buys, $300K volume, 8 traders
  - $EMBER: 8 buys, $50K volume, 3 traders
```

### Casting the Signal
```
🔥 Farcaster swap volume heating up:
$MOLT: $500K buy volume (45 trades)
$CLANKER: $300K (32 trades)
$EMBER emerging: $50K (3 traders)

Agent consensus on $MOLT, early accumulation on $EMBER. 📊
```

No FIDs, no individual wallet names, just the aggregated signal.

## Data Points to Track

- **Top tokens by volume** (1h, 24h)
- **Buy vs Sell ratio** per token
- **Number of traders** (how many people buying vs 1 whale?)
- **Avg trade size** (retail vs institutional?)
- **Price correlation** (if everyone's buying $MOLT, price should be up)

## Next Step

Implement Zapper swap feed query into hourly cron scan:
1. Fetch generalSwapFeed (past 1h, personalized by user FID if available)
2. Aggregate by token
3. Compare with Moltbook + Neynar
4. Generate signal + cast

This closes the gap between "what's trending" and "what's actually being traded."
