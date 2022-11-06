import React from "react";
//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
//import "./Keepers.css";

const Keeepers = ({ content }) => {
  const { image, nameOfkeeper, description, text, media, dataAos } = content;
  const mystyle = {
    // border: "3px solid green",
    width: "100%",
    backgroundColor: "transparent"
  };
  const mystyle2 = {
    clipPath: `polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%)`
    // border: "1px solid green"
  };
  const mystyle3 = {
    // border: "1px solid red",
    textAlign: "center",
    fontFamily: "Great Vibes, cursive",
    fontWeight: "bold",
    color: "#ffb005",
    fontSize: "30px"
  };
  const mystyle4 = {
    // border: "1px solid red",
    textAlign: "center",
    fontFamily: "Lora, serif",
    // fontWeight: "bold",
    color: "black",
    fontSize: "20px"
  };
  return (
    <div data-aos={dataAos} style={mystyle}>
      <Card style={{ width: "100%", border: "none" }}>
        <div style={mystyle2}>
          <Card.Img variant="top" src={image} />
        </div>
        <Card.Body>
          <Card.Title style={mystyle3}>{nameOfkeeper}</Card.Title>
          <h6 style={mystyle4}>{description}</h6>
          <div style={{ fontFamily: "Lora, serif", textAlign: "center" }}>
            <Card.Text>{text}</Card.Text>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            {media}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Keeepers;
