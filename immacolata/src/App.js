// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Storia from './components/Storia';
import Canti from './components/Canti';
import Contatti from './components/Contatti';

function App() {
  return (
    <Router>
      <div className="site">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/storia" element={<Storia />} />
          <Route path="/canti" element={<Canti />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

