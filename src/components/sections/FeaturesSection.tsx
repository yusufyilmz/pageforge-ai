'use client'

import {
  Button,
  Column,
  Flex,
  Heading,
  Text,
  Icon,
  SmartImage
} from '@pageforge/once-ui/components'
import type {
  ContentBlock,
  FeaturesSectionContent
} from '@pageforge/types/page/pageTypes'

interface FeaturesSectionProps {
  block: Extract<ContentBlock, { type: 'features' }>
  index: number
}

export const FeaturesSection = ({ block, index }: FeaturesSectionProps) => {
  const content = block.content

  if (block.display === false) {
    return null
  }

  const {
    title,
    subtitle,
    description,
    layout = 'grid',
    // columns = 3,
    features
  } = content

  // // Layout mappings
  // const gridColumns = {
  //   2: 'repeat(2, 1fr)',
  //   3: 'repeat(3, 1fr)',
  //   4: 'repeat(4, 1fr)'
  // }

  const renderFeature = (
    feature: FeaturesSectionContent['features'][0],
    featureIndex: number
  ) => (
    <Column
      key={featureIndex}
      gap='m'
      padding='l'
      background='neutral-alpha-weak'
      radius='m'
      border='neutral-alpha-weak'
      borderStyle='solid'
    >
      {/* Feature Icon or Image */}
      {feature.icon && (
        <Icon name={feature.icon} size='l' onBackground='accent-weak' />
      )}

      {feature.image && (
        <SmartImage
          src={feature.image.src}
          alt={feature.image.alt}
          width={feature.image.width || 60}
          height={feature.image.height || 60}
          style={{ borderRadius: 'var(--radius-s)' }}
        />
      )}

      {/* Feature Title */}
      <Heading as='h3' variant='heading-strong-m'>
        {feature.title}
      </Heading>

      {/* Feature Description */}
      <Text variant='body-default-m' onBackground='neutral-weak'>
        {feature.description}
      </Text>

      {/* Optional Link */}
      {feature.link && (
        <Button href={feature.link.href} variant='secondary' size='s' arrowIcon>
          {feature.link.label || 'Learn more'}
        </Button>
      )}
    </Column>
  )

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

      {/* Features Content */}
      {layout === 'grid' && (
        <Flex
          fillWidth
          wrap
          gap='l'
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))'
          }}
        >
          {features.map((feature, featureIndex) =>
            renderFeature(feature, featureIndex)
          )}
        </Flex>
      )}

      {layout === 'list' && (
        <Column fillWidth gap='l'>
          {features.map((feature, featureIndex) => (
            <Flex
              key={featureIndex}
              fillWidth
              gap='l'
              padding='l'
              background='neutral-alpha-weak'
              radius='m'
              border='neutral-alpha-weak'
              borderStyle='solid'
              vertical='start'
            >
              {/* Icon/Image */}
              <Column minWidth={60} horizontal='center'>
                {feature.icon && (
                  <Icon
                    name={feature.icon}
                    size='l'
                    onBackground='accent-weak'
                  />
                )}
                {feature.image && (
                  <SmartImage
                    src={feature.image.src}
                    alt={feature.image.alt}
                    width={feature.image.width || 60}
                    height={feature.image.height || 60}
                    style={{ borderRadius: 'var(--radius-s)' }}
                  />
                )}
              </Column>

              {/* Content */}
              <Column flex={1} gap='s'>
                <Heading as='h3' variant='heading-strong-m'>
                  {feature.title}
                </Heading>
                <Text variant='body-default-m' onBackground='neutral-weak'>
                  {feature.description}
                </Text>
                {feature.link && (
                  <Button
                    href={feature.link.href}
                    variant='secondary'
                    size='s'
                    arrowIcon
                  >
                    {feature.link.label || 'Learn more'}
                  </Button>
                )}
              </Column>
            </Flex>
          ))}
        </Column>
      )}

      {layout === 'cards' && (
        <Flex fillWidth wrap gap='l' horizontal='center'>
          {features.map((feature, featureIndex) => (
            <Column
              key={featureIndex}
              maxWidth={320}
              gap='m'
              padding='xl'
              background='surface'
              radius='l'
              border='neutral-alpha-weak'
              borderStyle='solid'
              shadow='m'
              horizontal='center'
              align='center'
            >
              {/* Feature Icon or Image */}
              {feature.icon && (
                <Icon
                  name={feature.icon}
                  size='xl'
                  onBackground='accent-weak'
                />
              )}

              {feature.image && (
                <SmartImage
                  src={feature.image.src}
                  alt={feature.image.alt}
                  width={feature.image.width || 80}
                  height={feature.image.height || 80}
                  style={{ borderRadius: 'var(--radius-m)' }}
                />
              )}

              <Heading as='h3' variant='heading-strong-l'>
                {feature.title}
              </Heading>

              <Text variant='body-default-m' onBackground='neutral-weak'>
                {feature.description}
              </Text>

              {feature.link && (
                <Button
                  href={feature.link.href}
                  variant='primary'
                  size='m'
                  arrowIcon
                >
                  {feature.link.label || 'Learn more'}
                </Button>
              )}
            </Column>
          ))}
        </Flex>
      )}
    </Column>
  )
}
