import React from 'react'
import Heading from '@/components/ui/heading'
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/internHero.svg";

const internship = () => {
  return (
    
    <section>
    <div className=" bg-contain pt-5 md:py-10">
    <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
      <div className="flex flex-col justify-center gap-8">
        <h1 className"font-bold text-6xl">
            Connect, Network, Succeed: Your Career Journey Starts Here!
        </h1>
        <p className"text-lg md:text-xl">
          Unlock unforgettable moments with our platform, Explore Opportunities, Build Connections, and Celebrate Achievements with Us.
        </p>

          <Button size="lg" asChild className="button w-full sm:w-fit">
            <Link href="/">Upload Jobs</Link>
          </Button>
      </div>

      <Image
        src={heroImg}
        alt="hero"
        width={1000}
        height={1000}
        className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
      />
    </div>
    </div>
    <div className="pt-10  md:space-y-16 space-y-6 ">
      <Heading heading={"Explore Internship"} />
    </div>
  </section>
  )
}

export default internship