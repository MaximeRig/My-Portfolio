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
        <li>accueil</li>
        <li>à propos</li>
        <li>projets</li>
        <li>contact</li>
      </ul>
    </nav>
  );
}

Nav.propTypes = {
  navigation: PropTypes.bool.isRequired,
};

// == Export
export default Nav;
