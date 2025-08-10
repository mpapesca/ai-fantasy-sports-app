import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
  provider: 'v8',
      enabled: true,
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      reporter: ['text', 'html'],
    },
  },
});
