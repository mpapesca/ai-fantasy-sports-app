import { describe, it, expect } from 'vitest';
import { greet } from '../src/utils';

describe('greet', () => {
  it('greets the user by name', () => {
    expect(greet('World')).toBe('Hello, World!');
  });
});
