'use client'

import React from 'react'
import {
  Flex,
  Text,
  Button,
  Heading,
  Input,
  Grid
} from '@pageforge/once-ui/components'
import {
  PersonData,
  ProjectData,
  AboutPageTemplate
} from '@/lib/services/page-builder'

interface ContentEditorProps {
  selectedTemplate: 'developer' | 'designer' | 'freelancer' | 'custom' | null
  personData: PersonData
  projects: ProjectData[]
  customConfig?: Partial<AboutPageTemplate>
  onUpdate: (updates: any) => void
}

export const ContentEditor: React.FC<ContentEditorProps> = ({
  selectedTemplate,
  personData,
  projects,
  customConfig,
  onUpdate
}) => {
  const handlePersonDataChange =
    (field: keyof PersonData) => (value: string) => {
      onUpdate({
        personData: {
          ...personData,
          [field]: value
        }
      })
    }

  const addProject = () => {
    const newProject: ProjectData = {
      title: '',
      description: '',
      technologies: [],
      featured: false
    }
    onUpdate({
      projects: [...projects, newProject]
    })
  }

  const updateProject = (index: number, updates: Partial<ProjectData>) => {
    const updatedProjects = [...projects]
    updatedProjects[index] = { ...updatedProjects[index], ...updates }
    onUpdate({ projects: updatedProjects })
  }

  const removeProject = (index: number) => {
    const updatedProjects = projects.filter((_, i) => i !== index)
    onUpdate({ projects: updatedProjects })
  }

  return (
    <Flex direction="column" gap="xl">
      <Flex direction="column" gap="m" style={{ textAlign: 'center' }}>
        <Heading variant="display-strong-m">Tell Us About Yourself</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Fill in your information to generate your professional page
        </Text>
      </Flex>

      {/* Personal Information */}
      <Flex
        direction="column"
        gap="l"
        padding="l"
        radius="m"
        background="neutral-weak"
      >
        <Heading variant="heading-strong-m">Personal Information</Heading>

        <Grid columns="2" gap="m">
          <Flex direction="column" gap="xs">
            <Text variant="label-default-s">First Name *</Text>
            <Input
              value={personData.name}
              onChange={handlePersonDataChange('name')}
              placeholder="John"
            />
          </Flex>

          <Flex direction="column" gap="xs">
            <Text variant="label-default-s">Last Name *</Text>
            <Input
              value={personData.lastName}
              onChange={handlePersonDataChange('lastName')}
              placeholder="Doe"
            />
          </Flex>
        </Grid>

        <Flex direction="column" gap="xs">
          <Text variant="label-default-s">Professional Role *</Text>
          <Input
            value={personData.role}
            onChange={handlePersonDataChange('role')}
            placeholder="Full Stack Developer"
          />
        </Flex>

        <Grid columns="2" gap="m">
          <Flex direction="column" gap="xs">
            <Text variant="label-default-s">Email</Text>
            <Input
              value={personData.email || ''}
              onChange={handlePersonDataChange('email')}
              placeholder="john@example.com"
            />
          </Flex>

          <Flex direction="column" gap="xs">
            <Text variant="label-default-s">Location</Text>
            <Input
              value={personData.location || ''}
              onChange={handlePersonDataChange('location')}
              placeholder="San Francisco, CA"
            />
          </Flex>
        </Grid>

        <Flex direction="column" gap="xs">
          <Text variant="label-default-s">Bio/Description</Text>
          <Input
            value={personData.bio || ''}
            onChange={handlePersonDataChange('bio')}
            placeholder="Tell us about yourself..."
          />
        </Flex>

        <Grid columns="2" gap="m">
          <Flex direction="column" gap="xs">
            <Text variant="label-default-s">Website</Text>
            <Input
              value={personData.website || ''}
              onChange={handlePersonDataChange('website')}
              placeholder="https://johndoe.dev"
            />
          </Flex>

          <Flex direction="column" gap="xs">
            <Text variant="label-default-s">Avatar URL</Text>
            <Input
              value={personData.avatar || ''}
              onChange={handlePersonDataChange('avatar')}
              placeholder="/images/avatar.jpg"
            />
          </Flex>
        </Grid>
      </Flex>

      {/* Projects Section - Only show for relevant templates */}
      {(selectedTemplate === 'developer' ||
        selectedTemplate === 'designer' ||
        selectedTemplate === 'custom') && (
        <Flex
          direction="column"
          gap="l"
          padding="l"
          radius="m"
          background="neutral-weak"
        >
          <Flex
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Heading variant="heading-strong-m">Projects</Heading>
            <Button variant="secondary" onClick={addProject}>
              Add Project
            </Button>
          </Flex>

          {projects.length === 0 ? (
            <Flex
              direction="column"
              gap="m"
              padding="xl"
              style={{
                textAlign: 'center',
                border: '2px dashed var(--neutral-medium)',
                borderRadius: '8px'
              }}
            >
              <Text variant="body-default-m" onBackground="neutral-medium">
                No projects added yet
              </Text>
              <Button variant="primary" onClick={addProject}>
                Add Your First Project
              </Button>
            </Flex>
          ) : (
            <Flex direction="column" gap="m">
              {projects.map((project, index) => (
                <Flex
                  key={index}
                  direction="column"
                  gap="m"
                  padding="m"
                  radius="s"
                  border="neutral-medium"
                  background="surface-medium"
                >
                  <Flex
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Text variant="label-default-m">Project {index + 1}</Text>
                    <Button
                      variant="tertiary"
                      size="s"
                      onClick={() => removeProject(index)}
                    >
                      Remove
                    </Button>
                  </Flex>

                  <Grid columns="2" gap="m">
                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-s">Project Title</Text>
                      <Input
                        value={project.title}
                        onChange={value =>
                          updateProject(index, { title: value })
                        }
                        placeholder="E-commerce Platform"
                      />
                    </Flex>

                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-s">Project URL</Text>
                      <Input
                        value={project.url || ''}
                        onChange={value => updateProject(index, { url: value })}
                        placeholder="https://project.com"
                      />
                    </Flex>
                  </Grid>

                  <Flex direction="column" gap="xs">
                    <Text variant="label-default-s">Description</Text>
                    <Input
                      value={project.description}
                      onChange={value =>
                        updateProject(index, { description: value })
                      }
                      placeholder="Describe your project..."
                    />
                  </Flex>

                  <Grid columns="2" gap="m">
                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-s">
                        Technologies (comma-separated)
                      </Text>
                      <Input
                        value={project.technologies.join(', ')}
                        onChange={value =>
                          updateProject(index, {
                            technologies: value
                              .split(',')
                              .map(t => t.trim())
                              .filter(Boolean)
                          })
                        }
                        placeholder="React, Node.js, PostgreSQL"
                      />
                    </Flex>

                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-s">GitHub URL</Text>
                      <Input
                        value={project.githubUrl || ''}
                        onChange={value =>
                          updateProject(index, { githubUrl: value })
                        }
                        placeholder="https://github.com/user/repo"
                      />
                    </Flex>
                  </Grid>
                </Flex>
              ))}
            </Flex>
          )}
        </Flex>
      )}

      {/* Template-specific information */}
      <Flex
        direction="column"
        gap="m"
        padding="l"
        radius="m"
        background="brand-weak"
        style={{ textAlign: 'center' }}
      >
        <Heading variant="heading-strong-m">✨ Almost Ready!</Heading>
        <Text variant="body-default-m" onBackground="brand-medium">
          Your {selectedTemplate} template will be generated with the
          information above
        </Text>
        {selectedTemplate === 'freelancer' && (
          <Text variant="body-default-s" onBackground="neutral-medium">
            Freelancer template includes service highlights and call-to-action
            sections
          </Text>
        )}
      </Flex>
    </Flex>
  )
}
