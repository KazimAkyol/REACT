import React from "react";
import Carousel from "react-bootstrap/Carousel";

import resim1 from "../img/slider01.jpg";
import resim2 from "../img/slider02.jpg";
import resim3 from "../img/slider03.jpg";

import "./buton.css";

const Slider = () => {
  //! carousel-fade = resimler silikleserek, kibarca kayboluyor.
  return (
    <Carousel className="mb-5 carousel-fade">
      <Carousel.Item>
        <img src={resim1} width="100%" alt="" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={resim2} width="100%" alt="" />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={resim3} width="100%" alt="" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
