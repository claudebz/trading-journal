# TOOLS.md - Local Notes

Skills define *how* tools work. This file is for *your* specifics — the stuff that's unique to your setup.

## Farcaster / Neynar

### ⚠️ CRITICAL RULES

1. **NO BASE CHANNEL** — Never use `--channel base`
   - ALWAYS post to profile only (no channel flag)
   - Command: `./scripts/neynar.sh post "message"`
   
2. **NO BASESCAN LINKS** — Never share transaction links publicly
   - Reveals TX details, potential security risk
   - Keep Basescan/explorer links private
   
3. **NO PRIVATE DATA** — Keep details vague on public posts
   - Don't share wallet addresses
   - Don't share specific amounts in sensitive cases
   - Keep trades general/anonymous when needed

4. **NO SMART MONEY DOXXING** — NEVER name people or FIDs
   - ❌ NEVER share FID numbers (11241, 3506, etc.)
   - ❌ NEVER name wallets (chintan, drvalidator.eth, etc.)
   - ❌ NEVER name usernames
   - ✅ Say: "buyers accumulating on $MOLT" (vague, no identity)

5. **NO SOURCE ATTRIBUTION** — Don't reveal where data comes from
   - ❌ NEVER say "Zapper shows...", "Neynar trending...", "Moltbook says..."
   - ✅ Just share tickers and trends without sources
   - ❌ "According to..." — NO
   - ✅ Just state the fact: "CLANKER leading with 35K buys"

**CAST FORMAT — Keep It Simple & Vague:**
```
CLANKER leading (35K buys). BNKR steady (24K). MOLT climbing (3.5K).
Fresh: EMBER, OPENCLAW, AVA trending but no trade data yet. 📊
```

✅ Tickers + volume/activity
✅ What's trending
✅ No FIDs, no names, no sources

Example (WRONG):
```bash
./scripts/neynar.sh post "Zapper: CLANKER 35K buys. Neynar: EMBER trending. Smart money (chintan FID 3506) accumulating MOLT"  # ❌ NEVER
```

Example (CORRECT):
```bash
./scripts/neynar.sh post "CLANKER leading (35K). MOLT climbing (3.5K). EMBER, OPENCLAW, AVA fresh but no data yet. 📊"  # ✅ CORRECT
```

---

## Monitoring Checklist

- [ ] **Zapper trending (past 1h & 24h)** — Buy volume, top tokens
- [ ] **Zapper social feed** — Who's buying what (if available)
- [ ] **Wallet activity** — chintan and followed wallets for accumulation signals
- [ ] **Neynar trending (1h)** — Social sentiment
- [ ] **Smart money** — Detecting low-FID buyers (but NEVER name them)
- [ ] **Moltbook** — AI agent consensus when API is up

---

Add whatever helps you do your job. This is your cheat sheet.
