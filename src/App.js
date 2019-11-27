import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Header from './components/Header'
import './App.css';
import './index.css'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'


function App() {
   return (
      <div className="App">
         <Navigation />
         <Header />
         <main>

            <section id="about">
               <Container>
                  <div className="content">
                     <Row>
                        <Col xs={12}>
                           <h6>UN POCO SOBRE MI</h6>
                           <h2 data-text="¡Hola!">Diseñadora Gráfica y Desarolladora<br/>Front-End<span className="yellow-text">.</span></h2>
                        </Col>
                        {/* end col-12 */}
                        <Col lg={5}>
                           <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit est laborum.</h4>
                        </Col>
                        {/* end col-5 */}
                        <Col lg={7}>
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                             ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                             laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                             velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
   culpa qui officia deserunt mollit anim id est laborum.</p>
                           <div class="custom-link"> <a href="#">
                              <div class="lines">
                                 <span></span> <span></span>
                              </div>
                              {/* end lines */}
                              <b>VER CURRICULUM</b></a> </div>
                           {/* end custom-link */}
                        </Col>
                        {/* end col-7  */}
                        </Row>                    
                        {/* end row */}
                  </div>
               </Container>
               {/* end container  */}
            </section>
            {/* end intro */}


            {/* Section About Me */}
            {/* <div className="about-me" id="about">
               <Container>
                  <div className="content-box">
                     <span className="text-behind">¡Hola!</span>
                     <div>

                        <h3>Diseñadora Gráfica y Desarolladora Front-End.</h3>
                     </div>
                  </div>
               </Container>
            </div> */}

            {/* Section Skills */}
            <div className="skills" id="skills">
               <Container>
                  <div className="content">
                     <span className="text-behind">Skills</span>
                  </div>
               </Container>
            </div>

            {/* Section Work */}
            <div className="work" id="work">
               <Container>
                  <div className="container">
                     <span className="text-behind">Work</span>
                  </div>
               </Container>
            </div>


         </main>
         <Footer />
      </div>
   );
}

export default App;
