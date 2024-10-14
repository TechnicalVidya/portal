import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { images } from "@/utils/companyImages";


const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const CompanyCard = ({ img }) => {
  return (
    <figure
      className={cn(
        "relative h-32 w-64 cursor-pointer overflow-hidden rounded-xl border py-4 flex items-center justify-center",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}>
      <div className="flex justify-center items-center">
        <img  width="135" height="135" alt="" src={img} />
      </div>
    </figure>
  );
};

export const Company = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-background py-20">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((companyImage , index) => (
          <CompanyCard key={index} {...companyImage} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((companyImage , index) => (
          <CompanyCard key={index} {...companyImage} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
};
