'use client'

import React from 'react'
import {
  Column,
  Flex,
  Heading,
  Text,
  SmartImage
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  AboutGeneralSectionContent
} from '@pageforge/types/page/pageTypes'

interface AboutSectionProps {
  block: Extract<ContentBlock, { type: 'about' }>
  index: number
}

export const AboutSection = ({ block, index }: AboutSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    title = 'About',
    description,
    content: aboutContent,
    image,
    layout = 'text-only',
    alignment = 'left'
  } = content

  const renderContent = () => {
    if (layout === 'text-only') {
      return (
        <Column fillWidth gap="l" align={alignment}>
          {title && (
            <Heading as="h2" variant="display-strong-l">
              {title}
            </Heading>
          )}
          {description && (
            <Text variant="body-default-l" onBackground="neutral-weak">
              {description}
            </Text>
          )}
          {aboutContent && <Text variant="body-default-m">{aboutContent}</Text>}
        </Column>
      )
    }

    if (layout === 'text-image' || layout === 'image-text') {
      const isImageFirst = layout === 'image-text'

      return (
        <Flex
          fillWidth
          gap="xl"
          wrap
          direction={isImageFirst ? 'row' : 'row-reverse'}
          vertical="start"
        >
          {/* Text Content */}
          <Column flex={1} gap="l" align={alignment}>
            {title && (
              <Heading as="h2" variant="display-strong-l">
                {title}
              </Heading>
            )}
            {description && (
              <Text variant="body-default-l" onBackground="neutral-weak">
                {description}
              </Text>
            )}
            {aboutContent && (
              <Text variant="body-default-m">{aboutContent}</Text>
            )}
          </Column>

          {/* Image */}
          {image && (
            <Column flex={1} horizontal="center">
              <SmartImage
                src={image.src}
                alt={image.alt}
                width={image.width || 400}
                height={image.height || 300}
                style={{
                  borderRadius: '8px',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </Column>
          )}
        </Flex>
      )
    }

    return null
  }

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="l"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {renderContent()}
    </Column>
  )
}
