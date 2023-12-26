import React from 'react';
import "./footer.css";
import logo from '../../assets/brendan.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Brendan</h1>
                {/* <img className="home__title" src={logo}/> */}
                
                <ul className="footer__list">
                    <li>
                        <a href="#home" 
                        className="footer__link">Home</a>
                    </li>

                    <li>
                        <a href="#about" 
                        className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#experience" 
                        className="footer__link">Experience</a>
                    </li>

                    <li>
                        <a href="#projects" 
                        className="footer__link">Projects</a>
                    </li>

                    <li>
                        <a href="#contact" 
                        className="footer__link">Contact</a>
                    </li>
                </ul>

                <div className="footer__social">
                <a href="https://www.instagram.com/brenkhow/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-instagram"></i>
                </a>
                
                <a href="https://www.linkedin.com/in/brendan-khow/" className="footer__social-link" target="_blank">
                    <i class="bx bxl-linkedin"></i>
                </a>
                <a href="https://github.com/brendankhow" className="footer__social-link" target="_blank">
                    <i class="bx bxl-github"></i>
                </a>
                </div>

                <span className="footer__copy">&#169; Brendan Khow. All rights reserved</span>
            </div>
        </footer>
    );
};

export default Footer