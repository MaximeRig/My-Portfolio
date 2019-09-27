// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import './nav.scss';

// == Composant
const Nav = ({ navigation, handleClickNavElt }) => {
  const navClassNames = classNames('nav', { navActive: navigation });
  return (
    <nav className={navClassNames}>
      <ul>
        <li onClick={handleClickNavElt}>accueil</li>
        <li onClick={handleClickNavElt}>à propos</li>
        <li onClick={handleClickNavElt}>projets</li>
        <li onClick={handleClickNavElt}>contact</li>
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
