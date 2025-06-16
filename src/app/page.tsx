import React from 'react'
import Hero from './_component/Hero'
import NewArrivals from './_component/NewArrivals'
import Brands from './_component/Brands'
import OurCollection from './_component/OurCollection'
import Footer from '../../component/footer/Footer'
import Navbar from '../../component/Navbar'

function page() {
  return (
    <div className='w-full bg-white text-black'>
         <Navbar />
      <div className='p-16 max-xl:p-8 max-md:px-6'>
        <Hero />
        <NewArrivals />
      </div>
      <Brands />
      <div className='p-16 max-xl:p-8 max-md:px-6'>
         <OurCollection />
      </div>
      <Footer />
    </div>
  )
}

export default page
