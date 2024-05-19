// import React, { useState } from "react";
// import "./certifications.css";
// import { Data } from "./Data";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from "swiper/react";
// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-coverflow"; // Import coverflow effect styles
// // Import required modules
// import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

// const Certifications = () => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleReadMoreClick = () => {
//     setIsExpanded(!isExpanded);
//   };

//   return (
//     <section className="certification container section" id="certifications">
//       <h2 className="section__title">Licenses & certifications</h2>
//       <span className="section__subtitle">What I Achieved</span>

//       <Swiper
//         className="certification__container"
//         loop={true}
//         grabCursor={true}
//         spaceBetween={24}
//         centeredSlides={true}
//         effect="coverflow"
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 200,
//           modifier: 1,
//           slideShadows: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         breakpoints={{
//           576: {
//             slidesPerView: 1,
//           },
//           768: {
//             slidesPerView: 3,
//             spaceBetween: 48,
//           },
//         }}
//         modules={[Pagination, Autoplay, EffectCoverflow]}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         speed={1500}
//       >
//         {Data.map(({ id, image, name, issued, role, company, description }) => {
//           return (
//             <SwiperSlide className="certification__card" key={id}>
//               <img src={image} alt="" className="certification__img" />
//               <h3 className="certification__name">{name}</h3>
//               <h5 className="certification__role">{issued}</h5>
//               <h5 className="certification__company">{company}</h5>
//               <p
//                 className={`certification__description ${
//                   isExpanded ? "expanded" : ""
//                 }`}
//               >
//                 {description}
//               </p>
//               <button
//                 onClick={handleReadMoreClick}
//                 className="read-more-button"
//               >
//                 {isExpanded ? "Read Less" : "Read More"}
//               </button>
//             </SwiperSlide>
//           );
//         })}
//       </Swiper>
//     </section>
//   );
// };

// export default Certifications;


import React, { useState } from "react";
import "./certifications.css";
import { Data } from "./Data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow"; // Import coverflow effect styles
// Import required modules
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";

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
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        modules={[Pagination, Autoplay, EffectCoverflow]}
        autoplay={{
          delay: 2500,
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
