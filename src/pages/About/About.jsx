import React, { useEffect } from "react";
import "./about.css";
import { Button } from "react-bootstrap";
import Gal from "../../ReusedComponent/Gal";
import AOS from "aos";
import image12 from "../../images/young.jpg";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { SiInstagram, SiYoutube } from "react-icons/si";
import image14 from "../../images/bee1.jpg";
import image15 from "../../images/bee2.jpg";
import image16 from "../../images/bee3.jpg";
import image17 from "../../images/bee4.jpg";
import image13 from "../../images/working-bees.jpg";
import Keeepers from "../../ReusedComponent/Keeepers";

const About = () => {
  const content = {
    h1: "About Us",
    p:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorunatus accusamus facere nam consequatur odit quae sequi dignissimonihil.Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorunatus accusamus facere nam consequatur odit quae sequi dignissimonihil.",
    buttonText: "Learn More"
  };
  const keepersContent = [
    {
      image: image12,
      nameOfkeeper: "Ibrahim Tolani",
      description: "Apiarist",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorunatus accusamus facere nam consequatur odit quae sequi dignissimonihil",
      media: (
        <div className="blank">
          <a href="https://twitter.com/babanfada" target={"blank"}>
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCIrZcA8mxJ3ETKxWTO-YuLw"
            target={"blank"}
          >
            <SiYoutube className="icon" />
          </a>
        </div>
      ),
      dataAos: "fade-down-right"
    },
    {
      image: image13,
      nameOfkeeper: "Eddy Nketiah",
      description: "Biologist",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorunatus accusamus facere nam consequatur odit quae sequi dignissimonihil",
      media: (
        <div className="blank">
          <a href="https://twitter.com/babanfada" target={"blank"}>
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCIrZcA8mxJ3ETKxWTO-YuLw"
            target={"blank"}
          >
            <SiYoutube className="icon" />
          </a>
        </div>
      ),
      dataAos: "fade-up"
    },
    {
      image: image15,
      nameOfkeeper: "Smith Rowe",
      description: "Beekeeper",
      text:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, dolorunatus accusamus facere nam consequatur odit quae sequi dignissimonihil",
      media: (
        <div className="blank">
          <a href="https://twitter.com/babanfada" target={"blank"}>
            <FaTwitter className="icon" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCIrZcA8mxJ3ETKxWTO-YuLw"
            target={"blank"}
          >
            <SiYoutube className="icon" />
          </a>
        </div>
      ),
      dataAos: "fade-down-left"
    }
  ];
  const animate = [];
  useEffect(() => {
    AOS.init({ duration: 2000, once: true });
  }, []);
  return (
    <div className="aboutContainer">
      <div className="container-sm ">
        <div className="row">
          <img data-aos="flip-left" src={image12} className="col-sm" />
          <div data-aos="flip-right" className="col-sm">
            <h1>TEAM</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              mollitia libero rem beatae illo omnis vel similique perspiciatis
              minima distinctio aliquam provident veritatis, dolor, cupiditate
              autem odit illum soluta ratione.
            </p>
            <Button variant="warning" className="button">
              {" "}
              Learn More
            </Button>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <div className="container-sm owner">
        <div className="row">
          <div data-aos="zoom-in-right" className="col-sm emily">
            <h1>Emily Smith Rowe</h1>
            <span>Owner</span>
            <p>
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              cumque fugiat illo nesciunt aperiam. Libero nobis cupiditate at "
            </p>
            <div className="blank">
              <a href="https://twitter.com/babanfada" target={"blank"}>
                {" "}
                <FaTwitter className="icon" />
              </a>

              <a
                href="https://www.youtube.com/channel/UCIrZcA8mxJ3ETKxWTO-YuLw"
                target={"blank"}
              >
                {" "}
                <SiYoutube className="icon" />
              </a>
            </div>
          </div>
          <div className="col-sm-1"></div>
          <div data-aos="zoom-in-left" className="col-sm star  ">
            <img src={image14} alt="draft" className="blank1" />
          </div>
        </div>
      </div>
      {/* section 3  */}
      <div className="KeepersContainer">
        <h1 data-aos="fade-down">
          Meet Our <span>Keepers</span>
        </h1>
        <div className="container-sm">
          <div className="row ">
            {keepersContent.map((keeper, index) => {
              return (
                <div key={index} className="col-sm align">
                  <Keeepers content={keeper} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* section 4 */}
      <div className="container-sm ">
        <div className="row">
          <div data-aos="fade-down-right" className="col-sm">
            <h1>COMMUNITY</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              mollitia libero rem beatae illo omnis vel similique perspiciatis
              minima distinctio aliquam provident veritatis, dolor, cupiditate
              autem odit illum soluta ratione.
            </p>
            <Button variant="warning" className="button">
              {" "}
              Learn More
            </Button>
          </div>
          <img data-aos="fade-down-left" src={image16} className="col-sm" />
        </div>
      </div>
      {/* section 5 */}
      <div className="container-sm margin">
        <div className="row">
          <img data-aos="fade-down-left" src={image15} className="col-sm" />
          <div data-aos="fade-down-right" className="col-sm">
            <h1>
              Keep in touch with our <span>local group</span>
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              mollitia libero rem beatae illo omnis vel similique perspiciatis
              minima distinctio aliquam provident veritatis, dolor, cupiditate
              autem odit illum soluta ratione.
            </p>
            {/* <Button variant="warning" className="button">
              {" "}
              Learn More
            </Button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
