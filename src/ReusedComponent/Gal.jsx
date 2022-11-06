import React from "react";
import { Button } from "react-bootstrap";
import "./Gal.css";

const Gal = ({ content }) => {
  const { h1, p, buttonText } = content;
  return (
    <div className="galContainer">
      <h1>{h1}</h1>
      <p>{p}</p>
      <Button variant="warning" className="button">
        {buttonText}
      </Button>
    </div>
  );
};

export default Gal;
