// Types for API-Football v3 responses

export interface League {
  league: {
    id: number;
    name: string;
    type: string;
    logo: string;
  };
  country: {
    name: string;
    code: string;
    flag: string;
  };
  seasons: Array<{
    year: number;
    start: string;
    end: string;
    current: boolean;
    coverage: Record<string, boolean>;
  }>;
}

export interface Team {
  team: {
    id: number;
    name: string;
    code: string;
    country: string;
    founded: number;
    national: boolean;
    logo: string;
  };
  venue: {
    id: number;
    name: string;
    address: string;
    city: string;
    capacity: number;
    surface: string;
    image: string;
  };
}

export interface Fixture {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
    periods: Record<string, number>;
    venue: {
      id: number;
      name: string;
      city: string;
    };
    status: Record<string, string | number>;
  };
  league: League['league'];
  teams: {
    home: Team['team'];
    away: Team['team'];
  };
  goals: {
    home: number;
    away: number;
  };
  score: Record<string, any>;
}

export interface Player {
  player: {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: Record<string, any>;
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  };
  statistics: Array<Record<string, any>>;
}


// Enums
export enum LeagueType {
  League = 'League',
  Cup = 'Cup',
}

export enum FixtureStatus {
  TBD = 'TBD',
  NS = 'NS',
  LIVE = 'LIVE',
  HT = 'HT',
  FT = 'FT',
  AET = 'AET',
  PEN = 'PEN',
  SUSP = 'SUSP',
  INT = 'INT',
  PST = 'PST',
  CANC = 'CANC',
  ABD = 'ABD',
  AWARDED = 'AWARDED',
  DELETED = 'DELETED',
}

export enum CardType {
  Yellow = 'Yellow',
  Red = 'Red',
}

// Constants
export const API_BASE_URL = 'https://v3.football.api-sports.io';

// Standings
export interface Standing {
  league: League['league'];
  season: number;
  standings: Array<Array<{
    rank: number;
    team: Team['team'];
    points: number;
    goalsDiff: number;
    group?: string;
    form?: string;
    status?: string;
    description?: string;
    all: Record<string, number>;
    home: Record<string, number>;
    away: Record<string, number>;
  }>>;
}

// Coach
export interface Coach {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  nationality: string;
  photo: string;
}

// Venue
export interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

// Prediction
export interface Prediction {
  fixture: Fixture['fixture'];
  predictions: Record<string, any>;
}

// Odds
export interface Odds {
  fixture: Fixture['fixture'];
  bookmakers: Bookmaker[];
}

export interface Bookmaker {
  id: number;
  name: string;
  bets: Bet[];
}

export interface Bet {
  id: number;
  name: string;
  values: Array<{ value: string; odd: string }>;
}

// Transfer
export interface Transfer {
  player: Player['player'];
  transfers: Array<{
    date: string;
    type: string;
    teams: { in: Team['team']; out: Team['team'] };
  }>;
}

// Trophy
export interface Trophy {
  league: League['league'];
  season: number;
  place: number;
}

// Sidelined
export interface Sidelined {
  player: Player['player'];
  reason: string;
  start: string;
  end: string;
}

// Lineup
export interface Lineup {
  team: Team['team'];
  coach: Coach;
  formation: string;
  startXI: Array<{ player: Player['player']; pos: string }>;
  substitutes: Array<{ player: Player['player']; pos: string }>;
}

// Event
export interface Event {
  time: { elapsed: number; extra?: number };
  team: Team['team'];
  player: Player['player'];
  type: string;
  detail: string;
  comments?: string;
}

// Statistic
export interface Statistic {
  team: Team['team'];
  statistics: Record<string, any>;
}

// Injury
export interface Injury {
  player: Player['player'];
  team: Team['team'];
  fixture: Fixture['fixture'];
  reason: string;
}

// Country
export interface Country {
  name: string;
  code: string;
  flag: string;
}

// Season
export interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
}

// Round
export interface Round {
  name: string;
}

// Coverage
export interface Coverage {
  fixtures: Record<string, boolean>;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

// Status
export interface Status {
  short: string;
  long: string;
  elapsed: number;
}

// Timezone
export interface Timezone {
  timezone: string;
}
