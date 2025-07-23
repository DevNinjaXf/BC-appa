"use client";
import React from "react";
import { AiFillApple } from "react-icons/ai";
import { FaAndroid, FaFacebook, FaInstagram } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
   <footer className="w-full bg-[#f2f2f2] overflow-hidden font-[Urbanist]">
  <div className="flex flex-col lg:flex-row">

    
    
    <div className="w-full lg:w-2/5 p-8 lg:py-20 relative order-1 flex flex-col justify-start">
      <h2 className="text-4xl font-black text-[#8670e5] uppercase text-center lg:text-left">
        BC Appa
        </h2>
       <p className="mt-4 text-base text-[#4a4a4a] max-w-sm text-center lg:text-left mx-auto lg:mx-0">
        Manage your savings with ease and confidence. Download the BC Appa mobile app and get started on your journey to secure, smart group saving.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
        <button className="flex items-center justify-center gap-2 bg-[#282c32] hover:bg-[#1f2326] text-white px-6 py-3 rounded-full transition">
          <AiFillApple className="text-xl" />
          App Store
        </button>
        <button className="flex items-center justify-center gap-2 border border-[#ccc] hover:border-[#8670e5] text-[#242331] px-6 py-3 rounded-full transition">
          <FaAndroid className="text-xl" />
          Play Store
        </button>
      </div>
    </div>

    
    <div className="w-full lg:w-1/5 p-8 lg:py-20 order-2 flex flex-col items-center text-center justify-start">
      <h3 className="text-3xl font-bold text-[#242331]">Follow Us</h3>
      <div className="mt-2 w-16 h-1 bg-gradient-to-r from-[#7444fd] to-[#c2c2c2]" />
      <nav className="mt-6 flex flex-col gap-4 text-[#4a4a4a]">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8670e5] transition"
        >
          Instagram
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#8670e5] transition"
        >
          Facebook
        </a>
      </nav>
    </div>

   
    <div className="w-full lg:w-2/5 p-8 lg:py-20 order-3 flex justify-center items-start">
      <div className="bg-white bg-opacity-60 p-8 rounded-lg shadow-lg w-full max-w-md">
        <p className="text-[#5236ff] font-medium">Get In Touch</p>
        <h3 className="mt-2 text-2xl font-bold text-[#242331]">
          Let’s Talk About Your Goals
        </h3>
        <p className="mt-2 text-base text-[#4a4a4a]">
          Have questions? Need help? Our support team is here to assist you with anything you need.
        </p>
        <div className="mt-4 flex items-center gap-3">
          <MdEmail className="text-[#5236ff] text-xl" />
          <span className="text-base text-[#4a4a4a]">info@bcappa.com</span>
        </div>
        <div className="mt-2 flex items-center gap-3">
          <FiPhoneCall className="text-[#5236ff] text-xl" />
          <span className="text-base text-[#4a4a4a]">+090108670</span>
        </div>
      </div>
    </div>

  </div>

  
  <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white py-4 px-8 mt-[-20px]">
    <p className="text-[#4a4a4a] text-base text-center">
      © {new Date().getFullYear()} BC Appa. All rights reserved.
    </p>
    <div className="flex gap-6 mt-4 sm:mt-0">
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-xl text-[#4a4a4a] hover:text-[#7444fd] transition" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-xl text-[#4a4a4a] hover:text-[#7444fd] transition" />
      </a>
    </div>
  </div>
</footer>
  );
};

export default Footer;
