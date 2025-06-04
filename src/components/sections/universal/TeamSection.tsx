'use client'

import {
  Avatar,
  Column,
  Flex,
  Heading,
  Text
} from '@pageforge/once-ui/components'
import { ContentBlock } from '@pageforge/types/page/pageTypes'

interface TeamSectionProps {
  block: ContentBlock
  index: number
}

export const TeamSection = ({ block, index }: TeamSectionProps) => {
  const content = block.content as any

  return (
    <Column key={index} fillWidth gap="l" marginBottom="40">
      {content.title && (
        <Heading
          as="h2"
          variant="display-strong-s"
          marginBottom="m"
          className="text-center"
        >
          {content.title}
        </Heading>
      )}
      {content.description && (
        <Text
          variant="body-default-m"
          onBackground="neutral-weak"
          className="text-center"
          marginBottom="l"
        >
          {content.description}
        </Text>
      )}
      <Flex fillWidth gap="l" wrap horizontal="center">
        {content.members?.map((member: any, memberIndex: number) => (
          <Column
            key={memberIndex}
            horizontal="center"
            gap="m"
            maxWidth={280}
            padding="m"
          >
            <Avatar src={member.avatar} size="xl" />
            <Column horizontal="center" gap="xs">
              <Text variant="heading-strong-m">{member.name}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {member.role}
              </Text>
              {member.description && (
                <Text
                  variant="body-default-xs"
                  onBackground="neutral-weak"
                  className="text-center"
                >
                  {member.description}
                </Text>
              )}
            </Column>
          </Column>
        ))}
      </Flex>
    </Column>
  )
}
