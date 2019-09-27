// == Import : npm
import React from 'react';
import classNames from 'classnames';

// == Import : local
import './app.scss';
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import About from 'src/components/About';
import Projects from 'src/components/Projects';

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

  handleClickNavElt = () => {
    this.setState({
      navigation: false,
    });
  }

  render() {
    const { navigation } = this.state;
    const appNavigationActive = classNames('app', { appNoScroll: navigation });
    return (
      <div className={appNavigationActive}>
  
        <Nav navigation={navigation} handleClickNavElt={this.handleClickNavElt} />
  
        <Header navigation={navigation} handleClickMenu={this.handleClickMenu} />
  
        <main className="main">

          <About />
          <Projects />
  
        </main>
      </div>
    );
  }
}


// == Export
export default App;
