'use client'

import {
  Button,
  Column,
  Flex,
  Heading,
  Text,
  Badge,
  Icon
} from '@pageforge/once-ui/components'
import type { ContentBlock } from '@pageforge/types/page/pageTypes'

interface HeroSectionProps {
  block: Extract<ContentBlock, { type: 'hero' }>
  index: number
}

export const HeroSection = ({ block, index }: HeroSectionProps) => {
  const content = block.content

  if (block.display === false) {
    return null
  }

  // Default content structure with proper typing
  const {
    title = 'Welcome to Our Platform',
    subtitle = 'Build something amazing',
    description = 'Start your journey with our powerful tools and features.',
    buttons = [],
    badge = null,
    backgroundImage = null,
    alignment = 'center', // 'left', 'center', 'right'
    height = 'large' // 'small', 'medium', 'large', 'full'
  } = content

  // Height mapping
  const heightMap: Record<string, string> = {
    small: '400px',
    medium: '500px',
    large: '600px',
    full: '100vh'
  }

  // Alignment mapping
  const alignmentMap: Record<string, 'start' | 'center' | 'end'> = {
    left: 'start',
    center: 'center',
    right: 'end'
  }

  return (
    <Flex
      key={index}
      fillWidth
      direction='column'
      horizontal={alignmentMap[alignment]}
      vertical='center'
      style={{
        minHeight: heightMap[height],
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative'
      }}
      className={block.className}
    >
      {/* Optional overlay for background images */}
      {backgroundImage && (
        <Column
          position='absolute'
          top='0'
          left='0'
          right='0'
          bottom='0'
          style={{
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 0
          }}
        />
      )}

      <Column
        maxWidth='l'
        horizontal={alignmentMap[alignment]}
        gap='l'
        padding='xl'
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* Optional badge */}
        {badge && (
          <Badge
            className={alignment === 'center' ? 'margin-auto' : ''}
            icon={badge.icon}
            href={badge.href}
            arrow={badge.arrow}
          >
            {badge.label}
          </Badge>
        )}

        {/* Title */}
        <Heading
          as='h1'
          variant='display-strong-xl'
          align={alignment as 'left' | 'center' | 'right'}
          wrap='balance'
        >
          {title}
        </Heading>

        {/* Subtitle */}
        {subtitle && (
          <Text
            variant='heading-default-xl'
            onBackground='neutral-weak'
            align={alignment as 'left' | 'center' | 'right'}
            wrap='balance'
          >
            {subtitle}
          </Text>
        )}

        {/* Description */}
        {description && (
          <Column
            horizontal={alignmentMap[alignment]}
            maxWidth='m'
            marginBottom='m'
          >
            <Text
              variant='body-default-l'
              onBackground='neutral-weak'
              align={alignment as 'left' | 'center' | 'right'}
            >
              {description}
            </Text>
          </Column>
        )}

        {/* Action buttons */}
        {buttons && buttons.length > 0 && (
          <Flex gap='m' wrap horizontal={alignmentMap[alignment]} fillWidth>
            {buttons.map((button, btnIndex: number) => (
              <Button
                key={btnIndex}
                href={button.href}
                variant={
                  button.variant || (btnIndex === 0 ? 'primary' : 'secondary')
                }
                size={button.size || 'l'}
                data-border='rounded'
                prefixIcon={button.icon}
                arrowIcon={button.showArrow}
              >
                {button.label}
              </Button>
            ))}
          </Flex>
        )}

        {/* Optional feature list */}
        {content.features && content.features.length > 0 && (
          <Flex gap='m' marginTop='l' wrap horizontal={alignmentMap[alignment]}>
            {content.features.map((feature, featureIndex: number) => (
              <Flex key={featureIndex} gap='xs' vertical='center'>
                <Icon
                  name={feature.icon || 'check'}
                  onBackground='accent-weak'
                  size='s'
                />
                <Text variant='body-default-s' onBackground='neutral-strong'>
                  {feature.text}
                </Text>
              </Flex>
            ))}
          </Flex>
        )}
      </Column>
    </Flex>
  )
}
