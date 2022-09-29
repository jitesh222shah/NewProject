
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Caresol.css"
import React from 'react'

const CaresolDoc = ({ DataFromCarosel = [] }) => {

  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 2000,

  };
  return (
    <>
      <div className="imgslider">
        <Slider {...settings}>
          {DataFromCarosel.map((each, index) => (
            <>
              <div key={index} className="caresol-main-container-caresol">
                <div className="caresol-image-container">
                 <p><figure><img src={each?.image} className="caresol-image" alt=""/></figure> </p>
                  </div>
                <div className="caresol-title-and-detail-container">
                  <div><h3>{each?.title}</h3></div>
                  <div><p>{each?.imageDetail}</p></div>
                </div>

              </div> 
              </>
          ))}
        </Slider>
      </div>
    </>
  )
}
export default CaresolDoc;