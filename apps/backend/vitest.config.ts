import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      exclude: [
        'src/main.ts',
        'src/index.ts',
        'vitest.config.ts',
        'dist/**',
      ],
    },
  },
});
