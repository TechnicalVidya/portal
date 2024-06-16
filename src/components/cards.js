import { CardWithForm } from "@/components/mainCard";
import React from "react";
import dynamic from "next/dynamic";
import "@aarsteinmedia/dotlottie-player";

const CardLoading = dynamic(() => import("./skeleton/cardSkeletion"), {
  ssr: false,
});

const Cards = ({ cardData, btnText, type, loading }) => {
  const renderCards = () => {
    if (loading) {
      return (
        <>
          <CardLoading />
          <div className="hidden md:block">
            <CardLoading />
          </div>
          <div className="hidden md:block">
            <CardLoading />
          </div>
        </>
      );
    }

    return cardData.map((card, index) => (
      <CardWithForm card={card} key={index} btnText={btnText} type={type} />
    ));
  };

  return (
    <div className="container mx-auto px-4 md:px-0">
      {cardData.length === 0 && !loading ? (
        <div className="w-full grid place-items-center">
          <div className="md:w-[65%] w-full">
            <dotlottie-player src={"/animations/error.json"} autoplay loop="" />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
          {renderCards()}
        </div>
      )}
    </div>
  );
};

export default Cards;
