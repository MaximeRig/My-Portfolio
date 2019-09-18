// == Import : npm
import React from 'react';
import { FaHeart, FaLinkedinIn, FaGithub } from 'react-icons/fa';

// == Import : local
import './app.scss';

// == Composant
const App = () => (
  <div id="app">

    <div className="lines">
      <div className="redLine lines--left" />
      <div className="redLine lines--bottom" />
      <div className="redLine lines--right" />
    </div>

    <nav className="navigation">
      <ul>
        <li>accueil</li>
        <li>à propos</li>
        <li>outils</li>
        <li>projets</li>
      </ul>
    </nav>

    <section className="about"></section>
    <section className="tools"></section>
    <section className="projects"></section>

    <h1 className="title">Bonjour,
      <span>Je suis <strong className="title-content">Maxime Rigaud</strong></span>
      <span>et je suis <strong className="title-content">Développeur Web</strong></span>
    </h1>

    <footer className="footer">
      <p className="footer--developper">Développé avec <FaHeart /> par Maxime Rigaud</p>
      <div className="footer--social">
        <a href="https://www.linkedin.com/in/maximerigaud-dev/">
          <FaLinkedinIn className="linkedin" />
        </a>
        <a href="https://github.com/MaximeRig">
          <FaGithub className="github" />
        </a>
      </div>
    </footer>

  </div>
);

// == Export
export default App;
