import React from 'react'
import Product from './Product'

function NewArrivals() {
  return (
    <div className="w-full h-full py-24 max-lg:py-14 max-sm:py-10 overflow-hidden">
      <div className='flex max-lg:flex-col max-lg:items-start justify-between items-center'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-sans tracking-wider'>New Arrivals</h1>
            <p className='text-lg font-normal opacity-80'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
        </div>
        <div className='flex flex-col justify-center items-end group'>
             <h5 className='text-xl'>All Products</h5>
             <span className='w-[50%] h-[1px] bg-black group-hover:w-full duration-500'></span>
        </div>
      </div>
      <div className='w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-8'>
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010' name="Tuaha" price="0123" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010' name="Tuaha" price="0123" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010' name="Tuaha" price="0123" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010' name="Tuaha" price="0123" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010' name="Tuaha" price="0123" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010' name="Tuaha" price="0123" href='/product' />
      </div>
    </div>
  )
}

export default NewArrivals
