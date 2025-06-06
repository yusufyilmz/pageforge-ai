'use client'

import React, { useState } from 'react'

import {
  Flex,
  Heading,
  Text,
  Button,
  Card
} from '@pageforge/once-ui/components'

type TemplateType = 'designer' | 'developer' | 'freelancer' | 'profile'

const PreviewPages = () => {
  const [selectedTemplate, setSelectedTemplate] =
    useState<TemplateType>('designer')

  const templates = [
    {
      id: 'designer' as const,
      name: 'Designer Portfolio',
      description:
        'Comprehensive UX/UI designer portfolio with projects, skills, testimonials, and pricing',
      icon: '🎨',
      color: '#8b5cf6',
      sections: [
        'Hero with call-to-action',
        'Statistics showcase',
        'About section with highlights',
        'Featured projects grid',
        'Technical skills by category',
        'Work experience timeline',
        'Client testimonials',
        'Design gallery showcase',
        'Awards & recognition',
        'Service pricing plans',
        'Contact form',
        'Social links',
        'Call-to-action footer'
      ]
    },
    {
      id: 'developer' as const,
      name: 'Developer Portfolio',
      description:
        'Full-stack developer portfolio with comprehensive sections and technical focus',
      icon: '💻',
      color: '#3b82f6',
      sections: [
        'Hero with availability badge',
        'Development statistics',
        'About section with expertise',
        'Technical skills categorized',
        'Featured projects showcase',
        'Professional experience',
        'Working process guide',
        'Client testimonials',
        'Development services pricing',
        'Project contact form',
        'Professional networks',
        'Action-focused CTA'
      ]
    },
    {
      id: 'freelancer' as const,
      name: 'Freelancer Landing',
      description:
        'Professional service-focused landing page with pricing and testimonials',
      icon: '💼',
      color: '#10b981',
      sections: [
        'Service-focused hero',
        'Track record statistics',
        'Services offered grid',
        'Why choose me section',
        'Client testimonials',
        'Service packages pricing',
        'FAQ section',
        'Project inquiry form',
        'Professional connections',
        'Project start CTA'
      ]
    },
    {
      id: 'profile' as const,
      name: 'User Profile',
      description: 'UserContext-integrated profile page with dynamic data',
      icon: '👤',
      color: '#f59e0b',
      sections: [
        'Profile overview with avatar',
        'Professional summary stats',
        'Featured projects from context',
        'Skills from user data',
        'Experience from context',
        'Contact information',
        'Social links from profile'
      ]
    }
  ]

  const currentTemplate = templates.find(t => t.id === selectedTemplate)

  return (
    <Flex direction='column' gap='xl' paddingY='xl' paddingX='l'>
      {/* Header */}
      <Flex direction='column' gap='m' style={{ textAlign: 'center' }}>
        <Heading variant='display-strong-l'>Template Preview Pages 🖼️</Heading>
        <Text variant='body-default-l' onBackground='neutral-weak'>
          View live, rendered pages for each PageForge template
        </Text>
        <Text variant='body-default-m' onBackground='neutral-medium'>
          Select a template below to see the actual rendered page with all
          sections
        </Text>
      </Flex>

      {/* Template Selector */}
      <Flex direction='column' gap='m'>
        <Heading variant='heading-strong-m'>Select Template to Preview</Heading>
        <Flex gap='m' wrap>
          {templates.map(template => (
            <Button
              key={template.id}
              variant={
                selectedTemplate === template.id ? 'primary' : 'secondary'
              }
              size='m'
              onClick={() => setSelectedTemplate(template.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                minWidth: '200px'
              }}
            >
              <Text style={{ fontSize: '1.2rem' }}>{template.icon}</Text>
              {template.name}
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* Template Info */}
      {currentTemplate && (
        <Card padding='l' background='surface'>
          <Flex direction='column' gap='m'>
            <Flex style={{ alignItems: 'center' }} gap='m'>
              <Text style={{ fontSize: '2rem' }}>{currentTemplate.icon}</Text>
              <Flex direction='column' gap='xs'>
                <Heading variant='heading-strong-l'>
                  {currentTemplate.name}
                </Heading>
                <Text variant='body-default-m' onBackground='neutral-medium'>
                  {currentTemplate.description}
                </Text>
              </Flex>
            </Flex>

            <Flex direction='column' gap='s'>
              <Text variant='label-default-s' onBackground='brand-strong'>
                Sections included in this template:
              </Text>
              <Flex direction='column' gap='xs'>
                {currentTemplate.sections.map((section, index) => (
                  <Flex key={index} style={{ alignItems: 'center' }} gap='xs'>
                    <Text
                      variant='body-default-s'
                      style={{ color: currentTemplate.color }}
                    >
                      •
                    </Text>
                    <Text variant='body-default-s'>{section}</Text>
                  </Flex>
                ))}
              </Flex>
            </Flex>

            <Flex gap='m' marginTop='m'>
              <Button
                variant='primary'
                href={`/preview-pages/${selectedTemplate}`}
                prefixIcon='eye'
                arrowIcon
              >
                View Live Preview
              </Button>
              <Button
                variant='secondary'
                href={`/preview/template-comparison?selected=${selectedTemplate}`}
                prefixIcon='compare'
              >
                Compare Template
              </Button>
            </Flex>
          </Flex>
        </Card>
      )}

      {/* Usage Guide */}
      <Card padding='l' background='brand-weak'>
        <Flex direction='column' gap='m'>
          <Heading variant='heading-strong-m'>
            🚀 How to Use Preview Pages
          </Heading>
          <Flex direction='column' gap='s'>
            <Text variant='label-default-s' onBackground='brand-strong'>
              1. Select a Template
            </Text>
            <Text variant='body-default-s'>
              Choose from Designer, Developer, Freelancer, or Profile templates
              above
            </Text>

            <Text variant='label-default-s' onBackground='brand-strong'>
              2. View Live Preview
            </Text>
            <Text variant='body-default-s'>
              Click "View Live Preview" to see the fully rendered page with all
              sections
            </Text>

            <Text variant='label-default-s' onBackground='brand-strong'>
              3. Explore Sections
            </Text>
            <Text variant='body-default-s'>
              Scroll through the preview to see how each section looks and
              functions
            </Text>

            <Text variant='label-default-s' onBackground='brand-strong'>
              4. Compare Templates
            </Text>
            <Text variant='body-default-s'>
              Use the comparison tool to see differences between templates side
              by side
            </Text>
          </Flex>
        </Flex>
      </Card>

      {/* Navigation */}
      <Card padding='l' background='surface'>
        <Flex direction='column' gap='m'>
          <Heading variant='heading-strong-m'>🔗 Related Preview Tools</Heading>
          <Flex gap='m' wrap>
            <Button variant='secondary' href='/preview' prefixIcon='home'>
              Preview Center
            </Button>
            <Button
              variant='secondary'
              href='/preview/template-comparison'
              prefixIcon='compare'
            >
              Template Comparison
            </Button>
            <Button
              variant='secondary'
              href='/preview/quick-generator'
              prefixIcon='zap'
            >
              Quick Generator
            </Button>
            <Button
              variant='secondary'
              href='/preview/sections'
              prefixIcon='grid'
            >
              Section Showcase
            </Button>
          </Flex>
        </Flex>
      </Card>
    </Flex>
  )
}

export default PreviewPages
