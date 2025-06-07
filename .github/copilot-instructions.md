# GitHub Copilot Instructions for PageForge

## 🎯 Project Overview

PageForge is a revolutionary Next.js-based page generation system with type-safe PageBuilder
architecture that reduces code complexity by 98% (from 200+ lines to 1-3 lines). It combines Next.js
15, Supabase, Once UI design system, and advanced AI-powered section generation.

## 🚀 Development Hierarchy (ALWAYS Follow This Order)

### 1. ✅ Templates First (98% of cases) - PREFERRED

Use profession-specific templates for standard pages:

```typescript
// ✅ BEST: Complete professional pages in 1-3 lines
import {
  developerTemplate,
  designerTemplate,
  freelancerTemplate
} from '@pageforge/lib/services/page-builder'

// Developer portfolio (1 line!)
const portfolio = developerTemplate(person, projects)

// Designer portfolio with masonry layout
const design = designerTemplate(person, projects)

// Freelancer landing page with CTA
const landing = freelancerTemplate(person)

// Custom about page (3 lines)
const about = createAboutPageFromTemplate({
  person: { name: 'John', lastName: 'Doe', role: 'Developer' },
  projects: myProjects,
  sections: ['hero', 'projects', 'skills']
})
```

### 2. ✅ TemplateBuilder Second (fluent API) - NEW PREFERRED

Use fluent API for discoverable template building:

```typescript
import { TemplateBuilder, Template } from '@pageforge/lib/services/page-builder'

// Fluent API for templates - Best of both worlds!
const customPage = TemplateBuilder.developer(person, projects)
  .withSkills(additionalSkills)
  .withSections(['hero', 'projects', 'skills', 'contact'])
  .build()

// Or use shorthand
const portfolio = Template.about(person).withProjects(projects).withExperience(experiences).build()
```

### 3. ✅ PageBuilder Third (custom needs) - GOOD ALTERNATIVE

Use fluent API for unique requirements:

```typescript
import { PageBuilder, PageType } from '@pageforge/lib/services/page-builder'

const customPage = PageBuilder.create(PageType.ABOUT, '/about')
  .withTitle('About Me')
  .addHero({ title: "Hi, I'm John", subtitle: 'Developer' })
  .addExperience(experiences)
  .build()
```

### 4. ⚠️ Raw PageConfig Last Resort - AVOID UNLESS NECESSARY

Only for very specific complex requirements:

```typescript
import { PageConfig, PageType } from '@pageforge/lib/types/page/pageTypes'

const config: PageConfig = {
  pageType: PageType.ABOUT,
  metadata: {
    /* complex custom metadata */
  }
}
```

## 📦 Import Patterns

### PageBuilder System (Primary)

```typescript
import {
  // Quick templates (use first!)
  developerTemplate,
  designerTemplate,
  freelancerTemplate,

  // Flexible templates
  createAboutPageFromTemplate,
  createBlogPageFromTemplate,
  createPortfolioPageFromTemplate,
  createLandingPageFromTemplate,

  // TemplateBuilder for fluent API
  TemplateBuilder,
  Template,

  // PageBuilder for custom
  PageBuilder,
  PageType,

  // Type definitions
  type PersonData,
  type ProjectData,
  type ExperienceData,
  type SkillData,
  type SocialLinkData
} from '@pageforge/lib/services/page-builder'
```

### Contextual Templates (Advanced)

```typescript
// React hooks for contextual templates
import {
  useContextualTemplates,
  useDeveloperTemplate,
  useAboutTemplate
} from '@pageforge/lib/hooks/useContextualTemplates'

// Contextual builders
import {
  ContextualTemplateBuilder,
  ContextualPageBuilder
} from '@pageforge/lib/services/page-builder/ContextualTemplateBuilder'
```

### UI Components (Use Once UI)

```typescript
// ✅ Always use Once UI design system
import { Flex, Column, Text, Button, Heading, Grid, Input } from '@pageforge/once-ui/components'

// ❌ Don't create custom basic components
```

### Context & Utilities

```typescript
// Theme management
import { useTheme, useThemeUtils, usePageTheme, useUserTheme } from '@pageforge/contexts/ThemeContext'

// User data access
import { useUser, useUserProfile, useUserProjects } from '@pageforge/contexts/UserContext'

// Page utilities
import { PageMeta, PageSchema } from '@pageforge/components/utils'

// Types
import { PageConfig, ContentBlock, PageType } from '@pageforge/lib/types/page/pageTypes'
```

## 🎨 UI Component Patterns

### ✅ DO: Use Once UI Components

```typescript
const MyComponent = () => (
  <Flex direction="column" gap="l">
    <Heading variant="display-strong-m">Title</Heading>
    <Text variant="body-default-l">Content</Text>
    <Button variant="primary">Action</Button>
  </Flex>
)
```

### ❌ DON'T: Create Custom Basic Components

```typescript
// ❌ Avoid this
const CustomButton = ({ children }) => <button>{children}</button>
```

## 🎭 Context Usage

### Theme Management

```typescript
const MyComponent = () => {
  const { currentTheme, setPageTheme } = useTheme()
  const { getThemeClass, isDark } = useThemeUtils()
  const { setTheme } = usePageTheme()

  return <div className={getThemeClass()}>Themed content</div>
}
```

### User Data Access

```typescript
const MyComponent = () => {
  const { userInfo, updateProfile } = useUser()
  const profile = useUserProfile()
  const featuredProjects = useUserProjects(true) // featured only

  return <div>{profile.name}</div>
}
```

### Contextual Templates with Hooks

```typescript
const MyPage = () => {
  const { userInfo } = useUser()
  const userProjects = useUserProjects()
  const { currentTheme } = useTheme()

  // Get all template methods with context auto-loaded
  const templates = useContextualTemplates(userInfo, userProjects, currentTheme)

  // Choose any template - all use context automatically
  const config = templates.developer() // or .designer(), .freelancer(), etc.

  return <UniversalPage config={config} />
}
```

## 🛡️ Content Safety

### Real Data vs Examples

```typescript
// ✅ Use real user data
const person: PersonData = {
  name: 'John', // Real name
  lastName: 'Smith', // Real surname
  role: 'Developer', // Real role
  bio: 'Actual bio...' // Real bio
}

// ❌ Don't use example data in production
// name: 'Selene Yu' ❌ (example data)
```

### Example Data Detection

```typescript
import { createContentConfig } from '@pageforge/lib/services/new-page/content'

const content = createContentConfig(userContent)
// This warns if example data like "Selene Yu" is detected
```

## 🎯 File Organization

### Key Directories

- **Templates**: `src/lib/services/page-builder/templates.ts`
- **TemplateBuilder**: `src/lib/services/page-builder/TemplateBuilder.ts`
- **PageBuilder**: `src/lib/services/page-builder/PageBuilder.ts`
- **Contextual**: `src/lib/services/page-builder/ContextualTemplateBuilder.ts`
- **Types**: `src/lib/types/page/pageTypes.ts`
- **Components**: `src/components/` (use Once UI primitives)
- **Contexts**: `src/contexts/` (theme, user management)
- **AI Sections**: `src/components/universal-section/`

### Creating New Content Blocks

```typescript
// Add to types first
export type ContentBlock =
  | { type: 'hero', content: HeroSectionContent }
  | { type: 'my-new-section', content: MyNewSectionContent } // Add here

// Then create component
export const MySection = ({ content }: { content: MySectionContent }) => (
  <Flex direction="column" gap="m">
    <Text>{content.title}</Text>
  </Flex>
)
```

## 🚫 Anti-Patterns (Never Do These)

1. **❌ Ignoring Templates**: Always try templates before TemplateBuilder/PageBuilder
2. **❌ Custom Basic UI**: Use Once UI instead of creating custom buttons/flexbox
3. **❌ Example Data**: Never ship with "Selene Yu" or other example data
4. **❌ Legacy Configs**: Don't use old verbose pageConfigurations.tsx for new pages
5. **❌ Flat Metadata**: Use nested PageMetadataConfig structure
6. **❌ Skipping TemplateBuilder**: Use TemplateBuilder fluent API before raw PageBuilder

## 📊 Template Selection Guide

Choose templates based on user needs:

### Professional Types

```typescript
// Developer/Engineer
const page = developerTemplate(person, projects)
// Includes: React, Node.js, TypeScript skills

// Designer/Creative
const page = designerTemplate(person, projects)
// Includes: Figma, Adobe tools, masonry layout

// Freelancer/Service Provider
const page = freelancerTemplate(person)
// Includes: CTA, services, testimonials

// Custom Requirements
const page = createAboutPageFromTemplate({
  person,
  projects,
  sections: ['hero', 'projects', 'skills'] // Choose sections
})
```

### TemplateBuilder Fluent API

```typescript
// Developer with customization
const dev = TemplateBuilder.developer(person, projects)
  .withSkills(additionalSkills)
  .withExperience(workHistory)
  .build()

// Designer portfolio
const design = Template.designer(person, projects)
  .withPortfolioOptions({ layout: 'masonry', columns: 3 })
  .build()

// Custom about page
const about = TemplateBuilder.about(person)
  .withProjects(projects)
  .withSections(['hero', 'projects', 'contact'])
  .build()

// Blog setup
const blog = Template.blog('My Tech Blog', 'Thoughts on development', person)
  .withBlogOptions({ layout: 'grid', withSidebar: true })
  .build()
```

## 🤖 AI Section Generation

PageForge includes advanced AI-powered section generation:

### Usage Pattern

```typescript
import { AISectionFactory } from '@pageforge/components/universal-section/AISectionFactory'

// Generate sections from natural language
const section = await AISectionFactory.generateSection({
  description: 'Create a team section with member photos and bios',
  context: { teamMembers: userData.team }
})
```

### Available Patterns

- **Basic Sections**: Team showcases, galleries, contact forms, FAQs
- **Interactive**: Pricing calculators, product configurators, progress tracking
- **Industry-Specific**: E-commerce catalogs, real estate listings, portfolios

## 🔧 Development Commands

```bash
# Development
npm run dev

# Development with Turbopack
npm run dev:turbo

# Type checking
npm run type-check
npm run type-check:watch

# Code quality
npm run code-quality
npm run code-quality:fix

# Supabase
npm run supabase:start
npm run supabase:gen-types

# AI Section generation
npm run generate-section

# Building
npm run build
```

## 💡 AI Assistance Focus Areas

When helping with PageForge:

1. **Page Creation**: Always suggest templates first, then TemplateBuilder, then PageBuilder
2. **UI Components**: Always recommend Once UI components
3. **Type Safety**: Use proper TypeScript types from pageTypes.ts
4. **Real Data**: Warn about example data usage
5. **Context Integration**: Suggest theme/user context usage
6. **Modern Patterns**: Avoid legacy verbose configurations
7. **Fluent APIs**: Prefer TemplateBuilder over raw PageBuilder when possible

## 🎯 Example Implementations

### Complete Developer Portfolio (1 line)

```typescript
const config = developerTemplate(person, projects)
```

### Custom About Page (3 lines)

```typescript
const config = createAboutPageFromTemplate({
  person,
  projects,
  experiences,
  skills,
  socialLinks,
  sections: ['hero', 'experience', 'skills', 'projects', 'contact']
})
```

### Fluent Template Building (2-4 lines)

```typescript
const config = TemplateBuilder.about(person)
  .withProjects(projects)
  .withSections(['hero', 'projects', 'skills'])
  .build()
```

### Contextual Templates with Auto-Context

```typescript
const templates = useContextualTemplates(userInfo, userProjects, currentTheme)
const config = templates.developer() // Uses context automatically
```

### Multi-Page Site (10 lines total)

```typescript
const site = {
  home: freelancerTemplate(person),
  about: TemplateBuilder.developer(person, projects).build(),
  blog: Template.blog('My Blog', 'Thoughts', person).build()
}
```

## 🎪 Tech Stack Integration

### Next.js 15 Features

- App Router with server components
- Advanced caching strategies
- Image optimization with Sharp

### Supabase Integration

- Authentication flows
- Real-time data sync
- Type-safe database queries

### Once UI Design System

- Comprehensive component library
- Theme system integration
- Accessibility compliance

### AI Capabilities

- Natural language section generation
- Smart content suggestions
- Pattern recognition for UI components

---

**Remember**: Templates → TemplateBuilder → PageBuilder → Raw PageConfig (in that order!)

The goal is revolutionary simplicity: 98% code reduction while maintaining full type safety and
professional quality.
