'use client'

import React from 'react'
import {
  Column,
  Flex,
  Heading,
  Text,
  Button
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  CareersSectionContent
} from '@pageforge/types/page/pageTypes'

interface CareersSectionProps {
  block: Extract<ContentBlock, { type: 'careers' }>
  index: number
}

export const CareersSection = ({ block, index }: CareersSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const { title, subtitle, jobs = [] } = content

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
          <Heading as="h2" variant="display-strong-l">
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {subtitle}
          </Text>
        )}
      </Column>

      {jobs.map((job, jobIndex) => (
        <Column
          key={jobIndex}
          gap="m"
          padding="l"
          border="neutral-alpha-weak"
          borderStyle="solid"
          radius="l"
        >
          <Heading as="h3" variant="heading-strong-m">
            {job.title}
          </Heading>
          <Text variant="body-default-s" onBackground="neutral-weak">
            {job.department} • {job.location} • {job.type}
          </Text>
          <Text variant="body-default-m">{job.description}</Text>

          <Column gap="s">
            <Text variant="heading-strong-s">Requirements:</Text>
            <Column as="ul" gap="xs">
              {job.requirements.map((req, reqIndex) => (
                <Text key={reqIndex} as="li" variant="body-default-s">
                  {req}
                </Text>
              ))}
            </Column>
          </Column>

          <Button
            href={job.applicationLink || `/careers/${job.id}`}
            variant="primary"
            size="s"
          >
            Apply Now
          </Button>
        </Column>
      ))}
    </Column>
  )
}
