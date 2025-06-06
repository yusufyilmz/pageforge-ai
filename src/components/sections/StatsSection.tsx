"use client";

import { Column, Flex, Heading, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface StatsSectionProps {
  block: ContentBlock;
  index: number;
}

export const StatsSection = ({ block, index }: StatsSectionProps) => {
  const content = block.content as any;

  return (
    <Column key={index} fillWidth gap="l" marginBottom="40">
      {content.title && (
        <Heading as="h2" variant="display-strong-s" marginBottom="m" className="text-center">
          {content.title}
        </Heading>
      )}
      <Flex fillWidth gap="l" wrap horizontal="center">
        {content.stats?.map((stat: any, statIndex: number) => (
          <Column key={statIndex} horizontal="center" gap="s" minWidth={120} paddingX="m">
            <Text variant="display-strong-xl" onBackground="accent-strong">
              {stat.number}
            </Text>
            <Text variant="body-default-s" onBackground="neutral-weak" className="text-center">
              {stat.label}
            </Text>
            {stat.description && (
              <Text variant="body-default-xs" onBackground="neutral-weak" className="text-center">
                {stat.description}
              </Text>
            )}
          </Column>
        ))}
      </Flex>
    </Column>
  );
};
