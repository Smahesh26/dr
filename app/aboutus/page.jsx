import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Info } from "lucide-react"; // Importing an icon for the "About Us" tag
import React from "react";
import { Open_Sans, Nunito } from "next/font/google";
import Header1 from "@/_components/Header1"; 
import Footer from "@/_components/Footer";
import FeaturesSection from "@/_components/Features";

// Font Instances
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800"] });

const About = () => {
  return (
    <>
      <Header1 />
      
      {/* About Dr. Bhanu Prakash Section */}
      <section className="bg-gray-50 py-16 mt-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            
            {/* Image Section */}
            <div className="relative" data-aos="fade-up" data-aos-duration="1600">
              <Image
                src="/coffee/bhanuprakashdr.png"
                width={600}
                height={500}
                className="object-cover rounded-lg shadow-xl"
                alt="Dr. Bhanu Prakash"
              />
            </div>

            {/* Content Section */}
            <div data-aos="fade-down" data-aos-duration="1600">
              
              {/* About Tag */}
              <div className="flex items-center gap-2 border border-gray-300 py-1 px-4 w-fit rounded-full text-[#0c97a5] text-sm font-semibold">
                <Info className="w-4 h-4 text-[#0c97a5]" />
                About Dr. Bhanu Prakash
              </div>

              {/* Hero Title */}
              <h1 className={`text-4xl font-extrabold mt-4 bg-gradient-to-r from-[#0c97a5] to-[#0f766e] text-transparent bg-clip-text ${nunito.className}`}>
                Innovating Medical Education <br /> One Animation at a Time
              </h1>

              {/* Stylish Quote */}
              <p className={`text-xl text-gray-600 mt-3 font-semibold ${openSans.className}`}>
                "Bridging the gap between science and understanding through powerful visuals."
              </p>

              {/* About Description */}
              <p className={`text-gray-500 mt-4 leading-relaxed ${openSans.className}`}>
                Dr. Bhanu Prakash is a pioneer in medical animation, dedicated to making complex
                medical concepts accessible through high-quality visuals. With a deep passion for
                medical education, he has transformed the way students and professionals learn
                through interactive and immersive animations.
              </p>

              {/* Key Achievements */}
              <div className={`mt-6 ${openSans.className}`}>
                <ul className="list-none space-y-3">
                  <li className="flex items-center gap-2 text-gray-700">
                    ✅ Over <strong>500+</strong> educational medical animations created.
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    ✅ <strong>1M+</strong> medical students & professionals benefited worldwide.
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    ✅ Trusted by <strong>top medical institutions</strong> for visual learning.
                  </li>
                </ul>
              </div>

              {/* Call to Action Button */}
              <Button className={`mt-6 px-6 py-3 rounded-md shadow-md transition-all text-lg font-medium ${nunito.className}`} style={{ backgroundColor: "#0c97a5", color: "#ffffff" }}>
                Contact us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* CTA Section */}
      <div className="mt-12 py-12 px-6 bg-white rounded-lg shadow-lg text-center">
        <h3 className={`text-2xl font-bold text-gray-900 ${nunito.className}`}>
          Ready to Elevate Your Learning?
        </h3>
        <p className={`text-lg text-gray-600 mt-3 ${openSans.className}`}>
          Join thousands of students who have transformed their careers with our expert-led courses. Don't miss out—start your journey today!
        </p>
        {/* CTA Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          <a href="/enroll" className="bg-[#0d9488] text-white py-3 px-6 rounded-lg font-bold transition hover:bg-[#0b8276]">
            Start Learning Today 🚀
          </a>
          <a href="/courses" className="bg-gray-200 text-gray-900 py-3 px-6 rounded-lg font-bold border-2 border-[#0d9488] transition hover:bg-gray-300">
            Explore Courses 📚
          </a>
          
        </div>
        <br />
      </div>

      <Footer />
    </>
  );
};

export default About;
