import React from "react";
import "./Home.css";
import CaresolDoc from "../../CaresolDoc/CaroselDoc";
import BusinessPost from "../../Component/PostType/BusinessPost/BusinessPost";
import PoliticsPost from "../../Component/PostType/PoliticsPost/PoliticsPost";
import { politicsImageData } from "../../DummyData/DummyData";
import { carouselData } from "../../DummyData/DummyData";
const Home = () => {
  return (
    <>
      <div className="Home-main-container">
        <div className="carousel-container-home">
          <CaresolDoc DataFromCarousel={carouselData} />
        </div>
        <div className="main-container">
          <div className="politics-main-container">
            <PoliticsPost politicsImageData={politicsImageData} />
          </div>
          <div className="business-main-container">
            <BusinessPost />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
