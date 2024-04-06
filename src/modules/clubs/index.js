import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "./cards";
import { cardData } from "./clubData";

const Clubs = () => {
  const imgArray = [img1, img2, img3];

  return (
    <div>
      <div className="grid items-center justify-center">
        <CarouselDemo imgArray={imgArray} />
        <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight lg:text-4xl text-left md:mt-20 px-4 md:px-0">
          Explore Clubs
        </h1>
        <Cards cardData={cardData} />
      </div>
    </div>
  );
};

export default Clubs;
