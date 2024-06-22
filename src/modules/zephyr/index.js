import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/zephyrImg/IMG_1.JPG";
import img2 from "@/assets/zephyrImg/IMG_2.JPG";
import img3 from "@/assets/zephyrImg/IMG_3.png";
import img4 from "@/assets/zephyrImg/IMG_4.png";
// import Heading from "@/components/ui/heading";
import Heading2 from "@/components/ui/heading2"
import { Badge } from "@/components/ui/badge";

const Zephyr = () => {
  const imgArray = [img1, img2, img3, img4];
  return (
    <section>
      <div className="grid items-center justify-center md:space-y-16 space-y-6 ">
        <CarouselDemo imgArray={imgArray} />
        <Heading2 tag="ZEPHYR" title="A MOMENTARY GLANCE."/> 
      </div>

      <div className="flex flex-col gap-4 items-center justify-center pt-5">
        <Badge
          className={
            "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
          }>
          <p>🎉 Stay engaged 🎉</p>
        </Badge>
      </div>

      
    </section>
  );
};

export default Zephyr;
