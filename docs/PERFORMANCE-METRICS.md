# 📊 Performance Metrics & Analysis Guide

## 🎯 Overview

PageForge includes comprehensive performance monitoring and analysis throughout the deployment pipeline. This system provides real-time insights into build performance, bundle optimization, Core Web Vitals, and post-deployment monitoring.

## 🏗️ Performance Analysis Components

### 1. **Build Performance Analysis**
- **Bundle size tracking** with configurable budgets
- **Lighthouse CI audits** for comprehensive scoring
- **Core Web Vitals analysis** (LCP, FID, CLS)
- **Security performance scanning**
- **Test coverage analysis**

### 2. **Post-Deployment Monitoring**
- **Real-time performance monitoring** after deployment
- **Performance grade calculation** (A-F scale)
- **Automated alerting** for performance degradation
- **Performance dashboard generation**

### 3. **Performance Gates**
- **Budget enforcement** - Fails deployment if bundle exceeds limits
- **Score thresholds** - Warns if performance drops below targets
- **Automated recommendations** for optimization

## 📈 Metrics Collected

### Bundle Analysis
```bash
📦 Bundle Metrics:
- Total build size (.next directory)
- Static assets size
- JavaScript bundle composition
- Performance budget compliance (default: 750KB)
```

### Lighthouse Scores
```bash
🔍 Lighthouse Metrics:
- Performance Score (0-1)
- Accessibility Score (target: >0.9)
- Best Practices Score (target: >0.85)
- SEO Score (target: >0.9)
```

### Core Web Vitals
```bash
🧪 Core Web Vitals:
- Largest Contentful Paint (LCP): Target < 2.5s
- First Input Delay (FID): Target < 100ms
- Cumulative Layout Shift (CLS): Target < 0.1
```

### Test Coverage
```bash
🧪 Coverage Metrics:
- Line coverage percentage
- Function coverage
- Branch coverage
- Coverage threshold: 80%+
```

## 🎯 Performance Grading System

Your deployment receives an overall performance grade:

| Grade | Score Range | Description | Action Required |
|-------|-------------|-------------|-----------------|
| **A** | 0.90 - 1.00 | Excellent | ✅ None |
| **B** | 0.80 - 0.89 | Good | 🟡 Monitor |
| **C** | 0.70 - 0.79 | Acceptable | ⚠️ Optimize |
| **D** | 0.60 - 0.69 | Poor | 🔴 Review |
| **F** | 0.00 - 0.59 | Critical | 🚨 Fix Immediately |

## 🔧 Configuration

### Performance Budget
Customize in your deploy workflow:
```yaml
- name: Performance Analysis & Metrics
  uses: ./.github/actions/performance-analysis
  with:
    performance-budget: '750'  # Bundle size limit in KB
    lighthouse-audit: 'true'   # Enable Lighthouse
```

### Monitoring Duration
Configure post-deployment monitoring:
```yaml
- name: Post-Deployment Performance Monitoring
  uses: ./.github/actions/performance-monitoring
  with:
    performance-threshold: '0.8'  # Minimum acceptable score
    monitor-duration: '3'         # Minutes to monitor
```

## 📊 Available Scripts

Use these npm scripts for local performance analysis:

```bash
# Bundle analysis
npm run analyze              # Generate bundle analysis
npm run analyze:browser      # Browser-specific analysis
npm run analyze:server       # Server-specific analysis

# Performance testing
npm run test:coverage        # Generate coverage report
npm run build               # Production build with metrics

# Code quality (includes performance checks)
npm run code-quality        # Type check + lint + format + build
```

## 🎯 Performance Optimization Recommendations

### Bundle Size Optimization
1. **Code Splitting**: Use dynamic imports for large components
   ```typescript
   const HeavyComponent = dynamic(() => import('./HeavyComponent'))
   ```

2. **Tree Shaking**: Ensure unused code is eliminated
   ```typescript
   // ✅ Good: Named imports
   import { Button } from '@pageforge/once-ui/components'

   // ❌ Avoid: Default imports of large libraries
   import * as Icons from 'react-icons'
   ```

3. **Bundle Analysis**: Regular monitoring with webpack-bundle-analyzer
   ```bash
   npm run analyze
   ```

### Core Web Vitals Optimization
1. **Largest Contentful Paint (LCP)**
   - Use `next/image` for optimized images
   - Implement proper loading states
   - Optimize server response times

2. **First Input Delay (FID)**
   - Minimize JavaScript execution time
   - Use code splitting for non-critical code
   - Implement proper event handlers

3. **Cumulative Layout Shift (CLS)**
   - Define image dimensions
   - Reserve space for dynamic content
   - Use CSS transforms for animations

### PageForge-Specific Optimizations
1. **Template System**: Use efficient templates
   ```typescript
   // ✅ Use templates for 98% code reduction
   const config = developerTemplate(person, projects)
   ```

2. **Once UI Components**: Leverage optimized components
   ```typescript
   // ✅ Use Once UI for performance
   import { Flex, Text } from '@pageforge/once-ui/components'
   ```

3. **AI Section Generation**: Optimize generated sections
   ```typescript
   // Generate efficient sections
   const section = await AISectionFactory.generateSection({
     description: 'Lightweight contact form',
     optimizeForPerformance: true
   })
   ```

## 📈 Monitoring & Alerts

### Automated Alerts
- **Grade D/F**: Critical performance warning
- **Budget Exceeded**: Bundle size alert
- **Score Drop**: Performance regression notification

### Performance Dashboard
Access your performance dashboard in GitHub Actions artifacts:
- Bundle analysis reports
- Core Web Vitals summaries
- Performance trend tracking
- Optimization recommendations

### Performance Badges
Add to your README.md:
```markdown
![Performance](https://img.shields.io/badge/Performance-A-brightgreen)
```

## 🔍 Troubleshooting Performance Issues

### Common Issues & Solutions

1. **Large Bundle Size**
   ```bash
   # Analyze what's consuming space
   npm run analyze

   # Check for duplicate dependencies
   npm ls --depth=0
   ```

2. **Poor Lighthouse Score**
   ```bash
   # Run local Lighthouse audit
   npx lighthouse http://localhost:3000 --output html
   ```

3. **High CLS (Layout Shift)**
   - Add explicit dimensions to images
   - Reserve space for dynamic content
   - Use CSS containment

### Performance Debugging
```bash
# Local performance testing
npm run dev
npm run analyze

# Production build analysis
npm run build
npm run analyze:browser

# Coverage analysis
npm run test:coverage
```

## 🚀 Best Practices

1. **Regular Monitoring**: Check performance metrics with each deployment
2. **Budget Management**: Keep bundle size under 750KB for optimal performance
3. **Code Quality**: Maintain high test coverage (>80%)
4. **Optimization**: Use PageForge templates and Once UI components
5. **Progressive Enhancement**: Implement lazy loading and code splitting

## 📊 Performance Tracking

Track your performance over time:
- Monitor grade trends (A → B indicates regression)
- Track bundle size growth
- Watch Core Web Vitals changes
- Review Lighthouse score patterns

## 🎯 Next Steps

1. **Baseline**: Establish current performance metrics
2. **Monitor**: Watch trends in GitHub Actions summaries
3. **Optimize**: Use recommendations from automated reports
4. **Iterate**: Continuous improvement with each deployment

---

Generated for PageForge Performance Monitoring System
Last updated: $(date)
