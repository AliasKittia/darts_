import React from 'react';
import { useParams } from 'react-router-dom';

function DartsSingle() {
  const { dartsId } = useParams();

  return (
    <div>
      <h1>Darts Játékos Adatai</h1>
      <p>Játékos azonosító: {dartsId}</p>
      {/* Játékos részletes adatainak megjelenítése */}
    </div>
  );
}

export default DartsSingle;
