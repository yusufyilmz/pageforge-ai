import {
  createAboutPageFromTemplate,
  createBlogPageFromTemplate,
  createPortfolioPageFromTemplate,
  createLandingPageFromTemplate,
  developerTemplate,
  designerTemplate,
  freelancerTemplate,
  type PersonData,
  type ProjectData
} from './templates'

// ============================================================================
// SUPER SIMPLE TEMPLATE EXAMPLES
// ============================================================================

// Just provide your basic info and get a complete professional page!
const johnDoe: PersonData = {
  name: 'John',
  lastName: 'Doe',
  role: 'Full Stack Developer',
  email: 'john@example.com',
  avatar: '/images/john-avatar.jpg',
  location: 'San Francisco, CA',
  bio: 'Passionate developer with 5+ years of experience building scalable web applications.',
  website: 'https://johndoe.dev'
}

// Your projects
const projects: ProjectData[] = [
  {
    title: 'E-commerce Platform',
    description: 'Modern React-based shopping platform with Node.js backend',
    image: '/images/project-ecommerce.jpg',
    url: 'https://shop.example.com',
    githubUrl: 'https://github.com/johndoe/ecommerce',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    featured: true
  },
  {
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates',
    image: '/images/project-tasks.jpg',
    url: 'https://tasks.example.com',
    technologies: ['Next.js', 'Socket.io', 'MongoDB'],
    featured: true
  }
]

// ============================================================================
// 1. COMPLETE ABOUT PAGE (3 lines!)
// ============================================================================

export const aboutPage = createAboutPageFromTemplate({
  person: johnDoe,
  projects,
  sections: ['hero', 'projects', 'skills', 'experience', 'contact']
})

// ============================================================================
// 2. PROFESSIONAL BLOG (2 lines!)
// ============================================================================

export const blogPage = createBlogPageFromTemplate({
  title: "John's Tech Blog",
  description: 'Thoughts on modern web development',
  author: johnDoe,
  withSidebar: true
})

// ============================================================================
// 3. DEVELOPER PORTFOLIO (1 line!)
// ============================================================================

export const developerPortfolio = developerTemplate(johnDoe, projects)

// ============================================================================
// 4. FREELANCER LANDING PAGE (1 line!)
// ============================================================================

export const freelancerLanding = freelancerTemplate(johnDoe)

// ============================================================================
// 5. CUSTOM DESIGNER PORTFOLIO
// ============================================================================

const sarahDesigner: PersonData = {
  name: 'Sarah',
  lastName: 'Wilson',
  role: 'UI/UX Designer',
  email: 'sarah@design.com',
  avatar: '/images/sarah-avatar.jpg',
  bio: 'Creative designer focused on user-centered design and beautiful interfaces.',
  location: 'New York, NY'
}

const designProjects: ProjectData[] = [
  {
    title: 'Banking App Redesign',
    description: 'Complete UX overhaul of mobile banking experience',
    image: '/images/banking-app.jpg',
    url: 'https://dribbble.com/shots/banking',
    technologies: ['Figma', 'Principle', 'After Effects'],
    featured: true
  },
  {
    title: 'E-learning Platform',
    description: 'Modern interface design for online education',
    image: '/images/elearning.jpg',
    technologies: ['Sketch', 'InVision', 'Zeplin']
  }
]

export const designerPortfolio = designerTemplate(sarahDesigner, designProjects)

// ============================================================================
// 6. ADVANCED PORTFOLIO WITH CUSTOM LAYOUT
// ============================================================================

export const advancedPortfolio = createPortfolioPageFromTemplate({
  person: johnDoe,
  projects,
  layout: 'masonry',
  columns: 3,
  showTechnologies: true,
  skills: [
    { name: 'React', level: 'expert', category: 'Frontend' },
    { name: 'Node.js', level: 'expert', category: 'Backend' },
    { name: 'TypeScript', level: 'advanced', category: 'Languages' },
    { name: 'AWS', level: 'advanced', category: 'Cloud' }
  ]
})

// ============================================================================
// 7. PRODUCT LANDING PAGE
// ============================================================================

export const productLanding = createLandingPageFromTemplate({
  hero: {
    title: 'Build Amazing Websites',
    subtitle: 'The Ultimate Page Builder',
    description:
      'Create professional websites with our powerful, easy-to-use page builder.',
    ctaText: 'Start Free Trial',
    ctaLink: '/signup'
  },
  features: [
    {
      title: 'Drag & Drop Builder',
      description: 'Intuitive interface that anyone can use',
      icon: 'cursor'
    },
    {
      title: 'Professional Templates',
      description: 'Beautiful, responsive templates for every need',
      icon: 'template'
    },
    {
      title: 'SEO Optimized',
      description: 'Built-in SEO tools to help you rank higher',
      icon: 'chart'
    }
  ],
  testimonials: [
    {
      content: 'This page builder transformed how we create websites. Amazing!',
      author: 'Mike Chen',
      role: 'Marketing Director',
      company: 'TechCorp'
    }
  ],
  pricing: [
    {
      name: 'Starter',
      price: '$9/month',
      features: ['5 websites', 'Basic templates', 'Email support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '$29/month',
      features: [
        'Unlimited websites',
        'Premium templates',
        'Priority support',
        'Advanced SEO'
      ],
      popular: true
    }
  ]
})

// ============================================================================
// COMPARISON: BEFORE vs AFTER
// ============================================================================

/*
BEFORE (Old PageConfig approach):
- 200+ lines of complex configuration
- Easy to make mistakes
- Hard to maintain
- Lots of repetition

AFTER (Template approach):
- 3-5 lines for complete pages
- Just provide your data
- Templates handle all complexity
- Type-safe and error-free

Example:
OLD: 200+ lines → NEW: 3 lines = 98.5% reduction in code!
*/

// ============================================================================
// ULTRA-FAST PROTOTYPING
// ============================================================================

// Need a complete professional website? Just 10 lines total:
const quickSite = {
  about: developerTemplate(johnDoe, projects),
  blog: createBlogPageFromTemplate({
    title: 'My Blog',
    description: 'Latest thoughts',
    author: johnDoe
  }),
  landing: freelancerTemplate(johnDoe)
}

export default quickSite
