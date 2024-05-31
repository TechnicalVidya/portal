import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";

const HeroComponent = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex items-center justify-center">
        <Badge
          className={
            "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
          }>
          <p>🎉</p>
          <p>Streamlined RSVPs, interactive schedules!</p>
        </Badge>
      </div>

      <div className="flex flex-col items-center gap-4">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
          Technical Vidya
          <br className="hidden sm:inline" />
          We Bring Your skills to Life!
        </h1>
        <p className="max-w-[700px] w-full text-lg text-muted-foreground text-center">
          {siteConfig.description}
        </p>
      </div>

      <div className="flex justify-center mt-3">
        <div className="flex gap-4">
          <Link href="/members" className={buttonVariants()}>
            See Members
          </Link>
          <Link
            href="/login"
            className={buttonVariants({ variant: "outline" })}>
            Login
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
