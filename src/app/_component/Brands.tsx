'use client';
import React from 'react';
import { IoIosStar } from 'react-icons/io';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { RiJavascriptFill, RiNextjsFill, RiReactjsFill, RiTailwindCssFill } from 'react-icons/ri';

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
    <div className="w-full h-screen max-md:h-full flex flex-col gap-8 justify-center items-center bg-[#F4F4F4] px-16 max-xl:px-8 max-md:px-6 overflow-hidden py-24 max-lg:py-14 max-sm:py-10">
      <div className="flex justify-center items-center gap-2">
        {Array(5)
          .fill(null)
          .map((_, index) => (
            <IoIosStar key={index} className="size-6" />
          ))}
      </div>

      <div className="w-full max-w-[1250px] text-center">
        <h1 className="text-6xl max-md:text-3xl">
          I love the variety of styles and the high-quality clothing on this web fashion site.
        </h1>
      </div>

      <h4 className="text-2xl">- Some & Co</h4>

      <div className="overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent,black_50%,black_50%,transparent)] py-4 mx-auto w-[50%] max-lg:w-full mt-5">
        <div className="animate-marquee flex gap-5">
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiReactjsFill className="text-7xl" />
            React
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiTailwindCssFill className="text-7xl" />
            Tailwind CSS
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiJavascriptFill className="text-7xl" />
            JavaScript
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiNextjsFill className="text-7xl" />
            Next.Js
          </span>
          {/* row2 */}
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiReactjsFill className="text-7xl" />
            React
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiTailwindCssFill className="text-7xl" />
            Tailwind CSS
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiJavascriptFill className="text-7xl" />
            JavaScript
          </span>
          <span className="mx-4 text-lg flex items-center gap-2">
            <RiNextjsFill className="text-7xl" />
            Next.Js
          </span>
        </div>
      </div>
    </div>
  );
};

export default Brands;
