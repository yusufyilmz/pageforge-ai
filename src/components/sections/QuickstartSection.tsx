"use client";

import React, { useState } from "react";

import {
  Badge,
  Button,
  Column,
  Flex,
  Heading,
  Icon,
  SmartImage,
  Text,
} from "@pageforge/once-ui/components";
import type { ContentBlock, QuickstartSectionContent } from "@pageforge/types/page/pageTypes";

interface QuickstartSectionProps {
  block: Extract<ContentBlock, { type: "quickstart" }>;
  index: number;
}

export const QuickstartSection = ({ block, index }: QuickstartSectionProps) => {
  const content = block.content;
  const [activeTab, setActiveTab] = useState(0);

  if (block.display === false) {
    return null;
  }

  const {
    title,
    subtitle,
    description,
    layout = "steps",
    steps,
    cta,
    showStepNumbers = true,
    showDuration = true,
    showComplexity = true,
  } = content;

  // const complexityColors = {
  //   easy: 'accent',
  //   medium: 'warning',
  //   hard: 'critical'
  // } as const

  const renderStepContent = (
    step: QuickstartSectionContent["steps"][0],
    stepIndex: number,
    isActive = true
  ) => (
    <Column
      key={stepIndex}
      gap="m"
      padding="l"
      background={isActive ? "neutral-alpha-weak" : "surface"}
      radius="l"
      border={isActive ? "accent-medium" : "neutral-alpha-weak"}
      borderStyle="solid"
      style={{
        transition: "all 0.2s ease",
        opacity: isActive ? 1 : 0.7,
      }}
    >
      {/* Step Header */}
      <Flex gap="m" align="center">
        {showStepNumbers && (
          <Flex
            align="center"
            horizontal="center"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              background: "var(--accent-medium)",
              color: "var(--accent-on-medium)",
            }}
          >
            <Text variant="body-strong-s">{step.step}</Text>
          </Flex>
        )}

        {step.icon && <Icon name={step.icon} size="m" />}

        <Column gap="xs" style={{ flex: 1 }}>
          <Heading as="h3" variant="heading-strong-m">
            {step.title}
          </Heading>

          <Flex gap="s" align="center">
            {showDuration && step.duration && <Badge>{step.duration}</Badge>}
            {showComplexity && step.complexity && (
              <Badge>{step.complexity.charAt(0).toUpperCase() + step.complexity.slice(1)}</Badge>
            )}
          </Flex>
        </Column>
      </Flex>

      {/* Step Content */}
      <Column gap="m">
        <Text variant="body-default-m">{step.description}</Text>

        {/* Prerequisites */}
        {step.prerequisites && step.prerequisites.length > 0 && (
          <Column gap="s">
            <Text variant="body-strong-s">Prerequisites:</Text>
            <Column gap="xs">
              {step.prerequisites.map((prereq, prereqIndex) => (
                <Flex key={prereqIndex} gap="s" align="center">
                  <Icon name="check" size="s" />
                  <Text variant="body-default-s">{prereq}</Text>
                </Flex>
              ))}
            </Column>
          </Column>
        )}

        {/* Image */}
        {step.image && (
          <SmartImage
            src={step.image.src}
            alt={step.image.alt}
            radius="m"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
            }}
          />
        )}

        {/* Code Block */}
        {step.code && (
          <Column
            gap="s"
            padding="m"
            background="neutral-strong"
            radius="m"
            border="neutral-medium"
            borderStyle="solid"
          >
            <Flex gap="s" align="center">
              <Icon name="code" size="s" />
              <Text variant="body-strong-s" onBackground="neutral-weak">
                {step.code.language}
              </Text>
            </Flex>
            <Text
              variant="body-default-s"
              onBackground="neutral-weak"
              style={{
                fontFamily: "monospace",
                whiteSpace: "pre-wrap",
                overflow: "auto",
              }}
            >
              {step.code.content}
            </Text>
          </Column>
        )}
      </Column>
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
      {/* Section Header */}
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

        {description && (
          <Text variant="body-default-l" onBackground="neutral-weak" wrap="balance">
            {description}
          </Text>
        )}
      </Column>

      {/* Quickstart Content */}
      {layout === "steps" && (
        <Column fillWidth gap="l" maxWidth="l">
          {steps.map((step, stepIndex) => renderStepContent(step, stepIndex))}
        </Column>
      )}

      {layout === "tabs" && (
        <Column fillWidth gap="l">
          {/* Tab Navigation */}
          <Flex gap="s" wrap horizontal="center">
            {steps.map((step, stepIndex) => (
              <Button
                key={stepIndex}
                variant={activeTab === stepIndex ? "primary" : "secondary"}
                size="s"
                onClick={() => setActiveTab(stepIndex)}
              >
                {showStepNumbers && `${step.step}. `}
                {step.title}
              </Button>
            ))}
          </Flex>

          {/* Active Tab Content */}
          <Column fillWidth maxWidth="l">
            {renderStepContent(steps[activeTab], activeTab)}
          </Column>
        </Column>
      )}

      {layout === "cards" && (
        <Flex
          fillWidth
          gap="l"
          wrap
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "var(--static-space-l)",
          }}
        >
          {steps.map((step, stepIndex) => renderStepContent(step, stepIndex))}
        </Flex>
      )}

      {/* Call to Action */}
      {cta && (
        <Column
          gap="m"
          padding="xl"
          background="brand-alpha-weak"
          radius="l"
          horizontal="center"
          align="center"
          maxWidth="l"
        >
          <Heading as="h3" variant="heading-strong-l" align="center">
            {cta.title}
          </Heading>

          {cta.description && (
            <Text variant="body-default-l" onBackground="neutral-weak" align="center">
              {cta.description}
            </Text>
          )}

          <Button variant={cta.button.variant || "primary"} size="l" href={cta.button.href}>
            {cta.button.label}
          </Button>
        </Column>
      )}
    </Column>
  );
};
