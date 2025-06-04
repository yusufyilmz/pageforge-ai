'use client'

import { Column, Flex, Heading, Text } from '@pageforge/once-ui/components'
import { ContentBlock } from '@pageforge/types/page/pageTypes'
import Image from 'next/image'

interface ClientsSectionProps {
  block: ContentBlock
  index: number
}

export const ClientsSection = ({ block, index }: ClientsSectionProps) => {
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
      <Flex fillWidth gap="l" wrap horizontal="center" vertical="center">
        {content.clients?.map((client: any, clientIndex: number) => (
          <Flex
            key={clientIndex}
            horizontal="center"
            vertical="center"
            padding="m"
            minWidth={120}
            height={80}
            style={{
              filter: 'grayscale(100%)',
              opacity: 0.7,
              transition: 'all 0.3s ease'
            }}
            className="hover:filter-none hover:opacity-100"
          >
            {client.logo ? (
              <Image
                src={client.logo}
                alt={client.name}
                style={{
                  maxWidth: '100%',
                  maxHeight: '60px',
                  objectFit: 'contain'
                }}
              />
            ) : (
              <Text variant="body-default-m" onBackground="neutral-weak">
                {client.name}
              </Text>
            )}
          </Flex>
        ))}
      </Flex>
    </Column>
  )
}
