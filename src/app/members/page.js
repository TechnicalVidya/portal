'use client'
import React from "react";
import Team from "@/components/ui/team"
import { CarouselDemo } from "@/components/carousel";
import img1 from "@/assets/ourTeam/teamImg1.jpg";
import img2 from "@/assets/ourTeam/teamImg2.jpg";
import img3 from "@/assets/ourTeam/teamImg3.jpg";

const Clubs = () => {
  const imgArray = [img1, img2 , img3];

  return (
    <div>
      <div className="grid items-center justify-center">
        <CarouselDemo imgArray={imgArray} />
        <div className='items-center font-bold text-3xl md:text-5xl pb-6 md:pb-12 text-center pt-10'>
        Creators
        </div>
      <Team />
      </div>
    </div>
  );
}

export default Clubs;
