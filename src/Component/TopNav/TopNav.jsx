import React from 'react'
import InputField from '../../Shared/InputField/InputField'
import SearchIcon from '../../Shared/SearchIcon/SearchIcon'
import { FiSearch } from "react-icons/fi";
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'

//import SearchIcon from '../../Shared/SearchIcon/SearchIcon'
//import {FiSearch} from 'react-icons/fi'
import './TopNav.css'
const TopNav = () => {
    return (
        <div className='TpoNav-main-main-container'>
            <div className='TopNav-container'>
                <div className='Merenda-container'>
                    <h1> Merenda</h1>
                </div>
                <div className='searchandicon'>
                    <div className='social-sites-container'>
                        <a href='http://www.facebook.com'>
                            <SearchIcon icon={<FaFacebookF color='blue' />} />
                        </a>
                        <a href="http://www.instagram.com">
                            <SearchIcon icon={<BsInstagram color='red' />} />
                        </a>
                    </div>

                    <div >
                        {/* <input text={'text'} placeholder={'Search....'} /> 
                    */}
                        <InputField inputType={'text'} setPlaceholder={'Click to Search... here'} />
                    </div>
                    <div >
                        <SearchIcon className='icon-btn'
                            icon={<FiSearch fontSize={"1.8em"} color="white" />}
                        />
                    </div>
                </div>


            </div>
        </div>
    )
}

export default TopNav