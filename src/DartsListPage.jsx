import React, { useEffect, useState } from 'react';

function DartsListPage() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPlayers() {
      try {
        const response = await fetch('https://darts.sulla.hu/darts'); 
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPlayers(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPlayers();
  }, []);

  if (loading) {
    return <p>Betöltés alatt...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Darts Players List</h1>
      <ul>
        {players.length > 0 ? (
          players.map((player) => (
            <li key={player.id}>
              <img src={player.image_url} alt={player.name} width={100} />
              <p><strong>Name:</strong> {player.name}</p>
              <p><strong>Birth Date:</strong> {player.birth_date}</p>
              <p><strong>World Championships Won:</strong> {player.world_ch_won}</p>
              <p><a href={player.profile_url} target="_blank" rel="noopener noreferrer">Profile</a></p>
            </li>
          ))
        ) : (
          <p>Nincs adat.</p>
        )}
      </ul>
    </div>
  );
}

export default DartsListPage;
