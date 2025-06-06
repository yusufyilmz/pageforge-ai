#!/bin/bash

# PageForge Git Workflow Helper
echo "🌟 PageForge Git Workflow Helper"

# Color codes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_menu() {
    echo ""
    echo -e "${BLUE}Available Git Workflows:${NC}"
    echo "1. 🔄 Merge develop to main (safe)"
    echo "2. ⚡ Quick merge develop to main"
    echo "3. 🌿 Create new feature branch"
    echo "4. 🔄 Switch to develop and pull latest"
    echo "5. 🔄 Switch to main and pull latest"
    echo "6. 📊 View branch status"
    echo "7. 🚀 Push current branch and create PR"
    echo "8. 🧹 Clean up merged branches"
    echo "0. 🚪 Exit"
    echo ""
}

create_feature_branch() {
    echo -n "Enter feature branch name (without 'feature/'): "
    read -r BRANCH_NAME
    if [ -n "$BRANCH_NAME" ]; then
        git checkout develop
        git pull origin develop
        git checkout -b "feature/$BRANCH_NAME"
        echo -e "${GREEN}✅ Created and switched to feature/$BRANCH_NAME${NC}"
    fi
}

switch_and_pull() {
    local branch=$1
    echo "Switching to $branch and pulling latest..."
    git checkout "$branch"
    git pull origin "$branch"
    echo -e "${GREEN}✅ Updated $branch${NC}"
}

view_status() {
    echo -e "${BLUE}Current branch:${NC} $(git branch --show-current)"
    echo -e "${BLUE}Status:${NC}"
    git status --short
    echo ""
    echo -e "${BLUE}Recent commits:${NC}"
    git log --oneline -5
}

push_and_pr() {
    local current_branch=$(git branch --show-current)
    git push origin "$current_branch"
    echo -e "${GREEN}✅ Pushed $current_branch${NC}"
    echo -e "${YELLOW}💡 Create PR: https://github.com/[username]/[repo]/compare/$current_branch${NC}"
}

cleanup_branches() {
    echo "Cleaning up merged branches..."
    git checkout main
    git pull origin main
    git branch --merged | grep -v "\*\|main\|develop" | xargs -n 1 git branch -d
    echo -e "${GREEN}✅ Cleaned up merged branches${NC}"
}

# Main menu loop
while true; do
    print_menu
    echo -n "Choose an option (0-8): "
    read -r choice

    case $choice in
        1)
            echo "🔄 Running safe merge..."
            ./scripts/merge-to-main.sh
            ;;
        2)
            echo "⚡ Running quick merge..."
            ./scripts/quick-merge.sh
            ;;
        3)
            create_feature_branch
            ;;
        4)
            switch_and_pull "develop"
            ;;
        5)
            switch_and_pull "main"
            ;;
        6)
            view_status
            ;;
        7)
            push_and_pr
            ;;
        8)
            cleanup_branches
            ;;
        0)
            echo "👋 Goodbye!"
            exit 0
            ;;
        *)
            echo "❌ Invalid option. Please choose 0-8."
            ;;
    esac

    echo ""
    echo "Press Enter to continue..."
    read -r
done
