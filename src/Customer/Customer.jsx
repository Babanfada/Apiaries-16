import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
//import "swiper/css";

import "swiper/swiper.min.css"; //this is very important
import "swiper/modules/effect-cube/effect-cube.min.css"; //also this
import "swiper/modules/pagination/pagination.min.css"; //also this
import "./Customer.css";
// import required modules
import { EffectCube, Pagination, Autoplay } from "swiper";
const clientdetails = [
  {
    clientText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veroperspiciatis quam aspernatur nihil, delectus fugit quaeratexpedita facere magni?",
    clientName: "Lorem Ipsum",
    clientOccupation: "Farmer"
  },
  {
    clientText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veroperspiciatis quam aspernatur nihil, delectus fugit quaeratexpedita facere magni?Lorem ipsum dolor sit amet ?",
    clientName: "Lorem Ipsum",
    clientOccupation: "Farmer"
  },
  {
    clientText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veroperspiciatis quam aspernatur nihil?",
    clientName: "Lorem Ipsum",
    clientOccupation: "Dev"
  },
  {
    clientText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veroperspiciatis quam aspernatur nihil, delectus fugit quaeratexpedita facere magni?Lorem ipsum dolor sit amet c.",
    clientName: "Lorem Ipsum",
    clientOccupation: "Pogrammer"
  },
  {
    clientText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id veroperspiciatis quam aspernatur nihil, delectus fugit quaeratexpedita facere magni?",
    clientName: "Lorem Ipsum",
    clientOccupation: "Student"
  }
];
const Customer = ({ picture}) => {
  return (
    <Swiper
      effect={"cube"}
      grabCursor={true}
      cubeEffect={{
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94
      }}
      pagination={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
      }}
      modules={[EffectCube, Pagination, Autoplay]}
      className="mySwiper"
      
    >
      {picture.map((item, index) => (
        <SwiperSlide>
          <div className="test">
            <span>{clientdetails[index].clientText}</span>
            <div className="detail">
              <img src={picture[index]} />
              <div className="finer_detail">
                <h2>{clientdetails[index].clientName}</h2>
                <small>{clientdetails[index].clientOccupation}</small>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Customer;
