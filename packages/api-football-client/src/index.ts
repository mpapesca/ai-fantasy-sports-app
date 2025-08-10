import axios, { AxiosInstance } from 'axios';
import type {
  League,
  Team,
  Fixture,
  Player,
  Standing,
  Coach,
  Venue,
  Prediction,
  Odds,
  Bookmaker,
  Bet,
  Transfer,
  Trophy,
  Sidelined,
  Lineup,
  Event,
  Statistic,
  Injury,
  Country,
  Season,
  Round,
  Coverage,
  Status,
  Timezone
} from './types';

export interface ApiFootballClientOptions {
  apiKey: string;
  baseURL?: string;
}

export class ApiFootballClient {
  private axios: AxiosInstance;

  constructor(options: ApiFootballClientOptions) {
    this.axios = axios.create({
      baseURL: options.baseURL || 'https://v3.football.api-sports.io',
      headers: {
        'x-apisports-key': options.apiKey,
      },
    });
  }

  async getLeagues(): Promise<{ response: League[] }> {
    const response = await this.axios.get('/leagues');
    return response.data;
  }

  async getTeams(params: { league: number; season: number }): Promise<{ response: Team[] }> {
    const response = await this.axios.get('/teams', { params });
    return response.data;
  }

  async getFixtures(params: { league: number; season: number; team?: number }): Promise<{ response: Fixture[] }> {
    const response = await this.axios.get('/fixtures', { params });
    return response.data;
  }

  async getStandings(params: { league: number; season: number }): Promise<{ response: Standing[] }> {
    const response = await this.axios.get('/standings', { params });
    return response.data;
  }

  async getPlayers(params: { team?: number; league?: number; season?: number; player?: number }): Promise<{ response: Player[] }> {
    const response = await this.axios.get('/players', { params });
    return response.data;
  }

  async getCoaches(params: { team?: number; coach?: number }): Promise<{ response: Coach[] }> {
    const response = await this.axios.get('/coachs', { params });
    return response.data;
  }

  async getVenues(params: { team?: number; venue?: number }): Promise<{ response: Venue[] }> {
    const response = await this.axios.get('/venues', { params });
    return response.data;
  }

  async getPredictions(params: { fixture: number }): Promise<{ response: Prediction[] }> {
    const response = await this.axios.get('/predictions', { params });
    return response.data;
  }

  async getOdds(params: { fixture: number }): Promise<{ response: Odds[] }> {
    const response = await this.axios.get('/odds', { params });
    return response.data;
  }

  async getTopScorers(params: { league: number; season: number }): Promise<{ response: Player[] }> {
    const response = await this.axios.get('/players/topscorers', { params });
    return response.data;
  }

  async getTransfers(params: { player?: number; team?: number }): Promise<{ response: Transfer[] }> {
    const response = await this.axios.get('/transfers', { params });
    return response.data;
  }

  async getTrophies(params: { player?: number; coach?: number }): Promise<{ response: Trophy[] }> {
    const response = await this.axios.get('/trophies', { params });
    return response.data;
  }

  async getSidelined(params: { player?: number; team?: number }): Promise<{ response: Sidelined[] }> {
    const response = await this.axios.get('/sidelined', { params });
    return response.data;
  }

  async getLineups(params: { fixture: number }): Promise<{ response: Lineup[] }> {
    const response = await this.axios.get('/lineups', { params });
    return response.data;
  }

  async getEvents(params: { fixture: number }): Promise<{ response: Event[] }> {
    const response = await this.axios.get('/events', { params });
    return response.data;
  }

  async getStatistics(params: { fixture: number }): Promise<{ response: Statistic[] }> {
    const response = await this.axios.get('/statistics', { params });
    return response.data;
  }

  async getInjuries(params: { league?: number; season?: number; team?: number; player?: number }): Promise<{ response: Injury[] }> {
    const response = await this.axios.get('/injuries', { params });
    return response.data;
  }

  async getTopAssists(params: { league: number; season: number }): Promise<{ response: Player[] }> {
    const response = await this.axios.get('/players/topassists', { params });
    return response.data;
  }

  async getTopYellowCards(params: { league: number; season: number }): Promise<{ response: Player[] }> {
    const response = await this.axios.get('/players/topyellowcards', { params });
    return response.data;
  }

  async getTopRedCards(params: { league: number; season: number }): Promise<{ response: Player[] }> {
    const response = await this.axios.get('/players/topredcards', { params });
    return response.data;
  }

  async getCountries(): Promise<{ response: Country[] }> {
    const response = await this.axios.get('/countries');
    return response.data;
  }

  async getSeasons(): Promise<{ response: Season[] }> {
    const response = await this.axios.get('/leagues/seasons');
    return response.data;
  }

  async getRounds(params: { league: number; season: number }): Promise<{ response: Round[] }> {
    const response = await this.axios.get('/fixtures/rounds', { params });
    return response.data;
  }

  async getCoverage(params: { league: number; season: number }): Promise<{ response: Coverage[] }> {
    const response = await this.axios.get('/leagues/coverage', { params });
    return response.data;
  }

  async getStatus(params?: { fixture?: number }): Promise<{ response: Status[] }> {
    const response = await this.axios.get('/fixtures/status', { params });
    return response.data;
  }

  async getBookmakers(): Promise<{ response: Bookmaker[] }> {
    const response = await this.axios.get('/odds/bookmakers');
    return response.data;
  }

  async getBets(): Promise<{ response: Bet[] }> {
    const response = await this.axios.get('/odds/bets');
    return response.data;
  }

  async getTimezone(): Promise<{ response: Timezone[] }> {
    const response = await this.axios.get('/timezone');
    return response.data;
  }
}
