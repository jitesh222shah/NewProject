import React from 'react'
import './Label.css'
const Label = ({LabelOne="Enter"}) => {
  return (
    <div >
        < p className='label-main-container'>{LabelOne}</p>
        </div>
  )
}

export default Label