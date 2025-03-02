"use client";
import { useEffect } from "react";
import Banner from "../_components/Banner";
import Explore from "../_components/Explore";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import InstantCoffee from "../_components/InstantCoffee";
import OrderCoffee from "../_components/OrderCoffee";
import SellingCoffee from "../_components/SellingCoffee";
import Testimonial from "../_components/Testimonial";
import AOS from "aos";
import Courses from "../_components/Courses";
import "aos/dist/aos.css";
import StatisticsCard from "../_components/Statistics";
// import Testimonial from "./_components/Testimonial";
import Testimonials1 from "../_components/Testimonials";
import HeaderNew from "@/_components/HeaderNew";
import HomeNew from "@/_components/HomeNew";
import New from "@/_components/New";
import ExploreCourses from "@/_components/NewCourses";
import { AboutUs } from "@/_components/AboutNew";
import StatisticsNew from "@/_components/StatisticNew";
import TestimonialsNew from "@/_components/TestimonialsNew";
import FooterNew from "@/_components/FooterNew";

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      mirror: false
    });
  }, []);
  return (
    <>
    <HeaderNew/>
    <HomeNew/>
    <New/>
    <ExploreCourses/>
    <AboutUs/>
    <StatisticsNew/>
    <TestimonialsNew/>
      {/* <Header /> */}
      {/* <Banner /> */}

      {/* <Explore /> */}
      {/* <Courses /> */}
      {/* <OrderCoffee /> */}

      {/* <StatisticsCard/> */}
      {/* <Testimonials1/> */}
      {/* <OrderCoffee /> */}
      {/* <SellingCoffee />
      <InstantCoffee /> */}
      {/* <Testimonial /> */}
      <FooterNew />
    </>
  );
}
