'use client'

import { useState, useEffect, ComponentType } from 'react'

import type { ContentBlock } from '@pageforge/types/page/pageTypes'

import { autoSectionRegistry } from './AutoSectionRegistry'

interface SectionProps {
  block: ContentBlock
  index: number
  posts?: any[]
  data?: any
}

type SectionComponent = ComponentType<SectionProps>

export const AIUniversalSections = ({
  block,
  index,
  posts,
  data
}: SectionProps) => {
  const [SectionComponent, setSectionComponent] =
    useState<SectionComponent | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isAIGenerated, setIsAIGenerated] = useState(false)

  useEffect(() => {
    const loadSection = async () => {
      try {
        setLoading(true)
        setError(null)

        const component = await autoSectionRegistry.loadSection(block.type)

        if (component) {
          setSectionComponent(() => component)
          setIsAIGenerated(autoSectionRegistry.isAIGenerated(block.type))
        } else {
          setError(`Section type '${block.type}' not found`)
        }
      } catch (err) {
        setError(`Failed to load section: ${err}`)
        console.error('Section loading error:', err)
      } finally {
        setLoading(false)
      }
    }

    loadSection()
  }, [block.type])

  if (loading) {
    return (
      <div
        className='section-loading'
        style={{
          padding: '2rem',
          textAlign: 'center',
          background: '#f5f5f5',
          borderRadius: '8px',
          margin: '1rem 0'
        }}
      >
        <div>🔄 Loading section...</div>
      </div>
    )
  }

  if (error || !SectionComponent) {
    console.warn(`Section type '${block.type}' could not be rendered:`, error)

    // Show a fallback for unknown sections instead of returning null
    return (
      <div
        className='section-error'
        style={{
          padding: '2rem',
          textAlign: 'center',
          border: '2px dashed #ff6b6b',
          borderRadius: '8px',
          margin: '1rem 0',
          background: '#fff5f5'
        }}
      >
        <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>❌</div>
        <div style={{ fontWeight: 'bold', marginBottom: '0.5rem' }}>
          Section &quot;{block.type}&quot; not found
        </div>
        <div style={{ fontSize: '0.9rem', color: '#666' }}>
          This section type hasn&apos;t been created yet.
          <br />
          Try asking the AI to generate it for you!
        </div>
      </div>
    )
  }

  // Wrap AI-generated sections with a special indicator
  if (isAIGenerated) {
    return (
      <div className='ai-generated-section' style={{ position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: '0.5rem',
            right: '0.5rem',
            background: '#e3f2fd',
            color: '#1976d2',
            padding: '0.25rem 0.5rem',
            borderRadius: '4px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            zIndex: 10
          }}
        >
          🤖 AI Generated
        </div>
        <SectionComponent
          block={block}
          index={index}
          posts={posts}
          data={data}
        />
      </div>
    )
  }

  return (
    <SectionComponent block={block} index={index} posts={posts} data={data} />
  )
}

// Export with both names for compatibility
export const UniversalSections = AIUniversalSections

// Utility function to generate section from chat
export const generateSectionFromChat = async (
  userMessage: string
): Promise<{
  success: boolean
  sectionType?: string
  message: string
}> => {
  try {
    const { chatSectionGenerator } = await import('./ChatSectionGenerator')

    const result = await chatSectionGenerator.generateSectionFromChat({
      userMessage
    })

    return {
      success: result.success,
      sectionType: result.sectionType,
      message: result.message
    }
  } catch (error) {
    return {
      success: false,
      message: 'Failed to generate section from chat message'
    }
  }
}

// Utility to check available section types (including AI-generated)
export const getAvailableSectionTypes = (): {
  predefined: string[]
  aiGenerated: string[]
  all: string[]
} => {
  const predefined = autoSectionRegistry.getAllSectionTypes()
  const aiGenerated = autoSectionRegistry.getAIGeneratedSections()

  return {
    predefined,
    aiGenerated,
    all: [...predefined, ...aiGenerated]
  }
}

// Utility to preload sections
export const preloadSections = async (
  types: string[] = ['hero', 'features', 'text']
) => {
  const promises = types.map(type => autoSectionRegistry.loadSection(type))
  await Promise.allSettled(promises)
}
