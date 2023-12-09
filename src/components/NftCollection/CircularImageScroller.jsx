import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LazyLoad from "react-lazyload";

import frame from "../../assets/images/bg-image.png";
import img1 from "../../assets/images/slide-images/1.jpg";
import img2 from "../../assets/images/slide-images/2.jpg";
import img3 from "../../assets/images/slide-images/3.jpg";
import img6 from "../../assets/images/slide-images/6.jpg";
import img9 from "../../assets/images/slide-images/9.jpg";

function CircularImageScroller() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [img1, img2, img3, img6, img9];

  const settings = {
    lazyLoad: "ondemand",
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    arrows: false,
    centerMode: true,
    centerPadding: "0",
    beforeChange: (current, next) => setCurrentSlide(next),
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Adjust this breakpoint as needed
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="container" style={{ backgroundColor: "#090d0a", color: "white" }}>
      <h1 className="text-center text-3xl sm:text-4xl font-bold mb-5 uppercase mt-5">
        High-Quality NFTs Collections
      </h1>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="carousel-item">
            <LazyLoad height={200}>
              <div className="w-100 h-72 md:h-72 lg:h-54 xl:h-80 rounded-lg overflow-hidden">
                {index === currentSlide && (
                  <img
                    className="w-100 h-100 position-absolute"
                    src={frame}
                    alt="random"
                  />
                )}
                {[-2, -1, 0, 1, 2].includes(index - currentSlide) && (
                  <img
                    className="w-100 h-100 position-absolute py-5 px-4 mt-1 object-cover"
                    src={image}
                    alt="random"
                    style={{
                      zIndex: 999,
                    }}
                  />
                )}
              </div>
            </LazyLoad>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CircularImageScroller;
