// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import './nav.scss';

// == Composant
const Nav = ({ navigation }) => {
  const navClassNames = classNames('nav', { navActive: navigation });
  return (
    <nav className={navClassNames}>
      <ul>
        <li>Accueil</li>
        <li>About</li>
        <li>Projets</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navigation: PropTypes.bool.isRequired,
};

// == Export
export default Nav;
