import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../img/logo500px.png';
import Linkedin from '../img/linkedin.svg';
import Behance from '../img/behance.svg';
import Github from '../img/github.svg';

//css
import './Navigation.css';
import { Container } from '@material-ui/core'


class Navigation extends Component {


    render () {
        return (
            <nav>
                <Container maxWidth='lg'>
                    <div className="nav-content">
                        <img src={Logo} alt="logo" className="logo-nav"></img>
                        <div className="nav-links">
                            <Router>
                                <Link to="/about">CONÓCEME</Link>
                                <Link to="/proyects">PROYECTOS</Link>
                                <Link to="/resume">CURRICULUM</Link>
                            </Router>

                        </div>
                        <ul className="nav-socials">
                            <li><a href="https://www.linkedin.com/in/fernanda-vega-leiva-9b07a01b" rel='noopener' className="nav-ico"><img src={Linkedin} alt="linkedin"></img></a></li>
                            <li><a href="https://www.behance.net/fernandabelen" rel='noopener'><img src={Behance} alt="behance"></img></a></li>
                            <li><a href="https://github.com/fernandabelenVL" rel='noopener'><img src={Github} alt="github"></img></a></li>
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
}

export default Navigation;
