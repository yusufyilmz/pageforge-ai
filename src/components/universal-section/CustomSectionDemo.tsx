// Enhanced Demo showcasing custom section requests
'use client'

import React, { useState } from 'react'

import {
  Flex,
  Heading,
  Text,
  Card,
  Button,
  Textarea,
  Badge,
  Grid
} from '@pageforge/once-ui/components'

import { aiSectionFactory } from './AISectionFactory'

// Example requests that go beyond predefined patterns
const EXAMPLE_CUSTOM_REQUESTS = [
  {
    title: 'Interactive Pricing Calculator',
    description:
      'I need a pricing section with sliders where users can adjust project scope, timeline, and features to see real-time pricing updates',
    category: 'Business Tools'
  },
  {
    title: '3D Product Showcase',
    description:
      'Create a product display with 360-degree view, zoom functionality, and color picker for customization',
    category: 'E-commerce'
  },
  {
    title: 'Event Timeline with RSVP',
    description:
      'I want a timeline showing upcoming events with RSVP buttons, countdown timers, and calendar integration',
    category: 'Events'
  },
  {
    title: 'Skills Assessment Quiz',
    description:
      'Build an interactive quiz section that evaluates user skills and provides personalized recommendations',
    category: 'Education'
  },
  {
    title: 'Recipe Calculator',
    description:
      'A recipe section where users can adjust serving sizes and it automatically recalculates all ingredient amounts',
    category: 'Food & Cooking'
  },
  {
    title: 'Investment Portfolio Tracker',
    description:
      'Create a dashboard showing portfolio performance with charts, gains/losses, and market trends',
    category: 'Finance'
  },
  {
    title: 'Property Comparison Tool',
    description:
      'I need a section where users can compare multiple properties side-by-side with filters and sorting',
    category: 'Real Estate'
  },
  {
    title: 'Workout Plan Builder',
    description:
      'Interactive section where users select fitness goals and get a customized workout plan with exercise videos',
    category: 'Health & Fitness'
  },
  {
    title: 'Color Palette Generator',
    description:
      'Create a tool that generates color palettes based on user preferences with export options',
    category: 'Design Tools'
  },
  {
    title: 'Language Learning Progress',
    description:
      'A section showing learning progress with streaks, achievements, and interactive vocabulary practice',
    category: 'Education'
  }
]

export const CustomSectionDemo = () => {
  const [userInput, setUserInput] = useState('')
  const [generatedSection, setGeneratedSection] = useState<any>(null)
  const [isGenerating, setIsGenerating] = useState(false)

  const handleGenerateSection = async (description: string) => {
    setIsGenerating(true)
    try {
      // Simulate AI processing time
      await new Promise(resolve => setTimeout(resolve, 1500))

      // Generate the section using our enhanced factory
      const requirements = aiSectionFactory.analyzeUserRequirements(description)
      const sectionCode = aiSectionFactory.generateSectionCode(
        requirements,
        'CustomSection'
      )

      setGeneratedSection({
        description,
        requirements,
        code: sectionCode,
        preview: generatePreviewData(requirements)
      })
    } catch (error) {
      console.error('Error generating section:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const generatePreviewData = (requirements: any) => {
    // Generate sample content based on the requirements
    const data: any = {
      title: extractTitle(requirements.description),
      subtitle: 'Generated based on your description'
    }

    // Add sample data based on detected elements
    requirements.elements.forEach((element: any) => {
      switch (element.type) {
        case 'card':
          data.items = generateSampleCards()
          break
        case 'form':
          data.formFields = element.properties?.fields || ['name', 'email']
          break
        case 'chart':
          data.charts = generateSampleCharts()
          break
        case 'timeline':
          data.events = generateSampleEvents()
          break
        case 'counter':
          data.stats = generateSampleStats()
          break
        case 'tabs':
          data.tabs = generateSampleTabs()
          break
        case 'carousel':
          data.slides = generateSampleSlides()
          break
        default:
          break
      }
    })

    return data
  }

  const extractTitle = (description: string): string => {
    // Try to extract a meaningful title from the description
    const titlePatterns = [
      /I need a (.+?) section/i,
      /create a (.+?) with/i,
      /build (.+?) that/i,
      /(.+?) section/i
    ]

    for (const pattern of titlePatterns) {
      const match = description.match(pattern)
      if (match) {
        return match[1].charAt(0).toUpperCase() + match[1].slice(1)
      }
    }

    return 'Custom Section'
  }

  const generateSampleCards = () => [
    {
      name: 'John Doe',
      role: 'Senior Developer',
      bio: 'Passionate about creating amazing user experiences',
      image: '/images/avatar.jpg',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Jane Smith',
      role: 'UX Designer',
      bio: 'Turning complex problems into simple solutions',
      image: '/images/avatar.jpg',
      social: { dribbble: '#', behance: '#' }
    }
  ]

  const generateSampleCharts = () => [
    { title: 'Revenue Growth', type: 'line', data: [10, 20, 30, 40] },
    { title: 'User Engagement', type: 'bar', data: [25, 35, 45, 55] }
  ]

  const generateSampleEvents = () => [
    {
      title: 'Project Kickoff',
      date: '2025-06-01',
      description: 'Initial planning and requirements gathering'
    },
    {
      title: 'Design Phase',
      date: '2025-06-15',
      description: 'UI/UX design and prototyping'
    },
    {
      title: 'Development',
      date: '2025-07-01',
      description: 'Frontend and backend implementation'
    }
  ]

  const generateSampleStats = () => [
    {
      label: 'Projects Completed',
      value: '150+',
      description: 'Successful deliveries'
    },
    {
      label: 'Happy Clients',
      value: '98%',
      description: 'Client satisfaction'
    },
    { label: 'Team Members', value: '25', description: 'Expert professionals' }
  ]

  const generateSampleTabs = () => [
    { title: 'Overview', content: 'General information and introduction' },
    { title: 'Features', content: 'Detailed feature breakdown' },
    { title: 'Pricing', content: 'Pricing plans and options' }
  ]

  const generateSampleSlides = () => [
    {
      title: 'Welcome',
      description: 'Get started with our amazing platform',
      image: '/images/demo.jpg',
      cta: { text: 'Learn More', url: '#' }
    },
    {
      title: 'Features',
      description: 'Discover powerful tools and capabilities',
      image: '/images/demo.jpg',
      cta: { text: 'Try Now', url: '#' }
    }
  ]

  return (
    <Flex direction='column' gap='xl' padding='xl'>
      {/* Header */}
      <Flex direction='column' vertical='center' gap='m'>
        <Badge>AI-Powered Section Generator</Badge>
        <Heading variant='display-strong-xl' align='center'>
          Request Any Custom Section
        </Heading>
        <Text
          variant='body-default-l'
          style={{ textAlign: 'center', maxWidth: '40rem' }}
        >
          Describe any type of section you need - our AI will analyze your
          requirements and generate a complete, functional React component, even
          for complex or unique use cases.
        </Text>
      </Flex>

      {/* Example Requests */}
      <Card padding='l'>
        <Flex direction='column' gap='m'>
          <Heading variant='heading-strong-m'>Popular Custom Requests</Heading>
          <Text variant='body-default-s' onBackground='neutral-weak'>
            Click any example to see how our AI handles complex, specific
            requests
          </Text>
          <Grid columns={2} gap='m'>
            {EXAMPLE_CUSTOM_REQUESTS.map((example, index) => (
              <Card
                key={index}
                padding='m'
                border='neutral-medium'
                style={{
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
                onClick={() => {
                  setUserInput(example.description)
                }}
              >
                <Flex direction='column' gap='s'>
                  <Flex horizontal='space-between' vertical='start'>
                    <Heading variant='heading-strong-s'>
                      {example.title}
                    </Heading>
                    <Badge>{example.category}</Badge>
                  </Flex>
                  <Text variant='body-default-s' onBackground='neutral-weak'>
                    {example.description}
                  </Text>
                </Flex>
              </Card>
            ))}
          </Grid>
        </Flex>
      </Card>

      {/* Input Section */}
      <Card padding='l'>
        <Flex direction='column' gap='m'>
          <Heading variant='heading-strong-m'>
            Describe Your Custom Section
          </Heading>
          <Text variant='body-default-s' onBackground='neutral-weak'>
            Be as specific as possible. Include functionality, layout
            preferences, interactions, and any special requirements.
          </Text>
          <Textarea
            id='section-input'
            placeholder='Example: I need an interactive pricing calculator where users can select different service packages, adjust project timeline with a slider, and see real-time price updates. Include options for rush delivery and premium support with tooltips explaining each option...'
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            rows={5}
          />
          <Button
            variant='primary'
            size='l'
            onClick={() => handleGenerateSection(userInput)}
            disabled={!userInput.trim() || isGenerating}
            loading={isGenerating}
          >
            {isGenerating
              ? 'Analyzing & Generating...'
              : 'Generate Custom Section'}
          </Button>
        </Flex>
      </Card>

      {/* Generated Section Preview */}
      {generatedSection && (
        <Card padding='l' border='accent-medium'>
          <Flex direction='column' gap='l'>
            <Flex direction='column' gap='s'>
              <Badge>Generated Section</Badge>
              <Heading variant='heading-strong-l'>Analysis & Preview</Heading>
              <Text variant='body-default-m' onBackground='neutral-weak'>
                Based on: &quot;{generatedSection.description}&quot;
              </Text>
            </Flex>

            {/* Requirements Analysis */}
            <Card padding='m' border='neutral-medium'>
              <Flex direction='column' gap='m'>
                <Heading variant='heading-strong-s'>
                  Detected Requirements
                </Heading>
                <Grid columns={3} gap='m'>
                  <Flex direction='column' gap='s'>
                    <Text variant='body-default-s' weight='strong'>
                      Layout
                    </Text>
                    <Badge>{generatedSection.requirements.layout}</Badge>
                  </Flex>
                  <Flex direction='column' gap='s'>
                    <Text variant='body-default-s' weight='strong'>
                      Style
                    </Text>
                    <Badge>{generatedSection.requirements.style}</Badge>
                  </Flex>
                  <Flex direction='column' gap='s'>
                    <Text variant='body-default-s' weight='strong'>
                      Elements
                    </Text>
                    <Flex gap='xs' wrap>
                      {generatedSection.requirements.elements.map(
                        (element: any, index: number) => (
                          <Badge key={index}>{element.type}</Badge>
                        )
                      )}
                    </Flex>
                  </Flex>
                </Grid>
                {generatedSection.requirements.customRequirements && (
                  <Flex direction='column' gap='s'>
                    <Text variant='body-default-s' weight='strong'>
                      Custom Requirements
                    </Text>
                    <Text variant='body-default-s' onBackground='neutral-weak'>
                      {generatedSection.requirements.customRequirements}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Card>

            {/* Generated Code Preview */}
            <Card padding='m' border='neutral-medium'>
              <Flex direction='column' gap='s'>
                <Text variant='body-default-s' weight='strong'>
                  Generated React Component
                </Text>
                <div
                  style={{
                    background: 'var(--neutral-50)',
                    padding: '16px',
                    borderRadius: '8px',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    maxHeight: '300px',
                    overflow: 'auto'
                  }}
                >
                  <pre>{generatedSection.code}</pre>
                </div>
              </Flex>
            </Card>

            {/* Action Buttons */}
            <Flex gap='m'>
              <Button variant='primary'>Add to Page</Button>
              <Button variant='secondary'>Customize Further</Button>
              <Button variant='tertiary'>Export Code</Button>
            </Flex>
          </Flex>
        </Card>
      )}

      {/* Features */}
      <Card padding='l'>
        <Flex direction='column' gap='m'>
          <Heading variant='heading-strong-m'>Advanced AI Capabilities</Heading>
          <Grid columns={3} gap='m'>
            <Flex direction='column' gap='s'>
              <Text variant='body-default-s' weight='strong'>
                🧠 Smart Pattern Detection
              </Text>
              <Text variant='body-default-s' onBackground='neutral-weak'>
                Understands complex requirements and maps them to appropriate
                layouts and components
              </Text>
            </Flex>
            <Flex direction='column' gap='s'>
              <Text variant='body-default-s' weight='strong'>
                ⚡ Dynamic Code Generation
              </Text>
              <Text variant='body-default-s' onBackground='neutral-weak'>
                Creates production-ready React components with proper TypeScript
                types and styling
              </Text>
            </Flex>
            <Flex direction='column' gap='s'>
              <Text variant='body-default-s' weight='strong'>
                🎨 Contextual Styling
              </Text>
              <Text variant='body-default-s' onBackground='neutral-weak'>
                Applies appropriate styles and interactions based on the
                described use case
              </Text>
            </Flex>
          </Grid>
        </Flex>
      </Card>
    </Flex>
  )
}
