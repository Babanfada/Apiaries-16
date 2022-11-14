import React, { useEffect, useContext } from "react";
//import axios from "axios";
import Spinner from "react-bootstrap/Spinner";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import pollen from "../../images/Ambrossia.png";
import "./story.css";
import Stories from "../../ReusedComponent/Stories";
import Carousel from "../../ReusedComponent/Carousel";
import { dataContext } from "../../App";
const url0 = "https://fakerapi.it/api/v1/books?_quantity=12";
const url1 =
  "https://fakerapi.it/api/v1/persons?_quantity=5&_gender=male&_birthday_start=2005-01-01";
const url2 = "https://fakerapi.it/api/v1/users?_quantity=3&_gender=male";

const Story = () => {
  const { data0, data1, data2, setdata0, setdata1, setdata2 } = useContext(
    dataContext
  );

  const style1 = {
    // border: "1px solid red",
    display: "flex",
    justifyContent: "center",
    gap: "1vw"
  };

  const fetchData = () => {
    fetch(url0)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setdata0(json.data);
      });
  };
  const fetchData1 = () => {
    fetch(url1)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setdata1(json.data);
      });
  };
  const fetchData2 = () => {
    fetch(url2)
      .then(response => response.json())
      .then(json => {
        console.log(json);
        setdata2(json.data);
      });
  };

  useEffect(() => {
    fetchData();
    fetchData1();
    fetchData2();
  }, []);

  if (!data0.length) {
    return (
      <div style={{ display: "grid", placeContent: "center" }}>
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
        <div
          data-aos="zoom-out"
          style={{ marginTop: "10vh" }}
          className="container-sm"
        >
          <div style={style1} className="row">
            {data0.map(item => {
              return (
                <Link
                  className="col-sm"
                  style={{
                    width: "22rem",
                    border: "none",
                    textDecoration: "none"
                  }}
                  to={`/MyStory/${item.id}`}
                >
                  <Stories
                    stuffs={[item, data1, data2]}
                    // className="col-sm"
                    key={item.id}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <Carousel />
      </>
    );
  }
};

export default Story;
