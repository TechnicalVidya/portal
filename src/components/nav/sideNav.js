"use client";

import React, { useState } from "react";
import Image from "next/image";
import MainNav from "./main-nav";
import { siteConfig } from "@/config/site";
import { IoMenuSharp } from "react-icons/io5";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { X } from "lucide-react";
// import hamburger from "@/assets/hamburger.svg"

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="max-w-[264px]">
      <Sheet open={isOpen}>
        <SheetTrigger>
          <IoMenuSharp className="text-3xl" onClick={() => setIsOpen(true)} />
        </SheetTrigger>

        <SheetContent side="right" className="border-none">
          <SheetClose
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            onClick={() => setIsOpen(false)}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </SheetClose>
          <MainNav
            items={siteConfig.mainNav}
            isVisible={true}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
          {/* <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto">
            <SheetClose asChild>
            <Button></Button>


            </SheetClose>
          </div> */}
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
