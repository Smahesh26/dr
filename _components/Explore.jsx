import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const Explore = () => {
  return (
    <div className="container-fluid">
      <div
        className="container-fluid py-16 md:px-10 rounded-lg shadow-lg"
        style={{ background: "#F2F4F7" }}
      >
        {/* Section Title */}
        <div className="text-center mb-10">
          <h1
            className="text-4xl font-bold mb-8 mt-6"
            style={{ fontFamily: "Nunito", color: "#000" }}
          >
            Trending Videos
          </h1>
        </div>

        {/* Video Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              title: "Smooth Muscle Physiology",
              tag: "Anatomy",
              img: "https://i.ytimg.com/vi/kqQLaNDGQ3g/hqdefault.jpg",
            },
            {
              title: "Pleural Tumors",
              tag: "Physiology",
              img: "https://i.ytimg.com/vi/Hs-lhso2t2c/hqdefault.jpg",
            },
            {
              title: "Physiology of Ghrelin",
              tag: "Medical Science",
              img: "https://i.ytimg.com/vi/Dwps6oKIHyk/hqdefault.jpg",
            },
            {
              title: "Esophageal Carcinoma",
              tag: "Pathology",
              img: "https://i.ytimg.com/vi/nh4Ms9_DEVI/hqdefault.jpg",
            },
          ].map((video, index) => (
            <div
              key={index}
              className="shadow-lg hover:shadow-xl cursor-pointer rounded-lg hover:scale-105 transition-all p-4 bg-white"
              data-aos="fade-left"
              data-aos-duration="1400"
              data-aos-easing="ease-in-out-back"
            >
              {/* Video/Image */}
              <div className="relative">
                <Image
                  src={video.img}
                  width={400}
                  height={225}
                  className="w-full h-auto object-cover rounded-md"
                  alt="YouTube Thumbnail"
                />
              </div>

              {/* Tag */}
             {/* Tag */}
<div className="flex justify-center mt-4">
  <span
    className={`bg-[#0c97a5] text-white text-sm px-4 py-1 rounded-full font-semibold ${openSans.className}`}
  >
    {video.tag}
  </span>
</div>


              {/* Title */}
              <h2
                className="text-xl mt-3 text-center"
                style={{ fontFamily: "Nunito", fontWeight: "700" }}
              >
                {video.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explore;
