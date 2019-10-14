// == Import : npm
import React from 'react';
import { FaHeart, FaLinkedinIn, FaGithub } from 'react-icons/fa';

// == Import : local
import './footer.scss';

// == Composant
const Footer = () => {

  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/maximerigaud-dev/" rel="noopener noreferrer" target="_blank">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/MaximeRig?tab=repositories" rel="noopener noreferrer" target="_blank">
          <FaGithub />
        </a>
      </div>
      <p>Développé avec <FaHeart /> par Maxime Rigaud</p>
    </footer>
  );
};

// == Export
export default Footer;
