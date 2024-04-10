import React from "react";
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "../clubs/cards";
import Img1 from "@/assets/clubs/1.png";
import Img2 from "@/assets/clubs/2.png";
import Img3 from "@/assets/clubs/3.png";


const cardData = [
  {
    id: 1,
    imageUrl: Img1,
    title: "General Secretary",
    managedBy: "Divesh -General Secretary",
    altText: "dummy Alt",
  },
  {
    id: 2,
    imageUrl: Img2,
    title: "Co GS ",
    managedBy: "Divesh",
    altText: "dummy Alt",
  },
  {
    id: 3,
    imageUrl: Img3,
    title: "CO GS",
    managedBy: "Divesh",
    altText: "dummy Alt",
  },
];

const Events = () => {
  const imgArray = [img1, img2, img3];
  return (
    <div>

      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-5 mb-5">Meet The Student's Council</h1>
        <div className="w-2/3"> {/* Adjust the width here */}
          <Cards cardData={cardData} showButton={false} /> {/* Pass showButton prop to disable the button */}
        </div>
      </div>
      
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-5 mb-5">Cultural Team</h1>
        <div className="w-2/3"> {/* Adjust the width here */}
          <Cards cardData={cardData} showButton={false} /> {/* Pass showButton prop to disable the button */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-5 mb-5">Technical Team</h1>
        <div className="w-2/3"> {/* Adjust the width here */}
          <Cards cardData={cardData} showButton={false} /> {/* Pass showButton prop to disable the button */}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold mt-5 mb-5">Sports Team</h1>
        <div className="w-2/3"> {/* Adjust the width here */}
          <Cards cardData={cardData} btnText={false} /> {/* Pass showButton prop to disable the button */}
        </div>
      </div>

    </div>
  );
};

export default Events;