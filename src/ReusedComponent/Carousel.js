import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import AOS from "aos";

// Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

import Caro from "./Carousel.module.css";

import "swiper/swiper.min.css"; //this is very important
// import "swiper/modules/navigation/navigation.min.css"; //also this
import "swiper/modules/autoplay/autoplay.min.css"; //also this
// import required modules
import { Pagination, Autoplay, EffectCoverflow, Mousewheel } from "swiper";
 const url = "https://api.thecatapi.com/v1/images/search?limit=10";
export default function Carousel() {
  const [dataa, setdataa] = useState([]);
  
  useEffect(() => {
    axios
      .get(url)
      .then(function(response) {
        // handle success
        console.log(response.data);
        setdataa(response.data);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  }, []);
useEffect(() => {
  AOS.init({ duration: 2000, once: true });
}, []);
  if (!dataa.length) {
    return (
      <div>
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  } else {
    return (
      <div >
        <Swiper
          effect={"coverflow"}
          slidesPerView={5}
          spaceBetween={30}
          autoplay={{
            delay: 500,
            disableOnInteraction: false
          }}
          loop={true}
          Mousewheel={true}
          navigation={false}
          pagination={{
            clickable: true
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true
          }}
          grabCursor={true}
          modules={[Pagination, Autoplay, Mousewheel, EffectCoverflow]}
          className={Caro.mySwiper}
        >
          {dataa.map((data, index) => {
            return (
              <SwiperSlide className={Caro.SwiperSlide} key={index}>
                <img src={data.url} alt={"draft"} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    );
  }
}
