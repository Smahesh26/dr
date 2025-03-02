import { FaBolt, FaChalkboardTeacher, FaAccessibleIcon, FaUserGraduate } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      title: "Interactive Learning Tools",
      description: "Incorporating features like quizzes, simulations, and multimedia content that actively engage students.",
      icon: <FaChalkboardTeacher className="text-teal-500 w-12 h-12" />,
    },
    {
      title: "Easy Flexible Access",
      description: "Incorporating features like quizzes, simulations, and multimedia content that actively engage students.",
      icon: <FaAccessibleIcon className="text-teal-500 w-12 h-12" />,
    },
    {
      title: "Personalized Learning Paths",
      description: "Incorporating features like quizzes, simulations, and multimedia content that actively engage students.",
      icon: <FaUserGraduate className="text-teal-500 w-12 h-12" />,
    },
  ];

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-4">
          <span className="flex items-center gap-2 px-4 py-4 bg-white shadow-md rounded-full text-gray-600 text-sm font-medium">
            <FaBolt className="text-teal-500" /> Our Features
          </span>
        </div>
        <h2 className="text-3xl font-bold text-gray-900 font-nunito py-2">
          Online Education That Improves You
        </h2>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-lg text-center relative"
            >
              {/* Feature Icon */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-4">
                {feature.icon}
              </div>

              {/* Feature Title & Description */}
              <h3 className="text-xl font-semibold text-gray-900 mt-10 font-nunito">
                {feature.title}
              </h3>
              <p className="text-gray-600 mt-2 font-opensans">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
