import React from "react";
import "./Ccomponent.css";

const Ccomponent = ({ icon, text, title }) => {
  return (
    <div className="officeContainer">
      <div className="office">
        <span>{icon}</span>
      </div>
      <div className="address">
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Ccomponent;
