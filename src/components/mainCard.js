import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export function CardWithForm({ card }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [title, setTitle] = React.useState(card.title);

  const truncateString = (str, num) =>
    str.length > num ? str.slice(0, num) + '...' : str;

  React.useEffect(() => {
    const t = truncateString(card.title, 10);
    setTitle(t)
  }, [card.title]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card className="pt-6 ">
      <CardContent>
        <div key={card.id}>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg transition duration-300 transform"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`absolute inset-0 bg-opacity-50 transition-opacity ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <Image
              className={`object-cover w-full h-full transition-transform ${
                isHovered ? "scale-110" : ""
              }`}
              src={card.imageUrl}
              alt={card.altText}
              width={500} // Example width
              height={300} // Example height
              layout="responsive" // Maintain aspect ratio
            />
          </div>
          <CardTitle className="mt-4">{title}</CardTitle>
          <CardDescription className="text-gray-500 text-sm mt-2">
            {card.description}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <CardDescription variant="outline">- {card.managedBy}</CardDescription>
        <Button>See Activity</Button>
      </CardFooter>
    </Card>
  );
}
