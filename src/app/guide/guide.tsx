"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


const Guide = () => {

  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      data-aos="fade-right"
      className="w-full py-12 sm:py-16 md:py-20 font-[Urbanist] bg-gradient-to-b from-white to-[#FAF8FF]"
    >
      <div className="max-w-[1450px] w-full mx-auto flex flex-col justify-center items-center gap-8 px-4">
        
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className= "text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]"
          data-aos="fade-up"
          >
            Follow These Simple Steps
          </h2>
        </div>

        <div className="w-full mt-8">
          
          <div className="hidden lg:block w-full h-[248px] relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/Vector-line.png"
                alt="wave line"
                fill
                className="w-full h-auto object-contain"
              />
            </div>

       
            <div className="w-[30px] h-[30px] border-4 border-white rounded-full bg-[#8670E5] absolute bottom-[10px] right-[87%]"></div>
            <div
              className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute top-[18px] right-[77%] justify-center items-center"
              data-aos="fade-up"
            >
              <div className="w-[65px] h-7 rounded-full bg-[#7444FD26] flex items-center justify-center py-1 px-[10px]">
                <p className="text-sm text-[#7444FD] font-medium tracking-tight">
                  Step 1
                </p>
              </div>
              <h2 className="text-xl font-bold text-[#282C32] text-center">
                Start or Join a Group
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px] text-sm">
                Choose a trusted circle to begin your savings journey with verified members.
              </p>
            </div>

         
            <div className="w-[30px] h-[30px] border-4 border-white rounded-full bg-[#8670E5] absolute top-[10px] right-[61%]"></div>
            <div
              className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute bottom-[18px] right-[51%] justify-center items-center"
              data-aos="fade-down"
            >
              <div className="h-7 rounded-full px-3 bg-[#7444FD26] inline-flex items-center justify-center">
                <p className="text-sm text-[#7444FD] font-medium">Step 2</p>
              </div>
              <h2 className="text-xl font-bold text-[#282C32] text-center">
                Define Rules
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px] text-sm">
                Set contribution terms and payout cycles with built-in protection.
              </p>
            </div>

            
            <div className="w-[30px] h-[30px] border-4 border-white rounded-full bg-[#8670E5] absolute bottom-[10px] right-[37%]"></div>
            <div
              className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute top-[18px] right-[27%] justify-center items-center"
              data-aos="fade-up"
            >
              <div className="h-7 rounded-full px-3 bg-[#7444FD26] inline-flex items-center justify-center">
                <p className="text-sm text-[#7444FD] font-medium">Step 3</p>
              </div>
              <h2 className="text-xl font-bold text-[#282C32] text-center">
                Make Transactions
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px] text-sm">
                Seamlessly send and receive funds online with real-time tracking.
              </p>
            </div>

       
            <div className="w-[30px] h-[30px] border-4 border-white rounded-full bg-[#8670E5] absolute top-[10px] right-[13%]"></div>
            <div
              className="w-[310px] h-[136px] px-[7.41px] flex flex-col absolute bottom-[18px] right-[3%] justify-center items-center"
              data-aos="fade-down"
            >
              <div className="h-7 rounded-full px-3 bg-[#7444FD26] inline-flex items-center justify-center">
                <p className="text-sm text-[#7444FD] font-medium">Step 4</p>
              </div>
              <h2 className="text-xl font-bold text-[#282C32] text-center">
                Stay Protected
              </h2>
              <p className="text-[#858585] text-center mt-2 max-w-[280px] text-sm">
                Your contributions are safe even if someone misses their turn.
              </p>
            </div>
          </div>

        
          <div className="lg:hidden w-full">
            <div className="relative pl-8">
              <div className="absolute left-5 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-indigo-500 to-blue-500 rounded-full z-0" />
              {[
                {
                  step: "1",
                  title: "Start or Join a Group",
                  desc: "Choose your savings group with verified users.",
                },
                {
                  step: "2",
                  title: "Define Rules",
                  desc: "Set who pays what and when — transparently.",
                },
                {
                  step: "3",
                  title: "Make Transactions",
                  desc: "Go cashless with safe digital transfers.",
                },
                {
                  step: "4",
                  title: "Stay Protected",
                  desc: "Even if someone defaults, you're secured.",
                },
              ].map((item, idx) => (
                <div key={idx} className="relative mb-10" data-aos="fade-up">
                  <div className="absolute left-0 top-1 w-6 h-6 border-4 border-white rounded-full bg-[#8670E5] -translate-x-1/2 z-10" />
                  <div className="ml-6">
                    <div className="w-fit px-3 py-1 bg-[#7444FD26] rounded-full text-sm font-medium text-[#7444FD] mb-2">
                      Step {item.step}
                    </div>
                    <h3 className="text-lg font-bold text-[#282C32] mb-1">{item.title}</h3>
                    <p className="text-sm text-[#858585]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-[#282C32] text-center" data-aos="fade-up">
           100% Transparent. 0% Risk. Start Saving Smart!
        </h2>
      </div>
    </div>
  );
};

export default Guide;
