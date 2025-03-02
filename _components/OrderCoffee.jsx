import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Info } from "lucide-react"; // Importing an icon for the "About Us" tag
import React from "react";
import { Open_Sans, Nunito } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"], weight: ["400", "600"] });
const nunito = Nunito({ subsets: ["latin"], weight: ["700", "800"] });

const OrderCoffee = () => {
  return (
    <>
      <div className="bg-gray-50 md:py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8 md:gap-20 items-center">
            {/* Coffee Image */}
            <div
              className=""
              data-aos="fade-up"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              <Image
                src="/coffee/about.jpg"
                width={600}
                height={600}
                className="object-cover md:w-full"
                alt="Coffee"
              />
            </div>

            {/* Order Section */}
            <div
              className="md:pe-40 py-10 md:py-0"
              data-aos="fade-down"
              data-aos-duration="1600"
              data-aos-easing="ease-in-out-back"
            >
              {/* About Us Tag */}
           {/* About Us Tag */}
<div className={`flex items-center gap-2 border border-gray-300 py-1 px-4 w-fit rounded-full text-[#0c97a5] text-sm font-semibold ${openSans.className}`}>
  <Info className="w-4 h-4 text-[#0c97a5]" /> {/* Icon color matches text */}
  About Us
</div>

<h1 className={`text-3xl md:text-4xl font-bold mt-4 ${nunito.className}`}>
  Where science meets art to enhance medical education for everyone!
</h1>

<p className={`text-gray-500 text py-4 ${openSans.className}`}>
  At Dr. B.R. Prakash Animated Medical Videos, we are dedicated to simplifying complex medical concepts through high-quality, visually engaging animations. Led by Dr. B.R. Prakash, our mission is to make medical education accessible, informative, and easy to understand for students, professionals, and healthcare enthusiasts worldwide.
</p>


           
              <Button
  className="p-6 rounded-md shadow-lg hover:scale-105 transition-all text-lg font-normal tracking-wide font-nunito"
  style={{ backgroundColor: "#0c97a5", color: "#ffffff", fontFamily: "Nunito, sans-serif" }}
>
  Learn More
</Button>


              {/* About Us Section */}
              {/* <div className="mt-10 border-t border-gray-300 pt-6">
                <h2
                  className="text-2xl font-semibold"
                  style={{ fontFamily: "Nunito, sans-serif" }}
                >
                  About Our Coffee
                </h2>
                <p
                  className="text-gray-500 text-md py-3"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  We are dedicated to delivering premium coffee that caters to
                  every taste. From handpicked beans to expertly roasted blends,
                  each sip tells a story of quality.
                </p>
                <Button
                  variant="outline"
                  className="p-4 rounded-md shadow-md hover:scale-105 transition-all text-lg font-normal tracking-wide"
                  style={{
                    backgroundColor: "#0c97a5",
                    color: "#ffffff",
                  }}
                >
                  Explore More
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderCoffee;
