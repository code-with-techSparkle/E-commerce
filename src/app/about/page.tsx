import React from 'react'
import Hero from './_component/Hero'
import Navbar from '../../../component/Navbar'
import AboutUs from './_component/AboutUs'
import NewArrivals from '../_component/NewArrivals'
import Footer from '../../../component/footer/Footer'

function page() {
    return (
        <div className='w-full h-full overflow-hidden'>
            <Navbar />
            <Hero />
            <div className='p-16 max-xl:p-8 max-md:px-6 bg-[#F4F4F4]'>
               <AboutUs />
            </div>
            <div className='p-16 max-xl:p-8 max-md:px-6'>
               <NewArrivals />
            </div>
            <Footer />
        </div>
    )
}

export default page
