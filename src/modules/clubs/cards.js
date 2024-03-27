import { CardWithForm } from "@/components/mainCard";
import React from "react";

const Cards = ({cardData}) => {
  return (
    <div>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardData.map((card) => (
              <CardWithForm card={card} key={card.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
