import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "../clubs/cards";
import { cardData } from "./dummyEventData";
import Heading from "@/components/ui/heading";

const Events = () => {
  const imgArray = [img1, img2, img3];
  return (
    <div>
      <div className="grid items-center justify-center">
        <CarouselDemo imgArray={imgArray} />
        <Heading heading={"Explore Events"} />
        <Cards cardData={cardData} btnText={"Participate"} />
      </div>
    </div>
  );
};

export default Events;
