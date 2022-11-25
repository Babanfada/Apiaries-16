import React from "react";
//import { Button } from "react-bootstrap";
import Button from "@mui/material/Button";

import keeper from "../../images/apiarist-taking-out-hive-frames.jpg";
import bee from "../../images/bee3.jpg";
import beek from "../../images/collecting_honey.jpg";
import beekeeper from "../../images/collecting_pollen.jpg";
import clusters from "../../images/clusters.jpg";
import { Link } from "react-router-dom";
import "./faqs.css";
import Carousel from "../../ReusedComponent/Carousel";
import Questions from "../../ReusedComponent/Questions";
const Faqs = () => {
  const details = [
    {
      question: "Are you using dangerous chemical?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut et neque eget nunc pellentesque tincidunt et tempor sem. Sed sed mi vel mi auctor placerat. Nulla commodo",
      pic: bee,
      dataAOS: "fade-right"
    },
    {
      question: "What is the difference between wild bees and farm bees?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut et neque eget nunc pellentesque tincidunt et tempor sem. Sed sed mi vel mi auctor placerat. Nulla commodo",
      pic: beek,
      design: {
        display: "flex",
        flexDirection: "row-reverse"
      },
      dataAOS: "fade-left"
    },
    {
      question: "How do you extract honey from the bees?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut et neque eget nunc pellentesque tincidunt et tempor sem. Sed sed mi vel mi auctor placerat. Nulla commodo",
      pic: beekeeper,
      dataAOS: "fade-right"
    },
    {
      question: "How dangerous is honey bees to humans and dogs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut et neque eget nunc pellentesque tincidunt et tempor sem. Sed sed mi vel mi auctor placerat. Nulla commodo",
      pic: clusters,
      design: {
        display: "flex",
        flexDirection: "row-reverse"
      },
      dataAOS: "fade-left"
    }
  ];
  return (
    <div>
      <div className="container-sm ">
        <div style={{ marginTop: "5vh" }} className="row">
          <div data-aos="flip-left" className="col-sm">
            <img src={keeper} alt={"draft"} />
          </div>

          {/* <div className="col-sm-1"></div> */}
          <div data-aos="flip-right" className="col-sm">
            <h1 style={{ paddingTop: "20px" }}>FAQS</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet,
              mollitia libero rem beatae illo omnis vel similique perspiciatis
              minima distinctio aliquam provident veritatis, dolor, cupiditate
              autem odit illum soluta ratione.
            </p>
            <Link to="/Product">
              <Button variant="outlined" color="warning" className="button">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        {details.map((detail, index) => {
          return <Questions detail={detail} key={index} />;
        })}
      </div>
      <div style={{ display: "grid", placeItems: "center", marginTop: "5vh" }}>
        <Link to="/Contact">
          <Button
            style={{ fontFamily: "Lora, serif" }}
            variant={"contained"}
            color={"warning"}
            size={"large"}
            data-aos={"zoom-out"}
          >
            More Questions ?
          </Button>
        </Link>
      </div>
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Faqs;
