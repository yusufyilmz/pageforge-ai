# 🛡️ GitHub Branch Protection Setup Guide

## Quick Setup (Automated)

If you have GitHub CLI installed:

```bash
# Install GitHub CLI if needed
brew install gh

# Authenticate
gh auth login

# Run the setup script
npm run setup-branch-protection
```

## Manual Setup (GitHub Web Interface)

### 1. Navigate to Branch Protection Settings

1. Go to your GitHub repository
2. Click **Settings** tab
3. Click **Branches** in the left sidebar
4. Click **Add rule** button

### 2. Main Branch Protection (Production)

**Branch name pattern:** `main`

**Protection Rules to Enable:**

✅ **Require a pull request before merging**

- Required number of approvals before merging: `1`
- ✅ Dismiss stale PR approvals when new commits are pushed
- ✅ Require review from code owners

✅ **Require status checks to pass before merging**

- ✅ Require branches to be up to date before merging
- **Required status checks:**
  - `ci` (from .github/workflows/ci.yml)
  - `code-quality` (from .github/workflows/code-quality.yml)
  - `build` (if you have separate build workflow)

✅ **Require conversation resolution before merging**

✅ **Restrict pushes that create files**

✅ **Do not allow bypassing the above settings**

✅ **Include administrators**

### 3. Develop Branch Protection (Integration)

**Branch name pattern:** `develop`

**Protection Rules to Enable:**

✅ **Require status checks to pass before merging**

- ✅ Require branches to be up to date before merging
- **Required status checks:**
  - `ci`
  - `code-quality`

✅ **Require conversation resolution before merging**

⚠️ **Optional:** Require pull request reviews

- Enable this if you want feature branches to require PR approval
- Leave disabled if you want direct pushes to develop for quick iteration

### 4. Create CODEOWNERS File (Optional but Recommended)

Create `.github/CODEOWNERS`:

```bash
# PageForge Code Owners
# These users will be requested for review when PRs are opened

# Global owners (for all files)
* @yourusername

# Critical files require explicit approval
package.json @yourusername
tsconfig.json @yourusername
next.config.mjs @yourusername

# CI/CD workflows
.github/ @yourusername

# Database migrations
supabase/migrations/ @yourusername

# Core services
src/lib/services/ @yourusername
src/contexts/ @yourusername
```

## 🎯 Recommended Workflow

### Feature Development

```bash
# Create feature branch from develop
git checkout develop
git pull origin develop
git checkout -b feature/awesome-feature

# Work on feature...
git add .
git commit -m "Add awesome feature"
git push origin feature/awesome-feature

# Create PR: feature/awesome-feature → develop
# After PR approval and CI passes, merge
```

### Release to Production

```bash
# Use your merge scripts
npm run merge-to-main
# or
npm run quick-merge

# Or via GitHub Actions
# Go to Actions → "Manual Merge Develop to Main" → Run workflow
```

### Hotfixes

```bash
# Create hotfix from main
git checkout main
git pull origin main
git checkout -b hotfix/critical-bug

# Fix the bug...
git add .
git commit -m "Fix critical bug"
git push origin hotfix/critical-bug

# Create PR: hotfix/critical-bug → main
# After approval, merge directly to main
# Then merge main back to develop
git checkout develop
git merge main
git push origin develop
```

## 🚨 Important Notes

1. **Status Checks:** Branch protection only works after you've pushed to the branches and CI
   workflows have run at least once

2. **First Push:** The first push to `main` and `develop` might need to be done with `--force` or by
   temporarily disabling protection

3. **Emergency Access:** Keep "Include administrators" enabled but know you can bypass rules if
   absolutely necessary

4. **CI Requirements:** Make sure your CI workflows are stable before enabling required status
   checks

## 🔍 Verification

After setup, verify your protection rules:

1. Go to `https://github.com/yourusername/yourrepo/settings/branches`
2. Check that both `main` and `develop` show protection rules
3. Try to push directly to main (should be blocked)
4. Verify CI checks are required

## 🎉 Benefits

With branch protection enabled:

- ✅ No accidental direct pushes to main
- ✅ All code changes go through CI
- ✅ Code reviews are enforced
- ✅ Build failures block merges
- ✅ Consistent code quality
- ✅ Safe deployment process

Your repository is now enterprise-ready with proper GitFlow protection! 🚀
