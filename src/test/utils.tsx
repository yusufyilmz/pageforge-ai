import { ThemeProvider } from "@pageforge/contexts/ThemeContext";
import { UserProvider } from "@pageforge/contexts/UserContext";
import { type RenderOptions, render } from "@testing-library/react";
import type { ReactElement } from "react";

// Mock user data following PageForge patterns
export const mockPersonData = {
  name: "John",
  lastName: "Doe",
  role: "Developer",
  bio: "Test developer bio",
  email: "john.doe@example.com",
  location: "San Francisco, CA",
  avatar: "/images/avatar.jpg",
};

export const mockProjectData = [
  {
    id: "1",
    title: "Test Project",
    description: "A test project for testing",
    image: "/images/demo.jpg",
    technologies: ["React", "TypeScript", "Next.js"],
    href: "https://example.com",
    featured: true,
  },
];

export const mockExperienceData = [
  {
    id: "1",
    title: "Senior Developer",
    company: "Test Company",
    location: "Remote",
    start: "2022",
    end: "Present",
    description: "Working on amazing projects",
  },
];

// Custom render function with providers
const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <UserProvider>{children}</UserProvider>
    </ThemeProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };

// Test utilities for PageForge components
export const waitForNextTick = () => new Promise((resolve) => setTimeout(resolve, 0));

export const mockUserInfo = {
  id: "test-user-id",
  email: "john.doe@example.com",
  user_metadata: {
    name: "John Doe",
    avatar_url: "/images/avatar.jpg",
  },
};

export const createMockPageConfig = (overrides = {}) => ({
  pageType: "about" as const,
  metadata: {
    title: "Test Page",
    description: "Test page description",
    openGraph: {
      title: "Test Page",
      description: "Test page description",
      images: [{ url: "/images/og/home.jpg" }],
    },
  },
  contentBlocks: [],
  ...overrides,
});
