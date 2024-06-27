import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/zephyrImg/IMG_1.JPG";
import img2 from "@/assets/zephyrImg/IMG_2.JPG";
import img3 from "@/assets/zephyrImg/IMG_3.png";
import img4 from "@/assets/zephyrImg/IMG_4.png";
// import Heading from "@/components/ui/heading";
import Heading2 from "@/components/ui/heading2"
// import { Badge } from "@/components/ui/badge";
import { VelocityScroll } from "@/components/ui/velocityTextScroll";
import BentoGrid  from "@/components/bentoGrid";


const Zephyr = () => {
  const imgArray = [img1, img2, img3, img4];
  return (
    <section>
      <div className="grid items-center justify-center md:space-y-16 space-y-6 ">
        <CarouselDemo imgArray={imgArray} />
        <Heading2 tag="ZEPHYR 2024"/> 
      </div>
      {/* <VelocityScroll
      text="A MOMENTARY!"
      default_velocity={2}
      className="font-display text-center text-4xl pt- tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      /> */}
        <BentoGrid />
      
    </section>
  );
};

export default Zephyr;
