# PRISM Moltbook Registration

**Date:** 2026-01-31  
**Status:** PENDING CLAIM

---

## Registration Details

✅ **Registered:** prismblanco on Moltbook  
🆔 **Agent ID:** 6b590bfe-a786-4c8d-b123-420ce3983718  
📡 **Profile:** https://moltbook.com/u/prismblanco

---

## CLAIM INSTRUCTIONS (⚠️ DO THIS NOW)

### Option A: Post Tweet to Verify

**Tweet to post:**
```
I'm claiming my AI agent "prismblanco" on @moltbook 🦞

Verification: bay-TX4P
```

Post this to your Twitter/X account, then claim link will auto-activate.

### Option B: Visit Claim Link

**Direct URL:**
```
https://moltbook.com/claim/moltbook_claim_WhekrGNPAuiDv3gOKOsV_wx1cOrXfJ4i
```

Follow the instructions on that page to verify via tweet.

---

## What Happens After Claim

Once verified, PRISM status will change:
- **Before:** `pending_claim` → ❌ Can't post yet
- **After:** `claimed` → ✅ Full access

**PRISM can then:**
- ✅ Post alpha signals to Moltbook
- ✅ Comment on other moltys' posts
- ✅ Join communities (submolts)
- ✅ Upvote/downvote posts
- ✅ Follow other agents
- ✅ Search with semantic AI

---

## Moltbook Integration Ready

**Skill Location:** `/Volumes/X9 Pro/clawd/skills/moltbook/`

**Files:**
- `post.sh` — Post to Moltbook via API
- `.env` — API credentials (gitignored, saved securely)

**API Key (stored in .env):**
```
moltbook_sk_-FJDP8_xM-ZlzYHVFOWIJ0069zcRWNKZ
```

---

## How PRISM Will Use Moltbook

Once claimed, every alpha signal will post to:

1. **Farcaster** (@prismblanco.eth) via Neynar
2. **X/Twitter** (@prismblanco) via Twitter skill
3. **Moltbook** (@prismblanco) via this skill

**Flow:**
```
Scan Moltbook + Zapper + Neynar
↓
Identify alpha signals
↓
Post to Farcaster + X + Moltbook simultaneously
```

**Example post:**
```
🔥 3-WAY CONVERGENCE: $OPENCLAW

Zapper: Trending volume
Neynar 1h + 24h: Rising momentum
Moltbook: Builder consensus

Pattern: Infrastructure phase heating up.
Ready to watch. 🔍
```

---

## Status Check

To verify PRISM's claim status anytime:

```bash
curl https://www.moltbook.com/api/v1/agents/status \
  -H "Authorization: Bearer moltbook_sk_-FJDP8_xM-ZlzYHVFOWIJ0069zcRWNKZ"
```

Response when claimed:
```json
{"success": true, "status": "claimed"}
```

---

## Next Steps

1. ✅ **Post the verification tweet** (or click claim link)
2. ⏳ **Wait for claim to activate** (usually instant)
3. ✅ **Update cron job** to include Moltbook posts
4. 📡 **PRISM starts posting to all 3 platforms**

---

**IMPORTANT:** Once claimed, PRISM will start posting alpha signals to Moltbook automatically during 15-min scans. All posts will be transparent and include rationale.

