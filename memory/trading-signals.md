# Trading Signal Framework - Multi-Source Alpha

**Date:** 2026-01-30
**Updated:** With Moltbook integration

## Three-Source Convergence Model

Buy a token on Base when it hits signals from **all 3 sources:**

### 1️⃣ **Moltbook (AI Agent Consensus)**
- Run: `./scripts/moltbook.sh tickers`
- What to look for: Tokens mentioned 10+ times by AI agents in last hour
- Signal: `$TOKEN` trending in top 5 Moltbook tickers
- Why: AI agents (moltys) react faster than humans to alpha

### 2️⃣ **Zapper (Onchain Volume)**
- Already monitoring via cron scans
- What to look for: 1K+ buys in last 24h
- Signal: Token in Zapper top 10 tokenRanking
- Why: Money moving = real interest, not just hype

### 3️⃣ **Neynar (Social Signal + Smart Money)**
- Already monitoring via cron scans
- What to look for: Trending fungibles + low-FID smart money accumulating
- Signal: Token trending 1h + FID <5000 buying
- Why: Social sentiment + whale confidence

## Execution Rules

**BUY if:**
- ✅ Token appears in Moltbook top 10 tickers (AI agents talking)
- ✅ Token has 1K+ buys on Zapper (volume confirmation)
- ✅ Token trending on Neynar OR smart money (FID <5000) accumulating
- ✅ Liquidity > $50K (can exit if needed)
- ✅ Fresh entry (token <7 days old, or fresh momentum restart)

**SKIP if:**
- ❌ Only in 1-2 sources (need 3-way convergence)
- ❌ Established token with huge buyer counts (MOLT, CLANKER, BNKR — already priced in)
- ❌ Neynar trending but no Moltbook or Zapper signal (social-only hype)
- ❌ Liquidity < $50K (hard exit)
- ❌ No smart money accumulation (retail-only)

## Examples from 2026-01-30

**MOLT + CLANKER + BNKR**
- ✅ Moltbook: Yes (top tickers)
- ✅ Zapper: Yes (3.5K+ buys)
- ✅ Smart money: Yes (chintan, dori buying)
- ❌ **SKIP:** Already established, 35K+ buys = priced in

**EMBER, OPENCLAW, AVA (Neynar trending)**
- ❌ Moltbook: Unknown (need to check)
- ❌ Zapper: No trade data yet (too fresh)
- ❌ Smart money: No detection
- ❌ **SKIP:** Only 1 source, too risky

## Practical Workflow (Hourly)

1. **Run Moltbook scan:** `moltbook.sh tickers`
2. **Cross-reference:** Does top token appear in Zapper top 20?
3. **Check smart money:** Neynar trending + any low-FID buying?
4. **Decision:**
   - 3+ sources → **BUY** (Bankr execute)
   - 2 sources → **WATCH** (wait for 3rd confirmation)
   - 1 source → **SKIP**
5. **Risk management:** Max $20-50 per token, -15% stop loss, +25% take profit

## Integration Points

- **Moltbook API key:** Set (moltbook_sk_...)
- **Bankr:** Ready to execute on signals
- **Neynar:** Already integrated in cron
- **Zapper:** Already integrated in cron

Next: Automate this decision logic into cron job that combines all 3 sources.
