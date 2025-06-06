'use client'

import { Column, Flex, Heading, Text } from '@pageforge/once-ui/components'
import type { ContentBlock } from '@pageforge/types/page/pageTypes'

interface WorkExperienceSectionProps {
  block: Extract<ContentBlock, { type: 'experience' }>
  index: number
}

export const ExperienceSection = ({
  block,
  index
}: WorkExperienceSectionProps) => {
  const content = block.content

  if (block.display === false) {
    return null
  }

  const { title = 'Work Experience', experiences } = content

  return (
    <Column
      key={index}
      fillWidth
      maxWidth='l'
      horizontal='center'
      gap='xl'
      padding='xl'
      className={block.className}
    >
      {/* Header */}
      <Column horizontal='center' align='center' gap='m'>
        <Heading as='h2' variant='display-strong-l'>
          {title}
        </Heading>
      </Column>

      {/* Experiences */}
      <Column fillWidth gap='xl'>
        {experiences.map((experience, expIndex: number) => (
          <Column key={`${experience.company}-${expIndex}`} gap='m'>
            <Flex fillWidth horizontal='space-between' vertical='center'>
              <Text variant='heading-strong-l'>{experience.company}</Text>
              <Text variant='body-default-s' onBackground='neutral-weak'>
                {experience.timeframe}
              </Text>
            </Flex>
            <Text variant='body-default-m' onBackground='accent-weak'>
              {experience.role}
            </Text>
            <Column as='ul' gap='s'>
              {experience.achievements.map((achievement, achIndex: number) => (
                <Text as='li' variant='body-default-m' key={achIndex}>
                  {achievement}
                </Text>
              ))}
            </Column>
            {experience.images && experience.images.length > 0 && (
              <Flex fillWidth paddingTop='m' gap='m' wrap>
                {experience.images.map((image, imgIndex: number) => (
                  <Flex
                    key={imgIndex}
                    border='neutral-alpha-weak'
                    borderStyle='solid'
                    radius='m'
                    minWidth={image.width}
                    height={image.height}
                    style={{
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  />
                ))}
              </Flex>
            )}
          </Column>
        ))}
      </Column>
    </Column>
  )
}
