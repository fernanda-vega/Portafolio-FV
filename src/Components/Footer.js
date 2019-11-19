import React, {Component} from 'react';
import Linkedin from '../assets/icons/linkedin.svg';
import Behance from '../assets/icons/behance.svg';
import Github from '../assets/icons/github.svg';

//css
import './Footer.css'
import { Container, Grid } from '@material-ui/core';


class Footer extends Component {
    render() {
        return (
            <footer>
                <Container className='footer-content'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.</p>
                    <ul className="nav-socials">
                        <li><a href="https://www.linkedin.com/in/fernanda-vega-leiva-9b07a01b" target='_blank' rel="noopener noreferrer" alt='linkedin'><img src={Linkedin}></img></a></li>
                        <li><a href="https://www.behance.net/fernandabelen" target='_blank' rel="noopener noreferrer"><img src={Behance} alt='behance'></img></a></li>
                        <li><a href="https://github.com/fernandabelenVL" target='_blank' rel="noopener noreferrer"><img src={Github} alt='github'></img></a></li>
                    </ul>
                </Container>
            </footer>
        )
    }
}

export default Footer;