"use client";

import { GenericLayout } from "@pageforge/components/layout/Layout";
import { UniversalPage } from "@pageforge/components/universal-page/UniversalPage";
import { profileTemplate } from "@pageforge/lib/services/page-builder";
import { Button, Card, Flex, Text } from "@pageforge/once-ui/components";

const ProfilePreview = () => {
  // Generate the prnpmofile template configuration
  const pageConfig = profileTemplate();

  return (
    <GenericLayout theme="minimal">
      {/* Preview Header */}
      <Card
        padding="m"
        background="brand-alpha-weak"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          marginBottom: "2rem",
        }}
      >
        <Flex horizontal="space-between" vertical="center">
          <Flex direction="column" gap="xs">
            <Text variant="heading-strong-s">👤 User Profile Template</Text>
            <Text variant="body-default-xs" onBackground="neutral-medium">
              Live preview with {Array.isArray(pageConfig.content) ? pageConfig.content.length : 0}{" "}
              sections
            </Text>
          </Flex>
          <Flex gap="s">
            <Button variant="tertiary" size="s" href="/preview-pages" prefixIcon="arrowLeft">
              Back to Preview Hub
            </Button>
            <Button
              variant="secondary"
              size="s"
              href="/preview/template-comparison?selected=profile"
              prefixIcon="compare"
            >
              Compare
            </Button>
            <Button
              variant="primary"
              size="s"
              onClick={() => {
                console.log("Profile Template Config:", pageConfig);
                alert("Template configuration logged to console");
              }}
              prefixIcon="code"
            >
              View Config
            </Button>
          </Flex>
        </Flex>
      </Card>

      {/* Render the actual template sections */}
      <UniversalPage config={pageConfig} />

      {/* Preview Footer */}
      <Card padding="l" background="surface" style={{ marginTop: "4rem" }}>
        <Flex direction="column" gap="m" style={{ textAlign: "center" }}>
          <Text variant="heading-strong-m">👤 Profile Template Features</Text>
          <Text variant="body-default-m" onBackground="neutral-medium">
            UserContext-integrated profile page with dynamic data
          </Text>

          <Flex
            direction="column"
            gap="s"
            style={{ textAlign: "left", maxWidth: "600px", margin: "0 auto" }}
          >
            <Text variant="label-default-s" onBackground="brand-strong">
              Sections included:
            </Text>
            <Flex wrap gap="xs">
              {[
                "Profile Overview",
                "Summary Stats",
                "Featured Projects",
                "Skills Categories",
                "Work Experience",
                "Contact Info",
                "Social Networks",
              ].map((section, index) => (
                <Card key={index} padding="xs" background="brand-alpha-weak">
                  <Text variant="body-default-xs">{section}</Text>
                </Card>
              ))}
            </Flex>
          </Flex>

          <Text
            variant="body-default-s"
            onBackground="neutral-medium"
            style={{ marginTop: "1rem" }}
          >
            💡 This template automatically pulls data from UserContext for personalized content
          </Text>

          <Flex gap="m" horizontal="center" style={{ marginTop: "1rem" }}>
            <Button variant="primary" href="/preview/profile" arrowIcon>
              View Profile Demo
            </Button>
            <Button variant="secondary" href="/preview-pages/designer">
              View Designer Template
            </Button>
          </Flex>
        </Flex>
      </Card>
    </GenericLayout>
  );
};

export default ProfilePreview;
