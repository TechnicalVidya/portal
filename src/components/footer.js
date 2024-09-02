"use client";
import Icon1 from '@/assets/nav-icon1.svg'
import Icon2 from '@/assets/nav-icon2.svg'
import Icon3 from '@/assets/nav-icon3.svg'
import Icon4 from '@/assets/nav-icon4.svg'
import Image from 'next/image';
import React from "react";
const Footer = () => {
  return (

    <div className="flex bg-muted items-center gap-36 mt-24 h-28 justify-center py-2 -my-4 md:py-8 border-t border-muted">
      <div className="sm:col-span-12 lg:col-span-3">
        {/* Social as */}
        <div className="footer-social-icon inline-block">
          <a
            href="https://linkedin.com/in/anshhvarma"
            target="_blank"
            className="relative w-[50px] h-[50px] inline-flex rounded-full mr-1.5 items-center justify-center   overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 transition-transform duration-300 ease-in-out"></div>
            <Image
              src={Icon1}
              alt="Icon"
              className="w-2/5 z-10 transition-transform duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://github.com/ANSHHVARMA"
            target="_blank"
            className="relative w-[50px] h-[50px]  inline-flex rounded-full mr-1.5 items-center justify-center overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 transition-transform duration-300 ease-in-out"></div>
            <Image
              src={Icon2}
              alt="Icon"
              className="w-2/5 z-10 transition-transform duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://www.instagram.com/anshhvarma/"
            target="_blank"
            className="relative w-[50px] h-[50px]  inline-flex rounded-full mr-1.5 items-center justify-center   overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 transition-transform duration-300 ease-in-out"></div>
            <Image
              src={Icon3}
              alt="Icon"
              className="w-2/5 z-10 transition-transform duration-300 ease-in-out"
            />
          </a>
          <a
            href="https://twitter.com/AnshhVarma"
            target="_blank"
            className="relative w-[50px] h-[50px]  inline-flex rounded-full mr-1.5 items-center justify-center  overflow-hidden transition-transform duration-300 ease-in-out"
          >
            <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 transition-transform duration-300 ease-in-out"></div>
            <Image
              src={Icon4}
              alt="Icon"
              className="w-2/5 z-10 transition-transform duration-300 ease-in-out"
            />
          </a>
        </div>

      </div>
      <div className="text-sm text-center text-muted-foreground mr-4">
        Developed with ❤ By Technical Vidya Of LTCE
      </div>
    </div>

  );
};

export default Footer;
