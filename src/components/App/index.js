// == Import : npm
import React from 'react';
import classNames from 'classnames';
import AOS from 'aos';

// == Import : local
import './app.scss';
import '../../../node_modules/aos/dist/aos.css';
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import About from 'src/components/About';
import Projects from 'src/components/Projects';

// == Composant
class App extends React.Component {

  state = {
    navigation: false,
  };

  componentDidMount() {
    AOS.init({
      duration: 1000,
    });
  }

  componentDidUpdate() {
    AOS.refresh();
  }

  handleClickNavElt = () => {
    this.setState({
      navigation: false,
    });
  }

  handleClickMenu = () => {
    window.scrollTo(0, 0);

    const { navigation } = this.state;

    this.setState({
      navigation: !navigation,
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
