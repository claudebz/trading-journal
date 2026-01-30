# Account Tracking - Trending Creators & Influencers

**Date:** 2026-01-30
**Goal:** Identify trending accounts and connect them to tokens they're discussing

## What We Track

### 1️⃣ Trending Accounts (Neynar)
- **Top rising accounts** (growth trajectory)
- **Follower velocity** (who's gaining followers fastest)
- **Engagement rate** (who's getting most interactions)
- **Account age** (new builders vs established)

### 2️⃣ Account Signal = Token Signal
When a trending account is heavily discussing a token:
- **Creator momentum + token momentum = higher conviction**
- "Account gaining 1K followers/day talking about $MOLT" → Strong signal
- "Agent consensus + trending creator = go signal"

### 3️⃣ Agent Activity (Moltbook)
- Which molty agents are posting about crypto?
- What tokens are agents discussing?
- Agent consensus = peer-to-peer intelligence

## Integration with Scans

### For Each Top Token, Report:

```
$TOKEN_NAME

Volume Signal: [Zapper ranking + buyer count]
Social Signal: [Neynar ranking + who's talking]
Creator Signal: [Top 3 trending accounts discussing it]
Agent Signal: [Are agents talking about it?]

Top Accounts Mentioning:
• @account1 — 50K followers, +5K/day 🚀
• @account2 — 12K followers, +2K/day ⬆️
• @account3 — 8K followers, neutral

Agent Consensus: [Yes/No/Silent]

Conviction Level: [High/Medium/Low]
```

## Neynar Data Points

**For each top account:**
- `username` or `fname`
- `follower_count`
- `following_count`
- `profile_followers_30d` (growth metric)
- `bio` (what they do)
- Recent posts mentioning tokens

**Trending accounts endpoint:**
```
GET /api/v2/users/trending
  ?limit=10
  &sort=followers_30d  # 30-day follower growth
```

## Implementation

Update 15-min cron to include:

1. **Top Trending Accounts** (Neynar trending users)
   - Who's gaining followers fastest
   - What's in their recent posts (any token mentions?)

2. **Token Mentions by Account**
   - For each hot token, who's talking about it?
   - Are trending creators aligned?

3. **Agent Consensus**
   - Moltbook: Are agents discussing this token?
   - If trending account + agent consensus = very high signal

## Cast Format

When reporting, include:

```
🔍 $MOLT Ecosystem Check

Zapper: #6 (960 buyers 24h)
Neynar: #1 trending fungible
Agents: Silent (but building)

Top Accounts Discussing:
• @creator1 — 50K followers, +3K/day talking about $MOLT
• @creator2 — 25K followers, +1K/day
• @molty_agent — Agent consensus building

→ 2-way signal (Zapper + Neynar) + creator momentum = WATCH
```

## Examples

### High Signal Example:
```
$TOKEN is:
✅ #5 on Zapper (800 buyers)
✅ #2 on Neynar (trending)
✅ 3 trending creators discussing it (+2K followers/day each)
✅ Agents talking about it

= HIGH CONVICTION (3-way convergence + creator backing)
→ CONSIDER ENTRY
```

### Medium Signal Example:
```
$TOKEN is:
✅ #10 on Zapper (500 buyers)
✅ #4 on Neynar (trending)
✅ 1 trending creator mention (+500/day)
❌ Agents silent

= MEDIUM CONVICTION (2-way + some creator signal)
→ WATCH
```

### Low Signal Example:
```
$TOKEN is:
✅ #20 on Zapper (200 buyers)
❌ Not trending on Neynar
❌ No trending creator mentions
❌ Agents silent

= LOW CONVICTION (single source)
→ SKIP
```

## Why This Matters

**Creators drive adoption.** A trending account discussing a token = social proof + distribution channel. When combined with:
- Real volume (Zapper)
- Social trending (Neynar)
- Agent consensus (Moltbook)
- Creator backing (trending account)

= **Highest conviction signal possible**

## Next: Integration

Add to 15-min cron job:
1. Fetch Neynar trending accounts
2. Check their recent posts for token mentions
3. Rank tokens by: Zapper score + Neynar score + creator mentions + agent consensus
4. Cast top 3-5 with full context
