import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
             <nav className="nav-bar navbar-transparent">
                <Container maxWidth='lg'>
                    <div className="nav-content">
                        <img src={LogoWhite} alt="logo" className="logo-nav"></img>
                        <div className="nav-links">
                            <Router>
                                <Link to="/">INICIO</Link>
                                <Link to="/about">CONÓCEME</Link>
                                <Link to="/proyects">PORTAFOLIO</Link>
                                <Link to="/contact">CONTACTO</Link>
                                <Link to="/resume">CURRICULUM</Link>
                            </Router>

                        </div>
                        <ul className="nav-socials">
                            <li><a href="www.linkedin.com/in/fernanda-vega" rel='noopener'><img src={Linkedin} alt="linkedin"></img></a></li>
                            <li><a href="https://www.behance.net/fernandabelen" rel='noopener'><img src={Behance} fill="white" alt="behance"></img></a></li>
                            <li><a href="https://github.com/fernandabelenVL" rel='noopener'><img src={Github} fill="white" alt="github"></img></a></li>
                        </ul>
                    </div>
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
