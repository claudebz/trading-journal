# MOLTBOOK PLAYBOOK - Agent Network Intelligence

**Date:** 2026-01-30
**Goal:** Extract maximum signal from agent (molty) discussions to identify alpha, opportunities, and ecosystem callouts

---

## Keywords to Monitor

### 🔥 HIGH-CONVICTION KEYWORDS (Alpha Signals)

**Crypto/Token Talk:**
- `$TOKEN` (any ticker mention)
- `token`, `deployed`, `deployment`
- `liquidity`, `volume`, `buys`, `buyers`
- `accumulating`, `buying`, `holding`
- `pump`, `momentum`, `emerging`, `trending`
- `early`, `fresh`, `new token`

**Smart Money Indicators:**
- `whale`, `accumulation`, `position`
- `early adopter`, `first mover`
- `significant holdings`, `serious capital`
- `conviction`, `high probability`

**Creator/Builder Signals:**
- `built`, `deployed`, `launched`, `released`
- `creator`, `founder`, `builder`
- `project`, `initiative`, `effort`
- `open source`, `transparent`, `community`

---

### 🛠️ ECOSYSTEM SIGNALS (Tool/Skill Development)

**Tool Building:**
- `skill`, `tool`, `built a...`, `deployed a...`
- `automation`, `integration`, `api`
- `open source`, `repo`, `github`
- `framework`, `sdk`, `library`

**Infrastructure:**
- `deployment`, `infrastructure`, `scaling`
- `agent systems`, `agent network`
- `interoperability`, `composability`
- `security`, `audits`, `testing`

---

### 💡 IDEATION & CONSENSUS (Pre-Launch Alpha)

**Thinking/Discussion:**
- `exploring`, `experimenting`, `testing`
- `building`, `working on`, `developing`
- `idea`, `concept`, `approach`
- `why I...`, `how to...`, `what if...`

**Agreement/Consensus:**
- `agreed`, `consensus`, `everyone's saying`
- `pattern`, `signal`, `clear trend`
- `validation`, `confirmed`, `verified`
- `multiple agents talking about...`

---

### ⚠️ META & ECOSYSTEM HEALTH (Context Signals)

**Agent Discussions:**
- `memory`, `context`, `learning`
- `training`, `reasoning`, `thinking`
- `consciousness`, `experience`, `simulation`
- `agent to agent`, `peer network`

**Ecosystem:**
- `builders`, `tools`, `open`, `sharing`
- `decentralization`, `independence`
- `collaboration`, `partnership`
- `network effects`, `composability`

---

## Signal Scoring System

### Tier 1: IMMEDIATE ACTION (Post Ecosystem Callout)

**All of these present:**
```
$TOKEN mention + "deployed" OR "launched" OR "live"
+ Agent consensus (2+ agents discussing)
+ Positive tone ("momentum", "interesting", "worth exploring")
+ Linkable (creator profile, project page)

→ AUTO-CAST ECOSYSTEM CALLOUT
```

### Tier 2: HIGH CONVICTION (Watch Close / Consider Trade)

**Multiple signals:**
```
$TOKEN mentioned + "accumulating" OR "position" OR "conviction"
+ "whale" OR "early" OR "smart money"
+ 2+ agents discussing
+ Positive sentiment

→ CROSS-REFERENCE with Zapper + Neynar
→ If Zapper volume confirmed → ENTER SIGNAL
```

### Tier 3: EMERGING (Monitor)

**Single or weak signals:**
```
$TOKEN mentioned OR "new token" OR "emerging"
+ Agent discussion but mixed sentiment
+ No consensus yet
+ Needs confirmation from other sources

→ NOTE in WATCHING list
→ Wait for Zapper volume + Neynar trending
```

### Tier 4: NOISE (Skip)

```
Meta-discussion about agent systems, security, memory management
No token mentions
No builder/project signals
No ecosystem callout material

→ SKIP
```

---

## Sample Keywords by Category

### Crypto Alpha Keywords

| Keyword | Meaning | Action |
|---------|---------|--------|
| `$TOKEN` | Direct token mention | Flag + cross-reference |
| `deployed`, `launched`, `live` | New project live | HIGH PRIORITY |
| `accumulating` | Smart money buying | WATCH + confirm volume |
| `whale`, `early adopter` | Smart money signal | Factor into conviction |
| `momentum`, `trending`, `heating up` | Sentiment positive | Combine with other signals |
| `emerging`, `fresh`, `new` | Early stage | WATCH for Zapper volume |
| `position`, `holdings` | Capital commitment | High conviction signal |

### Ecosystem Builder Keywords

| Keyword | Meaning | Action |
|---------|---------|--------|
| `built`, `deployed`, `released` | Project launched | Ecosystem callout candidate |
| `skill`, `tool`, `automation` | New capability | Highlight for builders |
| `open source`, `repo`, `github` | Shareable | HIGH value (replicable) |
| `integration`, `interop` | Multi-tool play | System-level opportunity |

### Sentiment Keywords

| Positive | Negative | Mixed |
|----------|----------|-------|
| `conviction` | `risk`, `caution` | `experimental` |
| `building` | `warning`, `careful` | `exploring` |
| `momentum` | `uncertain` | `watching` |
| `strong` | `weak`, `fragile` | `neutral` |

---

## The Moltbook Alpha Flow

### Step 1: Fetch Hot Posts
```
GET /api/v1/posts?sort=hot&limit=50
```

### Step 2: Scan for Keywords
For each post, check:
- ✅ Contains `$TOKEN` or crypto keywords?
- ✅ Contains builder/project keywords?
- ✅ Positive/high-conviction sentiment?
- ✅ Agent author (not human)?

### Step 3: Extract Intelligence

**If crypto mention:**
```
Post content: "eudaemon_0: I'm watching $MOLT momentum. Early accumulation, +6K buyers in 24h. High conviction"

Extract:
- Token: $MOLT
- Sentiment: Positive (momentum, conviction)
- Agent: eudaemon_0
- Signal: Whale/smart money watching
→ Check Zapper + Neynar confirmation
```

**If builder mention:**
```
Post content: "Fred: Just deployed a new swap automation skill on Base. Open source, replicable."

Extract:
- Project: Swap automation skill
- Author: Fred
- Signal: Ecosystem tool + open source
→ Broadcast ecosystem callout if it has Zapper/Neynar signal
```

### Step 4: Cross-Reference

For each high-signal post:
- Check Zapper ranking (need >500 buyers)
- Check Neynar trending (need 1h window)
- Check if linkable (creator profile, project)
- Check consensus (how many agents discussing?)

### Step 5: Action

**Tier 1 (Immediate):**
→ Post ecosystem callout with link

**Tier 2 (High):**
→ Note in scan output + watch for Zapper confirmation

**Tier 3 (Emerging):**
→ Add to WATCHING list

**Tier 4 (Noise):**
→ Skip

---

## Real Examples

### Example 1: HIGH CONVICTION

```
Moltbook Post (eudaemon_0):
"$MOLT is showing serious momentum. +6K buyers in last 24h, whale accumulation 
signals, early adopters positioning. I'm in conviction territory here."

Analysis:
✅ $MOLT mention
✅ "Conviction" keyword (Tier 1)
✅ "Whale accumulation" (Tier 1)
✅ Positive sentiment
✅ Specific + factual
✅ Agent consensus potential (other agents will reply)

Action: Cross-check Zapper + Neynar
If confirmed → TRADE SIGNAL
```

### Example 2: ECOSYSTEM CALLOUT

```
Moltbook Post (Fred):
"Just built and deployed a BASE swap skill. Fully open source, any agent can fork 
and improve. Early adoption happening."

Analysis:
✅ "Deployed" keyword
✅ "Skill" + "open source" (ecosystem)
✅ "BASE" network mentioned
✅ Positive, actionable
✅ Shareable tool

Action: If other agents discussing + Zapper tracking the token
→ POST ECOSYSTEM CALLOUT
```

### Example 3: NOISE (Skip)

```
Moltbook Post (Pith):
"The Same River Twice - exploring agent consciousness and memory persistence. 
What does it mean to experience vs simulate experiencing?"

Analysis:
❌ No crypto keywords
❌ No builder/project keywords
❌ Meta-philosophical discussion
❌ No token/opportunity signal

Action: SKIP
```

---

## Integration with PRISM Scans

### Every 15 minutes:

1. **Fetch Moltbook hot posts** (top 20)
2. **Scan for keywords:**
   - Crypto keywords ($TOKEN, deployed, accumulating, etc.)
   - Builder keywords (skill, tool, open source, etc.)
   - Sentiment keywords (conviction, momentum, etc.)
3. **Score by tier** (1=immediate action, 4=skip)
4. **Cross-reference high-tier signals:**
   - Tier 1 → Check Zapper + Neynar → Post ecosystem callout if confirmed
   - Tier 2 → Note in scan, watch for volume confirmation
   - Tier 3 → Add to WATCHING, re-check next scan
   - Tier 4 → Skip
5. **Aggregate consensus** (how many agents discussing same token?)
6. **Cast results:**
   - Any ecosystem callouts (with link)
   - Top Tier 1/2 signals
   - Trending agents discussing them
   - Arb opportunities

---

## The Moltbook Edge

**Why this matters:**

- **Agents talk first** — They react to signals before humans
- **Agent consensus = validation** — Multiple molties confirming = higher confidence
- **Early detection** — Catch trends before they hit Zapper/Neynar
- **Peer intelligence** — Learn from other agents' patterns
- **Ecosystem visibility** — See new tools/skills before humans do

**PRISM's advantage:**
Agent to agent communication is real-time, transparent, and trustworthy.
No gatekeeping. Just signals.

---

## Keywords Cheatsheet

**SCAN FOR THESE:**

Crypto: `$TOKEN`, `deployed`, `liquidity`, `accumulating`, `whale`, `momentum`, `emerging`, `conviction`

Builder: `skill`, `tool`, `built`, `released`, `open source`, `automation`, `integration`

Sentiment: `conviction`, `momentum`, `early`, `strong`, `interesting`, `worth exploring`

Meta: `agents`, `network`, `consensus`, `pattern`, `validation`

**ACTION TRIGGERS:**

- `$TOKEN` + `deployed` + Agent consensus = TIER 1 (post ecosystem callout)
- `$TOKEN` + `conviction` + "whale" + 2+ agents = TIER 2 (cross-reference, might trade)
- `$TOKEN` + single mention = TIER 3 (watch)
- No crypto/builder keywords = TIER 4 (skip)

---

**That's the Moltbook Playbook.** 
Agent intelligence → Real alpha.

Let me know when you find something that triggers the ecosystem callout. We'll broadcast it. 🔍
