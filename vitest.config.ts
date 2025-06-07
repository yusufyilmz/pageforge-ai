import path from "node:path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
    exclude: ["node_modules", "dist", ".next"],
    globals: true,
    coverage: {
      reporter: ["text", "json", "html"],
      exclude: [
        "node_modules/",
        "src/test/",
        "**/*.d.ts",
        "**/*.config.{js,ts}",
        "src/once-ui/",
        ".next/",
        "coverage/",
      ],
    },
  },
  resolve: {
    alias: {
      "@pageforge/components": path.resolve(__dirname, "./src/components"),
      "@pageforge/lib": path.resolve(__dirname, "./src/lib"),
      "@pageforge/contexts": path.resolve(__dirname, "./src/contexts"),
      "@pageforge/hooks": path.resolve(__dirname, "./src/hooks"),
      "@pageforge/once-ui": path.resolve(__dirname, "./src/once-ui"),
      "@pageforge/test": path.resolve(__dirname, "./src/test"),
      "@pageforge/types": path.resolve(__dirname, "./src/lib/types"),
      "@pageforge/utils": path.resolve(__dirname, "./src/lib/utils"),
      "@pageforge/once-ui/components": path.resolve(__dirname, "./src/once-ui/components"),
    },
  },
});
