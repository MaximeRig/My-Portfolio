// == Import : npm
import React from 'react';

// == Import : local
import './about.scss';



// == Composant
const About = () => {

  return (
    <React.Fragment>
      <section id="about" className="about">
        <h2 className="section-title">Mettre mes compétences au service de votre entreprise</h2>
        <p className="about-desc">Spécialisé dans l'écosytème <strong>Javascript</strong> avec <strong>React</strong>, je développe des interfaces en mobile first, axées sur la simplicité et l'accessibilité.</p>
        <p className="about-desc">Aujourd'hui, je recherche une entreprise dans laquelle m'épanouir afin d'apporter mon expérience et mes qualités.</p>
        <p className="about-desc">J'aime le développement, c'est la raison pour laquelle je continue de me former sur différentes technologies afin d'en apprendre toujours plus et de gagner en expérience.</p>
      </section>
      
    </React.Fragment>
  );
};


// == Export
export default About;
