import React from 'react'
import InputField from '../../Shared/InputField/InputField'
import SearchIcon from '../../Shared/SearchIcon/SearchIcon'
import { FiSend } from 'react-icons/fi'

import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className='Footer-main-container'>

       
        <div className='footer-heading-and-email-container'>
          <div className='footer-heading-container' >
            <h2>
              Newsletter Subcribe</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis aspernatur ut at quae omnis pariatur obcaecati possimus nisi ea iste!</p>

          </div>
          <div className='footer-email-and-send-container'>
            <div><InputField inputType={"email"} className="input-type-container" setPlaceholder={'Enter Your Email Address'} /></div>
            <div> <SearchIcon icon={<FiSend fontSize={"large"} color="yellow" />} /></div>
          </div>

        </div>
        <div className='footer-end-container'>
        <p >Thank for visiting to Our Pages</p>

      </div>

      </div>
      
    </>
  )
}

export default Footer