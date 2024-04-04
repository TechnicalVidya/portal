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
      <div class="group relative flex">
          <button>
          <svg stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="currentColor" fill="none" viewBox="0 0 24 24" class="w-8 hover:scale-125 duration-200 hover:stroke-blue-500"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </button>
          </div>
        <CardDescription variant="outline">- {card.managedBy}</CardDescription>
        <Button>See Activity</Button>
      </CardFooter>
    </Card>
  );
}
