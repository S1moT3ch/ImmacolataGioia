import React from 'react';
import { useEffect, useState } from 'react';
import './styles/Home.css';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const limitedScroll = Math.min(scrollY, 200); // valore massimo = 300

  useEffect(() => {
  let ticking = false;

  const handleScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        setScrolled(window.scrollY > 100);
        ticking = false;
      });
      ticking = true;
    }
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

      <div className="image-container" style={{ transform: `translateY(${scrollY * 0.5}px)` }}>
      <div className={`image-inner ${scrolled ? 'shrink' : ''}`}>
        <img src="/images/ImmacolataBgHome.png" className="foto" alt="Copertina" />
        <div
            className="overlay"
            style={{
              opacity: 0.5-Math.min(scrollY / 300, 0.3)  // aumenta l'opacità fino a 1
            }}
        />
        <div
          className='benvenuto'
          style={{
            transform: `translate(-50%, calc(-50% + ${limitedScroll * 0.2}px))`,
          }}
        >
          Benvenuto
        </div>
        <div
          className='invito'
          style={{
            transform: `translate(-50%, calc(-50% + ${limitedScroll * 0.2}px))`,
          }}
        >
          Scopri la Parrocchia
        </div>
      </div>
      </div>
      <div className={`content ${scrolled ? 'visible' : ''}`} id="content">
        <h2>Parrocchia Immacolata di Gioia del colle</h2>
        <div className='orari'>
          <h>Orari Sante messe</h>
          <ul>Dal lunedì al sabato: 18.30</ul>
          <ul>La domenica:</ul>
            <ul>mattina: 10.30</ul>
            <ul>pomeriggio: 18.30</ul>
        </div>
      </div>
    </div>
  );
};

export default Home;