import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper";
//import Aos from "aos";

// Import Swiper styles
import "swiper/swiper.min.css"; //this is very important
import "swiper/modules/effect-cards/effect-cards.min.css"; //also this
import Testimonialcss from "./Testimonial.module.css";
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
    <div data-aos="fade-in" style={swipStyle}>
      <Swiper
        effect={"cards"}
        modules={[EffectCards, Autoplay]}
        loop={true}
        grabCursor={true}
        className={Testimonialcss.swiper}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
      >
        {content.map((item, index) => (
          <SwiperSlide key={index} className={Testimonialcss.SwiperSlide}>
            <img className={Testimonialcss.img} src={item} alt={"pics"} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
