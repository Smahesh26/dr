"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react"; // Import arrow icon

const videos = [
  {
    title: "AI in Medical Diagnosis",
    image: "https://i.ytimg.com/vi/kqQLaNDGQ3g/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=xyz1",
    tags: ["AI", "Radiology", "Deep Learning", "Neural Networks"],
  },
  {
    title: "Advanced Surgical Robotics",
    image: "https://i.ytimg.com/vi/Hs-lhso2t2c/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=xyz2",
    tags: ["Robotics", "Minimally Invasive", "Surgery Tech", "Healthcare AI"],
  },
  {
    title: "Blockchain in Healthcare",
    image: "https://i.ytimg.com/vi/Dwps6oKIHyk/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=xyz3",
    tags: ["Blockchain", "Health Data Security", "Decentralization"],
  },
  {
    title: "Cybersecurity in Hospitals",
    image: "https://i.ytimg.com/vi/nh4Ms9_DEVI/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=xyz4",
    tags: ["Cybersecurity", "HIPAA Compliance", "Medical Data Protection"],
  },
];

const New = () => {
  return (
    <div className="w-full bg-white py-16 px-6 font-[Poppins]">
      <h2 className="text-4xl text-black font-bold text-center mb-10">
        Latest Videos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {videos.map((video, index) => (
          <motion.a
            key={index}
            href={video.url}
            target="_blank"
            className="relative rounded-2xl overflow-hidden group p-4 bg-white shadow-lg transition-all duration-500 border-2 border-transparent 
            hover:shadow-[0_0_20px_#41ab3c] before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-r before:from-[#41ab3c] before:to-[#0c97a5] before:blur-md before:opacity-50 before:transition-opacity before:duration-500 hover:before:opacity-100"
            whileHover={{ scale: 1.05 }}
          >
            {/* Image & Tags (Hidden on Hover) */}
            <div className="relative w-full h-48 rounded-lg overflow-hidden transition-opacity duration-500 group-hover:opacity-0">
              <Image
                src={video.image}
                alt={video.title}
                layout="fill"
                objectFit="cover"
              />
            </div>

            {/* Tags (Hidden on Hover) */}
            <div className="flex flex-wrap mt-3 gap-2 transition-opacity duration-500 group-hover:opacity-0">
              {video.tags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-[#41ab3c] to-[#0c97a5] text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Video Title */}
            <h3 className="text-black text-lg font-bold mt-4 text-center transition-all group-hover:text-white">
              {video.title}
            </h3>

            {/* Gradient Overlay on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-[#41ab3c] to-[#0c97a5] flex items-center justify-center rounded-2xl">
              <h3 className="text-white text-2xl font-bold text-center underline transition-all">
                {video.title}
              </h3>
              <ArrowRight className="ml-3 text-white w-8 h-8 transition-transform duration-500 group-hover:translate-x-2" />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default New;
