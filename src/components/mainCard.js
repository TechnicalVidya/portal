'use client'
import * as React from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { Icons } from "./icons";
import { useRouter } from "next/navigation";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";



export function CardWithForm({ card, btnText, type, functionToBeExecuted, eventId }) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [title, setTitle] = React.useState(card?.title);
  const router = useRouter()
  const { user } = useSelector((state) => state.user)

  const truncateString = (str, num) => {
    return str.length > num ? str.slice(0, num) + "..." : str;
  };

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


  const deleteEvent = async () => {
    try {
      const response = await axios.delete(`/api/event/delete/${eventId}`);
      console.log(response);
      if (response.data.success) {
        toast.success("Event Deleted successfully!");
        router.push('/events')
      } else {
        toast.error("Failed to Delete Event. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
      console.error("Error:", error);
    }
  }
  console.log(eventId)
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
              className={`absolute inset-0 bg-opacity-50 transition-opacity ${isHovered ? "opacity-0" : "opacity-100"
                }`}
            ></div>
            <img
              className={`object-cover aspect-square transition-transform duration-300 cursor-pointer ${isHovered ? "scale-110" : ""
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
              {type != "internship" && (
                <div>
                  {card.github && <Link
                    href={card.github}
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
                  </Link>}

                  {card.twitter && <Link
                    href={card.twitter}
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
                  </Link>}
                </div>
              )}
            </div>
          </CardTitle>
          {type != "internship" ? (
            <CardDescription variant="outline">
              - {card?.managedBy}
            </CardDescription>
          ) : (
            <CardDescription
              variant="outline"
              className={`text-${card.status.includes("pending") ? "green" : "red"
                }-500 font-bold`}
            >
              {card.status}
            </CardDescription>
          )}
          <CardDescription className="text-gray-500 text-sm mt-2 line-clamp-2">
            {truncateString(card?.description, 130)}
          </CardDescription>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        {type != "internship" && (
          <div className="flex flex-row items-center justify-center">
            <AnimatedTooltip items={card?.members} />
          </div>
        )}
        {type != "internship" ? (
          type === "events" ? (
            <div className="flex items-center gap-2">
              <>
                {
                  user?.authenticated ?
                    (
                      <div className="w-full justify-center flex flex-col items-center">
                        <div className="flex justify-end w-full">
                          <Button onClick={deleteEvent}>Delete</Button>
                        </div>
                      </div>
                    )
                    :
                    (
                      <p>
                        NOt
                      </p>
                    )
                }
              </>

              <Button
                onClick={() => {
                  console.log(functionToBeExecuted)
                  if (functionToBeExecuted) {
                    console.log('first')
                    functionToBeExecuted(card);
                  }
                }}
              >
                {btnText}
              </Button>
            </div>
          ) : (
            <Link href={`/${type}/${card.id}`}>
              <Button
                onClick={() => {
                  if (functionToBeExecuted) functionToBeExecuted(id);
                }}
              >
                {btnText}
              </Button>
            </Link>
          )
        ) : (
          card.url && <Button variant="outline" type="button"> <Link
            href={card.url}
            target="_blank"
            rel="noreferrer"
          >
            <div className="hover:text-blue-500 hover:cursor-pointer hover:italic">
              Click Here
            </div>
          </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
