import './error.css'
import image from "../../images/22.png"
import React from 'react'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Error = () => {
  const style1 = {
    display: "grid",
    placeItems: "center",
    fontFamily: "Lora, serif",
    color: "#ffb005",
    marginTop:"10vh",
    gap:"2vh"
  };
  return (
    <div style={style1}>
      <img style={{ width: "20vw" }} src={image} />
      <h1>NAH...!</h1>
      <h2>THIS PAGE DOES NOT EXIST</h2>
      <Link to="/">
        <Button variant="warning">Go Home</Button>
      </Link>
    </div>
  );
}

export default Error    