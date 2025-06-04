'use client'

import React from 'react'
import {
  Flex,
  Text,
  Button,
  Heading,
  Grid
} from '@pageforge/once-ui/components'

interface TemplateSelectorProps {
  selectedTemplate: 'developer' | 'designer' | 'freelancer' | 'custom' | null
  onTemplateSelect: (
    template: 'developer' | 'designer' | 'freelancer' | 'custom'
  ) => void
}

export const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateSelect
}) => {
  const templates = [
    {
      id: 'developer' as const,
      title: 'Developer Portfolio',
      description: 'Perfect for software engineers and developers',
      features: [
        'Project showcase',
        'Technical skills',
        'Experience timeline',
        'GitHub integration'
      ],
      icon: '💻',
      preview: '/images/templates/developer-preview.jpg'
    },
    {
      id: 'designer' as const,
      title: 'Designer Portfolio',
      description: 'Showcase your creative work beautifully',
      features: [
        'Masonry layout',
        'Visual project gallery',
        'Design tools',
        'Creative skills'
      ],
      icon: '🎨',
      preview: '/images/templates/designer-preview.jpg'
    },
    {
      id: 'freelancer' as const,
      title: 'Freelancer Landing',
      description: 'Professional landing page for services',
      features: [
        'Service highlights',
        'Call-to-action',
        'Testimonials',
        'Contact forms'
      ],
      icon: '💼',
      preview: '/images/templates/freelancer-preview.jpg'
    },
    {
      id: 'custom' as const,
      title: 'Custom About Page',
      description: 'Build your own with flexible sections',
      features: [
        'Choose sections',
        'Custom layout',
        'Flexible content',
        'Full control'
      ],
      icon: '⚙️',
      preview: '/images/templates/custom-preview.jpg'
    }
  ]

  return (
    <Flex direction="column" gap="xl">
      <Flex direction="column" gap="m" style={{ textAlign: 'center' }}>
        <Heading variant="display-strong-m">Choose Your Template</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Select a template that best fits your profession and goals
        </Text>
      </Flex>

      <Grid columns="2" gap="l">
        {templates.map(template => (
          <Flex
            key={template.id}
            direction="column"
            padding="l"
            gap="m"
            radius="m"
            border="neutral-weak"
            background={
              selectedTemplate === template.id ? 'brand-weak' : 'neutral-weak'
            }
            style={{
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              position: 'relative'
            }}
            onClick={() => onTemplateSelect(template.id)}
          >
            {/* Template Icon & Title */}
            <Flex direction="column" gap="s">
              <Flex style={{ alignItems: 'center' }} gap="s">
                <Text variant="display-strong-s" style={{ fontSize: '2rem' }}>
                  {template.icon}
                </Text>
                <Heading variant="heading-strong-m">{template.title}</Heading>
              </Flex>
              <Text variant="body-default-m" onBackground="neutral-medium">
                {template.description}
              </Text>
            </Flex>

            {/* Features List */}
            <Flex direction="column" gap="xs">
              <Text variant="label-default-s" onBackground="neutral-strong">
                Features:
              </Text>
              {template.features.map((feature, index) => (
                <Flex key={index} style={{ alignItems: 'center' }} gap="xs">
                  <Text
                    variant="body-default-s"
                    style={{ color: 'var(--brand-medium)' }}
                  >
                    ✓
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-medium">
                    {feature}
                  </Text>
                </Flex>
              ))}
            </Flex>

            {/* Selection Indicator */}
            {selectedTemplate === template.id && (
              <Flex
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--brand-strong)',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Text variant="label-default-xs" style={{ color: 'white' }}>
                  ✓
                </Text>
              </Flex>
            )}

            {/* Call to Action */}
            <Button
              variant={
                selectedTemplate === template.id ? 'primary' : 'secondary'
              }
              size="m"
              style={{ marginTop: 'auto' }}
              onClick={e => {
                e.stopPropagation()
                onTemplateSelect(template.id)
              }}
            >
              {selectedTemplate === template.id
                ? 'Selected'
                : 'Select Template'}
            </Button>
          </Flex>
        ))}
      </Grid>

      {/* Benefits Section */}
      <Flex
        direction="column"
        gap="m"
        padding="l"
        radius="m"
        background="brand-weak"
        style={{ textAlign: 'center' }}
      >
        <Heading variant="heading-strong-m">
          🚀 Revolutionary Page Creation
        </Heading>
        <Text variant="body-default-m" onBackground="brand-medium">
          Our templates reduce development time from hours to minutes
        </Text>
        <Flex style={{ justifyContent: 'center' }} gap="xl">
          <Flex direction="column" gap="xs" style={{ alignItems: 'center' }}>
            <Text
              variant="display-strong-m"
              style={{ color: 'var(--brand-strong)' }}
            >
              98%
            </Text>
            <Text variant="label-default-s" onBackground="neutral-medium">
              Less Code
            </Text>
          </Flex>
          <Flex direction="column" gap="xs" style={{ alignItems: 'center' }}>
            <Text
              variant="display-strong-m"
              style={{ color: 'var(--brand-strong)' }}
            >
              1-3
            </Text>
            <Text variant="label-default-s" onBackground="neutral-medium">
              Lines of Code
            </Text>
          </Flex>
          <Flex direction="column" gap="xs" style={{ alignItems: 'center' }}>
            <Text
              variant="display-strong-m"
              style={{ color: 'var(--brand-strong)' }}
            >
              ∞
            </Text>
            <Text variant="label-default-s" onBackground="neutral-medium">
              Possibilities
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  )
}
