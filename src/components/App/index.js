// == Import : npm
import React from 'react';
import classNames from 'classnames';
import AOS from 'aos';
import Plx from 'react-plx';

// == Import : local
import '../../../node_modules/aos/dist/aos.css';
import './app.scss';
import Nav from 'src/components/Nav';
import Header from 'src/components/Header';
import About from 'src/components/About';
import Projects from 'src/components/Projects';
import Contact from 'src/components/Contact';
import Footer from 'src/components/Footer';

const separationParallax = [
  {
    start: 'self',
    end: 1000,
    duration: 900,
    properties: [
      {
        startValue: 0,
        endValue: 90,
        property: 'rotate',
      },
    ],
  },
];

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
          <Plx
            parallaxData={separationParallax}
          >
            <div className="separateSection" />
          </Plx>
          <Projects />
          <div className="separateContact" />
          <Contact />
        </main>

        <Footer />
  
      </div>
    );
  }
}


// == Export
export default App;
