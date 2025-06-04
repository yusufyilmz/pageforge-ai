'use client'

import React from 'react'
import { Text } from '@pageforge/once-ui/components'
import {
  ContentBlock,
  TextSectionContent
} from '@pageforge/types/page/pageTypes'

interface TextSectionProps {
  block: Extract<ContentBlock, { type: 'text' }>
  index: number
}

export const TextSection = ({ block, index }: TextSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const { text, align = 'left', size = 'm' } = content

  return (
    <Text
      key={index}
      variant={`body-default-${size}` as any}
      align={align}
      className={block.className}
    >
      {text}
    </Text>
  )
}
