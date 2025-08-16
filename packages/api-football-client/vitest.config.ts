import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['setupTests.ts'],
    exclude: ['node_modules', '**/*.config.ts', 'setupTests.ts'],
    coverage: {
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      reporter: ['text', 'json', 'html'],
      include: ['src'],
      exclude: ['**/types.ts'],
    },
  },
});
