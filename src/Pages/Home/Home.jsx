import React from 'react'
import './Home.css'
import CaresolDoc from '../../CaresolDoc/CaroselDoc'
import BusinessPost from '../../Component/PostType/BusinessPost/BusinessPost'
import PoliticsPost from '../../Component/PostType/PoliticsPost/PoliticsPost'
import  { politicsImageData} from '../../DummyData/DummyData'
import Label from '../../Component/Label/Label'
const Home = () => {
  return (
    <>
      <div className='Home-main-container'>
      
      <CaresolDoc DataFromCarosel={politicsImageData} />
        <div className='politics-and-business-main-container'>
          <div className='politics-main-container'>
            <PoliticsPost politicsDummyData={politicsImageData}/>
          </div>
          <div className='business-main-container'>
           <BusinessPost businessDummyData={politicsImageData}/>
          </div>
        </div>
        <div className='recent-and-popular-main-container'>
          <div><Label LabelOne='Recent News'/></div>
          <div><Label LabelOne='Popular Post'/></div>

        </div>
      </div>
    </>

  )
}

export default Home