"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const Header1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-10 py-3">
        
        {/* Logo */}
        <div>
          <Link href="/">
            <Image alt="Logo" src="/coffee/doctor.png" width={120} height={80} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-md font-semibold text-black hover:text-[#0c97a5]">Home</Link>
          <Link href="/aboutus" className="text-md font-semibold text-black hover:text-[#0c97a5]">About Us</Link>
          <Link href="/courses" className="text-md font-semibold text-black hover:text-[#0c97a5]">Our Courses</Link>
          <Link href="/Contactus" className="text-md font-semibold text-black hover:text-[#0c97a5]">Contact Us</Link>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
  <Link href="/login">
    <button className="bg-[#0c97a5] text-white p-3 px-5 rounded-md shadow-lg hover:scale-105 transition-all">
      Get Started
    </button>
  </Link>
</div>

        {/* Mobile Menu Button (Black) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0c97a5]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-black" /> : <Menu size={28} className="text-black" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-lg py-4 absolute top-full left-0 z-40">
          <div className="flex flex-col space-y-3 items-center">
            <Link href="/" className="text-md font-semibold text-black hover:text-[#0c97a5]" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="/aboutus" className="text-md font-semibold text-black hover:text-[#0c97a5]" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link href="/courses" className="text-md font-semibold text-black hover:text-[#0c97a5]" onClick={() => setIsOpen(false)}>Our Courses</Link>
            <Link href="/Contactus" className="text-md font-semibold text-black hover:text-[#0c97a5]" onClick={() => setIsOpen(false)}>Contact Us</Link>
            <button className="bg-[#0c97a5] text-white p-3 px-5 rounded-md shadow-lg hover:scale-105 transition-all">
              Get Started
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header1;
