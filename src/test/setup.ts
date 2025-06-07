import "@testing-library/jest-dom";
import { cleanup } from "@testing-library/react";
import { afterEach, beforeAll, vi } from "vitest";

// Mock Next.js fonts
vi.mock("next/font/google", () => ({
  Geist: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-geist-font",
  })),
  Geist_Mono: vi.fn(() => ({
    variable: "--font-code",
    className: "mock-geist-mono-font",
  })),
  Inter: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-inter-font",
  })),
  JetBrains_Mono: vi.fn(() => ({
    variable: "--font-code",
    className: "mock-jetbrains-font",
  })),
  Merriweather: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-merriweather-font",
  })),
  Orbitron: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-orbitron-font",
  })),
  Playfair_Display: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-playfair-font",
  })),
  Poppins: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-poppins-font",
  })),
  Cinzel: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-cinzel-font",
  })),
  Creepster: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-creepster-font",
  })),
  Crimson_Text: vi.fn(() => ({
    variable: "--font-primary",
    className: "mock-crimson-font",
  })),
}));

// Mock Next.js router
vi.mock("next/router", () => ({
  useRouter: () => ({
    route: "/",
    pathname: "/",
    query: {},
    asPath: "/",
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
  }),
}));

// Mock Next.js navigation (App Router)
vi.mock("next/navigation", () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    back: vi.fn(),
    forward: vi.fn(),
    refresh: vi.fn(),
    prefetch: vi.fn(),
  }),
  usePathname: () => "/",
  useSearchParams: () => new URLSearchParams(),
}));

// Mock Supabase client
vi.mock("@pageforge/lib/supabase/client", () => ({
  supabase: {
    auth: {
      getUser: vi.fn(),
      signInWithPassword: vi.fn(),
      signOut: vi.fn(),
      onAuthStateChange: vi.fn(),
    },
    from: vi.fn(() => ({
      select: vi.fn(),
      insert: vi.fn(),
      update: vi.fn(),
      delete: vi.fn(),
      upsert: vi.fn(),
    })),
  },
}));

// Clean up after each test
afterEach(() => {
  cleanup();
});

// Setup test environment
beforeAll(() => {
  // Mock window.matchMedia
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });

  // Mock IntersectionObserver
  global.IntersectionObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));

  // Mock ResizeObserver
  global.ResizeObserver = vi.fn().mockImplementation(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }));
});
