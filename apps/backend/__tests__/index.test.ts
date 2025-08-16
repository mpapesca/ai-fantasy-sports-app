import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import {
  resetState,
  storedHandlers,
  usedMiddleware,
  listened,
  setListenBehavior,
} from './test-utils';

beforeEach(() => resetState());
afterEach(() => resetState());

describe('backend index (server wiring)', () => {
  it('registers middleware and routes and calls listen with port from env', async () => {
    // Set a specific port to assert it is used
    process.env.PORT = '4567';
    // Ensure the module cache is cleared so imports pick up current env/mocks
    vi.resetModules();
    const mod = await import('../src/index');

    // express.json should have been used as middleware
    expect(usedMiddleware).toContain('json-middleware');

    // Root handler exists and responds with welcome message
    expect(typeof storedHandlers['/']).toBe('function');
    const mockReq = {} as any;
    const mockRes = { json: vi.fn() } as any;
    await storedHandlers['/'](mockReq, mockRes);
    expect(mockRes.json).toHaveBeenCalledWith({ message: 'Welcome to the AI Fantasy Sports API!' });

    // /status handler responds with status ok
    expect(typeof storedHandlers['/status']).toBe('function');
    const mockRes2 = { json: vi.fn() } as any;
    await storedHandlers['/status'](mockReq, mockRes2);
    expect(mockRes2.json).toHaveBeenCalledWith({ status: 'ok' });

    // listen called with our port (coerce in case PORT came from env as a string)
    expect(Number(listened.port)).toBe(4567);
    expect(typeof listened.cb).toBe('function');
  });

  it('defaults to port 3001 when PORT unset', async () => {
    delete process.env.PORT;
    vi.resetModules();
    const mod = await import('../src/index');
    expect(listened.port).toBe(3001);
  });

  it('propagates listen errors when server fails to start', async () => {
    setListenBehavior({ throw: true });
    process.env.PORT = '9999';
    vi.resetModules();
    let threw = false;
    try {
      await import('../src/index');
    } catch (err) {
      threw = true;
      expect((err as Error).message).toMatch(/listen-failed/);
    }
    expect(threw).toBe(true);
  });
});
