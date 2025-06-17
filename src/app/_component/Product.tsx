import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { IoMdArrowForward } from 'react-icons/io';

interface ProductProps {
  src: string;
  name: string;
  price: string;
  href: string;
}

function Product({ src, name, price, href }: ProductProps) {
  return (
    <Link href={href} className='w-full h-full flex flex-col py-10 max-md:pb-5 max-md:pt-2'>
      <div className='relative rounded-2xl overflow-hidden group'>
        <div className='bg-black w-full h-96 max-md:h-80'>
          <Image
            src={src}
            alt='product-1'
            width={1000}
            height={1000}
            className='object-cover h-full w-full duration-500 group-hover:scale-125 group-hover:blur-sm'
          />
        </div>
        <div className="absolute w-20 h-20 rounded-full bg-[#a0a0a098] flex justify-center items-center bottom-[-80px] left-1/2 translate-x-[-50%] group-hover:bottom-1/2 group-hover:translate-y-1/2 duration-500">
          <h5 className="text-xl text-white opacity-100"><IoMdArrowForward className='size-7 text-black -rotate-45 duration-300' />
          </h5>
        </div>
      </div>
      <h4 className='text-xl'>{name}</h4>
      <h1 className='text-xl'>{price}</h1>
    </Link>
  )
}

export default Product
