import React from 'react';
import timelineElements from "./Timeline";
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component";
import "./experience.css";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
    let workIconStyle = {background: "#333333"}
    return (
        <section className="experience section" id="experience">
        <h2 className="section__title">Work Experience</h2>
        <span className="section__subtitle">My Career Journey</span>
        <VerticalTimeline className="vertical__line">
            {
                timelineElements.map((element) => {
                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={
                                <span>
                                    <i className="uil uil-calendar-alt"></i>{' '}
                                    {element.date}
                                </span>
                            }
                            dateClassName='date'
                            iconStyle={workIconStyle}
                            icon = {<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="bag"><path fill="#FFFFFF" d="M19,6H16V5a2,2,0,0,0-2-2H10A2,2,0,0,0,8,5V6H5A3,3,0,0,0,2,9v9a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V9A3,3,0,0,0,19,6ZM10,5h4V6H10ZM20,18a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V12.39L8.68,14A1.19,1.19,0,0,0,9,14h6a1.19,1.19,0,0,0,.32-.05L20,12.39Zm0-7.72L14.84,12H9.16L4,10.28V9A1,1,0,0,1,5,8H19a1,1,0,0,1,1,1Z"></path></svg>}
                        >
                            {/* <span className="qualification__subtitle">{element.date}</span> */}
                            <img src={element.logo} alt="" className="vertical-timeline-element-logo"/>
                            <h3 className="vertical-timeline-element-title">{element.company}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.title}</h5>
                            {/* <p className='description'>{element.description}</p> */}
                            <p className="description">
                                <ul>
                                    {element.description.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </p>
                        </VerticalTimelineElement>
                    )
                })
            }
        </VerticalTimeline>
    </section>
    );
};

export default Experience