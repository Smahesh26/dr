"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Nunito, Open_Sans } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800"] });
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`absolute top-0 left-0 w-full z-50 ${openSans.className}`}>
      <nav className="container mx-auto flex items-center justify-between px-6 lg:px-10 py-4">
        
        {/* Logo */}
        <div>
          <Link href="/">
            <Image alt="Logo" src="/coffee/doctor.png" width={120} height={80} />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-md font-semibold text-white hover:text-[#0c97a5]">Home</Link>
          <Link href="/aboutus" className="text-md font-semibold text-white hover:text-[#0c97a5]">About Us</Link>
          <Link href="/courses" className="text-md font-semibold text-white hover:text-[#0c97a5]">Our Courses</Link>
          <Link href="/Contactus" className="text-md font-semibold text-white hover:text-[#0c97a5]">Contact Us</Link>
        </div>

        {/* Get Started Button */}
        <div className="hidden md:block">
  <Link href="/login">
    <button className="bg-[#0c97a5] text-white p-3 px-5 rounded-md shadow-lg hover:scale-105 transition-all">
      Get Started
    </button>
  </Link>
</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-[#0c97a5]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white w-full shadow-lg py-4 absolute top-full left-0">
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

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen">
      {/* Background Video */}
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted playsInline>
        <source src="/coffee/video2.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Banner Text Overlay */}
      <div className={`absolute top-[40%] left-6 lg:left-[8%] text-white z-20 max-w-[600px] ${nunito.className}`}>
        <h1 className="text-5xl lg:text-6xl font-bold leading-[1.3]">
          High-Quality <br /> Medical Video Tutorials
        </h1>
        <p className={`text-lg mt-3 ${openSans.className}`} style={{ color: "#f5f5f5" }}>
          Learn from experts in the field of medicine with in-depth video lectures and practical insights.
        </p>
        <button className="mt-5 bg-[#0c97a5] text-white p-3 px-5 rounded-md shadow-lg hover:scale-105 transition-all text-lg">
          Get Started
        </button>
      </div>

      {/* Transparent Header */}
      <Header />
    </div>
  );
};

export default HeroSection;
