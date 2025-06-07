# 🚀 CI/CD Workflows Guide

This directory contains GitHub Actions workflows for automated testing, code quality, and
deployment.

## 📁 Workflow Files

### Core Workflows

- **`ci.yml`** - Complete CI/CD pipeline (runs on push/PR to main/develop)
- **`basic-ci.yml`** - Minimal checks (type-check, lint, format, build)
- **`deploy.yml`** - Production deployment to Vercel (runs on push to main)

### Utility Workflows

- **`code-quality.yml`** - Auto-fix formatting and linting issues
- **`test-setup.yml`** - Sets up testing framework (manual trigger)

### Configuration

- **`../dependabot.yml`** - Automated dependency updates

## 🔧 Setup Instructions

### 1. Repository Secrets

Go to **Settings → Secrets and variables → Actions** and add:

#### Required for Deployment:

```
VERCEL_TOKEN=your_vercel_api_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id
```

#### Optional (for Supabase):

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

- ✅ Biome formatting checks
- 🤖 Auto-fix issues on develop branch

### 3. Full CI/CD Pipeline (`ci.yml`)

**Triggers:** Push/PR to main/develop branches **Purpose:** Complete testing and validation

- ✅ Multi-Node.js version testing (18.x, 20.x)
- ✅ Security audits
- ✅ Performance checks
- ✅ Supabase integration tests
- ✅ Build artifacts upload
- 🚀 Preview deployments for PRs

### 4. Production Deploy (`deploy.yml`)

**Triggers:** Push to main branch, releases **Purpose:** Production deployment

- ✅ Final validation checks
- 🚀 Deploy to Vercel production
- 📢 Deployment notifications

## Setup Requirements

### Required Secrets

Add these secrets in your GitHub repository settings (`Settings > Secrets and variables > Actions`):

```bash
# Vercel deployment (optional)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_vercel_org_id
VERCEL_PROJECT_ID=your_vercel_project_id

# Supabase (if using remote instance)
SUPABASE_URL=your_supabase_url
SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Branch Protection Rules

Recommended branch protection for `main`:

1. Require status checks to pass
2. Require branches to be up to date
3. Include administrators
4. Required status checks:
   - `Test & Build`
   - `Code Quality Check`

## Workflow Features

### 🤖 Auto-fixing

- Automatically fixes linting and formatting issues
- Commits changes with `[skip ci]` to avoid infinite loops
- Only runs on `develop` branch and `fix/*` branches

### 📊 Performance Monitoring

- Bundle size analysis
- Build performance metrics
- Coverage reporting (when tests are implemented)

### 🔒 Security

- npm audit for vulnerabilities
- Dependency version checks
- SAST scanning ready

### 🚀 Deployment

- Preview deployments for PRs
- Production deployment on main branch
- Build artifact retention

## Usage Examples

### For Development

```bash
# Push to develop - triggers auto-fix
git push origin develop

# Create PR - triggers preview deployment
git checkout -b feature/new-feature
git push origin feature/new-feature
```

### For Production

```bash
# Push to main - triggers production deployment
git checkout main
git merge develop
git push origin main
```

### Manual Trigger

```bash
# Re-run workflows manually from GitHub Actions tab
# Useful for flaky tests or deployment retries
```

## Customization

### Adding New Checks

1. Add steps to appropriate workflow
2. Update required status checks in branch protection
3. Consider impact on development velocity

### Disabling Features

- Comment out unwanted jobs
- Set `continue-on-error: true` for optional steps
- Use `if: false` to temporarily disable

### Environment-specific Configs

- Use different secrets for staging/production
- Conditional deployment based on branch names
- Environment-specific build configurations

## Monitoring

### Success Indicators

- ✅ All checks pass
- 🚀 Successful deployments
- 📊 Performance metrics within thresholds

### Failure Responses

- 📧 GitHub notifications for failed workflows
- 🔍 Check workflow logs for details
- 🛠️ Use auto-fix for code quality issues

## Best Practices

1. **Keep workflows fast** - Parallel jobs, efficient caching
2. **Fail fast** - Put quick checks first
3. **Use caching** - Node modules, build artifacts
4. **Secure secrets** - Never log sensitive data
5. **Monitor performance** - Track workflow execution times
