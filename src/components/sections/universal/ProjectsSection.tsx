'use client'

import React from 'react'
import {
  Column,
  Flex,
  Heading,
  Text,
  SmartImage,
  Button
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  ProjectsSectionContent
} from '@pageforge/types/page/pageTypes'

interface ProjectsSectionProps {
  block: Extract<ContentBlock, { type: 'projects' }>
  index: number
}

export const ProjectsSection = ({ block, index }: ProjectsSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    title = 'Projects',
    subtitle,
    layout = 'grid',
    columns = 3,
    showDescription = true,
    showTechnology = true,
    projects = [],
    range
  } = content

  const displayProjects = range ? projects.slice(range[0], range[1]) : projects

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="xl"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {/* Header */}
      <Column horizontal="center" align="center" gap="m" maxWidth="l">
        {title && (
          <Heading as="h2" variant="display-strong-l" wrap="balance">
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text
            variant="heading-default-m"
            onBackground="neutral-weak"
            wrap="balance"
          >
            {subtitle}
          </Text>
        )}
      </Column>

      {/* Projects Grid */}
      <Flex
        fillWidth
        wrap
        gap="l"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(320px, 1fr))`,
          gap: '1.5rem'
        }}
      >
        {displayProjects.map((project, projectIndex) => (
          <Column
            key={projectIndex}
            gap="m"
            padding="m"
            radius="l"
            border="neutral-alpha-weak"
            borderStyle="solid"
          >
            {/* Project Image */}
            {project.image && (
              <SmartImage
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
            )}

            {/* Project Content */}
            <Column gap="s">
              <Heading as="h3" variant="heading-strong-m">
                {project.title}
              </Heading>

              {showDescription && project.description && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {project.description}
                </Text>
              )}

              {showTechnology && project.technologies && (
                <Flex gap="xs" wrap>
                  {project.technologies.map((tech, techIndex) => (
                    <Column
                      key={techIndex}
                      background="neutral-alpha-weak"
                      padding="xs"
                      radius="s"
                    >
                      <Text variant="label-default-xs">{tech}</Text>
                    </Column>
                  ))}
                </Flex>
              )}

              {/* Project Links */}
              <Flex gap="s" marginTop="s">
                {project.link && (
                  <Button
                    href={project.link}
                    variant="secondary"
                    size="s"
                    suffixIcon="externalLink"
                  >
                    View Project
                  </Button>
                )}
                {project.github && (
                  <Button
                    href={project.github}
                    variant="tertiary"
                    size="s"
                    prefixIcon="github"
                  >
                    Code
                  </Button>
                )}
              </Flex>
            </Column>
          </Column>
        ))}
      </Flex>
    </Column>
  )
}
