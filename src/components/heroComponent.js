import { siteConfig } from "@/config/site";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const HeroComponent = () => {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Crafting Memories, Inspiring Moments,{" "}
          <br className="hidden sm:inline" />
          We Bring Your Events to Life!
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          {siteConfig.description}
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          href={siteConfig.links.members}
          // target="_blank"
          rel="noreferrer"
          className={buttonVariants()}
        >
          See Members
        </Link>
        <Link
          // target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  );
};

export default HeroComponent;
