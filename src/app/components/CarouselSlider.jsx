// CarouselSlider.js
"use client";
<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import "./carousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";

const CarouselSlider = ({ projectFolder, length }) => {
  const images = Array.from({ length: length }, (_, index) => index + 1); // Assuming there are 5 images
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // Set initial slidesPerView

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="carousel__div">
      <h2 className="carousel__title">PROPERTY IMAGES</h2>

      <Swiper
        spaceBetween={10}
        slidesPerView={slidesPerView}
        pagination={true}
        navigation={true}
        modules={[Pagination, Navigation]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {images.map((index) => (
          <SwiperSlide key={index}>
            <img
              src={`/image/${projectFolder}/img (${index}).jpg`}
              alt={`Image ${index}`}
              style={{ width: "100%", height: "50vh", objectFit: "cover" ,"borderRadius": "10px"}}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* <Carousel
=======
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the styles
import "./carousel.css";
const CarouselSlider = ({ projectFolder, length }) => {
  const images = Array.from({ length: length }, (_, index) => index + 1); // Assuming there are 5 images

  return (
    <div className="carousel__div">
      <h2>PROPERTY IMAGES</h2>
      <br />
      <Carousel
>>>>>>> origin/main
        autoPlay={true}
        swipeable={true}
        showStatus={false}
        showArrows={true}
        showIndicators={false}
<<<<<<< HEAD
        showThumbs={false}
        useKeyboardArrows={true}
        infiniteLoop={true}
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
      </Carousel> */}
=======
      </Carousel>
>>>>>>> origin/main
    </div>
  );
};

export default CarouselSlider;
