import React from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import LogoWhite from '../assets/img/logo-white.png';
import Linkedin from '../assets/icons/linkedin.svg';
import Behance from '../assets/icons/behance.svg';
import Github from '../assets/icons/github.svg';

//css
import './Navigation.css';
import styled from 'styled-components';
import { ReactSVG } from 'react-svg'
import { Container } from '@material-ui/core'

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  `;

function Navigation () {
        return (
            <Styles>
             <nav className="nav-bar">
                <Container maxWidth='lg'>
                <Navbar collapseOnSelect expand="lg" bg="transparent">
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
                    <Nav className="nav-icon-section">
                        <Nav.Link href="https://www.linkedin.com/in/fernanda-vega/" className="nav-ico" target="_blank">
                            <ReactSVG className="nav-ico" src={Linkedin} />
                        </Nav.Link>
                        <Nav.Link href="https://www.behance.net/fernandabelen" className="nav-ico" target="_blank">
                            <ReactSVG className="nav-ico" src={Behance} />
                        </Nav.Link>
                        <Nav.Link href="https://github.com/fernandabelenVL" className="nav-ico" target="_blank">
                            <ReactSVG className="nav-ico" src={Github} />
                        </Nav.Link>
                    </Nav>
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
            </Styles>
        )
    }


export default Navigation;
