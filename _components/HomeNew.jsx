"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  { src: "/videos/video1.mp4", title: "Master Your Skills", subtitle: "Learn from the best experts." },
  { src: "/videos/video2.mp4", title: "Empower Your Future", subtitle: "Upgrade with interactive courses." },
  { src: "/videos/video3.mp4", title: "Transform Your Career", subtitle: "Achieve new heights with knowledge." },
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    let lastIndex = 0;
    
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: "top center", // Trigger when top reaches the center of viewport
      end: "bottom top",
      onUpdate: (self) => {
        let progress = self.progress * videos.length;
        let newIndex = Math.floor(progress);
        
        if (newIndex !== lastIndex) {
          lastIndex = newIndex;
          setCurrentIndex(newIndex % videos.length);
        }
      },
    });
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Video Slider */}
      <AnimatePresence mode="wait">
        <motion.video
          key={videos[currentIndex].src}
          src={videos[currentIndex].src}
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay for text visibility */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Hero Content - Aligned Left */}
      <div className="absolute top-1/2 left-12 transform -translate-y-1/2 text-white max-w-lg">
        <motion.h1
          className="text-4xl sm:text-6xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {videos[currentIndex].title}
        </motion.h1>
        <motion.p
          className="mt-4 text-lg sm:text-xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {videos[currentIndex].subtitle}
        </motion.p>

        {/* Glowing Explore More Button */}
        <motion.button
          className="mt-6 px-8 py-3 text-lg font-semibold text-white rounded-lg 
                     bg-gradient-to-r from-[#41ab3c] to-[#0c97a5] shadow-lg 
                     relative overflow-hidden flex items-center gap-2"
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
          <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 opacity-40 blur-2xl rounded-full"></div>
          <div className="absolute -top-1 left-1 w-full h-full bg-white/10 opacity-30 rounded-lg blur-lg"></div>
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

      {/* Navigation Dots */}
      <div className="absolute bottom-6 left-12 flex space-x-3">
        {videos.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "bg-[#41ab3c] scale-125 shadow-[0px_0px_10px_#41ab3c]" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
            whileHover={{ scale: 1.3 }}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
