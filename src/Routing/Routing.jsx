import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ButtomNavigation from '../Component/Navigation/ButtomNavigation'
import Footer from '../Component/Foooter/Footer'
// import Categories from '../Pages/Categories/Categories'
//  import Home from '../Pages/Home/Home'

// import Politics from '../Pages/Politics/Politics'
// import Contact from '../Pages/Contact/Contact'
// import { pagesData } from '../DummyData/DummyData'

const Routing = ({pagesData}) => {
    return (
        <>

            <div>
                <ButtomNavigation pagesData={pagesData} />
            </div>
            {pagesData.map((each,index) => (
                <Routes>
                    <Route path={each.url} element={each.label} />
                    {/* <Route path="/categories" element={<Categories />} />
                    <Route path="/politics" element={<Politics />} />
                    <Route path="/contact" element={<Contact />} /> */}

                </Routes>

            ))}


            <Footer />


        </>
    )
}

export default Routing