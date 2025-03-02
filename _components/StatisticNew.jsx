"use client";
import { motion } from "framer-motion";

const StatisticsNew = () => {
  return (
    <section className="py-16 bg-white text-black text-center relative overflow-hidden">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#e0f7fa,#a5d6a7)] opacity-20 blur-3xl"></div>

      {/* Section Heading */}
      <motion.h2 
        className="text-5xl font-extrabold text-black mb-10 relative z-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-[#41ab3c] drop-shadow-[0_0_15px_#41ab3c]">Our</span> Statistics
      </motion.h2>

      {/* Stats Grid */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
        {[
          { label: "Courses", value: "50+" },
          { label: "Students", value: "10,000+" },
          { label: "Tutors", value: "100+" },
          { label: "Years Experience", value: "5+" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            className="p-4 rounded-xl bg-white shadow-md text-black text-lg font-medium border border-[#41ab3c] relative overflow-hidden"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 25px #41ab3c" }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated Glow Overlay */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-[#41ab3c] to-[#0c97a5] opacity-10 blur-3xl" 
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            ></motion.div>

            <h3 className="text-3xl font-bold text-[#41ab3c] drop-shadow-[0_0_10px_#41ab3c]">
              {stat.value}
            </h3>
            <p className="mt-1 text-base">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default StatisticsNew;
