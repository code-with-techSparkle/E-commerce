'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className="w-full h-[50vh] max-md:h-[80vh] relative flex flex-col justify-center items-center overflow-hidden p-16 max-xl:p-8 max-md:px-6">
      {/* Animated Background Image */}
      <motion.div
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <Image
          src="https://ik.imagekit.io/qss3mmw4a/E-commerce/About-top?updatedAt=1750075080954"
          alt="about-bg"
          width={1000}
          height={700}
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Animated Heading */}
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
  );
}

export default Hero;
