// CarouselSlider.js
"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import "./carousel.css";
const CarouselSlider = ({ projectFolder, length }) => {
  const images = Array.from({ length: length }, (_, index) => index + 1); // Assuming there are 5 images

  return (
    <div className="carousel__div">
      <h2>PROJECT IMAGES</h2>
      <br />
      <Carousel
        autoPlay={true}
        swipeable={true}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
        className="project-details__carousel"
      >
        {images.map((index) => (
          <div key={index}>
            <img
              src={`/image/${projectFolder}/img (${index}).jpg`}
              alt={`Image ${index}`}
              style={{ width: "100%", maxHeight: "50vh", objectFit: "contain" }}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSlider;
