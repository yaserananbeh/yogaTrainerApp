import React from "react";
import { Carousel } from "react-bootstrap/";

function HeroSlider() {
  return (
    <div>
      <Carousel>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="./assets/images/slider-1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>
              "It's not about being good at something. It's about being good to
              yourself."
            </h3>
            {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5000}>
          <img
            className="d-block w-100"
            src="./assets/images/slider-2.jpg"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Book your yoga Trainer with just few clicks</h3>
            {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default HeroSlider;
