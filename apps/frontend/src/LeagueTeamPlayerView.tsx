import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'components';

export function LeagueTeamPlayerView() {
  const [leagues, setLeagues] = useState<any[]>([]);
  const [teams, setTeams] = useState<any[]>([]);
  const [players, setPlayers] = useState<any[]>([]);
  const [selectedLeague, setSelectedLeague] = useState<string>('');
  const [selectedTeam, setSelectedTeam] = useState<string>('');
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/api/leagues')
      .then((res) => res.json())
      .then((data) => setLeagues(data.response || []));
  }, []);

  useEffect(() => {
    if (!selectedLeague) return;
    fetch(`/api/teams?league=${selectedLeague}&season=2024`)
      .then((res) => res.json())
      .then((data) => setTeams(data.response || []));
  }, [selectedLeague]);

  useEffect(() => {
    if (!selectedTeam) return;
    fetch(`/api/players?team=${selectedTeam}&season=2024`)
      .then((res) => res.json())
      .then((data) => setPlayers(data.response || []));
  }, [selectedTeam]);

  return (
    <div>
      <h2>Select League, Team, and Player</h2>
      <div>
        <label>League:</label>
        <select value={selectedLeague} onChange={(e) => setSelectedLeague(e.target.value)}>
          <option value="">Select League</option>
          {leagues.map((l) => (
            <option key={l.league.id} value={l.league.id}>
              {l.league.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Team:</label>
        <select
          value={selectedTeam}
          onChange={(e) => setSelectedTeam(e.target.value)}
          disabled={!selectedLeague}
        >
          <option value="">Select Team</option>
          {teams.map((t) => (
            <option key={t.team.id} value={t.team.id}>
              {t.team.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Player:</label>
        <select
          value={selectedPlayer}
          onChange={(e) => setSelectedPlayer(e.target.value)}
          disabled={!selectedTeam}
        >
          <option value="">Select Player</option>
          {players.map((p) => (
            <option key={p.player.id} value={p.player.id}>
              {p.player.name}
            </option>
          ))}
        </select>
      </div>
      <Button disabled={!selectedPlayer} onClick={() => navigate(`/player/${selectedPlayer}`)}>
        View Player Stats
      </Button>
    </div>
  );
}
