"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import HeroButton from "@/app/_component/HeroButton";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  const navLinks = (
    <ul className="uppercase flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-12 text-[17px]">
      <li className="text-black hover:text-black/75">
        <Link onClick={() => setMobileMenuOpen(false)} href="/">Home</Link>
      </li>
      <li className="text-black hover:text-black/75">
        <Link onClick={() => setMobileMenuOpen(false)} href="/about">About</Link>
      </li>
      <li className="text-black hover:text-black/75">
        <Link onClick={() => setMobileMenuOpen(false)} href="/contact">Contact us</Link>
      </li>
      {/* Dropdown */}
      <li
        className="relative text-black hover:text-black/75 cursor-pointer"
        onMouseEnter={() => !mobileMenuOpen && setPagesOpen(true)}
        onMouseLeave={() => !mobileMenuOpen && setPagesOpen(false)}
        onClick={() => mobileMenuOpen && setPagesOpen(!pagesOpen)}
      >
        <span>Categories</span>

        <AnimatePresence>
          {pagesOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`absolute ${
                mobileMenuOpen ? "relative mt-2" : "top-full -left-24 mt-2"
              } bg-zinc-500 text-white rounded-md shadow-lg py-2 w-60 z-50`}
            >
              <li className="px-4 py-2 hover:text-white/75">
                <Link href="/aboutus" onClick={() => setMobileMenuOpen(false)}>Women</Link>
              </li>
              <li className="px-4 py-2 hover:text-white/75">
               <Link href="/team" onClick={() => setMobileMenuOpen(false)}>Men</Link>
              </li>
              <li className="px-4 py-2 hover:text-white/75">
                 <Link href="/faq" onClick={() => setMobileMenuOpen(false)}>Kid&apos;s</Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </li>
    </ul>
  );

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(
        currentScrollY < lastScrollY.current || currentScrollY < 10
      );
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
      className="text-white fixed top-0 left-0 w-full z-40 backdrop-blur-2xl px-16 max-xl:px-8 max-md:px-6"
    >
      <div className="px-6 py-2 font">
        <div className="flex justify-between items-center relative">
          {/* Logo */}
          <Link href="/">
            <h1 className="text-black text-3xl">Logo</h1>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex">{navLinks}</div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-50">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? (
                <FiX className="text-black text-3xl" />
              ) : (
                <FiMenu className="text-black text-3xl" />
              )}
            </button>
          </div>

          <div className="hidden md:block">
            <HeroButton />
          </div>
        </div>

        {/* Mobile Menu Content */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="mt-4 flex flex-col gap-6 md:hidden bg-white p-3 rounded-lg"
            >
              {navLinks}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;