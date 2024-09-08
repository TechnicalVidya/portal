"use client";
import Icon1 from '@/assets/nav-icon1.svg'
import Icon2 from '@/assets/nav-icon2.svg'
import Icon3 from '@/assets/nav-icon3.svg'
import Icon4 from '@/assets/nav-icon4.svg'
import Image from 'next/image';
import React from "react";
const Footer = () => {
  return (
<div className="flex bg-muted items-center gap mt-24 h-28 justify-center py-2 -my-4 md:py-8 border-t border-muted flex-wrap sm:flex-nowrap">
<div className="block md:hidden text-center text-muted-foreground">
    Developed with ❤ By Technical Vidya Of LTCE
  </div>
  <div className="">
    {/* Social icons */}
    <a
      href="https://linkedin.com/in/anshhvarma"
      target="_blank"
      className="relative w-[50px] h-[50px] inline-flex rounded-full items-center justify-center overflow-hidden"
    >
      <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 "></div>
      <Image
        src={Icon1}
        alt="LinkedIn Icon"
        className="w-2/5 z-10 "
      />
    </a>
    <a
      href="https://github.com/ANSHHVARMA"
      target="_blank"
      className="relative w-[50px] h-[50px] inline-flex rounded-full items-center justify-center overflow-hidden "
    >
      <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 "></div>
      <Image
        src={Icon2}
        alt="GitHub Icon"
        className="w-2/5 z-10 "
      />
    </a>
    <a
      href="https://www.instagram.com/anshhvarma/"
      target="_blank"
      className="relative w-[50px] h-[50px] inline-flex rounded-full items-center justify-center overflow-hidden "
    >
      <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 "></div>
      <Image
        src={Icon3}
        alt="Instagram Icon"
        className="w-2/5 z-10 "
      />
    </a>
    <a
      href="https://twitter.com/AnshhVarma"
      target="_blank"
      className="relative w-[50px] h-[50px] inline-flex rounded-full items-center justify-center overflow-hidden "
    >
      <div className="absolute w-[42px] h-[42px] bg-black rounded-full scale-0 "></div>
      <Image
        src={Icon4}
        alt="Twitter Icon"
        className="w-2/5 z-10 "
      />
    </a>
  </div>
  <div className=" hidden lg:block text-center text-muted-foreground ml-7">
    Developed with ❤ By Technical Vidya Of LTCE
  </div>
</div>

  );
};

export default Footer;
