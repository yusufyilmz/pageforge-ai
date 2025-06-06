#!/bin/bash

# PageForge - GitHub Branch Protection Setup Script
echo "🛡️ Setting up GitHub branch protection rules..."

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m'

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

# Check if GitHub CLI is installed
if ! command -v gh &> /dev/null; then
    print_error "GitHub CLI (gh) is not installed"
    print_status "Install it with: brew install gh"
    print_status "Or visit: https://cli.github.com/"
    exit 1
fi

# Check if user is authenticated
if ! gh auth status &> /dev/null; then
    print_error "Not authenticated with GitHub CLI"
    print_status "Run: gh auth login"
    exit 1
fi

# Get repository info
REPO=$(gh repo view --json owner,name -q '.owner.login + "/" + .name')
if [ -z "$REPO" ]; then
    print_error "Not in a GitHub repository or unable to detect repo"
    exit 1
fi

print_status "Setting up branch protection for repository: $REPO"

# Main branch protection
print_status "🔒 Setting up MAIN branch protection..."
gh api repos/$REPO/branches/main/protection \
    --method PUT \
    --field required_status_checks='{"strict":true,"contexts":["ci","code-quality"]}' \
    --field enforce_admins=true \
    --field required_pull_request_reviews='{"required_approving_review_count":1,"dismiss_stale_reviews":true,"require_code_owner_reviews":true}' \
    --field restrictions=null \
    --field allow_force_pushes=false \
    --field allow_deletions=false \
    --field block_creations=false \
    --field required_conversation_resolution=true \
    > /dev/null 2>&1

if [ $? -eq 0 ]; then
    print_success "Main branch protection configured"
else
    print_warning "Main branch protection setup failed (branch might not exist yet)"
fi

# Develop branch protection
print_status "🔒 Setting up DEVELOP branch protection..."
gh api repos/$REPO/branches/develop/protection \
    --method PUT \
    --field required_status_checks='{"strict":true,"contexts":["ci","code-quality"]}' \
    --field enforce_admins=false \
    --field required_pull_request_reviews=null \
    --field restrictions=null \
    --field allow_force_pushes=false \
    --field allow_deletions=false \
    --field block_creations=false \
    --field required_conversation_resolution=true \
    > /dev/null 2>&1

if [ $? -eq 0 ]; then
    print_success "Develop branch protection configured"
else
    print_warning "Develop branch protection setup failed (branch might not exist yet)"
fi

# Create CODEOWNERS file if it doesn't exist
if [ ! -f .github/CODEOWNERS ]; then
    print_status "📝 Creating CODEOWNERS file..."
    mkdir -p .github
    cat > .github/CODEOWNERS << EOF
# PageForge Code Owners
# These users will be requested for review when PRs are opened

# Global owners (for all files)
* @$(gh api user -q .login)

# Critical files require explicit approval
package.json @$(gh api user -q .login)
package-lock.json @$(gh api user -q .login)
tsconfig.json @$(gh api user -q .login)
next.config.mjs @$(gh api user -q .login)

# CI/CD workflows
.github/ @$(gh api user -q .login)

# Database migrations
supabase/migrations/ @$(gh api user -q .login)

# Core services
src/lib/services/ @$(gh api user -q .login)
src/contexts/ @$(gh api user -q .login)
EOF
    print_success "CODEOWNERS file created"
fi

print_success "🎉 Branch protection setup complete!"
print_status ""
print_status "📋 Summary of protection rules:"
print_status "├── MAIN branch:"
print_status "│   ├── Requires PR with 1 approval"
print_status "│   ├── Requires CI checks to pass"
print_status "│   ├── Dismisses stale reviews"
print_status "│   ├── Requires code owner reviews"
print_status "│   └── Blocks direct pushes"
print_status "├── DEVELOP branch:"
print_status "│   ├── Requires CI checks to pass"
print_status "│   ├── Allows direct pushes (for quick iteration)"
print_status "│   └── Requires conversation resolution"
print_status "└── CODEOWNERS file created for review assignments"
print_status ""
print_warning "⚠️  Note: Protection rules only apply after the first push to these branches"
print_status "💡 View rules: https://github.com/$REPO/settings/branches"
