import React, { useState } from 'react';
import "./testimonials.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMoreClick = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <section className="testimonial container section" id="testimonials">
            <h2 className="section__title">Testimonials</h2>
            <span className="section__subtitle">What People Say</span>

            <Swiper className="testimonial__container"
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                  clickable: true,
                }}
                breakpoints={{
                  576: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 48,
                  },
                }}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                    
                }}
                speed={1500}
            >
                {Data.map(({ id, image, name, role, company, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className="testimonial__img"/>
                            <h3 className="testimonial__name">{name}</h3>
                            <h5 className="testimonial__role">{role},</h5>
                            <h5 className="testimonial__company">{company}</h5>
                            {/* <p className="testimonial__description">{description}</p> */}
                        
                            <p className={`testimonial__description ${isExpanded ? 'expanded' : ''}`}>
                                {description}
                            </p>

                            <button onClick={handleReadMoreClick} className="read-more-button">
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials