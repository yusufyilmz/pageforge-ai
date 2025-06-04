import {
  PageConfig,
  PageType,
  OpenGraphType,
  SchemaType,
  ContentBlock,
  PageMetadataConfig,
  PageContent,
  PageLayout,
  PageNavigation,
  PageSEO,
  VisualEffects
} from '../../types/page/pageTypes'

export class PageBuilder {
  private config: Partial<PageConfig>

  constructor(pageType: PageType | string, slug: string) {
    this.config = {
      pageType,
      slug,
      metadata: this.createDefaultMetadata(),
      content: { main: [] },
      layout: this.createDefaultLayout(),
      navigation: this.createDefaultNavigation(slug),
      seo: this.createDefaultSEO()
    }
  }

  static create(pageType: PageType | string, slug: string): PageBuilder {
    return new PageBuilder(pageType, slug)
  }

  // Metadata methods
  withTitle(title: string): this {
    this.config.metadata!.basic.title = title
    this.config.metadata!.openGraph.title = title
    this.config.metadata!.twitter.title = title
    return this
  }

  withDescription(description: string): this {
    this.config.metadata!.basic.description = description
    this.config.metadata!.openGraph.description = description
    this.config.metadata!.twitter.description = description
    return this
  }

  withAuthor(author: string): this {
    this.config.metadata!.basic.author = author
    return this
  }

  withKeywords(keywords: string[]): this {
    this.config.metadata!.basic.keywords = keywords
    return this
  }

  withImage(image: string, alt?: string): this {
    this.config.metadata!.openGraph.image = image
    this.config.metadata!.openGraph.alt = alt || this.config.metadata!.basic.title
    this.config.metadata!.twitter.image = image
    return this
  }

  // Content methods
  addSection(type: ContentBlock['type'], content: any, options?: {
    display?: boolean
    variant?: string
    className?: string
  }): this {
    const section: ContentBlock = {
      type,
      content,
      display: options?.display ?? true,
      variant: options?.variant,
      className: options?.className
    } as ContentBlock

    this.config.content!.main.push({
      id: `${type}-${Date.now()}`,
      blocks: [section],
      display: true
    })
    return this
  }

  addHero(content: { title: string; subtitle?: string; description?: string }): this {
    return this.addSection('hero', content)
  }

  addFeatures(features: Array<{ title: string; description: string; icon?: string }>): this {
    return this.addSection('features', { features })
  }

  addExperience(experiences: Array<any>): this {
    return this.addSection('experience', { experiences })
  }

  addSkills(skills: Array<any>, categories?: string[]): this {
    return this.addSection('skills', { skills, categories })
  }

  // Layout methods
  withLayout(template: 'standard' | 'with-sidebar' | 'full-width' | 'minimal'): this {
    this.config.layout!.template = template
    return this
  }

  withMaxWidth(maxWidth: 'xs' | 's' | 'm' | 'l' | 'xl' | 'full'): this {
    this.config.layout!.maxWidth = maxWidth
    return this
  }

  withSidebar(position: 'left' | 'right', width = '240px'): this {
    this.config.layout!.sidebar = {
      position,
      width,
      sticky: true
    }
    return this
  }

  // Navigation methods
  withNavigation(label: string, icon: string, order?: number): this {
    this.config.navigation!.label = label
    this.config.navigation!.icon = icon
    if (order !== undefined) {
      this.config.navigation!.order = order
    }
    return this
  }

  // Effects methods
  withEffects(effects: Partial<VisualEffects>): this {
    this.config.effects = {
      ...this.createDefaultEffects(),
      ...effects
    }
    return this
  }

  // SEO methods
  withSEO(seo: Partial<PageSEO>): this {
    this.config.seo = {
      ...this.config.seo,
      ...seo
    }
    return this
  }

  // Structured data methods
  withStructuredData(type: SchemaType | string, data: Record<string, any>): this {
    this.config.structuredData = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    }
    return this
  }

  // Advanced customization
  customize(customizer: (config: Partial<PageConfig>) => void): this {
    customizer(this.config)
    return this
  }

  // Build the final config
  build(): PageConfig {
    // Validate required fields
    if (!this.config.metadata?.basic.title) {
      throw new Error('Page title is required. Use .withTitle()')
    }
    if (!this.config.metadata?.basic.description) {
      throw new Error('Page description is required. Use .withDescription()')
    }

    return this.config as PageConfig
  }

  // Default creators
  private createDefaultMetadata(): PageMetadataConfig {
    return {
      basic: {
        title: '',
        description: '',
        publishDate: new Date().toISOString(),
        modifiedDate: new Date().toISOString()
      },
      openGraph: {
        type: OpenGraphType.WEBSITE,
        title: '',
        description: '',
        image: '/og-default.jpg',
        alt: '',
        url: this.config.slug
      },
      twitter: {
        card: 'summary_large_image',
        title: '',
        description: ''
      }
    }
  }

  private createDefaultLayout(): PageLayout {
    return {
      template: 'standard',
      maxWidth: 'm',
      navigation: {
        display: true,
        sticky: false
      }
    }
  }

  private createDefaultNavigation(slug: string): PageNavigation {
    const label = slug.replace('/', '').replace(/^\w/, c => c.toUpperCase()) || 'Page'
    return {
      label,
      icon: 'page',
      href: slug,
      enabled: true,
      order: 999
    }
  }

  private createDefaultSEO(): PageSEO {
    return {
      noIndex: false,
      noFollow: false,
      sitemap: {
        priority: 0.5,
        changeFreq: 'monthly'
      }
    }
  }

  private createDefaultEffects(): VisualEffects {
    return {
      mask: {
        cursor: false,
        x: 50,
        y: 50,
        radius: 100
      },
      gradient: {
        display: false,
        x: 0,
        y: 0,
        width: 100,
        height: 100,
        tilt: 0,
        colorStart: 'brand-background-weak',
        colorEnd: 'accent-background-weak',
        opacity: 0.1
      },
      dots: {
        display: false,
        size: 2,
        color: 'neutral-alpha-weak',
        opacity: 0.2
      }
    }
  }
}

// Convenience functions for common page types
export const createAboutPage = (slug = '/about') =>
  PageBuilder.create(PageType.ABOUT, slug)

export const createBlogPage = (slug = '/blog') =>
  PageBuilder.create(PageType.BLOG, slug)

export const createWorkPage = (slug = '/work') =>
  PageBuilder.create(PageType.WORK, slug)

export const createGalleryPage = (slug = '/gallery') =>
  PageBuilder.create(PageType.GALLERY, slug)
