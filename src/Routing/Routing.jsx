import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Categories from '../Pages/Categories/Categories'
import Home from '../Pages/Home/Home'
import Header from '../Component/Header/Header'
import Footer from '../Component/Foooter/Footer'

const Routing = () => {
    return (
        <>

            <Header/>
           <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/categories" element={<Categories />}/>

           </Routes>

            <Footer/>


        </>
    )
}

export default Routing