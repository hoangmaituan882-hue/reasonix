import { defineConfig } from "vitest/config"
import { fileURLToPath } from "node:url"

const srcDir = fileURLToPath(new URL("./src", import.meta.url))

export default defineConfig({
  resolve: {
    alias: {
      "@": srcDir,
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.test.{ts,tsx}"],
    coverage: {
      provider: "v8",
      include: ["src/components/ui/**/*.tsx"],
      exclude: ["src/components/ui/calendar.tsx", "src/components/ui/command.tsx", "src/components/ui/sonner.tsx"],
      reporter: ["text", "json-summary"],
      thresholds: {
        lines: 45,
        functions: 45,
        branches: 40,
        statements: 45,
      },
    },
  },
})
