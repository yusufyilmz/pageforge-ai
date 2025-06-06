'use client'

import type {
  PersonData,
  ProjectData,
  AboutPageTemplate
} from '@pageforge/lib/services/page-builder'
import {
  Flex,
  Text,
  Button,
  Heading,
  Input,
  Grid
} from '@pageforge/once-ui/components'
import type { PageType } from '@pageforge/types/page/pageTypes'

interface ContentEditorProps {
  selectedTemplate: PageType | null
  personData: PersonData
  projects: ProjectData[]
  customConfig?: Partial<AboutPageTemplate>
  onUpdate: (updates: any) => void
}

export const ContentEditor: React.FC<ContentEditorProps> = ({
  selectedTemplate,
  personData,
  projects,
  onUpdate
}) => {
  const handlePersonDataChange =
    (field: keyof PersonData) =>
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onUpdate({
        personData: {
          ...personData,
          [field]: event.target.value
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
    <Flex direction='column' gap='xl'>
      <Flex direction='column' gap='m' style={{ textAlign: 'center' }}>
        <Heading variant='display-strong-m'>Tell Us About Yourself</Heading>
        <Text variant='body-default-l' onBackground='neutral-weak'>
          Fill in your information to generate your professional page
        </Text>
      </Flex>

      {/* Personal Information */}
      <Flex
        direction='column'
        gap='l'
        padding='l'
        radius='m'
        background='neutral-weak'
      >
        <Heading variant='heading-strong-m'>Personal Information</Heading>

        <Grid columns='2' gap='m'>
          <Flex direction='column' gap='xs'>
            <Text variant='label-default-s'>First Name *</Text>
            <Input
              value={personData.name}
              onChange={handlePersonDataChange('name')}
              placeholder='John'
              id={''}
            />
          </Flex>

          <Flex direction='column' gap='xs'>
            <Text variant='label-default-s'>Last Name *</Text>
            <Input
              value={personData.lastName}
              onChange={handlePersonDataChange('lastName')}
              placeholder='Doe'
              id={''}
            />
          </Flex>
        </Grid>

        <Flex direction='column' gap='xs'>
          <Text variant='label-default-s'>Professional Role *</Text>
          <Input
            value={personData.role}
            onChange={handlePersonDataChange('role')}
            placeholder='Full Stack Developer'
            id={''}
          />
        </Flex>

        <Grid columns='2' gap='m'>
          <Flex direction='column' gap='xs'>
            <Text variant='label-default-s'>Email</Text>
            <Input
              value={personData.email || ''}
              onChange={handlePersonDataChange('email')}
              placeholder='john@example.com'
              id={''}
            />
          </Flex>

          <Flex direction='column' gap='xs'>
            <Text variant='label-default-s'>Location</Text>
            <Input
              value={personData.location || ''}
              onChange={handlePersonDataChange('location')}
              placeholder='San Francisco, CA'
              id={''}
            />
          </Flex>
        </Grid>

        <Flex direction='column' gap='xs'>
          <Text variant='label-default-s'>Bio/Description</Text>
          <Input
            value={personData.bio || ''}
            onChange={handlePersonDataChange('bio')}
            placeholder='Tell us about yourself...'
            id={''}
          />
        </Flex>

        <Grid columns='2' gap='m'>
          <Flex direction='column' gap='xs'>
            <Text variant='label-default-s'>Website</Text>
            <Input
              value={personData.website || ''}
              onChange={handlePersonDataChange('website')}
              placeholder='https://johndoe.dev'
              id={''}
            />
          </Flex>

          <Flex direction='column' gap='xs'>
            <Text variant='label-default-s'>Avatar URL</Text>
            <Input
              value={personData.avatar || ''}
              onChange={handlePersonDataChange('avatar')}
              placeholder='/images/avatar.jpg'
              id={''}
            />
          </Flex>
        </Grid>
      </Flex>

      {/* Projects Section - Only show for relevant templates */}
      {(selectedTemplate === 'developer' ||
        selectedTemplate === 'designer') && (
        <Flex
          direction='column'
          gap='l'
          padding='l'
          radius='m'
          background='neutral-weak'
        >
          <Flex
            style={{ justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Heading variant='heading-strong-m'>Projects</Heading>
            <Button variant='secondary' onClick={addProject}>
              Add Project
            </Button>
          </Flex>

          {projects.length === 0 ? (
            <Flex
              direction='column'
              gap='m'
              padding='xl'
              style={{
                textAlign: 'center',
                border: '2px dashed var(--neutral-medium)',
                borderRadius: '8px'
              }}
            >
              <Text variant='body-default-m' onBackground='neutral-medium'>
                No projects added yet
              </Text>
              <Button variant='primary' onClick={addProject}>
                Add Your First Project
              </Button>
            </Flex>
          ) : (
            <Flex direction='column' gap='m'>
              {projects.map((project, index) => (
                <Flex
                  key={index}
                  direction='column'
                  gap='m'
                  padding='m'
                  radius='s'
                  border='neutral-medium'
                  background='surface'
                >
                  <Flex
                    style={{
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <Text variant='label-default-m'>Project {index + 1}</Text>
                    <Button
                      variant='tertiary'
                      size='s'
                      onClick={() => removeProject(index)}
                    >
                      Remove
                    </Button>
                  </Flex>

                  <Grid columns='2' gap='m'>
                    <Flex direction='column' gap='xs'>
                      <Text variant='label-default-s'>Project Title</Text>
                      <Input
                        value={project.title}
                        onChange={event =>
                          updateProject(index, { title: event.target.value })
                        }
                        placeholder='E-commerce Platform'
                        id={''}
                      />
                    </Flex>

                    <Flex direction='column' gap='xs'>
                      <Text variant='label-default-s'>Project URL</Text>
                      <Input
                        value={project.url || ''}
                        onChange={event =>
                          updateProject(index, { url: event.target.value })
                        }
                        placeholder='https://project.com'
                        id={''}
                      />
                    </Flex>
                  </Grid>

                  <Flex direction='column' gap='xs'>
                    <Text variant='label-default-s'>Description</Text>
                    <Input
                      value={project.description}
                      onChange={event =>
                        updateProject(index, {
                          description: event.target.value
                        })
                      }
                      placeholder='Describe your project...'
                      id={''}
                    />
                  </Flex>

                  <Grid columns='2' gap='m'>
                    <Flex direction='column' gap='xs'>
                      <Text variant='label-default-s'>
                        Technologies (comma-separated)
                      </Text>
                      <Input
                        value={project.technologies.join(', ')}
                        onChange={event =>
                          updateProject(index, {
                            technologies: event.target.value
                              .split(',')
                              .map(t => t.trim())
                              .filter(Boolean)
                          })
                        }
                        placeholder='React, Node.js, PostgreSQL'
                        id={''}
                      />
                    </Flex>

                    <Flex direction='column' gap='xs'>
                      <Text variant='label-default-s'>GitHub URL</Text>
                      <Input
                        value={project.githubUrl || ''}
                        onChange={event =>
                          updateProject(index, {
                            githubUrl: event.target.value
                          })
                        }
                        placeholder='https://github.com/user/repo'
                        id={''}
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
        direction='column'
        gap='m'
        padding='l'
        radius='m'
        background='brand-weak'
        style={{ textAlign: 'center' }}
      >
        <Heading variant='heading-strong-m'>✨ Almost Ready!</Heading>
        <Text variant='body-default-m' onBackground='brand-medium'>
          Your {selectedTemplate} template will be generated with the
          information above
        </Text>
        {selectedTemplate === 'freelancer' && (
          <Text variant='body-default-s' onBackground='neutral-medium'>
            Freelancer template includes service highlights and call-to-action
            sections
          </Text>
        )}
      </Flex>
    </Flex>
  )
}
