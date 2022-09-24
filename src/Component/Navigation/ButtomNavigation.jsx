import React from 'react'
import { NavLink } from 'react-router-dom'
import './ButtomNavigation.css'

const ButtomNavigation = ({pagesData}) => {
  return (
  <>
  <div className='main-Container'>
    <div className='header-main-container'>
       
    </div>
    <div className='navigation-main-container'>
      { pagesData.map((each, index)=>(

         <NavLink key={index} className={"navigation-container"} to={each?.url}>
           {each?.label} 
           </NavLink>
           

      ))}
       
    </div>
  </div>
  
  </>
  )
}

export default ButtomNavigation