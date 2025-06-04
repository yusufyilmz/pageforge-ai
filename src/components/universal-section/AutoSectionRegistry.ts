import { ComponentType } from 'react'
import { ContentBlock } from '@pageforge/types/page/pageTypes'
import { aiSectionFactory } from './AISectionFactory'

interface SectionProps {
  block: ContentBlock
  index: number
  posts?: any[]
  data?: any
}

type SectionComponent = ComponentType<SectionProps>

// Auto-discovery approach using dynamic imports
export class AutoSectionRegistry {
  private sections = new Map<string, SectionComponent>()
  private sectionTypes: string[] = []
  private aiGeneratedSections = new Set<string>()

  constructor() {
    // Define all available section types
    this.sectionTypes = [
      'hero',
      'features',
      'experience',
      'studies',
      'skills',
      'socials',
      'gallery',
      'newsletter',
      'table-of-contents',
      'calendar-link',
      'projects',
      'posts-grid',
      'about-hero',
      'heading',
      'text',
      'contact-form',
      'testimonials',
      'pricing',
      'faq',
      'profile',
      'timeline',
      'contact-info',
      'about',
      'map',
      'blog-page',
      'shop-items',
      'plans',
      'how-to',
      'menu',
      'property',
      'legal-text',
      'careers'
    ]
  }

  private getComponentName(type: string): string {
    // Convert kebab-case to PascalCase + Section
    // e.g., 'table-of-contents' -> 'TableOfContentsSection'
    return (
      type
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('') + 'Section'
    )
  }

  async loadSection(type: string): Promise<SectionComponent | null> {
    // Check if already loaded
    if (this.sections.has(type)) {
      return this.sections.get(type)!
    }

    // Try loading predefined section first
    const predefinedSection = await this.loadPredefinedSection(type)
    if (predefinedSection) {
      return predefinedSection
    }

    // Check if it's an AI-generated section
    const aiSection = aiSectionFactory.getGeneratedSection(type)
    if (aiSection) {
      this.sections.set(type, aiSection)
      this.aiGeneratedSections.add(type)
      return aiSection
    }

    console.warn(
      `Section type '${type}' not found in predefined or AI-generated sections`
    )
    return null
  }

  private async loadPredefinedSection(
    type: string
  ): Promise<SectionComponent | null> {
    try {
      const componentName = this.getComponentName(type)

      // Special case mappings for components that don't follow the naming convention
      const specialMappings: Record<string, string> = {
        experience: 'WorkExperienceSection',
        skills: 'TechnicalSkillsSection'
      }

      const finalComponentName = specialMappings[type] || componentName
      const fileName = finalComponentName.replace('Section', 'Section')

      // Dynamic import
      const moduleExports = await import(`../sections/universal/${fileName}`)
      const SectionComponent = moduleExports[finalComponentName]

      if (SectionComponent) {
        this.sections.set(type, SectionComponent)
        return SectionComponent
      }

      return null
    } catch (error) {
      // Not a predefined section
      return null
    }
  }

  // Generate new section from AI description
  async generateSectionFromAI(
    userDescription: string,
    sectionName?: string
  ): Promise<string | null> {
    try {
      const { component, config } =
        await aiSectionFactory.generateSectionFromDescription(
          userDescription,
          sectionName
        )

      // Add to registry
      this.sections.set(config.type, component)
      this.aiGeneratedSections.add(config.type)

      // Add to section types
      if (!this.sectionTypes.includes(config.type)) {
        this.sectionTypes.push(config.type)
      }

      console.log(
        `✅ Generated AI section: ${config.name} (type: ${config.type})`
      )
      return config.type
    } catch (error) {
      console.error('Failed to generate AI section:', error)
      return null
    }
  }

  // Check if section is AI-generated
  isAIGenerated(type: string): boolean {
    return this.aiGeneratedSections.has(type)
  }

  // Get all AI-generated sections
  getAIGeneratedSections(): string[] {
    return Array.from(this.aiGeneratedSections)
  }

  getAllSectionTypes(): string[] {
    return [...this.sectionTypes]
  }

  // Method to add new section types dynamically
  addSectionType(type: string): void {
    if (!this.sectionTypes.includes(type)) {
      this.sectionTypes.push(type)
    }
  }
}

// Global registry instance
export const autoSectionRegistry = new AutoSectionRegistry()
