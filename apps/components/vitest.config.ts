import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    include: [
      'src/**/*.test.tsx',
      'src/**/*.spec.tsx',
      'src/__tests__/**/*.test.tsx',
      'src/__tests__/**/*.spec.tsx'
    ],
    exclude: ['node_modules'],
  setupFilesAfterEnv: ['./setupTests.ts'],
  },
});
