import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    }
    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Qualification</h2>
            <span className="section__subtitle">My Personal Journey</span>

            <div className="qualification__container container">
                <div className="qualification__tabs">
                    <div 
                        className={
                            toggleState === 1
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(1)}
                        >
                        <i className="uil uil-graduation-cap qualification__icon"></i>Education
                    </div>

                    <div 
                        className={
                            toggleState === 2 
                            ? "qualification__button qualification__active button--flex" 
                            : "qualification__button button--flex"
                        }
                        onClick={() => toggleTab(2)}
                        >
                        <i className="uil uil-award qualification__icon"></i>Achievement
                    </div>
                </div>

                <div className="qualification__sections">
                    <div 
                        className={
                            toggleState == 1 
                            ? "qualification__content qualification__content-active" 
                            : "qualification__content"
                        }
                        >
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Student</h3>
                                <span className="qualifcation__subtitle">School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Student 1</h3>
                                <span className="qualifcation__subtitle">School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Student 2</h3>
                                <span className="qualifcation__subtitle">School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Student 3</h3>
                                <span className="qualifcation__subtitle">School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div> */}
                        <div className="qualification__grid">
                            <div className="qualification__data">
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                                <h1 className="qualification__title">Singapore Management University</h1>
                                <p className="qualification__subtitle">Bachelor of Science in Information Systems</p>
                            </div>

                            <div className="qualification__data">
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2020
                                </div>
                                <h1 className="qualification__title">Temasek Polytechnic</h1>
                                <p className="qualification__subtitle">Diploma in Financial Business Informatics</p>
                            </div>
                        </div>
                    </div>

                    <div className={toggleState == 2 ? "qualification__content qualification__content-active" : "qualification__content"}>
                        {/* <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern</h3>
                                <span className="qualifcation__subtitle">School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div></div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>

                            <div>
                                <h3 className="qualification__title">Intern 1</h3>
                                <span className="qualifcation__subtitle">School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>
                        </div>

                        <div className="qualification__data">
                            <div>
                                <h3 className="qualification__title">Intern 2</h3>
                                <span className="qualifcation__subtitle">School</span>
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2021 - Present
                                </div>
                            </div>

                            <div>
                                <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            </div>
                        </div> */}
                        <div className="qualification__grid">
                            <div className="qualification__data">
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2022 - Present
                                </div>
                                <h1 className="qualification__title">Singapore Management University</h1>
                                <ul>
                                    <li>H.E.A.P Hackathon 2023 - 2nd Runner Up</li>
                                    <li>CATALYSTxAI 2023</li>
                                </ul>
                            </div>

                            <div className="qualification__data">
                                <div className="qualification__calendar">
                                    <i className="uil uil-calendar-alt"></i> 2017 - 2020
                                </div>
                                <h1 className="qualification__title">Temasek Polytechnic</h1>
                                <ul>
                                    <li>Junior Achievement Singapore Company of the Year Competition 2018 - 1st Runner Up</li>
                                    <li>Edusave Certificate of Academic Achievement - 2018</li>
                                    <li>Edusave Certificate of Academic Achievement - 2019</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Qualification