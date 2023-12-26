import React from 'react';

const ProjectItems = ({item}) => {
    return (
        <div className="project__card" key={item.id}>
            <img src={item.image} alt="" className="project__img"/>
            <h3 className="project__title">{item.title}</h3>
            {/* <a href={item.link} className="project__button">
                Demo <i className="bx bx-right-arrow-alt project__button-icon"></i>
            </a> */}
            <div className="project__items">
                {item.category === 'design' ? (
                    <a href={item.figma} className='btn__figma btn-primary' target='_blank' onClick={(e) => {if (!item.figma) e.preventDefault();}}>Figma</a>
                ) : (
                    <a href={item.github} className='btn__github btn-primary' target='_blank' onClick={(e) => {if (!item.github) e.preventDefault();}}>Github</a>
                )}
                {/* <a href={item.github} className='btn__github btn-primary' target='_blank'>Github</a> */}
                {/* <a href={item.demo} className='btn__demo btn-primary' target='_blank'>Live Demo</a> */}
                <a href={item.demo} className='btn__demo btn-primary' target='_blank' onClick={(e) => {if (!item.demo) e.preventDefault();}}>Live Demo</a>
            </div>
        </div>
    );
}

export default ProjectItems;