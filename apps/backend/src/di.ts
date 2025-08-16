import 'reflect-metadata';
import { container } from 'tsyringe';
import { ApiFootballClient } from 'api-football-client';

// Register services with env API key
const apiKey = process.env.API_KEY;
container.register('ApiFootballClient', { useValue: new ApiFootballClient({ apiKey }) });

export { container };
