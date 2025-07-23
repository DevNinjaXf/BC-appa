"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";


const Features = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center mt-8 sm:mt-12 lg:mt-14 mb-6 sm:mb-8 lg:mb-10 gap-8 sm:gap-12 lg:gap-16 px-4 font-[Urbanist]">
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 text-center">
       <h2 className= "text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]"
       data-aos="fade-up"
       >
          Key Features
        </h2>
      </div>

      <div className="block lg:hidden w-full max-w-[500px]">
        <div className="relative w-full flex justify-center mb-8">
          <div className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] relative">
            <Image
              data-aos="zoom-in"
              src="/dummy-pic.png"
              alt="Feature center"
              width={560}
              height={560}
              className="w-full h-full object-contain rounded-[20px]"
            />
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="relative w-full max-w-[1450px] flex justify-center items-start gap-8 flex-wrap lg:flex-nowrap">
         
         
          <div className="w-full max-w-[420px] flex flex-col gap-10 justify-center items-center mt-32">
          
          
            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/shield.png"
                  alt="Shield"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-semibold text-[#282C32]">
                  Insurance-Backed Security
                </h3>
                <p className="text-sm leading-relaxed text-[#858585] font-semibold">
                  Get peace of mind — your payout is protected, even in the rare case of a default.
                </p>
              </div>
            </div>


            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/tick.png"
                  alt="Tick"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>



              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-semibold text-[#282C32]">
                  Fraud-Proof & Verified Users
                </h3>
                <p className="text-sm leading-relaxed text-[#858585] font-semibold">
                  Every member is identity-verified to ensure a trusted and secure experience.
                </p>
              </div>
            </div>
          </div>

          


          <div
            className="relative w-[560px] h-[560px] z-10 -mt-10"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
          >
            <Image
              src="/dummy-pic.png"
              alt="Feature center"
              width={560}
              height={560}
              className="absolute top-0 left-1/2 -translate-x-1/2 z-0 rounded-[30px] w-full h-full object-cover shadow-xl transition-transform duration-1000 hover:scale-105"
            />
          </div>

       
          <div className="w-full max-w-[420px] flex flex-col gap-10 justify-center items-center mt-32">
    

            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/bell.png"
                  alt="Bell"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>



              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-semibold text-[#282C32]">
                  Instant Notifications
                </h3>
                <p className="text-sm leading-relaxed text-[#858585] font-semibold">
                  Receive real-time alerts on all activity — never miss a transaction or update.
                </p>
              </div>
            </div>



            <div className="flex gap-5 items-start">
              <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image
                  src="/sharia.png"
                  alt="Sharia"
                  width={54}
                  height={54}
                  className="object-contain"
                />
              </div>

              
              <div className="flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-semibold text-[#282C32]">
                  Sharia-Compliant Options
                </h3>
                <p className="text-sm leading-relaxed text-[#858585] font-semibold">
                  Join interest-free Islamic savings circles that follow ethical finance principles.
                </p>
              </div>
            </div>
          </div>
        </div>


        <div className="flex gap-5 items-start mt-20 justify-center">
          <div className="w-[79px] h-[79px] border border-[#7444FD]/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Image
              src="/graph.png"
              alt="Graph"
              width={54}
              height={54}
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1 max-w-[300px]">
            <h3 className="text-lg font-semibold text-[#282C32]">
              Real-Time Tracking
            </h3>
            <p className="text-sm leading-relaxed text-[#858585] font-semibold">
              Track all contributions and payouts live, with full visibility and transparency.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-xl sm:text-2xl lg:text-[30px] font-bold leading-7 tracking-[-0.32px] text-[#282C32] text-center px-4">
        Say goodbye to financial stress — BC Appa’s got your back!
      </h2>
    </div>
  );
};

export default Features;
