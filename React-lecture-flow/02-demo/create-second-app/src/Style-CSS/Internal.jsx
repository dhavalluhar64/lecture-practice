import React from "react";

const Internal = () => {
  const styless = {
    Height: "150px",
    width: "100%",
    backgroundColor: "DodgerBlue",
    padding: "20px 10px",
  };

  const Paragraph = {
    background: "linear-gradient(red,green,yellow)",
    padding: "10px 10px",
    fontSize: "20px",
  };

  return (
    <div className="main" style={styless}>
      <p style={Paragraph}>This is the Internal css</p>
    </div>
  );
};

export default Internal;
