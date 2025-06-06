"use client";

import { useParams } from "next/navigation";

import { UniversalPage } from "@pageforge/components/universal-page/UniversalPage";
import { Button, Card, Flex, Text } from "@pageforge/once-ui/components";

import {
  designerTemplate,
  developerTemplate,
  freelancerTemplate,
  profileTemplate,
} from "../../../lib/services/page-builder";

// Template mapping object
const templates = {
  developer: developerTemplate,
  designer: designerTemplate,
  freelancer: freelancerTemplate,
  profile: profileTemplate,
};

// Template metadata
const templateMetadata = {
  developer: {
    title: "💻 Developer Portfolio",
    description: "Full-stack developer portfolio with technical focus",
    sections: 12,
  },
  designer: {
    title: "🎨 Designer Portfolio",
    description: "UX/UI designer portfolio with comprehensive experience",
    sections: 13,
  },
  freelancer: {
    title: "💼 Freelancer Landing",
    description: "Professional service landing page with conversion focus",
    sections: 10,
  },
  profile: {
    title: "👤 User Profile",
    description: "UserContext-integrated profile page",
    sections: 7,
  },
};

const TemplatePreview = () => {
  const params = useParams();
  const pageType = params.pageType as string;

  // Validate page type
  if (!pageType || !(pageType in templates)) {
    return (
      <Card padding="xl" background="surface">
        <Flex direction="column" gap="m" horizontal="center">
          <Text variant="heading-strong-l">❌ Template Not Found</Text>
          <Text variant="body-default-m" onBackground="neutral-medium">
            The template "{pageType}" doesn't exist.
          </Text>
          <Text variant="body-default-s" onBackground="neutral-weak">
            Available templates: developer, designer, freelancer, profile
          </Text>
          <Button variant="primary" href="/preview-pages" style={{ marginTop: "1rem" }}>
            Back to Preview Hub
          </Button>
        </Flex>
      </Card>
    );
  }

  // Get template function and generate config
  const templateFunction = templates[pageType as keyof typeof templates];
  const pageConfig = templateFunction();

  // Get metadata
  const metadata = templateMetadata[pageType as keyof typeof templateMetadata];

  return (
    <>
      {/* Optional: Add a minimal header for context */}
      <Card
        padding="m"
        background="brand-alpha-weak"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          marginBottom: "1rem",
        }}
      >
        <Flex horizontal="space-between" vertical="center">
          <Flex direction="column" gap="xs">
            <Text variant="heading-strong-s">{metadata.title}</Text>
            <Text variant="body-default-xs" onBackground="neutral-medium">
              {metadata.sections} sections • {metadata.description}
            </Text>
          </Flex>
          <Flex gap="s">
            <Button variant="tertiary" size="s" href="/preview-pages" prefixIcon="arrowLeft">
              All Templates
            </Button>
            <Button
              variant="secondary"
              size="s"
              onClick={() => {
                console.log(`${pageType} Template Config:`, pageConfig);
                alert(`${pageType} template configuration logged to console`);
              }}
              prefixIcon="computer"
            >
              View Config
            </Button>
          </Flex>
        </Flex>
      </Card>

      {/* Render the template */}
      <UniversalPage config={pageConfig} />
    </>
  );
};

export default TemplatePreview;
