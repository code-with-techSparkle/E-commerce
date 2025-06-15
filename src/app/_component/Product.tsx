import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

function Product({src, name, price, href}) {
  return (
    <Link href={href} className='w-full h-full flex flex-col py-10'>
      <div className='relative rounded-2xl overflow-hidden group'>
        <div className='bg-black w-full h-96'>
            <Image src={src} alt='product-1' width={1000} height={1000} className='object-cover h-full w-full group-hover:scale-110 duration-500'></Image>
        </div>
        <div className='absolute w-full h-10 bg-black flex justify-center items-center -bottom-10 group-hover:bottom-0 duration-500'>
            <h5 className='text-xl text-white'>View Product</h5>
        </div>
      </div>
      <h4 className='text-xl'>{name}</h4>
      <h1 className='text-xl'>{price}</h1>
    </Link>
  )
}

export default Product
