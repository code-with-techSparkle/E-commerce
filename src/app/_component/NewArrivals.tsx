import React from 'react'
import Product from './Product'
import Link from 'next/link'

function NewArrivals() {
  return (
    <div className="w-full h-full pt-24 max-lg:py-14 max-sm:py-10 overflow-hidden">
      <div className='flex max-lg:flex-col max-lg:items-start justify-between items-center'>
        <div className='flex flex-col'>
            <h1 className='text-4xl font-sans tracking-wider'>New Arrivals</h1>
            <p className='text-lg font-normal opacity-80'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
        </div>
        <Link href='/all_product' className='flex flex-col justify-center items-end max-md:pb-3 group'>
             <h5 className='text-xl'>All Products</h5>
             <span className='w-[50%] h-[1px] bg-black group-hover:w-full duration-500'></span>
        </Link>
      </div>
      <div className='w-full h-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pt-7 max-md:pt-3'>
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-1.png?updatedAt=1749986516010' name="Name" price="price" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-2?updatedAt=1750064978759' name="Name" price="price" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-3?updatedAt=1750064998373' name="Name" price="price" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-4?updatedAt=1750065018223' name="Name" price="price" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-5?updatedAt=1750065038754' name="Name" price="price" href='/product' />
        <Product src='https://ik.imagekit.io/qss3mmw4a/E-commerce/product-6?updatedAt=1750065058688' name="Name" price="price" href='/product' />
      </div>
    </div>
  )
}

export default NewArrivals
