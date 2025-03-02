"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

const HeaderNew = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="px-6 sm:px-8 lg:px-10 flex justify-between items-center h-16 w-full">
        {/* Logo - Left Side */}
        <a href="#" className="text-xl font-bold">
          Dr.Bhanu Prakash
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#"
            className={`hover:text-[#41ab3c] transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Home
          </a>
          <a
            href="#"
            className={`hover:text-[#41ab3c] transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            About Us
          </a>
          <a
            href="#"
            className={`hover:text-[#41ab3c] transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Contact Us
          </a>
          <a
            href="#"
            className={`hover:text-[#41ab3c] transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Courses
          </a>
          <a
            href="#"
            className={`hover:text-[#41ab3c] transition ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Login
          </a>
        </nav>

        {/* Search Bar - Hidden on Mobile */}
        <div
          className={`relative hidden md:flex items-center w-64 rounded-full px-4 py-2 border transition-all duration-300 ${
            isScrolled ? "bg-white text-black border-gray-400" : "bg-black text-white border-[#41ab3c]"
          }`}
        >
          <FaSearch
            className={`text-lg mr-3 transition-all ${isScrolled ? "text-gray-500" : "text-[#41ab3c]"}`}
          />
          <input
            type="text"
            placeholder="Search..."
            className={`w-full bg-transparent outline-none placeholder-gray-400 transition-all ${
              isScrolled ? "text-black" : "text-white"
            }`}
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden transition-all ${isScrolled ? "text-black" : "text-white"}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className={`fixed top-16 left-0 w-full bg-[#0c0c0c] text-white transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center space-y-6 py-6">
          <a href="#" className="text-lg hover:text-[#41ab3c] transition">
            Home
          </a>
          <a href="#" className="text-lg hover:text-[#41ab3c] transition">
            About Us
          </a>
          <a href="#" className="text-lg hover:text-[#41ab3c] transition">
            Contact Us
          </a>
          <a href="#" className="text-lg hover:text-[#41ab3c] transition">
            Courses
          </a>

          {/* Get Started Button - Inside Mobile Menu */}
          <motion.button
            className="mt-4 px-6 py-2 text-lg font-semibold text-white rounded-lg 
                      shadow-[0px_0px_25px_#41ab3c] transition-all duration-300 
                      bg-gradient-to-r from-[#41ab3c] to-[#0c97a5] relative overflow-hidden flex items-center gap-2"
            animate={{
              scale: 1.05,
              boxShadow: "0px 0px 30px rgba(65, 171, 60, 0.8), 0px 0px 20px rgba(12, 151, 165, 0.7)",
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 1.5,
            }}
          >
            {/* Permanent Glowing Light Around Button */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-40 blur-2xl rounded-full"></div>

            {/* Soft Reflection Layer for 3D Look */}
            <div className="absolute -top-1 left-1 w-full h-full bg-white/10 opacity-30 rounded-lg blur-lg"></div>

            {/* Button Text with Animated Arrow */}
            <span className="relative flex items-center gap-2">
              Get Started
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              >
                ➡️
              </motion.span>
            </span>
          </motion.button>
        </div>
      </motion.div>
    </header>
  );
};

export default HeaderNew;
