import { vi } from 'vitest';

export type Handler = (req: any, res: any) => any;

export let storedHandlers: Record<string, Handler> = {};
export let usedMiddleware: any[] = [];
export let listened: { port?: number | string; cb?: Function } = {};

export const mockUse = vi.fn((mw) => usedMiddleware.push(mw));
export const mockGet = vi.fn((path: string, handler: Handler) => {
  storedHandlers[path] = handler;
});

let listenBehavior: { throw?: boolean } = {};
export const setListenBehavior = (b: { throw?: boolean }) => {
  listenBehavior = b;
};

export const mockListen = vi.fn((port: number | string, cb?: Function) => {
  listened.port = port;
  listened.cb = cb;
  if (listenBehavior.throw) throw new Error('listen-failed');
  if (cb) cb();
  return { close: () => {} };
});

vi.mock('express', () => {
  const app = { use: mockUse, get: mockGet, listen: mockListen };
  const expressFn: any = () => app;
  expressFn.json = vi.fn(() => 'json-middleware');
  return { default: expressFn };
});

export const resetState = () => {
  storedHandlers = {};
  usedMiddleware = [];
  listened = {} as any;
  mockUse.mockClear();
  mockGet.mockClear();
  mockListen.mockClear();
  setListenBehavior({});
};
