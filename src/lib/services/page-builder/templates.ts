import { PageBuilder } from './PageBuilder'
import { PageConfig, PageType } from '../../types/page/pageTypes'

// ============================================================================
// TEMPLATE DATA INTERFACES
// ============================================================================

export interface PersonData {
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

export interface ExperienceData {
  company: string
  role: string
  timeframe: string
  achievements: string[]
  current?: boolean
  location?: string
}

export interface ProjectData {
  title: string
  description: string
  image?: string
  url?: string
  githubUrl?: string
  technologies: string[]
  featured?: boolean
}

export interface SkillData {
  name: string
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert'
  category: string
}

export interface SocialLinkData {
  platform: string
  url: string
  icon: string
}

// ============================================================================
// TEMPLATE CONFIGURATIONS
// ============================================================================

export interface AboutPageTemplate {
  person: PersonData
  experiences?: ExperienceData[]
  skills?: SkillData[]
  socialLinks?: SocialLinkData[]
  projects?: ProjectData[]
  sections?: Array<'hero' | 'experience' | 'skills' | 'projects' | 'contact'>
}

export interface BlogPageTemplate {
  title: string
  description: string
  author: PersonData
  categories?: string[]
  featuredPostsCount?: number
  layout?: 'grid' | 'list'
  withSidebar?: boolean
}

export interface PortfolioPageTemplate {
  person: PersonData
  projects: ProjectData[]
  skills?: SkillData[]
  layout?: 'grid' | 'masonry'
  columns?: 2 | 3 | 4
  showTechnologies?: boolean
}

export interface LandingPageTemplate {
  hero: {
    title: string
    subtitle: string
    description: string
    ctaText?: string
    ctaLink?: string
  }
  features?: Array<{
    title: string
    description: string
    icon?: string
  }>
  testimonials?: Array<{
    content: string
    author: string
    role?: string
    company?: string
  }>
  pricing?: Array<{
    name: string
    price: string
    features: string[]
    popular?: boolean
  }>
}

// ============================================================================
// TEMPLATE CREATORS
// ============================================================================

/**
 * Creates a comprehensive About page with common sections
 */
export function createAboutPageFromTemplate(data: AboutPageTemplate): PageConfig {
  const { person, experiences, skills, socialLinks, projects, sections = ['hero', 'experience', 'skills'] } = data

  let builder = PageBuilder
    .create(PageType.ABOUT, '/about')
    .withTitle(`About ${person.name}`)
    .withDescription(person.bio || `Learn more about ${person.name} ${person.lastName}`)
    .withAuthor(`${person.name} ${person.lastName}`)
    .withKeywords(['about', person.role.toLowerCase(), 'portfolio', 'biography'])

  if (person.avatar) {
    builder = builder.withImage(person.avatar, `${person.name} ${person.lastName}`)
  }

  // Add sections based on configuration
  sections.forEach(section => {
    switch (section) {
      case 'hero':
        builder = builder.addHero({
          title: `Hi, I'm ${person.name}`,
          subtitle: person.role,
          description: person.bio || `Welcome to my portfolio. I'm a ${person.role} passionate about creating amazing experiences.`
        })
        break

      case 'experience':
        if (experiences && experiences.length > 0) {
          builder = builder.addExperience(experiences.map(exp => ({
            company: exp.company,
            role: exp.role,
            timeframe: exp.timeframe,
            achievements: exp.achievements,
            current: exp.current
          })))
        }
        break

      case 'skills':
        if (skills && skills.length > 0) {
          const categories = [...new Set(skills.map(s => s.category))]
          builder = builder.addSkills(skills, categories)
        }
        break

      case 'projects':
        if (projects && projects.length > 0) {
          builder = builder.addSection('projects', {
            projects: projects.map(p => ({
              title: p.title,
              description: p.description,
              image: p.image,
              url: p.url,
              github: p.githubUrl,
              technologies: p.technologies,
              featured: p.featured
            }))
          })
        }
        break

      case 'contact':
        if (socialLinks && socialLinks.length > 0) {
          builder = builder.addSection('socials', {
            links: socialLinks.map(link => ({
              name: link.platform,
              icon: link.icon,
              link: link.url
            }))
          })
        }
        break
    }
  })

  return builder
    .withStructuredData('Person', {
      name: `${person.name} ${person.lastName}`,
      jobTitle: person.role,
      email: person.email,
      url: person.website,
      image: person.avatar
    })
    .build()
}

/**
 * Creates a professional blog page
 */
export function createBlogPageFromTemplate(data: BlogPageTemplate): PageConfig {
  const { title, description, author, withSidebar = true, layout = 'grid', featuredPostsCount = 3 } = data

  let builder = PageBuilder
    .create(PageType.BLOG, '/blog')
    .withTitle(title)
    .withDescription(description)
    .withAuthor(`${author.name} ${author.lastName}`)
    .withKeywords(['blog', 'articles', 'writing', author.role.toLowerCase()])

  if (withSidebar) {
    builder = builder
      .withLayout('with-sidebar')
      .withSidebar('right', '300px')
  }

  builder = builder
    .addSection('posts-grid', {
      layout,
      featuredPosts: {
        range: [1, featuredPostsCount],
        thumbnail: true,
        columns: layout === 'grid' ? '2' : '1'
      }
    })
    .withStructuredData('Blog', {
      name: title,
      description,
      author: {
        '@type': 'Person',
        name: `${author.name} ${author.lastName}`,
        jobTitle: author.role
      }
    })

  return builder.build()
}

/**
 * Creates a portfolio/work page
 */
export function createPortfolioPageFromTemplate(data: PortfolioPageTemplate): PageConfig {
  const { person, projects, skills, layout = 'grid', columns = 3, showTechnologies = true } = data

  let builder = PageBuilder
    .create(PageType.WORK, '/portfolio')
    .withTitle(`${person.name}'s Portfolio`)
    .withDescription(`Explore the projects and work by ${person.name} ${person.lastName}`)
    .withAuthor(`${person.name} ${person.lastName}`)
    .withKeywords(['portfolio', 'projects', 'work', person.role.toLowerCase()])
    .withMaxWidth('xl')

  // Hero section
  builder = builder.addHero({
    title: 'My Work',
    subtitle: 'Featured Projects & Creations',
    description: `Here's a collection of projects I've worked on, showcasing my skills in ${person.role.toLowerCase()}.`
  })

  // Projects section
  builder = builder.addSection('projects', {
    layout,
    columns,
    showTechnology: showTechnologies,
    projects: projects.map(p => ({
      title: p.title,
      description: p.description,
      image: p.image,
      url: p.url,
      github: p.githubUrl,
      technologies: p.technologies,
      featured: p.featured
    }))
  })

  // Skills section (if provided)
  if (skills && skills.length > 0) {
    const categories = [...new Set(skills.map(s => s.category))]
    builder = builder.addSkills(skills, categories)
  }

  return builder
    .withStructuredData('CreativeWork', {
      author: {
        '@type': 'Person',
        name: `${person.name} ${person.lastName}`,
        jobTitle: person.role
      }
    })
    .build()
}

/**
 * Creates a landing page for products/services
 */
export function createLandingPageFromTemplate(data: LandingPageTemplate): PageConfig {
  const { hero, features, testimonials, pricing } = data

  let builder = PageBuilder
    .create('landing', '/')
    .withTitle(hero.title)
    .withDescription(hero.description)
    .withKeywords(['landing', 'product', 'service'])
    .withMaxWidth('xl')

  // Hero section
  builder = builder.addHero({
    title: hero.title,
    subtitle: hero.subtitle,
    description: hero.description,
    buttons: hero.ctaText ? [{
      label: hero.ctaText,
      href: hero.ctaLink || '#',
      variant: 'primary'
    }] : undefined
  })

  // Features section
  if (features && features.length > 0) {
    builder = builder.addFeatures(features)
  }

  // Testimonials section
  if (testimonials && testimonials.length > 0) {
    builder = builder.addSection('testimonials', {
      testimonials: testimonials.map(t => ({
        content: t.content,
        author: {
          name: t.author,
          role: t.role,
          company: t.company
        }
      }))
    })
  }

  // Pricing section
  if (pricing && pricing.length > 0) {
    builder = builder.addSection('pricing', {
      plans: pricing.map(p => ({
        name: p.name,
        price: { monthly: parseFloat(p.price.replace(/[^0-9.]/g, '')) },
        features: p.features.map(f => ({ text: f, included: true })),
        popular: p.popular
      }))
    })
  }

  return builder.build()
}

// ============================================================================
// QUICK TEMPLATE PRESETS
// ============================================================================

/**
 * Developer portfolio template
 */
export const developerTemplate = (person: PersonData, projects: ProjectData[]): PageConfig => {
  return createAboutPageFromTemplate({
    person,
    projects,
    skills: [
      { name: 'JavaScript', level: 'expert', category: 'Programming' },
      { name: 'React', level: 'expert', category: 'Frontend' },
      { name: 'Node.js', level: 'advanced', category: 'Backend' },
      { name: 'TypeScript', level: 'advanced', category: 'Programming' }
    ],
    sections: ['hero', 'projects', 'skills', 'experience', 'contact']
  })
}

/**
 * Designer portfolio template
 */
export const designerTemplate = (person: PersonData, projects: ProjectData[]): PageConfig => {
  return createPortfolioPageFromTemplate({
    person,
    projects,
    skills: [
      { name: 'Figma', level: 'expert', category: 'Design Tools' },
      { name: 'Adobe Creative Suite', level: 'expert', category: 'Design Tools' },
      { name: 'UI/UX Design', level: 'expert', category: 'Design' },
      { name: 'Prototyping', level: 'advanced', category: 'Design' }
    ],
    layout: 'masonry',
    columns: 3,
    showTechnologies: false
  })
}

/**
 * Freelancer landing page template
 */
export const freelancerTemplate = (person: PersonData): PageConfig => {
  return createLandingPageFromTemplate({
    hero: {
      title: `${person.role} Available for Hire`,
      subtitle: `Hi, I'm ${person.name}`,
      description: person.bio || `Professional ${person.role} ready to help bring your ideas to life.`,
      ctaText: 'Get in Touch',
      ctaLink: '/contact'
    },
    features: [
      {
        title: 'Quality Work',
        description: 'Delivering high-quality results that exceed expectations',
        icon: 'star'
      },
      {
        title: 'Fast Delivery',
        description: 'Quick turnaround times without compromising quality',
        icon: 'clock'
      },
      {
        title: 'Great Communication',
        description: 'Clear, regular updates throughout the project',
        icon: 'chat'
      }
    ]
  })
}
