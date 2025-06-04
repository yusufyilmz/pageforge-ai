# GitHub Copilot Instructions for PageForge

## 🎯 Project Overview

PageForge is a Next.js-based revolutionary page generation system with type-safe PageBuilder architecture that reduces code complexity by 98% (from 200+ lines to 1-3 lines).

## 🚀 Development Hierarchy (ALWAYS Follow This Order)

### 1. ✅ Templates First (98% of cases) - PREFERRED
Use profession-specific templates for standard pages:

```typescript
// ✅ BEST: Complete professional pages in 1-3 lines
import { developerTemplate, designerTemplate, freelancerTemplate } from '@/lib/services/page-builder'

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

### 2. ✅ PageBuilder Second (custom needs) - GOOD ALTERNATIVE
Use fluent API for unique requirements:

```typescript
import { PageBuilder, PageType } from '@/lib/services/page-builder'

const customPage = PageBuilder
  .create(PageType.ABOUT, '/about')
  .withTitle('About Me')
  .addHero({ title: "Hi, I'm John", subtitle: 'Developer' })
  .addExperience(experiences)
  .build()
```

### 3. ⚠️ Raw PageConfig Last Resort - AVOID UNLESS NECESSARY
Only for very specific complex requirements:

```typescript
import { PageConfig, PageType } from '@/lib/types/page/pageTypes'

const config: PageConfig = {
  pageType: PageType.ABOUT,
  metadata: { /* complex custom metadata */ }
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

  // PageBuilder for custom
  PageBuilder,
  PageType,

  // Type definitions
  type PersonData,
  type ProjectData
} from '@/lib/services/page-builder'
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
import { useTheme, useThemeUtils } from '@/contexts/ThemeContext'

// User data access
import { useUser, useUserProfile, useUserProjects } from '@/contexts/UserContext'

// Page utilities
import { PageMeta, PageSchema } from '@/components/utils'

// Types
import { PageConfig, ContentBlock, PageType } from '@/lib/types/page/pageTypes'
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
  const { getThemeClass } = useThemeUtils()

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

## 🛡️ Content Safety

### Real Data vs Examples
```typescript
// ✅ Use real user data
const person: PersonData = {
  name: 'John',           // Real name
  lastName: 'Smith',      // Real surname
  role: 'Developer',      // Real role
  bio: 'Actual bio...',   // Real bio
}

// ❌ Don't use example data in production
// name: 'Selene Yu' ❌ (example data)
```

### Example Data Detection
```typescript
import { createContentConfig } from '@/lib/services/new-page/content'

const content = createContentConfig(userContent)
// This warns if example data like "Selene Yu" is detected
```

## 🎯 File Organization

### Key Directories
- **Templates**: `src/lib/services/page-builder/templates.ts`
- **PageBuilder**: `src/lib/services/page-builder/PageBuilder.ts`
- **Types**: `src/lib/types/page/pageTypes.ts`
- **Components**: `src/components/` (use Once UI primitives)
- **Contexts**: `src/contexts/` (theme, user management)

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

1. **❌ Ignoring Templates**: Always try templates before PageBuilder
2. **❌ Custom Basic UI**: Use Once UI instead of creating custom buttons/flexbox
3. **❌ Example Data**: Never ship with "Selene Yu" or other example data
4. **❌ Legacy Configs**: Don't use old verbose pageConfigurations.tsx for new pages
5. **❌ Flat Metadata**: Use nested PageMetadataConfig structure

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

## 🎪 Code Generation Guidelines

### For New Features
1. Check if templates can handle it first
2. Use PageBuilder fluent API for custom logic
3. Only create raw PageConfig for complex edge cases
4. Always use Once UI components
5. Integrate with theme/user contexts
6. Use real data, never example data

### For Components
1. Import from Once UI design system
2. Use theme context for styling
3. Follow accessibility patterns
4. Add TypeScript types properly
5. Use discriminated unions for content blocks

### For AI Website Builder
1. Use chat interfaces for user interaction
2. Convert conversations to PageConfig using templates
3. Generate real websites, not code to copy
4. Integrate with existing PageBuilder system

## 🔧 Development Commands

```bash
# Development
npm run dev

# Type checking
npm run type-check

# Building
npm run build
```

## 💡 AI Assistance Focus Areas

When helping with PageForge:

1. **Page Creation**: Always suggest templates first, then PageBuilder
2. **UI Components**: Always recommend Once UI components
3. **Type Safety**: Use proper TypeScript types from pageTypes.ts
4. **Real Data**: Warn about example data usage
5. **Context Integration**: Suggest theme/user context usage
6. **Modern Patterns**: Avoid legacy verbose configurations

---

**Remember**: Templates → PageBuilder → Raw PageConfig (in that order!)

The goal is revolutionary simplicity: 98% code reduction while maintaining full type safety and professional quality.
