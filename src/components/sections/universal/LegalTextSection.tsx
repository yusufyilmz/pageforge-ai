'use client'

import React from 'react'
import { Column, Heading, Text } from '@pageforge/once-ui/components'
import {
  ContentBlock,
  LegalTextSectionContent
} from '@pageforge/types/page/pageTypes'

interface LegalTextSectionProps {
  block: Extract<ContentBlock, { type: 'legal-text' }>
  index: number
}

export const LegalTextSection = ({ block, index }: LegalTextSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const { title, sections = [] } = content

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
      <Column horizontal="center" align="center" gap="m">
        {title && (
          <Heading as="h1" variant="display-strong-l">
            {title}
          </Heading>
        )}
      </Column>

      {sections.map((section, sectionIndex) => (
        <Column key={sectionIndex} gap="m">
          <Heading as="h2" variant="heading-strong-l">
            {section.title}
          </Heading>
          <Text variant="body-default-m">{section.content}</Text>
        </Column>
      ))}
    </Column>
  )
}
