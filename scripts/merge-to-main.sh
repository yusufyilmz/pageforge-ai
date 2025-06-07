#!/bin/bash

# PageForge - Merge Develop to Main Script
echo "🔄 PageForge - Merging develop to main..."

# Color codes for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_error "Not in a git repository!"
    exit 1
fi

# Check if develop branch exists
if ! git show-ref --verify --quiet refs/heads/develop; then
    print_error "develop branch doesn't exist!"
    print_status "Creating develop branch from current branch..."
    git checkout -b develop
    print_success "develop branch created"
fi

# Check if main branch exists
if ! git show-ref --verify --quiet refs/heads/main; then
    print_error "main branch doesn't exist!"
    exit 1
fi

# Save current branch
CURRENT_BRANCH=$(git branch --show-current)
print_status "Current branch: $CURRENT_BRANCH"

# Stash any uncommitted changes
if ! git diff-index --quiet HEAD --; then
    print_warning "You have uncommitted changes. Stashing them..."
    git stash push -m "Auto-stash before merge $(date)"
    STASHED=true
else
    STASHED=false
fi

# Function to restore state on error
cleanup_on_error() {
    print_error "Merge failed! Restoring previous state..."
    git checkout "$CURRENT_BRANCH"
    if [ "$STASHED" = true ]; then
        print_status "Restoring stashed changes..."
        git stash pop
    fi
    exit 1
}

# Fetch latest changes
print_status "Fetching latest changes from remote..."
if ! git fetch origin; then
    print_error "Failed to fetch from remote"
    cleanup_on_error
fi

# Switch to develop and pull latest
print_status "Switching to develop branch..."
if ! git checkout develop; then
    print_error "Failed to checkout develop branch"
    cleanup_on_error
fi

print_status "Pulling latest changes from develop..."
if ! git pull origin develop; then
    print_error "Failed to pull latest develop changes"
    cleanup_on_error
fi

# Switch to main and pull latest
print_status "Switching to main branch..."
if ! git checkout main; then
    print_error "Failed to checkout main branch"
    cleanup_on_error
fi

print_status "Pulling latest changes from main..."
if ! git pull origin main; then
    print_error "Failed to pull latest main changes"
    cleanup_on_error
fi

# Check if develop is ahead of main
BEHIND_COUNT=$(git rev-list --count main..develop)
if [ "$BEHIND_COUNT" -eq 0 ]; then
    print_warning "develop is not ahead of main. Nothing to merge."
    git checkout "$CURRENT_BRANCH"
    if [ "$STASHED" = true ]; then
        git stash pop
    fi
    exit 0
fi

print_status "develop is $BEHIND_COUNT commits ahead of main"

# Ask for confirmation
echo ""
print_status "About to merge develop into main. This will:"
echo "  • Merge $BEHIND_COUNT commits from develop to main"
echo "  • Push the changes to remote main"
echo "  • Trigger CI/CD deployment workflows"
echo ""
read -p "🤔 Do you want to continue? (y/N): " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    print_warning "Merge cancelled by user"
    git checkout "$CURRENT_BRANCH"
    if [ "$STASHED" = true ]; then
        git stash pop
    fi
    exit 0
fi

# Perform the merge
print_status "Merging develop into main..."
if ! git merge develop --no-ff -m "Merge develop to main - $(date '+%Y-%m-%d %H:%M:%S')"; then
    print_error "Merge failed due to conflicts!"
    print_status "Please resolve conflicts manually, then run:"
    print_status "  git add ."
    print_status "  git commit"
    print_status "  git push origin main"
    exit 1
fi

# Push to remote
print_status "Pushing merged changes to remote main..."
if ! git push origin main; then
    print_error "Failed to push to remote main"
    print_status "You may need to push manually: git push origin main"
    cleanup_on_error
fi

# Return to original branch
print_status "Returning to original branch: $CURRENT_BRANCH"
git checkout "$CURRENT_BRANCH"

# Restore stashed changes if any
if [ "$STASHED" = true ]; then
    print_status "Restoring stashed changes..."
    git stash pop
fi

print_success "✨ Successfully merged develop to main!"
print_status "🚀 CI/CD workflows should now be triggered"
print_status "📊 Check GitHub Actions: https://github.com/[username]/[repo]/actions"

echo ""
print_status "Summary:"
echo "  • Merged $BEHIND_COUNT commits from develop to main"
echo "  • Pushed changes to remote"
echo "  • Returned to branch: $CURRENT_BRANCH"
if [ "$STASHED" = true ]; then
    echo "  • Restored your stashed changes"
fi

print_success "🎉 Merge complete!"
