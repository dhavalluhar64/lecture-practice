import React from "react";

import AboutCom from "../Home-File/AboutCom";
import { Link } from "react-router-dom";

function About_card() {
  const imagess = [
    {
      images: "https://mdbootstrap.com/img/new/standard/nature/184.webp",
    },

    {
      images:
        "https://images.pexels.com/photos/29510214/pexels-photo-29510214/free-photo-of-dramatic-night-lightning-over-urban-landscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      images:
        "https://images.pexels.com/photos/24964099/pexels-photo-24964099/free-photo-of-destroyed-pier-on-lake.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      images:
        "https://images.pexels.com/photos/19534697/pexels-photo-19534697/free-photo-of-holly-branch-with-fruits.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      images:
        "https://images.pexels.com/photos/27054260/pexels-photo-27054260/free-photo-of-sky-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      images:
        "https://images.pexels.com/photos/15062959/pexels-photo-15062959/free-photo-of-close-up-of-vintage-locomtive-wheel.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      images:
        "https://images.pexels.com/photos/29207369/pexels-photo-29207369/free-photo-of-charming-urban-street-with-bicycles-and-blue-doors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },

    {
      images:
        "https://images.pexels.com/photos/27116159/pexels-photo-27116159/free-photo-of-black-bike-by-window-and-red-door.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  return (
    <>
     <AboutCom imgg={imagess} />
    </>
  );
}

export default About_card;
