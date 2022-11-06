import React, { useEffect, useState, useRef } from "react";
import image13 from "../../images/working-bees.jpg";
import { Button } from "react-bootstrap";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css"; //this is very important
import "swiper/modules/navigation/navigation.min.css"; //also this
import "swiper/modules/autoplay/autoplay.min.css"; //also this

//import "swiper/modules/free-mode/free-mode.min.css"; //also this
//import "swiper/modules/thumbs/thumbs.min.css"; //also this

// import required modules
import { Navigation, Mousewheel, Autoplay } from "swiper";
import Spinner from "react-bootstrap/Spinner";
import styles from "../Gallery/gallery.module.css";
import axios from "axios";
import Gal from "../../ReusedComponent/Gal";
const url = "https://api.thecatapi.com/v1/images/search?limit=10";

const Gallery = () => {
  const [dataa, setdataa] = useState([]);
  const content = {
    h1: "Gallery",
    p:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorunatus accusamus facere nam consequatur odit quae sequi dignissimonihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorunatus accusamus facere nam consequatur odit quae sequi dignissimonihil.",
    buttonText: "Learn More"
  };
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  //const [thumbsSwiper, setThumbsSwiper] = useState({});

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
      <>
        <Gal content={content} />
        <div className="container-md newsletter">
          <div className="containing row">
            <div
              data-aos="fade-down"
              data-aos-delay="1000"
              className="join col-md-5"
            >
              <h1 data-aos="zoom-down" data-aos-delay="1000">
                Join Our <span>Newsletter</span>
              </h1>
              <p data-aos="fade-downzoom-in-right" data-aos-delay="1000">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit
                debitis esse dolorum sit nemo culpa ea ratione atque maiores
                similique. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Nihil sit similique incidunt aliquam modi unde blanditiis
                molestias pariatur quod?
              </p>
              <div
                data-aos="zoom-out"
                data-aos-delay="1000"
                className="input_sec"
              >
                <input
                  type="text"
                  name="input"
                  id="input"
                  placeholder="Email Address....."
                />
                <Button
                  data-aos="fade-down"
                  data-aos-delay="1000"
                  className="button"
                  variant={"warning"}
                >
                  Subscribe
                </Button>
              </div>
            </div>
            <div className="col-md-1">hidden</div>
            <div
              data-aos="fade-left"
              data-aos-delay="700"
              className="join-img col-md-6"
            >
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                pagination={{
                  clickable: true
                }}
                Mousewheel={true}
                navigation={true}
                modules={[Autoplay, Mousewheel, Navigation]}
                className={styles.mySwiper}
              >
                {dataa.map((item, index) => {
                  return (
                    <SwiperSlide className={styles.swiperslide} key={item.id}>
                      {" "}
                      <img src={item.url} alt={"draft"} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
              {/* <img src={image13} alt="potrait" /> */}
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Gallery;
