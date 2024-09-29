// import Image from "next/image";
// import React from "react";
import Img1 from '@/assets/workshops/img1.JPG'
import Img2 from '@/assets/workshops/img2.JPG'
import Img3 from '@/assets/workshops/img3.JPG'
import Image from 'next/image'


import React from 'react'

const OurGoal = () => {
  return (
    <section className='flex flex-col justify-center items-center pb-20'>
    <div className='items-center font-bold text-3xl md:text-5xl pb-6 md:pb-12 text-center'>
      Our Goal is to help people to Grow.
    </div>
  
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-100 md:h-96 md:w-100">
          <Image className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125" src={Img1} alt="Workshop" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 md:px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-base md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Thrilled to have successfully conducted an engaging Robotics Workshop, sparking innovation and hands-on learning! 🤖✨ Stay tuned for more tech-driven events from our club!</p>
        </div>
      </div>
  
      <div className="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div className="h-96 w-100 md:h-96 md:w-100">
          <Image className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125" src={Img3} alt="" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-4 md:px-9 text-center transition-all duration-500 group-hover:translate-y-0">
          <p className="mb-3 text-base md:text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Successfully conducted an immersive Robotics Workshop, empowering students with practical skills and innovative thinking!</p>
        </div>
      </div>
    </div>
  </section>
  
  )
}

export default OurGoal