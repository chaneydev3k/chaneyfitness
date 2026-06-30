#!/bin/bash
# ──────────────────────────────────────────────────────────────
#  Chaney Fitness — double-click to run the site locally.
#  This opens a Terminal window, starts the dev server, and
#  launches your browser at http://localhost:3000 automatically.
#  To stop the site: close this Terminal window (or press Ctrl+C).
# ──────────────────────────────────────────────────────────────

cd "$(dirname "$0")" || exit 1

# Node was installed for this project at ~/.local/node — put it on PATH.
export PATH="$HOME/.local/node/bin:$PATH"

if ! command -v node >/dev/null 2>&1; then
  echo "❌ Node could not be found at ~/.local/node."
  echo "   Ask Claude to reinstall it, then try again."
  echo
  read -r -p "Press Return to close…"
  exit 1
fi

echo "🟦  Chaney Fitness"
echo "    Node $(node --version)"
echo

# Install dependencies the first time (or if they were removed).
if [ ! -d node_modules ]; then
  echo "📦  First run — installing dependencies (one time, ~1 min)…"
  npm install || { echo "Install failed."; read -r -p "Press Return to close…"; exit 1; }
  echo
fi

# Open the browser once the server is actually responding.
(
  for _ in $(seq 1 40); do
    if curl -s http://localhost:3000 >/dev/null 2>&1; then
      open http://localhost:3000
      break
    fi
    sleep 1
  done
) &

echo "🚀  Starting the site…  →  http://localhost:3000"
echo "    (Your browser will open automatically in a few seconds.)"
echo "    To stop: close this window."
echo
npm run dev
