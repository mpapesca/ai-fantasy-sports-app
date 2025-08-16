import { describe, it, expect, beforeEach } from 'vitest';
import { mockGet, resetMockGet } from './test-utils';
import { ApiFootballClient } from '../src/index';

beforeEach(() => {
  resetMockGet();
});

describe('ApiFootballClient methods', () => {
  it('getTeams calls /teams and returns response', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ team: { id: 1, name: 'Team A' } }] } });
    const c = new ApiFootballClient({ apiKey: 'test' });
    const res = await c.getTeams({ league: 1, season: 2023 });
    expect(mockGet).toHaveBeenCalledWith('/teams', { params: { league: 1, season: 2023 } });
    expect(res).toHaveProperty('response');
    expect(Array.isArray(res.response)).toBe(true);
    expect(res.response[0]).toHaveProperty('team');
  });

  it('getFixtures calls /fixtures and supports team param', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ fixture: { id: 11 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getFixtures({ league: 2, season: 2023, team: 5 });
    expect(mockGet).toHaveBeenCalledWith('/fixtures', {
      params: { league: 2, season: 2023, team: 5 },
    });
    expect(res.response[0]).toHaveProperty('fixture');
  });

  it('getStandings calls /standings with params', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ league: { id: 3 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getStandings({ league: 3, season: 2023 });
    expect(mockGet).toHaveBeenCalledWith('/standings', { params: { league: 3, season: 2023 } });
    expect(res.response[0]).toHaveProperty('league');
  });

  it('getPlayers handles optional params', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ player: { id: 20 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getPlayers({ team: 7 });
    expect(mockGet).toHaveBeenCalledWith('/players', { params: { team: 7 } });
    expect(res.response[0]).toHaveProperty('player');
  });

  it('getCountries calls /countries', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ name: 'Spain' }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getCountries();
    expect(mockGet).toHaveBeenCalledWith('/countries');
    expect(res.response[0]).toHaveProperty('name');
  });

  it('getPredictions calls /predictions with fixture', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ pred: { winner: 'A' } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getPredictions({ fixture: 99 });
    expect(mockGet).toHaveBeenCalledWith('/predictions', { params: { fixture: 99 } });
    expect(res.response[0]).toHaveProperty('pred');
  });

  it('getOdds calls /odds with fixture', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ odds: { id: 1 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getOdds({ fixture: 7 });
    expect(mockGet).toHaveBeenCalledWith('/odds', { params: { fixture: 7 } });
    expect(res.response[0]).toHaveProperty('odds');
  });

  it('getTopScorers calls /players/topscorers', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ player: { id: 3 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getTopScorers({ league: 5, season: 2024 });
    expect(mockGet).toHaveBeenCalledWith('/players/topscorers', {
      params: { league: 5, season: 2024 },
    });
    expect(res.response[0]).toHaveProperty('player');
  });

  it('getTopAssists calls /players/topassists', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ player: { id: 4 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getTopAssists({ league: 6, season: 2024 });
    expect(mockGet).toHaveBeenCalledWith('/players/topassists', {
      params: { league: 6, season: 2024 },
    });
    expect(res.response[0]).toHaveProperty('player');
  });

  it('getTransfers calls /transfers and returns response', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ transfer: { id: 77 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getTransfers({ player: 10 });
    expect(mockGet).toHaveBeenCalledWith('/transfers', { params: { player: 10 } });
    expect(res.response[0]).toHaveProperty('transfer');
  });

  it('getTrophies calls /trophies', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ trophy: { id: 2 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getTrophies({ player: 1 });
    expect(mockGet).toHaveBeenCalledWith('/trophies', { params: { player: 1 } });
    expect(res.response[0]).toHaveProperty('trophy');
  });

  it('getVenues calls /venues', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ venue: { id: 9 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getVenues({ team: 2 });
    expect(mockGet).toHaveBeenCalledWith('/venues', { params: { team: 2 } });
    expect(res.response[0]).toHaveProperty('venue');
  });

  it('getCoaches calls /coachs (note: endpoint spelling)', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ coach: { id: 5 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getCoaches({ team: 4 });
    expect(mockGet).toHaveBeenCalledWith('/coachs', { params: { team: 4 } });
    expect(res.response[0]).toHaveProperty('coach');
  });

  it('getSidelined calls /sidelined', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ sidelined: { id: 8 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getSidelined({ team: 3 });
    expect(mockGet).toHaveBeenCalledWith('/sidelined', { params: { team: 3 } });
    expect(res.response[0]).toHaveProperty('sidelined');
  });

  it('getLineups calls /lineups', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ lineup: { id: 12 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getLineups({ fixture: 55 });
    expect(mockGet).toHaveBeenCalledWith('/lineups', { params: { fixture: 55 } });
    expect(res.response[0]).toHaveProperty('lineup');
  });

  it('getEvents calls /events', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ event: { id: 2 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getEvents({ fixture: 55 });
    expect(mockGet).toHaveBeenCalledWith('/events', { params: { fixture: 55 } });
    expect(res.response[0]).toHaveProperty('event');
  });

  it('getStatistics calls /statistics', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ statistics: { id: 1 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getStatistics({ fixture: 55 });
    expect(mockGet).toHaveBeenCalledWith('/statistics', { params: { fixture: 55 } });
    expect(res.response[0]).toHaveProperty('statistics');
  });

  it('getInjuries calls /injuries with optional params', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ injury: { id: 99 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const res = await c.getInjuries({ league: 8, season: 2023, team: 3 });
    expect(mockGet).toHaveBeenCalledWith('/injuries', {
      params: { league: 8, season: 2023, team: 3 },
    });
    expect(res.response[0]).toHaveProperty('injury');
  });

  it('getTopYellowCards and getTopRedCards call their endpoints', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ player: { id: 21 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const yellow = await c.getTopYellowCards({ league: 1, season: 2023 });
    expect(mockGet).toHaveBeenCalledWith('/players/topyellowcards', {
      params: { league: 1, season: 2023 },
    });
    expect(yellow.response[0]).toHaveProperty('player');

    mockGet.mockResolvedValueOnce({ data: { response: [{ player: { id: 22 } }] } });
    const red = await c.getTopRedCards({ league: 1, season: 2023 });
    expect(mockGet).toHaveBeenCalledWith('/players/topredcards', {
      params: { league: 1, season: 2023 },
    });
    expect(red.response[0]).toHaveProperty('player');
  });

  it('getSeasons, getRounds, getCoverage, getStatus, getBookmakers, getBets, getTimezone', async () => {
    mockGet.mockResolvedValueOnce({ data: { response: [{ season: { year: 2023 } }] } });
    const c = new ApiFootballClient({ apiKey: 'k' });
    const seasons = await c.getSeasons();
    expect(mockGet).toHaveBeenCalledWith('/leagues/seasons');
    expect(seasons.response[0]).toHaveProperty('season');

    mockGet.mockResolvedValueOnce({ data: { response: [{ round: { name: 'Matchday 1' } }] } });
    const rounds = await c.getRounds({ league: 1, season: 2023 });
    expect(mockGet).toHaveBeenCalledWith('/fixtures/rounds', {
      params: { league: 1, season: 2023 },
    });
    expect(rounds.response[0]).toHaveProperty('round');

    mockGet.mockResolvedValueOnce({ data: { response: [{ coverage: { tv: [] } }] } });
    const coverage = await c.getCoverage({ league: 1, season: 2023 });
    expect(mockGet).toHaveBeenCalledWith('/leagues/coverage', {
      params: { league: 1, season: 2023 },
    });
    expect(coverage.response[0]).toHaveProperty('coverage');

    mockGet.mockResolvedValueOnce({ data: { response: [{ status: { long: 'Not started' } }] } });
    const status = await c.getStatus();
    expect(mockGet).toHaveBeenCalledWith('/fixtures/status', { params: undefined });
    expect(status.response[0]).toHaveProperty('status');

    mockGet.mockResolvedValueOnce({ data: { response: [{ bookmaker: { id: 1 } }] } });
    const bks = await c.getBookmakers();
    expect(mockGet).toHaveBeenCalledWith('/odds/bookmakers');
    expect(bks.response[0]).toHaveProperty('bookmaker');

    mockGet.mockResolvedValueOnce({ data: { response: [{ bet: { id: 2 } }] } });
    const bets = await c.getBets();
    expect(mockGet).toHaveBeenCalledWith('/odds/bets');
    expect(bets.response[0]).toHaveProperty('bet');

    mockGet.mockResolvedValueOnce({ data: { response: [{ timezone: { zone: 'UTC' } }] } });
    const tz = await c.getTimezone();
    expect(mockGet).toHaveBeenCalledWith('/timezone');
    expect(tz.response[0]).toHaveProperty('timezone');
  });
});
