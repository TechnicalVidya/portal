import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "../../components/cards";
import { cardData } from "./clubData";
import Heading from "@/components/ui/heading";
import { AddClub } from "./club/addClub";

const Clubs = () => {
  const imgArray = [img1, img2, img3];

  return (
    <div>
      <div className="grid items-center justify-center md:space-y-16 space-y-6 ">
        <CarouselDemo imgArray={imgArray} />
        <div className="flex gap-4 items-center justify-between">
          <Heading heading={"Explore Clubs"} />
          <AddClub />
        </div>
        <Cards cardData={cardData} btnText={"Join"} type={"clubs"} />
      </div>
    </div>
  );
};

export default Clubs;
