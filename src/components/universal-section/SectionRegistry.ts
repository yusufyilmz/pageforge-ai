import { ComponentType } from 'react'
import { ContentBlock } from '@pageforge/types/page/pageTypes'

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
    if (!importFn) return null

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
    return (
      type
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Section'
    )
  }

  getRegisteredTypes(): string[] {
    return Array.from(this.sections.keys())
  }
}

// Global registry instance
export const sectionRegistry = new SectionRegistry()

// Auto-register all sections
sectionRegistry.register(
  'hero',
  () => import('../sections/universal/HeroSection')
)
sectionRegistry.register(
  'features',
  () => import('../sections/universal/FeaturesSection')
)
sectionRegistry.register(
  'experience',
  () => import('../sections/universal/WorkExperienceSection')
)
sectionRegistry.register(
  'studies',
  () => import('../sections/universal/StudiesSection')
)
sectionRegistry.register(
  'skills',
  () => import('../sections/universal/TechnicalSkillsSection')
)
sectionRegistry.register(
  'socials',
  () => import('../sections/universal/SocialLinksSection')
)
sectionRegistry.register(
  'gallery',
  () => import('../sections/universal/GalleryGridSection')
)
sectionRegistry.register(
  'newsletter',
  () => import('../sections/universal/NewsletterSection')
)
sectionRegistry.register(
  'table-of-contents',
  () => import('../sections/universal/TableOfContentsSection')
)
sectionRegistry.register(
  'calendar-link',
  () => import('../sections/universal/CalendarLinkSection')
)
sectionRegistry.register(
  'projects',
  () => import('../sections/universal/ProjectsSection')
)
sectionRegistry.register(
  'posts-grid',
  () => import('../sections/universal/PostsGridSection')
)
sectionRegistry.register(
  'about-hero',
  () => import('../sections/universal/AboutHeroSection')
)
sectionRegistry.register(
  'heading',
  () => import('../sections/universal/HeadingSection')
)
sectionRegistry.register(
  'text',
  () => import('../sections/universal/TextSection')
)
sectionRegistry.register(
  'contact-form',
  () => import('../sections/universal/ContactFormSection')
)
sectionRegistry.register(
  'testimonials',
  () => import('../sections/universal/TestimonialsSection')
)
sectionRegistry.register(
  'pricing',
  () => import('../sections/universal/PricingSection')
)
sectionRegistry.register(
  'faq',
  () => import('../sections/universal/FAQSection')
)
sectionRegistry.register(
  'profile',
  () => import('../sections/universal/ProfileSection')
)
sectionRegistry.register(
  'timeline',
  () => import('../sections/universal/TimelineSection')
)
sectionRegistry.register(
  'contact-info',
  () => import('../sections/universal/ContactInfoSection')
)
sectionRegistry.register(
  'about',
  () => import('../sections/universal/AboutSection')
)
sectionRegistry.register(
  'map',
  () => import('../sections/universal/MapSection')
)
sectionRegistry.register(
  'blog-page',
  () => import('../sections/universal/BlogPageSection')
)
sectionRegistry.register(
  'shop-items',
  () => import('../sections/universal/ShopItemsSection')
)
sectionRegistry.register(
  'plans',
  () => import('../sections/universal/PlansSection')
)
sectionRegistry.register(
  'how-to',
  () => import('../sections/universal/HowToSection')
)
sectionRegistry.register(
  'menu',
  () => import('../sections/universal/MenuSection')
)
sectionRegistry.register(
  'property',
  () => import('../sections/universal/PropertySection')
)
sectionRegistry.register(
  'legal-text',
  () => import('../sections/universal/LegalTextSection')
)
sectionRegistry.register(
  'careers',
  () => import('../sections/universal/CareersSection')
)
