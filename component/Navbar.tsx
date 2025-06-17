'use client';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaAngleDown } from 'react-icons/fa';
import HeroButton from '@/app/_component/HeroButton';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY < lastScrollY.current || currentScrollY < 10);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = (
    <ul className="uppercase flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 text-[16px] font-medium tracking-wide">
      <li className="text-black hover:text-gray-600 transition">
        <Link onClick={() => setMobileMenuOpen(false)} href="/">Home</Link>
      </li>
      <li className="text-black hover:text-gray-600 transition">
        <Link onClick={() => setMobileMenuOpen(false)} href="/about">About</Link>
      </li>
      <li className="text-black hover:text-gray-600 transition">
        <Link onClick={() => setMobileMenuOpen(false)} href="/contact">Contact</Link>
      </li>

      {/* Dropdown */}
      <li
        className="relative text-black hover:text-gray-600 transition cursor-pointer"
        onMouseEnter={() => !mobileMenuOpen && setPagesOpen(true)}
        onMouseLeave={() => !mobileMenuOpen && setPagesOpen(false)}
        onClick={() => mobileMenuOpen && setPagesOpen(!pagesOpen)}
      >
        <span className="flex items-center gap-2 group">
          Categories <FaAngleDown className="transition duration-200 group-hover:rotate-180" />
        </span>

        <AnimatePresence>
          {pagesOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute ${
                mobileMenuOpen ? 'relative mt-2' : 'top-full left-0 mt-2'
              } bg-white border shadow-xl text-gray-800 rounded-md w-52 z-50 overflow-hidden`}
            >
              <li className="px-4 py-2 hover:bg-gray-100 transition">
                <Link href="/all_product" onClick={() => setMobileMenuOpen(false)}>Women</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 transition">
                <Link href="/all_product" onClick={() => setMobileMenuOpen(false)}>Men</Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100 transition">
                <Link href="/all_product" onClick={() => setMobileMenuOpen(false)}>Kids</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </ul>
  );

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 md:px-16 py-3 bg-white/70 backdrop-blur-xl shadow-md"
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl md:text-3xl font-bold text-black tracking-tight">
          
            Serene.
          
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">{navLinks}</div>

        {/* Mobile Toggle */}
        <div className="md:hidden z-50">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? (
              <FiX className="text-3xl text-black" />
            ) : (
              <FiMenu className="text-3xl text-black" />
            )}
          </button>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <HeroButton/>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col md:hidden bg-white rounded-xl mt-4 p-4 gap-4"
          >
            {navLinks}
            <HeroButton/>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
