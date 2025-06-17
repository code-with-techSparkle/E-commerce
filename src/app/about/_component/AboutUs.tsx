'use client';
import Image from 'next/image'
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


function AboutUs() {

  const sectionRef = useRef(null);

  // Track scroll within the AboutUs section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Scale the image from 1 to 1.1
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.7]);
  return (
    <div className='w-full h-full overflow-hidden'>
      <div className='w-full h-[40vh] max-md:h-full overflow-hidden flex flex-col justify-center items-center text-5xl max-md:text-4xl font-bold'>
        <h2 className='font-mono'>Industry Name</h2>
        <p className='text-center font-medium text-4xl max-md:text-2xl max-w-3xl py-5 opacity-75'>Our prime aim: to conceive commodities that will delight you and accompany you for numerous years.</p>
      </div>
      <div className='w-full h-full flex justify-center items-center gap-20 max-lg:gap-5 max-xl:flex-col'>
        <div className="w-full h-[650px] max-lg:h-96 bg-black rounded-3xl overflow-hidden">
          <motion.div
            style={{ scale }}
            className='w-full h-full'
          >
            <Image
              src="https://ik.imagekit.io/qss3mmw4a/E-commerce/About-us?updatedAt=1750076909299"
              alt="About us"
              width={1000}
              height={1000}
              className="object-cover w-full h-full hover:scale-110 duration-300"
            />
          </motion.div>
        </div>
        <div className='w-full h-[650px] max-lg:h-full rounded-3xl p-5 max-lg:p-0'>
          <h4 className='text-4xl font-semibold'>Who we are?</h4>
          <p className='text-xl font-semibold opacity-70'>At Sabina, we believe that eCommerce should be simple, elegant, and effective. Our template is designed to empower businesses of all sizes, providing a seamless platform to showcase products, tell your story, and connect with your customers. With a blend of modern design and intuitive functionality, Sabina sets the stage for you to build a stunning online store that captures your brand's essence and drives sales effortlessly. <br /> <br />Our mission is to help entrepreneurs and businesses thrive in the digital world. With customizable layouts, responsive design, and built-in tools for growth, Sabina makes it easier than ever to create a shopping experience that stands out.
          </p>
          <div className='w-full h-[220px] my-5 rounded-3xl bg-black overflow-hidden'>
            <Image src='https://ik.imagekit.io/qss3mmw4a/E-commerce/About-top?updatedAt=1750075080954' alt='' width={1000} height={1000} className='object-cover w-full h-full'></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
