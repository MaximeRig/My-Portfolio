// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import './header.scss';

// == Composant
const Header = ({ navigation, handleClickMenu }) => {

  const headerClassNames = classNames('header', { wrapperHeader: navigation });
  const hamburgerClassNames = classNames({ hamburger: !navigation }, { hamburgerNav: navigation });

  return (
    <header className={headerClassNames}>
      <div onClick={handleClickMenu} className={hamburgerClassNames}>
        <div className="hamburger-top" />
        <div className="hamburger-center" />
        <div className="hamburger-bottom" />
      </div>
      <div className="me">
        <h1 className="me-name">Maxime Rigaud</h1>
        <p className="me-job">Développeur web</p>
      </div>
    </header>
  );
};

Header.propTypes = {
  navigation: PropTypes.bool.isRequired,
  handleClickMenu: PropTypes.func.isRequired,
};


// == Export
export default Header;
