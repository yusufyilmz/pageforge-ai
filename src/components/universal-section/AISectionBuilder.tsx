'use client'

import React, { useState, ChangeEvent } from 'react'
import {
  aiSectionGenerator,
  UserRequirement,
  SectionIntent,
  GeneratedSectionSpec
} from './AISectionGenerator'
import {
  Flex,
  Heading,
  Text,
  Button,
  Column,
  Input,
  Textarea
} from '@pageforge/once-ui/components'

interface AISectionBuilderProps {
  onSectionsGenerated: (sections: GeneratedSectionSpec[]) => void
  onClose: () => void
}

export const AISectionBuilder = ({
  onSectionsGenerated,
  onClose
}: AISectionBuilderProps) => {
  const [userInput, setUserInput] = useState('')
  const [industry, setIndustry] = useState('')
  const [pageType, setPageType] = useState<
    | 'landing'
    | 'about'
    | 'product'
    | 'service'
    | 'portfolio'
    | 'blog'
    | 'contact'
    | 'custom'
  >('landing')
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedIntents, setGeneratedIntents] = useState<SectionIntent[]>([])
  const [step, setStep] = useState<'input' | 'review' | 'generate'>('input')

  const handleAnalyze = async () => {
    if (!userInput.trim()) return

    setIsGenerating(true)
    try {
      const requirement: UserRequirement = {
        description: userInput,
        context: 'AI chat session',
        industry: industry || undefined,
        pageType,
        businessGoals: []
      }

      const intents =
        await aiSectionGenerator.analyzeAndGenerateSections(requirement)
      setGeneratedIntents(intents)
      setStep('review')
    } catch (error) {
      console.error('Error analyzing requirements:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const handleGenerateSections = async () => {
    setIsGenerating(true)
    try {
      const requirement: UserRequirement = {
        description: userInput,
        context: 'AI chat session',
        industry: industry || undefined,
        pageType,
        businessGoals: []
      }

      const specifications: GeneratedSectionSpec[] = []

      for (const intent of generatedIntents) {
        const spec = await aiSectionGenerator.generateSectionSpecification(
          intent,
          requirement
        )
        specifications.push(spec)
      }

      onSectionsGenerated(specifications)
      setStep('generate')
    } catch (error) {
      console.error('Error generating sections:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  const removeIntent = (index: number) => {
    setGeneratedIntents(prev => prev.filter((_, i) => i !== index))
  }

  const updateIntentPriority = (index: number, newPriority: number) => {
    setGeneratedIntents(prev => {
      const updated = [...prev]
      updated[index].priority = newPriority
      return updated.sort((a, b) => a.priority - b.priority)
    })
  }

  if (step === 'input') {
    return (
      <Flex direction="column" gap="l" fillWidth>
        <Heading variant="heading-strong-l">AI Section Builder</Heading>
        <Text variant="body-default-m">
          Describe what you want on your webpage, and I&apos;ll automatically
          generate the appropriate sections for you.
        </Text>

        <Column fillWidth gap="m">
          <Textarea
            placeholder="Example: I want a landing page for my Italian restaurant. I need to show our menu, location, contact form, and customer reviews. The main focus should be on our authentic cuisine and cozy atmosphere."
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
            rows={4}
            label="Describe your webpage requirements"
            id={''}
          />

          <Input
            placeholder="e.g., restaurant, agency, ecommerce, saas"
            value={industry}
            onChange={e => setIndustry(e.target.value)}
            label="Industry (optional)"
            id={''}
          />

          <select
            value={pageType}
            onChange={e => setPageType(e.target.value as any)}
            style={{
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
          >
            <option value="landing">Landing Page</option>
            <option value="about">About Page</option>
            <option value="product">Product Page</option>
            <option value="service">Service Page</option>
            <option value="portfolio">Portfolio Page</option>
            <option value="blog">Blog Page</option>
            <option value="contact">Contact Page</option>
            <option value="custom">Custom Page</option>
          </select>
        </Column>

        <Flex gap="m">
          <Button
            variant="primary"
            size="m"
            onClick={handleAnalyze}
            disabled={!userInput.trim() || isGenerating}
          >
            {isGenerating ? 'Analyzing...' : 'Analyze Requirements'}
          </Button>
          <Button variant="secondary" size="m" onClick={onClose}>
            Cancel
          </Button>
        </Flex>
      </Flex>
    )
  }

  if (step === 'review') {
    return (
      <Flex direction="column" gap="l" fillWidth>
        <Heading variant="heading-strong-l">Review Generated Sections</Heading>
        <Text variant="body-default-m">
          I&apos;ve analyzed your requirements and suggest these sections. You
          can remove or reorder them before generating.
        </Text>

        <Column fillWidth gap="s">
          {generatedIntents.map((intent, index) => (
            <Flex
              key={index}
              padding="m"
              gap="m"
              align="center"
              style={{
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                backgroundColor: '#f9f9f9'
              }}
            >
              <Flex direction="column" fillWidth gap="xs">
                <Heading variant="heading-strong-s">
                  {intent.type
                    .replace(/-/g, ' ')
                    .replace(/\b\w/g, l => l.toUpperCase())}
                </Heading>
                <Text variant="body-default-s" style={{ color: '#666' }}>
                  {intent.purpose}
                </Text>
                <Text variant="label-default-xs">
                  Priority: {intent.priority} | Layout: {intent.layout}
                </Text>
              </Flex>

              <Flex gap="s" align="center">
                <input
                  type="number"
                  value={intent.priority}
                  onChange={e =>
                    updateIntentPriority(index, parseInt(e.target.value))
                  }
                  style={{
                    width: '60px',
                    padding: '4px',
                    border: '1px solid #ccc',
                    borderRadius: '4px'
                  }}
                />
                <Button
                  variant="tertiary"
                  size="s"
                  onClick={() => removeIntent(index)}
                  style={{ color: '#ff4444' }}
                >
                  Remove
                </Button>
              </Flex>
            </Flex>
          ))}
        </Column>

        <Flex gap="m">
          <Button
            variant="primary"
            size="m"
            onClick={handleGenerateSections}
            disabled={generatedIntents.length === 0 || isGenerating}
          >
            {isGenerating
              ? 'Generating...'
              : `Generate ${generatedIntents.length} Sections`}
          </Button>
          <Button variant="secondary" size="m" onClick={() => setStep('input')}>
            Back to Edit
          </Button>
        </Flex>
      </Flex>
    )
  }

  return (
    <Flex direction="column" gap="l" fillWidth align="center">
      <Heading variant="heading-strong-l">✅ Sections Generated!</Heading>
      <Text variant="body-default-m" style={{ textAlign: 'center' }}>
        Your custom sections have been generated and are ready to use.
        They&apos;ve been automatically added to your page.
      </Text>
      <Button variant="primary" size="m" onClick={onClose}>
        Done
      </Button>
    </Flex>
  )
}

// Hook for easy integration with chat systems
export const useAISectionGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false)

  const generateSectionsFromChat = async (
    chatMessage: string,
    context?: any
  ): Promise<GeneratedSectionSpec[]> => {
    setIsGenerating(true)
    try {
      // Extract industry and page type from context if available
      const industry =
        context?.industry || extractIndustryFromMessage(chatMessage)
      const pageType =
        context?.pageType || extractPageTypeFromMessage(chatMessage)

      const requirement: UserRequirement = {
        description: chatMessage,
        context: 'chat conversation',
        industry,
        pageType,
        targetAudience: context?.targetAudience,
        businessGoals: context?.businessGoals
      }

      const intents =
        await aiSectionGenerator.analyzeAndGenerateSections(requirement)
      const specifications: GeneratedSectionSpec[] = []

      for (const intent of intents) {
        const spec = await aiSectionGenerator.generateSectionSpecification(
          intent,
          requirement
        )
        specifications.push(spec)
      }

      return specifications
    } finally {
      setIsGenerating(false)
    }
  }

  return {
    generateSectionsFromChat,
    isGenerating
  }
}

// Helper functions for chat integration
const extractIndustryFromMessage = (message: string): string | undefined => {
  const industries = [
    'restaurant',
    'agency',
    'ecommerce',
    'saas',
    'healthcare',
    'portfolio',
    'retail',
    'consulting'
  ]
  const lowerMessage = message.toLowerCase()

  for (const industry of industries) {
    if (lowerMessage.includes(industry)) {
      return industry
    }
  }

  // Check for industry keywords
  if (
    lowerMessage.includes('food') ||
    lowerMessage.includes('menu') ||
    lowerMessage.includes('dining')
  ) {
    return 'restaurant'
  }
  if (
    lowerMessage.includes('design') ||
    lowerMessage.includes('marketing') ||
    lowerMessage.includes('creative')
  ) {
    return 'agency'
  }
  if (
    lowerMessage.includes('product') ||
    lowerMessage.includes('shop') ||
    lowerMessage.includes('store')
  ) {
    return 'ecommerce'
  }
  if (
    lowerMessage.includes('software') ||
    lowerMessage.includes('app') ||
    lowerMessage.includes('platform')
  ) {
    return 'saas'
  }

  return undefined
}

const extractPageTypeFromMessage = (
  message: string
):
  | 'landing'
  | 'about'
  | 'product'
  | 'service'
  | 'portfolio'
  | 'blog'
  | 'contact'
  | 'custom' => {
  const lowerMessage = message.toLowerCase()

  if (lowerMessage.includes('about') || lowerMessage.includes('who we are'))
    return 'about'
  if (lowerMessage.includes('product')) return 'product'
  if (lowerMessage.includes('service')) return 'service'
  if (
    lowerMessage.includes('portfolio') ||
    lowerMessage.includes('work') ||
    lowerMessage.includes('gallery')
  )
    return 'portfolio'
  if (lowerMessage.includes('blog') || lowerMessage.includes('articles'))
    return 'blog'
  if (lowerMessage.includes('contact')) return 'contact'

  return 'landing' // Default
}
