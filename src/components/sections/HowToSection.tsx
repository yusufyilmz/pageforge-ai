"use client";

import { Column, Flex, Heading, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface HowToSectionProps {
  block: Extract<ContentBlock, { type: "how-to" }>;
  index: number;
}

export const HowToSection = ({ block, index }: HowToSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { title, description, steps = [] } = content;

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
      {/* Header */}
      <Column horizontal="center" align="center" gap="m">
        {title && (
          <Heading as="h2" variant="display-strong-l">
            {title}
          </Heading>
        )}
        {description && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {description}
          </Text>
        )}
      </Column>

      {/* Steps */}
      <Column fillWidth gap="l">
        {steps.map((step, stepIndex) => (
          <Flex key={stepIndex} gap="l" fillWidth>
            <Column
              minWidth="16"
              height="16"
              background="brand-strong"
              radius="full"
              horizontal="center"
              vertical="center"
            >
              <Text variant="heading-strong-s" style={{ color: "white" }}>
                {stepIndex + 1}
              </Text>
            </Column>
            <Column gap="s" flex={1}>
              <Heading as="h3" variant="heading-strong-m">
                {step.title}
              </Heading>
              <Text variant="body-default-m">{step.description}</Text>
            </Column>
          </Flex>
        ))}
      </Column>
    </Column>
  );
};
