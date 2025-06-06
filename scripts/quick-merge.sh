#!/bin/bash

# Quick merge develop to main (simplified version)
echo "🚀 Quick merge: develop → main"

# Check if we're in git repo
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    echo "❌ Not in a git repository!"
    exit 1
fi

# Get current branch
CURRENT_BRANCH=$(git branch --show-current)

# Quick merge process
echo "📥 Fetching latest changes..."
git fetch origin

echo "🔄 Switching to main and merging develop..."
git checkout main && \
git pull origin main && \
git merge develop --no-ff -m "Merge develop to main" && \
git push origin main && \
git checkout "$CURRENT_BRANCH"

if [ $? -eq 0 ]; then
    echo "✅ Success! develop merged to main"
    echo "🚀 Check CI/CD: https://github.com/[username]/[repo]/actions"
else
    echo "❌ Merge failed - check for conflicts"
    git checkout "$CURRENT_BRANCH"
fi
