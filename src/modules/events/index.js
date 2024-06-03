// import { CarouselDemo } from "@/components/carousel";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import heroImg from "@/assets/events/hero.png"
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import Cards from "../clubs/cards";
import { cardData } from "./dummyEventData";
import Heading from "@/components/ui/heading";



export default function eventHome(){
  const imgArray = [img1, img2, img3];
  return(
    <>
      <section className=" bg-contain pt-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
            <p className="p-regular-20 md:p-regular-24">"Unlock unforgettable moments with our platform, where booking and learning about exclusive events is just a click away!".</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="/createEve">
                Create Now
              </Link>
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
      </section> 

      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <div className="grid items-center justify-center">
           <Heading heading={"Explore Events"} />
           <Cards cardData={cardData} btnText={"Participate"} />
         </div>
        
      </section>
    </>
  )
}