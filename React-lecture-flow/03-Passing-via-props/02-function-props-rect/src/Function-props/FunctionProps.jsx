import React from "react";
import FunctionChild from "./FunctionChild";

const FunctionProps = () => {
  let Imgcard = [
    {
      Buttonn: "BUY NOW",

      images:
        "https://images.pexels.com/photos/29401544/pexels-photo-29401544/free-photo-of-vibrant-field-of-orange-marigolds-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",

      title: "Flowers Images ",

      cardContaint:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

    {
      Buttonn: "BUY NOW",

      images:
        "https://images.pexels.com/photos/1263986/pexels-photo-1263986.jpeg?auto=compress&cs=tinysrgb&w=600",

      title: "Flowers Images ",

      cardContaint:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

    {
      Buttonn: "BUY NOW",

      images:
        "https://images.pexels.com/photos/68507/spring-flowers-flowers-collage-floral-68507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      title: "Flowers Images ",

      cardContaint:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

    {
      Buttonn: "BUY NOW",

      images:
        "https://images.pexels.com/photos/15935553/pexels-photo-15935553/free-photo-of-selection-of-colorful-flowers.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",

      title: "Flowers Images ",

      cardContaint:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },

    {
      Buttonn: "BUY NOW",

      images:
        "https://images.pexels.com/photos/1440476/pexels-photo-1440476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

      title: "Flowers Images ",

      cardContaint:
        "Some quick example text to build on the card title and make up the bulk of the card's content.",
    },
  ];

  return (
    <>
      <div className="container">
        <div className="row">
          <FunctionChild ChildAcsess={Imgcard} />
        </div>
      </div>
    </>
  );
};
export default FunctionProps;
