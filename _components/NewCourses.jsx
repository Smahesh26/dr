"use client";
import { motion } from "framer-motion";
import { 
  FaBrain, FaFlask, FaHeartbeat, FaHospital, FaPills, FaMicroscope, FaDna, FaStethoscope, 
  FaUserMd, FaLungs, FaEye, FaDiagnoses, FaBone, FaBaby, FaUserInjured, FaClinicMedical 
} from "react-icons/fa";
import { FaEarListen } from "react-icons/fa6";
import CustomCursor from "./CustomCursor"; 

const courses = [
  { name: "Anatomy", icon: <FaBrain /> },
  { name: "Biochemistry", icon: <FaFlask /> },
  { name: "Physiology", icon: <FaHeartbeat /> },
  { name: "Community Medicine", icon: <FaHospital /> },
  { name: "Pharmacology", icon: <FaPills /> },
  { name: "Pathology", icon: <FaMicroscope /> },
  { name: "Microbiology", icon: <FaDna /> },
  { name: "Forensic Medicine", icon: <FaStethoscope /> },
  { name: "Clinical Postings", icon: <FaUserMd /> },
  { name: "OPD", icon: <FaLungs /> },
  { name: "ENT", icon: <FaEarListen /> },
  { name: "Ophthalmology", icon: <FaEye /> },
  { name: "Psychiatry", icon: <FaDiagnoses /> },
  { name: "Dermatology", icon: <FaBone /> },
  { name: "Pediatrics", icon: <FaBaby /> },
  { name: "Anesthesiology", icon: <FaUserInjured /> },
  { name: "Orthopaedics", icon: <FaBone /> },
  { name: "Obstetrics & Gynaecology", icon: <FaClinicMedical /> },
];

const ExploreCourses = () => {
  return (
    <div className="w-full py-16 bg-gradient-to-r from-[#0c97a5] to-[#41ab3c] text-white text-center">
      <CustomCursor />
      <h2 className="text-4xl font-bold mb-12 text-white">Explore Courses</h2>

      {/* Grid Layout with 7 Columns per Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-10">
        {courses.map((course, index) => (
          <motion.div 
            key={index} 
            className="flex items-center bg-white text-black p-2 rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 relative"
          >
            {/* Icon with Inner Glow */}
            <div className="relative flex items-center justify-center w-10 h-10 mr-2">
              <motion.div
                className="absolute w-full h-full rounded-full"
                style={{
                  background: "rgba(65, 171, 60, 0.2)",
                  boxShadow: "0px 0px 8px rgba(65, 171, 60, 0.7), 0px 0px 12px rgba(12, 151, 165, 0.9)",
                }}
              ></motion.div>
              <div className="text-xl text-[#41ab3c] drop-shadow-[0_0_6px_rgba(65,171,60,0.8)] z-10">
                {course.icon}
              </div>
            </div>
            {/* Course Name */}
            <h3 className="text-lg font-semibold tracking-wide">{course.name}</h3>
          </motion.div>
        ))}
        
      </div>
    </div>
    
  );
};

export default ExploreCourses;
