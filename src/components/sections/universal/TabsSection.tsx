'use client'

import { useState } from 'react'
import {
  Button,
  Column,
  Flex,
  Heading,
  Text
} from '@pageforge/once-ui/components'
import { ContentBlock } from '@pageforge/types/page/pageTypes'

interface TabsSectionProps {
  block: ContentBlock
  index: number
}

export const TabsSection = ({ block, index }: TabsSectionProps) => {
  const content = block.content as any
  const [activeTab, setActiveTab] = useState(0)

  return (
    <Column key={index} fillWidth gap="l" marginBottom="40">
      {content.title && (
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          {content.title}
        </Heading>
      )}

      {/* Tab Navigation */}
      <Flex gap="xs" wrap>
        {content.tabs?.map((tab: any, tabIndex: number) => (
          <Button
            key={tabIndex}
            label={tab.title}
            variant={activeTab === tabIndex ? 'primary' : 'secondary'}
            size="s"
            onClick={() => setActiveTab(tabIndex)}
          />
        ))}
      </Flex>

      {/* Tab Content */}
      {content.tabs?.[activeTab] && (
        <Column
          padding="l"
          border="neutral-alpha-weak"
          borderStyle="solid"
          radius="m"
          background="surface"
          gap="m"
        >
          {content.tabs[activeTab].heading && (
            <Heading as="h3" variant="heading-strong-l">
              {content.tabs[activeTab].heading}
            </Heading>
          )}
          <Text variant="body-default-m">
            {content.tabs[activeTab].content}
          </Text>
          {content.tabs[activeTab].image && (
            <Flex
              fillWidth
              height={300}
              style={{
                backgroundImage: `url(${content.tabs[activeTab].image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: 'var(--radius-m)'
              }}
            />
          )}
        </Column>
      )}
    </Column>
  )
}
