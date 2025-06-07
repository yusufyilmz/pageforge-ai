"use client";

import { Button, Column, Flex, Heading, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface CTASectionProps {
  block: ContentBlock;
  index: number;
}

export const CTASection = ({ block, index }: CTASectionProps) => {
  const content = block.content as any;

  return (
    <Column
      key={index}
      fillWidth
      gap="l"
      marginBottom="40"
      padding="xl"
      background={content.background || "accent-alpha-weak"}
      radius="l"
      horizontal="center"
    >
      {content.title && (
        <Heading as="h2" variant="display-strong-l" className="text-center">
          {content.title}
        </Heading>
      )}
      {content.description && (
        <Column maxWidth={600} horizontal="center">
          <Text variant="body-default-l" onBackground="neutral-weak" className="text-center">
            {content.description}
          </Text>
        </Column>
      )}
      <Flex gap="m" wrap horizontal="center">
        {content.primaryButton && (
          <Button
            href={content.primaryButton.href}
            variant="primary"
            size="l"
            label={content.primaryButton.label}
            prefixIcon={content.primaryButton.icon}
          />
        )}
        {content.secondaryButton && (
          <Button
            href={content.secondaryButton.href}
            variant="secondary"
            size="l"
            label={content.secondaryButton.label}
            prefixIcon={content.secondaryButton.icon}
          />
        )}
      </Flex>
    </Column>
  );
};
