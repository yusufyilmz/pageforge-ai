"use client";

import { Button, Column, Flex, Heading, IconButton } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface SocialLinksSectionProps {
  block: Extract<ContentBlock, { type: "socials" }>;
  index: number;
}

export const SocialLinksSection = ({ block, index }: SocialLinksSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { title, links, layout = "horizontal" } = content;

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
      {title && (
        <Column horizontal="center" align="center" gap="m">
          <Heading as="h2" variant="display-strong-l">
            {title}
          </Heading>
        </Column>
      )}

      {/* Social Links */}
      <Flex
        fillWidth
        gap="m"
        wrap
        horizontal="center"
        direction={layout === "vertical" ? "column" : "row"}
      >
        {links.map((item, linkIndex: number) => (
          <div key={linkIndex}>
            <Button
              className="m-hide"
              href={item.link}
              prefixIcon={item.icon}
              label={item.name}
              size="s"
              variant="secondary"
            />
            <IconButton
              className="s-flex-show"
              size="l"
              href={item.link}
              icon={item.icon}
              variant="secondary"
            />
          </div>
        ))}
      </Flex>
    </Column>
  );
};
