import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    setupFiles: ['setupTests.ts'],
    exclude: ['node_modules', '**/*.config.ts', 'setupTests.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      include: ['src'],
      exclude: ['**/types.ts'],
    },
  },
});
