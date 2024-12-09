import React, { useState } from 'react';

function DartsCreate() {
  const [playerName, setPlayerName] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Új játékos: ${playerName}`);
  };

  return (
    <div>
      <h1>Új Darts Játékos Felvitele</h1>
      <form onSubmit={handleSubmit}>
        <label>Játékos neve:</label>
        <input
          type="text"
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
          required
        />
        <button type="submit">Felvitel</button>
      </form>
    </div>
  );
}

export default DartsCreate;
