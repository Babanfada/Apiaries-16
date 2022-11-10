import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import women from "../images/women.jpg";
import { IoIosPerson } from "react-icons/io";
import { MdOutlineReadMore } from "react-icons/md";
import { AiFillClockCircle, AiOutlineComment } from "react-icons/ai";

const Stories = ({ stuffs }) => {
  const [item, data1, data2] = stuffs;

  const style1 = {
    // border: ".3px solid transparent",
    width: "20rem",
    transform: "translateY(-23px)",
    backgroundColor: "white",
    paddingTop: "7vh",
    borderRadius: "0px 0px 10px 10px "
  };
  const style2 = {
    fontFamily: "Lora, serif",
    fontSize: "2vw",
    color: "#ffb005"
  };
  const style3 = {
    color: "#ffb005",
    display: "flex",
    alignItems: "center",
    fontFamily: "Source Sans Pro, Sans-serif",
    fontSize: "13px",
    gap: "0.3vw"
  };
  const style4 = {
    fontFamily: "Source Sans Pro, Sans-serif",
    paddingTop: "10px"
  };
  const style5 = {
    color: "#7a7a7a",
    border: "1px solid #ffb005",
    width: "120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px"
  };

  return (
    <Card
      style={{
        width: "22rem",
        // border: "3px solid blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: "10px",
        border: "none"
      }}
    >
      <Card.Img
        style={{
          width: "100%",
          //   border: "2px solid red",
          margin: "0",
          borderRadius: "10px 10px 0 0"
        }}
        variant="top"
        src={item.image}
      />
      <Card.Body style={style1}>
        <Card.Title style={style2}>{item.title}</Card.Title>
        <small style={style3}>
          <IoIosPerson />
          <a style={{ textDecoration: "none", whiteSpace: "nowrap" }} href="">
            {item.author}
          </a>
          <AiFillClockCircle />
          <span style={{ whiteSpace: "nowrap" }}>{item.published}</span>
          <AiOutlineComment />
          <span style={{ whiteSpace: "nowrap" }}>{item.genre}</span>
        </small>
        <Card.Text style={style4}>{item.description}</Card.Text>
        <Button style={style5} variant="outline-light">
          <span
            style={{
              fontSize: "small",
              //   border: "1px solid red",
              whiteSpace: "nowrap"
            }}
          >
            Read More
          </span>
          <span>
            <MdOutlineReadMore style={{ textAlign: "center", width: "4vw" }} />
          </span>
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Stories;
