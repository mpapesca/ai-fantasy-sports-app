import { describe, it, expect } from 'vitest';
import { mockGet, resetMockGet } from './test-utils';
import { ApiFootballClient } from '../src/index';

describe('ApiFootballClient (smoke)', () => {
  it('constructs with options and exposes methods', () => {
    const c = new ApiFootballClient({ apiKey: 'test' });
    expect(typeof c.getLeagues).toBe('function');
    expect(typeof c.getTeams).toBe('function');
    expect(typeof c.getFixtures).toBe('function');
  });

  it('getLeagues returns a response object (mocked)', async () => {
    resetMockGet();
    mockGet.mockResolvedValueOnce({ data: { response: [] } });
    const c = new ApiFootballClient({ apiKey: 'test' });
    const res = await c.getLeagues();
    expect(res).toHaveProperty('response');
    expect(Array.isArray(res.response)).toBe(true);
  });
});
