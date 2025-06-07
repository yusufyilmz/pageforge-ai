"use client";

import { Column, Flex, Heading, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface TechnicalSkillsSectionProps {
  block: Extract<ContentBlock, { type: "skills" }>;
  index: number;
}

export const TechnicalSkillsSection = ({ block, index }: TechnicalSkillsSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { title = "Technical Skills", skills } = content;

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

      {/* Skills */}
      <Column fillWidth gap="l">
        {skills.map((skill, skillIndex: number) => (
          <Column key={`${skill.title}-${skillIndex}`} gap="s">
            <Text variant="heading-strong-l">{skill.title}</Text>
            <Text variant="body-default-m" onBackground="neutral-weak">
              {skill.description}
            </Text>
            {skill.images && skill.images.length > 0 && (
              <Flex fillWidth paddingTop="m" gap="m" wrap>
                {skill.images.map((image, imgIndex: number) => (
                  <Flex
                    key={imgIndex}
                    border="neutral-alpha-weak"
                    borderStyle="solid"
                    radius="m"
                    minWidth={image.width}
                    height={image.height}
                    style={{
                      backgroundImage: `url(${image.src})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />
                ))}
              </Flex>
            )}
          </Column>
        ))}
      </Column>
    </Column>
  );
};
