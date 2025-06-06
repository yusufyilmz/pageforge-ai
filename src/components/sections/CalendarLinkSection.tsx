'use client'

import { Flex, Icon, IconButton } from '@pageforge/once-ui/components'
import type { ContentBlock } from '@pageforge/types/page/pageTypes'

interface CalendarLinkSectionProps {
  block: Extract<ContentBlock, { type: 'calendar-link' }>
  index: number
}

export const CalendarLinkSection = ({
  block,
  index
}: CalendarLinkSectionProps) => {
  const content = block.content

  if (block.display === false) {
    return null
  }

  const { text, link, icon = 'calendar', description } = content

  return (
    <Flex
      key={index}
      fitWidth
      border='brand-alpha-medium'
      style={{
        backdropFilter: 'blur(var(--static-space-1))'
      }}
      background='brand-alpha-weak'
      radius='full'
      padding='4'
      gap='8'
      marginBottom='m'
      vertical='center'
    >
      <Icon paddingLeft='12' name={icon} onBackground='brand-weak' />
      <Flex paddingX='8' direction='column'>
        <span>{text}</span>
        {description && (
          <span style={{ fontSize: '0.875rem', opacity: 0.8 }}>
            {description}
          </span>
        )}
      </Flex>
      <IconButton
        href={link}
        data-border='rounded'
        variant='secondary'
        icon='chevronRight'
      />
    </Flex>
  )
}
