import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import ButtomNavigation from '../Component/Navigation/ButtomNavigation'
import Footer from '../Component/Foooter/Footer'
import TopNav from '../Component/TopNav/TopNav'
// import Categories from '../Pages/Categories/Categories'
//  import Home from '../Pages/Home/Home'
// import Politics from '../Pages/Politics/Politics'
// import Contact from '../Pages/Contact/Contact'
// import { pagesData } from '../DummyData/DummyData'
const Routing = ({ pagesData }) => {
        const[navData,setNavData]=useState([])
        useEffect(()=>{
            setNavData(pagesData)
        },[pagesData])
    return (
        <>
            <div>
                <TopNav />
            </div>
            <div>
                <ButtomNavigation pagesData={navData} />
            </div>
            <div>
                {navData.map((each, index) => (
                    <Routes key={index}>
                        <Route path={each?.url} element={each?.component} />
                        {/* <Route path="/categories" element={<Categories />} />
                    <Route path="/politics" element={<Politics />} />
                    <Route path="/contact" element={<Contact />} /> */}

                    </Routes>

                ))}
            </div>


            <div>
                <Footer />
            </div>


        </>
    )
}

export default Routing