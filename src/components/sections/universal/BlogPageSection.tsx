'use client'

import React from 'react'
import {
  Column,
  Flex,
  Heading,
  Text,
  SmartImage,
  Button
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  BlogPageSectionContent
} from '@pageforge/types/page/pageTypes'

interface BlogPageSectionProps {
  block: Extract<ContentBlock, { type: 'blog-page' }>
  index: number
}

export const BlogPageSection = ({ block, index }: BlogPageSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    title,
    posts = [],
    layout = 'list',
    showExcerpt = true,
    showDate = true,
    showAuthor = true,
    pagination
  } = content

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
          <Heading as="h1" variant="display-strong-xl" wrap="balance">
            {title}
          </Heading>
        )}
      </Column>

      {/* Posts Grid/List */}
      {posts.length > 0 && (
        <Flex
          fillWidth
          wrap
          gap="l"
          style={{
            display: 'grid',
            gridTemplateColumns:
              layout === 'grid'
                ? 'repeat(auto-fit, minmax(320px, 1fr))'
                : '1fr',
            gap: '1.5rem'
          }}
        >
          {posts.map((post, postIndex) => (
            <Column
              key={post.id}
              gap="m"
              padding="m"
              radius="l"
              border="neutral-alpha-weak"
              borderStyle="solid"
            >
              {post.featuredImage && (
                <SmartImage
                  src={post.featuredImage}
                  alt={post.title}
                  width={400}
                  height={250}
                  style={{
                    width: '100%',
                    height: '200px',
                    borderRadius: '8px',
                    objectFit: 'cover'
                  }}
                />
              )}
              <Column gap="s">
                <Heading as="h2" variant="heading-strong-m">
                  {post.title}
                </Heading>

                {showExcerpt && (
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {post.excerpt}
                  </Text>
                )}

                {/* Post Meta */}
                <Flex gap="s" wrap>
                  {showDate && (
                    <Text
                      variant="label-default-xs"
                      onBackground="neutral-weak"
                    >
                      {new Date(post.publishDate).toLocaleDateString()}
                    </Text>
                  )}
                  {showAuthor && (
                    <Text
                      variant="label-default-xs"
                      onBackground="neutral-weak"
                    >
                      by {post.author}
                    </Text>
                  )}
                  {post.category && (
                    <Column
                      background="neutral-alpha-weak"
                      padding="xs"
                      radius="s"
                    >
                      <Text variant="label-default-xs">{post.category}</Text>
                    </Column>
                  )}
                  {post.readTime && (
                    <Text
                      variant="label-default-xs"
                      onBackground="neutral-weak"
                    >
                      {post.readTime} min read
                    </Text>
                  )}
                </Flex>

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
      )}

      {/* Pagination */}
      {pagination?.enabled && (
        <Flex gap="s" horizontal="center">
          <Button variant="tertiary" size="s">
            Previous
          </Button>
          <Text variant="body-default-s">
            Page 1 of{' '}
            {Math.ceil(posts.length / (pagination.postsPerPage || 10))}
          </Text>
          <Button variant="tertiary" size="s">
            Next
          </Button>
        </Flex>
      )}
    </Column>
  )
}
