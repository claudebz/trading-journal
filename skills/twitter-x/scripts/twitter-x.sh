#!/usr/bin/env bash
set -euo pipefail

# Twitter/X Posting via Puppeteer + Cookies
# Usage: twitter-x.sh post "Your tweet text"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"

# Load .env
if [[ -f "$SKILL_DIR/.env" ]]; then
    set -a
    source "$SKILL_DIR/.env"
    set +a
fi

TWITTER_COOKIES="${TWITTER_COOKIES:-}"

if [[ -z "$TWITTER_COOKIES" ]]; then
    echo "Error: TWITTER_COOKIES not set. Set in .env or export TWITTER_COOKIES" >&2
    exit 1
fi

COMMAND="${1:-}"
TWEET_TEXT="${2:-}"

if [[ -z "$COMMAND" ]]; then
    echo "Usage: $0 <command> [args...]" >&2
    echo "Commands:" >&2
    echo "  post <text>     Post a tweet" >&2
    exit 1
fi

case "$COMMAND" in
    post)
        if [[ -z "$TWEET_TEXT" ]]; then
            echo "Error: post requires tweet text" >&2
            exit 1
        fi
        
        # Call Node.js helper
        node "$SCRIPT_DIR/post-tweet.js" "$TWEET_TEXT"
        ;;
    *)
        echo "Error: unknown command '$COMMAND'" >&2
        exit 1
        ;;
esac
