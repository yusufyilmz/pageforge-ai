import type { ComponentType } from 'react'

import type { ContentBlock } from '@pageforge/types/page/pageTypes'

interface SectionProps {
  block: ContentBlock
  index: number
  posts?: any[]
  data?: any
}

type SectionComponent = ComponentType<SectionProps>

class SectionRegistry {
  private sections = new Map<string, () => Promise<any>>()

  register(type: string, importFn: () => Promise<any>) {
    this.sections.set(type, importFn)
  }

  async getSection(type: string): Promise<SectionComponent | null> {
    const importFn = this.sections.get(type)
    if (!importFn) {
      return null
    }

    try {
      const moduleExports = await importFn()
      // Handle both named and default exports
      const componentName = this.getComponentName(type)
      return moduleExports[componentName] || moduleExports.default || null
    } catch (error) {
      console.error(`Failed to load section: ${type}`, error)
      return null
    }
  }

  private getComponentName(type: string): string {
    // Convert type to component name (e.g., 'hero' -> 'HeroSection')
    return `${type
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('')}Section`
  }

  getRegisteredTypes(): string[] {
    return Array.from(this.sections.keys())
  }
}

// Global registry instance
export const sectionRegistry = new SectionRegistry()

// Auto-register all sections
sectionRegistry.register('hero', () => import('../sections/HeroSection'))
sectionRegistry.register(
  'features',
  () => import('../sections/FeaturesSection')
)
sectionRegistry.register(
  'experience',
  () => import('../sections/WorkExperienceSection')
)
sectionRegistry.register('studies', () => import('../sections/StudiesSection'))
sectionRegistry.register(
  'skills',
  () => import('../sections/TechnicalSkillsSection')
)
sectionRegistry.register(
  'socials',
  () => import('../sections/SocialLinksSection')
)
sectionRegistry.register(
  'gallery',
  () => import('../sections/GalleryGridSection')
)
sectionRegistry.register(
  'newsletter',
  () => import('../sections/NewsletterSection')
)
sectionRegistry.register(
  'table-of-contents',
  () => import('../sections/TableOfContentsSection')
)
sectionRegistry.register(
  'calendar-link',
  () => import('../sections/CalendarLinkSection')
)
sectionRegistry.register(
  'projects',
  () => import('../sections/ProjectsSection')
)
sectionRegistry.register(
  'posts-grid',
  () => import('../sections/PostsGridSection')
)
sectionRegistry.register(
  'about-hero',
  () => import('../sections/AboutHeroSection')
)
sectionRegistry.register('heading', () => import('../sections/HeadingSection'))
sectionRegistry.register('text', () => import('../sections/TextSection'))
sectionRegistry.register(
  'contact-form',
  () => import('../sections/ContactFormSection')
)
sectionRegistry.register(
  'testimonials',
  () => import('../sections/TestimonialsSection')
)
sectionRegistry.register('pricing', () => import('../sections/PricingSection'))
sectionRegistry.register('faq', () => import('../sections/FAQSection'))
sectionRegistry.register('profile', () => import('../sections/ProfileSection'))
sectionRegistry.register(
  'timeline',
  () => import('../sections/TimelineSection')
)
sectionRegistry.register(
  'contact-info',
  () => import('../sections/ContactInfoSection')
)
sectionRegistry.register('about', () => import('../sections/AboutSection'))
sectionRegistry.register('map', () => import('../sections/MapSection'))
sectionRegistry.register(
  'blog-page',
  () => import('../sections/BlogPageSection')
)
sectionRegistry.register(
  'shop-items',
  () => import('../sections/ShopItemsSection')
)
sectionRegistry.register('plans', () => import('../sections/PlansSection'))
sectionRegistry.register('how-to', () => import('../sections/HowToSection'))
sectionRegistry.register('menu', () => import('../sections/MenuSection'))
sectionRegistry.register(
  'property',
  () => import('../sections/PropertySection')
)
sectionRegistry.register(
  'legal-text',
  () => import('../sections/LegalTextSection')
)
sectionRegistry.register('careers', () => import('../sections/CareersSection'))
