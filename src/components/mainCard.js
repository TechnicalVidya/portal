import * as React from "react";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { AnimatedTooltip } from "./ui/animated-tooltip";

export function CardWithForm({ card }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [title, setTitle] = React.useState(card?.title);

  const truncateString = (str, num) =>
    str.length > num ? str.slice(0, num) + "..." : str;

  React.useEffect(() => {
    const t = truncateString(card?.title, 16);
    setTitle(t);
  }, [card?.title]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card className="pt-6 ">
      <CardContent>
        <div key={card?.id}>
          <div
            className="relative overflow-hidden rounded-lg shadow-lg transition transform"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`absolute inset-0 bg-opacity-50 transition-opacity ${
                isHovered ? "opacity-0" : "opacity-100"
              }`}
            ></div>
            <Image
              className={`object-cover w-full h-full transition-transform duration-300 cursor-pointer ${
                isHovered ? "scale-110" : ""
              }`}
              src={card?.imageUrl}
              alt={card?.title}
              width={500} // Example width
              height={300} // Example height
              layout="responsive" // Maintain aspect ratio
            />
          </div>
          <CardTitle className="mt-4">
            <div className="w-full flex justify-between items-center">
              <p>
                {title.charAt(0).toUpperCase() + title.slice(1).toLowerCase()}
              </p>
              <div>
                {/* {console.log(console.log(card))} */}
                <Link
                  href={card.github ? card.github : ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.gitHub className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </div>
                </Link>
                <Link
                  href={card.twitter ? card.twitter : ""}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div
                    className={buttonVariants({
                      size: "icon",
                      variant: "ghost",
                    })}
                  >
                    <Icons.twitter className="h-5 w-5 fill-current" />
                    <span className="sr-only">Twitter</span>
                  </div>
                </Link>
              </div>
            </div>
          </CardTitle>
          <CardDescription variant="outline">
            - {card?.managedBy}
          </CardDescription>
          <CardDescription className="text-gray-500 text-sm mt-2">
            {card?.description}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <div className="flex flex-row items-center justify-center">
          <AnimatedTooltip items={card?.members} />
        </div>
        <Button>Join Club</Button>
      </CardFooter>
    </Card>
  );
}
