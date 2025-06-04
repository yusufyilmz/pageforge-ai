import { InlineCode } from '@pageforge/once-ui/components'
import React from 'react'

// ============================================================================
// CONTENT CONFIGURATION TYPES
// ============================================================================

// Image configuration
export interface ImageConfig {
  src: string
  alt: string
  width: number
  height: number
}

// Person configuration
export interface PersonConfig {
  name: string
  lastName: string
  role: string
  avatar: string
  location: string
  languages: string[]
}

// Newsletter configuration
export interface NewsletterConfig {
  display: boolean
  title: React.ReactNode
  description: React.ReactNode
}

// Social link configuration
export interface SocialLinkConfig {
  name: string
  icon: string
  link: string
}

// Home page configuration
export interface HomeConfig {
  label: string
  title: string
  description: string
  headline: React.ReactNode
  subline: React.ReactNode
}

// Work experience
export interface WorkExperience {
  company: string
  timeframe: string
  role: string
  achievements: React.ReactNode[]
  images: ImageConfig[]
}

// Institution
export interface Institution {
  name: string
  description: React.ReactNode
}

// Skill
export interface Skill {
  title: string
  description: React.ReactNode
  images?: ImageConfig[]
}

// About page configuration
export interface AboutConfig {
  label: string
  title: string
  description: string
  tableOfContent: {
    display: boolean
    subItems: boolean
  }
  avatar: {
    display: boolean
  }
  calendar: {
    display: boolean
    link: string
  }
  intro: {
    display: boolean
    title: string
    description: React.ReactNode
  }
  work: {
    display: boolean
    title: string
    experiences: WorkExperience[]
  }
  studies: {
    display: boolean
    title: string
    institutions: Institution[]
  }
  technical: {
    display: boolean
    title: string
    skills: Skill[]
  }
}

export interface BlogConfig {
  label: string
  title: string
  description: string
}

export interface ProjectConfig {
  title: string
  description: string
  image: string
  link?: string
  tags?: string[]
  category?: string
  year?: string
  status?: 'completed' | 'in-progress' | 'concept'
}

export interface WorkConfig {
  label: string
  title: string
  description: string
  projects: ProjectConfig[]
}

export interface GalleryImage {
  src: string
  alt: string
  orientation: 'vertical' | 'horizontal'
}

export interface GalleryConfig {
  label: string
  title: string
  description: string
  images: GalleryImage[]
}

export interface ContentConfig {
  person: PersonConfig
  newsletter: NewsletterConfig
  social: SocialLinkConfig[]
  home: HomeConfig
  about: AboutConfig
  blog: BlogConfig
  work: WorkConfig
  gallery: GalleryConfig
}

// Factory function to create content with props
export const createContentConfig = (
  props: Partial<ContentConfig> = {}
): ContentConfig => {
  // Check if this is being called without any real content
  const isUsingExampleData = !props.person?.name

  // Default person configuration - marked as example
  const defaultPerson: PersonConfig = {
    name: isUsingExampleData ? '[Example] John' : 'John',
    lastName: isUsingExampleData ? '[Example] Doe' : 'Doe',
    role: isUsingExampleData
      ? '[Example] Software Developer'
      : 'Software Developer',
    avatar: '/images/avatar.jpg',
    location: 'America/New_York',
    languages: ['English']
  }

  console.log('Creating content configuration with props:', props)
  if (isUsingExampleData) {
    console.warn(
      '⚠️  Using example data in createContentConfig. Please provide real content configuration.'
    )
  }

  const person = { ...defaultPerson, ...props.person }

  // Create derived values
  const personName = `${person.name} ${person.lastName}`

  const defaultNewsletter: NewsletterConfig = {
    display: true,
    title: <>Subscribe to {person.name}&apos;s Newsletter</>,
    description: (
      <>
        {isUsingExampleData
          ? 'This is example newsletter content. Please customize this with your own content.'
          : 'I occasionally write about technology and share thoughts on development.'}
      </>
    )
  }

  const defaultSocial: SocialLinkConfig[] = isUsingExampleData
    ? [
        {
          name: 'GitHub',
          icon: 'github',
          link: 'https://github.com/[your-username]'
        },
        {
          name: 'LinkedIn',
          icon: 'linkedin',
          link: 'https://linkedin.com/in/[your-profile]'
        },
        {
          name: 'Email',
          icon: 'email',
          link: 'mailto:[your-email]@example.com'
        }
      ]
    : []

  const defaultHome: HomeConfig = {
    label: 'Home',
    title: `${personName}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: isUsingExampleData ? (
      <>Example developer and builder</>
    ) : (
      <>Developer and builder</>
    ),
    subline: (
      <>
        I&apos;m {person.name}, a {person.role.toLowerCase()}
        {isUsingExampleData ? ' (this is example content)' : ''}.
        <br />{' '}
        {isUsingExampleData
          ? 'Please customize this content.'
          : 'Welcome to my portfolio.'}
      </>
    )
  }

  const defaultAbout: AboutConfig = {
    label: 'About',
    title: 'About me',
    description: `Meet ${personName}, ${person.role}${isUsingExampleData ? ' (Example Profile)' : ''}`,
    tableOfContent: {
      display: true,
      subItems: false
    },
    avatar: {
      display: true
    },
    calendar: {
      display: false, // Changed to false by default
      link: isUsingExampleData ? 'https://cal.com/[your-calendar]' : ''
    },
    intro: {
      display: true,
      title: 'Introduction',
      description: (
        <>
          {isUsingExampleData ? (
            <>
              This is example content for {person.name}. Please replace this
              with your actual introduction, background, and what makes you
              unique as a {person.role.toLowerCase()}.
            </>
          ) : (
            <>
              {person.name} is a passionate {person.role.toLowerCase()} focused
              on creating innovative solutions and delivering quality work.
            </>
          )}
        </>
      )
    },
    work: {
      display: isUsingExampleData ? false : true, // Hide example work experience by default
      title: 'Work Experience',
      experiences: isUsingExampleData ? [] : [] // Empty by default, user should add their own
    },
    studies: {
      display: isUsingExampleData ? false : true, // Hide example studies by default
      title: 'Education',
      institutions: isUsingExampleData ? [] : [] // Empty by default, user should add their own
    },
    technical: {
      display: isUsingExampleData ? false : true, // Hide example skills by default
      title: 'Technical Skills',
      skills: isUsingExampleData ? [] : [] // Empty by default, user should add their own
    }
  }

  const defaultBlog: BlogConfig = {
    label: 'Blog',
    title: isUsingExampleData ? 'Example Blog Title' : 'My Blog',
    description: isUsingExampleData
      ? `Example blog description for ${personName}. Please customize this.`
      : `Read what ${personName} has been up to recently`
  }

  const defaultWork: WorkConfig = {
    label: 'Work',
    title: isUsingExampleData ? 'Example Projects' : 'My Projects',
    description: isUsingExampleData
      ? `Example project showcase for ${personName}. Please add your own projects.`
      : `Projects and work by ${personName}`,
    projects: isUsingExampleData ? [] : [] // Empty by default, user should add their own projects
  }

  const defaultGallery: GalleryConfig = {
    label: 'Gallery',
    title: isUsingExampleData ? 'Example Gallery' : 'My Gallery',
    description: isUsingExampleData
      ? `Example photo gallery for ${personName}. Please add your own images.`
      : `A photo collection by ${personName}`,
    images: isUsingExampleData ? [] : [] // Empty by default, user should add their own images
  }

  return {
    person,
    newsletter: { ...defaultNewsletter, ...props.newsletter },
    social: props.social || defaultSocial,
    home: { ...defaultHome, ...props.home },
    about: { ...defaultAbout, ...props.about },
    blog: { ...defaultBlog, ...props.blog },
    work: { ...defaultWork, ...props.work },
    gallery: { ...defaultGallery, ...props.gallery }
  }
}

// Default export for backward compatibility
const defaultContent = createContentConfig()

export const person = defaultContent.person
export const newsletter = defaultContent.newsletter
export const social = defaultContent.social
export const home = defaultContent.home
export const about = defaultContent.about
export const blog = defaultContent.blog
export const work = defaultContent.work
export const gallery = defaultContent.gallery

// For convenience, also export the createContentConfig function as default
export default createContentConfig

// Helper function to create a content configuration template
export const createContentTemplate = (): Partial<ContentConfig> => ({
  person: {
    name: '', // Required: Your first name
    lastName: '', // Required: Your last name
    role: '', // Required: Your job title/role
    avatar: '/images/avatar.jpg', // Path to your avatar image
    location: 'America/New_York', // Your timezone
    languages: ['English'] // Languages you speak
  },
  about: {
    label: 'About', // Navigation label
    title: 'About me', // Page title
    description: '', // Page description for SEO
    tableOfContent: {
      display: true, // Show table of contents
      subItems: false
    },
    avatar: {
      display: true // Show avatar image
    },
    intro: {
      display: true,
      title: 'Introduction',
      description: '' // Write your introduction here
    },
    work: {
      display: true,
      title: 'Work Experience',
      experiences: [
        // Add your work experiences here:
        // {
        //   company: 'Company Name',
        //   timeframe: '2020 - Present',
        //   role: 'Your Role',
        //   achievements: [
        //     <>Description of your achievements</>
        //   ],
        //   images: []
        // }
      ]
    },
    studies: {
      display: true,
      title: 'Education',
      institutions: [
        // Add your education here:
        // {
        //   name: 'University Name',
        //   description: <>Your degree or certification</>
        // }
      ]
    },
    technical: {
      display: true,
      title: 'Technical Skills',
      skills: [
        // Add your skills here:
        // {
        //   title: 'Skill Name',
        //   description: <>Description of your skill level</>,
        //   images: [] // Optional: images related to this skill
        // }
      ]
    },
    calendar: {
      display: false, // Set to true if you want to show a calendar booking link
      link: '' // Your calendar booking URL (e.g., Calendly, Cal.com)
    }
  },
  social: [
    // Add your social links here:
    // {
    //   name: 'GitHub',
    //   icon: 'github',
    //   link: 'https://github.com/yourusername'
    // },
    // {
    //   name: 'LinkedIn',
    //   icon: 'linkedin',
    //   link: 'https://linkedin.com/in/yourprofile'
    // },
    // {
    //   name: 'Email',
    //   icon: 'email',
    //   link: 'mailto:your.email@example.com'
    // }
  ],
  blog: {
    label: 'Blog',
    title: '', // Your blog title
    description: '' // Your blog description
  },
  work: {
    label: 'Work',
    title: 'My Projects',
    description: '', // Description of your work/projects
    projects: [
      // Add your projects here:
      // {
      //   title: 'Project Name',
      //   description: 'Project description',
      //   image: '/images/projects/project.jpg',
      //   link: 'https://project-url.com',
      //   tags: ['React', 'TypeScript'],
      //   category: 'Web Development',
      //   year: '2024',
      //   status: 'completed'
      // }
    ]
  },
  gallery: {
    label: 'Gallery',
    title: 'My Gallery',
    description: '', // Description of your gallery
    images: [
      // Add your gallery images here:
      // {
      //   src: '/images/gallery/image1.jpg',
      //   alt: 'Description of image',
      //   orientation: 'horizontal' // or 'vertical'
      // }
    ]
  }
})
