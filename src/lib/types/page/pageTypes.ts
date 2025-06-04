import { Post } from '../site'

// Section Content Type Definitions
export interface HeroSectionContent {
  title?: string
  subtitle?: string
  description?: string
  alignment?: 'left' | 'center' | 'right'
  height?: 'small' | 'medium' | 'large' | 'full'
  backgroundImage?: string
  badge?: {
    label: string
    icon?: string
    href?: string
    arrow?: boolean
  }
  buttons?: Array<{
    label: string
    href: string
    variant?: 'primary' | 'secondary' | 'tertiary'
    size?: 's' | 'm' | 'l'
    icon?: string
    showArrow?: boolean
  }>
  features?: Array<{
    icon?: string
    text: string
  }>
}

export interface ExperienceSectionContent {
  title?: string
  experiences: Array<{
    company: string
    timeframe: string
    role: string
    achievements: Array<string | React.ReactNode>
    images?: Array<{
      src: string
      alt: string
      width: number
      height: number
    }>
  }>
}

export interface FeaturesSectionContent {
  title?: string
  subtitle?: string
  description?: string
  layout?: 'grid' | 'list' | 'cards'
  columns?: 2 | 3 | 4
  features: Array<{
    title: string
    description: string
    icon?: string
    image?: {
      src: string
      alt: string
      width?: number
      height?: number
    }
    link?: {
      href: string
      label?: string
    }
  }>
}

export interface ContactFormSectionContent {
  title?: string
  description?: string
  fields: Array<{
    name: string
    label: string
    type:
      | 'text'
      | 'email'
      | 'tel'
      | 'textarea'
      | 'select'
      | 'checkbox'
      | 'radio'
    placeholder?: string
    required?: boolean
    options?: Array<{ value: string; label: string }> // for select/radio
  }>
  submitButton?: {
    label?: string
    variant?: 'primary' | 'secondary'
  }
  endpoint?: string
  successMessage?: string
  errorMessage?: string
}

export interface TestimonialsSectionContent {
  title?: string
  subtitle?: string
  layout?: 'carousel' | 'grid' | 'masonry'
  columns?: 1 | 2 | 3
  testimonials: Array<{
    content: string
    author: {
      name: string
      role?: string
      company?: string
      avatar?: string
    }
    rating?: number
    featured?: boolean
  }>
}

export interface PricingSectionContent {
  title?: string
  subtitle?: string
  description?: string
  billingPeriod?: 'monthly' | 'yearly' | 'both'
  plans: Array<{
    name: string
    description?: string
    price: {
      monthly?: number
      yearly?: number
      currency?: string
    }
    features: Array<{
      text: string
      included: boolean
      highlight?: boolean
    }>
    cta?: {
      label: string
      href: string
      variant?: 'primary' | 'secondary'
    }
    popular?: boolean
    enterprise?: boolean
  }>
}

export interface FAQSectionContent {
  title?: string
  subtitle?: string
  description?: string
  layout?: 'accordion' | 'grid'
  categories?: Array<{
    name: string
    questions: Array<{
      question: string
      answer: string | React.ReactNode
    }>
  }>
  questions?: Array<{
    question: string
    answer: string | React.ReactNode
    category?: string
  }>
}

export interface GallerySectionContent {
  title?: string
  subtitle?: string
  layout?: 'masonry' | 'grid' | 'carousel'
  columns?: number
  images: Array<{
    src: string
    alt: string
    caption?: string
    orientation?: 'vertical' | 'horizontal' | 'square'
    category?: string
  }>
  categories?: string[]
  showFilter?: boolean
}

export interface AboutHeroSectionContent {
  avatar?: {
    display: boolean
    src?: string
    alt?: string
  }
  calendar?: {
    display: boolean
    link: string
    text?: string
  }
  intro?: {
    display: boolean
    title: string
    description: string | React.ReactNode
  }
}

export interface StudiesSectionContent {
  title?: string
  institutions: Array<{
    name: string
    description: string | React.ReactNode
    timeframe?: string
    degree?: string
    location?: string
  }>
}

export interface SkillsSectionContent {
  title?: string
  skills: Array<{
    title: string
    description: string | React.ReactNode
    level?: number // 1-5 or percentage
    category?: string
    images?: Array<ImageConfig>
  }>
  categories?: string[]
}

export interface SocialLinksSectionContent {
  title?: string
  links: Array<{
    name: string
    icon: string
    link: string
    description?: string
  }>
  layout?: 'horizontal' | 'vertical' | 'grid'
}

export interface PostsGridSectionContent {
  title?: string
  subtitle?: string
  layout?: 'grid' | 'list' | 'featured'
  columns?: 1 | 2 | 3 | 4
  showExcerpt?: boolean
  showDate?: boolean
  showAuthor?: boolean
  showCategories?: boolean
  featuredPosts?: {
    range: [number, number]
    thumbnail: boolean
    columns: string
    items: Post[]
  }
  recentPosts?: {
    range: [number, number]
    thumbnail: boolean
    columns: string
    items: Post[]
  }
}

export interface NewsletterSectionContent {
  display: boolean
  title: string | React.ReactNode
  description: string | React.ReactNode
  placeholder?: string
  buttonText?: string
  successMessage?: string
  errorMessage?: string
}

export interface TableOfContentsSectionContent {
  items: Array<{
    title: string
    display: boolean
    href?: string
    level?: number
  }>
  sticky?: boolean
  position?: 'left' | 'right'
}

export interface CalendarLinkSectionContent {
  text: string
  link: string
  icon?: string
  description?: string
}

export interface ProjectsSectionContent {
  title?: string
  subtitle?: string
  layout?: 'grid' | 'list' | 'masonry'
  columns?: 1 | 2 | 3 | 4
  showDescription?: boolean
  showTechnology?: boolean
  projects?: Array<{
    title: string
    description?: string
    image?: string
    technologies?: string[]
    link?: string
    github?: string
    featured?: boolean
  }>
  range?: [number, number]
}

export interface HeadingSectionContent {
  text: string
  level?: 1 | 2 | 3 | 4 | 5 | 6
  align?: 'left' | 'center' | 'right'
}

export interface TextSectionContent {
  text: string | React.ReactNode
  align?: 'left' | 'center' | 'right'
  size?: 'xs' | 's' | 'm' | 'l' | 'xl'
}

// Additional missing section content types
export interface ProfileSectionContent {
  name: string
  role: string
  bio: string | React.ReactNode
  avatar?: {
    src: string
    alt: string
  }
  location?: string
  email?: string
  phone?: string
  social?: Array<{
    platform: string
    url: string
    icon?: string
  }>
  skills?: string[]
  achievements?: string[]
}

export interface BlogPageSectionContent {
  title?: string
  posts: Array<{
    id: string
    title: string
    excerpt: string
    slug: string
    publishDate: string
    author: string
    category?: string
    tags?: string[]
    featuredImage?: string
    readTime?: number
  }>
  layout?: 'grid' | 'list'
  showExcerpt?: boolean
  showDate?: boolean
  showAuthor?: boolean
  pagination?: {
    enabled: boolean
    postsPerPage: number
  }
}

export interface ContactInfoSectionContent {
  title?: string
  subtitle?: string
  contacts: Array<{
    type: 'email' | 'phone' | 'address' | 'hours' | 'social'
    label: string
    value: string
    link?: string
    icon?: string
  }>
  layout?: 'vertical' | 'horizontal' | 'grid'
}

export interface TimelineSectionContent {
  title?: string
  subtitle?: string
  items: Array<{
    date: string
    title: string
    description: string | React.ReactNode
    category?: string
    status?: 'completed' | 'current' | 'upcoming'
    icon?: string
    image?: string
  }>
  layout?: 'vertical' | 'horizontal'
  showDates?: boolean
}

export interface ShopItemsSectionContent {
  title?: string
  subtitle?: string
  items: Array<{
    id: string
    name: string
    description: string
    price: number
    currency?: string
    image?: string
    category?: string
    inStock?: boolean
    rating?: number
    link?: string
  }>
  layout?: 'grid' | 'list'
  columns?: 2 | 3 | 4
  showPricing?: boolean
  showRating?: boolean
}

export interface MapSectionContent {
  title?: string
  description?: string
  address: string
  coordinates?: {
    lat: number
    lng: number
  }
  zoom?: number
  markers?: Array<{
    lat: number
    lng: number
    title?: string
    description?: string
  }>
  height?: number
  showControls?: boolean
}

export interface PlansSectionContent {
  title?: string
  subtitle?: string
  description?: string
  plans: Array<{
    name: string
    description?: string
    price?: {
      amount: number
      period?: string
      currency?: string
    }
    features: Array<{
      text: string
      included: boolean
      highlight?: boolean
    }>
    cta?: {
      label: string
      href: string
      variant?: 'primary' | 'secondary'
    }
    popular?: boolean
    custom?: boolean
  }>
  billingToggle?: boolean
}

export interface HowToSectionContent {
  title?: string
  description?: string
  subtitle?: string
  steps: Array<{
    step: number
    title: string
    description: string | React.ReactNode
    image?: string
    icon?: string
    tips?: string[]
  }>
  layout?: 'vertical' | 'horizontal' | 'numbered'
}

export interface MenuSectionContent {
  title?: string
  subtitle?: string
  categories?: Array<{
    name: string
    description?: string
    items: Array<{
      name: string
      description?: string
      price?: string
      image?: string
      dietary?: string[]
      popular?: boolean
    }>
  }>
  items?: Array<{
    name: string
    description?: string
    price?: string
    category?: string
    image?: string
    dietary?: string[]
    popular?: boolean
  }>
  layout?: 'categories' | 'grid' | 'list'
  showPrices?: boolean
  showImages?: boolean
}

export interface PropertySectionContent {
  title?: string
  subtitle?: string
  properties: Array<{
    id: string
    title: string
    description?: string
    price: string
    location: string
    type: string
    bedrooms?: number
    bathrooms?: number
    area?: string
    images?: string[]
    features?: string[]
    status?: 'available' | 'sold' | 'rented'
    agent?: {
      name: string
      phone?: string
      email?: string
    }
  }>
  layout?: 'grid' | 'list'
  showFilters?: boolean
}

export interface LegalTextSectionContent {
  title?: string
  lastUpdated?: string
  content: string | React.ReactNode
  sections?: Array<{
    title: string
    content: string | React.ReactNode
  }>
  tableOfContents?: boolean
}

export interface CareersSectionContent {
  title?: string
  subtitle?: string
  description?: string
  jobs: Array<{
    id: string
    title: string
    department: string
    location: string
    type: 'full-time' | 'part-time' | 'contract' | 'remote'
    salary?: string
    description: string
    requirements: string[]
    benefits?: string[]
    posted?: string
    applicationLink?: string
  }>
  layout?: 'list' | 'cards'
  showSalary?: boolean
  showType?: boolean
}

export interface AboutGeneralSectionContent {
  title?: string
  description?: string
  content?: string | React.ReactNode
  image?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  layout?: 'text-only' | 'text-image' | 'image-text'
  alignment?: 'left' | 'center' | 'right'
}

// Content-driven interfaces for better maintainability - DISCRIMINATED UNION
export type ContentBlock =
  | {
      type: 'hero'
      content: HeroSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'features'
      content: FeaturesSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'experience'
      content: ExperienceSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'studies'
      content: StudiesSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'skills'
      content: SkillsSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'socials'
      content: SocialLinksSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'gallery'
      content: GallerySectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'newsletter'
      content: NewsletterSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'table-of-contents'
      content: TableOfContentsSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'calendar-link'
      content: CalendarLinkSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'projects'
      content: ProjectsSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'posts-grid'
      content: PostsGridSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'about-hero'
      content: AboutHeroSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'heading'
      content: HeadingSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'text'
      content: TextSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'contact-form'
      content: ContactFormSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'testimonials'
      content: TestimonialsSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'pricing'
      content: PricingSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'faq'
      content: FAQSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'profile'
      content: ProfileSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'blog-page'
      content: BlogPageSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'contact-info'
      content: ContactInfoSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'timeline'
      content: TimelineSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'shop-items'
      content: ShopItemsSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'map'
      content: MapSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'plans'
      content: PlansSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'how-to'
      content: HowToSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'menu'
      content: MenuSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'property'
      content: PropertySectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'legal-text'
      content: LegalTextSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'careers'
      content: CareersSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
  | {
      type: 'about'
      content: AboutGeneralSectionContent
      variant?: string
      display?: boolean
      className?: string
    }
    // |  {
    //   type: 'custom',
    //   content: any
    //   variant?: string
    //   description: string
    //   display?: boolean
    //   id?: string
    //   className?: string
    // }

// Custom section interface for AI-generated sections
export interface CustomContentBlock {
  type: string // Any custom section type not in the predefined list
  content: Record<string, any> // Generic content structure for AI-generated sections
  variant?: string
  display?: boolean
  className?: string
  isCustom: true // Always true for custom sections
}

// Combined type that allows both predefined and custom sections
export type AnyContentBlock = ContentBlock | CustomContentBlock

// Type-safe block creators
export const createHeroBlock = (
  content: HeroSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'hero',
  content,
  display: true,
  ...options
})

export const createFeaturesBlock = (
  content: FeaturesSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'features',
  content,
  display: true,
  ...options
})

export const createExperienceBlock = (
  content: ExperienceSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'experience',
  content,
  display: true,
  ...options
})

export const createStudiesBlock = (
  content: StudiesSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'studies',
  content,
  display: true,
  ...options
})

export const createSkillsBlock = (
  content: SkillsSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'skills',
  content,
  display: true,
  ...options
})

export const createSocialLinksBlock = (
  content: SocialLinksSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'socials',
  content,
  display: true,
  ...options
})

export const createTextBlock = (
  content: TextSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'text',
  content,
  display: true,
  ...options
})

export const createHeadingBlock = (
  content: HeadingSectionContent,
  options?: { variant?: string; display?: boolean; className?: string }
): ContentBlock => ({
  type: 'heading',
  content,
  display: true,
  ...options
})

export interface ContentSection {
  id: string
  title?: string
  description?: string
  blocks: ContentBlock[]
  layout?: {
    variant?: string
    columns?: number
    gap?: string
    marginTop?: string
    marginBottom?: string
    padding?: string
    background?: string
  }
  display?: boolean
}

export interface MainContentSection<T> {
  id: string
  title?: string
  description?: string
  blocks: ContentBlock[]
  layout?: {
    variant?: string
    columns?: number
    gap?: string
    marginTop?: string
    marginBottom?: string
    padding?: string
    background?: string
  }
  display?: boolean
}

// Page metadata configuration
export interface PageMetadata {
  title: string
  description: string
  keywords?: string[]
  author?: string
  publishDate?: string
  modifiedDate?: string
  canonical?: string
}

// Open Graph metadata
export interface OpenGraphMetadata {
  type: OpenGraphType | string
  title?: string
  description?: string
  image: string
  alt: string
  url?: string
}

// Twitter metadata
export interface TwitterMetadata {
  card: 'summary' | 'summary_large_image' | 'app' | 'player'
  title?: string
  description?: string
  image?: string
}

// Complete metadata configuration
export interface PageMetadataConfig {
  basic: PageMetadata
  openGraph: OpenGraphMetadata
  twitter: TwitterMetadata
}

// Page content structure
export interface PageContent {
  header?: ContentSection
  hero?: ContentSection
  main: MainContentSection<any>[]
  sidebar?: ContentSection
  footer?: ContentSection
}

// Page layout configuration
export interface PageLayout {
  template: 'standard' | 'with-sidebar' | 'full-width' | 'minimal'
  maxWidth: 'xs' | 's' | 'm' | 'l' | 'xl' | 'full'
  sidebar?: {
    position: 'left' | 'right'
    width: string
    sticky?: boolean
  }
  navigation?: {
    display: boolean
    sticky?: boolean
  }
}

export interface PageNavigation {
  label: string
  icon: string
  href: string
  enabled: boolean
  order?: number
  parent?: string
}

// SEO configuration
export interface PageSEO {
  noIndex?: boolean
  noFollow?: boolean
  sitemap?: {
    priority: number
    changeFreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  }
}

// Structured data configuration
export interface PageStructuredData {
  '@context': string
  '@type': SchemaType | string
  [key: string]: any
}

// Main page configuration interface
export interface PageConfig<TContent = any> {
  pageType: PageType | string
  slug: string
  metadata: PageMetadataConfig
  structuredData?: PageStructuredData
  content: PageContent
  layout: PageLayout
  navigation: PageNavigation
  effects?: VisualEffects
  seo?: PageSEO
}

// Specific page type configurations
export interface AboutPageConfig extends PageConfig {
  pageType: PageType.ABOUT
}

export interface BlogPageConfig extends PageConfig<BlogPageContent> {
  pageType: PageType.BLOG
}

export interface GalleryPageConfig extends PageConfig<GalleryImage> {
  pageType: PageType.GALLERY
}

export interface WorkPageConfig extends PageConfig<WorkExperience> {
  pageType: PageType.WORK
}

export interface PostPageConfig extends PageConfig<PostType> {
  pageType: 'post'
  data: {
    post: PostType
    showAuthor?: boolean
    showDate?: boolean
    showReadingTime?: boolean
    showRelatedPosts?: boolean
    showSocialShare?: boolean
    layout?: {
      sidebar?: {
        position: 'left' | 'right'
        width: string
        widgets?: Array<{
          type: string
          title?: string
          content?: any
        }>
      }
      maxWidth?: string
      spacing?: string
    }
  }
}

// Page type enumeration
export enum PageType {
  ABOUT = 'about',
  BLOG = 'blog',
  GALLERY = 'gallery',
  WORK = 'work',
  HOME = 'home',
  CONTACT = 'contact',
  PORTFOLIO = 'portfolio'
}

// Schema type enumeration
export enum SchemaType {
  WEBSITE = 'Website',
  WEBPAGE = 'WebPage',
  ARTICLE = 'Article',
  BLOG_POSTING = 'BlogPosting',
  PERSON = 'Person',
  ORGANIZATION = 'Organization',
  BLOG = 'Blog'
}

// OpenGraph type enumeration
export enum OpenGraphType {
  WEBSITE = 'website',
  ARTICLE = 'article',
  PROFILE = 'profile'
}

export type SectionType =
  | 'home'
  | 'intro'
  | 'about'
  | 'work'
  | 'post'
  | 'socials'
  | 'studies'
  | 'skills'
  | 'calendar'
  | 'projects'
  | 'newsletter'
  | 'table-of-contents'
  | 'hero'
  | 'features'
  | 'heading'
  | 'text'
  | 'posts-grid'
  | 'about-hero'
  | 'experience'
  | 'about'
  | 'gallery'
  | 'blog'
  | 'menu'
  | 'contact'
  | 'resume'
  | 'events'
  | 'testimonials'
  | 'pricing'
  | 'faq'
  | 'shop'
  | 'properties'
  | 'portfolio'
  | 'projects'
  | 'careers'
  | 'newsletter'
  | 'how_to'
  | 'plans'
  | 'services'
  | 'news'
  | 'terms_of_service'
  | 'privacy_policy'
  | 'legal_text'
  | 'calendar-link'
  | 'careers'

export const PAGE_TYPES: { id: SectionType; name: string }[] = [
  { id: 'home', name: 'Home' },
  { id: 'about', name: 'About' },
  { id: 'gallery', name: 'Gallery' },
  { id: 'blog', name: 'Blog' },
  { id: 'menu', name: 'Menu' },
  { id: 'contact', name: 'Contact' },
  { id: 'resume', name: 'Resume' },
  { id: 'events', name: 'Events' },
  { id: 'testimonials', name: 'Testimonials' },
  { id: 'pricing', name: 'Pricing' },
  { id: 'faq', name: 'FAQ' },
  { id: 'shop', name: 'Shop' },
  { id: 'properties', name: 'Property Listing' },
  { id: 'portfolio', name: 'Portfolio' },
  { id: 'projects', name: 'Projects' },
  { id: 'careers', name: 'Careers' },
  { id: 'newsletter', name: 'Newsletter' },
  { id: 'how_to', name: 'How To' },
  { id: 'plans', name: 'Plans' },
  { id: 'services', name: 'Services' },
  { id: 'news', name: 'News' },
  { id: 'terms_of_service', name: 'Terms of Service' },
  { id: 'privacy_policy', name: 'Privacy Policy' },
  { id: 'news', name: 'News' }
]

// Utility types for working with discriminated union
export type ExtractBlockByType<T extends ContentBlock['type']> = Extract<
  ContentBlock,
  { type: T }
>

// Example usage - now with full type safety:
/*
// ✅ This will work and provide autocomplete
const heroBlock: ContentBlock = {
  type: 'hero',
  display: true,
  content: {
    title: 'Welcome',
    alignment: 'center', // ✅ TypeScript knows this should be 'left' | 'center' | 'right'
    buttons: [{
      label: 'Click me',
      href: '/link',
      variant: 'primary' // ✅ TypeScript knows this should be 'primary' | 'secondary' | 'tertiary'
    }]
  }
};

// ❌ This will give a TypeScript error
const invalidBlock: ContentBlock = {
  type: 'hero',
  display: true,
  content: {
    // ❌ Error: Object literal may only specify known properties
    wrongProperty: 'this will error',
    title: 'Welcome'
  }
};

// ❌ This will also give a TypeScript error
const mismatchedBlock: ContentBlock = {
  type: 'hero',
  display: true,
  content: {
    // ❌ Error: features array is not valid for hero content
    features: [{
      title: 'Feature 1',
      description: 'Description'
    }]
  }
};

// ✅ Type-safe access
function processBlock(block: ContentBlock) {
  if (block.type === 'hero') {
    // TypeScript now knows block.content is HeroSectionContent
    const title = block.content.title; // ✅ Autocomplete works
    const alignment = block.content.alignment; // ✅ TypeScript knows this is 'left' | 'center' | 'right' | undefined
  }

  if (block.type === 'features') {
    // TypeScript now knows block.content is FeaturesSectionContent
    const features = block.content.features; // ✅ Autocomplete works
    const layout = block.content.layout; // ✅ TypeScript knows this is 'grid' | 'list' | 'cards' | undefined
  }
}
*/

export interface ImageConfig {
  src: string
  alt: string
  width: number
  height: number
}

export interface GalleryImage {
  src: string
  alt: string
  orientation: 'vertical' | 'horizontal'
}

export interface WorkExperience {
  company: string
  timeframe: string
  role: string
  achievements: any[]
  images: ImageConfig[]
}

export interface Institution {
  name: string
  description: any
}

export interface Skill {
  title: string
  description: any
  images?: ImageConfig[]
}

export interface SocialLink {
  name: string
  icon: string
  link: string
}

export interface PostType {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  featuredImage?: {
    src: string
    alt: string
    width?: number
    height?: number
  }
  author: {
    name: string
    avatar?: string
    bio?: string
  }
  category?: string[]
  tags?: string[]
  metadata: {
    publishDate: string
    modifiedDate?: string
    readingTime?: number
    isPublished: boolean
    isFeatured?: boolean
  }
  seo?: {
    title?: string
    description?: string
    keywords?: string[]
    ogImage?: string
    noIndex?: boolean
  }
  relatedPosts?: string[] // Array of post IDs
}

export type BlogPageContent = {
  featuredPosts?: {
    range: [number, number]
    thumbnail: boolean
    columns: string
    items: Post[]
  }
  otherPosts?: {
    range: [number, number]
    thumbnail: boolean
    columns: string
    items: Post[]
  }
  newsletter?: {
    display: boolean
    title: string
    description: string
  }
}

export interface VisualEffects {
  mask?: {
    cursor: boolean
    x: number
    y: number
    radius: number
  }
  gradient?: {
    display: boolean
    x: number
    y: number
    width: number
    height: number
    tilt: number
    colorStart: string
    colorEnd: string
    opacity: number
  }
  dots?: {
    display: boolean
    size: number
    color: string
    opacity: number
  }
}

// Union type for all page configurations
export type AllPageConfig =
  | BlogPageConfig
  | AboutPageConfig
  | GalleryPageConfig
  | WorkPageConfig
  | PostPageConfig

// New content-driven page configurations
export type ContentDrivenPageConfig =
  | BlogPageConfig
  | AboutPageConfig
  | GalleryPageConfig
  | WorkPageConfig
  | PostPageConfig
