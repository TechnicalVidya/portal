"use client";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/nav/icons";
import MainNav from "./main-nav";
import { ThemeToggle } from "./toggle-theme";
import { NavAlert } from "./nav-alert";
import { useSelector } from "react-redux";
import { AvatarDemo } from "../avatar";
import { useEffect } from "react";
import MobileNav from "./sideNav"

export function SiteHeader() {
  const { user } = useSelector((state) => state.user);
  
  // console.log(user);
  return (
    <header className="backdrop-blur-sm bg-backgroundOpac top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            {/* <div className="md:flex hidden">
              <NavAlert />
            </div> */}
            <ThemeToggle />
            {user?.authenticated && <AvatarDemo imgURI={user.avatar} />}
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  );
}
