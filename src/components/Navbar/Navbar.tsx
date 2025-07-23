'use client';
import { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { GoArrowRight } from 'react-icons/go';
import Link from 'next/link';



const Navlinks = [
  "Home",
  "About",
  "guide",
  "features",
  "values",
  
  
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  
  const formatToId = (text: string) =>
    text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  return (
    <div
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out ${
    isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 -translate-y-full pointer-events-none'
  } bg-violet-500 backdrop-blur-md shadow-md`}
>
  <div className="flex justify-between items-center h-[80px] px-4 sm:px-6 lg:px-[100px] font-[Urbanist]">
    <div className="text-2xl font-bold text-white">BC APPA</div>


       
        <div className="hidden lg:flex items-center space-x-6">
          {Navlinks.map((link) => (
            <a
              key={link}
              href={`#${formatToId(link)}`}
              className="text-white hover:text-black transition-colors"
            >
              {link}
            </a>
          ))}
         <Link href="facebook.com">
         <button className="bg-black text-white px-6 py-2 rounded-full flex items-center gap-2 hover:text-violet-200 hover:scale-105 hover:shadow-lg transition-all duration-300 transition">
    Join Now
    <GoArrowRight />
  </button>
       </Link>
        </div>

       
        <button
          className="lg:hidden text-2xl text-gray-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

    
      {isMenuOpen && (
        <div className="lg:hidden bg-white px-4 py-4 shadow-md border-t">
          {Navlinks.map((link) => (
            <a
              key={link}
              href={`#${formatToId(link)}`}
              className="block py-2 text-gray-800 font-semibold hover:text-violet-600"
              onClick={() => setIsMenuOpen(false)}
            >
              {link}
            </a>
          ))}
          <button className="mt-4 w-full bg-[#8670E5] text-white py-2 rounded-full flex justify-center items-center gap-2">
            Join Now
            <GoArrowRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
