// == Import : npm
import React from 'react';
import classNames from 'classnames';

// == Import : local
import './app.scss';
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';

// == Composant
class App extends React.Component {

  state = {
    navigation: false,
  }

  handleClickMenu = () => {
    const { navigation } = this.state;
    if (!navigation) {
      this.setState({
        navigation: true,
      });
    }
    else {
      this.setState({
        navigation: false,
      });
    }
  }

  render() {
    const { navigation } = this.state;
    const appNavigationActive = classNames('app', { appNoScroll: navigation });
    return (
      <div className={appNavigationActive}>
  
        <Nav navigation={navigation} />
  
        <Header navigation={navigation} handleClickMenu={this.handleClickMenu} />
  
        <main className="main">
  
          <section className="about">
            <h2 className="about-title">Mettre mes compétences au service de votre entreprise</h2>
            <p className="about-desc">Depuis toujours, j'ai voulu être développeur web.</p>
            <p className="about-desc">C'est pourquoi je recherche une opportunité en Haute-Savoie et sur Genève.</p>
          </section>
  
        </main>
      </div>
    );
  }
}


// == Export
export default App;
