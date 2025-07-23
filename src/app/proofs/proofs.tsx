"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  const testimonials = [
    {
      imageUrl: "/testimonial1.png",
      name: "Areeba Siddiqui",
      review:
        "Joining this platform was the smartest financial decision I've made. The security and transparency give me complete peace of mind.",
      role: "Entrepreneur",
    },
    {
      imageUrl: "/testimonial2.png",
      name: "Hamza Tariq",
      review:
        "It’s not just about saving money; it’s about building trust. I’ve seen real commitment from the team behind this platform.",
      role: "Marketing Executive",
    },
    {
      imageUrl: "/testimonial3.png",
      name: "Mehwish Khan",
      review:
        "Managing my Beesi used to be a headache. Now everything is automated and protected. Highly recommended for freelancers!",
      role: "Freelancer",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex justify-center items-center font-[Urbanist] px-4 mt-8 sm:mt-10">
      
      <div className="absolute inset-0 -z-20">
        <Image
          src="/left-right-gradient-image.png"
          alt="Left gradient"
          fill
          className="opacity-80 object-cover"
        />
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero-right-gradient-image.png"
          alt="Right gradient"
          fill
          className="opacity-80 object-cover"
        />
      </div>

      <div className="w-full max-w-[1450px] flex flex-col items-center justify-center text-center">
        
        <h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]"
          data-aos="fade-up"
        >
          What our clients say?
        </h2>

        <div
          className="w-full flex flex-wrap justify-center gap-5 sm:gap-7 mt-8 sm:mt-10"
          data-aos="zoom-in-up"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative w-full max-w-full sm:max-w-[368px] h-auto rounded-[20px] bg-white/30 backdrop-blur-md p-5 sm:p-6 flex flex-col gap-4 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
             
              <div className="absolute top-5 right-7 w-6 h-6 sm:w-8 sm:h-8 opacity-60">
                <Image
                  src="/quotes.png"
                  alt="quotes"
                  fill
                  className="object-contain"
                />
              </div>

              
              <div className="flex items-center mt-6">
                <div className="relative w-[60px] h-[60px]">
                  <Image
                    src={testimonial.imageUrl}
                    alt={testimonial.name}
                    fill
                    className="rounded-[9px] object-cover"
                  />
                </div>
                <div className="ml-4 text-left">
                  <h1 className="font-semibold text-lg sm:text-xl text-[#282C32]">
                    {testimonial.name}
                  </h1>
                  <p className="text-[#737373] text-sm">{testimonial.role}</p>
                </div>
              </div>

              
              <div className="flex gap-1 mt-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="relative w-4 h-4">
                    <Image
                      src="/star-icon.png"
                      alt={`star-${i}`}
                      fill
                      className="object-contain"
                    />
                  </div>
                ))}
              </div>

              
              <p className="text-[#282C32] text-sm sm:text-base leading-6 tracking-[-0.32px] text-left mt-2">
                {testimonial.review}
              </p>
            </div>
          ))}
        </div>

    
   <div data-aos="fade-up" data-aos-delay="400">
   <button className="bg-[#8670E5] w-full sm:w-[256px] h-12 sm:h-14 rounded-full flex justify-center items-center gap-2 mt-8 sm:mt-14 px-6 py-3 hover:bg-[#7458e0] transition-colors hover:scale-105 hover:shadow-lg transition-all duration-300">
    <h2 className="font-semibold text-base sm:text-lg text-white">
      Join a Secure BC Now!
    </h2>
    <GoArrowRight className="text-white text-lg" />
  </button>
</div>

      </div>
    </div>
  );
};

export default Testimonial;
