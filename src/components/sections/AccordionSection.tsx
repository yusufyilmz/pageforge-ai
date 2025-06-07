"use client";

import { useState } from "react";

import { Column, Flex, Heading, Icon, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface AccordionSectionProps {
  block: ContentBlock;
  index: number;
}

export const AccordionSection = ({ block, index }: AccordionSectionProps) => {
  const content = block.content as any;
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (itemIndex: number) => {
    setOpenItems((prev) =>
      prev.includes(itemIndex) ? prev.filter((i) => i !== itemIndex) : [...prev, itemIndex]
    );
  };

  return (
    <Column key={index} fillWidth gap="l" marginBottom="40">
      {content.title && (
        <Heading as="h2" variant="display-strong-s" marginBottom="m">
          {content.title}
        </Heading>
      )}
      <Column gap="s">
        {content.items?.map((item: any, itemIndex: number) => (
          <Column
            key={itemIndex}
            border="neutral-alpha-weak"
            borderStyle="solid"
            radius="m"
            overflow="hidden"
          >
            <Flex
              padding="m"
              horizontal="space-between"
              vertical="center"
              cursor="interactive"
              background="surface"
              onClick={() => toggleItem(itemIndex)}
            >
              <Text variant="heading-strong-s">{item.title}</Text>
              <Icon
                name="chevronDown"
                style={{
                  transform: openItems.includes(itemIndex) ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s ease",
                }}
              />
            </Flex>
            {openItems.includes(itemIndex) && (
              <Column padding="m" paddingTop="0" background="neutral-alpha-weak">
                <Text variant="body-default-m">{item.content}</Text>
              </Column>
            )}
          </Column>
        ))}
      </Column>
    </Column>
  );
};
