"use client";

import type React from "react";
import { useState } from "react";

import { Column, Flex, Heading, Icon, Text } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface FAQSectionProps {
  block: Extract<ContentBlock, { type: "faq" }>;
  index: number;
}

export const FAQSection = ({ block, index }: FAQSectionProps) => {
  const content = block.content;
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  if (block.display === false) {
    return null;
  }

  const {
    title = "Frequently Asked Questions",
    subtitle,
    description,
    layout = "accordion",
    categories,
    questions = [],
  } = content;

  const toggleExpanded = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const renderQuestion = (
    question: {
      question: string;
      answer: string | React.ReactNode;
      category?: string;
    },
    questionIndex: number,
    categoryIndex?: number,
  ) => {
    const id = `faq-${categoryIndex ?? "general"}-${questionIndex}`;
    const isExpanded = expandedItems.has(id);

    return (
      <Column
        key={id}
        background="neutral-alpha-weak"
        radius="m"
        border="neutral-alpha-weak"
        borderStyle="solid"
      >
        <Flex
          as="button"
          fillWidth
          padding="l"
          onClick={() => toggleExpanded(id)}
          style={{
            justifyContent: "space-between",
            background: "transparent",
            border: "none",
            cursor: "pointer",
          }}
          vertical="center"
        >
          <Text variant="heading-default-m" align="left">
            {question.question}
          </Text>
          <Icon
            name="chevronDown"
            size="s"
            style={{
              transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
            }}
          />
        </Flex>
        {isExpanded && (
          <Column padding="l" paddingTop="0">
            <Text variant="body-default-m" onBackground="neutral-weak">
              {question.answer}
            </Text>
          </Column>
        )}
      </Column>
    );
  };

  return (
    <Column
      key={index}
      fillWidth
      maxWidth="l"
      horizontal="center"
      gap="xl"
      padding="xl"
      className={block.className}
    >
      {/* Header */}
      <Column horizontal="center" align="center" gap="m">
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

      {/* FAQ Content */}
      {layout === "accordion" && (
        <Column fillWidth gap="m">
          {categories && categories.length > 0
            ? categories.map((category, categoryIndex) => (
                <Column key={categoryIndex} gap="m">
                  <Heading as="h3" variant="heading-strong-l">
                    {category.name}
                  </Heading>
                  <Column gap="s">
                    {category.questions.map((question, questionIndex) =>
                      renderQuestion(question, questionIndex, categoryIndex),
                    )}
                  </Column>
                </Column>
              ))
            : questions.map((question, questionIndex) => renderQuestion(question, questionIndex))}
        </Column>
      )}

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
          {questions.map((question, questionIndex) => (
            <Column
              key={questionIndex}
              gap="m"
              padding="l"
              background="neutral-alpha-weak"
              radius="m"
              border="neutral-alpha-weak"
              borderStyle="solid"
            >
              <Heading as="h3" variant="heading-strong-m">
                {question.question}
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {question.answer}
              </Text>
            </Column>
          ))}
        </Flex>
      )}
    </Column>
  );
};
