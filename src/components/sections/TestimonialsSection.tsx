"use client";

import { Column, Flex, Heading, Media, Text } from "@pageforge/once-ui/components";
import type { ContentBlock, TestimonialsSectionContent } from "@pageforge/types/page/pageTypes";

interface TestimonialsSectionProps {
  block: Extract<ContentBlock, { type: "testimonials" }>;
  index: number;
}

export const TestimonialsSection = ({ block, index }: TestimonialsSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const {
    title = "What People Say",
    subtitle,
    layout = "grid",
    // columns = 2,
    testimonials,
  } = content;

  const renderTestimonial = (
    testimonial: TestimonialsSectionContent["testimonials"][0],
    testimonialIndex: number,
  ) => (
    <Column
      key={testimonialIndex}
      gap="m"
      padding="l"
      background="neutral-alpha-weak"
      radius="l"
      border="neutral-alpha-weak"
      borderStyle="solid"
      vertical="space-between"
    >
      <Column gap="s">
        {/* Rating */}
        {testimonial.rating && (
          <Flex gap="xs">
            {[...Array(5)].map((_, starIndex) => (
              <Text
                key={starIndex}
                style={{
                  color: starIndex < testimonial.rating! ? "#fbbf24" : "#d1d5db",
                }}
              >
                ★
              </Text>
            ))}
          </Flex>
        )}
        <Text variant="body-default-l">{testimonial.content}</Text>
      </Column>

      {/* Content */}

      {/* Author */}
      <Flex gap="m" vertical="center" position="relative" fillWidth paddingY="12" paddingX="16">
        {testimonial.author.avatar && (
          <Media
            priority
            border="neutral-alpha-weak"
            cursor="interactive"
            radius="m"
            src={testimonial.author.avatar}
            alt={testimonial.author.name}
            aspectRatio="1 / 1"
            sizes="120px"
            transition="macro-medium"
          />
        )}
        <Column gap="xs">
          <Text variant="label-strong-s">{testimonial.author.name}</Text>
          {testimonial.author.role && (
            <Text variant="label-default-xs" onBackground="neutral-weak">
              {testimonial.author.role}
              {testimonial.author.company && ` at ${testimonial.author.company}`}
            </Text>
          )}
        </Column>
      </Flex>
    </Column>
  );

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
        <Heading as="h2" variant="display-strong-l">
          {title}
        </Heading>
        {subtitle && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {subtitle}
          </Text>
        )}
      </Column>

      {/* Testimonials */}
      {layout === "grid" && (
        <Flex
          fillWidth
          wrap
          gap="l"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          }}
        >
          {testimonials.map((testimonial, testimonialIndex) =>
            renderTestimonial(testimonial, testimonialIndex),
          )}
        </Flex>
      )}

      {layout === "carousel" && (
        <Flex fillWidth gap="l" style={{ overflowX: "auto" }}>
          {testimonials.map((testimonial, testimonialIndex) => (
            <Column key={testimonialIndex} minWidth={300}>
              {renderTestimonial(testimonial, testimonialIndex)}
            </Column>
          ))}
        </Flex>
      )}

      {layout === "masonry" && (
        <Column fillWidth gap="l">
          {testimonials.map((testimonial, testimonialIndex) =>
            renderTestimonial(testimonial, testimonialIndex),
          )}
        </Column>
      )}
    </Column>
  );
};
