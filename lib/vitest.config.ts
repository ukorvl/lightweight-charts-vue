import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [tsconfigPaths(), vue()],
  test: {
    environment: "jsdom",
    include: ["src/**/*.test.{ts,tsx}"],
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["json", "text", "lcov"],
      include: ["src/**/*.{ts,vue}"],
      reportsDirectory: "coverage",
      exclude: ["**/index.ts"],
    },
    setupFiles: ["@testing-library/jest-dom"],
  },
});
