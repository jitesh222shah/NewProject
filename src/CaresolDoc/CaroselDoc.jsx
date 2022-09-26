import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";

const Carousel = ({ DataFromCarousel = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <>
      <Slider {...settings}>
        {DataFromCarousel.map((each, index) => (
          <div className="mainContainer" key={index}>
            <div className="innerContainer">
              <div className="Details">
                <figure>
                  <img
                    src={each.image}
                    className="imageFromCarousel"
                    alt="image1"
                  />
                </figure>
                <div className="titleAndDescriptionContainer">
                  <div className="TitleCcontainer">
                    <h3>{each?.title}</h3>
                  </div>
                  <div className="DescriptionContainer">
                    <p>{each?.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </>
  );
};

export default Carousel;
