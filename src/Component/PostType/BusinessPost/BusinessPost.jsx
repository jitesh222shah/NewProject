import React from 'react'
//import image from '../../../Assets/illusion.jpg'
import Label from '../../Label/Label'
import './BusinessPost.css'

const BusinessPost = ({businessDummyData}) => {
  return (

    <div >
      <Label LabelOne='Business' />
      {businessDummyData.map((each, index) => (
        <div key={index} className='business-main-container'>
          <div><figure><img className='business-image-container' src={each.image} alt=""/></figure></div>
          <div>
            <div><h4>{each.title}</h4></div>
            <div>
              {each.imageDetail}
            </div>
          </div>
        </div>


      ))}


    </div>
  )
}

export default BusinessPost