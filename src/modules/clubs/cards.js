import { CardWithForm } from "@/components/mainCard";
import React from "react";

const Cards = ({ cardData }) => {
  return (
    <div>
      <div className="md:py-16 py-8">
        <div className="container mx-auto px-4 md:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
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
