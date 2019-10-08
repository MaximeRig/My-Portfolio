// == Import : npm
import React from 'react';
import Plx from 'react-plx';

// == Import : local
import './about.scss';

const separationParallax = [
  {
    start: 'self',
    end: 1000,
    duration: 900,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: 'rotate',
      },
    ],
  },
];

// == Composant
const About = () => {

  return (
    <React.Fragment>
      <section id="about" className="about">
        <h2 className="about-title">Mettre mes compétences au service de votre entreprise</h2>
        <p className="about-desc">Spécialisé dans l'écosytème <strong>Javascript</strong> avec <strong>React</strong>, je développe des interfaces en mobile first, axées sur la simplicité et l'accessibilité.</p>
        <p className="about-desc">Aujourd'hui, je recherche une entreprise dans laquelle m'épanouir afin d'apporter mon expérience et mes qualités.</p>
        <p className="about-desc">J'aime le développement, c'est la raison pour laquelle je continue de me former sur différentes technologies qui permettent d'être plus compétitifs sur le marché de l'emploi.</p>
      </section>
      <Plx
        parallaxData={separationParallax}
      >
        <div className="separateSection" />
      </Plx>
    </React.Fragment>
  );
};


// == Export
export default About;
