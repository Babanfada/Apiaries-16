import React, { useState } from "react";

const Pratice = () => {
  const [color, setColor] = useState(0);
  const update = () => {
    setColor(color + 1);
  };
  const decrease = () => {
    setColor(color - 1);
  };

  const [features, setFeatures] = useState({
    brand: "mercedes",
    name: "ivm",
    year: "2009",
    model: "1992"
  });

  const [myStyle, setMyStyle] = useState({
    color: "red",
    backgroundColor: "blue"
  });

  const updateStyle = () => {
    setMyStyle({ ...myStyle, borderRadius: "50%" });
    setFeatures({ ...features, model: "2022" });
  };
  const updateFeatures = () => {
    setFeatures({ ...features, model: "2022" });
  };

  return (
    <div>
      <h1>my fav color is {color}</h1>
      <button onClick={update}> + </button>
      <button onClick={decrease}> - </button>
      <button style={myStyle} onClick={updateStyle}>
        {" "}
        -+{" "}
      </button>
      <button  onClick={updateFeatures}>clik</button>
      <p>
        this is {features.model} of which brand is{features.brand} and made in
        year{features.year}
      </p>
    </div>
  );
};

export default Pratice;
