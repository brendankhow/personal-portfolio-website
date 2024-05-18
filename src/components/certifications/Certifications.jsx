import React, { useState } from "react";
import "./certifications.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import required modules
import { Pagination, Autoplay } from "swiper/modules";

const Certifications = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className="certification container section" id="certifications">
      <h2 className="section__title">Licenses & certifications</h2>
      <span className="section__subtitle">What I Achieved</span>

      <Swiper
        className="certification__container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        centeredSlides={true} // Add this line
        effect="coverflow" // Add this line
        coverflowEffect={{
          // Add this block
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
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
        {Data.map(({ id, image, name, issued, role, company, description }) => {
          return (
            <SwiperSlide className="certification__card" key={id}>
              <img src={image} alt="" className="certification__img" />
              <h3 className="certification__name">{name}</h3>
              <h5 className="certification__role">{issued}</h5>
              <h5 className="certification__company">{company}</h5>
              {/* <p className="testimonial__description">{description}</p> */}

              <p
                className={`certification__description ${
                  isExpanded ? "expanded" : ""
                }`}
              >
                {description}
              </p>

              <button
                onClick={handleReadMoreClick}
                className="read-more-button"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Certifications;
