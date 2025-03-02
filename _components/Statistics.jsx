import { motion } from "framer-motion";
import { Users, BookOpen, Smile, Award, Clock, Globe } from "lucide-react";

const statsData = [
  {
    icon: <Users size={40} className="text-white" />,
    value: "3,192+",
    label: "Successfully Trained",
  },
  {
    icon: <BookOpen size={40} className="text-white" />,
    value: "15,485+",
    label: "Classes Completed",
  },
  {
    icon: <Smile size={40} className="text-white" />,
    value: "97.55%",
    label: "Satisfaction Rate",
  },
  {
    icon: <Award size={40} className="text-white" />,
    value: "4.9/5",
    label: "Expert Rating",
  },
  {
    icon: <Clock size={40} className="text-white" />,
    value: "50K+ Hrs",
    label: "Learning Content",
  },
  {
    icon: <Globe size={40} className="text-white" />,
    value: "120+ Countries",
    label: "Worldwide Reach",
  },
];

export default function StatisticsCard() {
  return (
    <section
      className="py-16"
      style={{
        background: "radial-gradient(circle, rgba(12,151,165,0.7) 0%, rgba(33,65,35,0.9) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <h1 
          className="text-4xl font-bold text-white mb-8 mt-6"
          style={{ fontFamily: "Nunito" }}
        >
          📊 Performance Growth Statistics
        </h1>

        {/* Description */}
        <p
          className="text-lg text-gray-300 mb-12 max-w-lg mx-auto"
          style={{ fontFamily: "Poppins, sans-serif" }}
        >
          Empowering learning journeys with trusted medical insights and engaged learners worldwide.
        </p>

        {/* Stats Section - Now in Two Rows */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 + index * 0.2 }}
              className="flex flex-col items-center space-y-3"
            >
              {/* Icon with radial background */}
              <div className="p-4 rounded-full bg-gradient-to-br from-green-400 to-teal-500 shadow-md">
                {stat.icon}
              </div>
              
              {/* Stat Value */}
              <h2
                className="text-2xl font-bold text-white"
                style={{ fontFamily: "Nunito" }}
              >
                {stat.value}
              </h2>

              {/* Label */}
              <p className="text-gray-300 text-sm" style={{ fontFamily: "Poppins, sans-serif" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
