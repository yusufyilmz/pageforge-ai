'use client'

import React, { useState } from 'react'

import {
  Flex,
  Text,
  Button,
  Heading,
  Grid
} from '@pageforge/once-ui/components'

import { useContextualTemplates } from '../../../lib/hooks/useContextualTemplates'
import {
  developerTemplate,
  designerTemplate,
  freelancerTemplate,
  profileTemplate
} from '../../../lib/services/page-builder'

// ============================================================================
// SIMPLIFIED TEMPLATE SYSTEM DEMO 🎯
// ============================================================================

const EnhancedTemplatesDemo = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)
  const [generatedConfig, setGeneratedConfig] = useState<any>(null)

  // Mock user data for contextual templates
  const mockUserProfile = {
    name: 'Jordan',
    lastName: 'Smith',
    role: 'Full Stack Developer',
    email: 'jordan@example.com',
    location: 'San Francisco, CA',
    bio: 'Passionate developer with 5+ years of experience building modern web applications.',
    website: 'https://jordansmith.dev'
  }

  const mockUserProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Modern React-based e-commerce solution',
      technologies: ['React', 'Node.js', 'PostgreSQL'],
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool',
      technologies: ['Next.js', 'TypeScript', 'Prisma'],
      featured: true
    }
  ]

  const contextualTemplates = useContextualTemplates(
    mockUserProfile,
    mockUserProjects
  )

  const templates = [
    {
      id: 'developer',
      title: 'Developer Template',
      description: 'Comprehensive full-stack developer portfolio',
      generator: () => developerTemplate(),
      icon: '💻'
    },
    {
      id: 'designer',
      title: 'Designer Template',
      description: 'UX/UI designer portfolio with comprehensive content',
      generator: () => designerTemplate(),
      icon: '🎨'
    },
    {
      id: 'freelancer',
      title: 'Freelancer Template',
      description: 'Professional freelancer landing page',
      generator: () => freelancerTemplate(),
      icon: '💼'
    },
    {
      id: 'profile',
      title: 'Profile Template',
      description: 'User context-integrated profile page',
      generator: () => profileTemplate(),
      icon: '👤'
    },
    {
      id: 'contextual-developer',
      title: 'Contextual Developer',
      description: 'Developer template with user data',
      generator: () => contextualTemplates.developer(),
      icon: '💻📊'
    },
    {
      id: 'contextual-designer',
      title: 'Contextual Designer',
      description: 'Designer template with user data',
      generator: () => contextualTemplates.designer(),
      icon: '🎨📊'
    }
  ]

  const generateTemplate = (templateId: string) => {
    const template = templates.find(t => t.id === templateId)
    if (!template) {
      return
    }

    try {
      const config = template.generator()
      setGeneratedConfig(config)
      setSelectedTemplate(templateId)
    } catch (error) {
      console.error('Error generating template:', error)
    }
  }

  return (
    <Flex direction='column' gap='xl' paddingY='xl' paddingX='l'>
      <Flex direction='column' gap='m' style={{ textAlign: 'center' }}>
        <Heading variant='display-strong-l'>
          Simplified Template System 🎯
        </Heading>
        <Text variant='body-default-l' onBackground='neutral-weak'>
          Clean architecture with direct template functions and contextual hooks
        </Text>
      </Flex>

      {/* Template Grid */}
      <Grid columns='3' gap='l'>
        {templates.map(template => (
          <Flex
            key={template.id}
            direction='column'
            padding='l'
            gap='m'
            radius='m'
            border='neutral-weak'
            background={
              selectedTemplate === template.id ? 'brand-weak' : 'surface'
            }
            style={{ cursor: 'pointer' }}
            onClick={() => generateTemplate(template.id)}
          >
            <Flex style={{ alignItems: 'center' }} gap='s'>
              <Text style={{ fontSize: '2rem' }}>{template.icon}</Text>
              <Heading variant='heading-strong-s'>{template.title}</Heading>
            </Flex>
            <Text variant='body-default-s' onBackground='neutral-medium'>
              {template.description}
            </Text>
            <Button size='s' variant='secondary'>
              Generate
            </Button>
          </Flex>
        ))}
      </Grid>

      {/* Architecture Benefits */}
      <Flex
        direction='column'
        gap='m'
        padding='l'
        radius='m'
        background='surface'
      >
        <Heading variant='heading-strong-m'>
          Clean Architecture Benefits
        </Heading>
        <Grid columns='2' gap='m'>
          <Flex direction='column' gap='s'>
            <Text variant='label-default-m' onBackground='brand-medium'>
              ✅ Removed
            </Text>
            <Text variant='body-default-s'>• TemplateBuilder class</Text>
            <Text variant='body-default-s'>
              • ContextualTemplateBuilder class
            </Text>
            <Text variant='body-default-s'>• Basic template functions</Text>
            <Text variant='body-default-s'>• Complex builder patterns</Text>
          </Flex>
          <Flex direction='column' gap='s'>
            <Text variant='label-default-m' onBackground='brand-medium'>
              ✨ Kept
            </Text>
            <Text variant='body-default-s'>
              • PageBuilder (manual building)
            </Text>
            <Text variant='body-default-s'>• Direct template functions</Text>
            <Text variant='body-default-s'>• Simple contextual hooks</Text>
            <Text variant='body-default-s'>• Clean exports</Text>
          </Flex>
        </Grid>
      </Flex>

      {/* Generated Config Preview */}
      {generatedConfig && (
        <Flex
          direction='column'
          gap='m'
          padding='l'
          radius='m'
          background='surface'
        >
          <Heading variant='heading-strong-m'>
            Generated Config: {selectedTemplate}
          </Heading>
          <Text variant='body-default-s' onBackground='neutral-medium'>
            Page Type: {generatedConfig.pageType}
          </Text>
          <Text variant='body-default-s' onBackground='neutral-medium'>
            Sections: {generatedConfig.content?.length || 0}
          </Text>
          <Text variant='body-default-s' onBackground='neutral-medium'>
            Theme: {generatedConfig.theme || 'default'}
          </Text>
          <pre
            style={{
              background: 'var(--neutral-weak)',
              padding: '12px',
              borderRadius: '6px',
              fontSize: '12px',
              overflow: 'auto',
              maxHeight: '300px'
            }}
          >
            {JSON.stringify(generatedConfig, null, 2)}
          </pre>
        </Flex>
      )}

      {/* Usage Examples */}
      <Flex
        direction='column'
        gap='m'
        padding='l'
        radius='m'
        background='surface'
      >
        <Heading variant='heading-strong-m'>Simple Usage Examples</Heading>

        <Flex direction='column' gap='s'>
          <Text variant='label-default-s' onBackground='brand-medium'>
            Direct Functions:
          </Text>
          <pre
            style={{
              background: 'var(--neutral-weak)',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          >
            {`import { developerTemplate, designerTemplate } from '@/lib/services/page-builder'

// Simple usage
const config = developerTemplate()
const designConfig = designerTemplate(userProfile, userProjects)`}
          </pre>
        </Flex>

        <Flex direction='column' gap='s'>
          <Text variant='label-default-s' onBackground='brand-medium'>
            Contextual Hooks:
          </Text>
          <pre
            style={{
              background: 'var(--neutral-weak)',
              padding: '8px',
              borderRadius: '4px',
              fontSize: '12px'
            }}
          >
            {`import { useContextualTemplates } from '@/lib/hooks/useContextualTemplates'

const templates = useContextualTemplates(userProfile, userProjects)
const config = templates.developer() // Uses user data automatically`}
          </pre>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default EnhancedTemplatesDemo
