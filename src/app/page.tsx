import React from 'react'
import Hero from './_component/Hero'
import NewArrivals from './_component/NewArrivals'
import Brands from './_component/Brands'
import ProductView from './_component/ProductView'

function page() {
  return (
    <div className='w-full bg-white text-black'>
      <div className='p-16 max-xl:p-8 max-md:px-6'>
        <Hero />
        <NewArrivals />
      </div>
      <Brands />
    </div>
  )
}

export default page
