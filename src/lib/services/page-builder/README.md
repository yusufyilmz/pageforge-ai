# PageBuilder & Template System 🚀

**Revolutionary page creation system that reduces boilerplate by 90%!**

Transform from 200+ lines of complex configuration to just 3-5 lines of simple, type-safe code.

## Quick Start

### 1. Ultra-Simple Templates (Recommended) ⭐

```typescript
import { developerTemplate, createAboutPageFromTemplate } from '@/lib/services/page-builder'

// Complete professional portfolio in 1 line!
const portfolio = developerTemplate(
  { name: 'John', lastName: 'Doe', role: 'Full Stack Developer' },
  myProjects
)

// Or customize with template
const aboutPage = createAboutPageFromTemplate({
  person: { name: 'John', lastName: 'Doe', role: 'Developer' },
  projects: myProjects,
  sections: ['hero', 'projects', 'skills', 'experience']
})
```

### 2. PageBuilder for Custom Pages

```typescript
import { PageBuilder, PageType } from '@/lib/services/page-builder'

const customPage = PageBuilder.create(PageType.ABOUT, '/about')
  .withTitle('About Me')
  .withDescription('Learn more about my background')
  .addHero({ title: "Hi, I'm John", subtitle: 'Developer' })
  .addExperience(experiences)
  .addSkills(skills)
  .build()
```

## Available Templates

### Profession-Specific Templates

```typescript
// Developer Portfolio (includes React, Node.js, TypeScript skills)
const devPortfolio = developerTemplate(person, projects)

// Designer Portfolio (Figma, Adobe, masonry layout)
const designPortfolio = designerTemplate(person, projects)

// Freelancer Landing Page (services, testimonials, CTA)
const freelancerSite = freelancerTemplate(person)
```

### Flexible Templates

```typescript
// Complete About Page
const aboutPage = createAboutPageFromTemplate({
  person: PersonData,
  experiences?: ExperienceData[],
  skills?: SkillData[],
  projects?: ProjectData[],
  socialLinks?: SocialLinkData[],
  sections?: ['hero' | 'experience' | 'skills' | 'projects' | 'contact']
})

// Professional Blog
const blogPage = createBlogPageFromTemplate({
  title: string,
  description: string,
  author: PersonData,
  withSidebar?: boolean,
  layout?: 'grid' | 'list'
})

// Portfolio/Work Page
const portfolioPage = createPortfolioPageFromTemplate({
  person: PersonData,
  projects: ProjectData[],
  layout?: 'grid' | 'masonry',
  columns?: 2 | 3 | 4
})

// Landing Page with Features/Pricing
const landingPage = createLandingPageFromTemplate({
  hero: { title, subtitle, description, ctaText?, ctaLink? },
  features?: Feature[],
  testimonials?: Testimonial[],
  pricing?: PricingPlan[]
})
```

## PageBuilder API

### Creating a Page

```typescript
import { PageBuilder, PageType } from '@/lib/services/page-builder'

const page = PageBuilder.create(PageType.ABOUT, '/about')
```

### Metadata Methods

```typescript
.withTitle('Page Title')
.withDescription('Page description for SEO')
.withAuthor('Author Name')
.withKeywords(['keyword1', 'keyword2'])
.withImage('/path/to/image.jpg', 'Alt text')
```

### Content Methods

```typescript
// Hero section
.addHero({
  title: 'Welcome',
  subtitle: 'Subtitle',
  description: 'Description'
})

// Features section
.addFeatures([
  { title: 'Feature 1', description: 'Description', icon: 'star' }
])

// Experience section
.addExperience([
  {
    company: 'Company',
    role: 'Role',
    timeframe: '2020-2023',
    achievements: ['Achievement 1', 'Achievement 2']
  }
])

// Skills section
.addSkills([
  { name: 'React', level: 'expert', category: 'Frontend' }
], ['Frontend', 'Backend'])

// Custom section
.addSection('custom-type', { /* content */ }, {
  display: true,
  variant: 'featured',
  className: 'my-class'
})
```

### Layout Methods

```typescript
.withLayout('with-sidebar')  // 'standard' | 'with-sidebar' | 'full-width' | 'minimal'
.withMaxWidth('xl')          // 'xs' | 's' | 'm' | 'l' | 'xl' | 'full'
.withSidebar('left', '300px')
```

### SEO & Effects

```typescript
.withSEO({
  sitemap: { priority: 0.9, changeFreq: 'weekly' }
})

.withEffects({
  gradient: { display: true, tilt: 45 },
  mask: { cursor: true, radius: 150 }
})

.withStructuredData('Person', {
  name: 'John Doe',
  jobTitle: 'Developer'
})
```

### Advanced Customization

```typescript
.customize(config => {
  // Direct access to PageConfig for complex changes
  config.effects = { /* custom effects */ }
  config.content.sidebar = { /* custom sidebar */ }
})
```

### Building

```typescript
.build() // Returns complete PageConfig
```

## Data Types

### PersonData

```typescript
interface PersonData {
  name: string
  lastName: string
  role: string
  email?: string
  avatar?: string
  location?: string
  bio?: string
  website?: string
  phone?: string
}
```

### ProjectData

```typescript
interface ProjectData {
  title: string
  description: string
  image?: string
  url?: string
  githubUrl?: string
  technologies: string[]
  featured?: boolean
}
```

### ExperienceData

```typescript
interface ExperienceData {
  company: string
  role: string
  timeframe: string
  achievements: string[]
  current?: boolean
  location?: string
}
```

### SkillData

```typescript
interface SkillData {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
}
```

## Real-World Examples

### Complete Developer Portfolio (3 lines)

```typescript
const john: PersonData = {
  name: 'John',
  lastName: 'Doe',
  role: 'Full Stack Developer',
  bio: 'Passionate developer with 5+ years experience',
  avatar: '/images/john.jpg'
}

const projects: ProjectData[] = [
  {
    title: 'E-commerce Platform',
    description: 'Modern React shopping platform',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
    featured: true
  }
]

// Complete professional portfolio in 1 line!
const portfolio = developerTemplate(john, projects)
```

### Multi-Page Site (10 lines total)

```typescript
const site = {
  // Landing page for freelancers
  home: freelancerTemplate(person),

  // Complete about page
  about: createAboutPageFromTemplate({
    person,
    projects,
    sections: ['hero', 'projects', 'skills']
  }),

  // Professional blog
  blog: createBlogPageFromTemplate({
    title: 'My Tech Blog',
    description: 'Thoughts on development',
    author: person
  })
}
```

### Custom Service Page

```typescript
const servicesPage = PageBuilder.create('services', '/services')
  .withTitle('My Services')
  .withDescription('Professional development services')
  .addHero({
    title: 'Services',
    subtitle: 'What I Offer',
    description: 'Professional web development services'
  })
  .addFeatures([
    {
      title: 'Web Development',
      description: 'Full-stack applications',
      icon: 'code'
    },
    {
      title: 'Consulting',
      description: 'Technical architecture advice',
      icon: 'chat'
    }
  ])
  .addSection('pricing', {
    plans: [
      {
        name: 'Basic',
        price: { monthly: 1000 },
        features: [
          { text: 'Frontend Development', included: true },
          { text: 'Responsive Design', included: true }
        ]
      }
    ]
  })
  .withMaxWidth('xl')
  .build()
```

## Before vs After Comparison

### BEFORE (Old Way - 200+ lines) ❌

```typescript
const oldConfig: PageConfig = {
  pageType: PageType.ABOUT,
  slug: '/about',
  metadata: {
    basic: {
      title: 'About Me',
      description: 'Learn more about my background',
      keywords: ['about', 'developer'],
      author: 'John Doe',
      publishDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
      canonical: 'https://example.com/about'
    },
    openGraph: {
      type: OpenGraphType.PROFILE,
      title: 'About Me',
      description: 'Learn more about my background',
      image: '/profile.jpg',
      alt: 'John Doe Profile',
      url: '/about'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Me',
      description: 'Learn more about my background',
      image: '/profile.jpg'
    }
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'John Doe',
    jobTitle: 'Developer'
  },
  content: {
    main: [
      {
        id: 'hero',
        blocks: [
          {
            type: 'hero',
            content: {
              title: "Hi, I'm John",
              subtitle: 'Developer'
            },
            display: true
          }
        ]
      }
      // ... 150+ more lines
    ]
  },
  layout: {
    template: 'standard',
    maxWidth: 'm',
    navigation: { display: true, sticky: false }
  },
  navigation: {
    label: 'About',
    icon: 'person',
    href: '/about',
    enabled: true
  },
  seo: {
    noIndex: false,
    noFollow: false,
    sitemap: { priority: 0.8, changeFreq: 'monthly' }
  }
}
```

### AFTER (New Way - 3 lines!) ✅

```typescript
// Same result with 98% less code!
const newConfig = developerTemplate({ name: 'John', lastName: 'Doe', role: 'Developer' }, projects)
```

## Benefits

- ✅ **98% Less Code**: 200+ lines → 3-5 lines
- ✅ **Type Safe**: Full TypeScript support with autocomplete
- ✅ **No Boilerplate**: All metadata, SEO, layout auto-generated
- ✅ **Professional Results**: Best practices built-in
- ✅ **Maintainable**: Simple, readable, easy to modify
- ✅ **Flexible**: From simple templates to full customization
- ✅ **Error-Free**: Smart defaults prevent common mistakes

## When to Use What

### Use Templates When:

- Creating standard pages (about, portfolio, blog, landing)
- You want the fastest development
- You need professional, proven layouts
- Starting new projects

### Use PageBuilder When:

- Creating custom page types
- Need specific layout control
- Templates don't fit your needs
- Building unique experiences

### Use Raw PageConfig When:

- Templates and PageBuilder can't achieve your goal
- Very specific, complex requirements
- Integrating with existing legacy code

---

**Happy Building! 🚀**

_Transform your development workflow from hours to minutes with PageForge's revolutionary
PageBuilder system._
