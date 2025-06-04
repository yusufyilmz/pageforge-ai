'use client'

import React from 'react'
import { Column, Flex, Text } from '@pageforge/once-ui/components'
import {
  ContentBlock,
  TableOfContentsSectionContent
} from '@pageforge/types/page/pageTypes'
import styles from '../about/about.module.scss'

interface TableOfContentsSectionProps {
  block: Extract<ContentBlock, { type: 'table-of-contents' }>
  index: number
  data?: any
}

export const TableOfContentsSection = ({
  block,
  index,
  data
}: TableOfContentsSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const { items, sticky = true, position = 'left' } = content

  if (!items || items.length === 0) return null

  const scrollTo = (title: string, offset: number = 80) => {
    // Generate section ID from title to match the UniversalPage implementation
    const sectionId = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '')
    const element = document.getElementById(sectionId)
    if (element) {
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.scrollY - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Column
      key={index}
      left={position === 'left' ? '0' : undefined}
      right={position === 'right' ? '0' : undefined}
      style={sticky ? { top: '50%', transform: 'translateY(-50%)' } : undefined}
      position={sticky ? 'fixed' : 'static'}
      paddingLeft={position === 'left' ? '24' : undefined}
      paddingRight={position === 'right' ? '24' : undefined}
      gap="32"
      hide="s"
    >
      {items
        .filter(item => item.display)
        .map((item, itemIndex) => (
          <Column key={itemIndex} gap="12">
            <Flex
              cursor="interactive"
              className={styles.hover}
              gap="8"
              vertical="center"
              onClick={() => scrollTo(item.title, 80)}
            >
              <Flex height="1" minWidth="16" background="neutral-strong"></Flex>
              <Text variant="body-default-s">{item.title}</Text>
            </Flex>
          </Column>
        ))}
    </Column>
  )
}
