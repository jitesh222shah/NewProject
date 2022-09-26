import React from 'react'
import './InputField.css'
const InputField = ({ inputType, setOnClick, setPlaceholder }) => {
  return (
    <div className='input-container'>
      <input
        type={inputType}
        className="input-type-container"
        placeholder={setPlaceholder}
        onChange={setOnClick}
      />
    </div>
  )
}

export default InputField