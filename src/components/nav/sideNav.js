'use client'

import React from 'react'
import Image from "next/image";
import MainNav from "./main-nav";
import { siteConfig } from "@/config/site";
import SheetClose from "@/components/ui/sheet"


import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import hamburger from "@/assets/hamburger.svg"
  
const nav = () => {
  return (
    <section className=" max-w-[264px]">
        <Sheet>
            <SheetTrigger>
                    <Image 
                    src={hamburger}
                    height={36}
                    width={36}
                    className="cursor-pointer sm:hidden dark:fill-white"
                    />
            </SheetTrigger>

            <SheetContent side='right' className="border-none"> 
            <MainNav items={siteConfig.mainNav} />
            <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            {/* <SheetClose asChild>
              <section className=" flex h-full flex-col gap-6 pt-16 text-white">
             

              </section>
            </SheetClose> */}
          </div>
            
            </SheetContent>
        </Sheet>

    </section>
  )
}

export default nav
