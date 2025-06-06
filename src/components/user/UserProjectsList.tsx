"use client";

import { Badge, Button, Column, Heading, Row, Text } from "@pageforge/once-ui/components";

import { useUserProjects } from "../../contexts/UserContext";

interface UserProjectsListProps {
  showFeaturedOnly?: boolean;
  maxItems?: number;
  showStatus?: boolean;
  className?: string;
}

export function UserProjectsList({
  showFeaturedOnly = false,
  maxItems,
  showStatus = true,
  className,
}: UserProjectsListProps) {
  const allProjects = useUserProjects(showFeaturedOnly);
  const projects = maxItems ? allProjects.slice(0, maxItems) : allProjects;

  if (projects.length === 0) {
    return (
      <Column gap="m" className={className}>
        <Text variant="body-default-s" onBackground="neutral-weak">
          No projects found.
        </Text>
      </Column>
    );
  }

  return (
    <Column gap="l" className={className}>
      {projects.map((project) => (
        <Column key={project.id} gap="m" padding="l" border="neutral-alpha-weak" radius="m">
          {/* Project Header */}
          <Row gap="m" vertical="center" horizontal="space-between">
            <Column gap="xs">
              <Row gap="xs" vertical="center">
                <Heading variant="heading-strong-s">{project.title}</Heading>
                {showStatus && <Badge>{project.status}</Badge>}
                {project.featured && <Badge>Featured</Badge>}
              </Row>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {project.description}
              </Text>
            </Column>
          </Row>

          {/* Technologies */}
          {project.technologies && project.technologies.length > 0 && (
            <Row gap="xs" wrap>
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Technologies:
              </Text>
              {project.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </Row>
          )}

          {/* Dates */}
          <Row gap="m" vertical="center">
            {project.startDate && (
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Started: {new Date(project.startDate).toLocaleDateString()}
              </Text>
            )}
            {project.endDate && (
              <Text variant="label-default-xs" onBackground="neutral-weak">
                Completed: {new Date(project.endDate).toLocaleDateString()}
              </Text>
            )}
          </Row>

          {/* Actions */}
          <Row gap="s">
            {project.url && (
              <Button href={project.url} variant="secondary" size="s" suffixIcon="external">
                View Project
              </Button>
            )}
            {project.githubUrl && (
              <Button href={project.githubUrl} variant="tertiary" size="s" suffixIcon="external">
                GitHub
              </Button>
            )}
          </Row>
        </Column>
      ))}
    </Column>
  );
}
