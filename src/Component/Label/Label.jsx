import React from 'react'
import './Label.css'
const Label = ({LabelOne="Enter"}) => {
  return (
    <div className='label-main-container' >
        < p >{LabelOne }</p>
        </div>
  )
}

export default Label