import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css"; //this is very important
import "swiper/modules/effect-cards/effect-cards.min.css"; //also this
import "./Testimonial.css";
//import "swiper/css/effect-cards";

// Import Swiper styles
//import "swiper/css";
//import "swiper/css/pagination";

const swipStyle = {
  margin: "0",
  // border: "1px solid red"
};

const Testimonial = ({ content }) => {
  return (
    <div style={swipStyle}>
      <Swiper
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        loop={true}
        grabCursor={true}
        // className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={content[index]} alt={"pics"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
