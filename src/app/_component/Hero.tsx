"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Bg from "../../../public/Bg.png";
import {
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  useSpring,
} from "framer-motion";
import HeroButton from "./HeroButton";
import { FaArrowRight } from "react-icons/fa";

function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollScale = useTransform(scrollY, [0, 500], [1.1, 1.5]); 
  const smoothScale = useSpring(scrollScale, { damping: 20, stiffness: 120 });

  const x = useTransform(mouseX, [0, windowSize.width], [-20, 20]);
  const y = useTransform(mouseY, [0, windowSize.height], [-20, 20]);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-full h-screen pt-4">
        <div className="relative bg-black w-full h-full rounded-3xl overflow-hidden">
          <motion.div
            style={{
              x,
              y,
              scale: smoothScale,
            }}
            className="will-change-transform"
          >
            <Image
              src={Bg}
              width={1000}
              height={1000}
              alt="Background-image"
              className="w-full max-md:h-screen max-md:object-cover max-md:scale-150"
            />
          </motion.div>
          <motion.div
            className="absolute left-7 top-7 text-7xl text-white max-lg:text-5xl max-md:text-4xl max-sm:text-3xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          >
            <h1>STYLE REDEFINED, EFFORTLESSLY YOURS</h1>
          </motion.div>
          <motion.div
            className="absolute left-7 bottom-7 flex max-sm:flex-col gap-4"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <HeroButton />
            <div className="flex justify-center items-center gap-3 w-36 h-12 rounded-full group cursor-pointer">
              <h4 className="font-bold text-md text-white">See Products</h4>
              <FaArrowRight className="size-4 text-white -rotate-45 group-hover:rotate-0 transition duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
