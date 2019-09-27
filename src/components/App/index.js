// == Import : npm
import React from 'react';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">

    <nav className="nav">
      <ul>
        <li>Accueil</li>
        <li>About</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </nav>

    <header className="header">
      <div className="hamburger">
        <div className="hamburger-top" />
        <div className="hamburger-center" />
        <div className="hamburger-bottom" />
      </div>
      <div className="me">
        <h1 className="me-name">Maxime Rigaud</h1>
        <p className="me-job">Développeur web</p>
      </div>
    </header>

    <section className="about">
      <h2 className="about-title">Mettre mes compétences au service de votre entreprise</h2>
      <p className="about-desc">Depuis toujours, j'ai voulu être développeur web.</p>
      <p className="about-desc">C'est pourquoi je recherche une opportunité en Haute-Savoie et sur Genève.</p>
    </section>


  </div>
);

// == Export
export default App;
