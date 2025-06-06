"use client";

import { Heading } from "@pageforge/once-ui/components";
import type { ContentBlock } from "@pageforge/types/page/pageTypes";

interface HeadingSectionProps {
  block: Extract<ContentBlock, { type: "heading" }>;
  index: number;
}

export const HeadingSection = ({ block, index }: HeadingSectionProps) => {
  const content = block.content;

  if (block.display === false) {
    return null;
  }

  const { text, level = 2, align = "left" } = content;

  return (
    <Heading
      key={index}
      as={`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
      variant={(block.variant as any) || "display-strong-s"}
      align={align}
      className={block.className}
    >
      {text}
    </Heading>
  );
};
