import React from 'react'

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class='bx bx-award about__icon'></i>
                <h3 className="about__title">Internships</h3>
                <span className="about__subtitle">2</span>
            </div>
            
            <div className="about__box">
            <i class='bx bx-briefcase-alt about__icon'></i>
                <h3 className="about__title">Projects</h3>
                <span className="about__subtitle">3</span>
            </div>

            <div className="about__box">
            <i class='bx bx-support about__icon'></i>
                <h3 className="about__title">Support</h3>
                <span className="about__subtitle">123</span>
            </div>
        </div>
    )
}
export default Info