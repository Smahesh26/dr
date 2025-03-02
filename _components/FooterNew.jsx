"use client";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const FooterNew = () => {
  return (
    <footer
      className="relative text-white py-16 bg-cover bg-center"
      style={{
        backgroundImage: "url('https://media.istockphoto.com/id/2166181501/vector/abstract-geometric-background-with-hexagons-shape-pattern-for-banner-or-website-header.jpg?s=612x612&w=0&k=20&c=LKDljN7ovX6NXu9uDIRaRsWRXHV_CtsHVYES4Dc9Lhw=')",
      }}
    >
      {/* Dark Overlay */}
      {/* <div className="absolute inset-0 bg-black bg-opacity-80"></div> */}

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Column 1: Logo & About */}
        <div>
          <h2 className="text-3xl font-bold text-black drop-shadow-[0_0_15px_#41ab3c]">
            Dr.Bhanu Prakash
          </h2>
          <p className="mt-4 text-gray-700 text-sm">
            Empowering the future of medical education with cutting-edge technology.
          </p>
          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <FaFacebookF className="text-[#41ab3c] hover:text-white transition duration-300 text-xl cursor-pointer" />
            <FaTwitter className="text-[#41ab3c] hover:text-white transition duration-300 text-xl cursor-pointer" />
            <FaInstagram className="text-[#41ab3c] hover:text-white transition duration-300 text-xl cursor-pointer" />
            <FaLinkedinIn className="text-[#41ab3c] hover:text-white transition duration-300 text-xl cursor-pointer" />
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-black drop-shadow-[0_0_15px_#41ab3c]">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><Link href="/about" className="text-gray-700 hover:text-[#41ab3c] transition">About Us</Link></li>
            <li><Link href="/courses" className="text-gray-700 hover:text-[#41ab3c] transition">Courses</Link></li>
            <li><Link href="/blog" className="text-gray-700 hover:text-[#41ab3c] transition">Blog</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-[#41ab3c] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact & Address */}
        <div>
          <h3 className="text-xl font-semibold text-black drop-shadow-[0_0_15px_#41ab3c]">Contact Us</h3>
          <p className="mt-4 text-gray-700 text-sm">123 MedStreet, Health City, NY 10001</p>
          <p className="mt-2 text-gray-700 text-sm">Email: support@medlearn.com</p>
          <p className="mt-2 text-gray-700 text-sm">Phone: +1 234 567 890</p>
        </div>

        {/* Column 4: Newsletter Subscription */}
        <div>
          <h3 className="text-xl font-semibold text-black drop-shadow-[0_0_15px_#41ab3c]">Subscribe</h3>
          <p className="mt-4 text-gray-700 text-sm">Stay updated with the latest in medical education.</p>
          <div className="mt-4 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-lg bg-gray-800 text-white border border-[#41ab3c] focus:outline-none"
            />
            <button className="bg-[#41ab3c] text-black px-4 py-2 rounded-r-lg hover:bg-white hover:text-[#41ab3c] transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} Fotino. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterNew;
