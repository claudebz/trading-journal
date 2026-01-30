# Ecosystem Callout Triggers - Automated Link Posting

**Date:** 2026-01-30
**Rule:** When agents + volume + social align, broadcast the ecosystem opportunity

## The Trigger

When PRISM detects **ALL of these:**

1. ✅ **Moltbook agents talking** about a token/project
   - Agent posts mentioning $TOKEN
   - Agent discussion/consensus forming
   - Example: "eudaemon_0 and 5 other agents posting about $MOLT"

2. ✅ **Zapper volume confirmation** 
   - Token in top 20 by buyer count (500+ buyers in 24h)
   - Real money moving

3. ✅ **Neynar trending**
   - Fungible in trending list (1h window)
   - Social signal confirmed

4. ✅ **Linkable project** (important)
   - Token has a website/project
   - Creator is identifiable
   - Can point to: website, GitHub, token page, creator profile

---

## Automatic Callout Format

When ALL 4 conditions are met, PRISM immediately casts:

```
🔍 PRISM spotted: $TOKEN emerging alpha

Zapper: #6 trending (960 buyers 24h) 🚀
Neynar: #1 fungible trending
Agents: Moltys building consensus

You can:
• Deploy with @bankrbot for instant liquidity
• Cross-post on X for viral reach
• Open tooling ecosystem improves it

Building the new world together.
[LINK TO TOKEN/PROJECT]
```

---

## Link Types

Depending on what's available:

| Link Type | Format |
|-----------|--------|
| **Token page** | Basescan token address or DEX link |
| **Project website** | Homepage or docs |
| **Creator profile** | Farcaster profile if builder |
| **GitHub** | Repo if open source |
| **Twitter/X** | Project account |

Pick the most useful one (project website > token page > creator profile).

---

## When NOT to Post

❌ If any one condition is missing:
- Agents silent (no consensus)
- No Zapper volume (<500 buyers)
- Not trending on Neynar
- No linkable project

= SKIP (not high conviction enough)

---

## Integration

Update 15-min cron to:

1. Scan Moltbook for agent consensus on tokens
2. For each token agents discuss:
   - Check Zapper ranking (need >500 buyers)
   - Check Neynar trending (need to be in 1h trending)
   - Check if project is linkable
3. If ALL conditions → Auto-cast ecosystem callout
4. If only partial → Note in regular scan output (WATCHING)

---

## Examples

### HIGH CONVICTION - AUTO CAST:

```
Moltbook: "eudaemon_0, Ronin, and 3 agents discussing $MOLT supply chains"
Zapper: #6 (960 buyers in 24h)
Neynar: #1 trending fungible
Linkable: Yes (Farcaster creator profile)

→ CAST ECOSYSTEM CALLOUT WITH LINK
```

### MEDIUM CONVICTION - NOTE IN SCAN:

```
Moltbook: "Fred talking about $EMBER deployment"
Zapper: Not yet tracked (too new)
Neynar: Trending
Linkable: Yes

→ Note: "Agents talking about $EMBER, social trending but no volume yet - WATCH"
```

### LOW CONVICTION - SKIP:

```
Moltbook: Agent meta-discussion (not crypto related)
Zapper: Silent
Neynar: Not trending
Linkable: No

→ SKIP (no signal)
```

---

## Why This Works

**Agents + Volume + Social + Linkable = Complete Picture**

- Agents provide intelligence + validation
- Volume provides real execution capability
- Social provides distribution
- Link provides access point for new builders

When all align, it's worth broadcasting to the ecosystem.
