"use client";

import React, { useState, useEffect, type ComponentType } from "react";

import type { ContentBlock } from "@pageforge/types/page/pageTypes";

import { autoSectionRegistry } from "./AutoSectionRegistry";

interface SectionProps {
  block: ContentBlock;
  index: number;
  posts?: any[];
  data?: any;
}

type SectionComponent = ComponentType<SectionProps>;

export const AutoUniversalSections = ({ block, index, posts, data }: SectionProps) => {
  const [SectionComponent, setSectionComponent] = useState<SectionComponent | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadSection = async () => {
      try {
        setLoading(true);
        setError(null);

        const component = await autoSectionRegistry.loadSection(block.type);

        if (component) {
          setSectionComponent(() => component);
        } else {
          setError(`Section type '${block.type}' not found`);
        }
      } catch (err) {
        setError(`Failed to load section: ${err}`);
        console.error("Section loading error:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSection();
  }, [block.type]);

  if (loading) {
    return (
      <div className="section-loading">
        <div>Loading section...</div>
      </div>
    );
  }

  if (error || !SectionComponent) {
    console.warn(`Section type '${block.type}' could not be rendered:`, error);
    return null; // Gracefully fail
  }

  return <SectionComponent block={block} index={index} posts={posts} data={data} />;
};

// Utility function to get all available section types
export const getAvailableSectionTypes = (): string[] => {
  return autoSectionRegistry.getAllSectionTypes();
};

// Utility function to check if a section type is supported
export const isSectionTypeSupported = async (type: string): Promise<boolean> => {
  try {
    const component = await autoSectionRegistry.loadSection(type);
    return component !== null;
  } catch {
    return false;
  }
};

// Function to preload commonly used sections
export const preloadCommonSections = async (types: string[] = ["hero", "features", "text"]) => {
  const promises = types.map((type) => autoSectionRegistry.loadSection(type));
  await Promise.allSettled(promises);
};
