import HeroComponent from "@/components/hero/heroComponent";
// import { BentoGridDemo } from "./bentoGrid";
import Testimonials from "./testimonials";
import Stats from "./stats";
import RecentEvents from "./recentEvent";
import ContactUs from "./contactUs";
import { Company } from "@/components/marqeecomp";

export default function Home() {
  return (
    <div>
      <HeroComponent />
      <div className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
        <Company />
      </div>
      <RecentEvents />
      <Stats />
      <Testimonials />
      <ContactUs />
    </div>
  );
}
