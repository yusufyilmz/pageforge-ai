"use client";

import { Column, Heading, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface StudiesSectionProps {
  block: Extract<ContentBlock, { type: "studies" }>;
  index: number;
}

export const StudiesSection = ({ block, index }: StudiesSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { title = "Studies", institutions } = content;

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
        <Heading as="h2" variant="display-strong-l">
          {title}
        </Heading>
      </Column>

      {/* Institutions */}
      <Column fillWidth gap="l">
        {institutions.map((institution, instIndex: number) => (
          <Column key={`${institution.name}-${instIndex}`} gap="s">
            <Text variant="heading-strong-l">{institution.name}</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {institution.description}
            </Text>
          </Column>
        ))}
      </Column>
    </Column>
  );
};
