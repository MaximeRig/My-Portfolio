// == Import : npm
import React from 'react';

// == Import : local
import './contact.scss';

// == Composant
const Contact = () => {

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">
        Contactez-moi !
      </h2>
      <p className="contact-mailMe">
        <a href="mailto:maxime.rigaud.dev@gmail.com">maxime.rigaud.dev@gmail.com</a>
      </p>
    </section>
  );
};


// == Export
export default Contact;
