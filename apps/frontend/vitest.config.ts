import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: [
      '__tests__/**/*.test.ts',
      '__tests__/**/*.test.tsx',
      '__tests__/**/*.spec.ts',
      '__tests__/**/*.spec.tsx',
    ],
    exclude: ['node_modules', '**/*.config.ts', 'setupTests.ts'],
    setupFilesAfterEnv: ['setupTests.ts'],
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
