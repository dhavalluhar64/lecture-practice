import React from "react";
import HeadreComp from "../Comman-File/HeaderComp";
import FooterComp from "../Comman-File/FooterComp";
import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import ExampleCarouselImage from "../Images-Slider/ExampleCarouselImage";
import { Link, Navigate, Outlet, useLocation } from "react-router-dom";

function HomeCom() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const locations = useLocation();

  return (
    <>
      <HeadreComp />

      <nav>
        <Link to="/home1"> HomePage1</Link> <Link to="/home2">HomePage2</Link>
      </nav>

      {locations.pathname === "/" && (
        <Carousel activeIndex={index} onSelect={handleSelect} className="mt-4">
          <Carousel.Item>
            <ExampleCarouselImage imagesss="https://img.freepik.com/free-photo/odenwald-germany-is-pure-nature_181624-32381.jpg?t=st=1732940954~exp=1732944554~hmac=6e5c1caf19ff43a121fcce817762b4f9b59a0f3ea0040705d2a5e5d3f5fe232a&w=996" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage imagesss="https://www.shutterstock.com/shutterstock/photos/2233239061/display_1500/stock-photo-tree-data-structure-in-computer-science-difference-between-binary-search-tree-and-heap-two-types-2233239061.jpg" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <ExampleCarouselImage imagesss="https://www.shutterstock.com/shutterstock/photos/450285202/display_1500/stock-vector-computer-algorithm-computer-science-problem-solving-process-with-programming-language-code-concept-450285202.jpg" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      )}

      <Outlet />

      <FooterComp />
    </>
  );
}

export default HomeCom;
