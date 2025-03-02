"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const AboutUs = () => {
  return (
    <section
      className="w-full flex items-center justify-center py-20 text-black relative"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/premium-vector/hand-painted-watercolor-pastel-abstract-shapes-background_278222-7647.jpg?uid=R89578248&ga=GA1.1.77912048.1734776105&semt=ais_hybrid')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Soft Overlay for Readability */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-sm"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 relative z-10">
        {/* Left Side - Image */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://dr-livid.vercel.app/_next/image?url=%2Fcoffee%2Fabout.jpg&w=1200&q=75"
            alt="About Us"
            className="w-full max-w-3xl rounded-lg shadow-xl"
          />
        </div>

        {/* Right Side - Text */}
        <div className="md:w-1/2 p-8">
          <h3 className="text-xl font-semibold text-green-500 uppercase tracking-wide">
            About Us
          </h3>
          <div className="w-20 h-1 bg-green-400 my-4"></div>
          <h2 className="text-5xl font-extrabold">Learn with Bhanu Prakash</h2>
          <p className="mt-4 text-gray-900 text-lg leading-relaxed">
            Bhanu Prakash is dedicated to providing high-quality medical
            education with immersive learning experiences. Explore our courses
            and elevate your knowledge with interactive and cutting-edge
            resources.
          </p>

          {/* Animated Button */}
          <motion.button
            className="mt-6 px-8 py-4 text-lg font-semibold text-white rounded-xl 
             shadow-[0px_0px_25px_#41ab3c] transition-all duration-300 
             bg-gradient-to-r from-[#41ab3c] to-[#0c97a5] relative overflow-hidden flex items-center gap-2"
            animate={{
              scale: 1.05,
              boxShadow:
                "0px 0px 30px rgba(65, 171, 60, 0.8), 0px 0px 20px rgba(12, 151, 165, 0.7)",
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
              Explore More
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              >
                ➡️
              </motion.span>
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export { AboutUs };
