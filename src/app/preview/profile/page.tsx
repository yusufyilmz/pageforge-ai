'use client'

import React, { useState } from 'react'

import {
  Flex,
  Text,
  Heading,
  Button,
  Card,
  Grid
} from '@pageforge/once-ui/components'

import { useContextualTemplates } from '../../../lib/hooks/useContextualTemplates'
import { profileTemplate } from '../../../lib/services/page-builder'

// ============================================================================
// PROFILE TEMPLATE & USER CONTEXT DEMO 👤
// Showcasing profileTemplate() and UserContext integration
// ============================================================================

const ProfileDemo = () => {
  const [activeTab, setActiveTab] = useState<
    'template' | 'context' | 'preview'
  >('template')
  const [generatedConfig, setGeneratedConfig] = useState<any>(null)

  // Mock user data for demonstration
  const mockUserProfile = {
    name: 'Jordan',
    lastName: 'Smith',
    role: 'Full Stack Developer',
    email: 'jordan@example.com',
    avatar: '/images/jordan-avatar.jpg',
    location: 'Remote',
    bio: 'Passionate developer with 5+ years of experience building modern web applications.',
    website: 'https://jordansmith.dev'
  }

  const mockUserProjects = [
    {
      title: 'E-commerce Platform',
      description:
        'Modern React-based e-commerce solution with real-time inventory',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      featured: true,
      url: 'https://ecommerce.jordansmith.dev'
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with team features',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'Tailwind'],
      featured: true,
      githubUrl: 'https://github.com/jordan/taskmanager'
    }
  ]

  const contextualTemplates = useContextualTemplates(
    mockUserProfile,
    mockUserProjects
  )

  const generateTemplate = (type: 'basic' | 'contextual') => {
    try {
      const config =
        type === 'basic' ? profileTemplate() : contextualTemplates.profile()

      setGeneratedConfig(config)
      setActiveTab('preview')
    } catch (error) {
      console.error('Error generating template:', error)
    }
  }

  const tabs = [
    { id: 'template', label: 'Profile Template', icon: '📄' },
    { id: 'context', label: 'User Context', icon: '👤' },
    { id: 'preview', label: 'Generated Config', icon: '👁️' }
  ]

  return (
    <Flex direction='column' gap='xl' paddingY='xl' paddingX='l'>
      {/* Header */}
      <Flex direction='column' gap='m' style={{ textAlign: 'center' }}>
        <Heading variant='display-strong-l'>
          Profile Template & UserContext 👤
        </Heading>
        <Text variant='body-default-l' onBackground='neutral-weak'>
          Demonstrating profileTemplate() and contextual user data integration
        </Text>
      </Flex>

      {/* Tab Navigation */}
      <Flex gap='s' style={{ alignSelf: 'center' }}>
        {tabs.map(tab => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? 'primary' : 'secondary'}
            size='s'
            onClick={() => setActiveTab(tab.id as any)}
            style={{ minWidth: '120px' }}
          >
            {tab.icon} {tab.label}
          </Button>
        ))}
      </Flex>

      {/* Template Usage Tab */}
      {activeTab === 'template' && (
        <Flex direction='column' gap='l'>
          <Card padding='l' background='surface'>
            <Flex direction='column' gap='m'>
              <Heading variant='heading-strong-m'>
                📄 Profile Template Function
              </Heading>
              <Text variant='body-default-m' onBackground='neutral-medium'>
                The profileTemplate() function creates a UserContext-integrated
                profile page
              </Text>

              <Flex direction='column' gap='s'>
                <Text variant='label-default-s' onBackground='brand-strong'>
                  Basic Usage:
                </Text>
                <pre
                  style={{
                    background: 'var(--neutral-weak)',
                    padding: '12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    overflow: 'auto'
                  }}
                >
                  {`import { profileTemplate } from '@/lib/services/page-builder'

// Creates a profile page that works with UserContext
const config = profileTemplate()

// The template automatically integrates with:
// - useUser() hook for profile data
// - useUserProjects() for project listings
// - useUserSkills() for skills display
// - useUserSocialLinks() for social media`}
                </pre>
              </Flex>

              <Button
                variant='primary'
                size='m'
                onClick={() => generateTemplate('basic')}
              >
                Generate Basic Profile Template
              </Button>
            </Flex>
          </Card>

          <Card padding='l' background='surface'>
            <Flex direction='column' gap='m'>
              <Heading variant='heading-strong-m'>
                🪝 Contextual Integration
              </Heading>
              <Text variant='body-default-m' onBackground='neutral-medium'>
                Use contextual templates for automatic user data transformation
              </Text>

              <Flex direction='column' gap='s'>
                <Text variant='label-default-s' onBackground='brand-strong'>
                  Advanced Usage:
                </Text>
                <pre
                  style={{
                    background: 'var(--neutral-weak)',
                    padding: '12px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    overflow: 'auto'
                  }}
                >
                  {`import { useContextualTemplates } from '@/lib/hooks/useContextualTemplates'

const templates = useContextualTemplates(userProfile, userProjects)
const config = templates.profile()

// Automatically transforms user context data to PageForge format
// Handles data mapping, validation, and optimization`}
                </pre>
              </Flex>

              <Button
                variant='primary'
                size='m'
                onClick={() => generateTemplate('contextual')}
              >
                Generate Contextual Profile Template
              </Button>
            </Flex>
          </Card>
        </Flex>
      )}

      {/* User Context Tab */}
      {activeTab === 'context' && (
        <Flex direction='column' gap='l'>
          <Card padding='l' background='surface'>
            <Flex direction='column' gap='m'>
              <Heading variant='heading-strong-m'>👤 Mock User Data</Heading>
              <Text variant='body-default-m' onBackground='neutral-medium'>
                Sample user data that would typically come from UserContext
              </Text>

              <Grid columns='2' gap='m'>
                <Flex direction='column' gap='s'>
                  <Text variant='label-default-s' onBackground='brand-strong'>
                    Profile Information:
                  </Text>
                  <pre
                    style={{
                      background: 'var(--neutral-weak)',
                      padding: '12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      overflow: 'auto'
                    }}
                  >
                    {JSON.stringify(mockUserProfile, null, 2)}
                  </pre>
                </Flex>

                <Flex direction='column' gap='s'>
                  <Text variant='label-default-s' onBackground='brand-strong'>
                    Projects Data:
                  </Text>
                  <pre
                    style={{
                      background: 'var(--neutral-weak)',
                      padding: '12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      overflow: 'auto',
                      maxHeight: '200px'
                    }}
                  >
                    {JSON.stringify(mockUserProjects, null, 2)}
                  </pre>
                </Flex>
              </Grid>
            </Flex>
          </Card>

          <Card padding='l' background='brand-weak'>
            <Flex direction='column' gap='m'>
              <Heading variant='heading-strong-m'>
                🔄 Data Transformation
              </Heading>
              <Text variant='body-default-m'>
                How contextual templates transform user data into PageForge
                format
              </Text>

              <Grid columns='3' gap='m'>
                <Flex direction='column' gap='s'>
                  <Text variant='label-default-s' onBackground='brand-strong'>
                    Input
                  </Text>
                  <Text variant='body-default-s'>User context data</Text>
                  <Text variant='body-default-s'>Various formats</Text>
                  <Text variant='body-default-s'>Flexible structure</Text>
                </Flex>
                <Flex
                  direction='column'
                  gap='s'
                  style={{ textAlign: 'center' }}
                >
                  <Text variant='label-default-s' onBackground='brand-strong'>
                    Transform
                  </Text>
                  <Text style={{ fontSize: '2rem' }}>🔄</Text>
                  <Text variant='body-default-s'>useContextualTemplates</Text>
                </Flex>
                <Flex direction='column' gap='s'>
                  <Text variant='label-default-s' onBackground='brand-strong'>
                    Output
                  </Text>
                  <Text variant='body-default-s'>PageConfig format</Text>
                  <Text variant='body-default-s'>Standardized structure</Text>
                  <Text variant='body-default-s'>Ready to render</Text>
                </Flex>
              </Grid>
            </Flex>
          </Card>
        </Flex>
      )}

      {/* Preview Tab */}
      {activeTab === 'preview' && (
        <Flex direction='column' gap='l'>
          {generatedConfig ? (
            <>
              <Card padding='l' background='surface'>
                <Flex direction='column' gap='m'>
                  <Heading variant='heading-strong-m'>
                    👁️ Generated Configuration
                  </Heading>
                  <Grid columns='3' gap='m'>
                    <Flex direction='column' gap='s'>
                      <Text
                        variant='label-default-s'
                        onBackground='brand-strong'
                      >
                        Page Type
                      </Text>
                      <Text variant='body-default-s'>
                        {generatedConfig.pageType}
                      </Text>
                    </Flex>
                    <Flex direction='column' gap='s'>
                      <Text
                        variant='label-default-s'
                        onBackground='brand-strong'
                      >
                        Sections
                      </Text>
                      <Text variant='body-default-s'>
                        {generatedConfig.content?.length || 0}
                      </Text>
                    </Flex>
                    <Flex direction='column' gap='s'>
                      <Text
                        variant='label-default-s'
                        onBackground='brand-strong'
                      >
                        Theme
                      </Text>
                      <Text variant='body-default-s'>
                        {generatedConfig.theme || 'default'}
                      </Text>
                    </Flex>
                  </Grid>
                </Flex>
              </Card>

              <Card padding='l' background='surface'>
                <Flex direction='column' gap='m'>
                  <Heading variant='heading-strong-m'>
                    🔍 Full Configuration
                  </Heading>
                  <pre
                    style={{
                      background: 'var(--neutral-weak)',
                      padding: '12px',
                      borderRadius: '6px',
                      fontSize: '11px',
                      overflow: 'auto',
                      maxHeight: '400px'
                    }}
                  >
                    {JSON.stringify(generatedConfig, null, 2)}
                  </pre>
                </Flex>
              </Card>
            </>
          ) : (
            <Card
              padding='l'
              background='surface'
              style={{ textAlign: 'center' }}
            >
              <Flex direction='column' gap='m' style={{ alignItems: 'center' }}>
                <Text style={{ fontSize: '3rem' }}>📄</Text>
                <Heading variant='heading-strong-m'>
                  No Configuration Generated
                </Heading>
                <Text variant='body-default-m' onBackground='neutral-medium'>
                  Use the Template tab to generate a profile configuration
                </Text>
                <Button
                  variant='primary'
                  size='m'
                  onClick={() => setActiveTab('template')}
                >
                  Go to Template Tab
                </Button>
              </Flex>
            </Card>
          )}
        </Flex>
      )}

      {/* Key Features */}
      <Card padding='l' background='brand-weak'>
        <Flex direction='column' gap='m'>
          <Heading variant='heading-strong-m'>
            ✨ Profile Template Features
          </Heading>
          <Grid columns='2' gap='m'>
            <Flex direction='column' gap='s'>
              <Text variant='label-default-s' onBackground='brand-strong'>
                Built-in Sections
              </Text>
              <Text variant='body-default-s'>
                • Hero with profile information
              </Text>
              <Text variant='body-default-s'>• Featured projects showcase</Text>
              <Text variant='body-default-s'>• Skills categorization</Text>
              <Text variant='body-default-s'>• Contact information</Text>
            </Flex>
            <Flex direction='column' gap='s'>
              <Text variant='label-default-s' onBackground='brand-strong'>
                Context Integration
              </Text>
              <Text variant='body-default-s'>• Automatic data binding</Text>
              <Text variant='body-default-s'>• Real-time updates</Text>
              <Text variant='body-default-s'>• Theme compatibility</Text>
              <Text variant='body-default-s'>• SEO optimization</Text>
            </Flex>
          </Grid>
        </Flex>
      </Card>
    </Flex>
  )
}

export default ProfileDemo
