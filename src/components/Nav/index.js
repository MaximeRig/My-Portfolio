// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import AnchorLink from 'react-anchor-link-smooth-scroll';

// == Import : local
import './nav.scss';

// == Composant
const Nav = ({ navigation, handleClickNavElt }) => {
  const navClassNames = classNames('nav', { navActive: navigation });

  // Return the offSet for AnchorLink
  const navHeight = () => {
    const navActive = document.querySelector('.navActive');
    return navActive.firstChild.clientHeight;
  };

  return (
    <nav className={navClassNames}>
      <ul>
        <li onClick={handleClickNavElt}><AnchorLink offset={navHeight} href="#home">Accueil</AnchorLink></li>
        <li onClick={handleClickNavElt}><AnchorLink offset={navHeight} href="#about">à propos</AnchorLink></li>
        <li onClick={handleClickNavElt}><AnchorLink offset={navHeight} href="#projects">projets</AnchorLink></li>
        <li onClick={handleClickNavElt}><AnchorLink offset={navHeight} href="#projects">contact</AnchorLink></li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  navigation: PropTypes.bool.isRequired,
  handleClickNavElt: PropTypes.func.isRequired,
};

// == Export
export default Nav;
