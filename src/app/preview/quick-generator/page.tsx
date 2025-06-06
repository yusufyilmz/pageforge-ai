"use client";

import React, { useState } from "react";

import { Button, Card, Flex, Grid, Heading, Input, Text } from "@pageforge/once-ui/components";

import { useContextualTemplates } from "../../../lib/hooks/useContextualTemplates";

// ============================================================================
// QUICK TEMPLATE GENERATOR 🚀
// Input your data and generate all 4 templates instantly
// ============================================================================

interface UserFormData {
  name: string;
  lastName: string;
  role: string;
  email: string;
  location: string;
  bio: string;
  website: string;
}

interface ProjectFormData {
  title: string;
  description: string;
  technologies: string;
  url: string;
  featured: boolean;
}

const QuickGenerator = () => {
  const [step, setStep] = useState<"input" | "generate" | "results">("input");
  const [userData, setUserData] = useState<UserFormData>({
    name: "Jordan",
    lastName: "Smith",
    role: "Full Stack Developer",
    email: "jordan@example.com",
    location: "Remote",
    bio: "Passionate developer with 5+ years of experience building modern web applications.",
    website: "https://jordansmith.dev",
  });

  const [projects, setProjects] = useState<ProjectFormData[]>([
    {
      title: "E-commerce Platform",
      description: "Modern React-based e-commerce solution",
      technologies: "React, Node.js, PostgreSQL, Redis",
      url: "https://ecommerce.example.com",
      featured: true,
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      technologies: "Next.js, TypeScript, Prisma, Tailwind",
      url: "https://taskmanager.example.com",
      featured: true,
    },
  ]);

  const [generatedConfigs, setGeneratedConfigs] = useState<any>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  // Transform form data for templates
  const transformedProjects = projects.map((project) => ({
    title: project.title,
    description: project.description,
    technologies: project.technologies.split(",").map((tech) => tech.trim()),
    url: project.url,
    featured: project.featured,
  }));

  const contextualTemplates = useContextualTemplates(userData, transformedProjects);

  const generateAllTemplates = async () => {
    setIsGenerating(true);
    try {
      // Simulate some processing time
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const configs = {
        developer: contextualTemplates.developer(),
        designer: contextualTemplates.designer(),
        freelancer: contextualTemplates.freelancer(),
        profile: contextualTemplates.profile(),
      };

      setGeneratedConfigs(configs);
      setStep("results");
    } catch (error) {
      console.error("Error generating templates:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const updateUserField = (field: keyof UserFormData, value: string) => {
    setUserData((prev) => ({ ...prev, [field]: value }));
  };

  const updateProject = (index: number, field: keyof ProjectFormData, value: string | boolean) => {
    setProjects((prev) =>
      prev.map((project, i) => (i === index ? { ...project, [field]: value } : project)),
    );
  };

  const addProject = () => {
    setProjects((prev) => [
      ...prev,
      {
        title: "",
        description: "",
        technologies: "",
        url: "",
        featured: false,
      },
    ]);
  };

  const removeProject = (index: number) => {
    setProjects((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <Flex direction="column" gap="xl" paddingY="xl" paddingX="l">
      {/* Header */}
      <Flex direction="column" gap="m" style={{ textAlign: "center" }}>
        <Heading variant="display-strong-l">Quick Template Generator 🚀</Heading>
        <Text variant="body-default-l" onBackground="neutral-weak">
          Input your personal data and generate all 4 templates instantly
        </Text>
      </Flex>

      {/* Progress */}
      <Flex gap="s" style={{ alignSelf: "center" }}>
        {["input", "generate", "results"].map((stepName, index) => (
          <React.Fragment key={stepName}>
            <Button
              variant={step === stepName ? "primary" : "secondary"}
              size="s"
              onClick={() => stepName !== "results" && setStep(stepName as any)}
              style={{ minWidth: "100px" }}
            >
              {index + 1}. {stepName.charAt(0).toUpperCase() + stepName.slice(1)}
            </Button>
            {index < 2 && <Text variant="body-default-m">→</Text>}
          </React.Fragment>
        ))}
      </Flex>

      {/* Input Step */}
      {step === "input" && (
        <Flex direction="column" gap="l">
          {/* Personal Information */}
          <Card padding="l" background="surface">
            <Flex direction="column" gap="m">
              <Heading variant="heading-strong-m">👤 Personal Information</Heading>
              <Grid columns="2" gap="m">
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s">First Name</Text>
                  <Input
                    value={userData.name}
                    onChange={(e) => updateUserField("name", e.target.value)}
                    placeholder="Your first name"
                    id={""}
                  />
                </Flex>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s">Last Name</Text>
                  <Input
                    value={userData.lastName}
                    onChange={(e) => updateUserField("lastName", e.target.value)}
                    placeholder="Your last name"
                    id={""}
                  />
                </Flex>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s">Role/Title</Text>
                  <Input
                    value={userData.role}
                    onChange={(e) => updateUserField("role", e.target.value)}
                    placeholder="e.g., Full Stack Developer"
                    id={""}
                  />
                </Flex>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s">Email</Text>
                  <Input
                    type="email"
                    value={userData.email}
                    onChange={(e) => updateUserField("email", e.target.value)}
                    placeholder="your@email.com"
                    id={""}
                  />
                </Flex>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s">Location</Text>
                  <Input
                    value={userData.location}
                    onChange={(e) => updateUserField("location", e.target.value)}
                    placeholder="City, Country or Remote"
                    id={""}
                  />
                </Flex>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s">Website</Text>
                  <Input
                    type="url"
                    value={userData.website}
                    onChange={(e) => updateUserField("website", e.target.value)}
                    placeholder="https://yourwebsite.com"
                    id={""}
                  />
                </Flex>
              </Grid>
              <Flex direction="column" gap="s">
                <Text variant="label-default-s">Bio</Text>
                <textarea
                  value={userData.bio}
                  onChange={(e) => updateUserField("bio", e.target.value)}
                  placeholder="Tell us about yourself and your professional experience..."
                  style={{
                    width: "100%",
                    minHeight: "80px",
                    padding: "12px",
                    border: "1px solid var(--neutral-medium)",
                    borderRadius: "6px",
                    fontSize: "14px",
                    fontFamily: "inherit",
                    resize: "vertical",
                  }}
                />
              </Flex>
            </Flex>
          </Card>

          {/* Projects */}
          <Card padding="l" background="surface">
            <Flex direction="column" gap="m">
              <Flex
                style={{
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Heading variant="heading-strong-m">🚀 Projects</Heading>
                <Button variant="secondary" size="s" onClick={addProject}>
                  Add Project
                </Button>
              </Flex>

              {projects.map((project, index) => (
                <Card key={index} padding="m" background="neutral-weak">
                  <Flex direction="column" gap="s">
                    <Flex
                      style={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Text variant="label-default-s">Project {index + 1}</Text>
                      {projects.length > 1 && (
                        <Button variant="secondary" size="s" onClick={() => removeProject(index)}>
                          Remove
                        </Button>
                      )}
                    </Flex>

                    <Grid columns="2" gap="s">
                      <Flex direction="column" gap="xs">
                        <Text variant="label-default-xs">Title</Text>
                        <Input
                          value={project.title}
                          onChange={(e) => updateProject(index, "title", e.target.value)}
                          placeholder="Project name"
                          id={""}
                        />
                      </Flex>
                      <Flex direction="column" gap="xs">
                        <Text variant="label-default-xs">URL</Text>
                        <Input
                          value={project.url}
                          onChange={(e) => updateProject(index, "url", e.target.value)}
                          placeholder="https://project.com"
                          id={""}
                        />
                      </Flex>
                    </Grid>

                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-xs">Description</Text>
                      <textarea
                        value={project.description}
                        onChange={(e) => updateProject(index, "description", e.target.value)}
                        placeholder="Brief description of the project..."
                        style={{
                          width: "100%",
                          minHeight: "60px",
                          padding: "8px",
                          border: "1px solid var(--neutral-medium)",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontFamily: "inherit",
                          resize: "vertical",
                        }}
                      />
                    </Flex>

                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-xs">Technologies (comma separated)</Text>
                      <Input
                        value={project.technologies}
                        onChange={(e) => updateProject(index, "technologies", e.target.value)}
                        placeholder="React, Node.js, PostgreSQL"
                        id={""}
                      />
                    </Flex>

                    <Flex style={{ alignItems: "center" }} gap="s">
                      <input
                        type="checkbox"
                        checked={project.featured}
                        onChange={(e) => updateProject(index, "featured", e.target.checked)}
                        id={`featured-${index}`}
                      />
                      <label htmlFor={`featured-${index}`}>
                        <Text variant="label-default-xs">Featured project</Text>
                      </label>
                    </Flex>
                  </Flex>
                </Card>
              ))}
            </Flex>
          </Card>

          <Button variant="primary" size="l" onClick={() => setStep("generate")}>
            Continue to Generate Templates
          </Button>
        </Flex>
      )}

      {/* Generate Step */}
      {step === "generate" && (
        <Flex direction="column" gap="l" style={{ textAlign: "center" }}>
          <Card padding="xl" background="surface">
            <Flex direction="column" gap="m" style={{ alignItems: "center" }}>
              <Text style={{ fontSize: "4rem" }}>🎯</Text>
              <Heading variant="heading-strong-l">Ready to Generate Templates</Heading>
              <Text variant="body-default-l" onBackground="neutral-medium">
                We'll create all 4 PageForge templates using your data
              </Text>

              <Grid columns="2" gap="l" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s" onBackground="brand-strong">
                    Your Profile
                  </Text>
                  <Text variant="body-default-s">
                    {userData.name} {userData.lastName}
                  </Text>
                  <Text variant="body-default-s">{userData.role}</Text>
                  <Text variant="body-default-s">{userData.location}</Text>
                </Flex>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s" onBackground="brand-strong">
                    Your Projects
                  </Text>
                  {projects.slice(0, 2).map((project, index) => (
                    <Text key={index} variant="body-default-s">
                      {project.title}
                    </Text>
                  ))}
                  {projects.length > 2 && (
                    <Text variant="body-default-s">+{projects.length - 2} more</Text>
                  )}
                </Flex>
              </Grid>

              <Flex gap="m">
                <Button variant="secondary" size="m" onClick={() => setStep("input")}>
                  ← Back to Edit
                </Button>
                <Button
                  variant="primary"
                  size="l"
                  onClick={generateAllTemplates}
                  loading={isGenerating}
                >
                  {isGenerating ? "Generating Templates..." : "Generate All Templates"}
                </Button>
              </Flex>
            </Flex>
          </Card>
        </Flex>
      )}

      {/* Results Step */}
      {step === "results" && generatedConfigs && (
        <Flex direction="column" gap="l">
          <Flex direction="column" gap="m" style={{ textAlign: "center" }}>
            <Text style={{ fontSize: "3rem" }}>🎉</Text>
            <Heading variant="heading-strong-l">Templates Generated Successfully!</Heading>
            <Text variant="body-default-l" onBackground="neutral-medium">
              Here are your personalized PageForge templates
            </Text>
          </Flex>

          <Grid columns="2" gap="l">
            {Object.entries(generatedConfigs).map(([templateName, config]: [string, any]) => (
              <Card key={templateName} padding="l" background="surface">
                <Flex direction="column" gap="m">
                  <Flex style={{ alignItems: "center" }} gap="s">
                    <Text style={{ fontSize: "1.5rem" }}>
                      {templateName === "developer"
                        ? "💻"
                        : templateName === "designer"
                          ? "🎨"
                          : templateName === "freelancer"
                            ? "💼"
                            : "👤"}
                    </Text>
                    <Heading variant="heading-strong-m">
                      {templateName.charAt(0).toUpperCase() + templateName.slice(1)} Template
                    </Heading>
                  </Flex>

                  <Grid columns="2" gap="s">
                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-xs" onBackground="neutral-strong">
                        Sections
                      </Text>
                      <Text variant="body-default-s">{config.content?.length || 0}</Text>
                    </Flex>
                    <Flex direction="column" gap="xs">
                      <Text variant="label-default-xs" onBackground="neutral-strong">
                        Page Type
                      </Text>
                      <Text variant="body-default-s">{config.pageType}</Text>
                    </Flex>
                  </Grid>

                  <Flex direction="column" gap="s">
                    <Button
                      variant="primary"
                      size="s"
                      onClick={() => {
                        console.log(`${templateName} Config:`, config);
                        alert(`${templateName} configuration logged to console`);
                      }}
                    >
                      View Configuration
                    </Button>
                    <Button
                      variant="secondary"
                      size="s"
                      onClick={() => {
                        const configString = JSON.stringify(config, null, 2);
                        navigator.clipboard.writeText(configString);
                        alert("Configuration copied to clipboard!");
                      }}
                    >
                      Copy Configuration
                    </Button>
                  </Flex>
                </Flex>
              </Card>
            ))}
          </Grid>

          <Card padding="l" background="brand-weak">
            <Flex direction="column" gap="m">
              <Heading variant="heading-strong-m">🚀 Next Steps</Heading>
              <Grid columns="2" gap="m">
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s" onBackground="brand-strong">
                    Use the Configuration
                  </Text>
                  <Text variant="body-default-s">
                    Copy the configuration and use it in your PageForge application
                  </Text>
                </Flex>
                <Flex direction="column" gap="s">
                  <Text variant="label-default-s" onBackground="brand-strong">
                    Customize Further
                  </Text>
                  <Text variant="body-default-s">
                    Modify sections, styling, and content to match your needs
                  </Text>
                </Flex>
              </Grid>
            </Flex>
          </Card>

          <Flex gap="m" style={{ alignSelf: "center" }}>
            <Button variant="secondary" size="m" onClick={() => setStep("input")}>
              ← Generate New Templates
            </Button>
            <Button variant="primary" size="m" onClick={() => (window.location.href = "/preview")}>
              Explore More Features
            </Button>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default QuickGenerator;
