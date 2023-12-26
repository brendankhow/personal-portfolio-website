import React from 'react';
import "./project.css";
import Projects from "./Projects";

const Project = () => {
    return (
        <section className="project section" id="projects">
            <h2 className="section__title">My Projects</h2>
            <span className="section__subtitle">My Recent Works</span>

        <Projects />
        </section>
    );
}

export default Project;