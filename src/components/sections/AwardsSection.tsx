"use client";

import { Column, Flex, Heading, Icon, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface AwardsSectionProps {
  block: ContentBlock;
  index: number;
}

export const AwardsSection = ({ block, index }: AwardsSectionProps) => {
  const content = block.content as any;

  return (
    <Column key={index} fillWidth gap="l" marginBottom="40">
      {content.title && (
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          {content.title}
        </Heading>
      )}
      <Flex fillWidth gap="l" wrap>
        {content.awards?.map((award: any, awardIndex: number) => (
          <Column
            key={awardIndex}
            gap="m"
            padding="l"
            border="neutral-alpha-weak"
            borderStyle="solid"
            radius="m"
            background="surface"
            flex={1}
            minWidth={280}
          >
            <Flex gap="m" vertical="center">
              {award.icon && (
                <Flex
                  width={48}
                  height={48}
                  horizontal="center"
                  vertical="center"
                  background="accent-alpha-weak"
                  radius="m"
                >
                  <Icon name={award.icon} size="l" onBackground="accent-strong" />
                </Flex>
              )}
              <Column gap="xs">
                <Text variant="heading-strong-m">{award.title}</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {award.organization} • {award.year}
                </Text>
              </Column>
            </Flex>
            {award.description && <Text variant="body-default-m">{award.description}</Text>}
            {award.image && (
              <Flex
                fillWidth
                height={120}
                style={{
                  backgroundImage: `url(${award.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  borderRadius: "var(--radius-m)",
                }}
              />
            )}
          </Column>
        ))}
      </Flex>
    </Column>
  );
};
