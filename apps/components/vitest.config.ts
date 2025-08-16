import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    exclude: ['node_modules'],
    setupFilesAfterEnv: ['./setupTests.ts'],
    coverage: {
      exclude: ['**/types.ts'],
    },
  },
});
