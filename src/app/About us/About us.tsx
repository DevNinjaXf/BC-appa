"use client";
import React , {useEffect} from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";


const CircularProfiles = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
    });
  }, []);
  const checklists = [
    {
      head: "Guaranteed Protection ",
      body: "- If a member defaults, your payout is covered by insurance.",
    },
    {
      head: "100% Verified Users",
      body: "- Every participant is authenticated, reducing fraud risk.",
    },
    {
      head: "Secure Digital Transactions",
      body: "- No cash exchanges, no hidden risks.",
    },
    {
      head: "Full Transparency",
      body: " - All records are digital and trackable in real-time.",
    },
  ];

  return (
    <div data-aos="zoom-in-down"
    className="w-full min-h-screen flex flex-col lg:flex-row justify-center lg:justify-evenly items-center font-[Urbanist] py-8 lg:py-0 px-4 lg:px-0">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[420px] lg:h-[420px] xl:w-[460px] xl:h-[460px] 2xl:w-[490px] 2xl:h-[490px] mb-8 lg:mb-0 flex-shrink-0">
        <div className="absolute -top-6 sm:-top-8 lg:-top-10">
          <Image
          style={{ animation: 'spin 8s linear infinite' }}
            src="/blue-star.png"
            alt="star image"
            width={50}
            height={50}
            className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 2xl:w-[50px] 2xl:h-[50px]"
          />
        </div>
        <div style={{ animation: 'spin 40s linear infinite' }}
        className="absolute inset-3 sm:inset-4 lg:inset-4 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2rem)] lg:w-[calc(100%-2rem)] h-[calc(100%-1.5rem)] sm:h-[calc(100%-2rem)] lg:h-[calc(100%-2rem)] border-2 sm:border-3 lg:border-4 border-dashed border-purple-200 rounded-full opacity-60 "></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[210px] h-[205px] sm:w-[250px] sm:h-[245px] md:w-[290px] md:h-[285px] lg:w-[300px] lg:h-[295px] xl:w-[325px] xl:h-[318px] 2xl:w-[350px] 2xl:h-[341px] rounded-full bg-[#8670E5]/8 border-[3px] sm:border-[4px] lg:border-[5.74px] border-[rgba(134,112,229,0.1)] flex items-center justify-center">
            <div className="w-[110px] h-[110px] sm:w-[130px] sm:h-[130px] md:w-[150px] md:h-[150px] lg:w-[155px] lg:h-[155px] xl:w-[170px] xl:h-[170px] 2xl:w-[180px] 2xl:h-[180px] bg-[rgba(134,112,229,0.2)] rounded-full flex items-center justify-center">
              <div className="w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[95px] md:h-[95px] lg:w-[100px] lg:h-[100px] xl:w-[107px] xl:h-[107px] 2xl:w-[114px] 2xl:h-[114px] rounded-full border-2 sm:border-3 lg:border-4 border-[#8670E5] overflow-hidden">
                <Image
                  src="/image-center.png" 
                  alt="women-image"
                  width={120}
                  height={120}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-4 sm:top-6 lg:top-8 left-6 sm:left-8 lg:left-12 w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] md:w-[72px] md:h-[72px] lg:w-[74px] lg:h-[74px] xl:w-[80px] xl:h-[80px] 2xl:w-[86.14px] 2xl:h-[86.14px] rounded-full border-2 sm:border-3 lg:border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image1-ecllipse.png"
            alt="Bearded man in casual shirt"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-8 sm:top-10 lg:top-14 left-1/2 transform translate-x-2 sm:translate-x-3 lg:translate-x-4 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] lg:w-[50px] lg:h-[50px] xl:w-[54px] xl:h-[54px] 2xl:w-[57.42px] 2xl:h-[57.42px] rounded-full border-2 sm:border-3 lg:border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image-up-3.png"
            alt="Woman in left center"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-4 sm:top-6 lg:top-8 right-6 sm:right-8 lg:right-12 w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] md:w-[72px] md:h-[72px] lg:w-[74px] lg:h-[74px] xl:w-[80px] xl:h-[80px] 2xl:w-[86.14px] 2xl:h-[86.14px] rounded-full border-2 sm:border-3 lg:border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image-up-2.png"
            alt="Woman in left corner"
            width={110}
            height={110}
            className="w-full h-full object-cover transform scale-x-[-1]"
          />
        </div>
        <div className="absolute right-1 sm:right-2 lg:right-2 top-[58%] sm:top-[60%] lg:top-7/12 w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] md:w-[72px] md:h-[72px] lg:w-[74px] lg:h-[74px] xl:w-[80px] xl:h-[80px] 2xl:w-[86.14px] 2xl:h-[86.14px] rounded-full border-2 sm:border-3 lg:border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image-down-2.png"
            alt="Man in left corner"
            width={90}
            height={90}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute bottom-8 sm:bottom-10 lg:bottom-14 left-[30%] sm:left-[32%] lg:left-1/3 w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[48px] md:h-[48px] lg:w-[50px] lg:h-[50px] xl:w-[54px] xl:h-[54px] 2xl:w-[57.42px] 2xl:h-[57.42px] rounded-full border-2 sm:border-3 lg:border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image-down-3.png"
            alt="Man at center"
            width={85}
            height={85}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute top-[58%] sm:top-[60%] lg:top-7/12 left-0 w-[52px] h-[52px] sm:w-[62px] sm:h-[62px] md:w-[72px] md:h-[72px] lg:w-[74px] lg:h-[74px] xl:w-[80px] xl:h-[80px] 2xl:w-[86.14px] 2xl:h-[86.14px] rounded-full border-2 sm:border-3 lg:border-4 border-[#8670E5] overflow-hidden">
          <Image
            src="/image-down-1.png"
            alt=" man at right"
            width={95}
            height={95}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="w-full lg:w-1/2 max-w-[600px] lg:max-w-none lg:h-auto xl:h-[515.96px] flex flex-col gap-4 sm:gap-5 lg:gap-5 lg:-mt-10 lg:ml-10 xl:ml-15 2xl:ml-20 px-4 lg:px-0">
   
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold leading-tight tracking-[-0.48px] text-[#282C32] w-full text-center lg:text-left text-transparent bg-clip-text bg-gradient-to-r from-[#8670E5] to-[#3D2B8C]"
        data-aos="fade-up"
        >
          🔒 Revolutionizing Savings Circles with 100% Financial Security
        </h1>

        <p className="text-sm sm:text-base lg:text-base xl:text-lg leading-relaxed tracking-[-0.32px] text-[#858585] w-full lg:w-[450px] xl:w-[500px] 2xl:w-[526px] text-center lg:text-left">
          Traditional Beesis (BCs) have always been a trusted way to save, but
          the fear of fraud, mismanagement, and defaults has held many back.
        </p>

        <p className="font-bold text-sm sm:text-base lg:text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-[-0.32px] text-[#282C32] w-full lg:w-[450px] xl:w-[500px] 2xl:w-[526px] text-center lg:text-left">
          BC Appa is the ONLY platform where your savings are 100% secure, even
          if a member defaults - thanks to our insurance-backed protection.
        </p>

        <div className="flex gap-4 sm:gap-5 lg:gap-6 w-full flex-col">
          {checklists.map((item, index) => (
            <div
              key={index}
              className="flex items-start sm:items-center gap-3 w-full"
            >
              <div className="flex-shrink-0 mt-1 sm:mt-0">
                <FaCheckCircle className="text-[#1AD079] text-[20px] sm:text-[25px] lg:text-[25px] xl:text-[28px] 2xl:text-[30px] w-[20px] h-[20px] sm:w-[25px] sm:h-[25px] lg:w-[25px] lg:h-[25px] xl:w-[28px] xl:h-[28px] 2xl:w-[30px] 2xl:h-[30px]" />
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 flex-1 min-w-0">
                <h4 className="font-bold text-sm sm:text-base lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-6 sm:leading-7 tracking-[-0.32px] text-[#282C32]">
                  {item.head}
                </h4>
                <p className="font-medium text-sm sm:text-base lg:text-[16px] xl:text-[17px] 2xl:text-[18px] leading-6 sm:leading-7 tracking-[-0.32px] text-[#858585]">
                  {item.body} 
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CircularProfiles;
