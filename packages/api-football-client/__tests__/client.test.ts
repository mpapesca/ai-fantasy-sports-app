import { describe, it, expect } from 'vitest';
import { ApiFootballClient } from '../src/index';

describe('ApiFootballClient', () => {
  it('should initialize with API key', () => {
    const client = new ApiFootballClient({ apiKey: 'test-key' });
    expect(client).toBeDefined();
  });

  // Add more tests for client methods as needed
});
