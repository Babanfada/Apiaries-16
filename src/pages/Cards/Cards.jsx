import React from "react";
//import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards({ content }) {
  const { name, text, img, img2 } = content;
  const myStyle = {
    color: "#fc9100",
    margin: "3vh 0",
    fontFamily: "Rubik, Sans-serif"
  };
  const mystyle2 = {
    backgroundColor: "#fcc500",
    clipPath: `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`,
    padding: "1vw"
  };
  const myStyle3 = {
    backgroundColor: "white",
    padding: "1vw",
    clipPath: `polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)`,
    position: "absolute",
    right: "-2vw",
    top: "40%",
    width: "6vw"
  };
  return (
    <Card
      style={{
        width: "18rem",
        borderRadius: "15px",
        padding: "0",
        position: "relative",
        borderColor: "transparent",
        marginTop: "3vh"
        // border:"1px solid red"
      }}
    >
      <Card.Img variant="top" src={img} alt="draft"></Card.Img>
      <div style={myStyle3}>
        <Card.Img
          variant="top"
          src={img2}
          alt="card"
          style={mystyle2}
        ></Card.Img>
      </div>
      <Card.Body>
        <Card.Title style={myStyle}>{name}</Card.Title>
        <Card.Text style={{ fontFamily: `Rubik, Sans-serif` }}>
          {text}
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Cards;
