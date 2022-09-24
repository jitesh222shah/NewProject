import React from 'react'
import './SearchIcon.css'
const SearchIcon = ({icon}) => {
  return (
    <div >
        <div >
           <button className='serach-btn-container'>{icon}</button>
        </div>
    </div>
  )
}

export default SearchIcon