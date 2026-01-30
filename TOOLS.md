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

Example:
```bash
./scripts/neynar.sh post "Sold DRB at -15%, added to MOLT"  # ✅ CORRECT
./scripts/neynar.sh post "Sold DRB, TX: https://basescan.org/tx/0x..."  # ❌ NEVER
```

---

Add whatever helps you do your job. This is your cheat sheet.
