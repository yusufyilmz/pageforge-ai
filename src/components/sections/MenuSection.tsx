"use client";

import { Column, Heading, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface MenuSectionProps {
  block: Extract<ContentBlock, { type: "menu" }>;
  index: number;
}

export const MenuSection = ({ block, index }: MenuSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { title, categories = [] } = content;

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
      </Column>

      {categories.map((category, categoryIndex) => (
        <Column key={categoryIndex} gap="l">
          <Heading as="h3" variant="heading-strong-m">
            {category.name}
          </Heading>
          {category.items?.map((item, itemIndex) => (
            <Column key={itemIndex} gap="s">
              <Heading as="h4" variant="heading-strong-s">
                {item.name} - ${item.price}
              </Heading>
              <Text variant="body-default-s">{item.description}</Text>
            </Column>
          ))}
        </Column>
      ))}
    </Column>
  );
};
