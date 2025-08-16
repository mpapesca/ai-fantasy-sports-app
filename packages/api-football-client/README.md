# API Football Client

A TypeScript client for the [API-Football v3](https://www.api-football.com/documentation-v3) REST API.

## Features

- Simple authentication via API key
- Methods for leagues, teams, fixtures, and more
- Typed interface for usage in TypeScript projects

## Installation

```sh
yarn add api-football-client
```

## Usage

```ts
import { ApiFootballClient } from 'api-football-client';

const client = new ApiFootballClient({ apiKey: 'YOUR_API_KEY' });

// Get leagues
const leagues = await client.getLeagues();

// Get teams
const teams = await client.getTeams({ league: 39, season: 2024 });

// Get fixtures
const fixtures = await client.getFixtures({ league: 39, season: 2024 });
```

## API Coverage

See [API-Football v3 docs](https://www.api-football.com/documentation-v3) for all available endpoints. Extend the client as needed for your use case.

## Development

```sh
yarn build
```

## Testing

```sh
yarn test
```
