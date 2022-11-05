import React, { useEffect, useState, useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css"; //this is very important
import "swiper/modules/navigation/navigation.min.css"; //also this
import "swiper/modules/autoplay/autoplay.min.css"; //also this
import "swiper/modules/pagination/pagination.min.css"; //also this

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper";
import Spinner from "react-bootstrap/Spinner";
import "./gallery.css";
import axios from "axios";
const url = "https://jsonplaceholder.typicode.com/photos";

const Gallery = () => {
  const [dataa, setdataa] = useState([]);

  useEffect(() => {
    // fetch(url)
    //   .then(response => response.json())
    //   .then(json => {
    //     console.log(json);
    //     setdataa(json);
    //     // console.log(dataa);
    //   });
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
  }, [url]);

  if (dataa.lenght) {
    return (
      <div>
        <Spinner animation="grow" variant="warning" />
      </div>
    );
  } else {
    // const { id, title } = dataa;
    return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false
        }}
        // pagination={{
        //   clickable: true
        // }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        {dataa.map((item, index) => {
          return (
            <SwiperSlide key={item.id}>
              {" "}
              <img src={item.thumbnailurl} alt={"draft"} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      // <img src={dataa.thumbnailUrl} />
      // <div>
      //   {dataa.map((item, index) => {
      //     return (
      //       <Swiper
      //         key={item.id}
      //         spaceBetween={30}
      //         centeredSlides={true}
      //         autoplay={{
      //           delay: 2500,
      //           disableOnInteraction: false
      //         }}
      //         pagination={{
      //           clickable: true
      //         }}
      //         loop={true}
      //         navigation={true}
      //         modules={[Autoplay, Pagination, Navigation]}
      //         className="mySwiper"
      //       >
      //         <SwiperSlide>
      //           {" "}
      //           <img src={item.thumbnailurl} alt={"draft"} />
      //         </SwiperSlide>
      //       </Swiper>
      //       // <div key={item.id}>
      //       //   <p> {item.id}</p>
      //       //   <img src={item.thumnailurl} alt={"draft"}   />
      //       // </div>
      //     );
      //   })}
      // </div>
    );
  }
};

export default Gallery;
