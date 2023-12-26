// import React, { useState } from 'react'
// import "./header.css";

// const Header = () => {
//     /*== Change Background Header ==*/
//     window.addEventListener("scroll", function () {
//         const header = document.querySelector(".header");
//         // when the scroll is higher than 200 viewport height, add the scroll-header class to a tag with the header tag
//         if (this.scrollY >= 80) header.classList.add ("scroll-header");
//         else header.classList.remove("scroll-header");
//     })

//     /*== Toogle Menu ==*/
//     const[Toggle, showMenu] = useState(false);
//     const[activeNav, setActiveNav] = useState("#home");

//     return (
//         <header className="header">
//             <nav className="nav container">
//                 <a href="index.html" className="nav__logo">Brendan</a>

//                 <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
//                     <ul className="nav__list grid">
//                         <li className="nav__item">
//                             <a href="#home" 
//                                 onClick={() => setActiveNav('#home')} 
//                                 className={activeNav === "#home" ? "nav__link active-link" : "nav__link" }>
//                                 <i className="uil uil-estate nav__icon"></i> Home
//                             </a>
//                         </li>

//                         <li className="nav__item">
//                             <a href="#about"
//                                 onClick={() => setActiveNav('#about')} 
//                                 className={activeNav === "#about" ? "nav__link active-link" : "nav__link" }>
//                                 <i className="uil uil-user nav__icon"></i> About
//                             </a>
//                         </li>

//                         <li className="nav__item">
//                             <a href="#skills" 
//                                 onClick={() => setActiveNav('#skills')} 
//                                 className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
//                                 <i className="uil uil-file nav__icon"></i> Skills
//                             </a>
//                         </li>

//                         <li className="nav__item">
//                             <a href="#experience"
//                                 onClick={() => setActiveNav('#experience')} 
//                                 className={activeNav === "#experience" ? "nav__link active-link" : "nav__link" }>
//                                 <i className="uil uil-briefcase-alt nav__icon"></i> Experience
//                             </a>
//                         </li>

//                         <li className="nav__item">
//                             <a href="#projects"
//                                 onClick={() => setActiveNav('#projects')} 
//                                 className={activeNav === "#projects" ? "nav__link active-link" : "nav__link" }>
//                                 <i className="uil uil-scenery nav__icon"></i> Projects
//                             </a>
//                         </li>

//                         <li className="nav__item">
//                             <a href="#contact"
//                                 onClick={() => setActiveNav('#contact')} 
//                                 className={activeNav === "#contact" ? "nav__link active-link" : "nav__link" }>
//                                 <i className="uil uil-message nav__icon"></i> Contact
//                             </a>
//                         </li>
//                     </ul>

//                     <i class="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
//                 </div>

//                 <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
//                     <i class="uil uil-apps"></i>
//                 </div>
                
//             </nav>
//         </header>
//     )
// }

// export default Header

import React, { useState, useEffect } from 'react';
import './header.css';
import logo from '../../assets/brendan.svg';

const Header = () => {

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState('#home');
    const handleMenuClick = () => {
        showMenu(!Toggle);
    };

    useEffect(() => {
        const sectionIds = ['#home', '#about', '#skills', '#experience', '#projects', '#contact'];

        const handleScroll = () => {
        const scrollPosition = window.scrollY;

        sectionIds.forEach((sectionId) => {
            const section = document.querySelector(sectionId);
            if (section) {
            const sectionTop = section.offsetTop - 200; // Adjust the offset as needed
            const sectionBottom = section.offsetTop + section.offsetHeight - 200; // Adjust the offset as needed

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                setActiveNav(sectionId);
            }
            }
        });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`header ${activeNav !== '#home' ? 'scroll-header' : ''}`}>
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                <img className="home__title" src={logo}/>
            </a>
            {/* <a href="index.html" className="nav__logo">
                Brendan
            </a> */}
            <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
            <ul className="nav__list grid">
                <li className="nav__item">
                <a
                    href="#home"
                    onClick={() => setActiveNav('#home')}
                    className={activeNav === '#home' ? 'nav__link active-link' : 'nav__link'}
                >
                    <i className="uil uil-estate nav__icon"></i> Home
                </a>
                </li>

                <li className="nav__item">
                <a
                    href="#about"
                    onClick={() => setActiveNav('#about')}
                    className={activeNav === '#about' ? 'nav__link active-link' : 'nav__link'}
                >
                    <i className="uil uil-user nav__icon"></i> About
                </a>
                </li>

                {/* <li className="nav__item">
                    <a href="#skills" 
                        onClick={() => setActiveNav('#skills')} 
                        className={activeNav === "#skills" ? "nav__link active-link" : "nav__link" }>
                        <i className="uil uil-file nav__icon"></i> Skills
                    </a>
                </li> */}

                {/* <li className="nav__item">
                    <a href="#qualification" 
                        onClick={() => setActiveNav('#qualification')} 
                        className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link" }>
                        <i className="uil uil-file nav__icon"></i> Qualification
                    </a>
                </li> */}

                <li className="nav__item">
                    <a href="#experience"
                        onClick={() => setActiveNav('#experience')} 
                        className={activeNav === "#experience" ? "nav__link active-link" : "nav__link" }>
                        <i className="uil uil-briefcase-alt nav__icon"></i> Experience
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#projects"
                        onClick={() => setActiveNav('#projects')} 
                        className={activeNav === "#projects" ? "nav__link active-link" : "nav__link" }>
                        <i className="uil uil-file-info-alt nav__icon"></i> Projects
                    </a>
                </li>

                <li className="nav__item">
                <a
                    href="#contact"
                    onClick={() => setActiveNav('#contact')}
                    className={activeNav === '#contact' ? 'nav__link active-link' : 'nav__link'}
                >
                    <i className="uil uil-message nav__icon"></i> Contact
                </a>
                </li>
            </ul>

            <i className="uil uil-times nav__close" onClick={handleMenuClick}></i>
            </div>

            <div className="nav__toggle" onClick={handleMenuClick}>
            <i className="uil uil-apps"></i>
            </div>
        </nav>
        </header>
    );
};

export default Header;
