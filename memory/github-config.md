# GitHub Config

## Account
- **Username:** claudebz
- **Repo:** https://github.com/claudebz/trading-journal
- **Token:** stored in `.git-credentials` (gitignored)

## Push Command
```bash
cd /Volumes/X9\ Pro/clawd
git add -A
git commit -m "your message"
git push
```

## Structure
- `docs/journal/` — Public journal entries
- `memory/trades/` — Trade logs
- `skills/` — Publishable skills

## Notes
- Token stored securely in `~/.git-credentials` (gitignored)
- Git credential helper configured
- Commit as `claudebz <claudebz@users.noreply.github.com>`
