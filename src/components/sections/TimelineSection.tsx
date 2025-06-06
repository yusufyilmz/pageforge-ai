'use client'

import {
  Column,
  Flex,
  Heading,
  Text,
  Icon
} from '@pageforge/once-ui/components'
import type {
  ContentBlock,
  TimelineSectionContent
} from '@pageforge/types/page/pageTypes'

interface TimelineSectionProps {
  block: Extract<ContentBlock, { type: 'timeline' }>
  index: number
}

export const TimelineSection = ({ block, index }: TimelineSectionProps) => {
  const content = block.content

  if (block.display === false) {
    return null
  }

  const {
    title = 'Timeline',
    subtitle,
    items,
    // layout = 'vertical',
    showDates = true
  } = content

  const renderTimelineItem = (
    item: TimelineSectionContent['items'][0],
    itemIndex: number
  ) => (
    <Flex key={itemIndex} gap='l' vertical='start'>
      {/* Timeline Indicator */}
      <Column horizontal='center' gap='xs' minWidth={60}>
        <Column
          background={
            item.status === 'completed'
              ? 'accent-strong'
              : item.status === 'current'
                ? 'brand-strong'
                : 'neutral-weak'
          }
          radius='full'
          padding='s'
        >
          <Icon
            name={item.icon || 'circle'}
            size='s'
            onBackground='neutral-strong'
          />
        </Column>
        {showDates && (
          <Text variant='label-default-xs' onBackground='neutral-weak'>
            {item.date}
          </Text>
        )}
      </Column>

      {/* Content */}
      <Column flex={1} gap='s'>
        <Column gap='xs'>
          <Heading as='h3' variant='heading-strong-m'>
            {item.title}
          </Heading>
          {item.category && (
            <Text variant='label-default-s' onBackground='accent-weak'>
              {item.category}
            </Text>
          )}
        </Column>
        <Text variant='body-default-m' onBackground='neutral-weak'>
          {item.description}
        </Text>
      </Column>
    </Flex>
  )

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
        {subtitle && (
          <Text variant='body-default-l' onBackground='neutral-weak'>
            {subtitle}
          </Text>
        )}
      </Column>

      {/* Timeline Items */}
      <Column fillWidth gap='xl'>
        {items.map((item, itemIndex) => renderTimelineItem(item, itemIndex))}
      </Column>
    </Column>
  )
}
