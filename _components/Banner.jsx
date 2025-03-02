"use client";

import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import ReactPlayer from "react-player";

const Banner = () => {
  const swiperRef = useRef(null);

  return (
    <div className="bg-gray-100 flex justify-center w-full">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={false} // Handling autoplay manually
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper w-full"
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {/* Video 1 */}
        <SwiperSlide className="cursor-pointer w-full">
          <div className="relative w-full h-[80vh]">
            {/* Video Player */}
            <div className="absolute top-0 left-0 w-full h-full">
              <ReactPlayer
                url="/coffee/video1.mp4"
                playing
                muted
                loop={false}
                width="100%"
                height="100%"
                className="react-player"
                onEnded={() => swiperRef.current?.slideNext()}
              />
            </div>

            {/* Overlay Text */}
            <div className="absolute top-20 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center bg-black/50">
              <h2 className="text-4xl font-bold">Enjoy the Perfect Coffee</h2>
              <p className="text-lg mt-2">Savor every sip with quality beans</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Video 2 */}
        <SwiperSlide className="cursor-pointer w-full">
          <div className="relative w-full h-[80vh]">
            {/* Video Player */}
            <div className="absolute top-0 left-0 w-full h-full">
              <ReactPlayer
                url="/coffee/video2.mp4"
                playing
                muted
                loop={false}
                width="100%"
                height="100%"
                className="react-player"
                onEnded={() => swiperRef.current?.slideNext()}
              />
            </div>

            {/* Overlay Text */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white text-center bg-black/50">
              <h2 className="text-4xl font-bold">Experience Pure Bliss</h2>
              <p className="text-lg mt-2">The best coffee to start your day</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
