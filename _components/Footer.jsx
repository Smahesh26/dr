import Image from "next/image";
import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Open_Sans, Nunito } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800"] });

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#0d9488] to-[#1f2937] text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        {/* Logo & Tagline */}
        <div>
          <Image
            alt="Dr. Bhanu Prakash"
            src="/coffee/doctor.png"
            width={150}
            height={80}
          />
          <p className={`text-gray-300 mt-3 leading-relaxed ${openSans.className}`}>
            Where your vision goes beyond.
          </p>
        </div>

        {/* Important Links */}
        <div>
          <h3 className={`text-xl font-bold text-white ${nunito.className}`}>
            Important Links
          </h3>
          <nav className="mt-5 flex flex-col gap-3">
            <a href="/" className={`text-gray-300 hover:text-[#f3f4f6] transition duration-300 ${openSans.className}`}>
              Home
            </a>
            <a href="/about" className={`text-gray-300 hover:text-[#f3f4f6] transition duration-300 ${openSans.className}`}>
              About Us
            </a>
            <a href="/courses" className={`text-gray-300 hover:text-[#f3f4f6] transition duration-300 ${openSans.className}`}>
              Courses
            </a>
            <a href="/contact" className={`text-gray-300 hover:text-[#f3f4f6] transition duration-300 ${openSans.className}`}>
              Contact Us
            </a>
          </nav>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className={`text-xl font-bold text-white ${nunito.className}`}>
            Stay Updated!
          </h3>
          <p className={`text-gray-300 mt-2 ${openSans.className}`}>
            Subscribe to get our latest updates and offers.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f3f4f6]"
            />
            <button
              type="submit"
              className="mt-3 w-full bg-[#f3f4f6] text-[#1f2937] font-bold p-3 rounded-lg shadow-md hover:bg-[#e5e7eb] transition-all"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Address */}
        <div>
          <h3 className={`text-xl font-bold text-white ${nunito.className}`}>
            Contact Us
          </h3>
          <p className={`mt-4 text-gray-300 ${openSans.className}`}>
            📍 123 Medical Street, City, Country
          </p>
          <p className={`text-gray-300 ${openSans.className}`}>📞 (123) 456-7890</p>
          <p className={`text-gray-300 ${openSans.className}`}>
            📧 contact@drbhanuprakash.com
          </p>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="mt-10 flex justify-center gap-6">
        <a href="#" className="text-gray-300 hover:text-[#f3f4f6] transition duration-300">
          <Facebook size={28} />
        </a>
        <a href="#" className="text-gray-300 hover:text-[#f3f4f6] transition duration-300">
          <Twitter size={28} />
        </a>
        <a href="#" className="text-gray-300 hover:text-[#f3f4f6] transition duration-300">
          <Instagram size={28} />
        </a>
        <a href="#" className="text-gray-300 hover:text-[#f3f4f6] transition duration-300">
          <Linkedin size={28} />
        </a>
      </div>

      {/* Footer Bottom */}
      <div className={`border-t border-gray-600 mt-12 pt-6 text-center text-sm text-gray-300 ${openSans.className}`}>
        <p>© 2025 Dr. Bhanu Prakash. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
