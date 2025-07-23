"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "@/components/Navbar/Navbar";
import { GoArrowRight } from "react-icons/go";


const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full min-h-screen font-[Urbanist] overflow-hidden">
      <Navbar />

      
      <Image
        src="/black-star.png"
        alt="Black star decoration"
        className="absolute top-[80px] left-4 z-10 w-8 h-8 animate-float"
        width={57}
        height={58}
      />
      <Image
        src="/golden-star.png"
        alt="Golden star decoration"
        className="absolute top-[500px] left-[65px] z-10 w-8 h-8 animate-pulse-fast"
        width={57}
        height={58}
      />

      <Image
        src="/left-right-gradient-image.png"
        alt="Left gradient background"
        fill
        className="object-cover -z-20"
      />
      <Image
        src="/hero-right-gradient-image.png"
        alt="Right gradient background"
        fill
        className="object-cover -z-10"
      />

    
      <div className="flex flex-col lg:flex-row w-full min-h-[calc(100vh-106px)] pb-8 sm:pb-12 lg:pb-16">
       
        <div
          data-aos="fade-right"
          className="w-full lg:w-1/2 flex items-center justify-center lg:justify-start px-4 sm:px-6 lg:px-0 py-8 lg:py-0"
        >
          <div className="w-full max-w-[844px] flex flex-col gap-4 sm:gap-5 lg:gap-6 text-center lg:text-left lg:ml-[135px] lg:mt-[70px]">
         
            <div className="flex items-center gap-2 w-fit rounded-3xl bg-[#8670E526] py-[5px] px-[10px] mx-auto lg:mx-0">
              <div className="bg-white rounded-full px-[15px] py-[5px]">
                <p className="text-sm lg:text-[14px] text-[#282C32] font-bold">BC APPA</p>
              </div>
              <p className="text-sm lg:text-[14px] text-[#8670E5] font-semibold">Connect & Save</p>
              <Image
                src="/fireIcon.svg.png"
                alt="fire"
                width={16}
                height={17}
                className="w-3 h-3 animate-pulse"
              />
            </div>

          
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]">
              Guaranteed Safety for Your Savings
            </h1>

          
            <p className="font-bold text-sm lg:text-[16px] text-[#282C32] w-full lg:w-[526px]">
              Join a trusted platform where every Rupee you save is fully protected, even if a member defaults.
            </p>
            <p className="font-bold text-sm lg:text-[16px] text-[#282C32] w-full lg:w-[526px]">
              Tired of risky BCs? Start one that’s transparent, secure, and future-ready.
            </p>
            <p className="font-bold text-xs lg:text-[16px] text-[#282C32] w-full lg:w-[672px]">
              100% Verified Users * Insurance-Backed Security * Real-Time Digital Tracking
            </p>

           <a href="https://github.com/DevNinjaXf">
            <button className="bg-[#8670E5] hover:scale-105 hover:shadow-lg transition-all duration-300 w-full sm:w-[200px] lg:w-[140px] xl:w-[150px] 2xl:w-[157.99px] h-12 sm:h-14 lg:h-12 xl:h-14 2xl:h-14 rounded-full flex justify-center items-center gap-[6px] mx-auto lg:mx-0 mt-2 lg:mt-0">
              <h2 className="font-semibold text-base text-white">Join Now</h2>
              <GoArrowRight className="text-white text-base" />
            </button>
            </a>
          </div>
        </div>

       
        <div className="w-full lg:w-1/2 flex items-center justify-center relative px-4 lg:px-0 py-8 lg:py-0 min-h-[400px]">
       
          <div className="absolute -z-10 top-[50%] left-[50%] w-[400px] h-[400px] bg-[#8670E5] blur-[120px] rounded-full opacity-20 transform -translate-x-1/2 -translate-y-1/2 hero-glow" />

          <div data-aos="fade-up" className="relative w-[460px] h-[460px] flex-shrink-0">
         
            <div className="absolute top-[60px] left-0 w-[185px] h-[315px] z-5">
              <div className="absolute top-[13px] left-[24px] w-[135px] h-[290px] z-6">
                <Image src="/mobile-left.jpg" alt="Left screen" width={135} height={290} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute inset-0 w-full h-full z-7">
                <Image src="/mobile-border.png" alt="Left border" width={185} height={315} className="w-full h-full object-contain" />
              </div>
            </div>

            
            <div className="absolute top-[60px] right-0 w-[185px] h-[315px] z-5">
              <div className="absolute top-[13px] left-[24px] w-[135px] h-[290px] z-6">
                <Image src="/mobile-right.jpg" alt="Right screen" width={135} height={290} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute inset-0 w-full h-full z-7">
                <Image src="/mobile-border.png" alt="Right border" width={185} height={315} className="w-full h-full object-contain" />
              </div>
            </div>

          
            <div className="absolute top-[18px] left-[50%] -translate-x-1/2 w-[260px] h-[440px] z-10">
              <div className="absolute top-[18px] left-[50%] -translate-x-1/2 w-[190px] h-[405px] z-11">
                <Image src="/mobile-screen.jpg" alt="Center screen" width={190} height={405} className="w-full h-full object-cover rounded-lg" />
              </div>
              <div className="absolute inset-0 w-full h-full z-12">
                <Image src="/mobile-border.png" alt="Center border" width={260} height={440} className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
