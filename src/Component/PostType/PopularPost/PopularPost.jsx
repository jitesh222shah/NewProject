import React from 'react'
import Label from '../../Label/Label'
import './PopularPost.css'
const PopularPost = ({popularPostData}) => {
  return (
    <div>
        <div><Label LabelOne='Popular Post'/></div>
        {popularPostData.map((each, index)=>(
            <div className='popularPost-main-container'>
                <div>
                    <img className='popular-image-container' src={each.image} alt="" />
                </div>
                <div>
                    <div><h4>{each.title}</h4></div>
                    <div>{each.imageDetail}</div>
                </div>

            </div>
        ))}
        
        </div>
  )
}

export default PopularPost