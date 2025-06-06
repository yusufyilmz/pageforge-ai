'use client'

import { Column, Heading, Text } from '@pageforge/once-ui/components'
import type { ContentBlock } from '@pageforge/types/page/pageTypes'

interface PropertySectionProps {
  block: Extract<ContentBlock, { type: 'property' }>
  index: number
}

export const PropertySection = ({ block, index }: PropertySectionProps) => {
  const content = block.content

  if (block.display === false) {
    return null
  }

  const { title, subtitle, properties = [] } = content

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
      <Column horizontal='center' align='center' gap='m'>
        {title && (
          <Heading as='h2' variant='display-strong-l'>
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text variant='body-default-l' onBackground='neutral-weak'>
            {subtitle}
          </Text>
        )}
      </Column>

      {properties.map((property, propertyIndex) => (
        <Column key={propertyIndex} gap='s'>
          <Heading as='h3' variant='heading-strong-m'>
            {property.title}
          </Heading>
          <Text variant='body-default-m'>{property.description}</Text>
          <Text variant='body-default-s' onBackground='brand-strong'>
            ${property.price?.toLocaleString()}
          </Text>
        </Column>
      ))}
    </Column>
  )
}
