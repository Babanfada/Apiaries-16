import React from "react";
import { Button } from "react-bootstrap";
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
      style: { display: "flex", flexDirection: "row", gap: "30vw" }
    },
    {
      question: "What is the difference between wild bees and farm bees?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut et neque eget nunc pellentesque tincidunt et tempor sem. Sed sed mi vel mi auctor placerat. Nulla commodo",
      pic: beek,
      style: {
        display: "flex",
        flexDirection: "rowReverse",
        border: "6px solid red"
      }
    },
    {
      question: "How do you extract honey from the bees?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut et neque eget nunc pellentesque tincidunt et tempor sem. Sed sed mi vel mi auctor placerat. Nulla commodo",
      pic: beekeeper,
      style: { display: "flex", flexDirection: "row" }
    },
    {
      question: "How dangerous is honey bees to humans and dogs?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.Ut et neque eget nunc pellentesque tincidunt et tempor sem. Sed sed mi vel mi auctor placerat. Nulla commodo",
      pic: clusters,
      style: { display: "flex", flexDirection: "rowReverse" }
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
              <Button variant="warning" className="button">
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
      <div>
        <Carousel />
      </div>
    </div>
  );
};

export default Faqs;
