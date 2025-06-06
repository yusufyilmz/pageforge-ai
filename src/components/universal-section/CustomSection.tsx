"use client";

import React, { useState, useEffect, type ComponentType } from "react";

import { Column, Flex, Icon, Text } from "@pageforge/once-ui/components";
import type { AnyContentBlock } from "@pageforge/types/page/pageTypes";

import { aiSectionFactory } from "./AISectionFactory";

interface CustomSectionProps {
  block: AnyContentBlock;
  index: number;
  data?: any;
}

export default function CustomSection({ block, index }: CustomSectionProps) {
  const [GeneratedComponent, setGeneratedComponent] = useState<ComponentType<any> | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    generateCustomSection();
  }, [block.type, block.content]);

  const generateCustomSection = async () => {
    try {
      setIsGenerating(true);
      setError(null);

      // Create a user request from the block type and content
      const userRequest = createUserRequestFromBlock(block);

      // Analyze requirements using AI
      const requirements = aiSectionFactory.analyzeUserRequirements(userRequest);

      // Generate the section component
      const component = aiSectionFactory.generateSectionComponent(
        requirements,
        formatSectionName(block.type),
      );

      setGeneratedComponent(() => component);
    } catch (err) {
      console.error("Failed to generate custom section:", err);
      setError("Failed to generate section. Please try again.");
    } finally {
      setIsGenerating(false);
    }
  };

  const createUserRequestFromBlock = (block: AnyContentBlock): string => {
    const { type, content } = block;

    // Check if there's a description field directly on the block
    const blockDescription = (block as any).description;
    if (blockDescription) {
      return blockDescription;
    }

    // Extract meaningful information from the block (using type assertion for flexibility)
    const blockContent = content as any;
    const title = blockContent?.title || blockContent?.heading || "";
    const description = blockContent?.description || blockContent?.text || "";
    const items = blockContent?.items || blockContent?.features || blockContent?.list || [];
    const style = blockContent?.style || "modern";

    // Create a natural language request based on available data
    let request = `Create a ${type.replace("-", " ")} section`;

    if (title) {
      request += ` with title "${title}"`;
    }

    if (description) {
      request += ` and description "${description}"`;
    }

    if (items && items.length > 0) {
      if (type.includes("team")) {
        request += ` with ${items.length} team members`;
      } else if (type.includes("product")) {
        request += ` with ${items.length} products`;
      } else if (type.includes("service")) {
        request += ` with ${items.length} services`;
      } else {
        request += ` with ${items.length} items`;
      }
    }

    if (style && style !== "default") {
      request += ` in ${style} style`;
    }

    // Add specific instructions based on section type patterns
    if (type.includes("carousel") || type.includes("slider")) {
      request += " with navigation controls and auto-play";
    } else if (type.includes("accordion")) {
      request += " with collapsible content";
    } else if (type.includes("tabs")) {
      request += " with tabbed navigation";
    } else if (type.includes("chart") || type.includes("analytics")) {
      request += " with data visualization";
    } else if (type.includes("form") || type.includes("contact")) {
      request += " with form validation";
    } else if (type.includes("map")) {
      request += " with interactive map";
    } else if (type.includes("pricing")) {
      request += " with plan comparison and features";
    }

    return request;
  };

  const formatSectionName = (type: string): string => {
    return type
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
  };

  if (isGenerating) {
    return (
      <Column gap="m" padding="l">
        <Flex direction="row" align="center">
          <Icon name="refresh" size="l" />
        </Flex>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          Generating custom section for &quot;{block.type}&quot;...
        </Text>
      </Column>
    );
  }

  if (error) {
    return (
      <Column gap="m" padding="l">
        <Flex direction="row" align="center">
          <Icon name="warning" size="l" />
        </Flex>
        <Text variant="body-default-m" onBackground="neutral-weak" align="center">
          {error}
        </Text>
        <button
          type="button"
          onClick={generateCustomSection}
          style={{
            padding: "8px 16px",
            background: "#007acc",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Retry
        </button>
      </Column>
    );
  }

  // Render the generated component if available
  if (GeneratedComponent) {
    return (
      <div>
        {/* Optional: Show a small indicator that this is AI-generated */}
        <div
          style={{
            position: "relative",
            background: "linear-gradient(135deg, #f0f9ff, #e0f2fe)",
            border: "1px solid #0ea5e9",
            borderRadius: "8px",
            padding: "4px 8px",
            marginBottom: "16px",
            fontSize: "12px",
            color: "#0369a1",
            textAlign: "center",
          }}
        >
          🤖 AI-Generated {formatSectionName(block.type)} Section
        </div>

        {/* Render the actual generated component */}
        <GeneratedComponent block={block} index={index} />
      </div>
    );
  }

  // Fallback if no component was generated
  return (
    <Column gap="l" id={`section-${index}`}>
      <Text variant="heading-strong-l" align="center">
        Custom Section ({block.type})
      </Text>
      <Text variant="body-default-m" align="center" onBackground="neutral-weak">
        Failed to generate component for this section type.
      </Text>
    </Column>
  );
}
