# PageForge - Next.js + Supabase + Once UI Starter

![PageForge](public/images/og/home.jpg)

[![Performance](https://img.shields.io/badge/Performance-A-brightgreen)](docs/PERFORMANCE-METRICS.md)
[![CI/CD](https://img.shields.io/badge/CI%2FCD-Production%20Ready-blue)](CI-SETUP-COMPLETE.md)
[![Security](https://img.shields.io/badge/Security-Audited-green)](.github/workflows/ci.yml)

## Tech Stack

- **Next.js 15** - Latest React framework with App Router
- **TypeScript** - Type safety and better developer experience
- **Supabase** - Backend-as-a-Service with authentication
- **Once UI** - Beautiful design system and components
- **Tailwind CSS** - Utility-first CSS framework

## Features

- 🔐 **Authentication**: Complete auth flow with Supabase (email/password + OAuth)
- 🎨 **Design System**: Once UI components for consistent, beautiful UI
- 🤖 **AI Section Generator**: Advanced AI-powered section generation system
- 📱 **Responsive**: Mobile-first responsive design
- 🚀 **Performance**: Optimized for speed with Next.js 15
- 🛡️ **Type Safe**: Full TypeScript support
- 🔧 **Developer Experience**: Hot reload, ESLint, and more
- 📊 **Performance Monitoring**: Enterprise-level performance analysis and monitoring
- 🚦 **Quality Gates**: Automated performance budgets and quality enforcement

## 📊 Performance Monitoring System

PageForge includes a comprehensive performance monitoring and analysis system that provides real-time insights into build performance, bundle optimization, and Core Web Vitals.

### 🎯 Performance Features

- **📦 Bundle Analysis**: Automated bundle size tracking with configurable budgets
- **🔍 Lighthouse CI**: Comprehensive performance auditing on every deployment
- **🧪 Core Web Vitals**: LCP, FID, and CLS monitoring with recommendations
- **📈 Performance Grading**: A-F grade system for deployment quality
- **🚨 Automated Alerts**: Performance regression detection and notifications
- **📊 Performance Dashboard**: Visual metrics and trend tracking
- **🎯 Performance Badges**: Dynamic README badges showing current performance

### 🏆 Performance Standards

| Metric | Target | Budget |
|--------|--------|--------|
| **Bundle Size** | < 750KB | Configurable |
| **Performance Score** | > 0.8 | Lighthouse CI |
| **Accessibility** | > 0.9 | WCAG Compliant |
| **Test Coverage** | > 80% | Automated |

### 📈 Performance Analysis

Every deployment includes:
- Pre-deployment performance gates
- Real-time post-deployment monitoring
- Bundle size optimization recommendations
- Core Web Vitals analysis
- Security performance scanning

See [Performance Metrics Guide](docs/PERFORMANCE-METRICS.md) for detailed configuration and optimization tips.

## 🤖 GitHub Workflows & CI/CD

PageForge includes a production-ready GitHub Actions workflow system with enterprise-level performance monitoring and automated quality gates:

### 📋 Available Workflows

| Workflow | Trigger | Purpose | Performance Features |
|----------|---------|---------|---------------------|
| **Basic CI** | Push/PR to `main`/`develop` | Type check, lint, format, build | Bundle size tracking |
| **CI/CD Pipeline** | Push/PR to `main`/`develop` | Full testing matrix, security audit | Performance analysis |
| **Deploy Production** | Push to `main` or release | Production deployment + monitoring | **Full performance suite** |
| **Code Quality** | Push/PR to `main`/`develop` | Biome linting/formatting + auto-fix | Code performance checks |
| **Auto Merge** | Manual trigger | Automated develop→main merging | Quality gate validation |

### 🚀 Enhanced Deploy Workflow

The production deployment workflow now includes:

#### **Pre-Deployment Gates**
- ✅ Security audit and dependency checks
- ✅ Code quality validation (TypeScript, linting, formatting)
- ✅ Performance analysis with Lighthouse CI
- ✅ Bundle size budget enforcement (750KB default)
- ⚠️ Performance score validation (0.8 threshold)

#### **Post-Deployment Monitoring**
- 📊 Real-time performance monitoring (3 minutes)
- 🎯 Performance grading system (A-F scale)
- 📈 Core Web Vitals tracking
- 🚨 Automated performance alerts
- 📊 Performance dashboard generation

#### **Reporting & Badges**
- 📊 Comprehensive GitHub Actions summaries
- 🎯 Dynamic performance badges for README
- 📈 Performance trend tracking
- 📋 Optimization recommendations

### 🔧 Development Scripts

Enhanced npm scripts for performance monitoring:

```bash
# Performance Analysis
npm run analyze              # Generate bundle analysis
npm run analyze:browser      # Browser-specific analysis
npm run analyze:server       # Server-specific analysis

# Code Quality (includes performance checks)
npm run code-quality          # Type check + lint + format check + build
npm run code-quality:fix      # Type check + lint fix + format fix

# Testing & Coverage
npm run test                 # Run tests
npm run test:coverage        # Generate coverage report
npm run test:watch          # Watch mode testing

# Individual Quality Checks
npm run type-check           # TypeScript type checking
npm run lint                 # Biome linting
npm run lint:fix            # Biome lint with auto-fix
npm run format:check        # Biome format checking
npm run format:fix          # Biome format with auto-fix

# Build & Deploy
npm run build               # Next.js production build with metrics
npm run deploy:vercel       # Manual Vercel deployment
```

### 🛡️ Quality Gates & Performance Budgets

All workflows include comprehensive quality gates:

#### **Code Quality Gates**
- ✅ TypeScript type checking
- ✅ Biome linting (ESLint rules)
- ✅ Code formatting validation
- ✅ Next.js build success
- ✅ Environment variable validation

#### **Performance Gates**
- 📦 Bundle size budget enforcement (750KB)
- 🔍 Lighthouse performance score (>0.8)
- 🧪 Core Web Vitals compliance
- 🛡️ Security audit (audit-level: moderate)
- 📊 Test coverage threshold (>80%)

#### **Deployment Gates**
- 🚀 Pre-deployment performance validation
- 📊 Post-deployment monitoring
- 🎯 Performance grade calculation
- 🚨 Automated rollback recommendations

### 📊 Performance Monitoring Features

#### **Custom GitHub Actions**
- `.github/actions/performance-analysis/` - Comprehensive bundle and Lighthouse analysis
- `.github/actions/performance-monitoring/` - Real-time post-deployment monitoring
- `.github/actions/security-audit/` - Enhanced security scanning
- `.github/actions/code-quality/` - Integrated quality checks

#### **Monitoring Capabilities**
- **Bundle Analysis**: Webpack bundle analyzer integration
- **Lighthouse CI**: Automated performance auditing
- **Core Web Vitals**: LCP, FID, CLS tracking
- **Real-time Monitoring**: Post-deployment performance tracking
- **Performance Dashboard**: Visual metrics and recommendations

### 🎯 Performance Grading System

Each deployment receives a performance grade:

| Grade | Score Range | Status | Action |
|-------|-------------|--------|--------|
| **A** | 0.90 - 1.00 | ✅ Excellent | Deploy |
| **B** | 0.80 - 0.89 | 🟡 Good | Monitor |
| **C** | 0.70 - 0.79 | ⚠️ Acceptable | Optimize |
| **D** | 0.60 - 0.69 | 🔴 Poor | Review |
| **F** | 0.00 - 0.59 | 🚨 Critical | Fix |

### 🔐 Required Secrets

For full CI/CD functionality, configure these GitHub secrets:

```bash
# Vercel Deployment (Required)
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id

# Supabase (Optional - uses placeholders if not set)
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key

# Optional: Slack notifications
SLACK_WEBHOOK_URL=your_slack_webhook
```

### 🚀 Workflow Commands

#### Automatic Triggers
```bash
# Trigger Basic CI + Performance Analysis
git push origin develop

# Trigger Full CI/CD + Performance Monitoring
git push origin main

# Trigger Production Deployment + Full Performance Suite
git push origin main
git tag v1.0.0 && git push origin --tags
```

#### Manual Triggers
```bash
# Quick setup for new repositories
./scripts/setup-ci.sh

# Branch protection setup
./scripts/setup-branch-protection.sh

# Manual merge with performance validation
# Go to GitHub Actions → Auto Merge Develop to Main → Run workflow
```

### 💡 Performance Best Practices

1. **Monitor Budgets**: Keep bundle size under 750KB
2. **Watch Grades**: Maintain A/B performance grades
3. **Review Alerts**: Address performance warnings immediately
4. **Use Templates**: Leverage PageForge templates for optimal performance
5. **Check Trends**: Monitor performance over time in GitHub Actions

### 📈 Monitoring Dashboard

Access comprehensive performance data:
- **GitHub Actions Summaries**: Real-time metrics for each deployment
- **Performance Artifacts**: Detailed bundle analysis and Lighthouse reports
- **Trend Tracking**: Performance changes over time
- **Optimization Guides**: Automated recommendations for improvements

## Quick Start

1. **Clone and install dependencies:**

```bash
npm install
```

2. **Set up Supabase:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Create a `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

3. **Run the development server:**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app!

## Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── auth/           # Authentication pages
│   ├── login/          # Login page
│   └── page.tsx        # Home page
├── components/         # Reusable React components
│   └── universal-section/  # AI-powered section generation
│       ├── AISectionFactory.ts      # Core AI generation logic
│       ├── AutoSectionRegistry.ts   # Section registration system
│       ├── CustomSectionDemo.tsx    # Interactive demo component
│       └── CUSTOM_SECTIONS_GUIDE.md # Comprehensive documentation
├── lib/               # Utility functions and configurations
│   └── supabase/      # Supabase client configuration
└── once-ui/           # Once UI design system
```

## Authentication

The starter includes a complete authentication system:

- **Login/Signup**: Email and password authentication
- **OAuth**: Google sign-in (configurable)
- **Protected Routes**: Middleware for route protection
- **Session Management**: Automatic session handling

## Deployment

Deploy to Vercel with a single click:
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-repo%2Fpageforge)

Don't forget to add your environment variables in Vercel:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Once UI Documentation](https://docs.once-ui.com/once-ui/quick-start)

## Creators

Connect with us!

**Lorant One**: [Site](https://lorant.one) / [Threads](https://www.threads.net/@lorant.one) /
[LinkedIn](https://www.linkedin.com/in/lorant-one/)

**Zsofia Komaromi**: [Site](https://zsofia.pro) / [Threads](https://www.threads.net/@zsofia_kom) /
[LinkedIn](https://www.linkedin.com/in/zsofiakomaromi/)

## Become a Oncer

![Design Engineers Club](https://docs.once-ui.com/images/quasar-coding.jpg)

Join the [Design Engineers Club](https://discord.com/invite/5EyAQ4eNdS) on Discord to connect with
us and share your projects.

Found a bug? Report it
[here](https://github.com/once-ui-system/nextjs-starter/issues/new?labels=bug&template=bug_report.md).
Got a feature request? Submit it
[here](https://github.com/once-ui-system/nextjs-starter/issues/new?labels=feature%20request&template=feature_request.md).

## Sponsors

Once UI is an indie project. [Sponsor us](https://github.com/sponsors/once-ui-system) and get
featured on our site!

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.
