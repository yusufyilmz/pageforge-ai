'use client'

import React from 'react'
import {
  Button,
  Column,
  Flex,
  Heading,
  Text,
  Badge,
  Icon
} from '@pageforge/once-ui/components'
import {
  ContentBlock,
  PricingSectionContent
} from '@pageforge/types/page/pageTypes'

interface PricingSectionProps {
  block: Extract<ContentBlock, { type: 'pricing' }>
  index: number
}

export const PricingSection = ({ block, index }: PricingSectionProps) => {
  const content = block.content

  if (block.display === false) return null

  const {
    title = 'Choose Your Plan',
    subtitle,
    description,
    billingPeriod = 'monthly',
    plans
  } = content

  const renderPlan = (
    plan: PricingSectionContent['plans'][0],
    planIndex: number
  ) => (
    <Column
      key={planIndex}
      gap="l"
      padding="xl"
      background={plan.popular ? 'accent-alpha-weak' : 'neutral-alpha-weak'}
      radius="l"
      border={plan.popular ? 'accent-alpha-medium' : 'neutral-alpha-weak'}
      borderStyle="solid"
      position="relative"
    >
      {/* Popular badge */}
      {plan.popular && (
        <Badge
          style={{
            position: 'absolute',
            top: '-12px',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          Most Popular
        </Badge>
      )}

      {/* Plan header */}
      <Column gap="m">
        <Heading as="h3" variant="heading-strong-l">
          {plan.name}
        </Heading>
        {plan.description && (
          <Text variant="body-default-m" onBackground="neutral-weak">
            {plan.description}
          </Text>
        )}
      </Column>

      {/* Pricing */}
      <Column gap="xs">
        {billingPeriod === 'monthly' && plan.price.monthly && (
          <Flex gap="xs" vertical="end">
            <Heading as="h2" variant="display-strong-l">
              {plan.price.currency || '$'}
              {plan.price.monthly}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              /month
            </Text>
          </Flex>
        )}
        {billingPeriod === 'yearly' && plan.price.yearly && (
          <Flex gap="xs" vertical="end">
            <Heading as="h2" variant="display-strong-l">
              {plan.price.currency || '$'}
              {plan.price.yearly}
            </Heading>
            <Text variant="body-default-m" onBackground="neutral-weak">
              /year
            </Text>
          </Flex>
        )}
        {plan.enterprise && <Text variant="heading-strong-l">Contact us</Text>}
      </Column>

      {/* Features */}
      <Column gap="m" flex={1}>
        {plan.features.map((feature, featureIndex) => (
          <Flex key={featureIndex} gap="s" vertical="start">
            <Icon
              name={feature.included ? 'check' : 'x'}
              size="s"
              onBackground={feature.included ? 'accent-strong' : 'neutral-weak'}
            />
            <Text
              variant="body-default-s"
              style={{
                textDecoration: feature.included ? 'none' : 'line-through',
                opacity: feature.included ? 1 : 0.5
              }}
            >
              {feature.text}
            </Text>
          </Flex>
        ))}
      </Column>

      {/* CTA */}
      {plan.cta && (
        <Button
          href={plan.cta.href}
          variant={plan.popular ? 'primary' : plan.cta.variant || 'secondary'}
          size="l"
          fillWidth
        >
          {plan.cta.label}
        </Button>
      )}
    </Column>
  )

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
          <Text variant="heading-default-m" onBackground="neutral-weak">
            {subtitle}
          </Text>
        )}
        {description && (
          <Text variant="body-default-l" onBackground="neutral-weak">
            {description}
          </Text>
        )}
      </Column>

      {/* Plans */}
      <Flex
        fillWidth
        wrap
        gap="l"
        horizontal="center"
        style={{
          display: 'grid',
          gridTemplateColumns: `repeat(auto-fit, minmax(280px, 1fr))`
        }}
      >
        {plans.map((plan, planIndex) => renderPlan(plan, planIndex))}
      </Flex>
    </Column>
  )
}
