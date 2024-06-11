import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const reviews = [
    {
      name: "Aarav",
      username: "@aarav",
      body: "This product exceeded my expectations. Absolutely fantastic!",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      location: "India",
    },
    {
      name: "Anaya",
      username: "@anaya",
      body: "I'm really impressed with the quality. Highly recommended!",
      img: "https://randomuser.me/api/portraits/women/2.jpg",
      location: "India",
    },
    {
      name: "Vikram",
      username: "@vikram",
      body: "A must-have item! I'm completely satisfied with this purchase.",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
      location: "India",
    },
    {
      name: "Priya",
      username: "@priya",
      body: "Exceptional quality and great customer service. Worth every penny!",
      img: "https://randomuser.me/api/portraits/women/4.jpg",
      location: "India",
    },
    {
      name: "Rohit",
      username: "@rohit",
      body: "Five stars! This product has truly impressed me.",
      img: "https://randomuser.me/api/portraits/men/5.jpg",
      location: "India",
    },
    {
      name: "Sneha",
      username: "@sneha",
      body: "Fantastic! I would definitely buy this again.",
      img: "https://randomuser.me/api/portraits/women/6.jpg",
      location: "India",
    },
  ];
  

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

export const TestMarquee = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
