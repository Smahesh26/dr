"use client";
import { motion } from "framer-motion";
import { FaStethoscope, FaPills, FaHospital } from "react-icons/fa"; // Medical Icons

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      {/* ECG Animation */}
      <motion.div
        className="w-40 h-10 bg-no-repeat bg-contain"
        style={{ backgroundImage: "url('/ecg-line.gif')" }} // ECG animation
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 50, opacity: 1 }}
        transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.5 }}
      ></motion.div>

      {/* Medical Icons - Appearing Sequentially */}
      <div className="flex gap-6 mt-6 text-[#41ab3c] text-5xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <FaStethoscope />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          <FaPills />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2, delay: 0.5 }}
        >
          <FaHospital />
        </motion.div>
      </div>

      {/* Heart Beat Animation */}
      {/* <motion.img
        src="/heart-icon.png" // Heart icon
        alt="Heart"
        className="w-16 h-16 mt-4"
        animate={{ scale: [1, 1.4, 1], opacity: [1, 0.7, 1] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
      /> */}

      {/* Loading Text */}
      {/* <motion.p
        className="mt-4 text-lg font-semibold"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ repeat: Infinity, duration: 1 }}
      >
        Loading...
      </motion.p> */}
    </div>
  );
};

export default Preloader;
