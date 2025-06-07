"use client";

import Link from "next/link";

import { Button, Card, Flex, Grid, Heading, Text } from "@pageforge/once-ui/components";

// ============================================================================
// PAGEFORGE PREVIEW CENTER 🎯
// Showcasing the simplified template architecture
// ============================================================================

const PreviewCenter = () => {
  const previews = [
    {
      id: "enhanced-templates",
      title: "Simplified Template System",
      description: "Clean architecture with direct template functions and contextual hooks",
      icon: "🎯",
      badge: "NEW",
      badgeColor: "#10b981",
      features: [
        "Direct template functions",
        "Contextual user data integration",
        "Single source of truth",
        "No more builder patterns",
      ],
      path: "/preview/enhanced-templates",
    },
    {
      id: "page-builder",
      title: "Manual PageBuilder",
      description: "Full control custom page building for complex requirements",
      icon: "⚙️",
      badge: "FLEXIBLE",
      badgeColor: "#8b5cf6",
      features: [
        "Fluent API for manual building",
        "Custom sections and layouts",
        "Advanced configuration",
        "Perfect for unique pages",
      ],
      path: "/preview/page-builder",
    },
    {
      id: "profile",
      title: "UserContext Integration",
      description: "Profile page demonstrating real user context data integration",
      icon: "👤",
      badge: "CONTEXT",
      badgeColor: "#3b82f6",
      features: [
        "Real user data from context",
        "Dynamic content rendering",
        "Profile statistics",
        "Social links management",
      ],
      path: "/preview/profile",
    },
    {
      id: "template-comparison",
      title: "Template Comparison",
      description: "Side-by-side comparison of all 4 templates with live configs",
      icon: "⚖️",
      badge: "INTERACTIVE",
      badgeColor: "#ef4444",
      features: [
        "Side-by-side template comparison",
        "Live configuration generation",
        "Contextual vs default data",
        "Feature analysis",
      ],
      path: "/preview/template-comparison",
    },
    {
      id: "quick-generator",
      title: "Quick Generator",
      description: "Input your data and generate all 4 templates instantly",
      icon: "🚀",
      badge: "GENERATOR",
      badgeColor: "#06b6d4",
      features: [
        "Personal data input form",
        "Instant template generation",
        "All 4 templates at once",
        "Copy configurations",
      ],
      path: "/preview/quick-generator",
    },
    {
      id: "sections",
      title: "Section Components",
      description: "Comprehensive showcase of all available section components",
      icon: "🧩",
      badge: "COMPLETE",
      badgeColor: "#f59e0b",
      features: [
        "30+ section types",
        "Once UI integration",
        "Responsive design",
        "Theme-aware styling",
      ],
      path: "/preview/sections",
    },
  ];

  return (
    <Flex direction="column" gap="xl" paddingY="xl" paddingX="l">
      {/* Header */}
      <Flex direction="column" gap="m" style={{ textAlign: "center" }}>
        <Heading variant="display-strong-l">PageForge Preview Center 🚀</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Explore the simplified template architecture and enhanced features
        </Text>
        <Text variant="body-default-m" onBackground="neutral-medium">
          Clean, focused, and developer-friendly - one clear way to create pages
        </Text>
      </Flex>

      {/* Architecture Overview */}
      <Flex direction="column" gap="m" padding="l" radius="m" background="brand-weak">
        <Heading variant="heading-strong-m">🎯 Simplified Architecture</Heading>
        <Grid columns="3" gap="m">
          <Flex direction="column" gap="s">
            <Text variant="label-default-m" onBackground="brand-strong">
              ✅ Direct Functions
            </Text>
            <Text variant="body-default-s">developerTemplate()</Text>
            <Text variant="body-default-s">designerTemplate()</Text>
            <Text variant="body-default-s">freelancerTemplate()</Text>
            <Text variant="body-default-s">profileTemplate()</Text>
          </Flex>
          <Flex direction="column" gap="s">
            <Text variant="label-default-m" onBackground="brand-strong">
              🪝 Contextual Hooks
            </Text>
            <Text variant="body-default-s">useContextualTemplates()</Text>
            <Text variant="body-default-s">User data integration</Text>
            <Text variant="body-default-s">Automatic transformation</Text>
            <Text variant="body-default-s">Clean API</Text>
          </Flex>
          <Flex direction="column" gap="s">
            <Text variant="label-default-m" onBackground="brand-strong">
              ⚙️ Manual Builder
            </Text>
            <Text variant="body-default-s">PageBuilder class</Text>
            <Text variant="body-default-s">Full control</Text>
            <Text variant="body-default-s">Custom requirements</Text>
            <Text variant="body-default-s">Fluent API</Text>
          </Flex>
        </Grid>
      </Flex>

      {/* Preview Cards */}
      <Grid columns="2" gap="l">
        {previews.map((preview) => (
          <Card
            key={preview.id}
            padding="l"
            background="surface"
            style={{ position: "relative", height: "100%" }}
          >
            <Flex direction="column" gap="m" style={{ height: "100%" }}>
              {/* Header */}
              <Flex
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Flex style={{ alignItems: "center" }} gap="s">
                  <Text style={{ fontSize: "2rem" }}>{preview.icon}</Text>
                  <Heading variant="heading-strong-m">{preview.title}</Heading>
                </Flex>
                <div
                  style={{
                    background: preview.badgeColor,
                    color: "white",
                    padding: "2px 8px",
                    borderRadius: "12px",
                    fontSize: "10px",
                    fontWeight: "600",
                  }}
                >
                  {preview.badge}
                </div>
              </Flex>

              {/* Description */}
              <Text variant="body-default-m" onBackground="neutral-medium">
                {preview.description}
              </Text>

              {/* Features */}
              <Flex direction="column" gap="xs" style={{ flex: 1 }}>
                <Text variant="label-default-s" onBackground="neutral-strong">
                  Features:
                </Text>
                {preview.features.map((feature, index) => (
                  <Flex key={index} style={{ alignItems: "center" }} gap="xs">
                    <Text variant="body-default-s" style={{ color: "var(--brand-medium)" }}>
                      ✓
                    </Text>
                    <Text variant="body-default-s" onBackground="neutral-medium">
                      {feature}
                    </Text>
                  </Flex>
                ))}
              </Flex>

              {/* Action */}
              <Link href={preview.path} style={{ textDecoration: "none" }}>
                <Button variant="primary" size="m" style={{ width: "100%" }}>
                  Explore {preview.title}
                </Button>
              </Link>
            </Flex>
          </Card>
        ))}
      </Grid>

      {/* Live Template Previews */}
      <Card padding="l" background="brand-weak" radius="m">
        <Flex direction="column" gap="m" style={{ textAlign: "center" }}>
          <Flex style={{ alignItems: "center", justifyContent: "center" }} gap="m">
            <Text style={{ fontSize: "2rem" }}>🖼️</Text>
            <Heading variant="heading-strong-m">Live Template Previews</Heading>
          </Flex>
          <Text variant="body-default-m" onBackground="neutral-medium">
            View fully rendered template pages with all sections - see exactly how your pages will
            look!
          </Text>
          <Text variant="body-default-s" onBackground="neutral-medium">
            Each template now includes 10+ comprehensive sections: hero, stats, projects, skills,
            testimonials, pricing, contact forms, and more.
          </Text>
          <Button
            variant="primary"
            size="m"
            href="/preview-pages"
            style={{ alignSelf: "center" }}
            arrowIcon
          >
            View Live Template Previews
          </Button>
        </Flex>
      </Card>

      {/* Quick Start Guide */}
      <Flex direction="column" gap="m" padding="l" radius="m" background="surface">
        <Heading variant="heading-strong-m">🚀 Quick Start Guide</Heading>

        <Grid columns="2" gap="l">
          <Flex direction="column" gap="s">
            <Text variant="label-default-m" onBackground="brand-strong">
              1. Simple Template
            </Text>
            <pre
              style={{
                background: "var(--neutral-weak)",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "12px",
                overflow: "auto",
                margin: 0,
              }}
            >
              {`import { developerTemplate } from '@pageforge/lib/services/page-builder'

const config = developerTemplate()
// Ready to use!`}
            </pre>
          </Flex>

          <Flex direction="column" gap="s">
            <Text variant="label-default-m" onBackground="brand-strong">
              2. With User Context
            </Text>
            <pre
              style={{
                background: "var(--neutral-weak)",
                padding: "12px",
                borderRadius: "6px",
                fontSize: "12px",
                overflow: "auto",
                margin: 0,
              }}
            >
              {`import { useContextualTemplates } from '@pageforge/lib/hooks/useContextualTemplates'

const templates = useContextualTemplates(user, projects)
const config = templates.developer()`}
            </pre>
          </Flex>
        </Grid>

        <Flex direction="column" gap="s">
          <Text variant="label-default-m" onBackground="brand-strong">
            3. Manual Building (Advanced)
          </Text>
          <pre
            style={{
              background: "var(--neutral-weak)",
              padding: "12px",
              borderRadius: "6px",
              fontSize: "12px",
              overflow: "auto",
              margin: 0,
            }}
          >
            {`import { PageBuilder } from '@pageforge/lib/services/page-builder'

const config = new PageBuilder()
  .addHero({ title: "Custom Page" })
  .addFeatures(featureList)
  .build()`}
          </pre>
        </Flex>
      </Flex>

      {/* Footer */}
      <Flex direction="column" gap="s" style={{ textAlign: "center" }}>
        <Text variant="body-default-s" onBackground="neutral-weak">
          PageForge Template System - Simplified & Developer-Friendly
        </Text>
        <Text variant="body-default-xs" onBackground="neutral-medium">
          Single source of truth • Clean architecture • Enhanced productivity
        </Text>
      </Flex>
    </Flex>
  );
};

export default PreviewCenter;
