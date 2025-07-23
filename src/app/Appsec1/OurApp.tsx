"use client";
import Image from "next/image";
import Overlay from "@/components/extra/Overlay";

const Appsec1 = () => {
  return (
    <section className="relative w-full bg-[#8670E5] flex flex-col items-center py-10 sm:py-14 md:py-16 lg:py-20 overflow-hidden font-[Urbanist] z-10">
 
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-white/10 blur-[120px] z-0"></div>

     
      <div
        className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 md:gap-5 text-center px-4 max-w-xs sm:max-w-md md:max-w-3xl lg:max-w-4xl"
        data-aos="fade-down">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white leading-tight">
          Your BC Wallet — Everything You Need in One App
        </h2>
        <p className="text-white/80 text-sm sm:text-base max-w-[600px] mt-2">
          Send, receive, and track your BC payments with ease. Experience the convenience of managing your financial circle on the go.
        </p>

      
        <div className="flex flex-wrap justify-center items-center gap-4 mt-4">
          <button className="bg-white text-[#8670E5] text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#f1f1f1] transition-all">
            App Store
          </button>
          <button className="border border-white text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-[#8670E5] transition-all">
            Google Play
          </button>
        </div>
      </div>

      
      <div
        className="relative z-10 mt-16 sm:mt-20 md:mt-24 w-[300px] h-[620px] sm:w-[320px] sm:h-[640px] md:w-[340px] md:h-[660px] mx-auto"
        data-aos="zoom-in-up"
      >
       
        <div className="absolute z-10 top-[6%] left-[7%] w-[86%] h-[89%] rounded-[35px] overflow-hidden">
          <Image
            src="/slider3.jpg"
            alt="App Screen"
            fill
            className="object-cover"
          />
        </div>

       
        <div className="absolute inset-0 z-20">
          <Image
            src="/center-frame.png"
            alt="Phone Frame"
            fill
            className="object-contain"
          />
        </div>
      </div>

      <div
        className="mt-16 text-white text-center px-4 max-w-[720px]"
        data-aos="fade-up"
      >
        <h3 className="text-xl sm:text-2xl font-semibold">
           Control your BC anytime, anywhere — 100% transparency, zero hassle.
        </h3>
      </div>
    </section>
  );
};

export default Appsec1;
