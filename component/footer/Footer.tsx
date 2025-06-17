'use client';
import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import FooterLinks from './FooterLinks';

// ✅ FIXED fadeUp variant using 'easeOut' instead of array
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut', // ✅ this fixes the TS error
    },
  },
};

function Footer() {
  return (
    <div className="w-full bg-black text-white pt-16 pb-6 px-16 max-xl:px-8 max-md:px-6 overflow-hidden">
      <motion.div
        className="w-full flex flex-wrap justify-between items-start gap-y-10"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {/* Logo & Socials */}
        <motion.div className="w-full md:w-[45%]" variants={fadeUp}>
          <h2 className="font-sans text-3xl">Logo</h2>
          <p className="text-xl py-5">Discover timeless pieces for effortless style.</p>
          <div className="flex gap-4">
            <FooterLinks icon={<FaFacebookF />} />
            <FooterLinks icon={<FaInstagram />} />
            <FooterLinks icon={<FaTwitter />} />
          </div>
        </motion.div>

        {/* More Info */}
        <motion.div className="w-[48%] md:w-[15%]" variants={fadeUp}>
          <h2 className="font-sans text-2xl mb-3">More Info</h2>
          <div className="flex flex-col gap-2">
            <HoverLink href="/">Home</HoverLink>
            <HoverLink href="/about">About</HoverLink>
            <HoverLink href="/contact">Contact</HoverLink>
          </div>
        </motion.div>

        {/* Categories */}
        <motion.div className="w-[48%] md:w-[15%]" variants={fadeUp}>
          <h2 className="font-sans text-2xl mb-3">Categories</h2>
          <div className="flex flex-col gap-2">
            <HoverLink href="/all_product">Men</HoverLink>
            <HoverLink href="/all_product">Women</HoverLink>
            <HoverLink href="/all_product">Kids</HoverLink>
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div className="w-full md:w-[20%]" variants={fadeUp}>
          <h2 className="font-sans text-2xl mb-3">Contact</h2>
          <div className="flex flex-col gap-2">
            <HoverLink href="/">2810 N Church St PMB 48572, Wilmington, Delaware</HoverLink>
            <HoverLink href="/">+1 123 456-7890</HoverLink>
            <HoverLink href="/">info@example.com</HoverLink>
          </div>
        </motion.div>
      </motion.div>

      <hr className="my-7 border-white" />

      {/* Bottom Section */}
      <motion.div
        className="flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h4 className="text-gray-400">Copyright © 2025 Tuaha.</h4>
        <h4 className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
          Privacy Policy - Cookie Policy
        </h4>
      </motion.div>
    </div>
  );
}

export default Footer;

const HoverLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link
    href={href}
    className="transition-all duration-300 hover:translate-x-1 hover:text-white text-[#cac8c8]"
  >
    {children}
  </Link>
);
