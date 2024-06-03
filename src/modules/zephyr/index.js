import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Heading from "@/components/ui/heading";

const Zephyr = () => {
  const imgArray = [img1, img2, img3];
  return (
    <div>
      <div className="grid items-center justify-center md:space-y-16 space-y-6 ">
        <CarouselDemo imgArray={imgArray} />
        <Heading heading={"Zephyr"} />
      </div>
    </div>
  );
};

export default Zephyr;
