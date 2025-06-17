import React from 'react'
import Hero from './_component/Hero'
import Navbar from '../../../component/Navbar'
import AllProduct from './_component/AllProduct'
import Footer from '../../../component/footer/Footer'

function page() {
  return (
    <div className='w-full bg-white text-black'>
      <Navbar />
      <Hero />
      <AllProduct />
      <Footer />
    </div>
  )
}

export default page
