import { useContextualTemplates } from "@pageforge/hooks/useContextualTemplates";
import { mockPersonData, mockProjectData } from "@pageforge/test/utils";
import { renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("Contextual Templates Hook", () => {
  describe("useContextualTemplates", () => {
    it("should return template functions", () => {
      const { result } = renderHook(() => useContextualTemplates(mockPersonData, mockProjectData));

      expect(result.current).toBeDefined();
      expect(typeof result.current.developer).toBe("function");
      expect(typeof result.current.designer).toBe("function");
      expect(typeof result.current.freelancer).toBe("function");
    });

    it("should provide user data access", () => {
      const { result } = renderHook(() => useContextualTemplates(mockPersonData, mockProjectData));

      expect(result.current.personData).toBeDefined();
      expect(result.current.projectData).toBeDefined();
      expect(result.current.hasUserData).toBe(true);
      expect(result.current.hasProjects).toBe(true);
    });

    it("should handle missing data gracefully", () => {
      const { result } = renderHook(() => useContextualTemplates());

      expect(result.current.hasUserData).toBe(false);
      expect(result.current.hasProjects).toBe(false);
    });

    it("should generate valid PageConfig objects", () => {
      const { result } = renderHook(() => useContextualTemplates(mockPersonData, mockProjectData));

      const developerConfig = result.current.developer();

      expect(developerConfig).toBeDefined();
      expect(developerConfig.pageType).toBe("about");
      expect(developerConfig.metadata).toBeDefined();
      expect(developerConfig.content).toBeDefined();
    });
  });
});
