import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className="w-full h-[50vh] max-md:h-[80vh] relative flex flex-col justify-center items-center overflow-hidden p-16 max-xl:p-8 max-md:px-6">
         <Image src='https://ik.imagekit.io/qss3mmw4a/E-commerce/About-top?updatedAt=1750075080954' alt='about-bg' width='1000' height='700' className='absolute top-0 left-0 w-full h-full object-cover'></Image>
         <h2 className='z-10 text-5xl font-bold max-md:text-4xl text-center'>A story about two lovers</h2>
         <p className='z-10 text-xl pt-3 text-center '>Since 1963, we&apos;ve pioneered the creation of beautiful clothing and footwear for all the family.</p>
    </div>
  )
}

export default Hero
