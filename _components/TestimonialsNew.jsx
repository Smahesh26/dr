"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Dr. John Doe",
    image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    feedback: "Amazing platform! The best learning experience ever.",
  },
  {
    name: "Dr. Sarah Lee",
    image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    feedback: "A revolutionary way to learn medical concepts interactively!",
  },
  {
    name: "Dr. Mark Smith",
    image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    feedback: "Engaging, informative, and highly beneficial for students.",
  },
  {
    name: "Dr. Emily Watson",
    image: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    feedback: "Simply the best! I highly recommend this to all students.",
  },
];

const TestimonialsNew = () => {
  return (
    <section className="relative py-24 bg-gradient-to-r from-[#e0f7fa] to-[#e0ffe0] text-gray-800 text-center">
      {/* Glowing Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,#0c97a5,#41ab3c)] opacity-10 blur-[150px]"></div>

      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-16 relative z-10 text-gray-900"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <span className="text-[#41ab3c] drop-shadow-[0_0_20px_#41ab3c]">
          Our
        </span>{" "}
        Testimonials
      </motion.h2>

      {/* Swiper */}
      <div className="max-w-6xl mx-auto px-10 lg:px-20">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 }, // Two testimonials per row from medium screens
          }}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true, el: ".swiper-pagination" }}
          modules={[Autoplay, Pagination]}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="p-8 rounded-2xl bg-white bg-opacity-90 backdrop-blur-xl shadow-lg border border-gray-200 text-gray-800 flex items-center gap-6 hover:shadow-2xl"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 30px #41ab3c" }}
              >
                {/* Image */}
                <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-[#41ab3c]">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Testimonial Text */}
                <div>
                  <h3 className="text-xl font-bold text-[#41ab3c]">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm mt-2 text-gray-600">{testimonial.feedback}</p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="swiper-pagination mt-8"></div>
      </div>
    </section>
  );
};

export default TestimonialsNew;
