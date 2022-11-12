import React from "react";

const Questions = ({ detail }) => {
  const { question, answer, pic, design, dataAOS } = detail;
  return (
    <div
      data-aos={dataAOS}
      style={{ marginTop: "5vh" }}
      className="container-sm"
    >
      <div style={design} className="row">
        <div style={{ padding: "0 4vw" }} className="col-sm-8">
          <h3
            style={{
              color: "#ffb005",
              fontFamily: "Lora, serif"
            }}
          >
            {question}
          </h3>
          <p
            style={{
              color: "black",
              fontFamily: "Lora, serif"
            }}
          >
            {answer}
          </p>
        </div>
        <div
          className="col-sm"
          style={{
            width: "300px",
            // border: "1px solid red",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <img
            style={{
              width: "300px",
              height: "auto",
              objectFit: "contain"
              // border: "1px solid blue"
            }}
            src={pic}
            alt="draft"
          />
        </div>
      </div>
    </div>
  );
};

export default Questions;
