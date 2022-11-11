import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
//import "swiper/css";

import "swiper/swiper.min.css"; //this is very important
import "swiper/modules/effect-cube/effect-cube.min.css"; //also this
import "swiper/modules/pagination/pagination.min.css"; //also this
import customerCss from "./Customer.module.css";
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
      className={customerCss.myswiper}
    >
      {picture.map((item, index) => (
        <SwiperSlide key={index} className={customerCss.slide}>
          <div className={customerCss.test}>
            <span>{clientdetails[index].clientText}</span>
            <div className={customerCss.detail}>
              <img
                className={customerCss.img}
                src={picture[index]}
                alt="draft"
              />
              <div className={customerCss.finerdetail}>
                <h2 className={customerCss.finerdetailh2}>
                  {clientdetails[index].clientName}
                </h2>
                <small className={customerCss.finerdetailsmall}>
                  {clientdetails[index].clientOccupation}
                </small>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Customer;
