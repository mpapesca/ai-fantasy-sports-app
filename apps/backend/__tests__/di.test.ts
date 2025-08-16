// import 'dotenv/config';
import { describe, it, expect } from 'vitest';
import { container } from '../src/di';

describe('DI container', () => {
  it('should resolve ApiFootballClient', () => {
    const client = container.resolve('ApiFootballClient');
    expect(client).toBeDefined();
    expect(typeof client).toBe('object');
    expect(client).toHaveProperty('getLeagues'); // Example method
  });

  it('should always return the same instance for ApiFootballClient', () => {
    const client1 = container.resolve('ApiFootballClient');
    const client2 = container.resolve('ApiFootballClient');
    expect(client1).toBe(client2);
  });
});
