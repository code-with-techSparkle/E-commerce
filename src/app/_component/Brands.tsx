'use client';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { motion } from 'framer-motion';
import Image from 'next/image';

type Testimonial = {
  src: string; 
};

const Brands: React.FC = () => {
  const testimonial: Testimonial[] = [
    {
      src: "https://ik.imagekit.io/qss3mmw4a/E-commerce/4.jpg?updatedAt=1749989568795",
    },
    {
      src: "https://ik.imagekit.io/qss3mmw4a/E-commerce/3.jpg?updatedAt=1749989568714",
    },
    {
      src: "https://ik.imagekit.io/qss3mmw4a/E-commerce/2.jpg?updatedAt=1749989568665",
    },
    {
      src: "https://ik.imagekit.io/qss3mmw4a/E-commerce/7.jpg?updatedAt=1749989568640",
    },
    {
      src: "https://ik.imagekit.io/qss3mmw4a/E-commerce/6.jpg?updatedAt=1749989568598",
    },
    {
      src: "https://ik.imagekit.io/qss3mmw4a/E-commerce/7.jpg?updatedAt=1749989568640",
    },
    {
      src: "https://ik.imagekit.io/qss3mmw4a/E-commerce/6.jpg?updatedAt=1749989568598",
    },
    
  ];

  return (
    <div className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-[#F4F4F4] px-16 max-xl:px-8 max-md:px-6 overflow-hidden py-24 max-lg:py-14 max-sm:py-10">
      <div className="flex justify-center items-center gap-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <IoIosStar key={index} className="size-6" />
          ))}
      </div>

      <div className="w-full max-w-[1250px] text-center">
        <h1 className="text-6xl max-md:text-3xl">
          "I love the variety of styles and the high-quality clothing on this web fashion site."
        </h1>
      </div>

      <h4 className="text-2xl">- Some & Co</h4>

      <motion.div
        initial={{ x: '0%' }}
        animate={{ x: '-50%' }}
        transition={{
          repeat: Infinity,
          duration: 10,
          ease: 'linear',
        }}
        className="flex gap-3 flex-nowrap pr-40 pl-20 max-md:flex-col max-md:pr-5"
      >
        {[...testimonial, ...testimonial].map((item, index) => (
          <div
            key={`${item.src}-${index}`}
            className="md:p-10 rounded-xl text-white flex-none"
          >
            <Image src={item.src} alt='' width={100} height={100} ></Image>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Brands;
