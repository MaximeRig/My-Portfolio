// == Import : npm
import React from 'react';

// == Import : local
import './about.scss';

// == Composant
const About = () => {

  return (
    <React.Fragment>
      <section className="about">
        <h2 className="about-title">Mettre mes compétences au service de votre entreprise.</h2>
        <p className="about-desc">Depuis toujours, je veux devenir <strong>développeur web</strong>.</p>
        <p className="about-desc">J'ai la chance d'avoir pu profiter d'une formation de qualité, de pratiquer et d'en apprendre un peu plus chaque jour.</p>
        <p className="about-desc">Mais aujourd'hui, ce qu'il me manque, c'est une entreprise dans laquelle m'épanouir car, oui, je suis enfin prêt.</p>
        <p className="about-desc">J'aime le développement, je compte bien trouver l'entreprise qui saura me faire confiance et ainsi, commencer une belle carrière.</p>
        <div className="box" />
      </section>
      <div className="separateSection" />
    </React.Fragment>
  );
};


// == Export
export default About;
