import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function PlayerStatsView() {
  const { playerId } = useParams();
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!playerId) return;
    setLoading(true);
    fetch(`/api/players?player=${playerId}`)
      .then((res) => res.json())
      .then((data) => {
        setStats(data.response?.[0]?.statistics || []);
        setLoading(false);
      });
  }, [playerId]);

  if (loading) return <div>Loading player stats...</div>;
  if (!stats) return <div>No stats found.</div>;

  return (
    <div>
      <h2>Player Stats</h2>
      <ul>
        {stats.map((stat: any, idx: number) => (
          <li key={idx}>
            <strong>{stat.team?.name}</strong>: {JSON.stringify(stat)}
          </li>
        ))}
      </ul>
    </div>
  );
}
