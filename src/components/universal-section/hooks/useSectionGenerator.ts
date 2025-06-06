"use client";

import { useCallback, useState } from "react";

import { chatSectionGenerator } from "../ChatSectionGenerator";

interface UseSectionGeneratorResult {
  generateSection: (userMessage: string) => Promise<void>;
  isGenerating: boolean;
  lastGenerated: {
    sectionType?: string;
    sectionName?: string;
    message: string;
  } | null;
  error: string | null;
  clearError: () => void;
}

export const useSectionGenerator = (): UseSectionGeneratorResult => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [lastGenerated, setLastGenerated] = useState<{
    sectionType?: string;
    sectionName?: string;
    message: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const generateSection = useCallback(async (userMessage: string) => {
    setIsGenerating(true);
    setError(null);

    try {
      const result = await chatSectionGenerator.generateSectionFromChat({
        userMessage,
      });

      if (result.success) {
        setLastGenerated({
          sectionType: result.sectionType,
          sectionName: result.sectionName,
          message: result.message,
        });
      } else {
        setError(result.message);
      }
    } catch (err) {
      setError("Failed to generate section. Please try again.");
      console.error("Section generation error:", err);
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    generateSection,
    isGenerating,
    lastGenerated,
    error,
    clearError,
  };
};

// Hook for detecting section requests in chat
export const useSectionDetection = () => {
  const detectSectionRequest = useCallback((message: string): boolean => {
    return chatSectionGenerator.detectSectionRequest(message);
  }, []);

  const extractRequirements = useCallback((message: string) => {
    return chatSectionGenerator.extractSectionRequirements(message);
  }, []);

  return {
    detectSectionRequest,
    extractRequirements,
  };
};

// Hook for managing AI-generated sections
export const useAIGeneratedSections = () => {
  const [aiSections, setAISections] = useState<string[]>([]);

  const refreshAISections = useCallback(async () => {
    const { autoSectionRegistry } = await import("../AutoSectionRegistry");
    setAISections(autoSectionRegistry.getAIGeneratedSections());
  }, []);

  const isAIGenerated = useCallback(
    (sectionType: string): boolean => {
      return aiSections.includes(sectionType);
    },
    [aiSections]
  );

  return {
    aiSections,
    refreshAISections,
    isAIGenerated,
  };
};
