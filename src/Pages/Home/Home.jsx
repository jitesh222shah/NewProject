import React from 'react'
import './Home.css'
import CaresolDoc from '../../CaresolDoc/CaroselDoc'
import BusinessPost from '../../Component/PostType/BusinessPost/BusinessPost'
import PoliticsPost from '../../Component/PostType/PoliticsPost/PoliticsPost'
import { politicsImageData } from '../../DummyData/DummyData'
//import Label from '../../Component/Label/Label'
import RecentNews from '../../Component/PostType/RecentNews/RecentNews'
import PopularPost from '../../Component/PostType/PopularPost/PopularPost'
import EditorsPick from '../../Component/PostType/EditorsPick/EditorsPick'
const Home = () => {
  return (
    <>
      <div className='Home-main-container'>
        <div className='carosel-home-container'>
        <CaresolDoc DataFromCarosel={politicsImageData} />
        </div>
        <div>
          <EditorsPick editorsPickData={politicsImageData}/>
        </div>
        <div className='politics-and-business-main-container'>
          <div className='politics-main-container'>
            <PoliticsPost politicsDummyData={politicsImageData} />
          </div>
          <div className='business-main-container'>
            <BusinessPost businessDummyData={politicsImageData} />
          </div>
        </div>
        <div className='recent-and-popular-main-container'>
          <div><RecentNews recentNewsData={politicsImageData}/></div>
          <div><PopularPost popularPostData={politicsImageData}/></div>

        </div>
      </div>
    </>

  )
}

export default Home