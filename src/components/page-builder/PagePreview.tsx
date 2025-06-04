'use client'

import React from 'react'
import { Flex, Text, Heading } from '@pageforge/once-ui/components'

interface PagePreviewProps {
  config: any
  personData: any
}

export const PagePreview: React.FC<PagePreviewProps> = ({
  config,
  personData
}) => {
  return (
    <Flex direction="column" gap="l">
      <Heading variant="display-strong-m">Preview</Heading>
      <Flex
        direction="column"
        gap="m"
        padding="l"
        radius="m"
        background="neutral-weak"
        style={{ minHeight: '400px' }}
      >
        <Text variant="body-default-m">
          Preview of {personData.name}'s page will appear here
        </Text>
        <Text variant="body-default-s" onBackground="neutral-medium">
          Page type: {config?.pageType}
        </Text>
      </Flex>
    </Flex>
  )
}
