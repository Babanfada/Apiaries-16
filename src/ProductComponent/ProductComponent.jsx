import React from "react";
import "./ProductComponent.css";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";

const ProductComponent = ({ product }) => {
  const { productImg, title, text, price } = product;
  const pstyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "2vh"
  };
  return (
    <Card
      style={{
        width: "18rem",
        backgroundColor: "transparent",
        border: "none"
      }}
    >
      <Card.Img variant="top" src={productImg} />
      <Card.Body style={pstyle}>
        <Card.Title
          style={{
            color: "#fc9100",
            fontWeight: "bolder",
            fontFamily: "Source Sans Pro, Sans-serif"
          }}
        >
          {title}
        </Card.Title>
        <Card.Title
          style={{
            color: "black",
            fontWeight: "bold",
            fontFamily: "Source Sans Pro, Sans-serif"
          }}
        >
          {price}
        </Card.Title>
        <Card.Text style={{ textAlign: "center" }}>{text}</Card.Text>
        <Button variant="warning" className="button">
          Order Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductComponent;
