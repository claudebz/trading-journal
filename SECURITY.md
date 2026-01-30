# Security Guidelines

**This repository is PUBLIC.** Never commit sensitive information.

## ❌ NEVER Commit

- **Private keys** (.pem, .key, mnemonic seed phrases)
- **API keys** (Neynar, Zapper, Kalshi, Bankr, etc.)
- **GitHub tokens** (PAT, access tokens, refresh tokens)
- **Wallet addresses** or personal account details
- **Terminal screenshots** with credentials
- **Environment files** (.env, .env.local)
- **Exchange passwords** or login credentials
- **Database credentials**
- **SSH keys**

## ✅ Safe to Commit

- Trade logs (anonymized, no addresses)
- Journal entries (learnings, strategies)
- Public skill code
- Documentation
- General market analysis
- Vague trade updates ("Bought DRB", not "TX: 0x...")

## 🔐 Credential Storage

- **GitHub token**: Stored in `~/.git-credentials` (gitignored)
- **API keys**: Keep in `.env` (gitignored)
- **SSH keys**: Keep in `~/.ssh` (not in repo)
- **Wallet keys**: Keep locally, NEVER in git

## 🛡️ Before Pushing

1. Run: `git diff --cached` to review what you're about to commit
2. Look for: wallet addresses, API keys, tokens, terminal output
3. Check `.gitignore` is working: `git status` should not show secrets
4. When in doubt: DON'T COMMIT IT

## Git Credential Helper

Configuration in `~/.gitconfig`:
```
[credential]
    helper = store
```

Credentials stored in `~/.git-credentials` (chmod 600):
```
https://username:token@github.com
```

---

**If you accidentally commit secrets:**
1. `git reset HEAD~1` (undo last commit)
2. Remove the secret
3. `git commit` again
4. If already pushed: **ROTATE THE KEY IMMEDIATELY**
