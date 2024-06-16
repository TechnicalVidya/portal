import { CarouselDemo } from "@/components/carousel";
import React, { useEffect, useState } from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "../../components/cards";
import Heading from "@/components/ui/heading";
import { AddClub } from "./club/addClub";
import { fetchAllClubs } from "@/utils/clubs";

const Clubs = () => {
  const [loading, setLoading] = useState(true);
  const [cardData, setCardData] = useState([]);
  const imgArray = [img1, img2, img3];

  useEffect(() => {
    fetchAllClubs(setCardData, setLoading);
  }, []);

  return (
    <div>
      <div className="grid items-center justify-center md:space-y-16 space-y-6">
        <CarouselDemo imgArray={imgArray} />
        <div className="flex gap-4 items-center justify-between">
          <Heading heading={"Explore Clubs"} />
          <AddClub />
        </div>
        <Cards
          cardData={cardData}
          btnText={"Join"}
          type={"clubs"}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default Clubs;
