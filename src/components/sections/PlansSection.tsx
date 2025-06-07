"use client";

import { Button, Column, Flex, Heading, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface PlansSectionProps {
  block: Extract<ContentBlock, { type: "plans" }>;
  index: number;
}

export const PlansSection = ({ block, index }: PlansSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { title, subtitle, plans = [] } = content;

  const formatPrice = (price: {
    amount: number;
    currency?: string;
    period?: string;
  }) => {
    const currency = price.currency || "USD";
    const formattedAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(price.amount);

    return price.period ? `${formattedAmount}/${price.period}` : formattedAmount;
  };

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

      {/* Plans Grid */}
      <Flex
        fillWidth
        wrap
        gap="l"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
        }}
      >
        {plans.map((plan, planIndex) => (
          <Column
            key={planIndex}
            gap="l"
            padding="l"
            radius="l"
            border={plan.popular ? "brand-strong" : "neutral-alpha-weak"}
            borderStyle="solid"
            background={plan.popular ? "brand-alpha-weak" : undefined}
            style={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            {/* Popular Badge */}
            {plan.popular && (
              <Column
                background="brand-strong"
                padding="xs"
                radius="s"
                style={{
                  position: "absolute",
                  top: "-12px",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Text variant="label-default-xs" style={{ color: "white" }}>
                  Most Popular
                </Text>
              </Column>
            )}

            {/* Plan Header */}
            <Column gap="s" align="center">
              <Heading as="h3" variant="heading-strong-l">
                {plan.name}
              </Heading>
              {plan.description && (
                <Text variant="body-default-m" onBackground="neutral-weak" align="center">
                  {plan.description}
                </Text>
              )}

              {/* Price */}
              {plan.price && (
                <Column gap="xs" align="center">
                  <Text variant="display-strong-s" onBackground="brand-strong">
                    {formatPrice(plan.price)}
                  </Text>
                </Column>
              )}

              {/* Custom Plan */}
              {plan.custom && (
                <Text variant="body-default-m" onBackground="neutral-weak">
                  Contact us for pricing
                </Text>
              )}
            </Column>

            {/* Features */}
            {plan.features && plan.features.length > 0 && (
              <Column gap="s" style={{ flexGrow: 1 }}>
                <Text variant="heading-strong-m">Features</Text>
                <Column as="ul" gap="xs">
                  {plan.features.map((feature, featureIndex) => (
                    <Flex key={featureIndex} gap="s" vertical="start">
                      <Text
                        variant="body-default-s"
                        style={{
                          color: feature.included ? "#22c55e" : "#ef4444",
                          minWidth: "16px",
                        }}
                      >
                        {feature.included ? "✓" : "✗"}
                      </Text>
                      <Text
                        variant="body-default-s"
                        style={{
                          textDecoration: !feature.included ? "line-through" : "none",
                          opacity: !feature.included ? 0.6 : 1,
                          fontWeight: feature.highlight ? "bold" : "normal",
                        }}
                      >
                        {feature.text}
                      </Text>
                    </Flex>
                  ))}
                </Column>
              </Column>
            )}

            {/* Spacer to push CTA to bottom when no features */}
            {(!plan.features || plan.features.length === 0) && <div style={{ flexGrow: 1 }} />}

            {/* CTA Button - Always at bottom */}
            {plan.cta && (
              <Column style={{ marginTop: "auto" }}>
                <Button
                  href={plan.cta.href}
                  variant={plan.cta.variant || (plan.popular ? "primary" : "secondary")}
                  size="l"
                  fillWidth
                >
                  {plan.cta.label}
                </Button>
              </Column>
            )}
          </Column>
        ))}
      </Flex>
    </Column>
  );
};
