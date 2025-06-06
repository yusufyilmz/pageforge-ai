'use client'

import {
  Button,
  Column,
  Flex,
  Heading,
  Text,
  SmartImage,
  Badge
} from '@pageforge/once-ui/components'
import type {
  ContentBlock,
  ShowcaseSectionContent
} from '@pageforge/types/page/pageTypes'

interface ShowcaseSectionProps {
  block: Extract<ContentBlock, { type: 'showcase' }>
  index: number
}

export const ShowcaseSection = ({ block, index }: ShowcaseSectionProps) => {
  const content = block.content

  if (block.display === false) {
    return null
  }

  const {
    title,
    subtitle,
    description,
    layout = 'grid',
    columns = 3,
    items,
    categories = [],
    showFilter = false,
    showCategories = true,
    showStats = true
  } = content

  const renderShowcaseItem = (
    item: ShowcaseSectionContent['items'][0],
    itemIndex: number
  ) => (
    <Column
      key={itemIndex}
      gap='m'
      padding='l'
      background='neutral-alpha-weak'
      radius='l'
      border='neutral-alpha-weak'
      borderStyle='solid'
      style={{
        transition: 'all 0.2s ease',
        cursor: item.link ? 'pointer' : 'default'
      }}
      onClick={() => {
        if (item.link) {
          window.open(item.link.href, item.link.external ? '_blank' : '_self')
        }
      }}
    >
      {/* Image */}
      <SmartImage
        src={item.image.src}
        alt={item.image.alt}
        width={item.image.width || 400}
        height={item.image.height || 300}
        radius='m'
        style={{
          aspectRatio: '4/3',
          objectFit: 'cover'
        }}
      />

      {/* Content */}
      <Column gap='s'>
        {/* Category & Tags */}
        {showCategories && (item.category || item.tags) && (
          <Flex gap='xs' wrap>
            {item.category && <Badge>{item.category}</Badge>}
            {item.tags?.map((tag, tagIndex) => (
              <Badge key={tagIndex}>{tag}</Badge>
            ))}
          </Flex>
        )}

        {/* Title & Description */}
        <Heading as='h3' variant='heading-strong-m'>
          {item.title}
        </Heading>
        <Text variant='body-default-s' onBackground='neutral-weak'>
          {item.description}
        </Text>

        {/* Stats */}
        {showStats && item.stats && item.stats.length > 0 && (
          <Flex gap='s' wrap>
            {item.stats.map((stat, statIndex) => (
              <Column key={statIndex} gap='xs' align='center'>
                <Text variant='body-strong-s' onBackground='accent-strong'>
                  {stat.value}
                </Text>
                <Text variant='body-default-xs' onBackground='neutral-weak'>
                  {stat.label}
                </Text>
              </Column>
            ))}
          </Flex>
        )}

        {/* Link Button */}
        {item.link && (
          <Button variant='secondary' size='s' href={item.link.href}>
            {item.link.label || 'View Details'}
          </Button>
        )}
      </Column>
    </Column>
  )

  const gridColumns = {
    2: 'repeat(2, 1fr)',
    3: 'repeat(3, 1fr)',
    4: 'repeat(4, 1fr)'
  }

  return (
    <Column
      key={index}
      fillWidth
      maxWidth='xl'
      horizontal='center'
      gap='xl'
      padding='xl'
      className={block.className}
    >
      {/* Section Header */}
      <Column horizontal='center' align='center' gap='m' maxWidth='l'>
        {title && (
          <Heading as='h2' variant='display-strong-l' wrap='balance'>
            {title}
          </Heading>
        )}

        {subtitle && (
          <Text
            variant='heading-default-m'
            onBackground='neutral-weak'
            wrap='balance'
          >
            {subtitle}
          </Text>
        )}

        {description && (
          <Text
            variant='body-default-l'
            onBackground='neutral-weak'
            wrap='balance'
          >
            {description}
          </Text>
        )}
      </Column>

      {/* Filter (if enabled) */}
      {showFilter && categories.length > 0 && (
        <Flex gap='s' wrap horizontal='center'>
          <Badge>All</Badge>
          {categories.map((category, categoryIndex) => (
            <Badge key={categoryIndex}>{category}</Badge>
          ))}
        </Flex>
      )}

      {/* Showcase Content */}
      {layout === 'grid' && (
        <Flex
          fillWidth
          gap='l'
          wrap
          style={{
            display: 'grid',
            gridTemplateColumns: `${gridColumns[columns]}`,
            gap: 'var(--static-space-l)'
          }}
        >
          {items.map((item, itemIndex) => renderShowcaseItem(item, itemIndex))}
        </Flex>
      )}

      {layout === 'masonry' && (
        <Flex
          fillWidth
          gap='l'
          wrap
          style={{
            columns,
            columnGap: 'var(--static-space-l)'
          }}
        >
          {items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              style={{
                breakInside: 'avoid',
                marginBottom: 'var(--static-space-l)'
              }}
            >
              {renderShowcaseItem(item, itemIndex)}
            </div>
          ))}
        </Flex>
      )}

      {layout === 'featured' && (
        <Column fillWidth gap='l'>
          {/* Featured Items */}
          {items
            .filter(item => item.featured)
            .map((item, itemIndex) => (
              <Flex
                key={`featured-${itemIndex}`}
                fillWidth
                gap='xl'
                padding='xl'
                background='brand-alpha-weak'
                radius='l'
                align='center'
              >
                <SmartImage
                  src={item.image.src}
                  alt={item.image.alt}
                  width={600}
                  height={400}
                  radius='m'
                  style={{ flex: 1, maxWidth: '50%' }}
                />
                <Column gap='m' style={{ flex: 1 }}>
                  <Badge>Featured</Badge>
                  <Heading as='h3' variant='display-strong-m'>
                    {item.title}
                  </Heading>
                  <Text variant='body-default-l'>{item.description}</Text>
                  {item.link && (
                    <Button variant='primary' href={item.link.href}>
                      {item.link.label || 'Learn More'}
                    </Button>
                  )}
                </Column>
              </Flex>
            ))}

          {/* Regular Items in Grid */}
          <Flex
            fillWidth
            gap='l'
            wrap
            style={{
              display: 'grid',
              gridTemplateColumns: `${gridColumns[columns]}`,
              gap: 'var(--static-space-l)'
            }}
          >
            {items
              .filter(item => !item.featured)
              .map((item, itemIndex) => renderShowcaseItem(item, itemIndex))}
          </Flex>
        </Column>
      )}

      {layout === 'carousel' && (
        <Flex
          fillWidth
          gap='l'
          style={{ overflowX: 'auto', padding: '0 20px' }}
        >
          {items.map((item, itemIndex) => (
            <div
              key={itemIndex}
              style={{
                minWidth: '300px',
                maxWidth: '400px',
                flex: '0 0 auto'
              }}
            >
              {renderShowcaseItem(item, itemIndex)}
            </div>
          ))}
        </Flex>
      )}
    </Column>
  )
}
