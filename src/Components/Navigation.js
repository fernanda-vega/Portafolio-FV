import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import LogoWhite from '../assets/img/logo-white.png';
import Linkedin from '../assets/icons/linkedin.svg';
import Behance from '../assets/icons/behance.svg';
import Github from '../assets/icons/github.svg';

//css
import './Navigation.css';
import { Container } from '@material-ui/core'


function Navigation () {
    // const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    // React.useEffect(() => {
    //   const updateNavbarColor = () => {
    //     if (
    //       document.documentElement.scrollTop > 380 ||
    //       document.body.scrollTop > 380
    //     ) {
    //       setNavbarColor("nav-scroll");
    //     } 
    //     else if (
    //       (document.documentElement.scrollTop > 201  || document.body.scrollTop > 201 ) && 
    //       (document.documentElement.scrollTop < 379  || document.body.scrollTop < 379 )
    //     ) {
    //       setNavbarColor("");
    //     } 
    //     else if (
    //       document.documentElement.scrollTop < 200 ||
    //       document.body.scrollTop < 200
    //     ) {
    //       setNavbarColor("navbar-transparent");
    //     }
    //   };
    //   window.addEventListener("scroll", updateNavbarColor);
    //   return function cleanup() {
    //     window.removeEventListener("scroll", updateNavbarColor);
    //   };
    // });
        return (
            // <nav className={"nav-bar " + navbarColor}>
             <nav className="">
                <Container maxWidth='lg'>
                <Navbar sticky="top" collapseOnSelect expand="lg" bg="transparent" className="nav-bar">
                <Router>
                <Navbar.Brand as={Link} to="/"><img src={LogoWhite} alt="logo" className="logo-nav"></img></Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                  <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto nav-links">
                      <Nav.Link as={Link} to="/">INICIO</Nav.Link>
                      <Nav.Link as={Link} to="/about">CONÓCEME</Nav.Link>
                      <Nav.Link as={Link} to="/proyects">PORTAFOLIO</Nav.Link>
                      <Nav.Link as={Link} to="/contact">CONTACTO</Nav.Link>
                      <Nav.Link as={Link} to="/resume">CURRICULUM</Nav.Link>
                    </Nav>
                    {/* <Nav className="nav-socials">
                      <Nav.Link href="www.linkedin.com/in/fernanda-vega" rel='noopener'>><img src={Linkedin} alt="linkedin"></img></Nav.Link>
                      <Nav.Link href="https://www.behance.net/fernandabelen" rel='noopener'><img src={Linkedin} alt="linkedin"></img></Nav.Link>
                      <Nav.Link href="https://github.com/fernandabelenVL" rel='noopener'><img src={Linkedin} alt="linkedin"></img></Nav.Link>
                    </Nav> */}
                  </Navbar.Collapse>
                  </Router>
                </Navbar>
            </Container>

                {/* <Router>
                    <Switch>
                        <Route exact path="/" component = { App } />
                        <Route path="/about" component = { App } />
                    </Switch>
                </Router> */}

            </nav>
        )
    }


export default Navigation;
