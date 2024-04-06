import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "./cards";
import { cardData } from "./clubData";
import Heading from "@/components/ui/heading";

const Clubs = () => {
  const imgArray = [img1, img2, img3];

  return (
    <div>
      <div className="grid items-center justify-center">
        <CarouselDemo imgArray={imgArray} />
        <Heading heading={"Explore Clubs"} />
        <Cards cardData={cardData} btnText={"Join"} />
      </div>
    </div>
  );
};

export default Clubs;
