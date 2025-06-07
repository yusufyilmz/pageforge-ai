"use client";

import { Column, Flex, Heading, SmartImage, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface GalleryGridSectionProps {
  block: Extract<ContentBlock, { type: "gallery" }>;
  index: number;
}

export const GalleryGridSection = ({ block, index }: GalleryGridSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const {
    title,
    subtitle,
    images = [],
    // layout = 'grid',
    // columns = 3,
    // categories = [],
    // showFilter = false
  } = content;

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="xl"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {/* Header */}
      <Column horizontal="center" align="center" gap="m" maxWidth="l">
        {title && (
          <Heading as="h2" variant="display-strong-l" wrap="balance">
            {title}
          </Heading>
        )}
        {subtitle && (
          <Text variant="heading-default-m" onBackground="neutral-weak" wrap="balance">
            {subtitle}
          </Text>
        )}
      </Column>

      {/* Gallery Grid */}
      <Flex
        fillWidth
        wrap
        gap="m"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1rem",
        }}
      >
        {images.map((image, imageIndex) => (
          <Column key={imageIndex} gap="s">
            <SmartImage
              src={image.src}
              alt={image.alt}
              width={400}
              height={300}
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
            {image.caption && (
              <Text variant="body-default-s" onBackground="neutral-weak">
                {image.caption}
              </Text>
            )}
          </Column>
        ))}
      </Flex>
    </Column>
  );
};
