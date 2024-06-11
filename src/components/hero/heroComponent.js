import React from "react";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { Badge } from "../ui/badge";
import GradualSpacingText from "../gradualSpacingText";
import { useSelector } from "react-redux";

const HeroComponent = () => {
  const { user } = useSelector((sta) => sta.user);
  console.log(user)
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex flex-col gap-4 items-center justify-center">
        <Badge
          className={
            "bg-secondary hover:bg-muted text-sm flex justify-between gap-3 text-muted-foreground"
          }>
          <p>🎉</p>
          <GradualSpacingText
            text={"Streamlined RSVPs, interactive schedules!"}
            className={" tracking-[-0.28em] "}
          />
        </Badge>
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="grid scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl text-center">
          <GradualSpacingText
            text={"Technical Vidya"}
            className={" tracking-[-0.12em]"}
          />
          <GradualSpacingText
            text={"We Bring Your skills to Life!"}
            className={" tracking-[-0.12em] flex-wrap"}
          />
        </div>
        <p className="max-w-[700px] w-full text-lg text-muted-foreground text-center">
          {siteConfig.description}
        </p>
      </div>

      <div className="flex justify-center mt-3">
        <div className="flex gap-4">
          <Link href="/members" className={buttonVariants()}>
            See Members
          </Link>
          {user === undefined || user === null && (
            <Link
              href="/login"
              className={buttonVariants({ variant: "outline" })}>
              Login
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
