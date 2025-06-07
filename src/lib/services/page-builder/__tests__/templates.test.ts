import {
  createAboutPageFromTemplate,
  designerTemplate,
  developerTemplate,
  freelancerTemplate,
  profileTemplate,
} from "@pageforge/lib/services/page-builder";
import { mockPersonData, mockProjectData } from "@pageforge/test/utils";
import { describe, expect, it } from "vitest";

describe("PageForge Templates", () => {
  describe("developerTemplate", () => {
    it("should generate a valid page configuration", () => {
      const config = developerTemplate();

      expect(config).toBeDefined();
      expect(config.pageType).toBe("about");
      expect(config.metadata).toBeDefined();
      expect(config.content).toBeDefined();
    });

    it("should accept custom person data", () => {
      const config = developerTemplate(mockPersonData, mockProjectData);

      expect(config).toBeDefined();
      expect(config.pageType).toBe("about");
      expect(config.metadata).toBeDefined();
    });
  });

  describe("designerTemplate", () => {
    it("should generate a valid page configuration", () => {
      const config = designerTemplate();

      expect(config).toBeDefined();
      expect(config.pageType).toBe("about");
      expect(config.metadata).toBeDefined();
    });
  });

  describe("freelancerTemplate", () => {
    it("should generate a valid page configuration", () => {
      const config = freelancerTemplate();

      expect(config).toBeDefined();
      expect(config.pageType).toBe("about");
      expect(config.metadata).toBeDefined();
    });
  });

  describe("profileTemplate", () => {
    it("should generate a valid page configuration", () => {
      const config = profileTemplate();

      expect(config).toBeDefined();
      expect(config.pageType).toBe("about");
    });
  });

  describe("createAboutPageFromTemplate", () => {
    it("should create a customized about page", () => {
      const config = createAboutPageFromTemplate({
        person: mockPersonData,
        projects: mockProjectData,
        sections: ["hero", "projects"],
      });

      expect(config).toBeDefined();
      expect(config.pageType).toBe("about");
      expect(config.content).toBeDefined();
    });

    it("should handle minimal configuration", () => {
      const config = createAboutPageFromTemplate({
        person: { name: "Test", lastName: "User", role: "Tester" },
        sections: ["hero"],
      });

      expect(config).toBeDefined();
      expect(config.pageType).toBe("about");
    });
  });
});
