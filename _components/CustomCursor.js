"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);
  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50"
      animate={{
        x: mousePosition.x - 30,
        y: mousePosition.y - 30,
      }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 10,
      }}
    >
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Crystal Heart */}
        <path
          d="M30 55L10 35C2 25 5 10 20 5c7-2 10 3 10 3s3-5 10-3c15 5 18 20 10 30L30 55z"
          fill="url(#glowGradient)"
          stroke="white"
          strokeWidth="2"
          filter="url(#glow)"
        />
        
        {/* Geometric Plus Sign */}
        <polygon
          points="27,20 33,20 33,27 40,27 40,33 33,33 33,40 27,40 27,33 20,33 20,27 27,27"
          fill="white"
          stroke="cyan"
          strokeWidth="1"
        />

        {/* Glow Effect */}
        <defs>
          <radialGradient id="glowGradient" cx="0.5" cy="0.5" r="0.8">
            <stop offset="0%" stopColor="#00eaff" stopOpacity="1" />
            <stop offset="100%" stopColor="#002244" stopOpacity="0.8" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </motion.div>
  );
};

export default CustomCursor;
