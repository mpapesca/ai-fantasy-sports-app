import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['setupTests.ts'],
    coverage: {
      reporter: ['text', 'json', 'html'],
      exclude: ['src/types.ts', '**/types.ts'],
    },
  },
});
