import { CarouselDemo } from "@/components/carousel";
import React from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "./cards";

import Img1 from "@/assets/clubs/1.png";
import Img2 from "@/assets/clubs/2.png";
import Img3 from "@/assets/clubs/3.png";

const Clubs = () => {
  const imgArray = [img1, img2, img3];
  const cardData = [
    {
      id: 1,
      imageUrl: Img1,
      title: "Activity 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
      managedBy: "Vivek Sahu",
      altText: "dummy Alt",
    },
    {
      id: 2,
      imageUrl: Img2,
      title: "Activity 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
      managedBy: "Vivek Sahu",
      altText: "dummy Alt",
    },
    {
      id: 3,
      imageUrl: Img3,
      title: "Activity 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed ante justo. Integer euismod libero id mauris malesuada tincidunt.",
      managedBy: "Vivek Sahu",
      altText: "dummy Alt",
    },
  ];
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <CarouselDemo imgArray={imgArray} />
        <Cards cardData={cardData} />
      </div>
    </div>
  );
};

export default Clubs;
