import { vi } from 'vitest';

// Shared axios mock for tests: exports mockGet and a reset helper.
export const mockGet = vi.fn();

vi.mock('axios', () => {
  return {
    default: {
      create: () => ({
        get: mockGet,
      }),
    },
  };
});

export const resetMockGet = () => mockGet.mockReset();
