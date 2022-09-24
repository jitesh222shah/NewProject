import React from 'react'
import './PoliticsPost.css'
import image from '../../../Assets/image.jpg'
const PoliticsPost = ({politicsData}) => {
  return (
    <>
    <div className='politics-main-container'>
      {politicsData.map((each,index)=>(
        <figure>
        <img src={each?.image} alt="Picture" />{each.imageDetail}
        </figure>
        
      ))}
       {/* <h2> Politics</h2>
      <div className='politics-image-description-container'>
        
         <div >
           <figure> <img className='image-main-container' src={image} alt="Picture"/></figure>
         </div>
         <div>
         <h4>Just at the end of the code before the component</h4>
         <label className="descriptionLabel">
            Just at the end of the code before the component was exported, we
            declared default values for our props. To do that, we started with
            the component's name and a dot/period connecting it with
            defaultProps which is built in when you create a React app. Now,
            wherever we import this component, those values will be the initial
            values instead of being blank. When you pass in data to the child
            component like we did in previous sections, it overrides the default
            values.
          </label>
         </div>
      </div> */}
    </div>
    </>
  )
}

export default PoliticsPost