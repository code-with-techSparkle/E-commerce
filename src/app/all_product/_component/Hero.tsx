'use client'
import React from 'react'
import { motion } from 'framer-motion'
function Hero() {
  return (
    <div className='w-fullf bg-[#F4F4F4] flex flex-col justify-center items-center pb-20 pt-32 px-16 max-xl:px-8 max-md:px-6'>
       <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-5xl font-bold max-md:text-4xl text-center"
      >
        A story about two lovers
      </motion.h2>

      {/* Animated Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 text-xl pt-3 text-center"
      >
        Since 1963, we&apos;ve pioneered the creation of beautiful clothing and footwear for all the family.
      </motion.p>
    </div>
  )
}

export default Hero
