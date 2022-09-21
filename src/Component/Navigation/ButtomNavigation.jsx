import React from 'react'
import { NavLink } from 'react-router-dom'
import './ButtomNavigation.css'

const Header = ({pagesData}) => {
  return (
  <>
  <div className='main-Container'>
    <div className='header-main-container'>
        <p>Merenda</p>
    </div>
    <div className='navigation-main-container'>
      { pagesData.map((each, index)=>(

         <NavLink className={"navigation-container"} to={each.url}> {each.label} </NavLink>

      ))}
       
    </div>
  </div>
  
  </>
  )
}

export default Header