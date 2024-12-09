import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Főoldal link */}
        <li><Link to="/darts">Darts List</Link></li> {/* Darts lista link */}
      </ul>
    </nav>
  );
}

export default Navbar;
