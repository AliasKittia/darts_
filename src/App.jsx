import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import DartsCreate from './DartsCreate';
import DartsListPage from './DartsListPage';
import DartsSingle from './DartsSingle';
import HomePage from './HomePage';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/darts" element={<DartsListPage />} />
        <Route path="/darts/:dartsId" element={<DartsSingle />} />
        <Route path="/create-darts" element={<DartsCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
