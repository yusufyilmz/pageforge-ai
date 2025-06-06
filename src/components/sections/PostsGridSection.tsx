"use client";

import { Button, Column, Flex, Heading, SmartImage, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface PostsGridSectionProps {
  block: Extract<ContentBlock, { type: "posts-grid" }>;
  index: number;
}

export const PostsGridSection = ({ block, index }: PostsGridSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const {
    title,
    subtitle,
    // layout = 'grid',
    // columns = 3,
    showExcerpt = true,
    showDate = true,
    showAuthor = true,
    showCategories = true,
    featuredPosts,
    recentPosts,
  } = content;

  const allPosts = [...(featuredPosts?.items || []), ...(recentPosts?.items || [])];

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

      {/* Posts Grid */}
      <Flex
        fillWidth
        wrap
        gap="l"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {allPosts.map((post, postIndex) => (
          <Column
            key={postIndex}
            gap="m"
            padding="m"
            radius="l"
            border="neutral-alpha-weak"
            borderStyle="solid"
          >
            {/* Post Image */}
            {post.metadata.image && (
              <SmartImage
                src={post.metadata.image}
                alt={post.metadata.title}
                width={400}
                height={250}
                style={{
                  width: "100%",
                  height: "200px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
            )}

            {/* Post Content */}
            <Column gap="s">
              <Heading as="h3" variant="heading-strong-m">
                {post.metadata.title}
              </Heading>

              {showExcerpt && post.metadata.description && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {post.metadata.description}
                </Text>
              )}

              {/* Post Meta */}
              <Flex gap="s" wrap>
                {showDate && (
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    {new Date(post.metadata.publishedAt).toLocaleDateString()}
                  </Text>
                )}
                {showAuthor && post.metadata.author && (
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    by {post.metadata.author}
                  </Text>
                )}
                {showCategories && post.metadata.tag && (
                  <Column background="neutral-alpha-weak" padding="xs" radius="s">
                    <Text variant="label-default-xs">{post.metadata.tag}</Text>
                  </Column>
                )}
              </Flex>

              {/* Read More Link */}
              <Button
                href={`/blog/${post.slug}`}
                variant="tertiary"
                size="s"
                suffixIcon="arrowRight"
              >
                Read More
              </Button>
            </Column>
          </Column>
        ))}
      </Flex>
    </Column>
  );
};
