'use client'

import React, { useState, useCallback } from 'react'
import {
  Flex,
  Column,
  Text,
  Button,
  Heading,
  Grid
} from '@pageforge/once-ui/components'
import {
  developerTemplate,
  designerTemplate,
  freelancerTemplate,
  createAboutPageFromTemplate,
  type PersonData,
  type ProjectData,
  type AboutPageTemplate
} from '@/lib/services/page-builder'
import { TemplateSelector } from './TemplateSelector'
import { ContentEditor } from './ContentEditor'
import { PagePreview } from './PagePreview'
import { AIWebsiteGenerator } from './AIWebsiteGenerator'

export interface PageBuilderState {
  selectedTemplate: 'developer' | 'designer' | 'freelancer' | 'custom' | null
  personData: PersonData
  projects: ProjectData[]
  customConfig?: Partial<AboutPageTemplate>
  generatedConfig: any
}

export const PageBuilderInterface: React.FC = () => {
  const [state, setState] = useState<PageBuilderState>({
    selectedTemplate: null,
    personData: {
      name: '',
      lastName: '',
      role: '',
      email: '',
      bio: '',
      avatar: '',
      location: '',
      website: ''
    },
    projects: [],
    generatedConfig: null
  })

  const [currentStep, setCurrentStep] = useState<
    'template' | 'content' | 'preview' | 'export'
  >('template')

  const handleTemplateSelect = useCallback(
    (template: PageBuilderState['selectedTemplate']) => {
      setState(prev => ({ ...prev, selectedTemplate: template }))
      setCurrentStep('content')
    },
    []
  )

  const handleContentUpdate = useCallback(
    (updates: Partial<PageBuilderState>) => {
      setState(prev => ({ ...prev, ...updates }))
      generatePageConfig({ ...state, ...updates })
    },
    [state]
  )

  const generatePageConfig = useCallback((currentState: PageBuilderState) => {
    if (!currentState.selectedTemplate || !currentState.personData.name) {
      return
    }

    let config: any
    try {
      switch (currentState.selectedTemplate) {
        case 'developer':
          config = developerTemplate(
            currentState.personData,
            currentState.projects
          )
          break
        case 'designer':
          config = designerTemplate(
            currentState.personData,
            currentState.projects
          )
          break
        case 'freelancer':
          config = freelancerTemplate(currentState.personData)
          break
        case 'custom':
          config = createAboutPageFromTemplate({
            person: currentState.personData,
            projects: currentState.projects,
            ...currentState.customConfig
          })
          break
        default:
          return
      }

      setState(prev => ({ ...prev, generatedConfig: config }))
    } catch (error) {
      console.error('Error generating page config:', error)
    }
  }, [])

  const handleNextStep = useCallback(() => {
    switch (currentStep) {
      case 'template':
        setCurrentStep('content')
        break
      case 'content':
        generatePageConfig(state)
        setCurrentStep('preview')
        break
      case 'preview':
        setCurrentStep('export')
        break
    }
  }, [currentStep, state, generatePageConfig])

  const handlePrevStep = useCallback(() => {
    switch (currentStep) {
      case 'export':
        setCurrentStep('preview')
        break
      case 'preview':
        setCurrentStep('content')
        break
      case 'content':
        setCurrentStep('template')
        break
    }
  }, [currentStep])

  const canProceed = () => {
    switch (currentStep) {
      case 'template':
        return state.selectedTemplate !== null
      case 'content':
        return (
          state.personData.name &&
          state.personData.lastName &&
          state.personData.role
        )
      case 'preview':
        return state.generatedConfig !== null
      default:
        return true
    }
  }

  const steps = ['template', 'content', 'preview', 'export'] as const

  return (
    <Flex
      direction="column"
      padding="xl"
      gap="xl"
      className="page-builder-interface"
    >
      {/* Header */}
      <Flex direction="column" gap="m" alignItems="center" textAlign="center">
        <Heading variant="display-strong-l">PageForge Visual Builder</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Create professional pages in minutes with our revolutionary template
          system
        </Text>

        {/* Progress Indicator */}
        <Flex gap="s" alignItems="center">
          {steps.map((step, index) => (
            <Flex key={step} alignItems="center" gap="xs">
              <Flex
                width="32"
                height="32"
                radius="full"
                justifyContent="center"
                alignItems="center"
                background={
                  currentStep === step
                    ? 'brand-strong'
                    : index < steps.indexOf(currentStep)
                      ? 'brand-medium'
                      : 'neutral-weak'
                }
              >
                <Text
                  variant="label-default-s"
                  style={{
                    color:
                      currentStep === step || index < steps.indexOf(currentStep)
                        ? 'brand-on-solid'
                        : 'neutral-medium'
                  }}
                >
                  {index + 1}
                </Text>
              </Flex>
              <Text
                variant="label-default-s"
                style={{ textTransform: 'capitalize' }}
              >
                {step}
              </Text>
              {index < 3 && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  →
                </Text>
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>

      {/* Main Content */}
      <Grid columns="1" gap="xl">
        {currentStep === 'template' && (
          <TemplateSelector
            selectedTemplate={state.selectedTemplate}
            onTemplateSelect={handleTemplateSelect}
          />
        )}

        {currentStep === 'content' && (
          <ContentEditor
            selectedTemplate={state.selectedTemplate}
            personData={state.personData}
            projects={state.projects}
            customConfig={state.customConfig}
            onUpdate={handleContentUpdate}
          />
        )}

        {currentStep === 'preview' && state.generatedConfig && (
          <PagePreview
            config={state.generatedConfig}
            personData={state.personData}
          />
        )}

        {currentStep === 'export' && state.generatedConfig && (
          <AIWebsiteGenerator
            selectedTemplate={state.selectedTemplate}
            personData={state.personData}
            projects={state.projects}
            customConfig={state.customConfig}
            generatedConfig={state.generatedConfig}
          />
        )}
      </Grid>

      {/* Navigation */}
      <Flex justifyContent="space-between" paddingTop="l">
        <Button
          variant="secondary"
          onClick={handlePrevStep}
          disabled={currentStep === 'template'}
        >
          Previous
        </Button>

        <Flex gap="s">
          <Text variant="body-default-s" onBackground="neutral-weak">
            Step {steps.indexOf(currentStep) + 1} of 4
          </Text>
        </Flex>

        <Button
          variant="primary"
          onClick={handleNextStep}
          disabled={!canProceed() || currentStep === 'export'}
        >
          {currentStep === 'preview' ? 'Generate Code' : 'Next'}
        </Button>
      </Flex>
    </Flex>
  )
}
