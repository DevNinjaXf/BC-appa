'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Overlay from '../extra/Overlay';
import AOS from 'aos';
import 'aos/dist/aos.css';

const trustFactors = [
  {
    head: 'Built-in Security System',
    body: 'Your money is safeguarded through advanced encryption and insurance-backed guarantees. BC Appa ensures every transaction is secure — always.',
    imageUrl: '/shield.png',
  },
  {
    head: '100% Digital. Zero Stress.',
    body: 'No more manual cash handling. Our smart platform automates contributions, tracks activity in real-time, and ensures seamless payouts.',
    imageUrl: '/mobile-icon.png',
  },
];

const Trust2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-12 sm:py-16 gap-12 sm:gap-20 px-4 sm:px-6 font-[Urbanist] bg-gradient-to-b from-[#f5f3ff] via-[#ede9fe] to-[#faf5ff]">
      
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 sm:gap-5 text-center" data-aos="fade-up">
        <h2 className= "text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]"
        data-aos="fade-up"
        >
            Why Trusting BC Appa Is a Smart Move
        </h2>
      </div>

    
      <div className="w-full max-w-[1450px] flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
        {trustFactors.map((item, index) => (
          <div
            key={index}
            className="w-full max-w-full sm:max-w-[600px] flex flex-col justify-center items-center gap-5 border border-[#D5D5D5] rounded-2xl p-6 sm:p-8 text-center bg-white hover:shadow-2xl transition-transform duration-300 hover:scale-105"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="flex justify-center items-center">
              <Image
                src={item.imageUrl}
                alt={`${item.head} icon`}
                width={60}
                height={60}
                className="object-contain"
              />
            </div>

            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
              {item.head}
            </h3>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
              {item.body}
            </p>
          </div>
        ))}
      </div>

      
      <h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-[#282C32] tracking-tight"
        data-aos="fade-up"
        data-aos-delay="300"
      >
         Backed by Technology. Powered by Trust.
      </h2>
    </div>
  );
};

export default Trust2;
