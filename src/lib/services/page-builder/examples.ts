import { PageType } from '../../types/page/pageTypes'

import { PageBuilder, createAboutPage } from './PageBuilder'

// ============================================================================
// BEFORE: Verbose PageConfig (200+ lines of boilerplate)
// ============================================================================

/*
const oldWay: PageConfig = {
  pageType: PageType.ABOUT,
  slug: '/about',
  metadata: {
    basic: {
      title: 'About Me',
      description: 'Learn more about my background and experience',
      keywords: ['about', 'developer', 'experience'],
      author: 'John Doe',
      publishDate: new Date().toISOString(),
      modifiedDate: new Date().toISOString(),
      canonical: 'https://example.com/about'
    },
    openGraph: {
      type: OpenGraphType.PROFILE,
      title: 'About Me',
      description: 'Learn more about my background and experience',
      image: '/images/profile.jpg',
      alt: 'John Doe Profile',
      url: '/about'
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Me',
      description: 'Learn more about my background and experience',
      image: '/images/profile.jpg'
    }
  },
  structuredData: {
    '@context': 'https://schema.org',
    '@type': SchemaType.PERSON,
    name: 'John Doe',
    jobTitle: 'Software Developer'
  },
  content: {
    main: [
      {
        id: 'hero-section',
        blocks: [{
          type: 'hero',
          content: {
            title: 'Hi, I\'m John',
            subtitle: 'Software Developer',
            description: 'I build amazing web applications'
          },
          display: true
        }],
        display: true
      },
      // ... 100+ more lines
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
    enabled: true,
    order: 1
  },
  seo: {
    noIndex: false,
    noFollow: false,
    sitemap: { priority: 0.8, changeFreq: 'monthly' }
  }
}
*/

// ============================================================================
// AFTER: Simple PageBuilder (10 lines!)
// ============================================================================

export const aboutPageSimple = createAboutPage()
  .withTitle('About Me')
  .withDescription('Learn more about my background and experience')
  .withAuthor('John Doe')
  .withKeywords(['about', 'developer', 'experience'])
  .withImage('/images/profile.jpg', 'John Doe Profile')
  .addHero({
    title: "Hi, I'm John",
    subtitle: 'Software Developer',
    description: 'I build amazing web applications'
  })
  .addExperience([
    {
      company: 'Tech Corp',
      role: 'Senior Developer',
      timeframe: '2020-Present',
      achievements: ['Built scalable apps', 'Led team of 5']
    }
  ])
  .addSkills([
    { name: 'React', level: 'expert', category: 'Frontend' },
    { name: 'Node.js', level: 'advanced', category: 'Backend' }
  ])
  .withNavigation('About', 'person', 1)
  .build()

// ============================================================================
// Advanced Example: Custom Blog Page
// ============================================================================

export const customBlogPage = PageBuilder.create(PageType.BLOG, '/blog')
  .withTitle('My Tech Blog')
  .withDescription('Thoughts on web development and technology')
  .withAuthor('John Doe')
  .withKeywords(['blog', 'tech', 'development', 'tutorials'])
  .withLayout('with-sidebar')
  .withSidebar('right', '300px')
  .addSection('posts-grid', {
    layout: 'grid',
    columns: 2,
    showExcerpt: true,
    showDate: true
  })
  .withStructuredData('Blog', {
    name: 'My Tech Blog',
    description: 'Thoughts on web development and technology',
    author: {
      '@type': 'Person',
      name: 'John Doe'
    }
  })
  .withSEO({
    sitemap: {
      priority: 0.9,
      changeFreq: 'weekly'
    }
  })
  .build()

// ============================================================================
// Quick Portfolio Page
// ============================================================================

export const portfolioPage = PageBuilder.create(PageType.WORK, '/portfolio')
  .withTitle('My Portfolio')
  .withDescription('Check out my latest projects and work')
  .addHero({
    title: 'My Work',
    description: "A collection of projects I've worked on"
  })
  .addSection('projects', {
    layout: 'grid',
    columns: 3,
    projects: [
      {
        title: 'E-commerce App',
        description: 'Modern shopping experience',
        technologies: ['React', 'Node.js', 'PostgreSQL'],
        featured: true
      }
    ]
  })
  .withMaxWidth('xl')
  .build()

// ============================================================================
// Advanced Customization
// ============================================================================

export const advancedPage = createAboutPage('/custom-about')
  .withTitle('Advanced About Page')
  .withDescription('A more complex example')
  .customize(config => {
    // Direct access to config for complex customizations
    config.effects = {
      mask: { cursor: true, x: 25, y: 75, radius: 150 },
      gradient: {
        display: true,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        tilt: 45,
        colorStart: 'blue',
        colorEnd: 'purple',
        opacity: 0.3
      },
      dots: { display: true, size: 3, color: 'brand', opacity: 0.4 }
    }
  })
  .build()

// ============================================================================
// COMPARISON: Lines of Code
// ============================================================================

/*
OLD WAY:
- 200+ lines of verbose configuration
- Easy to make mistakes
- Hard to maintain
- Lots of repetition

NEW WAY:
- 10-20 lines for most pages
- Type-safe fluent API
- Smart defaults
- Clear intent
- Still maintains full type safety!
*/
