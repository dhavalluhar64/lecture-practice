import React from "react";

function ExampleCarouselImage({ imagesss }) {
  return (
    <div
      style={{
        height: "400px",
        backgroundColor: "lightgray",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
      }}
    >
      <img src={imagesss} alt="" />
    </div>
  );
}

export default ExampleCarouselImage;
