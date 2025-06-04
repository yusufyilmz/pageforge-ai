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
  ShopItemsSectionContent
} from '@pageforge/types/page/pageTypes'

interface ShopItemsSectionProps {
  block: Extract<ContentBlock, { type: 'shop-items' }>
  index: number
}

export const ShopItemsSection = ({ block, index }: ShopItemsSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    title,
    subtitle,
    items = [],
    layout = 'grid',
    columns = 3,
    showPricing = true,
    showRating = true
  } = content

  const formatPrice = (price: number, currency: string = 'USD') => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currency
    }).format(price)
  }

  const renderStars = (rating: number) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Text
          key={i}
          variant="label-default-s"
          style={{ color: i <= rating ? '#fbbf24' : '#d1d5db' }}
        >
          ★
        </Text>
      )
    }
    return stars
  }

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
          <Text
            variant="heading-default-m"
            onBackground="neutral-weak"
            wrap="balance"
          >
            {subtitle}
          </Text>
        )}
      </Column>

      {/* Shop Items Grid */}
      <Flex
        fillWidth
        wrap
        gap="l"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`,
          gap: '1.5rem'
        }}
      >
        {items.map((item, itemIndex) => (
          <Column
            key={item.id}
            gap="m"
            padding="m"
            radius="l"
            border="neutral-alpha-weak"
            borderStyle="solid"
          >
            {/* Product Image */}
            {item.image && (
              <SmartImage
                src={item.image}
                alt={item.name}
                width={300}
                height={250}
                style={{
                  width: '100%',
                  height: '200px',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
            )}

            {/* Product Content */}
            <Column gap="s">
              <Heading as="h3" variant="heading-strong-m">
                {item.name}
              </Heading>

              {item.description && (
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {item.description}
                </Text>
              )}

              {/* Rating */}
              {showRating && item.rating && (
                <Flex gap="xs" vertical="center">
                  <Flex gap="xs">{renderStars(item.rating)}</Flex>
                  <Text variant="label-default-xs" onBackground="neutral-weak">
                    ({item.rating}/5)
                  </Text>
                </Flex>
              )}

              {/* Price and Actions */}
              <Flex fillWidth horizontal="space-between" vertical="center">
                {showPricing && (
                  <Text variant="heading-strong-m" onBackground="brand-strong">
                    {formatPrice(item.price, item.currency)}
                  </Text>
                )}

                <Button
                  href={item.link || `/shop/${item.id}`}
                  variant="primary"
                  size="s"
                  disabled={!item.inStock}
                >
                  {item.inStock !== false ? 'Add to Cart' : 'Out of Stock'}
                </Button>
              </Flex>

              {/* Categories/Tags */}
              {item.category && (
                <Column
                  background="neutral-alpha-weak"
                  padding="xs"
                  radius="s"
                  horizontal="center"
                >
                  <Text variant="label-default-xs">{item.category}</Text>
                </Column>
              )}
            </Column>
          </Column>
        ))}
      </Flex>
    </Column>
  )
}
