import React from 'react'
import image from '../../../Assets/image.jpg'
import './BusinessPost.css'

const BusinessPost = () => {
  return (
    <div className='business-main-container'>
      <h2> Business</h2>
      <div className='business-image-label-container'>
        <div>
          <img className='image-main-container' src={image} alt="Picture2" />
        </div>
        <div>
            <h4>Declared default values for our props</h4>
          <label htmlFor="" className="descriptionLabel">
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
      </div>
    </div>
  )
}

export default BusinessPost