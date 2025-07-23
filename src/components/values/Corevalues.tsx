"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";



const Values = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="w-[98%] lg:min-h-[80vh] bg-[#FAF8FF] rounded-[30px] md:rounded-[50px] mx-auto flex flex-col lg:flex-row justify-between items-center font-[Urbanist] py-12 px-4 sm:px-8 md:px-10 shadow-sm overflow-hidden">
      
     
      <div
        className="w-full lg:w-1/2 flex justify-center items-center"
        data-aos="fade-right"
      >
        <div className="max-w-[576px] w-full flex flex-col gap-4 sm:gap-6 md:gap-8">
          
          
          <h1 className= "text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]">
            Our Vision
          </h1>
          <p className="text-base sm:text-lg text-[#666] leading-relaxed max-w-[520px]">
            We aim to eliminate financial uncertainty in community savings.
            Through technology, every member gets fair returns—on time, every time.
          </p>

        
          <h1 className= "text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]">
            Our Mission
          </h1>
          <p className="text-base sm:text-lg text-[#666] leading-relaxed max-w-[520px]">
            To deliver a fully digital, secure, and insured BC platform
            where trust, transparency, and timely payouts are guaranteed for all.
          </p>
        </div>
      </div>

      
      <div
        className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center items-center"
        data-aos="zoom-in-left"
      >
        <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[500px] aspect-square">
          <Image
            src="/arrow-image.png"
            alt="Vision Illustration"
            width={404}
            height={404}
            className="w-full h-full object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Values;
