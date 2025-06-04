# PageForge Project Context

## Project Overview
PageForge is a Next.js-based page/website generation system that creates various types of pages (About, Blog, Gallery, Work, etc.) with different sections and structured content, metadata, and SEO optimization.

## Recently Completed: Type System Refactoring
We just completed a major refactoring of the type system to break down monolithic interfaces into smaller, focused types.

## Key Architecture

### UI Component Structure
- **`@pageforge/once-ui/components`** - Core UI components from Once UI design system
- **`src/components/`** - All section components and page components
  - Section components for content blocks (hero, features, experience, etc.)
  - Page-level components and layouts
  - Custom UI components built on top of Once UI

### Type System (`src/lib/types/page/pageTypes.ts`)
- **PageConfig<T>** - Main page configuration interface
- **PageMetadataConfig** - Nested metadata structure:
  - `basic: PageMetadata` - title, description, keywords
  - `openGraph: OpenGraphMetadata` - OG properties
  - `twitter: TwitterMetadata` - Twitter card properties
- **ContentBlock** - Discriminated union for 30+ section types
- **Enums**: PageType, SchemaType, OpenGraphType

### Theme System
#### Theme Types (`src/lib/types/site/`)
- **SiteThemeType** - Available theme variants:
  ```typescript
  'minimal' | 'bold' | 'dark' | 'playful' | 'elegant' | 'classic' |
  'futuristic' | 'natural' | 'luxury' | 'vintage' | 'creative'
  ```
- **ThemeConfig** - Complete theme configuration with:
  - `font: { primary, secondary, tertiary, code }` - Font definitions
  - `style: { theme, neutral, brand, accent, solid, border, surface, transition, scaling }`
  - `effects: { mask, gradient, dots, lines, grid }` - Visual effects

#### Theme Configuration (`src/lib/types/site/themeConfigs.ts`)
- Predefined theme configurations for all 11 theme types
- Font definitions using Next.js Google Fonts
- Style configurations with color schemes and UI behavior
- Visual effects for backgrounds, overlays, and animations

#### Layout System (`src/components/layout/Layout.tsx`)
- **GenericLayout** - Main layout component that:
  - Applies theme configurations to HTML/body
  - Sets up ThemeProvider and ToastProvider
  - Configures background effects (mask, gradient, dots, grid, lines)
  - Handles theme switching and system preferences

### Context System
#### Theme Context (`src/contexts/ThemeContext.tsx`)
- **ThemeProvider** - Manages theme state with priority:
  - Page theme overrides (highest priority)
  - User theme preferences
  - System theme (lowest priority)
- **Theme Hooks**:
  - `useTheme()` - Full theme management
  - `usePageTheme()` - Page-level theme overrides
  - `useUserTheme()` - User preference management
  - `useThemeUtils()` - Theme utilities and detection

#### User Context (`src/contexts/UserContext.tsx`)
- **UserProvider** - Manages user profile and preferences:
  - Profile information (name, role, avatar, location, etc.)
  - Social links, work experience, education, skills, projects
  - User preferences including theme settings
  - Statistics and metadata
- **User Hooks**:
  - `useUser()` - Full user data management
  - `useUserProfile()` - Profile information only
  - `useUserProjects()` - Project data with filtering
  - `useUserSkills()` - Skills with category filtering
  - `useUserSocialLinks()` - Social links management

### Page Utilities (`src/components/utils/`)
- **page-metadata.ts** - Generates Next.js Metadata objects
- **page-schema.tsx** - Creates structured data (JSON-LD) components
- Functions: `PageMeta.fromConfig()`, `PageSchema.fromConfig()`

### Content System (`src/lib/services/new-page/`)
- **pageConfigurations.tsx** - Page config factories
- **content.tsx** - Smart content management with example vs real data detection
- **createComprehensiveAboutPageConfig()** - Main page factory

## Current Implementation Status
✅ Refactored monolithic ContentPageConfig into focused interfaces
✅ Created nested metadata structure (basic/openGraph/twitter)
✅ Built reusable page utilities with type safety
✅ Maintained backward compatibility with ContentPageConfig
✅ Added enum-based typing for better DX
✅ Implemented comprehensive theme system with 11 predefined themes
✅ Created context system for theme and user management
✅ Built responsive layout system with Once UI integration

## Coding Patterns to Follow

### 1. Always use the new PageConfig<T> type for new features
```typescript
const config: PageConfig = {
  pageType: PageType.ABOUT,
  metadata: {
    basic: { title: "...", description: "..." },
    openGraph: { type: OpenGraphType.PROFILE, image: "..." },
    twitter: { card: 'summary_large_image' }
  }
}
```

### 2. Use discriminated unions for content blocks
```typescript
const block: ContentBlock = {
  type: 'hero',
  content: { title: "Welcome" }, // TypeScript knows this is HeroSectionContent
  display: true
}
```

### 3. Import UI components from Once UI
```typescript
// ✅ DO - Use Once UI components
import { Flex, Column, Text, Button } from '@pageforge/once-ui/components'

// ❌ DON'T - Create custom components for basic UI
import { CustomFlex } from '../ui/CustomFlex'
```

### 4. Use theme context for dynamic styling
```typescript
// ✅ DO - Use theme context
const { currentTheme, setPageTheme } = useTheme()
const { getThemeClass } = useThemeUtils()

// Apply theme-specific styling
<div className={getThemeClass()}>
```

### 5. Use user context for personalization
```typescript
// ✅ DO - Access user data through context
const { userInfo, updateProfile } = useUser()
const profile = useUserProfile()
const projects = useUserProjects(true) // featured only
```

### 6. Leverage utility functions
```typescript
const metadata = PageMeta.fromConfig(pageConfig, siteURL)
const schema = PageSchema.fromConfig(pageConfig, siteURL)
```

### 7. Content safety - always check for example data
```typescript
const content = createContentConfig(userContent)
// This will warn if example data like "Selene Yu" is detected
```

## File Structure
```
src/
├── lib/
│   ├── types/
│   │   ├── page/pageTypes.ts        # Core page type definitions
│   │   └── site/                    # Theme and site types
│   │       ├── siteThemes.ts        # SiteThemeType definitions
│   │       └── themeConfigs.ts      # Theme configurations
│   └── services/new-page/
│       ├── pageConfigurations.tsx   # Page factories
│       └── content.tsx              # Content management
├── components/
│   ├── layout/
│   │   └── Layout.tsx               # GenericLayout component
│   ├── utils/                       # Reusable page utilities
│   │   ├── page-metadata.ts
│   │   ├── page-schema.tsx
│   │   └── index.ts
│   └── [sections]/                  # All section components
├── contexts/
│   ├── ThemeContext.tsx             # Theme management
│   └── UserContext.tsx              # User data management
└── @pageforge/once-ui/              # Once UI design system
    └── components/                  # Core UI components
```

## Theme System Guide

### Available Themes
```typescript
type SiteThemeType =
  | 'minimal'     // Clean, light theme with subtle effects
  | 'bold'        // Vibrant, high-contrast with strong effects
  | 'dark'        // Dark mode with cyan/blue accents
  | 'playful'     // Fun, colorful with pink/yellow palette
  | 'elegant'     // Sophisticated with serif fonts
  | 'classic'     // Traditional, conservative styling
  | 'futuristic'  // Sci-fi aesthetic with neon effects
  | 'natural'     // Earth tones with organic feel
  | 'luxury'      // Premium look with gold accents
  | 'vintage'     // Retro styling with warm colors
  | 'creative'    // Artistic, experimental design
```

### Theme Configuration Structure
```typescript
interface ThemeConfig {
  font: {
    primary: NextFont    // Main text font
    secondary: NextFont  // Heading font
    tertiary: NextFont   // Display font
    code: NextFont       // Monospace font
  }
  style: {
    theme: 'dark' | 'light'
    neutral: 'sand' | 'gray' | 'slate'
    brand: BrandColor     // Primary brand color
    accent: AccentColor   // Secondary accent color
    solid: 'color' | 'contrast' | 'inverse'
    solidStyle: 'flat' | 'plastic'
    border: 'rounded' | 'playful' | 'conservative'
    surface: 'filled' | 'translucent'
    transition: 'all' | 'micro' | 'macro'
    scaling: '90' | '95' | '100' | '105' | '110'
  }
  effects: {
    mask: { cursor, x, y, radius }
    gradient: { display, x, y, width, height, tilt, colors, opacity }
    dots: { display, size, color, opacity }
    lines: { display, color, opacity, thickness, angle, size }
    grid: { display, color, opacity, width, height }
  }
}
```

### Context Usage Patterns
```typescript
// Theme management
const { currentTheme, setPageTheme } = useTheme()
const { userTheme, updateUserTheme } = useUserTheme()

// User data access
const { userInfo, updateProfile } = useUser()
const profile = useUserProfile()
const skills = useUserSkills('Frontend Development')
const featuredProjects = useUserProjects(true)
```

## Important Notes
- Use PageConfig<T> for new code, ContentPageConfig<T> is legacy
- All page utilities expect the new nested metadata structure
- Example data detection prevents shipping fake content like "Selene Yu"
- Type system provides full autocomplete for content blocks
- Use Once UI components for all basic UI elements
- Theme system supports both user preferences and page-level overrides
- User context provides complete profile management with type safety
- Maintain backward compatibility when making changes

## Common Tasks
- Creating new page types: Extend PageConfig and add to enum
- Adding content blocks: Add to ContentBlock discriminated union
- Generating metadata: Use PageMeta.fromConfig()
- Adding structured data: Use PageSchema.fromConfig()
- Content management: Use createContentConfig() with real data
- Theme customization: Use ThemeContext for dynamic styling
- User personalization: Use UserContext for profile-based content
- UI components: Import from @pageforge/once-ui/components
- Section components: Create in src/components/ using Once UI primitives
