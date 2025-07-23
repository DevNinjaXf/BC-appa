"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const OurApp2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="w-full flex flex-col items-center py-12 sm:py-16 gap-12 sm:gap-20 px-4 sm:px-6 font-[Urbanist] bg-gradient-to-b from-[#f5f3ff] via-[#ede9fe] to-[#faf5ff]"
    >
      {/* Decorative Image */}
      <div className="absolute top-0 left-0">
        <Image
          src="/right-bottom.png"
          alt="Decorative Element"
          width={373}
          height={147}
          className="w-[200px] h-[80px] sm:w-[250px] sm:h-[100px] lg:w-[350px] lg:h-[135px] 2xl:w-[373px] 2xl:h-[147px]"
        />
      </div>

      {/* Text Section */}
      <div className="w-full lg:w-1/2 px-6 sm:px-8 lg:pl-12 flex items-center order-2 lg:order-1">
        <div className="flex flex-col gap-5 w-full text-center lg:text-left">
          <h2
            data-aos="fade-up"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]"
          >
            Why Choose BC Appa?
          </h2>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-tight text-gray-700">
            BC Appa empowers your group saving experience like never before. From real-time tracking to automated contribution reminders, enjoy peace of mind with every rupee saved.
          </p>

          <ul className="list-disc pl-6 text-left text-gray-600 text-sm sm:text-base md:text-lg space-y-2 text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] font-bold ">
            <li>🔐 End-to-End Data Security</li>
            <li> Transparent Transaction Records</li>
            <li> Intuitive Mobile Interface</li>
            <li> Timely Reminders for Contributions</li>
            <li> Instant Digital Receipts</li>
          </ul>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full lg:w-1/2 relative flex items-center justify-center order-1 lg:order-2 mb-6 lg:mb-0">
        <Image
          src="/Graphite.png"
          alt="App Preview"
          width={600}
          height={600}
          className="w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] xl:w-[500px] 2xl:w-[600px] object-contain relative z-10"
        />

        <Image
          src="/center-shadow.png"
          alt="Shadow Effect"
          width={500}
          height={270}
          className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] 2xl:w-[500px] z-0"
        />
      </div>
    </div>
  );
};

export default OurApp2;
