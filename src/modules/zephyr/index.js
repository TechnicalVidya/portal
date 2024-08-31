"use client";
import Image from "next/image";
import React from "react";
import { WobbleCard } from "@/components/ui/wobbleCard";
import { CarouselDemo } from "@/components/carousel";
import img1 from "@/assets/zephyrImg/IMG_1.JPG";
import img2 from "@/assets/zephyrImg/IMG_2.JPG";
import img3 from "@/assets/zephyrImg/IMG_3.png";
import img4 from "@/assets/zephyrImg/IMG_4.png";
// import Heading from "@/components/ui/heading";
import Heading2 from "@/components/ui/heading2"
// import { Badge } from "@/components/ui/badge";
// import cultVid from "@/assets/zephyrImg/zephyr_ltce.mp4"


const Zephyr = () => {
  const imgArray = [img1, img2, img3, img4];
  return (
    <section>
      <div className="grid items-center justify-center md:space-y-16 space-y-6 ">
        <CarouselDemo imgArray={imgArray} />
        <Heading2 tag="ZEPHYR" />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <div
          className="col-span-1 lg:col-span-2"
        >
          <div className="max-w-xs">
              {/* <h1 className=" p-10 max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                The Cult
              </h1> */}
          </div>
          <video
            className="w-svw h-[350px] object-cover rounded-xl brightness-[55%]"
            autoPlay
            loop
            muted
          >
            <source src="/icons/zephyr_ltce.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <WobbleCard containerClassName="col-span-1 min-h-[300px] bg-pink-800 ">
          <h1 className=" p-10 max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Sports
          </h1>
        </WobbleCard>
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="max-w-sm">
            <h1 className=" p-10 max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
              Technical
            </h1>
          </div>
          {/* <Image
            src=""
            width={500}
            height={500}
            alt="linear demo image"
            className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl"
          /> */}
        </WobbleCard>
      </div>


    </section>
  );
};

export default Zephyr;
