import React from 'react';
import { useEffect, useState } from 'react';
import './styles/Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      const offset = window.scrollY;
      setScrolled(offset > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <h1 className="logo">
          <img src="/images/logoHeader.png" alt="Logo" />
        </h1>
        <nav className="navbar">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/storia">Storia</NavLink>
          <NavLink to="/canti">Canti</NavLink>
          <NavLink to="/contatti">Contatti</NavLink>
        </nav>
      </header>

      <div className={`image ${scrolled ? 'shrink' : ''}`}>
        <img src="/images/ImmacolataBgHome.png" className="foto" alt="Copertina" />
        <div
            className="overlay"
            style={{
            opacity: Math.min(0.3, scrollY / 200)  // aumenta l'opacità fino a 1
        }}
        />
      </div>

      <div className={`content ${scrolled ? 'visible' : ''}`} id="content">
        <h2>Benvenuto!</h2>
        <p>Questa sezione appare man mano che scrolli.</p>
      </div>
    </div>
  );
};

export default Home;