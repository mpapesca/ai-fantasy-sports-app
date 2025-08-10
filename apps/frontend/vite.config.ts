import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    coverage: {
      reporter: ['text', 'json', 'html'],
      thresholds: {
        lines: 90,
        functions: 90,
        branches: 90,
        statements: 90,
      },
      exclude: [
        'src/main.tsx',
        'src/main.ts',
        'src/index.ts',
        'vite.config.ts',
        'dist/**',
      ],
    },
    setupFiles: [], // Add setup files here if needed (e.g. for global mocks)
    include: ['__tests__/**/*.test.{ts,tsx}'],
  },
});
