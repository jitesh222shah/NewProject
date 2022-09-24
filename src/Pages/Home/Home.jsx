import React from 'react'
import './Home.css'
import BusinessPost from '../../Component/PostType/BusinessPost/BusinessPost'
import PoliticsPost from '../../Component/PostType/PoliticsPost/PoliticsPost'
import  { politicsData} from '../../DummyData/DummyData'
const Home = () => {
  return (
    <>
      <div className='Home-main-container'>
      <div><h1 style={{textAlign: "center"}}>carosel</h1> </div>
        <div className='main-container'>
         
          <div className='politics-main-container'>
            <PoliticsPost politicsData={politicsData}/>
          </div>
          <div className='business-main-container'>
           <BusinessPost />
          </div>
        </div>
      </div>
    </>

  )
}

export default Home