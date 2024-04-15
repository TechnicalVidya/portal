'use client'
import React from "react";
import Team from "@/components/ui/team"
import { CarouselDemo } from "@/components/carousel";
import img1 from "@/assets/ourTeam/teamImg1.jpg";
import img2 from "@/assets/ourTeam/teamImg2.jpg";
import img3 from "@/assets/ourTeam/teamImg3.jpg";
import Heading from "@/components/ui/heading";

const Clubs = () => {
  const imgArray = [img1, img2 , img3];

  return (
    <div>
      <div className="grid items-center justify-center">
        <CarouselDemo imgArray={imgArray} />
        <Heading heading={"Our Team Members"} />
      <Team />
      </div>
    </div>
  );
}

export default Clubs;
