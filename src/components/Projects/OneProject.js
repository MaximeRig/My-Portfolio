// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// == Import : local
import './oneProject.scss';

// == Composant
class OneProject extends React.Component {

  state= {
    cardShow: false,
  }

  handleClickProject = () => {
    const { cardShow } = this.state;
    this.setState({
      cardShow: !cardShow,
    });
  };

  render() {
    const {
      title,
      url,
      githubUrl,
      desc,
      tools,
    } = this.props;

    const { cardShow } = this.state;

    const cardClass = classNames({ card: !cardShow }, { cardClicked: cardShow });

    return (
      <div data-aos="fade-left" onClick={this.handleClickProject} className={cardClass}>
        <h3 className="title">{title}</h3>
        <p className="desc">{desc}</p>
        <p className="tools">Outils : {tools}</p>
        <div className="links">
          {url !== '' && (
            <a className="link--live" href={url}>Live</a>
          )}
          <a className="link--github" href={githubUrl}>Github</a>
        </div>
      </div>
    );
  }
};

OneProject.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  tools: PropTypes.string.isRequired,
};


// == Export
export default OneProject;
