'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Overlay from '../extra/Overlay';
import AOS from 'aos';
import 'aos/dist/aos.css';

const boxContent = [
  {
    head: 'Guaranteed Payouts, Zero Risk',
    body: 'With BC Appa, every rupee is insured. If a member defaults, your payout is still guaranteed — no worries, no losses.',
    imageUrl: '/shield.png',
  },
  {
    head: 'Digital Chit Management',
    body: 'Run your BC groups 100% online. From member tracking to payouts — everything is streamlined, transparent, and effortless.',
    imageUrl: '/mobile-icon.png',
  },
];

const trust = () => {
  useEffect(() => {
    AOS.init({ duration: 1800, once: true });
  }, []);

  return (
    <div className="w-full flex flex-col items-center py-12 sm:py-16 gap-12 sm:gap-20 px-4 sm:px-6 font-[Urbanist] bg-gradient-to-b from-[#f5f3ff] via-[#ede9fe] to-[#faf5ff]">
      
      <div className="w-full max-w-[1450px] flex flex-col items-center gap-4 text-center" data-aos="fade-up">
       <h2 className= "text-2xl sm:text-3xl md:text-4xl lg:text-[48px] xl:text-[56px] 2xl:text-[64px] font-bold leading-tight tracking-[-1.28px] text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C] capitalize w-full lg:w-[600px]"
       data-aos="fade-up"
       >
          Why People Choose BC Appa
        </h2>
      </div>

      
      <div className="w-full max-w-[1450px] flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-8">
        {boxContent.map((item, index) => (
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
        Build Together. Grow Together — the Smart Way.
      </h2>
    </div>
  );
};

export default trust;
