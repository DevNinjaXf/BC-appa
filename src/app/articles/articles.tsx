"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const boxContent = [
  {
    head: "Mastering Frontend Development with React",
    description:
      "Learn how to build responsive, high-performance web apps using React. This guide covers components, hooks, state management, and more to help you become a frontend pro.",
  },
  {
    head: "Why Next.js is the Future of Modern Web Apps",
    description:
      "Discover the power of Next.js in modern web development. From server-side rendering to API routes, it offers everything needed to scale full-stack apps efficiently.",
  },
  {
    head: "Building Lightning Fast Websites with Tailwind CSS",
    description:
      "Tailwind CSS offers utility-first classes for rapid UI development. Explore its benefits in building stylish, fast, and maintainable websites with minimal CSS overhead.",
  },
];

const Articles = () => {
  useEffect(() => {
    AOS.init({ duration: 1400 });
  }, []);

  return (
    <section className="w-full flex flex-col items-center py-12 sm:py-16 gap-12 sm:gap-20 px-4 sm:px-6 font-[Urbanist] bg-gradient-to-b from-[#f5f3ff] via-[#ede9fe] to-[#faf5ff]">
      <div className="w-full flex flex-col items-center mt-8 sm:mt-14 gap-10 sm:gap-16 px-4 sm:px-6">
        <div className="w-full max-w-[1450px] flex flex-col items-center gap-3 sm:gap-4 text-center">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]"
            data-aos="fade-up"
          >
            Explore Our Latest Tech Insights and Tutorials.
          </h2>
        </div>

        <div className="w-full max-w-[1450px] flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-7">
          {boxContent.map((item, index) => (
            <div
              key={index}
              data-aos="zoom-in-right"
              data-aos-delay="400"
              className="w-full max-w-full sm:max-w-[376px] flex flex-col justify-start gap-5 border border-[#E6E6E6] rounded-2xl p-6 bg-white shadow-md"
            >
              <span className="text-xs font-medium text-[#7444FD] bg-[#FAF8FF] px-3 py-1 rounded-full w-fit">
                {item.text}
              </span>

              <h2 className="font-semibold text-xl text-[#282C32] tracking-tight leading-7">
                {item.head}
              </h2>

              <p className="text-sm text-[#4a4a4a] leading-relaxed">
                {item.description}
              </p>

              <hr className="border-[#E6E6E6]" />

              <div className="flex justify-between text-sm text-[#858585]">
                <p>By Developer</p>
                <p>Jul 22, 2025</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
