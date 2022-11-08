import React, { useEffect, useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import pollen from "../../images/Ambrossia.png";
import "./story.css";
import Stories from "../../ReusedComponent/Stories";
import Carousel from "../../ReusedComponent/Carousel";
const Story = () => {
  const style1 = {
    // border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    gap: "1vw"
  };
  const url = "";
  const [data, setdata] = useState([]);
  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setdata(json);
        console.log(data);
      });
  }, [url]);

  if (data.lenght) {
    return (
      <div style={{display:"grid", placeContent:"center"}}>
        <Spinner animation="border" variant="success" />
      </div>
    );
  } else {
    return (
      <>
        <div className="container-sm ">
          <div className="row">
            <div data-aos="flip-left" className="col-sm">
              <img src={pollen} alt={"draft"} />
            </div>

            {/* <div className="col-sm-1"></div> */}
            <div data-aos="flip-right" className="col-sm">
              <h1 style={{ paddingTop: "20px" }}>STORY</h1>
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
        <div style={{marginTop:"10vh"}} className="container-sm">
          <div style={style1} className="row">
            <Stories className="col-sm" />
            <Stories className="col-sm" />
            <Stories className="col-sm" />
            <Stories className="col-sm" />
            <Stories className="col-sm" />
            <Stories className="col-sm" />
          </div>
        </div>
        <Carousel />
      </>
    );
  }
};

export default Story;
