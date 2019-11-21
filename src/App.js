import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header'
import './App.css';
import './index.css'
import { Container } from '@material-ui/core';


function App() {
  return (
    <div className="App">
      <Navigation/>
      <Header/>
        <main>

          {/* Section About Me */}
          <div className="about-me" id="about">
            <Container>
              <div className="content-box">
                <span className="text-behind">¡Hola!</span>
              </div>
            </Container>
          </div>

          {/* Section Skills */}
          <div className="skills" id="skills">
            <Container>
              <div className="content-box">
                  <span className="text-behind">Skills</span>
              </div>
            </Container>
          </div>

          {/* Section Work */}
          <div className="work" id="work">
            <Container>
              <div className="content-box">
                  <span className="text-behind">Work</span>
              </div>
            </Container>
          </div>


        </main>
      <Footer/>
    </div>
  );
}

export default App;
