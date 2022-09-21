import React from 'react'
import { NavLink } from 'react-router-dom'
import Categories from '../../Pages/Categories/Categories'
import Home from '../../Pages/Home/Home'
const Header = () => {
  return (
  <>
  <div className='main-Container'>
    <div className='header-main-container'>
        <p>Merenda</p>
    </div>
    <div>
        <NavLink to={<Home />}>Home</NavLink>
        <NavLink to={<Categories />}>Categories</NavLink>
    </div>
  </div>
  
  </>
  )
}

export default Header